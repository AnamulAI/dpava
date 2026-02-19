import { ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/88017414688828";

export default function CaseStudiesHero() {
  return (
    <section className="relative py-20 md:py-28 border-b border-dpa-border overflow-hidden bg-navy-deep">
      {/* Abstract marine SVG background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ filter: "blur(12px)" }}
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Nautical chart grid lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={i * 32}
              x2="1200"
              y2={i * 32}
              stroke="#14b8a6"
              strokeWidth="0.4"
              opacity="0.25"
            />
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={i * 42}
              y1="0"
              x2={i * 42}
              y2="600"
              stroke="#14b8a6"
              strokeWidth="0.4"
              opacity="0.25"
            />
          ))}
          {/* Diagonal grid lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`d${i}`}
              x1={i * 110 - 200}
              y1="0"
              x2={i * 110 + 400}
              y2="600"
              stroke="#ffffff"
              strokeWidth="0.3"
              opacity="0.12"
            />
          ))}
          {/* Concentric wave arcs — ocean horizon */}
          {[80, 160, 240, 320, 400, 480, 560].map((r, i) => (
            <path
              key={`arc${i}`}
              d={`M ${600 - r} 600 A ${r} ${r} 0 0 1 ${600 + r} 600`}
              fill="none"
              stroke="#14b8a6"
              strokeWidth="1"
              opacity={0.18 - i * 0.015}
            />
          ))}
          {/* Compass rose — center */}
          <g transform="translate(600,280)" opacity="0.22">
            {/* N/S/E/W spokes */}
            <line x1="0" y1="-90" x2="0" y2="90" stroke="#14b8a6" strokeWidth="1.2" />
            <line x1="-90" y1="0" x2="90" y2="0" stroke="#14b8a6" strokeWidth="1.2" />
            {/* Diagonal spokes */}
            <line x1="-64" y1="-64" x2="64" y2="64" stroke="#14b8a6" strokeWidth="0.7" />
            <line x1="64" y1="-64" x2="-64" y2="64" stroke="#14b8a6" strokeWidth="0.7" />
            {/* Outer ring */}
            <circle r="90" fill="none" stroke="#14b8a6" strokeWidth="0.8" />
            <circle r="55" fill="none" stroke="#14b8a6" strokeWidth="0.5" />
            <circle r="20" fill="none" stroke="#14b8a6" strokeWidth="0.5" />
            {/* Cardinal points — simple triangles */}
            <polygon points="0,-95 -6,-75 6,-75" fill="#14b8a6" opacity="0.6" />
            <polygon points="0,95 -6,75 6,75" fill="#14b8a6" opacity="0.4" />
            <polygon points="95,0 75,-6 75,6" fill="#14b8a6" opacity="0.4" />
            <polygon points="-95,0 -75,-6 -75,6" fill="#14b8a6" opacity="0.4" />
          </g>
          {/* Secondary decorative arcs */}
          <path d="M 0 500 Q 300 350 600 500 T 1200 500" fill="none" stroke="#ffffff" strokeWidth="0.6" opacity="0.1" />
          <path d="M 0 450 Q 300 300 600 450 T 1200 450" fill="none" stroke="#ffffff" strokeWidth="0.6" opacity="0.08" />
        </svg>
      </div>

      {/* Deep navy overlay */}
      <div className="absolute inset-0 bg-navy-deep/80" aria-hidden="true" />

      {/* Content */}
      <div className="relative container mx-auto px-6 max-w-3xl">
        <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-5">
          Case Studies
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-[1.1] max-w-xl mb-5">
          Maritime Compliance Case Studies
        </h1>
        <p className="text-white/70 text-lg leading-relaxed max-w-[560px] mb-4">
          Documented compliance engagements demonstrating structured solutions
          delivered across vessel types, flag states, and operational contexts.
        </p>
        <p className="text-white/55 text-base leading-[1.8] max-w-[520px] mb-10">
          Each case reflects disciplined administrative coordination, audit
          readiness preparation, and systematic documentation control.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-teal text-white font-semibold px-8 py-4 hover:bg-teal-hover transition-colors text-base mb-8"
        >
          <WhatsAppIcon />
          Request Support Plan
          <ArrowRight size={16} />
        </a>

        {/* Trust chips */}
        <div className="flex flex-wrap gap-3">
          {["Zero Certificate Lapses", "Clean Audit Reports", "Structured Documentation Control"].map(
            (chip) => (
              <span
                key={chip}
                className="border border-white/20 text-white/60 text-xs font-semibold px-3 py-1"
              >
                {chip}
              </span>
            )
          )}
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
