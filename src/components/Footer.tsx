import React from 'react';
import { ArrowUp } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-ivory-100 border-t border-gold-500/30 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Botanical Flourish Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-forest-800">
          
          {/* Brand & Persona Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="font-display text-2xl font-bold tracking-[0.16em] text-ivory-100">
                {siteConfig.artistName}
              </span>
            </div>
            
            <p className="text-xs font-display uppercase tracking-widest text-gold-400 font-semibold">
              {siteConfig.headlines.tagline}
            </p>

            <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed font-light max-w-sm">
              {siteConfig.professionalDescriptor}. Dedicated to crafting meaningful cultural installations, event atmospheres, and visual communication.
            </p>

            <div className="pt-2 text-xs text-leaf-400 font-medium">
              <span>{siteConfig.companyRelationship}</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-display uppercase tracking-widest text-gold-400 font-semibold">
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-ivory-200/80 font-light">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gold-400 transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties & Affiliations (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-display uppercase tracking-widest text-gold-400 font-semibold">
              Creative Disciplines
            </p>
            <ul className="space-y-1.5 text-xs text-ivory-200/75 font-light">
              <li>• Traditional Coconut Leaf Weaving (Thoranam)</li>
              <li>• Ceremonial Event Decoration &amp; Backdrops</li>
              <li>• Graphic Design &amp; Brand Visuals</li>
              <li>• Residential Finishing &amp; Technical Fittings</li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors p-2 rounded-lg bg-forest-900 border border-forest-800 hover:border-gold-500/50"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-200/60 font-light">
          <p>
            &copy; {currentYear} {siteConfig.artistName}. All rights reserved. {siteConfig.companyRelationship}.
          </p>
          <p className="flex items-center gap-1.5 text-ivory-200/50">
            <span>Designed with</span>
            <span className="text-gold-500 font-serif italic text-sm">Creativity &amp; Tradition</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
