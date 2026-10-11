export interface SiteConfig {
  artistName: string;
  professionalDescriptor: string;
  companyName: string;
  companyRelationship: string;
  headlines: {
    primary: string;
    supporting: string;
    tagline: string;
    signature: string;
  };
  contact: {
    whatsappNumber: string; // e.g. "94771234567" (country code without '+')
    displayPhone: string;
    email: string;
    location: string;
    instagram?: string;
    facebook?: string;
  };
  navLinks: { name: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  artistName: "S. ARNOJITH",
  professionalDescriptor: "Graphic Designer | Event Decorator | Traditional Coconut Leaf Artist",
  companyName: "Aathiraa Solutions",
  companyRelationship: "Associated with Aathiraa Solutions",
  headlines: {
    primary: "Creativity Meets Tradition.",
    supporting: "Designing Ideas. Crafting Experiences.",
    tagline: "Your Vision. Our Creation.",
    signature: "From Simple Ideas to Beautiful Results.",
  },
  contact: {
    // Configurable contact details
    whatsappNumber: "94770000000", // Update with verified Sri Lankan WhatsApp number
    displayPhone: "+94 77 000 0000",
    email: "contact@arnojith.com",
    location: "Sri Lanka",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ],
};
