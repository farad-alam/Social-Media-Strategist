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

const emojiMap: Record<string, string> = {
  'small-business':  '🏪',
  'ecommerce':       '🛒',
  'b2b':             '🤝',
  'saas':            '💻',
  'coaches':         '🎯',
  'healthcare':      '🏥',
  'realtors':        '🏠',
  'lawyers':         '⚖️',
  'restaurants':     '🍽️',
  'startups':        '🚀',
  'beauty-brands':   '💄',
  'nonprofit':       '❤️',
}

const cardDescMap: Record<string, string> = {
  'small-business':  'Local growth strategies',
  'ecommerce':       'Drive online sales',
  'b2b':             'Lead generation focus',
  'saas':            'User acquisition',
  'coaches':         'Personal branding',
  'healthcare':      'Patient trust',
  'realtors':        'Property visibility',
  'lawyers':         'Authority & reputation',
  'restaurants':     'Foot traffic & bookings',
  'startups':        'Rapid brand awareness',
  'beauty-brands':   'Visual storytelling',
  'nonprofit':       'Community engagement',
}

function staticToSanity(key: string, data: IndustryData): SanityIndustryPage {
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

/** Returns all industry pages from static data */
export async function getAllIndustryPages(): Promise<SanityIndustryPage[]> {
  return Object.entries(staticIndustries).map(([key, data]) => staticToSanity(key, data))
}

/** Returns a single industry page by its key from static data */
export async function getIndustryPage(key: string): Promise<SanityIndustryPage | null> {
  const staticData = staticIndustries[key]
  return staticData ? staticToSanity(key, staticData) : null
}
