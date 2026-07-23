import { Metadata } from "next";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Abul Hasan — Social Media Strategist with 13+ Years Experience",
  description:
    "Meet Abul Hasan, a social media strategist with 13+ years of experience, 300+ clients served, and the BASIS Outsourcing Award 2021. Learn about his journey, expertise, and approach.",
  alternates: {
    canonical: "https://socialmediastrategist.net/about",
  },
};

const milestones = [
  { year: "2012", title: "Started Social Media Career", description: "Began working in social media management and lead generation for web-based businesses." },
  { year: "2015", title: "100+ Clients Milestone", description: "Reached 100 clients served, specializing in social media strategy for SMBs and startups." },
  { year: "2018", title: "Expanded to Global Clients", description: "Started working with international brands across the US, UK, Canada, and Australia." },
  { year: "2021", title: "Founded Agency & Won BASIS Award", description: "Built a social media agency and received the prestigious BASIS Outsourcing Award — District Level Top Individual." },
  { year: "2023", title: "300+ Clients Served", description: "Crossed 300 clients served with 42,000+ hours delivered on Upwork as a Top Rated professional." },
  { year: "2026", title: "Continuing to Lead", description: "Continuing to help businesses build powerful social media strategies with data-driven, results-focused approaches." },
];

const expertise = [
  "Social Media Strategy",
  "Content Strategy",
  "Brand Positioning",
  "Audience Research",
  "Competitor Analysis",
  "Social Media Audit",
  "Campaign Planning",
  "Community Management",
  "Organic Growth",
  "Platform Strategy",
  "Analytics & Reporting",
  "Social Media Consulting",
];

const platforms = [
  { name: "Instagram", icon: "📸" },
  { name: "Facebook", icon: "📘" },
  { name: "LinkedIn", icon: "💼" },
  { name: "TikTok", icon: "🎵" },
  { name: "YouTube", icon: "▶️" },
  { name: "Pinterest", icon: "📌" },
  { name: "X (Twitter)", icon: "🐦" },
  { name: "Threads", icon: "🧵" },
];

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abul Hasan",
    jobTitle: "Social Media Strategist",
    url: "https://socialmediastrategist.net/about",
    description: "Social media strategist with 13+ years of experience helping 300+ businesses grow through strategic social media planning.",
    knowsAbout: expertise,
    award: "BASIS Outsourcing Award 2021 — District Level Top Individual",
    sameAs: [
      "https://www.linkedin.com/in/abulhasan",
      "https://www.upwork.com/freelancers/abulhasan",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Abul Hasan | Social Media Strategist",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://socialmediastrategist.net" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://socialmediastrategist.net/about" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white/80 border border-white/20">
                About Me
              </span>
              <h1 className="text-display font-bold text-white mb-6">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-primary-200 to-secondary-light bg-clip-text text-transparent">
                  Abul Hasan
                </span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                A social media strategist with <strong className="text-white">13+ years of experience</strong> helping businesses transform their social media from random posting into strategic systems that accelerate audience growth and deliver measurable business results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" size="lg" variant="primary">
                  Book a Strategy Call
                </Button>
                <Button href="/services" size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  View Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] max-w-sm mx-auto rounded-2xl bg-slate-800 overflow-hidden shadow-2xl shadow-primary/30 relative border-4 border-white/10">
                <img 
                  src="/images/abul-hasan-about-hero.jpg" 
                  alt="Abul Hasan - Social Media Strategist Working" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <h2 className="text-2xl font-bold text-white mb-1">Abul Hasan</h2>
                  <p className="text-white/90 font-medium">Lead Social Media Strategist</p>
                  <p className="text-white/60 text-sm mt-1">Since 2012</p>
                </div>
              </div>
              <div className="absolute -right-4 top-8 bg-white rounded-xl p-4 shadow-xl border border-slate-100 animate-float flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-xl">🏆</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">BASIS Award</div>
                  <div className="text-xs text-slate-500">2021 Top Individual</div>
                </div>
              </div>
              <div className="absolute -left-4 bottom-16 bg-white rounded-xl p-4 shadow-xl border border-slate-100 animate-float flex items-center gap-3" style={{ animationDelay: "2s" }}>
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-xl">⭐</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Upwork:</div>
                  <div className="text-xs text-slate-500">Top Rated Plus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "13+", label: "Years Experience" },
              { value: "300+", label: "Clients Served" },
              { value: "42K+", label: "Hours Delivered" },
              { value: "30+", label: "Industries" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="My Story"
              title="From Passion to Profession"
              subtitle="How 13+ years of strategic thinking and relentless execution built a career helping 300+ businesses grow."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-12 gap-12 items-center">
            <ScrollReveal className="md:col-span-7">
              <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                <p>
                  My journey as a social media strategist began over 13 years ago when social media was still finding its place in the business world. While most saw it as just a place to share updates, I recognized its potential as a powerful business growth engine, and I built my career on that conviction.
                </p>
                <p>
                  Over the years, I&apos;ve had the privilege of working with <strong className="text-slate-800">300+ clients</strong> across more than 50 industries. From local startups to international brands, each engagement taught me something new about what makes social media strategy truly effective: it&apos;s not about following trends, it&apos;s about understanding people.
                </p>
                <p>
                  My work on Upwork, where I&apos;ve delivered <strong className="text-slate-800">42,000+ hours</strong> as a Top Rated professional, gave me the unique opportunity to work across diverse markets and cultures. This cross-industry experience is what allows me to bring fresh, proven strategies to every new client.
                </p>
                <p>
                  Today, I continue to help businesses build social media strategies that don&apos;t just look good on paper. They drive real, measurable results. Every strategy I create is rooted in data, informed by experience, and designed for growth.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="md:col-span-5">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                  <img src="/images/workspace.png" alt="Social Media Strategy Workspace" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-[280px]">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent-light" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-slate-900">"Data-driven strategies that actually drive real ROI."</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading badge="Career Journey" title="Milestones Along the Way" />
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-light to-secondary" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className={`relative flex items-start gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                        <span className="text-sm font-bold text-primary">{milestone.year}</span>
                        <h3 className="text-lg font-bold text-slate-900 mt-1">{milestone.title}</h3>
                        <p className="text-sm text-slate-500 mt-2">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-lg border-4 border-white">
                        {milestone.year.slice(-2)}
                      </div>
                    </div>
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Areas of Expertise"
              title="What I Specialize In"
              subtitle="Deep expertise across the full spectrum of social media strategy."
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {expertise.map((skill, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="bg-white rounded-xl p-5 border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all duration-300 text-center">
                  <div className="text-sm font-semibold text-slate-700">{skill}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Platforms */}
          <ScrollReveal>
            <div className="mt-16">
              <h3 className="text-center text-lg font-bold text-slate-900 mb-8">Platforms I Strategize For</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                  >
                    <span className="text-xl">{platform.icon}</span>
                    <span className="text-sm font-medium text-slate-700">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 font-bold text-white mb-4">
            Ready to Work With an Experienced Strategist?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Let&apos;s discuss how a custom social media strategy can help your business grow.
          </p>
          <Button href="/contact" size="lg" variant="accent">
            Book Your Free Strategy Call
          </Button>
        </div>
      </section>
    </>
  );
}
