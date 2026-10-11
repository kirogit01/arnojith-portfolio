import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CreativeIntroduction } from './components/CreativeIntroduction';
import { FeaturedPortfolio } from './components/FeaturedPortfolio';
import { CoconutLeafArt } from './components/CoconutLeafArt';
import { EventDecoration } from './components/EventDecoration';
import { GraphicDesign } from './components/GraphicDesign';
import { CompanyIntroduction } from './components/CompanyIntroduction';
import { TechnicalServices } from './components/TechnicalServices';
import { AboutArtist } from './components/AboutArtist';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [preselectedService, setPreselectedService] = useState<string>('Event Decoration');

  const handleSelectServiceForEnquiry = (serviceName: string) => {
    setPreselectedService(serviceName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-800 flex flex-col font-sans selection:bg-gold-500/20 selection:text-forest-900">
      {/* 1. Responsive Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Creative Introduction */}
        <CreativeIntroduction />

        {/* 4. Featured Portfolio */}
        <FeaturedPortfolio onSelectForEnquiry={handleSelectServiceForEnquiry} />

        {/* 5. Signature Feature: Coconut Leaf Art */}
        <CoconutLeafArt onSelectForEnquiry={handleSelectServiceForEnquiry} />

        {/* 6. Event Decoration */}
        <EventDecoration onSelectForEnquiry={handleSelectServiceForEnquiry} />

        {/* 7. Graphic Design */}
        <GraphicDesign onSelectForEnquiry={handleSelectServiceForEnquiry} />

        {/* 8. Aathiraa Solutions Introduction */}
        <CompanyIntroduction />

        {/* 9. Technical Services */}
        <TechnicalServices onSelectForEnquiry={handleSelectServiceForEnquiry} />

        {/* 10. About S. Arnojith */}
        <AboutArtist />

        {/* 11. Skills and Creative Process */}
        <SkillsSection />

        {/* 12. Contact and Project Enquiries */}
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
};

export default App;
