import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

export interface GuidePageData {
  title: string;
  seoDescription: string;
  heroSubtitle: string;
  heroBanner: any;
  author: string;
  readTime: string;
  updatedAt: string;
  content: any[];
}

const GUIDE_PAGE_QUERY = `*[_type == "guidePage"][0] {
  title,
  seoDescription,
  heroSubtitle,
  heroBanner,
  author,
  readTime,
  updatedAt,
  content
}`;

export async function getGuidePageData(): Promise<GuidePageData | null> {
  try {
    const data = await client.fetch(GUIDE_PAGE_QUERY, {}, { next: { revalidate: 60 } });
    return data || null;
  } catch (error) {
    console.error("Error fetching Guide Page data from Sanity:", error);
    return null;
  }
}
