import { Category } from '../types'

export const pavementCategory: Category = {
  slug: 'pavement',
  title: 'Pavement',
  emoji: '🧱',
  description: 'Pavement and cobblestone patterns by region.',
  content: {
    title: 'Pavement',
    blocks: [
      { type: 'heading', level: 2, text: 'Europe' },
      { type: 'imageGrid', columns: [
        { src: '/images/pavement/brick-nl.png', caption: 'Netherlands' },
        { src: '/images/pavement/brick-tr.png', caption: 'Turkey' },
      ]},
      { type: 'heading', level: 2, text: 'South America' },
      { type: 'heading', level: 3, text: 'Turtle Shape' },
      { type: 'image', src: '/images/pavement/turtle-ec.png', caption: 'Ecuador' },
      { type: 'heading', level: 3, text: 'Hexagonal' },
      { type: 'text', html: 'Puebla/Tlaxcala (Mexico), Santa Catarina/Minas Gerais (Brazil)' },
      { type: 'image', src: '/images/pavement/hex-mx.png', caption: '' },
      { type: 'heading', level: 3, text: 'Cobblestone' },
      { type: 'imageGrid', columns: [
        { src: '/images/pavement/stone-ba.png', caption: 'Standard — North East Brazil, RS (Brazil)' },
        { src: '/images/pavement/stone-rs.png', caption: 'Random size — Minas Gerais, RS (Brazil)' },
        { src: '/images/pavement/stone-pr.png', caption: 'Uneven square — Santa Catarina, RS (Brazil)' },
      ]},
      { type: 'imageGrid', columns: [
        { src: '/images/pavement/stone-jalisco.png', caption: 'Random size — Jalisco (Central Mexico)' },
        { src: '/images/pavement/stone-bo.png', caption: 'With lines between — Bolivia' },
      ]},
    ],
  },
}
