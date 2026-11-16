'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

export type SearchEntry = {
  slug: string
  title: string
  emoji: string
  description: string
  text: string
  subcategories: { slug: string; title: string; text: string }[]
}

function normalize(s: string) {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

export default function TrainingSearch({ entries }: { entries: SearchEntry[] }) {
  const [query, setQuery] = useState('')
  const terms = normalize(query).split(/\s+/).filter(Boolean)

  const results = useMemo(() => {
    if (terms.length === 0) return entries.map((e) => ({ entry: e, subs: [] as SearchEntry['subcategories'] }))
    const matches = (text: string) => terms.every((t) => text.includes(t))
    return entries
      .map((e) => {
        const subs = e.subcategories.filter((s) => matches(normalize(`${s.title} ${s.text}`)))
        const own = matches(normalize(`${e.title} ${e.description} ${e.text}`))
        return own || subs.length > 0 ? { entry: e, subs } : null
      })
      .filter((r): r is NonNullable<typeof r> => r !== null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries, terms.join(' ')])

  return (
    <>
      <div className="training-search">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics, countries or clues… (e.g. Japan, yellow, Cyrillic)"
          aria-label="Search training topics"
        />
        {terms.length > 0 && (
          <span className="training-search-count">
            {results.length} {results.length === 1 ? 'topic' : 'topics'}
          </span>
        )}
      </div>

      {results.length === 0 ? (
        <p className="description">No topics match “{query}”.</p>
      ) : (
        <section className="training-grid">
          {results.map(({ entry, subs }) => (
            <div key={entry.slug} className="training-card training-card-wrap">
              <Link href={`/training/${entry.slug}`} className="training-card-main">
                <h2>{entry.emoji} {entry.title}</h2>
                <p>{entry.description}</p>
              </Link>
              {subs.length > 0 && (
                <ul className="training-card-subs">
                  {subs.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/training/${entry.slug}/${s.slug}`}>→ {s.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}
    </>
  )
}
