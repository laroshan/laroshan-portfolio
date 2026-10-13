import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  // A shareable link ending in #cv opens the resume directly.
  const [isResumeOpen, setIsResumeOpen] = useState(() => window.location.hash === '#cv');

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === '#cv') setIsResumeOpen(true);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const closeResume = () => {
    setIsResumeOpen(false);
    if (window.location.hash === '#cv') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="min-h-screen bg-bgDark text-neutral-100 font-sans selection:bg-accent-blue/30 selection:text-accent-cyan relative">
      {/* Sticky Header Navbar */}
      <Navbar onOpenResumeModal={() => setIsResumeOpen(true)} />

      {/* Main Content Layout */}
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal View */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={closeResume}
      />
    </div>
  );
};

export default App;
