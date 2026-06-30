import { Metadata } from "next";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { notFound } from "next/navigation";

// Define the industry data
const industryData: Record<string, { title: string; shortName: string; description: string; challenges: string[]; strategy: string[] }> = {
  "small-business": {
    title: "Social Media Strategy for Small Businesses",
    shortName: "Small Business",
    description: "Local awareness and community building strategies for small and local businesses.",
    challenges: ["Limited time and budget", "Standing out locally", "Inconsistent posting"],
    strategy: ["Focus on local SEO and Google Business", "Community-centric Facebook groups", "Authentic behind-the-scenes content on Instagram"]
  },
  "ecommerce": {
    title: "Social Media Strategy for E-commerce Brands",
    shortName: "E-commerce",
    description: "Conversion-focused strategies to drive product sales and build brand loyalty.",
    challenges: ["High competition", "Cart abandonment", "Rising ad costs"],
    strategy: ["Shoppable posts on Instagram & Pinterest", "UGC and influencer partnerships", "TikTok trends for product virality"]
  },
  "b2b": {
    title: "Social Media Strategy for B2B Companies",
    shortName: "B2B",
    description: "Lead generation and thought leadership strategies for business-to-business brands.",
    challenges: ["Long sales cycles", "Complex value propositions", "Boring corporate image"],
    strategy: ["LinkedIn thought leadership for executives", "Educational carousel posts", "Webinar and whitepaper lead magnets"]
  },
  "saas": {
    title: "Social Media Strategy for SaaS Companies",
    shortName: "SaaS",
    description: "Growth and retention strategies for software-as-a-service platforms.",
    challenges: ["Explaining complex features", "Churn reduction", "User acquisition costs"],
    strategy: ["Video tutorials and feature highlights", "Customer success stories on LinkedIn", "Twitter/X for community and support"]
  },
  "healthcare": {
    title: "Social Media Strategy for Healthcare Providers",
    shortName: "Healthcare",
    description: "Trust-building and patient acquisition strategies for medical professionals.",
    challenges: ["HIPAA compliance", "Building trust", "Navigating sensitive topics"],
    strategy: ["Educational content from doctors", "Patient testimonials (compliant)", "Local community health initiatives"]
  },
  "coaches": {
    title: "Social Media Strategy for Coaches & Consultants",
    shortName: "Coaching",
    description: "Authority-building and client acquisition for independent professionals.",
    challenges: ["Imposter syndrome", "Standing out in a crowded market", "Converting followers to clients"],
    strategy: ["Vulnerability and story-driven posts", "Value-packed short-form video (Reels/TikTok)", "Facebook Groups for community nurturing"]
  },
  "realtors": {
    title: "Social Media Strategy for Real Estate Agents",
    shortName: "Real Estate",
    description: "Property marketing and personal branding for realtors.",
    challenges: ["Generating local leads", "Showcasing properties effectively", "Building personal trust"],
    strategy: ["High-quality property video tours", "Local neighborhood guides", "Client success stories and closing photos"]
  },
  "lawyers": {
    title: "Social Media Strategy for Law Firms",
    shortName: "Legal",
    description: "Lead generation and authority positioning for attorneys.",
    challenges: ["Advertising regulations", "Dry subject matter", "Building approachability"],
    strategy: ["Answering common legal FAQs via video", "LinkedIn articles on industry changes", "Highlighting community involvement"]
  }
};

export async function generateStaticParams() {
  return Object.keys(industryData).map((industry) => ({
    industry,
  }));
}

export function generateMetadata({ params }: { params: { industry: string } }): Metadata {
  const data = industryData[params.industry];
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `https://socialmediastrategist.ne/strategy-for-${params.industry}`,
    },
  };
}

export default function IndustryPage({ params }: { params: { industry: string } }) {
  const data = industryData[params.industry];
  
  if (!data) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Social Media Strategy for ${data.shortName}`,
    provider: { "@type": "Person", name: "Abul Hasan", jobTitle: "Social Media Strategist" },
    description: data.description,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />

      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white/80 border border-white/20">
            Industry Strategy
          </span>
          <h1 className="text-display font-bold text-white mb-6">
            Social Media Strategy for{" "}
            <span className="bg-gradient-to-r from-primary-200 to-secondary-light bg-clip-text text-transparent">
              {data.shortName}
            </span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
            {data.description} Stop using generic tactics and get a customized plan for your specific market.
          </p>
          <Button href="/contact" size="lg" variant="accent">
            Book a Strategy Call
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            
            <ScrollReveal direction="left">
               <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100 h-full">
                 <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Challenges in {data.shortName}</h2>
                 <ul className="space-y-4">
                   {data.challenges.map((challenge, i) => (
                     <li key={i} className="flex items-start gap-3 text-slate-700">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>{challenge}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
               <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg h-full">
                 <h2 className="text-2xl font-bold text-slate-900 mb-6">The Strategic Approach</h2>
                 <ul className="space-y-4">
                   {data.strategy.map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-slate-700">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionHeading 
             badge="Custom Strategy" 
             title={`Need a Custom Plan for Your ${data.shortName} Business?`}
             subtitle="Book a free 30-minute discovery call to discuss your specific goals and challenges."
          />
          <div className="mt-8">
             <Button href="/contact" size="lg" variant="primary">
               Talk to an Expert
             </Button>
          </div>
        </div>
      </section>
    </>
  );
}
