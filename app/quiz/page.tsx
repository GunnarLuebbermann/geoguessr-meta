import Link from 'next/link'
import { quizCategories } from '../lib/quiz-data'

export default function QuizPage() {
  return (
    <main className="container">
      <section className="hero">
        <Link href="/" className="back-link">← Back to home</Link>
        <h1>📝 Quiz</h1>
        <p className="description">
          Test your GeoGuessr knowledge. Choose a category and answer 15 random questions.
        </p>
      </section>

      <section className="training-grid">
        {quizCategories.map((cat) => (
          <Link key={cat.slug} href={`/quiz/${cat.slug}`} className="training-card card-link">
            <h2>{cat.emoji} {cat.title}</h2>
            <p>{cat.description}</p>
            <span className="quiz-question-count">{cat.questionCount} questions</span>
          </Link>
        ))}
      </section>
    </main>
  )
}
