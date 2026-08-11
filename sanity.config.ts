import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'
import { projectId, dataset } from './sanity/env'

export default defineConfig({
  name: 'default',
  title: 'Social Media Strategist',

  projectId,
  dataset,

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Strategy Guide Page')
              .id('guidePage')
              .child(
                S.document()
                  .schemaType('guidePage')
                  .documentId('guidePage')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['guidePage'].includes(listItem.getId() as string)
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
