import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHeader from '../../../components/PageHeader'
import ZoomableImage from '../../../components/ZoomableImage'
import ListRow from '../../../components/ListRow'
import { getCountryGuide, getCountryGuides } from '../../lib/country-clues'
import { flag } from '../../lib/countries'

export function generateStaticParams() {
  return getCountryGuides().map((g) => ({ slug: g.country.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getCountryGuide(slug)
  return { title: guide ? guide.country.name : 'Country' }
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getCountryGuide(slug)
  if (!guide) notFound()
  const { country, sections, training } = guide

  // Prev / next within the same continent
  const sameContinent = getCountryGuides().filter((g) => g.country.continent === country.continent)
  const i = sameContinent.findIndex((g) => g.country.slug === slug)
  const prev = sameContinent[i - 1]?.country
  const next = sameContinent[i + 1]?.country

  return (
    <main className="container">
      <PageHeader
        crumbs={[{ href: '/countries', label: 'Countries' }]}
        icon={flag(country.iso)}
        title={country.name}
        description={country.continent}
      />

      {(sections.length > 1 || training.length > 0) && (
        <nav className="jump-bar" aria-label="Sections">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="chip">{s.emoji} {s.title}</a>
          ))}
          {training.length > 0 && <a href="#training" className="chip">📚 Training</a>}
        </nav>
      )}

      {sections.length === 0 && (
        <p className="empty">No dedicated clues yet — see the training topics below.</p>
      )}

      {sections.map((s) => (
        <section key={s.id} id={s.id} className="section">
          <div className="section-head">
            <h2 className="section-title">{s.emoji} {s.title}</h2>
            {s.quiz && <Link href={`/quiz/${s.quiz}`} className="section-link">Practice ›</Link>}
          </div>
          {s.layout === 'facts' ? (
            <ul className="facts">
              {s.clues.map((c, j) => (
                <li key={j}>
                  <strong>{c.title}</strong>
                  {c.text && <span>{c.text}</span>}
                </li>
              ))}
            </ul>
          ) : (
            <div className="clue-grid">
              {s.clues.map((c, j) => (
                <figure key={j} className="clue-card">
                  {c.image && (
                    <div className="clue-media">
                      <ZoomableImage src={c.image} alt={`${country.name}: ${c.title}`} loading="lazy" />
                    </div>
                  )}
                  <figcaption>
                    <strong>{c.title}</strong>
                    {c.text && <span>{c.text}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>
      ))}

      {training.length > 0 && (
        <section id="training" className="section">
          <h2 className="section-title">📚 Mentioned in training</h2>
          <div className="list">
            {training.map((t) => (
              <ListRow key={t.href} href={t.href} title={t.title} />
            ))}
          </div>
        </section>
      )}

      <nav className="pager" aria-label="More countries">
        {prev ? (
          <Link href={`/countries/${prev.slug}`} className="pager-link">
            <span className="pager-label">‹ Previous</span>
            <span>{flag(prev.iso)} {prev.name}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/countries/${next.slug}`} className="pager-link pager-next">
            <span className="pager-label">Next ›</span>
            <span>{flag(next.iso)} {next.name}</span>
          </Link>
        ) : <span />}
      </nav>
    </main>
  )
}
