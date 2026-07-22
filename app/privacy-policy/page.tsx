export const metadata = {
  title: "Privacy Policy | Abul Hasan - Social Media Strategist",
  description: "Privacy policy for working with Abul Hasan.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Abul Hasan (&quot;I,&quot; &quot;me,&quot; &quot;my&quot;) operates socialmediastrategist.net (the &quot;Site&quot;). This Privacy Policy explains how I collect, use, and protect information when you visit the Site or work with me as a client.
            </p>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">1. Information I Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Contact information</strong> you provide directly, such as your name, email address, phone number, or business details, when you fill out a contact form, book a call, or inquire about services.</li>
                <li><strong>Project and business information</strong> shared during onboarding or ongoing work, such as social media account access, business goals, or performance data, used solely to deliver services to you.</li>
                <li><strong>Usage data</strong> collected automatically through cookies and analytics tools (such as Google Analytics), including pages visited, time on site, and general location/device information.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">2. How I Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To respond to inquiries and schedule consultations</li>
                <li>To deliver, manage, and improve the services you&apos;ve hired me for</li>
                <li>To send project updates, invoices, or relevant communications</li>
                <li>To understand how visitors use the Site, so I can improve it over time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">3. How I Do Not Use Your Information</h2>
              <p>
                I do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">4. Third-Party Tools</h2>
              <p>
                I may use third-party tools (such as scheduling software, analytics platforms, or payment processors) to operate the Site and deliver services. These providers have their own privacy policies governing how they handle data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">5. Data Security</h2>
              <p>
                I take reasonable steps to protect your information, including limiting access to client data to only what&apos;s needed to deliver services. However, no method of transmission or storage is 100% secure, and I cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">6. Data Retention</h2>
              <p>
                I retain client and project information for as long as necessary to deliver services and maintain business records, or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">7. Your Rights</h2>
              <p>
                Depending on your location, you may have rights to access, correct, or request deletion of your personal data. To make such a request, contact me at hasan@socialmediastrategist.net.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">8. Cookies</h2>
              <p>
                The Site may use cookies to improve your browsing experience and understand site traffic. You can control or disable cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">9. Changes to This Policy</h2>
              <p>
                This Privacy Policy may be updated periodically. Continued use of the Site after changes are posted constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">10. Contact</h2>
              <p>
                Questions about this Privacy Policy can be sent to hasan@socialmediastrategist.net.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
