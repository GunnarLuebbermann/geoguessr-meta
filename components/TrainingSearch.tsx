'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import ListRow from './ListRow'

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
  const key = normalize(query).trim()

  const results = useMemo(() => {
    const terms = key.split(/\s+/).filter(Boolean)
    if (terms.length === 0) return entries.map((entry) => ({ entry, subs: [] as SearchEntry['subcategories'] }))
    const matches = (text: string) => terms.every((t) => text.includes(t))
    return entries.flatMap((entry) => {
      const subs = entry.subcategories.filter((s) => matches(normalize(`${s.title} ${s.text}`)))
      const own = matches(normalize(`${entry.title} ${entry.description} ${entry.text}`))
      return own || subs.length > 0 ? [{ entry, subs }] : []
    })
  }, [entries, key])

  return (
    <>
      <div className="toolbar">
        <input
          className="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics or clues (e.g. Japan, yellow, Cyrillic)"
          aria-label="Search training topics"
        />
      </div>

      {key && <p className="result-count">{results.length} {results.length === 1 ? 'topic' : 'topics'}</p>}

      {results.length === 0 ? (
        <p className="empty">No topics match “{query}”.</p>
      ) : (
        <div className="list">
          {results.map(({ entry, subs }) => (
            <div key={entry.slug}>
              <ListRow
                href={`/training/${entry.slug}`}
                icon={entry.emoji}
                title={entry.title}
                subtitle={entry.description}
                meta={entry.subcategories.length > 0 && !key ? `${entry.subcategories.length} parts` : undefined}
              />
              {subs.length > 0 && (
                <div className="sub-links">
                  {subs.map((s) => (
                    <Link key={s.slug} href={`/training/${entry.slug}/${s.slug}`} className="chip">{s.title}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
