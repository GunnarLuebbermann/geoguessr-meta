import { Category } from '../types'

export const bollardCategory: Category = {
  slug: 'bollard',
  title: 'Bollard',
  emoji: '🔶',
  description: 'Identify bollard types and styles across different countries.',
  content: {
    title: 'Bollard',
    blocks: [
      { type: 'heading', level: 2, text: 'French Style' },
      { type: 'imageGrid', columns: [
        { title: 'France, Senegal', src: '/images/bollard/bollard-fr.png', caption: 'red or grey' },
        { title: 'Scotland (UK)', src: '/images/bollard/bollard-scotland.png', caption: 'rounded top' },
        { title: 'France', src: '/images/bollard/bollard-flag-fr.png' },
      ]},
      { type: 'heading', level: 2, text: 'Czech, Slovakia: Double Reflectors' },
      { type: 'imageGrid', columns: [
        { title: 'Wedge', src: '/images/bollard/bollard-cz.png' },
        { title: 'Curved', src: '/images/bollard/bollard-sk.png' },
      ]},
      { type: 'heading', level: 2, text: 'White Wedge with Reflector' },
      { type: 'imageGrid', columns: [
        { title: 'Belgium', src: '/images/bollard/bollard-be.png', caption: 'yellow reflector' },
        { title: 'Denmark', src: '/images/bollard/bollard-dk.png', caption: 'yellow with stripe' },
        { title: 'Cyprus', src: '/images/bollard/bollard-cy.png', caption: 'red reflector' },
      ]},
      { type: 'heading', level: 2, text: 'Rounded Top, Cylindrical, Black and White' },
      { type: 'text', html: 'Switzerland, Liechtenstein' },
      { type: 'image', src: '/images/bollard/bollard-li.png' },
      { type: 'heading', level: 2, text: 'Spanish Style: Orange and White' },
      { type: 'imageGrid', columns: [
        { title: 'Spain', src: '/images/bollard/bollard-es.png' },
        { title: 'Chile', src: '/images/external/bollard.png' },
      ]},
      { type: 'heading', level: 2, text: 'Wedge, Rectangular Reflector' },
      { type: 'imageGrid', columns: [
        { title: 'Andorra, Canary Islands, Spain', src: '/images/bollard/bollard-ad.png', caption: 'orange front reflector' },
        { title: 'Greece', src: '/images/bollard/slavic-style/bollard-gr.png', caption: 'red front reflector' },
      ]},
      { type: 'heading', level: 2, text: 'Two Red Stripes: Netherlands, Belgium' },
      { type: 'image', src: '/images/bollard/bollard-be-2.png' },
      { type: 'heading', level: 2, text: 'South East Asia Style' },
      { type: 'imageGrid', columns: [
        { title: 'Red and White', src: '/images/bollard/bollard-bd.png', caption: 'Bangladesh, Cambodia' },
        { title: 'Black and White', src: '/images/bollard/bollard-th.png', caption: 'Thailand, Laos, Indonesia' },
        { title: 'Sri Lanka', src: '/images/bollard/bollard-lk.png' },
      ]},
      { type: 'heading', level: 2, text: 'Concrete' },
      { type: 'imageGrid', columns: [
        { title: 'Mexico', src: '/images/bollard/bollard-mx.png', caption: 'sometimes no yellow' },
        { title: 'Moquegua (Peru)', src: '/images/bollard/bollard-moquegua.png' },
        { title: 'Peru', src: '/images/bollard/bollard-pe.png' },
      ]},
      { type: 'heading', level: 2, text: 'Misc' },
      { type: 'imageGrid', columns: [
        { title: 'Mongolia', src: '/images/bollard/bollard-mn.png', caption: 'bowling shape' },
        { title: 'Iceland', src: '/images/bollard/bollard-is.png' },
      ]},
    ],
  },
}
