'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/countries', label: 'Countries', icon: '🌍' },
  { href: '/training', label: 'Training', icon: '📚' },
  { href: '/quiz', label: 'Quiz', icon: '📝' },
]

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
}

export default function SiteNav() {
  const pathname = usePathname() ?? '/'

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="brand">
            <span className="brand-mark" aria-hidden>📍</span>
            <span>GeoMeta</span>
          </Link>
          <nav className="top-nav" aria-label="Main">
            {items.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className={isActive(pathname, item.href) ? 'active' : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <nav className="tab-bar" aria-label="Main">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className={isActive(pathname, item.href) ? 'active' : undefined}>
            <span className="tab-icon" aria-hidden>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  )
}
