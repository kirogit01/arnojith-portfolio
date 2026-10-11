# S. Arnojith — Personal Creative Portfolio & Aathiraa Solutions

> **Design Methodology:** Built strictly following the **UI UX Pro Max** skill and design system guidelines.  
> **Aesthetic Direction:** *Premium Editorial Design + Botanical Craftsmanship + Contemporary Graphic Design + Traditional Sri Lankan Art.*  
> **Tech Stack:** React 18, Vite, TypeScript, Tailwind CSS, Lucide Icons, Vercel-ready.

---

## 🌿 Brand & Identity Overview

- **Primary Persona:** **S. ARNOJITH**
- **Professional Descriptor:** `Graphic Designer | Event Decorator | Traditional Coconut Leaf Artist`
- **Business Brand Affiliation:** `Associated with Aathiraa Solutions`
- **Brand Slogans:**
  - *"Creativity Meets Tradition."* (Primary Headline)
  - *"Designing Ideas. Crafting Experiences."* (Supporting Headline)
  - *"Your Vision. Our Creation."* (Brand Tagline)
  - *"From Simple Ideas to Beautiful Results."* (Signature Statement)

---

## 🎨 UI UX Pro Max Design System

This project was architected using the installed **UI UX Pro Max** design engine:
- **Design System Master File:** [`design-system/arnojith-portfolio/MASTER.md`](./design-system/arnojith-portfolio/MASTER.md)
- **Design Dials:**
  - **Variance:** `8/10` (Bold / Asymmetric editorial layout, varied aspect ratios)
  - **Motion:** `4/10` (Refined scroll transitions, staggered gallery cards, no disruptive animations)
  - **Density:** `3/10` (Spacious editorial spacing: 24px–96px padding)
- **Color Palette:**
  - Deep Forest Green (`#173D2A`)
  - Botanical Green (`#315C3B`)
  - Natural Leaf Green (`#7D9A50`)
  - Warm Ivory Background (`#F8F5ED`)
  - Muted Gold (`#C9A34E`)
  - Charcoal Body Text (`#252823`)
  - Warm Beige Surface/Dividers (`#E9E0D0`)
- **Typography:**
  - Headings: `Cormorant Garamond` (Classic editorial serif)
  - Body & UI: `Plus Jakarta Sans` (Clean, legible geometric sans)
  - Small-caps & Badges: `Cinzel` (Refined uppercase lettering)

---

## 📁 Project Architecture

```text
c:\Users\Kirojan\Desktop\anoj\
├── .agents/                      # UI UX Pro Max skill and design datasets
│   └── skills/ui-ux-pro-max/
├── design-system/                # Persisted Master Design System
│   └── arnojith-portfolio/
│       └── MASTER.md
├── public/
│   └── images/                   # Asset folder with SVG illustrations & photo slots
│       ├── artist/               # arnojith-portrait.svg
│       ├── branding/             # aathiraa-logo.svg
│       ├── coconut-leaf-art/     # arch-gateway.svg, sports-meet.svg, stage-panel.svg
│       ├── event-decoration/     # stage-decor.svg, welcome-foyer.svg
│       ├── graphic-design/       # brand-identity.svg, event-poster.svg, invitation-suite.svg
│       └── technical-services/   # painting-finishing.svg, ceiling-work.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky, blur backdrop, accessible mobile menu
│   │   ├── Hero.tsx              # Editorial split layout with craftsmanship feature
│   │   ├── SectionHeading.tsx    # Reusable heading with gold botanical ornament
│   │   ├── CreativeIntroduction.tsx # 3 varied discipline tiles
│   │   ├── FeaturedPortfolio.tsx # Filterable gallery with category counts
│   │   ├── ProjectModal.tsx      # Accessible keyboard-navigable modal/lightbox
│   │   ├── CoconutLeafArt.tsx    # Signature feature: Traditional Sri Lankan craft
│   │   ├── EventDecoration.tsx   # Atmospheric stage and entryway decorations
│   │   ├── GraphicDesign.tsx     # Typography, posters, invitations, and identity
│   │   ├── CompanyIntroduction.tsx # Aathiraa Solutions partnership overview
│   │   ├── TechnicalServices.tsx # Residential/commercial finishing & safety notes
│   │   ├── AboutArtist.tsx       # Factual biography, A/L Engineering & ambition
│   │   ├── SkillsSection.tsx     # 3 skill groups (no fake percentages) & 4-step workflow
│   │   ├── ContactSection.tsx    # Functional WhatsApp prefilled message constructor
│   │   └── Footer.tsx            # Dynamic year, links, and gold botanical accents
│   ├── data/
│   │   ├── siteConfig.ts         # Centralized artist info, phone, and links
│   │   ├── services.ts           # Creative and technical service lists
│   │   └── portfolioProjects.ts  # Centralized portfolio item records
│   ├── styles/
│   │   └── index.css             # Tailwind imports & CSS custom properties
│   ├── App.tsx                   # Main 13-section single page container
│   └── main.tsx                  # Vite React root
├── index.html                    # SEO tags, Open Graph meta, Google Fonts
├── tailwind.config.js            # Custom color palette and typography scales
├── vercel.json                   # Vercel deployment routing configuration
└── package.json                  # Scripts and dependencies
```

---

## 🚀 How to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 📷 How to Add S. Arnojith's Real Photographs

All images are loaded from `public/images/`. Beautiful, lightweight botanical vector SVGs are included out of the box so that no broken image links appear.

When S. Arnojith's real event and installation photos are ready, replace the files or add `.jpg`/`.png` files and update paths in `src/data/portfolioProjects.ts`:

- **Artist Portrait:** Drop photo into `public/images/artist/` and update `arnojith-portrait.svg`.
- **Coconut Leaf Arch Photos:** Drop into `public/images/coconut-leaf-art/`.
- **Event Decoration Photos:** Drop into `public/images/event-decoration/`.
- **Graphic Design Mockups:** Drop into `public/images/graphic-design/`.
- **Aathiraa Solutions Logo:** Drop into `public/images/branding/`.

---

## 📞 How to Update Contact & WhatsApp Details

All contact data is centralized in [`src/data/siteConfig.ts`](./src/data/siteConfig.ts):

```typescript
export const siteConfig = {
  contact: {
    whatsappNumber: "94770000000", // Change to S. Arnojith's WhatsApp (country code without '+')
    displayPhone: "+94 77 000 0000",
    email: "contact@arnojith.com",
    location: "Sri Lanka",
  }
};
```

When a user submits the consultation form on the website, it automatically constructs a structured message and opens WhatsApp directly to that number.

---

## ☁️ Deploying to Vercel

### Option 1: Via GitHub (Recommended)
1. Push this project folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: S. Arnojith Creative Portfolio"
   git remote add origin https://github.com/your-username/arnojith-portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect `Vite` and the provided `vercel.json`.
5. Click **"Deploy"**.

### Option 2: Via Vercel CLI
```bash
npm install -g vercel
vercel
```
