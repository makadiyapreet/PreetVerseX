<h1 align="center">
  <br>
  ⬡ PreetVerseX
  <br>
</h1>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Space+Mono&weight=700&size=22&pause=1000&color=4A90D9&center=true&vCenter=true&random=false&width=500&lines=Cybersecurity+Enthusiast;Full+Stack+Developer;AI+%2F+ML+Engineer;GATE+CS+Qualified;Building+the+future+%E2%80%94+one+commit+at+a+time" alt="Typing SVG" />
</p>

<p align="center">
  <strong>A next-generation dual-mode portfolio — professional showcase meets cybersecurity playground.</strong>
</p>

<p align="center">
  <a href="https://preetversex.netlify.app"><img src="https://img.shields.io/badge/🌐_Live_Demo-preetversex.netlify.app-4A90D9?style=for-the-badge" alt="Live" /></a>
  <a href="https://github.com/makadiyapreet"><img src="https://img.shields.io/badge/GitHub-makadiyapreet-181717?style=for-the-badge&logo=github" alt="GitHub" /></a>
  <a href="https://linkedin.com/in/preet-makadiya-13102004-p"><img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-16.14-61DAFB?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/Router-v5.3-CA4245?style=flat-square&logo=reactrouter" />
  <img src="https://img.shields.io/badge/CSS_Variables-Custom_Theming-264de4?style=flat-square&logo=css3" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animations-0055FF?style=flat-square&logo=framer" />
  <img src="https://img.shields.io/badge/i18n-EN_|_HI_|_GU-green?style=flat-square&logo=i18next" />
  <img src="https://img.shields.io/badge/AI-Groq_LLM-F55036?style=flat-square" />
  <img src="https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=flat-square&logo=netlify" />
  <img src="https://img.shields.io/badge/License-Private-red?style=flat-square" />
</p>

---

## 📋 Table of Contents

- [About](#-about)
- [Features Overview](#-features-overview)
- [Normal Mode](#-normal-mode)
- [Cyber Mode](#-cyber-mode)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Environment Variables](#-environment-variables)
- [Routes](#-routes)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Cyber Terminal Commands](#-cyber-terminal-commands)
- [Components Guide](#-components-guide)
- [Deployment](#-deployment)
- [API Keys Setup](#-api-keys-setup)
- [Browser Support](#-browser-support)
- [Changelog](#-changelog)
- [Acknowledgments](#-acknowledgments)

---

## 🧑‍💻 About

**PreetVerseX** is a feature-rich developer portfolio built by **Preet Makadiya** — a B.Tech CSE student at **Pandit Deendayal Energy University (PDEU)** with a CGPA of **8.63**, passionate about **cybersecurity**, **AI/ML**, and **full-stack development**.

This isn't just a portfolio — it's a **dual-mode experience**:

- **Normal Mode** — A polished, professional portfolio with glassmorphism design, i18n support, AI chatbot, project reactions, and a web-based resume viewer.
- **Cyber Mode** — A fully immersive hacking-themed environment with an interactive terminal simulator (25+ commands), Threat Matrix reflex game, interactive Kill Chain, and CTF writeups.

> **Live at:** [preetversex.netlify.app](https://preetversex.netlify.app)

---

## ✨ Features Overview

| Category | Feature | Description |
|----------|---------|-------------|
| 🎨 | **Dual Theme** | Light / Dark mode with CSS variables, persists via `localStorage` |
| 🔒 | **Cyber Mode** | Full cybersecurity-themed portfolio at `/cyber` with 7 sub-pages |
| 🤖 | **PreetBot Chatbot** | Rule-based AI chatbot with Groq LLM fallback (`llama3-8b-8192`) |
| 🔍 | **Site-Wide Search** | `Cmd/Ctrl+K` instant search across projects, skills, certs, experience |
| 🌍 | **i18n (3 Languages)** | English, Hindi (हिंदी), Gujarati (ગુજરાતી) with auto-detection |
| 📄 | **Interactive Resume** | Web-based resume auto-generated from PDF data, Print/Save PDF |
| 🔥 | **Project Reactions** | 🔥⭐💡🚀 emoji reactions on every project card (`localStorage`) |
| 📊 | **GitHub Activity** | Live contribution calendar (custom SVG) + repo/follower stats |
| ✉️ | **EmailJS Contact** | Working contact form with multi-state feedback (success/error/loading) |
| 🔎 | **SEO Optimized** | Dynamic `<title>` + `<meta>` tags per page via `react-helmet` |
| ♿ | **Accessible** | Skip-to-content, `focus-visible`, `aria-labels`, keyboard navigation |
| ⚡ | **Code Splitting** | `React.lazy` + `Suspense` — 85% reduction in initial bundle size |
| 🎬 | **Animated Splash** | SVG hexagon stroke-draw animation with "PM" monogram (2.5s) |
| 🕹 | **Konami Code** | `↑↑↓↓←→←→BA` triggers DEFCON 1 full-screen alert 🚨 |
| 🖱 | **Custom Cursor** | Animated dot cursor with hover scaling (hidden on mobile) |
| ⬆️ | **Scroll to Top** | Floating button appears after scrolling 300px |

---

## 🌐 Normal Mode

The professional portfolio with all standard sections:

### Pages

| Page | Path | Key Features |
|------|------|-------------|
| **Splash** | `/` | SVG hexagon stroke-draw animation → auto-redirects to `/home` |
| **Home** | `/home` | Hero with typing animation, skills overview, GitHub stats, achievements |
| **Education** | `/education` | Animated timeline with school/university cards + certifications grid |
| **Experience** | `/experience` | Accordion-style work experience with expand/collapse |
| **Projects** | `/projects` | Filterable grid with category tabs, emoji reactions, Featured badge |
| **Project Detail** | `/projects/:id` | Full project page with tech stack, links, description |
| **Contact** | `/contact` | EmailJS form + testimonials carousel + blog links |
| **Resume** | `/resume` | Web-rendered resume from PDF data with Print/Save |

### Key Components

| Component | Purpose |
|-----------|---------|
| `Header` | Glassmorphism navbar with logo, nav links, theme toggle, lang switcher |
| `Footer` | 3-column layout — links, social icons, availability badge |
| `PreetBot` | Floating chat bubble → opens chat drawer with rule-based + Groq AI |
| `SearchBar` | `Cmd+K` overlay that indexes all portfolio data |
| `ProjectReactions` | 4-emoji reaction bar under each project card |
| `GithubCalendar` | Custom SVG contribution heatmap |
| `StatsCounter` | Animated counting numbers for key metrics |
| `Timeline` | Vertical timeline for education/experience |
| `CustomCursor` | Animated dot that follows the mouse |
| `KonamiEaster` | ↑↑↓↓←→←→BA → DEFCON 1 alert overlay |

---

## 🔒 Cyber Mode

A fully separate cybersecurity-themed portfolio accessible at `/cyber`. Features deep navy background (`#050508`), terminal green (`#00FF9C`), and red accents (`#FF2D55`).

### Pages

| Page | Path | Description |
|------|------|-------------|
| **Dashboard** | `/cyber` | Terminal with typewriter effect, visitor IP scan, animated stats |
| **About** | `/cyber/about` | Operative dossier with missions, clearance level, PDF export |
| **Skills** | `/cyber/skills` | Radar chart visualization of cybersecurity competencies |
| **Projects** | `/cyber/projects` | Security-focused project showcase with threat classifications |
| **Lab** | `/cyber/lab` | Interactive Kill Chain (7 phases) + CTF Writeups + Threat Matrix game |
| **Terminal** | `/cyber/terminal` | **25+ command** interactive hacking simulator |

### 🕹 Threat Matrix Game (`/cyber/lab`)

A reflex-based security training game:

- **Circular dial** with a rotating cursor and a green **safe zone**
- Click when the cursor is in the safe zone to **unlock** the layer
- **5 levels** — safe zone gets smaller, cursor gets faster each level
- Live stats: Pass Rate, Best Time, Security Depth level
- States: IDLE → PLAYING → SUCCESS (`ACCESS GRANTED`) / FAIL (`INTRUSION DETECTED`)

### 🔗 Interactive Kill Chain (`/cyber/lab`)

- **7 clickable phases**: Reconnaissance → Weaponization → Delivery → Exploitation → Installation → Command & Control → Actions on Objectives
- **Offense/Defense toggle** — switch between attack tools and defensive countermeasures
- Each phase shows relevant tools, techniques, and mitigations

### 🏴 CTF Writeups (`/cyber/lab`)

- **6 documented challenges** from HackTheBox, TryHackMe, PicoCTF
- **Category filter**: ALL / WEB / FORENSICS / CRYPTO
- Each card shows: platform, difficulty (color-coded), methodology, tools used
- **Flag reveal button** — click to show/hide the captured flag

### 💻 Interactive Terminal (`/cyber/terminal`)

Full hacking terminal simulator — see [Cyber Terminal Commands](#-cyber-terminal-commands) section below.

---

## 🛠 Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 16.14, React Router v5.3, Framer Motion |
| **Styling** | CSS Variables, Glassmorphism, CSS Grid/Flexbox, Keyframe Animations |
| **AI/Chat** | Groq API (`llama3-8b-8192`), Rule-based NLP fallback |
| **Forms** | EmailJS (`@emailjs/browser`) |
| **SEO** | `react-helmet`, Open Graph, Twitter Cards |
| **i18n** | `i18next`, `react-i18next` (EN/HI/GU) |
| **Fonts** | Space Mono (monospace), DM Sans (body), Agustina (logo) |
| **Icons** | Font Awesome 6, Iconify |
| **Canvas** | HTML5 Canvas API (Threat Matrix game) |
| **Deploy** | Netlify (CI/CD from GitHub) |

---

## 📁 Project Structure

```
PreetVerseX/
│
├── public/
│   ├── index.html                     # HTML template with meta tags + OG
│   ├── manifest.json                  # PWA manifest
│   ├── robots.txt                     # SEO crawler rules
│   ├── _redirects                     # Netlify SPA routing (/* → /index.html)
│   ├── 404.html                       # Netlify 404 fallback
│   ├── Preet_Makadiya_Resume.pdf      # Downloadable resume
│   ├── Preet_Makadiya_Cyber.pdf       # Cyber dossier PDF
│   ├── icons/                         # Favicons (16/32/192/512) + OG image
│   └── skills/                        # Skill icon SVGs
│
├── src/
│   ├── index.js                       # Entry point — i18n + ThemeProvider
│   ├── index.css                      # Global CSS reset + variables
│   ├── App.jsx                        # Root — skip-link, chatbot, cursor
│   ├── App.css                        # App-level styles
│   ├── portfolio.js                   # 📦 All portfolio data (single source)
│   ├── theme.js                       # Legacy theme object
│   ├── serviceWorker.js               # PWA service worker
│   │
│   ├── assets/
│   │   ├── fonts/                     # Agustina, DM Sans, Space Mono
│   │   ├── images/                    # Photos, illustrations, SVGs
│   │   └── imageMap.js                # Image import mapper
│   │
│   ├── context/
│   │   └── ThemeContext.jsx            # 🎨 Light/Dark/Cyber theme provider
│   │
│   ├── i18n/
│   │   ├── index.js                   # i18next configuration
│   │   └── locales/
│   │       ├── en.json                # English translations
│   │       ├── hi.json                # Hindi (हिंदी) translations
│   │       └── gu.json                # Gujarati (ગુજરાતી) translations
│   │
│   ├── components/
│   │   ├── header/                    # 🧭 Glassmorphism navbar + nav links
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── footer/                    # 📌 3-column footer + theme toggle
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.css
│   │   │   └── ToggleSwitch.jsx
│   │   ├── chatbot/                   # 🤖 PreetBot AI chatbot
│   │   │   ├── Chatbot.jsx            #    Chat UI with bubble + drawer
│   │   │   ├── Chatbot.css
│   │   │   ├── chatbotData.js         #    Rule-based response patterns
│   │   │   └── groqService.js         #    Groq LLM API integration
│   │   ├── search/                    # 🔍 Cmd+K search overlay
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.css
│   │   ├── cursor/                    # 🖱 Custom animated cursor
│   │   │   ├── CustomCursor.jsx
│   │   │   └── CustomCursor.css
│   │   ├── konamiEaster/              # 🎮 ↑↑↓↓←→←→BA easter egg
│   │   │   ├── KonamiEaster.jsx
│   │   │   └── KonamiEaster.css
│   │   ├── reactions/                 # 🔥 Project emoji reactions
│   │   │   ├── ProjectReactions.jsx
│   │   │   └── ProjectReactions.css
│   │   ├── langSwitcher/              # 🌍 EN/HI/GU language toggle
│   │   │   ├── LangSwitcher.jsx
│   │   │   └── LangSwitcher.css
│   │   ├── seoHeader/                 # 🔎 Dynamic meta tags
│   │   │   └── SeoHeader.jsx
│   │   ├── githubCalendar/            # 📊 Custom contribution heatmap
│   │   │   ├── GithubCalendar.jsx
│   │   │   └── GithubCalendar.css
│   │   ├── statsCounter/              # 🔢 Animated counting stats
│   │   │   ├── StatsCounter.jsx
│   │   │   └── StatsCounter.css
│   │   ├── timeline/                  # 📅 Vertical timeline
│   │   │   ├── Timeline.jsx
│   │   │   └── Timeline.css
│   │   ├── topButton/                 # ⬆️ Scroll-to-top button
│   │   │   ├── TopButton.jsx
│   │   │   └── TopButton.css
│   │   ├── testimonials/              # 💬 Testimonials carousel
│   │   │   ├── Testimonials.jsx
│   │   │   └── Testimonials.css
│   │   ├── Loader/                    # ⏳ Loading spinner
│   │   │   ├── LoaderLogo.jsx
│   │   │   └── LoaderLogo.css
│   │   ├── achievementCard/           # 🏆 Achievement display card
│   │   ├── blogCard/                  # 📝 Blog post card
│   │   ├── button/                    # 🔘 Reusable styled button
│   │   ├── certificationCard/         # 📜 Certification display
│   │   ├── degreeCard/                # 🎓 Education degree card
│   │   ├── experienceCard/            # 💼 Experience entry card
│   │   ├── projectLanguages/          # 🏷 Language color bars
│   │   ├── skillBars/                 # 📊 Animated skill progress bars
│   │   ├── socialMedia/               # 🔗 Social media icon links
│   │   ├── softwareSkills/            # ⚙️ Tech stack icon grid
│   │   ├── competitiveSites/          # 🏅 Competitive programming links
│   │   ├── publicationsCard/          # 📄 Publication entry
│   │   ├── talkCard/                  # 🎤 Talk/presentation card
│   │   ├── githubRepoCard/            # 📦 GitHub repository card
│   │   ├── issueCard/                 # 🐛 GitHub issue card
│   │   ├── issueChart/                # 📈 Issue statistics chart
│   │   ├── pullRequestCard/           # 🔀 Pull request card
│   │   ├── pullRequestChart/          # 📉 PR statistics chart
│   │   ├── organizationList/          # 🏢 GitHub organizations
│   │   └── visitorCounter/            # 👁 Page visit counter
│   │
│   ├── containers/
│   │   ├── Main.jsx                   # 🚦 React Router with lazy loading
│   │   ├── greeting/                  # 👋 Hero section + typing animation
│   │   ├── skills/                    # 🛠 Skills section with Iconify
│   │   ├── achievement/               # 🏆 Achievements with stats
│   │   ├── education/                 # 🎓 Education section
│   │   ├── experienceAccordion/       # 💼 Expandable experience
│   │   ├── certifications/            # 📜 Certifications grid
│   │   ├── projects/                  # 📁 Project container
│   │   ├── contact/                   # ✉️ Contact form section
│   │   ├── blogs/                     # 📝 Blog posts section
│   │   └── StartupProjects/           # 🚀 Featured startup projects
│   │
│   ├── pages/
│   │   ├── splash/                    # 🎬 Animated splash screen
│   │   │   ├── Splash.jsx             #    SVG hexagon animation + PM
│   │   │   └── Splash.css
│   │   ├── home/                      # 🏠 Landing page
│   │   │   └── HomeComponent.jsx
│   │   ├── education/                 # 🎓 Education page
│   │   │   ├── EducationComponent.jsx
│   │   │   ├── EducationComponent.css
│   │   │   └── EducationImg.jsx
│   │   ├── experience/                # 💼 Experience page
│   │   │   ├── Experience.jsx
│   │   │   ├── Experience.css
│   │   │   └── ExperienceImg.jsx
│   │   ├── projects/                  # 📁 Projects page
│   │   │   ├── Projects.jsx           #    Filterable grid + Featured badge
│   │   │   ├── Projects.css
│   │   │   ├── ProjectDetail.jsx      #    Individual project view
│   │   │   ├── ProjectDetail.css
│   │   │   └── ProjectsImg.jsx
│   │   ├── contact/                   # ✉️ Contact page
│   │   │   ├── ContactComponent.jsx
│   │   │   ├── ContactComponent.css
│   │   │   ├── AddressImg.jsx
│   │   │   └── BlogsImg.jsx
│   │   ├── resume/                    # 📄 Resume page
│   │   │   ├── Resume.jsx
│   │   │   └── Resume.css
│   │   ├── cyber/                     # 🔒 CYBER MODE (7 pages)
│   │   │   ├── CyberLayout.jsx        #    Layout wrapper + footer + title
│   │   │   ├── CyberNav.jsx           #    Terminal-style navigation bar
│   │   │   ├── Cyber.css              #    Shared cyber theme variables
│   │   │   ├── CyberHome.jsx/.css     #    Dashboard + IP scan terminal
│   │   │   ├── CyberAbout.jsx/.css    #    Operative dossier + export
│   │   │   ├── CyberSkills.jsx/.css   #    Radar chart skills
│   │   │   ├── CyberProjects.jsx/.css #    Security project cards
│   │   │   ├── CyberLab.jsx/.css      #    Kill Chain + CTF + Threat Matrix
│   │   │   └── CyberTerminal.jsx/.css #    25+ cmd hacking simulator
│   │   └── errors/
│   │       └── error404/              # 🚫 404 page
│   │           ├── Error.jsx
│   │           └── Error.css
│   │
│   └── theme/
│       └── themeConfig.js             # Theme configuration
│
├── CODE_OF_CONDUCT.md
├── DEPLOY.md                          # Deployment guide
├── FEATURES.md                        # Detailed feature documentation
├── PROJECT_STRUCTURE.md               # File structure documentation
├── README.md                          # ← You are here
├── netlify.toml                       # Netlify build configuration
├── package.json
└── .gitignore
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 14+ and **npm** 6+
- Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/makadiyapreet/PreetVerseX.git
cd PreetVerseX

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start development server
npm start
```

The app opens at **http://localhost:3000**.

### Build for Production

```bash
npm run build
```

Output goes to `build/` — ready for deployment.

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# ─── EmailJS (Contact Form) ───
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

# ─── Groq AI (Chatbot — Optional) ───
REACT_APP_GROQ_API_KEY=your_groq_api_key
```

| Variable | Required? | What Happens Without It |
|----------|-----------|------------------------|
| `REACT_APP_EMAILJS_SERVICE_ID` | For contact form | Contact form shows error |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | For contact form | Contact form shows error |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | For contact form | Contact form shows error |
| `REACT_APP_GROQ_API_KEY` | Optional | Chatbot uses rule-based only |

> ⚠️ **Never commit `.env` to git.** It's already in `.gitignore`.

---

## 📄 Routes

### 🌐 Normal Mode Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Splash` | Animated splash → redirects to `/home` |
| `/home` | `HomeComponent` | Hero, skills, stats, achievements |
| `/education` | `EducationComponent` | Education timeline + certifications |
| `/experience` | `Experience` | Work experience accordion |
| `/projects` | `Projects` | Filterable project grid |
| `/projects/:id` | `ProjectDetail` | Individual project page |
| `/contact` | `ContactComponent` | Contact form + testimonials + blogs |
| `/resume` | `Resume` | Web-based resume viewer |

### 🔒 Cyber Mode Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/cyber` | `CyberHome` | Dashboard with terminal + IP scan |
| `/cyber/about` | `CyberAbout` | Operative dossier |
| `/cyber/skills` | `CyberSkills` | Radar chart skills |
| `/cyber/projects` | `CyberProjects` | Security project showcase |
| `/cyber/lab` | `CyberLab` | Kill Chain + CTF Writeups + Threat Matrix |
| `/cyber/terminal` | `CyberTerminal` | Interactive hacking simulator |

### System Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `*` | `Error404` | 404 page with cyber humor |

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` / `⌘+K` | Open site-wide search overlay |
| `Escape` | Close search / chatbot / modals |
| `↑↑↓↓←→←→BA` | 🚨 DEFCON 1 easter egg alert |
| `Tab` | Navigate interactive elements |
| `Shift+Tab` | Navigate backwards |
| `Enter` | Activate focused element |
| `↑` / `↓` (in terminal) | Browse command history |

---

## 💻 Cyber Terminal Commands

The interactive terminal at `/cyber/terminal` supports **25+ commands** with animated output:

### 🔍 Reconnaissance

| Command | Description | Example |
|---------|-------------|---------|
| `scan <ip>` | Nmap network scan (12 ports, OS detection) | `scan 10.10.10.5` |
| `ping <host>` | ICMP ping with 4 packets + statistics | `ping google.com` |
| `nslookup <domain>` | DNS lookup (A, AAAA, CNAME records) | `nslookup example.com` |
| `whois <domain>` | Domain registration info (registrar, dates, NS) | `whois example.com` |
| `trace` | Traceroute across 8 hops (India → US) | `trace` |

### 💥 Exploitation

| Command | Description | Output |
|---------|-------------|--------|
| `crack` | Hash cracking simulation (MD5 + rockyou.txt) | Progress bar → cracked password |
| `exploit <cve>` | Metasploit exploit simulation | msfconsole → meterpreter session |
| `bruteforce` | Hydra SSH brute force simulation | 7 attempts → valid credentials |
| `sqli` | SQL injection attack simulation | WAF bypass → database dump |
| `decrypt` | Caesar cipher decryption | Cipher analysis → plaintext |

### 🖥 System

| Command | Description |
|---------|-------------|
| `whoami` | Display operative identity + clearance |
| `ls` | List all files (10 files with permissions) |
| `cat <file>` | Read file contents (`readme.txt`, `skills.dat`, `projects.log`, `certs.enc`, `contact.key`, `secret.enc`, `.bash_history`, `network.conf`, `exploit.db`) |
| `pwd` | Print working directory |
| `date` | Show current date/time |
| `ifconfig` | Network interface info (eth0 + tun0 VPN) |
| `status` | System dashboard (firewall, encryption, IDS, VPN, CPU, memory) |
| `neofetch` | System info banner (Kali Linux style) |
| `history` | Show command history |
| `uname` | Show kernel version |
| `uptime` | Show system uptime + load |

### 🎮 Fun & Easter Eggs

| Command | What Happens |
|---------|-------------|
| `matrix` | "Wake up, Neo..." + Matrix rain characters |
| `fortune` | Random cybersecurity quote |
| `ssh <host>` | Simulated SSH connection + Ubuntu welcome |
| `sudo` | "visitor is not in the sudoers file" |
| `rm` | "Permission denied. Nice try though! 😏" |
| `exit` | "You can't escape the matrix." |
| `cd <dir>` | "You're in a browser, remember?" |
| `echo <text>` | Echoes your text back |
| `man <cmd>` | "No manual entry. Type 'help' instead." |

### Terminal Features

- **Arrow key history** — `↑`/`↓` to navigate previous commands
- **Quick command buttons** — Categorized into RECON / EXPLOIT / SYSTEM
- **Live stats** — Commands run, files discovered, access level
- **ASCII banner** — PM TERM logo on startup
- **Command processing indicator** — Input disabled during animations

---

## 🧩 Components Guide

### Data Flow

```
portfolio.js (Single Source of Truth)
    ↓
ThemeContext.jsx (Theme Provider: Light/Dark/Cyber)
    ↓
Main.jsx (React Router — lazy loading all pages)
    ↓
┌─────────────────┐     ┌─────────────────┐
│  Normal Mode    │     │  Cyber Mode     │
│  Header.jsx     │     │  CyberLayout    │
│  Footer.jsx     │     │  CyberNav       │
│  Pages...       │     │  CyberPages...  │
└─────────────────┘     └─────────────────┘
    ↓
App.jsx (ChatBot + CustomCursor + KonamiEaster)
```

### Theme System

CSS variables power the entire theme:

```css
:root {
  --bg: #FFFFFF;           /* Background */
  --text: #1A1A2E;         /* Primary text */
  --text-sub: #6B7A99;     /* Secondary text */
  --accent: #4A90D9;       /* Accent color */
  --card-bg: #FFFFFF;      /* Card background */
  --card-border: #E8ECF2;  /* Card border */
}

[data-theme="dark"] {
  --bg: #0F1117;
  --text: #E0E8FF;
  --accent: #6BB8F5;
}

[data-theme="cyber"] {
  --bg: #050508;
  --text: #E0E8FF;
  --terminal: #00FF9C;     /* Matrix green */
}
```

---

## 🌐 Deployment (Netlify)

### Option 1: GitHub Auto-Deploy (Recommended)

1. Push code to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import existing project**
3. Connect your GitHub repo
4. Build settings (auto-detected from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. Add environment variables in **Site Settings → Environment Variables**
6. Deploy! 🎉

### Option 2: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=build
```

### `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🔑 API Keys Setup

### EmailJS (Contact Form)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. **Add Email Service** → Gmail/Outlook → Copy **Service ID**
3. **Create Template** with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}` → Copy **Template ID**
4. **Account → General → Public Key** → Copy **Public Key**

### Groq AI (Chatbot — Optional)

1. Sign up at [console.groq.com](https://console.groq.com)
2. **API Keys → Create API Key** → Copy key
3. Free tier: 14,400 requests/day

---

## 🌍 Browser Support

| Browser | Supported | Notes |
|---------|-----------|-------|
| Chrome 90+ | ✅ | Full support including custom cursor |
| Firefox 88+ | ✅ | Full support |
| Safari 14+ | ✅ | Needs `-webkit-backdrop-filter` for glass |
| Edge 90+ | ✅ | Chromium-based |
| Mobile Chrome | ✅ | Custom cursor hidden |
| Mobile Safari | ✅ | Tested on iOS 14+ |
| IE 11 | ❌ | No CSS variables, no ES6 |

---

## 🔄 Changelog

### v3.0 — Cyber Expansion (May 2026)

**New Features:**
- ✨ **Animated Splash** — SVG hexagon stroke-draw with PM monogram
- ✨ **Cyber Lab** — Interactive Kill Chain (7 phases, offense/defense toggle)
- ✨ **CTF Writeups** — 6 challenges with category filter + flag reveal
- ✨ **Threat Matrix** — Reflex game with 5 levels of increasing difficulty
- ✨ **Hacking Terminal** — 25+ commands with animated output
- ✨ **Konami Code** — ↑↑↓↓←→←→BA triggers DEFCON 1 alert
- ✨ **Arrow Key History** — Navigate terminal command history

**Improvements:**
- 🔧 Browser tab title changes in Cyber Mode (`⬡ CYBER MODE | Preet Makadiya`)
- 🔧 Project cards — fixed Featured badge clipping, increased spacing
- 🔧 Resume page rebuilt with real PDF data
- 🔧 Removed CyberContact (replaced with Lab + Terminal)
- 🔧 Multiple ESLint fixes

### v2.0 — The Full Upgrade (May 2025)

**Phase 1 — Foundation:** CSS variables, ThemeContext, glassmorphism header
**Phase 2 — Visual:** Custom cursor, hero typing animation, scroll-to-top
**Phase 3 — Content:** Education timeline, skills with Iconify, achievements
**Phase 4 — Portfolio:** Experience accordion, project grid with filtering
**Phase 5 — Cyber Mode:** Full `/cyber` route with 5 pages
**Phase 6 — Contact:** EmailJS form, GitHub calendar, testimonials
**Phase 7 — AI:** PreetBot chatbot with Groq LLM fallback
**Phase 8 — i18n:** 3 languages with auto-detection
**Phase 9 — Search:** `Cmd+K` search, project reactions, web resume
**Phase 10 — Polish:** Footer, splash screen, 404 page, SEO

---

## 🎨 Customization

| What | Where |
|------|-------|
| All portfolio data | `src/portfolio.js` |
| Translations | `src/i18n/locales/` (en.json, hi.json, gu.json) |
| Theme colors | `src/index.css` (CSS variables) |
| Cyber theme | `src/pages/cyber/Cyber.css` |
| SEO meta tags | `src/components/seoHeader/SeoHeader.jsx` |
| Chatbot responses | `src/components/chatbot/chatbotData.js` |

---

## 📊 Build Stats

```
✅ Compiled successfully (0 warnings)

Code-split into 40+ chunks via React.lazy
Main chunk: ~14 KB (gzipped)
Total: ~220 KB initial load (gzipped)
Lighthouse: 92 Performance | 100 Accessibility | 95 SEO
```

---

## 🙏 Acknowledgments

- [Ashutosh Hathidara](https://github.com/ashutosh1919/masterPortfolio) — Original masterPortfolio template
- [Google Fonts](https://fonts.google.com/) — Space Mono, DM Sans
- [Font Awesome](https://fontawesome.com/) & [Iconify](https://iconify.design/) — Icon libraries
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [EmailJS](https://www.emailjs.com/) — Serverless email service
- [Groq](https://groq.com/) — Ultra-fast LLM inference
- [Netlify](https://www.netlify.com/) — Hosting & CI/CD
- [i18next](https://www.i18next.com/) — Internationalization framework
- [react-helmet](https://github.com/nfl/react-helmet) — SEO meta management

---

## 📝 License

This project is **private and proprietary** to Preet Makadiya.
All rights reserved. Not for redistribution or commercial use.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%" />
</p>

<p align="center">
  Built with ❤️ by <strong>Preet Makadiya</strong><br/>
  <sub>B.Tech CSE @ PDEU | CGPA: 8.63</sub><br/>
  <sub>Cybersecurity • AI/ML • Full Stack Development</sub>
</p>

<p align="center">
  <a href="mailto:makadiyapreeta1@gmail.com"><img src="https://img.shields.io/badge/Email-makadiyapreeta1-D14836?style=flat-square&logo=gmail" /></a>
  <a href="https://github.com/makadiyapreet"><img src="https://img.shields.io/badge/GitHub-makadiyapreet-181717?style=flat-square&logo=github" /></a>
  <a href="https://linkedin.com/in/preet-makadiya-13102004-p"><img src="https://img.shields.io/badge/LinkedIn-Preet_Makadiya-0A66C2?style=flat-square&logo=linkedin" /></a>
</p>
