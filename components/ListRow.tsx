import Link from 'next/link'
import type { ReactNode } from 'react'

export default function ListRow({
  href,
  icon,
  title,
  subtitle,
  meta,
}: {
  href: string
  icon?: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  meta?: ReactNode
}) {
  return (
    <Link href={href} className="list-row">
      {icon && <span className="list-icon" aria-hidden>{icon}</span>}
      <span className="list-body">
        <span className="list-title">{title}</span>
        {subtitle && <span className="list-sub">{subtitle}</span>}
      </span>
      {meta && <span className="list-meta">{meta}</span>}
      <span className="list-chevron" aria-hidden>›</span>
    </Link>
  )
}
