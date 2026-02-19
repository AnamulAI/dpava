import { CheckCircle } from "lucide-react";

const EXPERIENCE_BLOCKS = [
  {
    heading: "Ship Documentation & Certification Tracking",
    body: "I manage the full lifecycle of vessel certificates — from initial issuance to renewal coordination, survey scheduling, and flag state submission. Every document is tracked against its expiry with proactive advance notice to the DPA or Marine Superintendent.",
  },
  {
    heading: "ISM / ISPS / SMS Administration",
    body: "I provide structured support for ISM Code compliance, ISPS security documentation, and Safety Management System updates — including non-conformity tracking, drill records, and circular incorporation.",
  },
  {
    heading: "Audit Preparation & Inspection Documentation",
    body: "I prepare and organise complete audit dossiers for internal, flag, class, and port state inspections. This includes evidence compilation, gap analysis support, and pre-inspection checklist management.",
  },
  {
    heading: "Class & Flag Coordination",
    body: "I coordinate directly with classification societies and flag state administrations for statutory surveys, endorsements, and correspondence follow-up — reducing administrative delays and ensuring certificate continuity.",
  },
];

const BULLETS = [
  "LSA / FFA servicing arrangement & tracking",
  "New vessel takeover documentation support",
  "Vessel registration documentation coordination",
  "Deficiency follow-up and close-out reporting",
  "Compliance calendar and deadline management",
];

export default function ProfessionalBackground() {
  return (
    <section className="bg-gray-light py-20 md:py-24 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
            Professional Experience
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold max-w-2xl">
            Professional Experience in Maritime Operations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — experience blocks */}
          <div className="space-y-8">
            {EXPERIENCE_BLOCKS.map((block) => (
              <div
                key={block.heading}
                className="border-l-2 border-teal pl-5"
              >
                <h3 className="text-navy font-bold text-base mb-2">
                  {block.heading}
                </h3>
                <p className="text-muted-foreground text-sm leading-[1.8]">
                  {block.body}
                </p>
              </div>
            ))}
          </div>

          {/* Right — additional capabilities + regulatory references */}
          <div className="space-y-10">
            <div className="border border-dpa-border bg-background p-8">
              <p className="text-teal text-xs font-bold uppercase tracking-widest mb-6">
                Additional Capabilities
              </p>
              <ul className="space-y-4">
                {BULLETS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-teal mt-0.5 shrink-0"
                    />
                    <span className="text-foreground text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
