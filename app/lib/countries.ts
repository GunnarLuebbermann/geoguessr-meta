// Country registry used by the Plonkit-style country guide.

export type Continent = 'Europe' | 'Asia' | 'Middle East' | 'Africa' | 'North & Central America' | 'South America' | 'Oceania'

export const continents: Continent[] = ['Europe', 'Asia', 'Middle East', 'Africa', 'North & Central America', 'South America', 'Oceania']

export type Country = {
  slug: string
  name: string
  iso: string
  continent: Continent
  /** Other spellings used in the data (quiz answers, tables) */
  aliases?: string[]
}

const c = (name: string, iso: string, continent: Continent, aliases?: string[]): Country => ({
  slug: name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  name,
  iso,
  continent,
  aliases,
})

export const countries: Country[] = [
  // Europe
  c('Albania', 'AL', 'Europe'),
  c('Andorra', 'AD', 'Europe'),
  c('Austria', 'AT', 'Europe'),
  c('Belarus', 'BY', 'Europe'),
  c('Belgium', 'BE', 'Europe'),
  c('Bulgaria', 'BG', 'Europe'),
  c('Croatia', 'HR', 'Europe'),
  c('Cyprus', 'CY', 'Europe'),
  c('Czechia', 'CZ', 'Europe'),
  c('Denmark', 'DK', 'Europe'),
  c('Estonia', 'EE', 'Europe'),
  c('Faroe Islands', 'FO', 'Europe'),
  c('Finland', 'FI', 'Europe'),
  c('France', 'FR', 'Europe'),
  c('Germany', 'DE', 'Europe'),
  c('Greece', 'GR', 'Europe'),
  c('Hungary', 'HU', 'Europe'),
  c('Iceland', 'IS', 'Europe'),
  c('Ireland', 'IE', 'Europe'),
  c('Isle of Man', 'IM', 'Europe'),
  c('Italy', 'IT', 'Europe'),
  c('Latvia', 'LV', 'Europe'),
  c('Lithuania', 'LT', 'Europe'),
  c('Luxembourg', 'LU', 'Europe'),
  c('Malta', 'MT', 'Europe'),
  c('Montenegro', 'ME', 'Europe'),
  c('Netherlands', 'NL', 'Europe'),
  c('North Macedonia', 'MK', 'Europe'),
  c('Norway', 'NO', 'Europe'),
  c('Poland', 'PL', 'Europe'),
  c('Portugal', 'PT', 'Europe'),
  c('Romania', 'RO', 'Europe'),
  c('Russia', 'RU', 'Europe'),
  c('Serbia', 'RS', 'Europe'),
  c('Slovakia', 'SK', 'Europe'),
  c('Slovenia', 'SI', 'Europe'),
  c('Spain', 'ES', 'Europe'),
  c('Sweden', 'SE', 'Europe'),
  c('Switzerland', 'CH', 'Europe'),
  c('Turkey', 'TR', 'Europe'),
  c('Ukraine', 'UA', 'Europe'),
  c('United Kingdom', 'GB', 'Europe', ['UK', 'Wales', 'Scotland']),
  // Asia
  c('Bangladesh', 'BD', 'Asia'),
  c('Cambodia', 'KH', 'Asia'),
  c('India', 'IN', 'Asia'),
  c('Indonesia', 'ID', 'Asia'),
  c('Japan', 'JP', 'Asia'),
  c('Kazakhstan', 'KZ', 'Asia'),
  c('Kyrgyzstan', 'KG', 'Asia'),
  c('Laos', 'LA', 'Asia'),
  c('Malaysia', 'MY', 'Asia'),
  c('Mongolia', 'MN', 'Asia'),
  c('Pakistan', 'PK', 'Asia'),
  c('Philippines', 'PH', 'Asia', ['The Philippines']),
  c('Singapore', 'SG', 'Asia'),
  c('South Korea', 'KR', 'Asia'),
  c('Sri Lanka', 'LK', 'Asia'),
  c('Taiwan', 'TW', 'Asia'),
  c('Thailand', 'TH', 'Asia'),
  c('Vietnam', 'VN', 'Asia'),
  // Middle East
  c('Israel', 'IL', 'Middle East'),
  c('Jordan', 'JO', 'Middle East'),
  c('Qatar', 'QA', 'Middle East'),
  c('UAE', 'AE', 'Middle East', ['United Arab Emirates']),
  // Africa
  c('Botswana', 'BW', 'Africa'),
  c('Ghana', 'GH', 'Africa'),
  c('Kenya', 'KE', 'Africa'),
  c('Madagascar', 'MG', 'Africa'),
  c('Nigeria', 'NG', 'Africa'),
  c('Réunion', 'RE', 'Africa'),
  c('Rwanda', 'RW', 'Africa'),
  c('Senegal', 'SN', 'Africa'),
  c('South Africa', 'ZA', 'Africa'),
  c('Tunisia', 'TN', 'Africa'),
  c('Uganda', 'UG', 'Africa'),
  // North & Central America
  c('Bermuda', 'BM', 'North & Central America'),
  c('Canada', 'CA', 'North & Central America', ['Quebec (Canada)', 'Quebec']),
  c('Costa Rica', 'CR', 'North & Central America'),
  c('Curaçao', 'CW', 'North & Central America'),
  c('Guatemala', 'GT', 'North & Central America'),
  c('Mexico', 'MX', 'North & Central America'),
  c('Panama', 'PA', 'North & Central America'),
  c('Puerto Rico', 'PR', 'North & Central America'),
  c('USA', 'US', 'North & Central America', ['United States']),
  c('US Virgin Islands', 'VI', 'North & Central America'),
  // South America
  c('Argentina', 'AR', 'South America'),
  c('Bolivia', 'BO', 'South America'),
  c('Brazil', 'BR', 'South America'),
  c('Chile', 'CL', 'South America'),
  c('Colombia', 'CO', 'South America'),
  c('Ecuador', 'EC', 'South America'),
  c('Paraguay', 'PY', 'South America'),
  c('Peru', 'PE', 'South America'),
  c('Uruguay', 'UY', 'South America'),
  // Oceania
  c('American Samoa', 'AS', 'Oceania'),
  c('Australia', 'AU', 'Oceania'),
  c('Christmas Island', 'CX', 'Oceania'),
  c('Guam', 'GU', 'Oceania'),
  c('New Zealand', 'NZ', 'Oceania'),
  c('Northern Mariana Islands', 'MP', 'Oceania'),
]

const byName = new Map<string, Country>()
for (const country of countries) {
  byName.set(country.name.toLowerCase(), country)
  for (const a of country.aliases ?? []) byName.set(a.toLowerCase(), country)
}

/** Resolve a name from the data to countries ("USA / Canada" → both). */
export function resolveCountries(name: string): Country[] {
  const direct = byName.get(name.toLowerCase())
  if (direct) return [direct]
  return name
    .split(/\s*(?:\/|&|,| and )\s*/)
    .map((part) => byName.get(part.toLowerCase()))
    .filter((x): x is Country => !!x)
}

export function getCountry(slug: string): Country | undefined {
  return countries.find((x) => x.slug === slug)
}

/** Flag emoji from ISO 3166-1 alpha-2 code */
export function flag(iso: string): string {
  return iso.toUpperCase().replace(/./g, (ch) => String.fromCodePoint(127397 + ch.charCodeAt(0)))
}
