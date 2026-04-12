# Giulia's Portfolio Website

## Project Overview
Portfolio site for Giulia, a Product & UX Designer. Features a homepage with grid/list view toggle for projects, individual project case study pages, and an about section.

## Tech Stack
- **Framework:** Next.js 16 (App Router), React 19
- **Styling:** Tailwind CSS v4 (via PostCSS)
- **Language:** TypeScript (strict)
- **Font:** Inter (400, 500, 600, 700) via `next/font/google`, CSS variable `--font-inter`
- **Monospace Font:** DM Mono (400) via `next/font/google`, CSS variable `--font-dm-mono`, mapped to Tailwind `font-mono`

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
  layout.tsx          # Root layout with Inter + DM Mono fonts
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
    brazily/page.tsx  # Brazily case study page
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
- Section headings: `font-bold text-[14px] leading-[13.82px] text-black/75` (Missivio/DoorDash); Brazily uses `text-[15px]`
- Spacer between heading and body: `<div className="h-[13.715px]" />`
- Reuses shared Footer component
- **CRITICAL — section label columns:** Always use `<div className="w-[305px] flex flex-col">` for the label column, never just `flex-shrink-0`. Without `flex flex-col`, the `<span>` is inline in a block container and the inherited body line-height strut pushes the label text down, breaking alignment with the heading.

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

### Brazily (`app/projects/brazily/page.tsx`)
- Hero image: full-width `h-[460px]` placeholder (no image asset yet)
- Sections: The Problem (`pt-[91px]`), Setting Up Claude (`pt-[64px]`), Research (`py-[91px]`), Content with images (Design Decision, `pb-[91px]`), Learnings (`pt-[40px] pb-[91px]`)
- Section subheadings use `font-bold text-[15px] leading-[13.82px] text-black/75` (Brazily uses 15px, not the standard 14px)
- Setting Up Claude content column uses `flex flex-col gap-[24px]` between blocks; heading group uses `flex flex-col` with `h-[13.715px]` spacer
- Skill cards: `w-[314px] bg-[#f0f0f0] border border-[#ececec] rounded-[16px] p-[20px] flex flex-col gap-[20px]`
- Skill card badges: `bg-white border border-[#ee6363] rounded-[4px] px-[4px] py-[1px] font-mono text-[13px] leading-[1.4] text-[#cc4949]`
- Skill card body text: `leading-[1.6]` (not the standard 1.4)
- Callout box: `border-t border-[#c8c8c8] pt-[20px] pb-[12px] flex flex-col gap-[8px] w-[642px]` with `#656565` text
- GitHub CTA: `inline-flex items-center gap-[6px] border-b border-black/75` — uses `border-b` (not `underline`) so the line runs continuously under the inline GitHub SVG logo
- Media block placeholder (two stacked images): `w-[463px] h-[711px] flex flex-col gap-[8px]`, placed after the flex row inside the Setting Up Claude section
- Content section uses `flex flex-col gap-[64px]` between major blocks
- "Other places AI shaped the work" + "What AI did and didn't do" grouped with `gap-[48px]`
- First image caption: `w-[305px]`, second: `w-[622px]`

## Figma Source
- File key: `yYH6EOPoV2U1jaA4RwhciM`
- Design uses Inter font throughout with specific pixel values for spacing
- All copy must match Figma exactly — do not paraphrase or fabricate text
