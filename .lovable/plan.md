
## Services Page — DPA Virtual Assistant

### Overview

A new `/services` route built from 6 dedicated section components inside `src/components/services/`, assembled in `src/pages/Services.tsx`, and registered as a new route in `src/App.tsx`. The page reuses the existing Header and Footer, and mirrors the exact design system — same color tokens, spacing rhythm, flat enterprise aesthetic, and typography scale as Home and About pages.

---

### New Files

```text
src/
  pages/
    Services.tsx                         ← page assembly
  components/
    services/
      ServicesHero.tsx                   ← Section 1
      ServicePackages.tsx                ← Section 2 (3 core cards)
      AllInOnePackage.tsx                ← Section 3 (highlighted full-width block)
      ServiceScope.tsx                   ← Section 4 (grid of categories)
      ServicesFAQ.tsx                    ← Section 5 (accordion)
      ServicesCTA.tsx                    ← Section 6 (final CTA)
```

**Modified files:**
- `src/App.tsx` — add `<Route path="/services" element={<Services />} />`

---

### Section 1 — Hero (`ServicesHero.tsx`)

Mirrors `Hero.tsx` structure without the headshot column — single centered or left-biased layout since there is no profile image needed for a services page:

- Two-column layout: left = text, right = a compact stat block (proof strip)
- Label chip: `"Services"` teal uppercase tracking-widest
- Headline: `"Maritime Compliance Support Services"` — `text-4xl md:text-5xl font-bold leading-[1.1] text-navy max-w-lg`
- Subheadline: `"Structured administrative and compliance support tailored for DPAs and Marine Superintendents."` — `max-w-[540px] text-muted-foreground text-lg leading-relaxed`
- Intro paragraph: `"Choose the level of support that fits your fleet's compliance and operational requirements."` — `text-base text-muted-foreground leading-[1.8] max-w-[480px]`
- CTA buttons (same classes as Hero.tsx):
  - WhatsApp Now: `bg-teal text-white px-8 py-4 text-base font-semibold` + `WhatsAppIcon` + `ArrowRight`
  - Contact Page: `border border-navy text-navy px-7 py-3 font-semibold text-sm hover:bg-navy hover:text-white`
- Right column: a flat bordered stat card (`border border-[#E2E8F0] p-8`) with 3 trust indicators:
  - "3 Service Tiers" — structured support levels
  - "26+ Vessels" — compliance experience
  - "24/7 Availability" — global timezone coverage
  Each stat: teal large number/label, muted description below
- `bg-background py-20 md:py-28 border-b border-dpa-border`

---

### Section 2 — Core Service Packages (`ServicePackages.tsx`)

Closely mirrors `ServicesPreview.tsx` but expanded with the additional vendor coordination feature on the highlighted card and the Operational Compliance card having 5 features:

- Label chip: `"Core Packages"` teal uppercase
- Heading: `"Choose Your Support Level"` — `text-navy text-3xl md:text-4xl font-bold`
- 3-column card grid (`grid md:grid-cols-3 gap-6`), same card structure as `ServicesPreview.tsx`:

**Card 1 — Certification Management**
- `border border-dpa-border p-8 flex flex-col`
- No badge row
- Features (4): Certificate tracking & expiry alerts / Survey scheduling coordination / Flag state renewal filings / Monthly compliance status report
- Price: `Starts from $149` per vessel / month
- CTA: `border border-navy text-navy` outline button "Get Started" → WA link

**Card 2 — SMS / ISM Support**
- `border border-dpa-border p-8 flex flex-col`
- No badge row
- Features (4): SMS policy & procedure updates / ISM amendment management / Drill planning & record maintenance / Internal audit preparation support
- Price: `Starts from $199` per vessel / month
- CTA: outline button

**Card 3 — Operational Compliance Support** (highlighted)
- `border-teal bg-teal/[0.03] p-8 flex flex-col` with `style={{ borderWidth: '3px' }}`
- Badge row: teal "MOST POPULAR" badge + navy "ALL-IN-ONE" badge (same pattern as ServicesPreview)
- Features (5): All Certification Management features / All SMS/ISM Support features / LSA/FFA servicing coordination / Vetting & PSC inspection readiness / Vendor coordination support
- Price: `Starts from $249` per vessel / month
- CTA: `bg-teal text-white hover:bg-teal-hover` filled button

---

### Section 3 — All-In-One Package (`AllInOnePackage.tsx`)

A single prominent full-width block — visually distinct from the 3-card grid above.

- `bg-navy-deep py-16 md:py-20 border-b border-white/10`
- Two-column layout: left = text, right = price+CTA
- Left:
  - Label chip: `"Complete Solution"` in teal uppercase
  - Heading: `"Complete Fleet Compliance Support"` — `text-white text-2xl md:text-3xl font-bold`
  - Description: `text-white/60 text-base leading-relaxed max-w-lg` — "A consolidated compliance solution combining certification, documentation, coordination, and reporting into one seamless support structure."
  - Feature list (inline, horizontal tags): cert management + SMS/ISM + LSA/FFA + vetting + vendor + reporting — displayed as small `border border-white/20 text-white/70 text-xs px-3 py-1` chips in a flex-wrap row
  - Multi-vessel note: `text-white/50 text-sm mt-4` — "Multi-vessel discounts available upon discussion."
- Right (centered vertically):
  - `border border-white/20 p-8 text-center`
  - `text-white/50 text-xs uppercase tracking-widest mb-1` — "Starting From"
  - `text-white text-4xl font-bold` — "$299"
  - `text-white/50 text-sm mt-1` — "per vessel / month"
  - WhatsApp CTA button: `bg-teal text-white px-8 py-3.5 font-semibold text-sm hover:bg-teal-hover` with `WhatsAppIcon`
  - Contact link below: `text-white/50 text-xs hover:text-white/70 mt-3 inline-block` — "or Contact Page →"

---

### Section 4 — Detailed Service Scope (`ServiceScope.tsx`)

Grid layout of 5 service categories. Mirrors `ProblemBlock.tsx` card style.

- `bg-gray-light py-20 md:py-24 border-b border-dpa-border`
- Label chip: `"What's Included"` teal uppercase
- Heading: `"Detailed Service Scope"` — `text-navy text-3xl md:text-4xl font-bold`
- `grid sm:grid-cols-2 lg:grid-cols-3 gap-6` (5 cards — last row has 2 cards centered or fills 3rd slot with a "Get a Quote" CTA card)
- Each card: `bg-background border border-[#E2E8F0] p-8`
- Icons from lucide-react (already installed):
  1. **Certification Oversight** — `Award` icon — bullet list: statutory cert tracking, expiry alerts, renewal coordination, survey planning, flag state filing
  2. **Audit Preparation** — `ClipboardCheck` icon — bullet list: PSC inspection readiness, vetting preparation, drill record review, internal audit documentation
  3. **Documentation Control** — `FolderOpen` icon — bullet list: SMS/ISM updates, ISM amendment logging, circulars and policy revisions, record maintenance
  4. **Vendor Coordination** — `Handshake` icon — bullet list: LSA/FFA servicing arrangement, class surveyor liaison, approved service provider tracking, PMS support coordination
  5. **Compliance Reporting** — `BarChart3` icon (already in codebase) — bullet list: monthly compliance dashboards, flag state reporting, ownership/manager updates, deficiency tracking
- Icon color: `text-teal`, `size={28}`, `mb-5`
- Card heading: `text-navy font-extrabold text-base mb-4`
- Bullet items: `flex items-start gap-2 text-sm text-foreground` with teal `✓`

---

### Section 5 — FAQ (`ServicesFAQ.tsx`)

Uses the existing `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` from `@/components/ui/accordion`.

- `bg-background py-20 md:py-24 border-b border-dpa-border`
- Label chip: `"FAQ"` teal uppercase
- Heading: `"Common Questions"` — `text-navy text-3xl md:text-4xl font-bold`
- Subheading: `text-muted-foreground text-base max-w-xl` — "Answers to the most common questions from DPAs and Marine Superintendents before engagement."
- Max-width constrained accordion: `max-w-3xl mx-auto mt-12`
- `<Accordion type="single" collapsible className="w-full">`
- Each `AccordionItem` styled: `border border-[#E2E8F0] mb-3 px-6` (override default `border-b` with explicit border for card-like feel)
- `AccordionTrigger`: `text-navy font-semibold text-base py-5 hover:no-underline`
- `AccordionContent`: `text-muted-foreground text-sm leading-[1.8] pb-5`

6 Questions and answers:

1. **Do you replace the statutory responsibility of the DPA?**
   Answer: No. I provide administrative and documentation support only. Statutory responsibility under ISM Code remains with the designated DPA, Master, and Company. My role is to organize, track, and prepare — not to authorize or certify.

2. **How do you manage confidential vessel documentation?**
   Answer: All vessel documentation is handled through secure, access-controlled cloud storage. Files are organized per vessel with client-authorized access only. No documentation is shared outside the agreed workflow.

3. **How quickly do you respond to urgent inspection requirements?**
   Answer: I maintain 24/7 availability for urgent compliance needs. For PSC or flag state inspection support, I prioritize document retrieval and checklist preparation within hours of notification.

4. **Can you support multiple vessels across different flags?**
   Answer: Yes. I have experience supporting fleets with vessels registered under multiple flag states including Panama, Marshall Islands, Liberia, Bahamas, and Cyprus. Each vessel's compliance requirements are tracked independently.

5. **What tools do you use for tracking certificates?**
   Answer: I use structured tracking systems including spreadsheet-based dashboards, cloud document management, and compliance calendars with automated expiry alerts. Tools are adapted to the client's existing workflows where possible.

6. **How does onboarding work?**
   Answer: Onboarding begins with a vessel documentation review and compliance gap assessment. I then establish tracking systems, organize existing records, and set up a reporting cadence. Most vessels are fully onboarded within 1–2 weeks depending on documentation availability.

---

### Section 6 — Final CTA (`ServicesCTA.tsx`)

Identical structure to `CTABlock.tsx` with updated copy:

- `bg-gray-light py-24 md:py-32 border-b border-dpa-border`
- Label chip: `"Get Started"` teal uppercase
- Heading: `"Ready to Simplify Compliance Management?"` — `text-navy text-3xl md:text-4xl font-bold`
- Body: `"Send your vessel count and service requirements. A tailored support structure will be proposed within 24 hours."` — `text-muted-foreground text-base leading-[1.8]`
- Two buttons (identical classes to `CTABlock.tsx`):
  - WhatsApp Now: `bg-teal text-white px-10 py-4 text-base font-semibold` + `WhatsAppIcon` + `ArrowRight`
  - Contact Page: `border border-navy text-navy px-8 py-3.5 font-semibold text-sm hover:bg-navy hover:text-white`
- `flex flex-wrap justify-center gap-6`

---

### Page Assembly (`src/pages/Services.tsx`)

```tsx
import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicePackages from "@/components/services/ServicePackages";
import AllInOnePackage from "@/components/services/AllInOnePackage";
import ServiceScope from "@/components/services/ServiceScope";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";

const Services = () => (
  <div className="min-h-screen font-sans">
    <Header />
    <main>
      <ServicesHero />
      <ServicePackages />
      <AllInOnePackage />
      <ServiceScope />
      <ServicesFAQ />
      <ServicesCTA />
    </main>
    <Footer />
  </div>
);

export default Services;
```

---

### Route Registration (`src/App.tsx`)

```tsx
import Services from "./pages/Services";
// ...
<Route path="/services" element={<Services />} />
```

---

### Technical Notes

- Zero new dependencies — all icons (`Award`, `ClipboardCheck`, `FolderOpen`, `Handshake`, `BarChart3`, `ArrowRight`) are from `lucide-react` (already installed)
- The Accordion component from `@/components/ui/accordion` is already built and only needs to be imported — the default `border-b` on `AccordionItem` will be overridden via className to produce a card-style FAQ
- Color tokens: `text-navy`, `text-teal`, `bg-teal`, `bg-teal-hover`, `bg-navy-deep`, `bg-gray-light`, `border-dpa-border`, `text-teal-hover` — all defined in `tailwind.config.ts`
- `WhatsAppIcon` SVG is self-contained in each component (same pattern as Hero and CTABlock — no shared utility to avoid breaking existing files)
- Flat design — no shadows, no gradients, no border-radius on structural elements; circular frames only allowed on profile imagery
- The Header's "Services" nav link already points to `/services` — it will resolve and highlight correctly once the route exists
- The "View All Services →" link in `ServicesPreview.tsx` on the Home page already points to `/services` — this will now resolve correctly
