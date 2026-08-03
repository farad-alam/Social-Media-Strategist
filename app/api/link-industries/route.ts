import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env'
import { NextResponse } from 'next/server'
import { industries } from '@/data/industries'

// Each industry → blog post slug, meta description, and estimated read time
const INDUSTRY_META: Record<string, { slug: string; readTime: string; excerpt: string }> = {
  'small-business': {
    slug: 'social-media-strategy-for-small-business',
    readTime: '6 min read',
    excerpt:
      'Learn how to build a social media strategy tailored to small businesses. Local growth tactics, community building, and content ideas that drive real foot traffic.',
  },
  ecommerce: {
    slug: 'social-media-strategy-for-ecommerce',
    readTime: '7 min read',
    excerpt:
      'Drive more online sales with a proven e-commerce social media strategy. Shoppable posts, UGC, influencer partnerships, and conversion-focused content that works.',
  },
  b2b: {
    slug: 'social-media-strategy-for-b2b',
    readTime: '8 min read',
    excerpt:
      'Generate high-quality B2B leads through LinkedIn thought leadership, educational content, and a strategic approach to long sales cycles.',
  },
  saas: {
    slug: 'social-media-strategy-for-saas',
    readTime: '7 min read',
    excerpt:
      'Build a SaaS social media strategy that reduces churn, accelerates user acquisition, and turns your product into a community people love.',
  },
  coaches: {
    slug: 'social-media-strategy-for-coaches',
    readTime: '6 min read',
    excerpt:
      'Stand out in a crowded coaching market. Learn how personal branding, story-driven content, and short-form video attract high-ticket clients on social media.',
  },
  healthcare: {
    slug: 'social-media-strategy-for-healthcare',
    readTime: '7 min read',
    excerpt:
      'Build patient trust and grow your practice with a HIPAA-compliant healthcare social media strategy built around education, empathy, and community.',
  },
  realtors: {
    slug: 'social-media-strategy-for-real-estate',
    readTime: '7 min read',
    excerpt:
      'Dominate your local real estate market on social media. Property video tours, neighborhood guides, and personal branding tactics for top-producing agents.',
  },
  lawyers: {
    slug: 'social-media-strategy-for-law-firms',
    readTime: '6 min read',
    excerpt:
      'Help your law firm attract more clients with a compliant and authoritative social media strategy built on educational content and community trust.',
  },
  restaurants: {
    slug: 'social-media-strategy-for-restaurants',
    readTime: '6 min read',
    excerpt:
      'Fill your tables with a restaurant social media strategy that uses mouth-watering visuals, local SEO, and user-generated content to drive foot traffic.',
  },
  startups: {
    slug: 'social-media-strategy-for-startups',
    readTime: '7 min read',
    excerpt:
      'Build buzz from day one. Founder-led marketing, community-first growth, and agile content strategies for early-stage and growth-stage startups.',
  },
  'beauty-brands': {
    slug: 'social-media-strategy-for-beauty-brands',
    readTime: '7 min read',
    excerpt:
      'Stand out in the beauty space with influencer partnerships, transformation videos, and social commerce tactics that convert followers into loyal customers.',
  },
  nonprofit: {
    slug: 'social-media-strategy-for-nonprofits',
    readTime: '6 min read',
    excerpt:
      'Amplify your mission with a nonprofit social media strategy built around impact storytelling, peer-to-peer fundraising, and community engagement.',
  },
}

/** Convert an industry's articleSections into PortableText blocks */
function sectionsToPortableText(
  sections: { heading: string; content: string[] }[],
  industryKey: string
) {
  const blocks: any[] = []
  let i = 0

  for (const section of sections) {
    blocks.push({
      _key: `block-${industryKey}-h2-${i++}`,
      _type: 'block',
      style: 'h2',
      children: [{ _key: `span-${i}`, _type: 'span', text: section.heading, marks: [] }],
      markDefs: [],
    })

    for (const para of section.content) {
      blocks.push({
        _key: `block-${industryKey}-p-${i++}`,
        _type: 'block',
        style: 'normal',
        children: [{ _key: `span-${i}`, _type: 'span', text: para, marks: [] }],
        markDefs: [],
      })
    }
  }

  return blocks
}

export async function GET() {
  const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN

  if (!token) {
    return NextResponse.json(
      { success: false, message: 'Missing SANITY_API_WRITE_TOKEN.' },
      { status: 401 }
    )
  }

  const writeClient = createClient({ projectId, dataset, apiVersion, useCdn, token })

  try {
    // 1. Create / ensure the "Industry Strategy" category exists
    const categoryId = 'category-industry-strategy'
    await writeClient.createIfNotExists({
      _id: categoryId,
      _type: 'category',
      title: 'Industry Strategy',
      description: 'Social media strategy guides tailored to specific industries.',
    })

    const results: { industry: string; postSlug: string; linked: boolean }[] = []

    for (const [key, data] of Object.entries(industries)) {
      const meta = INDUSTRY_META[key]
      if (!meta) continue

      // 2. Create the blog post for this industry (createOrReplace so re-running is safe)
      const postId = `post-industry-${key}`
      const postDoc = {
        _id: postId,
        _type: 'post',
        title: data.title,
        slug: { _type: 'slug', current: meta.slug },
        author: 'Abul Hasan',
        excerpt: meta.excerpt,
        publishedAt: new Date().toISOString(),
        category: { _type: 'reference', _ref: categoryId },
        content: sectionsToPortableText(data.articleSections, key),
      }

      await writeClient.createOrReplace(postDoc)

      // 3. Patch the industryPage to link this blog post
      const industryPageId = `industry-page-${key}`
      await writeClient
        .patch(industryPageId)
        .set({
          linkedBlogPost: { _type: 'reference', _ref: postId },
        })
        .commit()

      results.push({ industry: key, postSlug: meta.slug, linked: true })
    }

    return NextResponse.json({
      success: true,
      message: `Linked ${results.length} industry pages to their blog posts!`,
      results,
    })
  } catch (error: any) {
    console.error('Error linking industries:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
