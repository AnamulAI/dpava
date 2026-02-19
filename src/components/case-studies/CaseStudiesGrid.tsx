const CASES = [
  {
    clientType: "DPA — Bulk Carrier Fleet",
    fleetSize: "3 Vessels",
    challenge:
      "Multiple expiring certificates with no centralized tracking and a short-notice PSC inspection.",
    badge: "Zero Certificate Lapses",
    anchor: "#case-01",
  },
  {
    clientType: "Marine Superintendent — Tanker Operations",
    fleetSize: "2 Vessels",
    challenge:
      "SMS documentation outdated, ISM checklist inconsistencies, and imminent audit pressure.",
    badge: "Clean Audit Report",
    anchor: "#case-02",
  },
  {
    clientType: "New Vessel Takeover — General Cargo",
    fleetSize: "1 Vessel",
    challenge:
      "Documentation gaps and uncoordinated vendor servicing during vessel handover.",
    badge: "Smooth Transition",
    anchor: "#case-03",
  },
];

export default function CaseStudiesGrid() {
  return (
    <section className="bg-background py-20 md:py-24 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Overview
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold">
            Three Documented Cases
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <div
              key={c.anchor}
              className="bg-background border border-dpa-border p-8 flex flex-col"
            >
              {/* Top */}
              <div className="mb-6">
                <p className="text-teal text-xs font-bold uppercase tracking-widest">
                  Client Type
                </p>
                <p className="text-navy font-semibold text-base mt-1">
                  {c.clientType}
                </p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Fleet: {c.fleetSize}
                </p>
              </div>

              {/* Challenge */}
              <div className="mb-6 flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                  Primary Challenge
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {c.challenge}
                </p>
              </div>

              {/* Bottom */}
              <div className="pt-6 border-t border-dpa-border mt-auto">
                <span className="inline-block bg-teal text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 mb-4">
                  {c.badge}
                </span>
                <div>
                  <a
                    href={c.anchor}
                    className="inline-flex border border-teal text-teal text-xs font-semibold px-5 py-2 hover:bg-teal hover:text-white transition-colors"
                  >
                    View Case
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
