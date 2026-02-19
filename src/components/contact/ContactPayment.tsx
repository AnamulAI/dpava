const PAYMENT_METHODS = [
  {
    name: "Payoneer",
    desc: "Global payment platform for freelancers and businesses.",
  },
  {
    name: "Wise",
    desc: "International bank transfer with mid-market exchange rates.",
  },
];

export default function ContactPayment() {
  return (
    <section className="bg-gray-light py-20 md:py-24 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
            Billing
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-3">
            Payment Methods
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Payment details are shared after service confirmation.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {PAYMENT_METHODS.map((method) => (
              <div
                key={method.name}
                className="bg-background border border-dpa-border p-8 flex flex-col gap-3"
              >
                {/* Left accent */}
                <div className="w-1 h-8 bg-teal self-start" />
                <h3 className="text-navy font-bold text-lg">{method.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {method.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-xs mt-8 leading-relaxed">
            * Payment details shared after service confirmation. No upfront
            payment is required before a support plan is agreed upon.
          </p>
        </div>
      </div>
    </section>
  );
}
