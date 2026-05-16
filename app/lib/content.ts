import { Category } from './types'

import { languageCategory } from './data/language'
import { telephoneCategory } from './data/telephone'
import { architectureCategory } from './data/architecture'
import { bollardCategory } from './data/bollard'
import { carMetaCategory } from './data/car-meta'
import { chevronCategory } from './data/chevron'
import { companyCategory } from './data/company'
import { guardrailCategory } from './data/guardrail'
import { licensePlateCategory } from './data/license-plate'
import { pavementCategory } from './data/pavement'
import { placeNameCategory } from './data/place-name'
import { poleCategory } from './data/pole'
import { pylonCategory } from './data/pylon'
import { roadMarkingsCategory } from './data/road-markings'
import { roadNumberingCategory } from './data/road-numbering'
import { signCategory } from './data/sign'
import { vegetationCategory } from './data/vegetation'

export const categories: Category[] = [
  languageCategory,
  telephoneCategory,
  architectureCategory,
  bollardCategory,
  carMetaCategory,
  chevronCategory,
  companyCategory,
  guardrailCategory,
  licensePlateCategory,
  pavementCategory,
  placeNameCategory,
  poleCategory,
  pylonCategory,
  roadMarkingsCategory,
  roadNumberingCategory,
  signCategory,
  vegetationCategory,
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
