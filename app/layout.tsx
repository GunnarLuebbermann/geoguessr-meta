import './globals.css'
import type { Metadata, Viewport } from 'next'
import SiteNav from '../components/SiteNav'

export const metadata: Metadata = {
  title: { default: 'GeoMeta', template: '%s · GeoMeta' },
  description: 'Country guides, training modules and quizzes for GeoGuessr.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f7f9' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1115' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  )
}
