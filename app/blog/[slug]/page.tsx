import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import Button from "@/components/ui/Button";

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

  return {
    title: `${post.title} | Social Media Strategy Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://socialmediastrategist.ne/blog/${post.slug}`,
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
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://socialmediastrategist.ne/about"
    },
    publisher: {
      "@type": "Organization",
      name: "Abul Hasan",
      logo: {
        "@type": "ImageObject",
        url: "https://socialmediastrategist.ne/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://socialmediastrategist.ne/blog/${post.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://socialmediastrategist.ne" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://socialmediastrategist.ne/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://socialmediastrategist.ne/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      <article>
        {/* Header */}
        <header className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white/80 border border-white/20">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">AH</div>
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
            <div 
              className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary-dark"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share/CTA Block */}
            <div className="mt-16 pt-8 border-t border-slate-200">
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
