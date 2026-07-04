import portraitAsset from "@/assets/anubhav-photo-2.jpeg.asset.json";
const portrait = portraitAsset.url;

const navItems = [
  { label: "Thinking", href: "#thinking" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Resume", href: "#resume" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#F8FAFC] text-[#0F172A] overflow-hidden selection:bg-[#2563EB] selection:text-white">
      <div className="relative mx-auto w-full max-w-[1440px] min-h-screen flex flex-col px-6 md:px-12 lg:px-16 pt-8 md:pt-10 pb-10">
        {/* Navigation */}
        <nav
          className="relative z-50 flex items-center justify-between w-full reveal-soft"
          style={{ animationDelay: "0.1s", fontFamily: "'Inter', sans-serif" }}
        >
          <a
            href="#top"
            className="text-[13px] font-semibold tracking-[0.28em] text-[#0F172A]"
          >
            ANUBHAV SINGH CHAHAR
          </a>
          <ul className="hidden md:flex items-center gap-10 text-[13px] text-[#0F172A]/70">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group relative transition-colors duration-300 hover:text-[#0F172A]"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#0F172A] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#0F172A] text-[#F8FAFC] text-[12px] font-medium tracking-[0.08em] rounded-full hover:bg-[#2563EB] transition-colors duration-500"
          >
            Get in Touch
          </a>
        </nav>

        {/* Main composition */}
        <div className="relative flex-1 grid grid-cols-12 gap-8 items-center pt-16 md:pt-20 lg:pt-24">
          {/* Left: Editorial text */}
          <div className="col-span-12 lg:col-span-8 z-20">
            {/* Chapter label */}
            <p
              className="reveal-soft mb-10 md:mb-12 text-[11px] tracking-[0.42em] uppercase text-[#0F172A]/60"
              style={{
                animationDelay: "0.35s",
                fontFamily:
                  "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
              }}
            >
              Product Thinking
            </p>

            {/* Headline — line by line */}
            <h1 className="editorial-display text-[#0F172A] text-[10.5vw] md:text-[7.2vw] lg:text-[5.6vw] leading-[1.02]">
              <span
                className="reveal-line block"
                style={{ animationDelay: "0.55s" }}
              >
                Every product begins
              </span>
              <span
                className="reveal-line block"
                style={{ animationDelay: "0.75s" }}
              >
                with a question.
              </span>
              <span
                className="reveal-line block italic text-[#0F172A]/80"
                style={{ animationDelay: "0.95s" }}
              >
                Mine always
              </span>
              <span
                className="reveal-line block italic"
                style={{ animationDelay: "1.15s", color: "#2563EB" }}
              >
                starts with people.
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p
              className="reveal-soft mt-10 md:mt-12 max-w-[660px] text-[16px] md:text-[17px] leading-[1.75] text-[#0F172A]/75 font-light"
              style={{
                animationDelay: "1.5s",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              I don't believe the best products begin with features. I think
              they begin with curiosity. Every project in this portfolio
              started the same way — with a question, a conversation, and a
              genuine attempt to understand people before building for them.
            </p>

            {/* Buttons */}
            <div
              className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5"
            >
              <a
                href="#thinking"
                className="reveal-soft inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white text-[13px] font-medium tracking-[0.04em] rounded-full transition-all duration-500 hover:bg-[#1d4ed8] hover:-translate-y-[1px] active:translate-y-0"
                style={{
                  animationDelay: "1.75s",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Start Reading
              </a>
              <a
                href="#resume"
                className="reveal-soft inline-flex items-center justify-center px-8 py-4 border border-[#0F172A]/25 text-[#0F172A] text-[13px] font-medium tracking-[0.04em] rounded-full transition-all duration-500 hover:border-[#0F172A] hover:bg-[#0F172A]/[0.03]"
                style={{
                  animationDelay: "1.9s",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Download Résumé
              </a>
            </div>
          </div>

          {/* Right: Portrait — blended into background */}
          <div className="hidden lg:block lg:col-span-4 relative h-full">
            <div
              className="reveal-portrait absolute inset-0 flex items-end justify-center pointer-events-none"
              style={{ animationDelay: "1.2s" }}
            >
              <img
                src={portrait}
                alt="Portrait of Anubhav"
                className="w-full h-auto max-h-[82vh] object-contain object-bottom select-none"
                style={{
                  filter: "grayscale(100%) contrast(1.02) brightness(1.04)",
                  mixBlendMode: "multiply",
                  opacity: 0.92,
                  WebkitMaskImage:
                    "radial-gradient(ellipse 70% 78% at 50% 55%, black 40%, rgba(0,0,0,0.55) 65%, transparent 92%)",
                  maskImage:
                    "radial-gradient(ellipse 70% 78% at 50% 55%, black 40%, rgba(0,0,0,0.55) 65%, transparent 92%)",
                }}
                draggable={false}
              />
            </div>
            {/* Soft light wash to fuse portrait edges into page bg */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 70% at 50% 60%, rgba(248,250,252,0) 45%, rgba(248,250,252,0.55) 75%, rgba(248,250,252,0.95) 100%)",
              }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="reveal-soft relative z-20 mt-12 flex flex-col items-center gap-3"
          style={{
            animationDelay: "2.1s",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <span className="text-[11px] tracking-[0.32em] uppercase text-[#0F172A]/45">
            Scroll to begin the first chapter
          </span>
          <span className="text-[#0F172A]/45 animate-scroll-nudge text-sm">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
