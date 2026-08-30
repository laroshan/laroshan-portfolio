import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Zap, CheckCircle2 } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="fixed inset-0"
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-3xl bg-[#131926] border border-[#232d42] rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#232d42] flex items-start justify-between bg-[#0f141f]">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge-dev">
                {project.category}
              </span>
              {project.demoBadge && (
                <span className="badge-dev-dark">
                  {project.demoBadge}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-neutral-400">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1a2233] border border-[#232d42] text-neutral-400 hover:text-white hover:border-neutral-500 flex items-center justify-center transition-colors shrink-0 ml-4"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar">
          
          {/* Problem & Overview */}
          <div>
            <div className="subtitle-tag text-xs mb-2">
              <span className="accent-slash">/</span> Project Overview
            </div>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed bg-[#0f141f] p-5 rounded-2xl border border-[#232d42]">
              {project.description}
            </p>
          </div>

          {/* Performance Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <div className="subtitle-tag text-xs mb-3">
                <span className="accent-slash">/</span> Key Results & Telemetry
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#0f141f] border border-[#232d42] text-center">
                    <div className="text-xl font-black text-accent-cyan">{m.value}</div>
                    <div className="text-xs text-neutral-400 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architectural Overview */}
          <div>
            <div className="subtitle-tag text-xs mb-3">
              <span className="accent-slash">/</span> Architecture & Implementation
            </div>
            <ul className="space-y-3">
              {project.architecturalOverview.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Production Impact Quote */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-accent-blue/10 to-transparent border border-accent-blue/30">
            <div className="text-xs font-bold text-accent-cyan uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Production Outcome</span>
            </div>
            <p className="text-sm font-semibold text-white">
              {project.impact}
            </p>
          </div>

          {/* Technologies Deployed */}
          <div>
            <div className="subtitle-tag text-xs mb-3">
              <span className="accent-slash">/</span> Applied Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#0f141f] text-neutral-200 border border-[#232d42]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-[#232d42] bg-[#0f141f] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-full bg-[#1a2233] hover:bg-[#232d42] text-white border border-[#232d42] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-full bg-accent-blue hover:bg-blue-600 text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-neutral-400 hover:text-white"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
