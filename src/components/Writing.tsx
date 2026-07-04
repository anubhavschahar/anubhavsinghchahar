import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const serif = { fontFamily: "'Cormorant Garamond', serif" } as const;
const sans = { fontFamily: "'Inter', sans-serif" } as const;

type Reflection = {
  number: string;
  title: string;
  opening: string;
  body: string[];
  tag: string;
  excerpt: string;
};

const reflections: Reflection[] = [
  {
    number: "01",
    title: "Literature taught me attention.",
    tag: "Literature · Design · Attention",
    excerpt: "A good sentence earns the next one.\nA good interface does the same.",
    opening: "A good sentence earns the next one.\nA good interface does the same.",
    body: [
      "Reading literature taught me that attention is never automatic. A writer earns it line by line. If one sentence feels unnecessary, the reader quietly begins to leave.",
      "I think products work the same way.",
      "A user does not stay because a product has many features. They stay because each step gives them enough clarity, confidence, or curiosity to continue.",
      "A good onboarding screen earns the next action.",
      "A good empty state earns the first click.",
      "A good product flow earns trust before asking for commitment.",
      "That is why I care about hierarchy, pacing, and small details. They decide whether someone keeps moving or drops off silently.",
      "Literature made me notice that attention is fragile.",
      "Product design taught me that attention has to be respected.",
    ],
  },
  {
    number: "02",
    title: "Reading changed how I understand users.",
    tag: "Reading · Empathy · Research",
    excerpt:
      "Books taught me that people rarely say everything directly.\nSometimes the real story lives between the lines.",
    opening:
      "Books taught me that people rarely say everything directly.\nSometimes the real story lives between the lines.",
    body: [
      "When I read, I often find that the most important part of a character is not what they say. It is what they avoid, repeat, hide, or struggle to explain.",
      "User research feels similar.",
      "People do not always describe the root problem. They describe the symptom they are experiencing. They say the app is confusing, but maybe they mean they do not trust it. They say they need a feature, but maybe they need reassurance, speed, or control.",
      "Reading made me more patient with people.",
      "It taught me to listen for patterns, pauses, contradictions, and small emotional cues.",
      "That is why I do not see research as just collecting answers.",
      "I see it as learning how to read people with care.",
    ],
  },
  {
    number: "03",
    title: "The product begins before the screen.",
    tag: "Product Thinking · Observation",
    excerpt:
      "Most product problems do not begin in the interface.\nThey begin in the assumptions people make before reaching it.",
    opening:
      "Most product problems do not begin in the interface.\nThey begin in the assumptions people make before reaching it.",
    body: [
      "A screen is usually the visible part of a deeper problem.",
      "Before a user taps a button, they already carry expectations, doubts, habits, and previous experiences. Before a business asks for a feature, there is usually a goal, pressure, or constraint behind it.",
      "That is why I try not to start with the interface too quickly.",
      "I like asking what happened before the screen.",
      "Why did the user arrive here?",
      "What are they trying to avoid?",
      "What do they already believe?",
      "What would make them trust the next step?",
      "Good product thinking begins before design.",
      "The screen is only where the problem becomes visible.",
      "The real work is understanding what shaped that moment.",
    ],
  },
  {
    number: "04",
    title: "Every project leaves a question.",
    tag: "Reflection · Learning",
    excerpt:
      "The best work does not end with a solution.\nIt ends with a better question for the next problem.",
    opening:
      "The best work does not end with a solution.\nIt ends with a better question for the next problem.",
    body: [
      "Every project I have worked on has taught me something I did not expect.",
      "CraftRoots taught me that discovery is not enough unless trust exists.",
      "ThinkFloor taught me that value often already exists inside a system, but needs structure.",
      "ReEarth taught me that in complex markets, the real product is certainty.",
      "Subspace taught me that product promises break when the real journey is ignored.",
      "That is why I do not see projects as finished case studies.",
      "I see them as records of how my thinking changed.",
      "A solution may close one problem, but it usually opens a better question.",
      "And maybe that is the point of learning product management.",
      "Not to always have the fastest answer,",
      "but to keep improving the quality of the questions.",
    ],
  },
];

const ReflectionModal = ({
  reflection,
  onClose,
}: {
  reflection: Reflection;
  onClose: () => void;
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto animate-in fade-in duration-500"
      style={{ backgroundColor: "rgba(5,5,5,0.96)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full min-h-screen px-6 md:px-16 py-10 md:py-16 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="max-w-[860px] mx-auto flex items-center justify-between mb-16 md:mb-24">
          <button
            onClick={onClose}
            className="text-[11px] tracking-[0.35em] uppercase text-white/60 hover:text-white transition-colors duration-300"
            style={sans}
          >
            ← Back
          </button>
          <button
            onClick={onClose}
            aria-label="Close reflection"
            className="text-white/50 hover:text-white transition-colors duration-300 text-xl leading-none"
            style={sans}
          >
            ✕
          </button>
        </div>

        <article className="max-w-[760px] mx-auto pb-24 md:pb-40">
          <div
            className="text-[10px] tracking-[0.5em] uppercase text-white/35 mb-8"
            style={sans}
          >
            {reflection.number} · Margin Note
          </div>
          <div
            className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-10"
            style={sans}
          >
            {reflection.tag}
          </div>

          <h1
            className="text-[36px] md:text-[60px] leading-[1.1] font-light italic text-white/95 tracking-tight mb-14 md:mb-20"
            style={serif}
          >
            {reflection.title}
          </h1>

          <blockquote className="border-l border-white/25 pl-6 md:pl-10 mb-16 md:mb-24">
            <p
              className="text-[22px] md:text-[32px] leading-[1.35] font-light italic text-white/85 whitespace-pre-line"
              style={serif}
            >
              {reflection.opening}
            </p>
          </blockquote>

          <div className="space-y-7 md:space-y-8">
            {reflection.body.map((p, i) => (
              <p
                key={i}
                className="text-[16px] md:text-[18px] text-white/70 font-light leading-[1.95]"
                style={sans}
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-20 md:mt-28 pt-10 border-t border-white/10">
            <button
              onClick={onClose}
              className="text-[11px] tracking-[0.35em] uppercase text-white/70 border-b border-white/20 pb-1 hover:text-white hover:border-white/60 transition-all duration-500"
              style={sans}
            >
              ← Back to Writing
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

const Writing = () => {
  const [active, setActive] = useState<Reflection | null>(null);

  return (
    <section
      id="writing"
      className="relative w-full px-8 md:px-16 py-24 md:py-40 text-white overflow-hidden isolate"
      style={{ backgroundColor: "#080808" }}
    >
      {/* Atmospheric literary gradient — fades in/out at section edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(circle at 20% 18%, rgba(120, 70, 255, 0.22), transparent 38%), radial-gradient(circle at 82% 28%, rgba(255, 170, 80, 0.16), transparent 40%), radial-gradient(circle at 30% 78%, rgba(180, 40, 90, 0.16), transparent 42%), radial-gradient(circle at 78% 82%, rgba(90, 60, 160, 0.18), transparent 40%), radial-gradient(circle at 50% 50%, rgba(240, 220, 190, 0.05), transparent 55%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      />
      {/* Soft dark veil for readability */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundColor: "rgba(8,8,10,0.35)" }}
      />
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
            {reflections.map((note, i) => (
              <Reveal key={note.title} delay={i * 80}>
                <button
                  type="button"
                  onClick={() => setActive(note)}
                  className="group block w-full text-left p-6 md:p-8 border border-white/10 hover:border-white/25 transition-all duration-500 h-full"
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
                </button>
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
              <a
                href="https://www.instagram.com/pdhalikhajaat/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-white/75 border border-white/20 px-5 py-2.5 hover:text-white hover:border-white/60 hover:bg-white/5 transition-all duration-500 group"
                style={sans}
              >
                <span>Instagram</span>
                <svg
                  className="w-3.5 h-3.5 text-white/50 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 16"
                  />
                </svg>
              </a>
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
              href="/#contact"
              className="inline-block text-[11px] tracking-[0.35em] uppercase text-white/75 border-b border-white/20 pb-1 hover:text-white hover:border-white/60 transition-all duration-500"
              style={sans}
            >
              Contact Me →
            </a>
          </div>
        </Reveal>
      </div>

      {active && (
        <ReflectionModal reflection={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
};

export default Writing;
