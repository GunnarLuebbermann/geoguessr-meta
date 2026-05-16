import { Category } from '../types'

export const roadNumberingCategory: Category = {
  slug: 'road-numbering',
  title: 'Road Numbering',
  emoji: '🔢',
  description: 'Road numbering systems and conventions by country.',
  content: {
    title: 'Road Numbering System',
    blocks: [
      { type: 'text', html: '<a href="https://sites.google.com/site/roadnumberingsystems/home" target="_blank">Road Numbering System reference</a>' },
      { type: 'heading', level: 2, text: 'Australia' },
      { type: 'list', items: [
        'Only Victoria, Tasmania have >C100 roads',
        'Only Victoria has >B100 roads (SA has B100)',
      ]},
      { type: 'heading', level: 2, text: 'Spain' },
      { type: 'image', src: '/images/external/Spain-road-prefixes.png', caption: 'Spain road prefixes' },
      { type: 'text', html: 'Province of Spain for reference:' },
      { type: 'image', src: '/images/external/Provinces_of_Spain.svg', caption: 'Provinces of Spain' },
    ],
  },
}
