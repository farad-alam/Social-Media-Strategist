import { Metadata } from "next";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { notFound } from "next/navigation";

// Define the available services
const servicesData: Record<
  string,
  { title: string; description: string; benefits: string[]; icon: string }
> = {
  "strategy-planning": {
    title: "Strategy Planning",
    description: "A comprehensive social media strategy tailored to your brand goals, audience, and industry. We don't just post content; we build clear roadmaps that align with your overall business objectives to ensure every action drives measurable ROI.",
    benefits: ["Platform selection and prioritization", "Goal setting and KPI tracking", "Brand voice and tone development", "Resource allocation planning"],
    icon: "🎯"
  },
  "content-calendar": {
    title: "Content Calendar Creation",
    description: "Structured monthly content calendars with post ideas, captions, hashtag strategies, and optimal posting schedules. Never scramble for what to post again. Our calendars are designed to balance education, entertainment, and conversion.",
    benefits: ["30-day proactive content mapping", "Copywriting for all captions", "Strategic hashtag research", "Optimal posting times scheduling"],
    icon: "📅"
  },
  "competitor-research": {
    title: "Competitor Research",
    description: "Deep analysis of your competitors' social presence, content strategies, and engagement patterns to find your advantage. We identify the gaps in their strategy so you can dominate the conversation in your industry.",
    benefits: ["Top competitor strategy breakdown", "Content gap analysis", "Engagement rate benchmarking", "Threats and opportunities report"],
    icon: "🔍"
  },
  "audience-research": {
    title: "Audience Research",
    description: "Identify your ideal customers, understand their behaviors, preferences, and the platforms where they spend time. By deeply understanding who we are talking to, we ensure your message resonates and converts.",
    benefits: ["Detailed buyer personas", "Platform demographic matching", "Pain point and desire mapping", "Social listening insights"],
    icon: "👥"
  },
  "brand-positioning": {
    title: "Brand Positioning",
    description: "Define your brand voice, visual identity, and unique positioning across social platforms to stand out from the noise. We ensure your brand is perceived exactly how you want it to be.",
    benefits: ["Visual identity alignment", "Unique value proposition (UVP) messaging", "Brand personality definition", "Consistency guidelines across platforms"],
    icon: "✨"
  },
  "monthly-consulting": {
    title: "Monthly Consulting",
    description: "Ongoing strategic guidance with regular check-ins, performance reviews, and strategy adjustments to keep you ahead of the algorithm. Have a dedicated strategist in your corner every single month.",
    benefits: ["Monthly performance reviews", "A/B testing and optimization", "Algorithm update adjustments", "Direct access for Q&A"],
    icon: "🤝"
  }
};

type Props = {
  params: { service: string };
};

// Next.js SSG
export async function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({
    service: service,
  }));
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const serviceInfo = servicesData[params.service];

  if (!serviceInfo) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${serviceInfo.title} Services | Social Media Strategist`,
    description: serviceInfo.description,
    alternates: {
      canonical: `https://socialmediastrategist.ne/services/${params.service}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const serviceKey = params.service;
  const serviceInfo = servicesData[serviceKey];

  if (!serviceInfo) {
    notFound();
  }

  // Schema Markup for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceInfo.title,
    provider: {
      "@type": "Person",
      name: "Abul Hasan",
      jobTitle: "Social Media Strategist",
    },
    description: serviceInfo.description,
    areaServed: "Worldwide",
    url: `https://socialmediastrategist.ne/services/${serviceKey}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white/80 border border-white/20">
              Specialized Service
            </span>
            <div className="text-6xl mb-6">{serviceInfo.icon}</div>
            <h1 className="text-display font-bold text-white mb-6">
              {serviceInfo.title}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              {serviceInfo.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="What's Included"
              title={`The ${serviceInfo.title} Process`}
              subtitle="Everything you need to dominate your industry on social media."
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {serviceInfo.benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Key Deliverable</h3>
                    <p className="text-sm text-slate-600">{benefit}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-h2 font-bold text-white mb-6">
              Ready to upgrade your {serviceInfo.title.toLowerCase()}?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Book a free discovery call today to discuss how we can implement this strategy for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/contact" size="lg" variant="accent">
                Book Your Free Strategy Call
              </Button>
              <Button href="/services" size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                View All Services
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
