import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/', '/api/'], // Don't crawl Sanity Studio or API routes
    },
    sitemap: 'https://socialmediastrategist.net/sitemap.xml',
  }
}
