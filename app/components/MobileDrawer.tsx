"use client";

import { useEffect } from "react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  return (
    <div className="md:hidden">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#f9f9f9] z-50 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="absolute top-[24px] right-[24px] w-[44px] h-[44px] flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L14 14M14 2L2 14" stroke="rgba(0,0,0,0.4)" strokeWidth={1.5} strokeLinecap="round" />
          </svg>
        </button>

        {/* Links */}
        <nav className="pt-[120px] px-[24px] flex flex-col gap-[32px]">
          <a href="#contact" className="font-normal text-[14px] leading-[14px] text-black/75 uppercase tracking-[1px]" onClick={onClose}>
            Contact
          </a>
          <div className="h-px bg-black/15" />
          <a href="/about" className="font-normal text-[14px] leading-[14px] text-black/75 uppercase tracking-[1px]" onClick={onClose}>
            About
          </a>
        </nav>
      </div>
    </div>
  );
}
