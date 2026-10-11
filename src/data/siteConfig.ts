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
    whatsappNumber: string; // e.g. "94757531336" (country code without '+')
    displayPhone: string;
    email: string;
    location: string;
    facebook?: string;
    tiktok?: string;
    instagram?: string;
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
    // Verified contact details
    whatsappNumber: "94757531336",
    displayPhone: "+94 75 753 1336 (075 753 1336)",
    email: "arnojithanoch03@gmail.com",
    location: "Sri Lanka",
    facebook: "https://www.facebook.com/share/1ZxQDwszwV/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@adhiraa_solutions?_r=1&_t=ZS-9AT0kFM6Vam",
  },
  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ],
};
