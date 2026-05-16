import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategoryBySlug, categories } from '../../lib/content'
import ContentRenderer from '../../../components/ContentRenderer'

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const cat = getCategoryBySlug(category)
  if (!cat) notFound()

  return (
    <main className="container">
      <section className="hero">
        <Link href="/training" className="back-link">← Back to Training</Link>
        <h1>{cat.emoji} {cat.title}</h1>
        {cat.description && <p className="description">{cat.description}</p>}
      </section>

      {cat.subcategories && cat.subcategories.length > 0 && (
        <section className="subcategory-grid">
          {cat.subcategories.map((sub) => (
            <Link key={sub.slug} href={`/training/${cat.slug}/${sub.slug}`} className="subcategory-card card-link">
              <h3>{sub.title}</h3>
            </Link>
          ))}
        </section>
      )}

      {cat.content && (
        <section className="info-section">
          <ContentRenderer blocks={cat.content.blocks} />
        </section>
      )}
    </main>
  )
}
