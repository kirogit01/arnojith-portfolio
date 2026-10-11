export type ProjectCategory = 
  | "All"
  | "Coconut Leaf Art" 
  | "Event Decoration" 
  | "Graphic Design" 
  | "Technical Work";

export interface PortfolioProject {
  id: string;
  title: string;
  category: "Coconut Leaf Art" | "Event Decoration" | "Graphic Design" | "Technical Work";
  tagline: string;
  description: string;
  image: string;
  altText: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  projectType: "Completed Work" | "Cultural Installation" | "Design Concept";
  location?: string;
  highlights: string[];
  dimensions?: string;
  materials?: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  // Coconut Leaf Art
  {
    id: "coconut-rosettes-mandala",
    title: "Traditional Coconut Leaf Mandalas & Rosettes",
    category: "Coconut Leaf Art",
    tagline: "Sacred Sunburst Chakras & Cultural Motifs",
    description: "Handcrafted traditional Sri Lankan coconut leaf rosettes, ceremonial sunburst chakras, and deity backdrops woven from natural coconut palm fronds with precision symmetry.",
    image: "/images/coconut-leaf-art/coconut-rosettes-mandala.jpg",
    altText: "Traditional Sri Lankan woven coconut leaf rosettes and ceremonial mandalas",
    aspectRatio: "portrait",
    projectType: "Cultural Installation",
    location: "Jaffna, Sri Lanka",
    highlights: [
      "100% natural, freshly harvested coconut palm fronds",
      "Traditional concentric lotus and sunburst folding techniques",
      "Symmetrical multi-colored botanical motifs and floral centerpieces",
      "Sacred ceremonial backdrop for temple and cultural celebrations"
    ],
    materials: ["Fresh Coconut Leaves", "Traditional Coir", "Natural Floral Colors"]
  },
  {
    id: "coconut-pillars-kalasam",
    title: "Ceremonial Coconut Palm Pillars & Totems",
    category: "Coconut Leaf Art",
    tagline: "Tiered Kalasam Pillars for Events & Functions",
    description: "Large-scale handcrafted coconut leaf pillars and ceremonial Kalasam structures engineered for wedding entrances, school sports meets, cultural pavilions, and store grand openings.",
    image: "/images/coconut-leaf-art/coconut-pillars-collage.jpg",
    altText: "Grand ceremonial coconut leaf kalasam pillars and decorative totems",
    aspectRatio: "portrait",
    projectType: "Completed Work",
    location: "Northern Province, Sri Lanka",
    highlights: [
      "Tiered multi-level botanical Kalasam architecture",
      "Handcrafted oil lamp (Deepam) integration tiers",
      "Contrasting yellow coconut shoot (Kurutthu) and deep green fronds",
      "Eco-friendly natural event entrance styling"
    ],
    materials: ["Palm Fronds", "Areca Nut Tree Poles", "Botanical Flower Accents"]
  },
  {
    id: "cultural-backdrop-panel",
    title: "Woven Floral Stage Backdrop Panel",
    category: "Coconut Leaf Art",
    tagline: "Intricate Geometric Leaf Tapestry",
    description: "Detailed stage backdrop screen crafted from tightly interwoven coconut leaf ribbons, forming diamond geometry and botanical rosettes for stage ceremonies.",
    image: "/images/coconut-leaf-art/stage-panel.svg",
    altText: "Artistic woven coconut palm backdrop tapestry for cultural events",
    aspectRatio: "square",
    projectType: "Cultural Installation",
    location: "Cultural Hall, Sri Lanka",
    highlights: [
      "Geometric diamond-weave pattern",
      "Integrated natural jasmine and marigold pinpoints",
      "Soft natural fragrance and eco-aesthetic"
    ],
    materials: ["Coconut Fronds", "Fresh Marigold", "Eco Threading"]
  },

  // Event Decoration
  {
    id: "ceremonial-stage-decor",
    title: "Ceremonial Stage & Floral Backdrop",
    category: "Event Decoration",
    tagline: "Harmonious Lighting & Fabric Architecture",
    description: "Custom stage decoration blending flowing warm fabric drapery with structured floral arches and ambient warm illumination for a formal ceremony.",
    image: "/images/event-decoration/stage-decor.svg",
    altText: "Elegantly styled event stage with draped ivory fabrics and floral accents",
    aspectRatio: "landscape",
    projectType: "Completed Work",
    location: "Event Pavilion, Sri Lanka",
    highlights: [
      "Layered ivory and gold fabric drapery",
      "Focal floral wreath installation",
      "Warm atmospheric uplighting"
    ],
    materials: ["Ivory Georgette Fabric", "Fresh Flora", "LED Spotlights"]
  },
  {
    id: "reception-welcome-foyer",
    title: "Event Welcome Foyer Installation",
    category: "Event Decoration",
    tagline: "Welcoming Spatial Aesthetics",
    description: "Aesthetic entrance walkway featuring handcrafted wooden pedestals, fresh botanical garlands, and customized typographic welcome easel.",
    image: "/images/event-decoration/welcome-foyer.svg",
    altText: "Event entrance walkway with botanical pedestals and warm welcome signage",
    aspectRatio: "portrait",
    projectType: "Completed Work",
    location: "Banquet Hall, Sri Lanka",
    highlights: [
      "Cohesive botanical color palette",
      "Custom graphic greeting typography",
      "Warm candlelit lantern accents"
    ],
    materials: ["Timber Pedestals", "Brass Lanterns", "Botanical Foliage"]
  },

  // Graphic Design
  {
    id: "aathiraa-brand-identity",
    title: "Aathiraa Solutions Visual Identity",
    category: "Graphic Design",
    tagline: "Earthy, Authentic Brand Language",
    description: "Brand identity system uniting traditional craftsmanship with contemporary professional styling, featuring clean typography and nature-inspired green-gold hues.",
    image: "/images/graphic-design/brand-identity.svg",
    altText: "Branding suite design with logo, typography, and stationery mockup",
    aspectRatio: "landscape",
    projectType: "Design Concept",
    location: "Brand Portfolio",
    highlights: [
      "Organic serif and clean modern sans typography",
      "Distinctive botanical leaf emblem",
      "Versatile application across print and digital media"
    ],
    materials: ["Vector Graphics", "Brand Style Guide", "Digital Mockups"]
  },
  {
    id: "cultural-event-poster",
    title: "Cultural Festival Promotional Poster",
    category: "Graphic Design",
    tagline: "High-Impact Print Composition",
    description: "Festival poster design balancing traditional cultural iconography with structured hierarchy, readable Tamil & English typography, and vibrant contrast.",
    image: "/images/graphic-design/event-poster.svg",
    altText: "Cultural festival promotional poster with refined typography and traditional art motifs",
    aspectRatio: "portrait",
    projectType: "Design Concept",
    location: "Visual Communication",
    highlights: [
      "Bilingual typography alignment (Tamil & English)",
      "Traditional ornate border motifs",
      "High visual contrast for street and digital promotion"
    ],
    materials: ["High-Res Print Layout", "Vector Illustrations"]
  },
  {
    id: "event-invitation-suite",
    title: "Celebration Invitation Card Suite",
    category: "Graphic Design",
    tagline: "Refined Gold & Botanical Stationery",
    description: "Ceremonial invitation card suite featuring delicate gold foil accents, botanical leaf borders, and bespoke typography.",
    image: "/images/graphic-design/invitation-suite.svg",
    altText: "Ceremonial invitation card layout with gold foil trim and botanical borders",
    aspectRatio: "square",
    projectType: "Design Concept",
    location: "Stationery Design",
    highlights: [
      "Subtle botanical border ornaments",
      "Balanced text composition",
      "Coordinated envelope and RSVP card design"
    ],
    materials: ["Digital Print Layout", "Stationery Mockup"]
  },

  // Technical Work
  {
    id: "interior-finishing-paint",
    title: "Commercial Finishing & Interior Painting",
    category: "Technical Work",
    tagline: "Precision Surface Coating & Trims",
    description: "Comprehensive interior wall finishing and multi-coat protective painting project delivered with smooth edges and uniform coating.",
    image: "/images/technical-services/painting-finishing.svg",
    altText: "Smooth interior wall finish and painting project",
    aspectRatio: "landscape",
    projectType: "Completed Work",
    location: "Commercial Site, Sri Lanka",
    highlights: [
      "Primer and two-coat premium emulsion",
      "Seamless wall putty crack repairs",
      "Crisp corner and ceiling transitions"
    ],
    materials: ["Weather-Shield Coating", "Acrylic Putty"]
  },
  {
    id: "suspended-ceiling-fitting",
    title: "Aesthetic Ceiling Panel Installation",
    category: "Technical Work",
    tagline: "Structural Alignment & Concealed Wiring",
    description: "Installation of suspended grid ceiling panels with integrated light recesses and sound-dampening panels for an interior renovation.",
    image: "/images/technical-services/ceiling-work.svg",
    altText: "Grid ceiling panel installation with recessed lights",
    aspectRatio: "square",
    projectType: "Completed Work",
    location: "Residential Complex, Sri Lanka",
    highlights: [
      "Laser-leveled grid framework",
      "Seamless recessed LED fixture cutouts",
      "Clean edge moldings"
    ],
    materials: ["Gypsum Tiles", "Galvanized Framework"]
  }
];
