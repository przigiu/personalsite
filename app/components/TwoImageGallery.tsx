import Image from "next/image";

interface ImageConfig {
  src: string;
  alt: string;
  caption: string;
}

interface TwoImageGalleryProps {
  left: ImageConfig;
  right: ImageConfig;
  aspectClass?: string;
  rightCaptionDesktopWidth?: string;
  className?: string;
}

export default function TwoImageGallery({
  left,
  right,
  aspectClass = "aspect-[483/343]",
  rightCaptionDesktopWidth = "desk:w-[305px]",
  className = "",
}: TwoImageGalleryProps) {
  const containerClass = `relative w-[calc(100%+24px)] -ml-[12px] md:w-full md:ml-0 ${aspectClass}`;
  const mobileCaptionClass =
    "md:hidden italic text-[12px] leading-[1.2] text-black/75 mt-4";
  const desktopCaptionBase =
    "italic text-[12px] flex-1 desk:flex-none leading-[1.2] text-black/75";
  return (
    <section className={`px-[12px] ${className}`}>
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="flex flex-col md:flex-1">
          <div className={containerClass}>
            <Image
              src={left.src}
              alt={left.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className={mobileCaptionClass}>{left.caption}</p>
        </div>
        <div className="flex flex-col md:flex-1">
          <div className={containerClass}>
            <Image
              src={right.src}
              alt={right.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className={mobileCaptionClass}>{right.caption}</p>
        </div>
      </div>
      <div className="hidden md:flex desk:pl-[317px] mt-4 flex-row justify-between">
        <p className={`${desktopCaptionBase} desk:w-[305px]`}>{left.caption}</p>
        <p className={`${desktopCaptionBase} ${rightCaptionDesktopWidth}`}>
          {right.caption}
        </p>
      </div>
    </section>
  );
}
