import React from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface EventDecorationProps {
  onSelectForEnquiry: (serviceName: string) => void;
}

export const EventDecoration: React.FC<EventDecorationProps> = ({ onSelectForEnquiry }) => {
  const eventTypes = [
    {
      title: "Stage & Ceremonial Backdrops",
      desc: "Fabric draping, floral frames, and atmospheric lighting styled to create an unforgettable focal center.",
      image: "/images/event-decoration/stage-decor.svg",
      tag: "Stage Architecture",
    },
    {
      title: "Welcome Foyers & Entrance Architecture",
      desc: "Warm arrival walkways featuring decorative pedestals, natural foliage, and bespoke welcome greeting displays.",
      image: "/images/event-decoration/welcome-foyer.svg",
      tag: "Walkway Styling",
    },
    {
      title: "Cultural Festivals & School Functions",
      desc: "Thematic environments combining traditional cultural motifs with disciplined spatial arrangement for institutions.",
      image: "/images/coconut-leaf-art/sports-meet.svg",
      tag: "Institutional Functions",
    },
  ];

  return (
    <section id="event-decoration" className="py-20 md:py-28 bg-ivory-100 text-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Atmospheric Styling"
          title="Beautiful Events. Memorable Experiences."
          subtitle="Spatial Harmony · Floral Accents · Cultural Elegance"
          description="Thoughtfully designed decorative spaces that bring celebrations, gatherings, and special occasions to life through balanced compositions, fabric drapery, and natural elements."
          theme="light"
          align="center"
        />

        {/* Event Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-beige-200 overflow-hidden shadow-sm hover:shadow-botanical hover:border-gold-500/40 transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-forest-950">
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
                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-beige-200 flex items-center justify-between text-xs font-medium text-forest-800">
                  <span className="flex items-center gap-1.5 text-botanical-700">
                    <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                    Custom Spatial Concept
                  </span>
                  <span className="font-display uppercase tracking-wider text-gold-600 font-semibold group-hover:translate-x-1 transition-transform">
                    View &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ambient Process Highlight */}
        <div className="rounded-2xl bg-forest-950 text-ivory-100 p-8 sm:p-12 border border-gold-500/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-xs font-display uppercase tracking-widest text-gold-400 font-semibold">
              Personalized Consultation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100">
              Have an Upcoming Celebration or School Function?
            </h3>
            <p className="text-sm text-ivory-200/80 leading-relaxed font-light">
              Every venue has distinct spatial characteristics. From entrance archways to ceremonial backdrops, I craft solutions customized to your venue, theme, and schedule.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => {
                onSelectForEnquiry('Event Decoration');
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-display font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-gold-glow transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Plan Your Event Decoration</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
