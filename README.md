# SDET Portfolio — Interactive Quality Engineering Showcase

A dark-themed, single-page portfolio built with **Next.js 16**, **React 19**, and **TypeScript** — designed to showcase SDET and test automation expertise through interactive demos and data-driven visualizations.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI Library | React 19 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 3 + CSS variables (HSL) |
| Components | shadcn/ui (Radix UI primitives) |
| Charts | Recharts |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Fonts | Inter (sans), JetBrains Mono (mono) |

## Project Structure

```
app/
├── layout.tsx              # Root layout, metadata, font config
├── page.tsx                # Main SPA entry — section routing & state
└── globals.css             # Theme variables, keyframe animations, utilities

components/
├── sidebar-nav.tsx         # Fixed sidebar with section navigation
├── pipeline-simulator.tsx  # Interactive CI/CD pipeline demo
├── projects-gallery.tsx    # Project cards with test result stats
├── project-detail.tsx      # Drill-down view with charts & smoke test modal
├── experience-changelog.tsx# Work history as versioned changelog entries
├── education.tsx           # Education & certifications
├── tech-stack.tsx          # Categorized skill badges
├── contact-form.tsx        # Bug-report-styled contact form
├── theme-provider.tsx      # Dark mode theme context
└── ui/                     # 52 shadcn/ui base components

hooks/
├── use-toast.ts            # Reducer-based toast notification system
└── use-mobile.tsx          # Responsive breakpoint detection

lib/
└── utils.ts                # cn() — clsx + tailwind-merge helper
```

## Architecture

**Single-page, state-driven navigation.** The root `page.tsx` manages the active section and selected project via `useState`. The sidebar triggers section switches; no client-side router is used beyond the App Router entry point.

```
Section type = 'overview' | 'projects' | 'experience' | 'education' | 'tech-stack' | 'contact'
```

**Component layers:**
- **Feature components** — domain-specific sections (pipeline simulator, project gallery, etc.)
- **UI components** — headless Radix primitives styled via Tailwind through shadcn/ui
- **Hooks** — encapsulated behavior (toast queue, viewport detection)

**Data is co-located as typed constants** inside each feature component. Interfaces define the shape; arrays hold the portfolio content. No external CMS or API calls.

## Key Features

- **Pipeline Simulator** — async step execution with mock console output, progress bars, and auto-scrolling logs
- **Project Gallery** — glass-effect cards with test result grids (passed/failed/skipped), neon-glow status indicators, and framework badges
- **Project Detail** — pie charts via Recharts, test run history, smoke test execution modal
- **Experience Changelog** — versioned entries with before/after performance diffs and change-type badges (ADDED, OPTIMIZED, REFACTORED)
- **Contact Form** — validated with Zod schemas, submitted with toast feedback

## Patterns & Code Style

- **Named exports** for all components (`export function ComponentName`)
- **`"use client"` directive** on every interactive component
- **Two-space indentation**, kebab-case filenames, minimal comments
- **`cn()` utility** for conditional/merged Tailwind classes
- **Staggered animations** via inline `animationDelay` keyed to array index
- **Dark mode only** — `className="dark"` hardcoded on `<html>`
- **Glass-morphism** — `.glass` / `.glass-effect` utility classes with `backdrop-blur` and semi-transparent backgrounds
- **CSS custom properties** for all theme colors (primary cyan `#00ffc8`)

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server (Turbopack)
pnpm dev

# Production build
pnpm build

# Serve production build
pnpm start

# Lint
pnpm lint
```

Dev server runs at `http://localhost:3000`.

## Build Notes

- **`next.config.mjs`** — TypeScript build errors are ignored; images are unoptimized (static export compatible)
- **`tsconfig.json`** — strict mode, `@/*` path alias mapped to project root
- **Deployment target** — Vercel (scaffolded with v0.app)
