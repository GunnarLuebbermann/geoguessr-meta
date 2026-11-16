'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { QuizQuestion } from '../app/lib/quiz-types'
import { getQuizQuestions } from '../app/lib/quiz-data'
import ZoomableImage from './ZoomableImage'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

type Mistake = { question: QuizQuestion; chosen: string }

const bestKey = (slug: string) => `quiz-best:${slug}`

function readBest(slug: string): number | null {
  try {
    const raw = window.localStorage.getItem(bestKey(slug))
    return raw === null ? null : Number(raw)
  } catch {
    return null
  }
}

function writeBest(slug: string, pct: number) {
  try {
    window.localStorage.setItem(bestKey(slug), String(pct))
  } catch {
    /* storage unavailable – ignore */
  }
}

export default function QuizEngine({ categorySlug, questionCount = 15 }: { categorySlug: string; questionCount?: number }) {
  // Questions are random, so they are only generated on the client to avoid
  // a server/client hydration mismatch.
  const [questions, setQuestions] = useState<QuizQuestion[] | null>(null)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [finished, setFinished] = useState(false)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [showClue, setShowClue] = useState(false)
  const [mistakes, setMistakes] = useState<Mistake[]>([])
  const [previousBest, setPreviousBest] = useState<number | null>(null)

  const start = useCallback(() => {
    setQuestions(getQuizQuestions(categorySlug, questionCount))
    setIndex(0)
    setScore(0)
    setSelected(null)
    setFinished(false)
    setStreak(0)
    setBestStreak(0)
    setShowClue(false)
    setMistakes([])
    setPreviousBest(readBest(categorySlug))
  }, [categorySlug, questionCount])

  useEffect(() => {
    start()
  }, [start])

  const question = questions?.[index]

  const options = useMemo(() => {
    if (!question) return []
    return shuffle([question.answer, ...question.distractors])
  }, [question])

  const choose = useCallback((option: string) => {
    if (!question || selected || finished) return
    setSelected(option)
    if (option === question.answer) {
      setScore((s) => s + 1)
      const next = streak + 1
      setStreak(next)
      setBestStreak((b) => Math.max(b, next))
    } else {
      setStreak(0)
      setMistakes((m) => [...m, { question, chosen: option }])
    }
  }, [question, selected, finished, streak])

  const next = useCallback(() => {
    if (!questions || !selected) return
    if (index + 1 >= questions.length) {
      const pct = Math.round((score / questions.length) * 100)
      if (previousBest === null || pct > previousBest) writeBest(categorySlug, pct)
      setFinished(true)
    } else {
      setIndex((i) => i + 1)
      setSelected(null)
      setShowClue(false)
    }
  }, [questions, selected, index, score, previousBest, categorySlug])

  // Keyboard: 1–4 to answer, H for hint, Enter/Space/→ for next question.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (finished) {
        if (e.key === 'Enter') start()
        return
      }
      const n = Number(e.key)
      if (!selected && n >= 1 && n <= options.length) {
        choose(options[n - 1])
      } else if (!selected && (e.key === 'h' || e.key === 'H')) {
        setShowClue(true)
      } else if (selected && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight')) {
        e.preventDefault()
        next()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [finished, selected, options, choose, next, start])

  if (!questions) {
    return <div className="quiz-engine quiz-loading">Loading questions…</div>
  }

  if (questions.length === 0) {
    return <div className="quiz-engine quiz-loading">No questions available for this category.</div>
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100)
    const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '👍' : '📚'
    const isNewBest = previousBest === null || pct > previousBest
    return (
      <div className="quiz-result">
        <div className="quiz-result-emoji">{emoji}</div>
        <h2>{pct}% correct</h2>
        <p className="quiz-result-score">{score} / {questions.length}</p>
        {bestStreak > 1 && <p className="quiz-result-streak">🔥 Best streak: {bestStreak}</p>}
        <p className="quiz-result-best">
          {isNewBest
            ? previousBest === null ? '⭐ First result saved as your best score' : `⭐ New personal best! (previous: ${previousBest}%)`
            : `Personal best: ${previousBest}%`}
        </p>
        <div className="quiz-result-bar">
          <div className="quiz-result-bar-fill" style={{ width: `${pct}%` }} />
        </div>

        {mistakes.length > 0 && (
          <div className="quiz-review">
            <h3>Review your mistakes</h3>
            <ul>
              {mistakes.map(({ question: q, chosen }) => (
                <li key={q.id} className="quiz-review-item">
                  {q.image && (
                    <div className="quiz-review-image">
                      <ZoomableImage src={q.image} alt={q.answer} />
                    </div>
                  )}
                  <div>
                    <p className="quiz-review-prompt">{q.prompt}</p>
                    <p className="quiz-review-answer">
                      <span className="quiz-review-wrong">✗ {chosen}</span>
                      <span className="quiz-review-correct">✓ {q.answer}</span>
                    </p>
                    {q.clue && <p className="quiz-review-clue">💡 {q.clue}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="quiz-btn quiz-btn-primary" onClick={start}>Play again</button>
      </div>
    )
  }

  if (!question) return null

  const isCorrect = selected === question.answer
  const progress = ((index + (selected ? 1 : 0)) / questions.length) * 100

  return (
    <div className="quiz-engine">
      <div className="quiz-progress">
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="quiz-progress-text">
          <span>{index + 1} / {questions.length}</span>
          <span>Score: {score} {streak >= 2 && <span className="quiz-streak">🔥 {streak}</span>}</span>
        </div>
      </div>

      <div className="quiz-question-card">
        {question.image && (
          <div className="quiz-image">
            <ZoomableImage key={question.id} src={question.image} alt="Quiz image" loading="eager" />
          </div>
        )}

        <p className="quiz-prompt">{question.prompt}</p>

        {question.clue && (
          showClue || selected
            ? <p className="quiz-clue">💡 {question.clue}</p>
            : (
              <p className="quiz-clue">
                <button type="button" className="quiz-hint-btn" onClick={() => setShowClue(true)}>
                  💡 Show hint <kbd>H</kbd>
                </button>
              </p>
            )
        )}

        <div className="quiz-options">
          {options.map((opt, i) => {
            let cls = 'quiz-option'
            if (selected) {
              if (opt === question.answer) cls += ' quiz-option-correct'
              else if (opt === selected) cls += ' quiz-option-wrong'
              else cls += ' quiz-option-dimmed'
            }
            return (
              <button key={opt} className={cls} onClick={() => choose(opt)} disabled={!!selected}>
                <kbd className="quiz-option-key">{i + 1}</kbd>
                {opt}
              </button>
            )
          })}
        </div>

        {selected && (
          <div className={`quiz-feedback ${isCorrect ? 'quiz-feedback-correct' : 'quiz-feedback-wrong'}`} role="status">
            {isCorrect
              ? '✅ Correct!'
              : <>❌ Wrong — the answer is <strong>{question.answer}</strong></>
            }
          </div>
        )}

        {selected && (
          <div className="quiz-actions">
            <button className="quiz-btn quiz-btn-primary" onClick={next} autoFocus>
              {index + 1 >= questions.length ? 'See results' : 'Next →'}
            </button>
          </div>
        )}
      </div>

      <p className="quiz-shortcuts">Shortcuts: <kbd>1</kbd>–<kbd>{options.length}</kbd> answer · <kbd>H</kbd> hint · <kbd>Enter</kbd> next</p>
    </div>
  )
}
