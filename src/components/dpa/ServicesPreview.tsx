const WA_LINK = "https://wa.me/88017414688828";

const SERVICES = [
  {
    title: "Certification Management",
    price: "Starts from $149",
    unit: "per vessel / month",
    description:
      "Full oversight of statutory and class certificates, survey planning, renewal coordination, and flag state correspondence.",
    features: [
      "Certificate expiry tracking & alerts",
      "Survey scheduling coordination",
      "Flag state renewal filings",
      "Monthly compliance status report",
    ],
    highlight: false,
    badge: null,
  },
  {
    title: "SMS / ISM Support",
    price: "Starts from $199",
    unit: "per vessel / month",
    description:
      "Ongoing maintenance of your Safety Management System and ISM documentation to keep your vessel audit-ready at all times.",
    features: [
      "SMS policy & procedure updates",
      "ISM amendment management",
      "Drill planning & record maintenance",
      "Internal audit preparation support",
    ],
    highlight: false,
    badge: null,
  },
  {
    title: "Operational Compliance Support",
    price: "Starts from $249",
    unit: "per vessel / month",
    description:
      "Comprehensive remote DPA support covering certification, documentation, LSA/FFA coordination, and vetting preparation.",
    features: [
      "All Certification Management features",
      "All SMS/ISM Support features",
      "LSA/FFA servicing coordination",
      "Vetting & PSC inspection readiness",
    ],
    highlight: true,
    badge: "All-in-One",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-background py-20 md:py-24 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold">
            Flexible Support Packages
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className={`border p-8 flex flex-col ${
                svc.highlight
                  ? "border-teal bg-teal/[0.03]"
                  : "border-dpa-border"
              }`}
              style={svc.highlight ? { borderWidth: "3px" } : undefined}
            >
              {/* Badge row */}
              <div className="h-7 mb-5 flex gap-2 items-center">
              {svc.highlight && (
                  <span className="bg-teal text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 text-center">
                    MOST POPULAR
                  </span>
                )}
                {svc.badge && (
                  <span className="bg-navy text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                    {svc.badge}
                  </span>
                )}
              </div>

              <h3 className="text-navy text-xl font-bold mb-2">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {svc.description}
              </p>

              <ul className="space-y-2 mb-8 flex-1">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-teal mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="border-t border-dpa-border pt-5 mt-auto">
                <p className="text-navy text-2xl font-bold"><span className="text-base font-semibold">Starts from </span>{svc.price.replace("Starts from ", "")}</p>
                <p className="text-muted-foreground text-xs mt-1">{svc.unit}</p>
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex justify-center items-center font-semibold text-sm px-5 py-2.5 transition-colors ${
                  svc.highlight
                    ? "bg-teal text-white hover:bg-teal-hover"
                    : "border border-navy text-navy hover:bg-navy hover:text-white"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/services"
            className="inline-flex items-center text-teal font-semibold text-sm hover:text-teal-hover transition-colors"
          >
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
}
