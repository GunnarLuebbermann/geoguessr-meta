import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, categories } from '../../../lib/content'
import ContentRenderer from '../../../../components/ContentRenderer'
import PageHeader from '../../../../components/PageHeader'

export function generateStaticParams() {
  return categories.flatMap((cat) => (cat.subcategories ?? []).map((sub) => ({ category: cat.slug, subcategory: sub.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; subcategory: string }> }): Promise<Metadata> {
  const { category, subcategory } = await params
  const cat = getCategoryBySlug(category)
  const sub = cat?.subcategories?.find((s) => s.slug === subcategory)
  return { title: sub ? `${cat!.title}: ${sub.title}` : 'Training' }
}

export default async function SubcategoryPage({ params }: { params: Promise<{ category: string; subcategory: string }> }) {
  const { category, subcategory } = await params
  const cat = getCategoryBySlug(category)
  if (!cat) notFound()
  const sub = cat.subcategories?.find((s) => s.slug === subcategory)
  if (!sub) notFound()

  const i = cat.subcategories!.indexOf(sub)
  const siblings = cat.subcategories!

  return (
    <main className="container">
      <PageHeader
        crumbs={[{ href: '/training', label: 'Training' }, { href: `/training/${cat.slug}`, label: cat.title }]}
        icon={cat.emoji}
        title={sub.content.title}
        description={sub.content.description}
      />
      {siblings.length > 1 && (
        <nav className="chips sub-nav" aria-label={`${cat.title} parts`}>
          {siblings.map((s, j) => (
            <Link key={s.slug} href={`/training/${cat.slug}/${s.slug}`} className={`chip${j === i ? ' active' : ''}`}>{s.title}</Link>
          ))}
        </nav>
      )}
      <ContentRenderer blocks={sub.content.blocks} />
    </main>
  )
}
