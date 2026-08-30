import React from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Linkedin, 
  Github, 
  Mail, 
  Phone
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Developer X 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Core Introduction */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Signature Developer X Top Heading Line */}
            <div className="heading-top-line large" />

            {/* Main Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              I’m Laroshan, a <br />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-accent-cyan bg-clip-text text-transparent">
                Senior Software Engineer
              </span>
            </h1>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-xl">
              Specialized in architecting high-throughput distributed microservices, scalable AWS cloud infrastructure, and intelligent AI automation across enterprise foodservice technology and global EdTech.
            </p>

            {/* Tech Pill Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="badge-dev">Spring Boot 3</span>
              <span className="badge-dev">React.js 19</span>
              <span className="badge-dev">Python & ML</span>
              <span className="badge-dev">AWS Cloud</span>
              <span className="badge-dev">Kafka & Airflow</span>
            </div>

            {/* Scroll Down Action */}
            <div className="pt-6">
              <a
                href="#about"
                className="w-12 h-12 rounded-full bg-[#131926] border border-[#232d42] hover:border-accent-cyan flex items-center justify-center text-neutral-300 hover:text-accent-cyan transition-all duration-200 shadow-md group"
                aria-label="Scroll down to About section"
              >
                <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Developer X Mini Summary Cards & Social Strip */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* About Me Mini Card */}
              <div className="dev-card p-6 flex flex-col justify-between dev-card-hover group">
                <div>
                  <div className="subtitle-tag">
                    <span className="accent-slash">/</span> About Me
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed mt-2">
                    4+ years of international experience designing robust full-stack platforms and data engineering pipelines.
                  </p>
                </div>
                <div className="pt-6">
                  <a href="#about" className="link-arrow-hover text-sm">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 text-accent-cyan group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* My Work Mini Card */}
              <div className="dev-card p-6 flex flex-col justify-between dev-card-hover group">
                <div>
                  <div className="subtitle-tag">
                    <span className="accent-slash">/</span> My Work
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed mt-2">
                    Shipped enterprise claim reconciliation engines and microservices middleware serving 1M+ active users.
                  </p>
                </div>
                <div className="pt-6">
                  <a href="#portfolio" className="link-arrow-hover text-sm">
                    <span>Browse portfolio</span>
                    <ArrowRight className="w-4 h-4 text-accent-cyan group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

            </div>

            {/* Divider */}
            <div className="h-px bg-[#232d42] w-full" />

            {/* Follow Me Strip */}
            <div>
              <div className="subtitle-tag mb-4">
                <span className="accent-slash">/</span> Follow Me
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-[#131926] border border-[#232d42] hover:border-accent-blue hover:text-accent-blue text-neutral-300 flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-[#131926] border border-[#232d42] hover:border-white hover:text-white text-neutral-300 flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-11 h-11 rounded-xl bg-[#131926] border border-[#232d42] hover:border-accent-cyan hover:text-accent-cyan text-neutral-300 flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="w-11 h-11 rounded-xl bg-[#131926] border border-[#232d42] hover:border-emerald-400 hover:text-emerald-400 text-neutral-300 flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
