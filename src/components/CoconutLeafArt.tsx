import React from 'react';
import { Palmtree, Sparkles, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface CoconutLeafArtProps {
  onSelectForEnquiry: (serviceName: string) => void;
}

export const CoconutLeafArt: React.FC<CoconutLeafArtProps> = ({ onSelectForEnquiry }) => {
  const craftFeatures = [
    {
      title: "Traditional Entrance Arches (Thoranam)",
      desc: "Sacred and welcoming archways woven with fresh coconut palm fronds, chevron braids, and symmetrical geometric patterns.",
    },
    {
      title: "School & Sports-Meet Gateways",
      desc: "Stately natural entrance architectures designed for annual sports meets, prize givings, and academic festivals.",
    },
    {
      title: "Handcrafted Bird & Floral Ornaments",
      desc: "Intricately folded leaf birds (Kuruvi), floral rosettes, and auspicious hanging tassels crafted entirely by hand.",
    },
    {
      title: "Stage Backdrops & Decorative Panels",
      desc: "Woven palm leaf tapestries forming acoustic and visually organic natural backgrounds for ceremonies.",
    },
  ];

  return (
    <section
      id="coconut-leaf-art"
      className="py-20 md:py-28 bg-forest-950 text-ivory-100 relative overflow-hidden botanical-pattern"
    >
      {/* Ambient Botanical Glow */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-leaf-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -left-32 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Traditional Craftsmanship"
          title="Nature, Crafted by Hand."
          subtitle="The Heritage of Sri Lankan Coconut Leaf Weaving"
          description="Celebrating traditional craftsmanship through intricate coconut-leaf patterns, handcrafted ornaments, and creative decorative installations built from biodegradable, sustainable natural palm materials."
          theme="dark"
          align="center"
        />

        {/* Hero Gallery Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Feature Showcase (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-forest-900 border-2 border-gold-500/40 shadow-2xl group">
              <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
                <img
                  src="/images/coconut-leaf-art/coconut-rosettes-mandala.jpg"
                  alt="Traditional Ceremonial Coconut Leaf Mandala Artworks by S. Arnojith"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent"></div>
              </div>

              {/* Caption Overlay */}
              <div className="p-6 sm:p-8 bg-forest-900/90 border-t border-gold-500/30">
                <div className="flex items-center gap-2 text-xs font-display uppercase tracking-widest text-gold-400 font-semibold mb-2">
                  <Palmtree className="w-4 h-4 text-leaf-400" />
                  <span>Authentic Handcrafted Masterpieces</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100 mb-2">
                  Traditional Coconut Leaf Rosettes &amp; Mandalas
                </h3>
                <p className="text-sm sm:text-base text-ivory-200/80 font-light leading-relaxed">
                  Handcrafted sunburst chakras, tiered floral mandalas, and ceremonial deity backdrops created from meticulously folded and woven fresh coconut fronds, natural pigments, and traditional Sri Lankan cultural motifs.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Editorial Composition (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Supporting Image 1: Ceremonial Pillars Collage */}
            <div className="rounded-xl overflow-hidden bg-forest-900 border border-gold-500/30 shadow-lg group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/images/coconut-leaf-art/coconut-pillars-collage.jpg"
                  alt="Ceremonial Coconut Palm Kalasam Pillars and Totems"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-serif font-bold text-ivory-100 block">
                    Ceremonial Coconut Palm Pillars &amp; Kalasams
                  </span>
                  <span className="text-[10px] text-gold-400 font-sans">
                    Tiered entrance pillars crafted for events, celebrations, and hall styling
                  </span>
                </div>
              </div>
            </div>

            {/* Supporting Image 2: Woven Tapestry Panel */}
            <div className="rounded-xl overflow-hidden bg-forest-900 border border-gold-500/30 shadow-lg group">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="/images/coconut-leaf-art/stage-panel.svg"
                  alt="Woven Coconut Leaf Stage Tapestry"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-serif font-bold text-ivory-100 block">
                    Geometric Leaf Tapestry Panel
                  </span>
                  <span className="text-[10px] text-gold-400 font-sans">
                    Diamond-weave decorative backdrop for stage ceremonies
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Craft Features Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mb-14">
          {craftFeatures.map((feat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-forest-900/60 border border-gold-500/20 hover:border-gold-500/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-4 h-4 text-leaf-400 shrink-0" />
                <h4 className="font-serif text-lg font-bold text-ivory-100">
                  {feat.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-ivory-200/75 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section Call to Action */}
        <div className="text-center p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-forest-900 via-forest-800 to-forest-900 border border-gold-500/40 shadow-xl max-w-3xl mx-auto">
          <Sparkles className="w-8 h-8 text-gold-400 mx-auto mb-3" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100 mb-3">
            Celebrate Your Event with Natural Heritage
          </h3>
          <p className="text-sm text-ivory-200/80 mb-6 max-w-xl mx-auto font-light">
            Whether preparing for a cultural festival, school sports meet, or ceremonial celebration, discuss your traditional coconut leaf decoration requirements directly.
          </p>
          <button
            onClick={() => {
              onSelectForEnquiry('Coconut Leaf Decoration');
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-display font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-gold-glow transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss a Coconut Leaf Decoration Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
