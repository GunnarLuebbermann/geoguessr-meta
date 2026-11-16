'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

export type CountryItem = { slug: string; name: string; flag: string; continent: string; clueCount: number }

function normalize(s: string) {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

export default function CountryBrowser({ items, continents }: { items: CountryItem[]; continents: string[] }) {
  const [query, setQuery] = useState('')
  const [continent, setContinent] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    return items.filter((c) => (!continent || c.continent === continent) && (!q || normalize(c.name).includes(q)))
  }, [items, query, continent])

  const groups = continents
    .map((name) => ({ name, items: filtered.filter((c) => c.continent === name) }))
    .filter((g) => g.items.length > 0)

  return (
    <>
      <div className="toolbar">
        <input
          className="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${items.length} countries…`}
          aria-label="Search countries"
        />
        <div className="chips" role="group" aria-label="Filter by continent">
          <button type="button" className={`chip${continent === null ? ' active' : ''}`} onClick={() => setContinent(null)}>All</button>
          {continents.map((name) => (
            <button
              key={name}
              type="button"
              className={`chip${continent === name ? ' active' : ''}`}
              onClick={() => setContinent(continent === name ? null : name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {groups.length === 0 && <p className="empty">No country matches “{query}”.</p>}

      {groups.map((g) => (
        <section key={g.name} className="section">
          <h2 className="section-title">{g.name} <span className="count">{g.items.length}</span></h2>
          <div className="country-grid">
            {g.items.map((c) => (
              <Link key={c.slug} href={`/countries/${c.slug}`} className="country-tile">
                <span className="country-flag" aria-hidden>{c.flag}</span>
                <span className="country-name">{c.name}</span>
                {c.clueCount > 0 && <span className="country-count">{c.clueCount}</span>}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
