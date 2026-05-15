import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Geoguessr Mentor',
  description: 'Lerne Geoguessr mit interaktiven Trainingsmodulen und Quizfragen.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
