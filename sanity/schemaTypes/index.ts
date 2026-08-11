import { type SchemaTypeDefinition } from 'sanity'

import { categoryType } from './categoryType'
import { postType } from './postType'
import { templateDownloadsType } from './templateDownloadsType'
import { guidePageType } from './guidePageType'

export const schemaTypes: SchemaTypeDefinition[] = [postType, categoryType, templateDownloadsType, guidePageType]
