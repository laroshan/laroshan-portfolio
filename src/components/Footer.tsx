import React from 'react';
import { ArrowUp, ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0e14] border-t border-[#232d42] pt-16 pb-12 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#232d42]">
          
          {/* Left Column: Avatar & Brand Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-accent-blue to-accent-cyan flex items-center justify-center font-extrabold text-white text-xl shadow-lg shadow-accent-blue/20">
                LS
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">
                  Laroshan Surendran
                </h3>
                <p className="text-sm font-medium text-neutral-400">
                  Senior Software Engineer at Sysco LABS
                </p>
              </div>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl dev-card flex items-center justify-center text-neutral-300 hover:text-accent-blue hover:border-accent-blue transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl dev-card flex items-center justify-center text-neutral-300 hover:text-white hover:border-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl dev-card flex items-center justify-center text-neutral-300 hover:text-accent-cyan hover:border-accent-cyan transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="w-10 h-10 rounded-xl dev-card flex items-center justify-center text-neutral-300 hover:text-emerald-400 hover:border-emerald-400 transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Get in touch & Quick Contacts */}
          <div className="lg:col-span-6 space-y-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-extrabold text-white hover:text-accent-cyan transition-colors group"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-6 h-6 text-accent-cyan group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Email me:</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base font-bold text-white hover:text-accent-cyan transition-colors mt-1 block"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Call me:</div>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="text-base font-bold text-white hover:text-accent-cyan transition-colors mt-1 block"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-xs text-neutral-500">
          <div className="flex flex-wrap items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <div>
              &copy; {new Date().getFullYear()} Laroshan Surendran. All rights reserved.
            </div>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg dev-card flex items-center justify-center text-neutral-300 hover:text-white hover:border-accent-cyan transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
