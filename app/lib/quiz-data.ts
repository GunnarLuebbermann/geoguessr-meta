import { QuizQuestion, QuizCategory } from './quiz-types'
import { countryCodes, japanAreaCodes, brazilAreaCodes } from './data/phone-codes'

// ─── Helpers ───
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pick<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n)
}

function pickDistractors(correct: string, pool: string[], n = 3): string[] {
  const own = pick([...new Set(pool)].filter((x) => x !== correct), n)
  if (own.length >= n) return own
  // Small pool (e.g. Oceania): top up with random world countries
  const extra = pick(worldCountries.filter((x) => x !== correct && !own.includes(x)), n - own.length)
  return [...own, ...extra]
}

// ─── Country pools for distractors ───
const europeCountries = [
  'Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Czechia', 'Denmark',
  'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland',
  'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Montenegro',
  'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania',
  'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'UK',
]

const worldCountries = [
  ...europeCountries,
  'Argentina', 'Australia', 'Bangladesh', 'Bolivia', 'Brazil', 'Canada', 'Chile',
  'Colombia', 'Ecuador', 'Ghana', 'Guatemala', 'India', 'Indonesia', 'Japan',
  'Jordan', 'Kenya', 'Kyrgyzstan', 'Laos', 'Madagascar', 'Malaysia', 'Mexico',
  'Mongolia', 'New Zealand', 'Nigeria', 'Pakistan', 'Panama', 'Peru', 'Philippines',
  'Qatar', 'Rwanda', 'Senegal', 'South Africa', 'Sri Lanka', 'Thailand', 'Tunisia',
  'UAE', 'Uganda', 'Uruguay', 'USA', 'Vietnam',
]

// ══════════════════════════════════════════
// 1. CAR META QUIZ — Image → Country
// ══════════════════════════════════════════
const carMetaQuestions: QuizQuestion[] = [
  // Geometas regional cars
  { id: 'car-kenya-1', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/kenya-snorkel.jpg', answer: 'Kenya', distractors: ['Nigeria', 'Uganda', 'Ghana'], category: 'car-meta', clue: 'Notice the snorkel on the front.' },
  { id: 'car-kenya-2', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/kenya-new.jpg', answer: 'Kenya', distractors: ['Senegal', 'Rwanda', 'South Africa'], category: 'car-meta' },
  { id: 'car-nigeria-1', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/nigeria-rack.jpg', answer: 'Nigeria', distractors: ['Ghana', 'Kenya', 'Senegal'], category: 'car-meta', clue: 'Look at the yellow-and-black rack pattern.' },
  { id: 'car-nigeria-2', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/nigeria-truck.jpg', answer: 'Nigeria', distractors: ['Uganda', 'Kenya', 'South Africa'], category: 'car-meta' },
  { id: 'car-senegal-1', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/senegal-gen3.jpg', answer: 'Senegal', distractors: ['Ghana', 'Nigeria', 'Kenya'], category: 'car-meta' },
  { id: 'car-senegal-2', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/senegal-gen4-white.jpg', answer: 'Senegal', distractors: ['Qatar', 'UAE', 'Kenya'], category: 'car-meta' },
  { id: 'car-ghana', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/ghana.jpg', answer: 'Ghana', distractors: ['Nigeria', 'Senegal', 'Kenya'], category: 'car-meta', clue: 'Black tape on the right end of the front bar.' },
  { id: 'car-uganda-1', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/uganda-park.jpg', answer: 'Uganda', distractors: ['Kenya', 'Rwanda', 'South Africa'], category: 'car-meta' },
  { id: 'car-uganda-2', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/uganda-suv.jpg', answer: 'Uganda', distractors: ['Kenya', 'Rwanda', 'Nigeria'], category: 'car-meta' },
  { id: 'car-rwanda', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/rwanda.jpg', answer: 'Rwanda', distractors: ['Uganda', 'Kenya', 'Madagascar'], category: 'car-meta', clue: 'Camera mount always visible.' },
  { id: 'car-south-africa', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/south-africa.jpg', answer: 'South Africa', distractors: ['Kenya', 'Nigeria', 'Uganda'], category: 'car-meta', clue: 'Gen 2 coverage with halo.' },
  { id: 'car-uae-1', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/uae-white.jpg', answer: 'UAE', distractors: ['Qatar', 'Jordan', 'Saudi Arabia'], category: 'car-meta', clue: 'White car — not Jordan.' },
  { id: 'car-uae-2', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/uae-truck.jpg', answer: 'UAE', distractors: ['Qatar', 'Senegal', 'Jordan'], category: 'car-meta' },
  { id: 'car-jordan', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/jordan.jpg', answer: 'Jordan', distractors: ['UAE', 'Qatar', 'Tunisia'], category: 'car-meta', clue: 'Black car — not UAE.' },
  { id: 'car-qatar', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/qatar.jpg', answer: 'Qatar', distractors: ['UAE', 'Senegal', 'Jordan'], category: 'car-meta' },
  { id: 'car-india', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/india.jpg', answer: 'India', distractors: ['Bangladesh', 'Sri Lanka', 'Pakistan'], category: 'car-meta', clue: 'Large circular blur.' },
  { id: 'car-vietnam', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/vietnam.jpg', answer: 'Vietnam', distractors: ['Laos', 'Indonesia', 'Thailand'], category: 'car-meta', clue: 'Motorbike coverage.' },
  { id: 'car-kyrgyzstan', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/kyrgyzstan-bars.jpg', answer: 'Kyrgyzstan', distractors: ['Mongolia', 'Kazakhstan', 'Laos'], category: 'car-meta' },
  { id: 'car-mongolia-1', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/mongolia-bars.jpg', answer: 'Mongolia', distractors: ['Kyrgyzstan', 'Kazakhstan', 'Russia'], category: 'car-meta', clue: 'Red side mirrors.' },
  { id: 'car-mongolia-2', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/mongolia-camping.jpg', answer: 'Mongolia', distractors: ['Kyrgyzstan', 'Laos', 'Bangladesh'], category: 'car-meta', clue: '"Camping equipment" look.' },
  { id: 'car-laos', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/laos.jpg', answer: 'Laos', distractors: ['Vietnam', 'Bangladesh', 'Mongolia'], category: 'car-meta' },
  { id: 'car-pakistan', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/pakistan.jpg', answer: 'Pakistan', distractors: ['India', 'Bangladesh', 'Nepal'], category: 'car-meta', clue: 'Trekker coverage — person walking.' },
  { id: 'car-argentina', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/argentina.jpg', answer: 'Argentina', distractors: ['Uruguay', 'Chile', 'Brazil'], category: 'car-meta', clue: 'Ghostly black front.' },
  { id: 'car-uruguay', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/uruguay.jpg', answer: 'Uruguay', distractors: ['Argentina', 'Chile', 'Brazil'], category: 'car-meta' },
  { id: 'car-chile', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/chile.jpg', answer: 'Chile', distractors: ['Argentina', 'Colombia', 'Ecuador'], category: 'car-meta', clue: 'White rear visible.' },
  { id: 'car-colombia', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/colombia.jpg', answer: 'Colombia', distractors: ['Ecuador', 'Mexico', 'Brazil'], category: 'car-meta' },
  { id: 'car-ecuador', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/ecuador.jpg', answer: 'Ecuador', distractors: ['Colombia', 'Mexico', 'Brazil'], category: 'car-meta', clue: 'Stubby antenna.' },
  { id: 'car-panama', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/panama.jpg', answer: 'Panama', distractors: ['Guatemala', 'Colombia', 'Ecuador'], category: 'car-meta', clue: 'Unique antenna found nowhere else.' },
  { id: 'car-guatemala', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/guatemala.jpg', answer: 'Guatemala', distractors: ['Panama', 'Laos', 'Bangladesh'], category: 'car-meta' },
  { id: 'car-iceland', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/iceland.jpg', answer: 'Iceland', distractors: ['Faroe Islands', 'Norway', 'Ireland'], category: 'car-meta' },
  { id: 'car-germany', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/germany.jpg', answer: 'Germany', distractors: ['Netherlands', 'Austria', 'France'], category: 'car-meta', clue: 'Gen 4 blue tinge.' },
  { id: 'car-ukraine', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/ukraine.jpg', answer: 'Ukraine', distractors: ['Russia', 'Poland', 'Romania'], category: 'car-meta', clue: 'Red car with long antenna.' },
  { id: 'car-n-macedonia', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/north-macedonia.jpg', answer: 'North Macedonia', distractors: ['Serbia', 'Bulgaria', 'Croatia'], category: 'car-meta', clue: 'No antenna — unusual for Eastern Europe.' },
  { id: 'car-serbia', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/serbia.jpg', answer: 'Serbia', distractors: ['North Macedonia', 'Bulgaria', 'Romania'], category: 'car-meta', clue: 'No antenna — unusual for Eastern Europe.' },
  { id: 'car-faroe', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/faroe-islands.jpg', answer: 'Faroe Islands', distractors: ['Iceland', 'Norway', 'Scotland'], category: 'car-meta' },
  { id: 'car-guam', prompt: 'Which territory has this Google Street View car?', image: '/images/car-meta/geometas/guam.jpg', answer: 'Guam', distractors: ['Northern Mariana Islands', 'American Samoa', 'US Virgin Islands'], category: 'car-meta' },
  { id: 'car-nmi', prompt: 'Which territory has this Google Street View car?', image: '/images/car-meta/geometas/northern-mariana.jpg', answer: 'Northern Mariana Islands', distractors: ['Guam', 'American Samoa', 'Christmas Island'], category: 'car-meta' },
  { id: 'car-usvi', prompt: 'Which territory has this Google Street View car?', image: '/images/car-meta/geometas/us-virgin-islands.jpg', answer: 'US Virgin Islands', distractors: ['Bermuda', 'Christmas Island', 'American Samoa'], category: 'car-meta' },
  { id: 'car-am-samoa', prompt: 'Which territory has this Google Street View car?', image: '/images/car-meta/geometas/american-samoa.jpg', answer: 'American Samoa', distractors: ['Guam', 'Bermuda', 'Christmas Island'], category: 'car-meta' },
  { id: 'car-christmas', prompt: 'Which territory has this Google Street View car?', image: '/images/car-meta/geometas/christmas-island.jpg', answer: 'Christmas Island', distractors: ['American Samoa', 'US Virgin Islands', 'Guam'], category: 'car-meta' },
  { id: 'car-bermuda', prompt: 'Which territory has this Google Street View car?', image: '/images/car-meta/geometas/bermuda-truck.jpg', answer: 'Bermuda', distractors: ['US Virgin Islands', 'Curaçao', 'American Samoa'], category: 'car-meta' },
  { id: 'car-curacao', prompt: 'Which territory has this Google Street View car?', image: '/images/car-meta/geometas/curacao-bonnet.jpg', answer: 'Curaçao', distractors: ['Bermuda', 'Réunion', 'US Virgin Islands'], category: 'car-meta', clue: 'Bars + black bonnet — unique combination.' },
  { id: 'car-reunion', prompt: 'Which territory has this Google Street View car?', image: '/images/car-meta/geometas/reunion.jpg', answer: 'Réunion', distractors: ['Madagascar', 'Curaçao', 'Bermuda'], category: 'car-meta' },
  { id: 'car-tunisia-n', prompt: 'Which country has this follow car?', image: '/images/car-meta/geometas/tunisia-north.jpg', answer: 'Tunisia', distractors: ['Morocco', 'Algeria', 'Libya'], category: 'car-meta', clue: 'Green Toyota — north of Hammamet.' },
  { id: 'car-tunisia-s', prompt: 'Which country has this follow car?', image: '/images/car-meta/geometas/tunisia-south.jpg', answer: 'Tunisia', distractors: ['Morocco', 'Algeria', 'Jordan'], category: 'car-meta', clue: 'Dark green Mazda — south of Hammamet.' },
  { id: 'car-madagascar-1', prompt: 'Which country has this Google Street View coverage?', image: '/images/car-meta/geometas/madagascar-boat.jpg', answer: 'Madagascar', distractors: ['Philippines', 'Indonesia', 'Bangladesh'], category: 'car-meta', clue: 'Boat coverage.' },
  { id: 'car-madagascar-2', prompt: 'Which country has this Google Street View coverage?', image: '/images/car-meta/geometas/madagascar-ox.jpg', answer: 'Madagascar', distractors: ['India', 'Bangladesh', 'Myanmar'], category: 'car-meta', clue: 'Ox coverage.' },
  { id: 'car-sri-lanka-1', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/geometas/sri-lanka-gen3.jpg', answer: 'Sri Lanka', distractors: ['India', 'Bangladesh', 'Thailand'], category: 'car-meta', clue: 'Blue/white/red stripes.' },
  // Existing local car images
  { id: 'car-bermuda-local', prompt: 'Which territory has this Google Street View car?', image: '/images/car-meta/car-bermuda.png', answer: 'Bermuda', distractors: ['American Samoa', 'Curaçao', 'US Virgin Islands'], category: 'car-meta', clue: 'Black car, driving left.' },
  { id: 'car-sri-lanka-local', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/car-lk.png', answer: 'Sri Lanka', distractors: ['India', 'Bangladesh', 'Thailand'], category: 'car-meta', clue: 'Blue-white-red at the front.' },
  { id: 'car-bd-local', prompt: 'Which country has this Google Street View car?', image: '/images/car-meta/rack-bd.png', answer: 'Bangladesh', distractors: ['India', 'Laos', 'Mongolia'], category: 'car-meta' },
]

// ══════════════════════════════════════════
// 2. LANGUAGE QUIZ — Characters → Country
// ══════════════════════════════════════════
const languageQuestions: QuizQuestion[] = [
  { id: 'lang-cz', prompt: 'Which language uses these unique characters: ů ě ř?', answer: 'Czech', distractors: ['Slovak', 'Polish', 'Croatian'], category: 'language' },
  { id: 'lang-sk', prompt: 'Which language uses these unique characters: ô ŕ ĺ ľ?', answer: 'Slovak', distractors: ['Czech', 'Hungarian', 'Polish'], category: 'language' },
  { id: 'lang-hu', prompt: 'Which language uses these unique characters: ő ű?', answer: 'Hungarian', distractors: ['Romanian', 'Czech', 'Turkish'], category: 'language' },
  { id: 'lang-ro', prompt: 'Which language uses these unique characters: ă ș ț?', answer: 'Romanian', distractors: ['Turkish', 'Albanian', 'Hungarian'], category: 'language' },
  { id: 'lang-al', prompt: 'Which language uses ç and ë as unique characters?', answer: 'Albanian', distractors: ['Turkish', 'Romanian', 'French'], category: 'language' },
  { id: 'lang-tr', prompt: 'Which language uses these unique characters: İ ı ğ ş?', answer: 'Turkish', distractors: ['Albanian', 'Romanian', 'Azerbaijani'], category: 'language' },
  { id: 'lang-ee', prompt: 'Which language uses the unique character: õ?', answer: 'Estonian', distractors: ['Finnish', 'Latvian', 'Lithuanian'], category: 'language' },
  { id: 'lang-lv', prompt: 'Which language uses these unique characters: ģ ķ ļ ņ?', answer: 'Latvian', distractors: ['Lithuanian', 'Estonian', 'Polish'], category: 'language' },
  { id: 'lang-lt', prompt: 'Which language uses these unique characters: ė ą ę į ų?', answer: 'Lithuanian', distractors: ['Latvian', 'Polish', 'Estonian'], category: 'language' },
  { id: 'lang-pl', prompt: 'Which language uses these unique characters: ł ż?', answer: 'Polish', distractors: ['Czech', 'Croatian', 'Lithuanian'], category: 'language' },
  { id: 'lang-is', prompt: 'Which language uses the unique character: þ (thorn)?', answer: 'Icelandic', distractors: ['Faroese', 'Norwegian', 'Danish'], category: 'language' },
  { id: 'lang-mt', prompt: 'Which language uses these unique characters: ċ ġ ż ħ?', answer: 'Maltese', distractors: ['Turkish', 'Albanian', 'Croatian'], category: 'language' },
  { id: 'lang-pt', prompt: 'Which language uses ã and õ with cedilla (ç)?', answer: 'Portuguese', distractors: ['Spanish', 'French', 'Catalan'], category: 'language' },
  // Street words
  { id: 'lang-street-rua', prompt: 'In which language does "rua" mean street?', answer: 'Portuguese', distractors: ['Spanish', 'French', 'Romanian'], category: 'language' },
  { id: 'lang-street-rue', prompt: 'In which language does "rue" mean street?', answer: 'French', distractors: ['Portuguese', 'Italian', 'Spanish'], category: 'language' },
  { id: 'lang-street-calle', prompt: 'In which language does "calle" mean street?', answer: 'Spanish', distractors: ['Portuguese', 'Italian', 'Catalan'], category: 'language' },
  { id: 'lang-street-straat', prompt: 'In which language does "straat" mean street?', answer: 'Dutch', distractors: ['German', 'Danish', 'Swedish'], category: 'language' },
  { id: 'lang-street-gade', prompt: 'In which language does "gade" mean street?', answer: 'Danish', distractors: ['Norwegian', 'Swedish', 'Finnish'], category: 'language' },
  { id: 'lang-street-gate', prompt: 'In which language does "gate" mean street?', answer: 'Norwegian', distractors: ['Danish', 'Swedish', 'Icelandic'], category: 'language' },
  { id: 'lang-street-gatan', prompt: 'In which language does "gatan" mean street?', answer: 'Swedish', distractors: ['Norwegian', 'Danish', 'Finnish'], category: 'language' },
  { id: 'lang-street-gatvė', prompt: 'In which language does "gatvė" mean street?', answer: 'Lithuanian', distractors: ['Latvian', 'Estonian', 'Polish'], category: 'language' },
  { id: 'lang-street-katu', prompt: 'In which language does "katu" mean street?', answer: 'Finnish', distractors: ['Estonian', 'Swedish', 'Norwegian'], category: 'language' },
  { id: 'lang-street-ulica', prompt: 'In which language family does "ulica" mean street?', answer: 'Slavic', distractors: ['Baltic', 'Germanic', 'Romance'], category: 'language' },
  { id: 'lang-street-utca', prompt: 'In which language does "utca" mean street?', answer: 'Hungarian', distractors: ['Romanian', 'Turkish', 'Czech'], category: 'language' },
  { id: 'lang-street-iela', prompt: 'In which language does "iela" mean street?', answer: 'Latvian', distractors: ['Lithuanian', 'Estonian', 'Finnish'], category: 'language' },
  { id: 'lang-street-via', prompt: 'In which language does "via" mean street?', answer: 'Italian', distractors: ['Spanish', 'Portuguese', 'Romanian'], category: 'language' },
  { id: 'lang-street-rruga', prompt: 'In which language does "rruga" mean street?', answer: 'Albanian', distractors: ['Turkish', 'Romanian', 'Maltese'], category: 'language' },
  { id: 'lang-street-triq', prompt: 'In which language does "triq" mean street?', answer: 'Maltese', distractors: ['Albanian', 'Turkish', 'Arabic'], category: 'language' },
  { id: 'lang-street-kalea', prompt: 'In which language does "kalea" mean street?', answer: 'Basque', distractors: ['Catalan', 'Spanish', 'Galician'], category: 'language' },
  // Romance "and"
  { id: 'lang-and-y', prompt: 'Which Romance language uses "y" for "and"?', answer: 'Spanish', distractors: ['Portuguese', 'Catalan', 'French'], category: 'language' },
  { id: 'lang-and-i', prompt: 'Which Romance language uses "i" for "and"?', answer: 'Catalan', distractors: ['Spanish', 'Portuguese', 'Italian'], category: 'language' },
  { id: 'lang-and-e', prompt: 'Which Romance language uses "e" for "and"?', answer: 'Portuguese', distractors: ['Spanish', 'Catalan', 'French'], category: 'language' },
  // Cyrillic
  { id: 'lang-cyr-ua', prompt: 'Which country\'s Cyrillic uses: ґ є і ї?', answer: 'Ukraine', distractors: ['Russia', 'Bulgaria', 'Serbia'], category: 'language' },
  { id: 'lang-cyr-mk', prompt: 'Which country\'s Cyrillic uses: ѕ ѓ ќ?', answer: 'North Macedonia', distractors: ['Serbia', 'Bulgaria', 'Montenegro'], category: 'language' },
  { id: 'lang-cyr-rs', prompt: 'Which country\'s Cyrillic uses: ђ ћ (plus њ љ џ ј)?', answer: 'Serbia', distractors: ['North Macedonia', 'Bulgaria', 'Montenegro'], category: 'language' },
  { id: 'lang-cyr-ru', prompt: 'Which country\'s Cyrillic uses ы and э (never і or ї)?', answer: 'Russia', distractors: ['Ukraine', 'Bulgaria', 'Serbia'], category: 'language' },
  { id: 'lang-cyr-by', prompt: 'Which country\'s Cyrillic uses ў (short u)?', answer: 'Belarus', distractors: ['Russia', 'Ukraine', 'Bulgaria'], category: 'language' },
  { id: 'lang-cyr-bg', prompt: 'In which country is ъ used as a very frequent vowel?', answer: 'Bulgaria', distractors: ['Russia', 'Serbia', 'North Macedonia'], category: 'language' },
  { id: 'lang-cyr-kz', prompt: 'Which country\'s Cyrillic uses ә ғ қ ұ?', answer: 'Kazakhstan', distractors: ['Kyrgyzstan', 'Mongolia', 'Russia'], category: 'language' },
  { id: 'lang-cyr-mn', prompt: 'Cyrillic text with ө and ү, but no ң — which country?', answer: 'Mongolia', distractors: ['Kazakhstan', 'Kyrgyzstan', 'Russia'], category: 'language', clue: 'Kyrgyz uses ң as well.' },
  { id: 'lang-si-hr', prompt: 'You see č š ž but never ć or đ. Which language is it most likely?', answer: 'Slovenian', distractors: ['Croatian', 'Serbian (Latin)', 'Bosnian'], category: 'language' },
  { id: 'lang-hr-ije', prompt: 'Words like "rijeka" and "mlijeko" (with -ije-) point to which language?', answer: 'Croatian', distractors: ['Serbian', 'Slovenian', 'Slovak'], category: 'language', clue: 'Serbian writes "reka", "mleko".' },
  { id: 'lang-gl-concello', prompt: '"Concello" (municipality) and the street word "Rúa" point to which region?', answer: 'Galicia', distractors: ['Portugal', 'Catalonia', 'Basque Country'], category: 'language' },
  { id: 'lang-street-carrer', prompt: 'In which language does "carrer" mean street?', answer: 'Catalan', distractors: ['Spanish', 'Galician', 'Portuguese'], category: 'language' },
  { id: 'lang-street-tanav', prompt: 'In which language does "tänav" mean street?', answer: 'Estonian', distractors: ['Finnish', 'Latvian', 'Lithuanian'], category: 'language' },
  { id: 'lang-street-stryd', prompt: 'In which language does "stryd" mean street?', answer: 'Welsh', distractors: ['Irish', 'Scottish Gaelic', 'Icelandic'], category: 'language' },
  { id: 'lang-paunawa', prompt: '"Paunawa" (notice/caution) is a sign word from which country?', answer: 'Philippines', distractors: ['Indonesia', 'Malaysia', 'Thailand'], category: 'language' },
  { id: 'lang-misc-araf', prompt: '"Araf" (slow) is a traffic word from which country?', answer: 'Wales', distractors: ['Ireland', 'Scotland', 'Iceland'], category: 'language' },
  { id: 'lang-misc-awas', prompt: '"AWAS" (caution) is used in which countries?', answer: 'Malaysia & Indonesia', distractors: ['Philippines & Vietnam', 'Thailand & Laos', 'India & Sri Lanka'], category: 'language' },
]

// ══════════════════════════════════════════
// 3. TELEPHONE QUIZ — Code → Country
// ══════════════════════════════════════════
const telephoneQuestions: QuizQuestion[] = [
  ...countryCodes.map((c) => ({
    id: `tel-${c.code.slice(1)}`,
    prompt: `Which country has the phone code ${c.code}?`,
    answer: c.country,
    // Distractors from the same region make it a real test
    distractors: pickDistractors(c.country, countryCodes.filter((o) => o.region === c.region).map((o) => o.country)),
    category: 'telephone',
  })),
  ...japanAreaCodes.map((a) => ({
    id: `tel-jp-${a.prefix}`,
    prompt: `A Japanese phone number starts with ${a.prefix}… Which region are you in?`,
    answer: a.region,
    distractors: pickDistractors(a.region, japanAreaCodes.map((o) => o.region)),
    category: 'telephone',
    clue: a.examples,
  })),
  ...brazilAreaCodes.map((a) => ({
    id: `tel-br-${a.prefix}`,
    prompt: `A Brazilian phone number has DDD ${a.prefix}. Which region are you in?`,
    answer: a.region,
    distractors: pickDistractors(a.region, brazilAreaCodes.map((o) => o.region)),
    category: 'telephone',
    clue: a.examples,
  })),
  // Brazil area codes
  { id: 'tel-br-11', prompt: 'Which Brazilian city has area code 11?', answer: 'São Paulo', distractors: ['Rio de Janeiro', 'Brasília', 'Fortaleza'], category: 'telephone', clue: 'Brazil area code' },
  { id: 'tel-br-21', prompt: 'Which Brazilian city has area code 21?', answer: 'Rio de Janeiro', distractors: ['São Paulo', 'Brasília', 'Belo Horizonte'], category: 'telephone', clue: 'Brazil area code' },
  { id: 'tel-br-61', prompt: 'Which Brazilian city has area code 61?', answer: 'Brasília', distractors: ['São Paulo', 'Rio de Janeiro', 'Salvador'], category: 'telephone', clue: 'Brazil area code' },
]

// ══════════════════════════════════════════
// 4. LICENSE PLATE QUIZ — Image → Country
// ══════════════════════════════════════════
const licensePlateQuestions: QuizQuestion[] = [
  { id: 'plate-al', prompt: 'Which country has this license plate?', image: '/images/external/albania_plate.png', answer: 'Albania', distractors: ['Portugal', 'Norway', 'Belgium'], category: 'license-plate', clue: 'Red strip, blue right strip.' },
  { id: 'plate-pt', prompt: 'Which country has this license plate?', image: '/images/external/licenceplate_pt.png', answer: 'Portugal', distractors: ['Albania', 'Spain', 'Belgium'], category: 'license-plate', clue: 'Yellow right strip.' },
  { id: 'plate-no', prompt: 'Which country has this license plate?', image: '/images/external/no_licenceplate.png', answer: 'Norway', distractors: ['Sweden', 'Finland', 'Denmark'], category: 'license-plate', clue: 'Green plate.' },
  { id: 'plate-iom', prompt: 'Which territory has this license plate?', image: '/images/external/IOM_Plate.png', answer: 'Isle of Man', distractors: ['UK', 'Ireland', 'Jersey'], category: 'license-plate', clue: 'Red strip.' },
  { id: 'plate-dk', prompt: 'Which country has this license plate?', image: '/images/license-plate/plate-dk.png', answer: 'Denmark', distractors: ['Sweden', 'Norway', 'Finland'], category: 'license-plate', clue: 'Yellow section.' },
  { id: 'plate-be', prompt: 'Which country has this license plate?', image: '/images/external/Belgium_License_Plate.png', answer: 'Belgium', distractors: ['Netherlands', 'France', 'Luxembourg'], category: 'license-plate', clue: 'Red text.' },
  { id: 'plate-my', prompt: 'Which country has this license plate?', image: '/images/external/Malaysia_License_Plate.png', answer: 'Malaysia', distractors: ['Indonesia', 'Thailand', 'Philippines'], category: 'license-plate', clue: 'Two black sections.' },
  { id: 'plate-id', prompt: 'Which country has this license plate?', image: '/images/external/Indonesia_License_Plate.png', answer: 'Indonesia', distractors: ['Malaysia', 'Philippines', 'Vietnam'], category: 'license-plate', clue: 'Three black sections.' },
  { id: 'plate-lk', prompt: 'Which country has this license plate?', image: '/images/external/Sri_Lanka_License_Plate.png', answer: 'Sri Lanka', distractors: ['India', 'Bangladesh', 'Thailand'], category: 'license-plate', clue: 'Dark yellow.' },
  { id: 'plate-in', prompt: 'Which country has this license plate?', image: '/images/external/in_licenceplates.png', answer: 'India', distractors: ['Sri Lanka', 'Bangladesh', 'Pakistan'], category: 'license-plate', clue: 'Light yellow.' },
  { id: 'plate-jo', prompt: 'Which country has this license plate?', image: '/images/external/Jordan_License_Plate.png', answer: 'Jordan', distractors: ['Tunisia', 'UAE', 'Saudi Arabia'], category: 'license-plate', clue: 'Green strip.' },
  { id: 'plate-tn', prompt: 'Which country has this license plate?', image: '/images/external/Tunisia_License_Plate.png', answer: 'Tunisia', distractors: ['Jordan', 'Morocco', 'Algeria'], category: 'license-plate', clue: 'Black with red strip.' },
  { id: 'plate-pa', prompt: 'Which country has this license plate?', image: '/images/external/panama_plate.png', answer: 'Panama', distractors: ['Colombia', 'Costa Rica', 'Guatemala'], category: 'license-plate', clue: 'Light green.' },
]

// ══════════════════════════════════════════
// 5. SIGN QUIZ — Image → Country
// ══════════════════════════════════════════
const signQuestions: QuizQuestion[] = [
  { id: 'sign-pl-ped', prompt: 'Which country uses this pedestrian crossing sign?', image: '/images/external/PL_road_sign_D-6.svg', answer: 'Poland', distractors: ['Czechia', 'Hungary', 'Romania'], category: 'sign' },
  { id: 'sign-es-ped', prompt: 'Which country uses this pedestrian crossing sign?', image: '/images/external/Spain_traffic_signal_s13.svg', answer: 'Spain', distractors: ['Portugal', 'France', 'Italy'], category: 'sign' },
  { id: 'sign-ee-ped', prompt: 'Which country uses this pedestrian crossing sign?', image: '/images/external/Estonia_road_sign_544.svg', answer: 'Estonia', distractors: ['Latvia', 'Lithuania', 'Finland'], category: 'sign' },
  { id: 'sign-lv-ped', prompt: 'Which country uses this pedestrian crossing sign?', image: '/images/external/Latvia_road_sign_535.svg', answer: 'Latvia', distractors: ['Estonia', 'Lithuania', 'Poland'], category: 'sign' },
  { id: 'sign-lt-ped', prompt: 'Which country uses this pedestrian crossing sign?', image: '/images/external/Lithuanian_pedestrian_crossing_sign.png', answer: 'Lithuania', distractors: ['Latvia', 'Estonia', 'Poland'], category: 'sign' },
  { id: 'sign-fi-ped', prompt: 'Which country uses this pedestrian crossing sign?', image: '/images/external/Finland_road_sign_511.svg', answer: 'Finland', distractors: ['Sweden', 'Norway', 'Estonia'], category: 'sign' },
  { id: 'sign-se-yield', prompt: 'Which country uses this yield sign style?', image: '/images/external/Sweden_road_sign_B3-1.svg', answer: 'Sweden', distractors: ['Norway', 'Finland', 'Denmark'], category: 'sign' },
  { id: 'sign-is-ped', prompt: 'Which country uses this pedestrian crossing sign?', image: '/images/external/Iceland_road_sign_D02.11.svg', answer: 'Iceland', distractors: ['Norway', 'Denmark', 'Faroe Islands'], category: 'sign' },
  { id: 'sign-no-ped', prompt: 'Which country uses this pedestrian crossing sign?', image: '/images/external/NO_road_sign_516.H.svg', answer: 'Norway', distractors: ['Sweden', 'Finland', 'Iceland'], category: 'sign' },
  { id: 'sign-dk-ped', prompt: 'Which country uses this pedestrian crossing sign?', image: '/images/external/Denmark_road_sign_E17.svg', answer: 'Denmark', distractors: ['Norway', 'Sweden', 'Germany'], category: 'sign' },
  { id: 'sign-au-give-way', prompt: 'Which country uses this give way sign?', image: '/images/external/Australia_road_sign_R1-2.svg', answer: 'Australia', distractors: ['New Zealand', 'UK', 'South Africa'], category: 'sign' },
  { id: 'sign-nz-give-way', prompt: 'Which country uses this give way sign?', image: '/images/external/New_Zealand_road_sign_R2-2.png', answer: 'New Zealand', distractors: ['Australia', 'UK', 'Ireland'], category: 'sign' },
  { id: 'sign-qc-stop', prompt: 'Which region uses this stop sign?', image: '/images/external/Arret_Quebec.png', answer: 'Quebec (Canada)', distractors: ['France', 'Belgium', 'Switzerland'], category: 'sign', clue: '"Arrêt" instead of "Stop".' },
  { id: 'sign-my-stop', prompt: 'Which country uses this stop sign?', image: '/images/external/Malaysia_road_sign_RP1.png', answer: 'Malaysia', distractors: ['Indonesia', 'Thailand', 'Philippines'], category: 'sign' },
  { id: 'sign-tr-stop', prompt: 'Which country uses this stop sign?', image: '/images/external/Turkey_road_sign_TT-2.png', answer: 'Turkey', distractors: ['Greece', 'Bulgaria', 'Romania'], category: 'sign' },
  { id: 'sign-pl-yield', prompt: 'Which country uses this yield sign?', image: '/images/external/PL_road_sign_A-7.svg', answer: 'Poland', distractors: ['Czechia', 'Slovakia', 'Romania'], category: 'sign' },
  { id: 'sign-fi-yield', prompt: 'Which country uses this yield sign?', image: '/images/external/Finland_road_sign_B5.svg', answer: 'Finland', distractors: ['Sweden', 'Norway', 'Estonia'], category: 'sign' },
  { id: 'sign-ro-yield', prompt: 'Which country uses this yield sign?', image: '/images/external/RO_road_sign_B01.svg', answer: 'Romania', distractors: ['Bulgaria', 'Hungary', 'Poland'], category: 'sign' },
]

// ══════════════════════════════════════════
// 6. BOLLARDS & GUARDRAILS — Image → Country
// ══════════════════════════════════════════
type ImgQ = [id: string, image: string, answer: string, distractors: string[], clue?: string]

function imageQuestions(category: string, prompt: string, items: ImgQ[]): QuizQuestion[] {
  return items.map(([id, image, answer, distractors, clue]) => ({ id, prompt, image, answer, distractors, category, clue }))
}

const bollardQuestions: QuizQuestion[] = imageQuestions('bollard', 'Which country has this bollard?', [
  ['bol-fr', '/images/bollard/bollard-fr.png', 'France', ['Belgium', 'Italy', 'Spain'], 'Red or grey band — also found in Senegal.'],
  ['bol-scot', '/images/bollard/bollard-scotland.png', 'United Kingdom', ['Ireland', 'France', 'Netherlands'], 'Scotland: rounded top.'],
  ['bol-cz', '/images/bollard/bollard-cz.png', 'Czechia', ['Poland', 'Hungary', 'Austria'], 'Double reflectors — Czechia & Slovakia.'],
  ['bol-be', '/images/bollard/bollard-be.png', 'Belgium', ['Netherlands', 'France', 'Luxembourg'], 'White wedge, yellow reflector.'],
  ['bol-dk', '/images/bollard/bollard-dk.png', 'Denmark', ['Sweden', 'Norway', 'Germany'], 'Yellow reflector with stripe.'],
  ['bol-cy', '/images/bollard/bollard-cy.png', 'Cyprus', ['Greece', 'Malta', 'Turkey'], 'White wedge, red reflector.'],
  ['bol-ch', '/images/bollard/bollard-li.png', 'Switzerland', ['Austria', 'Germany', 'Italy'], 'Rounded black-and-white cylinder (also Liechtenstein).'],
  ['bol-es', '/images/bollard/bollard-es.png', 'Spain', ['Portugal', 'France', 'Italy'], 'Orange and white.'],
  ['bol-cl', '/images/external/bollard.png', 'Chile', ['Argentina', 'Peru', 'Uruguay'], 'White front reflector, yellow back reflector.'],
  ['bol-gr', '/images/bollard/slavic-style/bollard-gr.png', 'Greece', ['Bulgaria', 'Albania', 'Turkey'], 'Wedge with red rectangular reflector.'],
  ['bol-ad', '/images/bollard/bollard-ad.png', 'Andorra', ['Portugal', 'Italy', 'France'], 'Orange front reflector — also Spain & Canary Islands.'],
  ['bol-bd', '/images/bollard/bollard-bd.png', 'Bangladesh', ['India', 'Sri Lanka', 'Thailand'], 'Red and white — also Cambodia.'],
  ['bol-th', '/images/bollard/bollard-th.png', 'Thailand', ['Vietnam', 'Philippines', 'Malaysia'], 'Black and white — also Laos & Indonesia.'],
  ['bol-lk', '/images/bollard/bollard-lk.png', 'Sri Lanka', ['India', 'Bangladesh', 'Thailand']],
  ['bol-mx', '/images/bollard/bollard-mx.png', 'Mexico', ['Guatemala', 'Colombia', 'USA'], 'Concrete, often with yellow.'],
  ['bol-pe', '/images/bollard/bollard-pe.png', 'Peru', ['Bolivia', 'Chile', 'Ecuador'], 'Concrete.'],
  ['bol-mn', '/images/bollard/bollard-mn.png', 'Mongolia', ['Kyrgyzstan', 'Russia', 'Kazakhstan'], 'Bowling-pin shape.'],
  ['bol-is', '/images/bollard/bollard-is.png', 'Iceland', ['Norway', 'Faroe Islands', 'Finland']],
  ['guard-no', '/images/guardrail/guardrail-no.png', 'Norway', ['Sweden', 'Finland', 'Iceland'], 'Guardrail with wooden posts.'],
])

// ══════════════════════════════════════════
// 7. ROADSIDE — km markers, road lines, poles, pavement, signs
// ══════════════════════════════════════════
const roadsideQuestions: QuizQuestion[] = [
  ...imageQuestions('roadside', 'Which country has this kilometer marker?', [
    ['km-fr', '/images/sign/kilometer-marker/kilo-fr.png', 'France', ['Belgium', 'Spain', 'Italy'], 'Yellow top.'],
    ['km-pt', '/images/sign/kilometer-marker/kilo-pt.png', 'Portugal', ['Spain', 'Italy', 'France'], 'Black and white.'],
    ['km-ro', '/images/sign/kilometer-marker/kilo-ro.png', 'Romania', ['Bulgaria', 'Hungary', 'Serbia']],
    ['km-sn', '/images/sign/kilometer-marker/kilo-sn.png', 'Senegal', ['Ghana', 'Nigeria', 'Tunisia']],
    ['km-tn', '/images/sign/kilometer-marker/kilo-tn.png', 'Tunisia', ['Senegal', 'Jordan', 'Turkey']],
    ['km-kh', '/images/sign/kilometer-marker/kilo-kh.png', 'Cambodia', ['Thailand', 'Laos', 'Vietnam']],
    ['km-ph', '/images/sign/kilometer-marker/kilo-ph.png', 'Philippines', ['Indonesia', 'Malaysia', 'Thailand']],
    ['km-id', '/images/sign/kilometer-marker/kilo-id.png', 'Indonesia', ['Malaysia', 'Philippines', 'Thailand']],
    ['km-pe', '/images/sign/kilometer-marker/kilo-pe.png', 'Peru', ['Bolivia', 'Chile', 'Ecuador']],
    ['km-co', '/images/sign/kilometer-marker/kilo-co.png', 'Colombia', ['Ecuador', 'Peru', 'Mexico']],
    ['km-uy', '/images/sign/kilometer-marker/kilo-uy.png', 'Uruguay', ['Argentina', 'Brazil', 'Chile'], 'Green.'],
    ['km-bo', '/images/sign/kilometer-marker/kilo-bo.png', 'Bolivia', ['Peru', 'Chile', 'Argentina']],
    ['km-ar', '/images/sign/kilometer-marker/kilo-ar.png', 'Argentina', ['Uruguay', 'Chile', 'Brazil']],
    ['km-pr', '/images/sign/kilometer-marker/kilo-pr.png', 'Puerto Rico', ['USA', 'Mexico', 'Dominican Republic']],
  ]),
  ...imageQuestions('roadside', 'Which country has these road markings?', [
    ['line-uy', '/images/road-markings/line-uy.png', 'Uruguay', ['Argentina', 'Brazil', 'Chile'], 'Triple center line.'],
    ['line-ph', '/images/road-markings/line-ph.png', 'Philippines', ['Indonesia', 'Malaysia', 'Thailand'], 'Triple center line.'],
    ['line-ie', '/images/road-markings/line-ie.png', 'Ireland', ['United Kingdom', 'France', 'Netherlands'], 'Dashed outer yellow.'],
    ['line-cl', '/images/road-markings/line-white-cl.png', 'Chile', ['Argentina', 'Peru', 'Mexico'], 'All white — unusual for the Americas.'],
  ]),
  ...imageQuestions('roadside', 'Which country has this utility pole marking?', [
    ['pole-co', '/images/pole/pole-plate/stripe-co.png', 'Colombia', ['Peru', 'Ecuador', 'Mexico']],
    ['pole-pe', '/images/pole/pole-plate/stripe-pe.png', 'Peru', ['Colombia', 'Bolivia', 'Chile']],
    ['pole-uk', '/images/pole/pole-plate/warning-uk.png', 'United Kingdom', ['Ireland', 'Australia', 'New Zealand'], 'The person getting zapped.'],
    ['pole-ie', '/images/pole/pole-plate/warning-ie.png', 'Ireland', ['United Kingdom', 'France', 'Netherlands']],
    ['pole-fr', '/images/pole/pole-plate/sticker-fr.png', 'France', ['Belgium', 'Spain', 'Italy']],
    ['pole-qld', '/images/pole/pole-plate/sticker-qld.png', 'Australia', ['New Zealand', 'South Africa', 'United Kingdom'], 'Queensland.'],
  ]),
  ...imageQuestions('roadside', 'Which country has this pavement?', [
    ['pave-ec', '/images/pavement/turtle-ec.png', 'Ecuador', ['Colombia', 'Peru', 'Bolivia'], 'Turtle-shell stones.'],
    ['pave-bo', '/images/pavement/stone-bo.png', 'Bolivia', ['Peru', 'Ecuador', 'Chile'], 'Lines between the stones.'],
    ['pave-nl', '/images/pavement/brick-nl.png', 'Netherlands', ['Belgium', 'Germany', 'Denmark']],
    ['pave-tr', '/images/pavement/brick-tr.png', 'Turkey', ['Greece', 'Bulgaria', 'Romania']],
  ]),
  ...imageQuestions('roadside', 'Which country has this sign?', [
    ['sign-hunt-pt', '/images/sign/hunting-pt.png', 'Portugal', ['Spain', 'France', 'Italy'], 'Hunting area sign.'],
    ['sign-hunt-es', '/images/sign/hunting-es.png', 'Spain', ['Portugal', 'France', 'Italy'], 'Hunting area sign.'],
    ['sign-pass-no', '/images/sign/passing-no.png', 'Norway', ['Sweden', 'Finland', 'Iceland'], 'Passing place sign.'],
    ['sign-pass-se', '/images/sign/passing-se.png', 'Sweden', ['Norway', 'Finland', 'Denmark'], 'Passing place sign.'],
  ]),
]

// ══════════════════════════════════════════
// 8. JAPAN POLES — Image → Region
// ══════════════════════════════════════════
const japanRegions = ['Hokkaido', 'Tohoku', 'Kanto', 'Chubu', 'Hokuriku', 'Kansai', 'Chugoku', 'Shikoku', 'Kyushu', 'Okinawa']
const japanPoleQuestions: QuizQuestion[] = ([
  ['jp-bar-chugoku', 'bar-chugoku', 'Chugoku', 'Full triangle at the mount point.'],
  ['jp-bar-shikoku', 'bar-shikoku', 'Shikoku', 'Half triangle at the mount point.'],
  ['jp-bar-tohoku', 'bar-tohoku', 'Tohoku', 'Bar at the top of the square.'],
  ['jp-bar-kansai', 'bar-kansai', 'Kansai', 'Bar at the bottom of the square.'],
  ['jp-square-hokkaido', 'square-hokkaido', 'Hokkaido', 'Square plate without a bar.'],
  ['jp-bar-okinawa', 'bar-okinawa', 'Okinawa'],
  ['jp-bar-kyushu', 'bar-kyushu', 'Kyushu'],
  ['jp-wooden-plate', 'wooden-plate', 'Kanto', 'Wooden plate.'],
  ['jp-two-bars', 'two-bars', 'Hokkaido'],
  ['jp-zigzag-90', 'zigzag-90', 'Shikoku', '90° zigzag.'],
  ['jp-zigzag-120', 'zigzag-120', 'Kansai', '120° zigzag.'],
  ['jp-topbar-long', 'topbar-long', 'Kanto', 'Long top bar.'],
  ['jp-topbar-short', 'topbar-short', 'Chubu', 'Short top bar.'],
  ['jp-pyramid-thick', 'pyramid-thick', 'Chubu', 'Four thick bars.'],
  ['jp-pyramid-tent', 'pyramid-tent', 'Hokuriku', 'Two-sided tent.'],
  ['jp-pyramid-thin', 'pyramid-thin', 'Chugoku', 'Four thin bars.'],
  ['jp-insulator-hori', 'insulator-long-hori', 'Chugoku', 'Long horizontal insulator.'],
  ['jp-insulator-lamp', 'insulator-lamp', 'Hokuriku', 'Lamp-shaped insulator.'],
] as [string, string, string, string?][]).map(([id, file, answer, clue]) => ({
  id,
  prompt: 'Which Japanese region has this utility pole?',
  image: `/images/pole/japan/${file}.png`,
  answer,
  distractors: pickDistractors(answer, japanRegions),
  category: 'japan-pole',
  clue,
}))

// ══════════════════════════════════════════
// 9. COMPANIES — Brand → Country
// ══════════════════════════════════════════
const companyQuestions: QuizQuestion[] = ([
  ['Pemex', 'fuel station', 'Mexico', ['Colombia', 'Guatemala', 'Peru']],
  ['YPF', 'fuel station', 'Argentina', ['Uruguay', 'Chile', 'Paraguay']],
  ['Ancap', 'fuel station', 'Uruguay', ['Argentina', 'Paraguay', 'Brazil']],
  ['Copec', 'fuel station', 'Chile', ['Argentina', 'Peru', 'Bolivia']],
  ['Petronas', 'fuel station', 'Malaysia', ['Indonesia', 'Thailand', 'Philippines']],
  ['Pertamina', 'fuel station', 'Indonesia', ['Malaysia', 'Philippines', 'Thailand']],
  ['Petrolimex', 'fuel station', 'Vietnam', ['Cambodia', 'Laos', 'Thailand']],
  ['Petrobras / Ipiranga', 'fuel station', 'Brazil', ['Argentina', 'Uruguay', 'Colombia']],
  ['Safaricom / M-Pesa', 'telecom', 'Kenya', ['Uganda', 'Nigeria', 'Ghana']],
  ['Grameenphone', 'telecom', 'Bangladesh', ['India', 'Sri Lanka', 'Thailand']],
  ['Telkomsel', 'telecom', 'Indonesia', ['Malaysia', 'Philippines', 'Vietnam']],
  ['Globe / Smart', 'telecom', 'Philippines', ['Indonesia', 'Malaysia', 'Thailand']],
  ['Dialog / Mobitel', 'telecom', 'Sri Lanka', ['India', 'Bangladesh', 'Malaysia']],
  ['Antel', 'telecom', 'Uruguay', ['Argentina', 'Paraguay', 'Chile']],
  ['Telcel', 'telecom', 'Mexico', ['Guatemala', 'Colombia', 'Peru']],
  ['Biedronka / Żabka', 'shop', 'Poland', ['Czechia', 'Slovakia', 'Lithuania']],
  ['Mercadona', 'supermarket', 'Spain', ['Portugal', 'Italy', 'France']],
  ['BIM / A101 / ŞOK', 'shop', 'Turkey', ['Greece', 'Bulgaria', 'Romania']],
  ['K-Market / S-Market', 'supermarket', 'Finland', ['Sweden', 'Estonia', 'Norway']],
  ['ICA', 'supermarket', 'Sweden', ['Norway', 'Finland', 'Denmark']],
  ['Kiwi / Joker', 'supermarket', 'Norway', ['Sweden', 'Denmark', 'Finland']],
  ['Indomaret', 'shop', 'Indonesia', ['Malaysia', 'Philippines', 'Thailand']],
] as [string, string, string, string[]][]).map(([brand, kind, answer, distractors]) => ({
  id: `co-${brand.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  prompt: `You see a "${brand}" ${kind}. Which country are you most likely in?`,
  answer,
  distractors,
  category: 'company',
}))

// ══════════════════════════════════════════
// EXPORT ALL
// ══════════════════════════════════════════
export const allQuestions: QuizQuestion[] = [
  ...carMetaQuestions,
  ...languageQuestions,
  ...telephoneQuestions,
  ...licensePlateQuestions,
  ...signQuestions,
  ...bollardQuestions,
  ...roadsideQuestions,
  ...japanPoleQuestions,
  ...companyQuestions,
]

export const quizCategories: QuizCategory[] = [
  { slug: 'car-meta', title: 'Google Car', emoji: '🚗', description: 'Identify the country from the Google Street View car.', questionCount: carMetaQuestions.length },
  { slug: 'language', title: 'Language', emoji: '🗣️', description: 'Match characters, street words and scripts to countries.', questionCount: languageQuestions.length },
  { slug: 'telephone', title: 'Telephone', emoji: '📞', description: 'Match phone codes to countries and cities.', questionCount: telephoneQuestions.length },
  { slug: 'license-plate', title: 'License Plate', emoji: '🪪', description: 'Identify the country from license plate designs.', questionCount: licensePlateQuestions.length },
  { slug: 'sign', title: 'Road Signs', emoji: '🚸', description: 'Match pedestrian, yield, and stop signs to countries.', questionCount: signQuestions.length },
  { slug: 'bollard', title: 'Bollards', emoji: '🔶', description: 'Identify the country from bollards and guardrails.', questionCount: bollardQuestions.length },
  { slug: 'roadside', title: 'Roadside', emoji: '🛣️', description: 'Kilometer markers, road lines, pole markings, pavement and signs.', questionCount: roadsideQuestions.length },
  { slug: 'japan-pole', title: 'Japan Poles', emoji: '🗾', description: 'Name the Japanese region from its utility poles.', questionCount: japanPoleQuestions.length },
  { slug: 'company', title: 'Companies', emoji: '🏢', description: 'Fuel stations, telecoms and shops that give away the country.', questionCount: companyQuestions.length },
  { slug: 'all', title: 'All Categories', emoji: '🌍', description: 'Random mix of all quiz categories.', questionCount: allQuestions.length },
]

export function getQuizQuestions(categorySlug: string, count = 15): QuizQuestion[] {
  const pool = categorySlug === 'all'
    ? allQuestions
    : allQuestions.filter((q) => q.category === categorySlug)
  return shuffle(pool).slice(0, Math.min(count, pool.length))
}
