import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import ProjectNavbar from "@/app/components/ProjectNavbar";

export default function DoorDashPage() {
  return (
    <div className="min-h-screen">
      {/* ─── 1. PROJECT NAVBAR ─────────────────────────────────────── */}
      <ProjectNavbar />

      {/* ─── 2. PROJECT HEADER ─────────────────────────────────────── */}
      <section className="px-[12px] pt-[6px]">
        <div className="flex flex-col gap-4 md:flex-row items-start">
          {/* Left column */}
          <div className="w-full md:w-[302px] flex flex-col">
            <h1 className="font-medium text-[14px] tracking-[1.5px] uppercase leading-[10.37px] text-black/75">
              DOORDASH
            </h1>
            <span className="font-normal text-[11px] leading-[13.82px] text-black/40">02</span>
          </div>
          {/* Right column */}
          <div className="w-full md:w-[622px] flex flex-col gap-6 pb-[38px]">
            {/* Description */}
            <p className="w-full md:w-[622px] font-normal text-[13px] leading-[1.4] text-black/75">
              Users don&apos;t trust food delivery apps enough to order from a new restaurant without checking TikTok first. I designed a feature to bring that proof into DoorDash.
            </p>
            {/* Tags */}
            <div className="flex flex-row gap-6">
              <div className="flex-1 flex flex-col">
                <span className="font-semibold text-[12px] leading-[13.82px] text-black/75">Role</span>
                <span className="font-normal text-[12px] leading-[13.82px] text-black/75">Solo designer</span>
              </div>
              <div className="flex-1 flex flex-col">
                <span className="font-semibold text-[12px] leading-[13.82px] text-black/75">Year</span>
                <span className="font-normal text-[12px] leading-[13.82px] text-black/75">2026</span>
              </div>
              <div className="flex-1 flex flex-col">
                <span className="font-semibold text-[12px] leading-[13.82px] text-black/75">Project</span>
                <span className="font-normal text-[12px] leading-[13.82px] text-black/75">Feature addition, Concept</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. HERO IMAGE ─────────────────────────────────────────── */}
      <div className="px-[12px] mt-4">
        <div className="relative w-full h-[300px] md:h-[622px] bg-[#e6e6e6]">
          <Image
            src="/images/doordash/empathy-map.jpg"
            alt="DoorDash hero"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* ─── 4. THE PROBLEM ────────────────────────────────────────── */}
      <section className="px-[12px] pt-[48px] md:pt-[91px]">
        <div className="flex flex-col gap-1 md:flex-row md:gap-3 items-start">
          {/* Label */}
          <div className="w-full md:w-[305px] flex flex-col">
            <span className="font-medium text-[12px] leading-[13.82px] text-black/40">THE PROBLEM</span>
          </div>
          {/* Content */}
          <div className="flex flex-col">
            <h2 className="font-bold text-[14px] leading-[13.82px] text-black/75">
              Food delivery apps are built for ordering, not for deciding.
            </h2>
            <div className="h-[13.715px]" />
            <div className="w-full md:w-[622px] font-normal text-[13px] leading-[1.4] text-black/75">
              <p>
                Users regularly browse DoorDash for ten minutes, abandon it to check TikTok for authentic food videos, and only return to place the order once they&apos;ve been inspired. Every single person I interviewed had developed this exact workflow, and none of them thought twice about it, even if it adds over 2 hours to their routine.
              </p>
              <br />
              <p>
                The question I set out to answer was whether that friction could be eliminated by bringing the video content into DoorDash, at the moment the decision is actually happening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. RESEARCH IMAGE GALLERY ─────────────────────────────── */}
      <section className="px-[12px] pt-[48px] md:pt-[91px]">
        {/* Two images side by side */}
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="relative w-full md:w-[622px] h-[240px] md:h-[460px] flex-shrink-0">
            <Image
              src="/images/doordash/user-flow.jpg"
              alt="Empathy map"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-[622px] h-[240px] md:h-[460px] flex-shrink-0">
            <Image
              src="/images/doordash/mid-fi-to-hi-fi.jpg"
              alt="User flow"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        {/* Captions */}
        <div className="pl-0 md:pl-[317px] mt-4 flex flex-col gap-2 md:flex-row md:justify-between">
          <p className="italic text-[12px] w-full md:w-[305px] leading-[1.2] text-black/75">
            Empathy map helped define the user subconscious state and core needs.
          </p>
          <p className="italic text-[12px] w-full md:w-[390px] leading-[1.2] text-black/75">
            A comparison between the current user flow (top), discovered during research, and the user flow (bottom) with the new feature.
          </p>
        </div>
      </section>

      {/* ─── 6. RESEARCH ───────────────────────────────────────────── */}
      <section className="px-[12px] pt-[32px] md:pt-[56px]">
        <div className="flex flex-col gap-1 md:flex-row md:gap-3 items-start">
          {/* Label */}
          <div className="w-full md:w-[305px] flex flex-col">
            <span className="font-medium text-[12px] leading-[13.82px] text-black/40">RESEARCH</span>
          </div>
          {/* Content */}
          <div className="w-full md:w-[622px] flex flex-col gap-[56px]">
            {/* Subsection 1 */}
            <div className="flex flex-col">
              <h2 className="font-bold text-[14px] leading-[13.82px] text-black/75">
                Spotting the gap in the market
              </h2>
              <div className="h-[13.715px]" />
              <p className="font-normal text-[13px] leading-[1.4] text-black/75">
                Before talking to users, <strong className="font-semibold">I audited seven platforms across food delivery, short-form video, and social discovery</strong> (including Uber Eats, DoorDash, Grubhub, BiteSight, WhattaEat, Instacart, and Slice).
                <br /><br />
                The pattern that emerged was consistent: platforms that had experimented with video either positioned it as paid advertising (which erodes the trust signal that makes video valuable in the first place) or surfaced it separately from the ordering flow, where it gets ignored.
                <br /><br />
                <strong className="font-semibold">No major delivery platform had integrated authentic, community-sourced video into the moment where a user is actively trying to make a decision.</strong> That gap became the foundation for my design.
              </p>
            </div>
            {/* Subsection 2 */}
            <div className="flex flex-col">
              <h2 className="font-bold text-[14px] leading-[13.82px] text-black/75">
                An annoying, but necessary, multi-app work flow
              </h2>
              <div className="h-[13.715px]" />
              <p className="font-normal text-[13px] leading-[1.4] text-black/75">
                I conducted <strong className="font-semibold">five semi-structured interviews</strong> with regular food delivery users (people ordering at least once a week, across a range of household types and ordering habits).
                <br /><br />
                I focused not on what they wished the apps would do, but on what they actually did in a recent session. <strong className="font-semibold">Decision paralysis showed up in all five interviews.</strong>
                <br /><br />
                Every participant had spent significant time, sometimes over two hours, cross-referencing multiple apps before committing to a new restaurant: <strong className="font-semibold">browse DoorDash, cross-check on TikTok, come back to order.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. USER PERSONAS ──────────────────────────────────────── */}
      <section className="px-[12px] py-[48px] md:py-[91px]">
        <div className="flex flex-col gap-1 md:flex-row md:gap-3 items-start">
          {/* Label */}
          <div className="w-full md:w-[305px] flex flex-col">
            <span className="font-medium text-[12px] leading-[13.82px] text-black/40">USER PERSONAS</span>
          </div>
          {/* Content */}
          <div className="w-full md:w-[622px] font-normal text-[13px] leading-[1.4] text-black/75">
            <p>
              From the interviews, two distinct tension profiles emerged. Defined not by demographics, but by the specific anxiety they experience while ordering:
            </p>
            <br /><br />
            <ul className="list-disc ml-4">
              <li className="mb-4">
                <strong className="font-semibold">Authenticity-seekers</strong>{" "}
                (Casey): frequent orderers who distrust curated in-app photos and actively cross-reference TikTok, Google Maps, and Yelp before trying somewhere new. Their core question:{" "}
                <em>is this restaurant actually worth trusting?</em>
              </li>
              <li>
                <strong className="font-semibold">Household decision-makers</strong>{" "}
                (Jordan): high-frequency orderers managing meals for others. Drawn to new restaurants, but the pressure of landing on something everyone will eat often pushes them back to familiar choices. Their core question:{" "}
                <em>will this work for everyone at the table tonight?</em>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── 8. FIRST ITERATION + USABILITY TESTING ────────────────── */}
      <section className="px-[12px]">
        <div className="flex flex-col">

          {/* Block A: Mid-fi to Hi-fi image */}
          <div>
            <div className="relative w-full h-[300px] md:h-[622px]">
              <Image
                src="/images/doordash/usability-testing.jpg"
                alt="Mid-fi to High-fi progression"
                fill
                className="object-cover"
              />
            </div>
            {/* Caption */}
            <div className="pl-0 md:pl-[317px] mt-4">
              <p className="italic text-[12px] w-full md:w-[622px] leading-[1.2] text-black/75">
                <strong className="font-semibold italic">Mid-fi to High-fi progression</strong> of feature placement: user testing proved that initial concept disrupted users&apos; existing mental model.
              </p>
            </div>
          </div>

          {/* Block B: FIRST ITERATION body */}
          <div className="mt-[32px] md:mt-[56px]">
            <div className="flex flex-col gap-1 md:flex-row md:gap-3 items-start">
              {/* Label */}
              <div className="w-full md:w-[305px] flex flex-col">
                <span className="font-medium text-[12px] leading-[13.82px] text-black/40">FIRST ITERATION</span>
              </div>
              {/* Content */}
              <p className="w-full md:w-[622px] font-normal text-[13px] leading-[1.4] text-black/75">
                My initial instinct was to position <strong className="font-semibold">a video feed as a replacement for the restaurant card list.</strong>
                <br /><br />
                Research had shown that users weren&apos;t frustrated by what happened after they chose a restaurant, as the paralysis happened during selection. A video-first surface felt like the right fix. <strong className="font-semibold">Mid-fidelity testing challenged that assumption quickly.</strong> Users were familiar with the card layout and pushed back when it disappeared: &apos;What happens if I don&apos;t want to watch a video?&apos;
                <br /><br />
                It became clear the feed needed to be an addition, not a replacement: a new default view after a category tap, with the card list still accessible via a toggle for users who prefer it.
                <br /><br />
                <strong className="font-semibold">The video overlay was designed to carry the information both personas need</strong> to make a decision without leaving the feed: every card shows the restaurant name, price range, estimated delivery time, and distance. TikTok-sourced content displays the TikTok logo, a deliberate trust signal communicating that the content was not commissioned by the restaurant or by DoorDash. When applicable, a text badge reading &apos;Kids menu available&apos; appears directly on the card, positioned for Jordan and anyone else navigating the same constraint.
                <br /><br />
                When a user taps through from a video to the restaurant page, a &apos;Just Watched&apos; callout persists at the top, maintaining the thread between what they saw and where they&apos;ve landed.
              </p>
            </div>
          </div>

          {/* Block C: Usability Testing */}
          <div className="mt-[48px] md:mt-[91px]">
            {/* Full-width image */}
            <div className="relative w-full h-[300px] md:h-[622px]">
              <Image
                src="/images/doordash/final-overlay-card.jpg"
                alt="Usability testing panel"
                fill
                className="object-cover"
              />
            </div>
            {/* Caption */}
            <div className="pl-0 md:pl-[317px] mt-4">
              <p className="italic text-[12px] w-full md:w-[622px] leading-[1.2] text-black/75">
                The entire flow: user opens the app (left), look up for pizza, click on the video tab to explore videos, and land on the restaurant page for checkout.
              </p>
            </div>
            {/* USABILITY TESTING label + content */}
            <div className="pt-[32px] md:pt-[56px]">
              <div className="flex flex-col gap-1 md:flex-row md:gap-3 items-start">
                {/* Label */}
                <div className="w-full md:w-[305px] flex flex-col">
                  <span className="font-medium text-[12px] leading-[13.82px] text-black/40">USABILITY TESTING</span>
                </div>
                {/* Content */}
                <div className="w-full md:w-[622px] flex flex-col gap-12">
                  {/* Round 1 */}
                  <div className="flex flex-col">
                    <h2 className="font-bold text-[14px] leading-[13.82px] text-black/75">Round 1, mid-fidelity</h2>
                    <div className="h-[13.715px]" />
                    <div className="font-normal text-[13px] leading-[1.4] text-black/75">
                      <p>
                        All four participants engaged authentically with the videos and expressed real appetite to order. But the path from &apos;I saw something I want&apos; to &apos;I know how to get it&apos; broke down in specific ways.
                      </p>
                      <ul className="list-disc ml-4 mt-2">
                        <li>
                          Users who tapped through from a video to a restaurant&apos;s menu had no visible path back to the video that had brought them there.
                        </li>
                        <li>
                          The kid-friendly symbol (a smiley face) was not recognized by a single participant without being told what it meant, and the content source badge was being skipped entirely.
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Round 2 */}
                  <div className="flex flex-col">
                    <h2 className="font-bold text-[14px] leading-[13.82px] text-black/75">Round 2, high-fidelity</h2>
                    <div className="h-[13.715px]" />
                    <p className="font-normal text-[13px] leading-[1.4] text-black/75">
                      After adding a video tag to individual menu items and replacing the icon with a spelled-out badge, each Round 1 issue was directly retested.{" "}
                      <strong className="font-semibold">The feature was described as native to DoorDash</strong>,{" "}
                      a signal that the visual design had landed within the existing product language rather than on top of it.
                      <br /><br />
                      The detail that resonated most was the &apos;Just Watched&apos; callout.{" "}
                      <strong className="font-semibold">Users responded to the continuity it created</strong>:{" "}
                      the thread between what they&apos;d seen in the feed and where they&apos;d landed felt intentional rather than accidental. That connection, it turned out, was doing as much trust-building as the video itself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 9. FINAL SCREENS GALLERY ──────────────────────────────── */}
      <section className="px-[12px] mt-[48px] md:mt-[91px]">
        {/* Two images side by side */}
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="relative w-full md:w-[622px] h-[240px] md:h-[460px] flex-shrink-0">
            <Image
              src="/images/doordash/final-video-indicator.jpg"
              alt="Final screen overlay card"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-[622px] h-[240px] md:h-[460px] flex-shrink-0">
            <Image
              src="/images/doordash/hero.jpg"
              alt="Final screen red video indicator"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        {/* Captions */}
        <div className="pl-0 md:pl-[317px] mt-4 flex flex-col gap-2 md:flex-row md:justify-between">
          <p className="italic text-[12px] w-full md:w-[305px] leading-[1.2] text-black/75">
            Overlay card with restaurant information presents now a complete spelled out tag after testing.
          </p>
          <p className="italic text-[12px] w-full md:w-[305px] leading-[1.2] text-black/75">
            Updated coloring (from grey to red) to give visual prominence to video indicator.
          </p>
        </div>
      </section>

      {/* ─── 10. LEARNINGS ─────────────────────────────────────────── */}
      <section className="px-[12px] pt-[48px] md:pt-[91px] pb-[48px] md:pb-[91px]">
        <div className="flex flex-col gap-1 md:flex-row md:gap-3 items-start">
          {/* Label */}
          <div className="w-full md:w-[305px] flex flex-col">
            <span className="font-medium text-[12px] leading-[13.82px] text-black/40">LEARNINGS</span>
          </div>
          {/* Content */}
          <div className="flex flex-col">
            <h2 className="font-bold text-[14px] leading-[13.82px] text-black/75">
              Adding the right information at the right moment
            </h2>
            <div className="h-[13.715px]" />
            <div className="w-full md:w-[622px] font-normal text-[13px] leading-[1.4] text-black/75">
              <p>
                Decision paralysis isn&apos;t solved by adding more information. It&apos;s solved by adding the right kind of proof at the right moment: before the user has to commit.
              </p>
              <br />
              <p>
                But the more lasting lesson was about mental models.{" "}
                <strong className="font-semibold">Users had spent years navigating food delivery through a card list. Replacing it (even with something objectively more useful) felt like something being taken away.</strong>{" "}
                The video feed only worked once it sat alongside the familiar pattern, not in place of it.
              </p>
              <br />
              <p>
                I&apos;ll carry that into every feature addition after this project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 11. NEXT PROJECT LINK ─────────────────────────────────── */}
      <div className="px-[11px] w-full text-right">
        <Link href="/projects/brightwave" className="font-normal text-[14px] leading-[14px] text-black/75">
          NEXT PROJECT: BRIGHTWAVE →
        </Link>
      </div>

      {/* ─── 12. FOOTER ────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
