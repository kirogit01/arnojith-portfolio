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
    id: "shy-coffee-logo-design",
    title: "SHY Coffee Shop Brand Identity & Logo Design",
    category: "Graphic Design",
    tagline: "Warm, Elegant Cafe Branding",
    description: "Brand identity and logo creation for SHY Coffee Shop. Features a steaming coffee cup emblem framed by interlocking geometric circles on a rich espresso gradient background, paired with refined typography.",
    image: "/images/graphic-design/shy-coffee-logo.jpg",
    altText: "SHY Coffee Shop logo on espresso brown background with steaming cup icon",
    aspectRatio: "square",
    projectType: "Completed Work",
    location: "Brand Identity Portfolio",
    highlights: [
      "Custom vector cup and steam silhouette iconography",
      "Interlocking geometric circle framing concept",
      "Serif and elegant script dual-font hierarchy",
      "Warm espresso gradient visual palette"
    ],
    materials: ["Vector Identity Design", "Color Palette Guide", "Typography Specs"]
  },
  {
    id: "spicy-biryani-promo-poster",
    title: "Spicy Biryani Promotional Poster (Akshi Restaurant)",
    category: "Graphic Design",
    tagline: "High-Impact Vibrant Food Advertising",
    description: "Vibrant promotional poster designed for Akshi Restaurant featuring an appetizing hero composition of Spicy Biryani, bold dynamic typography, discount badge, and energetic splatter textures.",
    image: "/images/graphic-design/spicy-biryani-poster.jpg",
    altText: "Akshi Restaurant Spicy Biryani promotional food poster with bold red theme and 40 percent off badge",
    aspectRatio: "square",
    projectType: "Completed Work",
    location: "Commercial Advertising",
    highlights: [
      "Dynamic high-contrast red & ivory poster hierarchy",
      "Bespoke stylized 3D headline typography for 'BIRYANI'",
      "Eye-catching promotional discount badge integration",
      "High-resolution digital and social media marketing asset"
    ],
    materials: ["Social Media Graphics", "High-Res Print Layout", "Photoshop Composition"]
  },
  {
    id: "shy-cafe-packaging-design",
    title: "SHY Cafe Packaging & Merchandise Design",
    category: "Graphic Design",
    tagline: "Minimalist Earthy Paper Carry Bag Mockup",
    description: "Eco-friendly branded packaging design for SHY Cafe food box carry bags. Features clean modern white typography with a warm terracotta coffee bean emblem on organic craft paper.",
    image: "/images/graphic-design/shy-cafe-packaging.jpg",
    altText: "SHY Cafe branded kraft paper shopping bag mockup packaging design",
    aspectRatio: "portrait",
    projectType: "Completed Work",
    location: "Packaging & Brand Stationery",
    highlights: [
      "Minimalist typography layout on natural craft bag texture",
      "Terracotta coffee bean accent icon",
      "Commercial merchandise and takeaway packaging concept",
      "Clean, modern cafe aesthetic"
    ],
    materials: ["3D Packaging Mockup", "Print Specifications", "Brand Collateral"]
  },

  // Technical Work (Waterproofing & Exterior Finishing)
  {
    id: "multi-story-waterproofing",
    title: "Multi-Story Building Waterproofing & Exterior Panel Finishing",
    category: "Technical Work",
    tagline: "Weatherproof Surface Protection & Modern Cladding",
    description: "Large-scale multi-story residential building exterior waterproofing and facade finishing project. Included comprehensive moisture barriers, balcony sealing, modern horizontal panel fittings, and protective coatings.",
    image: "/images/technical-services/building-waterproofing.jpg",
    altText: "Multi-story building with modern horizontal panel cladding and waterproofing finishing",
    aspectRatio: "landscape",
    projectType: "Completed Work",
    location: "Sri Lanka",
    highlights: [
      "Multi-coat exterior weather-shield waterproofing application",
      "Slab edge and balcony moisture seal membranes",
      "Modern horizontal striped architectural facade paneling",
      "Durable protective finish resistant to tropical rainfall"
    ],
    materials: ["Waterproofing Sealants", "Weather-Shield Coatings", "Galvanized Cladding Trim"]
  },
  {
    id: "exterior-wall-painting-sealing",
    title: "Exterior House & Boundary Wall Painting & Protective Sealing",
    category: "Technical Work",
    tagline: "Vibrant Color Finishing & Relief Panel Treatment",
    description: "Complete exterior house and ornamental boundary wall painting and weather-resistant sealing project. Features rich turquoise blue coatings, contrasting shaded panels, and precision-detailed floral concrete reliefs.",
    image: "/images/technical-services/exterior-painting-wall.jpg",
    altText: "Vibrant turquoise blue house and decorative boundary wall with finished ornamental relief panels",
    aspectRatio: "landscape",
    projectType: "Completed Work",
    location: "Sri Lanka",
    highlights: [
      "Multi-tone turquoise and cyan weather-shield exterior paint",
      "Waterproof base coating on boundary wall ground line",
      "Hand-finished relief floral tile inserts with crisp borders",
      "Smooth, long-lasting uniform brush and roller application"
    ],
    materials: ["Weatherproof Exterior Emulsion", "Damp-Proof Sealant", "Primer & Acrylic Putty"]
  }
];
