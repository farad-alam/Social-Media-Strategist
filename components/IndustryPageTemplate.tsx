import { Metadata } from "next";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { notFound } from "next/navigation";
import { industries } from "@/data/industries";

export default function IndustryPageTemplate({ industry }: { industry: string }) {
  const data = industries[industry];
  
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
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            {data.description} Stop using generic tactics and get a customized plan for your specific market.
          </p>
          <Button href="/contact" size="lg" variant="accent">
            Book a Strategy Call
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Article Content */}
            <div className="lg:col-span-8 space-y-12">
              {data.articleSections.map((section, idx) => (
                <ScrollReveal key={idx}>
                  <div className="prose prose-lg max-w-none text-slate-700">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{section.heading}</h2>
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="mb-4 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 sticky top-32 space-y-8">
               <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                 <h3 className="text-xl font-bold text-slate-900 mb-6">Common Challenges</h3>
                 <ul className="space-y-4">
                   {data.challenges.map((challenge, i) => (
                     <li key={i} className="flex items-start gap-3 text-slate-700">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="text-sm font-medium">{challenge}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                 <h3 className="text-xl font-bold text-slate-900 mb-6">Strategic Approach</h3>
                 <ul className="space-y-4">
                   {data.strategy.map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-slate-700">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </div>

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
