export default function BlogHero() {
  return (
    <section className="relative py-20 md:py-28 border-b border-dpa-border overflow-hidden bg-gray-light">
      {/* Abstract maritime art — light decorative */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ filter: "blur(10px)" }}
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={i * 34}
              x2="1200"
              y2={i * 34}
              stroke="hsl(var(--teal))"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}
          {[100, 200, 300, 400, 500].map((r, i) => (
            <path
              key={`arc${i}`}
              d={`M ${600 - r} 500 A ${r} ${r} 0 0 1 ${600 + r} 500`}
              fill="none"
              stroke="hsl(var(--teal))"
              strokeWidth="1.2"
              opacity={0.2 - i * 0.025}
            />
          ))}
          <g transform="translate(900,200)" opacity="0.15">
            <circle r="70" fill="none" stroke="hsl(var(--navy))" strokeWidth="0.8" />
            <circle r="40" fill="none" stroke="hsl(var(--navy))" strokeWidth="0.5" />
            <line x1="0" y1="-75" x2="0" y2="75" stroke="hsl(var(--navy))" strokeWidth="0.8" />
            <line x1="-75" y1="0" x2="75" y2="0" stroke="hsl(var(--navy))" strokeWidth="0.8" />
          </g>
          <path d="M 0 400 Q 300 300 600 400 T 1200 400" fill="none" stroke="hsl(var(--navy))" strokeWidth="0.7" opacity="0.1" />
          <path d="M 0 350 Q 300 250 600 350 T 1200 350" fill="none" stroke="hsl(var(--navy))" strokeWidth="0.7" opacity="0.08" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 max-w-3xl">
        <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-5">
          Blog
        </p>
        <h1 className="text-navy text-4xl md:text-5xl font-bold leading-[1.1] max-w-xl mb-5">
          Maritime Compliance Insights
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-[560px] mb-3">
          Practical guidance for DPAs, Marine Superintendents, and ship
          management professionals.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-[560px]">
          In-depth articles on audit readiness, certification tracking, SMS documentation,
          and operational compliance — built from real-world maritime administration experience.
        </p>
      </div>
    </section>
  );
}
