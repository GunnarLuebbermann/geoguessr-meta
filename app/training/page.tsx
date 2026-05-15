import Link from 'next/link'

const trainingTopics = [
  {
    title: 'Languages',
    path: '/training/languages',
    description: 'Explore language cues, street words, and alphabet hints for Geoguessr.',
  },
  {
    title: 'Telephone',
    path: '/training/telephone',
    description: 'Learn country and area codes for fast location recognition.',
  },
  {
    title: 'Poles',
    path: '/training/poles',
    description: 'Recognize pole types and their likely countries.',
  },
]

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
        {trainingTopics.map((topic) => (
          <Link key={topic.path} href={topic.path} className="training-card card-link">
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}
