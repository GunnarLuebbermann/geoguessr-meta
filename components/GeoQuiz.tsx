'use client'

import { useState } from 'react'

type Question = {
  prompt: string
  options: string[]
  answer: string
}

const questions: Question[] = [
  {
    prompt: 'Welches Land ist am besten für eine Kombination aus Straße und Fjorden bekannt?',
    options: ['Norwegen', 'Portugal', 'Japan', 'Argentinien'],
    answer: 'Norwegen',
  },
  {
    prompt: 'In welchem Land findest du die Wüste Sahara und viele alte historische Städte?',
    options: ['Ägypten', 'Indien', 'Kanada', 'Südafrika'],
    answer: 'Ägypten',
  },
  {
    prompt: 'Welche Stadt gehört zur Hauptstadt eines Landes mit flachen Tulpenfeldern und Kanälen?',
    options: ['Amsterdam', 'Moskau', 'Kapstadt', 'Tokio'],
    answer: 'Amsterdam',
  },
  {
    prompt: 'Wo liegt die berühmte Skyline mit dem Burj Khalifa?',
    options: ['Dubai', 'São Paulo', 'Sydney', 'Seoul'],
    answer: 'Dubai',
  },
]

export default function GeoQuiz() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<string>('')

  const question = questions[index]

  function chooseOption(option: string) {
    if (selected) return
    setSelected(option)

    if (option === question.answer) {
      setScore((current) => current + 1)
      setFeedback('Richtig! Gute Orientierung.')
    } else {
      setFeedback(`Fast! Die richtige Antwort ist ${question.answer}.`)
    }
  }

  function nextQuestion() {
    setSelected(null)
    setFeedback('')
    setIndex((current) => (current + 1) % questions.length)
  }

  function resetQuiz() {
    setIndex(0)
    setScore(0)
    setSelected(null)
    setFeedback('')
  }

  return (
    <div className="quiz-card">
      <p className="question">{question.prompt}</p>
      <div className="options">
        {question.options.map((option) => {
          const isCorrect = selected && option === question.answer
          const isWrong = selected === option && option !== question.answer
          return (
            <button
              key={option}
              className={`option-button ${isCorrect ? 'correct' : ''} ${isWrong ? 'incorrect' : ''}`}
              onClick={() => chooseOption(option)}
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
