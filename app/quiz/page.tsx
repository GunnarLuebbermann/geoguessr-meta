import type { Metadata } from 'next'
import { quizCategories } from '../lib/quiz-data'
import PageHeader from '../../components/PageHeader'
import QuizList from '../../components/QuizList'

export const metadata: Metadata = { title: 'Quiz' }

export default function QuizPage() {
  // Put the "all" mix first
  const sorted = [...quizCategories].sort((a, b) => (a.slug === 'all' ? -1 : b.slug === 'all' ? 1 : 0))
  return (
    <main className="container">
      <PageHeader icon="📝" title="Quiz" description="Up to 15 random questions per round. Your best score is saved on this device." />
      <QuizList categories={sorted} />
    </main>
  )
}
