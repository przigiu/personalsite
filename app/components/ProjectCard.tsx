import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  caption: string;
  overlayColor?: string;
  imageHeight?: string;
  href?: string;
  className?: string;
}

export default function ProjectCard({
  imageSrc,
  imageAlt,
  title,
  caption,
  overlayColor,
  imageHeight = "h-[199px]",
  href,
  className = "",
}: ProjectCardProps) {
  const imageContainer = (
    <div className={`relative ${imageHeight} w-full overflow-hidden shrink-0`}>
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 25vw" />
      {overlayColor && <div className={`absolute inset-0 ${overlayColor}`} />}
    </div>
  );

  return (
    <article className={`flex flex-col h-[246px] gap-2 justify-end pb-[19px] ${className}`}>
      {href ? <Link href={href}>{imageContainer}</Link> : imageContainer}
      <div className="flex justify-between items-start px-0.5">
        <p className="font-medium text-[14px] tracking-[1px] text-black/75 uppercase leading-[10.37px]">{title}</p>
        <p className="font-normal text-[12px] leading-[1.2] text-black/40 text-right w-[182px] whitespace-pre-line">{caption}</p>
      </div>
    </article>
  );
}
