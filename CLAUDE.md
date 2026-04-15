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
- **Mobile breakpoint:** `md` (768px) — below = mobile, above = desktop. All responsive classes use `md:` prefix.

## Project Structure
```
app/
  layout.tsx          # Root layout with Inter + DM Mono fonts
  page.tsx            # Homepage ("use client" — grid/list toggle)
  globals.css         # CSS vars, body styles, fade-in animation, hide-scrollbar utility
  components/
    Navbar.tsx        # Homepage navbar ("use client" — view toggle + mobile drawer)
    ProjectNavbar.tsx # Project page navbar ("use client" — BACK link + mobile drawer)
    MobileDrawer.tsx  # Slide-out drawer ("use client" — Contact/About links, used by both navbars)
    Footer.tsx        # Shared footer with LiveClock (responsive)
    LiveClock.tsx     # Client component — live HH:MM:SS clock
    ProjectCard.tsx   # Grid view project card
    ProjectListItem.tsx # List view project row (responsive via CSS order)
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

**Mobile (< md):**
- Navbar: name (left), view toggle icon (center), MENU text button (right) — MENU opens MobileDrawer
- Grid view becomes a horizontal carousel (`snap-x snap-mandatory`, `hide-scrollbar` class) with all 6 projects, peek of next card (`w-[calc(100vw-60px)]`), dot indicators below tracking scroll position
- List view: stacked cards using CSS `order` (title → image → description → tags)
- Desktop grid/list sections hidden via `hidden md:flex` / `md:hidden`

### Project Pages
- Uses shared `ProjectNavbar` component (replaces inline navbar) — BACK link + CONTACT/ABOUT
- Two-column layout: section label (`w-full md:w-[305px]`) left, content (`w-full md:w-[622px]`) right
- Image galleries: full-width (`h-[300px] md:h-[622px]`) and side-by-side (`w-full md:w-[622px]`, `h-[240px] md:h-[460px]`)
- Captions: italic 12px, `pl-0 md:pl-[317px]`, always `mt-4` (16px) below their image
- All body text: `font-normal text-[13px] leading-[1.4] text-black/75` — use `leading-[1.4]` consistently, never `leading-[1.2]`
- Section headings: `font-bold text-[14px] leading-[13.82px] text-black/75` (Missivio/DoorDash); Brazily uses `text-[15px]`
- Spacer between heading and body: `<div className="h-[13.715px]" />`
- Reuses shared Footer component
- **CRITICAL — section label columns:** Always use `<div className="w-full md:w-[305px] flex flex-col">` for the label column, never just `flex-shrink-0`. Without `flex flex-col`, the `<span>` is inline in a block container and the inherited body line-height strut pushes the label text down, breaking alignment with the heading.

**Mobile (< md):**
- Navbar: name (left), BACK (center), MENU (right) — same MobileDrawer as homepage
- Two-column sections collapse to single column (`flex flex-col gap-1 md:flex-row md:gap-3`) — label reads as category stamp above content
- All fixed widths become `w-full md:w-[...]`
- Captions go flush-left (`pl-0`) under their images
- Section spacing reduced: `pt-[48px] md:pt-[91px]`, `pt-[32px] md:pt-[56px]`
- Side-by-side image pairs stack vertically (`flex flex-col gap-3 md:flex-row`)

### Shared spacing conventions (Missivio, DoorDash, Brazily)
All spacing uses responsive values: `pt-[48px] md:pt-[91px]` for major sections, `pt-[32px] md:pt-[56px]` for sub-sections.
- Hero image → THE PROBLEM: `pt-[48px] md:pt-[91px]`
- THE PROBLEM → image below: `pt-[48px] md:pt-[91px]` on the image section
- Image caption → next section: `pt-[32px] md:pt-[56px]` for Research/Usability Testing/First Iteration; `pt-[40px]` for side-by-side image galleries
- Research subsection gap (e.g. second paragraph): `gap-[56px]`
- Research/Constraints → image: `pt-[48px] md:pt-[91px]`
- Image caption → Final Design / major design section: `pt-[32px] md:pt-[56px]`
- Major design section → side-by-side image gallery: `mt-[48px] md:mt-[86px]` (Missivio), `mt-[48px] md:mt-[91px]` (DoorDash)
- Learnings section: `pt-[48px] md:pt-[91px]`

### Missivio (`app/projects/missivio/page.tsx`)
- Hero image: `h-[300px] md:h-[622px]` full-width, `object-cover`
- Iteration image: `h-[300px] md:h-[622px]` full-width
- Sections: The Problem (`pt-[48px] md:pt-[91px]`), image gallery (`pt-[48px] md:pt-[91px]`), two-image gallery (`mt-[40px]`), Research (`pt-[32px] md:pt-[56px]`), Constraints (`pt-[48px] md:pt-[91px]`), Iteration image (`pt-[48px] md:pt-[91px]`), Usability Testing div (`pt-[32px] md:pt-[56px] pb-[48px] md:pb-[91px]`), Final Design (`pt-[12px]`), Final image gallery (`mt-[48px] md:mt-[86px]`), Learnings (`pt-[48px] md:pt-[91px] pb-[48px] md:pb-[91px]`)
- Final Design content uses `flex flex-col gap-12` between subsections
- Usability Testing Round 2 uses `flex flex-col gap-12` for its two paragraphs

### DoorDash (`app/projects/doordash/page.tsx`)
- Hero image: `h-[300px] md:h-[622px]`, `object-contain` + `bg-[#e6e6e6]` (empathy map needs contain treatment)
- Sections: The Problem (`pt-[48px] md:pt-[91px]`), Research image gallery (`pt-[48px] md:pt-[91px]`), Research (`pt-[32px] md:pt-[56px]`), User Personas (`py-[48px] md:py-[91px]`), First Iteration+Usability Testing (gaps controlled individually), Final Screens gallery (`mt-[48px] md:mt-[91px]`), Learnings (`pt-[48px] md:pt-[91px] pb-[48px] md:pb-[91px]`)
- Research subsections: `gap-[56px]` (not 91px)
- Right research caption: `w-full md:w-[390px]` (wider than standard w-[305px])
- First Iteration + Usability Testing share one `<section className="px-[12px]">` with `flex flex-col` (no gap); Block B has `mt-[32px] md:mt-[56px]`, Block C has `mt-[48px] md:mt-[91px]`
- Usability Testing content div: `pt-[32px] md:pt-[56px]`

### Brazily (`app/projects/brazily/page.tsx`)
- Hero image: `w-full md:w-[832px] h-[300px] md:h-[622px]` centered (`flex justify-center` wrapper), `object-contain` on `bg-[#f3f3f3]`; asset at `public/images/brazily/hero.png`
- Sections: The Problem (`pt-[48px] md:pt-[91px]`), Setting Up Claude (`pt-[48px] md:pt-[64px]`), Research (`py-[48px] md:py-[91px]`), Content with images (`pb-[48px] md:pb-[91px]`), Learnings (`pt-[40px] pb-[48px] md:pb-[91px]`)
- Section subheadings use `font-bold text-[15px] leading-[13.82px] text-black/75` (Brazily uses 15px, not the standard 14px)
- Setting Up Claude right column uses `flex flex-col gap-[48px] md:gap-[91px]` between the text block and the media block
- Text block uses `flex flex-col gap-[24px]`; heading group uses `flex flex-col` with `h-[13.715px]` spacer
- Skill cards: `w-full md:w-[314px] bg-[#f0f0f0] border border-[#ececec] rounded-[16px] p-[20px] flex flex-col gap-[20px]`
- Skill card badges: `bg-white border border-[#ee6363] rounded-[4px] px-[4px] py-[1px] font-mono text-[13px] leading-[1.4] text-[#cc4949]`
- Skill card body text: `leading-[1.6]` (not the standard 1.4)
- Callout box: `border-t border-[#c8c8c8] pt-[20px] pb-[12px] flex flex-col gap-[8px] w-full md:w-[642px]` with `#656565` text
- GitHub CTA: `inline-flex items-center gap-[6px] border-b border-black/75` — uses `border-b` (not `underline`) so the line runs continuously under the inline GitHub SVG logo
- Media block (two stacked images): `w-full md:w-[463px] flex flex-col gap-[8px]`, each image `h-[260px] md:h-[420px] object-cover`; assets at `public/images/brazily/setting-up-1.png` and `setting-up-2.png`; wrapped in `flex justify-center items-center` to center within the right column
- Content section uses `flex flex-col gap-[64px]` with **2 blocks**, each grouping: full-width `h-[300px] md:h-[622px]` image + caption (`pl-0 md:pl-[317px] w-full md:w-[622px]`) + text section at `pt-[40px]`
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
