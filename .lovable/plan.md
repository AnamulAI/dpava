
## About Page — DPA Virtual Assistant

### Overview

A new `/about` route built from 5 dedicated section components inside `src/components/about/`, assembled in `src/pages/About.tsx`, and registered as a route in `src/App.tsx`. The page reuses the existing Header and Footer, and mirrors the exact design system — same color tokens, spacing rhythm, flat enterprise aesthetic, and typography scale as the Home page.

---

### New Files

```text
src/
  pages/
    About.tsx                        ← page assembly
  components/
    about/
      AboutHero.tsx                  ← Section 1
      ProfessionalBackground.tsx     ← Section 2
      OurApproach.tsx                ← Section 3
      ConfidentialityTrust.tsx       ← Section 4
      AboutCTA.tsx                   ← Section 5
```

**Modified files:**
- `src/App.tsx` — add `<Route path="/about" element={<About />} />`

---

### Section-by-Section Design

#### Section 1 — Hero Intro (`AboutHero.tsx`)

Mirrors `Hero.tsx` exactly in structure and style:

- Label chip: `"About Us"` in teal uppercase tracking-widest
- Headline: `"About DPA Virtual Assistant"` — `text-4xl md:text-5xl font-bold leading-[1.1] max-w-lg text-navy`
- Subheadline: `max-w-[540px] text-muted-foreground text-lg leading-relaxed` — the provided copy
- No CTA buttons (hero-only feel — visitors are already on a trust-building page)
- Proof chips: same teal-tinted style (`bg-teal/5 border border-teal/50`) with three items:
  - "8+ Years Marine Support Experience"
  - "26+ Vessels Supported"
  - "24/7 Support Availability"
- Right column: identical circular headshot frame with `border-2 border-teal`, `bg-gray-light`, `ProfessionalSilhouette` SVG, and `MaritimePattern` background — copied from `Hero.tsx`
- Background: `bg-background`, `border-b border-dpa-border`

---

#### Section 2 — Professional Background (`ProfessionalBackground.tsx`)

Light gray background (`bg-gray-light`), matching `ProblemBlock.tsx` visual treatment.

- Label chip: `"Professional Background"` teal uppercase
- Heading: `"Experience Built on Maritime Operations Discipline"` — `text-3xl md:text-4xl font-bold text-navy`
- Paragraph prose: `text-muted-foreground text-base leading-[1.8]` — professional, descriptive copy about hands-on support in certification tracking, ISM/SMS, audit preparation, vendor coordination
- Bullet list: 5 items from the brief, each with a small teal `CheckCircle` icon from lucide-react:
  - Certificate and survey planning coordination
  - SMS/ISM documentation updates
  - PSC / Flag / Class inspection preparation
  - LSA / FFA servicing tracking
  - Compliance reporting structure
- Two-column layout on desktop: left = text + bullets; right = a flat bordered info box with a subtle stat block or a maritime authority reference (IMO / ISM Code / MLC 2006)
- `py-20 md:py-24 border-b border-dpa-border`

---

#### Section 3 — Our Approach (`OurApproach.tsx`)

Mirrors `SolutionFramework.tsx` exactly in treatment:

- Background: `bg-navy-deep`, white text, `border-b border-white/10`
- Label chip: `"Our Approach"` teal uppercase
- Heading: `"How We Work"` — `text-white text-3xl md:text-4xl font-bold tracking-tight`
- 3-column grid (no step numbers — approach columns):
  - Icon: `LayoutGrid` (Structured Systems), `Bell` (Proactive Monitoring), `MessageSquare` (Clear Communication) — all from lucide-react, `text-teal-hover size-8`
  - Title: `text-white text-xl font-bold mb-3`
  - Description: `text-white/60 text-sm leading-relaxed`
  - Each card: `border border-white/10`, `p-8`, `hover:border-teal/40 hover:bg-white/[0.02] transition-colors`
  - Vertical divider (`border-r border-white/10`) on non-last columns, same as SolutionFramework

---

#### Section 4 — Confidentiality & Trust (`ConfidentialityTrust.tsx`)

Light background (`bg-background`), flat bordered layout — mirrors ProblemBlock card style.

- Label chip: `"Trust & Responsibility"` teal uppercase
- Heading: `"Confidentiality & Professional Responsibility"` — `text-3xl md:text-4xl font-bold text-navy`
- Two-column layout on desktop:
  - **Left:** Two prose paragraphs covering:
    1. Secure handling of vessel documentation — cloud storage discipline, access control
    2. Administrative support role clarification — not replacing statutory authority (Master, Flag State, Class, DPA)
  - **Right:** Flat bordered icon-list card (`border border-[#E2E8F0] bg-background p-8`):
    - 4 items, each with a `ShieldCheck` / `Lock` / `UserCheck` / `BookOpen` icon from lucide-react in teal (`size={20}`):
      - Secure document management
      - Controlled data access
      - Client-authorized processes
      - Professional compliance standards
    - Item layout: `flex items-start gap-3`, icon teal, text `text-navy font-medium text-sm`
- `py-20 md:py-24 bg-gray-light border-b border-dpa-border`

---

#### Section 5 — Call to Action (`AboutCTA.tsx`)

Identical in markup and styling to `CTABlock.tsx` — shared design pattern, different copy:

- Label: `"Work With Us"` teal uppercase
- Heading: `"Ready to Work With a Reliable Compliance Partner?"`
- Subtext: `"Send your vessel details and current compliance needs. We'll respond within 24 hours with a tailored compliance plan."`
- Two buttons, same classes as CTABlock:
  - WhatsApp Now: `bg-teal px-10 py-4 text-base font-semibold` with `WhatsAppIcon` + `ArrowRight`
  - Contact Page: `border border-navy text-navy px-8 py-3.5 font-semibold text-sm hover:bg-navy hover:text-white`
- `bg-gray-light py-24 md:py-32 border-b border-dpa-border`
- Both `WhatsAppIcon` SVG and `ArrowRight` from lucide-react duplicated from `CTABlock.tsx` (or extracted to a shared util — but to keep changes minimal, self-contained in the component)

---

### Page Assembly (`src/pages/About.tsx`)

```tsx
import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";
import AboutHero from "@/components/about/AboutHero";
import ProfessionalBackground from "@/components/about/ProfessionalBackground";
import OurApproach from "@/components/about/OurApproach";
import ConfidentialityTrust from "@/components/about/ConfidentialityTrust";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => (
  <div className="min-h-screen font-sans">
    <Header />
    <main>
      <AboutHero />
      <ProfessionalBackground />
      <OurApproach />
      <ConfidentialityTrust />
      <AboutCTA />
    </main>
    <Footer />
  </div>
);

export default About;
```

---

### Route Registration (`src/App.tsx`)

Add above the catch-all route:

```tsx
import About from "./pages/About";
// ...
<Route path="/about" element={<About />} />
```

---

### Technical Notes

- Zero new dependencies required — all icons are from `lucide-react` (already installed)
- Color tokens: `text-navy`, `text-teal`, `bg-teal`, `bg-navy-deep`, `bg-gray-light`, `border-dpa-border`, `text-teal-hover` — all already defined in `tailwind.config.ts` and `index.css`
- The `ProfessionalSilhouette` and `MaritimePattern` SVG functions are self-contained in `AboutHero.tsx` (duplicated from `Hero.tsx`) to keep components independent
- The `WhatsAppIcon` SVG is self-contained in `AboutCTA.tsx`
- All spacing follows the existing rhythm: `py-20 md:py-24`, `mb-16` for section intro, `gap-6` / `gap-12` for grids
- Flat design — no shadows, no gradients, no border-radius on structural elements
- The Header "About" nav link already points to `/about` — it will highlight correctly once the route exists
