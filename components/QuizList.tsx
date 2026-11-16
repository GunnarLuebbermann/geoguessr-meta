'use client'

import { useEffect, useState } from 'react'
import ListRow from './ListRow'
import type { QuizCategory } from '../app/lib/quiz-types'

export default function QuizList({ categories }: { categories: QuizCategory[] }) {
  const [best, setBest] = useState<Record<string, number>>({})

  useEffect(() => {
    const result: Record<string, number> = {}
    try {
      for (const c of categories) {
        const raw = window.localStorage.getItem(`quiz-best:${c.slug}`)
        if (raw !== null) result[c.slug] = Number(raw)
      }
    } catch {
      /* storage unavailable */
    }
    setBest(result)
  }, [categories])

  return (
    <div className="list">
      {categories.map((c) => (
        <ListRow
          key={c.slug}
          href={`/quiz/${c.slug}`}
          icon={c.emoji}
          title={c.title}
          subtitle={c.description}
          meta={
            <>
              <span className="pill">{c.questionCount} Q</span>
              {best[c.slug] !== undefined && <span className="pill pill-best">⭐ {best[c.slug]}%</span>}
            </>
          }
        />
      ))}
    </div>
  )
}
