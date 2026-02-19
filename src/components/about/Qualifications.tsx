import { GraduationCap, CheckCircle } from "lucide-react";

const ACADEMIC = [
  "MBA — Operations & Supply Chain Management",
  "PGD — Supply Chain Management",
  "LL.B — Bachelor of Laws",
  "LL.M — Maritime Law",
];

const PROFESSIONAL = [
  "Ship Management — Lloyd's Maritime Institute",
  "Port Management — London Port Academy",
];

const CAPABILITIES = [
  "Assist DPAs & Marine Superintendents with compliance admin",
  "Audit documentation control & filing",
  "Compliance reporting systems management",
  "Certificate renewal monitoring & advance notifications",
  "Inspection readiness preparation",
  "Vendor coordination support (LSA, FFA, class surveyors)",
];

export default function Qualifications() {
  return (
    <>
      {/* Section 5 — Academic & Professional Qualifications */}
      <section className="bg-background py-20 md:py-24 border-b border-dpa-border">
        <div className="container mx-auto px-6">
          <div className="mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
              Education & Training
            </p>
            <h2 className="text-navy text-3xl md:text-4xl font-bold max-w-2xl">
              Academic &amp; Professional Qualifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Academic */}
            <div className="border border-dpa-border p-8">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={18} className="text-teal" />
                <p className="text-teal text-xs font-bold uppercase tracking-widest">
                  Academic Degrees
                </p>
              </div>
              <ul className="space-y-4">
                {ACADEMIC.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-teal mt-0.5 shrink-0" />
                    <span className="text-navy font-medium text-sm leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional */}
            <div className="border border-dpa-border p-8">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={18} className="text-teal" />
                <p className="text-teal text-xs font-bold uppercase tracking-widest">
                  Professional Certifications
                </p>
              </div>
              <ul className="space-y-4">
                {PROFESSIONAL.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-teal mt-0.5 shrink-0" />
                    <span className="text-navy font-medium text-sm leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Practical Capabilities */}
      <section className="bg-gray-light py-20 md:py-24 border-b border-dpa-border">
        <div className="container mx-auto px-6">
          <div className="mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
              Service Scope
            </p>
            <h2 className="text-navy text-3xl md:text-4xl font-bold max-w-2xl">
              Practical Maritime Compliance Capabilities
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-dpa-border border border-dpa-border">
            {CAPABILITIES.map((item) => (
              <div
                key={item}
                className="bg-background px-8 py-7 flex items-start gap-4"
              >
                <CheckCircle size={16} className="text-teal mt-0.5 shrink-0" />
                <span className="text-navy text-sm font-medium leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
