'use client'

import { useState } from 'react'

type PoleProfile = {
  title: string
  description: string
  country: string
  options: string[]
  image: string
  imageAlt: string
}

const poles: PoleProfile[] = [
  {
    title: 'Ladder pole with tall step',
    description: 'Erkenne das typische Leitungsnetz mit hoher Sprosse und holländischem Aussehen.',
    country: 'Portugal',
    options: ['Portugal', 'Brazil', 'Nigeria', 'Spain'],
    image: 'https://dingyiyi0226.github.io/geoguessr-note/docs/pole/pole-pt.png',
    imageAlt: 'Ladder pole with tall step from Portugal',
  },
  {
    title: 'Square concrete pole with holes',
    description: 'Ein quadratischer Betonpfosten mit Löchern in Südostasien.',
    country: 'Thailand',
    options: ['Thailand', 'Sri Lanka', 'Laos', 'Vietnam'],
    image: 'https://dingyiyi0226.github.io/geoguessr-note/docs/pole/pole-th.png',
    imageAlt: 'Square concrete pole with holes used in Thailand and Laos',
  },
  {
    title: 'Holey pole',
    description: 'Ein Lochpfosten, typisch für Mittel- und Osteuropa.',
    country: 'Poland',
    options: ['Poland', 'Hungary', 'Romania', 'Belgium'],
    image: 'https://dingyiyi0226.github.io/geoguessr-note/docs/pole/pole-pl.png',
    imageAlt: 'Holey pole sometimes with A frame in Poland',
  },
  {
    title: 'Doubled up pole',
    description: 'Zwei nebeneinander stehende Pfosten in Südamerika.',
    country: 'Argentina',
    options: ['Argentina', 'Bolivia', 'Chile', 'Peru'],
    image: 'https://dingyiyi0226.github.io/geoguessr-note/docs/pole/pole-doubled-ar.png',
    imageAlt: 'Doubled up pole from Argentina or Bolivia',
  },
  {
    title: 'Round concrete pole with holes on top',
    description: 'Runder Betonpfosten mit Löchern oben, oft in Südostasien.',
    country: 'Taiwan',
    options: ['Taiwan', 'Cambodia', 'Japan', 'Malaysia'],
    image: 'https://dingyiyi0226.github.io/geoguessr-note/docs/pole/pole-tw.png',
    imageAlt: 'Round concrete pole with holes on top in Taiwan',
  },
]

export default function PoleBasic() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<string>('')

  const current = poles[index]

  function chooseCountry(option: string) {
    if (selected) return
    setSelected(option)

    if (option === current.country) {
      setScore((currentScore) => currentScore + 1)
      setFeedback('Richtig! Der Pole passt zu diesem Land.')
    } else {
      setFeedback(`Nicht ganz. Die richtige Antwort ist ${current.country}.`) 
    }
  }

  function nextQuestion() {
    setSelected(null)
    setFeedback('')
    setIndex((currentIndex) => (currentIndex + 1) % poles.length)
  }

  function resetQuiz() {
    setIndex(0)
    setScore(0)
    setSelected(null)
    setFeedback('')
  }

  return (
    <div className="quiz-card pole-card">
      <p className="question">{current.title}</p>
      <p className="description">{current.description}</p>

      <div className="pole-image">
        <img src={current.image} alt={current.imageAlt} />
      </div>

      <div className="options">
        {current.options.map((option) => {
          const isCorrect = selected && option === current.country
          const isWrong = selected === option && option !== current.country
          return (
            <button
              key={option}
              className={`option-button ${isCorrect ? 'correct' : ''} ${isWrong ? 'incorrect' : ''}`}
              onClick={() => chooseCountry(option)}
              disabled={!!selected}
            >
              {option}
            </button>
          )
        })}
      </div>

      <div className="feedback">
        <p>
          <span>Punktestand:</span> {score} / {poles.length}
        </p>
        {feedback ? <p>{feedback}</p> : <p>Wähle eine Antwort, um das Modul zu starten.</p>}
      </div>

      <div className="actions">
        <button className="reset-button" type="button" onClick={selected ? nextQuestion : resetQuiz}>
          {selected ? 'Nächste Frage' : 'Quiz neu starten'}
        </button>
      </div>
    </div>
  )
}
