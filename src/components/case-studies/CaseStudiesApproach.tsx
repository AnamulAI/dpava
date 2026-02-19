import { BarChart3, Handshake, FolderOpen, ClipboardCheck } from "lucide-react";

const PILLARS = [
  {
    step: "01",
    label: "Track",
    icon: <BarChart3 size={28} strokeWidth={1.5} />,
    description:
      "Certificate deadlines, survey windows, and equipment service records monitored across all assigned vessels.",
  },
  {
    step: "02",
    label: "Coordinate",
    icon: <Handshake size={28} strokeWidth={1.5} />,
    description:
      "Renewal filings, vendor servicing, class surveyor liaison, and flag state submissions organized and followed through.",
  },
  {
    step: "03",
    label: "Document",
    icon: <FolderOpen size={28} strokeWidth={1.5} />,
    description:
      "SMS procedures, ISM amendments, drill records, and inspection checklists maintained in structured, audit-ready format.",
  },
  {
    step: "04",
    label: "Report",
    icon: <ClipboardCheck size={28} strokeWidth={1.5} />,
    description:
      "Regular compliance status updates provided to DPA, management, and owners to maintain full visibility.",
  },
];

export default function CaseStudiesApproach() {
  return (
    <section className="bg-navy-deep py-20 md:py-24 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Framework
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Structured Approach to Compliance Support
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Every case is handled using the same disciplined four-pillar
            framework — ensuring consistency across vessel types and flag states.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {PILLARS.map((p, idx) => (
            <div
              key={p.label}
              className="relative p-8 border border-white/10 hover:border-teal/40 hover:bg-white/[0.02] transition-colors duration-200"
            >
              {idx < PILLARS.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-8 bottom-8 w-px bg-white/15 z-10" />
              )}
              <p className="text-teal text-xs font-bold uppercase tracking-widest mb-4">
                {p.step} — {p.label}
              </p>
              <div className="text-teal mb-4">{p.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3">{p.label}</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
