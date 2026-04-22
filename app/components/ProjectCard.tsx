import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  caption: string;
  href?: string;
  className?: string;
  imageWrapperClassName?: string;
  priority?: boolean;
}

export default function ProjectCard({
  imageSrc,
  imageAlt,
  title,
  caption,
  href,
  className = "",
  imageWrapperClassName = "",
  priority = false,
}: ProjectCardProps) {
  const wrapperClass = `flex-1 min-h-0 relative w-full overflow-hidden bg-[#E7E7E7] ${imageWrapperClassName}`;
  const imageContent = (
    <Image src={imageSrc} alt={imageAlt} fill priority={priority} className="object-contain" sizes="(max-width: 768px) 100vw, 33vw" />
  );

  return (
    <article className={`flex flex-col h-[310px] md:h-[360px] gap-2 pb-[19px] ${className}`}>
      {href ? (
        <Link href={href} className={wrapperClass}>{imageContent}</Link>
      ) : (
        <div className={wrapperClass}>{imageContent}</div>
      )}
      <div className="flex justify-between items-start desk:items-center px-0.5 shrink-0 min-h-[29px]">
        <p className="font-medium text-[13px] tracking-[1px] text-black/75 uppercase leading-[10.37px] whitespace-nowrap shrink-0">{title}</p>
        <p className="font-normal text-[12px] leading-[1.2] text-black/[0.57] text-right whitespace-nowrap md:whitespace-normal md:w-[110px] desk:w-[182px] shrink-0">{caption}</p>
      </div>
    </article>
  );
}
