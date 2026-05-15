'use client'

import { useState } from 'react'

type LanguageQuestion = {
  question: string
  clue: string
  country: string
  options: string[]
}

const questions: LanguageQuestion[] = [
  {
    question: 'Welche Sprache nutzt das Alphabet "č, š, ž"?',
    clue: 'Häufig in Mittel- und Osteuropa zu finden',
    country: 'Tschechien, Slowakei, oder Balkan',
    options: ['Tschechisch/Slowakisch', 'Polnisch', 'Ungarisch', 'Rumänisch'],
  },
  {
    question: 'Welches Skandinavische Land nutzt die Buchstaben "ø, æ"?',
    clue: 'Auch Dänemark hat diese Buchstaben',
    country: 'Norwegen / Dänemark',
    options: ['Norwegen/Dänemark', 'Schweden', 'Finnland', 'Island'],
  },
  {
    question: 'Welche Sprache hat das Zeichen "ñ"?',
    clue: 'Verbreitet in Südwesteuropa',
    country: 'Spanien',
    options: ['Spanisch', 'Portugiesisch', 'Katalanisch', 'Baskisch'],
  },
  {
    question: 'Welche Sprache nutzt "ç, ã, õ"?',
    clue: 'Prägt auch südamerikanisches Portugiesisch',
    country: 'Portugal/Brasilien',
    options: ['Portugiesisch', 'Französisch', 'Katalanisch', 'Italienisch'],
  },
  {
    question: 'Welche Sprachen nutzen kyrillische Schrift in Europa?',
    clue: 'Russland, Ukraine, Serbien, Bulgarien',
    country: 'Kyrillische Länder',
    options: ['Russisch, Ukrainisch, Serbisch, Bulgarisch', 'Polnisch, Tschechisch', 'Ungarisch, Rumänisch', 'Nur Russisch'],
  },
]

export default function Language() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<string>('')

  const current = questions[index]

  function chooseAnswer(option: string) {
    if (selected) return
    setSelected(option)

    if (option === current.options[0]) {
      setScore((currentScore) => currentScore + 1)
      setFeedback('Richtig! Das ist die korrekte Antwort.')
    } else {
      setFeedback(`Nicht ganz. Die richtige Antwort ist: ${current.options[0]}`)
    }
  }

  function nextQuestion() {
    setSelected(null)
    setFeedback('')
    setIndex((currentIndex) => (currentIndex + 1) % questions.length)
  }

  function resetQuiz() {
    setIndex(0)
    setScore(0)
    setSelected(null)
    setFeedback('')
  }

  return (
    <div className="quiz-card">
      <p className="question">{current.question}</p>
      <p className="clue">💡 Hinweis: {current.clue}</p>

      <div className="options">
        {current.options.map((option) => {
          const isCorrect = selected && option === current.options[0]
          const isWrong = selected === option && option !== current.options[0]
          return (
            <button
              key={option}
              className={`option-button ${isCorrect ? 'correct' : ''} ${isWrong ? 'incorrect' : ''}`}
              onClick={() => chooseAnswer(option)}
              disabled={!!selected}
            >
              {option}
            </button>
          )
        })}
      </div>

      <div className="feedback">
        <p>
          <span>Punktestand:</span> {score} / {questions.length}
        </p>
        {feedback ? <p>{feedback}</p> : <p>Wähle eine Antwort, um zu starten.</p>}
      </div>

      <div className="actions">
        <button className="reset-button" type="button" onClick={selected ? nextQuestion : resetQuiz}>
          {selected ? 'Nächste Frage' : 'Quiz neu starten'}
        </button>
      </div>
    </div>
  )
}
