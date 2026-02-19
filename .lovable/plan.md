
## Design Refinement Plan — Enterprise Quality Upgrade

All 8 sections will be updated in-place. No new components or routes are needed. Changes are purely visual/typographic — no logic alterations.

---

### File 1: `src/components/dpa/Hero.tsx`

**Changes:**
- Headline: add `max-w-lg` to constrain width and control line breaks; increase from `text-4xl md:text-5xl` to `text-4xl md:text-5xl` with `leading-[1.15]`
- WhatsApp button: increase padding from `px-7 py-3` to `px-8 py-4`; increase font to `text-base`; add `ArrowRight` icon from lucide-react after the label text
- Proof chips: change background from `bg-gray-light` to a teal-tinted background using `bg-teal/5` and change border to `border-teal/30` for a teal-tinted feel
- Headshot circle: change border from `border-2 border-dpa-border` to `border-2 border-teal` for the 1px teal outline (using border-teal which maps to the CSS variable)
- Vertical spacing: increase `mb-6` on headline to `mb-8`, `mb-8` on subheadline to `mb-10`, `mb-10` on buttons row to `mb-12`

---

### File 2: `src/components/dpa/ProblemBlock.tsx`

**Changes:**
- Card padding: increase from `p-6` to `p-8`
- Card border color: change `border-dpa-border` to `border-[#E2E8F0]` (darker, as specified)
- Icon size: change `size={24}` on all four icons to `size={32}`
- Icon margin: change `mb-4` to `mb-5` for extra breathing room
- Card title margin: change `mb-2` to `mb-3`

---

### File 3: `src/components/dpa/SolutionFramework.tsx`

**Changes:**
- Heading letter spacing: add `tracking-tight` to the h2
- Teal accent brightness: update icon color class from `text-teal` to use inline style or a brighter teal. Since the CSS variable `--teal` is `188 60% 30%`, slightly brighter would be 40% lightness — add a `teal-bright` token or use `text-[#2C8CA0]` (teal-hover color) for icons to make them brighter
- Vertical dividers: the existing connector logic uses a `border border-white/10` on each step card. Replace that with a proper right-side vertical divider on each non-last card: add a `after:` pseudo element or simply a visible `border-r border-white/15` on each non-last cell while removing the horizontal connector arrow approach. More precisely: wrap the 4-step grid items so that all cells have `border-r border-white/10` except the last, and remove the existing connector arrow divs

---

### File 4: `src/components/dpa/ServicesPreview.tsx`

**Changes:**
- "Most Popular" badge: add a second badge value `"Most Popular"` to the middle card (`SMS / ISM Support`, `highlight: false → true`). Actually — re-read the brief: "Add 'Most Popular' badge to highlighted card". The highlighted card is already `Operational Compliance Support`. So add `badge: "Most Popular"` as a second badge alongside `"All-in-One"`, or replace `"All-in-One"` with both. The spec says "All-in-One" badge is still highlighted and add "Most Popular". Best approach: show both `"All-in-One"` and `"Most Popular"` badges on the highlighted card by making `badge` an array, or show "Most Popular" above the card as a ribbon and keep "All-in-One" inside.
- Implementation: change the badge area to render two spans when highlighted — `"Most Popular"` in teal and `"All-in-One"` in navy
- Border thickness: highlighted card already uses `border-2`; increase to `border-[3px]` — use inline style `style={{ borderWidth: '3px' }}` or add a custom class
- Subtle teal background tint: add `bg-teal/[0.03]` to the highlighted card's class

---

### File 5: `src/components/dpa/CaseStudies.tsx`

**Changes:**
- Teal result badge: in the "Key Result" section at the bottom of each card, add a small teal badge chip above the result text: `<span className="inline-block bg-teal text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 mb-2">Result</span>`
- Card padding: already `p-8` — increase to `p-9` or `p-10`
- "View Case Studies" button: change from a plain text link (`text-teal font-semibold`) to a proper outline button — `inline-flex items-center border border-teal text-teal font-semibold text-sm px-6 py-2.5 hover:bg-teal hover:text-white transition-colors`

---

### File 6: `src/components/dpa/Testimonials.tsx`

**Changes:**
- Quote font size: increase from `text-sm` to `text-base`
- Decorative quotation mark: add a large `"` character or an SVG quotation icon at the top of each card, rendered in teal with very large font (`text-6xl text-teal/30 font-serif leading-none mb-2`)
- Client name font weight: increase from `font-semibold` to `font-bold`

---

### File 7: `src/components/dpa/CTABlock.tsx`

**Changes:**
- Headline text: change from `"Need Reliable Compliance Support for Your Fleet?"` to `"Ready to Simplify Fleet Compliance?"`
- WhatsApp button prominence: increase padding from `px-8 py-3.5` to `px-10 py-4`; increase font size to `text-base`; add `ArrowRight` icon after label
- Spacing above footer: increase section padding from `py-20 md:py-24` to `py-24 md:py-32`

---

### File 8: `src/components/dpa/Footer.tsx`

**Changes:**
- Subtle divider above footer: add a `border-t border-teal/20` div or apply it directly as `border-t-2 border-teal/20` on the `<footer>` element itself
- "Serving Globally | 24/7 Support" line: add this text in the copyright row, either as a second line above the copyright or alongside it — place it centered above the copyright text in `text-white/50 text-xs`

---

### Technical Notes
- The `ArrowRight` icon is already available from `lucide-react` (already installed)
- No new CSS variables needed; teal-hover (`#2C8CA0`) is already defined as `--teal-hover` and available as `text-teal-hover`
- All changes are purely className/JSX modifications — zero dependency additions required
- The border `border-[#E2E8F0]` uses Tailwind's arbitrary value syntax which is fully supported
