export default function BlogPostAuthor() {
  return (
    <section className="bg-gray-light py-14 md:py-16 border-b border-dpa-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {/* Author avatar placeholder */}
          <div className="w-20 h-20 shrink-0 border-2 border-teal overflow-hidden flex items-center justify-center bg-background" style={{ borderRadius: "50%" }}>
            <span className="text-navy font-bold text-xl">NS</span>
          </div>

          <div>
            <p className="text-xs text-teal font-bold uppercase tracking-widest mb-1">
              About the Author
            </p>
            <h3 className="text-navy font-bold text-lg mb-2">N. Shahdat</h3>
            <p className="text-muted-foreground text-sm leading-[1.8] mb-4">
              Maritime compliance professional with an MBA in Operations &amp;
              Supply Chain, an LL.M in Maritime Law, and an LL.B. Certified
              through Lloyd's Maritime Institute and London Port Academy.
              Specializing in structured compliance support, audit readiness
              preparation, and documentation control for DPAs, Marine
              Superintendents, and ship management organizations.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "MBA Operations",
                "LL.M Maritime Law",
                "Lloyd's Certified",
                "ISM Auditing",
                "PSC Preparation",
                "SMS Documentation",
                "Certificate Management",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-dpa-border text-muted-foreground text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
