import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import QuizEngine from '../../../components/QuizEngine'
import { quizCategories } from '../../lib/quiz-data'
import PageHeader from '../../../components/PageHeader'

export function generateStaticParams() {
  return quizCategories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  return { title: `Quiz: ${quizCategories.find((c) => c.slug === category)?.title ?? ''}` }
}

export default async function QuizCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const cat = quizCategories.find((c) => c.slug === category)
  if (!cat) notFound()

  return (
    <main className="container">
      <PageHeader crumbs={[{ href: '/quiz', label: 'Quiz' }]} icon={cat.emoji} title={cat.title} />

      <QuizEngine categorySlug={cat.slug} />
    </main>
  )
}
