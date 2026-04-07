import aboutHeroBg from "@/assets/about-hero-bg.jpg";

const PROOF_CHIPS = [
  "8+ Years Maritime Experience",
  "Supported 26+ Vessels",
  "24/7 Support Availability",
];

export default function AboutHero() {
  return (
    <section className="relative bg-background py-20 md:py-28 border-b border-dpa-border overflow-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutHeroBg})`, filter: "blur(12px)", transform: "scale(1.05)" }}
        aria-hidden="true"
      />
      {/* Dark navy overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(11,31,59,0.78)" }} aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
              About
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-[1.1] mb-4 max-w-lg">
              N. Shahdat
            </h1>
            <p className="text-teal text-base font-semibold mb-2 tracking-wide">
              Maritime Compliance &amp; Certification Support Specialist
            </p>
            <p className="text-white/55 text-sm mb-6 tracking-wide">
              Based in Bangladesh | Supporting Global Maritime Operations
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-[540px]">
              Hi, I'm N. Shahdat — a maritime professional with over 8 years of
              experience supporting vessel operations, certification management,
              audit documentation, and compliance workflows.
            </p>

            {/* Proof chips */}
            <div className="flex flex-wrap gap-3">
              {PROOF_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="border border-white/20 text-white/60 text-sm font-medium px-4 py-1.5"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Circular headshot placeholder */}
          <div className="flex justify-center items-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <MaritimePattern />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-teal bg-white/10 flex items-center justify-center overflow-hidden">
                <ProfessionalSilhouette />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfessionalSilhouette() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-56 h-56 text-white opacity-30"
      fill="currentColor"
    >
      <ellipse cx="100" cy="68" rx="28" ry="32" />
      <path d="M40 160 C40 120 70 108 100 108 C130 108 160 120 160 160 L160 200 L40 200 Z" />
      <path
        d="M85 108 L100 130 L115 108"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}

function MaritimePattern() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full text-teal"
      fill="currentColor"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 60 + col * 140;
        const y = 60 + row * 140;
        return (
          <g key={i} transform={`translate(${x - 20},${y - 28})`}>
            <circle cx="20" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
            <line x1="20" y1="14" x2="20" y2="48" stroke="currentColor" strokeWidth="3" />
            <line x1="8" y1="22" x2="32" y2="22" stroke="currentColor" strokeWidth="3" />
            <path d="M8 48 Q2 44 4 38" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M32 48 Q38 44 36 38" fill="none" stroke="currentColor" strokeWidth="3" />
            <line x1="4" y1="48" x2="36" y2="48" stroke="currentColor" strokeWidth="3" />
          </g>
        );
      })}
    </svg>
  );
}
