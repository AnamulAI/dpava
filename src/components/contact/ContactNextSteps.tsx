const STEPS = [
  {
    number: "1",
    title: "Review",
    desc: "Your request is reviewed within 24 hours.",
  },
  {
    number: "2",
    title: "Clarification",
    desc: "We may request additional vessel details if needed.",
  },
  {
    number: "3",
    title: "Proposal",
    desc: "A structured support plan is shared.",
  },
];

export default function ContactNextSteps() {
  return (
    <section className="bg-background py-20 md:py-24 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
            Process
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-12">
            What Happens Next?
          </h2>

          <div className="grid md:grid-cols-3 gap-0">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className={`p-8 border border-dpa-border flex flex-col gap-4 ${
                  i < STEPS.length - 1 ? "md:border-r-0" : ""
                }`}
              >
                {/* Step number */}
                <div className="flex items-center gap-4">
                  <span className="text-teal text-3xl font-bold leading-none">
                    {step.number}
                  </span>
                  <div className="flex-1 h-px bg-dpa-border" />
                </div>
                <h3 className="text-navy font-bold text-base">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
