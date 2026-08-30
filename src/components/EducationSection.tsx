import React from 'react';
import { Award, Globe2, BookOpen, CheckCircle2, MapPin, Calendar } from 'lucide-react';
import { educationList, languageSkills } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#0f141f]/70 border-t border-[#232d42] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="subtitle-tag justify-center">
            <span className="accent-slash">/</span> Education & Languages
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Background & Multilingual Skills
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            Honours degree in Information Technology with top distinction from Sri Lanka's premier technological university.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Degrees Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-accent-cyan" />
              <span>Degrees & Qualifications</span>
            </h3>

            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="dev-card p-7 dev-card-hover relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg font-extrabold text-white">
                    {edu.degree}
                  </h4>
                  {edu.badge && (
                    <span className="badge-dev">
                      {edu.badge}
                    </span>
                  )}
                </div>

                <div className="text-sm font-bold text-accent-cyan mb-3">
                  {edu.institution}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 font-medium mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Grade Callout */}
                <div className="p-3 rounded-xl bg-[#0f141f] border border-[#232d42] text-xs font-bold text-emerald-400 mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{edu.grade}</span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {edu.details.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Languages Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Globe2 className="w-5 h-5 text-accent-cyan" />
              <span>Language Proficiency</span>
            </h3>

            <div className="space-y-4">
              {languageSkills.map((lang, idx) => (
                <div
                  key={idx}
                  className="dev-card p-6 dev-card-hover"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-white">
                      {lang.language}
                    </span>
                    <span className="badge-dev-dark">
                      {lang.badge}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-accent-cyan mb-1.5">
                    {lang.level}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {lang.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
