import React from 'react';
import {
  Paintbrush,
  Layers,
  Wrench,
  Zap,
  ShieldCheck,
  Camera,
  ArrowRight,
  Info
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { technicalServices } from '../data/services';

interface TechnicalServicesProps {
  onSelectForEnquiry: (serviceName: string) => void;
}

export const TechnicalServices: React.FC<TechnicalServicesProps> = ({ onSelectForEnquiry }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Paintbrush':
        return <Paintbrush className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Camera':
        return <Camera className="w-5 h-5" />;
      default:
        return <Wrench className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-ivory-100 text-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Practical Expertise"
          title="Practical Skills. Reliable Service."
          subtitle="Precision Finishing · Electrical &amp; Mechanical Workmanship"
          description="Alongside creative and decorative craftsmanship, I have developed disciplined practical skills in residential and commercial technical services, delivering reliable execution with meticulous attention to detail."
          theme="light"
          align="center"
        />

        {/* Technical Services Grid (Restrained, elegant card system) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technicalServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-xl bg-white border border-beige-200 hover:border-gold-500/50 hover:shadow-botanical transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-forest-900/10 text-forest-800 flex items-center justify-center group-hover:bg-forest-900 group-hover:text-gold-400 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-display uppercase tracking-wider text-charcoal-500">
                    Technical
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-forest-950 mb-2 group-hover:text-botanical-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {service.description}
                </p>

                {service.note && (
                  <div className="mt-3 flex items-start gap-1.5 text-[11px] text-botanical-700 bg-forest-800/5 p-2 rounded">
                    <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-gold-600" />
                    <span>{service.note}</span>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-4 border-t border-beige-200">
                <button
                  onClick={() => {
                    onSelectForEnquiry(service.title);
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-display uppercase tracking-wider font-semibold text-forest-800 hover:text-gold-600 transition-colors"
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Link back to Creative Disciplines */}
        <div className="p-6 sm:p-8 rounded-2xl bg-beige-200/60 border border-beige-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-xs font-display uppercase tracking-widest text-gold-600 font-semibold">
              Holistic Solutions
            </span>
            <p className="font-serif text-lg sm:text-xl font-bold text-forest-950">
              Need creative event decoration, coconut leaf craft, or graphic design?
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0 justify-center">
            <a
              href="#coconut-leaf-art"
              className="px-4 py-2 text-xs font-display uppercase tracking-wider font-semibold rounded-full bg-forest-900 text-gold-400 hover:bg-forest-950 transition-colors"
            >
              Coconut Leaf Art
            </a>
            <a
              href="#event-decoration"
              className="px-4 py-2 text-xs font-display uppercase tracking-wider font-semibold rounded-full bg-forest-900 text-gold-400 hover:bg-forest-950 transition-colors"
            >
              Event Decor
            </a>
            <a
              href="#graphic-design"
              className="px-4 py-2 text-xs font-display uppercase tracking-wider font-semibold rounded-full bg-forest-900 text-gold-400 hover:bg-forest-950 transition-colors"
            >
              Graphic Design
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
