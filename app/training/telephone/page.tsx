import Link from 'next/link'

export default function TelephoneTraining() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <Link href="/training" className="back-link">← Back to training</Link>
          <h1>Telephone Training</h1>
          <p className="description">
            Learn how phone country codes and area codes can help you identify locations in Geoguessr.
          </p>
        </div>
      </section>

      <section className="info-section">
        <h2>Important area codes</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Japan</h3>
            <p>Tokyo: 03, Osaka: 06, Kyoto: 075, Hokkaido: 01X</p>
            <img src="/images/telephone/japan-phone.png" alt="Japan telephone area codes" />
          </div>
          <div className="info-card">
            <h3>Brazil</h3>
            <p>São Paulo: 11, Rio: 21, Brasília: 61, Fortaleza: 85</p>
            <img src="/images/telephone/brazil-phone.png" alt="Brazil telephone area codes" />
          </div>
        </div>
      </section>

      <section className="info-section">
        <h2>Country codes</h2>
        <p>Country codes are often the fastest way to narrow down a region.</p>
        <table className="info-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Country</th>
              <th>Code</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>+61</td>
              <td>Australia</td>
              <td>+54</td>
              <td>Argentina</td>
            </tr>
            <tr>
              <td>+64</td>
              <td>New Zealand</td>
              <td>+56</td>
              <td>Chile</td>
            </tr>
            <tr>
              <td>+51</td>
              <td>Peru</td>
              <td>+250</td>
              <td>Rwanda</td>
            </tr>
            <tr>
              <td>+591</td>
              <td>Bolivia</td>
              <td>+254</td>
              <td>Kenya</td>
            </tr>
            <tr>
              <td>+593</td>
              <td>Ecuador</td>
              <td>+598</td>
              <td>Uruguay</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="info-section">
        <h2>How to use telephone clues</h2>
        <p>
          If you see a phone number or a business sign with a country code, use it to identify the nation first. Then use area codes to narrow down the region within that country.
        </p>
      </section>
    </main>
  )
}
