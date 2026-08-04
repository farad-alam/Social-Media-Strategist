import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const INDUSTRY_ROUTES = [
  "small-business",
  "ecommerce",
  "b2b",
  "saas",
  "coaches",
  "healthcare",
  "realtors",
  "lawyers",
  "restaurants",
  "startups",
  "beauty-brands",
  "nonprofit",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://socialmediastrategist.net";
  const defaultLastModified = new Date("2026-08-01");

  // Fetch all published posts from Sanity
  const posts = await getAllPosts();

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.date || defaultLastModified),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Industry landing pages
  const industryUrls: MetadataRoute.Sitemap = INDUSTRY_ROUTES.map((key) => ({
    url: `${baseUrl}/strategy-for-${key}`,
    lastModified: defaultLastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Define static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: defaultLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: defaultLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: defaultLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/social-media-strategy-guide`,
      lastModified: defaultLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: defaultLastModified,
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: defaultLastModified,
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: defaultLastModified,
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];

  return [...staticRoutes, ...industryUrls, ...blogUrls];
}
