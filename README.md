# Shivam Kumar Kesharwani — Personal Portfolio

> **Live →** [https://shivam-kumar.onrender.com](https://shivam-kumar.onrender.com)

A production-ready personal portfolio built to communicate my work, experience, and technical identity to recruiters and collaborators. Designed with motion, dark-mode aesthetics, and a component-driven architecture — no templates, no UI kits.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Architecture & Design Decisions](#architecture--design-decisions)
- [Animation System](#animation-system)
- [Sections & Components](#sections--components)
- [Responsive Design](#responsive-design)
- [Build & Development](#build--development)
- [Deployment](#deployment)

---

## Overview

| Property | Value |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Vanilla CSS (custom design system) + Tailwind CSS v4 |
| Animations | GSAP 3 + ScrollTrigger |
| Build Tool | Vite |
| Deployed On | Render |
| Performance | 81 modules, ~427 kB JS (gzip: ~138 kB), ~64 kB CSS (gzip: ~13 kB) |

The portfolio is a **single-page application** with smooth scroll-driven section reveals, a pinned project card deck, a custom cursor, a velocity-aware marquee, and a contact form — all without any third-party UI component library.

---

## Tech Stack

### Core
| Layer | Technology |
|---|---|
| UI Library | React 19 (Concurrent Mode) |
| Bundler | Vite 8 (`@vitejs/plugin-react`) |
| Language | JavaScript (ES6+ modules) |

### Styling
| Tool | Purpose |
|---|---|
| Vanilla CSS | Primary design system — custom properties, layout, typography, animations |
| Tailwind CSS v4 | Utility-class augmentation via `@tailwindcss/vite` plugin |
| Google Fonts | `Bebas Neue`, `Inter`, `JetBrains Mono` |
| CSS Custom Properties | Global colour tokens (`--p-color`, `--dim`, `--border`, `--white`, etc.) |

### Animation
| Tool | Usage |
|---|---|
| GSAP 3 | Timeline control, scroll-based reveals, clip-path text reveals |
| ScrollTrigger | Scroll-pinned project deck, section entry animations |
| `gsap.matchMedia()` | Adaptive animation configs for desktop vs. mobile |
| CSS `@keyframes` | Micro-animations (cursor pulse, nav dot blink, loader spin) |

### Developer Tooling
| Tool | Purpose |
|---|---|
| Vite Preview | Local production preview |
| Render | Zero-config CI/CD deployment |
| Git & GitHub | Source control |
| EmailJS Dashboard | Custom template creation and email delivery tracking |

---

## Project Structure

```text
new_portfolio/
├── port/
│   ├── public/
│   │   ├── icons.svg           # Inline SVG sprite (social icons, arrow icons)
│   │   └── Shivam (1).png      # Profile picture asset
│   ├── src/
│   │   ├── assets/             # Static files (resume PDF, certificates, project images)
│   │   ├── components/
│   │   │   ├── Hero.jsx        # Landing section: animated headline, CTA buttons, status badge
│   │   │   ├── Marquee.jsx     # Velocity-tilt infinite scroll ticker
│   │   │   ├── About.jsx       # Split-grid: story narrative + quick facts + education cards
│   │   │   ├── Experience.jsx  # Timeline: Shroti Telecom full-time + internship roles
│   │   │   ├── Projects.jsx    # GSAP-pinned card deck (5 projects + Explore More card)
│   │   │   ├── Skills.jsx      # Stats row + 2×2 skill category card grid
│   │   │   ├── Certificates.jsx# Certificate modal lightbox gallery
│   │   │   ├── Contact.jsx     # EmailJS contact form + social links
│   │   │   ├── Footer.jsx      # Minimal branding footer
│   │   │   ├── Cursor.jsx      # Custom SVG cursor with hover tracking
│   │   │   ├── Loader.jsx      # Preloader spinner
│   │   │   ├── PillNav.jsx     # Floating pill navigation (section-aware active state)
│   │   │   └── Blog.jsx        # Placeholder blog section
│   │   ├── App.jsx             # Root — Navbar, GSAP global effects, section assembly
│   │   ├── index.css           # Full design system: tokens, layouts, components, breakpoints
│   │   └── main.jsx            # React DOM entry point
│   ├── .env                    # Local environment secrets template (EmailJS)
│   ├── .env.production         # Production build configuration template
│   ├── .gitignore              # Git ignore rules (securing .env variables)
│   ├── index.html              # Shell HTML with font links, meta tags, preconnects
│   ├── vite.config.js          # Vite + React + Tailwind plugin config
│   └── package.json            # Dependencies and scripts
└── README.md                   # Repository documentation (this file)
```

---

## Architecture & Design Decisions

### 1. Single CSS File Design System

All styles live in `index.css` (~1,160 lines) — a deliberate choice. The file is structured into clearly commented sections:

```
Global Reset & Tokens → Typography → Layout Utilities →
Section-specific styles → Responsive Breakpoints
```

CSS custom properties are defined at `:root` and consumed everywhere, making global retheming a one-line change.

### 2. Component Isolation

Each section is a self-contained React component. Data (project list, experience entries, skill categories) is defined as plain JS arrays inside the component — no external state management or API calls needed. This keeps the bundle lean and components portable.

### 3. Animation Architecture (GSAP)

Animations are registered globally in `App.jsx` via `useEffect` after the loading gate resolves. They target CSS class selectors (`.will-fade`, `.will-slide-right`, `.sec-big`) rather than component refs, keeping animation logic decoupled from component render logic.

The projects section uses a separate GSAP context (`gsap.matchMedia()`) with two strategies:
- **Desktop (≥ 801px):** Cards are pinned and stacked using `ScrollTrigger` with a sequential reveal
- **Mobile (≤ 800px):** Cards scroll naturally with `clearProps: 'all'` to reset desktop transforms

### 4. No Third-Party UI Components

The entire UI — navbar, cards, timeline, modals, forms, pills, cursor — is hand-built in CSS and JSX. This results in a smaller bundle and total design control.

---

## Animation System

| Class | Effect | GSAP Method |
|---|---|---|
| `.will-fade` | Fade in + slide up on scroll | `gsap.to()` with `ScrollTrigger` |
| `.will-slide-left` | Slide in from left | `gsap.to()` with `ScrollTrigger` |
| `.will-slide-right` | Slide in from right | `gsap.to()` with `ScrollTrigger` |
| `.sec-big` | Clip-path left-to-right text reveal | `gsap.fromTo()` with `clipPath` |
| `.sk-stat-num span` | Number count-up animation | `gsap.from()` with `textContent` snap |
| `#mq2` (Marquee) | Velocity-based skew on scroll | `ScrollTrigger.onUpdate` + `getVelocity()` |
| Project cards | Pinned deck scroll + sequential reveal | `ScrollTrigger` pin + `gsap.timeline()` |
| Mobile menu | Slide-down appear / fade-out dismiss | `gsap.fromTo()` / `gsap.to()` |

---

## Sections & Components

### Hero
- Animated headline with staggered character reveals
- Live status badge ("Available for opportunities")
- Resume download + Contact CTA buttons
- Background grid pattern via CSS

### About
- Two-column grid: long-form origin story (left) + Quick Facts + Education cards (right)
- Education timeline covering B.Tech, 12th, 10th

### Experience
- Vertical timeline with animated node markers
- **Software Developer (Mar 2026 – Present):** Camera monitoring, map-based site visualization, AI detection integration, full-stack feature delivery
- **Junior Software Developer (Aug 2025 – Feb 2026):** RMS & Airtel platforms, Django REST APIs, MySQL, Postman testing

### Projects
- GSAP-pinned card deck (desktop) / standard scroll (mobile)
- 5 featured projects with tech chips, live demo links, GitHub links
- Explore More card linking to GitHub profile

| # | Project | Stack |
|---|---|---|
| 01 | B2B Lead Enrichment Suite | Python, Django, AI/ML |
| 02 | HBL Auction Platform | Django, React, WebSockets |
| 03 | Skill Sync (Alumni Portal) | React, Node.js, MySQL |
| 04 | AI Interview Simulator | React, Django, OpenAI |
| 05 | Client Portfolio (Vishnu) | React 19, Framer Motion, Tailwind, Radix UI |

### Skills
- Full-width header: **MY STACK** + description
- 4 stat counter cards: 24+ skills, 5 categories, 10+ projects, 2+ years
- 2×2 grid of skill category cards (Languages, Frontend, Backend, Databases)
- Full-width DevOps & Tools card spanning the bottom

### Certificates
- Modal lightbox gallery for professional certifications
- Categories: courses, hackathons, workshops, internship

### Contact
- EmailJS-powered contact form (no backend required)
- Social links: GitHub, LinkedIn, Email, WhatsApp

---

## Responsive Design

Five breakpoints are defined in `index.css`:

| Breakpoint | Target |
|---|---|
| `≥ 1440px` | Wide desktop — expanded max-width, larger typography |
| `≤ 1100px` | Standard laptop — reduced gaps |
| `≤ 800px` | Tablet / mobile — single-column layouts, hamburger nav |
| `≤ 450px` | Small phones — compact spacing and font scaling |
| `≤ 360px` | Ultra-small devices — minimal padding, reduced icon sizes |

All layouts use CSS Grid (`grid-template-columns`) for structural control and flexbox for alignment — no float-based hacks.

---

## Build & Development

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Clone & Install
```bash
git clone https://github.com/Shivam774705/new_portfolio.git
cd new_portfolio/port
npm install
```

### Development Server
```bash
npm run dev
# → http://localhost:5173
```

### Production Build
```bash
npm run build
# Output: dist/
```

### Preview Production Build Locally
```bash
npm run preview
```

### Build Output (latest)
```
dist/index.html                  13.45 kB │ gzip:   3.45 kB
dist/assets/index-*.css          98.18 kB │ gzip:  15.07 kB
dist/assets/index-*.js          426.69 kB │ gzip: 139.96 kB
✓ 100 modules transformed — built in 818ms
```

---

## Deployment

Deployed on **Render** with automatic deployments on push to `main`.

```
Branch: main
Build Command: npm run build
Output Directory: dist
Framework Preset: Vite
```

Environment variables are set via `.env.production` and Render's project dashboard.

---

## Author

**Shivam Kumar Kesharwani**  
Full-Stack Developer · Bhopal, India

- GitHub: [@Shivam774705](https://github.com/Shivam774705)
- LinkedIn: [shivam-kumar-kesharwani](https://linkedin.com/in/shivam-kumar-kesharwani)
- Email: shivamkk1009@gmail.com

> Built from scratch. No templates. No boilerplate UI.

---
*Designed & Built by Shivam Kumar Kesharwani © 2026*
