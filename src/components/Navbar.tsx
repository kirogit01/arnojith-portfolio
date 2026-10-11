import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-forest-950/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-lg'
          : 'bg-gradient-to-b from-forest-950/90 via-forest-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
          >
            <span className="font-display text-lg sm:text-xl font-bold tracking-[0.18em] text-ivory-100 group-hover:text-gold-400 transition-colors">
              {siteConfig.artistName}
            </span>
            <span className="text-[10px] tracking-wider uppercase text-gold-400/90 font-sans font-medium">
              Creative Portfolio
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-ivory-100/90 hover:text-gold-400 hover:bg-forest-900/60 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider font-display bg-gradient-to-r from-gold-500 to-gold-600 text-forest-950 hover:from-gold-400 hover:to-gold-500 rounded-full shadow-sm hover:shadow-gold-glow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <span>Let's Create</span>
              <Sparkles className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 text-ivory-100 hover:text-gold-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-lg"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[57px] bg-forest-950/95 backdrop-blur-xl border-t border-gold-500/20 z-40 md:hidden flex flex-col justify-between p-6 animate-fadeIn"
        >
          <div className="space-y-4 pt-4">
            <p className="text-xs font-display tracking-widest text-gold-500/80 uppercase mb-2">
              Navigation
            </p>
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="block text-2xl font-serif text-ivory-100 hover:text-gold-400 transition-colors py-2 border-b border-forest-800/60"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-forest-800/80 space-y-4 pb-10">
            <div className="text-xs text-ivory-200/70">
              <span className="block text-gold-400 font-semibold mb-1">
                {siteConfig.companyRelationship}
              </span>
              <span className="block">{siteConfig.professionalDescriptor}</span>
            </div>

            <a
              href="#contact"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold uppercase tracking-wider font-display bg-gold-500 hover:bg-gold-400 text-forest-950 rounded-full transition-colors shadow-lg"
            >
              <span>Let's Create Together</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
