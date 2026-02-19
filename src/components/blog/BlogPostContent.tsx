export default function BlogPostContent() {
  return (
    <section className="bg-background py-16 md:py-20 border-b border-dpa-border">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Featured image placeholder */}
        <div className="bg-gray-light border border-dpa-border flex items-center justify-center h-64 md:h-80 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 border-2 border-dpa-border mx-auto mb-3 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
                <rect x="3" y="3" width="18" height="18" rx="0" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
            <p className="text-muted-foreground text-xs uppercase tracking-widest">Article Image</p>
          </div>
        </div>

        {/* Article body */}
        <article className="prose-dpa">
          <p className="text-foreground text-base md:text-lg leading-[1.9] mb-8">
            Effective maritime compliance depends on disciplined documentation control,
            structured tracking systems, and consistent administrative coordination.
            This article outlines key principles and practical steps for maintaining
            audit-ready documentation across vessel operations.
          </p>

          {/* Table of Contents */}
          <div className="border border-dpa-border bg-gray-light p-6 mb-12">
            <p className="text-navy font-bold text-sm uppercase tracking-widest mb-4">
              Table of Contents
            </p>
            <ol className="space-y-2 text-sm list-decimal list-inside">
              <li>
                <a href="#foundation" className="text-teal hover:underline">The Foundation of Compliance Documentation</a>
              </li>
              <li>
                <a href="#certificate-tracking" className="text-teal hover:underline">Certificate Tracking and Renewal Management</a>
              </li>
              <li>
                <a href="#sms-alignment" className="text-teal hover:underline">SMS Documentation Alignment</a>
              </li>
              <li>
                <a href="#amendment-tracking" className="text-teal hover:underline">Amendment Tracking Best Practices</a>
              </li>
              <li>
                <a href="#pre-inspection" className="text-teal hover:underline">Pre-Inspection Preparation</a>
              </li>
            </ol>
          </div>

          <h2 id="foundation" className="text-navy text-2xl md:text-[1.7rem] font-bold mb-4 mt-12">
            The Foundation of Compliance Documentation
          </h2>
          <p className="text-foreground text-base leading-[1.9] mb-6">
            Maritime compliance is built on three pillars: currency of statutory
            certificates, alignment of SMS procedures with current regulatory
            requirements, and accessibility of documentation during inspections
            and audits. Each pillar requires systematic attention and structured
            workflows to maintain effectiveness.
          </p>

          {/* Regulatory reference */}
          <div className="flex items-start gap-3 bg-background border border-dpa-border px-5 py-4 mb-6">
            <span className="text-teal text-xs font-bold uppercase tracking-widest shrink-0 mt-0.5">Ref:</span>
            <p className="text-muted-foreground text-xs leading-[1.7]">
              ISM Code, Section 11 — Documentation. IMO Resolution A.1071(28) on procedures for Port State Control.
            </p>
          </div>

          <h3 id="certificate-tracking" className="text-navy text-xl font-bold mb-3 mt-10">
            Certificate Tracking and Renewal Management
          </h3>
          <p className="text-foreground text-base leading-[1.9] mb-6">
            Centralized certificate tracking eliminates the risk of expiry oversights.
            A structured approach involves maintaining a master registry of all
            statutory and class certificates, setting up advance renewal alerts, and
            coordinating with flag state administrations and classification societies
            well before expiry dates.
          </p>

          <ul className="space-y-3 mb-8 pl-0">
            <li className="text-foreground text-base leading-[1.8] flex gap-3">
              <span className="text-teal font-bold shrink-0">–</span>
              Maintain a centralized certificate register with expiry dates and renewal windows
            </li>
            <li className="text-foreground text-base leading-[1.8] flex gap-3">
              <span className="text-teal font-bold shrink-0">–</span>
              Set renewal alerts at 90, 60, and 30 days before certificate expiry
            </li>
            <li className="text-foreground text-base leading-[1.8] flex gap-3">
              <span className="text-teal font-bold shrink-0">–</span>
              Coordinate with flag state and class society for timely renewal filings
            </li>
            <li className="text-foreground text-base leading-[1.8] flex gap-3">
              <span className="text-teal font-bold shrink-0">–</span>
              Document all renewal actions with confirmation receipts and filing records
            </li>
          </ul>

          {/* Highlight box */}
          <div className="border-l-[4px] border-teal bg-gray-light px-6 py-5 mb-8">
            <p className="text-navy font-bold text-sm uppercase tracking-widest mb-2">
              Important Note
            </p>
            <p className="text-foreground text-sm leading-[1.8]">
              Certificate lapses — even brief ones — can trigger PSC detentions and
              may result in flag state sanctions. Structured tracking is not optional;
              it is a compliance requirement for responsible vessel management.
            </p>
          </div>

          {/* Regulatory reference */}
          <div className="flex items-start gap-3 bg-background border border-dpa-border px-5 py-4 mb-8">
            <span className="text-teal text-xs font-bold uppercase tracking-widest shrink-0 mt-0.5">Ref:</span>
            <p className="text-muted-foreground text-xs leading-[1.7]">
              SOLAS Chapter I, Regulation 12 — Certificates. Paris MoU on Port State Control, Annex 11.
            </p>
          </div>

          <h2 id="sms-alignment" className="text-navy text-2xl md:text-[1.7rem] font-bold mb-4 mt-12">
            SMS Documentation Alignment
          </h2>
          <p className="text-foreground text-base leading-[1.9] mb-6">
            Safety Management System documentation must reflect the current ISM Code
            and all applicable circulars. Regular reviews should be scheduled to
            identify outdated procedures, update forms and checklists, and ensure
            consistency across all SMS sections.
          </p>

          <h3 id="amendment-tracking" className="text-navy text-xl font-bold mb-3 mt-10">
            Amendment Tracking Best Practices
          </h3>
          <p className="text-foreground text-base leading-[1.9] mb-6">
            Every SMS amendment should be logged with the revision date, affected
            sections, and a summary of changes made. This creates an audit trail
            that demonstrates continuous improvement and regulatory responsiveness
            during ISM audits.
          </p>

          {/* Regulatory reference */}
          <div className="flex items-start gap-3 bg-background border border-dpa-border px-5 py-4 mb-6">
            <span className="text-teal text-xs font-bold uppercase tracking-widest shrink-0 mt-0.5">Ref:</span>
            <p className="text-muted-foreground text-xs leading-[1.7]">
              ISM Code, Section 1.4 — Functional requirements. MSC-MEPC.7/Circ.8 on Guidelines for the Operational Implementation of the ISM Code.
            </p>
          </div>

          <ul className="space-y-3 mb-8 pl-0">
            <li className="text-foreground text-base leading-[1.8] flex gap-3">
              <span className="text-teal font-bold shrink-0">✓</span>
              Review SMS procedures against current ISM Code at least annually
            </li>
            <li className="text-foreground text-base leading-[1.8] flex gap-3">
              <span className="text-teal font-bold shrink-0">✓</span>
              Maintain an amendment tracking log with revision history
            </li>
            <li className="text-foreground text-base leading-[1.8] flex gap-3">
              <span className="text-teal font-bold shrink-0">✓</span>
              Distribute updated procedures to all relevant personnel promptly
            </li>
          </ul>

          {/* Key takeaway box */}
          <div className="border-l-[4px] border-teal bg-gray-light px-6 py-5 mb-8">
            <p className="text-navy font-bold text-sm uppercase tracking-widest mb-2">
              Key Takeaway
            </p>
            <p className="text-foreground text-sm leading-[1.8]">
              Structured documentation control is the foundation of audit readiness.
              Consistent tracking, disciplined amendments, and organized filing
              systems transform compliance from a reactive burden into a manageable,
              systematic process.
            </p>
          </div>

          <h2 id="pre-inspection" className="text-navy text-2xl md:text-[1.7rem] font-bold mb-4 mt-12">
            Pre-Inspection Preparation
          </h2>
          <p className="text-foreground text-base leading-[1.9] mb-8">
            When an inspection is announced, preparation should follow a structured
            checklist approach. Documentation folders should be verified for
            completeness, certificates checked for validity, and crew familiarized
            with key procedures. A systematic 48-hour preparation window, when
            properly utilized, can significantly improve inspection outcomes and
            reduce operational stress for both shore and vessel teams.
          </p>
        </article>

        {/* Downloadable Checklist Block */}
        <div className="border-2 border-teal bg-gray-light p-8 mt-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-14 h-14 shrink-0 bg-teal/10 border border-teal flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-teal">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                <path d="M14 2v6h6" />
                <path d="m9 15 2 2 4-4" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-navy font-bold text-base mb-1">
                Download: Pre-Inspection Documentation Checklist
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                A structured, printable checklist covering certificate verification, SMS folder review,
                and crew familiarization steps — ready for your next audit or inspection.
              </p>
              <button className="inline-flex items-center gap-2 bg-teal text-white text-xs font-semibold uppercase tracking-widest px-5 py-2.5 hover:bg-teal-hover transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Checklist (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* Related FAQs */}
        <div className="mt-16 border-t border-dpa-border pt-12">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Frequently Asked Questions
          </p>
          <h3 className="text-navy text-xl md:text-2xl font-bold mb-8">
            Related Questions
          </h3>
          <div className="space-y-6">
            {[
              {
                q: "How far in advance should I prepare for an ISM audit?",
                a: "Best practice is to begin structured preparation at least 90 days before the scheduled audit date. This allows sufficient time for document review, certificate verification, and crew familiarization with updated procedures.",
              },
              {
                q: "What are the most common reasons for PSC detentions related to documentation?",
                a: "The top causes include expired certificates, outdated SMS procedures, missing or incomplete drill records, and failure to demonstrate compliance with ISM Code Sections 10 and 11 on documentation and verification.",
              },
              {
                q: "How often should SMS procedures be reviewed and updated?",
                a: "The ISM Code requires periodic review, but best practice recommends quarterly internal reviews with a formal annual audit. Any regulatory change (IMO circular, flag state notice) should trigger an immediate review of affected procedures.",
              },
            ].map((faq, i) => (
              <div key={i} className="border border-dpa-border p-6">
                <p className="text-navy font-bold text-sm mb-2">{faq.q}</p>
                <p className="text-muted-foreground text-sm leading-[1.8]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
