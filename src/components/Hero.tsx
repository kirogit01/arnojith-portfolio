import React from 'react';
import { ArrowDown, Sparkles, MessageSquare, Award } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-forest-950 text-ivory-100 flex items-center pt-28 pb-16 md:py-32 overflow-hidden botanical-pattern"
    >
      {/* Decorative Atmospheric Lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-leaf-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Narrative */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest-900/80 border border-gold-500/30 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-leaf-400 animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-display tracking-[0.2em] uppercase text-gold-400 font-semibold">
                Independent Creative Professional
              </span>
            </div>

            {/* Main & Supporting Headlines */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-ivory-100 leading-[1.06]">
                {siteConfig.headlines.primary}
              </h1>
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-gold-400/90 font-medium">
                {siteConfig.headlines.supporting}
              </p>
            </div>

            {/* Introduction Statement */}
            <p className="text-base sm:text-lg md:text-xl text-ivory-200/85 leading-relaxed max-w-2xl font-light">
              I'm <strong className="text-ivory-100 font-semibold">S. Arnojith</strong>, a graphic designer, event decorator, and traditional coconut-leaf artist passionate about transforming creative ideas into beautiful visual experiences.
            </p>

            {/* Company Association Footnote */}
            <div className="flex items-center gap-3 p-3.5 rounded-lg bg-forest-900/60 border border-forest-700/60 max-w-xl">
              <div className="p-2 rounded bg-forest-800 text-gold-400">
                <Award className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-ivory-200/90">
                <span className="text-gold-400 font-medium">Business Affiliation: </span>
                {siteConfig.companyRelationship}
              </p>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-display font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-gold-glow transition-all duration-200 group"
              >
                <span>Explore My Work</span>
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-transparent hover:bg-forest-900 text-ivory-100 hover:text-gold-400 border border-gold-500/40 hover:border-gold-400 text-xs sm:text-sm font-sans font-medium transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-gold-400" />
                <span>Discuss a Project</span>
              </a>
            </div>

            {/* Supporting Pillar Descriptors */}
            <div className="pt-4 border-t border-forest-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-display uppercase tracking-widest text-ivory-200/60">
              <span className="flex items-center gap-2 text-ivory-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                Graphic Design
              </span>
              <span className="flex items-center gap-2 text-ivory-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-leaf-500"></span>
                Event Decoration
              </span>
              <span className="flex items-center gap-2 text-ivory-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                Traditional Craftsmanship
              </span>
            </div>

          </div>

          {/* Right Column: Featured Visual Hero Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Luxury Gold Frame */}
              <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-tr from-gold-600/40 via-forest-800 to-gold-400/30 opacity-70 blur-xs"></div>
              
              <div className="relative rounded-xl overflow-hidden bg-forest-900 border border-gold-500/40 shadow-2xl">
                {/* Visual Image */}
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <img
                    src="/images/artist/arnojith.jpg"
                    alt="S. Arnojith - Graphic Designer, Event Decorator, Coconut Leaf Artist"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Metadata Caption */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-forest-950/85 backdrop-blur-md border border-gold-500/30">
                    <span className="inline-block text-[10px] font-display uppercase tracking-widest text-gold-400 font-semibold mb-1">
                      S. Arnojith
                    </span>
                    <h3 className="font-serif text-lg font-bold text-ivory-100">
                      Creative Professional &amp; Artist
                    </h3>
                    <p className="text-xs text-ivory-200/80 font-sans mt-0.5">
                      Graphic Design · Event Decoration · Traditional Craftsmanship
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Ornaments */}
              <div className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-gold-500 pointer-events-none"></div>
              <div className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-gold-500 pointer-events-none"></div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 pt-6 flex justify-center">
          <a
            href="#introduction"
            className="inline-flex flex-col items-center gap-1.5 text-ivory-200/60 hover:text-gold-400 transition-colors group"
            aria-label="Scroll to introduction section"
          >
            <span className="text-[10px] font-display tracking-widest uppercase">Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-gold-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
