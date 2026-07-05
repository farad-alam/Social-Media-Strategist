import { Metadata } from "next";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "10 Brilliant Social Media Strategy Examples (2026)",
  description:
    "Explore top social media strategy examples from leading brands. See how companies like Nike, Apple, and HubSpot dominate social media and learn how to apply their tactics.",
  alternates: {
    canonical: "https://socialmediastrategist.net/social-media-strategy-examples",
  },
};

const examples = [
  {
    brand: "Nike",
    focus: "Community & Inspiration",
    description: "Nike's strategy rarely focuses on the product itself. Instead, they sell an aspiration. Their social media channels are filled with high-quality, emotional storytelling highlighting athletes overcoming adversity.",
    takeaway: "Don't sell features; sell the feeling. Build a community around shared values rather than just pushing products.",
    tags: ["Storytelling", "Video", "Community"],
  },
  {
    brand: "Duolingo",
    focus: "Unhinged Entertainment",
    description: "Duolingo revolutionized brand presence on TikTok by adopting an 'unhinged' persona via their mascot, Duo. They jump on trending audio quickly and aren't afraid to be weird.",
    takeaway: "B2C brands don't always have to be professional. Entertainment is a valid and highly effective strategy for driving brand awareness.",
    tags: ["TikTok", "Humor", "Trends"],
  },
  {
    brand: "HubSpot",
    focus: "Educational Value at Scale",
    description: "HubSpot dominates B2B social media by providing immense value. They share templates, statistics, how-to guides, and actionable marketing advice across LinkedIn and Instagram.",
    takeaway: "In B2B, education is your best marketing tool. Give away your secrets to build authority and trust.",
    tags: ["B2B", "LinkedIn", "Education"],
  },
  {
    brand: "Glossier",
    focus: "User-Generated Content (UGC)",
    description: "Glossier built a billion-dollar brand largely by leveraging their community. They repost customer photos, creating a highly authentic feed that makes their customers the heroes.",
    takeaway: "Your customers are your best marketers. Create products and experiences that people want to share, and amplify their voices.",
    tags: ["UGC", "Instagram", "Community"],
  },
  {
    brand: "Wendy's",
    focus: "Brand Voice & Interactivity",
    description: "Wendy's is famous for its sassy, responsive Twitter (X) presence. They actively engage with followers and competitors with a distinct, witty voice.",
    takeaway: "A strong, consistent brand voice can turn mundane interactions into viral moments.",
    tags: ["Brand Voice", "Twitter/X", "Engagement"],
  }
];

export default function ExamplesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://socialmediastrategist.net" },
      { "@type": "ListItem", position: 2, name: "Examples", item: "https://socialmediastrategist.net/social-media-strategy-examples" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white/80 border border-white/20">
            Case Studies & Inspiration
          </span>
          <h1 className="text-display font-bold text-white mb-6">
            Brilliant Social Media{" "}
            <span className="bg-gradient-to-r from-primary-200 to-secondary-light bg-clip-text text-transparent">
              Strategy Examples
            </span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Success leaves clues. Let's break down the social media strategies of top brands and uncover the tactics you can apply to your own business.
          </p>
        </div>
      </section>

      {/* Examples List */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="space-y-12">
              {examples.map((example, index) => (
                 <ScrollReveal key={index} delay={index * 100}>
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md">
                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                          <h2 className="text-3xl font-bold text-slate-900">{example.brand}</h2>
                          <div className="flex flex-wrap gap-2">
                             {example.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-primary-50 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                                   {tag}
                                </span>
                             ))}
                          </div>
                       </div>
                       
                       <h3 className="text-xl font-semibold text-slate-800 mb-3">The Strategy: {example.focus}</h3>
                       <p className="text-slate-600 leading-relaxed mb-6">{example.description}</p>
                       
                       <div className="bg-slate-50 border-l-4 border-secondary p-5 rounded-r-lg">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">How to apply this:</h4>
                          <p className="text-slate-700 italic">{example.takeaway}</p>
                       </div>
                    </div>
                 </ScrollReveal>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 font-bold text-white mb-4">
            Ready to Become Your Industry's Best Example?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Stop copying competitors and start leading. Book a call to build a unique strategy for your brand.
          </p>
          <Button href="/contact" size="lg" variant="accent">
            Book Your Strategy Call
          </Button>
        </div>
      </section>
    </>
  );
}
