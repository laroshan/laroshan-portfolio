# Laroshan Surendran — Senior Software Engineer Portfolio

A modern, high-performance, dark-glassmorphic portfolio website showcasing **Laroshan Surendran** (Senior Software Engineer at Sysco LABS Sri Lanka, Moratuwa Alumnus) with deep dives into enterprise microservices, cloud infrastructure, AI anomaly detection, and streaming architectures.

---

## 🚀 Key Highlights & Sections

1. **Hero & Value Proposition**:
   - High-impact headline, live code/architecture blueprint terminal card, relocation & EU Blue Card eligibility badges.
2. **Impact Metrics Bar**:
   - `4+ Years` Enterprise Experience, `1M+ Learners` Scaled (Pearson SOCKET platform), `99.9% Uptime` on AWS/Kubernetes, and `3.56/4.00 GPA` (University of Moratuwa).
3. **Experience Timeline**:
   - Interactive role switcher for **Sysco LABS** (Senior Software Engineer), **Pearson Lanka** (Software Engineer & Intern), and enterprise financial systems.
4. **Featured Projects Showcase**:
   - Filterable project grid (Enterprise, Cloud & Systems, AI & Data, Full-Stack) with interactive architectural deep-dive modals (`ClaimSight`, `SOCKET Platform`, `german-b2`, `AI-Powered Code Review Assistant`, `Agentic-Basic`, `Revenue Streaming`).
5. **Categorized Skills Matrix**:
   - Searchable skills categorized by Languages, Backend & Distributed Systems, Cloud & DevOps, Data & AI, Databases & Caching, Quality & Testing, Frontend.
6. **Education & Relocation**:
   - University of Moratuwa (BSc Hons IT), ESOFT Metro Campus, and Language Proficiencies (English C1, German B1).
7. **ATS-Optimized Resume Viewer**:
   - One-click copy formatted text, print/PDF generation, and ATS-tailored preview.
8. **Direct Connect & Contact**:
   - Contact form with mailto dispatcher, one-click email copy, LinkedIn, GitHub, and phone/WhatsApp links.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS + Custom Dark Glassmorphic Design System
- **Icons:** Lucide React
- **Deployment:** Firebase Hosting (Edge CDN distribution, SPA rewrites, and asset caching headers)

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` to view the portfolio.

### 3. Build for Production
```bash
npm run build
```

---

## ☁️ Firebase Deployment

The project is pre-configured with `firebase.json` and `.firebaserc`.

### Deploy to Firebase Hosting:
```bash
npm run deploy
```
or directly via the Firebase CLI:
```bash
firebase deploy --only hosting
```
*(Ensure you are logged in via `firebase login` beforehand)*.

---

## 📂 Project Structure

```
laroshan-portfolio/
├── .firebaserc              # Firebase project link (abroad-dreams)
├── firebase.json            # Firebase Hosting rewrites, cleanUrls & cache headers
├── index.html               # Entry HTML with custom fonts & SEO metadata
├── package.json             # NPM dependencies & scripts
├── tailwind.config.js       # Custom colors, glows, animations
├── vite.config.ts           # Vite + React + path aliases
└── src/
    ├── App.tsx              # Main application layout
    ├── index.css            # Tailwind directives & glassmorphic utilities
    ├── main.tsx             # React DOM bootstrap
    ├── data/
    │   └── portfolioData.ts # Data store for experiences, projects, skills, education
    ├── types/
    │   └── portfolio.ts     # TypeScript interface definitions
    └── components/
        ├── Navbar.tsx       # Sticky glassmorphic navbar with mobile drawer
        ├── Hero.tsx         # Hero section & interactive architecture terminal
        ├── ImpactMetrics.tsx# Verified career statistics bar
        ├── ExperienceSection.tsx # Interactive experience timeline
        ├── ProjectsSection.tsx   # Filterable projects grid
        ├── ProjectModal.tsx      # Architecture deep-dive modal
        ├── SkillsSection.tsx     # Searchable technical skills matrix
        ├── EducationSection.tsx  # Moratuwa degree & language readiness
        ├── ResumeModal.tsx       # ATS resume preview, copy & print engine
        ├── ContactSection.tsx    # Contact hub & direct form
        └── Footer.tsx            # Footer & social links
```
