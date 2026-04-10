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
  const imageContainer = (
    <div className="relative flex-1 h-[199px] overflow-hidden shrink-0">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 25vw" />
      {overlayColor && <div className={`absolute inset-0 ${overlayColor}`} />}
    </div>
  );

  const inner = (
    <div className="flex flex-row gap-3 items-start pt-[6px]">
      {/* Col 1 — title + number */}
      <div className="w-[306px] flex flex-col shrink-0">
        <p className="font-medium text-[13px] tracking-[1px] text-black/75 uppercase leading-[10.37px]">
          {title}
        </p>
        <p className="font-normal text-[11px] text-black/40 leading-[13.82px]">
          {number}
        </p>
      </div>

      {/* Col 2 — description */}
      <div className="w-[305px] flex flex-col shrink-0">
        <p className="font-normal text-[13px] text-black/75 w-[182px] leading-[1.2]">
          {description}
        </p>
      </div>

      {/* Col 3 — tags */}
      <div className="w-[306px] flex flex-col shrink-0">
        <p className="font-semibold text-[12px] text-black/75 leading-[13.82px]">Project</p>
        <p className="font-normal text-[12px] text-black/[0.57] leading-[1.2]">{tags}</p>
      </div>

      {/* Col 4 — image */}
      {imageContainer}
    </div>
  );

  return (
    <article className="px-[12px] py-[12px]">
      <hr className="border-0 h-px bg-black/15 w-full" />
      {href ? <Link href={href} className="block">{inner}</Link> : inner}
    </article>
  );
}
