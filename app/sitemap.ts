import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://socialmediastrategist.net'

  // Fetch all published posts from Sanity
  const posts = await getAllPosts()

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Define static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily', // Blog index changes often
      priority: 0.9,
    },
    {
      url: `${baseUrl}/social-media-strategy-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  return [...staticRoutes, ...blogUrls]
}
