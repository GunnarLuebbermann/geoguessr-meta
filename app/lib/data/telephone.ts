import { Category } from '../types'
import { countryCodes, japanAreaCodes, brazilAreaCodes, Region } from './phone-codes'

const regions: Region[] = ['Europe', 'Americas', 'Asia', 'Middle East', 'Africa', 'Oceania']

export const telephoneCategory: Category = {
  slug: 'telephone',
  title: 'Telephone',
  emoji: '📞',
  description: 'Learn country and area codes for fast location recognition.',
  content: {
    title: 'Telephone',
    blocks: [
      { type: 'note', html: 'Phone numbers appear on shop signs, billboards, trucks and real-estate signs. Domestic numbers usually drop the country code, so the <strong>area code</strong> is often more useful than the country code.' },
      { type: 'heading', level: 2, text: 'Japan Area Codes' },
      { type: 'text', html: 'Japanese numbers start with <strong>0</strong>; the next digit gives the region.' },
      {
        type: 'table',
        headers: ['Prefix', 'Region', 'Examples'],
        rows: japanAreaCodes.map((a) => [`<strong>${a.prefix}</strong>`, a.region, a.examples]),
      },
      { type: 'image', src: '/images/external/japan-area-codes.png', caption: 'Japan area codes map' },
      { type: 'heading', level: 2, text: 'Brazil Area Codes (DDD)' },
      { type: 'text', html: 'Brazilian DDD codes are two digits; the first digit gives the region.' },
      {
        type: 'table',
        headers: ['DDD', 'Region', 'Examples'],
        rows: brazilAreaCodes.map((a) => [`<strong>${a.prefix}</strong>`, a.region, a.examples]),
      },
      { type: 'image', src: '/images/external/Brasil_Codigos_de_area_DDD.png', caption: 'Brazil area codes map' },
      { type: 'heading', level: 2, text: 'Country Codes' },
      ...regions.flatMap((region) => [
        { type: 'heading' as const, level: 3 as const, text: region },
        {
          type: 'table' as const,
          headers: ['Code', 'Country'],
          rows: countryCodes
            .filter((c) => c.region === region)
            .sort((a, b) => a.code.localeCompare(b.code, undefined, { numeric: true }))
            .map((c) => [`<strong>${c.code}</strong>`, c.country]),
        },
      ]),
    ],
  },
}
