import {defineField, defineType} from 'sanity'

export const guidePageType = defineType({
  name: 'guidePage',
  title: 'Strategy Guide Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'heroBanner',
      title: 'Hero Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Abul Hasan',
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      initialValue: '35 min read',
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'date',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Heading 4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: (Rule: any) =>
                      Rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}),
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description: 'Describe the image for SEO and accessibility.',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption (optional)',
            },
          ],
        },
        {
          name: 'callout',
          type: 'object',
          title: 'Callout Box',
          fields: [
            {
              name: 'style',
              type: 'string',
              title: 'Style',
              options: {
                list: [
                  {title: 'Primary (Blue edge)', value: 'primary'},
                  {title: 'Secondary (Green edge)', value: 'secondary'},
                  {title: 'Highlight (Light Blue background)', value: 'highlight'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              type: 'array',
              title: 'Text',
              of: [{type: 'block'}],
            },
          ],
        },
        {
          name: 'dataTable',
          type: 'object',
          title: 'Data Table',
          fields: [
            {
              name: 'headers',
              type: 'array',
              title: 'Headers',
              of: [{type: 'string'}],
            },
            {
              name: 'rows',
              type: 'array',
              title: 'Rows',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'cells',
                      type: 'array',
                      title: 'Cells',
                      of: [{type: 'string'}],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'contentPillars',
          type: 'object',
          title: 'Content Pillars Grid',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Grid Title',
            },
            {
              name: 'pillars',
              type: 'array',
              title: 'Pillars',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'emoji', type: 'string', title: 'Emoji'},
                    {name: 'title', type: 'string', title: 'Title'},
                    {name: 'description', type: 'string', title: 'Description'},
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Strategy Guide',
        subtitle: 'Singleton Page',
      }
    },
  },
})
