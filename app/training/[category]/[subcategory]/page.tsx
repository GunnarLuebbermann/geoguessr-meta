import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategoryBySlug, categories } from '../../../lib/content'
import ContentRenderer from '../../../../components/ContentRenderer'

export function generateStaticParams() {
  const params: { category: string; subcategory: string }[] = []
  for (const cat of categories) {
    if (cat.subcategories) {
      for (const sub of cat.subcategories) {
        params.push({ category: cat.slug, subcategory: sub.slug })
      }
    }
  }
  return params
}

export default async function SubcategoryPage({ params }: { params: Promise<{ category: string; subcategory: string }> }) {
  const { category, subcategory } = await params
  const cat = getCategoryBySlug(category)
  if (!cat) notFound()

  const sub = cat.subcategories?.find((s) => s.slug === subcategory)
  if (!sub) notFound()

  return (
    <main className="container">
      <section className="hero">
        <Link href={`/training/${cat.slug}`} className="back-link">← Back to {cat.title}</Link>
        <h1>{sub.content.title}</h1>
        {sub.content.description && <p className="description">{sub.content.description}</p>}
      </section>

      <section className="info-section">
        <ContentRenderer blocks={sub.content.blocks} />
      </section>
    </main>
  )
}
