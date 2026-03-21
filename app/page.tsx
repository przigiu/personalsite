"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectListItem from "@/app/components/ProjectListItem";
import Footer from "@/app/components/Footer";

const gridProjects = {
  row1: [
    { imageSrc: "/images/missivio-v2.jpg", imageAlt: "Missivio project preview", title: "MISSIVIO", caption: "Product Design, Web App MVP", imageHeight: "h-[208px]", href: "/projects/missivio" },
    { imageSrc: "/images/doordash-v2.jpg", imageAlt: "DoorDash project preview", title: "DOORDASH", caption: "Feature Design, Mobile App", imageHeight: "h-[208px]" },
    { imageSrc: "/images/brightwave-v2.jpg", imageAlt: "Brightwave project preview", title: "BRIGHTWAVE", caption: "Brand & Web Design, Startup", imageHeight: "h-[208px]" },
    { imageSrc: "/images/stopbugging-v2.jpg", imageAlt: "StopBugging project preview", title: "STOPBUGGING", caption: "Web design, B2C", imageHeight: "h-[208px]" },
  ],
  row2: [
    { imageSrc: "/images/roberta.jpg", imageAlt: "Roberta project preview", title: "ROBERTA", caption: "Brand & Web Design, Portfolio", imageHeight: "h-[208px]" },
    { imageSrc: "/images/brazily.jpg", imageAlt: "Brazily project preview", title: "BRAZILY", caption: "Product Design, iOS App", imageHeight: "h-[208px]" },
  ],
};

const listProjects = [
  {
    title: "MISSIVIO",
    number: "01",
    description: "AI-first email marketing for non-marketing founders",
    tags: "Product Design, Web App MVP",
    imageSrc: "/images/missivio-list.jpg",
    imageAlt: "Missivio project preview",
    href: "/projects/missivio",
  },
  {
    title: "DOORDASH",
    number: "02",
    description: "A feature that solves app-drop rate and helps with discovery",
    tags: "Feature Design, Mobile App",
    imageSrc: "/images/doordash-list.jpg",
    imageAlt: "DoorDash project preview",
  },
  {
    title: "BRIGHTWAVE",
    number: "03",
    description: "Web design for a NYC based modeling agency",
    tags: "Brand & Web Design, Startup",
    imageSrc: "/images/brightwave-list.jpg",
    imageAlt: "Brightwave project preview",
  },
  {
    title: "STOPBUGGING",
    number: "04",
    description: "Web design for a local business",
    tags: "Web design, B2C",
    imageSrc: "/images/stopbugging-list.jpg",
    imageAlt: "StopBugging project preview",
  },
  {
    title: "ROBERTA",
    number: "05",
    description: "Web design for a local business",
    tags: "Brand & Web Design, Portfolio",
    imageSrc: "/images/roberta-list.jpg",
    imageAlt: "Roberta project preview",
  },
  {
    title: "BRAZILY",
    number: "06",
    description: "Native iOS mobile app for discoverability and retention",
    tags: "Product Design, iOS App",
    imageSrc: "/images/brazily-list.jpg",
    imageAlt: "Brazily project preview",
  },
];

export default function Home() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const toggleView = () => {
    setViewMode((prev) => (prev === "grid" ? "list" : "grid"));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f9]">
      <Navbar viewMode={viewMode} onToggleView={toggleView} />

      <main>
        <div
          key={viewMode}
          className="animate-fade-in"
        >
          {viewMode === "grid" ? (
            <>
              {/* Project Grid Row 1 */}
              <section aria-label="Featured projects" className="flex flex-col sm:flex-row gap-3 px-[12px] pb-[69px]">
                {gridProjects.row1.map((p) => (
                  <ProjectCard key={p.title} {...p} className="w-[300px] shrink-0" />
                ))}
              </section>

              {/* Project Grid Row 2 */}
              <section aria-label="Additional projects" className="flex flex-col sm:flex-row gap-3 px-[12px] pb-[69px]">
                {gridProjects.row2.map((p) => (
                  <ProjectCard key={p.title} {...p} className="w-[300px] shrink-0" />
                ))}
              </section>
            </>
          ) : (
            /* Project List View */
            <section aria-label="Projects list" className="pb-[69px]">
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
        <section aria-labelledby="about-heading" className="px-[12px] py-3 pb-[115px]">
          <hr className="border-0 h-px bg-black/15 w-full mb-[6px]" />
          <div className="flex flex-col sm:flex-row gap-4 pt-[6px]">
            <p className="font-medium text-[13px] text-black/75 leading-[13.82px] sm:w-[619px] shrink-0">ABOUT</p>
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

      <Footer />
    </div>
  );
}
