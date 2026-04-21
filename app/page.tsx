"use client";

import { useState, useRef } from "react";
import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectListItem from "@/app/components/ProjectListItem";

const allGridProjects = [
  { imageSrc: "/images/missivio-v2.jpg", imageAlt: "Missivio project preview", title: "MISSIVIO", caption: "Product Design, Web App MVP", href: "/projects/missivio" },
  { imageSrc: "/images/doordash-v2.jpg", imageAlt: "DoorDash project preview", title: "DOORDASH", caption: "Feature Design, Mobile App", href: "/projects/doordash" },
  { imageSrc: "/images/brightwave-v2.jpg", imageAlt: "Brightwave project preview", title: "BRIGHTWAVE", caption: "Brand & Web Design, Startup", hidden: true },
  { imageSrc: "/images/stopbugging-v2.jpg", imageAlt: "StopBugging project preview", title: "STOPBUGGING", caption: "Web design, B2C", hidden: true },
  { imageSrc: "/images/roberta.jpg", imageAlt: "Roberta project preview", title: "ROBERTA", caption: "Brand & Web Design, Portfolio", hidden: true },
  { imageSrc: "/images/brazily.jpg", imageAlt: "Brazily project preview", title: "BRAZILY", caption: "Product Design, iOS App", href: "/projects/brazily" },
];

const visibleGridProjects = allGridProjects.filter((p) => !p.hidden);

const desktopGrid = {
  row1: visibleGridProjects.slice(0, 3),
  row2: visibleGridProjects.slice(3, 6),
};

const tabletGrid = {
  row1: visibleGridProjects.slice(0, 3),
  row2: visibleGridProjects.slice(3, 6),
};

const allListProjects = [
  {
    title: "MISSIVIO",
    description: "AI-first email marketing for non-marketing founders",
    tags: "Product Design, Web App MVP",
    imageSrc: "/images/missivio-list.jpg",
    imageAlt: "Missivio project preview",
    href: "/projects/missivio",
  },
  {
    title: "DOORDASH",
    description: "A feature that solves app-drop rate and helps with discovery",
    tags: "Feature Design, Mobile App",
    imageSrc: "/images/doordash-list.jpg",
    imageAlt: "DoorDash project preview",
    href: "/projects/doordash",
  },
  {
    title: "BRIGHTWAVE",
    description: "Web design for a NYC based modeling agency",
    tags: "Brand & Web Design, Startup",
    imageSrc: "/images/brightwave-list.jpg",
    imageAlt: "Brightwave project preview",
    hidden: true,
  },
  {
    title: "STOPBUGGING",
    description: "Web design for a local business",
    tags: "Web design, B2C",
    imageSrc: "/images/stopbugging-list.jpg",
    imageAlt: "StopBugging project preview",
    hidden: true,
  },
  {
    title: "ROBERTA",
    description: "Web design for a local business",
    tags: "Brand & Web Design, Portfolio",
    imageSrc: "/images/roberta-list.jpg",
    imageAlt: "Roberta project preview",
    hidden: true,
  },
  {
    title: "BRAZILY",
    description: "Native iOS mobile app for discoverability and retention",
    tags: "Product Design, iOS App",
    imageSrc: "/images/brazily-list.jpg",
    imageAlt: "Brazily project preview",
    href: "/projects/brazily",
  },
];

const listProjects = allListProjects
  .filter((p) => !p.hidden)
  .map((p, i) => ({ ...p, number: String(i + 1).padStart(2, "0") }));

export default function Home() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const carouselRef = useRef<HTMLDivElement>(null);

  const toggleView = () => {
    setViewMode((prev) => (prev === "grid" ? "list" : "grid"));
  };

  return (
    <div className="flex flex-col bg-[#f9f9f9] fluid-page">
      <Navbar viewMode={viewMode} onToggleView={toggleView} />

      <main>
        <div
          key={viewMode}
          className="animate-fade-in"
        >
          {viewMode === "grid" ? (
            <>
              {/* Mobile carousel */}
              <section aria-label="Projects" className="md:hidden pb-[69px]">
                <div
                  ref={carouselRef}
                  className="flex overflow-x-auto snap-x snap-mandatory gap-3 px-[12px] hide-scrollbar"
                  style={{ scrollPaddingLeft: 12, WebkitOverflowScrolling: "touch" }}
                >
                  {visibleGridProjects.map((p) => (
                    <ProjectCard
                      key={p.title}
                      {...p}
                      className="w-[calc(100vw-52px)] snap-start shrink-0"
                    />
                  ))}
                </div>
              </section>

              {/* Tablet grid rows (md only: up to 3+3) */}
              <section aria-label="Featured projects" className="hidden md:flex desk:hidden flex-row gap-3 px-[12px] pb-[69px]">
                {tabletGrid.row1.map((p) => (
                  <ProjectCard key={p.title} {...p} className="flex-1 min-w-0" />
                ))}
              </section>
              {tabletGrid.row2.length > 0 && (
                <section aria-label="Additional projects" className="hidden md:flex desk:hidden flex-row gap-3 px-[12px] pb-[69px]">
                  {tabletGrid.row2.map((p) => (
                    <ProjectCard key={p.title} {...p} className="flex-1 min-w-0" />
                  ))}
                </section>
              )}

              {/* Desktop grid rows (desk+: up to 3+3) */}
              <section aria-label="Featured projects" className="hidden desk:flex flex-row items-end gap-[12px] px-[12px] pb-[69px]">
                {desktopGrid.row1.map((p) => (
                  <ProjectCard key={p.title} {...p} className="flex-1 min-w-0" />
                ))}
                {Array.from({ length: Math.max(0, 3 - desktopGrid.row1.length) }).map((_, i) => (
                  <div key={`row1-spacer-${i}`} className="flex-1 min-w-0" />
                ))}
              </section>
              {desktopGrid.row2.length > 0 && (
                <section aria-label="Additional projects" className="hidden desk:flex flex-row items-end gap-[12px] px-[12px] pb-[69px]">
                  {desktopGrid.row2.map((p) => (
                    <ProjectCard key={p.title} {...p} className="flex-1 min-w-0" />
                  ))}
                  {Array.from({ length: Math.max(0, 3 - desktopGrid.row2.length) }).map((_, i) => (
                    <div key={`row2-spacer-${i}`} className="flex-1 min-w-0" />
                  ))}
                </section>
              )}
            </>
          ) : (
            /* Project List View */
            <section aria-label="Projects list" className="flex flex-col gap-[20px] md:gap-0 pb-[69px]">
              {listProjects.map((p) => (
                <ProjectListItem
                  key={p.title}
                  {...p}
                />
              ))}
            </section>
          )}
        </div>

        {/* About Section */}
        <section id="about" aria-labelledby="about-heading" className="px-[12px] py-3 pb-[115px] scroll-mt-[24px]">
          <hr className="border-0 h-px bg-black/15 w-full mb-[6px]" />
          <div className="flex flex-col md:flex-row items-start gap-4">
            <p className="font-medium text-[13px] text-black/75 leading-[13.82px] md:w-[396px] desk:w-[619px] shrink-0">ABOUT</p>
            <div className="flex-1 flex flex-col gap-[13.715px]">
              <h1 id="about-heading" className="font-bold text-[14px] text-black/75 leading-[13.82px]">
                Design that feels intentional.
              </h1>
              <div className="text-[13px] leading-[1.4] text-black/75 space-y-4">
                <p>
                  I&apos;ve always noticed when things are made well. Before I had the vocabulary for it, I was drawn to objects, spaces, and interfaces that just worked. Not because they were flashy, but because someone had thought carefully about every decision.
                </p>
                <p>
                  That instinct led me into marketing, where I spent years working with D2C and B2B brands. Creative direction, campaigns, e-commerce, brand identity. As time went by, I kept finding myself more and more interested in the experience of the product itself rather than the message.
                </p>
                <p>
                  <strong className="font-semibold">Moving into UX felt inevitable</strong>. And the marketing background turned out to be the most useful thing I brought with me. I understand how a product sits inside a business: what it needs to communicate, who it needs to reach, and what&apos;s at stake when it fails. That strategic lens means I&apos;m always balancing user needs with business goals, not treating them as opposites.
                </p>
                <p>
                  My process starts in research because that&apos;s where the real problems live. Structure follows evidence — because <strong className="font-semibold">beauty in function isn&apos;t a luxury, i</strong>t&apos;s what makes people trust a product enough to use it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
