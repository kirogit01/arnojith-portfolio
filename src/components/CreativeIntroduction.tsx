import React from 'react';
import { ArrowRight, Palmtree, Sparkles, Palette } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const CreativeIntroduction: React.FC = () => {
  return (
    <section id="introduction" className="py-20 md:py-28 bg-ivory-100 text-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Creative Philosophy"
          title="Where Creativity Meets Craftsmanship"
          subtitle="From Simple Ideas to Beautiful Results"
          description="Every creative project begins with an idea. Through graphic design, traditional coconut-leaf artistry, and event decoration, I aim to transform those ideas into meaningful visual experiences. My approach combines creative thinking, cultural inspiration, and practical skills."
          theme="light"
          align="center"
        />

        {/* Varied Editorial Layout for the 3 Specialties */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Card 1: Traditional Coconut Leaf Art (Featured Large Editorial Tile) */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-forest-950 text-ivory-100 border border-gold-500/30 shadow-botanical relative overflow-hidden group">
            {/* Background flourish */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-leaf-600/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div>
              <div className="w-14 h-14 rounded-xl bg-forest-800 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-105 transition-transform">
                <Palmtree className="w-7 h-7" />
              </div>
              <span className="text-xs font-display tracking-widest uppercase text-gold-400 font-semibold block mb-2">
                Signature Discipline · 01
              </span>
              <h3 className="font-serif text-3xl font-bold text-ivory-100 mb-4 leading-tight">
                Traditional Coconut Leaf Art
              </h3>
              <p className="text-ivory-200/85 leading-relaxed text-sm sm:text-base font-light mb-6">
                Nature-inspired handcrafted decoration that celebrates traditional artistry. Specialized in large ceremonial entrance arches (Thoranam), cultural festival canopies, and intricate geometric leaf tapestries crafted from freshly woven coconut fronds.
              </p>
              
              <ul className="space-y-2 text-xs sm:text-sm text-ivory-200/80 mb-8 border-t border-forest-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                  Traditional entrance gateways &amp; Thoranam arches
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf-400"></span>
                  School functions &amp; sports-meet welcome structures
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                  Intricate diamond weave &amp; bird motif ornaments
                </li>
              </ul>
            </div>

            <a
              href="#coconut-leaf-art"
              className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wider font-semibold text-gold-400 hover:text-gold-300 transition-colors pt-2 group-hover:translate-x-1 duration-200"
            >
              <span>Explore Leaf Artistry</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2 & 3: Event Decoration and Graphic Design in stacked editorial composition */}
          <div className="md:col-span-12 lg:col-span-7 flex flex-col gap-8">
            
            {/* Specialty 2: Event Decoration */}
            <div className="flex-1 p-8 sm:p-10 rounded-2xl bg-white border border-beige-200 shadow-sm hover:shadow-botanical hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-800/10 border border-forest-800/20 flex items-center justify-center text-forest-800 group-hover:bg-forest-800 group-hover:text-gold-400 transition-colors">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-display tracking-widest uppercase text-botanical-700 font-semibold">
                    Discipline · 02
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-3">
                  Event Decoration
                </h3>
                <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed mb-4">
                  Decorative installations that help transform event spaces into memorable environments. Blending graceful drapery, floral accents, cultural backdrops, and atmospheric illumination for celebrations and ceremonies.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-forest-800 mb-6">
                  <span className="px-3 py-1 rounded-full bg-forest-800/5 border border-forest-800/15">
                    Ceremonial Backdrops
                  </span>
                  <span className="px-3 py-1 rounded-full bg-forest-800/5 border border-forest-800/15">
                    Welcome Walkways
                  </span>
                  <span className="px-3 py-1 rounded-full bg-forest-800/5 border border-forest-800/15">
                    Stage Styling
                  </span>
                </div>
              </div>

              <a
                href="#event-decoration"
                className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wider font-semibold text-forest-800 hover:text-gold-600 transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>View Event Decorations</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Specialty 3: Graphic Design */}
            <div className="flex-1 p-8 sm:p-10 rounded-2xl bg-white border border-beige-200 shadow-sm hover:shadow-botanical hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 group-hover:bg-forest-950 group-hover:text-gold-400 transition-colors">
                    <Palette className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-display tracking-widest uppercase text-gold-600 font-semibold">
                    Discipline · 03
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-3">
                  Graphic Design
                </h3>
                <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed mb-4">
                  Creative visual communication through thoughtful composition, typography, and design. Crafting logo concepts, event banners, ceremonial invitation suites, and high-impact digital graphics.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-forest-800 mb-6">
                  <span className="px-3 py-1 rounded-full bg-forest-800/5 border border-forest-800/15">
                    Brand Identity
                  </span>
                  <span className="px-3 py-1 rounded-full bg-forest-800/5 border border-forest-800/15">
                    Promotional Posters
                  </span>
                  <span className="px-3 py-1 rounded-full bg-forest-800/5 border border-forest-800/15">
                    Invitation Suites
                  </span>
                </div>
              </div>

              <a
                href="#graphic-design"
                className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wider font-semibold text-forest-800 hover:text-gold-600 transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>View Graphic Artwork</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
