import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://socialmediastrategist.ne";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static Routes
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/social-media-strategy-guide",
    "/social-media-strategy-template",
    "/social-media-strategy-examples",
    "/blog"
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" || route === "/blog") ? "weekly" : "monthly" as "weekly" | "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Industry Routes
  const industries = [
    "small-business",
    "ecommerce",
    "b2b",
    "saas",
    "healthcare",
    "coaches",
    "realtors",
    "lawyers"
  ];
  
  const industryRoutes = industries.map((industry) => ({
    url: `${BASE_URL}/strategy-for-${industry}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as "monthly",
    priority: 0.7,
  }));

  // Blog Routes
  const posts = await getAllPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...industryRoutes, ...blogRoutes];
}
