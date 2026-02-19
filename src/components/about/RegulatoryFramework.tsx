import { BookOpen } from "lucide-react";

const FRAMEWORKS = [
  { code: "ISM Code", full: "International Safety Management Code" },
  { code: "ISPS Code", full: "International Ship & Port Facility Security Code" },
  { code: "MLC 2006", full: "Maritime Labour Convention" },
  { code: "SOLAS", full: "Safety of Life at Sea" },
  { code: "IMO Circulars", full: "Flag & Class Guidance Documents" },
  { code: "Flag & Class", full: "Flag State & Classification Society Requirements" },
];

export default function RegulatoryFramework() {
  return (
    <section className="bg-gray-light py-20 md:py-24 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
            Compliance Knowledge
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold max-w-2xl">
            Regulatory &amp; Compliance Framework Familiarity
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — paragraph */}
          <div>
            <p className="text-muted-foreground text-base leading-[1.8] mb-5">
              My compliance support work is grounded in direct familiarity with
              the international regulatory frameworks that govern vessel
              operations.
            </p>
            <p className="text-muted-foreground text-base leading-[1.8] mb-5">
              I work within these standards daily — not as a statutory
              authority, but as a structured administrative specialist who
              understands how requirements translate into operational
              documentation.
            </p>
            <p className="text-muted-foreground text-base leading-[1.8]">
              This working knowledge allows me to prepare and organise
              documentation that satisfies flag state, class, and port state
              expectations — reducing rework and improving inspection outcomes.
            </p>
          </div>

          {/* Right — structured framework list */}
          <div className="border border-[#C5CDD8] bg-background p-8">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen size={16} className="text-teal" />
              <p className="text-teal text-xs font-bold uppercase tracking-widest">
                Frameworks Applied
              </p>
            </div>
            <div className="space-y-5">
              {FRAMEWORKS.map((ref) => (
                <div
                  key={ref.code}
                  className="flex items-start gap-4 border-b border-dpa-border pb-5 last:border-0 last:pb-0"
                >
                  <span className="text-teal font-bold text-sm shrink-0 w-28">
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
