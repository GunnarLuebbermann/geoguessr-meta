import type { Metadata } from 'next'
import { categories } from '../lib/content'
import { blocksToText } from '../lib/text'
import PageHeader from '../../components/PageHeader'
import TrainingSearch, { SearchEntry } from '../../components/TrainingSearch'

export const metadata: Metadata = { title: 'Training' }

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
      <PageHeader icon="📚" title="Training" description="Topic-by-topic reference: languages, poles, signs, bollards and more." />
      <TrainingSearch entries={entries} />
    </main>
  )
}
