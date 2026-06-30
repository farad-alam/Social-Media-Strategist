import Link from "next/link";
import Button from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Social Media Strategist",
  description: "The page you are looking for could not be found. Explore our social media strategy services, guides, and resources to help grow your business.",
  robots: {
    index: false,
    follow: true, // Allow crawlers to follow links on this page to discover other content
  }
};

export default function NotFound() {
  // JSON-LD structured data for the error page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "404 - Page Not Found",
    "description": "The requested page could not be found on Social Media Strategist.",
  };

  const popularLinks = [
    { title: "Social Media Strategy Services", href: "/services", icon: "🚀" },
    { title: "Free Strategy Guide", href: "/social-media-strategy-guide", icon: "📖" },
    { title: "Blog & Insights", href: "/blog", icon: "✍️" },
    { title: "Contact Us", href: "/contact", icon: "📞" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="min-h-[85vh] flex items-center justify-center section-padding relative overflow-hidden bg-slate-50">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <div className="text-[150px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-slate-200 mb-2 select-none drop-shadow-sm">
              404
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Oops! You've gone off script.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
              We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps the URL was mistyped.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/" variant="primary" size="lg">
                Return to Homepage
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Support
              </Button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-4 text-center">
              Let's get your strategy back on track:
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {popularLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50 hover:shadow-sm transition-all group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span className="font-medium text-slate-700 group-hover:text-primary transition-colors">{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
