import Link from 'next/link'
import { getCountryGuides } from './lib/country-clues'
import { continents, flag } from './lib/countries'
import { categories } from './lib/content'
import { allQuestions } from './lib/quiz-data'

export default function Home() {
  const guides = getCountryGuides()

  return (
    <main className="container">
      <section className="home-hero">
        <h1>Learn the meta.<br />Guess the country.</h1>
        <p className="page-desc">Country guides, training topics and quick quizzes for GeoGuessr — built for your phone.</p>
      </section>

      <section className="entry-grid">
        <Link href="/countries" className="entry">
          <span className="entry-icon" aria-hidden>🌍</span>
          <span className="entry-title">Countries</span>
          <span className="entry-sub">{guides.length} country guides</span>
        </Link>
        <Link href="/training" className="entry">
          <span className="entry-icon" aria-hidden>📚</span>
          <span className="entry-title">Training</span>
          <span className="entry-sub">{categories.length} topics</span>
        </Link>
        <Link href="/quiz" className="entry">
          <span className="entry-icon" aria-hidden>📝</span>
          <span className="entry-title">Quiz</span>
          <span className="entry-sub">{allQuestions.length} questions</span>
        </Link>
      </section>

      {continents.map((name) => {
        const list = guides.filter((g) => g.country.continent === name)
        if (list.length === 0) return null
        return (
          <section key={name} className="section">
            <div className="section-head">
              <h2 className="section-title">{name}</h2>
            </div>
            <div className="flag-strip">
              {list.map(({ country }) => (
                <Link key={country.slug} href={`/countries/${country.slug}`} className="flag-pill" title={country.name}>
                  <span aria-hidden>{flag(country.iso)}</span>
                  <span>{country.name}</span>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </main>
  )
}
