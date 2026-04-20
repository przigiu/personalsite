"use client";

import { useState } from "react";
import Link from "next/link";
import MobileDrawer from "@/app/components/MobileDrawer";

export default function ProjectNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="flex flex-col pt-[24px] pb-[40px] md:pb-[91px] px-[12px] bg-[#f9f9f9]">
      {/* Desktop layout */}
      <div className="hidden md:flex flex-row w-full items-start gap-4">
        <div className="flex flex-row items-start gap-3">
          <div className="w-[306px] flex flex-col gap-0.5">
            <span className="font-bold text-[16px] leading-[13.82px] text-black/75">Giulia</span>
            <span className="font-medium text-[14px] leading-[13.82px] text-black/75">Product & UX Designer</span>
          </div>
          <Link href="/" className="font-normal text-[13px] leading-[14px] text-black/75">
            ← BACK
          </Link>
        </div>
        <nav className="flex-1 flex flex-row gap-3 justify-end items-center">
          <a href="#contact" className="font-normal text-[13px] leading-[14px] text-black/75 uppercase">CONTACT</a>
          <a href="/about" className="font-normal text-[13px] leading-[14px] text-black/75 uppercase">ABOUT</a>
        </nav>
      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden flex-col gap-[40px]">
        <div className="flex flex-row w-full items-start justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-[16px] leading-[13.82px] text-black/75">Giulia</span>
            <span className="font-medium text-[14px] leading-[13.82px] text-black/75">Product & UX Designer</span>
          </div>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="font-normal text-[13px] leading-[14px] text-black/75 uppercase"
          >
            MENU
          </button>
        </div>
        <Link href="/" className="font-normal text-[13px] leading-[14px] text-black/75">
          ← BACK
        </Link>
      </div>

      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </header>
  );
}
