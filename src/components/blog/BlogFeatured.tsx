export default function BlogFeatured() {
  return (
    <section className="bg-background py-16 md:py-20 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-8">
          Featured Article
        </p>

        <div className="grid md:grid-cols-[1fr_1fr] gap-0 border border-dpa-border">
          {/* Image placeholder */}
          <div className="bg-gray-light flex items-center justify-center min-h-[260px] md:min-h-[320px] border-b md:border-b-0 md:border-r border-dpa-border">
            <div className="text-center px-6">
              <div className="w-16 h-16 border-2 border-dpa-border mx-auto mb-4 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
                  <rect x="3" y="3" width="18" height="18" rx="0" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </div>
              <p className="text-muted-foreground text-xs uppercase tracking-widest">Featured Image</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="inline-block bg-teal text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 w-fit mb-4">
              Audit Preparation
            </span>
            <h2 className="text-navy text-2xl md:text-3xl font-bold leading-tight mb-4">
              Preparing for ISM Audits: A Structured Documentation Approach
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Audit readiness depends on disciplined documentation control. This
              guide covers essential steps for organizing SMS procedures,
              maintaining amendment tracking, and preparing inspection-ready
              folders ahead of internal and external ISM audits.
            </p>
            <div>
              <a
                href="#"
                className="inline-flex border-2 border-teal text-teal text-xs font-semibold px-6 py-2.5 hover:bg-teal hover:text-white transition-colors"
              >
                Read Article
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
