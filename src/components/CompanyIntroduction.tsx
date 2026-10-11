import React from 'react';
import { Briefcase, Check } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { siteConfig } from '../data/siteConfig';

export const CompanyIntroduction: React.FC = () => {
  const brandPillars = [
    {
      title: "Integrated Creative Delivery",
      desc: "Uniting traditional craftsmanship with contemporary visual design for comprehensive event styling.",
    },
    {
      title: "Practical Technical Reliability",
      desc: "Combining aesthetic vision with dependable technical finishing, electrical safety, and structural fittings.",
    },
    {
      title: "Cultural & Natural Authenticity",
      desc: "Championing natural Sri Lankan coconut palm artistry and sustainable eco-friendly event decor.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-forest-950 text-ivory-100 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="The Company Behind the Services"
          title="Aathiraa Solutions"
          subtitle="Business Brand Affiliation"
          description="Aathiraa Solutions is the business brand associated with S. Arnojith's creative and service work, connecting event decoration, traditional coconut-leaf artistry, graphic design, and related practical finishing services."
          theme="dark"
          align="center"
        />

        {/* Company Card Feature */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-forest-900/80 border border-gold-500/30 p-8 sm:p-12 shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8 pb-8 border-b border-forest-800">
            {/* Logo Treatment */}
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div className="p-4 rounded-xl bg-forest-950 border border-gold-500/40 shadow-inner w-full max-w-xs">
                <img
                  src="/images/branding/aathiraa-logo.svg"
                  alt="Aathiraa Solutions Brand Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Narrative Explanation */}
            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-forest-800 text-gold-400 text-xs font-display uppercase tracking-wider font-semibold">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Professional Collaboration</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ivory-100">
                Bridging Craft &amp; Service Execution
              </h3>
              <p className="text-sm text-ivory-200/80 leading-relaxed font-light">
                Under the banner of <strong className="text-gold-400 font-semibold">{siteConfig.companyName}</strong>, S. Arnojith facilitates both creative installations and hands-on maintenance, delivering an integrated experience for celebratory and residential requirements.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            {brandPillars.map((p, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-ivory-100">
                    {p.title}
                  </h4>
                </div>
                <p className="text-xs text-ivory-200/70 leading-relaxed pl-7">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-forest-800/80 text-center">
            <span className="text-xs font-sans text-ivory-200/60 italic">
              Official company portfolio and web presence URL can be integrated as expansion continues.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
