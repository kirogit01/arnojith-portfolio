# Design System Master File

> **LOGIC:** When building a specific page or section, first check `design-system/arnojith-portfolio/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** S. Arnojith — Personal Creative Portfolio & Aathiraa Solutions  
**Category:** Creative Portfolio / Botanical Craftsmanship & Editorial Design  
**Design Dials:** Variance 8/10 (Bold / Asymmetric Editorial) | Motion 4/10 (Refined Scroll & Hover) | Density 3/10 (Spacious Editorial 24-96px)  

---

## 1. Creative Direction & Persona

- **Primary Persona:** S. Arnojith (Graphic Designer · Event Decorator · Traditional Coconut Leaf Artist)
- **Business Brand Affiliation:** Aathiraa Solutions ("Associated with Aathiraa Solutions")
- **Creative Essence:** Premium Editorial Design + Botanical Craftsmanship + Contemporary Graphic Design + Traditional Sri Lankan Art
- **Brand Messaging:**
  - Primary Headline: *"Creativity Meets Tradition."*
  - Supporting Headline: *"Designing Ideas. Crafting Experiences."*
  - Brand Tagline: *"Your Vision. Our Creation."*
  - Signature Statement: *"From Simple Ideas to Beautiful Results."*

---

## 2. Color Palette & Semantic Tokens

| Role | Hex | CSS Variable | Semantic Usage |
|------|-----|--------------|----------------|
| Primary | `#173D2A` | `--color-primary` | Deep Forest Green: Hero, Craft Section, Footer, Primary Badges |
| Secondary | `#315C3B` | `--color-secondary` | Botanical Green: Supporting cards, subtle surfaces, active pill states |
| Accent / Leaf | `#7D9A50` | `--color-accent` | Natural Leaf Green: Botanical highlights, badges, icons, borders |
| Accent / Gold | `#C9A34E` | `--color-gold` | Muted Gold: Fine borders, ornamental dividers, luxury CTAs, stars |
| Background (Light) | `#F8F5ED` | `--color-bg-light` | Warm Ivory: Editorial content, bio, service cards, clean reading |
| Background (Dark) | `#112A1D` | `--color-bg-dark` | Deepest Night Forest: Hero, signature craft showcase, modal backdrop |
| Foreground (Dark) | `#252823` | `--color-fg-dark` | Deep Charcoal: Body text on light backgrounds |
| Foreground (Light) | `#F8F5ED` | `--color-fg-light` | Warm Ivory: Headings & body on dark sections |
| Surface / Muted | `#E9E0D0` | `--color-muted` | Warm Beige: Borders, divider lines, muted chips |
| Card Surface (Light)| `#FFFFFF` | `--color-card-light` | White with warm undertones |
| Card Surface (Dark) | `#1A422E` | `--color-card-dark` | Elevated Forest Green card |
| Border | `rgba(201, 163, 78, 0.25)` | `--color-border-gold` | Fine gold hairline borders & frames |

---

## 3. Typography System

- **Heading Display Font:** `Cormorant Garamond`, serif (Weights: 400, 500, 600, 700 italic & normal)
- **Body & Interface Font:** `Plus Jakarta Sans` / `DM Sans`, sans-serif (Weights: 400, 500, 600, 700)
- **Small-caps & Overlines:** `Cinzel`, serif (Weights: 500, 600, tracking-widest)

```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

:root {
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-display: 'Cinzel', serif;
}
```

### Typographic Hierarchy Scale:
- **Hero Statement:** `clamp(2.75rem, 6vw, 4.75rem)` / Line height: 1.05 / Font: `Cormorant Garamond`
- **Section Heading (H2):** `clamp(2rem, 4vw, 3.25rem)` / Line height: 1.15 / Font: `Cormorant Garamond`
- **Subsection Heading (H3):** `1.5rem`–`1.85rem` / Line height: 1.25 / Font: `Cormorant Garamond`
- **Section Eyebrow / Label:** `0.75rem`–`0.85rem` / Letter spacing: `0.2em` / Font: `Cinzel` uppercase
- **Body Large (Intro text):** `1.125rem`–`1.25rem` / Line height: 1.7 / Font: `Plus Jakarta Sans`
- **Body Standard:** `0.95rem`–`1.05rem` / Line height: 1.65 / Font: `Plus Jakarta Sans`
- **Captions & Meta:** `0.8rem`–`0.875rem` / Font: `Plus Jakarta Sans`

---

## 4. Spacing & Grid System (Density 3/10 — Spacious Editorial)

- Spacing Tokens:
  - `--space-xs`: `4px`
  - `--space-sm`: `8px`
  - `--space-md`: `24px`
  - `--space-lg`: `40px`
  - `--space-xl`: `64px`
  - `--space-2xl`: `96px`
  - `--space-3xl`: `128px`
- Section Vertical Padding: `py-20` to `py-28` (Desktop), `py-14` (Mobile).
- Container Max Width: `max-w-7xl` (`1280px`), with editorial text constrained to `max-w-3xl`.
- Asymmetric Gallery: Mixed 3:4 portrait, 16:10 landscape, and 1:1 square compositions for authentic creative storytelling.

---

## 5. Component Patterns & Visual Motifs

1. **Editorial Section Transitions:** Alternating Dark Forest (`#173D2A`) and Warm Ivory (`#F8F5ED`) sections to establish visual rhythm without monotony.
2. **Gold Botanical Flourishes:** Hairline gold dividers (`border-t border-[#C9A34E]/30`), leaf motifs, and subtle gold badges.
3. **Interactive Filterable Portfolio:** Filter pills (`All`, `Coconut Leaf Art`, `Event Decoration`, `Graphic Design`, `Technical Work`) with count indicators and smooth category transition.
4. **Accessible Lightbox / Project Modal:** Full keyboard navigation (`Esc` to close, `Tab` trap), rich metadata, verified date/status badges, and high-fidelity image view.
5. **WhatsApp Enquiry Flow:** Prefilled, formatted message constructor from form fields, allowing one-click review before opening WhatsApp.
6. **No AI-Slop Anti-Patterns:**
   - No excessive generic glassmorphism
   - No neon purple/cyan gradients
   - No generic rounded SaaS cards with 3 identical pricing tiers
   - No fabricated statistics, testimonials, or fake degrees
