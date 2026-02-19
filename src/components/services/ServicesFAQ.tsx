import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you replace the statutory responsibility of the DPA?",
    a: "No. I provide administrative and documentation support only. Statutory responsibility under ISM Code remains with the designated DPA, Master, and Company. My role is to organize, track, and prepare — not to authorize or certify.",
  },
  {
    q: "How do you manage confidential vessel documentation?",
    a: "All vessel documentation is handled through secure, access-controlled cloud storage. Files are organized per vessel with client-authorized access only. No documentation is shared outside the agreed workflow.",
  },
  {
    q: "How quickly do you respond to urgent inspection requirements?",
    a: "I maintain 24/7 availability for urgent compliance needs. For PSC or flag state inspection support, I prioritize document retrieval and checklist preparation within hours of notification.",
  },
  {
    q: "Can you support multiple vessels across different flags?",
    a: "Yes. I have experience supporting fleets with vessels registered under multiple flag states including Panama, Marshall Islands, Liberia, Bahamas, and Cyprus. Each vessel's compliance requirements are tracked independently.",
  },
  {
    q: "What tools do you use for tracking certificates?",
    a: "I use structured tracking systems including spreadsheet-based dashboards, cloud document management, and compliance calendars with automated expiry alerts. Tools are adapted to the client's existing workflows where possible.",
  },
  {
    q: "How does onboarding work?",
    a: "Onboarding begins with a vessel documentation review and compliance gap assessment. I then establish tracking systems, organize existing records, and set up a reporting cadence. Most vessels are fully onboarded within 1–2 weeks depending on documentation availability.",
  },
];

export default function ServicesFAQ() {
  return (
    <section className="bg-background py-20 md:py-24 border-b border-dpa-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
            FAQ
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">
            Common Questions
          </h2>
          <p className="text-muted-foreground text-base max-w-xl">
            Answers to the most common questions from DPAs and Marine
            Superintendents before engagement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-[#E2E8F0] px-6 [&:not(:last-child)]:border-b"
                style={{ borderBottom: "1px solid #E2E8F0" }}
              >
                <AccordionTrigger className="text-navy font-semibold text-base py-5 hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-[1.8] pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
