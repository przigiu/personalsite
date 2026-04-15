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
  images/brazily/     # Brazily case study images (hero.png, setting-up-1.png, setting-up-2.png, research.gif, design-decision.gif)
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
- Image galleries: full-width (h-622px) and side-by-side (2x w-622px)
- Captions: italic 12px, pl-317px, always `mt-4` (16px) below their image
- All body text: `font-normal text-[13px] leading-[1.4] text-black/75` — use `leading-[1.4]` consistently, never `leading-[1.2]`
- Section headings: `font-bold text-[14px] leading-[13.82px] text-black/75` (Missivio/DoorDash); Brazily uses `text-[15px]`
- Spacer between heading and body: `<div className="h-[13.715px]" />`
- Reuses shared Footer component
- **CRITICAL — section label columns:** Always use `<div className="w-[305px] flex flex-col">` for the label column, never just `flex-shrink-0`. Without `flex flex-col`, the `<span>` is inline in a block container and the inherited body line-height strut pushes the label text down, breaking alignment with the heading.

### Shared spacing conventions (Missivio, DoorDash, Brazily)
- Hero image → THE PROBLEM: `pt-[91px]`
- THE PROBLEM → image below: `pt-[91px]` on the image section
- Image caption → next section: `pt-[56px]` for Research/Usability Testing/First Iteration; `pt-[40px]` for side-by-side image galleries
- Research subsection gap (e.g. second paragraph): `gap-[56px]`
- Research/Constraints → image: `pt-[91px]`
- Image caption → Final Design / major design section: `pt-[56px]`
- Major design section → side-by-side image gallery: 86px (Missivio `mt-[86px]`), 91px (DoorDash `mt-[91px]`)
- Learnings section: `pt-[91px]`

### Missivio (`app/projects/missivio/page.tsx`)
- Hero image: `h-[622px]` full-width, `object-cover`
- Iteration image: h-622px full-width
- Sections: The Problem (`pt-[91px]`), image gallery (`pt-[91px]`), two-image gallery (`mt-[40px]`), Research (`pt-[56px]`), Constraints (`pt-[91px]`), Iteration image (`pt-[91px]`), Usability Testing div (`pt-[56px] pb-[91px]`), Final Design (`pt-[12px]`), Final image gallery (`mt-[86px]`), Learnings (`pt-[91px] pb-[91px]`)
- Final Design content uses `flex flex-col gap-12` between subsections
- Usability Testing Round 2 uses `flex flex-col gap-12` for its two paragraphs

### DoorDash (`app/projects/doordash/page.tsx`)
- Hero image: `h-[622px]`, `object-contain` + `bg-[#e6e6e6]` (empathy map needs contain treatment)
- Sections: The Problem (`pt-[91px]`), Research image gallery (`pt-[91px]`), Research (`pt-[56px]`), User Personas (`py-[91px]`), First Iteration+Usability Testing (no outer padding — gaps controlled individually), Final Screens gallery (`mt-[91px]`), Learnings (`pt-[91px] pb-[91px]`)
- Research subsections: `gap-[56px]` (not 91px)
- Right research caption: `w-[390px]` (wider than standard w-[305px])
- First Iteration + Usability Testing share one `<section className="px-[12px]">` with `flex flex-col` (no gap); Block B has `mt-[56px]`, Block C has `mt-[91px]`
- Usability Testing content div: `pt-[56px]`

### Brazily (`app/projects/brazily/page.tsx`)
- Hero image: `w-[832px] h-[622px]` centered (`flex justify-center` wrapper), `object-contain` on `bg-[#f3f3f3]`; asset at `public/images/brazily/hero.png`
- Sections: The Problem (`pt-[91px]`), Setting Up Claude (`pt-[64px]`), Research (`py-[91px]`), Content with images (`pb-[91px]`), Learnings (`pt-[40px] pb-[91px]`)
- Section subheadings use `font-bold text-[15px] leading-[13.82px] text-black/75` (Brazily uses 15px, not the standard 14px)
- Setting Up Claude right column uses `flex flex-col gap-[91px]` between the text block and the media block
- Text block uses `flex flex-col gap-[24px]`; heading group uses `flex flex-col` with `h-[13.715px]` spacer
- Skill cards: `w-[314px] bg-[#f0f0f0] border border-[#ececec] rounded-[16px] p-[20px] flex flex-col gap-[20px]`
- Skill card badges: `bg-white border border-[#ee6363] rounded-[4px] px-[4px] py-[1px] font-mono text-[13px] leading-[1.4] text-[#cc4949]`
- Skill card body text: `leading-[1.6]` (not the standard 1.4)
- Callout box: `border-t border-[#c8c8c8] pt-[20px] pb-[12px] flex flex-col gap-[8px] w-[642px]` with `#656565` text
- GitHub CTA: `inline-flex items-center gap-[6px] border-b border-black/75` — uses `border-b` (not `underline`) so the line runs continuously under the inline GitHub SVG logo
- Media block (two stacked images): `w-[463px] flex flex-col gap-[8px]`, each image `h-[420px] object-cover`; assets at `public/images/brazily/setting-up-1.png` and `setting-up-2.png`; wrapped in `flex justify-center items-center` to center within the right column
- Content section uses `flex flex-col gap-[64px]` with **2 blocks**, each grouping: full-width `h-[622px]` image + caption (`pl-[317px] w-[622px]`) + text section at `pt-[40px]`
  - Block 1: `research.gif` (`object-contain`) → caption → DESIGN DECISION label+content
  - Block 2: `design-decision.gif` (`object-contain`) → caption → "Other places AI shaped the work" + "What AI did and didn't do" (grouped with `gap-[48px]`, empty `w-[305px]` spacer column)
- Animated GIFs rendered with `<img>` (not `<Image>`) to preserve animation
- "Other places AI shaped the work" list item headings: `font-bold text-[13px] leading-[1.4]`; body text `text-[13px]`
- "What AI did and didn't do" `<ul>` elements have `mt-[18.2px]` (= 13px × 1.4 line-height) below their headings
- Both image captions: `w-[622px]`
- LEARNINGS section label uses `font-normal` (not `font-medium`)

## Figma Source
- File key: `yYH6EOPoV2U1jaA4RwhciM`
- Design uses Inter font throughout with specific pixel values for spacing
- All copy must match Figma exactly — do not paraphrase or fabricate text
