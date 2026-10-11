export interface CreativeSpecialty {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  linkTo: string;
  features: string[];
}

export interface TechnicalService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  note?: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

export const creativeSpecialties: CreativeSpecialty[] = [
  {
    id: "coconut-leaf-art",
    title: "Traditional Coconut Leaf Art",
    tagline: "Nature, Crafted by Hand",
    description: "Celebrating traditional Sri Lankan craftsmanship through intricate coconut-leaf weaving, handcrafted ceremonial entrance arches, ornamental gateways, and cultural installations.",
    iconName: "Palmtree",
    linkTo: "#coconut-leaf-art",
    features: [
      "Traditional entrance gateways (Thoranam)",
      "Cultural event & school function arches",
      "Sports-meet welcome structures",
      "Intricate leaf patterns & woven backdrops",
      "Eco-friendly natural botanical artistry"
    ]
  },
  {
    id: "event-decoration",
    title: "Event Decoration",
    tagline: "Beautiful Events. Memorable Experiences",
    description: "Thoughtfully designed decorative environments that bring celebrations, gatherings, and special occasions to life through spatial balance, backdrops, and lighting harmony.",
    iconName: "Sparkles",
    linkTo: "#event-decoration",
    features: [
      "Stage & ceremonial backdrops",
      "Welcome gateway architecture",
      "Cultural celebrations & school functions",
      "Thematic floral & botanical arrangements",
      "Complete venue atmosphere styling"
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    tagline: "Creative Ideas, Beautifully Designed",
    description: "Visual communication through thoughtful layouts, refined typography, and purposeful compositions tailored for event promotional assets, branding, and digital media.",
    iconName: "Palette",
    linkTo: "#graphic-design",
    features: [
      "Brand identity & logo concepts",
      "Event banners & promotional posters",
      "Ceremonial invitations & program cards",
      "Social media graphics & marketing artwork",
      "Print-ready visual compositions"
    ]
  }
];

export const technicalServices: TechnicalService[] = [
  {
    id: "painting",
    title: "Painting Works",
    description: "High-grade interior and exterior wall painting, precision brushwork, color consultation, and durable finishing coats.",
    iconName: "Paintbrush"
  },
  {
    id: "ceiling",
    title: "Ceiling Fitting",
    description: "Installation of suspended, decorative, and paneled ceilings ensuring structural alignment and polished aesthetic finish.",
    iconName: "Layers"
  },
  {
    id: "pipeline",
    title: "Pipeline Works",
    description: "Dependable pipeline installation, plumbing layout, leakage repairs, and sanitary fitting services.",
    iconName: "Wrench"
  },
  {
    id: "electrical",
    title: "Electrical Wiring",
    description: "Safe and structured electrical wiring, circuit connections, and lighting fixture installations performed in accordance with applicable safety practices.",
    iconName: "Zap",
    note: "Executed adhering strictly to professional safety standards"
  },
  {
    id: "waterproofing",
    title: "Waterproofing",
    description: "Reliable moisture barriers and waterproof coatings for rooftops, terraces, bathrooms, and exterior walls to ensure longevity.",
    iconName: "ShieldCheck"
  },
  {
    id: "cctv",
    title: "CCTV Fitting",
    description: "Placement, cabling, and secure setup of surveillance cameras for homes, commercial spaces, and event venues.",
    iconName: "Camera"
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    number: "Phase 1",
    title: "Discover",
    description: "Understand the client's vision, event theme, spatial layout, and technical prerequisites.",
    details: ["Consultation & requirements", "Space measurement & assessment", "Theme alignment"]
  },
  {
    step: "02",
    number: "Phase 2",
    title: "Plan",
    description: "Develop concept blueprints, botanical material sourcing plans, and structural timeline.",
    details: ["Concept sketches & drafts", "Material & leaf selection", "Timeline scheduling"]
  },
  {
    step: "03",
    number: "Phase 3",
    title: "Create",
    description: "Execute the handcrafting, weaving, graphic design, and decorative installations with meticulous care.",
    details: ["Handcrafted leaf weaving", "Graphic asset refinement", "On-site structural build"]
  },
  {
    step: "04",
    number: "Phase 4",
    title: "Complete",
    description: "Perform final quality review, lighting alignment, and deliver a polished handover for the event.",
    details: ["Lighting & balance review", "Finishing touches", "Flawless event handover"]
  }
];

export const skillCategories = {
  creative: [
    "Graphic Design & Visual Layouts",
    "Traditional Coconut Leaf Weaving",
    "Event Decoration & Stage Styling",
    "Ceremonial Gateway Architecture",
    "Creative Visual Planning",
    "Decorative Motif Crafting"
  ],
  technical: [
    "Interior & Exterior Painting",
    "Ceiling Fitting & Panel Work",
    "Pipeline & Plumbing Works",
    "Electrical Wiring & Lighting",
    "Waterproofing Application",
    "CCTV Security Installation"
  ],
  personal: [
    "Creative & Innovative Thinking",
    "Deep Passion for Cultural Craftsmanship",
    "Continuous Learning & Adaptability",
    "Practical Engineering Problem-Solving",
    "Meticulous Attention to Detail",
    "Dedication to Client Excellence"
  ]
};
