export type ContentBlock =
  | { type: 'heading'; level: 2 | 3 | 4; text: string }
  | { type: 'text'; html: string }
  | { type: 'list'; items: string[] }
  | { type: 'note'; title?: string; html: string }
  | { type: 'warning'; title?: string; html: string }
  | { type: 'image'; src: string; caption?: string; maxWidth?: string }
  | { type: 'imageGrid'; columns: { title?: string; src: string; caption?: string; link?: string }[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'divider' }

export type TopicContent = {
  title: string
  description?: string
  blocks: ContentBlock[]
}

export type Category = {
  slug: string
  title: string
  emoji: string
  description: string
  content?: TopicContent
  subcategories?: {
    slug: string
    title: string
    content: TopicContent
  }[]
}
