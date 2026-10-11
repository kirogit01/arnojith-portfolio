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

            {/* Social Media & Contact Links */}
            <div className="pt-3">
              <span className="text-[11px] font-display uppercase tracking-wider text-gold-400/90 font-semibold block mb-2.5">
                Connect on Social &amp; Messaging
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-lg bg-forest-900 border border-forest-800 text-gold-400 hover:text-white hover:bg-forest-800 hover:border-gold-500/60 flex items-center justify-center transition-all group"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>

                {/* TikTok */}
                {siteConfig.contact.tiktok && (
                  <a
                    href={siteConfig.contact.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-9 h-9 rounded-lg bg-forest-900 border border-forest-800 text-gold-400 hover:text-white hover:bg-forest-800 hover:border-gold-500/60 flex items-center justify-center transition-all group"
                  >
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.09 2.35 2.33.88.22 1.83.04 2.55-.49.77-.52 1.25-1.39 1.35-2.32.06-2.11.03-4.22.04-6.33V.02h.42z"/>
                    </svg>
                  </a>
                )}

                {/* Facebook */}
                {siteConfig.contact.facebook && (
                  <a
                    href={siteConfig.contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 rounded-lg bg-forest-900 border border-forest-800 text-gold-400 hover:text-white hover:bg-forest-800 hover:border-gold-500/60 flex items-center justify-center transition-all group"
                  >
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  aria-label="Email"
                  className="w-9 h-9 rounded-lg bg-forest-900 border border-forest-800 text-gold-400 hover:text-white hover:bg-forest-800 hover:border-gold-500/60 flex items-center justify-center transition-all group"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
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
