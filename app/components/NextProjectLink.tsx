import Link from "next/link";

interface ProjectLinkProps {
  href: string;
  title: string;
}

interface NextProjectLinkProps {
  prev?: ProjectLinkProps;
  next?: ProjectLinkProps;
}

export default function NextProjectLink({ prev, next }: NextProjectLinkProps) {
  return (
    <div className="px-[12px] w-full flex justify-between pt-[60px]">
      <div>
        {prev && (
          <Link href={prev.href} className="font-normal text-[14px] leading-[14px] text-black/75">
            ← PREVIOUS PROJECT: {prev.title}
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link href={next.href} className="font-normal text-[14px] leading-[14px] text-black/75">
            NEXT PROJECT: {next.title} →
          </Link>
        )}
      </div>
    </div>
  );
}
