import type { Metadata } from 'next'
import PageHeader from '../../components/PageHeader'
import CountryBrowser, { CountryItem } from '../../components/CountryBrowser'
import { getCountryGuides } from '../lib/country-clues'
import { continents, flag } from '../lib/countries'

export const metadata: Metadata = { title: 'Countries' }

export default function CountriesPage() {
  const items: CountryItem[] = getCountryGuides().map(({ country, clueCount }) => ({
    slug: country.slug,
    name: country.name,
    flag: flag(country.iso),
    continent: country.continent,
    clueCount,
  }))

  return (
    <main className="container">
      <PageHeader
        icon="🌍"
        title="Countries"
        description="Every clue in GeoMeta, sorted by country. Pick a country to see its car, plates, signs, bollards, language and more."
      />
      <CountryBrowser items={items} continents={continents.filter((c) => items.some((i) => i.continent === c))} />
    </main>
  )
}
