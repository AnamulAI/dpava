import { Check } from "lucide-react";

const WA_LINK = "https://wa.me/88017414688828";

const packages = [
  {
    title: "Certification Management",
    description:
      "Full oversight of statutory and class certificates, renewal tracking, survey coordination, and documentation visibility.",
    features: [
      "Certificate tracking & expiry alerts",
      "Survey scheduling coordination",
      "Flag state renewal filings",
      "Monthly compliance status report",
    ],
    price: "$149",
    highlight: false,
    badges: [],
  },
  {
    title: "SMS / ISM Support",
    description:
      "Ongoing maintenance of Safety Management System and ISM documentation to keep your fleet audit-ready.",
    features: [
      "SMS policy & procedure updates",
      "ISM amendment management",
      "Drill planning & record maintenance",
      "Internal audit preparation support",
    ],
    price: "$199",
    highlight: false,
    badges: [],
  },
  {
    title: "Operational Compliance Support",
    description:
      "Comprehensive compliance support combining certification management, ISM documentation, and operational coordination.",
    features: [
      "All Certification Management features",
      "All SMS / ISM Support features",
      "LSA / FFA servicing coordination",
      "Vetting & PSC inspection readiness",
      "Vendor coordination support",
    ],
    price: "$249",
    highlight: true,
    badges: ["MOST POPULAR", "ALL-IN-ONE"],
  },
];

export default function ServicePackages() {
  return (
    <section className="bg-gray-light py-20 md:py-24 border-b border-dpa-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
            Core Packages
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold">
            Choose Your Support Level
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-background flex flex-col"
              style={{
                border: pkg.highlight
                  ? "3px solid hsl(var(--teal))"
                  : "1px solid hsl(var(--dpa-border))",
                backgroundColor: pkg.highlight
                  ? "hsl(var(--teal) / 0.03)"
                  : undefined,
              }}
            >
              <div className="p-8 flex flex-col flex-1">
                {/* Badge row */}
                {pkg.badges.length > 0 && (
                  <div className="flex gap-2 mb-5">
                    <span className="bg-teal text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                      {pkg.badges[0]}
                    </span>
                    <span className="bg-navy text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                      {pkg.badges[1]}
                    </span>
                  </div>
                )}

                <h3 className="text-navy font-extrabold text-xl mb-3">
                  {pkg.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check
                        size={15}
                        className="text-teal mt-0.5 shrink-0"
                        strokeWidth={2.5}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="border-t border-dpa-border pt-6 mb-6">
                  <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">
                    Starts from
                  </p>
                  <p className="text-navy text-3xl font-bold">
                    {pkg.price}
                    <span className="text-sm font-normal text-muted-foreground ml-2">
                      per vessel / month
                    </span>
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    pkg.highlight
                      ? "inline-flex items-center justify-center gap-2 bg-teal text-white font-semibold px-6 py-3 hover:bg-teal-hover transition-colors text-sm"
                      : "inline-flex items-center justify-center border border-navy text-navy font-semibold px-6 py-3 hover:bg-navy hover:text-white transition-colors text-sm"
                  }
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
