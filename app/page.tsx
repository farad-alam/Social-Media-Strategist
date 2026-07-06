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
  title: "Abul Hasan | Social Media Strategist for Hire — 13+ Yrs, 300+ Client",
  description:
    "Abul Hasan is a social media strategist with 13+ years and 300+ clients served. Get a custom strategy built for measurable business growth.",
  alternates: {
    canonical: "https://socialmediastrategist.net",
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
    avatar: "/images/avatar-1.png",
    source: "Upwork",
  },
  {
    quote:
      "His strategic approach is what sets him apart. Instead of just posting content, Abul built us a complete social media ecosystem that actually drives revenue.",
    name: "Michael Chen",
    role: "CEO",
    company: "GrowthLab Agency",
    avatar: "/images/avatar-2.png",
    source: "LinkedIn",
  },
  {
    quote:
      "We tried managing social media ourselves for 2 years with zero results. Abul's strategy gave us clarity and a clear path to growth. Best investment we made.",
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Bloom Wellness",
    avatar: "/images/avatar-3.png",
    source: "Upwork",
  },
  {
    quote:
      "Working with Abul was a game-changer for our B2B brand. His understanding of LinkedIn strategy alone generated 47 qualified leads in the first quarter.",
    name: "David Park",
    role: "VP of Marketing",
    company: "CloudSync Solutions",
    avatar: "/images/avatar-4.png",
    source: "Direct Client",
  },
  {
    quote:
      "Abul doesn't just create strategies — he creates systems. His content frameworks and analytics dashboards made our team 3x more efficient.",
    name: "Lisa Thompson",
    role: "Brand Manager",
    company: "Artisan Foods Co.",
    avatar: "/images/avatar-5.png",
    source: "Upwork",
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
    name: "A Social Media Strategist Who Actually Grows Your Business",
    description:
      "Abul Hasan is a social media strategist with 13+ years and 300+ clients served. Get a custom strategy built for measurable business growth.",
    url: "https://socialmediastrategist.net",
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
        item: "https://socialmediastrategist.net",
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
      <section id="hero" className="relative min-h-[95vh] pt-32 pb-16 md:pt-40 md:pb-24 flex items-center gradient-hero overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Text */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-secondary-light animate-pulse" />
                <span className="text-sm text-white/80 font-medium">
                  Top Rated Social Media Strategist
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-display font-bold text-white mb-6 animate-fade-in-up">
                A Social Media Strategist Who{" "}
                <span className="bg-gradient-to-r from-primary-200 via-blue-300 to-secondary-light bg-clip-text text-transparent">
                  Actually Grows
                </span>{" "}
                Your Business
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-10 animate-fade-in-up stagger-2 max-w-2xl">
                Custom social media strategies that increase brand awareness, accelerate audience growth, generate qualified leads, and drive measurable business growth. Backed by 13+ years of experience and 300+ clients served.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
                <Button href="/contact" size="lg" variant="primary">
                  Get Your Free Strategy Call
                </Button>
                <Button href="/services" size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  View Custom Packages
                </Button>
              </div>
              
              {/* Mini Social Proof */}
              <div className="mt-8 flex items-center gap-4 animate-fade-in-up stagger-4">
                <div className="flex -space-x-3">
                  <img src="/images/avatar-1.png" alt="Client" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" />
                  <img src="/images/avatar-2.png" alt="Client" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" />
                  <img src="/images/avatar-3.png" alt="Client" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" />
                  <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                    300+
                  </div>
                </div>
                <div className="text-sm text-white/60">
                  Trusted by founders and marketing teams worldwide
                </div>
              </div>
            </div>

            {/* Right Column - Image & Proof Cards */}
            <div className="lg:col-span-5 relative animate-fade-in-up stagger-2 hidden lg:block">
              <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 mx-auto bg-slate-800">
                <img 
                  src="/images/abul-hasan.jpg" 
                  alt="Abul Hasan - Social Media Strategist - Headshot" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-2xl font-bold text-white mb-1">Abul Hasan</div>
                  <div className="text-sm text-white/80 font-medium">Lead Social Media Strategist</div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -left-12 top-20 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary-light font-bold">13+</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Years Experience</div>
                    <div className="text-white/60 text-xs">Since 2012</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-8 bottom-32 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">BASIS Award</div>
                    <div className="text-white/60 text-xs">Top Individual 2021</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Trust Logo Bar */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <p className="text-center text-lg font-bold text-white/60 mb-6 tracking-widest uppercase">
              Trusted by Brands & Agencies on
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Upwork-logo.svg" alt="Upwork" className="h-9 brightness-0 invert" />
              <div className="text-xl font-bold text-white flex items-center gap-1">
                <div className="bg-white text-blue-600 rounded-sm px-1 leading-none pt-1">in</div> LinkedIn
              </div>
              <div className="text-xl font-bold text-white flex items-center gap-1">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                </svg> Meta
              </div>
              <img src="https://cdn.brandfetch.io/clutch.co/w/400/h/150/logo" alt="Clutch" className="h-6 brightness-0 invert" />
              <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok" className="h-8 brightness-0 invert" />
              <img src="/images/basis.png" alt="Basis" className="h-10 opacity-90" />
            </div>
          </div>
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
              <StatCounter end={30} suffix="+" label="Industries" />
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

      {/* ===== REAL RESULTS (CASE STUDIES) ===== */}
      <section id="case-studies" className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white/80 border border-white/20">
                Proven Results
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Numbers That Speak for Themselves</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">Real ROI from data-driven social media strategies.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Case Study 1 */}
            <ScrollReveal delay={100}>
              <div className="bg-slate-800 rounded-2xl p-8 border border-white/10 relative overflow-hidden group hover:border-primary/50 transition-colors h-full flex flex-col justify-between">
                <div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="text-sm text-secondary-light font-semibold mb-2">B2B SaaS Company</div>
                  <h3 className="text-xl font-bold mb-6">LinkedIn Lead Gen Strategy</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                      <span className="text-sm text-white/60">Qualified Leads (Q1)</span>
                      <span className="text-2xl font-bold text-emerald-400">+340%</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                      <span className="text-sm text-white/60">Cost Per Lead (CPL)</span>
                      <span className="text-2xl font-bold text-emerald-400">-42%</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                      <span className="text-sm text-white/60">Organic Impressions</span>
                      <span className="text-2xl font-bold text-white">1.2M</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-white/70 italic border-t border-white/10 pt-4 mt-auto">"Abul's LinkedIn framework turned our profile from a digital resume into our #1 lead source."</div>
              </div>
            </ScrollReveal>

            {/* Case Study 2 */}
            <ScrollReveal delay={200}>
              <div className="bg-slate-800 rounded-2xl p-8 border border-white/10 relative overflow-hidden group hover:border-primary/50 transition-colors h-full flex flex-col justify-between">
                <div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="text-sm text-secondary-light font-semibold mb-2">D2C E-commerce</div>
                  <h3 className="text-xl font-bold mb-6">Instagram Growth Strategy</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                      <span className="text-sm text-white/60">Sales from Social</span>
                      <span className="text-2xl font-bold text-emerald-400">+185%</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                      <span className="text-sm text-white/60">Engagement Rate</span>
                      <span className="text-2xl font-bold text-emerald-400">8.4%</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                      <span className="text-sm text-white/60">Follower Growth</span>
                      <span className="text-2xl font-bold text-white">24k+</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-white/70 italic border-t border-white/10 pt-4 mt-auto">"The content calendar completely changed how we sell online. We finally have a community."</div>
              </div>
            </ScrollReveal>

            {/* Case Study 3 */}
            <ScrollReveal delay={300}>
              <div className="bg-slate-800 rounded-2xl p-8 border border-white/10 relative overflow-hidden group hover:border-primary/50 transition-colors h-full flex flex-col justify-between">
                <div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="text-sm text-secondary-light font-semibold mb-2">Local Service Business</div>
                  <h3 className="text-xl font-bold mb-6">Local Awareness Campaign</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                      <span className="text-sm text-white/60">Inbound Inquiries</span>
                      <span className="text-2xl font-bold text-emerald-400">4x</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                      <span className="text-sm text-white/60">Local Reach</span>
                      <span className="text-2xl font-bold text-emerald-400">+560%</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                      <span className="text-sm text-white/60">Google Reviews (via Social)</span>
                      <span className="text-2xl font-bold text-white">+112</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-white/70 italic border-t border-white/10 pt-4 mt-auto">"We stopped paying for billboard ads. Social media is driving 90% of our new bookings now."</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* ===== AWARDS & RECOGNITION ===== */}
      <section id="awards" className="py-12 md:py-16 gradient-hero relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <ScrollReveal>
            <SectionHeading
              badge="Awards & Recognition"
              title="Recognized for Excellence"
              subtitle="Industry awards and platform recognitions that validate our commitment to delivering top-tier results."
              light={true}
              className="!mb-8 md:!mb-12"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* BASIS Award Card (70% width - spans 2 columns) */}
            <ScrollReveal direction="left" delay={100} className="md:col-span-2">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden group hover:border-primary/30 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md">
                <div className="relative w-full overflow-hidden bg-slate-100 flex-none">
                  <img 
                    src="/images/basis-award-2021.jpg" 
                    alt="Abul Hasan Receiving BASIS Outsourcing Award 2021 (District Level Top Individual)" 
                    className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col border-t border-slate-200">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">BASIS Outsourcing Award 2021</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Recognized at the district level for excellence in outsourcing and digital strategy by the Bangladesh Association of Software and Information Services (BASIS) — awarded for consistent, measurable results delivered to clients through strategic social media and digital marketing execution.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Upwork Top Rated Plus Card (30% width - spans 1 column) */}
            <ScrollReveal direction="right" delay={200} className="md:col-span-1">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden group hover:border-primary/30 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md">
                <div className="relative w-full flex-1 overflow-hidden bg-[#F2F1ED] flex items-center justify-center min-h-[200px]">
                  <img 
                    src="/images/upwork-top-rated-plus.png" 
                    alt="Abul Hasan Upwork Top Rated Plus profile, social media strategist with 99% Job Success Score" 
                    className="w-full h-full object-contain p-6 max-h-64 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex-none flex flex-col border-t border-slate-200">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Top Rated Plus on Upwork</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Ranked in the top 3% of talent on Upwork, backed by 13+ years of freelance experience and a 99% Job Success Score — earned when clients consistently rate their projects as successful. This status is awarded only to freelancers with a proven track record of high-quality delivery and strong client satisfaction.
                  </p>
                </div>
              </div>
            </ScrollReveal>
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
                <div className="aspect-square max-w-md mx-auto rounded-2xl bg-slate-800 overflow-hidden shadow-2xl shadow-primary/20 relative border-4 border-white/10">
                  <img src="/images/abul-hasan-office.jpg" alt="Abul Hasan Office Photo" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-1">Abul Hasan</h3>
                    <p className="text-white/90 font-medium">Lead Social Media Strategist</p>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -right-4 top-10 bg-white rounded-xl p-3 shadow-lg border border-slate-100 animate-float flex items-center gap-2">
                  <div className="text-lg">🏆</div>
                  <div className="text-xs font-bold text-slate-900">BASIS Award</div>
                </div>
                <div className="absolute -left-4 bottom-20 bg-white rounded-xl p-3 shadow-lg border border-slate-100 animate-float flex items-center gap-2" style={{ animationDelay: "2s" }}>
                  <div className="text-lg">⭐</div>
                  <div className="text-xs font-bold text-slate-900">Top Rated</div>
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
            <h2 className="text-h1 font-bold text-white mb-6">
              Need a Custom Social Media Strategy?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Let's build a strategy that actually works for your business.
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
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
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
