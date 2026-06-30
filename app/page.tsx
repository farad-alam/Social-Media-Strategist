import { Metadata } from "next";
import Button from "@/components/ui/Button";
import StatCounter from "@/components/ui/StatCounter";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import Timeline from "@/components/ui/Timeline";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media Strategy That Actually Grows Your Business | Abul Hasan",
  description:
    "Expert social media strategy services by Abul Hasan — 13+ years experience, 300+ clients served. Custom strategies for brand growth, lead generation & ROI. Book your free strategy call today.",
  alternates: {
    canonical: "https://socialmediastrategist.ne",
  },
};

/* ===== DATA ===== */

const services = [
  {
    title: "Strategy Planning",
    description:
      "A comprehensive social media strategy tailored to your brand goals, audience, and industry. Clear roadmap from day one.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Content Calendar",
    description:
      "Structured monthly content calendars with post ideas, captions, hashtag strategies, and optimal posting schedules.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Competitor Research",
    description:
      "Deep analysis of your competitors' social presence, content strategies, and engagement patterns to find your advantage.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Audience Research",
    description:
      "Identify your ideal customers, understand their behaviors, preferences, and the platforms where they spend time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Campaign Planning",
    description:
      "Strategic campaign blueprints for product launches, brand awareness, lead generation, and seasonal promotions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Brand Positioning",
    description:
      "Define your brand voice, visual identity, and unique positioning across social platforms to stand out from competitors.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Analytics & Reporting",
    description:
      "Data-driven insights with monthly reports on performance metrics, growth tracking, and actionable recommendations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Monthly Consulting",
    description:
      "Ongoing strategic guidance with regular check-ins, performance reviews, and strategy adjustments to keep you ahead.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: 1,
    title: "Discovery & Research",
    description:
      "We start by understanding your business, goals, target audience, and current social media presence through a detailed discovery session.",
  },
  {
    step: 2,
    title: "Audience Analysis",
    description:
      "Deep dive into your ideal customers — their demographics, behaviors, pain points, and the platforms where they spend time.",
  },
  {
    step: 3,
    title: "Competitor Analysis",
    description:
      "Analyze your competitors' social presence, content strategies, engagement rates, and gaps you can capitalize on.",
  },
  {
    step: 4,
    title: "Content Planning",
    description:
      "Build a comprehensive content strategy with themes, formats, posting frequency, and a monthly editorial calendar.",
  },
  {
    step: 5,
    title: "Platform Selection",
    description:
      "Choose the right platforms based on your audience, industry, and goals. Focus beats spread — quality over quantity.",
  },
  {
    step: 6,
    title: "Execution Framework",
    description:
      "Launch your strategy with clear SOPs, workflows, and templates so your team can execute consistently.",
  },
  {
    step: 7,
    title: "Optimization & Growth",
    description:
      "Continuously monitor performance, A/B test content, and refine the strategy based on data-driven insights.",
  },
];

const industries = [
  { name: "Small Business", href: "/strategy-for-small-business", emoji: "🏪" },
  { name: "E-commerce", href: "/strategy-for-ecommerce", emoji: "🛒" },
  { name: "B2B", href: "/strategy-for-b2b", emoji: "🤝" },
  { name: "SaaS", href: "/strategy-for-saas", emoji: "💻" },
  { name: "Coaches", href: "/strategy-for-coaches", emoji: "🎯" },
  { name: "Healthcare", href: "/strategy-for-healthcare", emoji: "🏥" },
  { name: "Real Estate", href: "/strategy-for-realtors", emoji: "🏠" },
  { name: "Legal", href: "/strategy-for-lawyers", emoji: "⚖️" },
];

const testimonials = [
  {
    quote:
      "Abul completely transformed our social media presence. Within 6 months, our engagement rate tripled and we started getting consistent leads from Instagram and LinkedIn.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
  },
  {
    quote:
      "His strategic approach is what sets him apart. Instead of just posting content, Abul built us a complete social media ecosystem that actually drives revenue.",
    name: "Michael Chen",
    role: "CEO",
    company: "GrowthLab Agency",
  },
  {
    quote:
      "We tried managing social media ourselves for 2 years with zero results. Abul's strategy gave us clarity and a clear path to growth. Best investment we made.",
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Bloom Wellness",
  },
  {
    quote:
      "Working with Abul was a game-changer for our B2B brand. His understanding of LinkedIn strategy alone generated 47 qualified leads in the first quarter.",
    name: "David Park",
    role: "VP of Marketing",
    company: "CloudSync Solutions",
  },
  {
    quote:
      "Abul doesn't just create strategies — he creates systems. His content frameworks and analytics dashboards made our team 3x more efficient.",
    name: "Lisa Thompson",
    role: "Brand Manager",
    company: "Artisan Foods Co.",
  },
];

const faqs = [
  {
    question: "What is a social media strategy?",
    answer:
      "A social media strategy is a comprehensive plan that outlines your social media goals, the tactics you'll use to achieve them, and the metrics you'll track to measure success. It covers audience research, content planning, platform selection, posting schedules, engagement protocols, and performance analysis. A good strategy aligns your social media efforts with your overall business objectives.",
  },
  {
    question: "What does a social media strategist do?",
    answer:
      "A social media strategist develops and oversees the strategic direction of a brand's social media presence. This includes conducting audience and competitor research, creating content strategies, building editorial calendars, selecting the right platforms, defining brand voice, setting KPIs, analyzing performance data, and continuously optimizing the approach for better results.",
  },
  {
    question: "How much does a social media strategy cost?",
    answer:
      "Social media strategy costs vary based on scope and complexity. A basic strategy audit starts at around $1,500, while a comprehensive strategy with ongoing monthly consulting typically ranges from $3,000 to $10,000+ per month. The investment depends on your business size, number of platforms, content volume, and whether you need execution support alongside strategy.",
  },
  {
    question: "Who needs a social media strategy?",
    answer:
      "Any business that wants to grow through social media needs a strategy. This includes startups looking to build brand awareness, established businesses wanting to generate leads, e-commerce brands driving sales, B2B companies building thought leadership, and personal brands establishing authority. Without a strategy, you're essentially posting randomly and hoping for results.",
  },
  {
    question: "How long does it take to create a social media strategy?",
    answer:
      "A comprehensive social media strategy typically takes 2-4 weeks to develop. This includes the discovery phase (3-5 days), audience and competitor research (5-7 days), strategy development (5-7 days), and content planning (3-5 days). Rush delivery is available for time-sensitive projects, but thorough research produces better results.",
  },
  {
    question: "Is social media strategy worth the investment?",
    answer:
      "Absolutely. Businesses with a documented social media strategy are 313% more likely to report success. A strategy prevents wasted time on ineffective tactics, ensures consistent brand messaging, and provides a measurable framework for ROI. Most clients see a 3-5x return on their strategy investment within the first year.",
  },
  {
    question: "How often should a social media strategy be updated?",
    answer:
      "Your core strategy should be reviewed quarterly and updated based on performance data. Major overhauls are typically needed annually or when there are significant changes in your business, industry, or platform algorithms. Monthly tactical adjustments to content and posting schedules are normal and expected.",
  },
  {
    question: "What's the difference between social media strategy and management?",
    answer:
      "Strategy is the plan — it defines what you'll do, why, and how you'll measure success. Management is the execution — the day-to-day posting, community engagement, and content creation. Think of strategy as the blueprint and management as the construction. You need a solid strategy before management can be effective.",
  },
  {
    question: "Can small businesses benefit from a social media strategy?",
    answer:
      "Small businesses actually benefit the most from having a strategy because they have limited time and budget. A strategy ensures every post serves a purpose, every platform is chosen intentionally, and every effort drives toward business goals. Many small businesses waste months posting without direction — a strategy prevents that.",
  },
  {
    question: "Do I need a social media strategy for every platform?",
    answer:
      "No — and that's exactly what a strategy helps you avoid. A good social media strategist will identify the 2-3 platforms where your target audience is most active and create a focused strategy for those. Trying to be everywhere spreads your resources too thin. Focus beats spread every time.",
  },
  {
    question: "How do you measure social media strategy success?",
    answer:
      "Success is measured against your specific business goals using KPIs like engagement rate, follower growth, website traffic from social, lead generation, conversion rate, brand awareness metrics, and revenue attribution. We set up tracking dashboards from day one so every action is measurable.",
  },
  {
    question: "Can AI replace a social media strategist?",
    answer:
      "AI is a powerful tool for content generation and data analysis, but it cannot replace strategic thinking, brand intuition, and human creativity. The best results come from combining AI efficiency with human strategy. A skilled strategist uses AI to amplify their work, not the other way around.",
  },
  {
    question: "What platforms should my business be on?",
    answer:
      "The right platforms depend on your target audience, industry, and goals. B2B companies typically thrive on LinkedIn. Visual brands do well on Instagram and Pinterest. E-commerce brands see results on Instagram, TikTok, and Facebook. Local businesses benefit from Facebook and Google Business. A strategy audit will identify your best-fit platforms.",
  },
  {
    question: "How is your approach different from other strategists?",
    answer:
      "With 13+ years of experience and 300+ clients served across diverse industries, I bring a data-driven, results-focused approach. I don't believe in cookie-cutter strategies. Every plan is custom-built based on thorough research. My strategies also come with execution frameworks and templates so your team can implement independently.",
  },
  {
    question: "Do you offer ongoing support after creating the strategy?",
    answer:
      "Yes. I offer monthly consulting packages that include strategy check-ins, performance reviews, content guidance, and continuous optimization. Many clients start with a strategy project and then move to monthly consulting to ensure consistent execution and ongoing improvement.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I've worked across 50+ industries including e-commerce, SaaS, healthcare, real estate, legal, coaching, education, finance, and more. While I bring industry-specific insights, my core methodology — audience research, competitive analysis, and data-driven content planning — is universal and adapts to any industry.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is simple: book a free strategy call using the button above. In this 30-minute call, we'll discuss your business, goals, current challenges, and I'll share initial recommendations. If we're a good fit, I'll send you a custom proposal outlining the scope, timeline, and investment.",
  },
  {
    question: "What if I already have a social media presence but it's not working?",
    answer:
      "That's actually the most common starting point for my clients. I'll begin with a comprehensive social media audit to identify what's working, what's not, and why. From there, we rebuild your strategy with clear goals, better targeting, and content that actually resonates with your audience.",
  },
  {
    question: "Do you help with paid social media advertising?",
    answer:
      "My primary focus is organic strategy, but I also develop paid social media advertising strategies as part of comprehensive packages. This includes audience targeting, budget allocation, ad creative direction, and campaign structure. For ad management (ongoing optimization), I can recommend trusted partners.",
  },
  {
    question: "What results can I expect and in what timeframe?",
    answer:
      "Most clients see initial improvements in engagement and content performance within the first month. Meaningful growth in followers and website traffic typically starts in months 2-3. Lead generation and revenue impact usually become visible by months 4-6. Social media is a long game, but with the right strategy, results compound over time.",
  },
];

/* ===== PAGE COMPONENT ===== */

export default function HomePage() {
  // JSON-LD schemas
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Social Media Strategy That Actually Grows Your Business",
    description:
      "Expert social media strategy services by Abul Hasan — 13+ years experience, 300+ clients served.",
    url: "https://socialmediastrategist.ne",
    mainEntity: {
      "@type": "Person",
      name: "Abul Hasan",
      jobTitle: "Social Media Strategist",
      description:
        "Social media strategist with 13+ years of experience helping businesses grow their online presence.",
      knowsAbout: [
        "Social Media Strategy",
        "Social Media Marketing",
        "Content Strategy",
        "Digital Marketing",
        "Brand Positioning",
        "Audience Research",
        "Social Media Consulting",
      ],
      award: "BASIS Outsourcing Award 2021",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Build a Social Media Strategy",
    description:
      "A step-by-step process for creating an effective social media strategy for your business.",
    step: processSteps.map((step) => ({
      "@type": "HowToStep",
      position: step.step,
      name: step.title,
      text: step.description,
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Social Media Strategy",
    provider: {
      "@type": "Person",
      name: "Abul Hasan",
      jobTitle: "Social Media Strategist",
    },
    areaServed: "Worldwide",
    description:
      "Custom social media strategies that help brands increase awareness, generate leads, and improve ROI.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Social Media Strategy Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://socialmediastrategist.ne",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* ===== HERO SECTION ===== */}
      <section id="hero" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 border border-slate-900/10 backdrop-blur-sm mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-secondary-light animate-pulse" />
              <span className="text-sm text-slate-600 font-medium">
                13+ Years of Strategic Excellence
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-display font-bold text-slate-900 mb-6 animate-fade-in-up">
              Social Media Strategy That{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Actually Grows
              </span>{" "}
              Your Business
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-10 animate-fade-in-up stagger-2">
              Custom social media strategies built by a veteran strategist.
              Increase brand awareness, generate qualified leads, and improve ROI
              — backed by 300+ successful client engagements.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              <Button href="/contact" size="lg" variant="primary">
                Get Your Free Strategy Call
              </Button>
              <Button href="/social-media-strategy-guide" size="lg" variant="outline" className="border-slate-900/20 text-slate-900 hover:bg-slate-900/5 hover:text-slate-900">
                View Strategy Guide
              </Button>
            </div>

            {/* Social Proof Mini */}
            <div className="mt-12 flex flex-wrap items-center gap-8 text-slate-500 text-sm animate-fade-in stagger-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-slate-900 flex items-center justify-center text-slate-900 text-xs font-bold"
                    >
                      {["S", "M", "E", "D"][i]}
                    </div>
                  ))}
                </div>
                <span>300+ clients served</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-light" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>BASIS Outsourcing Award 2021</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section id="trust-stats" className="relative -mt-16 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <StatCounter end={13} suffix="+" label="Years Experience" />
              <StatCounter end={300} suffix="+" label="Clients Served" />
              <StatCounter end={42000} suffix="+" label="Hours Delivered" />
              <StatCounter end={50} suffix="+" label="Industries" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS SOCIAL MEDIA STRATEGY ===== */}
      <section id="what-is-social-media-strategy" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal direction="left">
              <div>
                <SectionHeading
                  badge="Understanding the Fundamentals"
                  title="What Is Social Media Strategy?"
                  subtitle="A social media strategy is your business's roadmap to social media success — and it's the foundation of every brand that thrives online."
                  centered={false}
                />

                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    A <strong className="text-slate-800">social media strategy</strong> is a comprehensive
                    document that outlines everything your brand does on social
                    media — from the content you create and the platforms you use,
                    to the audience you target and the goals you&apos;re working toward.
                    It transforms random posting into a purposeful, measurable
                    system that drives real business results.
                  </p>
                  <p>
                    Think of it this way: <strong className="text-slate-800">social media management</strong> without
                    strategy is like driving without a destination. You&apos;re moving,
                    but you&apos;re not going anywhere. A social media strategist creates
                    the GPS — setting clear goals, defining the route, and
                    adjusting when conditions change.
                  </p>
                  <p>
                    An effective social media strategy includes audience research,
                    competitive analysis, content planning, platform selection,
                    brand voice guidelines, posting schedules, engagement
                    protocols, and performance measurement. It aligns every social
                    media action with your broader marketing and business
                    objectives.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-6">
                {/* Why It Matters Card */}
                <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                    Why Social Media Strategy Matters
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Businesses with a documented strategy are 313% more likely to report success",
                      "Strategic brands see 3-5x higher engagement rates",
                      "Consistent branding increases revenue by up to 23%",
                      "73% of marketers say social media has been effective for their business",
                    ].map((stat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                        <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <span>{stat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits List */}
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    Key Benefits of a Social Media Strategy
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Clear direction",
                      "Better ROI",
                      "Consistent branding",
                      "More engagement",
                      "Lead generation",
                      "Time savings",
                      "Competitive edge",
                      "Measurable growth",
                    ].map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Inline CTA */}
          <ScrollReveal>
            <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-10 border border-primary-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Need help building your social media strategy?
                </h3>
                <p className="text-slate-500 mt-1">
                  Book a free 30-minute strategy call and get personalized
                  recommendations.
                </p>
              </div>
              <Button href="/contact" variant="primary" className="flex-shrink-0">
                Talk to an Expert
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="What We Offer"
              title="Social Media Strategy Services"
              subtitle="Comprehensive strategic services designed to help your brand stand out, engage authentically, and grow consistently across social platforms."
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href="/services"
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12 text-center">
              <Button href="/services" variant="outline" size="lg">
                View All Services & Pricing
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY BUSINESSES NEED STRATEGY ===== */}
      <section id="why-strategy" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="The Difference is Clear"
              title="Why Your Business Needs a Social Media Strategy"
              subtitle="See what happens when businesses operate with a clear strategy versus without one."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Without Strategy */}
            <ScrollReveal direction="left">
              <div className="rounded-2xl border-2 border-red-100 bg-red-50/50 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-800">Without Strategy</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Random posting", desc: "No consistency or purpose" },
                    { label: "No clear goals", desc: "Can't measure success" },
                    { label: "Low engagement", desc: "Audience doesn't connect" },
                    { label: "Wasted budget", desc: "Money on ineffective ads" },
                    { label: "Brand confusion", desc: "Inconsistent messaging" },
                    { label: "Zero leads", desc: "Social doesn't drive revenue" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-semibold text-red-800 text-sm">{item.label}</div>
                        <div className="text-xs text-red-600/70">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* With Strategy */}
            <ScrollReveal direction="right">
              <div className="rounded-2xl border-2 border-green-100 bg-green-50/50 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800">With Strategy</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Purposeful content", desc: "Every post serves a goal" },
                    { label: "Clear KPIs", desc: "Measurable success metrics" },
                    { label: "High engagement", desc: "Audience that connects" },
                    { label: "Smart spending", desc: "Budget drives real ROI" },
                    { label: "Strong brand", desc: "Consistent, recognizable voice" },
                    { label: "Qualified leads", desc: "Social drives revenue" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-semibold text-green-800 text-sm">{item.label}</div>
                        <div className="text-xs text-green-600/70">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="How It Works"
              title="The Social Media Strategy Process"
              subtitle="A proven 7-step methodology refined over 13+ years and 300+ client engagements."
            />
          </ScrollReveal>

          <ScrollReveal>
            <Timeline items={processSteps} />
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-16 text-center">
              <Button href="/contact" variant="primary" size="lg">
                Start Your Strategy Journey
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== INDUSTRY SPECIALIZATIONS ===== */}
      <section id="industries" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Industry Expertise"
              title="Social Media Strategy for Every Industry"
              subtitle="Tailored strategies that address the unique challenges and opportunities in your industry."
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <ScrollReveal key={index} delay={index * 75}>
                <Link
                  href={industry.href}
                  className="group block bg-white rounded-xl p-6 text-center border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover-lift"
                >
                  <span className="text-3xl md:text-4xl block mb-3">
                    {industry.emoji}
                  </span>
                  <span className="text-sm md:text-base font-semibold text-slate-700 group-hover:text-primary transition-colors duration-200">
                    {industry.name}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Client Success Stories"
              title="What Clients Say About Working With Me"
              subtitle="Real results from real businesses who invested in a proper social media strategy."
            />
          </ScrollReveal>

          <ScrollReveal>
            <TestimonialCarousel testimonials={testimonials} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section id="about-preview" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center overflow-hidden shadow-2xl shadow-primary/20">
                  <div className="text-center text-white p-8">
                    <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-6 flex items-center justify-center text-5xl font-bold">
                      AH
                    </div>
                    <h3 className="text-2xl font-bold">Abul Hasan</h3>
                    <p className="text-white/70 mt-2">Social Media Strategist</p>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -right-4 top-10 bg-white rounded-xl p-3 shadow-lg border border-slate-100 animate-float">
                  <div className="text-xs font-bold text-slate-800">🏆 BASIS Award</div>
                </div>
                <div className="absolute -left-4 bottom-20 bg-white rounded-xl p-3 shadow-lg border border-slate-100 animate-float" style={{ animationDelay: "2s" }}>
                  <div className="text-xs font-bold text-slate-800">⭐ Top Rated</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-primary-50 text-primary border border-primary-100">
                  Meet Your Strategist
                </span>
                <h2 className="text-h2 font-bold text-slate-900 mb-6">
                  Hi, I&apos;m Abul Hasan — Your Social Media Strategist
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    With <strong className="text-slate-800">13+ years</strong> of hands-on experience in social
                    media strategy, I&apos;ve helped <strong className="text-slate-800">300+ businesses</strong> across
                    50+ industries transform their social media from a time-sink
                    into a revenue-driving machine.
                  </p>
                  <p>
                    I&apos;ve delivered <strong className="text-slate-800">42,000+ hours</strong> of strategic work on
                    Upwork, earned the prestigious <strong className="text-slate-800">BASIS Outsourcing Award
                    2021</strong> (District Level Top Individual), and built a successful
                    agency from the ground up.
                  </p>
                  <p>
                    My approach combines data-driven research with creative
                    strategy to build social media systems that work — not just
                    today, but for the long term.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="/about" variant="primary">
                    Learn More About Me
                  </Button>
                  <Button href="/contact" variant="ghost">
                    Book a Call
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Frequently Asked Questions"
              title="Everything You Need to Know About Social Media Strategy"
              subtitle="Get answers to the most common questions about social media strategy, pricing, process, and results."
            />
          </ScrollReveal>

          <ScrollReveal>
            <Accordion items={faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="final-cta" className="relative py-24 md:py-32 gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-secondary/15 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-h1 font-bold text-slate-900 mb-6">
              Need a Custom Social Media Strategy?
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Let&apos;s build a strategy that actually works for your business.
              Book your free 30-minute strategy call and get personalized
              recommendations — no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" variant="accent">
                Book Your Free Strategy Call
              </Button>
              <Button
                href="/social-media-strategy-template"
                size="lg"
                variant="outline"
                className="border-slate-900/20 text-slate-900 hover:bg-slate-900/5 hover:text-slate-900"
              >
                Download Free Template
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
