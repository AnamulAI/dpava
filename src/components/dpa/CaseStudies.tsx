const CASES = [
  {
    clientType: "Bulk Carrier Owner — 4 Vessels",
    flag: "Panama / Marshall Islands",
    challenge:
      "Multiple certificate renewals were overdue across the fleet. The company had no dedicated DPA and relied on the Master to track compliance.",
    result:
      "All four vessels brought into full statutory compliance within 90 days. Centralized tracking implemented, eliminating renewal lapses.",
  },
  {
    clientType: "Chemical Tanker Operator — 2 Vessels",
    flag: "Liberia",
    challenge:
      "SMS documentation was outdated by three major ISM revisions. The company faced a major vetting risk ahead of a spot charter.",
    result:
      "SMS fully revised and aligned with current ISM Code in 6 weeks. Vessel passed vetting inspection with zero observations.",
  },
  {
    clientType: "General Cargo Shipping Company — 6 Vessels",
    flag: "Bahamas / Cyprus",
    challenge:
      "LSA/FFA servicing across six vessels was uncoordinated, with three vessels having overdue equipment service records.",
    result:
      "Full LSA/FFA servicing schedule established. All overdue services completed within budget. No PSC detentions since engagement.",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-gray-light py-20 md:py-24 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Results
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold">
            Proven Compliance Results
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {CASES.map((c) => (
            <div
              key={c.clientType}
              className="bg-background border border-dpa-border p-10 flex flex-col"
            >
              <div className="mb-6">
                <span className="text-xs font-bold text-teal uppercase tracking-widest">
                  Client Type
                </span>
                <p className="text-navy font-semibold text-base mt-1">{c.clientType}</p>
                <p className="text-muted-foreground text-xs mt-1">{c.flag}</p>
              </div>

              <div className="mb-8">
                <span className="text-xs font-bold text-foreground uppercase tracking-widest">
                  Main Challenge
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                  {c.challenge}
                </p>
              </div>

              <div className="mt-auto pt-7 border-t border-dpa-border">
                <span className="inline-block bg-teal text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 mb-2">
                  Key Result
                </span>
                <p className="text-foreground font-medium text-sm leading-relaxed mt-1">
                  {c.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/case-studies"
            className="inline-flex items-center border border-teal text-teal font-semibold text-sm px-8 py-3 hover:bg-teal hover:text-white transition-colors"
          >
            View Case Studies →
          </a>
        </div>
      </div>
    </section>
  );
}
