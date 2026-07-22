export const metadata = {
  title: "Terms of Service | Abul Hasan - Social Media Strategist",
  description: "Terms of service for working with Abul Hasan.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-slate-500 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Welcome to socialmediastrategist.net, operated by Abul Hasan (&quot;I,&quot; &quot;me,&quot; &quot;my&quot;). By using this Site or engaging my services, you agree to the following terms.
            </p>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">1. Services</h2>
              <p>
                I provide social media strategy, content planning, and related digital marketing services as described on this Site, including Strategy Audit, Growth Strategy, and Full Partnership packages. Specific deliverables, timelines, and pricing are agreed upon before work begins.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">2. Payment Terms</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>A 50% deposit is required upfront for all packages before work begins.</li>
                <li>The remaining balance for one-time projects is due upon delivery.</li>
                <li>Full Partnership is billed monthly, with the deposit due at the start of each billing cycle.</li>
              </ul>
              <p className="mt-4">
                Full payment terms and refund eligibility are outlined in my Refund Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">3. Client Responsibilities</h2>
              <p>
                To deliver services effectively, I may require timely access to accounts, brand assets, feedback, or approvals from you. Delays in providing these may affect project timelines.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">4. No Guarantee of Results</h2>
              <p>
                While I apply industry best practices and data-driven strategy, I do not guarantee specific business outcomes such as follower growth, engagement rates, leads, or sales. Results depend on multiple factors outside my direct control, including market conditions, platform algorithm changes, and your team&apos;s execution.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">5. Intellectual Property</h2>
              <p>
                Upon full payment, you receive rights to use the strategy documents, content calendars, and materials created specifically for your project. I retain the right to reference general methodologies, non-confidential frameworks, and anonymized results (e.g., in case studies) unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">6. Confidentiality</h2>
              <p>
                I treat client business information, account access, and internal data as confidential, and will not share it with third parties without your permission, except as required to deliver services or by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">7. Cancellation</h2>
              <p>
                Full Partnership clients may cancel at any time, subject to the proration terms outlined in my Refund Policy. One-time project packages are non-refundable once work has begun, as outlined in the Refund Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">8. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, I am not liable for indirect, incidental, or consequential damages arising from the use of my services, including lost profits, lost data, or business interruption.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">9. Acceptable Use</h2>
              <p>
                You agree not to use my services for any unlawful purpose, or in a way that infringes on the rights of others. I reserve the right to decline or discontinue services for any client engaged in unlawful or unethical business practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">10. Changes to These Terms</h2>
              <p>
                I may update these Terms of Service periodically. Continued use of my services after changes are posted constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">11. Governing Law</h2>
              <p>
                These terms are governed by the laws applicable in your jurisdiction, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">12. Contact</h2>
              <p>
                Questions about these Terms can be sent to hasan@socialmediastrategist.net.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
