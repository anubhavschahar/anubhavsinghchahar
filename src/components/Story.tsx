const thinkingEntries = [
  {
    title: "Why I care about product thinking",
    body:
      "Every product is a conversation with a stranger. Before I write a line of code, I want to know who is on the other side — what they fear, what they postpone, what they wish someone had already built for them. Features are cheap. Understanding is not.",
  },
  {
    title: "What literature taught me about design",
    body:
      "Novels taught me that attention is the most fragile thing a person can offer. A good sentence earns the next one. A good interface earns the next tap. Storytelling and design share the same discipline — respect for the reader, the user, the human still deciding whether to stay.",
  },
  {
    title: "My approach to building products",
    body:
      "I start with the question, not the solution. I sketch the smallest version of the truth I am trying to prove, and then I let the product argue back. The best builds I have shipped began as reluctant paragraphs before they ever became pixels.",
  },
  {
    title: "On staying a beginner",
    body:
      "I try to remember what it felt like the first time I opened a terminal, the first time a poem broke me open. Curiosity is a muscle. The moment I feel certain, I know I have stopped looking.",
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
    className="relative w-full px-8 md:px-16 py-32 md:py-48 bg-[#050505] text-white"
  >
    <div className="max-w-[1200px] mx-auto">
      {eyebrow && (
        <div
          className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className="text-[13vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.95] tracking-tight font-light mb-20 md:mb-32"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
      >
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const Story = () => {
  return (
    <div className="bg-[#050505] text-white">
      {/* 1. Start Reading — hero transition */}
      <section className="relative w-full px-8 md:px-16 py-40 md:py-56 bg-[#050505]">
        <div className="max-w-[900px] mx-auto text-center">
          <div
            className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Chapter I
          </div>
          <h2
            className="text-[10vw] md:text-[5.5vw] leading-[1] tracking-tight font-light text-white/90"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Start Reading
          </h2>
          <p
            className="mt-10 text-[15px] md:text-[17px] text-white/50 font-light leading-[1.8] max-w-[540px] mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Not everything I build starts with code. Some begin with observation.
          </p>
        </div>
      </section>

      {/* 2. Thinking */}
      <Section id="thinking" eyebrow="Chapter II" title="Thinking">
        <div className="space-y-24 md:space-y-32 max-w-[720px]">
          {thinkingEntries.map((entry, i) => (
            <article key={entry.title} className="group">
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/25 mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className="text-[28px] md:text-[36px] leading-[1.2] font-light mb-6 text-white/90"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {entry.title}
              </h3>
              <p
                className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.85]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {entry.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* 3. Work I've Explored */}
      <Section id="work" eyebrow="Chapter III" title="Work I've Explored">
        <div className="space-y-28 md:space-y-40 max-w-[860px]">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={i % 2 === 1 ? "md:pl-32" : ""}
            >
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
          ))}
        </div>
      </Section>

      {/* 4. Writing */}
      <Section id="writing" eyebrow="Chapter IV" title="Writing">
        <div className="space-y-20 md:space-y-28 max-w-[720px]">
          {writings.map((quote, i) => (
            <blockquote
              key={i}
              className="relative pl-6 md:pl-10 border-l border-white/15"
            >
              <p
                className="text-[22px] md:text-[30px] leading-[1.35] font-light text-white/85 italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                “{quote}”
              </p>
            </blockquote>
          ))}
          <div className="pt-8">
            <a
              href="#"
              className="inline-block text-[11px] tracking-[0.35em] uppercase text-white/70 border-b border-white/20 pb-1 hover:text-white hover:border-white/60 transition-all duration-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Read more reflections →
            </a>
          </div>
        </div>
      </Section>

      {/* 5. Final CTA */}
      <section
        id="contact"
        className="relative w-full px-8 md:px-16 py-40 md:py-64 bg-[#050505]"
      >
        <div className="max-w-[900px] mx-auto">
          <div
            className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            End Credits
          </div>
          <h2
            className="text-[12vw] md:text-[6.5vw] leading-[1] tracking-tight font-light text-white mb-10 max-w-[820px]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Let's build something meaningful.
          </h2>
          <p
            className="text-[15px] md:text-[17px] text-white/50 font-light leading-[1.8] max-w-[480px] mb-16"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Open for Product / Internship opportunities.
          </p>
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
          <div className="mt-40 pt-10 border-t border-white/5 flex justify-between items-center text-[10px] tracking-[0.4em] uppercase text-white/25"
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
