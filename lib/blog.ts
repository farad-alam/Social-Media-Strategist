export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Using simple HTML for demonstration
  date: string;
  author: string;
  category: string;
  readingTime: string;
  imageUrl?: string;
}

const mockPosts: BlogPost[] = [
  {
    slug: "how-to-create-a-social-media-content-calendar",
    title: "How to Create a Social Media Content Calendar (With Free Template)",
    excerpt: "Stop guessing what to post every day. Learn how to build a content calendar that saves you time and drives consistent engagement.",
    content: `
      <h2>The Importance of a Content Calendar</h2>
      <p>If you're waking up every morning wondering "what should I post today?", you're already behind. A social media content calendar is the difference between proactive strategy and reactive scrambling.</p>
      <p>In this guide, we'll walk through exactly how to build one.</p>
      <h3>1. Define Your Content Pillars</h3>
      <p>Content pillars are 3-5 core themes your brand discusses. For a fitness coach, they might be: Workout Tutorials, Nutrition Tips, Client Success Stories, and Personal Motivation.</p>
      <h3>2. Choose Your Posting Frequency</h3>
      <p>Consistency beats frequency. It's better to post 3 times a week consistently than 7 times a week for a month, followed by ghosting your audience for two weeks.</p>
      <h3>3. Batch Create Content</h3>
      <p>Pick one day a week (or month) to create all your content. Write the captions, design the graphics, and record the videos all at once.</p>
      <h3>4. Schedule in Advance</h3>
      <p>Use tools like Buffer, Hootsuite, or Meta Business Suite to schedule your posts to go out automatically.</p>
    `,
    date: "2026-06-15",
    author: "Abul Hasan",
    category: "Content Planning",
    readingTime: "5 min read"
  },
  {
    slug: "b2b-linkedin-strategy",
    title: "The Ultimate B2B LinkedIn Strategy for Lead Generation",
    excerpt: "LinkedIn isn't just a digital resume anymore. Discover how to turn your LinkedIn profile into a predictable B2B lead generation machine.",
    content: `
      <h2>Why LinkedIn is a Goldmine for B2B</h2>
      <p>LinkedIn is the only platform where your target audience actively wants to do business. If you sell B2B, this is where you need to be.</p>
      <h3>1. Optimize Your Profile</h3>
      <p>Your profile is a landing page, not a resume. Your headline should state exactly who you help and how you help them. E.g., "Helping SaaS companies increase MRR through targeted LinkedIn strategies."</p>
      <h3>2. Post Actionable Content</h3>
      <p>Don't just share company news. Share frameworks, actionable tips, and industry insights that your target audience will find valuable.</p>
      <h3>3. The 'Give, Give, Give, Ask' Framework</h3>
      <p>Provide value 90% of the time. Only ask for the sale (or the meeting) 10% of the time.</p>
    `,
    date: "2026-06-10",
    author: "Abul Hasan",
    category: "B2B Marketing",
    readingTime: "7 min read"
  },
  {
    slug: "instagram-reels-best-practices",
    title: "Instagram Reels Best Practices: How to Boost Reach in 2026",
    excerpt: "Short-form video is dominating social media. Here are the updated best practices for creating Instagram Reels that actually get seen.",
    content: `
      <h2>The Anatomy of a Viral Reel</h2>
      <p>With organic reach on photos declining, Reels are your best bet for reaching non-followers on Instagram.</p>
      <h3>1. The 3-Second Hook</h3>
      <p>If you don't grab their attention in the first 3 seconds, they will scroll past. Use text hooks on the screen immediately.</p>
      <h3>2. Trending Audio vs. Original Audio</h3>
      <p>While trending audio can help with initial reach, original audio (where you are speaking directly to the camera) builds deeper trust and connection with your audience.</p>
      <h3>3. Keep it Native</h3>
      <p>Edit your videos within the app (or make them look like they were). Add native text, captions, and stickers. High-production value commercials often perform worse than raw, authentic content.</p>
    `,
    date: "2026-06-05",
    author: "Abul Hasan",
    category: "Instagram Growth",
    readingTime: "6 min read"
  }
];

export async function getAllPosts(): Promise<BlogPost[]> {
  // Simulate network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    }, 100);
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Simulate network request
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = mockPosts.find(p => p.slug === slug);
      resolve(post || null);
    }, 100);
  });
}
