import logoMgi from "@/assets/logo-mgi.webp";
import logoKsl from "@/assets/logo-ksl.webp";
import logoWahKwong from "@/assets/logo-wahkwong.webp";

const COMPANIES = [
  { name: "MGI", full: "Meghna Group of Industries", logo: logoMgi },
  { name: "KSL", full: "Karim Shipping Lines Ltd.", logo: logoKsl },
  { name: "Wah Kwong", full: "Wah Kwong Maritime Transport Holdings Limited", logo: logoWahKwong },
];

export default function ShippingCompanies() {
  return (
    <section className="bg-background py-16 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Industry Experience
          </p>
          <h2 className="text-navy text-2xl md:text-3xl font-bold">
            Experience Supporting Recognised Shipping Companies
          </h2>
        </div>

        <div className="border-t border-dpa-border pt-10 pb-8">
          <div className="flex flex-wrap items-center justify-center gap-0 divide-x divide-dpa-border">
            {COMPANIES.map((company) => (
              <div
                key={company.name}
                className="flex flex-col items-center justify-center px-12 md:px-20 py-8"
              >
                <img
                  src={company.logo}
                  alt={company.full}
                  className="h-16 md:h-20 max-w-[200px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground text-[10px] mt-4 max-w-xl mx-auto leading-relaxed">
          Logos displayed for reference of professional association and support
          experience.
        </p>
      </div>
    </section>
  );
}
