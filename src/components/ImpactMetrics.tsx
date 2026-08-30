import React from 'react';
import { Briefcase, Users, ShieldCheck, GraduationCap } from 'lucide-react';
import { impactStats } from '../data/portfolioData';

export const ImpactMetrics: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-neonGreen" />;
      case 'Users':
        return <Users className="w-5 h-5 text-neonCyan" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-neonGreen" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-amber-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-neonGreen" />;
    }
  };

  const getMetricTag = (idx: number) => {
    switch (idx) {
      case 0: return 'EXP_TIMELINE';
      case 1: return 'SCALE_IMPACT';
      case 2: return 'SYSTEM_SLA';
      case 3: return 'ACADEMIC_INDEX';
      default: return 'SYS_METRIC';
    }
  };

  return (
    <section className="py-10 border-y border-slate-800/80 bg-[#040813] relative font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className="cyber-card rounded-lg p-4 sm:p-5 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-slate-500 font-mono tracking-wider">
                  [{getMetricTag(idx)}]
                </span>
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                  {getIcon(stat.icon)}
                </div>
              </div>

              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-neonGreen transition-colors font-mono">
                {stat.value}
              </div>
              
              <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-tight">
                {stat.label}
              </div>
              
              <div className="text-[11px] text-slate-400 mt-1 leading-snug font-sans">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
