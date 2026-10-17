# Project Evolution & Changelog (`track.md`)

This document provides a comprehensive record of the technical transformations, architectural decisions, and feature implementations applied to the **Aditya Thakur Portfolio Website**, from the initial codebase to the current modern React application.

---

## 1. Tech Stack Overview

### Legacy Stack (Initial)
* **Core**: Pure HTML5, CSS3, Vanilla JavaScript (ES5/ES6)
* **Libraries**: `particles.js` (CDN), FontAwesome (CDN)
* **Architecture**: Single monolithic `index.html` (~280 lines), `style.css` (~600 lines), `main.js` (~320 lines)
* **Build System**: None (raw static files)

### Modern Stack (Current Production)
* **Framework**: **React 18 / 19**
* **Build Tool & Bundler**: **Vite 5** (Ultra-fast HMR, ES modules, optimized Rollup bundling)
* **Styling**: **Tailwind CSS v3** + PostCSS + Autoprefixer
* **Animation & Motion**:
  * **Framer Motion**: Page transitions, `<AnimatePresence>` unmasking, layout animations, spring physics
  * **GSAP (GreenSock 3.15)**: Continuous procedural color atmosphere shifting, multi-axis floating orb physics
* **Iconography**: **Lucide React** + Crisp Optimized Inline SVGs
* **Typography**: Google Fonts (*Space Grotesk*, *Plus Jakarta Sans*, *JetBrains Mono*)
* **Compatibility**: Node.js v18.19.1+ compatible build pipeline

---

## 2. Chronological Change Log

### Phase 1: Ideation & Visual Prototyping
* **HackSpire Research**: Deconstructed the animation and layout language of [hackspire.tech](https://www.hackspire.tech/) (video canvases, kinetic typography, SVG line drawing, and magnetic buttons).
* **Conceptual Experiments**: Built interactive standalone prototypes:
  1. *Concept 1: The Kinetic Editorial* (HackSpire electric violet / lavender theme)
  2. *Concept 2: Cybernetic Monolith & Telemetry* (DevOps terminal HUD & 3D mesh)
  3. *Concept 3: Fluid Spatial Storytelling* (Horizontal pinned gallery & hover previews)
  4. *Concept 4: The Tactile Hardware Console* (Teenage Engineering synth deck)
* **Pivot to Minimalist Design**:
  * User requested a clean, clutter-free, non-distracting minimalist portfolio with a simple, high-impact intro animation.
  * Designed the *Minimalist & Designful* prototype with the horizontal hairline shutter sequence.

---

### Phase 2: Full React & Framework Migration
* **Clean Migration**: Cleaned up the legacy vanilla files (`main.js`, `style.css`) and transitioned directly to a modular React + Vite architecture.
* **Environment Setup**:
  * Initialized `package.json` with `dev`, `build`, and `preview` scripts.
  * Installed `react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `tailwindcss`, `postcss`, `autoprefixer`, `framer-motion`, `lucide-react`, and `gsap`.
  * Configured [`vite.config.js`](file:///home/aditya/Desktop/Portfolio-Website/vite.config.js) and [`tailwind.config.js`](file:///home/aditya/Desktop/Portfolio-Website/tailwind.config.js) with custom design tokens.
  * Created standard [`.gitignore`](file:///home/aditya/Desktop/Portfolio-Website/.gitignore) ignoring `node_modules` and `dist`.

---

### Phase 3: Component Architecture

The website is partitioned into modular React components under [`src/components/`](file:///home/aditya/Desktop/Portfolio-Website/src/components/):

| Component | File | Responsibilities |
| :--- | :--- | :--- |
| **App** | [`src/App.jsx`](file:///home/aditya/Desktop/Portfolio-Website/src/App.jsx) | Root orchestrator; handles intro curtain state and replay trigger. |
| **IntroCurtain** | [`src/components/IntroCurtain.jsx`](file:///home/aditya/Desktop/Portfolio-Website/src/components/IntroCurtain.jsx) | Cinematic entry sequence: horizontal hairline filament expands, text unblurs, upward dissolve. |
| **Navbar** | [`src/components/Navbar.jsx`](file:///home/aditya/Desktop/Portfolio-Website/src/components/Navbar.jsx) | Sticky header, live availability beacon, navigation links, and "Intro" replay button. |
| **Background** | [`src/components/Background.jsx`](file:///home/aditya/Desktop/Portfolio-Website/src/components/Background.jsx) | Procedural GSAP color loop, 3 multi-axis floating orbs, interactive dot-grid with mouse lerp, canvas starfield. |
| **Hero** | [`src/components/Hero.jsx`](file:///home/aditya/Desktop/Portfolio-Website/src/components/Hero.jsx) | High-impact typography, location metadata, quick action buttons, and top credential badges. |
| **Projects** | [`src/components/Projects.jsx`](file:///home/aditya/Desktop/Portfolio-Website/src/components/Projects.jsx) | Project showcase with interactive filter pills, tag badges, and custom visual mockups. |
| **Skills** | [`src/components/Skills.jsx`](file:///home/aditya/Desktop/Portfolio-Website/src/components/Skills.jsx) | 4 organized categories reflecting technical expertise from the resume. |
| **About** | [`src/components/About.jsx`](file:///home/aditya/Desktop/Portfolio-Website/src/components/About.jsx) | Personal narrative, education details, spoken languages, and status. |
| **Timeline** | [`src/components/Timeline.jsx`](file:///home/aditya/Desktop/Portfolio-Website/src/components/Timeline.jsx) | Chronological track record of hackathons, achievements, and academic milestones. |
| **Contact** | [`src/components/Contact.jsx`](file:///home/aditya/Desktop/Portfolio-Website/src/components/Contact.jsx) | Interactive email copy button with toast feedback, direct telephone link, LinkedIn, GitHub, and footer. |

---

### Phase 4: Dynamic GSAP Background Implementation
To resolve the dark canvas feeling empty without causing visual distraction:
* **Automatic Atmospheric Color Morph**: Implemented a 100% client-side GSAP loop cycling across 4 palettes every 9 seconds using a `3.5s power2.inOut` easing:
  1. *Cosmic Indigo* (`#6366F1` / `#8B5CF6`)
  2. *Emerald Aurora* (`#10B981` / `#06B6D4`)
  3. *Sunset Nebula* (`#F43F5E` / `#F59E0B`)
  4. *Oceanic Abyssal* (`#0284C7` / `#2563EB`)
* **Multi-Axis Floating Physics**: 3 independent diffuse orbs (`blur-[140px]` to `blur-[160px]`) running un-synced sine wave motion loops (14s, 16s, and 18s).
* **Interactive Architectural Dot-Grid**: Mouse coordinates tracked with mathematical linear interpolation (`lerp`), illuminating the 36px dot pattern near the cursor.
* **Canvas Ambient Specks**: Lightweight canvas animating 42 drifting starfield particles.
* **Atmosphere Indicator**: Discrete live badge in the lower corner displaying the current atmosphere name.

---

### Phase 5: Resume & Content Synchronization
Updated all portfolio copy and metadata to precisely match the user's authentic resume:
* **Personal Profile**: Aditya Thakur &bull; Kolkata, India &bull; `adityathakur03012006@gmail.com` &bull; `+91 7858888488` &bull; [linkedin.com/in/adithakur03](https://linkedin.com/in/adithakur03).
* **Education**: Netaji Subhash Engineering College (NSEC), B.Tech in CSE (IoT), 2024 &ndash; 2028.
* **Projects Integrated**:
  1. **Grade Compass &mdash; MAKAUT Grade Calculator** *(Personal Project)*: Student-focused academic calculator for marks tracking and End-Semester Exam target score estimation.
  2. **Nagar Sudhar &mdash; Civic Issue Reporting System** *(Smart India Hackathon 2025)*: Team civic reporting platform; ranked **4th in Internal Selection**.
  3. **Unnati Portal &mdash; Rural Innovation & CSR Platform** *(Smart India Hackathon 2026)*: Platform connecting village challenges with student engineers, CSR capital, and state monitoring.
  4. **Spring Boot Microservices Architecture**: Decoupled backend architecture, REST APIs, and error handling.
* **Skills Alignment**:
  * *Backend & Enterprise*: `Spring`, `Spring Boot`, `Microservices`
  * *Core Languages & Algorithms*: `Java`, `Data Structures and Algorithms (Java)`, `Python`, `C`, `PHP`, `JavaScript` *(PHP moved to Core per user instruction)*
  * *Frontend & UI/UX Design*: `React`, `Tailwind CSS`, `UI/UX Design`, `HTML`, `CSS`, `JavaScript`
  * *Developer Tools*: `Git`, `GitHub`, `Visual Studio Code`, `IntelliJ IDEA`
* **Honors & Achievements**:
  * Ranked 4th in Internal SIH 2025 selection (*Nagar Sudhar*)
  * Top 20 Finalist at *Hackatron 3.0* (BIT Sindri)
  * Participated in Smart India Hackathon 2026 (*Unnati Portal*)

---

### Phase 6: Intro Animation Fine-Tuning
* **Content Streamlining**: Removed clutter; restricted intro strictly to:
  * Primary: **`Aditya Thakur`**
  * Subtitle: **`PORTFOLIO WEBSITE`**
* **Timing Expansion**: Increased active reading duration to **~3.6 seconds + 0.9s smooth exit dissolve** for a calm, deliberate, cinematic entrance.
* **Replay Accessibility**: Preserved the "Intro" button in the Navbar for on-demand re-triggering.

---

### Phase 7: Mobile Centering & Responsive Polish
* **Centric Layouts on Mobile**:
  * Hero live badge, headline, subtitle, buttons, and credential cards centered on mobile viewports (`text-center sm:text-left`, `justify-center sm:justify-start`).
  * Full-width mobile CTA buttons for seamless one-thumb tap interaction.
  * Section titles, filter pills, and contact headers centered on mobile screens.
* **Horizontal Overflow Lock**:
  * Locked `overflow-x: hidden` and `w-full` on `<html>` and `<body>` to eliminate any sideways drift or empty right-hand gutters on small mobile viewports.
  * Balanced container padding (`px-4 sm:px-6`).

---

## 3. Directory Structure

```
Portfolio-Website/
├── .gitignore
├── dist/                          # Production build output
├── index.html                     # Vite entry HTML
├── node_modules/
├── package.json                   # Dependencies & scripts
├── package-lock.json
├── postcss.config.js              # PostCSS config for Tailwind
├── tailwind.config.js             # Tailwind design tokens & paths
├── track.md                       # This changelog file
├── vite.config.js                 # Vite bundler configuration
└── src/
    ├── App.jsx                    # Root layout component
    ├── index.css                  # Global styles & Tailwind layers
    ├── main.jsx                   # React DOM root render
    └── components/
        ├── About.jsx              # Personal narrative & facts
        ├── Background.jsx         # GSAP continuous atmosphere & orbs
        ├── Contact.jsx            # Copy email, phone, links, footer
        ├── Hero.jsx               # Headline & credential badges
        ├── IntroCurtain.jsx       # Starting unmasking animation
        ├── Navbar.jsx             # Fixed navigation & intro replay
        ├── Projects.jsx           # Cards with preview visuals
        ├── Skills.jsx             # Categorized technical repertoire
        └── Timeline.jsx           # SIH, Hackatron & academic milestones
```

