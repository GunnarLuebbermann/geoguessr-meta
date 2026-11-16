import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <p className="eyebrow">Geoguessr Meta</p>
          <h1>Learn Geoguessr with focused training modules</h1>
          <p className="description">
            Study the meta in the training section, then test yourself in the quiz.
          </p>
        </div>
      </section>

      <section className="grid mode-selection">
        <Link href="/training" className="card card-link">
          <h2>🎓 Training</h2>
          <p>Study language cues, phone codes, poles and other useful Geoguessr hints.</p>
        </Link>
        <Link href="/quiz" className="card card-link">
          <h2>📝 Quiz</h2>
          <p>Test your knowledge with image, language and phone code quizzes.</p>
        </Link>
      </section>
    </main>
  )
}
