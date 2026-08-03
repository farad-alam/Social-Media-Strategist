import { Metadata } from "next";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TableOfContents from "@/components/ui/TableOfContents";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Ultimate Social Media Strategy Guide (2026): The Hasan Growth Loop™ Framework",
  description:
    "The most complete Social Media Strategy guide for 2026, built around the Hasan Growth Loop™. A 7-stage framework from 13+ years and 300+ client strategies, covering goals, audience research, platforms, content, and measurement.",
  alternates: {
    canonical: "https://socialmediastrategist.net/social-media-strategy-guide",
  },
};

export default function GuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Ultimate Social Media Strategy Guide (2026): The Hasan Growth Loop™ Framework",
    description:
      "The most complete Social Media Strategy guide for 2026, built around the Hasan Growth Loop™. A 7-stage framework from 13+ years and 300+ client strategies.",
    author: {
      "@type": "Person",
      name: "Abul Hasan",
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
    dateModified: "2026-08-03T00:00:00Z",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://socialmediastrategist.net" },
      { "@type": "ListItem", position: 2, name: "Strategy Guide", item: "https://socialmediastrategist.net/social-media-strategy-guide" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a social media strategy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A social media strategy is a documented plan defining what your business wants to achieve on social platforms, who you're trying to reach, which platforms you'll use, what you'll post, and how you'll measure success.",
        },
      },
      {
        "@type": "Question",
        name: "What does a social media strategist do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A social media strategist researches your audience and competitors, sets platform-specific goals and KPIs, builds the content pillars and calendar, oversees publishing and community management, and reports on results — then adjusts the plan based on what the data shows.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a social media strategy cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A focused audit generally starts around $1,500. For a fuller package that includes ongoing monthly consulting, expect somewhere between $3,000 and $10,000+ per month.",
        },
      },
    ],
  };

  const tocItems = [
    { id: "hasan-growth-loop", title: "The Hasan Growth Loop™ Framework" },
    { id: "what-is-social-media-strategy", title: "What Is a Social Media Strategy?" },
    { id: "why-documented-strategy-matters", title: "Why a Documented Strategy Matters" },
    { id: "step-1-audit", title: "Step 1: Audit Where You Are Now" },
    { id: "step-2-smart-goals", title: "Step 2: Set SMART Goals & KPIs" },
    { id: "step-3-audience", title: "Step 3: Research & Define Your Audience" },
    { id: "step-4-competitor", title: "Step 4: Run a Competitor Analysis" },
    { id: "step-5-platforms", title: "Step 5: Choose the Right Platforms" },
    { id: "step-6-content-pillars", title: "Step 6: Build Your Content Pillars & Mix" },
    { id: "step-7-calendar", title: "Step 7: Build a Content Calendar" },
    { id: "step-8-execution", title: "Step 8: Execute, Publishing & Community Management" },
    { id: "step-9-measure", title: "Step 9: Measure What Matters" },
    { id: "step-10-optimize", title: "Step 10: Test, Optimize, Evolve" },
    { id: "real-strategy-models", title: "Real Strategy Models Used by Top Brands" },
    { id: "common-mistakes", title: "Common Social Media Strategy Mistakes" },
    { id: "faq", title: "FAQ: Social Media Strategy" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white/80 border border-white/20">
            The Definitive Guide • 2026
          </span>
          <h1 className="text-display font-bold text-white mb-6">
            The Ultimate Social Media{" "}
            <span className="bg-gradient-to-r from-primary-200 to-secondary-light bg-clip-text text-transparent">
              Strategy Guide (2026)
            </span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-6">
            The Hasan Growth Loop™ Framework — 7 stages. 10 actionable steps. Built from 13+ years and 300+ client strategies.
          </p>

          {/* Banner image */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/d/1vecz6RxEQu1p1TVB08XF2DqF4Fxnt1sx"
              alt="The Ultimate Social Media Strategy Guide 2026 — Hasan Growth Loop™"
              className="w-full object-cover"
            />
          </div>

          <div className="flex items-center justify-center gap-4 text-white/60 text-sm mt-8">
            <div className="flex items-center gap-2">
              <img
                src="/images/abul-hasan.jpg"
                alt="Abul Hasan"
                className="w-8 h-8 rounded-full object-cover object-top border border-white/20"
              />
              <span>By Abul Hasan</span>
            </div>
            <span>•</span>
            <span>35 min read</span>
            <span>•</span>
            <span>Updated: August 2026</span>
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

              {/* Intro */}
              <p className="lead text-2xl text-slate-600 mb-10">
                Introducing the <strong>Hasan Growth Loop™</strong> — the 7-stage framework I use to build social media strategies for businesses across 10+ countries, distilled into one complete guide.
              </p>

              {/* Why Most Fail */}
              <h2 id="why-most-fail" className="scroll-mt-24">Why Most Social Media Efforts Fail</h2>
              <p>
                {"Here's an uncomfortable truth: most businesses don't have a social media strategy. They have a posting habit."}
              </p>
              <p>
                They open Instagram, Canva, or ChatGPT, throw together something that "looks about right," hit publish, and hope. When it doesn't work, they blame the algorithm. When it does work, they can't repeat it — because there was never a system behind it in the first place.
              </p>
              <p>
                {"I've seen this pattern up close for 13+ years, across 300+ client accounts in more than 10 countries, from single-founder e-commerce shops to multi-location service businesses. And almost without exception, the accounts that struggle share one thing in common: nobody ever wrote the strategy down."}
              </p>
              <p>
                As of April 2026, there are more than 5.7 billion social media user identities globally. Over two-thirds of the planet — and the "supermajority" of internet users — now log into at least one platform every month. The average person is active across roughly 6–7 different platforms and spends more than 18 hours a week on social media. That is an enormous amount of attention available to your business. But it also means an enormous amount of noise you're competing against.
              </p>
              <p>
                A documented, deliberate social media strategy is what separates brands that turn that attention into pipeline, revenue, and loyal customers from brands that turn it into a content treadmill nobody asked for.
              </p>
              <p>
                {"This guide isn't a rehash of the generic \"8 steps to social media success\" articles you've probably already read. It's built around a framework I developed and refined while building and auditing strategies for hundreds of businesses: the "}
                <strong>Hasan Growth Loop™</strong>
                {" — condensed into one practical system you can actually execute, whether you're a solo founder, a marketing manager, or an agency building strategies for clients."}
              </p>
              <p>By the end, you'll have:</p>
              <ul>
                <li>A clear definition of what a social media strategy actually is (and isn't)</li>
                <li>A repeatable process for setting goals, understanding your audience, and choosing platforms</li>
                <li>A content system that removes the "what do I post today?" panic</li>
                <li>A measurement framework tied to real business outcomes, not vanity metrics</li>
                <li>A list of the most common mistakes I see when auditing client accounts</li>
              </ul>
              <p>Let's build it, step by step.</p>

              {/* TOC block */}
              <div className="not-prose bg-slate-50 border border-slate-200 rounded-2xl p-8 my-10">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Table of Contents</h3>
                <ol className="space-y-1.5 text-sm text-primary font-medium list-decimal list-inside">
                  {[
                    ["hasan-growth-loop", "The Hasan Growth Loop™: My Framework"],
                    ["what-is-social-media-strategy", "What Is a Social Media Strategy?"],
                    ["why-documented-strategy-matters", "Why a Documented Strategy Matters"],
                    ["step-1-audit", "Step 1: Audit Where You Are Now"],
                    ["step-2-smart-goals", "Step 2: Set SMART Goals & KPIs"],
                    ["step-3-audience", "Step 3: Research & Define Your Audience"],
                    ["step-4-competitor", "Step 4: Run a Competitor Analysis"],
                    ["step-5-platforms", "Step 5: Choose the Right Platforms"],
                    ["step-6-content-pillars", "Step 6: Build Your Content Pillars & Mix"],
                    ["step-7-calendar", "Step 7: Build a Content Calendar"],
                    ["step-8-execution", "Step 8: Execute, Publishing & Community Management"],
                    ["step-9-measure", "Step 9: Measure What Matters"],
                    ["step-10-optimize", "Step 10: Test, Optimize, Evolve"],
                    ["real-strategy-models", "Real Strategy Models Used by Top Brands"],
                    ["common-mistakes", "Common Social Media Strategy Mistakes"],
                    ["faq", "FAQ: Social Media Strategy"],
                  ].map(([id, label], i) => (
                    <li key={id}>
                      <a href={`#${id}`} className="hover:underline text-primary">
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* ── HASAN GROWTH LOOP ── */}
              <h2 id="hasan-growth-loop" className="scroll-mt-24">The Hasan Growth Loop™: My Framework for Strategies That Compound</h2>
              <p>
                Every business I've worked with over the past 13 years eventually asks some version of the same question: "Okay, but what's the actual system here?"
              </p>
              <p>
                That system is what I call the <strong>Hasan Growth Loop™</strong> — seven stages that feed into each other, not a straight line that ends when you hit "publish." Most strategy guides treat measurement as the finish line. In my experience, that's exactly where most businesses quietly stall out, because they never build the loop back to the start.
              </p>

              <div className="not-prose my-8 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/d/1Lc1ZoNq7a-vjstuiC4Cf9HhYHu22pyJQ"
                  alt="The Hasan Growth Loop™ — 7-Stage Social Media Strategy Framework"
                  className="w-full object-contain"
                />
              </div>

              <ul>
                <li><strong>Research:</strong> Audit your current presence, your audience, and your competitors before you plan anything</li>
                <li><strong>Strategy:</strong> Set goals and pick the platforms that actually match your audience</li>
                <li><strong>Content:</strong> Build pillars and a calendar so content creation stops being a daily decision</li>
                <li><strong>Distribution:</strong> Publish and promote with intent, not just consistency</li>
                <li><strong>Engagement:</strong> The community management layer most brands treat as optional (it isn't)</li>
                <li><strong>Measurement:</strong> Track the KPIs tied to the goals you set in Strategy, not vanity metrics</li>
                <li><strong>Optimization:</strong> Feed what you learned back into Research, and the loop starts again</li>
              </ul>
              <p>
                Every section in this guide maps to one stage of the loop. I'll flag which stage you're in as we go, so by the end you'll not only have ten actionable steps — you'll have the underlying system that makes those steps repeatable quarter after quarter, which is the part most guides leave out entirely.
              </p>

              {/* ── WHAT IS ── */}
              <h2 id="what-is-social-media-strategy" className="scroll-mt-24">What Is a Social Media Strategy?</h2>
              <p>
                A social media strategy is a documented plan that defines what your business wants to achieve on social platforms, who you're trying to reach, which platforms you'll use, what you'll post, and how you'll know it's working.
              </p>
              <p>
                It is the bridge between where your brand is today and where you want it to be. Without one, you are executing tactics blindly — posting because "you're supposed to," not because each post is doing a specific job.
              </p>
              <p>A strategy answers five questions before you ever open a content calendar:</p>
              <ul>
                <li><strong>Why are we on social media?</strong> (Goals)</li>
                <li><strong>Who are we trying to reach?</strong> (Audience)</li>
                <li><strong>Where should we show up?</strong> (Platforms)</li>
                <li><strong>What will we say, and how often?</strong> (Content)</li>
                <li><strong>How will we know if it's working?</strong> (Measurement)</li>
              </ul>
              <p>
                If you can't answer all five in a sentence or two each, you don't have a strategy yet — you have a to-do list. In every strategy audit I've run for a new client, this is the first test I use, and more often than not, at least two of the five come back blank.
              </p>
              <div className="bg-slate-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                <p className="font-semibold m-0 text-slate-800">
                  Key takeaway: A social media strategy turns random acts of content into a predictable system for growth.
                </p>
              </div>

              {/* ── WHY DOCUMENTED ── */}
              <h2 id="why-documented-strategy-matters" className="scroll-mt-24">Why a Documented Strategy Matters</h2>
              <p>{"It's tempting to skip straight to creating Reels and TikToks. Here's why that shortcut costs more than it saves:"}</p>
              <ul>
                <li><strong>Wasted resources.</strong> Every piece of content costs time, money, or both. Without a strategy, that budget gets spent on whatever feels urgent instead of what actually moves the needle.</li>
                <li><strong>Inconsistent brand voice.</strong> Without documented guidelines, your brand can sound like three different companies depending on who's posting that week — which quietly erodes trust.</li>
                <li><strong>No way to prove impact.</strong> If you never defined success, you can't measure it. This is the single biggest reason marketing teams struggle to justify social media budgets to leadership.</li>
                <li><strong>Missed competitive openings.</strong> A strategy forces you to look at what competitors are (and aren't) doing, and gaps are opportunities.</li>
                <li><strong>Reactive, not proactive, decision-making.</strong> Without a plan, every algorithm update or platform trend causes a scramble. With one, you have a filter for deciding what's worth chasing and what isn't.</li>
              </ul>
              <p>
                One mistake I see repeatedly when auditing client accounts: the business has a beautiful brand guideline PDF for their website and print materials, but nothing equivalent for social. So the "brand voice" on Instagram ends up being whoever happens to be posting that day.
              </p>
              <p>
                {"A strategy doesn't need to be a 40-page document. For most small and mid-sized businesses, a tight 3–5 page plan covering the ten steps below is enough to align a whole team and give every post a purpose. That's the same length I use for most client strategy documents — long enough to be useful, short enough that people actually reference it."}
              </p>

              {/* ── STEP 1 ── */}
              <h2 id="step-1-audit" className="scroll-mt-24">
                <span className="text-primary text-base font-semibold block mb-1">Loop Stage: Research</span>
                Step 1: Audit Where You Are Now
              </h2>
              <p>
                {"You can't plan a route without knowing your starting point. Before setting a single goal, take an honest inventory of your current social presence."}
              </p>
              <p>Ask yourself:</p>
              <ul>
                <li>Which platforms do we currently have a presence on?</li>
                <li>How many followers do we have on each, and how has that grown (or stalled) over the last 6–12 months?</li>
                <li>{"What's our engagement rate per platform? (Total engagements ÷ total followers or reach)"}</li>
                <li>How consistently have we been posting — daily, weekly, sporadically?</li>
                <li>Which specific posts or formats have performed best, and why?</li>
                <li>How much real business (leads, bookings, sales) has social media generated so far?</li>
                <li>Are there impostor or abandoned accounts using your business name that need to be reported or reclaimed?</li>
              </ul>
              <p>
                Document the answers in a simple spreadsheet: one row per platform, columns for followers, average engagement rate, posting frequency, and top-performing content type. This single document becomes your baseline — the number everything else in your strategy will be measured against.
              </p>
              <p>
                In my own audits, I&apos;d estimate roughly seven out of ten businesses have never actually pulled this data into one place before. They&apos;re going on gut feeling about what&apos;s &quot;working,&quot; which is usually the last post they happened to notice getting a few extra comments.
              </p>

              <div className="not-prose my-8 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/d/15qKvMooU4f_SIsc7wilhClVXN_jQo7pL"
                  alt="Social media audit table — baseline tracking template"
                  className="w-full object-contain"
                />
              </div>

              {/* ── STEP 2 ── */}
              <h2 id="step-2-smart-goals" className="scroll-mt-24">
                <span className="text-primary text-base font-semibold block mb-1">Loop Stage: Strategy</span>
                Step 2: Set SMART Goals & KPIs
              </h2>
              <p>
                Every strategy needs a &quot;why.&quot; Vague goals like &quot;grow our social media&quot; or &quot;post more&quot; don&apos;t give you anything to measure or optimize against. Instead, use the SMART framework:
              </p>
              <ul>
                <li><strong>Specific</strong> — exactly what are you trying to achieve?</li>
                <li><strong>Measurable</strong> — what number proves it?</li>
                <li><strong>Attainable</strong> — realistic given your resources?</li>
                <li><strong>Relevant</strong> — tied to an actual business objective?</li>
                <li><strong>Time-bound</strong> — by when?</li>
              </ul>
              <div className="bg-slate-50 border-l-4 border-secondary p-6 my-6 rounded-r-lg">
                <p className="m-0 text-slate-700 text-base">
                  <span className="block text-sm font-bold text-slate-400 uppercase mb-1">Weak Goal</span>
                  "Grow our Instagram."
                </p>
                <p className="m-0 text-slate-700 text-base mt-3">
                  <span className="block text-sm font-bold text-secondary uppercase mb-1">SMART Goal</span>
                  "Grow Instagram followers by 20% and generate 40 qualified leads through Instagram in the next 90 days."
                </p>
              </div>
              <h3>Match goals to the funnel</h3>
              <div className="not-prose overflow-x-auto my-8">
                <table className="min-w-full text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100 text-slate-700 uppercase text-xs">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Funnel Stage</th>
                      <th className="px-4 py-3 font-semibold">Business Goal</th>
                      <th className="px-4 py-3 font-semibold">Social Media Objective</th>
                      <th className="px-4 py-3 font-semibold">Primary KPIs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["Top of Funnel", "Grow the brand", "Brand Awareness", "Reach, impressions, follower growth rate, share of voice"],
                      ["Middle of Funnel", "Build trust & interest", "Engagement & Consideration", "Engagement rate, saves, shares, comments, click-through rate"],
                      ["Bottom of Funnel", "Drive revenue", "Conversions", "Leads, sign-ups, purchases, cost per conversion"],
                      ["Post-Purchase", "Retain & grow advocates", "Loyalty & Community", "Repeat engagement, UGC volume, response rate, CSAT"],
                    ].map(([stage, goal, obj, kpis]) => (
                      <tr key={stage} className="bg-white hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-slate-900">{stage}</td>
                        <td className="px-4 py-3 text-slate-600">{goal}</td>
                        <td className="px-4 py-3 text-slate-600">{obj}</td>
                        <td className="px-4 py-3 text-slate-500 text-xs">{kpis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Don&apos;t try to chase every goal on every platform at once. Pick 1&ndash;3 core goals for the next quarter. You can layer in more once the fundamentals are working. In my experience building strategies across dozens of industries, the accounts that try to optimize for awareness, engagement, and conversions simultaneously &mdash; on every platform &mdash; are almost always the ones that end up moving none of those numbers.
              </p>

              {/* ── STEP 3 ── */}
              <h2 id="step-3-audience" className="scroll-mt-24">
                <span className="text-primary text-base font-semibold block mb-1">Loop Stage: Research</span>
                Step 3: Research & Define Your Audience
              </h2>
              <p>
                You cannot create content that connects if you don't know exactly who you're creating it for. This is, without exaggeration, the single highest-leverage step in the entire process — and the one most businesses skip.
              </p>
              <h3>Go beyond demographics</h3>
              <p>
                Basic demographics (age, gender, location, income) are a starting point, not a strategy. The content that actually converts comes from understanding psychographics:
              </p>
              <ul>
                <li>What problem keeps them up at night?</li>
                <li>{"What have they already tried that didn't work?"}</li>
                <li>What objections do they have before buying?</li>
                <li>What emotional outcome are they really chasing (status, relief, belonging, control)?</li>
                <li>How do they talk about this problem in their own words?</li>
              </ul>
              <h3>Where to find this information</h3>
              <ul>
                <li><strong>Mine your existing customer data.</strong> Who are your best, highest-value customers right now? What do they have in common?</li>
                <li><strong>Use native platform analytics.</strong> Instagram Insights, LinkedIn Analytics, and Meta Business Suite show you who is already following and engaging with you: age, location, active hours, and device.</li>
                <li><strong>Social listening.</strong> Monitor conversations, hashtags, and comments around your industry to see how people describe their problems unprompted.</li>
                <li><strong>Ask directly.</strong> A short survey to your email list or existing customers ("What's your biggest challenge with X?") consistently outperforms guesswork.</li>
                <li><strong>Check the comments section of competitors.</strong> This is one of the most underused sources of raw audience insight available — free and unfiltered.</li>
              </ul>
              <h3>Build 2–3 audience personas</h3>
              <p>
                Turn your research into semi-fictional profiles your whole team can reference. For example:
              </p>
              <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 my-6 italic text-slate-700">
                "Marketing Manager Maria, 34, based in a mid-sized city. She follows industry leaders on LinkedIn before 9 am, is skeptical of anything that sounds like a sales pitch, and wants proof — case studies, and numbers — before she'll book a call."
              </div>
              <p>
                Two or three personas like this, built from real research rather than assumptions, will do more to sharpen your content than any posting hack.
              </p>

              <div className="not-prose my-8 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/d/13xi9lma9Cln-wB9GA2uBouV3zEvSgOL_"
                  alt="Audience persona cards example"
                  className="w-full object-contain"
                />
              </div>

              {/* ── STEP 4 ── */}
              <h2 id="step-4-competitor" className="scroll-mt-24">
                <span className="text-primary text-base font-semibold block mb-1">Loop Stage: Research</span>
                Step 4: Run a Competitor Analysis
              </h2>
              <p>
                Your competitors are already running a live experiment on your shared audience. Use it.
              </p>
              <h3>Pick 3–5 competitors to track</h3>
              <p>
                Mix direct competitors (same product, same audience), indirect competitors (different product, same problem solved), and one or two "aspirational" brands — bigger players whose social presence you admire, even outside your exact category. For each, document:
              </p>
              <ul>
                <li>Which platforms are they active on and which are they clearly neglecting?</li>
                <li>How often do they post, and in what formats (video, carousel, static image, text)?</li>
                <li>{"What's their engagement rate, and which specific posts overperform?"}</li>
                <li>What tone of voice do they use: corporate, playful, educational, edgy?</li>
                <li>How do they handle comments and community management?</li>
                <li>What are they not doing that your audience might want?</li>
              </ul>
              <p>
                That last question is the one that matters most. A competitive analysis isn't about copying what's already working for someone else — it's about finding the gap they've left open. If every competitor in your space posts polished, corporate content, a more human, behind-the-scenes voice can be a genuine differentiator. If nobody in your niche is active on LinkedIn or YouTube, that "boring" platform might be your fastest path to an underserved audience.
              </p>
              <p>
                Repeat this analysis every quarter, since competitor strategies shift, and so should your read on the landscape. When I run this exercise for a new client, I usually find at least one platform every competitor is neglecting — that gap is often the fastest, cheapest win in the entire strategy.
              </p>

              {/* ── STEP 5 ── */}
              <h2 id="step-5-platforms" className="scroll-mt-24">
                <span className="text-primary text-base font-semibold block mb-1">Loop Stage: Strategy</span>
                Step 5: Choose the Right Platforms
              </h2>
              <p>
                The most common strategic mistake in social media is trying to be excellent everywhere at once. It is far better to dominate two platforms than to post mediocre, inconsistent content across six. After helping more than 300 businesses over 13 years narrow their platform mix, I can tell you the biggest lift rarely comes from adding a fourth or fifth platform. It comes from cutting one and reinvesting that time into the two that were already working.
              </p>
              <p>
                Choose platforms based on where your audience (from Step 3) already spends time, not on which platform is trendiest this month.
              </p>
              <h3>Platform breakdown for 2026</h3>
              <div className="not-prose overflow-x-auto my-8">
                <table className="min-w-full text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100 text-slate-700 uppercase text-xs">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Platform</th>
                      <th className="px-4 py-3 font-semibold">Best For</th>
                      <th className="px-4 py-3 font-semibold">Content That Performs</th>
                      <th className="px-4 py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["Facebook", "Community building, broad-reach paid ads, older demographics", "Video, groups, events, customer reviews", "Still the largest platform globally by MAU; strong for local business"],
                      ["Instagram", "Visual storytelling, lifestyle & e-commerce brands", "Reels, carousels, Stories, UGC", "Strong shopping and discovery features; one of fastest-growing major platforms"],
                      ["LinkedIn", "B2B, thought leadership, recruiting, professional services", "Native documents/carousels, personal posts, case studies", "Best ROI for B2B lead generation and building authority"],
                      ["TikTok", "Younger audiences, discovery, trend-driven brand personality", "Short-form video, authentic/behind-the-scenes content", "Fastest-growing platform for engagement, particularly Gen Z"],
                      ["X (Twitter)", "Real-time updates, customer service, industry commentary", "Threads, quick takes, news reactions", "Best for brands with an agile team that can respond in real time"],
                      ["YouTube (incl. Shorts)", "Long-form education, tutorials, SEO-driven discovery", "Explainers, tutorials, product deep-dives, Shorts", "Second-largest search engine; strong long-term compounding value"],
                      ["Pinterest", "Product discovery, planning-stage shoppers", "Vertical pins, infographics, how-tos", "Users arrive in a shopping/planning mindset — high commercial intent"],
                    ].map(([platform, bestFor, content, notes]) => (
                      <tr key={platform} className="bg-white hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-bold text-slate-900">{platform}</td>
                        <td className="px-4 py-3 text-slate-600">{bestFor}</td>
                        <td className="px-4 py-3 text-slate-600">{content}</td>
                        <td className="px-4 py-3 text-slate-500 text-xs">{notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3>Give each platform a mission statement</h3>
              <p>For every platform you decide to use, write a single sentence defining its job. For example:</p>
              <ul>
                <li><em>"Instagram is where we build brand affinity with existing and prospective customers through visual proof of results."</em></li>
                <li><em>"LinkedIn is where we build authority and generate B2B leads through founder-led thought leadership."</em></li>
                <li><em>"TikTok is where we build top-of-funnel awareness with short, authentic behind-the-scenes content."</em></li>
              </ul>
              <p>
                If you can&apos;t write a clear mission statement for a platform, that&apos;s a sign you may not need to be there yet. Start with 1&ndash;3 platforms. Prove the model works, build the muscle of consistent posting and engagement, then expand.
              </p>

              <div className="not-prose my-8 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/d/1KEuq0rxh8n3ldxH561e0C6MAUcpINSTb"
                  alt="Platform comparison chart 2026"
                  className="w-full object-contain"
                />
              </div>

              {/* ── STEP 6 ── */}
              <h2 id="step-6-content-pillars" className="scroll-mt-24">
                <span className="text-primary text-base font-semibold block mb-1">Loop Stage: Content</span>
                Step 6: Build Your Content Pillars & Mix
              </h2>
              <p>
                Content is the vehicle that delivers your strategy to your audience. Without structure, content creation turns into daily decision fatigue — the constant "what do I even post today?" Content pillars solve that.
              </p>
              <h3>What are content pillars?</h3>
              <p>
                Content pillars are 3–5 recurring themes your brand will consistently create content around. They should reflect both what your audience cares about and what your brand is credibly positioned to talk about.
              </p>
              <p>
                One mistake I see repeatedly when auditing client accounts: a business picks five pillars, gets excited, and then only ever posts the "promotional" one because it's the easiest to produce on a busy week. Pillars only work if you actually plan against all of them — which is exactly what Step 7's calendar is for.
              </p>
              <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
                <p className="text-sm font-bold text-slate-500 uppercase mb-3">Example Content Pillars (Marketing Agency)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    ["📚", "Educational", "How-tos, quick tips, myths debunked"],
                    ["📊", "Proof", "Case studies, results, testimonials"],
                    ["🎬", "Behind-the-scenes", "Process, team, culture"],
                    ["💡", "Thought leadership", "Opinions, trend commentary, original takes"],
                    ["📣", "Promotional", "Offers, launches, calls to action"],
                  ].map(([emoji, title, desc]) => (
                    <div key={title} className="flex items-start gap-3 bg-white border border-slate-100 rounded-lg p-4">
                      <span className="text-2xl">{emoji}</span>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{title}</p>
                        <p className="text-slate-500 text-xs">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h3>Balance your content mix</h3>
              <p>Use a simple ratio so your feed doesn't feel like a constant sales pitch. Two proven starting frameworks:</p>
              <ul>
                <li><strong>The 80/20 rule:</strong> 80% of content informs, educates, or entertains; 20% directly promotes your brand or offer.</li>
                <li><strong>The rule of thirds:</strong> One-third promotes your business, one-third shares ideas from others in your industry, one-third is genuine, personal interaction with your audience.</li>
              </ul>
              <p>
                Either works. What matters is that you decide on a ratio before you start creating, so promotional content doesn't quietly creep up to 80% of your feed — which is the single fastest way to tank engagement and trigger unfollows.
              </p>

              <div className="not-prose my-8 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/d/1ZiivgAlFjlYCzjMVQm25isD_b39QdK-P"
                  alt="Content pillar wheel diagram"
                  className="w-full object-contain"
                />
              </div>

              {/* ── STEP 7 ── */}
              <h2 id="step-7-calendar" className="scroll-mt-24">
                <span className="text-primary text-base font-semibold block mb-1">Loop Stage: Content</span>
                Step 7: Build a Content Calendar
              </h2>
              <p>
                A strategy that only lives in your head (or a group chat) will not survive a busy week. A content calendar is where the plan becomes executable.
              </p>
              <h3>What to include</h3>
              <ul>
                <li>Date and time of each post</li>
                <li>Platform</li>
                <li>Content pillar it maps to</li>
                <li>Format (Reel, carousel, static image, article, etc.)</li>
                <li>Caption/copy draft</li>
                <li>Visual asset status (not started / in design / ready)</li>
                <li>Call to action</li>
              </ul>
              <h3>Realistic posting frequency benchmarks (2026)</h3>
              <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {[
                    ["Instagram", "3–5 feed posts/week + Stories & Reels"],
                    ["LinkedIn", "2–4 posts/week"],
                    ["Facebook", "3–5 posts/week"],
                    ["TikTok", "3–5 posts/week"],
                    ["X (Twitter)", "1–3 posts/day"],
                    ["Pinterest", "5+ pins/week"],
                    ["YouTube", "1 long-form/week or biweekly + Shorts"],
                  ].map(([platform, freq]) => (
                    <div key={platform} className="flex items-center justify-between bg-white border border-slate-100 rounded-lg px-4 py-3">
                      <span className="font-semibold text-slate-900">{platform}</span>
                      <span className="text-slate-500 text-xs">{freq}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p>
                <strong>Plan proactive and reactive content.</strong> Aim for roughly 80% planned, evergreen content and 20% reactive content — trending audio, timely news, a competitor moment worth commenting on. Planning too rigidly leaves no room to capitalize on a moment; planning too loosely means you're always scrambling.
              </p>
              <p>
                Spreadsheets work fine to start. As you scale, tools like Buffer, Hootsuite, Later, Sprout Social, or Meta Business Suite add scheduling, approval workflows, and built-in analytics. In my own agency work, I still start every new client on a plain spreadsheet for the first month — it forces the team to think through the pillars and cadence before paying for software to automate a system that doesn't exist yet.
              </p>

              <div className="not-prose my-8 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/d/1Of8zWfdwTs8nY9b-MLNSahBCCQMYcslB"
                  alt="Content calendar template example"
                  className="w-full object-contain"
                />
              </div>

              {/* ── STEP 8 ── */}
              <h2 id="step-8-execution" className="scroll-mt-24">
                <span className="text-primary text-base font-semibold block mb-1">Loop Stages: Distribution & Engagement</span>
                Step 8: Execute, Publishing & Community Management
              </h2>
              <p>
                A strategy is worthless sitting in a document. Execution is where most of the real work — and most of the differentiation — actually happens.
              </p>
              <h3>Publishing best practices</h3>
              <ul>
                <li><strong>Optimize every profile first.</strong> Complete bios, keyword-rich descriptions, consistent handles and profile photos, and a clear link in bio before you invest heavily in new content.</li>
                <li><strong>Lead with visuals.</strong> Every platform's algorithm favors content that keeps people watching or looking longer, and strong visuals and short-form video consistently outperform text-only posts.</li>
                <li><strong>Give every post a purpose.</strong> Before publishing, ask: which content pillar is this? What's the one action I want someone to take after seeing it?</li>
                <li><strong>Post consistently, not constantly.</strong> A steady, sustainable rhythm beats a burst of daily posts followed by a two-week silence.</li>
              </ul>
              <h3>Community management is not optional</h3>
              <p>
                This is the step brands skip most often and the one that quietly determines whether social media builds loyalty or just reach. Across 300+ client accounts, the single fastest lever I've found for turning followers into actual paying customers isn't a content trick. It's simply replying faster and more personally than the business was before.
              </p>
              <ul>
                <li>Respond to comments and DMs — ideally within a few hours, not days.</li>
                <li>Acknowledge negative feedback publicly and professionally, then move detailed resolution to DMs or email.</li>
                <li>Engage with your audience's content, not just your own. Commenting thoughtfully on relevant accounts builds visibility that posting alone cannot.</li>
                <li>Monitor branded and industry hashtags to catch mentions, complaints, and opportunities you'd otherwise miss.</li>
              </ul>
              <div className="bg-slate-50 border-l-4 border-secondary p-6 my-8 rounded-r-lg">
                <p className="font-semibold m-0 text-slate-800">
                  Fast, human responses are one of the most reliable ways to turn a casual follower into an actual customer — and they cost nothing but attention.
                </p>
              </div>

              {/* ── STEP 9 ── */}
              <h2 id="step-9-measure" className="scroll-mt-24">
                <span className="text-primary text-base font-semibold block mb-1">Loop Stage: Measurement</span>
                Step 9: Measure What Matters
              </h2>
              <p>
                Remember the KPIs you set back in Step 2? This is where you check them — honestly, and on a set schedule.
              </p>
              <h3>Set a reporting rhythm</h3>
              <ul>
                <li><strong>Weekly:</strong> Quick glance at posting consistency and any content that's clearly over- or under-performing</li>
                <li><strong>Monthly:</strong> Full review against your KPIs, platform by platform</li>
                <li><strong>Quarterly:</strong> Step back and re-evaluate whether your goals, platforms, and content pillars still make sense</li>
              </ul>
              <h3>KPIs by objective</h3>
              <div className="not-prose overflow-x-auto my-8">
                <table className="min-w-full text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100 text-slate-700 uppercase text-xs">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Objective</th>
                      <th className="px-4 py-3 font-semibold">Track These</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["Brand Awareness", "Reach, impressions, follower growth rate, share of voice/mentions"],
                      ["Engagement", "Engagement rate (engagements ÷ reach or followers), saves, shares, comments"],
                      ["Traffic", "Click-through rate, website sessions from social (use UTM parameters)"],
                      ["Conversions", "Leads, sign-ups, purchases, cost per lead, cost per conversion"],
                      ["Customer Service", "Response rate, average response time, resolution rate, CSAT"],
                    ].map(([obj, kpis]) => (
                      <tr key={obj} className="bg-white hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-slate-900">{obj}</td>
                        <td className="px-4 py-3 text-slate-600">{kpis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Avoid the vanity metric trap. Likes and follower counts feel good to report, but they rarely prove business value on their own. Always connect metrics back to the specific goal each platform or campaign was meant to serve — that's what turns a report into a decision-making tool instead of a scoreboard.
              </p>
              <p>
                In my experience sitting across the table from business owners during monthly reviews, the conversation only gets easier once we stop leading with follower growth and start leading with leads and revenue — since that's the number that actually keeps a strategy funded.
              </p>
              <p>
                Use UTM parameters on every link you share so Google Analytics (or your analytics platform of choice) can attribute traffic and conversions back to the exact post and platform that drove them.
              </p>

              <div className="not-prose my-8 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/d/18ObQi0Y_rHRiL1oIlZpPv1We0AADT1yJ"
                  alt="KPI dashboard example for social media measurement"
                  className="w-full object-contain"
                />
              </div>

              {/* ── STEP 10 ── */}
              <h2 id="step-10-optimize" className="scroll-mt-24">
                <span className="text-primary text-base font-semibold block mb-1">Loop Stage: Optimization</span>
                Step 10: Test, Optimize, Evolve
              </h2>
              <p>
                Your first version of a social media strategy will not be your best version — and that's expected, not a failure. I've never once handed a client a strategy in month one that didn't get revised by month three, and that's by design, not a shortcoming.
              </p>
              <h3>Run structured tests</h3>
              <p>Change one variable at a time so you can actually tell what moved the needle:</p>
              <ul>
                <li>Post format (video vs. static image vs. carousel)</li>
                <li>Caption length and style (short and punchy vs. story-driven)</li>
                <li>Posting time and day</li>
                <li>Call-to-action wording (soft vs. direct)</li>
                <li>Thumbnail or opening frame (for video content)</li>
              </ul>
              <h3>Conduct a full strategy audit every 6–12 months</h3>
              <p>Beyond monthly reporting, step back periodically and ask the bigger questions:</p>
              <ul>
                <li>Are our goals still aligned with current business priorities?</li>
                <li>Does our platform mix still make sense given where our audience actually is now?</li>
                <li>Do our content pillars still reflect what our audience cares about?</li>
                <li>Has a competitor found an angle we should learn from or differentiate harder against?</li>
              </ul>
              <p>
                Social platforms, algorithms, and audience behavior all shift constantly. Treat your strategy as a living document you revisit on a schedule, not a one-time deliverable you file away and forget.
              </p>
              <div className="bg-primary-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                <p className="font-semibold m-0 text-slate-800">
                  This is also the point where the Hasan Growth Loop™ closes — everything you learn in Optimization feeds straight back into Research, and the cycle starts again, sharper each time.
                </p>
              </div>

              {/* Inline CTA */}
              <div className="not-prose my-12 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl border border-primary-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Want this built for your brand?</h3>
                  <p className="text-slate-500 mt-1">Get a custom strategy built around the Hasan Growth Loop™ — done for you.</p>
                </div>
                <Button href="/contact" variant="primary" className="flex-shrink-0">
                  Book a Free Strategy Call
                </Button>
              </div>

              {/* ── REAL STRATEGY MODELS ── */}
              <h2 id="real-strategy-models" className="scroll-mt-24">Real Strategy Models Used by Top Brands</h2>
              <p>
                Beyond the ten-step framework above, it helps to recognize a few broad "strategy models" that well-known brands lean on. You don't need to copy any of these outright, but understanding the pattern helps you borrow the right elements for your own plan. In my experience building strategies across industries from real estate to SaaS to medspas, most successful accounts end up blending two or three of these rather than picking just one.
              </p>
              <ul>
                <li><strong>User-generated content (UGC) strategy:</strong> Encouraging customers to create and share content featuring your brand — a branded hashtag, a repost policy, a small incentive — builds authentic social proof that outperforms polished brand advertising, especially for lifestyle, travel, and e-commerce brands.</li>
                <li><strong>Influencer/creator partnerships:</strong> Working with creators whose audience already trusts them, especially smaller "micro" creators with highly engaged niche audiences, can generate outsized awareness relative to cost.</li>
                <li><strong>Community-first strategy:</strong> Brands that prioritize two-way conversation over broadcasting — replying constantly, developing a distinct voice, and rewarding loyal followers — build long-term retention that pure content output never will.</li>
                <li><strong>Real-time/newsjacking strategy:</strong> Reacting quickly and cleverly to trending moments can generate outsized visibility, but requires a fast approval process and strong judgment about which moments are actually safe to engage with.</li>
                <li><strong>Social commerce strategy:</strong> Tagging products directly in posts and Stories shortens the path from discovery to purchase and works especially well for visually-driven e-commerce brands.</li>
                <li><strong>Employee advocacy strategy:</strong> Equipping team members (especially founders and leadership) to share expertise and company updates on their personal profiles extends organic reach further than a single branded account ever could, and performs especially well on LinkedIn.</li>
                <li><strong>Data-driven strategy:</strong> Letting analytics — not gut feeling — guide content decisions, from what topics to cover to what times to post, is the common thread behind almost every scaled, sustainable social media program.</li>
              </ul>
              <p>
                The strongest strategies rarely pick just one of these. A B2B company might combine employee advocacy on LinkedIn with a data-driven testing process; a DTC brand might combine UGC with social commerce. Use the ten-step framework to build your foundation, then layer in whichever of these models fits your business model and resources.
              </p>

              {/* ── COMMON MISTAKES ── */}
              <h2 id="common-mistakes" className="scroll-mt-24">Common Social Media Strategy Mistakes</h2>
              <p>
                Even with a plan in place, these are the pitfalls that quietly derail results. This list comes directly from patterns I've flagged over and over again while auditing client accounts — not theory:
              </p>
              <ol>
                <li><strong>Being everywhere instead of somewhere.</strong> Spreading thin across six platforms produces worse results than doing two platforms well.</li>
                <li><strong>Chasing vanity metrics.</strong> Followers and likes feel good but rarely predict revenue on their own.</li>
                <li><strong>Posting without a strategy behind it.</strong> Random posting, even done consistently, doesn't compound the way strategic, pillar-based content does.</li>
                <li><strong>Ignoring comments and DMs.</strong> Silence reads as indifference, and it's one of the fastest ways to lose trust you've already earned.</li>
                <li><strong>Being too promotional, too often.</strong> If every post is a sales pitch, your audience will tune out or unfollow.</li>
                <li><strong>Never revisiting the strategy.</strong> Treating the strategy as a one-time document instead of a living plan means you keep executing against outdated assumptions.</li>
                <li><strong>Copying competitors instead of learning from them.</strong> Competitive analysis should reveal gaps to fill, not a template to clone.</li>
                <li><strong>Skipping audience research.</strong> Guessing who you're talking to — instead of researching it — is the root cause of most underperforming content.</li>
                <li><strong>Inconsistent brand voice across platforms or team members.</strong> Without documented voice guidelines, your brand can sound like a different company depending on who's posting.</li>
                <li><strong>Failing to adapt to platform and algorithm changes.</strong> A strategy that assumes today's rules will hold forever will eventually fall behind.</li>
              </ol>

              {/* ── FAQ ── */}
              <h2 id="faq" className="scroll-mt-24">FAQ: Social Media Strategy</h2>

              <h3>What is a social media strategy?</h3>
              <p>
                A social media strategy is a documented plan defining what your business wants to achieve on social platforms, who you're trying to reach, which platforms you'll use, what you'll post, and how you'll measure success. See the full definition above for the five-question test I use in every client audit.
              </p>

              <h3>What does a social media strategist do?</h3>
              <p>
                A social media strategist researches your audience and competitors, sets platform-specific goals and KPIs, builds the content pillars and calendar, oversees publishing and community management, and reports on results — then adjusts the plan based on what the data shows. In practice, it's the person (or agency) running the entire Hasan Growth Loop™ on your behalf, month after month, rather than just designing posts.
              </p>

              <h3>Should you hire a social media strategist?</h3>
              <p>
                If social media is meant to drive real business outcomes — leads, bookings, revenue — rather than just "having a presence," a strategist earns their cost back by avoiding the wasted spend and inconsistent execution that come from a part-time, ad-hoc approach. If you're a very early-stage business testing whether social is even the right channel for you, running the framework yourself first is a reasonable way to find out before you invest in outside help.
              </p>

              <h3>When should you build your own strategy vs. hire a strategist?</h3>
              <p><strong>Build it yourself if:</strong></p>
              <ul>
                <li>You have a few focused hours a week to dedicate</li>
                <li>Your goals are still exploratory</li>
                <li>You&apos;re comfortable learning by testing</li>
              </ul>
              <p><strong>Hire a strategist when:</strong></p>
              <ul>
                <li>Social media is expected to hit specific revenue or lead targets</li>
                <li>You&apos;re managing more than 2&ndash;3 platforms</li>
                <li>Your team&apos;s time is better spent elsewhere in the business</li>
              </ul>
              <p>
                Many of my clients start by building a first version themselves using a framework like this one. Then they bring in outside help once they know social is worth scaling.
              </p>

              <h3>How long does it take to build a social media strategy?</h3>
              <p>
                A comprehensive social media strategy typically takes 2–4 weeks to develop. This includes the discovery phase (3–5 days), audience and competitor research (5–7 days), strategy development (5–7 days), and content planning (3–5 days). Rush delivery is available for time-sensitive projects, but thorough research produces better results.
              </p>

              <h3>Who needs a social media strategy?</h3>
              <p>
                Any business, creator, or organization that wants social media to produce a measurable result — not just a presence. That includes small local businesses, e-commerce brands, B2B companies, personal brands, nonprofits, and enterprise marketing teams alike; the framework scales, even if the depth of research and content volume differs.
              </p>

              <h3>How much does a social media strategy cost?</h3>
              <p>
                Pricing depends largely on how much ground the strategy needs to cover. A focused audit — just the strategy itself — generally starts around $1,500. For a fuller package that includes ongoing monthly consulting, expect somewhere between $3,000 and $10,000+ per month. Where you land in that range comes down to your business size, how many platforms you're on, how much content you need, and whether you want execution handled alongside the strategy.
              </p>

              <h3>Can AI create a social media strategy?</h3>
              <p>
                AI can help speed up certain parts of the process — drafting content ideas, summarizing posts, and outlining a calendar structure — but it can't replace the core of what makes a strategy actually work. AI doesn't make judgment calls, and strategy is built on decisions: which platforms deserve real investment, which competitors are genuinely relevant versus just noisy, and what makes your brand's approach different from everyone else's. A strategy that's just AI-generated often ends up generic, since it's pulling from patterns rather than understanding your specific business and audience. A specialist brings context AI doesn't have: industry nuance, platform-specific judgment, and the ability to read what's actually working versus what looks good on paper.
              </p>

              <h3>What&apos;s the difference between a marketing strategy and a social media strategy?</h3>
              <p>
                A marketing strategy is the overarching plan for how a business attracts and retains customers across every channel: email, paid ads, SEO, events, social, and more. A social media strategy is one component nested inside it, focused specifically on social platforms. A good social media strategy is always built to support the broader marketing strategy's goals, not run as a separate, disconnected effort.
              </p>

              <h3>How long should a social media strategy document be?</h3>
              <p>
                Long enough to cover goals, audience, platforms, content pillars, and measurement clearly — for most small and mid-sized businesses, that's 3–8 pages. Length isn't the goal; clarity and actionability are.
              </p>

              <h3>How often should I update my social media strategy?</h3>
              <p>
                Review performance monthly, and conduct a full strategic audit every 6–12 months, or any time your business goals, audience, or core offer changes significantly.
              </p>

              <h3>How many social media platforms should a small business be on?</h3>
              <p>
                Start with 2–3 platforms where your specific audience is most active, rather than spreading thin across every major network.
              </p>

              <h3>What&apos;s the difference between a social media strategy and a content calendar?</h3>
              <p>
                The strategy defines the why, who, where, and how success will be measured. The content calendar is the tactical execution tool — the specific posts, dates, and formats that bring the strategy to life.
              </p>

              <h3>What is the most important KPI for social media?</h3>
              <p>
                There isn&apos;t one universal answer. The right KPI depends entirely on the goal behind each platform or campaign. Brand awareness campaigns should track reach and impressions; conversion-focused campaigns should track leads, sign-ups, or revenue.
              </p>

              <h3>Do I need a different strategy for every platform?</h3>
              <p>
                You need one overarching strategy with a platform-specific mission statement and content adaptation for each channel — not a completely separate strategy per platform.
              </p>

              <hr className="my-12" />

              {/* Bottom CTA */}
              <div className="not-prose bg-primary text-white rounded-2xl p-10 text-center">
                <h2 className="text-3xl font-bold text-white mt-0 mb-4">Need a strategy built specifically for your brand?</h2>
                <p className="text-primary-100 mb-8 max-w-xl mx-auto">
                  While this guide gives you the Hasan Growth Loop™ framework, nothing beats a custom strategy built by an expert who has done it 300+ times across 10+ countries.
                </p>
                <Button href="/contact" variant="secondary" size="lg">
                  Book Your Free Strategy Call
                </Button>
              </div>

            </article>
          </div>
        </div>
      </section>
    </>
  );
}
