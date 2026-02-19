interface CaseData {
  id: string;
  number: string;
  headline: string;
  clientProfile: string;
  engagementPeriod: string;
  systemApplied: string;
  outcomeBadges: string[];
  challenge: string[];
  action: string[];
  outcome: string[];
  feedback: string;
  attribution: string;
}

const CASES: CaseData[] = [
  {
    id: "case-01",
    number: "CASE STUDY 01",
    headline: "Bulk Carrier Fleet — Certificate Tracking & PSC Readiness",
    clientProfile:
      "DPA managing a bulk carrier fleet across Panama and Marshall Islands flags.",
    engagementPeriod: "6-month ongoing engagement",
    systemApplied: "Audit-Ready Compliance System™",
    outcomeBadges: ["Zero Certificate Lapses", "PSC Ready"],
    challenge: [
      "Multiple statutory certificates approaching expiry with no centralized tracking",
      "Master relied upon for renewal reminders — creating audit risk",
      "Short-notice PSC inspection announced with incomplete documentation folder",
    ],
    action: [
      "Implemented structured certificate tracking dashboard with expiry alert schedule",
      "Centralized all vessel documents into organized, inspection-ready folders",
      "Coordinated renewal filings with flag state and class society",
      "Prepared PSC documentation checklist within 48 hours of inspection notice",
    ],
    outcome: [
      "Zero certificate lapses across 3 vessels during engagement period",
      "Documentation folder passed PSC review with zero observations",
      "Reduced last-minute coordination pressure for DPA and vessel Master by over 60%",
    ],
    feedback:
      "Documentation was organized and inspection-ready within tight timelines. Certificate tracking is now fully under control.",
    attribution: "DPA, Bulk Carrier Owner (Panama / Marshall Islands)",
  },
  {
    id: "case-02",
    number: "CASE STUDY 02",
    headline: "Tanker Operations — SMS Alignment & Internal Audit Preparation",
    clientProfile:
      "Marine Superintendent overseeing tanker operations under Liberia flag.",
    engagementPeriod: "4-week intensive engagement",
    systemApplied: "ISM Documentation Framework",
    outcomeBadges: ["Clean Audit Report", "SMS Aligned"],
    challenge: [
      "SMS documentation not updated in line with three ISM Code revisions",
      "ISM checklists contained outdated procedure references across 14 forms",
      "Internal vetting audit scheduled within six weeks",
    ],
    action: [
      "Conducted full review of existing SMS structure against current ISM Code requirements",
      "Updated all 14 outdated procedures, forms, and checklists",
      "Implemented ISM amendment tracking log for future revisions",
      "Prepared internal audit documentation folder within 3 weeks",
    ],
    outcome: [
      "Internal audit completed with clean observation report — zero non-conformities",
      "SMS now aligned with current ISM Code across all 14 procedures",
      "Amendment tracking system established for ongoing compliance",
    ],
    feedback:
      "The SMS revision was completed efficiently before the audit deadline. Documentation alignment was exactly what we needed.",
    attribution: "Marine Superintendent, Tanker Operator (Liberia)",
  },
  {
    id: "case-03",
    number: "CASE STUDY 03",
    headline: "New Vessel Takeover — Documentation & Servicing Coordination",
    clientProfile:
      "New vessel takeover coordination for a general cargo vessel changing management.",
    engagementPeriod: "2-week handover period",
    systemApplied: "Vessel Takeover Compliance Checklist",
    outcomeBadges: ["Smooth Transition", "No Compliance Gaps"],
    challenge: [
      "Significant documentation gaps at time of handover — 12 items outstanding",
      "No LSA/FFA service records transferred from previous manager",
      "Vendor coordination for servicing had not been initiated",
    ],
    action: [
      "Created comprehensive vessel takeover documentation checklist covering 47 compliance items",
      "Identified and requested all 12 outstanding documents from previous manager",
      "Coordinated LSA/FFA servicing schedules with 3 approved service providers",
      "Established compliance review calendar for the handover period",
    ],
    outcome: [
      "Vessel onboarded with organized compliance records within two weeks",
      "All 12 outstanding items resolved and servicing coordinated on schedule",
      "Smooth transition with zero operational compliance gaps",
    ],
    feedback:
      "The takeover documentation was handled professionally. Everything was organized and no compliance items were missed.",
    attribution: "ADPA, General Cargo Shipping Company (Bahamas)",
  },
];

export default function CaseStudiesDetail() {
  return (
    <section className="border-b border-dpa-border">
      {CASES.map((c, idx) => (
        <div key={c.id} id={c.id}>
          {/* Case number strip */}
          <div className="bg-navy-deep py-3">
            <div className="container mx-auto px-6 flex items-center gap-6">
              <span className="text-white/40 text-xs font-bold uppercase tracking-widest shrink-0">
                {c.number}
              </span>
              <span className="text-white font-bold text-sm md:text-base">
                {c.headline}
              </span>
            </div>
          </div>

          {/* Main content */}
          <div
            className={`py-16 md:py-20 ${idx % 2 === 0 ? "bg-background" : "bg-gray-light"}`}
          >
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                {/* Left — metadata sidebar */}
                <div className="border-l-[3px] border-teal pl-6">
                  <p className="text-teal text-xs font-bold uppercase tracking-widest mb-2">
                    Client Profile
                  </p>
                  <p className="text-navy font-semibold text-sm leading-relaxed mb-2">
                    {c.clientProfile}
                  </p>
                  <p className="text-muted-foreground text-xs mb-6">
                    {c.engagementPeriod}
                  </p>
                  <div className="border-t border-dpa-border mb-6" />
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-semibold">
                    System Applied
                  </p>
                  <span className="inline-block bg-navy text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 mb-6">
                    {c.systemApplied}
                  </span>
                  <div className="border-t border-dpa-border mb-6" />
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-semibold">
                    Key Results
                  </p>
                  <div className="flex flex-col gap-2">
                    {c.outcomeBadges.map((b) => (
                      <span
                        key={b}
                        className="inline-block bg-teal text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 w-fit"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — main content */}
                <div className="space-y-12">
                  {/* Challenge */}
                  <div>
                    <p className="text-foreground text-xs font-extrabold uppercase tracking-widest mb-3">
                      Challenge
                    </p>
                    <ul className="space-y-2">
                      {c.challenge.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                          – {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Taken */}
                  <div>
                    <p className="text-foreground text-xs font-extrabold uppercase tracking-widest mb-3">
                      Action Taken
                    </p>
                    <ul className="space-y-2">
                      {c.action.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-foreground leading-relaxed">
                          <span className="text-teal shrink-0 font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div>
                    <p className="text-foreground text-xs font-extrabold uppercase tracking-widest mb-3">
                      Outcome
                    </p>
                    <ul className="space-y-2">
                      {c.outcome.map((item, i) => (
                        <li key={i} className="text-navy font-medium text-sm leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Client Feedback */}
                  <div className="border-l-[4px] border-teal pl-5 py-1">
                    <p className="text-foreground italic text-sm leading-[1.8]">
                      "{c.feedback}"
                    </p>
                    <p className="text-teal text-xs font-semibold tracking-widest mt-3" style={{ fontVariant: "small-caps" }}>
                      — {c.attribution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
