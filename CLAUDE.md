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

## Fluid Page Scaling (1280px → 1440px)
Pages with the `fluid-page` class on their outer wrapper render at the 1280px design frame and visually scale up to fill viewports between 1280–1440px (then cap at 1.125× above 1440). Text columns stay visually centered. Below 1280px there is no scaling — normal responsive layout applies.

- **Where the CSS lives:** inline `<style dangerouslySetInnerHTML>` in `app/layout.tsx`. **Do NOT move this CSS into `globals.css`** — Tailwind v4's CSS engine (Lightning CSS) silently strips any rule containing the non-standard `zoom` property, dropping the entire rule block at build time. Inline `<style>` bypasses that processing.
- **How it works:** The `max-w-[1440px] mx-auto` wrapper in `layout.tsx` has `style={{ containerType: 'inline-size' }}` making it a CSS container. The `fluid-page` class uses `@container` rules (not `@media`) with `width: 1280px; zoom: calc(100cqw / 1280px)`. Using `100cqw` (container query width) instead of `100vw` ties the zoom to the wrapper's actual layout width, avoiding race conditions during window resize and the scrollbar-width discrepancy that `100vw` has in some browsers. At container-width=1440px+, zoom locks to 1.125 via a second `@container (min-width: 1440px)` rule.
- **Applied to:** outer wrapper of `app/page.tsx` (homepage) and each `app/projects/*/page.tsx` (Missivio, DoorDash, Brazily).
- **Caveats:** `zoom` is non-standard but supported in Chrome, Safari, Edge, and Firefox 126+ (May 2024). Fractional zoom values can cause minor sub-pixel rendering artifacts on text/borders.
- **Do NOT put `min-h-screen` on the `fluid-page` wrapper.** `min-height: 100vh` inside the zoom transform inflates by the zoom factor (1.125 at desktop), adding ~95px of phantom whitespace below the footer. Viewport-fill is handled by `min-height: 100vh` on `body` in `globals.css` instead — that lives outside the zoom and behaves correctly.

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
    ProjectHeader.tsx # Project-page title + number + description + role/year/project meta row
    ProjectSection.tsx # Shared labeled-row layout (label column + content column) used across all project pages AND the contact page
    TwoImageGallery.tsx # Shared two-image side-by-side gallery with mobile + desktop caption handling
    NextProjectLink.tsx # Bottom-of-page prev/next project navigation row, shared across all three project pages
  contact/page.tsx    # Contact page (mailto form)
  projects/
    missivio/page.tsx # Missivio case study page
    doordash/page.tsx # DoorDash case study page
    brazily/page.tsx  # Brazily case study page
public/
  homepage/           # Homepage card images: missivio.png, doordash.png, brazily.png
  images/             # Project images (see naming convention below) + icons
  images/missivio/    # Missivio case study images (missivio-1.png … missivio-6.png)
  images/doordash/    # DoorDash case study images (doordash-1.png … doordash-7.png)
  images/brazily/     # Brazily case study images (brazily-1.png … brazily-5.gif)
```

## Image Naming Convention
**Homepage cards** (`public/homepage/`): one PNG per project — `missivio.png`, `doordash.png`, `brazily.png`. Both grid and list views reference the same file. Background color `#E7E7E7` is set on the card image wrapper; override per-card via `imageWrapperClassName` prop on `ProjectCard`.

**Case study page images** (`public/images/{project}/`): numbered in page-appearance order — `missivio-1.png` … `missivio-6.png`, `doordash-1.png` … `doordash-7.png`, `brazily-1.png` … `brazily-5.gif`. Add new images by incrementing the counter.

**Hidden projects** (Brightwave, StopBugging, Roberta) still use the legacy naming in `public/images/`:
- `{name}.jpg` — grid view (row 2)
- `{name}-v2.jpg` — grid view (row 1)
- `{name}-list.jpg` — list view

**Note:** `*.png` is in `.gitignore` with a `!public/**/*.png` exception so project images are tracked. Do not remove that exception.

## Component Conventions
- Function components with default exports
- Props via TypeScript interfaces, destructured with defaults
- Tailwind utility classes directly (no cn/clsx)
- Use `next/link` `<Link>` for internal navigation, `<a>` only for external/anchor links
- Use `next/image` `<Image>` with `fill` + `sizes` prop for responsive images

### ProjectCard (`app/components/ProjectCard.tsx`)
Figma source: node `628:20` (tablet) and `479:506` (desktop) in file `yYH6EOPoV2U1jaA4RwhciM`.
- Card: `flex flex-col h-[277px] md:h-[246px] gap-2 pb-[19px]` — `h-[277px]` on mobile (Figma 390px frame), `h-[246px]` on tablet+. NO `justify-end` (image fills from top)
- Image container: `flex-1 min-h-0 relative w-full overflow-hidden bg-[#E7E7E7]` — flexible height, not fixed. Background `#E7E7E7` is the default; pass `imageWrapperClassName` prop to override per-card (e.g. a different bg color). When card has `href`, the `<Link>` gets these same classes directly (no extra wrapper div).
- Image: `object-contain` (NOT `object-cover`) with `sizes="(max-width: 768px) 100vw, 33vw"` — mockups are 1920×1440 (4:3) and the card's image area becomes wide-and-short at 3-column desktop (≈410×190 → 2.16:1), so `object-cover` crops the mockup frame heavily. `object-contain` fits the full mockup and leaves neutral bleed top/bottom against the `#E7E7E7` background. If the desktop grid ever reverts to the original 4-column layout (≈280×190 → 1.47:1), the cropping with `object-cover` is minor — revisit only then.
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
- List view: horizontal rows with number, title, description, tags, image — list numbers are auto-generated from visible-index (01, 02, …), do not hand-number
- Toggle between views with fade animation (`animate-fade-in` class)
- About section and footer shared between both views
- **Project visibility (`hidden: true` flag):** `app/page.tsx` keeps all six projects in `allGridProjects` and `allListProjects`; the three without built case study pages (Brightwave, StopBugging, Roberta) have `hidden: true`. `visibleGridProjects = allGridProjects.filter(p => !p.hidden)` drives all three grid-view layouts and the list view. Flip a flag off to re-enable a project — do not delete entries.
- **Grid row split scales with visible count.** Current code uses 3-column desktop (`desktopGrid.row1 = slice(0,3)`, `row2 = slice(3,6)`) and 3-column tablet, with spacers computed as `Math.max(0, 3 - row.length)` to keep columns equally sized. **When four or more projects are visible, restore the original 4+2 desktop design** per the Figma spec (nodes 479:506 row 1 and 479:539 row 2): change the slices to `slice(0,4)` / `slice(4,6)` and the spacer `length` expressions from `3 - row.length` to `4 - row.length`. The 4-column desktop is the intended design; 3-column is a temporary reduction for the current 3-visible-project state.

**Mobile (< 768px):**
- Navbar: name (left), view toggle icon (center), MENU text button (right) — MENU opens MobileDrawer. Gap between navbar rows: `gap-[40px]`. Description paragraph visible on mobile (no `hidden md:flex`).
- Grid view: horizontal snap-scroll carousel (`snap-x snap-mandatory`, `hide-scrollbar`) over `visibleGridProjects` (currently 3 cards; 6 when all are un-hidden), card width `w-[calc(100vw-52px)]` (338px on 390px frame). No dot indicators.
- List view: stacked per item with `gap-[20px]` between items (`md:gap-0`). Within each item, CSS `order` stacks: title (order-1) → desc+tags (order-2) → image (order-3)
- Sections hidden via `md:hidden`

**Tablet (768px – 1221px):**
- Navbar: name block `w-[295px]`, `gap-[12px]` between name and toggle (same gap as desktop — do NOT use `desk:gap-[171px]`), CONTACT/ABOUT links right. Description row: visible on all breakpoints (no `hidden md:flex`); outer wrapper `md:pl-[412px]`, inner `<p>` has `w-[308px]` (fixed width matching Figma 834px frame — do NOT use `pr-[200px]` on the outer wrapper at tablet).
- Grid view: `tabletGrid.row1 = visibleGridProjects.slice(0,3)`, `tabletGrid.row2 = slice(3,6)`, each row `hidden md:flex desk:hidden`. Cards use `flex-1 min-w-0`. Row 2 only renders when non-empty (currently empty with 3 visible; becomes StopBugging/Roberta/Brazily when all six are un-hidden, matching the original Missivio/DoorDash/Brightwave + StopBugging/Roberta/Brazily split).
- About section: ABOUT label column `w-[396px]`
- List view: 3 equal `flex-1` columns per row — title+number | description+tags stacked (`gap-[12px]`, desc `pb-[20px]` = 32px visual gap) | image

**Desktop (1222px+):**
- Navbar: name block `w-[295px]` (same as tablet — do NOT use `desk:w-auto`), `gap-[12px]` between name and toggle (Figma node 477:88). Description row: `desk:pl-[635px] desk:pr-[200px]`, text uses `desk:flex-1 desk:w-auto` (not fixed `w-[308px]`).
- Grid view (Figma node 479:506 row 1, 479:539 row 2): **current state — 3 columns.** `desktopGrid.row1 = slice(0,3)`, `row2 = slice(3,6)`, each row `hidden desk:flex flex-row items-end gap-[12px] px-[12px] pb-[69px]`. Cards use `flex-1 min-w-0`. Spacers `Math.max(0, 3 - row.length)` fill any empty slots so columns stay equal-width; row 2 only renders when non-empty (currently skipped with 3 visible). **Original (and intended) design is 4+2** — row 1 = 4 cards, row 2 = 2 cards + 2 spacers, matching the Figma nodes above. Restore by changing both slice bounds to 4/6 and both spacer `length` computations from `3 - row.length` to `4 - row.length` once four or more projects are un-hidden.
- List view: 4 columns — title (`w-[306px]`) | description (`w-[305px]`) | tags (`w-[306px]`) | image (`flex-1`)
- About section: ABOUT label column `w-[619px]`

### Project Pages
- Uses shared `ProjectNavbar` component — BACK link + CONTACT/ABOUT
- **Use the shared components — do NOT inline these patterns:**
  - `<ProjectHeader>` (`components/ProjectHeader.tsx`) — title + number + description + role/year/project meta row. Renders the canonical project-page header section.
  - `<ProjectSection label="..." className="...">` (`components/ProjectSection.tsx`) — the labeled-row layout (label column `md:w-[305px]` + content column `md:w-[622px]`). Default outer is `<section>` with `px-[12px]`; pass `as="div"` for nested rows that don't need a `<section>` wrapper or horizontal padding (e.g. Missivio's USABILITY TESTING nested inside the iteration section, or DoorDash's FIRST ITERATION / USABILITY blocks). Pass `label=""` (omit) for label-less rows like the contact page or Brazily's BLOCK 2 spacer column. `labelClassName` overrides label typography (Brazily LEARNINGS uses `font-normal`). `contentClassName` adds classes to the content column (e.g. `gap-12` for vertically-spaced sub-blocks like FINAL DESIGN, `gap-[56px]` for DoorDash RESEARCH). The component **always** renders content in a `flex flex-col` div — when section content needs `<br>`-based prose flow, wrap it in an inner `<div>` so `<br>` works as expected (the flex parent treats children as flex items).
  - `<TwoImageGallery>` (`components/TwoImageGallery.tsx`) — two-image side-by-side gallery with mobile-stacked + desktop-row caption rendering. Pass `className` for section spacing (e.g. `mt-[40px]` or `pt-[48px] md:pt-[91px]`), `aspectClass` to override the default `aspect-[483/343]` (e.g. `aspect-[16/9]` for the DoorDash 1920×1080 final pair), and `rightCaptionDesktopWidth` to override the default `desk:w-[305px]` (e.g. `desk:w-[390px]` for the longer DoorDash research caption).
- Single full-width images (Missivio hero, gallery-full, iteration; DoorDash images 1/4/5; Brazily hero & gif blocks) are kept inline because each has unique container/treatment. Don't generalize these into a component until two of them share the *exact* same shape.
- **`NextProjectLink`** accepts optional `prev?: { href, title }` and `next?: { href, title }` props. Renders a `flex justify-between pt-[60px]` row — prev link (← PREVIOUS PROJECT: TITLE) on the left, next link (NEXT PROJECT: TITLE →) on the right. Omit either prop to leave that side empty. Current order: Missivio → DoorDash → Brazily → Missivio (circular).
- Image galleries: full-width (`h-[300px] md:h-[622px]`) — set inline on the wrapper. Side-by-side use `md:flex-1` + `aspect-[W/H]` matching the source image's natural ratio (handled inside `TwoImageGallery`). Side-by-side images use `md:flex-1` (not fixed width) so they fill the container at all breakpoints, and use `aspect-[W/H]` (not fixed height) so they never crop — pick the ratio from the source file: Missivio gallery pairs and DoorDash research pair (4096×2914 source) → `aspect-[483/343]` (default); DoorDash final pair (1920×1080 source) → `aspect-[16/9]`
- Captions: italic 12px, `pl-0 md:pl-[317px]`, always `mt-4` (16px) below their image
- **Single-image captions:** `<p className="italic text-[12px] leading-[1.2] text-black/75 desk:w-[622px]">` — do NOT use `md:w-[622px]`. At 834px tablet the content area after `pl-[317px]` is only 493px; a fixed 622px overflows and clips the right end of the text. Use `desk:w-[622px]` to cap width only at desktop.
- **Two-image gallery captions row** (handled by `TwoImageGallery`, but if reproducing inline): `<div className="hidden md:flex desk:pl-[317px] mt-4 flex-row justify-between">` with each `<p className="italic text-[12px] flex-1 desk:flex-none desk:w-[305px] leading-[1.2] text-black/75">` — `pl-[317px]` only at `desk:`, `flex-1` at tablet so each caption fills half the row width; `desk:flex-none desk:w-[305px]` restores fixed column widths at desktop.
- All body text: `font-normal text-[13px] leading-[1.4] text-black/75` — use `leading-[1.4]` consistently, never `leading-[1.2]`
- Section headings: `font-bold text-[14px] leading-[13.82px] text-black/75` (Missivio/DoorDash); Brazily uses `text-[15px]`
- Spacer between heading and body: `<div className="h-[13.715px]" />` — exact value, not 14px (`13.715 = 13 × 1.055` matches the line-height strut for the heading; rounding to 14 visibly drifts spacing across stacked sections)
- Reuses shared Footer component
- **Section label column rendering** (now centralized in `ProjectSection`): label DOM is `<div className="w-full md:w-[305px] flex flex-col pb-[20px] md:pb-0"><span className="font-medium text-[12px] leading-[13.82px] text-black/40">{label}</span></div>`. The `pb-[20px] md:pb-0` creates the correct 32px visual gap between label text and heading on mobile (12px gap from outer flex + 20px padding = 32px). The `flex flex-col` wrapping is required — without it, the `<span>` is inline in a block container and the inherited body line-height strut pushes the label text down.

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
- Hero image: `h-[300px] md:h-[622px]` full-width, `object-contain` + `bg-[#F6F6F6]`; asset `missivio-1.png` (also reused as `gallery-right-2`)
- Iteration image: `h-[300px] md:h-[622px]` full-width; asset `missivio-5.png`
- Image order: missivio-1 (hero) → missivio-2 (gallery-full) → missivio-3/4 (TwoImageGallery 1) → missivio-5 (iteration) → missivio-6/missivio-1 (TwoImageGallery 2)
- Sections: The Problem (`pt-[48px] md:pt-[91px]`), image gallery (`pt-[48px] md:pt-[91px]`), two-image gallery (`mt-[40px]`), Research (`pt-[32px] md:pt-[56px]`), Constraints (`pt-[48px] md:pt-[91px]`), Iteration image (`pt-[48px] md:pt-[91px]`), Usability Testing div (`pt-[32px] md:pt-[56px] pb-[48px] md:pb-[91px]`), Final Design (`pt-[12px]`), Final image gallery (`mt-[48px] md:mt-[86px]`), Learnings (`pt-[48px] md:pt-[91px] pb-[48px] md:pb-[91px]`)
- Final Design content uses `flex flex-col gap-12` between subsections
- Usability Testing Round 2 uses `flex flex-col gap-12` for its two paragraphs

### DoorDash (`app/projects/doordash/page.tsx`)
- Hero image (doordash-1.png): `h-[300px] md:h-[622px]`, `object-contain` + `bg-[#F3F3F3]`
- Image 4 (doordash-4.png): `h-[300px] md:h-[622px]`, `object-contain` + `bg-[#F4F4F4]`
- Image 5 (doordash-5.png): `h-[300px] md:h-[622px]`, `object-contain scale-[1.4]` + `overflow-hidden` on wrapper (zoomed to fill container)
- Image order: doordash-1 (hero) → doordash-2/3 (TwoImageGallery research) → doordash-4 (mid-fi progression) → doordash-5 (usability testing) → doordash-6/7 (TwoImageGallery final screens)
- Sections: The Problem (`pt-[48px] md:pt-[91px]`), Research image gallery (`pt-[48px] md:pt-[91px]`), Research (`pt-[32px] md:pt-[56px]`), User Personas (`py-[48px] md:py-[91px]`), First Iteration+Usability Testing (gaps controlled individually), Final Screens gallery (`mt-[48px] md:mt-[91px]`), Learnings (`pt-[48px] md:pt-[91px] pb-[48px] md:pb-[91px]`)
- Research subsections: `gap-[56px]` (not 91px)
- Right research caption: `w-full md:w-[390px]` (wider than standard w-[305px])
- First Iteration + Usability Testing share one `<section className="px-[12px]">` with `flex flex-col` (no gap); Block B has `mt-[32px] md:mt-[56px]`, Block C has `mt-[48px] md:mt-[91px]`
- Usability Testing content div: `pt-[32px] md:pt-[56px]`

### Brazily (`app/projects/brazily/page.tsx`)
- Hero image (brazily-1.png): `w-full md:w-[832px] h-[300px] md:h-[622px]` centered (`flex justify-center` wrapper), `object-contain` on `bg-[#f3f3f3]`
- Image order: brazily-1 (hero) → brazily-2/3 (setting-up stacked pair) → brazily-4.gif (research) → brazily-5.gif (design-decision)
- Sections: The Problem (`pt-[48px] md:pt-[91px]`), Setting Up Claude (`pt-[48px] md:pt-[64px]`), Research (`py-[48px] md:py-[91px]`), Content with images (`pb-[48px] md:pb-[91px]`), Learnings (`pt-[40px] pb-[48px] md:pb-[91px]`)
- Section subheadings use `font-bold text-[15px] leading-[13.82px] text-black/75` (Brazily uses 15px, not the standard 14px)
- Setting Up Claude right column uses `flex flex-col gap-[48px] md:gap-[91px]` between the text block and the media block
- Text block uses `flex flex-col gap-[24px]`; heading group uses `flex flex-col` with `h-[13.715px]` spacer
- Skill cards: `w-full md:w-[304px] bg-[#f0f0f0] border border-[#ececec] rounded-[16px] p-[20px] flex flex-col gap-[20px]` (two per row at 622px container with 14px gap)
- Skill card badges: `bg-white border border-[#ee6363] rounded-[4px] px-[4px] py-[1px] font-mono text-[13px] leading-[1.4] text-[#cc4949]`
- Skill card body text: `leading-[1.6]` (not the standard 1.4)
- Callout box: `border-t border-[#c8c8c8] pt-[20px] pb-[12px] flex flex-col gap-[8px]` with `#656565` text (inherits 622px width from parent content column)
- GitHub CTA: `inline-flex items-center gap-[6px] border-b border-black/75` — uses `border-b` (not `underline`) so the line runs continuously under the inline GitHub SVG logo
- Media block (two stacked images): `w-full md:w-[463px] flex flex-col gap-[8px]` (NO `overflow-hidden` — it clips the mobile bleed), each image `h-[260px] md:h-[420px] object-cover` with bleed classes `w-[calc(100%+24px)] -ml-[12px] md:w-full md:ml-0`; assets `brazily-2.png` and `brazily-3.png`; wrapped in `flex justify-center items-center` to center within the right column
- Content section uses `flex flex-col gap-[64px]` with **2 blocks**, each grouping: full-width `h-[300px] md:h-[622px]` image + caption (`pl-0 md:pl-[317px] desk:w-[622px]`) + text section at `pt-[40px]`
  - Block 1: `brazily-4.gif` (`object-contain`) → caption → DESIGN DECISION label+content
  - Block 2: `brazily-5.gif` (`object-contain`) → caption → "Other places AI shaped the work" + "What AI did and didn't do" (grouped with `gap-[48px]`, empty `w-[305px]` spacer column)
- Animated GIFs rendered with `<img>` (not `<Image>`) to preserve animation
- "Other places AI shaped the work" list item headings: `font-bold text-[13px] leading-[1.4]`; body text `text-[13px]`. The `<ul>` itself has `text-[13px]` so the bullet glyphs render at 13px (matching DoorDash/Missivio); without it the discs inherit the 16px body default and look oversized next to the surrounding 13px text.
- "What AI did and didn't do" `<ul>` elements have `mt-[18.2px]` (= 13px × 1.4 line-height) below their headings
- All `<ul>` elements across project pages use `list-disc ml-4` (16px indent) — do NOT use `ml-[19.5px]` or other custom indents
- Do NOT set a fixed `md:w-[622px]` on a `<ul>` that already has `ml-4` (or any margin) — the margin + width together overflow the 622px content column. Let the `<ul>` size auto inside the content column instead.
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
- Rendered ONCE in `app/layout.tsx` (after `{children}`) — do NOT import or render `<Footer />` from individual pages. Pages just return their content; layout handles the footer.
- Layout: `mt-auto flex flex-row items-end justify-between gap-3 px-[12px] pt-[48px] pb-6` — clock pinned to the left edge, copyright pinned to the right edge via `justify-between`. Do NOT reintroduce fixed widths (`md:w-[615px]` / `md:w-[630px]`); they overflow at md (768–1221) viewports and leave the copyright text floating at an odd position.
- `mt-auto` (combined with `body { display: flex; flex-direction: column; min-height: 100vh }` in `globals.css` and `flex-1 flex flex-col` on the layout's `max-w-[1440px]` wrapper) pushes the footer to the bottom of the viewport when page content is shorter than the viewport. When content overflows the viewport, the footer naturally sits at the end of content and `mt-auto` is a no-op.
- `pb-6` (24px) intentionally mirrors the navbars' `pt-6` / `pt-[24px]` so the visual gap from the page top to the navbar text equals the gap from the page bottom to the footer text at all viewport sizes.
- **CRITICAL — `w-full` on the layout wrapper:** the `max-w-[1440px]` wrapper has `containerType: inline-size` to drive the `@container` queries that power `fluid-page` zoom. When `body` becomes a flex container (which is required for `mt-auto` to push the footer to the viewport bottom), `containerType: inline-size` collapses the wrapper to width 0 because inline-size becomes self-determined. Adding `w-full` forces the wrapper back to full width so the container queries fire correctly. Do not remove `w-full` from that wrapper.
- The footer is rendered OUTSIDE the `fluid-page` zoom wrapper (it lives directly in the layout's `max-w` div, as a sibling of `{children}`). This means footer text is NOT zoomed at 1280–1440 viewports, while the rest of the page is. Visually the difference is minor (12px font vs 12 × 1.125 = 13.5px) and is the necessary trade-off for getting the footer to viewport bottom — pushing the zoomed wrapper to fill the viewport vertically would inflate its visible height by 12.5% and overflow.

### layout.tsx
- `<body>` has `suppressHydrationWarning` to silence browser-extension attribute mismatches (Grammarly, 1Password, etc. inject attributes at runtime that don't exist in server-rendered HTML)

## Figma Source
- File key: `yYH6EOPoV2U1jaA4RwhciM`
- Design uses Inter font throughout with specific pixel values for spacing
- All copy must match Figma exactly — do not paraphrase or fabricate text
