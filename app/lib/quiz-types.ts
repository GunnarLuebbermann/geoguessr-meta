// Quiz types for the Geoguessr Meta quiz system

export type QuizMode = 'image-to-country' | 'text-to-country' | 'country-to-info'

export interface QuizQuestion {
  id: string
  /** What the user sees as the question */
  prompt: string
  /** Optional image shown with the question */
  image?: string
  /** Optional hint/clue text */
  clue?: string
  /** The correct answer */
  answer: string
  /** Wrong options to show (3 distractors) */
  distractors: string[]
  /** Category tag for filtering */
  category: string
}

export interface QuizCategory {
  slug: string
  title: string
  emoji: string
  description: string
  questionCount: number
}

export interface QuizState {
  questions: QuizQuestion[]
  currentIndex: number
  score: number
  answers: (string | null)[]
  finished: boolean
}
