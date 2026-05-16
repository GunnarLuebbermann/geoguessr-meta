'use client'

import { useState, useMemo, useCallback } from 'react'
import { QuizQuestion } from '../app/lib/quiz-types'
import { getQuizQuestions } from '../app/lib/quiz-data'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function QuizEngine({ categorySlug, questionCount = 15 }: { categorySlug: string; questionCount?: number }) {
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => getQuizQuestions(categorySlug, questionCount))
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [finished, setFinished] = useState(false)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)

  const question = questions[index]

  const options = useMemo(() => {
    if (!question) return []
    return shuffle([question.answer, ...question.distractors])
  }, [question])

  const choose = useCallback((option: string) => {
    if (selected || finished) return
    setSelected(option)
    if (option === question.answer) {
      setScore((s) => s + 1)
      setStreak((s) => {
        const next = s + 1
        setBestStreak((b) => Math.max(b, next))
        return next
      })
    } else {
      setStreak(0)
    }
  }, [selected, finished, question])

  const next = useCallback(() => {
    if (index + 1 >= questions.length) {
      setFinished(true)
    } else {
      setIndex((i) => i + 1)
      setSelected(null)
    }
  }, [index, questions.length])

  const restart = useCallback(() => {
    setQuestions(getQuizQuestions(categorySlug, questionCount))
    setIndex(0)
    setScore(0)
    setSelected(null)
    setFinished(false)
    setStreak(0)
    setBestStreak(0)
  }, [categorySlug, questionCount])

  if (finished) {
    const pct = Math.round((score / questions.length) * 100)
    const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '👍' : '📚'
    return (
      <div className="quiz-result">
        <div className="quiz-result-emoji">{emoji}</div>
        <h2>{pct}% Correct</h2>
        <p className="quiz-result-score">{score} / {questions.length}</p>
        {bestStreak > 1 && <p className="quiz-result-streak">🔥 Best streak: {bestStreak}</p>}
        <div className="quiz-result-bar">
          <div className="quiz-result-bar-fill" style={{ width: `${pct}%` }} />
        </div>
        <button className="quiz-btn quiz-btn-primary" onClick={restart}>Play Again</button>
      </div>
    )
  }

  if (!question) return null

  const isCorrect = selected === question.answer
  const progress = ((index + 1) / questions.length) * 100

  return (
    <div className="quiz-engine">
      {/* Progress */}
      <div className="quiz-progress">
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="quiz-progress-text">
          <span>{index + 1} / {questions.length}</span>
          <span>Score: {score} {streak >= 2 && <span className="quiz-streak">🔥 {streak}</span>}</span>
        </div>
      </div>

      {/* Question */}
      <div className="quiz-question-card">
        {question.image && (
          <div className="quiz-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={question.image} alt="Quiz" loading="eager" />
          </div>
        )}

        <p className="quiz-prompt">{question.prompt}</p>

        {question.clue && !selected && (
          <p className="quiz-clue">💡 {question.clue}</p>
        )}

        <div className="quiz-options">
          {options.map((opt) => {
            let cls = 'quiz-option'
            if (selected) {
              if (opt === question.answer) cls += ' quiz-option-correct'
              else if (opt === selected) cls += ' quiz-option-wrong'
              else cls += ' quiz-option-dimmed'
            }
            return (
              <button key={opt} className={cls} onClick={() => choose(opt)} disabled={!!selected}>
                {opt}
              </button>
            )
          })}
        </div>

        {selected && (
          <div className={`quiz-feedback ${isCorrect ? 'quiz-feedback-correct' : 'quiz-feedback-wrong'}`}>
            {isCorrect
              ? '✅ Correct!'
              : <>❌ Wrong — the answer is <strong>{question.answer}</strong></>
            }
          </div>
        )}

        {selected && (
          <div className="quiz-actions">
            <button className="quiz-btn quiz-btn-primary" onClick={next}>
              {index + 1 >= questions.length ? 'See Results' : 'Next →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
