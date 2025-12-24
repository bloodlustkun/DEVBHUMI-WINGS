/**
 * Copyright © 2025 metasyndikate. All rights reserved.
 */

export function LegalSections() {
  return (
    <section className="bg-white" aria-label="Legal Sections">
      <div className="container mx-auto px-4 py-16 space-y-16">
        <div id="privacy" className="scroll-mt-24">
          <h2 className="mb-3 text-slate-900">Privacy Policy</h2>
          <p className="text-slate-700 max-w-3xl">
            We use essential and analytics cookies to provide and improve services, personalize content, and protect
            our users. By using this site you consent to cookie usage as described. You can withdraw consent by
            clearing site data. We do not sell personal information. For requests, contact our team via the Contact
            section.
          </p>
        </div>

        <div id="nda" className="scroll-mt-24">
          <h2 className="mb-3 text-slate-900">Non‑Disclosure Agreement (NDA)</h2>
          <p className="text-slate-700 max-w-3xl">
            For business discussions, estimates, or partnerships, we honor confidentiality. Information shared with
            us in the course of business will be treated as confidential and used solely for evaluating and delivering
            services. By accepting the NDA on the first page, you acknowledge these terms for business communications.
          </p>
        </div>
      </div>
    </section>
  );
}
