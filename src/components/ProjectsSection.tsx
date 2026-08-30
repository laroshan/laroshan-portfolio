import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Enterprise', 'AI & Data', 'Cloud & Systems', 'Full-Stack'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#0f141f]/70 border-t border-[#232d42] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="subtitle-tag">
              <span className="accent-slash">/</span> My Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Take a look at the featured systems I’ve engineered
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-accent-blue text-white shadow-md shadow-accent-blue/30'
                    : 'bg-[#131926] text-neutral-400 hover:text-white hover:bg-[#1a2233] border border-[#232d42]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Staggered Developer X Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="dev-card p-8 dev-card-hover flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              <div>
                {/* Top Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="badge-dev">
                    {project.category}
                  </span>
                  {project.demoBadge && (
                    <span className="badge-dev-dark">
                      {project.demoBadge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-white group-hover:text-accent-cyan transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm font-semibold text-neutral-300 mt-2">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-400 mt-3 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Row */}
                {project.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-4 border-t border-[#232d42]">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-[#0f141f] border border-[#232d42]">
                        <div className="text-sm font-extrabold text-white">{m.value}</div>
                        <div className="text-[11px] text-neutral-400">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Action Row */}
              <div className="pt-8 mt-6 border-t border-[#232d42] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-[#0f141f] text-neutral-300 border border-[#232d42]">
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 text-neutral-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="link-arrow-hover text-sm font-bold text-accent-cyan shrink-0">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Deep Dive Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
