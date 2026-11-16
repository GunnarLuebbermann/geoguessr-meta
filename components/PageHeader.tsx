import Link from 'next/link'
import type { ReactNode } from 'react'

export type Crumb = { href: string; label: string }

export default function PageHeader({
  crumbs = [],
  icon,
  title,
  description,
  children,
}: {
  crumbs?: Crumb[]
  icon?: string
  title: string
  description?: string
  children?: ReactNode
}) {
  return (
    <header className="page-header">
      {crumbs.length > 0 && (
        <nav className="crumbs" aria-label="Breadcrumb">
          {crumbs.map((c) => (
            <span key={c.href}>
              <Link href={c.href}>{c.label}</Link>
              <span className="crumb-sep" aria-hidden>›</span>
            </span>
          ))}
        </nav>
      )}
      <h1>
        {icon && <span className="page-icon" aria-hidden>{icon}</span>}
        {title}
      </h1>
      {description && <p className="page-desc">{description}</p>}
      {children}
    </header>
  )
}
