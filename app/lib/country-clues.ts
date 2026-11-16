// Collects every clue in the app for one country (Plonkit-style country guide).

import { allQuestions } from './quiz-data'
import { countryCodes } from './data/phone-codes'
import { categories } from './content'
import { blocksToText } from './text'
import { Country, countries, resolveCountries } from './countries'

export type Clue = { image?: string; title: string; text?: string }

export type ClueSection = {
  id: string
  title: string
  emoji: string
  layout: 'cards' | 'facts'
  clues: Clue[]
  quiz?: string
}

const imageSections: { category: string; id: string; title: string; emoji: string }[] = [
  { category: 'car-meta', id: 'car', title: 'Google Car', emoji: '🚗' },
  { category: 'license-plate', id: 'plate', title: 'License Plate', emoji: '🪪' },
  { category: 'sign', id: 'sign', title: 'Signs', emoji: '🚸' },
  { category: 'bollard', id: 'bollard', title: 'Bollards & Guardrails', emoji: '🔶' },
  { category: 'roadside', id: 'roadside', title: 'Roadside', emoji: '🛣️' },
]

// Languages from the language quiz → countries where they are the main clue
const languageCountries: Record<string, string[]> = {
  Albanian: ['Albania'], Basque: ['Spain'], Catalan: ['Spain', 'Andorra'], Croatian: ['Croatia'], Czech: ['Czechia'],
  Danish: ['Denmark'], Dutch: ['Netherlands', 'Belgium'], Estonian: ['Estonia'], Finnish: ['Finland'],
  French: ['France', 'Belgium', 'Switzerland', 'Canada'], Hungarian: ['Hungary'], Icelandic: ['Iceland'],
  Italian: ['Italy', 'Switzerland'], Latvian: ['Latvia'], Lithuanian: ['Lithuania'], Maltese: ['Malta'],
  Norwegian: ['Norway'], Polish: ['Poland'], Portuguese: ['Portugal', 'Brazil'], Romanian: ['Romania'],
  Slovak: ['Slovakia'], Slovenian: ['Slovenia'], Spanish: ['Spain'], Swedish: ['Sweden', 'Finland'],
  Turkish: ['Turkey'], Welsh: ['United Kingdom'], Galicia: ['Spain'], Wales: ['United Kingdom'],
}

/** Turn a language quiz question into a short statement. */
function languageFact(prompt: string, answer: string): Clue | null {
  let m: RegExpMatchArray | null
  if ((m = prompt.match(/does "(.+)" mean street/))) return { title: `"${m[1]}" = street`, text: answer }
  if ((m = prompt.match(/uses "(.+)" for "and"/))) return { title: `"${m[1]}" = and`, text: answer }
  if ((m = prompt.match(/unique characters?:? (.+)\?$/))) return { title: m[1].replace(/^the unique character:\s*/, ''), text: `Unique to ${answer}` }
  if ((m = prompt.match(/Cyrillic uses:? (.+)\?$/))) return { title: m[1], text: `${answer} Cyrillic` }
  if ((m = prompt.match(/^"(.+)" \((.+)\)/))) return { title: `"${m[1]}" = ${m[2]}`, text: answer }
  if ((m = prompt.match(/^Which language uses (.+)\?$/))) return { title: m[1], text: answer }
  return { title: prompt.replace(/\?$/, ''), text: answer }
}

function sectionsFor(country: Country): ClueSection[] {
  const matches = (name: string) => resolveCountries(name).some((x) => x.slug === country.slug)
  const sections: ClueSection[] = []

  // Language
  const lang: Clue[] = []
  for (const q of allQuestions) {
    if (q.category !== 'language') continue
    const targets = languageCountries[q.answer] ?? [q.answer]
    if (targets.some(matches)) {
      const fact = languageFact(q.prompt, q.answer)
      if (fact) lang.push(fact)
    }
  }
  if (lang.length) sections.push({ id: 'language', title: 'Language', emoji: '🗣️', layout: 'facts', clues: lang, quiz: 'language' })

  // Phone code
  const phone = countryCodes.filter((p) => matches(p.country)).map((p) => ({ title: p.code, text: 'Country calling code' }))
  if (phone.length) sections.push({ id: 'phone', title: 'Phone Code', emoji: '📞', layout: 'facts', clues: phone, quiz: 'telephone' })

  // Image clues from the quiz pool
  for (const s of imageSections) {
    const clues = allQuestions
      .filter((q) => q.category === s.category && q.image && matches(q.answer))
      .map((q) => ({
        image: q.image,
        title: (q.prompt.match(/this (.+)\?$/)?.[1] ?? s.title).replace(/^./, (ch) => ch.toUpperCase()),
        text: q.clue,
      }))
    if (clues.length) sections.push({ id: s.id, title: s.title, emoji: s.emoji, layout: 'cards', clues, quiz: s.category })
  }

  // Japan: regional utility poles
  if (country.slug === 'japan') {
    const poles = allQuestions
      .filter((q) => q.category === 'japan-pole' && q.image)
      .map((q) => ({ image: q.image, title: q.answer, text: q.clue }))
    if (poles.length) sections.push({ id: 'poles', title: 'Utility Poles by Region', emoji: '🔌', layout: 'cards', clues: poles, quiz: 'japan-pole' })
  }

  // Brands
  const brands = allQuestions
    .filter((q) => q.category === 'company' && matches(q.answer))
    .map((q) => {
      const m = q.prompt.match(/"(.+)" (.+)\./)
      return { title: m?.[1] ?? q.prompt, text: m?.[2] }
    })
  if (brands.length) sections.push({ id: 'brands', title: 'Brands', emoji: '🏢', layout: 'facts', clues: brands, quiz: 'company' })

  return sections
}

export type TrainingLink = { href: string; title: string }

/** Training topics whose text mentions the country. */
function trainingLinksFor(country: Country): TrainingLink[] {
  const names = [country.name, ...(country.aliases ?? [])].map((n) => n.toLowerCase())
  const mentions = (text: string) => {
    const t = ` ${text.toLowerCase()} `
    return names.some((n) => new RegExp(`[^a-z]${n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^a-z]`).test(t))
  }
  const links: TrainingLink[] = []
  for (const cat of categories) {
    if (cat.content && mentions(blocksToText(cat.content.blocks))) links.push({ href: `/training/${cat.slug}`, title: `${cat.emoji} ${cat.title}` })
    for (const sub of cat.subcategories ?? []) {
      if (mentions(`${sub.title} ${blocksToText(sub.content.blocks)}`)) {
        links.push({ href: `/training/${cat.slug}/${sub.slug}`, title: `${cat.emoji} ${cat.title} › ${sub.title}` })
      }
    }
  }
  return links
}

export type CountryGuide = { country: Country; sections: ClueSection[]; training: TrainingLink[]; clueCount: number }

let cache: CountryGuide[] | null = null

export function getCountryGuides(): CountryGuide[] {
  if (!cache) {
    cache = countries
      .map((country) => {
        const sections = sectionsFor(country)
        const training = trainingLinksFor(country)
        return { country, sections, training, clueCount: sections.reduce((n, s) => n + s.clues.length, 0) }
      })
      .filter((g) => g.clueCount > 0 || g.training.length > 0)
  }
  return cache
}

export function getCountryGuide(slug: string): CountryGuide | undefined {
  return getCountryGuides().find((g) => g.country.slug === slug)
}
