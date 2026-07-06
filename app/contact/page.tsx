"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Abul Hasan — Social Media Strategist",
    url: "https://socialmediastrategist.net/contact",
    mainEntity: {
      "@type": "Person",
      name: "Abul Hasan",
      jobTitle: "Social Media Strategist",
      email: "hello@socialmediastrategist.net",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema).replace(/</g, "\\u003c") }} />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white/80 border border-white/20">
            Get in Touch
          </span>
          <h1 className="text-display font-bold text-white mb-6">
            Let&apos;s Build Your{" "}
            <span className="bg-gradient-to-r from-primary-200 to-secondary-light bg-clip-text text-transparent">
              Strategy
            </span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Book your free 30-minute strategy call or send a message. I&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="relative -mt-12 z-10 section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary mx-auto mb-6 flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h2>
                      <p className="text-slate-500 max-w-md mx-auto">
                        Thank you for reaching out. I&apos;ll review your message and get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h2>
                      <p className="text-slate-500 mb-8">Fill out the form below and I&apos;ll get back to you within 24 hours.</p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-2">
                              Full Name *
                            </label>
                            <input
                              id="contact-name"
                              type="text"
                              required
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-2">
                              Email Address *
                            </label>
                            <input
                              id="contact-email"
                              type="email"
                              required
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="contact-company" className="block text-sm font-semibold text-slate-700 mb-2">
                              Company / Brand
                            </label>
                            <input
                              id="contact-company"
                              type="text"
                              value={formState.company}
                              onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                              placeholder="Your Company"
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-budget" className="block text-sm font-semibold text-slate-700 mb-2">
                              Budget Range
                            </label>
                            <select
                              id="contact-budget"
                              value={formState.budget}
                              onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                            >
                              <option value="">Select budget range</option>
                              <option value="1k-3k">$1,000 — $3,000</option>
                              <option value="3k-5k">$3,000 — $5,000</option>
                              <option value="5k-10k">$5,000 — $10,000</option>
                              <option value="10k+">$10,000+</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-2">
                            Your Message *
                          </label>
                          <textarea
                            id="contact-message"
                            required
                            rows={5}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                            placeholder="Tell me about your business and what you're looking to achieve with social media..."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-6 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                              </svg>
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={150}>
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Quick Contact</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800">Email</div>
                        <a href="mailto:hello@socialmediastrategist.net" className="text-sm text-primary hover:underline">
                          hello@socialmediastrategist.net
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800">Response Time</div>
                        <p className="text-sm text-slate-500">Within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800">Available</div>
                        <p className="text-sm text-slate-500">Worldwide (Remote)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-primary-50 rounded-2xl border border-primary-100 p-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Prefer a Video Call?</h3>
                  <p className="text-sm text-slate-600 mb-5">
                    Book a free 30-minute strategy call directly on my calendar.
                  </p>
                  {/* Calendly placeholder */}
                  <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
                    <p className="text-sm text-slate-400 mb-4">Calendly integration will appear here</p>
                    <Button href="#" variant="primary" size="sm">
                      Schedule a Call
                    </Button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={450}>
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Connect Online</h3>
                  <a href="https://wa.me/8801713646536" target="_blank" rel="noopener noreferrer" className="w-full mb-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-50 text-green-700 font-bold text-sm hover:bg-green-100 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                  <div className="flex gap-3">
                    <a href="https://linkedin.com/in/abulhasan" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 font-medium text-sm hover:bg-blue-100 transition-colors duration-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                      LinkedIn
                    </a>
                    <a href="https://upwork.com/freelancers/abulhasan" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#14A800]/10 text-[#14A800] font-medium text-sm hover:bg-[#14A800]/20 transition-colors duration-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.214-1.832-2.148-4.032-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" /></svg>
                      Upwork
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
