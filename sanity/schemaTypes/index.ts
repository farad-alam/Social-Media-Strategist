import { type SchemaTypeDefinition } from 'sanity'

import { categoryType } from './categoryType'
import { postType } from './postType'

export const schemaTypes: SchemaTypeDefinition[] = [postType, categoryType]
