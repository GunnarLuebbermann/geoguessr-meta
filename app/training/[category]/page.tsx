import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, categories } from '../../lib/content'
import ContentRenderer from '../../../components/ContentRenderer'
import PageHeader from '../../../components/PageHeader'
import ListRow from '../../../components/ListRow'

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  return { title: getCategoryBySlug(category)?.title ?? 'Training' }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const cat = getCategoryBySlug(category)
  if (!cat) notFound()

  return (
    <main className="container">
      <PageHeader crumbs={[{ href: '/training', label: 'Training' }]} icon={cat.emoji} title={cat.title} description={cat.description} />

      {cat.subcategories && cat.subcategories.length > 0 && (
        <section className="section">
          <div className="list">
            {cat.subcategories.map((sub) => (
              <ListRow key={sub.slug} href={`/training/${cat.slug}/${sub.slug}`} title={sub.title} />
            ))}
          </div>
        </section>
      )}

      {cat.content && <ContentRenderer blocks={cat.content.blocks} />}
    </main>
  )
}
