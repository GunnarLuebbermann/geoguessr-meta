import Link from 'next/link'

export default function LanguagesTraining() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <Link href="/training" className="back-link">← Back to training</Link>
          <h1>Languages Training</h1>
          <p className="description">
            Learn how street words, alphabet patterns and language clues help you identify countries quickly.
          </p>
        </div>
      </section>

      <section className="info-section">
        <h2>Street words</h2>
        <p>Many countries use distinctive street words that are very useful in Geoguessr.</p>
        <ul>
          <li><strong>French/Spanish/Portuguese:</strong> rue, calle, rua, carrer</li>
          <li><strong>Dutch/German:</strong> straat, gasse, Straße, gade</li>
          <li><strong>Nordic:</strong> väg, vei, talo, via, strada</li>
          <li><strong>Slavic:</strong> ulica, ul., gatvė, улица, ul.</li>
          <li><strong>Basque:</strong> kalea</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Alphabet hints</h2>
        <p>Specific letters and accents often reveal the region.</p>
        <ul>
          <li><strong>Nordic:</strong> å, ä, ö, ø, æ</li>
          <li><strong>Central Europe:</strong> č, š, ž, ň, ě, ř</li>
          <li><strong>Poland:</strong> ł, ż, ą, ę, ś, ń, ó</li>
          <li><strong>Portuguese/Spanish:</strong> ñ, ç, ã, õ</li>
          <li><strong>Cyrillic:</strong> а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ы э ю я</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Romance language cues</h2>
        <p>These clues are especially helpful for Southern Europe and Latin America.</p>
        <ul>
          <li><strong>Spanish:</strong> calle, avenida, supermercado, todas direcciones</li>
          <li><strong>Catalan:</strong> carrer, avinguda, totes direccions</li>
          <li><strong>Portuguese:</strong> rua, estação, -ção, -dade, -mente</li>
          <li><strong>French:</strong> rue, avenue, métro, école</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Useful language patterns</h2>
        <p>Some single words and endings are high-confidence indicators.</p>
        <ul>
          <li><strong>ulica / ul.:</strong> Slavic countries such as Poland and Czechia</li>
          <li><strong>straat:</strong> Netherlands or Flanders</li>
          <li><strong>gasse / Straße:</strong> Austria, Germany, Switzerland</li>
          <li><strong>kale(a):</strong> Basque region</li>
          <li><strong>gata / vej / vei:</strong> Scandinavia</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>How to use this in Geoguessr</h2>
        <p>
          Start by identifying the script or street word on a sign. Then narrow your guess by looking for regional letters and language families.
        </p>
      </section>
    </main>
  )
}
