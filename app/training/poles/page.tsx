import Link from 'next/link'

export default function PolesTraining() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <Link href="/training" className="back-link">← Back to training</Link>
          <h1>Poles Training</h1>
          <p className="description">
            Learn how different pole designs, holes and shapes can indicate a country or region.
          </p>
        </div>
      </section>

      <section className="info-section">
        <h2>Common pole types</h2>
        <ul>
          <li><strong>Ladder pole with tall step:</strong> often seen in Portugal.</li>
          <li><strong>Holey pole:</strong> common in Poland, Hungary, Romania, Belgium and Sri Lanka.</li>
          <li><strong>Square concrete pole with holes:</strong> Thailand and Laos.</li>
          <li><strong>Doubled-up pole:</strong> Argentina and Bolivia.</li>
          <li><strong>Round concrete pole with holes on top:</strong> Taiwan and Cambodia.</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>How to read pole clues</h2>
        <p>
          Look at the shape, number of holes and any painted markings. Eastern European poles are different from South American or Southeast Asian designs.
        </p>
      </section>

      <section className="info-section">
        <h2>Quick decision factors</h2>
        <ul>
          <li>Multiple poles side by side often point to South America.</li>
          <li>Holes in the pole structure can signal Southeast Asia.</li>
          <li>Concrete poles with a square cross-section are more likely in Thailand/Laos.</li>
          <li>Metal ladder poles with a distinctive step usually indicate Iberian and West African countries.</li>
        </ul>
      </section>
    </main>
  )
}
