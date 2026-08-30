import React, { useState } from 'react';
import { Building2, Calendar, MapPin, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(experiences[0].id);

  const activeExperience = experiences.find((e) => e.id === activeExpId) || experiences[0];

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="subtitle-tag">
              <span className="accent-slash">/</span> Work History
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Career trajectory & systems delivered
            </h2>
          </div>

          <a href="#contact" className="link-arrow-hover text-sm">
            <span>Hire or collaborate</span>
            <ArrowRight className="w-4 h-4 text-accent-cyan" />
          </a>
        </div>

        {/* Experience Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Role Selector Cards */}
          <div className="lg:col-span-4 space-y-3">
            {experiences.map((exp) => {
              const isActive = exp.id === activeExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpId(exp.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-200 border relative overflow-hidden ${
                    isActive
                      ? 'bg-[#131926] border-accent-blue shadow-lg shadow-accent-blue/15'
                      : 'bg-[#0f141f] border-[#232d42] hover:border-neutral-600 hover:bg-[#131926]/60 text-neutral-400'
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-accent-blue" />
                  )}
                  
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-accent-blue/20 text-accent-cyan' : 'bg-[#1a2233] text-neutral-400'
                    }`}>
                      {exp.badge}
                    </span>
                    <span className="text-neutral-400 font-medium">
                      {exp.period.split('–')[0].trim()}
                    </span>
                  </div>

                  <h3 className={`text-base font-extrabold ${
                    isActive ? 'text-white' : 'text-neutral-200'
                  }`}>
                    {exp.role}
                  </h3>

                  <div className="text-xs font-semibold text-neutral-400 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{exp.company}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Card */}
          <div className="lg:col-span-8">
            <div className="dev-card p-8 sm:p-10 relative">
              
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#232d42] gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {activeExperience.role}
                    </h3>
                  </div>
                  <div className="text-sm font-bold text-accent-cyan mt-1 flex items-center gap-2">
                    <span>{activeExperience.company}</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-400 font-normal">{activeExperience.companySubtitle}</span>
                  </div>
                </div>

                <div className="text-xs text-neutral-400 space-y-1 sm:text-right">
                  <div className="flex items-center sm:justify-end gap-1.5 text-neutral-200 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-accent-blue" />
                    <span>{activeExperience.period}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{activeExperience.location}</span>
                  </div>
                </div>
              </div>

              {/* Core Project Focus Box */}
              <div className="my-6 p-5 rounded-2xl bg-[#0f141f] border border-[#232d42]">
                <div className="text-xs font-bold text-accent-cyan uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Key Project & System Focus</span>
                </div>
                <div className="text-base font-extrabold text-white">
                  {activeExperience.projectFocus}
                </div>
                <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
                  {activeExperience.description}
                </p>
              </div>

              {/* Responsibilities & Achievements */}
              <div>
                <h4 className="subtitle-tag text-xs mb-4">
                  <span className="accent-slash">/</span> Key Engineering Outcomes
                </h4>
                <ul className="space-y-3.5">
                  {activeExperience.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applied Technologies */}
              <div className="mt-8 pt-6 border-t border-[#232d42]">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  Applied Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeExperience.technologies.map((t) => (
                    <span key={t} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#0f141f] text-neutral-200 border border-[#232d42]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
