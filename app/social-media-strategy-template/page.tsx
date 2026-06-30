import { Metadata } from "next";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Free Social Media Strategy Template (PDF, Notion, Sheets)",
  description:
    "Download our free, comprehensive social media strategy template. Includes sections for audience research, competitive analysis, content pillars, and KPIs. No email required.",
  alternates: {
    canonical: "https://socialmediastrategist.ne/social-media-strategy-template",
  },
};

export default function TemplatePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://socialmediastrategist.ne" },
      { "@type": "ListItem", position: 2, name: "Free Template", item: "https://socialmediastrategist.ne/social-media-strategy-template" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-slate-900/5 text-slate-600 border border-slate-900/10">
            Free Resource
          </span>
          <h1 className="text-display font-bold text-slate-900 mb-6">
            The Ultimate Social Media{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Strategy Template
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Stop guessing and start planning. Download the exact template I use to build revenue-driving social media strategies for my clients.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button href="#download" size="lg" variant="accent">
                Download Free Template
              </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             
             {/* Left side: Image/Preview */}
             <ScrollReveal direction="left">
               <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-200">
                  <div className="aspect-[4/3] bg-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                     {/* Placeholder for actual template preview image */}
                     <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 opacity-50"></div>
                     <div className="relative z-10 text-center">
                       <svg className="w-16 h-16 text-slate-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                       </svg>
                       <span className="text-slate-500 font-medium">Template Preview</span>
                     </div>
                  </div>
               </div>
             </ScrollReveal>

             {/* Right side: What's inside */}
             <ScrollReveal direction="right">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">What's Inside the Template?</h2>
                  <p className="text-lg text-slate-600 mb-8">
                    This isn't just a blank calendar. It's a comprehensive framework that walks you through every step of building a winning strategy.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      { title: "Brand Identity & Voice", desc: "Define how you show up online." },
                      { title: "Audience Personas", desc: "Map out exactly who you're talking to." },
                      { title: "Competitive Analysis", desc: "Track competitors and find the white space." },
                      { title: "Content Pillars", desc: "Define your core messaging themes." },
                      { title: "Goal Tracking (KPIs)", desc: "Set SMART goals and measure success." },
                      { title: "Platform Strategy", desc: "Specific tactics for IG, LinkedIn, TikTok, etc." },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary-50 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                        <div>
                          <strong className="text-slate-900 block">{item.title}</strong>
                          <span className="text-slate-600 text-sm">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
             </ScrollReveal>

           </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Format</h2>
            <p className="text-slate-600 mb-12">No email required. Just click and start planning.</p>

            <div className="grid md:grid-cols-3 gap-6">
               <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-primary transition-colors">
                  <div className="text-4xl mb-4">📄</div>
                  <h3 className="text-xl font-bold mb-2">Google Docs</h3>
                  <p className="text-sm text-slate-500 mb-6">Best for collaborative writing and easy sharing.</p>
                  <Button variant="outline" fullWidth>Copy to Google Drive</Button>
               </div>
               <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-primary transition-colors">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-2">Notion</h3>
                  <p className="text-sm text-slate-500 mb-6">Best if you already use Notion for workspace management.</p>
                  <Button variant="outline" fullWidth>Duplicate to Notion</Button>
               </div>
               <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-primary transition-colors">
                  <div className="text-4xl mb-4">📑</div>
                  <h3 className="text-xl font-bold mb-2">PDF Download</h3>
                  <p className="text-sm text-slate-500 mb-6">Best for printing or viewing offline.</p>
                  <Button variant="outline" fullWidth>Download PDF</Button>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50 py-20 border-t border-primary-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need Help Implementing This?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            A template is a great start, but execution is everything. Let's talk about how we can build and execute a custom strategy for your brand.
          </p>
          <Button href="/contact" size="lg" variant="primary">
            Book a Free Strategy Call
          </Button>
        </div>
      </section>
    </>
  );
}
