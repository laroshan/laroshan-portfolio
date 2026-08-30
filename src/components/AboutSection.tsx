import React from 'react';
import { ArrowRight } from 'lucide-react';
import { impactStats } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0f141f]/70 border-y border-[#232d42] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="subtitle-tag">
              <span className="accent-slash">/</span> About Me
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              I’ve been engineering scalable enterprise systems since 2020
            </h2>

            <p className="text-base text-neutral-400 leading-relaxed">
              With a background spanning high-volume foodservice technology at <strong>Sysco LABS</strong> and global EdTech middleware at <strong>Pearson Lanka</strong>, I specialize in translating complex business domains into resilient microservices, automated ETL pipelines, and intelligent AI models.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed">
              Graduated with Honours (Second Class Upper, GPA 3.56/4.00) from the <strong>University of Moratuwa</strong>, I bring deep rigor in clean code, domain-driven design, and cloud-native architectures.
            </p>

            <div className="pt-2">
              <a href="#experience" className="link-arrow-hover text-base">
                <span>Explore my career history</span>
                <ArrowRight className="w-4 h-4 text-accent-cyan" />
              </a>
            </div>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-5">
              {impactStats.map((stat, idx) => (
                <div key={idx} className="dev-card p-6 dev-card-hover group">
                  <div className="text-4xl sm:text-5xl font-black text-white group-hover:text-accent-cyan transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-neutral-200 mt-2">
                    {stat.label}
                  </div>
                  <div className="text-xs text-neutral-400 mt-1 leading-snug">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-[#232d42] w-full" />

        {/* Previously Worked On / Organization Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 text-xs font-bold uppercase tracking-widest text-neutral-400">
            Organizations & Enterprise Impact
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-xl dev-card-secondary flex flex-col items-center justify-center text-center group hover:border-accent-blue/40 transition-colors">
              <span className="text-sm font-black text-white group-hover:text-accent-cyan transition-colors">
                Sysco LABS
              </span>
              <span className="text-[10px] text-neutral-400 mt-0.5">
                Senior SWE (Present)
              </span>
            </div>

            <div className="p-4 rounded-xl dev-card-secondary flex flex-col items-center justify-center text-center group hover:border-accent-blue/40 transition-colors">
              <span className="text-sm font-black text-white group-hover:text-accent-cyan transition-colors">
                Pearson Lanka
              </span>
              <span className="text-[10px] text-neutral-400 mt-0.5">
                Global EdTech
              </span>
            </div>

            <div className="p-4 rounded-xl dev-card-secondary flex flex-col items-center justify-center text-center group hover:border-accent-blue/40 transition-colors">
              <span className="text-sm font-black text-white group-hover:text-accent-cyan transition-colors">
                People's Bank
              </span>
              <span className="text-[10px] text-neutral-400 mt-0.5">
                Financial Systems
              </span>
            </div>

            <div className="p-4 rounded-xl dev-card-secondary flex flex-col items-center justify-center text-center group hover:border-accent-blue/40 transition-colors">
              <span className="text-sm font-black text-white group-hover:text-accent-cyan transition-colors">
                U. of Moratuwa
              </span>
              <span className="text-[10px] text-neutral-400 mt-0.5">
                BSc (Hons) IT
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
