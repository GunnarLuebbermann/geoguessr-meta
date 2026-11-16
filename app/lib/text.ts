import { ContentBlock } from './types'

/** Flatten content blocks to plain text (for search and cross-referencing). */
export function blocksToText(blocks: ContentBlock[] = []): string {
  const parts: string[] = []
  for (const b of blocks) {
    switch (b.type) {
      case 'heading': parts.push(b.text); break
      case 'text': parts.push(b.html); break
      case 'list': parts.push(...b.items); break
      case 'note':
      case 'warning': parts.push(b.title ?? '', b.html); break
      case 'image': parts.push(b.caption ?? ''); break
      case 'imageGrid': b.columns.forEach((c) => parts.push(c.title ?? '', c.caption ?? '')); break
      case 'table': parts.push(...b.headers, ...b.rows.flat()); break
    }
  }
  return parts.join(' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ')
}
