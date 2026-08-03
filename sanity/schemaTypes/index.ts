import { type SchemaTypeDefinition } from 'sanity'

import { categoryType } from './categoryType'
import { postType } from './postType'
import { industryPageType } from './industryPageType'

export const schemaTypes: SchemaTypeDefinition[] = [postType, categoryType, industryPageType]

