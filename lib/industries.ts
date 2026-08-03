import { client } from '@/sanity/lib/client'
import { industries as staticIndustries, IndustryData } from '@/data/industries'

export interface SanityIndustryPage {
  _id: string
  key: string
  title: string
  shortName: string
  emoji?: string
  description: string
  cardDescription?: string
  challenges: string[]
  strategy: string[]
  articleSections: { heading: string; content: string[] }[]
  linkedBlogPost?: {
    slug: string
    title: string
  }
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
  order?: number
}

const ALL_INDUSTRY_PAGES_QUERY = `
  *[_type == "industryPage"] | order(order asc) {
    _id,
    key,
    title,
    shortName,
    emoji,
    description,
    cardDescription,
    challenges,
    strategy,
    articleSections[] {
      heading,
      content
    },
    "linkedBlogPost": linkedBlogPost-> {
      "slug": slug.current,
      title
    },
    seo,
    order
  }
`

const INDUSTRY_PAGE_BY_KEY_QUERY = `
  *[_type == "industryPage" && key == $key][0] {
    _id,
    key,
    title,
    shortName,
    emoji,
    description,
    cardDescription,
    challenges,
    strategy,
    articleSections[] {
      heading,
      content
    },
    "linkedBlogPost": linkedBlogPost-> {
      "slug": slug.current,
      title
    },
    seo,
    order
  }
`

/** Convert static industry data to the shared interface shape */
function staticToSanity(key: string, data: IndustryData): SanityIndustryPage {
  // Match emoji from the home-page list
  const emojiMap: Record<string, string> = {
    'small-business': '🏪',
    'ecommerce': '🛒',
    'b2b': '🤝',
    'saas': '💻',
    'coaches': '🎯',
    'healthcare': '🏥',
    'realtors': '🏠',
    'lawyers': '⚖️',
    'restaurants': '🍽️',
    'startups': '🚀',
    'beauty-brands': '💄',
    'nonprofit': '❤️',
  }
  const cardDescMap: Record<string, string> = {
    'small-business': 'Local growth strategies',
    'ecommerce': 'Drive online sales',
    'b2b': 'Lead generation focus',
    'saas': 'User acquisition',
    'coaches': 'Personal branding',
    'healthcare': 'Patient trust',
    'realtors': 'Property visibility',
    'lawyers': 'Authority & reputation',
    'restaurants': 'Foot traffic & bookings',
    'startups': 'Rapid brand awareness',
    'beauty-brands': 'Visual storytelling',
    'nonprofit': 'Community engagement',
  }

  return {
    _id: `static-${key}`,
    key,
    title: data.title,
    shortName: data.shortName,
    emoji: emojiMap[key] ?? '🏢',
    description: data.description,
    cardDescription: cardDescMap[key],
    challenges: data.challenges,
    strategy: data.strategy,
    articleSections: data.articleSections.map((s) => ({
      heading: s.heading,
      content: s.content,
    })),
  }
}

/** Fetch all industry pages from Sanity, fall back to static data */
export async function getAllIndustryPages(): Promise<SanityIndustryPage[]> {
  try {
    const pages = await client.fetch(ALL_INDUSTRY_PAGES_QUERY, {}, { next: { revalidate: 60 } })
    if (pages && pages.length > 0) return pages

    // Fallback: convert static data
    return Object.entries(staticIndustries).map(([key, data]) => staticToSanity(key, data))
  } catch (err) {
    console.error('Error fetching industry pages from Sanity:', err)
    return Object.entries(staticIndustries).map(([key, data]) => staticToSanity(key, data))
  }
}

/** Fetch a single industry page by its key */
export async function getIndustryPage(key: string): Promise<SanityIndustryPage | null> {
  try {
    const page = await client.fetch(INDUSTRY_PAGE_BY_KEY_QUERY, { key }, { next: { revalidate: 60 } })
    if (page) return page

    const staticData = staticIndustries[key]
    return staticData ? staticToSanity(key, staticData) : null
  } catch (err) {
    console.error(`Error fetching industry page "${key}" from Sanity:`, err)
    const staticData = staticIndustries[key]
    return staticData ? staticToSanity(key, staticData) : null
  }
}
