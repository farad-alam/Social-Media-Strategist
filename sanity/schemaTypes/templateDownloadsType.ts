import {defineField, defineType} from 'sanity'

export const templateDownloadsType = defineType({
  name: 'templateDownloads',
  title: 'Template Downloads',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title for internal reference (e.g., "Strategy Template Links")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'googleDriveUrl',
      title: 'Google Drive URL',
      type: 'url',
      description: 'The link to the Google Drive template folder/document',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pdfUrl',
      title: 'PDF Download URL',
      type: 'url',
      description: 'The link to the downloadable PDF file',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
