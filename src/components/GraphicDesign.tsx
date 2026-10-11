import React from 'react';
import { Palette, Layers, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface GraphicDesignProps {
  onSelectForEnquiry: (serviceName: string) => void;
}

export const GraphicDesign: React.FC<GraphicDesignProps> = ({ onSelectForEnquiry }) => {
  const designDisciplines = [
    {
      title: "Brand Identity & Logo Concepts",
      desc: "Distinctive emblems, cohesive typography palettes, and consistent identity guidelines designed for commercial and creative ventures.",
      image: "/images/graphic-design/brand-identity.svg",
      tag: "Identity Design",
    },
    {
      title: "Event Banners & Cultural Posters",
      desc: "High-contrast promotional posters balancing bilingual Tamil and English typography, event hierarchy, and cultural aesthetics.",
      image: "/images/graphic-design/event-poster.svg",
      tag: "Print & Poster",
    },
    {
      title: "Ceremonial Invitations & Stationery",
      desc: "Bespoke invitation cards with gold foil accents, botanical leaf borders, and refined formal typography.",
      image: "/images/graphic-design/invitation-suite.svg",
      tag: "Stationery Design",
    },
  ];

  return (
    <section id="graphic-design" className="py-20 md:py-28 bg-beige-100/70 text-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Visual Communication"
          title="Creative Ideas, Beautifully Designed."
          subtitle="Typography · Composition · Print & Digital Media"
          description="Exploring visual communication through thoughtful layouts, engaging compositions, and creative design. Completed training in Graphic Design to elevate visual storytelling."
          theme="light"
          align="center"
        />

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {designDisciplines.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-beige-200 overflow-hidden shadow-sm hover:shadow-botanical hover:border-gold-500/40 transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-forest-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[10px] font-display uppercase tracking-widest px-2.5 py-1 rounded bg-forest-950/80 text-gold-400 font-semibold backdrop-blur-sm border border-gold-500/30">
                  {item.tag}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 mb-2 group-hover:text-botanical-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-beige-200 flex items-center justify-between text-xs font-medium text-forest-800">
                  <span className="flex items-center gap-1.5 text-botanical-700">
                    <Layers className="w-3.5 h-3.5 text-gold-500" />
                    Concept &amp; Print Ready
                  </span>
                  <span className="font-display uppercase tracking-wider text-gold-600 font-semibold group-hover:translate-x-1 transition-transform">
                    Explore &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center">
          <button
            onClick={() => {
              onSelectForEnquiry('Graphic Design');
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-forest-900 hover:bg-forest-950 text-gold-400 hover:text-gold-300 font-display font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-gold-glow transition-all"
          >
            <Palette className="w-4 h-4" />
            <span>Discuss a Graphic Design Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
