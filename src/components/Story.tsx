import Reveal from "./Reveal";

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

const projects = [
  {
    title: "Quiet Ledger",
    insight: "A journaling tool for founders who think in questions, not tasks.",
    impact:
      "Taught me that structure is a form of empathy — the right prompt is worth more than a hundred features.",
  },
  {
    title: "Marginalia",
    insight: "A reading companion that turns highlights into a living index of your own mind.",
    impact:
      "Reminded me that the most personal products are the ones that refuse to perform for anyone else.",
  },
  {
    title: "Slowmail",
    insight: "An email client designed around intention instead of inbox count.",
    impact:
      "Showed me how much of modern software is anxiety in a nice font — and how much room there is to build the opposite.",
  },
];

const writings = [
  "Poems are not finished when written. They are finished when read.",
  "The interface is the second draft of the intention.",
  "A product without a point of view is just a form with better spacing.",
];

// Subtle gradient overlay between scenes — creates depth without moving the fixed background.
const SceneDivider = () => (
  <div
    aria-hidden
    className="pointer-events-none w-full h-56 md:h-72"
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
    className="relative w-full px-8 md:px-16 py-40 md:py-64"
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
          className="text-[13vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.95] tracking-tight font-light mb-20 md:mb-32"
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
        className="relative w-full px-8 md:px-16 py-[10.8rem] md:py-[16.2rem]"
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
              <br />
              This is a record of how I'm learning to build products that matter.
            </p>
          </Reveal>
        </div>
      </section>

      <SceneDivider />

      {/* 2. Thinking */}
      <section
        id="thinking"
        className="relative w-full px-8 md:px-16 py-40 md:py-64"
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
              className="text-[13vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.95] tracking-tight font-light mb-20 md:mb-32"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Thinking
            </h2>
          </Reveal>

          <div className="max-w-[680px]">
            <Reveal delay={160}>
              <p
                className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.85] max-w-[640px] mb-20 md:mb-28"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Every product decision is shaped by the way we see a problem. Over time, I've realized that the quality of my decisions depends less on having quick answers and more on asking better questions. These are the ideas I keep returning to whenever I explore a problem, conduct research, or make a decision.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <h3
                className="text-[28px] md:text-[40px] leading-[1.15] font-light italic text-white/90 mb-16 md:mb-24"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The Way I Think
              </h3>
            </Reveal>

            <div className="space-y-16 md:space-y-24">
              {thinkingBlocks.map((block, i) => (
                <Reveal key={block.title} delay={i * 80}>
                  <article className={i > 0 ? "pt-16 md:pt-20 border-t border-white/10" : ""}>
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

            <Reveal delay={160}>
              <div className="mt-32 md:mt-48 pt-16 md:pt-24 border-t border-white/10 text-center">
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
        </div>
      </section>

      <SceneDivider />

      {/* 3. Work I've Explored */}
      <Section id="work" eyebrow="CHAPTER II" title="Work I've Explored">
        <div className="space-y-28 md:space-y-40 max-w-[860px]">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className={i % 2 === 1 ? "md:pl-32" : ""}>
                <div
                  className="text-[10px] tracking-[0.4em] uppercase text-white/25 mb-5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {`Ch. ${String(i + 1).padStart(2, "0")}`}
                </div>
                <h3
                  className="text-[44px] md:text-[68px] leading-[1] font-light mb-6 text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[16px] md:text-[19px] text-white/70 font-light leading-[1.6] mb-3 max-w-[560px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {p.insight}
                </p>
                <p
                  className="text-[13px] md:text-[14px] text-white/40 font-light leading-[1.7] italic mb-8 max-w-[520px]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {p.impact}
                </p>
                <a
                  href="#"
                  className="inline-block text-[11px] tracking-[0.35em] uppercase text-white/80 border-b border-white/20 pb-1 hover:text-white hover:border-white/60 transition-all duration-500"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  View Case Study →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <SceneDivider />

      {/* 4. Writing */}
      <Section id="writing" eyebrow="CHAPTER III" title="Writing">
        <div className="space-y-20 md:space-y-28 max-w-[720px]">
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
        className="relative w-full px-8 md:px-16 py-48 md:py-72"
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
              className="text-[12vw] md:text-[6.5vw] leading-[1] tracking-tight font-light text-white mb-10 max-w-[820px]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Let's build something meaningful.
            </h2>
          </Reveal>
          <Reveal delay={280}>
            <p
              className="text-[15px] md:text-[17px] text-white/50 font-light leading-[1.8] max-w-[480px] mb-16"
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
            className="mt-40 pt-10 border-t border-white/5 flex justify-between items-center text-[10px] tracking-[0.4em] uppercase text-white/25"
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
