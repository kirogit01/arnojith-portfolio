import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  description,
  align = 'center',
  theme = 'light',
}) => {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-gold-500/70"></span>
          <span className="text-[11px] md:text-xs font-display uppercase tracking-[0.22em] text-gold-500 font-semibold">
            {eyebrow}
          </span>
          <span className="w-6 h-[1px] bg-gold-500/70"></span>
        </div>
      )}
      
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] mb-4 ${
          isDark ? 'text-ivory-100' : 'text-forest-950'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={`font-serif text-lg md:text-xl italic mb-3 ${isDark ? 'text-gold-400' : 'text-botanical-700'}`}>
          {subtitle}
        </p>
      )}

      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            isDark ? 'text-ivory-200/80' : 'text-charcoal-700'
          }`}
        >
          {description}
        </p>
      )}

      <div className={`mt-5 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-[1px] bg-gold-500/50"></div>
        <div className="w-1.5 h-1.5 rotate-45 bg-gold-500"></div>
        <div className="w-12 h-[1px] bg-gold-500/50"></div>
      </div>
    </div>
  );
};
