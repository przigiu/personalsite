import Link from "next/link";

interface NextProjectLinkProps {
  href: string;
  title: string;
}

export default function NextProjectLink({ href, title }: NextProjectLinkProps) {
  return (
    <div className="px-[12px] w-full text-right">
      <Link href={href} className="font-normal text-[14px] leading-[14px] text-black/75">
        NEXT PROJECT: {title} →
      </Link>
    </div>
  );
}
