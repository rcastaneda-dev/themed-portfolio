# Responsive Redesign — Design Spec

## Goal
Make the portfolio fully responsive across mobile, tablet, and desktop without changing the existing dark glassmorphism aesthetic.

## Breakpoints

| Name | Width | Targets |
|------|-------|---------|
| Mobile | < 768px | Phones (iPhone SE — Pro Max) |
| Tablet | 768px – 1023px | iPad Mini, iPad, iPad Air |
| Desktop | ≥ 1024px | Laptops, desktops, iPad Pro landscape |

## Navigation

- **Desktop (≥1024px):** Fixed sidebar (264px), current behavior
- **Mobile/Tablet (<1024px):** Sticky top bar with hamburger icon. Tapping opens the sidebar as a Sheet/Drawer overlay from the left. Drawer auto-closes on section selection.

## Layout Changes Per Component

| Component | Mobile (<768px) | Tablet (768–1023px) | Desktop (≥1024px) |
|-----------|----------------|--------------------|--------------------|
| Page layout | No sidebar margin, full-width, p-4 | No sidebar margin, p-6 | ml-64, p-10 |
| PipelineSimulator metrics | 1 column | 3 columns | 3 columns |
| ProjectsGallery | 1 column | 2 columns | 2 columns |
| ProjectDetail | Stacked panels | Stacked panels | 2 columns |
| ExperienceChangelog | Compact timeline | Current | Current |
| Education | 1 column | 2 columns | 2 columns |
| TechStack | 1 column | 2 columns | 2 columns |
| ContactForm | Stacked | Stacked | 3 columns |

## Key Responsive Fixes

1. Remove fixed `ml-64` on main content below `lg` breakpoint
2. Add mobile top bar — sticky, glassmorphism style matching sidebar
3. Use shadcn Sheet component for the drawer
4. Touch-friendly targets — ≥44px tap targets on mobile
5. Fluid typography — text sizes that don't overflow on small screens
6. Prevent horizontal overflow
7. Pipeline console — horizontal scroll on small screens

## Files to Modify

- `app/page.tsx` — Layout wrapper, sidebar visibility
- `components/sidebar-nav.tsx` — Responsive sidebar + mobile top bar
- `components/pipeline-simulator.tsx` — Metric cards grid
- `components/projects-gallery.tsx` — Minor tweaks
- `components/project-detail.tsx` — Two-panel layout
- `components/experience-changelog.tsx` — Timeline layout
- `components/education.tsx` — Minor tweaks
- `components/tech-stack.tsx` — Minor tweaks
- `components/contact-form.tsx` — 3-column layout
- `app/globals.css` — Utility classes if needed
