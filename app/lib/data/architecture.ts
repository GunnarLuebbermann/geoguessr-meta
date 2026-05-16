import { Category } from '../types'

export const architectureCategory: Category = {
  slug: 'architecture',
  title: 'Architecture',
  emoji: '🏠',
  description: 'Architectural styles and building features by region.',
  content: {
    title: 'Architecture',
    blocks: [
      { type: 'note', html: 'The architectural style is not strictly specific and may extend to nearby regions.' },
      { type: 'heading', level: 2, text: 'Europe' },
      { type: 'heading', level: 3, text: 'Red Brick' },
      { type: 'image', src: '/images/architecture/arch-nl.png', caption: 'Netherlands, Denmark' },
      { type: 'heading', level: 3, text: 'Diamond Grid Roof' },
      { type: 'image', src: '/images/architecture/diamond-cz.png', caption: 'Czechia, Slovakia, Hungary' },
      { type: 'heading', level: 3, text: 'Corrugated Sheet Roof' },
      { type: 'image', src: '/images/architecture/corrugated-lt.png', caption: 'Baltics' },
      { type: 'heading', level: 3, text: 'Slate Roof' },
      { type: 'image', src: '/images/architecture/slate-galicia.png', caption: 'Galicia (Spain)' },
      { type: 'heading', level: 3, text: 'Flint and Brick Terrace' },
      { type: 'text', html: 'Coastal south east England: Hampshire, Sussex, Kent, Norfolk, Suffolk' },
      { type: 'image', src: '/images/architecture/flint-brick.png', caption: 'Norfolk' },
      { type: 'heading', level: 3, text: 'Colored Wooden Triangle Roof' },
      { type: 'text', html: 'Max south Sweden: Skåne' },
      { type: 'image', src: '/images/architecture/wooden-triangle-roof.png', caption: 'Skåne' },
    ],
  },
}
