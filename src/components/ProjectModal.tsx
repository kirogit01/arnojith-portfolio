import React, { useEffect, useRef } from 'react';
import { X, MapPin, Tag, CheckCircle2, Layers, MessageSquare } from 'lucide-react';
import { PortfolioProject } from '../data/portfolioProjects';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onSelectForEnquiry: (serviceName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectForEnquiry,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-forest-950/85 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-ivory-100 rounded-2xl shadow-2xl border border-gold-500/40 text-charcoal-800 flex flex-col md:flex-row overflow-hidden"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-forest-950/70 text-ivory-100 hover:text-gold-400 hover:bg-forest-950 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Side */}
        <div className="md:w-1/2 bg-forest-950 relative min-h-[300px] md:min-h-full flex items-center justify-center p-4">
          <img
            src={project.image}
            alt={project.altText}
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-lg border border-forest-800"
          />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-ivory-200/80 bg-forest-950/80 backdrop-blur-sm p-2.5 rounded border border-forest-800">
            <span className="flex items-center gap-1.5 font-medium text-gold-400">
              <Tag className="w-3.5 h-3.5" />
              {project.category}
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-forest-800 text-ivory-100">
              {project.projectType}
            </span>
          </div>
        </div>

        {/* Modal Content Details */}
        <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-display uppercase tracking-widest text-gold-600 font-semibold block mb-1">
                {project.tagline}
              </span>
              <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                {project.title}
              </h3>
            </div>

            {project.location && (
              <div className="flex items-center gap-2 text-xs font-medium text-botanical-700">
                <MapPin className="w-3.5 h-3.5 text-gold-500" />
                <span>{project.location}</span>
              </div>
            )}

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              {project.description}
            </p>

            {/* Key Craft Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="pt-2">
                <h4 className="text-xs font-display uppercase tracking-wider text-forest-900 font-bold mb-2">
                  Key Execution Details
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-charcoal-600">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-leaf-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Materials Used */}
            {project.materials && project.materials.length > 0 && (
              <div className="pt-2">
                <h4 className="text-xs font-display uppercase tracking-wider text-forest-900 font-bold mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-gold-600" />
                  <span>Materials &amp; Techniques</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-md bg-beige-200/80 text-forest-900 border border-beige-300 font-medium"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-beige-200 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onSelectForEnquiry(project.category);
                onClose();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-forest-900 hover:bg-forest-950 text-gold-400 hover:text-gold-300 text-xs sm:text-sm font-display font-semibold uppercase tracking-wider transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire About Similar Project</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-full bg-beige-200 hover:bg-beige-300 text-charcoal-800 text-xs sm:text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
