import { Category } from '../types'

export const vegetationCategory: Category = {
  slug: 'vegetation',
  title: 'Vegetation',
  emoji: '🌿',
  description: 'Trees, palms, cacti and agaves useful for geolocation.',
  subcategories: [
    {
      slug: 'europe',
      title: 'Europe',
      content: {
        title: 'Europe',
        blocks: [
          { type: 'heading', level: 2, text: 'Baltic pine — Pinus sylvestris' },
          { type: 'list', items: ['Orange-red bark', 'Sparse lower branches; crown concentrated at the top'] },
          { type: 'imageGrid', columns: [
            { title: 'Finland', src: '/images/vegetation/europe/baltic-pine-fi.png' },
            { title: 'Poland', src: '/images/vegetation/europe/baltic-pine-pl.png' },
          ]},
          { type: 'image', src: '/images/external/Pinus_sylvestris_range.png', caption: 'Distribution' },
          { type: 'heading', level: 2, text: 'Norway spruce — Picea abies' },
          { type: 'list', items: ['Drooping side branches; overall a conical or pyramidal shape with a narrow crown.'] },
          { type: 'imageGrid', columns: [
            { title: 'Finland', src: '/images/vegetation/europe/norway-spruce-fi.png' },
            { title: 'Austria', src: '/images/vegetation/europe/norway-spruce-at.png', caption: 'In dense spruce forests, lower trunks are often branchless.' },
          ]},
          { type: 'image', src: '/images/external/Norway_Spruce_distribution.png', caption: 'Distribution' },
          { type: 'heading', level: 2, text: 'European larch — Larix decidua' },
          { type: 'list', items: ['Bright green foliage in summer — will turn golden yellow in autumn (deciduous conifer)', 'Fissured bark'] },
          { type: 'imageGrid', columns: [
            { title: 'France', src: '/images/vegetation/europe/european-larch-fr.png' },
            { title: 'Austria', src: '/images/vegetation/europe/european-larch-at.png' },
          ]},
          { type: 'image', src: '/images/external/Larix_decidua_range.png', caption: 'Distribution' },
        ],
      },
    },
    {
      slug: 'mediterranean-pine',
      title: 'Mediterranean Pine',
      content: {
        title: 'Mediterranean Pine',
        blocks: [
          { type: 'text', html: 'These Mediterranean pines belong to the <a href="https://en.wikipedia.org/wiki/List_of_Pinus_species#Subsection_Pinaster" target="_blank">Pinus subsection Pinaster</a>.' },
          { type: 'heading', level: 2, text: 'Aleppo pine — Pinus halepensis' },
          { type: 'imageGrid', columns: [
            { title: 'Valencia, Spain', src: '/images/vegetation/mediterranean-pine/aleppo-pine-es.png' },
            { title: 'Distribution', src: '/images/vegetation/mediterranean-pine/aleppo-pine-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Turkish pine — Pinus brutia' },
          { type: 'list', items: ['Really similar to Aleppo pine', 'Cones persist longer on branches.'] },
          { type: 'imageGrid', columns: [
            { title: 'Aydin, Turkey', src: '/images/vegetation/mediterranean-pine/turkish-pine-tr.png' },
            { title: 'Distribution', src: '/images/vegetation/mediterranean-pine/turkish-pine-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Maritime pine — Pinus pinaster' },
          { type: 'text', html: 'Tall, straight trunks with relatively sparse lower branches.' },
          { type: 'imageGrid', columns: [
            { title: 'Landes, France', src: '/images/vegetation/mediterranean-pine/maritime-pine-fr.png' },
            { title: 'Distribution', src: '/images/vegetation/mediterranean-pine/maritime-pine-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Stone pine — Pinus pinea' },
          { type: 'imageGrid', columns: [
            { title: 'Andalusia, Spain', src: '/images/vegetation/mediterranean-pine/stone-pine-es.png' },
            { title: 'Distribution', src: '/images/vegetation/mediterranean-pine/stone-pine-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Canary Island pine — Pinus canariensis' },
          { type: 'text', html: 'Long needles, which make the crown look a bit "fluffier" or more feathery compared to some other pines.' },
          { type: 'imageGrid', columns: [
            { title: 'Tenerife, Spain', src: '/images/vegetation/mediterranean-pine/canary-island-pine.png' },
            { title: 'Distribution', src: '/images/vegetation/mediterranean-pine/canary-island-pine-dist.png' },
          ]},
        ],
      },
    },
    {
      slug: 'north-america',
      title: 'North America',
      content: {
        title: 'North America',
        blocks: [
          { type: 'heading', level: 2, text: 'Douglas fir — Pseudotsuga menziesii' },
          { type: 'list', items: ['Very tall and straight', 'Crown is conical in youth, becoming flattened or irregular with age', 'Stiff, pointed branch arrangement with upward angle', 'Oregon license plate tree'] },
          { type: 'imageGrid', columns: [
            { title: 'BC, Canada', src: '/images/vegetation/north-america/douglas-fir.png' },
            { title: 'Distribution: NW USA', src: '/images/vegetation/north-america/douglas-fir-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Loblolly pine — Pinus taeda' },
          { type: 'imageGrid', columns: [
            { title: 'Alabama, USA', src: '/images/vegetation/north-america/loblolly-pine.png' },
            { title: 'Distribution: SE USA', src: '/images/vegetation/north-america/loblolly-pine-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Pitch pine — Pinus rigida' },
          { type: 'list', items: ['Irregular, ragged, almost tortured silhouette', 'Sprouts tufts of needles directly from the trunk and major limbs'] },
          { type: 'imageGrid', columns: [
            { title: 'New Jersey, USA', src: '/images/vegetation/north-america/pitch-pine.png' },
            { title: 'Distribution: NE USA', src: '/images/vegetation/north-america/pitch-pine-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Eastern white pine — Pinus strobus' },
          { type: 'list', items: ['Soft, feathery, airy crown; branches in clear annual whorls with long horizontal layers', 'Needles appear in fluffy tufts at twig ends, giving a plume-like texture (5-needle bundles)'] },
          { type: 'imageGrid', columns: [
            { title: 'Maine, USA', src: '/images/vegetation/north-america/eastern-white-pine.png' },
            { title: 'Distribution: NE USA', src: '/images/vegetation/north-america/eastern-white-pine-dist.png' },
          ]},
        ],
      },
    },
    {
      slug: 'palm',
      title: 'Palm',
      content: {
        title: 'Palm',
        blocks: [
          { type: 'heading', level: 2, text: 'Carnaúba palm — Copernicia prunifera' },
          { type: 'text', html: 'Leaf scars may be visible on the trunk.' },
          { type: 'imageGrid', columns: [
            { title: 'Ceará, Brazil', src: '/images/vegetation/palm/carnauba-palm.png' },
            { title: 'Distribution: around Ceará', src: '/images/vegetation/palm/carnauba-palm-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Babassu palm — Attalea speciosa' },
          { type: 'imageGrid', columns: [
            { title: 'Maranhão, Brazil', src: '/images/vegetation/palm/babassu-palm.png' },
            { title: 'Distribution: mainly in Maranhão', src: '/images/vegetation/palm/babassu-palm-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Açaí palm — Euterpe oleracea' },
          { type: 'imageGrid', columns: [
            { title: 'Pará, Brazil', src: '/images/vegetation/palm/acai-palm.png' },
            { title: 'Distribution: Eastern Amazonia', src: '/images/vegetation/palm/acai-palm-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Moriche palm — Mauritia flexuosa' },
          { type: 'imageGrid', columns: [
            { title: 'Acre, Brazil', src: '/images/vegetation/palm/moriche-palm.png' },
            { title: 'Distribution: Western Amazonia', src: '/images/vegetation/palm/moriche-palm-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Caranday wax palm — Copernicia alba' },
          { type: 'imageGrid', columns: [
            { title: 'Chaco, Argentina', src: '/images/vegetation/palm/caranday-wax-palm.png' },
            { title: 'Distribution: humid Chaco region', src: '/images/vegetation/palm/caranday-wax-palm-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Caranday palm — Trithrinax campestris' },
          { type: 'text', html: 'Trunk fully hidden by dry dead leaf bases (coat).' },
          { type: 'imageGrid', columns: [
            { title: 'Córdoba, Argentina', src: '/images/vegetation/palm/caranday-palm.png' },
            { title: 'Distribution: Sierras de Córdoba', src: '/images/vegetation/palm/caranday-palm-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Yatay palm — Butia yatay' },
          { type: 'warning', html: 'Not really sure how to distinguish between Yatay palm, Macaw palm, and other similar species.' },
          { type: 'imageGrid', columns: [
            { title: 'Mato Grosso do Sul, Brazil', src: '/images/vegetation/palm/yatay-palm.png' },
            { title: 'Distribution: around Corrientes', src: '/images/vegetation/palm/yatay-palm-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Sabal yapa' },
          { type: 'text', html: 'Weeping, lax crown of narrow, deeply split, drooping segments.' },
          { type: 'imageGrid', columns: [
            { title: 'Yucatán, Mexico', src: '/images/vegetation/palm/sabal-yapa.png' },
            { title: 'Distribution: Yucatán peninsula', src: '/images/vegetation/palm/sabal-yapa-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Sabal rosei' },
          { type: 'text', html: 'Compared to Sabal mexicana: Usually slimmer. Crown a bit looser; you can "see through" gaps between petioles more easily.' },
          { type: 'imageGrid', columns: [
            { title: 'Nayarit, Mexico', src: '/images/vegetation/palm/sabal-rosei.png' },
            { title: 'Distribution: west coast of Mexico', src: '/images/vegetation/palm/sabal-rosei-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Sabal mexicana' },
          { type: 'text', html: 'Compared to Sabal rosei: Very stout. Crown full, nearly spherical; leaves numerous and densely inserted.' },
          { type: 'imageGrid', columns: [
            { title: 'Veracruz, Mexico', src: '/images/vegetation/palm/sabal-mexicana.png' },
            { title: 'Distribution: eastern Mexico', src: '/images/vegetation/palm/sabal-mexicana-dist.png' },
          ]},
        ],
      },
    },
    {
      slug: 'cactus',
      title: 'Cactus',
      content: {
        title: 'Cactus',
        blocks: [
          { type: 'heading', level: 2, text: 'Saguaro — Carnegiea gigantea' },
          { type: 'text', html: 'Tall, solitary column with pleated ribs and a few upward arms.' },
          { type: 'imageGrid', columns: [
            { title: 'Sonora, Mexico', src: '/images/vegetation/cactus/saguaro.png' },
            { title: 'Distribution: Sonora, Arizona', src: '/images/vegetation/cactus/saguaro-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Organ Pipe Cactus — Stenocereus thurberi' },
          { type: 'text', html: 'Many slender uniform stems emerging right at ground level.' },
          { type: 'imageGrid', columns: [
            { title: 'Sonora, Mexico', src: '/images/vegetation/cactus/organ-pipe-cactus.png' },
            { title: 'Distribution: Sonora, Baja Sur', src: '/images/vegetation/cactus/organ-pipe-cactus-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Giant cardon — Pachycereus pringlei' },
          { type: 'text', html: 'Multiple large arms; can form candelabra or clump.' },
          { type: 'imageGrid', columns: [
            { title: 'Baja California Sur, Mexico', src: '/images/vegetation/cactus/giant-cardon.png' },
            { title: 'Distribution: Baja California peninsula', src: '/images/vegetation/cactus/giant-cardon-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Candelabro — Pachycereus weberi' },
          { type: 'imageGrid', columns: [
            { title: 'Puebla, Mexico', src: '/images/vegetation/cactus/candelabro.png' },
            { title: 'Distribution: around Puebla and Oaxaca', src: '/images/vegetation/cactus/candelabro-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Stenocereus stellatus' },
          { type: 'text', html: 'Grows as a shrub or small tree, branching from near the base; often a short trunk. Height about 2 to 4 meters.' },
          { type: 'imageGrid', columns: [
            { title: 'Oaxaca, Mexico', src: '/images/vegetation/cactus/stenocereus-stellatus.png' },
            { title: 'Distribution: around Puebla and Oaxaca', src: '/images/vegetation/cactus/stenocereus-stellatus-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Blue Myrtle Cactus — Myrtillocactus geometrizans' },
          { type: 'text', html: 'Blue-green candelabra tree with very short spines.' },
          { type: 'imageGrid', columns: [
            { title: 'San Luis Potosi, Mexico', src: '/images/vegetation/cactus/blue-myrtle.png' },
            { title: 'Distribution: around SLP', src: '/images/vegetation/cactus/blue-myrtle-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Teddybear Cholla — Cylindropuntia bigelovii' },
          { type: 'text', html: 'Extremely dense sheathed spines (glistening cream to yellow) giving a fuzzy outline.' },
          { type: 'imageGrid', columns: [
            { title: 'Arizona, USA', src: '/images/vegetation/cactus/teddybear-cholla.png' },
            { title: 'Distribution: Sonoran Desert', src: '/images/vegetation/cactus/teddybear-cholla-dist.png' },
          ]},
        ],
      },
    },
    {
      slug: 'agave',
      title: 'Agave',
      content: {
        title: 'Agave',
        blocks: [
          { type: 'heading', level: 2, text: 'Blue agave — Agave tequilana' },
          { type: 'text', html: 'Blue agave field distribution: Jalisco' },
          { type: 'image', src: '/images/vegetation/agave/blue-agave.png', caption: 'Jalisco, Mexico' },
          { type: 'heading', level: 2, text: 'Caribbean agave — Agave angustifolia' },
          { type: 'text', html: 'Caribbean agave field distribution: central Oaxaca. Less blue than Blue agave.' },
          { type: 'image', src: '/images/vegetation/agave/caribbean-agave.png', caption: 'Oaxaca, Mexico' },
          { type: 'heading', level: 2, text: 'Agave karwinskii' },
          { type: 'text', html: 'Slender, trunk-forming agave (caulescent) with a narrow, upright rosette.' },
          { type: 'imageGrid', columns: [
            { title: 'Oaxaca, Mexico', src: '/images/vegetation/agave/agave-karwinskii.png' },
            { title: 'Distribution: central Oaxaca', src: '/images/vegetation/agave/agave-karwinskii-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Agave salmiana' },
          { type: 'imageGrid', columns: [
            { title: 'Tlaxcala, Mexico', src: '/images/vegetation/agave/agave-salmiana.png' },
            { title: 'Distribution: around Hidalgo, Tlaxcala', src: '/images/vegetation/agave/agave-salmiana-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Tree yucca — Yucca filifera' },
          { type: 'imageGrid', columns: [
            { title: 'San Luis Potosi, Mexico', src: '/images/vegetation/agave/tree-yucca.png' },
            { title: 'Distribution', src: '/images/vegetation/agave/tree-yucca-dist.png' },
          ]},
        ],
      },
    },
    {
      slug: 'araucaria',
      title: 'Araucaria',
      content: {
        title: 'Araucaria',
        blocks: [
          { type: 'heading', level: 2, text: 'Hoop pine — Araucaria cunninghamii' },
          { type: 'imageGrid', columns: [
            { title: 'Queensland, Australia', src: '/images/vegetation/araucaria/hoop-pine.png' },
            { title: 'Distribution: NE NSW to QLD', src: '/images/vegetation/araucaria/hoop-pine-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Paraná pine — Araucaria angustifolia' },
          { type: 'imageGrid', columns: [
            { title: 'Paraná, Brazil', src: '/images/vegetation/araucaria/parana-pine.png' },
            { title: 'Distribution: around Paraná', src: '/images/vegetation/araucaria/parana-pine-dist.png' },
          ]},
          { type: 'heading', level: 2, text: 'Monkey puzzle tree — Araucaria araucana' },
          { type: 'imageGrid', columns: [
            { title: 'Araucanía, Chile', src: '/images/vegetation/araucaria/monkey-puzzle-tree.png' },
            { title: 'Distribution: Andes around Neuquén', src: '/images/vegetation/araucaria/monkey-puzzle-tree-dist.png' },
          ]},
        ],
      },
    },
  ],
  content: {
    title: 'Vegetation',
    blocks: [
      { type: 'text', html: 'You can use the <a href="https://www.inaturalist.org/observations" target="_blank">iNaturalist</a> website to search for the distribution of different tree species.' },
      { type: 'text', html: 'For <strong>Europe</strong> and <strong>North America</strong>, the most useful vegetation types are coniferous trees. Check out the Europe, Mediterranean Pines, and North America subcategories.' },
      { type: 'text', html: 'For <strong>Latin America</strong>, the most useful vegetation types are palms, cacti, and agaves. Check out the Palm, Cactus, and Agave subcategories.' },
    ],
  },
}
