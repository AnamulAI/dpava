import { Award, ClipboardCheck, FolderOpen, Handshake, BarChart3, ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/88017414688828";

const categories = [
  {
    icon: Award,
    title: "Certification Oversight",
    items: [
      "Statutory certificate tracking",
      "Expiry alerts & renewal scheduling",
      "Survey planning coordination",
      "Flag state renewal filings",
      "Class certificate management",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Audit Preparation",
    items: [
      "PSC inspection readiness",
      "Vetting preparation support",
      "Drill record review",
      "Internal audit documentation",
      "Deficiency response tracking",
    ],
  },
  {
    icon: FolderOpen,
    title: "Documentation Control",
    items: [
      "SMS / ISM policy updates",
      "ISM amendment logging",
      "IMO circulars & policy revisions",
      "Vessel record maintenance",
      "New takeover documentation",
    ],
  },
  {
    icon: Handshake,
    title: "Vendor Coordination",
    items: [
      "LSA / FFA servicing arrangement",
      "Class surveyor liaison",
      "Approved service provider tracking",
      "PMS support coordination",
      "Port agent coordination support",
    ],
  },
  {
    icon: BarChart3,
    title: "Compliance Reporting",
    items: [
      "Monthly compliance dashboards",
      "Flag state reporting",
      "Owner / manager status updates",
      "Deficiency tracking reports",
      "Compliance calendar management",
    ],
  },
];

export default function ServiceScope() {
  return (
    <section className="bg-gray-light py-20 md:py-24 border-b border-dpa-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
            What's Included
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold">
            Detailed Service Scope
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="bg-background border border-[#E2E8F0] p-8"
              >
                <Icon size={28} className="text-teal mb-5" strokeWidth={1.5} />
                <h3 className="text-navy font-extrabold text-base mb-4">
                  {cat.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="text-teal font-bold mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* 6th card — CTA */}
          <div className="bg-navy border border-navy p-8 flex flex-col justify-between">
            <div>
              <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
                Custom Scope
              </p>
              <h3 className="text-white font-extrabold text-base mb-4">
                Need a Tailored Compliance Plan?
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Send your vessel count and requirements. A structured support
                proposal will be prepared within 24 hours.
              </p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal text-white font-semibold px-6 py-3 hover:bg-teal-hover transition-colors text-sm mt-8"
            >
              Get a Quote
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
