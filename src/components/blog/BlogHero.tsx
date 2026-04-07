import blogHeroBg from "@/assets/blog-hero-bg.jpg";

export default function BlogHero() {
  return (
    <section className="relative py-20 md:py-28 border-b border-dpa-border overflow-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${blogHeroBg})`, filter: "blur(12px)", transform: "scale(1.05)" }}
        aria-hidden="true"
      />
      {/* Dark navy overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(11,31,59,0.78)" }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-3xl">
        <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-5">
          Blog
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-[1.1] max-w-xl mb-5">
          Maritime Compliance Insights
        </h1>
        <p className="text-white/70 text-lg leading-relaxed max-w-[560px] mb-3">
          Practical guidance for DPAs, Marine Superintendents, and ship
          management professionals.
        </p>
        <p className="text-white/55 text-sm leading-relaxed max-w-[560px]">
          In-depth articles on audit readiness, certification tracking, SMS documentation,
          and operational compliance — built from real-world maritime administration experience.
        </p>
      </div>
    </section>
  );
}
