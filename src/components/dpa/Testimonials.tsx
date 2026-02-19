const TESTIMONIALS = [
  {
    quote:
      "Working with DPA Virtual Assistant transformed how we manage compliance across our fleet. Certificate tracking is now systematic, and we no longer scramble before PSC inspections. The team is responsive, professional, and genuinely understands the maritime regulatory environment.",
    name: "Capt. R. Mendoza",
    role: "Fleet Manager",
    country: "Philippines",
  },
  {
    quote:
      "Our ISM documentation was in a poor state when we engaged DPA Virtual Assistant. Within two months, every procedure was updated to current IMO standards, drills were being logged correctly, and our internal audit passed without a single non-conformity. I highly recommend their service.",
    name: "K. Eriksson",
    role: "Designated Person Ashore (DPA)",
    country: "Sweden",
  },
  {
    quote:
      "As a small shipowner managing three bulk carriers, hiring a full-time DPA was not commercially viable. DPA Virtual Assistant gives us exactly the compliance support we need, at the right cost. They handle renewals, coordinate with flag state, and keep us audit-ready at all times.",
    name: "H. Al-Rashid",
    role: "Ship Owner & Director",
    country: "United Arab Emirates",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-navy py-20 md:py-24 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Client Testimonials
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Trusted by Maritime Professionals
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-navy-deep border border-white/10 border-l-4 border-l-teal p-8 flex flex-col"
            >
              {/* Decorative quotation mark */}
              <div className="text-6xl text-teal/30 font-serif leading-none mb-2 select-none">
                "
              </div>
              <p className="text-white/80 text-base leading-relaxed mb-8 flex-1 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-white/10 pt-5">
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-white/50 text-xs mt-1">{t.role}</p>
                <p className="text-teal text-xs mt-0.5 font-medium">{t.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
