import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env'
import { fallbackPosts } from '@/lib/blog'
import { NextResponse } from 'next/server'

export async function GET() {
  const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN;

  if (!token) {
    return NextResponse.json({
      success: false,
      message: "Missing write token. Please add SANITY_API_WRITE_TOKEN to your environment variables to seed Sanity.",
    }, { status: 401 });
  }

  const writeClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    token,
  });

  try {
    const results = [];

    for (const post of fallbackPosts) {
      // Create category first
      const categoryId = `category-${post.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
      await writeClient.createIfNotExists({
        _id: categoryId,
        _type: 'category',
        title: post.category,
        description: `${post.category} articles and guides`,
      });

      // Create post document
      const doc = {
        _id: `post-${post.slug}`,
        _type: 'post',
        title: post.title,
        slug: {
          _type: 'slug',
          current: post.slug,
        },
        excerpt: post.excerpt,
        publishedAt: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
        author: post.author,
        category: {
          _type: 'reference',
          _ref: categoryId,
        },
        content: post.content,
      };

      const res = await writeClient.createIfNotExists(doc);
      results.push(res);
    }

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${results.length} blog posts into Sanity!`,
      seeded: results.map(r => r._id),
    });
  } catch (error: any) {
    console.error("Error seeding Sanity:", error);
    return NextResponse.json({
      success: false,
      error: error.message || "Failed to seed data into Sanity.",
    }, { status: 500 });
  }
}
