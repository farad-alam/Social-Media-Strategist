import { defineField, defineType } from 'sanity'

export const industryPageType = defineType({
  name: 'industryPage',
  title: 'Industry Page',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Industry Key (URL slug)',
      type: 'string',
      description: 'Unique identifier matching the URL, e.g. "small-business", "ecommerce"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Full SEO title, e.g. "Social Media Strategy for Small Businesses"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortName',
      title: 'Short Name',
      type: 'string',
      description: 'Used in headings and cards, e.g. "Small Business"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emoji',
      title: 'Emoji Icon',
      type: 'string',
      description: 'Emoji shown on the home page card, e.g. 🏪',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'One-line summary shown on the home page card and meta description.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cardDescription',
      title: 'Card Tag Line',
      type: 'string',
      description: 'Very short label shown below the emoji on the home page card, e.g. "Local growth strategies"',
    }),
    defineField({
      name: 'challenges',
      title: 'Common Challenges',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet list of challenges shown in the sidebar.',
    }),
    defineField({
      name: 'strategy',
      title: 'Strategic Approach',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet list of strategic tactics shown in the sidebar.',
    }),
    defineField({
      name: 'articleSections',
      title: 'Article Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'section',
          fields: [
            { name: 'heading', type: 'string', title: 'Section Heading' },
            {
              name: 'content',
              title: 'Paragraphs',
              type: 'array',
              of: [{ type: 'text' }],
            },
          ],
          preview: {
            select: { title: 'heading' },
          },
        },
      ],
    }),
    defineField({
      name: 'linkedBlogPost',
      title: 'Linked Blog Post (optional)',
      type: 'reference',
      to: [{ type: 'post' }],
      description: 'Link a blog article to this industry. When set, the home page card will link to the blog post.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title (optional override)' },
        { name: 'metaDescription', type: 'text', title: 'Meta Description (optional override)' },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first on the home page.',
      initialValue: 99,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'shortName',
      subtitle: 'description',
    },
  },
})
