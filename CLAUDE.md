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
- **Content padding:** px-[22px] horizontal, footer px-[11px]
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
public/
  images/             # Homepage project images + icons
  images/missivio/    # Missivio case study images
```

## Component Conventions
- Function components with default exports
- Props via TypeScript interfaces, destructured with defaults
- Tailwind utility classes directly (no cn/clsx)
- Use `next/link` `<Link>` for internal navigation, `<a>` only for external/anchor links
- Use `next/image` `<Image>` with `fill` + `sizes` prop for responsive images

## Page Patterns

### Homepage
- Grid view: 4-column card row + 2-card row
- List view: horizontal rows with title, number, description, tags, image
- Toggle between views with fade animation (`animate-fade-in` class)
- About section and footer shared between both views

### Project Pages
- Custom navbar with "BACK" link (no toggle icon, no description row)
- Two-column layout: section label (w-305px) left, content right
- Image galleries: full-width (h-460px) and side-by-side (2x w-622px)
- Captions: italic 12px, pl-317px
- Reuses shared Footer component

## Figma Source
- File key: `yYH6EOPoV2U1jaA4RwhciM`
- Design uses Inter font throughout with specific pixel values for spacing
- All copy must match Figma exactly — do not paraphrase or fabricate text
