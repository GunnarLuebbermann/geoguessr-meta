'use client'

import { useParams } from 'next/navigation'
import QuizEngine from '../../../components/QuizEngine'

export default function QuizCategoryPage() {
  const params = useParams()
  const category = params.category as string

  return <QuizEngine categorySlug={category} />
}
