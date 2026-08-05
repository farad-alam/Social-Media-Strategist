import { type SchemaTypeDefinition } from 'sanity'

import { categoryType } from './categoryType'
import { postType } from './postType'
import { templateDownloadsType } from './templateDownloadsType'

export const schemaTypes: SchemaTypeDefinition[] = [postType, categoryType, templateDownloadsType]
