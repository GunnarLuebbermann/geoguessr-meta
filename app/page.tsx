'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <p className="eyebrow">Geoguessr Meta</p>
          <h1>Learn Geoguessr with focused training modules</h1>
          <p className="description">
            Choose the training path you want to explore. Quiz features are coming soon.
          </p>
        </div>
      </section>

      <section className="grid mode-selection">
        <Link href="/training" className="card card-link">
          <h2>🎓 Training</h2>
          <p>Study language cues, phone codes, poles and other useful Geoguessr hints.</p>
        </Link>
        <div className="card card-tbd">
          <h2>📝 Quiz</h2>
          <p>Quiz mode is TBD — coming soon.</p>
        </div>
      </section>
    </main>
  )
}
