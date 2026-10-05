import { Experience, Project, SkillCategory, Education, LanguageSkill, ImpactStat, CertificationOrHonor } from '../types/portfolio';

export const personalInfo = {
  name: "Laroshan Surendran",
  handle: "laroshan",
  title: "Senior Software Engineer",
  subtitle: "Full-Stack & Cloud Architecture • Distributed Systems • AI/ML",
  location: "Colombo, Sri Lanka",
  statusBadge: "OPEN TO GLOBAL OPPORTUNITIES // EU BLUE CARD ELIGIBLE",
  email: "laroshansurendran@gmail.com",
  phone: "+94 71 398 4317",
  linkedin: "https://www.linkedin.com/in/laroshan-surendran/",
  github: "https://github.com/laroshan",
  portfolio: "https://laroshan-portfolio.web.app/",
  bio: "Senior Software Engineer with 4+ years of experience designing and delivering resilient enterprise full-stack systems, scalable microservices, and automated data/ML pipelines across foodservice technology and global EdTech. Recognized as a Global Finalist at the Sysco Global Hackathon 2026 for \"Claim Sight\" (Vision AI). Demonstrated expertise in Java/Spring Boot, Python/FastAPI, React, AWS cloud architecture, Kafka event streaming, and production computer vision. AWS Certified AI Practitioner and Goethe-Zertifikat B1 certified.",
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
    value: "Global",
    label: "Hackathon Finalist",
    subtext: "Sysco Global Hackathon 2026 • Claim Sight Vision AI",
    icon: "Award",
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
    projectFocus: "Supplier Performance Fees (MSP) Platform — Enterprise Supply-Chain & Financial Reconciliation Ecosystem",
    description: "Architecting and implementing enterprise supply-chain and fintech solutions for automated financial reconciliation, dispute management, and AI-driven compliance auditing.",
    highlights: [
      "Architected and delivered end-to-end Compliance Expense Offset (CEO) claim automation featuring a React workflow UI, Spring Boot RESTful APIs, and Python/Java microservices, automating 500+ monthly supplier claims and eliminating manual processing overhead.",
      "Built production computer-vision service (FastAPI + YOLO) integrated with an AWS SageMaker training pipeline and active-learning workflow for packaging/pallet violation detection, cutting manual audit hours and reducing false positives by 30%.",
      "Implemented high-volume bulk exclusion upload (CSV/XLSX) with multi-stage schema validation, AWS S3 integration, and role-based access APIs on Spring Boot 3 / PostgreSQL, accelerating supplier data ingestion by 60%.",
      "Engineered PySpark ETL jobs scheduled via AWS Batch to compute supplier performance KPIs (Fill Rate, On-Time, OTIF, Transportation Efficiency) over millions of transaction records within sub-hour SLA.",
      "Led AWS cloud infrastructure design with auto-scaling ECS clusters, RDS read replicas, and CloudWatch alarms, ensuring 99.9% uptime and fault tolerance for mission-critical financial workflows.",
      "Established code quality baselines using SonarQube quality gates, conducted rigorous PR reviews, and mentored 3 junior engineers on microservices design patterns and clean architecture.",
      "Collaborated closely with US product managers and international business analysts to translate complex commercial regulations into highly scalable, maintainable technical architectures."
    ],
    technologies: ["Spring Boot 3", "React.js", "Python", "FastAPI", "YOLO (Computer Vision)", "AWS SageMaker", "PySpark", "AWS Batch", "PostgreSQL", "AWS ECS", "Docker", "SonarQube", "TDD"],
  },
  {
    id: "pearson-se",
    role: "Software Engineer",
    company: "Pearson Lanka",
    companySubtitle: "Global EdTech Enterprise",
    location: "Colombo, Sri Lanka",
    period: "March 2023 – August 2024",
    badge: "Enterprise Microservices",
    projectFocus: "SOCKET Platform — High-Throughput Microservices Middleware for 1M+ Global Students",
    description: "Developed and maintained core microservices platform facilitating mission-critical data synchronization and LMS integration for over 1,000,000 active global learners.",
    highlights: [
      "Designed and developed scalable RESTful APIs using Java 11/17, Spring Boot, and MongoDB to power high-volume LMS integrations, grade synchronizations, and educational content delivery for 1M+ global students.",
      "Architected and integrated an Apache Kafka event-driven messaging backbone, enabling reliable, asynchronous data synchronization across 8+ core microservices and increasing event throughput by 40%.",
      "Optimized MongoDB aggregations and implemented strategic Redis caching, reducing p99 API response latency by 35% across distributed educational endpoints.",
      "Automated CI/CD pipelines utilizing GitLab CI, Kubernetes, and AWS ECS with Infrastructure as Code (IaC), reducing release deployment duration from 2 hours to under 15 minutes.",
      "Remediated critical security vulnerabilities identified via Checkmarx and Snyk, ensuring strict compliance with enterprise cybersecurity policies and SOC2 standards.",
      "Maintained 99.95% service availability in a 24/7 on-call tier-1 production support rotation, rapidly troubleshooting and resolving live incidents with AWS CloudWatch and New Relic."
    ],
    technologies: ["Java 11/17", "Spring Boot", "Apache Kafka", "MongoDB", "Redis", "Kubernetes", "Docker", "GitLab CI/CD", "AWS ECS", "Checkmarx", "Snyk", "CloudWatch", "New Relic"],
  },
  {
    id: "pearson-intern",
    role: "Software Engineer Intern",
    company: "Pearson Lanka",
    companySubtitle: "Global EdTech Enterprise",
    location: "Colombo, Sri Lanka",
    period: "January 2022 – July 2022",
    badge: "Internship",
    projectFocus: "SOCKET Platform Core Services & Cloud Infrastructure Observability",
    description: "Contributed to production feature releases, high-coverage automated unit test suites, and proactive cloud observability pipelines.",
    highlights: [
      "Delivered 5+ production-ready backend features with comprehensive unit and integration test coverage (>85%) using JUnit and Mockito, consistently satisfying SonarQube quality gates.",
      "Investigated and resolved production incidents via ServiceNow, utilizing AWS CloudWatch metrics and New Relic distributed tracing to minimize Mean Time to Resolution (MTTR).",
      "Containerized 3 enterprise legacy services using Docker and configured AWS ECS task definitions for streamlined developer onboarding and staging deployments."
    ],
    technologies: ["Java", "Spring Boot", "JUnit", "Mockito", "AWS ECS", "AWS CloudWatch", "New Relic", "Docker", "ServiceNow"],
  },
];

export const projects: Project[] = [
  {
    id: "claimsight",
    title: "ClaimSight & Supplier Reconciliation Engine",
    category: "Enterprise",
    tagline: "Global Finalist at Sysco Global Hackathon 2026 • Enterprise claim automation & Vision AI platform.",
    description: "Enterprise supply chain fintech and Vision AI platform built at Sysco LABS that automates supplier compliance expense offset (CEO) claims, detects packaging/pallet defects using computer vision (FastAPI + YOLO + SageMaker), and processes millions of supplier records.",
    architecturalOverview: [
      "End-to-end Compliance Expense Offset (CEO) claim automation with React workflow UI and Spring Boot 3 RESTful microservices, automating 500+ monthly claims.",
      "Production computer-vision service (FastAPI + YOLO) integrated with AWS SageMaker training pipeline and active-learning workflow for packaging/pallet defect detection.",
      "PySpark ETL jobs on AWS Batch & Apache Airflow computing supplier performance KPIs over millions of transaction records within sub-hour SLA.",
      "AWS ECS auto-scaling deployment with Aurora PostgreSQL, multi-stage CSV/XLSX bulk validation, S3 storage, and RDS read replicas."
    ],
    impact: "Recognized as a Global Finalist at Sysco Global Hackathon 2026. Automated 500+ monthly supplier claims, eliminated manual overhead, and cut false positives by 30%.",
    technologies: ["React", "Spring Boot 3", "Python / FastAPI", "YOLO (Computer Vision)", "AWS SageMaker", "PySpark", "AWS Batch", "PostgreSQL", "AWS ECS", "Docker", "SonarQube"],
    featured: true,
    demoBadge: "Global Finalist 2026",
    metrics: [
      { label: "Recognition", value: "Global Finalist" },
      { label: "Claims Automated", value: "500+ / mo" },
      { label: "False Positives", value: "-30%" },
      { label: "Data Ingestion", value: "+60% Faster" }
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
      { name: "Go (Golang)", level: "Proficient Foundation" },
    ]
  },
  {
    title: "Backend & Distributed Systems",
    icon: "Server",
    description: "High-throughput microservices, RESTful APIs, and domain-driven design",
    skills: [
      { name: "Spring Boot 3", level: "Expert", highlight: true },
      { name: "Apache Kafka", level: "Expert", highlight: true },
      { name: "Microservices Architecture", level: "Expert", highlight: true },
      { name: "Event-Driven Architecture", level: "Expert", highlight: true },
      { name: "FastAPI", level: "Advanced", highlight: true },
      { name: "RESTful API Design", level: "Expert", highlight: true },
      { name: "Clean Architecture & SOLID", level: "Expert", highlight: true },
      { name: "Node.js / Express", level: "Advanced" },
      { name: "Hibernate / JPA", level: "Advanced" },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    description: "Scalable cloud infrastructure, container orchestration, and CI/CD pipelines",
    skills: [
      { name: "AWS (ECS, Batch, S3, RDS, CloudWatch)", level: "Advanced", highlight: true },
      { name: "Docker & Containerization", level: "Advanced", highlight: true },
      { name: "Kubernetes (K8s)", level: "Advanced", highlight: true },
      { name: "GitLab CI/CD & GitHub Actions", level: "Advanced", highlight: true },
      { name: "Infrastructure as Code (IaC)", level: "Advanced" },
      { name: "Firebase (Hosting & Firestore)", level: "Advanced" },
    ]
  },
  {
    title: "Data Engineering & AI / ML",
    icon: "Cpu",
    description: "Computer vision pipelines, event streaming, and applied ML models",
    skills: [
      { name: "Computer Vision (FastAPI + YOLO)", level: "Advanced", highlight: true },
      { name: "AWS SageMaker & PyTorch", level: "Advanced", highlight: true },
      { name: "PySpark & AWS Batch", level: "Advanced", highlight: true },
      { name: "Apache Kafka Event Streaming", level: "Advanced", highlight: true },
      { name: "Apache Airflow (ETL Pipelines)", level: "Advanced", highlight: true },
      { name: "AI Anomaly Detection", level: "Advanced", highlight: true },
      { name: "Natural Language Processing (NLP)", level: "Intermediate" },
    ]
  },
  {
    title: "Databases & Caching",
    icon: "Database",
    description: "Relational, document, and in-memory high-speed caching datastores",
    skills: [
      { name: "PostgreSQL", level: "Expert", highlight: true },
      { name: "MongoDB", level: "Advanced", highlight: true },
      { name: "Redis Caching", level: "Expert", highlight: true },
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
      { name: "SonarQube (Static Analysis & Gates)", level: "Advanced", highlight: true },
      { name: "Checkmarx & Snyk (Security)", level: "Advanced", highlight: true },
      { name: "Agile / Scrum & JIRA", level: "Advanced" },
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
    grade: "Second Class Upper Division | GPA: 3.56 / 4.00 (German Grade: Gut / 1.8)",
    badge: "Premier Tech University",
    details: [
      "Graduated with Second Class Upper Honours (GPA: 3.56 / 4.00, German Grade Equivalent: Gut / 1.8).",
      "Awarded Dean's List for 2 consecutive semesters (2018–2019) for exceptional academic standing (GPA >= 3.80).",
      "Final Year Project: Led a team of 5 designing a full-stack platform with an AI chatbot (Rasa NLU, Python, React, MongoDB) automating university course allocation for the UGC.",
      "Rigorous curriculum in Distributed Systems, Software Architecture, Algorithms, Database Systems, and Cloud Computing."
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
    level: "Goethe-Zertifikat B1",
    description: "Certified German language proficiency (Goethe-Institut). Eligible for EU Blue Card.",
    badge: "Goethe B1"
  },
  {
    language: "Sinhala & Tamil",
    level: "Native Speaker",
    description: "Bilingual native speaker with strong cross-cultural communication capability.",
    badge: "Native"
  }
];

export const certificationsAndHonors: CertificationOrHonor[] = [
  {
    id: "aws-ai-practitioner",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Sep 2026",
    description: "Validated competencies in Cloud AI/ML architectures, foundation models, prompt engineering, and AWS SageMaker model deployment.",
    badge: "AWS Certified",
    icon: "Cpu"
  },
  {
    id: "sysco-hackathon-2026",
    title: "Global Finalist — Sysco Global Hackathon 2026",
    issuer: "Sysco Corporation",
    date: "2026",
    description: "Recognized among global engineering teams for 'Claim Sight,' an innovative Vision AI solution automating supply chain compliance audits using computer vision.",
    badge: "Global Finalist",
    icon: "Award"
  },
  {
    id: "moratuwa-deans-list",
    title: "Dean's List (2 Consecutive Semesters)",
    issuer: "University of Moratuwa",
    date: "2018 – 2019",
    description: "Awarded Dean's List honours for academic distinction and outstanding semester GPA (>= 3.80 / 4.00) in software engineering.",
    badge: "Academic Distinction",
    icon: "GraduationCap"
  },
  {
    id: "goethe-b1",
    title: "Goethe-Zertifikat B1",
    issuer: "Goethe-Institut",
    date: "Certified",
    description: "Official European Framework (CEFR) B1 German language certificate. Fluent communication in professional German-speaking engineering environments.",
    badge: "CEFR B1",
    icon: "Globe2"
  }
];
