import React, { useEffect, useState } from 'react';
import { X, Copy, Check, Printer, FileText } from 'lucide-react';
import { personalInfo, experiences, educationList, certificationsAndHonors } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `
LAROSHAN SURENDRAN
Senior Software Engineer | Full-Stack & Cloud Architecture
Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github} | Portfolio: ${personalInfo.portfolio}
Work Authorization: Sri Lankan Citizen | Eligible for EU Blue Card (Germany/EU) | Open to Immediate Relocation

PROFESSIONAL SUMMARY
${personalInfo.bio}

WORK EXPERIENCE
${experiences.map(e => `
${e.role} | ${e.company} (${e.period})
Project: ${e.projectFocus}
${e.highlights.map(h => `- ${h}`).join('\n')}
Tech Stack: ${e.technologies.join(', ')}
`).join('\n')}

EDUCATION & QUALIFICATIONS
${educationList.map(edu => `
${edu.degree} - ${edu.institution} (${edu.period})
${edu.grade}
`).join('\n')}

HONORS & CERTIFICATIONS
${certificationsAndHonors.map(c => `- ${c.title} | ${c.issuer} (${c.date}): ${c.description}`).join('\n')}

LANGUAGES
- English: Fluent (C1)
- German: Goethe-Zertifikat B1
- Sinhala & Tamil: Native
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-4xl bg-[#131926] border border-[#232d42] rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="p-6 border-b border-[#232d42] bg-[#0f141f] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-cyan">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white">
                Laroshan Surendran — Master CV
              </h3>
              <p className="text-xs text-neutral-400 font-medium">
                ATS-Optimized • Senior Software Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full bg-[#1a2233] hover:bg-[#232d42] text-neutral-200 border border-[#232d42] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full bg-accent-blue hover:bg-blue-600 text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#1a2233] border border-[#232d42] text-neutral-400 hover:text-white flex items-center justify-center ml-2"
              aria-label="Close resume view"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content View */}
        <div className="p-8 sm:p-10 overflow-y-auto space-y-6 text-neutral-300 text-sm leading-relaxed bg-[#0b0e14] custom-scrollbar">
          
          {/* Header */}
          <div className="border-b border-[#232d42] pb-6 text-center sm:text-left">
            <h1 className="text-3xl font-black text-white tracking-tight">
              LAROSHAN SURENDRAN
            </h1>
            <p className="text-accent-cyan font-bold text-base mt-1">
              Senior Software Engineer & Distributed Systems Architect
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-neutral-400 mt-2">
              <span>📧 {personalInfo.email}</span>
              <span>📱 {personalInfo.phone}</span>
              <span>📍 {personalInfo.location}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-accent-blue font-semibold mt-1">
              <span>LinkedIn: {personalInfo.linkedin}</span>
              <span>GitHub: {personalInfo.github}</span>
              <span>Portfolio: {personalInfo.portfolio}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="subtitle-tag text-xs mb-2">
              <span className="accent-slash">/</span> Professional Summary
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="subtitle-tag text-xs mb-2">
              <span className="accent-slash">/</span> Core Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div><strong className="text-white">Languages:</strong> Java (11/17/21), Python, TypeScript, JavaScript, SQL, Go</div>
              <div><strong className="text-white">Backend:</strong> Spring Boot 3, Apache Kafka, Microservices, FastAPI, Node.js</div>
              <div><strong className="text-white">Cloud & DevOps:</strong> AWS (ECS, Batch, S3, RDS, CloudWatch), Docker, Kubernetes, CI/CD</div>
              <div><strong className="text-white">Data & AI/ML:</strong> Computer Vision (YOLO), SageMaker, PySpark, Airflow, PyTorch</div>
              <div><strong className="text-white">Databases:</strong> PostgreSQL, MongoDB, Redis Caching, MySQL</div>
              <div><strong className="text-white">Quality:</strong> TDD, JUnit, Mockito, SonarQube, Checkmarx, Snyk, Agile/Scrum</div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="subtitle-tag text-xs mb-3">
              <span className="accent-slash">/</span> Professional Experience
            </h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-l-2 border-[#232d42] pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <div>
                      <strong className="text-white text-base">{exp.role}</strong> | <span className="text-accent-cyan font-bold">{exp.company}</span>
                    </div>
                    <div className="text-neutral-400 font-semibold text-xs">
                      {exp.period}
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-neutral-400 italic mt-0.5 mb-2">
                    {exp.projectFocus}
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="list-disc list-outside ml-4">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="subtitle-tag text-xs mb-2">
              <span className="accent-slash">/</span> Education & Qualifications
            </h2>
            {educationList.map((edu, idx) => (
              <div key={idx} className="mb-2 text-xs">
                <div className="flex justify-between font-bold text-white">
                  <span>{edu.degree} — {edu.institution}</span>
                  <span className="text-neutral-400">{edu.period}</span>
                </div>
                <div className="text-emerald-400 font-semibold">{edu.grade}</div>
              </div>
            ))}
          </div>

          {/* Honors & Certifications */}
          <div>
            <h2 className="subtitle-tag text-xs mb-2">
              <span className="accent-slash">/</span> Honors & Certifications
            </h2>
            <div className="space-y-2">
              {certificationsAndHonors.map((c) => (
                <div key={c.id} className="text-xs">
                  <div className="flex justify-between font-bold text-white">
                    <span>{c.title} — <span className="text-accent-cyan">{c.issuer}</span></span>
                    <span className="text-neutral-400">{c.date}</span>
                  </div>
                  <p className="text-neutral-400 mt-0.5">{c.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Work Authorization */}
          <div>
            <h2 className="subtitle-tag text-xs mb-2">
              <span className="accent-slash">/</span> Languages & Work Authorization
            </h2>
            <div className="text-xs space-y-1 text-neutral-300">
              <div><strong className="text-white">Languages:</strong> English (C1 Fluent), German (Goethe-Zertifikat B1), Sinhala & Tamil (Native)</div>
              <div><strong className="text-white">Work Authorization:</strong> Sri Lankan Citizen | Eligible for EU Blue Card (Germany / EU) | Open to Immediate Relocation</div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-[#232d42] bg-[#0f141f] flex items-center justify-between text-xs">
          <span className="text-neutral-400">
            Available for technical leadership & engineering roles
          </span>
          <a
            href={`mailto:${personalInfo.email}?subject=Senior Software Engineer Inquiry`}
            className="text-accent-cyan hover:underline font-bold"
          >
            Email Laroshan &rarr;
          </a>
        </div>

      </div>
    </div>
  );
};
