import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import type { PortableTextBlock } from 'sanity'

export interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: PortableTextBlock[];
  date: string;
  updatedAt: string;
  author: string;
  category: string;
  readingTime: string;
  featuredImageUrl?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImageUrl?: string;
  };
}

// GROQ query to fetch all published posts
const ALL_POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "date": publishedAt,
  "updatedAt": _updatedAt,
  author,
  "category": category->title,
  featuredImage,
  content,
  seo {
    metaTitle,
    metaDescription,
    ogImage
  }
}`

// GROQ query to fetch a single post by slug
const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "date": publishedAt,
  "updatedAt": _updatedAt,
  author,
  "category": category->title,
  featuredImage,
  content,
  seo {
    metaTitle,
    metaDescription,
    ogImage
  }
}`

function mapSanityPostToBlogPost(post: any): BlogPost {
  // Simple reading time calculation (avg 200 words per minute)
  let wordCount = 0;
  if (post.content && Array.isArray(post.content)) {
    const textContent = post.content
      .filter((block: any) => block._type === 'block' && block.children)
      .map((block: any) => block.children.map((child: any) => child.text).join(''))
      .join(' ');
    wordCount = textContent.split(/\s+/).length;
  }
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  return {
    ...post,
    category: post.category || "General",
    readingTime: `${readingTimeMinutes} min read`,
    featuredImageUrl: post.featuredImage ? urlForImage(post.featuredImage)?.url() : undefined,
    seo: post.seo ? {
      ...post.seo,
      ogImageUrl: post.seo.ogImage ? urlForImage(post.seo.ogImage)?.url() : undefined,
    } : undefined
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(ALL_POSTS_QUERY, {}, { next: { revalidate: 60 } })
    return posts.map(mapSanityPostToBlogPost)
  } catch (error) {
    console.error("Error fetching posts from Sanity:", error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch(POST_BY_SLUG_QUERY, { slug }, { next: { revalidate: 60 } })
    if (!post) return null
    return mapSanityPostToBlogPost(post)
  } catch (error) {
    console.error(`Error fetching post ${slug} from Sanity:`, error)
    return null
  }
}
