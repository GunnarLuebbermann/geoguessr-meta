import { Category } from '../types'

export const poleCategory: Category = {
  slug: 'pole',
  title: 'Pole',
  emoji: '🔌',
  description: 'Recognize pole types, tops, plates, and their likely countries.',
  content: {
    title: 'Pole',
    blocks: [
      { type: 'text', html: 'Utility poles are one of the most useful meta clues in Geoguessr. Pay attention to pole tops, plates, paint markings, and transformer mounting positions.' },
    ],
  },
  subcategories: [
    {
      slug: 'pole-top',
      title: 'Pole Top',
      content: {
        title: 'Pole Top',
        blocks: [
          { type: 'heading', level: 2, text: 'American Style' },
          { type: 'text', html: 'US, Canada, Philippines' },
          { type: 'image', src: '/images/pole/pole-top/pole-top-us.png' },
          { type: 'heading', level: 2, text: 'Hook' },
          { type: 'imageGrid', columns: [
            { title: 'Latvia', src: '/images/pole/pole-top/hook-lv.png' },
            { title: 'Bulgaria', src: '/images/pole/pole-top/hook-bg.png' },
          ]},
          { type: 'heading', level: 2, text: 'Romanian Style' },
          { type: 'text', html: 'Romania, Czechia, Slovakia, Albania, Serbia' },
          { type: 'image', src: '/images/pole/pole-top/pole-top-ro.png' },
          { type: 'heading', level: 2, text: 'Bulgaria' },
          { type: 'image', src: '/images/pole/pole-top/pole-top-bg.png' },
          { type: 'heading', level: 2, text: 'Three Horizontal Bars' },
          { type: 'imageGrid', columns: [
            { title: 'Argentina', src: '/images/pole/pole-top/pole-top-bar-ar.png' },
            { title: 'Peru', src: '/images/pole/pole-top/pole-top-bar-pe.png' },
          ]},
        ],
      },
    },
    {
      slug: 'pole-plate',
      title: 'Pole Plate & Paint',
      content: {
        title: 'Pole Plate and Pole Paint',
        blocks: [
          { type: 'heading', level: 2, text: 'Blue Stickers' },
          { type: 'imageGrid', columns: [
            { title: 'France', src: '/images/pole/pole-plate/sticker-fr.png' },
            { title: 'Queensland, Australia', src: '/images/pole/pole-plate/sticker-qld.png' },
          ]},
          { type: 'heading', level: 2, text: 'Warning Signs' },
          { type: 'imageGrid', columns: [
            { title: 'United Kingdom', src: '/images/pole/pole-plate/warning-uk.png', caption: 'person got zapped' },
            { title: 'Ireland', src: '/images/pole/pole-plate/warning-ie.png' },
          ]},
          { type: 'heading', level: 2, text: 'Yellow Black Stripe' },
          { type: 'imageGrid', columns: [
            { title: 'Colombia', src: '/images/pole/pole-plate/stripe-co.png' },
            { title: 'Northern Colombia', src: '/images/pole/pole-plate/stripe-co-2.png', caption: 'wide yellow section' },
            { title: 'Peru', src: '/images/pole/pole-plate/stripe-pe.png' },
          ]},
          { type: 'heading', level: 2, text: 'Yellow Stripe' },
          { type: 'imageGrid', columns: [
            { title: 'California', src: '/images/pole/pole-plate/yellow-ca.png', caption: '3 stripes' },
            { title: 'Hawaii', src: '/images/pole/pole-plate/yellow-hi.png', caption: '1 stripe' },
          ]},
        ],
      },
    },
    {
      slug: 'japan',
      title: 'Japan',
      content: {
        title: 'Japan Poles',
        blocks: [
          { type: 'heading', level: 2, text: 'Crossbar Mounting' },
          { type: 'imageGrid', columns: [
            { title: 'Chugoku 中国', src: '/images/pole/japan/bar-chugoku.png', caption: 'full triangle at mount point' },
            { title: 'Shikoku 四国', src: '/images/pole/japan/bar-shikoku.png', caption: 'half triangle at mount point' },
          ]},
          { type: 'heading', level: 2, text: 'Bar Mounted on Vertical Bar: Kansai 関西' },
          { type: 'image', src: '/images/pole/japan/bar-vertical.png' },
          { type: 'heading', level: 2, text: 'Bar Mounted on Square' },
          { type: 'imageGrid', columns: [
            { title: 'Tohoku 東北', src: '/images/pole/japan/bar-tohoku.png', caption: 'top of square' },
            { title: 'Kansai 関西', src: '/images/pole/japan/bar-kansai.png', caption: 'bottom of square' },
          ]},
          { type: 'heading', level: 2, text: 'Transformer Mounted Position' },
          { type: 'heading', level: 3, text: 'On Square' },
          { type: 'imageGrid', columns: [
            { title: 'Tohoku 東北', src: '/images/pole/japan/bar-tohoku.png', caption: 'bar at square top' },
            { title: 'Kansai 関西', src: '/images/pole/japan/bar-kansai.png', caption: 'bar at square bottom' },
            { title: 'Hokkaido 北海道', src: '/images/pole/japan/square-hokkaido.png', caption: 'no bar' },
          ]},
          { type: 'heading', level: 3, text: 'On Opposite Side' },
          { type: 'imageGrid', columns: [
            { title: 'Okinawa 沖縄', src: '/images/pole/japan/bar-okinawa.png' },
            { title: 'Kyushu 九州', src: '/images/pole/japan/bar-kyushu.png' },
          ]},
          { type: 'heading', level: 3, text: 'On Plate' },
          { type: 'imageGrid', columns: [
            { title: 'Kanto 関東', src: '/images/pole/japan/wooden-plate.png', caption: 'wooden plate' },
            { title: 'Kanto 関東', src: '/images/pole/japan/round-plate.png', caption: 'round plate' },
            { title: 'Tohoku 東北', src: '/images/pole/japan/zigzag-tohoku.png', caption: 'with zigzag bar' },
          ]},
          { type: 'heading', level: 3, text: 'On Two Bars' },
          { type: 'imageGrid', columns: [
            { title: 'Hokkaido 北海道', src: '/images/pole/japan/two-bars.png' },
            { title: 'Kanto 関東', src: '/images/pole/japan/wooden-plate.png', caption: 'always with wooden plate' },
          ]},
          { type: 'heading', level: 2, text: 'Zigzag Bar' },
          { type: 'imageGrid', columns: [
            { title: 'Kansai 関西', src: '/images/pole/japan/zigzag-kansai.png' },
            { title: 'Tohoku 東北', src: '/images/pole/japan/zigzag-tohoku.png', caption: 'with round plate' },
          ]},
          { type: 'imageGrid', columns: [
            { title: '120 Degree — Kansai', src: '/images/pole/japan/zigzag-120.png' },
            { title: '90 Degree — Shikoku', src: '/images/pole/japan/zigzag-90.png' },
          ]},
          { type: 'heading', level: 2, text: 'Pole Top Bar' },
          { type: 'imageGrid', columns: [
            { title: 'Long bar — Kanto', src: '/images/pole/japan/topbar-long.png' },
            { title: 'Short bar — Chubu', src: '/images/pole/japan/topbar-short.png' },
            { title: 'Thin line — Kansai', src: '/images/pole/japan/zigzag-120.png' },
          ]},
          { type: 'heading', level: 2, text: 'Pole Top Pyramid' },
          { type: 'imageGrid', columns: [
            { title: 'Four thick bar — Chubu', src: '/images/pole/japan/pyramid-thick.png' },
            { title: 'Two side tent — Hokuriku', src: '/images/pole/japan/pyramid-tent.png' },
            { title: 'Four thin bar — Chugoku', src: '/images/pole/japan/pyramid-thin.png' },
          ]},
          { type: 'heading', level: 2, text: 'Triangle Bar: Chubu 中部' },
          { type: 'image', src: '/images/pole/japan/triangle-bar.png' },
          { type: 'heading', level: 2, text: 'Insulator' },
          { type: 'imageGrid', columns: [
            { title: 'Long horizontal — Chugoku', src: '/images/pole/japan/insulator-long-hori.png' },
            { title: 'Lamp — Hokuriku', src: '/images/pole/japan/insulator-lamp.png' },
          ]},
        ],
      },
    },
    {
      slug: 'north-america',
      title: 'North America',
      content: {
        title: 'North America Poles',
        blocks: [
          { type: 'text', html: '<a href="https://docs.google.com/document/d/15DuGdsvKMqv5O-XiFwhNuczw89jVqg8XycY7brvhjP4/edit?tab=t.0" target="_blank">Comprehensive Canada doc</a> by Davis Savage<br/><a href="https://docs.google.com/document/d/14A6H1kXOuWGYRSjUWiVqKz4jDMZReedCJr5fUtv-pJs/edit?tab=t.0" target="_blank">State of the US doc</a> by Jayless' },
          { type: 'warning', html: 'The US part is not finished yet. The US has tons of similar pole tops.' },
          { type: 'heading', level: 2, text: 'Trident Pole Top' },
          { type: 'imageGrid', columns: [
            { title: 'Ontario, BC (rare)', src: '/images/pole/north-america/poletop-ontario.png' },
            { title: 'Quebec', src: '/images/pole/north-america/poletop-quebec.png' },
            { title: 'Prince Edward Island', src: '/images/pole/north-america/poletop-pei.png' },
          ]},
          { type: 'heading', level: 2, text: 'Saskatchewan Alternating' },
          { type: 'image', src: '/images/external/SK_Alternating_Pole_Tops.png', caption: 'Saskatchewan alternating pole tops' },
          { type: 'heading', level: 2, text: 'Alberta' },
          { type: 'image', src: '/images/pole/north-america/poletop-alberta.png' },
          { type: 'heading', level: 2, text: 'Manitoba Style' },
          { type: 'text', html: 'Sometimes in Alberta' },
          { type: 'image', src: '/images/pole/north-america/poletop-manitoba.png' },
          { type: 'heading', level: 2, text: 'L Shaped' },
          { type: 'text', html: 'BC, Gaspé peninsula (Quebec)' },
          { type: 'image', src: '/images/pole/north-america/poletop-l-shaped.png' },
          { type: 'heading', level: 2, text: 'Double Insulator' },
          { type: 'text', html: 'More common in <strong>New Brunswick</strong>' },
          { type: 'image', src: '/images/pole/north-america/poletop-double-insulator.png' },
          { type: 'heading', level: 2, text: 'Side Wire: Manitoba' },
          { type: 'image', src: '/images/pole/north-america/side-wire.png' },
          { type: 'heading', level: 2, text: 'Crossbeam Position' },
          { type: 'imageGrid', columns: [
            { title: 'Higher — NB, Quebec', src: '/images/pole/north-america/crossbeam-nb.png' },
            { title: 'Lower — NS, Ontario', src: '/images/pole/north-america/crossbeam-ns.png' },
          ]},
        ],
      },
    },
    {
      slug: 'argentina',
      title: 'Argentina',
      content: {
        title: 'Argentina Poles',
        blocks: [
          { type: 'text', html: 'Argentina-specific pole characteristics and patterns.' },
        ],
      },
    },
  ],
}
