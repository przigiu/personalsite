import Image from "next/image";
import NextProjectLink from "@/app/components/NextProjectLink";
import ProjectHeader from "@/app/components/ProjectHeader";
import ProjectNavbar from "@/app/components/ProjectNavbar";
import ProjectSection from "@/app/components/ProjectSection";
import TwoImageGallery from "@/app/components/TwoImageGallery";

export default function MissivioPage() {
  return (
    <div className="fluid-page">
      <ProjectNavbar />

      <ProjectHeader
        title="MISSIVIO"
        number="01"
        description="An AI-powered tool helping non-marketing-savvy business owners run email campaigns without needing a dedicated marketing team. Designed research-first, from zero to MVP."
        role="Solo designer"
        year="2026"
        project="MVP, SaaS"
      />

      {/* Hero image */}
      <div className="mt-4 md:px-[12px]">
        <div className="relative w-full h-[300px] md:h-[622px]">
          <Image
            src="/images/missivio/hero.jpg"
            alt="Missivio dashboard UI showing AI-led email campaign builder"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <ProjectSection label="THE PROBLEM" className="pt-[48px] md:pt-[91px]">
        <h2 className="font-bold text-[14px] leading-[13.82px] text-black/75">
          Small business owners shouldn&apos;t require a marketing degree.
        </h2>
        <div className="h-[13.715px]" />
        <div className="font-normal text-[13px] leading-[1.4] text-black/75">
          <p>
            Email marketing tools assume expertise most small business owners don&apos;t have. Without guidance on what to send, who to send it to, or why it matters - people don&apos;t just struggle, they stop.
          </p>
          <br />
          <p>A competitive analysis of six platforms confirmed the pattern across the whole market:</p>
          <br />
          <p>
            Every tool placed the burden of strategy on the user. Templates help with execution, but only if you already know what you&apos;re trying to achieve.
            <br /><br />
            My goal was designing a tool that didn&apos;t require users to already be email marketers. Missivio is born to answer the unheard question:{" "}
            <em>what should I actually be doing?</em>
          </p>
        </div>
      </ProjectSection>

      {/* Full-width gallery image */}
      <section className="px-[12px] pt-[48px] md:pt-[91px]">
        <div className="relative w-[calc(100%+24px)] -ml-[12px] md:w-full md:ml-0 h-[240px] md:h-[460px]">
          <Image
            src="/images/missivio/gallery-full.jpg"
            alt="Missivio gallery full width"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="pl-0 md:pl-[317px] mt-4">
          <p className="italic text-[12px] leading-[1.2] text-black/75 desk:w-[622px]">
            Muted violet palette is distinct from blue/teal competitors, designed to reduce anxiety around marketing decisions.
          </p>
        </div>
      </section>

      <TwoImageGallery
        className="mt-[40px]"
        left={{
          src: "/images/missivio/gallery-left-1.jpg",
          alt: "Qualitative research",
          caption: "Qualitative research was used to identify core need.",
        }}
        right={{
          src: "/images/missivio/gallery-right-1.jpg",
          alt: "User flows",
          caption: "User flows for Onboarding and Campaign Creation.",
        }}
      />

      <ProjectSection label="RESEARCH" className="pt-[32px] md:pt-[56px]">
        <div className="font-normal text-[13px] leading-[1.4] text-black/75">
          <p>
            Five interviews with small business owners surfaced{" "}
            <strong className="font-semibold">one consistent theme: paralysis</strong>. Not feature confusion, but a more fundamental uncertainty about where to start.
          </p>
          <br /><br />
          <ul className="list-disc ml-4">
            <li className="mb-4">
              <strong className="font-semibold">Delegation thinkers:</strong>{" "}
              owners who didn&apos;t want to learn email marketing. They wanted the decisions made for them so they could focus on running their business.
            </li>
            <li>
              <strong className="font-semibold">Confidence-seekers:</strong>{" "}
              operators who wouldn&apos;t follow a tool blindly, but didn&apos;t have time to become experts either. They needed to understand the logic behind each action, not just execute it.
            </li>
          </ul>
          <br /><br />
          <p>
            <strong className="font-semibold">Both needed the same thing: confidence.</strong>{" "}
            Not just the ability to complete a task, but the ability to explain why they&apos;d done it.{" "}
            <strong className="font-semibold">That became my definition of success</strong>{" "}
            throughout.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection label="CONSTRAINTS" className="pt-[48px] md:pt-[91px]">
        <h2 className="font-bold text-[14px] leading-[13.82px] text-black/75">
          The AI proposes, never acts.
        </h2>
        <div className="h-[13.715px]" />
        <div className="font-normal text-[13px] leading-[1.4] text-black/75">
          <p>
            Every output requires explicit user approval before anything goes live. Scope was defined early to keep the experience focused:
          </p>
          <br /><br />
          <ul className="list-disc ml-4">
            <li className="mb-4">
              <strong className="font-semibold">Desktop-first</strong>: research showed that the platform&apos;s primary demographic consistently prefer desktop for important business tasks. Mobile awareness was built in, with full optimization deferred to post-launch.
            </li>
            <li className="mb-4">
              <strong className="font-semibold">Single-user accounts only</strong>: no collaborative editing or approval workflows at launch
            </li>
            <li className="mb-4">
              <strong className="font-semibold">No A/B testing or dynamic email content:</strong> kept the first-use experience focused
            </li>
            <li className="mb-4">
              <strong className="font-semibold">Limited template customization:</strong>{" "}
              a guardrail against overwhelming users before they&apos;d built confidence with the basics
            </li>
            <li>
              <strong className="font-semibold">Token efficiency:</strong>{" "}
              AI interactions were designed to be concise and purposeful, not conversationally deep
            </li>
          </ul>
          <p className="mt-6">
            Every constraint above served one shift:{" "}
            <strong className="font-semibold">the AI speaks first.</strong>{" "}
            A traditional dashboard that asked <em>what would you like to do?</em> was built, tested, and failed immediately. For someone who doesn&apos;t know what they should be doing, that&apos;s paralysis with better UI.
          </p>
        </div>
      </ProjectSection>

      {/* Iteration image + nested Usability Testing */}
      <section className="px-[12px] pt-[48px] md:pt-[91px]">
        <div className="relative w-[calc(100%+24px)] -ml-[12px] md:w-full md:ml-0 h-[300px] md:h-[622px]">
          <Image
            src="/images/missivio/iteration.jpg"
            alt="Iteration of right side panel"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="pl-0 md:pl-[317px] mt-4">
          <p className="italic text-[12px] leading-[1.2] text-black/75 desk:w-[622px]">
            The evolution of the right side panel: from feeling dismissive, being too crowded, to just perfect.
          </p>
        </div>

        <ProjectSection
          as="div"
          label="USABILITY TESTING"
          className="pt-[32px] md:pt-[56px] pb-[48px] md:pb-[91px]"
          contentClassName="gap-12"
        >
          <div className="flex flex-col">
            <h2 className="font-bold text-[14px] leading-[13.82px] text-black/75">Round 1, mid-fidelity</h2>
            <div className="h-[13.715px]" />
            <p className="font-normal text-[13px] leading-[1.4] text-black/75">
              <strong className="font-semibold">Users didn&apos;t trust their own actions.</strong>{" "}
              Right editor panel read as dismissing, and users mistakenly kept publishing a live sequence.{" "}
              <strong className="font-semibold">The AI&apos;s reasoning was invisible. </strong>
              The chat input (the product&apos;s main differentiator) was ignored entirely in favor of familiar card patterns.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col">
              <h2 className="font-bold text-[14px] leading-[13.82px] text-black/75">Round 2, high-fidelity</h2>
              <div className="h-[13.715px]" />
              <p className="font-normal text-[13px] leading-[1.4] text-black/75">
                The structural problems were solved. A new one emerged:{" "}
                <strong className="font-semibold">the AI reasoning panels were too text-dense to read.</strong>{" "}
                The platform&apos;s core value proposition was present but invisible. Users who did engage with it responded strongly: the content was right, the format was wrong.
              </p>
            </div>
            <p className="font-normal text-[13px] leading-[1.4] text-black/75">
              The fix wasn&apos;t more content: it was less, better formatted. Dense reasoning panels were broken into scannable steps:{" "}
              <strong className="font-semibold">recommendation first, rationale second, optional depth third.</strong>{" "}
              The information didn&apos;t change. The cognitive load did.
            </p>
          </div>
        </ProjectSection>
      </section>

      <ProjectSection label="FINAL DESIGN" className="pt-[12px]" contentClassName="gap-12">
        <div className="flex flex-col">
          <h2 className="font-bold text-[14px] leading-[13.82px] text-black/75">Solving for visibility</h2>
          <div className="h-[13.715px]" />
          <p className="font-normal text-[13px] leading-[1.4] text-black/75">
            Round 2 taught me that the right content shown in
            <strong className="font-semibold"> the wrong format is indistinguishable from the wrong content.</strong>{" "}
            Every final iteration was about making the AI&apos;s reasoning accessible.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-[14px] leading-[13.82px] text-black/75">The defining iteration</h2>
          <div className="h-[13.715px]" />
          <div className="font-normal text-[13px] leading-[1.4] text-black/75">
            <p>
              The mid-fidelity dashboard was a traditional overview with AI features inside it. That structure implicitly told users:{" "}
              <em>you&apos;re in charge, what would you like to do?</em>
            </p>
            <br />
            <p>
              For someone who doesn&apos;t know what they should be doing, that&apos;s paralysis with better UI.
            </p>
            <br />
            <p>
              I rebuilt the dashboard around an AI-led conversational handoff.{" "}
              <strong className="font-semibold">The AI speaks first. The user responds. Every screen that follows has context because the AI already established purpose.</strong>
            </p>
            <br />
            <p>
              The measure of success wasn&apos;t task completion. It was whether a user could, unprompted, explain <em>why</em> they&apos;d just done something.{" "}
              <strong className="font-semibold">In post-testing debrief, 5 out of 5 users could.</strong>{" "}
              That was the benchmark set in research. The final design met it.
            </p>
          </div>
        </div>
      </ProjectSection>

      <TwoImageGallery
        className="mt-[48px] md:mt-[86px]"
        left={{
          src: "/images/missivio/gallery-left-2.jpg",
          alt: "Initial concept of onboarding flow, mid-fidelity",
          caption: "Initial concept of onboarding flow, mid-fidelity.",
        }}
        right={{
          src: "/images/missivio/gallery-right-2.jpg",
          alt: "Final dashboard design",
          caption: "Final dashboard design focuses on User/AI interaction",
        }}
      />

      <ProjectSection label="LEARNINGS" className="pt-[48px] md:pt-[91px] pb-[48px] md:pb-[91px]">
        <h2 className="font-bold text-[14px] leading-[13.82px] text-black/75">
          Knowing the problem intimately is just a starting point
        </h2>
        <div className="h-[13.715px]" />
        <div className="font-normal text-[13px] leading-[1.4] text-black/75">
          <p>
            Missivio started as a response to something I watched happen repeatedly in my career: capable people made helpless by tools that assumed too much. But what this project taught me is that{" "}
            <strong className="font-semibold">knowing the problem isn&apos;t enough.</strong>
          </p>
          <br />
          <p>
            Every assumption I brought from my professional experience still had to be tested, challenged, and sometimes discarded.{" "}
            <strong className="font-semibold">The tension between professional instinct and what users actually showed me is what I&apos;ll carry into every project after this.</strong>
          </p>
        </div>
      </ProjectSection>

      <NextProjectLink href="/projects/doordash" title="DOORDASH" />
    </div>
  );
}
