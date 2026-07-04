import Reveal from "./Reveal";

const serif = { fontFamily: "'Cormorant Garamond', serif" } as const;
const sans = { fontFamily: "'Inter', sans-serif" } as const;

const marginNotes = [
  {
    title: "Literature taught me attention.",
    excerpt: "A good sentence earns the next one.\nA good interface does the same.",
    tag: "Literature · Design · Attention",
    href: "#writing-attention",
  },
  {
    title: "Reading changed how I understand users.",
    excerpt:
      "Books taught me that people rarely say everything directly.\nSometimes the real story lives between the lines.",
    tag: "Reading · Empathy · Research",
    href: "#writing-users",
  },
  {
    title: "The product begins before the screen.",
    excerpt:
      "Most product problems do not begin in the interface.\nThey begin in the assumptions people make before reaching it.",
    tag: "Product Thinking · Observation",
    href: "#writing-before-screen",
  },
  {
    title: "Every project leaves a question.",
    excerpt:
      "The best work does not end with a solution.\nIt ends with a better question for the next problem.",
    tag: "Reflection · Learning",
    href: "#writing-questions",
  },
];

const Writing = () => {
  return (
    <section
      id="writing"
      className="relative w-full px-8 md:px-16 py-24 md:py-40 text-white"
      style={{ backgroundColor: "rgba(5,5,5,0.55)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <Reveal>
          <div
            className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-8"
            style={sans}
          >
            CHAPTER IV
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="text-[13vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.95] tracking-tight font-light italic mb-12 md:mb-20"
            style={serif}
          >
            Writing
          </h2>
        </Reveal>

        <div className="max-w-[720px] mb-28 md:mb-40">
          <Reveal delay={160}>
            <p
              className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.85] mb-6"
              style={sans}
            >
              Some of my thinking does not begin inside products.
            </p>
            <p
              className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.85] mb-6"
              style={sans}
            >
              It begins in books, poems, conversations, and small observations that stay with me longer than expected.
            </p>
            <p
              className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.85]"
              style={sans}
            >
              Writing helps me slow down, question what I understand, and notice the human patterns that often shape better products.
            </p>
          </Reveal>
        </div>

        {/* 01 — Core Idea */}
        <div className="mb-28 md:mb-40">
          <Reveal>
            <blockquote className="max-w-[920px]">
              <p
                className="text-[32px] md:text-[52px] lg:text-[64px] leading-[1.1] font-light italic text-white/90 tracking-tight"
                style={serif}
              >
                Writing is where I slow down enough to notice what I usually miss.
              </p>
            </blockquote>
          </Reveal>
        </div>

        {/* 02 — Margin Notes */}
        <div className="mb-28 md:mb-40">
          <Reveal>
            <div className="flex items-baseline gap-6 mb-14 md:mb-20 border-t border-white/10 pt-10">
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/30"
                style={sans}
              >
                02
              </div>
              <h3
                className="text-[36px] md:text-[52px] leading-[1.05] font-light italic text-white/90"
                style={serif}
              >
                Margin Notes
              </h3>
            </div>
          </Reveal>

          <div className="max-w-[720px] mb-16 md:mb-24">
            <Reveal delay={100}>
              <p
                className="text-[16px] md:text-[18px] text-white/60 font-light leading-[1.9]"
                style={sans}
              >
                These are not articles written to sound finished.
              </p>
              <p
                className="text-[16px] md:text-[18px] text-white/60 font-light leading-[1.9] mt-4"
                style={sans}
              >
                They are small reflections, notes, and observations that help me understand people, products, and myself a little better.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {marginNotes.map((note, i) => (
              <Reveal key={note.title} delay={i * 80}>
                <a
                  href={note.href}
                  className="group block p-6 md:p-8 border border-white/10 hover:border-white/25 transition-all duration-500 h-full"
                >
                  <div
                    className="text-[10px] tracking-[0.3em] uppercase text-white/35 mb-6"
                    style={sans}
                  >
                    {note.tag}
                  </div>
                  <h4
                    className="text-[24px] md:text-[30px] leading-[1.15] font-light text-white/90 mb-6 group-hover:text-white transition-colors duration-500"
                    style={serif}
                  >
                    {note.title}
                  </h4>
                  <p
                    className="text-[14px] md:text-[15px] text-white/50 font-light leading-[1.85] mb-8 whitespace-pre-line"
                    style={sans}
                  >
                    {note.excerpt}
                  </p>
                  <span
                    className="inline-block text-[11px] tracking-[0.35em] uppercase text-white/60 group-hover:text-white/90 border-b border-white/15 group-hover:border-white/50 pb-1 transition-all duration-500"
                    style={sans}
                  >
                    Read Reflection →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 03 — padhalikhajaat */}
        <div className="mb-28 md:mb-40">
          <Reveal>
            <div className="flex items-baseline gap-6 mb-14 md:mb-20 border-t border-white/10 pt-10">
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/30"
                style={sans}
              >
                03
              </div>
              <h3
                className="text-[36px] md:text-[52px] leading-[1.05] font-light italic text-white/90"
                style={serif}
              >
                padhalikhajaat
              </h3>
            </div>
          </Reveal>

          <div className="max-w-[720px]">
            <Reveal delay={100}>
              <p
                className="text-[16px] md:text-[18px] text-white/60 font-light leading-[1.9] mb-10"
                style={sans}
              >
                I also write and reflect on literature through padhalikhajaat — my reading journal where I explore poems, books, and the thoughts they leave behind.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
                <a
                  href="#padhalikhajaat"
                  className="inline-block text-[11px] tracking-[0.35em] uppercase text-white/75 border-b border-white/20 pb-1 hover:text-white hover:border-white/60 transition-all duration-500"
                  style={sans}
                >
                  Visit padhalikhajaat →
                </a>
                <span
                  className="text-[11px] tracking-[0.25em] uppercase text-white/30"
                  style={sans}
                >
                  Instagram / profile link placeholder
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 04 — Closing Reflection */}
        <div className="mb-28 md:mb-40">
          <Reveal>
            <blockquote className="max-w-[860px]">
              <p
                className="text-[28px] md:text-[44px] lg:text-[54px] leading-[1.15] font-light italic text-white/90 tracking-tight"
                style={serif}
              >
                I do not write because I have everything figured out.
                <br />
                <span className="text-white/55">I write because I am still learning how to see clearly.</span>
              </p>
            </blockquote>
          </Reveal>
        </div>

        {/* Transition to End Credits */}
        <Reveal delay={120}>
          <div className="pt-10 md:pt-14 border-t border-white/10 max-w-[720px]">
            <p
              className="text-[16px] md:text-[18px] text-white/60 font-light leading-[1.8] mb-4"
              style={sans}
            >
              You have now read the chapters that shape how I think, build, learn, and reflect.
            </p>
            <p
              className="text-[16px] md:text-[18px] text-white/60 font-light leading-[1.8] mb-4"
              style={sans}
            >
              The next page is simple.
            </p>
            <p
              className="text-[22px] md:text-[30px] font-light italic text-white/85 mb-10"
              style={serif}
            >
              Let’s build something meaningful.
            </p>
            <a
              href="#contact"
              className="inline-block text-[11px] tracking-[0.35em] uppercase text-white/75 border-b border-white/20 pb-1 hover:text-white hover:border-white/60 transition-all duration-500"
              style={sans}
            >
              Contact Me →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Writing;
