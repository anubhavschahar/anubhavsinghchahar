import Reveal from "./Reveal";
import Journey from "./Journey";
import Writing from "./Writing";

const thinkingBlocks = [
  {
    title: "Start with People",
    body:
      "Every feature begins with someone trying to achieve something. Before discussing solutions, I try to understand the person, the context, and the motivation behind the problem.",
    notebook:
      "People rarely ask for what they actually need. They describe the struggle they're experiencing.",
  },
  {
    title: "Stay Curious Longer",
    body:
      "I try to delay solutions until I've understood the problem well enough. Curiosity often reveals opportunities that assumptions hide.",
    notebook:
      "The second 'why' is usually more valuable than the first answer.",
  },
  {
    title: "Look for Patterns",
    body:
      "Individual observations tell stories. Patterns help make decisions. I enjoy connecting research, behaviour, and business context until the bigger picture becomes clear.",
    notebook:
      "One conversation is an opinion. Repeated behaviour is evidence.",
  },
  {
    title: "Think in Systems",
    body:
      "Every product exists inside a larger system of users, business goals, technology, and constraints. I try to understand how each decision influences the whole rather than optimizing only one part.",
    notebook:
      "Optimizing one metric can quietly break another.",
  },
  {
    title: "Keep Learning",
    body:
      "Every project leaves behind more than an outcome. It leaves behind a better question for the next project. Reading, writing, and reflecting have taught me that growth comes from continuously refining the way I think.",
    notebook:
      "Every book changes the reader. Every project should change the builder.",
  },
];



// Subtle gradient overlay between scenes — creates depth without moving the fixed background.
const SceneDivider = () => (
  <div
    aria-hidden
    className="pointer-events-none w-full h-20 md:h-28"
    style={{
      background:
        "linear-gradient(to bottom, rgba(5,5,5,0) 0%, rgba(5,5,5,0.5) 50%, rgba(5,5,5,0) 100%)",
    }}
  />
);

const Section = ({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="relative w-full px-8 md:px-16 py-24 md:py-40"
    style={{ backgroundColor: "rgba(5,5,5,0.55)" }}
  >
    <div className="max-w-[1200px] mx-auto">
      {eyebrow && (
        <Reveal>
          <div
            className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className="text-[13vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.95] tracking-tight font-light mb-12 md:mb-20"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          {title}
        </h2>
      </Reveal>
      <Reveal delay={220}>{children}</Reveal>
    </div>
  </section>
);

const Story = () => {
  return (
    <div className="text-white">
      {/* 1. Start Reading — hero transition */}
      <section
        className="relative w-full px-8 md:px-16 py-24 md:py-40"
        style={{ backgroundColor: "rgba(5,5,5,0.35)" }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <div
              className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
            Prelude
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2
              className="text-[10vw] md:text-[5.5vw] leading-[1] tracking-tight font-light text-white/90"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Start Reading
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p
              className="mt-10 text-[15px] md:text-[17px] text-white/50 font-light leading-[1.8] max-w-[540px] mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Every product begins with a question.
              <br /><br />
              The chapters ahead are my attempt to understand those questions through curiosity, conversations, and thoughtful decisions.
              <br /><br />
              This is a record of how I'm learning to build products that matter.
            </p>
          </Reveal>
        </div>
      </section>

      <SceneDivider />

      {/* 2. Thinking */}
      <section
        id="thinking"
        className="relative w-full px-8 md:px-16 py-24 md:py-40"
        style={{ backgroundColor: "rgba(5,5,5,0.55)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div
              className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              CHAPTER I
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="text-[13vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.95] tracking-tight font-light mb-12 md:mb-20"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Thinking
            </h2>
          </Reveal>

          <div className="max-w-[680px]">
            <Reveal delay={160}>
              <p
                className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.85] max-w-[640px] mb-12 md:mb-16"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Every product decision is shaped by the way we see a problem. Over time, I've realized that the quality of my decisions depends less on having quick answers and more on asking better questions. These are the ideas I keep returning to whenever I explore a problem, conduct research, or make a decision.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <h3
                className="text-[28px] md:text-[40px] leading-[1.15] font-light italic text-white/90 mb-10 md:mb-14"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The Way I Think
              </h3>
            </Reveal>

            <div className="space-y-12 md:space-y-16">
              {thinkingBlocks.map((block, i) => (
                <Reveal key={block.title} delay={i * 80}>
                  <article className={i > 0 ? "pt-12 md:pt-16 border-t border-white/10" : ""}>
                    <h4
                      className="text-[26px] md:text-[34px] leading-[1.15] font-light text-white/90 mb-6"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {block.title}
                    </h4>
                    <p
                      className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.85] mb-8"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {block.body}
                    </p>
                    <div>
                      <div
                        className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        From my notebook
                      </div>
                      <p
                        className="text-[15px] md:text-[16px] font-light italic leading-[1.7] text-white/40"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        “{block.notebook}”
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={160}>
            <div className="mt-20 md:mt-28 pt-10 md:pt-14 border-t border-white/10 text-right max-w-[680px] ml-auto">
              <p
                className="text-[16px] md:text-[18px] text-white/60 font-light leading-[1.8] mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                These ideas only matter when they're tested.
              </p>
              <p
                className="text-[16px] md:text-[18px] text-white/60 font-light leading-[1.8] mb-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                The next chapter is where they became decisions.
              </p>
              <div
                className="text-[24px] md:text-[32px] text-white/30 font-light italic mb-10"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ↓
              </div>
              <a
                href="#work"
                className="inline-block text-[11px] tracking-[0.35em] uppercase text-white/75 border-b border-white/20 pb-1 hover:text-white hover:border-white/60 transition-all duration-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Chapter II — Selected Work
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SceneDivider />

      {/* 3. Selected Work */}
      <Section id="work" eyebrow="CHAPTER II" title="Selected Work">
        <div className="max-w-[860px]">
          <Reveal delay={80}>
            <p
              className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.85] max-w-[640px] mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Every project taught me something different. Some challenged my assumptions, some changed the way I approached research, and others reminded me that good product decisions begin long before the first solution.
            </p>
            <p
              className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.85] max-w-[640px] mb-20 md:mb-28"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              These chapters are not only about what I built.
              <br />
              They are about how I learned to think.
            </p>
          </Reveal>

          {/* Featured Chapter 01 — CraftRoots */}
          <Reveal delay={120}>
            <article className="relative border-t border-white/10 pt-14 md:pt-20">
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Featured Chapter 01
              </div>
              <h3
                className="text-[56px] md:text-[92px] lg:text-[108px] leading-[0.95] font-light mb-8 text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                CraftRoots
              </h3>
              <p
                className="text-[20px] md:text-[26px] leading-[1.35] font-light italic text-white/80 mb-10 max-w-[640px]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Turning a bypassed craft town into a bookable experience.
              </p>
              <p
                className="text-[15px] md:text-[17px] text-white/60 font-light leading-[1.85] mb-6 max-w-[620px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                CraftRoots is a product concept exploring how travellers could discover, trust, and participate in authentic artisan workshops — while helping artisans earn directly from their skills, not just finished products.
              </p>
              <p
                className="text-[13px] md:text-[14px] text-white/45 font-light leading-[1.7] mb-12 max-w-[620px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Recognized with the Promising Startup Award at CAUSE 2026.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-14 max-w-[720px]">
                <div>
                  <div
                    className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Role
                  </div>
                  <p
                    className="text-[14px] md:text-[15px] text-white/70 font-light leading-[1.7]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Product Strategy · User Research · MVP Definition · Storytelling
                  </p>
                </div>
                <div>
                  <div
                    className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Focus
                  </div>
                  <p
                    className="text-[14px] md:text-[15px] text-white/70 font-light leading-[1.7]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Marketplace Design · Artisan Economy · Experience Booking
                  </p>
                </div>
              </div>

              <a
                href="/work/craftroots"
                className="inline-block text-[11px] tracking-[0.4em] uppercase text-white/85 border-b border-white/25 pb-1 hover:text-white hover:border-white/70 transition-all duration-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Read Chapter →
              </a>
            </article>
          </Reveal>

          {/* Featured Chapter 02 — ThinkFloor */}
          <Reveal delay={160}>
            <article className="relative border-t border-white/10 pt-14 md:pt-20 mt-24 md:mt-32">
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Featured Chapter 02
              </div>
              <h3
                className="text-[56px] md:text-[92px] lg:text-[108px] leading-[0.95] font-light mb-8 text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ThinkFloor
              </h3>
              <p
                className="text-[20px] md:text-[26px] leading-[1.35] font-light italic text-white/80 mb-10 max-w-[640px]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Rethinking event sponsorship through live audience access.
              </p>
              <p
                className="text-[15px] md:text-[17px] text-white/60 font-light leading-[1.85] mb-12 max-w-[620px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                ThinkFloor is a B2B product concept exploring how event organizers can move beyond low-value sponsorships by helping companies test products, collect feedback, and interact directly with relevant live audiences.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-14 max-w-[720px]">
                <div>
                  <div
                    className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Role
                  </div>
                  <p
                    className="text-[14px] md:text-[15px] text-white/70 font-light leading-[1.7]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Value Proposition Design · User Research · Business Model Thinking · Product Strategy
                  </p>
                </div>
                <div>
                  <div
                    className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Focus
                  </div>
                  <p
                    className="text-[14px] md:text-[15px] text-white/70 font-light leading-[1.7]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    B2B Monetization · Event Economy · Product Validation · Audience Access
                  </p>
                </div>
              </div>

              <a
                href="/work/thinkfloor"
                className="inline-block text-[11px] tracking-[0.4em] uppercase text-white/85 border-b border-white/25 pb-1 hover:text-white hover:border-white/70 transition-all duration-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Read Chapter →
              </a>
            </article>
          </Reveal>

          {/* Featured Chapter 03 — ReEarth */}
          <Reveal delay={180}>
            <article className="relative border-t border-white/10 pt-14 md:pt-20 mt-24 md:mt-32">
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Featured Chapter 03
              </div>
              <h3
                className="text-[56px] md:text-[92px] lg:text-[108px] leading-[0.95] font-light mb-8 text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ReEarth
              </h3>
              <p
                className="text-[20px] md:text-[26px] leading-[1.35] font-light italic text-white/80 mb-10 max-w-[640px]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Making EPR compliance predictable for SMEs.
              </p>
              <p
                className="text-[15px] md:text-[17px] text-white/60 font-light leading-[1.85] mb-12 max-w-[620px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                ReEarth is a subscription-based compliance product concept for plastic-producing SMEs and D2C brands that struggle with unreliable recyclers, fake certificates, unpredictable pricing, and audit pressure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-14 max-w-[720px]">
                <div>
                  <div
                    className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Role
                  </div>
                  <p
                    className="text-[14px] md:text-[15px] text-white/70 font-light leading-[1.7]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Sustainability Research · Business Model Design · Compliance Research · Product Strategy
                  </p>
                </div>
                <div>
                  <div
                    className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Focus
                  </div>
                  <p
                    className="text-[14px] md:text-[15px] text-white/70 font-light leading-[1.7]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    EPR Compliance · Waste Traceability · Subscription Model · ESG Reporting
                  </p>
                </div>
              </div>

              <a
                href="/work/reearth"
                className="inline-block text-[11px] tracking-[0.4em] uppercase text-white/85 border-b border-white/25 pb-1 hover:text-white hover:border-white/70 transition-all duration-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Read Chapter →
              </a>
            </article>
          </Reveal>

          {/* Featured Chapter 04 — Subspace.money Product Teardown */}
          <Reveal delay={200}>
            <article className="relative border-t border-white/10 pt-14 md:pt-20 mt-24 md:mt-32">
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Featured Chapter 04
              </div>
              <h3
                className="text-[48px] md:text-[80px] lg:text-[96px] leading-[0.95] font-light mb-8 text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Subspace.money Product Teardown
              </h3>
              <p
                className="text-[20px] md:text-[26px] leading-[1.35] font-light italic text-white/80 mb-10 max-w-[640px]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Finding the gap between product promise and product reality.
              </p>
              <p
                className="text-[15px] md:text-[17px] text-white/60 font-light leading-[1.85] mb-12 max-w-[620px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                A product teardown based on 48 hours of cross-platform testing across iPhone, Android, and Web, identifying activation gaps, platform parity issues, UX failures, and strategic opportunities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-14 max-w-[720px]">
                <div>
                  <div
                    className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Role
                  </div>
                  <p
                    className="text-[14px] md:text-[15px] text-white/70 font-light leading-[1.7]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Product Analysis · UX Teardown · Competitive Research · Prioritization
                  </p>
                </div>
                <div>
                  <div
                    className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Focus
                  </div>
                  <p
                    className="text-[14px] md:text-[15px] text-white/70 font-light leading-[1.7]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Activation · Platform Parity · Subscription Management · RICE Prioritization
                  </p>
                </div>
              </div>

              <a
                href="/work/subspace-teardown"
                className="inline-block text-[11px] tracking-[0.4em] uppercase text-white/85 border-b border-white/25 pb-1 hover:text-white hover:border-white/70 transition-all duration-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Read Chapter →
              </a>
            </article>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-24 md:mt-32 pt-10 border-t border-white/5 text-[10px] tracking-[0.4em] uppercase text-white/25"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              More chapters coming soon
            </div>
          </Reveal>
        </div>
      </Section>


      <SceneDivider />

      {/* 4. Journey */}
      <Journey />

      <SceneDivider />

      {/* 5. Writing */}
      <Section id="writing" eyebrow="CHAPTER IV" title="Writing">
        <div className="space-y-12 md:space-y-16 max-w-[720px]">
          {writings.map((quote, i) => (
            <Reveal key={i} delay={i * 120}>
              <blockquote className="relative pl-6 md:pl-10 border-l border-white/15">
                <p
                  className="text-[22px] md:text-[30px] leading-[1.35] font-light text-white/85 italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  “{quote}”
                </p>
              </blockquote>
            </Reveal>
          ))}
          <Reveal delay={200}>
            <div className="pt-8">
              <a
                href="#"
                className="inline-block text-[11px] tracking-[0.35em] uppercase text-white/70 border-b border-white/20 pb-1 hover:text-white hover:border-white/60 transition-all duration-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Read more reflections →
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      <SceneDivider />

      {/* 5. Final CTA */}
      <section
        id="contact"
        className="relative w-full px-8 md:px-16 py-28 md:py-44"
        style={{ backgroundColor: "rgba(5,5,5,0.6)" }}
      >
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div
              className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              End Credits
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2
              className="text-[12vw] md:text-[6.5vw] leading-[1] tracking-tight font-light text-white mb-8 max-w-[820px]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Let's build something meaningful.
            </h2>
          </Reveal>
          <Reveal delay={280}>
            <p
              className="text-[15px] md:text-[17px] text-white/50 font-light leading-[1.8] max-w-[480px] mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Open for Product / Internship opportunities.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <a
                href="mailto:hello@example.com"
                className="text-[11px] tracking-[0.4em] uppercase text-black bg-white px-8 py-4 hover:bg-white/85 transition-all duration-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Contact Me
              </a>
              <a
                href="#"
                className="text-[11px] tracking-[0.4em] uppercase text-white/80 border-b border-white/20 pb-1 hover:text-white hover:border-white/60 transition-all duration-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
              >
                View Resume →
              </a>
            </div>
          </Reveal>
          <div
            className="mt-20 md:mt-24 pt-10 border-t border-white/5 flex justify-between items-center text-[10px] tracking-[0.4em] uppercase text-white/25"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>Asc. — 2026</span>
            <span>Fin.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
