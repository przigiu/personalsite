import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function MissivioPage() {
  return (
    <div className="min-h-screen">
      {/* ─── 1. PROJECT NAVBAR ─────────────────────────────────────── */}
      <header className="flex flex-col pt-[24px] pb-[91px] px-[22px] bg-[#f9f9f9]">
        <div className="flex flex-row w-full items-start gap-4">
          {/* Left group */}
          <div className="flex flex-row items-start gap-3">
            {/* Name block */}
            <div className="w-[306px] flex flex-col gap-0.5">
              <span className="font-bold text-[16px] leading-[13.82px] text-black/75">Giulia</span>
              <span className="font-medium text-[14px] leading-[13.82px] text-black/75">Product & UX Designer</span>
            </div>
            {/* Back link */}
            <Link
              href="/"
              className="font-normal text-[14px] leading-[14px] text-black/75"
            >
              ← BACK
            </Link>
          </div>
          {/* Right nav */}
          <nav className="flex-1 flex flex-row gap-3 justify-end items-center">
            <a href="#contact" className="font-normal text-[14px] leading-[14px] text-black/75 uppercase">CONTACT</a>
            <a href="/about" className="font-normal text-[14px] leading-[14px] text-black/75 uppercase">ABOUT</a>
          </nav>
        </div>
      </header>

      {/* ─── 2. PROJECT HEADER ─────────────────────────────────────── */}
      <section className="px-[22px] pt-[6px]">
        <div className="flex flex-row gap-4">
          {/* Left column */}
          <div className="w-[302px] pb-[80px] flex flex-col gap-1">
            <h1 className="font-medium text-[14px] tracking-[1.5px] text-black/75 uppercase leading-[10.37px]">
              MISSIVIO
            </h1>
            <span className="font-normal text-[11.5px] text-black/40 leading-[13.82px]">01</span>
          </div>
          {/* Right column */}
          <div className="w-[622px] flex flex-col gap-6">
            {/* Description */}
            <p className="w-[459px] font-normal text-[14px] leading-[1.2] text-black/75">
              An AI-powered tool helping non-marketing-savvy business owners run email campaigns without needing a dedicated marketing team.
              <br />
              Designed research-first, from zero to MVP.
            </p>
            {/* Tags */}
            <div className="flex flex-row gap-6">
              <div className="flex-1 flex flex-col gap-0.5">
                <span className="font-semibold text-[12px] leading-[13.82px] text-black/75">Role</span>
                <span className="font-normal text-[12px] leading-[13.82px] text-black/75">Solo designer</span>
              </div>
              <div className="flex-1 flex flex-col gap-0.5">
                <span className="font-semibold text-[12px] leading-[13.82px] text-black/75">Year</span>
                <span className="font-normal text-[12px] leading-[13.82px] text-black/75">2026</span>
              </div>
              <div className="flex-1 flex flex-col gap-0.5">
                <span className="font-semibold text-[12px] leading-[13.82px] text-black/75">Project</span>
                <span className="font-normal text-[12px] leading-[13.82px] text-black/75">MVP, SaaS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. HERO IMAGE ─────────────────────────────────────────── */}
      <div className="px-[22px]">
        <div className="relative w-full h-[460px]">
          <Image
            src="/images/missivio/hero.jpg"
            alt="Missivio hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ─── 4. THE PROBLEM ────────────────────────────────────────── */}
      <section className="px-[22px] pt-[24px]">
        <div className="flex flex-row gap-3">
          {/* Label */}
          <div className="w-[305px]">
            <span className="font-medium text-[12px] leading-[13.82px] text-black/40">THE PROBLEM</span>
          </div>
          {/* Content */}
          <div className="flex flex-col">
            <h2 className="font-bold text-[16px] leading-[13.82px] text-black/75">
              Small business owners shouldn&apos;t require a marketing degree.
            </h2>
            <div className="h-[13.715px]" />
            <div className="w-[622px] flex flex-col gap-4 font-normal text-[14px] leading-[1.4] text-black/75">
              <p>
                Email marketing tools assume expertise most small business owners don&apos;t have. Without guidance on what to send, who to send it to, or why it matters - people don&apos;t just struggle, they stop.
              </p>
              <p>
                A competitive analysis of six platforms confirmed the pattern across the whole market:
              </p>
              <p>
                Every tool placed the burden of strategy on the user. Templates help with execution, but only if you already know what you&apos;re trying to achieve.
                <br /><br />
                My goal was designing a tool that didn&apos;t require users to already be email marketers. Missivio is born to answer the unheard question:{" "}
                <em>what should I actually be doing?</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. IMAGE GALLERY SECTION 1 ────────────────────────────── */}
      <section className="px-[22px] pt-[24px]">
        {/* Full-width image */}
        <div className="relative w-full h-[460px]">
          <Image
            src="/images/missivio/gallery-full.jpg"
            alt="Missivio gallery full width"
            fill
            className="object-cover"
          />
        </div>
        {/* Caption */}
        <div className="pl-[317px] pt-2">
          <p className="italic text-[12px] w-[406px] leading-[1.2] text-black/75">
            Muted violet palette is distinct from blue/teal competitors, designed to reduce anxiety around marketing decisions.
          </p>
        </div>
      </section>

      {/* ─── 6. TWO-IMAGE GALLERY ──────────────────────────────────── */}
      <section className="px-[22px] mt-[40px]">
        {/* Two images side by side */}
        <div className="flex flex-row gap-3">
          <div className="relative w-[622px] h-[460px] flex-shrink-0">
            <Image
              src="/images/missivio/gallery-left-1.jpg"
              alt="Qualitative research"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-[622px] h-[460px] flex-shrink-0">
            <Image
              src="/images/missivio/gallery-right-1.jpg"
              alt="User flows"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Captions */}
        <div className="pl-[317px] pt-2 flex flex-row justify-between">
          <p className="italic text-[12px] w-[305px] leading-[1.2] text-black/75 text-right">
            Qualitative research was used to identify core need.
          </p>
          <p className="italic text-[12px] w-[305px] leading-[1.2] text-black/75">
            User flows for Onboarding and Campaign Creation.
          </p>
        </div>
      </section>

      {/* ─── 7. RESEARCH ───────────────────────────────────────────── */}
      <section className="px-[22px] pt-[24px]">
        <div className="flex flex-row gap-3">
          {/* Label */}
          <div className="w-[305px]">
            <span className="font-medium text-[12px] leading-[13.82px] text-black/40">RESEARCH</span>
          </div>
          {/* Content */}
          <div className="w-[622px] flex flex-col gap-4 font-normal text-[14px] leading-[1.4] text-black/75">
            <p>
              Five interviews with small business owners surfaced{" "}
              <strong className="font-semibold">one consistent theme: paralysis</strong>. Not feature confusion, but a more fundamental uncertainty about where to start.
            </p>
            <p>
              <strong className="font-semibold italic">Sarah (user persona):</strong>{" "}
              B2B services owner, overwhelmed by marketing decisions. Doesn&apos;t want to learn email marketing. Instead, wants someone to make the decisions so she can focus on running her business.
            </p>
            <p>
              <strong className="font-semibold italic">Alex (user persona): </strong>
              D2C brand operator who won&apos;t sacrifice brand authenticity. Doesn&apos;t have time to become a marketing expert, but wants to understand the logic overtime and feel confident in every decision.
            </p>
            <p>
              <strong className="font-semibold">Both needed the same thing: confidence.</strong>{" "}
              Not just the ability to complete a task, but the ability to explain why they&apos;d done it.{" "}
              <strong className="font-semibold">That became my definition of success</strong>{" "}
              throughout.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 8. CONSTRAINTS ────────────────────────────────────────── */}
      <section className="px-[22px] py-[91px]">
        <div className="flex flex-row gap-3">
          {/* Label */}
          <div className="w-[305px]">
            <span className="font-medium text-[12px] leading-[13.82px] text-black/40">CONSTRAINTS</span>
          </div>
          {/* Content */}
          <div className="flex flex-col">
            <h2 className="font-bold text-[16px] leading-[13.82px] text-black/75">
              Constraints shaped every design decision
            </h2>
            <div className="h-[13.715px]" />
            <div className="w-[622px] flex flex-col gap-4 font-normal text-[14px] leading-[1.4] text-black/75">
              <p>
                The product was built around{" "}
                <strong className="font-semibold">one non-negotiable principle: the AI proposes, never acts.</strong>{" "}
                Every output requires explicit user approval before anything goes live.
              </p>
              <p>
                Beyond that, the platform launched desktop-first with mobile awareness, supported single-user accounts only, and deliberately excluded A/B testing and dynamic email content to keep the first-use experience focused. Template customization was intentionally limited, as guardrail{" "}
                <strong className="font-semibold">against overwhelming users with options before they&apos;d built confidence</strong>{" "}
                with the basics.{" "}
                <strong className="font-semibold">Token efficiency shaped every AI interaction</strong>, favouring concise, purposeful responses over conversational depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. ITERATION IMAGE ────────────────────────────────────── */}
      <section className="px-[22px] pt-[12px]">
        <div className="relative w-full h-[622px]">
          <Image
            src="/images/missivio/iteration.jpg"
            alt="Iteration of right side panel"
            fill
            className="object-cover"
          />
        </div>
        {/* Caption */}
        <div className="pl-[317px] pt-2">
          <p className="italic text-[12px] w-[406px] leading-[1.2] text-black/75">
            The evolution of the right side panel: from feeling dismissal, being too crowded, to just perfect.
          </p>
        </div>

      {/* ─── 10. USABILITY TESTING ─────────────────────────────────── */}
      <div className="pt-[24px] pb-[91px]">
        <div className="flex flex-row gap-3">
          {/* Label */}
          <div className="w-[305px]">
            <span className="font-normal text-[12px] leading-[13.82px] text-black/40">USABILITY TESTING</span>
          </div>
          {/* Content */}
          <div className="w-[622px] flex flex-col gap-12">
            {/* Round 1 */}
            <div className="flex flex-col">
              <h2 className="font-bold text-[16px] leading-[13.82px] text-black/75">Round 1, mid-fidelity</h2>
              <div className="h-[13.715px]" />
              <p className="font-normal text-[14px] leading-[1.4] text-black/75">
                <strong className="font-semibold">Users didn&apos;t trust their own actions.</strong>{" "}
                Right editor panel read as dismissing, and users mistakenly kept publishing a live sequence.{" "}
                <strong className="font-semibold">The AI&apos;s reasoning was invisible. </strong>
                The chat input (the product&apos;s main differentiator) was ignored entirely in favor of familiar card patterns.
              </p>
            </div>
            {/* Round 2 */}
            <div className="flex flex-col">
              <h2 className="font-bold text-[16px] leading-[13.82px] text-black/75">Round 2, high-fidelity</h2>
              <div className="h-[13.715px]" />
              <p className="font-normal text-[14px] leading-[1.4] text-black/75">
                The structural problems were solved. A new one emerged:{" "}
                <strong className="font-semibold">the AI reasoning panels were too text-dense to read. </strong>
                The platform&apos;s core value proposition was present but invisible. Users who did engage with it responded strongly:{" "}
                <strong className="font-semibold">the content was right, the format was wrong.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* ─── 11. FINAL DESIGN ──────────────────────────────────────── */}
      <section className="px-[22px] py-[12px]">
        <div className="flex flex-row gap-3">
          {/* Label */}
          <div className="w-[305px]">
            <span className="font-normal text-[12px] leading-[13.82px] text-black/40">FINAL DESIGN</span>
          </div>
          {/* Content */}
          <div className="w-[622px] flex flex-col gap-12">
            {/* Solving for visibility */}
            <div className="flex flex-col">
              <h2 className="font-bold text-[16px] leading-[13.82px] text-black/75">Solving for visibility</h2>
              <div className="h-[13.715px]" />
              <p className="font-normal text-[14px] leading-[1.2] text-black/75">
                Round 2 taught me that the right content shown in
                <strong className="font-semibold"> the wrong format is indistinguishable from the wrong content.</strong>{" "}
                Every final iteration was about making the AI&apos;s reasoning accessible.
              </p>
            </div>
            {/* The defining iteration */}
            <div className="flex flex-col">
              <h2 className="font-bold text-[16px] leading-[13.82px] text-black/75">The defining iteration</h2>
              <div className="h-[13.715px]" />
              <div className="flex flex-col gap-4 font-normal text-[14px] leading-[1.2] text-black/75">
                <p>
                  The mid-fidelity dashboard was a traditional overview with AI features inside it. That structure implicitly told users:{" "}
                  <em>you&apos;re in charge, what would you like to do?</em>
                </p>
                <p>
                  For someone who doesn&apos;t know what they should be doing, that&apos;s paralysis with better UI.
                </p>
                <p>
                  I rebuilt the dashboard around an AI-led conversational handoff.{" "}
                  <strong className="font-semibold">The AI speaks first. The user responds. Every screen that follows has context because the AI already established purpose.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 12. FINAL IMAGE GALLERY ───────────────────────────────── */}
      <section className="px-[22px] mt-[16px]">
        {/* Two images */}
        <div className="flex flex-row gap-3">
          <div className="relative w-[622px] h-[460px] flex-shrink-0">
            <Image
              src="/images/missivio/gallery-left-2.jpg"
              alt="Initial concept of dashboard, mid-fidelity"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-[622px] h-[460px] flex-shrink-0">
            <Image
              src="/images/missivio/gallery-right-2.jpg"
              alt="Final dashboard design"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Captions */}
        <div className="pl-[317px] pt-2 flex flex-row justify-between">
          <p className="italic text-[12px] w-[305px] leading-[1.2] text-black/75">
            Initial concept of dashboard, mid-fidelity.
          </p>
          <p className="italic text-[12px] w-[305px] leading-[1.2] text-black/75">
            Final dashboard design focuses on user/AI interaction.
          </p>
        </div>
      </section>

      {/* ─── 13. LEARNINGS ─────────────────────────────────────────── */}
      <section className="px-[22px] pb-[91px] pt-[24px]">
        <div className="flex flex-row gap-3">
          {/* Label */}
          <div className="w-[305px]">
            <span className="font-normal text-[12px] leading-[13.82px] text-black/40">LEARNINGS</span>
          </div>
          {/* Content */}
          <div className="flex flex-col">
            <h2 className="font-bold text-[16px] leading-[13.82px] text-black/75">
              Knowing the problem intimately is just a starting point
            </h2>
            <div className="h-[13.715px]" />
            <div className="w-[622px] flex flex-col gap-4 font-normal text-[14px] leading-[1.4] text-black/75">
              <p>
                Missivio started as a response to something I watched happen repeatedly in my career: capable people made helpless by tools that assumed too much. But what this project taught me is that{" "}
                <strong className="font-semibold">knowing the problem isn&apos;t enough.</strong>
              </p>
              <p>
                Every assumption I brought from my professional experience still had to be tested, challenged, and sometimes discarded.{" "}
                <strong className="font-semibold">That tension between knowing the issue and the iteration process is what I&apos;ll carry into every design project after this.</strong>
              </p>
            </div>
            {/* View Full Study link */}
            <div className="pt-[12px]">
              <a
                href="#"
                className="font-normal text-[14px] underline text-black/75"
              >
                View Full Study
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 14. NEXT PROJECT LINK ─────────────────────────────────── */}
      <div className="px-[11px] w-full text-right">
        <Link
          href="/projects/doordash"
          className="font-normal text-[14px] leading-[14px] text-black/75"
        >
          NEXT PROJECT: DOORDASH →
        </Link>
      </div>

      {/* ─── 15. FOOTER ────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
