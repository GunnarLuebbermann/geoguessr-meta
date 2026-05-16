'use client'

import { useState, useMemo } from 'react'
import { ContentBlock } from '../app/lib/types'

interface TocEntry {
  id: string
  text: string
  level: number
}

interface Section {
  heading: { text: string; level: number; id: string }
  blocks: { block: ContentBlock; index: number }[]
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function groupIntoSections(blocks: ContentBlock[]): { preamble: { block: ContentBlock; index: number }[]; sections: Section[] } {
  const preamble: { block: ContentBlock; index: number }[] = []
  const sections: Section[] = []
  let current: Section | null = null

  blocks.forEach((block, index) => {
    if (block.type === 'heading' && block.level === 2) {
      const id = slugify(block.text)
      current = { heading: { text: block.text, level: 2, id }, blocks: [] }
      sections.push(current)
    } else if (current) {
      current.blocks.push({ block, index })
    } else {
      preamble.push({ block, index })
    }
  })

  return { preamble, sections }
}

function TableOfContents({ entries, activeId }: { entries: TocEntry[]; activeId?: string }) {
  if (entries.length < 3) return null
  return (
    <nav className="content-toc">
      <div className="content-toc-title">Inhalt</div>
      <ul>
        {entries.map((e) => (
          <li key={e.id} className={`toc-level-${e.level}${activeId === e.id ? ' toc-active' : ''}`}>
            <a href={`#${e.id}`}>{e.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function CollapsibleSection({ section, defaultOpen }: { section: Section; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={`content-section ${open ? 'is-open' : 'is-closed'}`} id={section.heading.id}>
      <button className="content-section-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="content-section-arrow">{open ? '▾' : '▸'}</span>
        <h2>{section.heading.text}</h2>
      </button>
      {open && (
        <div className="content-section-body">
          {section.blocks.map(({ block, index }) => (
            <BlockRenderer key={index} block={block} index={index} />
          ))}
        </div>
      )}
    </div>
  )
}

function BlockRenderer({ block, index }: { block: ContentBlock; index: number }) {
  switch (block.type) {
    case 'heading':
      if (block.level === 2) {
        const id = slugify(block.text)
        return <h2 key={index} id={id}>{block.text}</h2>
      }
      if (block.level === 3) return <h3 key={index}>{block.text}</h3>
      return <h4 key={index}>{block.text}</h4>

    case 'text':
      return <p key={index} className="content-text" dangerouslySetInnerHTML={{ __html: block.html }} />

    case 'list':
      return (
        <ul key={index} className="content-list">
          {block.items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )

    case 'note':
      return (
        <div key={index} className="callout callout-note">
          {block.title && <div className="callout-title">💡 {block.title}</div>}
          <div dangerouslySetInnerHTML={{ __html: block.html }} />
        </div>
      )

    case 'warning':
      return (
        <div key={index} className="callout callout-warning">
          {block.title && <div className="callout-title">⚠️ {block.title}</div>}
          <div dangerouslySetInnerHTML={{ __html: block.html }} />
        </div>
      )

    case 'image':
      return (
        <figure key={index} className="content-figure" style={block.maxWidth ? { maxWidth: block.maxWidth } : undefined}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src} alt={block.caption || ''} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )

    case 'imageGrid':
      return (
        <div key={index} className="content-image-grid">
          {block.columns.map((col, j) => (
            <div key={j} className="content-image-grid-item">
              {col.title && <h4>{col.title}</h4>}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={col.src} alt={col.caption || col.title || ''} loading="lazy" />
              {col.caption && <p className="caption">{col.caption}</p>}
            </div>
          ))}
        </div>
      )

    case 'table':
      return (
        <div key={index} className="content-table-wrapper">
          <table className="info-table">
            <thead>
              <tr>
                {block.headers.map((h, j) => (
                  <th key={j} dangerouslySetInnerHTML={{ __html: h }} />
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j}>
                  {row.map((cell, k) => (
                    <td key={k} dangerouslySetInnerHTML={{ __html: cell }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'divider':
      return <hr key={index} className="content-divider" />

    default:
      return null
  }
}

export default function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  const { preamble, sections } = useMemo(() => groupIntoSections(blocks), [blocks])

  const tocEntries = useMemo<TocEntry[]>(() => {
    const entries: TocEntry[] = []
    blocks.forEach((b) => {
      if (b.type === 'heading' && b.level === 2) {
        entries.push({ id: slugify(b.text), text: b.text, level: 2 })
      }
    })
    return entries
  }, [blocks])

  return (
    <div className="content-renderer">
      <TableOfContents entries={tocEntries} />

      {preamble.map(({ block, index }) => (
        <BlockRenderer key={index} block={block} index={index} />
      ))}

      {sections.map((section) => (
        <CollapsibleSection key={section.heading.id} section={section} defaultOpen={true} />
      ))}
    </div>
  )
}
