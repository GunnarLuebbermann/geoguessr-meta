import { Category } from '../types'

export const companyCategory: Category = {
  slug: 'company',
  title: 'Company',
  emoji: '🏢',
  description: 'Recognize telecom and brand logos to identify countries.',
  content: {
    title: 'Company',
    blocks: [
      { type: 'heading', level: 2, text: 'Tigo' },
      { type: 'text', html: 'Colombia, Bolivia, Guatemala, Panama, Costa Rica' },
      { type: 'image', src: '/images/external/Logo_Tigo.svg', caption: 'Tigo logo', maxWidth: '300px' },
    ],
  },
}
