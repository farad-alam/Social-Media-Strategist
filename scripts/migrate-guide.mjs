import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Sanity Client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id', // ensure this is set
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

function createBlock(style, text, marks = []) {
  return {
    _type: 'block',
    style,
    children: [
      {
        _type: 'span',
        text,
        marks,
      },
    ],
  };
}

function createListBlock(style, listItem, text, marks = []) {
  return {
    _type: 'block',
    style,
    listItem,
    level: 1,
    children: [
      {
        _type: 'span',
        text,
        marks,
      },
    ],
  };
}

async function uploadImage(filePath) {
  try {
    const fullPath = path.resolve(__dirname, '..', filePath);
    if (fs.existsSync(fullPath)) {
      console.log(`Uploading ${filePath}...`);
      const asset = await client.assets.upload('image', fs.createReadStream(fullPath), {
        filename: path.basename(filePath),
      });
      console.log(`Uploaded ${filePath} -> ${asset._id}`);
      return {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id,
        },
      };
    }
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error.message);
  }
  return null;
}

async function migrate() {
  console.log('Starting migration...');

  if (!process.env.SANITY_API_WRITE_TOKEN || !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.error('Missing SANITY_API_WRITE_TOKEN or NEXT_PUBLIC_SANITY_PROJECT_ID env variables.');
    return;
  }

  // Upload images
  const heroBanner = await uploadImage('public/images/guide/guide-hero-banner.webp');
  const step1Image = await uploadImage('public/images/guide/guide-step1-audit.webp');
  const step3Image = await uploadImage('public/images/guide/guide-step3-personas.webp');
  const step5Image = await uploadImage('public/images/guide/guide-step5-platforms.webp');
  const contentWheel = await uploadImage('public/images/content-pillar-wheel.webp');
  const growthLoopImage = await uploadImage('public/images/guide/guide-hasan-growth-loop.webp');

  const guideDoc = {
    _id: 'guidePage', // Singleton ID
    _type: 'guidePage',
    title: 'The Ultimate Social Media Strategy Guide (2026): The Hasan Growth Loop™ Framework',
    seoDescription: 'The most complete Social Media Strategy guide for 2026, built around the Hasan Growth Loop™. A 7-stage framework from 13+ years and 300+ client strategies, covering goals, audience research, platforms, content, and measurement.',
    heroSubtitle: 'The Hasan Growth Loop™ Framework — 7 stages. 10 actionable steps. Built from 13+ years and 300+ client strategies.',
    heroBanner,
    author: 'Abul Hasan',
    readTime: '35 min read',
    updatedAt: '2026-08-01',
    content: [
      createBlock('normal', 'Introducing the Hasan Growth Loop™ — the 7-stage framework I use to build social media strategies for businesses across 10+ countries, distilled into one complete guide.', ['strong']),
      createBlock('h2', 'Why Most Social Media Efforts Fail'),
      createBlock('normal', "Here's an uncomfortable truth: most businesses don't have a social media strategy. They have a posting habit."),
      createBlock('normal', "They open Instagram, Canva, or ChatGPT, throw together something that \"looks about right,\" hit publish, and hope. When it doesn't work, they blame the algorithm. When it does work, they can't repeat it — because there was never a system behind it in the first place."),
      createBlock('normal', "I've seen this pattern up close for 13+ years, across 300+ client accounts in more than 10 countries, from single-founder e-commerce shops to multi-location service businesses. And almost without exception, the accounts that struggle share one thing in common: nobody ever wrote the strategy down."),
      createBlock('normal', "As of April 2026, there are more than 5.7 billion social media user identities globally. Over two-thirds of the planet — and the \"supermajority\" of internet users — now log into at least one platform every month. The average person is active across roughly 6–7 different platforms and spends more than 18 hours a week on social media. That is an enormous amount of attention available to your business. But it also means an enormous amount of noise you're competing against."),
      createBlock('normal', "A documented, deliberate social media strategy is what separates brands that turn that attention into pipeline, revenue, and loyal customers from brands that turn it into a content treadmill nobody asked for."),
      createBlock('normal', "This guide isn't a rehash of the generic \"8 steps to social media success\" articles you've probably already read. It's built around a framework I developed and refined while building and auditing strategies for hundreds of businesses: the Hasan Growth Loop™ — condensed into one practical system you can actually execute, whether you're a solo founder, a marketing manager, or an agency building strategies for clients."),
      createBlock('normal', "By the end, you'll have:"),
      createListBlock('normal', 'bullet', 'A clear definition of what a social media strategy actually is (and isn\'t)'),
      createListBlock('normal', 'bullet', 'A repeatable process for setting goals, understanding your audience, and choosing platforms'),
      createListBlock('normal', 'bullet', 'A content system that removes the "what do I post today?" panic'),
      createListBlock('normal', 'bullet', 'A measurement framework tied to real business outcomes, not vanity metrics'),
      createListBlock('normal', 'bullet', 'A list of the most common mistakes I see when auditing client accounts'),
      createBlock('normal', "Let's build it, step by step."),

      createBlock('h2', 'The Hasan Growth Loop™: My Framework for Strategies That Compound'),
      createBlock('normal', 'Every business I\'ve worked with over the past 13 years eventually asks some version of the same question: "Okay, but what\'s the actual system here?"'),
      createBlock('normal', 'That system is what I call the Hasan Growth Loop™ — seven stages that feed into each other, not a straight line that ends when you hit "publish." Most strategy guides treat measurement as the finish line. In my experience, that\'s exactly where most businesses quietly stall out, because they never build the loop back to the start.'),
      
      ...(growthLoopImage ? [growthLoopImage] : []),
      
      createListBlock('normal', 'bullet', 'Research: Audit your current presence, your audience, and your competitors before you plan anything'),
      createListBlock('normal', 'bullet', 'Strategy: Set goals and pick the platforms that actually match your audience'),
      createListBlock('normal', 'bullet', 'Content: Build pillars and a calendar so content creation stops being a daily decision'),
      createListBlock('normal', 'bullet', 'Distribution: Publish and promote with intent, not just consistency'),
      createListBlock('normal', 'bullet', 'Engagement: The community management layer most brands treat as optional (it isn\'t)'),
      createListBlock('normal', 'bullet', 'Measurement: Track the KPIs tied to the goals you set in Strategy, not vanity metrics'),
      createListBlock('normal', 'bullet', 'Optimization: Feed what you learned back into Research, and the loop starts again'),
      
      createBlock('normal', "Every section in this guide maps to one stage of the loop. I'll flag which stage you're in as we go, so by the end you'll not only have ten actionable steps — you'll have the underlying system that makes those steps repeatable quarter after quarter, which is the part most guides leave out entirely."),
      
      createBlock('h2', 'What Is a Social Media Strategy?'),
      createBlock('normal', "A social media strategy is a documented plan that defines what your business wants to achieve on social platforms, who you're trying to reach, which platforms you'll use, what you'll post, and how you'll know it's working."),
      createBlock('normal', "It is the bridge between where your brand is today and where you want it to be. Without one, you are executing tactics blindly — posting because \"you're supposed to,\" not because each post is doing a specific job."),
      createBlock('normal', "A strategy answers five questions before you ever open a content calendar:"),
      createListBlock('normal', 'bullet', 'Why are we on social media? (Goals)'),
      createListBlock('normal', 'bullet', 'Who are we trying to reach? (Audience)'),
      createListBlock('normal', 'bullet', 'Where should we show up? (Platforms)'),
      createListBlock('normal', 'bullet', 'What will we say, and how often? (Content)'),
      createListBlock('normal', 'bullet', 'How will we know if it\'s working? (Measurement)'),
      createBlock('normal', "If you can't answer all five in a sentence or two each, you don't have a strategy yet — you have a to-do list. In every strategy audit I've run for a new client, this is the first test I use, and more often than not, at least two of the five come back blank."),
      
      {
        _type: 'callout',
        style: 'primary',
        text: [createBlock('normal', 'Key takeaway: A social media strategy turns random acts of content into a predictable system for growth.')]
      },

      createBlock('h2', 'Why a Documented Strategy Matters'),
      createBlock('normal', "It's tempting to skip straight to creating Reels and TikToks. Here's why that shortcut costs more than it saves:"),
      createListBlock('normal', 'bullet', 'Wasted resources. Every piece of content costs time, money, or both. Without a strategy, that budget gets spent on whatever feels urgent instead of what actually moves the needle.'),
      createListBlock('normal', 'bullet', 'Inconsistent brand voice. Without documented guidelines, your brand can sound like three different companies depending on who\'s posting that week — which quietly erodes trust.'),
      createListBlock('normal', 'bullet', 'No way to prove impact. If you never defined success, you can\'t measure it. This is the single biggest reason marketing teams struggle to justify social media budgets to leadership.'),
      createListBlock('normal', 'bullet', 'Missed competitive openings. A strategy forces you to look at what competitors are (and aren\'t) doing, and gaps are opportunities.'),
      createListBlock('normal', 'bullet', 'Reactive, not proactive, decision-making. Without a plan, every algorithm update or platform trend causes a scramble. With one, you have a filter for deciding what\'s worth chasing and what isn\'t.'),
      
      createBlock('normal', "One mistake I see repeatedly when auditing client accounts: the business has a beautiful brand guideline PDF for their website and print materials, but nothing equivalent for social. So the \"brand voice\" on Instagram ends up being whoever happens to be posting that day."),
      createBlock('normal', "A strategy doesn't need to be a 40-page document. For most small and mid-sized businesses, a tight 3–5 page plan covering the ten steps below is enough to align a whole team and give every post a purpose. That's the same length I use for most client strategy documents — long enough to be useful, short enough that people actually reference it."),
      
      createBlock('h2', 'Step 1: Audit Where You Are Now'),
      createBlock('normal', "You can't plan a route without knowing your starting point. Before setting a single goal, take an honest inventory of your current social presence."),
      createBlock('normal', "Ask yourself:"),
      createListBlock('normal', 'bullet', 'Which platforms do we currently have a presence on?'),
      createListBlock('normal', 'bullet', 'How many followers do we have on each, and how has that grown (or stalled) over the last 6–12 months?'),
      createListBlock('normal', 'bullet', 'What\'s our engagement rate per platform? (Total engagements ÷ total followers or reach)'),
      createListBlock('normal', 'bullet', 'How consistently have we been posting — daily, weekly, sporadically?'),
      createListBlock('normal', 'bullet', 'Which specific posts or formats have performed best, and why?'),
      createListBlock('normal', 'bullet', 'How much real business (leads, bookings, sales) has social media generated so far?'),
      createListBlock('normal', 'bullet', 'Are there impostor or abandoned accounts using your business name that need to be reported or reclaimed?'),
      createBlock('normal', "Document the answers in a simple spreadsheet: one row per platform, columns for followers, average engagement rate, posting frequency, and top-performing content type. This single document becomes your baseline — the number everything else in your strategy will be measured against."),
      createBlock('normal', "In my own audits, I'd estimate roughly seven out of ten businesses have never actually pulled this data into one place before. They're going on gut feeling about what's \"working,\" which is usually the last post they happened to notice getting a few extra comments."),
      
      ...(step1Image ? [step1Image] : []),

      createBlock('h2', 'Step 2: Set SMART Goals & KPIs'),
      createBlock('normal', "Every strategy needs a \"why.\" Vague goals like \"grow our social media\" or \"post more\" don't give you anything to measure or optimize against. Instead, use the SMART framework:"),
      createListBlock('normal', 'bullet', 'Specific — exactly what are you trying to achieve?'),
      createListBlock('normal', 'bullet', 'Measurable — what number proves it?'),
      createListBlock('normal', 'bullet', 'Attainable — realistic given your resources?'),
      createListBlock('normal', 'bullet', 'Relevant — tied to an actual business objective?'),
      createListBlock('normal', 'bullet', 'Time-bound — by when?'),

      {
        _type: 'callout',
        style: 'secondary',
        text: [
          createBlock('normal', 'Weak Goal: "Grow our Instagram."'),
          createBlock('normal', 'SMART Goal: "Grow Instagram followers by 20% and generate 40 qualified leads through Instagram in the next 90 days."'),
        ]
      },

      createBlock('h3', 'Match goals to the funnel'),
      {
        _type: 'dataTable',
        headers: ['Funnel Stage', 'Business Goal', 'Social Media Objective', 'Primary KPIs'],
        rows: [
          { cells: ['Top of Funnel', 'Grow the brand', 'Brand Awareness', 'Reach, impressions, follower growth rate, share of voice'] },
          { cells: ['Middle of Funnel', 'Build trust & interest', 'Engagement & Consideration', 'Engagement rate, saves, shares, comments, click-through rate'] },
          { cells: ['Bottom of Funnel', 'Drive revenue', 'Conversions', 'Leads, sign-ups, purchases, cost per conversion'] },
          { cells: ['Post-Purchase', 'Retain & grow advocates', 'Loyalty & Community', 'Repeat engagement, UGC volume, response rate, CSAT'] },
        ]
      },
      createBlock('normal', "Don't try to chase every goal on every platform at once. Pick 1-3 core goals for the next quarter. You can layer in more once the fundamentals are working. In my experience building strategies across dozens of industries, the accounts that try to optimize for awareness, engagement, and conversions simultaneously — on every platform — are almost always the ones that end up moving none of those numbers."),

      createBlock('h2', 'Step 3: Research & Define Your Audience'),
      createBlock('normal', "You cannot create content that connects if you don't know exactly who you're creating it for. This is, without exaggeration, the single highest-leverage step in the entire process — and the one most businesses skip."),
      createBlock('h3', 'Go beyond demographics'),
      createBlock('normal', "Basic demographics (age, gender, location, income) are a starting point, not a strategy. The content that actually converts comes from understanding psychographics:"),
      createListBlock('normal', 'bullet', 'What problem keeps them up at night?'),
      createListBlock('normal', 'bullet', 'What have they already tried that didn\'t work?'),
      createListBlock('normal', 'bullet', 'What objections do they have before buying?'),
      createListBlock('normal', 'bullet', 'What emotional outcome are they really chasing (status, relief, belonging, control)?'),
      createListBlock('normal', 'bullet', 'How do they talk about this problem in their own words?'),

      createBlock('h3', 'Where to find this information'),
      createListBlock('normal', 'bullet', 'Mine your existing customer data. Who are your best, highest-value customers right now? What do they have in common?'),
      createListBlock('normal', 'bullet', 'Use native platform analytics. Instagram Insights, LinkedIn Analytics, and Meta Business Suite show you who is already following and engaging with you: age, location, active hours, and device.'),
      createListBlock('normal', 'bullet', 'Social listening. Monitor conversations, hashtags, and comments around your industry to see how people describe their problems unprompted.'),
      createListBlock('normal', 'bullet', 'Ask directly. A short survey to your email list or existing customers ("What\'s your biggest challenge with X?") consistently outperforms guesswork.'),
      createListBlock('normal', 'bullet', 'Check the comments section of competitors. This is one of the most underused sources of raw audience insight available — free and unfiltered.'),

      createBlock('h3', 'Build 2–3 audience personas'),
      createBlock('normal', "Turn your research into semi-fictional profiles your whole team can reference. For example:"),
      
      {
        _type: 'callout',
        style: 'highlight',
        text: [createBlock('normal', '"Marketing Manager Maria, 34, based in a mid-sized city. She follows industry leaders on LinkedIn before 9 am, is skeptical of anything that sounds like a sales pitch, and wants proof — case studies, and numbers — before she\'ll book a call."')]
      },

      createBlock('normal', "Two or three personas like this, built from real research rather than assumptions, will do more to sharpen your content than any posting hack."),
      ...(step3Image ? [step3Image] : []),

      createBlock('h2', 'Step 4: Run a Competitor Analysis'),
      createBlock('normal', "Your competitors are already running a live experiment on your shared audience. Use it."),
      createBlock('h3', 'Pick 3–5 competitors to track'),
      createBlock('normal', "Mix direct competitors (same product, same audience), indirect competitors (different product, same problem solved), and one or two \"aspirational\" brands — bigger players whose social presence you admire, even outside your exact category. For each, document:"),
      createListBlock('normal', 'bullet', 'Which platforms are they active on and which are they clearly neglecting?'),
      createListBlock('normal', 'bullet', 'How often do they post, and in what formats (video, carousel, static image, text)?'),
      createListBlock('normal', 'bullet', 'What\'s their engagement rate, and which specific posts overperform?'),
      createListBlock('normal', 'bullet', 'What tone of voice do they use: corporate, playful, educational, edgy?'),
      createListBlock('normal', 'bullet', 'How do they handle comments and community management?'),
      createListBlock('normal', 'bullet', 'What are they not doing that your audience might want?'),
      createBlock('normal', "That last question is the one that matters most. A competitive analysis isn't about copying what's already working for someone else — it's about finding the gap they've left open. If every competitor in your space posts polished, corporate content, a more human, behind-the-scenes voice can be a genuine differentiator. If nobody in your niche is active on LinkedIn or YouTube, that \"boring\" platform might be your fastest path to an underserved audience."),
      createBlock('normal', "Repeat this analysis every quarter, since competitor strategies shift, and so should your read on the landscape. When I run this exercise for a new client, I usually find at least one platform every competitor is neglecting — that gap is often the fastest, cheapest win in the entire strategy."),

      createBlock('h2', 'Step 5: Choose the Right Platforms'),
      createBlock('normal', "The most common strategic mistake in social media is trying to be excellent everywhere at once. It is far better to dominate two platforms than to post mediocre, inconsistent content across six. After helping more than 300 businesses over 13 years narrow their platform mix, I can tell you the biggest lift rarely comes from adding a fourth or fifth platform. It comes from cutting one and reinvesting that time into the two that were already working."),
      createBlock('normal', "Choose platforms based on where your audience (from Step 3) already spends time, not on which platform is trendiest this month."),
      
      createBlock('h3', 'Platform breakdown for 2026'),
      {
        _type: 'dataTable',
        headers: ['Platform', 'Best For', 'Content That Performs', 'Notes'],
        rows: [
          { cells: ['Facebook', 'Community building, broad-reach paid ads, older demographics', 'Video, groups, events, customer reviews', 'Still the largest platform globally by MAU; strong for local business'] },
          { cells: ['Instagram', 'Visual storytelling, lifestyle & e-commerce brands', 'Reels, carousels, Stories, UGC', 'Strong shopping and discovery features; one of fastest-growing major platforms'] },
          { cells: ['LinkedIn', 'B2B, thought leadership, recruiting, professional services', 'Native documents/carousels, personal posts, case studies', 'Best ROI for B2B lead generation and building authority'] },
          { cells: ['TikTok', 'Younger audiences, discovery, trend-driven brand personality', 'Short-form video, authentic/behind-the-scenes content', 'Fastest-growing platform for engagement, particularly Gen Z'] },
          { cells: ['X (Twitter)', 'Real-time updates, customer service, industry commentary', 'Threads, quick takes, news reactions', 'Best for brands with an agile team that can respond in real time'] },
          { cells: ['YouTube (incl. Shorts)', 'Long-form education, tutorials, SEO-driven discovery', 'Explainers, tutorials, product deep-dives, Shorts', 'Second-largest search engine; strong long-term compounding value'] },
          { cells: ['Pinterest', 'Product discovery, planning-stage shoppers', 'Vertical pins, infographics, how-tos', 'Users arrive in a shopping/planning mindset — high commercial intent'] },
        ]
      },

      createBlock('h3', 'Give each platform a mission statement'),
      createBlock('normal', "For every platform you decide to use, write a single sentence defining its job. For example:"),
      createListBlock('normal', 'bullet', '"Instagram is where we build brand affinity with existing and prospective customers through visual proof of results."'),
      createListBlock('normal', 'bullet', '"LinkedIn is where we build authority and generate B2B leads through founder-led thought leadership."'),
      createListBlock('normal', 'bullet', '"TikTok is where we build top-of-funnel awareness with short, authentic behind-the-scenes content."'),
      createBlock('normal', "If you can't write a clear mission statement for a platform, that's a sign you may not need to be there yet. Start with 1-3 platforms. Prove the model works, build the muscle of consistent posting and engagement, then expand."),
      
      ...(step5Image ? [step5Image] : []),

      createBlock('h2', 'Step 6: Build Your Content Pillars & Mix'),
      createBlock('normal', "Content is the vehicle that delivers your strategy to your audience. Without structure, content creation turns into daily decision fatigue — the constant \"what do I even post today?\" Content pillars solve that."),
      createBlock('h3', 'What are content pillars?'),
      createBlock('normal', "Content pillars are 3–5 recurring themes your brand will consistently create content around. They should reflect both what your audience cares about and what your brand is credibly positioned to talk about."),
      createBlock('normal', "One mistake I see repeatedly when auditing client accounts: a business picks five pillars, gets excited, and then only ever posts the \"promotional\" one because it's the easiest to produce on a busy week. Pillars only work if you actually plan against all of them — which is exactly what Step 7's calendar is for."),
      
      {
        _type: 'contentPillars',
        title: 'Example Content Pillars (Marketing Agency)',
        pillars: [
          { emoji: '📚', title: 'Educational', description: 'How-tos, quick tips, myths debunked' },
          { emoji: '📊', title: 'Proof', description: 'Case studies, results, testimonials' },
          { emoji: '🎬', title: 'Behind-the-scenes', description: 'Process, team, culture' },
          { emoji: '💡', title: 'Thought leadership', description: 'Opinions, trend commentary, original takes' },
          { emoji: '📣', title: 'Promotional', description: 'Offers, launches, calls to action' },
        ]
      },

      createBlock('h3', 'Balance your content mix'),
      createBlock('normal', "Use a simple ratio so your feed doesn't feel like a constant sales pitch. Two proven starting frameworks:"),
      createListBlock('normal', 'bullet', 'The 80/20 rule: 80% of content informs, educates, or entertains; 20% directly promotes your brand or offer.'),
      createListBlock('normal', 'bullet', 'The rule of thirds: One-third promotes your business, one-third shares ideas from others in your industry, one-third is genuine, personal interaction with your audience.'),
      createBlock('normal', "Either works. What matters is that you decide on a ratio before you start creating, so promotional content doesn't quietly creep up to 80% of your feed — which is the single fastest way to tank engagement and trigger unfollows."),
      
      ...(contentWheel ? [contentWheel] : []),

      createBlock('h2', 'Step 7: Build a Content Calendar'),
      createBlock('normal', "A strategy that only lives in your head (or a group chat) will not survive a busy week. A content calendar is where the plan becomes executable."),
      createBlock('h3', 'What to include'),
      createListBlock('normal', 'bullet', 'Date and time of each post'),
      createListBlock('normal', 'bullet', 'Platform'),
      createListBlock('normal', 'bullet', 'Content pillar it maps to'),
      createListBlock('normal', 'bullet', 'Format (Reel, carousel, static image, article, etc.)'),
      createListBlock('normal', 'bullet', 'Caption/copy draft'),
      createListBlock('normal', 'bullet', 'Visual asset status (not started / in design / ready)'),
      createListBlock('normal', 'bullet', 'Call to action'),

      createBlock('h3', 'Realistic posting frequency benchmarks (2026)'),
      {
        _type: 'dataTable',
        headers: ['Platform', 'Frequency'],
        rows: [
          { cells: ['Instagram', '3–5 feed posts/week + Stories & Reels'] },
          { cells: ['LinkedIn', '2–4 posts/week'] },
          { cells: ['Facebook', '3–5 posts/week'] },
          { cells: ['TikTok', '3–5 posts/week'] },
          { cells: ['X (Twitter)', '1–3 posts/day'] },
        ]
      },

      createBlock('h2', 'Step 8: Execute, Publishing & Community Management'),
      createBlock('normal', "Publishing is only half the execution phase. The other half—community management—is where the actual relationships are built."),
      createBlock('h3', 'The 15-Minute Rule'),
      createBlock('normal', "Social media platforms prioritize content that generates conversation. Try to be online for 15 minutes immediately after a post goes live to reply to early comments. This signals to the algorithm that the post is active and worth pushing to more feeds."),
      createBlock('h3', 'Proactive vs. Reactive Engagement'),
      createListBlock('normal', 'bullet', 'Reactive engagement: Replying to comments and messages on your own posts. (Mandatory)'),
      createListBlock('normal', 'bullet', 'Proactive engagement: Leaving thoughtful comments on posts from industry peers, potential clients, and thought leaders. (Where the real growth happens)'),

      createBlock('h2', 'Step 9: Measure What Matters'),
      createBlock('normal', "Go back to the SMART goals you set in Step 2. Those dictate what you track here. Ignore vanity metrics (like total impressions) if they aren't tied to a business outcome."),
      createBlock('h3', 'Create a Monthly Scorecard'),
      createBlock('normal', "At the end of every month, document:"),
      createListBlock('normal', 'bullet', 'Progress against primary KPIs (e.g., did we hit the 20% follower growth target?)'),
      createListBlock('normal', 'bullet', 'Top 3 performing posts across all platforms (and why they worked)'),
      createListBlock('normal', 'bullet', 'Bottom 3 performing posts (and what to learn from them)'),
      createListBlock('normal', 'bullet', 'Total leads or revenue attributed to social'),

      createBlock('h2', 'Step 10: Test, Optimize, Evolve'),
      createBlock('normal', "A social media strategy is not a static document. It's a hypothesis. Step 10 is where you complete the Growth Loop by feeding what you learned in Step 9 back into Step 1."),
      createBlock('normal', "If your educational carousels are generating saves and shares, but your promotional videos are tanking, your strategy needs to evolve. Double down on what the data proves is working, cut what isn't, and introduce one new experiment (a new format, a new hook style) each month."),

      createBlock('h2', 'Common Social Media Strategy Mistakes'),
      createListBlock('normal', 'bullet', 'Treating all platforms the same: Cross-posting the exact same video with the exact same caption to TikTok, Instagram, and LinkedIn. (Native formats always win).'),
      createListBlock('normal', 'bullet', 'Inconsistent branding: Using different fonts, colors, and tones of voice depending on who made the post.'),
      createListBlock('normal', 'bullet', 'The "Me" Show: Posting entirely about your own products, awards, and features without explaining why the audience should care.'),
      createListBlock('normal', 'bullet', 'Ignoring comments: If someone took the time to comment, and the brand ignores it, they are unlikely to engage again.'),
    ],
  };

  try {
    const result = await client.createOrReplace(guideDoc);
    console.log('Successfully migrated guide page!');
    console.log('Document ID:', result._id);
  } catch (error) {
    console.error('Error migrating guide page:', error.message);
  }
}

migrate();
