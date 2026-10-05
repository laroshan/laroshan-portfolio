export interface Experience {
  id: string;
  role: string;
  company: string;
  companySubtitle?: string;
  location: string;
  period: string;
  badge?: string;
  projectFocus: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Enterprise' | 'AI & Data' | 'Cloud & Systems' | 'Developer Tools' | 'Full-Stack';
  tagline: string;
  description: string;
  architecturalOverview: string[];
  impact: string;
  technologies: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  demoBadge?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface SkillItem {
  name: string;
  level?: string;
  iconName?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details: string[];
  badge?: string;
}

export interface LanguageSkill {
  language: string;
  level: string;
  description: string;
  badge: string;
}

export interface CertificationOrHonor {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badge?: string;
  icon?: string;
  credentialUrl?: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  subtext: string;
  icon: string;
}
