import type { ReactNode } from "react";

interface ProjectSectionProps {
  label?: string;
  className?: string;
  labelClassName?: string;
  contentClassName?: string;
  as?: "section" | "div";
  children: ReactNode;
}

export default function ProjectSection({
  label,
  className = "",
  labelClassName = "",
  contentClassName = "",
  as = "section",
  children,
}: ProjectSectionProps) {
  const Tag = as;
  const outerClass = as === "section" ? `px-[12px] ${className}` : className;
  return (
    <Tag className={outerClass}>
      <div className="flex flex-col gap-[12px] md:flex-row md:gap-3 items-start">
        {label ? (
          <div className="w-full md:w-[305px] flex flex-col pb-[20px] md:pb-0">
            <span
              className={`font-medium text-[12px] leading-[13.82px] text-black/40 ${labelClassName}`}
            >
              {label}
            </span>
          </div>
        ) : (
          <div className="hidden md:block md:w-[305px] shrink-0" />
        )}
        <div className={`w-full md:w-[622px] flex flex-col ${contentClassName}`}>
          {children}
        </div>
      </div>
    </Tag>
  );
}
