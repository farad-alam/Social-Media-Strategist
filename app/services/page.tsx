import { Metadata } from "next";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media Strategy Services — Custom Packages & Pricing",
  description:
    "Comprehensive social media strategy services including strategy planning, content calendars, competitor research, audience analysis, and monthly consulting. View packages and pricing.",
  alternates: {
    canonical: "https://socialmediastrategist.ne/services",
  },
};

const packages = [
  {
    name: "Strategy Audit",
    price: "1,500",
    description: "A deep-dive audit of your current social media presence with actionable recommendations.",
    features: [
      "Full social media audit",
      "Competitor analysis (3 competitors)",
      "Audience assessment",
      "Content performance review",
      "Detailed report with recommendations",
      "30-minute strategy call",
    ],
    popular: false,
    cta: "Get Your Audit",
  },
  {
    name: "Growth Strategy",
    price: "3,500",
    description: "A comprehensive social media strategy built from scratch to drive measurable growth.",
    features: [
      "Everything in Strategy Audit",
      "Custom strategy document",
      "Content calendar (3 months)",
      "Brand voice guidelines",
      "Platform-specific strategies",
      "Hashtag & keyword strategy",
      "Engagement playbook",
      "KPI framework & dashboards",
      "2x strategy calls",
    ],
    popular: true,
    cta: "Start Growing",
  },
  {
    name: "Full Partnership",
    price: "7,500",
    priceNote: "/month",
    description: "Ongoing strategic partnership with continuous optimization and hands-on guidance.",
    features: [
      "Everything in Growth Strategy",
      "Monthly strategy refresh",
      "Weekly content direction",
      "Campaign planning & support",
      "Performance reporting",
      "Quarterly strategy review",
      "Direct Slack/WhatsApp access",
      "Team training sessions",
      "Priority support",
    ],
    popular: false,
    cta: "Become a Partner",
  },
];

const serviceFaqs = [
  {
    question: "How do I know which package is right for me?",
    answer: "Book a free strategy call and I'll assess your current situation, goals, and budget to recommend the best fit. Most businesses starting from scratch benefit from the Growth Strategy, while those with an existing presence often start with a Strategy Audit.",
  },
  {
    question: "Can I upgrade from one package to another?",
    answer: "Absolutely. Many clients start with a Strategy Audit, then upgrade to the Growth Strategy or Full Partnership once they see the value. Any investment from a previous package is credited toward the upgrade.",
  },
  {
    question: "What's the turnaround time?",
    answer: "Strategy Audit: 1 week. Growth Strategy: 2-4 weeks. Full Partnership starts immediately after onboarding (typically 3-5 business days).",
  },
  {
    question: "Do you offer custom packages?",
    answer: "Yes. If your needs don't fit neatly into one of these packages, I'll create a custom proposal based on your specific requirements and budget.",
  },
  {
    question: "What if I'm not satisfied with the strategy?",
    answer: "I offer one round of revisions included in every package. My goal is to create a strategy you're confident in. In 300+ engagements, I've maintained a 98% client satisfaction rate.",
  },
];

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Social Media Strategy",
    provider: { "@type": "Person", name: "Abul Hasan", jobTitle: "Social Media Strategist" },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Social Media Strategy Packages",
      itemListElement: packages.map((pkg) => ({
        "@type": "Offer",
        name: pkg.name,
        price: pkg.price.replace(",", ""),
        priceCurrency: "USD",
        description: pkg.description,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://socialmediastrategist.ne" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://socialmediastrategist.ne/services" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white/80 border border-white/20">
            Services & Pricing
          </span>
          <h1 className="text-display font-bold text-white mb-6">
            Social Media Strategy{" "}
            <span className="bg-gradient-to-r from-primary-200 to-secondary-light bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Whether you need a one-time strategy or ongoing partnership, I offer flexible packages designed to fit your business goals and budget.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative -mt-12 z-10 section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className={`rounded-2xl p-8 h-full flex flex-col ${pkg.popular ? "bg-primary text-white shadow-2xl shadow-primary/30 scale-105 border-2 border-primary" : "bg-white border border-slate-200 shadow-lg"}`}>
                  {pkg.popular && (
                    <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent text-white mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`text-xl font-bold ${pkg.popular ? "text-white" : "text-slate-900"}`}>
                    {pkg.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${pkg.popular ? "text-white" : "gradient-text"}`}>
                      ${pkg.price}
                    </span>
                    {pkg.priceNote && (
                      <span className={`text-sm ${pkg.popular ? "text-white/70" : "text-slate-500"}`}>
                        {pkg.priceNote}
                      </span>
                    )}
                  </div>
                  <p className={`mt-3 text-sm leading-relaxed ${pkg.popular ? "text-white/80" : "text-slate-500"}`}>
                    {pkg.description}
                  </p>

                  <ul className="mt-6 space-y-3 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-secondary-light" : "text-secondary"}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <span className={pkg.popular ? "text-white/90" : "text-slate-600"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`block w-full text-center px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                        pkg.popular
                          ? "bg-white text-primary hover:bg-slate-50 shadow-lg"
                          : "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25"
                      }`}
                    >
                      {pkg.cta}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-center text-sm text-slate-500 mt-8">
              All packages include a free 30-minute strategy call. Custom packages available on request.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="What You Get"
              title="Every Strategy Includes"
              subtitle="Regardless of which package you choose, every strategy is built on these core deliverables."
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Audience Personas", description: "Detailed profiles of your ideal customers with demographics, behaviors, and platform preferences.", icon: "👥" },
              { title: "Competitor Report", description: "Analysis of your top competitors' strategies, strengths, weaknesses, and opportunities.", icon: "🔍" },
              { title: "Content Framework", description: "Content pillars, themes, formats, and a repeatable content creation system.", icon: "📝" },
              { title: "Platform Strategy", description: "Platform-specific strategies with optimized profiles, posting times, and content types.", icon: "📱" },
              { title: "Growth Playbook", description: "Tactical playbook with engagement strategies, hashtag lists, and community building tips.", icon: "📈" },
              { title: "KPI Dashboard", description: "Custom metrics framework to track progress and demonstrate ROI from day one.", icon: "📊" },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <span className="text-3xl block mb-4">{item.icon}</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Industry Expertise"
              title="Strategies Built for Your Industry"
              subtitle="Tailored approaches that address the unique challenges and opportunities in your market."
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Small Business", href: "/strategy-for-small-business" },
              { name: "E-commerce", href: "/strategy-for-ecommerce" },
              { name: "B2B", href: "/strategy-for-b2b" },
              { name: "SaaS", href: "/strategy-for-saas" },
              { name: "Healthcare", href: "/strategy-for-healthcare" },
              { name: "Coaches", href: "/strategy-for-coaches" },
              { name: "Real Estate", href: "/strategy-for-realtors" },
              { name: "Legal", href: "/strategy-for-lawyers" },
            ].map((industry, i) => (
              <ScrollReveal key={i} delay={i * 75}>
                <Link
                  href={industry.href}
                  className="block bg-white rounded-xl p-5 text-center border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover-lift font-semibold text-sm text-slate-700 hover:text-primary"
                >
                  {industry.name}
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading badge="Questions?" title="Service FAQs" />
          </ScrollReveal>
          <ScrollReveal>
            <Accordion items={serviceFaqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 font-bold text-white mb-4">
            Not Sure Which Package Is Right?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Book a free 30-minute call and I&apos;ll recommend the best approach for your business.
          </p>
          <Button href="/contact" size="lg" variant="accent">
            Book Your Free Call
          </Button>
        </div>
      </section>
    </>
  );
}
