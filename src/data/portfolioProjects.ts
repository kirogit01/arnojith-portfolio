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
    id: "honda-showroom-opening",
    title: "Honda Showroom Opening Traditional Coconut Leaf Decor",
    category: "Coconut Leaf Art",
    tagline: "Amalathas Motors Grand Opening & Branded Leaf Art",
    description: "Spectacular corporate grand opening installation for Honda (Amalathas Motors). Combines handcrafted woven Honda wing brand emblem, grand ceremonial 'WELCOME' entrance archway flanked by Annapakshi swan leaf sculptures, and multi-tiered coconut flower Kalasam oil lamp pillars.",
    image: "/images/coconut-leaf-art/honda-showroom-opening-decor.jpg",
    altText: "Traditional coconut leaf grand opening decoration for Honda showroom featuring woven Honda logo and swan pillars",
    aspectRatio: "portrait",
    projectType: "Completed Work",
    location: "Amalathas Motors Showroom, Sri Lanka",
    highlights: [
      "Hand-woven Honda wing logo backdrop panel crafted from natural palm fronds",
      "Grand ceremonial 'WELCOME' archway with twin sculptural Annapakshi swan totems",
      "Multi-tiered Kurutthu Kalasam pillars topped with natural coconut blossoms (Thempookkal)",
      "Harmonious fusion of modern automotive branding and ancient Sri Lankan craft"
    ],
    materials: ["Fresh Coconut Palm Fronds", "Coconut Blossom (Thempookkal)", "Lotus Blooms", "Natural Areca Framework"]
  },
  {
    id: "school-150-jubilee-emblem",
    title: "150th Jubilee Celebration Monumental School Crest Art",
    category: "Coconut Leaf Art",
    tagline: "Bt/ Puthukkudiyiruppu Kannaki Maha Vidyalayam (150 Years)",
    description: "Monumental circular coconut palm emblem commissioned for the 150th Jubilee Celebration of Bt/ Puthukkudiyiruppu Kannaki Maha Vidyalayam. Features the sacred Tamil school motto 'கற்றுக் தேர்ந்து ஒழுகு', a layered blooming lotus, the open book of wisdom, a glowing Deepam lamp flame, and the '150' milestone crown.",
    image: "/images/coconut-leaf-art/school-150-jubilee-emblem.jpg",
    altText: "Monumental circular coconut leaf 150th Jubilee emblem for Kannaki Maha Vidyalayam with lotus and Tamil script",
    aspectRatio: "portrait",
    projectType: "Cultural Installation",
    location: "Puthukkudiyiruppu, Sri Lanka",
    highlights: [
      "Massive concentric woven frond medallion with multi-tiered serrated petal borders",
      "Intricate Tamil calligraphic lettering woven entirely from cut coconut leaves",
      "Dimensional sacred lotus centerpiece and glowing lamp (Agal Vilakku) motif",
      "Historic 150th Jubilee commemorative installation mounted on ceremonial carriage"
    ],
    materials: ["Tender Coconut Fronds (Kurutthu)", "Mature Green Palm Leaves", "Bamboo & Timber Base"]
  },
  {
    id: "mani-vizha-portrait-arch",
    title: "Mani Vizha 60th Jubilee Arch & Woven Leaf Portrait Art",
    category: "Coconut Leaf Art",
    tagline: "Ceremonial Archway & Handcrafted Leaf Portraiture",
    description: "Groundbreaking ceremonial entrance archway for 'ஜனாவின் வாக்கு மூலம் மணி விழா மலர்' featuring life-sized portrait busts hand-woven from coconut palm fronds. Integrates grand overhead Tamil typography, tiered geometric chevron braids, and symmetrical sunburst floral chakras.",
    image: "/images/coconut-leaf-art/mani-vizha-portrait-arch.jpg",
    altText: "Grand ceremonial Mani Vizha entrance arch featuring woven coconut leaf portraits of celebrated guests",
    aspectRatio: "portrait",
    projectType: "Cultural Installation",
    location: "Cultural Celebration, Sri Lanka",
    highlights: [
      "Pioneering coconut-leaf portrait technique: dimensional face and attire details",
      "Towering ceremonial archway with crisp Tamil typography banner",
      "Tiered chevron-braided columns and concentric lotus mandalas",
      "Complete on-site fabrication and structural installation with creative artisan team"
    ],
    materials: ["Multi-Shade Palm Fronds", "Structural Framework", "Hand-Folded Rosettes"]
  },
  {
    id: "sports-meet-2025-arch",
    title: "Annual Sports Meet 2025 Entrance Arch & Live Craft Workshop",
    category: "Coconut Leaf Art",
    tagline: "Athletic Ground Gateway & Artisanal Fabrication",
    description: "Authentic sports meet entrance archway ('SPORTS MEET 2025') constructed with natural woven fronds, chevron borders, and twin circular sunburst chakras. Features documented on-site craftsmanship by S. Arnojith and team.",
    image: "/images/coconut-leaf-art/sports-meet-2025-arch.jpg",
    altText: "Sports Meet 2025 coconut leaf entrance arch and live artisan crafting workshop",
    aspectRatio: "portrait",
    projectType: "Completed Work",
    location: "School Sports Grounds, Sri Lanka",
    highlights: [
      "Full-span sports ground entrance gateway with 'SPORTS MEET 2025' typography",
      "Twin flanking sunburst chakra medallions with concentric leaf rosettes",
      "Traditional thatched palm roof rest pavilion for field officials",
      "Live on-site artisanal fabrication demonstrating traditional Sri Lankan techniques"
    ],
    materials: ["Fresh Green Palm Fronds", "Yellow Kurutthu Accents", "Poles & Coir Rope"]
  },
  {
    id: "coconut-peacock-stage",
    title: "Traditional Coconut Leaf Stage & Peacock Art Installation",
    category: "Coconut Leaf Art",
    tagline: "Masterpiece Woven Backdrop & Sculpted Leaf Peacocks",
    description: "Spectacular ceremonial stage backdrop constructed entirely from fresh woven coconut leaves. Features two magnificent sculptural peacocks with cascading leaf-folded feathers, twin towering Gokku Kalasams with natural coconut blossoms, and a central sunburst chakra.",
    image: "/images/coconut-leaf-art/coconut-peacock-stage.jpg",
    altText: "Grand stage backdrop woven with coconut leaves featuring two leaf peacocks and kalasam pillars",
    aspectRatio: "landscape",
    projectType: "Cultural Installation",
    location: "Ceremonial Stage, Sri Lanka",
    highlights: [
      "Dual life-sized peacocks crafted entirely from folded coconut fronds",
      "Seamless geometric woven coconut leaf wall tapestry",
      "Twin multi-tiered Gokku Kalasam structures with natural coconut flowers",
      "Traditional ceremonial stage backdrop for cultural events"
    ],
    materials: ["Fresh Coconut Fronds", "Coconut Flowers (Thempookkal)", "Eco Framing"]
  },
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

  // Event Decoration
  {
    id: "birthday-balloon-stage-decor",
    title: "Fairy & Butterfly Themed Birthday Party Stage Styling",
    category: "Event Decoration",
    tagline: "Curated Themed Stage & Balloon Architecture",
    description: "Complete celebratory party stage decoration featuring a pastel balloon garland arch with butterfly accents, custom cylindrical dessert pedestals with Tamil typography, fairy cutouts, and elegant backdrop drapery.",
    image: "/images/event-decoration/birthday-balloon-decor.jpg",
    altText: "Birthday party stage decoration with balloon arch, fairy cutouts, and custom cylinder pedestals",
    aspectRatio: "portrait",
    projectType: "Completed Work",
    location: "Event Hall, Sri Lanka",
    highlights: [
      "Organic multi-size balloon arch (purple, pink, white, gold butterflies)",
      "Custom printed Tamil name cylinder pedestals",
      "Handcrafted fairy character cutouts",
      "Warm drape curtain background with ambient lighting"
    ],
    materials: ["Balloon Arches", "Custom Print Pedestals", "Fabric Drapery"]
  },
  {
    id: "cultural-festival-gateway-architecture",
    title: "Grand Cultural Festival Entrance Gateway Architecture",
    category: "Event Decoration",
    tagline: "Handcrafted Ceremonial Gateway ('குறிஞ்சிக்கரங்கள்')",
    description: "Monumental cultural festival entrance gateway ('குறிஞ்சிக்கரங்கள்') designed and assembled on-site. Combines traditional character cutouts, symbolic chariot wheels, archway lettering, and vibrant ceremonial color blocking.",
    image: "/images/event-decoration/cultural-gateway-festival.jpg",
    altText: "Monumental cultural festival entrance arch with traditional cutouts and chariot wheels",
    aspectRatio: "portrait",
    projectType: "Completed Work",
    location: "Cultural Festival, Sri Lanka",
    highlights: [
      "Custom timber and board cutouts crafted in the workshop",
      "Traditional chariot wheels and archway Tamil typography",
      "Multi-pillar cultural color staging",
      "Sturdy weather-resistant on-site structural build"
    ],
    materials: ["Timber Structure", "Plywood Cutouts", "Enamel Paint", "Chariot Wheels"]
  },
  {
    id: "peacock-parade-float-sculpture",
    title: "Grand Peacock Vehicle Float & Festival Sculpture",
    category: "Event Decoration",
    tagline: "Large-Scale Cultural Parade Float Installation",
    description: "Impressive 3D sculptural peacock float built for an annual school walk and celebration ('2005 Batch'). Features a massive hand-sculpted peacock neck and head framed by an expansive circular hand-painted feather plume.",
    image: "/images/event-decoration/peacock-parade-float.jpg",
    altText: "Large-scale peacock vehicle parade float with circular tail feather backdrop",
    aspectRatio: "portrait",
    projectType: "Completed Work",
    location: "School Festival Walk, Sri Lanka",
    highlights: [
      "3D sculpted blue peacock figure with realistic crest and beak",
      "Expansive circular peacock tail feather fan backdrop",
      "Custom vehicle float mounting and blue satin fringe border",
      "Collaborative large-scale creative event build"
    ],
    materials: ["Sculpted Foam & Plaster", "Hand-Painted Feather Disc", "Vehicle Mounts"]
  },
  {
    id: "dragon-parade-float-installation",
    title: "Michaelites Hike Walk Dragon Float Sculpture",
    category: "Event Decoration",
    tagline: "Hand-Sculpted Red Dragon Vehicle Installation",
    description: "Gigantic hand-sculpted red dragon head and vehicle float artwork crafted for the '2K21 Michaelites Hike Walk' parade. Features intricate 3D horn and tooth detailing, dynamic flame whiskers, and matching trailer dragon murals.",
    image: "/images/event-decoration/dragon-parade-float.jpg",
    altText: "Hand-sculpted giant red dragon face mounted on a parade truck for Michaelites Hike Walk",
    aspectRatio: "portrait",
    projectType: "Completed Work",
    location: "Parade & Carnival, Sri Lanka",
    highlights: [
      "Handcrafted 3D sculpted dragon face mounted on truck front",
      "Side-panel flowing dragon body painting on trailer",
      "High-impact crimson and black theatrical theme",
      "Custom event banner integration"
    ],
    materials: ["Sculptural Materials", "Acrylic Paint", "Truck Armature"]
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
