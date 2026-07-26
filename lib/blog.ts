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

let blockCounter = 0;
function createBlock(style: string, text: string): PortableTextBlock {
  blockCounter++;
  return {
    _key: `block-${blockCounter}`,
    _type: 'block',
    style,
    children: [
      {
        _key: `span-${blockCounter}`,
        _type: 'span',
        text,
        marks: [],
      },
    ],
  } as unknown as PortableTextBlock;
}

export const fallbackPosts: BlogPost[] = [
  {
    _id: "fallback-1",
    slug: "how-to-create-a-social-media-content-calendar",
    title: "How to Create a Social Media Content Calendar (With Free Template)",
    excerpt: "Stop guessing what to post every day. Learn how to build a content calendar that saves you time and drives consistent engagement.",
    date: "2026-06-15",
    updatedAt: "2026-06-15",
    author: "Abul Hasan",
    category: "Content Planning",
    readingTime: "5 min read",
    content: [
      createBlock("h2", "The Importance of a Content Calendar"),
      createBlock("normal", "If you're waking up every morning wondering \"what should I post today?\", you're already behind. A social media content calendar is the difference between proactive strategy and reactive scrambling."),
      createBlock("normal", "In this guide, we'll walk through exactly how to build one."),
      createBlock("h3", "1. Define Your Content Pillars"),
      createBlock("normal", "Content pillars are 3-5 core themes your brand discusses. For a fitness coach, they might be: Workout Tutorials, Nutrition Tips, Client Success Stories, and Personal Motivation."),
      createBlock("h3", "2. Choose Your Posting Frequency"),
      createBlock("normal", "Consistency beats frequency. It's better to post 3 times a week consistently than 7 times a week for a month, followed by ghosting your audience for two weeks."),
      createBlock("h3", "3. Batch Create Content"),
      createBlock("normal", "Pick one day a week (or month) to create all your content. Write the captions, design the graphics, and record the videos all at once."),
      createBlock("h3", "4. Schedule in Advance"),
      createBlock("normal", "Use tools like Buffer, Hootsuite, or Meta Business Suite to schedule your posts to go out automatically.")
    ]
  },
  {
    _id: "fallback-2",
    slug: "b2b-linkedin-strategy",
    title: "The Ultimate B2B LinkedIn Strategy for Lead Generation",
    excerpt: "LinkedIn isn't just a digital resume anymore. Discover how to turn your LinkedIn profile into a predictable B2B lead generation machine.",
    date: "2026-06-10",
    updatedAt: "2026-06-10",
    author: "Abul Hasan",
    category: "B2B Marketing",
    readingTime: "7 min read",
    content: [
      createBlock("h2", "Why LinkedIn is a Goldmine for B2B"),
      createBlock("normal", "LinkedIn is the only platform where your target audience actively wants to do business. If you sell B2B, this is where you need to be."),
      createBlock("h3", "1. Optimize Your Profile"),
      createBlock("normal", "Your profile is a landing page, not a resume. Your headline should state exactly who you help and how you help them. E.g., \"Helping SaaS companies increase MRR through targeted LinkedIn strategies.\""),
      createBlock("h3", "2. Post Actionable Content"),
      createBlock("normal", "Don't just share company news. Share frameworks, actionable tips, and industry insights that your target audience will find valuable."),
      createBlock("h3", "3. The 'Give, Give, Give, Ask' Framework"),
      createBlock("normal", "Provide value 90% of the time. Only ask for the sale (or the meeting) 10% of the time.")
    ]
  },
  {
    _id: "fallback-3",
    slug: "instagram-reels-best-practices",
    title: "Instagram Reels Best Practices: How to Boost Reach in 2026",
    excerpt: "Short-form video is dominating social media. Here are the updated best practices for creating Instagram Reels that actually get seen.",
    date: "2026-06-05",
    updatedAt: "2026-06-05",
    author: "Abul Hasan",
    category: "Instagram Growth",
    readingTime: "6 min read",
    content: [
      createBlock("h2", "The Anatomy of a Viral Reel"),
      createBlock("normal", "With organic reach on photos declining, Reels are your best bet for reaching non-followers on Instagram."),
      createBlock("h3", "1. The 3-Second Hook"),
      createBlock("normal", "If you don't grab their attention in the first 3 seconds, they will scroll past. Use text hooks on the screen immediately."),
      createBlock("h3", "2. Trending Audio vs. Original Audio"),
      createBlock("normal", "While trending audio can help with initial reach, original audio (where you are speaking directly to the camera) builds deeper trust and connection with your audience."),
      createBlock("h3", "3. Keep it Native"),
      createBlock("normal", "Edit your videos within the app (or make them look like they were). Add native text, captions, and stickers. High-production value commercials often perform worse than raw, authentic content.")
    ]
  }
];

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
    if (!posts || posts.length === 0) {
      return fallbackPosts;
    }
    return posts.map(mapSanityPostToBlogPost)
  } catch (error) {
    console.error("Error fetching posts from Sanity, using fallback:", error)
    return fallbackPosts
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch(POST_BY_SLUG_QUERY, { slug }, { next: { revalidate: 60 } })
    if (!post) {
      const fallback = fallbackPosts.find(p => p.slug === slug);
      return fallback || null;
    }
    return mapSanityPostToBlogPost(post)
  } catch (error) {
    console.error(`Error fetching post ${slug} from Sanity, using fallback:`, error)
    const fallback = fallbackPosts.find(p => p.slug === slug);
    return fallback || null;
  }
}
