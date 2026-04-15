"use client";

import { useState } from "react";
import Image from "next/image";
import MobileDrawer from "@/app/components/MobileDrawer";

interface NavbarProps {
  viewMode?: "grid" | "list";
  onToggleView?: () => void;
}

export default function Navbar({ viewMode = "grid", onToggleView }: NavbarProps) {
  const isGrid = viewMode === "grid";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="flex flex-col gap-3 pt-6 pb-[91px] px-[12px] bg-[#f9f9f9]">
      {/* Row 1 — Desktop */}
      <div className="hidden md:flex flex-row w-full items-start gap-4">
        {/* Left group */}
        <div className="flex flex-row items-start gap-[171px]">
          {/* Name block */}
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-[16px] text-black/75 leading-[13.82px]">Giulia</span>
            <span className="font-medium text-[14px] text-black/75 leading-[13.82px]">Product & UX Designer</span>
          </div>
          {/* View toggle button */}
          <button
            onClick={onToggleView}
            aria-label={isGrid ? "Switch to list view" : "Switch to grid view"}
            className={isGrid ? "w-[15px] h-[15px]" : "w-[16px] h-[16px]"}
          >
            {isGrid ? (
              <Image src="/images/hamburger.svg" alt="" width={15} height={15} />
            ) : (
              <Image src="/images/grid-toggle.svg" alt="" width={16} height={16} />
            )}
          </button>
        </div>

        {/* Right nav */}
        <nav className="flex-1 flex flex-row gap-3 justify-end items-center">
          <a href="#contact" className="font-normal text-[13px] leading-[14px] text-black/75 uppercase">CONTACT</a>
          <a href="/about" className="font-normal text-[13px] leading-[14px] text-black/75 uppercase">ABOUT</a>
        </nav>
      </div>

      {/* Row 1 — Mobile */}
      <div className="flex md:hidden flex-row w-full items-center">
        {/* Name block — left */}
        <div className="flex flex-col gap-0.5 flex-1">
          <span className="font-bold text-[16px] text-black/75 leading-[13.82px]">Giulia</span>
          <span className="font-medium text-[14px] text-black/75 leading-[13.82px]">Product & UX Designer</span>
        </div>

        {/* View toggle — center */}
        <div className="flex-1 flex justify-center">
          <button
            onClick={onToggleView}
            aria-label={isGrid ? "Switch to list view" : "Switch to grid view"}
            className="w-[44px] h-[44px] flex items-center justify-center"
          >
            {isGrid ? (
              <Image src="/images/hamburger.svg" alt="" width={15} height={15} />
            ) : (
              <Image src="/images/grid-toggle.svg" alt="" width={16} height={16} />
            )}
          </button>
        </div>

        {/* Menu button — right */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="font-normal text-[13px] leading-[14px] text-black/75 uppercase"
          >
            MENU
          </button>
        </div>
      </div>

      {/* Row 2 description — desktop only */}
      <div className="hidden md:block md:pl-[635px] md:pr-[200px] text-[13px] text-black/75 leading-[1.2]">
        <span className="font-medium">UX & Product Designer</span>
        <span className="font-normal"> bridging brand strategy and user experience — background in marketing across D2C and B2B brands.</span>
      </div>

      {/* Mobile drawer */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </header>
  );
}
