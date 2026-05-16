import { Category } from '../types'

export const telephoneCategory: Category = {
  slug: 'telephone',
  title: 'Telephone',
  emoji: '📞',
  description: 'Learn country and area codes for fast location recognition.',
  content: {
    title: 'Telephone',
    blocks: [
      { type: 'heading', level: 2, text: 'Area Codes' },
      { type: 'heading', level: 3, text: 'Japan' },
      { type: 'list', items: ['Tokyo: 03, 04X', 'Osaka: 06, 08X', 'Kyoto: 075', 'Hokkaido: 01X'] },
      { type: 'image', src: '/images/external/chevron-19.png', caption: 'Japan area codes' },
      { type: 'heading', level: 3, text: 'Brazil' },
      { type: 'list', items: ['São Paulo: 11', 'Rio: 21', 'Brasília: 61', 'Fortaleza: 85'] },
      { type: 'image', src: '/images/external/Brasil_Codigos_de_area_DDD.png', caption: 'Brazil area codes' },
      { type: 'heading', level: 2, text: 'Country Codes' },
      {
        type: 'table',
        headers: ['Code', 'Country', '', 'Code', 'Country'],
        rows: [
          ['+61', 'Australia', '', '+54', 'Argentina'],
          ['+64', 'New Zealand', '', '+56', 'Chile'],
          ['', '', '', '+51', 'Peru'],
          ['+250', 'Rwanda', '', '+591', 'Bolivia'],
          ['+254', 'Kenya', '', '+593', 'Ecuador'],
          ['+256', 'Uganda', '', '+598', 'Uruguay'],
        ],
      },
    ],
  },
}
