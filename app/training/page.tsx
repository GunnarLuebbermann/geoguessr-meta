import Link from 'next/link'
import { categories } from '../lib/content'
import { ContentBlock } from '../lib/types'
import TrainingSearch, { SearchEntry } from '../../components/TrainingSearch'

function blocksToText(blocks: ContentBlock[] = []): string {
  const parts: string[] = []
  for (const b of blocks) {
    switch (b.type) {
      case 'heading': parts.push(b.text); break
      case 'text': parts.push(b.html); break
      case 'list': parts.push(...b.items); break
      case 'note':
      case 'warning': parts.push(b.title ?? '', b.html); break
      case 'image': parts.push(b.caption ?? ''); break
      case 'imageGrid': b.columns.forEach((c) => parts.push(c.title ?? '', c.caption ?? '')); break
      case 'table': parts.push(...b.headers, ...b.rows.flat()); break
    }
  }
  return parts.join(' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
}

const entries: SearchEntry[] = categories.map((c) => ({
  slug: c.slug,
  title: c.title,
  emoji: c.emoji,
  description: c.description,
  text: blocksToText(c.content?.blocks),
  subcategories: (c.subcategories ?? []).map((s) => ({
    slug: s.slug,
    title: s.title,
    text: blocksToText(s.content.blocks),
  })),
}))

export default function TrainingPage() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <Link href="/" className="back-link">← Back to home</Link>
          <h1>Training</h1>
          <p className="description">
            Choose a training topic below and read practical Geoguessr information for each category.
          </p>
        </div>
      </section>

      <TrainingSearch entries={entries} />
    </main>
  )
}
