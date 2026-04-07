

## Plan: Add Blurred Background Images to All Hero Sections

### Current State
- **Services & Contact** heroes already use a blurred background image (`services-hero-bg.jpg`) — no changes needed there.
- **Homepage, About, Blog, Case Studies** heroes have either plain backgrounds or SVG art — these need blurred background images.

### What Will Change

**4 hero components** will be updated to add a blurred, related background image with a dark navy overlay so text remains readable:

| Page | Component | Image Theme |
|------|-----------|-------------|
| Homepage | `src/components/dpa/Hero.tsx` | Container ship at sea / port operations |
| About | `src/components/about/AboutHero.tsx` | Maritime office / ship bridge |
| Blog | `src/components/blog/BlogHero.tsx` | Ship navigation charts / maritime documents |
| Case Studies | `src/components/case-studies/CaseStudiesHero.tsx` | Ship deck / vessel inspection |

### Implementation Pattern

Each hero will follow the same proven pattern already used by Services and Contact:

```text
<section class="relative overflow-hidden ...">
  <!-- Blurred BG image -->
  <div class="absolute inset-0 bg-cover bg-center"
       style="background-image: url(...); filter: blur(12px); transform: scale(1.05)" />
  <!-- Dark navy overlay -->
  <div class="absolute inset-0" style="background-color: rgba(11,31,59,0.78)" />
  <!-- Content (relative z-10) -->
  <div class="relative z-10 ..."> ... </div>
</section>
```

### Steps

1. **Download 4 royalty-free maritime images** from Unsplash to `src/assets/`:
   - `hero-bg.jpg` — container ship / port (Homepage)
   - `about-hero-bg.jpg` — ship bridge / maritime office (About)
   - `blog-hero-bg.jpg` — nautical charts / navigation (Blog)
   - `casestudies-hero-bg.jpg` — ship deck / inspection (Case Studies)

2. **Update `Hero.tsx` (Homepage)** — Add blurred background image + navy overlay, adjust text colors from navy to white for contrast, keep all existing content (CTA buttons, proof chips, silhouette).

3. **Update `AboutHero.tsx`** — Add blurred background image + navy overlay, adjust text colors for dark background, keep circular headshot placeholder and proof chips.

4. **Update `BlogHero.tsx`** — Replace the SVG marine art background with the real blurred image + navy overlay, adjust text colors.

5. **Update `CaseStudiesHero.tsx`** — Replace the SVG compass/grid art background with the real blurred image, keep the existing navy overlay. Text is already white so minimal color changes needed.

### Design Consistency
- All heroes will share the same blur amount (12px), scale (1.05), and overlay opacity (~0.78) for a unified look across the site.
- Text on dark overlays will use white/white-opacity colors matching the Services and Contact hero pattern.

