import React from 'react';
import { Award, Globe2, BookOpen, CheckCircle2, MapPin, Calendar, Cpu, GraduationCap } from 'lucide-react';
import { educationList, languageSkills, certificationsAndHonors } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const getHonorIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-accent-cyan" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-accent-blue" />;
      case 'Globe2': return <Globe2 className="w-5 h-5 text-emerald-400" />;
      default: return <Award className="w-5 h-5 text-accent-cyan" />;
    }
  };

  return (
    <section id="education" className="py-20 md:py-28 bg-[#0f141f]/70 border-t border-[#232d42] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="subtitle-tag justify-center">
            <span className="accent-slash">/</span> Education & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Distinction, Honors & Multilingual Skills
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            Honours degree in Information Technology from University of Moratuwa, validated AI credentials, and international industry recognitions.
          </p>
        </div>

        {/* Top 2-Column: Degrees & Languages */}
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

        {/* Bottom Section: Honors & Certifications */}
        <div className="mt-16 pt-16 border-t border-[#232d42]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="subtitle-tag">
                <span className="accent-slash">/</span> Verified Honors & Certifications
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Certifications & Global Industry Accolades
              </h3>
            </div>
            <span className="badge-dev self-start sm:self-auto">
              Industry Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationsAndHonors.map((item) => (
              <div
                key={item.id}
                className="dev-card p-6 dev-card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0f141f] border border-[#232d42] flex items-center justify-center">
                      {getHonorIcon(item.icon)}
                    </div>
                    {item.badge && (
                      <span className="badge-dev-dark text-[10px]">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-accent-cyan transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <div className="text-xs font-semibold text-accent-blue mt-1">
                    {item.issuer} • {item.date}
                  </div>

                  <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#232d42]/60 flex items-center text-[11px] text-neutral-500 font-semibold">
                  <span>Verified Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
