import { Category } from '../types'

export const guardrailCategory: Category = {
  slug: 'guardrail',
  title: 'Guardrail',
  emoji: '🛡️',
  description: 'Guardrail types and reflector colors across regions.',
  content: {
    title: 'Guardrail',
    blocks: [
      { type: 'heading', level: 2, text: 'Europe Summary' },
      { type: 'list', items: [
        '<strong>B type</strong>: Denmark, Germany, Poland, Croatia, Serbia, Montenegro, Ireland, Turkey',
        '<strong>B type no reflector</strong>: Denmark, Germany',
        '<strong>Yellow reflector</strong>: Spain, Belgium, Andorra',
        '<strong>White reflector</strong>: France, Sweden, Iceland, Latvia',
        '<strong>Orange reflector</strong>: Lithuania, <em>Italy (rare)</em>',
        '<strong>Thin B type</strong>: Czechia, Slovakia, <em>France (rare)</em>',
      ]},
      { type: 'image', src: '/images/external/europeguardrail.png', caption: 'European guardrail overview' },
      { type: 'heading', level: 2, text: 'Norway: Wooden Posts' },
      { type: 'image', src: '/images/guardrail/guardrail-no.png' },
      { type: 'heading', level: 2, text: 'Canada' },
      { type: 'imageGrid', columns: [
        { title: 'New Brunswick', src: '/images/guardrail/guardrail-nb.png', caption: 'generic Canadian style' },
        { title: 'Nova Scotia', src: '/images/guardrail/guardrail-ns.png', caption: 'longer 2nd piece, w/ reflector' },
        { title: 'Newfoundland', src: '/images/guardrail/guardrail-nl.png', caption: 'pyramid top' },
      ]},
      { type: 'heading', level: 3, text: 'Ontario' },
      { type: 'image', src: '/images/guardrail/guardrail-on.png', caption: 'wooden with 3 wires' },
      { type: 'heading', level: 3, text: 'Quebec: coexist with bollards' },
      { type: 'heading', level: 3, text: 'British Columbia: no guardrail' },
    ],
  },
}
