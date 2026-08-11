import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TableOfContents from "@/components/ui/TableOfContents";
import { PortableText } from '@portabletext/react';
import { urlForImage } from "@/sanity/lib/image";
import { getGuidePageData } from "@/lib/guide";

// Revalidate this page every 60 seconds
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getGuidePageData();
  
  if (!data) {
    return {
      title: "The Ultimate Social Media Strategy Guide",
      description: "Social Media Strategy guide.",
    };
  }

  return {
    title: data.title,
    description: data.seoDescription,
    alternates: {
      canonical: "https://socialmediastrategist.net/social-media-strategy-guide",
    },
  };
}

const components = {
  block: {
    h2: ({ children, value }: any) => {
      const text = value.children.map((c: any) => c.text).join('');
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
      return (
        <h2 id={id} className="scroll-mt-24">
          {children}
        </h2>
      );
    },
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="not-prose my-8 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
          <Image
            src={urlForImage(value)?.url() || ''}
            alt={value.alt || ' '}
            width={900}
            height={500}
            className="w-full object-contain"
          />
          {value.caption && <p className="text-sm text-center text-slate-500 mt-2">{value.caption}</p>}
        </div>
      );
    },
    callout: ({ value }: any) => {
      const styles: Record<string, string> = {
        primary: "bg-slate-50 border-l-4 border-primary p-6 my-8 rounded-r-lg",
        secondary: "bg-slate-50 border-l-4 border-secondary p-6 my-6 rounded-r-lg",
        highlight: "bg-primary-50 border border-primary-100 rounded-xl p-6 my-6 italic text-slate-700",
      };
      const className = styles[value.style] || styles.primary;
      return (
        <div className={className}>
          <PortableText value={value.text} components={components} />
        </div>
      );
    },
    dataTable: ({ value }: any) => {
      return (
        <div className="not-prose overflow-x-auto my-8">
          <table className="min-w-full text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 text-slate-700 uppercase text-xs">
              <tr>
                {value.headers?.map((header: string, index: number) => (
                  <th key={index} className="px-4 py-3 font-semibold">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {value.rows?.map((row: any, rIndex: number) => (
                <tr key={rIndex} className="bg-white hover:bg-slate-50 transition-colors">
                  {row.cells?.map((cell: string, cIndex: number) => (
                    <td key={cIndex} className={`px-4 py-3 ${cIndex === 0 ? 'font-medium text-slate-900' : 'text-slate-600'}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
    contentPillars: ({ value }: any) => {
      return (
        <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
          {value.title && <p className="text-sm font-bold text-slate-500 uppercase mb-3">{value.title}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {value.pillars?.map((pillar: any, index: number) => (
              <div key={index} className="flex items-start gap-3 bg-white border border-slate-100 rounded-lg p-4">
                <span className="text-2xl">{pillar.emoji}</span>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{pillar.title}</p>
                  <p className="text-slate-500 text-xs">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  },
};

export default async function GuidePage() {
  const data = await getGuidePageData();
  
  if (!data) {
    notFound();
  }

  // Generate TOC items dynamically from H2 tags in PortableText
  const tocItems = data.content
    ?.filter((block: any) => block._type === 'block' && block.style === 'h2')
    .map((block: any) => {
      const text = block.children.map((c: any) => c.text).join('');
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
      return { id, title: text };
    }) || [];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.seoDescription,
    author: {
      "@type": "Person",
      name: data.author,
      url: "https://socialmediastrategist.net/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Abul Hasan | Social Media Strategist",
      logo: {
        "@type": "ImageObject",
        url: "https://socialmediastrategist.net/images/logo.png",
      },
    },
    datePublished: "2026-08-01T00:00:00Z",
    dateModified: data.updatedAt ? new Date(data.updatedAt).toISOString() : "2026-08-01T00:00:00Z",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://socialmediastrategist.net" },
      { "@type": "ListItem", position: 2, name: "Strategy Guide", item: "https://socialmediastrategist.net/social-media-strategy-guide" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white/80 border border-white/20">
            The Definitive Guide • 2026
          </span>
          <h1 className="text-display font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-primary-200 to-secondary-light bg-clip-text text-transparent">
              {data.title}
            </span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-6">
            {data.heroSubtitle}
          </p>

          {/* Banner image */}
          {data.heroBanner && data.heroBanner.asset && (
            <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <Image
                src={urlForImage(data.heroBanner)?.url() || '/images/guide/guide-hero-banner.webp'}
                alt={data.title}
                width={1200}
                height={630}
                priority
                className="w-full object-cover"
              />
            </div>
          )}

          <div className="flex items-center justify-center gap-4 text-white/60 text-sm mt-8">
            <div className="flex items-center gap-2">
              <Image
                src="/images/abul-hasan.webp"
                alt="Abul Hasan"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover object-top border border-white/20"
              />
              <span>By {data.author}</span>
            </div>
            <span>•</span>
            <span>{data.readTime}</span>
            {data.updatedAt && (
              <>
                <span>•</span>
                <span>Updated: {new Date(data.updatedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar */}
            <aside className="lg:w-1/4 lg:flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tocItems} />
                <div className="mt-8 bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <h4 className="font-bold text-slate-900 mb-2">Want this done for you?</h4>
                  <p className="text-sm text-slate-600 mb-4">
                    Skip the learning curve. Let an expert build your strategy.
                  </p>
                  <Button href="/contact" variant="primary" size="sm" fullWidth>
                    Book a Free Call
                  </Button>
                </div>
              </div>
            </aside>

            {/* Article */}
            <article className="lg:w-3/4 guide-article">
              <PortableText value={data.content} components={components} />
            </article>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to stop guessing and start growing?
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Book a free 30-minute strategy call. We'll audit your current approach and map out a custom growth plan. No obligations.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Book Your Free Strategy Call
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
