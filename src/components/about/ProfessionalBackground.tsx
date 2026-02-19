import { CheckCircle } from "lucide-react";

const BULLETS = [
  "Certificate and survey planning coordination",
  "SMS/ISM documentation updates",
  "PSC / Flag / Class inspection preparation",
  "LSA / FFA servicing tracking",
  "Compliance reporting structure",
];

const REFERENCES = [
  { code: "ISM Code", full: "International Safety Management Code" },
  { code: "MLC 2006", full: "Maritime Labour Convention" },
  { code: "SOLAS", full: "Safety of Life at Sea" },
  { code: "IMO Circulars", full: "Flag & Class Guidance Documents" },
];

export default function ProfessionalBackground() {
  return (
    <section className="bg-gray-light py-20 md:py-24 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — text + bullets */}
          <div>
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
              Professional Background
            </p>
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-6">
              Experience Built on Maritime Operations Discipline
            </h2>
            <p className="text-muted-foreground text-base leading-[1.8] mb-8">
              Our work is grounded in years of hands-on support across certification
              tracking, ISM and SMS documentation, audit preparation, and
              vendor coordination. We understand the operational pressures that
              DPAs, ADPAs, and Marine Superintendents face — and we provide the
              structured administrative backbone that keeps compliance running
              without disruption.
            </p>

            <ul className="space-y-4">
              {BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-teal mt-0.5 shrink-0"
                  />
                  <span className="text-foreground text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — flat reference card */}
          <div className="border border-[#E2E8F0] bg-background p-8">
            <p className="text-teal text-xs font-bold uppercase tracking-widest mb-6">
              Regulatory Framework
            </p>
            <p className="text-muted-foreground text-sm leading-[1.8] mb-8">
              All compliance support is aligned with internationally recognised
              maritime regulations and flag state requirements. Our processes
              reference the following frameworks:
            </p>
            <div className="space-y-5">
              {REFERENCES.map((ref) => (
                <div
                  key={ref.code}
                  className="flex items-start gap-4 border-b border-[#E2E8F0] pb-5 last:border-0 last:pb-0"
                >
                  <span className="text-teal font-bold text-sm shrink-0 w-24">
                    {ref.code}
                  </span>
                  <span className="text-navy text-sm font-medium leading-snug">
                    {ref.full}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
