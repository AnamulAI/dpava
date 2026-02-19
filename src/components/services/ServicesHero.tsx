import { ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/88017414688828";

export default function ServicesHero() {
  return (
    <section className="bg-background py-20 md:py-28 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left — Text */}
          <div>
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-5">
              Services
            </p>
            <h1 className="text-navy text-4xl md:text-5xl font-bold leading-[1.1] mb-5 max-w-lg">
              Maritime Compliance Support Services
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4 max-w-[540px]">
              Structured administrative and compliance support tailored for DPAs
              and Marine Superintendents.
            </p>
            <p className="text-muted-foreground text-base leading-[1.8] mb-10 max-w-[480px]">
              Choose the level of support that fits your fleet's compliance and
              operational requirements.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-white font-semibold px-8 py-4 hover:bg-teal-hover transition-colors text-base"
              >
                <WhatsAppIcon />
                WhatsApp Now
                <ArrowRight size={16} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center border border-navy text-navy font-semibold px-7 py-3 hover:bg-navy hover:text-white transition-colors text-sm"
              >
                Contact Page
              </a>
            </div>
          </div>

          {/* Right — Stat card */}
          <div className="border border-[#E2E8F0] p-10 flex flex-col gap-8">
            {[
              {
                value: "3",
                label: "Service Tiers",
                desc: "Structured support levels for every fleet size",
              },
              {
                value: "26+",
                label: "Vessels Supported",
                desc: "Compliance experience across diverse vessel types",
              },
              {
                value: "24/7",
                label: "Availability",
                desc: "Global timezone coverage for urgent requirements",
              },
            ].map((stat) => (
              <div key={stat.label} className="flex items-start gap-6">
                <div className="shrink-0">
                  <span className="text-teal text-3xl font-bold leading-none">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <p className="text-navy font-bold text-sm mb-1">
                    {stat.label}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
