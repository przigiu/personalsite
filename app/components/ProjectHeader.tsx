interface ProjectHeaderProps {
  title: string;
  number: string;
  description: string;
  role: string;
  year: string;
  project: string;
}

export default function ProjectHeader({
  title,
  number,
  description,
  role,
  year,
  project,
}: ProjectHeaderProps) {
  return (
    <section className="px-[12px] pt-[6px]">
      <div className="flex flex-col gap-4 md:flex-row items-start">
        <div className="w-full md:w-[302px] flex flex-col">
          <h1 className="font-medium text-[14px] tracking-[1.5px] uppercase leading-[10.37px] text-black/75">
            {title}
          </h1>
          <span className="font-normal text-[11px] leading-[13.82px] text-black/40">
            {number}
          </span>
        </div>
        <div className="w-full md:w-[622px] flex flex-col gap-6 pb-[38px]">
          <p className="w-full md:w-[622px] font-normal text-[13px] leading-[1.4] text-black/75">
            {description}
          </p>
          <div className="flex flex-row gap-6">
            <Meta label="Role" value={role} />
            <Meta label="Year" value={year} />
            <Meta label="Project" value={project} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1 flex flex-col">
      <span className="font-semibold text-[12px] leading-[13.82px] text-black/75">
        {label}
      </span>
      <span className="font-normal text-[12px] leading-[13.82px] text-black/75">
        {value}
      </span>
    </div>
  );
}
