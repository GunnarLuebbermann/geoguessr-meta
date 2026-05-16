import { Category } from '../types'

export const placeNameCategory: Category = {
  slug: 'place-name',
  title: 'Place Name',
  emoji: '📍',
  description: 'Use place names and regional naming patterns to identify locations.',
  content: {
    title: 'Place Name',
    blocks: [
      { type: 'text', html: 'You can use the website <a href="https://dingyiyi0226.github.io/map-region/" target="_blank">Map Region Explorer</a> to check the place names in different countries.' },
      { type: 'heading', level: 2, text: 'Indonesia' },
      { type: 'image', src: '/images/external/Indonesia_administrative_divisions.png', caption: 'Indonesia administrative divisions' },
      { type: 'text', html: 'Key regions: Kalimantan, Sulawesi, Sumatra — each with distinct place name patterns.' },
      { type: 'heading', level: 2, text: 'Philippines' },
      { type: 'image', src: '/images/external/Ph_regions_and_provinces.png', caption: 'Philippines regions and provinces' },
      { type: 'heading', level: 2, text: 'Vietnam' },
      { type: 'image', src: '/images/external/Vietnam_administrative_divisions.png', caption: 'Vietnam administrative divisions' },
    ],
  },
}
