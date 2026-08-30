import { Experience, Project, SkillCategory, Education, LanguageSkill, ImpactStat } from '../types/portfolio';

export const personalInfo = {
  name: "Laroshan Surendran",
  handle: "laroshan",
  title: "Senior Software Engineer",
  subtitle: "Full-Stack Architect • Distributed Systems • Cloud & AI Systems",
  location: "Colombo, Sri Lanka",
  statusBadge: "OPEN TO GLOBAL OPPORTUNITIES // ARCHITECTING_SYSTEMS",
  email: "laroshansurendran@gmail.com",
  phone: "+94 71 398 4317",
  linkedin: "https://www.linkedin.com/in/laroshan-surendran/",
  github: "https://github.com/laroshan",
  portfolio: "https://laroshan-portfolio.web.app/",
  bio: "Senior Software Engineer with 4+ years of engineering experience architecting enterprise-grade applications, high-throughput microservices, and AI-powered automation across foodservice technology, fintech, and global edtech sectors. Specialized in Java/Spring Boot ecosystems, Python data pipelines, AWS cloud-native architecture, and autonomous AI agents.",
  shortPitch: "Architecting resilient distributed microservices, scalable event pipelines, and intelligent AI tools with 99.9% uptime for global scale.",
};

export const impactStats: ImpactStat[] = [
  {
    value: "4+",
    label: "Years Experience",
    subtext: "Enterprise engineering at Sysco LABS & Pearson Lanka",
    icon: "Briefcase",
  },
  {
    value: "1M+",
    label: "Global Users",
    subtext: "Scaled through high-throughput microservices middleware",
    icon: "Users",
  },
  {
    value: "99.9%",
    label: "Uptime Reliability",
    subtext: "AWS ECS, Kubernetes & auto-scaling clusters",
    icon: "ShieldCheck",
  },
  {
    value: "3.56",
    label: "Moratuwa GPA",
    subtext: "BSc (Hons) IT • 2nd Class Upper Division",
    icon: "GraduationCap",
  },
];

export const experiences: Experience[] = [
  {
    id: "sysco-labs",
    role: "Senior Software Engineer",
    company: "Sysco LABS Sri Lanka",
    companySubtitle: "Enterprise Supply Chain & Foodservice Tech",
    location: "Colombo, Sri Lanka",
    period: "August 2024 – Present",
    badge: "Active Role",
    projectFocus: "Supplier Fee Management System & Automated Claim Reconciliation (ClaimSight)",
    description: "Architecting and implementing enterprise supply chain and fintech solutions for automated financial reconciliation, dispute management, and penalty enforcement.",
    highlights: [
      "Architected full-stack enterprise platform using React, Spring Boot 3, and PostgreSQL, enforcing SOLID design patterns and domain-driven design.",
      "Engineered Python-based ETL data pipelines with Apache Airflow for automated end-to-end data reconciliation across multiple upstream billing sources.",
      "Integrated AI-powered anomaly detection models to detect transaction discrepancies and reduce manual audit workload by over 60%.",
      "Designed and deployed auto-scaling AWS cloud infrastructure (ECS, Lambda, RDS, S3, CloudWatch) for fault tolerance and high throughput.",
      "Established automated code quality gates with SonarQube, conducted architecture reviews, and mentored junior engineers on TDD and clean architecture.",
      "Collaborated across international cross-functional teams in fast-paced Agile Scrum sprints."
    ],
    technologies: ["Spring Boot 3", "React.js", "Python", "Apache Airflow", "PostgreSQL", "AWS ECS", "AWS Lambda", "Docker", "SonarQube", "TDD"],
  },
  {
    id: "pearson-se",
    role: "Software Engineer",
    company: "Pearson Lanka",
    companySubtitle: "Global EdTech Enterprise",
    location: "Colombo, Sri Lanka",
    period: "March 2023 – August 2024",
    badge: "Enterprise Microservices",
    projectFocus: "SOCKET Platform — High-Throughput LMS Integration Middleware",
    description: "Developed and maintained core microservices platform facilitating mission-critical data synchronization and LMS integration for over 1,000,000 active global learners.",
    highlights: [
      "Designed and delivered high-performance RESTful APIs using Java 11/17, Spring Boot, and MongoDB, handling massive concurrent read/write traffic.",
      "Optimized query performance and throughput by 40%+ using advanced Redis caching strategies, connection pooling, and database indexing.",
      "Remediated critical security vulnerabilities with Checkmarx, Snyk, and SonarQube, ensuring SOC2 and ISO compliance.",
      "Automated CI/CD deployment pipelines using GitLab CI, Kubernetes, Docker, and AWS Infrastructure-as-Code (IaC).",
      "Integrated Natural Language Processing (NLP) services for automated educational content analysis and intelligent grading features."
    ],
    technologies: ["Java 11/17", "Spring Boot", "MongoDB", "Redis", "Kubernetes", "Docker", "GitLab CI/CD", "AWS", "Checkmarx", "Snyk", "NLP"],
  },
  {
    id: "pearson-intern",
    role: "Software Engineer Intern",
    company: "Pearson Lanka",
    companySubtitle: "Global EdTech Enterprise",
    location: "Colombo, Sri Lanka",
    period: "January 2022 – July 2022",
    badge: "Internship",
    projectFocus: "Core Middleware Quality & Cloud Infrastructure Observability",
    description: "Contributed to production feature releases, high-coverage automated unit test suites, and proactive cloud observability pipelines.",
    highlights: [
      "Achieved 85%+ unit test code coverage using JUnit and Mockito, preventing regression bugs across microservices deployments.",
      "Implemented comprehensive cloud observability and system metrics dashboards using AWS CloudWatch and New Relic.",
      "Participated in incident triage and production support using ServiceNow, directly contributing to lowered Mean Time to Resolution (MTTR).",
      "Hands-on containerization and local development workflows using Docker and container orchestration."
    ],
    technologies: ["Java", "Spring Boot", "JUnit", "Mockito", "AWS CloudWatch", "New Relic", "Docker", "ServiceNow"],
  },
];

export const projects: Project[] = [
  {
    id: "claimsight",
    title: "ClaimSight & Supplier Reconciliation Engine",
    category: "Enterprise",
    tagline: "Enterprise automated claim reconciliation and AI-powered anomaly detection platform.",
    description: "Enterprise fintech system built at Sysco LABS that automates supplier fee reconciliation, eliminates invoice disputes, and flags transaction anomalies before settlement.",
    architecturalOverview: [
      "Event-driven architecture with Spring Boot 3 backend and React SPA frontend.",
      "Python ETL pipelines with Apache Airflow for large-scale data transformation.",
      "Integrated ML anomaly detection model for flagging fraudulent or irregular claim items.",
      "AWS ECS container deployment with Aurora PostgreSQL and automated RDS read replicas."
    ],
    impact: "Automated manual reconciliation processes, saving thousands of audit hours and improving billing accuracy.",
    technologies: ["React", "Spring Boot 3", "PostgreSQL", "Apache Airflow", "Python ML", "AWS ECS", "Docker", "SonarQube"],
    featured: true,
    demoBadge: "Enterprise Production",
    metrics: [
      { label: "Audit Speedup", value: "60%+" },
      { label: "Data Pipeline", value: "Apache Airflow" },
      { label: "Architecture", value: "Microservices" }
    ]
  },
  {
    id: "socket-platform",
    title: "SOCKET Middleware Platform",
    category: "Cloud & Systems",
    tagline: "High-throughput microservices middleware powering LMS integrations for 1M+ global students.",
    description: "Core middleware engine at Pearson Lanka connecting disparate learning management systems (LMS) and synchronizing student progress data seamlessly across international markets.",
    architecturalOverview: [
      "Microservices cluster developed in Java 17 and Spring Boot.",
      "Multi-region MongoDB cluster combined with multi-tier Redis caching.",
      "Kubernetes pod auto-scaling based on real-time request queue metrics.",
      "NLP microservice for automated curriculum content evaluation."
    ],
    impact: "Maintained sub-100ms response times while serving 1M+ concurrent international learners.",
    technologies: ["Java 17", "Spring Boot", "MongoDB", "Redis", "Kubernetes", "Docker", "AWS", "GitLab CI"],
    featured: true,
    demoBadge: "1M+ Active Users",
    metrics: [
      { label: "Throughput", value: "1M+ Users" },
      { label: "Latency", value: "< 100ms" },
      { label: "Cache Hit Rate", value: "94%" }
    ]
  },
  {
    id: "ai-code-review",
    title: "AI-Powered Code Review Assistant",
    category: "AI & Data",
    tagline: "Autonomous static code analysis, vulnerability scanning, and PR review engine.",
    description: "An intelligent developer tool that inspects GitHub pull requests, performs AST parsing, detects security vulnerabilities, identifies anti-patterns, and generates contextual code improvements using LLM reasoning.",
    architecturalOverview: [
      "Python-based static analysis engine with AST traversal and AST security rule checking.",
      "LLM agent orchestration for context-aware code suggestions and refactoring diffs.",
      "Automated GitHub Actions CI/CD bot integration."
    ],
    impact: "Accelerates code review velocity while enforcing clean architecture and strict security standards.",
    technologies: ["Python", "FastAPI", "AST Parsers", "LLM Agents", "GitHub Actions", "Docker"],
    featured: true,
    githubUrl: "https://github.com/laroshan",
    demoBadge: "Developer Tool",
    metrics: [
      { label: "Analysis", value: "AST & LLM" },
      { label: "Integration", value: "GitHub CI" },
      { label: "Security", value: "OWASP Top 10" }
    ]
  },
  {
    id: "agentic-basic",
    title: "Agentic AI Orchestration Framework",
    category: "AI & Data",
    tagline: "Autonomous LLM agent runtime with multi-tool execution and memory persistence.",
    description: "A lightweight, modular framework for building autonomous agentic AI workflows, supporting step-by-step goal decomposition, scratchpad reasoning, and tool execution.",
    architecturalOverview: [
      "Modular agent loop with stateful conversation memory and scratchpad logging.",
      "Dynamic tool registry allowing agents to invoke APIs, run bash scripts, and query databases.",
      "Built-in guardrails and prompt-injection defense mechanisms."
    ],
    impact: "Enables rapid prototyping of autonomous agents and multi-agent coordination pipelines.",
    technologies: ["Python", "OpenAI / Anthropic APIs", "FastAPI", "Vector Store", "Prompt Engineering"],
    featured: true,
    githubUrl: "https://github.com/laroshan",
    demoBadge: "Agentic Runtime",
    metrics: [
      { label: "Pattern", value: "ReAct / Agentic" },
      { label: "Tools", value: "Dynamic Invocation" }
    ]
  },
  {
    id: "revenue-streaming",
    title: "Real-Time Revenue Streaming Dashboard",
    category: "Cloud & Systems",
    tagline: "Event-driven financial telemetry engine streaming real-time transaction metrics.",
    description: "High-throughput streaming architecture for processing transactional events, computing rolling ARR/MRR metrics, and streaming live financial visualizer updates over WebSockets.",
    architecturalOverview: [
      "Apache Kafka event broker for incoming transaction ingestion.",
      "Spring Boot stream consumers with Redis caching for instant aggregations.",
      "WebSocket push channel to React UI for sub-second chart rendering."
    ],
    impact: "Delivers zero-latency revenue analytics for high-volume billing platforms.",
    technologies: ["Apache Kafka", "Java 17", "Spring Boot", "Redis", "WebSockets", "React", "Docker"],
    featured: false,
    githubUrl: "https://github.com/laroshan",
    metrics: [
      { label: "Stream Engine", value: "Apache Kafka" },
      { label: "Updates", value: "Real-Time Push" }
    ]
  },
  {
    id: "german-b2",
    title: "German B2 Master & Interactive Learning Hub",
    category: "Full-Stack",
    tagline: "Interactive full-stack German language mastery and grammar engine.",
    description: "An interactive web application designed for mastering the Goethe/telc B2 German curriculum, featuring interactive grammar trainers, Redemittel banks, vocabulary drills, and progress analytics.",
    architecturalOverview: [
      "React 19 + TypeScript frontend with optimized client-side state machine.",
      "Tailwind CSS dark-mode design system.",
      "Deployed on Firebase Hosting with fast CDN edge distribution and Firestore data store."
    ],
    impact: "Provides structured language acquisition tools and interactive fluency drills.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Firebase Hosting", "Firestore"],
    featured: false,
    githubUrl: "https://github.com/laroshan",
    metrics: [
      { label: "Target Level", value: "Goethe B2" },
      { label: "Modules", value: "Grammar & Vocab" },
      { label: "Hosting", value: "Firebase Edge" }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    description: "Core languages for enterprise backend, frontend, and data engineering",
    skills: [
      { name: "Java (11 / 17 / 21)", level: "Expert", highlight: true },
      { name: "Python", level: "Expert", highlight: true },
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "SQL (PostgreSQL / MySQL)", level: "Advanced", highlight: true },
    ]
  },
  {
    title: "Backend & Distributed Systems",
    icon: "Server",
    description: "High-throughput microservices, RESTful APIs, and domain-driven design",
    skills: [
      { name: "Spring Boot 3", level: "Expert", highlight: true },
      { name: "Microservices Architecture", level: "Expert", highlight: true },
      { name: "Node.js / Express", level: "Advanced" },
      { name: "FastAPI", level: "Advanced" },
      { name: "Hibernate / JPA", level: "Advanced" },
      { name: "RESTful API Design", level: "Expert", highlight: true },
      { name: "Clean Architecture & SOLID", level: "Expert", highlight: true },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    description: "Scalable cloud infrastructure, container orchestration, and CI/CD pipelines",
    skills: [
      { name: "AWS (ECS, Lambda, RDS, S3, CloudWatch, EC2)", level: "Advanced", highlight: true },
      { name: "Docker & Containerization", level: "Advanced", highlight: true },
      { name: "Kubernetes (K8s)", level: "Intermediate / Proficient", highlight: true },
      { name: "GitLab CI/CD & GitHub Actions", level: "Advanced", highlight: true },
      { name: "Firebase (Hosting & Firestore)", level: "Advanced" },
      { name: "Infrastructure as Code (IaC)", level: "Intermediate" },
    ]
  },
  {
    title: "Data Engineering & AI / ML",
    icon: "Cpu",
    description: "Data pipelines, event streaming, and applied machine learning models",
    skills: [
      { name: "Apache Airflow (ETL Pipelines)", level: "Advanced", highlight: true },
      { name: "Apache Kafka", level: "Intermediate / Proficient" },
      { name: "AI Anomaly Detection", level: "Advanced", highlight: true },
      { name: "Natural Language Processing (NLP)", level: "Intermediate" },
      { name: "Computer Vision (YOLO / OpenCV)", level: "Intermediate" },
      { name: "PySpark & Data Analysis", level: "Intermediate" },
    ]
  },
  {
    title: "Databases & Caching",
    icon: "Database",
    description: "Relational, document, and in-memory high-speed caching datastores",
    skills: [
      { name: "PostgreSQL", level: "Expert", highlight: true },
      { name: "MongoDB", level: "Advanced", highlight: true },
      { name: "Redis Caching", level: "Advanced", highlight: true },
      { name: "MySQL", level: "Advanced" },
      { name: "Database Indexing & Optimization", level: "Advanced" },
    ]
  },
  {
    title: "Quality, Security & Testing",
    icon: "Shield",
    description: "Automated test suites, security scans, and engineering best practices",
    skills: [
      { name: "Test-Driven Development (TDD)", level: "Expert", highlight: true },
      { name: "JUnit & Mockito", level: "Expert", highlight: true },
      { name: "SonarQube (Static Analysis)", level: "Advanced", highlight: true },
      { name: "Checkmarx & Snyk (Security)", level: "Advanced" },
      { name: "Agile / Scrum Leadership", level: "Advanced" },
    ]
  },
  {
    title: "Frontend Engineering",
    icon: "Layout",
    description: "Modern responsive web applications and interactive user interfaces",
    skills: [
      { name: "React.js 19", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "Redux / State Management", level: "Advanced" },
      { name: "HTML5 & Modern CSS3", level: "Expert" },
      { name: "Vite & Modern Tooling", level: "Advanced" },
    ]
  }
];

export const educationList: Education[] = [
  {
    degree: "Bachelor of Science (Hons) in Information Technology",
    institution: "University of Moratuwa",
    location: "Faculty of Information Technology, Sri Lanka",
    period: "2018 – 2023",
    grade: "Second Class Upper Division | GPA: 3.56 / 4.00",
    badge: "Premier Tech University",
    details: [
      "Rigorous curriculum in Distributed Systems, Software Architecture, Algorithms, Database Systems, and Cloud Computing.",
      "Consistently achieved top-tier academic distinction in software engineering modules and capstone projects.",
      "Graduated with Second Class Upper Honours from Sri Lanka's premier technological university."
    ]
  },
  {
    degree: "Diploma in Information Technology",
    institution: "ESOFT Metro Campus",
    location: "Colombo, Sri Lanka",
    period: "2015 – 2016",
    grade: "Merit Pass",
    details: [
      "Comprehensive foundation in Object-Oriented Programming, Database Management Systems, and Web Engineering."
    ]
  }
];

export const languageSkills: LanguageSkill[] = [
  {
    language: "English",
    level: "C1 Fluent",
    description: "Professional working proficiency in international distributed engineering environments.",
    badge: "C1 Fluent"
  },
  {
    language: "German",
    level: "A2 Completed, B1 In Progress",
    description: "Active learner dedicated to professional multilingual competence.",
    badge: "A2 / B1"
  },
  {
    language: "Sinhala & Tamil",
    level: "Native Speaker",
    description: "Bilingual native speaker with strong cross-cultural communication capability.",
    badge: "Native"
  }
];
