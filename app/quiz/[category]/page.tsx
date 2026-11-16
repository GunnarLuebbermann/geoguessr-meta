import Link from 'next/link'
import { notFound } from 'next/navigation'
import QuizEngine from '../../../components/QuizEngine'
import { quizCategories } from '../../lib/quiz-data'

export function generateStaticParams() {
  return quizCategories.map((c) => ({ category: c.slug }))
}

export default async function QuizCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const cat = quizCategories.find((c) => c.slug === category)
  if (!cat) notFound()

  return (
    <main className="container">
      <section className="hero quiz-hero">
        <Link href="/quiz" className="back-link">← Back to quiz overview</Link>
        <h1>{cat.emoji} {cat.title}</h1>
        <p className="description">{cat.description}</p>
      </section>

      <QuizEngine categorySlug={cat.slug} />
    </main>
  )
}
