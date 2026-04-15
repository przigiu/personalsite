import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function BrazilyPage() {
  return (
    <div className="min-h-screen">
      {/* ─── 1. PROJECT NAVBAR ─────────────────────────────────────── */}
      <header className="flex flex-col pt-[24px] pb-[91px] px-[12px] bg-[#f9f9f9]">
        <div className="flex flex-row w-full items-start gap-4">
          <div className="flex flex-row items-start gap-3">
            <div className="w-[306px] flex flex-col gap-0.5">
              <span className="font-bold text-[16px] leading-[13.82px] text-black/75">Giulia</span>
              <span className="font-medium text-[14px] leading-[13.82px] text-black/75">Product & UX Designer</span>
            </div>
            <Link href="/" className="font-normal text-[13px] leading-[14px] text-black/75">
              ← BACK
            </Link>
          </div>
          <nav className="flex-1 flex flex-row gap-3 justify-end items-center">
            <a href="#contact" className="font-normal text-[13px] leading-[14px] text-black/75 uppercase">CONTACT</a>
            <a href="/about" className="font-normal text-[13px] leading-[14px] text-black/75 uppercase">ABOUT</a>
          </nav>
        </div>
      </header>

      {/* ─── 2. PROJECT HEADER ─────────────────────────────────────── */}
      <section className="px-[12px] pt-[6px]">
        <div className="flex flex-row gap-4 items-start">
          <div className="w-[302px] flex flex-col">
            <h1 className="font-medium text-[14px] tracking-[1.5px] uppercase leading-[10.37px] text-black/75">
              BRAZILY
            </h1>
            <span className="font-normal text-[11px] leading-[13.82px] text-black/40">04</span>
          </div>
          <div className="w-[622px] flex flex-col gap-6 pb-[38px]">
            <p className="w-[622px] font-normal text-[13px] leading-[1.4] text-black/75">
              A failed App Store submission and an invisible freemium model were the starting point. What followed was a full design engagement and a workflow built around Claude Code and Figma MCP.
            </p>
            <div className="flex flex-row gap-6">
              <div className="flex-1 flex flex-col">
                <span className="font-semibold text-[12px] leading-[13.82px] text-black/75">Role</span>
                <span className="font-normal text-[12px] leading-[13.82px] text-black/75">UX/UI Designer</span>
              </div>
              <div className="flex-1 flex flex-col">
                <span className="font-semibold text-[12px] leading-[13.82px] text-black/75">Year</span>
                <span className="font-normal text-[12px] leading-[13.82px] text-black/75">2026</span>
              </div>
              <div className="flex-1 flex flex-col">
                <span className="font-semibold text-[12px] leading-[13.82px] text-black/75">Project</span>
                <span className="font-normal text-[12px] leading-[13.82px] text-black/75">Product design, iOS app</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. HERO IMAGE ─────────────────────────────────────────── */}
      <div className="mt-4 flex justify-center">
        <div className="relative w-[832px] h-[622px] bg-[#f3f3f3] overflow-hidden">
          <Image
            src="/images/brazily/hero.png"
            alt="Brazily app screens"
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* ─── 4. THE PROBLEM ────────────────────────────────────────── */}
      <section className="px-[12px] pt-[91px]">
        <div className="flex flex-row gap-3 items-start">
          <div className="w-[305px] flex flex-col">
            <span className="font-medium text-[12px] leading-[13.82px] text-black/40">THE PROBLEM</span>
          </div>
          <div className="flex flex-col">
            <div className="w-[622px] font-normal text-[13px] leading-[1.4] text-black/75">
              <p>
                Brazily Fitness&apos;s first iOS app was rejected by the App Store. Built on a web view-based tool, it hit Apple&apos;s policy restrictions before a single user could download it. That rejection forced a conversation around building <strong className="font-semibold">a real native app</strong>, and created an opportunity to fix what wasn&apos;t working underneath too.
              </p>
              <br />
              <p>
                Despite strong content and an engaged community, <strong className="font-semibold">mobile bounce rates were high</strong>. <strong className="font-semibold">The freemium model was invisible</strong> in the UI. New visitors had no orientation path. The drop-off problem wasn&apos;t content quality, it was navigation.
              </p>
              <br />
              <p>
                This case study focuses less on the design decisions themselves and more on how I worked: specifically, <strong className="font-semibold">how I used Claude, Claude Code, and Figma MCP</strong> to run a faster, more rigorous, and more iterative process than I could have otherwise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. SETTING UP CLAUDE ──────────────────────────────────── */}
      <section className="px-[12px] pt-[64px]">
        <div className="flex flex-row gap-3 items-start">
          <div className="w-[305px] flex flex-col">
            <span className="font-medium text-[12px] leading-[13.82px] text-black/40">SETTING UP CLAUDE</span>
          </div>
          <div className="flex flex-col gap-[91px]">

            {/* Text content block */}
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col">
                <h2 className="font-bold text-[15px] leading-[13.82px] text-black/75">Building the infrastructure first</h2>
                <div className="h-[13.715px]" />
                <p className="w-[622px] font-normal text-[13px] leading-[1.4] text-black/75">
                  Before the first screen was designed, I built a set of <strong className="font-semibold">custom and reusable Claude skills</strong>, that I now carry into every engagement.
                </p>
              </div>

              {/* Callout box */}
              <div className="border-t border-[#c8c8c8] pt-[20px] pb-[12px] flex flex-col gap-[8px] w-[642px]">
                <span className="font-normal text-[12px] uppercase text-[#656565] leading-[1.4]">What is a Claude skill?</span>
                <p className="font-normal text-[12px] leading-[20px] text-[#656565]">
                  A custom instruction set that defines how Claude should behave for a specific type of task. It encodes the methodology, fidelity standards, notation rules, and design principles for a specific type of task.
                </p>
              </div>

              {/* Skill cards */}
              <div className="flex flex-wrap gap-[14px] w-[642px]">
                <div className="w-[314px] bg-[#f0f0f0] border border-[#ececec] rounded-[16px] p-[20px] flex flex-col gap-[20px]">
                  <span className="bg-white border border-[#ee6363] rounded-[4px] px-[4px] py-[1px] font-mono text-[13px] leading-[1.4] text-[#cc4949] self-start">
                    wireframe-generator
                  </span>
                  <p className="font-normal text-[13px] leading-[1.6] text-black/75">
                    Defines layout logic, content hierarchy, and fidelity level for mobile screens. Rather than producing generic placeholders, it generates layouts that match the project&apos;s navigation architecture and content model, with realistic labels and interaction states.
                  </p>
                </div>

                <div className="w-[314px] bg-[#f0f0f0] border border-[#ececec] rounded-[16px] p-[20px] flex flex-col gap-[20px]">
                  <span className="bg-white border border-[#ee6363] rounded-[4px] px-[4px] py-[1px] font-mono text-[13px] leading-[1.4] text-[#cc4949] self-start">
                    ux-design-collaboration
                  </span>
                  <p className="font-normal text-[13px] leading-[1.6] text-black/75">
                    Keeps iterative screen work grounded in established project decisions. When working through multiple screen variations in a single session, this skill ensures each iteration builds on what was decided before rather than drifting or restarting from defaults.
                  </p>
                </div>

                <div className="w-[314px] bg-[#f0f0f0] border border-[#ececec] rounded-[16px] p-[20px] flex flex-col gap-[20px]">
                  <span className="bg-white border border-[#ee6363] rounded-[4px] px-[4px] py-[1px] font-mono text-[13px] leading-[1.4] text-[#cc4949] self-start">
                    competitor-analysis
                  </span>
                  <p className="font-normal text-[13px] leading-[1.6] text-black/75">
                    Structures competitive findings into UX-relevant gaps rather than simple feature comparisons. It produces analysis around what each platform fails to do for the user, which is the actual useful output for design decision-making.
                  </p>
                </div>

                <div className="w-[314px] bg-[#f0f0f0] border border-[#ececec] rounded-[16px] p-[20px] flex flex-col gap-[20px]">
                  <span className="bg-white border border-[#ee6363] rounded-[4px] px-[4px] py-[1px] font-mono text-[13px] leading-[1.4] text-[#cc4949] self-start">
                    user-testing-report
                  </span>
                  <p className="font-normal text-[13px] leading-[1.6] text-black/75">
                    Shapes usability findings into a stakeholder-ready narrative. It prioritizes findings by severity, connects observations to design implications, and frames everything in language a client without a design background can evaluate and respond to.
                  </p>
                </div>

                <div className="w-[314px] bg-[#f0f0f0] border border-[#ececec] rounded-[16px] p-[20px] flex flex-col gap-[20px]">
                  <span className="bg-white border border-[#ee6363] rounded-[4px] px-[4px] py-[1px] font-mono text-[13px] leading-[1.4] text-[#cc4949] self-start">
                    frontend-design
                  </span>
                  <p className="font-normal text-[13px] leading-[1.6] text-black/75">
                    Ensures any HTML/CSS output generated meets a quality bar for visual structure, hierarchy, and layout logic. This is essential for wireframe exploration, where generated screens need to be evaluable as real options, not just functional markup.
                  </p>
                </div>
              </div>

              {/* Closing text */}
              <p className="w-[622px] font-normal text-[13px] leading-[1.4] text-black/75">
                I&apos;ve open-sourced all of these skills so other designers can use and build on them.
              </p>

              {/* GitHub CTA */}
              <div className="pt-[12px]">
                <a href="#" className="inline-flex items-center gap-[6px] font-normal text-[14px] leading-[13.82px] text-black/75 border-b border-black/75">
                  View the
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px] shrink-0">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Github repo
                </a>
              </div>
            </div>

            {/* Media block — two stacked images */}
            <div className="flex justify-center items-center">
            <div className="w-[463px] flex flex-col gap-[8px] overflow-hidden">
              <div className="relative w-full h-[420px]">
                <Image
                  src="/images/brazily/setting-up-1.png"
                  alt=""
                  fill
                  sizes="463px"
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[420px]">
                <Image
                  src="/images/brazily/setting-up-2.png"
                  alt=""
                  fill
                  sizes="463px"
                  className="object-cover"
                />
              </div>
            </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 6. RESEARCH ───────────────────────────────────────────── */}
      <section className="px-[12px] py-[91px]">
        <div className="flex flex-row gap-3 items-start">
          <div className="w-[305px] flex flex-col">
            <span className="font-medium text-[12px] leading-[13.82px] text-black/40">RESEARCH</span>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-[15px] leading-[13.82px] text-black/75">
              Finding the real problem
            </h2>
            <div className="h-[13.715px]" />
            <div className="w-[622px] font-normal text-[13px] leading-[1.4] text-black/75">
              <p>
                I ran a <strong className="font-semibold">full platform audit</strong>, a <strong className="font-semibold">competitor analysis</strong> across Zumba and SHiNE Dance Fitness, and a synthesis of user behavior patterns. Using the competitor-analysis skill, Claude helped me move from raw observations to a structured framework that surfaced design gaps, compressing what would otherwise be several working sessions into one focused output I could act on and present to the client.
              </p>
              <br />
              <p>
                The finding that shaped everything: <strong className="font-semibold">the drop-off problem was navigation, not content quality.</strong> Users couldn&apos;t orient themselves. The platform expected users to arrive with a mental model they hadn&apos;t been given.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. CONTENT SECTION WITH IMAGES ────────────────────────── */}
      <section className="px-[12px] pb-[91px]">
        <div className="flex flex-col gap-[64px]">

          {/* BLOCK 1: Research GIF + caption + DESIGN DECISION */}
          <div className="flex flex-col gap-[16px]">
            <div className="relative w-full h-[622px] bg-[#f4f4f4] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brazily/research.gif"
                alt=""
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <div className="pl-[317px]">
              <p className="italic text-[12px] w-[622px] leading-[1.2] text-black/75">
                From dashboard, passing to courses tab, to the actual video lesson.
              </p>
            </div>
            <div className="pt-[40px]">
              <div className="flex flex-row gap-3 items-start">
                <div className="w-[305px] flex flex-col">
                  <span className="font-medium text-[12px] leading-[13.82px] text-black/40">DESIGN DECISION</span>
                </div>
                <div className="flex flex-col">
                  <div className="w-[622px] font-normal text-[13px] leading-[1.4] text-black/75">
                    <p>
                      <strong className="font-semibold">The &ldquo;Course&rdquo; screen</strong> is where the most consequential design work happened.
                    </p>
                    <br />
                    <p>
                      The original platform didn&apos;t organize content: users who came through a direct link weren&apos;t aware of membership-exclusive content, and the ones that did had a hard time finding it.
                    </p>
                    <br />
                    <p>
                      After creating an <strong className="font-semibold">user-friendly path</strong> to courses, I explored organizing content by dance style with free and locked classes coexisting within each section. The logic was sound: users come to Brazily to learn a specific style, not for a tier structure. But the owner pushed back: the sequence of videos matters to how the content is taught, and breaking it apart by style would disrupt that progression.
                    </p>
                    <br />
                    <p>
                      The final model kept the <strong className="font-semibold">open layout with all lessons visible</strong>, grouped by course (March 2026, April 2026), preserving the pedagogical order while still solving the original problem: users could see what was available, what was accessible, and where they were in the content. This also <strong className="font-semibold">made the freemium model visible</strong> for the first time.
                    </p>
                    <br />
                    <p>
                      <strong className="font-semibold">Navigation architecture</strong> followed the same logic: single scroll, no tabs, with a chip row for filtering. Simple enough for a new visitor, functional enough for an active member.
                    </p>
                    <br />
                    <p>
                      To explore visual direction, I used the wireframe-generator and frontend-design skills with <strong className="font-semibold">Claude Code and Figma MCP</strong> to generate different hypotheses about how to balance content density, brand, and navigability, choosing between three real options on the same afternoon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK 2: Design Decision GIF + caption + Other places AI */}
          <div className="flex flex-col gap-[16px]">
            <div className="relative w-full h-[622px] bg-[#f4f4f4] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brazily/design-decision.gif"
                alt=""
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <div className="pl-[317px]">
              <p className="italic text-[12px] w-[622px] leading-[1.2] text-black/75">
                The dashboard contains main elements like &lsquo;next lesson&rsquo;, community challenges, upcoming events and a prompt that showcase the freemium model. All these elements were marked as priority during research.
              </p>
            </div>
            <div className="pt-[40px]">
              <div className="flex flex-row gap-3 items-start">
                <div className="w-[305px] flex flex-col" />
                <div className="flex flex-col gap-[48px]">

                  {/* Other places AI shaped the work */}
                  <div className="flex flex-col gap-[13.715px]">
                    <h2 className="font-bold text-[15px] leading-[13.82px] text-black/75">Other places AI shaped the work</h2>
                    <ul className="list-disc ml-[19.5px] text-black/75 w-[622px]">
                      <li className="mb-4">
                        <strong className="font-bold text-[13px] leading-[1.4]">Information architecture and user flows</strong>
                        <br />
                        <span className="font-normal text-[13px] leading-[1.4]">The app serves <strong className="font-semibold text-[13px]">three user types</strong> with different onboarding paths and permissions. Using the ux-design-collaboration skill, I stress-tested the IA with Claude by working through edge cases, access logic, and bifurcation points. We <strong className="font-semibold text-[13px]">iterated on user flow diagrams</strong> using a strict notation system (YES/NO decision diamonds, parallelograms for data input, fill color distinguishing system vs. user actions), which I then translated into Figma.</span>
                      </li>
                      <li className="mb-4">
                        <strong className="font-bold text-[13px] leading-[1.4]">Copy and microcopy</strong>
                        <br />
                        <span className="font-normal text-[13px] leading-[1.4]">UX copy was <strong className="font-semibold text-[13px]">iterated throughout</strong>, not added at the end: the onboarding instructional text, the locked content messaging, were all pressure-tested and traceable to a user behavior or research finding.</span>
                      </li>
                      <li>
                        <strong className="font-bold text-[13px] leading-[1.4]">Client communication</strong>
                        <br />
                        <span className="font-normal text-[13px] leading-[1.4]">Mariana is a business owner, not a designer. I used Claude to help draft walkthrough scripts and frame rationale in language she could evaluate. The user-testing-report skill shaped usability findings as a <strong className="font-semibold text-[13px]">narrative that led to decisions</strong>, not a list of observations, which made every revision round faster.</span>
                      </li>
                    </ul>
                  </div>

                  {/* What AI did and didn't do */}
                  <div className="flex flex-col gap-[13.715px]">
                    <h2 className="font-bold text-[15px] leading-[13.82px] text-black/75">What AI did and didn&apos;t do</h2>
                    <div className="font-normal text-[13px] leading-[1.4] text-black/75 w-[622px]">
                      <p className="font-semibold">AI accelerated:</p>
                      <ul className="list-disc ml-[19.5px] mb-4 mt-[18.2px]">
                        <li>Synthesis and research structuring</li>
                        <li>Iteration velocity across wireframes and copy</li>
                        <li>Documentation and edge case review</li>
                        <li>Translation of decisions into artifacts</li>
                      </ul>
                      <p className="font-semibold">AI did not:</p>
                      <ul className="list-disc ml-[19.5px] mb-4 mt-[18.2px]">
                        <li>Identify the core navigation problem</li>
                        <li>Decide how to structure the content model</li>
                        <li>Determine how locked and free content should coexist visually</li>
                        <li>Figure out what the brand needed emotionally</li>
                      </ul>
                      <p>
                        Those required understanding the business, the users, and the constraints. The shift wasn&apos;t &ldquo;AI does more.&rdquo; It was &ldquo;I spend less time on what doesn&apos;t require design judgment, so I have more time on what does.&rdquo;
                      </p>
                      <br />
                      <p>
                        A project of this scope would typically require a larger team or a much longer timeline. <strong className="font-semibold">The AI-augmented workflow is why it didn&apos;t.</strong>
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 8. LEARNINGS ──────────────────────────────────────────── */}
      <section className="px-[12px] pt-[40px] pb-[91px]">
        <div className="flex flex-row gap-3 items-start">
          <div className="w-[305px] flex flex-col">
            <span className="font-normal text-[12px] leading-[13.82px] text-black/40">LEARNINGS</span>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-[15px] leading-[13.82px] text-black/75">
              AI is redefining the design process
            </h2>
            <div className="h-[13.715px]" />
            <div className="w-[622px] font-normal text-[13px] leading-[1.4] text-black/75">
              <p>
                The thing this project made undeniable: when you know how to use it, <strong className="font-semibold">AI changes the shape of an engagement entirely</strong>. Research, IA, wireframing, and copy no longer need to run sequentially: with the right configuration, they run in parallel.
              </p>
              <br />
              <p>
                <strong className="font-semibold">The key word is configuration</strong>. Generic prompting gets generic output. The custom skills I built are what made the difference between AI as a novelty and AI as actual infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. NEXT PROJECT LINK ──────────────────────────────────── */}
      <div className="px-[11px] w-full text-right">
        <Link href="/projects/doordash" className="font-normal text-[14px] leading-[14px] text-black/75">
          NEXT PROJECT: DOORDASH →
        </Link>
      </div>

      {/* ─── 10. FOOTER ────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
