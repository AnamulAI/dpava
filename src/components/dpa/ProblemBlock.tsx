import { AlertTriangle, Clock, Anchor, FileText } from "lucide-react";

const PROBLEMS = [
  {
    icon: <AlertTriangle size={32} />,
    title: "Expiring Certificates",
    description:
      "Certificate renewals missed due to poor tracking risk flag state detentions and PSC inspection delays.",
  },
  {
    icon: <FileText size={32} />,
    title: "Audit Documentation Burden",
    description:
      "Preparing SMS, ISM records, and drill logs for vetting inspections consumes disproportionate crew time.",
  },
  {
    icon: <Anchor size={32} />,
    title: "LSA/FFA Coordination",
    description:
      "Managing life-saving and fire-fighting appliance service schedules across multiple vendors is complex and error-prone.",
  },
  {
    icon: <Clock size={32} />,
    title: "SMS/ISM Update Backlog",
    description:
      "Continuous ISM amendments, circulars, and flag updates pile up and rarely get addressed proactively.",
  },
];

export default function ProblemBlock() {
  return (
    <section className="bg-gray-light py-20 md:py-24 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-0">
            Compliance Pressure Never Stops.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="bg-background border border-[#E2E8F0] p-8"
            >
              <div className="text-teal mb-5">{p.icon}</div>
              <h3 className="text-navy font-semibold text-base mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground font-medium text-base">
          Compliance should be organized, proactive, and stress-free.
        </p>
      </div>
    </section>
  );
}
