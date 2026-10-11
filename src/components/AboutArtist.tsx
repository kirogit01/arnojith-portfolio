import React from 'react';
import { Palette, GraduationCap, Target } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { siteConfig } from '../data/siteConfig';

export const AboutArtist: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-forest-950 text-ivory-100 relative overflow-hidden botanical-pattern">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-leaf-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Biography &amp; Background"
          title="The Person Behind the Creations"
          subtitle="Creativity · Technical Knowledge · Continuous Growth"
          description="A multidisciplinary creative professional combining technical engineering foundations, graphic design training, and traditional Sri Lankan botanical artistry."
          theme="dark"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Visual Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Gold Border Accents */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-gold-500/30 to-leaf-500/20 blur-xs"></div>
              
              <div className="relative rounded-xl overflow-hidden bg-forest-900 border border-gold-500/40 shadow-2xl">
                <div className="aspect-[4/5] relative overflow-hidden group">
                  <img
                    src="/images/artist/arnojith-portrait.svg"
                    alt="S. Arnojith - Graphic Designer, Event Decorator, Coconut Leaf Artist"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-70"></div>
                </div>

                <div className="p-6 bg-forest-900/90 border-t border-gold-500/30 text-center">
                  <h3 className="font-serif text-2xl font-bold text-ivory-100">
                    S. Arnojith
                  </h3>
                  <p className="text-xs font-display uppercase tracking-widest text-gold-400 font-semibold mt-1">
                    Independent Creative Professional
                  </p>
                  <p className="text-[11px] text-leaf-400 font-sans mt-1">
                    {siteConfig.companyRelationship}
                  </p>
                </div>
              </div>

              {/* Decorative Frame Marks */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gold-500 pointer-events-none"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-gold-500 pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column: Factual Biography & Ambitions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-4 rounded-lg bg-forest-900/60 border border-forest-800 text-sm text-ivory-200/90 leading-relaxed font-light">
              <p className="mb-3">
                Hello! My name is <strong className="text-ivory-100 font-semibold">S. Arnojith</strong>. I studied <strong className="text-gold-400 font-semibold">Engineering Technology</strong> for my Advanced Level examinations. Following that foundation, I pursued studies in essential practical disciplines including <strong className="text-ivory-100 font-medium">Quantity Surveying</strong>, <strong className="text-ivory-100 font-medium">English</strong>, and <strong className="text-ivory-100 font-medium">Information Technology</strong>.
              </p>
              <p className="mb-3">
                To expand my visual and aesthetic capabilities, I completed formal training in <strong className="text-gold-400 font-semibold">Graphic Design</strong>. This design training empowers me to approach projects with a structured sense of composition, color harmony, and visual communication.
              </p>
              <p>
                In parallel with design, I developed hands-on mastery in a diverse range of finishing and craft fields—including traditional <strong className="text-leaf-400 font-medium">Coconut Leaf Decoration</strong>, <strong className="text-ivory-100 font-medium">Event Decoration</strong>, <strong className="text-ivory-100 font-medium">Painting Works</strong>, <strong className="text-ivory-100 font-medium">Ceiling Fitting</strong>, <strong className="text-ivory-100 font-medium">Pipeline Works</strong>, <strong className="text-ivory-100 font-medium">Electrical Wiring</strong>, and <strong className="text-ivory-100 font-medium">Waterproofing</strong>.
              </p>
            </div>

            {/* Core Ambition Statement */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-forest-900 to-forest-850 border-l-4 border-gold-500 border-t border-r border-b border-forest-800 shadow-md">
              <div className="flex items-center gap-2 mb-2 text-xs font-display uppercase tracking-widest text-gold-400 font-semibold">
                <Target className="w-4 h-4" />
                <span>Professional Ambition</span>
              </div>
              <p className="font-serif text-lg sm:text-xl text-ivory-100 leading-snug font-medium italic">
                "My ambition is to become an outstanding and successful Event Decorator by bringing together creativity, technical knowledge, practical experience, and continuous learning."
              </p>
            </div>

            {/* Factual Highlights Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-forest-900/40 border border-forest-800">
                <div className="flex items-center gap-2 mb-1.5 text-gold-400">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs font-display uppercase tracking-wider font-semibold">Education &amp; Studies</span>
                </div>
                <p className="text-xs text-ivory-200/80 leading-relaxed">
                  Engineering Technology (A/L), Quantity Surveying, English, and Information Technology.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-forest-900/40 border border-forest-800">
                <div className="flex items-center gap-2 mb-1.5 text-gold-400">
                  <Palette className="w-4 h-4" />
                  <span className="text-xs font-display uppercase tracking-wider font-semibold">Design Training</span>
                </div>
                <p className="text-xs text-ivory-200/80 leading-relaxed">
                  Completed training in Graphic Design to enhance composition, typography, and visual branding.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
