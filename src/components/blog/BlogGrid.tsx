const ARTICLES = [
  {
    title: "Certificate Tracking Best Practices for Multi-Vessel Fleets",
    excerpt:
      "Centralized tracking reduces certificate lapses and supports structured renewal workflows across flag states.",
    category: "Certification Tracking",
  },
  {
    title: "Understanding PSC Inspection Triggers and Documentation Requirements",
    excerpt:
      "A practical overview of common PSC focus areas and how structured documentation control can reduce detention risk.",
    category: "PSC Inspection",
  },
  {
    title: "SMS Revision Workflow: Aligning Procedures with Current ISM Code",
    excerpt:
      "Step-by-step guidance on reviewing, updating, and tracking amendments to your Safety Management System documentation.",
    category: "SMS / ISM",
  },
  {
    title: "Audit Checklist: Pre-Inspection Documentation Review",
    excerpt:
      "A structured checklist for verifying document completeness, currency, and accessibility before scheduled audits.",
    category: "Audit Preparation",
  },
  {
    title: "Vessel Takeover Compliance: Key Documentation Steps",
    excerpt:
      "Essential compliance documentation tasks when onboarding a vessel under new management, from handover to operational readiness.",
    category: "Operational Compliance",
  },
  {
    title: "Managing Equipment Service Records for Class Survey Readiness",
    excerpt:
      "How to organize LSA, FFA, and critical equipment service records to ensure smooth class survey outcomes.",
    category: "Certification Tracking",
  },
];

interface BlogGridProps {
  activeCategory: string;
}

export default function BlogGrid({ activeCategory }: BlogGridProps) {
  const filtered =
    activeCategory === "All"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  if (filtered.length === 0) {
    return (
      <p className="text-muted-foreground text-sm py-12 text-center">
        No articles in this category yet.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((article, idx) => (
        <article
          key={idx}
          className="bg-background border border-dpa-border flex flex-col"
        >
          {/* Image placeholder */}
          <div className="bg-gray-light h-44 flex items-center justify-center border-b border-dpa-border">
            <div className="w-10 h-10 border border-dpa-border flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
                <rect x="3" y="3" width="18" height="18" rx="0" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <span className="inline-block bg-teal text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 w-fit mb-3">
              {article.category}
            </span>
            <h3 className="text-navy font-bold text-base leading-snug mb-3">
              {article.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
              {article.excerpt}
            </p>
            <a
              href="#"
              className="text-teal text-xs font-semibold uppercase tracking-widest hover:underline"
            >
              Read Article →
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
