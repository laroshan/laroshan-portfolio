import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Cloud, 
  Cpu, 
  Database, 
  Shield, 
  Layout
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Backend & Distributed', 'Cloud & DevOps', 'Data & AI', 'Databases', 'Frontend'];

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'Code2': return <Code2 className="w-6 h-6 text-accent-cyan" />;
      case 'Server': return <Server className="w-6 h-6 text-accent-blue" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-accent-sky" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-accent-cyan" />;
      case 'Database': return <Database className="w-6 h-6 text-amber-400" />;
      case 'Shield': return <Shield className="w-6 h-6 text-emerald-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-purple-400" />;
      default: return <Code2 className="w-6 h-6 text-accent-cyan" />;
    }
  };

  const filteredCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter((cat) => {
        if (activeCategory === 'Backend & Distributed') return cat.title.includes('Backend') || cat.title.includes('Programming');
        if (activeCategory === 'Cloud & DevOps') return cat.title.includes('Cloud') || cat.title.includes('Quality');
        if (activeCategory === 'Data & AI') return cat.title.includes('Data') || cat.title.includes('AI');
        if (activeCategory === 'Databases') return cat.title.includes('Database');
        if (activeCategory === 'Frontend') return cat.title.includes('Frontend');
        return true;
      });

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="subtitle-tag">
              <span className="accent-slash">/</span> My Skills
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Extensive technical capabilities & toolstack
            </h2>
          </div>

          {/* Category Filter Pills */}
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <div
              key={idx}
              className="dev-card p-7 dev-card-hover flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#0f141f] border border-[#232d42] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                  {getCategoryIcon(category.icon)}
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${
                        skill.highlight
                          ? 'bg-[#162033] border-accent-blue/40 text-neutral-100 font-semibold'
                          : 'bg-[#0f141f] border-[#232d42] text-neutral-300'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Decorative Underline */}
              <div className="pt-6 mt-6 border-t border-[#232d42]/60 flex items-center justify-between text-xs text-neutral-400">
                <span>{category.skills.length} core technologies</span>
                <span className="text-accent-cyan font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Mastered &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
