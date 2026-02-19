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

        {/* Article body — structured placeholder content */}
        <article className="prose-dpa">
          <p className="text-foreground text-base md:text-lg leading-[1.9] mb-8">
            Effective maritime compliance depends on disciplined documentation control,
            structured tracking systems, and consistent administrative coordination.
            This article outlines key principles and practical steps for maintaining
            audit-ready documentation across vessel operations.
          </p>

          <h2 className="text-navy text-2xl md:text-[1.7rem] font-bold mb-4 mt-12">
            The Foundation of Compliance Documentation
          </h2>
          <p className="text-foreground text-base leading-[1.9] mb-6">
            Maritime compliance is built on three pillars: currency of statutory
            certificates, alignment of SMS procedures with current regulatory
            requirements, and accessibility of documentation during inspections
            and audits. Each pillar requires systematic attention and structured
            workflows to maintain effectiveness.
          </p>

          <h3 className="text-navy text-xl font-bold mb-3 mt-10">
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

          <h2 className="text-navy text-2xl md:text-[1.7rem] font-bold mb-4 mt-12">
            SMS Documentation Alignment
          </h2>
          <p className="text-foreground text-base leading-[1.9] mb-6">
            Safety Management System documentation must reflect the current ISM Code
            and all applicable circulars. Regular reviews should be scheduled to
            identify outdated procedures, update forms and checklists, and ensure
            consistency across all SMS sections.
          </p>

          <h3 className="text-navy text-xl font-bold mb-3 mt-10">
            Amendment Tracking Best Practices
          </h3>
          <p className="text-foreground text-base leading-[1.9] mb-6">
            Every SMS amendment should be logged with the revision date, affected
            sections, and a summary of changes made. This creates an audit trail
            that demonstrates continuous improvement and regulatory responsiveness
            during ISM audits.
          </p>

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

          {/* Second highlight box */}
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

          <h2 className="text-navy text-2xl md:text-[1.7rem] font-bold mb-4 mt-12">
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
      </div>
    </section>
  );
}
