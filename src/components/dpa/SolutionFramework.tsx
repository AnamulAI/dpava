import { Search, Users, FileCheck, BarChart3 } from "lucide-react";

const STEPS = [
  {
    icon: <Search size={28} />,
    step: "01",
    title: "Track",
    description: "Monitor all certificates, surveys, and statutory deadlines across your fleet in one structured system.",
  },
  {
    icon: <Users size={28} />,
    step: "02",
    title: "Coordinate",
    description: "Manage servicing appointments, class surveyors, and approved vendors with clear accountability.",
  },
  {
    icon: <FileCheck size={28} />,
    step: "03",
    title: "Document",
    description: "Maintain SMS updates, ISM amendments, drill records, and audit trails — always current.",
  },
  {
    icon: <BarChart3 size={28} />,
    step: "04",
    title: "Report",
    description: "Deliver structured compliance visibility to owners, managers, and flag state as required.",
  },
];

export default function SolutionFramework() {
  return (
    <section className="bg-navy-deep py-20 md:py-24 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Our Methodology
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
            Our Audit-Ready Compliance System™
          </h2>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {STEPS.map((step, idx) => (
            <div
              key={step.step}
              className={`relative flex flex-col items-start p-8 border-t border-b border-l border-white/10 ${
                idx === STEPS.length - 1 ? "border-r border-white/10" : "border-r border-white/10"
              }`}
            >
              {/* Vertical divider accent for non-last items (desktop) */}
              {idx < STEPS.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-8 bottom-8 w-px bg-white/15 z-10" />
              )}

              <div className="text-teal-hover mb-5">{step.icon}</div>
              <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-1">
                Step {step.step}
              </span>
              <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
