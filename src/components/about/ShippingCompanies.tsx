const COMPANIES = [
  {
    name: "MGI",
    full: "Marine Group International",
  },
  {
    name: "KSL",
    full: "KSL Shipping",
  },
  {
    name: "Wah Kwong",
    full: "Wah Kwong Maritime Transport",
  },
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

        {/* Logo strip */}
        <div className="border-t border-dpa-border pt-10 pb-8">
          <div className="flex flex-wrap items-center justify-center gap-0 divide-x divide-dpa-border">
            {COMPANIES.map((company) => (
              <div
                key={company.name}
                className="flex flex-col items-center justify-center px-16 py-6"
              >
                {/* Monochrome navy logotype treatment */}
                <span className="text-navy font-bold text-2xl tracking-[0.12em] uppercase opacity-60 select-none">
                  {company.name}
                </span>
                <span className="text-muted-foreground text-xs mt-1 tracking-wide">
                  {company.full}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-muted-foreground text-xs mt-4 max-w-xl mx-auto leading-relaxed">
          Logos displayed for reference of professional association and support
          experience.
        </p>
      </div>
    </section>
  );
}
