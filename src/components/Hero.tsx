import portrait from "@/assets/anubhav-portrait.png";

const navItems = ["Thinking", "Work", "Journey", "Resume"];

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] overflow-hidden selection:bg-white selection:text-black">
      <div className="relative w-full max-w-[1600px] min-h-screen flex flex-col justify-between p-8 md:p-16">
        {/* Cinematic Navigation */}
        <nav
          className="relative z-50 flex justify-between items-center w-full reveal-soft"
          style={{ animationDelay: "0.1s", fontFamily: "'Inter', sans-serif" }}
        >
          <div
            className="text-white text-xl tracking-tighter font-bold"
            style={{ fontFamily: "'Syncopate', sans-serif" }}
          >
            A.
          </div>
          <ul className="hidden md:flex gap-12 text-[10px] tracking-[0.4em] uppercase text-white/40">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-white transition-colors duration-500 cursor-pointer"
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Composition Area */}
        <div className="relative flex-1 grid grid-cols-12 items-center py-16">
          {/* Typographic Block (Left) */}
          <div className="col-span-12 lg:col-span-10 z-20">
            <div className="relative">
              <p
                className="reveal-soft mb-6 text-[10px] tracking-[0.6em] uppercase text-white/40"
                style={{
                  animationDelay: "0.25s",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Understanding comes first. Everything else is execution.
              </p>

              <h1
                className="reveal-line font-bold text-[18vw] md:text-[14vw] leading-[0.8] tracking-[-0.08em] text-white"
                style={{
                  fontFamily: "'Syncopate', sans-serif",
                  animationDelay: "0.4s",
                }}
              >
                ANUBHAV
              </h1>

              <div className="mt-14 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-14">
                <a
                  href="#thinking"
                  className="reveal-soft group relative px-12 py-5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:bg-neutral-200 active:scale-[0.98]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    animationDelay: "1.1s",
                  }}
                >
                  Explore My Thinking
                </a>

                <a
                  href="#work"
                  className="reveal-soft text-[11px] font-medium uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors duration-500 border-b border-white/20 hover:border-white pb-1"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    animationDelay: "1.2s",
                  }}
                >
                  View Work
                </a>

                <div
                  className="reveal-soft max-w-[320px] space-y-4"
                  style={{ animationDelay: "1.35s" }}
                >
                  <div className="h-px w-12 bg-white/20" />
                  <p
                    className="text-white/50 text-[11px] leading-relaxed tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Product-minded builder exploring storytelling through digital
                    products. The best products are not built by jumping to
                    solutions — they begin with observation, curiosity, and clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Portrait Composition (Right / Bleeding) */}
          <div
            aria-hidden
            className="absolute bottom-[-10%] right-[-15%] w-[75%] md:w-[65%] h-[120%] z-10 pointer-events-none reveal-portrait"
          >
            <div className="relative w-full h-full">
              <img
                src={portrait}
                alt=""
                className="absolute inset-0 w-full h-full object-contain object-bottom grayscale contrast-125 brightness-90 opacity-90"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, black 22%, black 82%, transparent 100%), linear-gradient(to left, black 55%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to top, transparent 0%, black 22%, black 82%, transparent 100%), linear-gradient(to left, black 55%, transparent 100%)",
                  WebkitMaskComposite: "source-in",
                  maskComposite: "intersect",
                }}
                draggable={false}
              />

              {/* Depth Fog / Atmosphere */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-90" />
            </div>
          </div>
        </div>

        {/* Footer Accents */}
        <div
          className="relative z-20 flex justify-between items-end border-t border-white/5 pt-8 reveal-soft"
          style={{
            animationDelay: "1.5s",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <div className="flex flex-col gap-1">
            <span className="text-[9px] tracking-[0.6em] text-white/40 uppercase font-bold">
              Availability
            </span>
            <span className="text-[9px] tracking-[0.4em] text-white/20 uppercase">
              2026 · Open to Product Roles
            </span>
          </div>
          <div className="flex gap-6 items-center opacity-30">
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full animate-scroll-nudge" />
            </div>
            <span className="hidden md:inline text-[9px] tracking-[0.5em] text-white uppercase">
              Scroll to dive
            </span>
          </div>
        </div>

        {/* Global vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_100%)]"
        />
      </div>
    </div>
  );
};

export default Hero;
