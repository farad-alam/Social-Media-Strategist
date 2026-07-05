export interface IndustryData {
  title: string;
  shortName: string;
  description: string;
  challenges: string[];
  strategy: string[];
  articleSections: {
    heading: string;
    content: string[];
  }[];
}

export const industries: Record<string, IndustryData> = {
  "small-business": {
    title: "Social Media Strategy for Small Businesses",
    shortName: "Small Business",
    description: "Local awareness and community building strategies for small and local businesses.",
    challenges: ["Limited time and budget", "Standing out locally", "Inconsistent posting"],
    strategy: ["Focus on local SEO and Google Business", "Community-centric Facebook groups", "Authentic behind-the-scenes content on Instagram"],
    articleSections: [
      {
        heading: "Why Small Businesses Need a Tailored Social Media Strategy",
        content: [
          "For small businesses, social media isn't just about posting pretty pictures—it's the digital storefront that connects you with your local community. A well-executed social media strategy can level the playing field, allowing small brands to compete with industry giants by leveraging authenticity and localized targeting.",
          "Without a strategy, small business owners often fall into the trap of 'posting and praying.' By implementing a data-driven approach, you can maximize your limited time and budget to generate real foot traffic, qualified leads, and loyal customers."
        ]
      },
      {
        heading: "Key Tactics for Local Growth in 2026",
        content: [
          "Community building is at the heart of small business success. Platforms like Instagram and Facebook are incredibly powerful when used to showcase the human side of your business. Sharing behind-the-scenes content, introducing your team, and telling the story of your brand creates an emotional connection that corporate competitors cannot replicate.",
          "Additionally, localized SEO on platforms like Google Business Profile and hyper-local hashtags on Instagram ensure that when people in your area are searching for your services, your business appears first."
        ]
      },
      {
        heading: "How Abul Hasan Can Help Your Small Business",
        content: [
          "As an experienced social media strategist, I help small businesses cut through the noise. We'll start with a deep dive into your local market, identify where your ideal customers spend their time, and build a sustainable content calendar that doesn't overwhelm your daily operations.",
          "From setting up automated lead generation flows to training your team on best practices, my goal is to turn your social media channels into a predictable revenue engine."
        ]
      }
    ]
  },
  "ecommerce": {
    title: "Social Media Strategy for E-commerce Brands",
    shortName: "E-commerce",
    description: "Conversion-focused strategies to drive product sales and build brand loyalty.",
    challenges: ["High competition", "Cart abandonment", "Rising ad costs"],
    strategy: ["Shoppable posts on Instagram & Pinterest", "UGC and influencer partnerships", "TikTok trends for product virality"],
    articleSections: [
      {
        heading: "Driving Sales with E-Commerce Social Media Strategies",
        content: [
          "In the highly competitive e-commerce space, social media is your most powerful tool for customer acquisition and retention. A successful e-commerce social media strategy goes beyond aesthetic product shots; it requires a seamless integration of social commerce, influencer partnerships, and user-generated content (UGC).",
          "Today's consumers want to see products in action before they buy. By leveraging short-form video on TikTok and Instagram Reels, e-commerce brands can demonstrate product value rapidly and organically, reducing the reliance on increasingly expensive paid advertising."
        ]
      },
      {
        heading: "Overcoming Cart Abandonment and Ad Fatigue",
        content: [
          "One of the biggest challenges for e-commerce brands is cart abandonment. A strategic approach to retargeting and community engagement can recover these lost sales. Building a community around your brand lifestyle encourages repeat purchases and turns casual buyers into brand advocates.",
          "Furthermore, integrating shoppable posts directly into your social feeds removes friction from the buying process, allowing users to purchase without ever leaving the app."
        ]
      },
      {
        heading: "The E-Commerce Growth Framework",
        content: [
          "My approach to e-commerce strategy focuses on measurable ROI. We will implement robust tracking, establish clear KPIs for organic and paid efforts, and build a pipeline of UGC that serves as high-converting ad creative.",
          "Whether you are launching a new product line or scaling your existing store, a custom social media strategy will ensure your marketing budget works smarter, not harder."
        ]
      }
    ]
  },
  "b2b": {
    title: "Social Media Strategy for B2B Companies",
    shortName: "B2B",
    description: "Lead generation and thought leadership strategies for business-to-business brands.",
    challenges: ["Long sales cycles", "Complex value propositions", "Boring corporate image"],
    strategy: ["LinkedIn thought leadership for executives", "Educational carousel posts", "Webinar and whitepaper lead magnets"],
    articleSections: [
      {
        heading: "Transforming B2B Social Media from Boring to Engaging",
        content: [
          "The biggest myth in B2B marketing is that social media has to be dry and overly corporate. In reality, B2B buyers are still humans who consume content, seek education, and value authenticity. A strong B2B social media strategy focuses on thought leadership, trust-building, and establishing your company as the ultimate authority in your niche.",
          "LinkedIn remains the undisputed king of B2B social media, but success requires more than just company page updates. It requires activating your leadership team and turning employees into brand ambassadors."
        ]
      },
      {
        heading: "Navigating Long Sales Cycles with Social Proof",
        content: [
          "B2B purchases involve multiple decision-makers and long sales cycles. Your social media presence must nurture these prospects over time. Educational content—such as carousel posts breaking down complex industry problems, webinar snippets, and case studies—keeps your brand top-of-mind.",
          "By consistently delivering value without an immediate hard sell, you shorten the sales cycle and ensure that when a prospect is ready to buy, you are the only logical choice."
        ]
      },
      {
        heading: "Building Your B2B Authority Engine",
        content: [
          "I specialize in creating B2B social media strategies that generate high-quality leads. We will develop a content matrix that addresses every stage of your buyer's journey, optimize your executive profiles for thought leadership, and create a system for repurposing whitepapers and case studies into months of engaging social content."
        ]
      }
    ]
  },
  "saas": {
    title: "Social Media Strategy for SaaS Companies",
    shortName: "SaaS",
    description: "Growth and retention strategies for software-as-a-service platforms.",
    challenges: ["Explaining complex features", "Churn reduction", "User acquisition costs"],
    strategy: ["Video tutorials and feature highlights", "Customer success stories on LinkedIn", "Twitter/X for community and support"],
    articleSections: [
      {
        heading: "Accelerating SaaS Growth Through Social Media",
        content: [
          "For Software-as-a-Service (SaaS) companies, social media is critical not only for user acquisition but also for retention and community building. A robust SaaS social media strategy must balance product education with brand personality, turning complex software features into digestible, highly shareable content.",
          "The most successful SaaS brands use social media to build a cult-like following. They don't just sell software; they sell a better way of working."
        ]
      },
      {
        heading: "Reducing Churn with Community and Education",
        content: [
          "Customer churn is the enemy of SaaS growth. Social media provides a direct channel to educate your existing users, highlight new features, and celebrate customer success stories. Short-form video tutorials on platforms like YouTube Shorts and Twitter/X can drastically improve product adoption rates.",
          "Additionally, building a community—whether through a dedicated Facebook Group, Slack community, or active Twitter presence—creates a sticky user base that feels connected to your brand's mission."
        ]
      },
      {
        heading: "Your SaaS Social Media Blueprint",
        content: [
          "My strategy for SaaS companies focuses on the intersection of product marketing and community engagement. We will identify the platforms where your developers or end-users hang out, create a framework for communicating updates without sounding like a release note, and build campaigns that drive free-trial signups and demo requests."
        ]
      }
    ]
  },
  "healthcare": {
    title: "Social Media Strategy for Healthcare Providers",
    shortName: "Healthcare",
    description: "Trust-building and patient acquisition strategies for medical professionals.",
    challenges: ["HIPAA compliance", "Building trust", "Navigating sensitive topics"],
    strategy: ["Educational content from doctors", "Patient testimonials (compliant)", "Local community health initiatives"],
    articleSections: [
      {
        heading: "Building Patient Trust in the Digital Age",
        content: [
          "In the healthcare industry, trust is your most valuable asset. A strategic social media presence allows hospitals, clinics, and private practices to establish authority, humanize their providers, and educate the community before a patient ever walks through the door.",
          "However, healthcare social media comes with unique challenges, most notably strict privacy regulations like HIPAA. A successful strategy must navigate these legal boundaries while still delivering authentic, empathetic, and engaging content."
        ]
      },
      {
        heading: "Education as a Marketing Tool",
        content: [
          "Patients today turn to the internet for health information. By positioning your practitioners as accessible experts who provide accurate, easy-to-understand medical advice, you capture attention and build incredible goodwill.",
          "Content strategies focusing on preventative care tips, 'myth-busting' common medical misconceptions, and behind-the-scenes looks at your facilities help demystify the healthcare experience and reduce patient anxiety."
        ]
      },
      {
        heading: "Compliant and Effective Healthcare Strategy",
        content: [
          "I partner with healthcare providers to develop strategies that are 100% compliant and highly effective for patient acquisition. We will build content guidelines, train your staff on safe social media practices, and create campaigns that highlight your facility's excellence and community involvement."
        ]
      }
    ]
  },
  "coaches": {
    title: "Social Media Strategy for Coaches & Consultants",
    shortName: "Coaching",
    description: "Authority-building and client acquisition for independent professionals.",
    challenges: ["Imposter syndrome", "Standing out in a crowded market", "Converting followers to clients"],
    strategy: ["Vulnerability and story-driven posts", "Value-packed short-form video (Reels/TikTok)", "Facebook Groups for community nurturing"],
    articleSections: [
      {
        heading: "Establishing Authority as a Coach or Consultant",
        content: [
          "For coaches and consultants, you are your brand. The coaching industry is saturated, meaning that a generic social media presence will simply blend in. A winning social media strategy for coaches focuses heavily on personal branding, storytelling, and demonstrating undeniable expertise.",
          "Your goal is to move your audience from passive consumers to active participants who view you as the definitive guide to solving their problems."
        ]
      },
      {
        heading: "The Power of Vulnerability and Proof",
        content: [
          "While sharing frameworks and tips is important, connection is what actually sells coaching services. Sharing your personal journey, your failures, and how you overcame them builds profound trust. When combined with strong client testimonials and case studies, this creates a highly converting content ecosystem.",
          "Short-form video is particularly effective here, allowing potential clients to experience your energy, communication style, and coaching methodology firsthand."
        ]
      },
      {
        heading: "Scaling Your Consulting Practice",
        content: [
          "I help coaches and consultants build social media funnels that attract high-ticket clients. We will define your unique brand voice, set up a content calendar that balances education, inspiration, and promotion, and implement strategies to consistently generate discovery calls."
        ]
      }
    ]
  },
  "realtors": {
    title: "Social Media Strategy for Real Estate Agents",
    shortName: "Real Estate",
    description: "Property marketing and personal branding for realtors.",
    challenges: ["Generating local leads", "Showcasing properties effectively", "Building personal trust"],
    strategy: ["High-quality property video tours", "Local neighborhood guides", "Client success stories and closing photos"],
    articleSections: [
      {
        heading: "Dominating the Local Real Estate Market on Social Media",
        content: [
          "Real estate is a highly visual and deeply personal industry. A strategic social media presence is no longer optional for realtors—it is the primary way modern buyers and sellers evaluate agents before making contact. Your strategy must perfectly balance stunning property marketing with authentic personal branding.",
          "Top-producing agents don't just post 'Just Listed' graphics; they use social media to become the digital mayor of their local community."
        ]
      },
      {
        heading: "Beyond the Listing: Content that Converts",
        content: [
          "While high-quality property tours on Instagram Reels and TikTok are fantastic for reach, local market updates, neighborhood guides, and home-buying tips are what establish your authority. By providing transparent, valuable information about the local market, you build trust with potential clients months before they are ready to transact.",
          "Documenting the behind-the-scenes reality of real estate—inspections, negotiations, and closing day celebrations—humanizes your brand and proves your work ethic."
        ]
      },
      {
        heading: "Your Real Estate Growth Strategy",
        content: [
          "I build social media strategies for real estate professionals that focus on hyper-local lead generation. We will optimize your profiles for local search, create a blueprint for captivating video tours, and develop a content plan that keeps you top-of-mind for referrals."
        ]
      }
    ]
  },
  "lawyers": {
    title: "Social Media Strategy for Law Firms",
    shortName: "Legal",
    description: "Lead generation and authority positioning for attorneys.",
    challenges: ["Advertising regulations", "Dry subject matter", "Building approachability"],
    strategy: ["Answering common legal FAQs via video", "LinkedIn articles on industry changes", "Highlighting community involvement"],
    articleSections: [
      {
        heading: "Modernizing Legal Marketing Through Social Media",
        content: [
          "The legal profession is traditionally conservative in its marketing, but modern law firms are realizing the immense power of social media for client acquisition and authority building. A strategic approach to social media allows attorneys to demystify the legal process, showcase their expertise, and remain highly approachable.",
          "Navigating advertising ethics and bar association rules is paramount, but it shouldn't stop you from building a powerful digital presence."
        ]
      },
      {
        heading: "Building Authority with Educational Content",
        content: [
          "When people need a lawyer, they are often stressed and confused. Providing clear, accessible answers to common legal questions via short-form video or LinkedIn articles establishes your firm as a helpful authority. This educational approach builds trust long before a consultation is booked.",
          "For corporate and B2B practices, LinkedIn is the ultimate platform for networking, sharing insights on new legislation, and highlighting your firm's recent victories and community involvement."
        ]
      },
      {
        heading: "Strategic Growth for Your Law Firm",
        content: [
          "I specialize in helping law firms craft professional, compliant, and highly effective social media strategies. We will identify your ideal client demographics, develop a content calendar that highlights your firm's unique strengths, and implement systems to capture leads discreetly and professionally."
        ]
      }
    ]
  }
};
