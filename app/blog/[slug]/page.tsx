import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import Button from "@/components/ui/Button";
import { PortableText } from '@portabletext/react';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {};
  }

  const title = post.seo?.metaTitle || `${post.title} | Social Media Strategy Blog`;
  const description = post.seo?.metaDescription || post.excerpt;
  const image = post.seo?.ogImageUrl || post.featuredImageUrl || "https://socialmediastrategist.net/og-image.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: `https://socialmediastrategist.net/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://socialmediastrategist.net/about"
    },
    publisher: {
      "@type": "Organization",
      name: "Abul Hasan",
      logo: {
        "@type": "ImageObject",
        url: "https://socialmediastrategist.net/logo.png"
      }
    },
    image: post.featuredImageUrl ? [post.featuredImageUrl] : [],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://socialmediastrategist.net/blog/${post.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://socialmediastrategist.net" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://socialmediastrategist.net/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://socialmediastrategist.net/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      <article>
        {/* Header */}
        <header className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white/80 border border-white/20">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <img src="/images/abul-hasan.jpg" alt={post.author} className="w-8 h-8 rounded-full border border-white/20 object-cover object-top" />
                <span className="text-white/90 font-medium">{post.author}</span>
              </div>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {post.featuredImageUrl && (
              <div className="mb-12 -mt-24 md:-mt-32 relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-video">
                <img src={post.featuredImageUrl} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary-dark">
              <PortableText value={post.content} />
            </div>
            
            {/* Author Bio */}
            <div className="mt-16 pt-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img src="/images/abul-hasan.jpg" alt={post.author} className="w-20 h-20 rounded-full object-cover object-top border-4 border-slate-100 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Written by {post.author}</h3>
                  <p className="text-sm font-medium text-primary mb-3">Lead Social Media Strategist</p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Abul is a social media strategist with over 13 years of experience helping B2B and B2C brands turn their social channels into revenue engines. He is a BASIS Outsourcing Award winner and a Top Rated professional on Upwork.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Share/CTA Block */}
            <div className="mt-12">
               <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-200">
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">Want more insights like this?</h3>
                 <p className="text-slate-600 mb-8">
                   If you found this article helpful, you'll love my custom social media strategies. Let's discuss how we can implement these tactics for your business.
                 </p>
                 <Button href="/contact" variant="primary" size="lg">
                   Book a Strategy Call
                 </Button>
               </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
