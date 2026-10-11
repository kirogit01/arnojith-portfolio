import React from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface EventDecorationProps {
  onSelectForEnquiry: (serviceName: string) => void;
}

export const EventDecoration: React.FC<EventDecorationProps> = ({ onSelectForEnquiry }) => {
  const eventTypes = [
    {
      title: "Themed Birthday Party Stage Styling",
      desc: "Custom pastel balloon garland arches, floral butterfly accents, cylindrical name pedestals, and ambient drapery for special family celebrations.",
      image: "/images/event-decoration/birthday-balloon-decor.jpg",
      tag: "Celebration Stage",
    },
    {
      title: "Grand Cultural Festival Entrance Gateways",
      desc: "Monumental cultural gateways combining traditional character silhouettes, chariot wheels, archway Tamil lettering, and vibrant on-site builds.",
      image: "/images/event-decoration/cultural-gateway-festival.jpg",
      tag: "Gateway Architecture",
    },
    {
      title: "Sculptural Peacock Parade Floats",
      desc: "Handcrafted 3D sculpted peacock figure with circular hand-painted feather plume mounted for annual school walks and celebration parades.",
      image: "/images/event-decoration/peacock-parade-float.jpg",
      tag: "Parade & Sculpture",
    },
    {
      title: "Michaelites Hike Walk Dragon Float",
      desc: "Gigantic theatrical 3D red dragon head sculpture with flame whiskers and side-panel dragon murals built on parade vehicle trucks.",
      image: "/images/event-decoration/dragon-parade-float.jpg",
      tag: "Carnival Installation",
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
          description="Thoughtfully designed decorative spaces that bring celebrations, gatherings, and special occasions to life through balanced compositions, balloon artistry, parade floats, and cultural entrance gateways."
          theme="light"
          align="center"
        />

        {/* Event Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
