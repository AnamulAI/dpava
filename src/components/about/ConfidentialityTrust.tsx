import { ShieldCheck, Lock, UserCheck, BookOpen } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: <ShieldCheck size={20} />,
    label: "Secure document management",
  },
  {
    icon: <Lock size={20} />,
    label: "Controlled data access",
  },
  {
    icon: <UserCheck size={20} />,
    label: "Client-authorized processes",
  },
  {
    icon: <BookOpen size={20} />,
    label: "Professional compliance standards",
  },
];

export default function ConfidentialityTrust() {
  return (
    <section className="bg-gray-light py-20 md:py-24 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
            Trust & Responsibility
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold max-w-2xl">
            Confidentiality & Professional Responsibility
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — prose */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-base leading-[1.8]">
              All vessel documentation is handled with strict cloud storage
              discipline. Files are organised in access-controlled environments,
              shared only with client-authorised personnel, and managed according
              to clearly defined data protocols. No documentation leaves the
              agreed storage structure without explicit client approval.
            </p>
            <p className="text-muted-foreground text-base leading-[1.8]">
              DPA Virtual Assistant operates in an administrative support
              capacity. We do not replace or substitute the statutory authority
              of the Master, Flag State, Classification Society, or the
              designated DPA. All decisions relating to ship safety management
              remain with the appropriate responsible parties.
            </p>
          </div>

          {/* Right — flat icon-list card */}
          <div className="border border-[#E2E8F0] bg-background p-8">
            <p className="text-teal text-xs font-bold uppercase tracking-widest mb-6">
              Our Commitments
            </p>
            <ul className="space-y-5">
              {TRUST_ITEMS.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="text-teal mt-0.5 shrink-0">{item.icon}</span>
                  <span className="text-navy font-medium text-sm">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
