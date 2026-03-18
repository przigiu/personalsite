import Image from "next/image";

interface NavbarProps {
  viewMode?: "grid" | "list";
  onToggleView?: () => void;
}

export default function Navbar({ viewMode = "grid", onToggleView }: NavbarProps) {
  const isGrid = viewMode === "grid";

  return (
    <header className="flex flex-col gap-3 pt-6 pb-[91px] px-[22px] bg-[#f9f9f9]">
      {/* Row 1 */}
      <div className="flex flex-row w-full items-start gap-4">
        {/* Left group */}
        <div className="flex flex-row items-start gap-[171px]">
          {/* Name block */}
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-[16px] text-black/75 leading-[14px]">Giulia</span>
            <span className="font-medium text-[14px] text-black/75 leading-[14px]">Product & UX Designer</span>
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
          <a href="#contact" className="font-normal text-[14px] leading-[14px] text-black/75 uppercase">CONTACT</a>
          <a href="/about" className="font-normal text-[14px] leading-[14px] text-black/75 uppercase">ABOUT</a>
        </nav>
      </div>
      {/* Row 2 description */}
      <div className="hidden sm:block sm:pl-[635px] sm:pr-[200px] text-[14px] text-black/75 leading-[1.2]">
        <span className="font-medium">UX & Product Designer</span>
        <span className="font-normal"> bridging brand strategy and user experience — background in marketing across D2C and B2B brands.</span>
      </div>
    </header>
  );
}
