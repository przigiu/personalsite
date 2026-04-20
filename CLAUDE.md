# Giulia's Portfolio Website

## Known Issues
- **Responsiveness broken (as of 2026-04-19):** Changes made in the current session broke all breakpoint behaviour across the site. The `desk:` breakpoint CSS is compiling correctly but layouts are not responding as expected at any viewport width. Root cause not yet identified — uncommitted changes across 12 files are suspects. Do not build on top of these changes until resolved.

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
- **Max-width:** `max-w-[1440px] mx-auto` wrapper in `layout.tsx` — content caps at 1440px and centers on wider screens

## Breakpoints
Three responsive states. Tablet uses `md:`, desktop uses a custom `desk:` breakpoint (NOT `lg:`):
| State | Range | Tailwind prefix |
|-------|-------|----------------|
| Mobile | < 768px | (no prefix) |
| Tablet | 768px – 1221px | `md:` |
| Desktop | 1222px+ | `desk:` |

- `desk:` is a custom Tailwind v4 breakpoint defined in `globals.css` via `@theme { --breakpoint-desk: 76.375rem; }` (76.375rem = 1222px)
- `lg:` is intentionally unused — overriding it in Tailwind v4 causes a CSS generation conflict. Always use `desk:` for desktop styles.
- Mobile and tablet use different layouts — do NOT assume `md:` means "desktop". Desktop layout triggers at `desk:`.
- Figma source frames: 390px (mobile — node `638:221` grid, `638:3` list), 834px (tablet), 1280px (desktop).

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

### ProjectCard (`app/components/ProjectCard.tsx`)
Figma source: node `628:20` (tablet) and `479:506` (desktop) in file `yYH6EOPoV2U1jaA4RwhciM`.
- Card: `flex flex-col h-[277px] md:h-[246px] gap-2 pb-[19px]` — `h-[277px]` on mobile (Figma 390px frame), `h-[246px]` on tablet+. NO `justify-end` (image fills from top)
- Image container: `flex-1 min-h-0 relative w-full overflow-hidden` — flexible height, not fixed. When card has `href`, the `<Link>` gets these same classes directly (no extra wrapper div).
- `imageHeight` prop is kept in the interface for API compatibility but is no longer applied — do not restore fixed image height.
- Bodycopy row: `flex justify-between items-start desk:items-center px-0.5 shrink-0 min-h-[29px]` — `items-start` on tablet, `items-center` on desktop; `min-h-[29px]` ensures consistent 2-line height across all cards
- Title: `font-medium text-[13px] tracking-[1px] text-black/75 uppercase leading-[10.37px] whitespace-nowrap shrink-0`
- Caption: `font-normal text-[12px] leading-[1.2] text-black/[0.57] text-right whitespace-nowrap md:whitespace-normal md:w-[110px] desk:w-[182px] shrink-0` — `whitespace-nowrap` on mobile (no fixed width), `w-[110px]` on tablet, `w-[182px]` on desktop

### ProjectListItem (`app/components/ProjectListItem.tsx`)
Figma source: node `628:112` (tablet) and `477:87` / `629:1479` (desktop) in file `yYH6EOPoV2U1jaA4RwhciM`.

**Tablet (md): 3 columns** — title+number | description+tags stacked | image
- Row: `flex flex-col md:flex-row md:items-end gap-3 md:gap-[12px] pt-[6px]`
- Col 1 (title+number): `md:flex-1 md:self-stretch md:pb-[80px] desk:flex-none desk:w-[306px]`
- Col 2+3 wrapper (desc+tags): `flex flex-col gap-[12px] md:flex-1 md:self-stretch desk:flex-none desk:flex-row` — stacked on tablet, side-by-side columns on desktop
  - Description sub-unit: `md:shrink-0 md:pb-[20px] desk:w-[305px] desk:self-stretch desk:pb-[80px] desk:shrink-0` — tablet gap between desc and tags = `gap-[12px]` + `pb-[20px]` = 32px visual space
  - Tags sub-unit: `md:flex-1 md:pb-[80px] desk:w-[306px] desk:flex-none desk:self-stretch`
  - Description text: `md:w-[182px] leading-[1.2]`; tags: semibold 12px label + regular 12px caption
- Image column: `md:order-last md:flex-1 md:self-stretch bg-[#e7e7e7] flex flex-col` — outer stretches to full row height; inner `h-[199px] w-full shrink-0` anchors image to the TOP; uses `object-contain` (NOT `object-cover`)

**Desktop (desk:): 4 columns** — title (`w-[306px]`) | description (`w-[305px]`) | tags (`w-[306px]`) | image (`flex-1`)
- Col 2+3 wrapper becomes `desk:flex-row` — description and tags split into separate fixed-width columns
- All columns use `self-stretch` + `pb-[80px]` to anchor content to top within the row height

**Mobile (flex-col):** CSS `order` stacks as title (order-1) → description+tags wrapper (order-2) → image (order-3)
- Title col: `order-1`, `pb-[20px]` on mobile, `md:pb-[80px]` on tablet+
- Desc+tags wrapper: `order-2`
- Image: `order-3 md:order-last` — appears last on mobile, rightmost column on tablet/desktop

## Page Patterns

### Homepage
- Grid view: layout changes per breakpoint (see below)
- List view: horizontal rows with number, title, description, tags, image (6 projects total)
- Toggle between views with fade animation (`animate-fade-in` class)
- About section and footer shared between both views

**Mobile (< 768px):**
- Navbar: name (left), view toggle icon (center), MENU text button (right) — MENU opens MobileDrawer. Gap between navbar rows: `gap-[40px]`. Description paragraph visible on mobile (no `hidden md:flex`).
- Grid view: horizontal snap-scroll carousel (`snap-x snap-mandatory`, `hide-scrollbar`) with all 6 projects, card width `w-[calc(100vw-52px)]` (338px on 390px frame). No dot indicators.
- List view: stacked per item with `gap-[20px]` between items (`md:gap-0`). Within each item, CSS `order` stacks: title (order-1) → desc+tags (order-2) → image (order-3)
- Sections hidden via `md:hidden`

**Tablet (768px – 1221px):**
- Navbar: name block `w-[295px]`, `gap-[12px]` between name and toggle (same gap as desktop — do NOT use `desk:gap-[171px]`), CONTACT/ABOUT links right. Description row: visible on all breakpoints (no `hidden md:flex`); outer wrapper `md:pl-[412px]`, inner `<p>` has `w-[308px]` (fixed width matching Figma 834px frame — do NOT use `pr-[200px]` on the outer wrapper at tablet).
- Grid view: two rows of 3 cards each (`hidden md:flex desk:hidden`). Row 1: Missivio/DoorDash/Brightwave. Row 2: StopBugging/Roberta/Brazily. Cards use `flex-1 min-w-0`.
- About section: ABOUT label column `w-[396px]`
- List view: 3 equal `flex-1` columns per row — title+number | description+tags stacked (`gap-[12px]`, desc `pb-[20px]` = 32px visual gap) | image

**Desktop (1222px+):**
- Navbar: name block `w-[295px]` (same as tablet — do NOT use `desk:w-auto`), `gap-[12px]` between name and toggle (Figma node 477:88). Description row: `desk:pl-[635px] desk:pr-[200px]`, text uses `desk:flex-1 desk:w-auto` (not fixed `w-[308px]`).
- Grid view (Figma node 479:506 row 1, 479:539 row 2): row 1 = 4 cards × `flex-1 min-w-0` with `items-end` on section. Row 2 = 2 cards × `flex-1 min-w-0` + two invisible `<div className="flex-1 min-w-0" />` spacers — this makes all 4 column slots share equal width so row 2 cards resize proportionally with row 1. Sections use `hidden desk:flex`.
- List view: 4 columns — title (`w-[306px]`) | description (`w-[305px]`) | tags (`w-[306px]`) | image (`flex-1`)
- About section: ABOUT label column `w-[619px]`

### Project Pages
- Uses shared `ProjectNavbar` component (replaces inline navbar) — BACK link + CONTACT/ABOUT
- Two-column layout: section label (`w-full md:w-[305px]`) left, content (`w-full md:w-[622px]`) right
- Image galleries: full-width (`h-[300px] md:h-[622px]`) and side-by-side (`md:flex-1`, `h-[240px] md:h-[460px]`) — side-by-side images use `md:flex-1` (not fixed width) so they fill the container at all breakpoints
- Captions: italic 12px, `pl-0 md:pl-[317px]`, always `mt-4` (16px) below their image
- All body text: `font-normal text-[13px] leading-[1.4] text-black/75` — use `leading-[1.4]` consistently, never `leading-[1.2]`
- Section headings: `font-bold text-[14px] leading-[13.82px] text-black/75` (Missivio/DoorDash); Brazily uses `text-[15px]`
- Spacer between heading and body: `<div className="h-[13.715px]" />`
- Reuses shared Footer component
- **CRITICAL — section label columns:** Always use `<div className="w-full md:w-[305px] flex flex-col pb-[20px] md:pb-0">` for the label column. The `pb-[20px] md:pb-0` creates the correct 32px visual gap between label text and heading on mobile (12px gap from outer flex + 20px padding = 32px). Without `flex flex-col`, the `<span>` is inline in a block container and the inherited body line-height strut pushes the label text down.

**Mobile (< md):**
- Navbar: two-row layout — Row 1: name (left) + MENU (right); Row 2: `← BACK` (left-aligned). Outer is `flex flex-col gap-[40px]`, NOT a 3-column single row.
- Two-column sections collapse to single column (`flex flex-col gap-[12px] md:flex-row md:gap-3`) — `gap-[12px]` on mobile (not `gap-1`)
- All fixed widths become `w-full md:w-[...]`
- Captions go flush-left (`pl-0`) under their images
- Section spacing reduced: `pt-[48px] md:pt-[91px]`, `pt-[32px] md:pt-[56px]`
- Side-by-side image pairs stack vertically (`flex flex-col gap-3 md:flex-row`)
- **Two-image gallery caption pattern (mobile):** Each image is wrapped with its own caption (`md:hidden`) so the caption appears directly below its image. A separate `hidden md:flex` row of both captions sits below both images for tablet/desktop. Do NOT put both captions in a single shared div that appears after both images — on mobile this puts all captions below all images.

**Image full-width on mobile:**
- All project page images are full-width (edge-to-edge) on mobile.
- **Hero image wrappers** (standalone div, not inside a text section): use `mt-4 md:px-[12px]` on the wrapper — no padding on mobile, padding restored on tablet+.
- **Images inside `px-[12px]` sections** (mixed with text/captions): apply `w-[calc(100%+24px)] -ml-[12px] md:w-full md:ml-0` to the image container div. This bleeds out the 12px section padding on each side, making the image viewport-wide on mobile while resetting cleanly on tablet+.
- Brazily hero: wrapper is `mt-4 flex justify-center md:px-0` (no mobile padding; `md:px-0` keeps the centered `md:w-[832px]` container).
- Brazily setting-up images: the `md:w-[463px]` image wrapper must NOT have `overflow-hidden` (it would clip the bleed). Each image div gets the calc bleed classes.

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
- Media block (two stacked images): `w-full md:w-[463px] flex flex-col gap-[8px]` (NO `overflow-hidden` — it clips the mobile bleed), each image `h-[260px] md:h-[420px] object-cover` with bleed classes `w-[calc(100%+24px)] -ml-[12px] md:w-full md:ml-0`; assets at `public/images/brazily/setting-up-1.png` and `setting-up-2.png`; wrapped in `flex justify-center items-center` to center within the right column
- Content section uses `flex flex-col gap-[64px]` with **2 blocks**, each grouping: full-width `h-[300px] md:h-[622px]` image + caption (`pl-0 md:pl-[317px] w-full md:w-[622px]`) + text section at `pt-[40px]`
  - Block 1: `research.gif` (`object-contain`) → caption → DESIGN DECISION label+content
  - Block 2: `design-decision.gif` (`object-contain`) → caption → "Other places AI shaped the work" + "What AI did and didn't do" (grouped with `gap-[48px]`, empty `w-[305px]` spacer column)
- Animated GIFs rendered with `<img>` (not `<Image>`) to preserve animation
- "Other places AI shaped the work" list item headings: `font-bold text-[13px] leading-[1.4]`; body text `text-[13px]`
- "What AI did and didn't do" `<ul>` elements have `mt-[18.2px]` (= 13px × 1.4 line-height) below their headings
- Both image captions: `w-[622px]`
- LEARNINGS section label uses `font-normal` (not `font-medium`)

### About Section (homepage `app/page.tsx`)
Figma source: node `628:69` in file `yYH6EOPoV2U1jaA4RwhciM`.
- Section: `px-[12px] py-3 pb-[115px]`
- Divider `<hr>`: `border-0 h-px bg-black/15 w-full mb-[6px]` — `mb-[6px]` is the ONLY gap between the divider and the columns (do NOT also add `pt-[6px]` on the flex div below, that doubles the gap to 12px)
- Column-set: `flex flex-col md:flex-row items-start gap-4` — `items-start` prevents the ABOUT label column from stretching
- ABOUT label: `<p>` with `font-medium text-[13px] text-black/75 leading-[13.82px] md:w-[396px] desk:w-[619px] shrink-0`
- Content column: `flex-1 flex flex-col gap-[13.715px]` — gap between heading and body text
- Last paragraph bold split: `<strong>beauty in function isn't a luxury, i</strong>t's what makes people trust...` — the "i" of "it's" is inside the bold span (Figma spec)

### Footer (`app/components/Footer.tsx`)
- Always `flex-row items-end` at all breakpoints — no stacking on mobile
- Layout: `flex flex-row items-end px-[11px] pt-[91px] pb-3 gap-[11.5px]`
- Clock div: `md:w-[615px]`; copyright div: `md:w-[630px]` — fixed widths only apply at tablet+

### layout.tsx
- `<body>` has `suppressHydrationWarning` to silence browser-extension attribute mismatches (Grammarly, 1Password, etc. inject attributes at runtime that don't exist in server-rendered HTML)

## Figma Source
- File key: `yYH6EOPoV2U1jaA4RwhciM`
- Design uses Inter font throughout with specific pixel values for spacing
- All copy must match Figma exactly — do not paraphrase or fabricate text
