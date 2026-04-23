import ProjectNavbar from "@/app/components/ProjectNavbar";
import ProjectSection from "@/app/components/ProjectSection";

export default function ContactClient() {
  return (
    <div className="fluid-page">
      <ProjectNavbar />

      <h1 className="sr-only">Contact</h1>

      <ProjectSection className="pt-[6px] pb-[48px] md:pb-[91px]">
        <div className="flex flex-col gap-[13.715px]">
          <p className="font-normal text-[13px] leading-[1.4] text-black/75">
            Have a project in mind, a question, or just want to say hello?
          </p>
          <p className="font-normal text-[13px] leading-[1.4] text-black/75">
            Email me at{" "}
            <a href="mailto:hello@giuliaperuzzi.com" className="border-b border-black/75">
              hello@giuliaperuzzi.com
            </a>
            {" "}or hit me up on{" "}
            <a href="https://www.linkedin.com/in/giulia-peruzzi/" target="_blank" rel="noopener noreferrer" className="border-b border-black/75">
              LinkedIn
            </a>
            .
          </p>
        </div>
      </ProjectSection>
    </div>
  );
}
