'use client'

import { useState } from 'react'
import ZoomableImage from './ZoomableImage'

type TelephoneQuestion = {
  question: string
  clue: string
  country: string
  options: string[]
  imageLocal?: string
  imageExternal?: string
}

const questions: TelephoneQuestion[] = [
  {
    question: 'Welche Area Codes gehören zu Japan?',
    clue: 'Tokyo: 03, Osaka: 06',
    country: 'Japan',
    options: ['Japan', 'Südkorea', 'China', 'Thailand'],
    imageLocal: '/images/telephone/japan-phone.png',
    imageExternal: 'https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/19dfb5b1-0cb0-49a5-adb4-9b211585bffc/19.png',
  },
  {
    question: 'Welche Area Codes gehören zu Brasilien?',
    clue: 'São Paulo: 11, Rio: 21, Brasília: 61',
    country: 'Brasilien',
    options: ['Brasilien', 'Mexiko', 'Argentinien', 'Chile'],
    imageLocal: '/images/telephone/brazil-phone.png',
    imageExternal: 'https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/930c8141-7d6e-4397-a56c-f58b902e85c1/Brasil_-_Códigos_de_área_DDD.png',
  },
  {
    question: 'Welches Land hat die Telefon-Vorwahl "+81"?',
    clue: 'Inselstaat in Ostasien',
    country: 'Japan',
    options: ['Japan', 'Südkorea', 'China', 'Thailand'],
  },
  {
    question: 'Welches Land hat die Telefon-Vorwahl "+55"?',
    clue: 'Größtes Land Südamerikas',
    country: 'Brasilien',
    options: ['Brasilien', 'Mexiko', 'Argentinien', 'Chile'],
  },
  {
    question: 'Welches Land hat die Telefon-Vorwahl "+33"?',
    clue: 'Bekannt für den Eiffelturm',
    country: 'Frankreich',
    options: ['Frankreich', 'Belgien', 'Schweiz', 'Luxemburg'],
  },
]

export default function Telephone() {
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

      {(current.imageLocal || current.imageExternal) && (
        <div className="reference-image">
          <ZoomableImage
            src={current.imageLocal || current.imageExternal}
            alt={current.country}
            onError={(e) => {
              if (current.imageExternal && e.currentTarget.src !== current.imageExternal) {
                e.currentTarget.src = current.imageExternal;
              }
            }}
          />
        </div>
      )}

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
