# Giulia's Portfolio Website

## Project Overview
Portfolio site for Giulia, a Product & UX Designer. Features a homepage with grid/list view toggle for projects, individual project case study pages, and an about section.

## Tech Stack
- **Framework:** Next.js 16 (App Router), React 19
- **Styling:** Tailwind CSS v4 (via PostCSS)
- **Language:** TypeScript (strict)
- **Font:** Inter (400, 500, 600, 700) via `next/font/google`, CSS variable `--font-inter`

## Design Tokens
- **Page background:** #f9f9f9 (set on body via CSS variable `--background`)
- **Primary text:** rgba(0,0,0,0.75)
- **Muted text:** rgba(0,0,0,0.4) (captions, footer, section labels)
- **Dividers:** rgba(0,0,0,0.15), 1px height
- **Content padding:** px-[12px] horizontal
- **Section spacing:** pb-[91px] between major sections, pb-[69px] for project grids

## Project Structure
```
app/
  layout.tsx          # Root layout with Inter font
  page.tsx            # Homepage ("use client" — grid/list toggle)
  globals.css         # CSS vars, body styles, fade-in animation
  components/
    Navbar.tsx        # Shared navbar (accepts viewMode/onToggleView props)
    Footer.tsx        # Shared footer with LiveClock
    LiveClock.tsx     # Client component — live HH:MM:SS clock
    ProjectCard.tsx   # Grid view project card
    ProjectListItem.tsx # List view project row
  projects/
    missivio/page.tsx # Missivio case study page
    doordash/page.tsx # DoorDash case study page
public/
  images/             # Project images (see naming convention below) + icons
  images/missivio/    # Missivio case study images
  images/doordash/    # DoorDash case study images
```

## Image Naming Convention
Each project has up to three image variants in `public/images/`:
- `{name}.jpg` — used in grid view (row 2 projects) or as base image
- `{name}-v2.jpg` — used in grid view (row 1 projects)
- `{name}-list.jpg` — used in list view

## Component Conventions
- Function components with default exports
- Props via TypeScript interfaces, destructured with defaults
- Tailwind utility classes directly (no cn/clsx)
- Use `next/link` `<Link>` for internal navigation, `<a>` only for external/anchor links
- Use `next/image` `<Image>` with `fill` + `sizes` prop for responsive images

## Page Patterns

### Homepage
- Grid view: 4-column card row (Missivio, DoorDash, Brightwave, StopBugging) + 2-card row (Roberta, Brazily)
- List view: horizontal rows with number, title, description, tags, image (6 projects total)
- Toggle between views with fade animation (`animate-fade-in` class)
- About section and footer shared between both views

### Project Pages
- Custom navbar with "BACK" link (no toggle icon, no description row)
- Two-column layout: section label (w-305px) left, content right
- Image galleries: full-width (h-460px and h-622px) and side-by-side (2x w-622px)
- Captions: italic 12px, pl-317px
- All body text: `font-normal text-[13px] leading-[1.4] text-black/75` — use `leading-[1.4]` consistently, never `leading-[1.2]`
- Section headings: `font-bold text-[14px] leading-[13.82px] text-black/75`
- Spacer between heading and body: `<div className="h-[13.715px]" />`
- Reuses shared Footer component

### Missivio (`app/projects/missivio/page.tsx`)
- Hero image: `object-cover`
- Iteration image: h-622px full-width
- Sections: The Problem, Research, Constraints, Usability Testing (Round 1 mid-fi / Round 2 hi-fi), Final Design (Solving for visibility / The defining iteration), Learnings
- Final Design content uses `flex flex-col gap-12` between subsections
- Usability Testing Round 2 uses `flex flex-col gap-12` for its two paragraphs

### DoorDash (`app/projects/doordash/page.tsx`)
- Hero image: `object-contain` + `bg-[#e6e6e6]` (empathy map needs contain treatment)
- Sections: The Problem, Research (2 subsections, gap-[91px]), User Personas, First Iteration, Usability Testing (Round 1 mid-fi / Round 2 hi-fi), Final Screens, Learnings
- Research image gallery: `mt-[80px]` after The Problem
- Right research caption: `w-[390px]` (wider than standard w-[305px])
- First Iteration + Usability Testing share one `<section>` with `flex flex-col gap-[64px]`
- Final screens gallery: `mt-[16px]`

## Figma Source
- File key: `yYH6EOPoV2U1jaA4RwhciM`
- Design uses Inter font throughout with specific pixel values for spacing
- All copy must match Figma exactly — do not paraphrase or fabricate text
