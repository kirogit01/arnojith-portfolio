import React from 'react';
import { Palette, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { skillCategories, processSteps } from '../data/services';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-beige-100/60 text-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Capabilities &amp; Workflow"
          title="Skills &amp; Creative Process"
          subtitle="Grounded in Practice · Driven by Creativity"
          description="A balanced multidisciplinary skill set spanning creative visual arts, traditional Sri Lankan botanical crafts, and dependable residential/commercial finishing techniques."
          theme="light"
          align="center"
        />

        {/* 3 Skill Groups (No fake percentages) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          {/* Creative Skills */}
          <div className="p-8 rounded-2xl bg-white border border-beige-200 shadow-sm hover:shadow-botanical hover:border-gold-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-forest-900/10 text-forest-800 flex items-center justify-center mb-6">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-forest-950 mb-2">
              Creative Skills
            </h3>
            <p className="text-xs text-gold-600 font-display uppercase tracking-widest font-semibold mb-6">
              Aesthetics &amp; Craftsmanship
            </p>
            <ul className="space-y-3">
              {skillCategories.creative.map((skill, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                  <CheckCircle2 className="w-4 h-4 text-leaf-600 shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="p-8 rounded-2xl bg-white border border-beige-200 shadow-sm hover:shadow-botanical hover:border-gold-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-botanical-700/10 text-botanical-700 flex items-center justify-center mb-6">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-forest-950 mb-2">
              Technical Skills
            </h3>
            <p className="text-xs text-botanical-700 font-display uppercase tracking-widest font-semibold mb-6">
              Finishing &amp; Fitting
            </p>
            <ul className="space-y-3">
              {skillCategories.technical.map((skill, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                  <CheckCircle2 className="w-4 h-4 text-botanical-600 shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Strengths */}
          <div className="p-8 rounded-2xl bg-white border border-beige-200 shadow-sm hover:shadow-botanical hover:border-gold-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-forest-950 mb-2">
              Personal Strengths
            </h3>
            <p className="text-xs text-gold-600 font-display uppercase tracking-widest font-semibold mb-6">
              Work Ethic &amp; Problem Solving
            </p>
            <ul className="space-y-3">
              {skillCategories.personal.map((skill, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 4-Step Creative Process */}
        <div className="pt-8 border-t border-beige-300">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-display tracking-[0.2em] uppercase text-gold-600 font-semibold block mb-2">
              Structured Methodology
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 mb-3">
              How We Work Together
            </h3>
            <p className="text-sm text-charcoal-600">
              From the initial concept meeting to the celebratory handover, every project follows a clear, communicative workflow.
            </p>
          </div>

          {/* Process Timeline: Horizontal on Desktop, Vertical on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative p-6 rounded-xl bg-white border border-beige-200 shadow-sm flex flex-col justify-between group hover:border-gold-500/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-gold-500/70 group-hover:text-gold-500 transition-colors">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-display uppercase tracking-widest px-2 py-0.5 rounded bg-beige-200 text-charcoal-700">
                      {step.number}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-forest-950 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-3 border-t border-beige-200 text-[11px] sm:text-xs text-charcoal-500">
                  {step.details.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gold-500"></span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
