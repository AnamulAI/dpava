const WA_LINK = "https://wa.me/88017414688828";

const PROOF_CHIPS = [
  "8+ Years Experience",
  "26+ Vessels Supported",
  "24/7 Support Available",
];

export default function Hero() {
  return (
    <section className="bg-background py-20 md:py-28 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
              Maritime Compliance Support
            </p>
            <h1 className="text-navy text-4xl md:text-5xl font-bold leading-tight mb-6">
              Professional Remote Marine Compliance Support
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              Supporting DPA, ADPA, and Marine Superintendents with certification
              tracking, ISM documentation, and audit readiness — without hiring
              full-time staff.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-white font-semibold px-7 py-3 hover:bg-teal-hover transition-colors text-sm"
              >
                <WhatsAppIcon />
                WhatsApp Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center border border-navy text-navy font-semibold px-7 py-3 hover:bg-navy hover:text-white transition-colors text-sm"
              >
                Contact Us
              </a>
            </div>

            {/* Proof chips */}
            <div className="flex flex-wrap gap-3">
              {PROOF_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="border border-dpa-border text-sm font-medium text-foreground px-4 py-1.5 bg-gray-light"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Silhouette + maritime pattern */}
          <div className="flex justify-center items-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Maritime background pattern */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <MaritimePattern />
              </div>
              {/* Circular frame */}
              <div className="absolute inset-0 rounded-full border-2 border-dpa-border bg-gray-light flex items-center justify-center overflow-hidden">
                <ProfessionalSilhouette />
              </div>
            </div>
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

function ProfessionalSilhouette() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-56 h-56 text-navy opacity-30"
      fill="currentColor"
    >
      {/* Head */}
      <ellipse cx="100" cy="68" rx="28" ry="32" />
      {/* Shoulders / body */}
      <path d="M40 160 C40 120 70 108 100 108 C130 108 160 120 160 160 L160 200 L40 200 Z" />
      {/* Uniform collar detail */}
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
      {/* Anchors repeated */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 60 + col * 140;
        const y = 60 + row * 140;
        return (
          <g key={i} transform={`translate(${x - 20},${y - 28})`}>
            {/* Anchor ring */}
            <circle cx="20" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
            {/* Anchor shaft */}
            <line x1="20" y1="14" x2="20" y2="48" stroke="currentColor" strokeWidth="3" />
            {/* Anchor crossbar */}
            <line x1="8" y1="22" x2="32" y2="22" stroke="currentColor" strokeWidth="3" />
            {/* Anchor flukes */}
            <path d="M8 48 Q2 44 4 38" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M32 48 Q38 44 36 38" fill="none" stroke="currentColor" strokeWidth="3" />
            <line x1="4" y1="48" x2="36" y2="48" stroke="currentColor" strokeWidth="3" />
          </g>
        );
      })}
    </svg>
  );
}
