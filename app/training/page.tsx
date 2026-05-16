import Link from 'next/link'
import { categories } from '../lib/content'

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

      <section className="training-grid">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/training/${cat.slug}`} className="training-card card-link">
            <h2>{cat.emoji} {cat.title}</h2>
            <p>{cat.description}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}
