import portraitCutout from "@/assets/anubhav-portrait-cutout.png";

const navItems = [
  { label: "Thinking", href: "#thinking" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Resume", href: "#resume" },
];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#F8FAFC",
        color: "#0F172A",
      }}
    >
      {/* faint editorial rule at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#0F172A]/10" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-8 md:px-16">
        {/* Navigation */}
        <nav
          className="reveal-soft flex items-center justify-between pt-8 md:pt-10"
          style={{ animationDelay: "0.05s", fontFamily: "'Inter', sans-serif" }}
        >
          <a
            href="#top"
            className="text-[13px] font-semibold tracking-[0.32em] text-[#0F172A]"
          >
            ANUBHAV
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[13px] font-medium text-[#0F172A]/60 transition-colors duration-500 hover:text-[#0F172A]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#0F172A] px-5 py-2.5 text-[12px] font-medium tracking-[0.02em] text-[#F8FAFC] transition-colors duration-500 hover:bg-[#2563EB]"
          >
            Get in Touch
          </a>
        </nav>

        {/* Main editorial spread */}
        <div className="relative grid flex-1 grid-cols-12 items-center gap-8 py-16 md:py-24">
          {/* Left: type */}
          <div className="relative z-20 col-span-12 lg:col-span-7">
            {/* Chapter label */}
            <p
              className="reveal-soft mb-10 text-[11px] uppercase tracking-[0.42em] text-[#2563EB]"
              style={{
                fontFamily:
                  "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
                animationDelay: "0.25s",
              }}
            >
              <span className="mr-4 text-[#0F172A]/40">— 01</span>
              Product Thinking
            </p>

            {/* Headline — line by line reveal */}
            <h1
              className="editorial-display text-[#0F172A] text-[13vw] leading-[0.98] md:text-[8.4vw] lg:text-[7.2vw]"
              style={{ letterSpacing: "-0.035em" }}
            >
              <span
                className="reveal-line block"
                style={{ animationDelay: "0.45s" }}
              >
                Every product begins
              </span>
              <span
                className="reveal-line block"
                style={{ animationDelay: "0.7s" }}
              >
                with a{" "}
                <em
                  className="italic"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: "#2563EB",
                    fontVariationSettings: '"opsz" 144, "SOFT" 100',
                  }}
                >
                  question
                </em>
                .
              </span>
              <span
                className="reveal-line block"
                style={{ animationDelay: "0.95s" }}
              >
                Mine always
              </span>
              <span
                className="reveal-line block"
                style={{ animationDelay: "1.2s" }}
              >
                starts with{" "}
                <em
                  className="italic"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: "#2563EB",
                    fontVariationSettings: '"opsz" 144, "SOFT" 100',
                  }}
                >
                  people
                </em>
                .
              </span>
            </h1>

            {/* Supporting copy */}
            <p
              className="reveal-soft mt-12 max-w-[660px] text-[16px] leading-[1.75] text-[#0F172A]/70 md:text-[17px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                animationDelay: "1.5s",
              }}
            >
              I don&apos;t believe the best products begin with features. I
              think they begin with curiosity. Every project in this portfolio
              started the same way — with a question, a conversation, and a
              genuine attempt to understand people before building for them.
            </p>

            {/* Buttons */}
            <div
              className="reveal-soft mt-12 flex flex-wrap items-center gap-5"
              style={{ animationDelay: "1.75s" }}
            >
              <a
                href="#thinking"
                className="group inline-flex items-center gap-3 rounded-full bg-[#2563EB] px-8 py-4 text-[13px] font-medium tracking-[0.02em] text-white transition-all duration-500 hover:bg-[#1d4ed8]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Start Reading
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#resume"
                className="inline-flex items-center gap-3 rounded-full border border-[#0F172A]/20 px-8 py-4 text-[13px] font-medium tracking-[0.02em] text-[#0F172A] transition-all duration-500 hover:border-[#0F172A]/60 hover:bg-[#0F172A]/[0.03]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Download Résumé
              </a>
            </div>
          </div>

          {/* Right: portrait — integrated, no card */}
          <div className="relative col-span-12 lg:col-span-5">
            <div
              className="reveal-portrait relative mx-auto w-[78%] max-w-[520px] lg:mx-0 lg:ml-auto lg:w-full"
              style={{ animationDelay: "1.0s" }}
            >
              <img
                src={portraitCutout}
                alt="Portrait of Anubhav"
                className="relative z-10 h-auto w-full select-none"
                draggable={false}
                style={{
                  filter:
                    "drop-shadow(0 30px 40px rgba(15, 23, 42, 0.08))",
                }}
              />
              {/* very faint editorial mark behind portrait */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-6 top-8 text-[10px] uppercase tracking-[0.42em] text-[#0F172A]/25"
                style={{
                  fontFamily:
                    "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
                  writingMode: "vertical-rl",
                }}
              >
                Portrait · 2026
              </div>
            </div>
          </div>
        </div>

        {/* Footer: scroll indicator */}
        <div
          className="reveal-soft flex items-center justify-between border-t border-[#0F172A]/10 py-8"
          style={{
            animationDelay: "2.0s",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <span
            className="text-[11px] uppercase tracking-[0.42em] text-[#0F172A]/50"
            style={{
              fontFamily:
                "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
            }}
          >
            Available · 2026
          </span>

          <a
            href="#thinking"
            className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.36em] text-[#0F172A]/60 transition-colors duration-500 hover:text-[#0F172A]"
          >
            Scroll to begin the first chapter
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#0F172A]/25 transition-colors duration-500 group-hover:border-[#0F172A]/60">
              <span className="animate-scroll-nudge text-[#0F172A]/70">↓</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
