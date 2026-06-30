import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Social Media Strategy Blog | Insights & Guides",
  description: "Read the latest insights, strategies, and guides on social media marketing, content planning, and brand growth by Abul Hasan.",
  alternates: {
    canonical: "https://socialmediastrategist.ne/blog",
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Social Media Strategy Blog",
    url: "https://socialmediastrategist.ne/blog",
    description: "Read the latest insights, strategies, and guides on social media marketing.",
    publisher: {
      "@type": "Person",
      name: "Abul Hasan"
    },
    blogPost: posts.map(post => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `https://socialmediastrategist.ne/blog/${post.slug}`,
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://socialmediastrategist.ne" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://socialmediastrategist.ne/blog" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-slate-900/5 text-slate-600 border border-slate-900/10">
            Insights & Guides
          </span>
          <h1 className="text-display font-bold text-slate-900 mb-6">
            The Strategy{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Actionable tips, industry updates, and deep dives into the strategies that are working on social media right now.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col overflow-hidden group">
                <Link href={`/blog/${post.slug}`} className="block flex-1 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </Link>
                <div className="px-8 pb-8 mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                      AH
                    </div>
                    <span className="text-sm font-medium text-slate-700">{post.author}</span>
                  </div>
                  <span className="text-xs text-slate-500">{post.readingTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionHeading 
             badge="Newsletter" 
             title="Get Strategies Delivered to Your Inbox"
             subtitle="Join 5,000+ marketers and founders receiving my best social media strategies every Tuesday."
          />
          <form className="mt-8 flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              required 
            />
            <Button type="submit" variant="primary">Subscribe</Button>
          </form>
        </div>
      </section>
    </>
  );
}
