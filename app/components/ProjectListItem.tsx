import Image from "next/image";
import Link from "next/link";

interface ProjectListItemProps {
  title: string;
  number: string;
  description: string;
  tags: string;
  imageSrc: string;
  imageAlt: string;
  overlayColor?: string;
  href?: string;
}

export default function ProjectListItem({
  title,
  number,
  description,
  tags,
  imageSrc,
  imageAlt,
  overlayColor,
  href,
}: ProjectListItemProps) {
  const inner = (
    <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-[12px] pt-[6px]">
      {/* Col 1 — title + number */}
      <div className="order-1 flex flex-col pb-[20px] md:pb-[80px] md:flex-1 md:self-stretch desk:flex-none desk:w-[306px]">
        <p className="font-medium text-[13px] tracking-[1px] text-black/75 uppercase leading-[10.37px]">
          {title}
        </p>
        <p className="font-normal text-[11px] text-black/40 leading-[13.82px]">
          {number}
        </p>
      </div>

      {/* Col 2+3 — order-2 on mobile, stacked on tablet, side-by-side columns on desktop */}
      <div className="order-2 flex flex-col gap-[12px] md:flex-1 md:self-stretch desk:flex-none desk:flex-row">
        {/* Description — col 2 on desktop */}
        <div className="md:shrink-0 md:pb-[20px] desk:w-[305px] desk:self-stretch desk:pb-[80px] desk:shrink-0">
          <p className="font-normal text-[13px] text-black/75 md:w-[182px] leading-[1.2]">
            {description}
          </p>
        </div>
        {/* Tags — col 3 on desktop */}
        <div className="md:flex-1 md:pb-[80px] desk:w-[306px] desk:flex-none desk:self-stretch">
          <p className="font-semibold text-[12px] text-black/75 leading-[13.82px]">Project</p>
          <p className="font-normal text-[12px] text-black/[0.57] leading-[1.2]">{tags}</p>
        </div>
      </div>

      {/* Image — order-3 on mobile, last on tablet/desktop */}
      <div className="order-3 md:order-last md:flex-1 md:self-stretch bg-[#e7e7e7] overflow-hidden flex flex-col">
        <div className="relative h-[199px] w-full shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {overlayColor && <div className={`absolute inset-0 ${overlayColor}`} />}
        </div>
      </div>
    </div>
  );

  return (
    <article className="px-[12px] py-[12px]">
      <hr className="border-0 h-px bg-black/15 w-full" />
      {href ? <Link href={href} className="block">{inner}</Link> : inner}
    </article>
  );
}
