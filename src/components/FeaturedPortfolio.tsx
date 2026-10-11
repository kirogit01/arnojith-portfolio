import React, { useState } from 'react';
import { Eye, MapPin } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { portfolioProjects, PortfolioProject, ProjectCategory } from '../data/portfolioProjects';
import { ProjectModal } from './ProjectModal';

interface FeaturedPortfolioProps {
  onSelectForEnquiry: (serviceName: string) => void;
}

export const FeaturedPortfolio: React.FC<FeaturedPortfolioProps> = ({ onSelectForEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Coconut Leaf Art',
    'Event Decoration',
    'Graphic Design',
    'Technical Work',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-beige-100/60 text-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Curated Portfolio"
          title="Selected Creative Works"
          subtitle="Designing Ideas. Crafting Experiences."
          description="A collection of creative projects, decorative installations, and visual designs showcasing traditional natural craftsmanship, event atmospheres, and visual communication."
          theme="light"
          align="center"
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? portfolioProjects.length
                : portfolioProjects.filter((p) => p.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-forest-900 text-gold-400 shadow-md font-semibold'
                    : 'bg-white hover:bg-beige-200/80 text-charcoal-700 border border-beige-300'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-forest-800 text-gold-300' : 'bg-beige-200 text-charcoal-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-white border border-beige-200 overflow-hidden shadow-sm hover:shadow-botanical hover:border-gold-500/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-[4/3] overflow-hidden bg-forest-950">
                <img
                  src={project.image}
                  alt={project.altText}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Category & Status Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-display uppercase tracking-wider px-2.5 py-1 rounded bg-forest-950/80 text-gold-400 backdrop-blur-sm border border-gold-500/30 font-semibold">
                    {project.category}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-forest-900/80 text-ivory-100 backdrop-blur-sm">
                    {project.projectType}
                  </span>
                </div>

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 bg-forest-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500 text-forest-950 text-xs font-display uppercase tracking-wider font-semibold shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project Details</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 mb-1.5 group-hover:text-botanical-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gold-600 font-display uppercase tracking-wider font-semibold mb-2">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-charcoal-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.location && (
                  <div className="mt-4 pt-3 border-t border-beige-200 flex items-center justify-between text-xs text-charcoal-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold-500" />
                      {project.location}
                    </span>
                    <span className="text-forest-800 font-medium group-hover:text-gold-600 group-hover:underline">
                      Explore &rarr;
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-beige-200 p-8">
            <p className="font-serif text-xl text-charcoal-600 mb-2">No projects found in this category.</p>
            <p className="text-sm text-charcoal-500">Select another category or view all projects.</p>
          </div>
        )}

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectForEnquiry={onSelectForEnquiry}
      />
    </section>
  );
};
