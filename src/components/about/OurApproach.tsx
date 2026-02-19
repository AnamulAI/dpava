import { LayoutGrid, Bell, MessageSquare } from "lucide-react";

const COLUMNS = [
  {
    icon: <LayoutGrid size={32} />,
    title: "Structured Systems",
    description:
      "We implement organised tracking and reporting workflows so that no deadline, certificate, or audit action falls through the cracks.",
  },
  {
    icon: <Bell size={32} />,
    title: "Proactive Monitoring",
    description:
      "Certificate renewals, survey windows, and compliance deadlines are monitored continuously — well before issues arise.",
  },
  {
    icon: <MessageSquare size={32} />,
    title: "Clear Communication",
    description:
      "Regular status updates and responsive support across time zones keep your team informed and audit-ready at all times.",
  },
];

export default function OurApproach() {
  return (
    <section className="bg-navy-deep py-20 md:py-24 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Our Approach
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
            How We Work
          </h2>
        </div>

        <div className="relative grid sm:grid-cols-1 lg:grid-cols-3 gap-0">
          {COLUMNS.map((col, idx) => (
            <div
              key={col.title}
              className="relative flex flex-col items-start p-8 border border-white/10 transition-colors duration-200 hover:border-teal/40 hover:bg-white/[0.02]"
            >
              {/* Vertical divider on non-last columns (desktop) */}
              {idx < COLUMNS.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-8 bottom-8 w-px bg-white/15 z-10" />
              )}

              <div className="text-teal-hover mb-5 [&>svg]:w-8 [&>svg]:h-8">
                {col.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-3">{col.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {col.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
