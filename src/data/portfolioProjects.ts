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
    id: "coconut-thoranam-arch",
    title: "Traditional Ceremonial Entrance Arch",
    category: "Coconut Leaf Art",
    tagline: "Intricate Sri Lankan Thoranam Gateway",
    description: "Handcrafted ceremonial entrance arch constructed using freshly woven coconut fronds, symmetrical geometric braids, and hanging floral tassels, built for cultural festivities.",
    image: "/images/coconut-leaf-art/arch-gateway.svg",
    altText: "Traditional Sri Lankan woven coconut leaf entrance arch with geometric patterns",
    aspectRatio: "portrait",
    projectType: "Cultural Installation",
    location: "Jaffna, Sri Lanka",
    highlights: [
      "100% natural, biodegradable coconut palm fronds",
      "Traditional chevron leaf-braiding technique",
      "Symmetrical multi-tiered overhead gateway",
      "Handmade auspicious hanging leaf tassels"
    ],
    materials: ["Fresh Coconut Leaves", "Bamboo Framework", "Natural Coir Twine"]
  },
  {
    id: "sports-meet-gateway",
    title: "School Sports Meet Welcome Gateway",
    category: "Coconut Leaf Art",
    tagline: "Eco-Friendly Grand Entrance",
    description: "Large-scale entrance gateway designed for an annual school sports meet. Features grand pillars wrapped in green-and-yellow coconut fronds topped with traditional decorative crown motifs.",
    image: "/images/coconut-leaf-art/sports-meet.svg",
    altText: "Grand school sports meet entrance gateway woven from coconut leaves",
    aspectRatio: "landscape",
    projectType: "Cultural Installation",
    location: "Northern Province, Sri Lanka",
    highlights: [
      "Dual majestic entryway pillars",
      "Contrasting light and deep green leaf textures",
      "Sturdy wind-resistant bamboo skeleton",
      "Traditional welcome motif canopy"
    ],
    materials: ["Palm Fronds", "Areca Nut Tree Poles", "Botanical Accents"]
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
