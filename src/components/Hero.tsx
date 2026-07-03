import portraitAsset from "@/assets/anubhav-photo.jpeg.asset.json";
const portrait = portraitAsset.url;

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
            Asc.
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
          <div className="col-span-12 lg:col-span-8 z-20">
            <div className="relative">
              <p
                className="reveal-soft mb-8 text-[12px] md:text-[13px] tracking-[0.5em] uppercase text-white/60"
                style={{
                  animationDelay: "0.25s",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                UNDERSTANDING&nbsp;
                <br />
                COMES FIRST.
                <br />
                EVERYTHING ELSE IS EXECUTION.
              </p>

              <h1
                className="reveal-line font-bold text-[18vw] md:text-[15vw] lg:text-[13vw] leading-[0.82] tracking-[-0.09em] text-white"
                style={{
                  fontFamily: "'Syncopate', sans-serif",
                  animationDelay: "0.4s",
                }}
              >
                ANUBHAV
              </h1>

              <p
                className="reveal-soft mt-10 max-w-xl text-[15px] md:text-[17px] leading-[1.55] text-white/80 font-light"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  animationDelay: "1.0s",
                }}
              >
                Product-minded builder exploring storytelling through digital
                products.
              </p>

              <p
                className="reveal-soft mt-5 max-w-lg text-[13px] md:text-[14px] leading-[1.7] text-white/50 font-light"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  animationDelay: "1.15s",
                }}
              >
                The best products are not built by jumping to solutions — they
                begin with observation, curiosity, and clarity.
              </p>

              <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-10">
                <a
                  href="#thinking"
                  className="reveal-soft group relative px-12 py-5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:bg-neutral-200 active:scale-[0.98]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    animationDelay: "1.3s",
                  }}
                >
                  Explore My Thinking
                </a>

                <a
                  href="#work"
                  className="reveal-soft text-[11px] font-medium uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors duration-500 border-b border-white/20 hover:border-white pb-1"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    animationDelay: "1.4s",
                  }}
                >
                  View Work
                </a>
              </div>
            </div>
          </div>

          {/* Portrait — oversized, free-floating, printed into the poster */}
          <div
            aria-hidden
            className="absolute -bottom-[18%] -right-[12%] md:-right-[8%] w-[95%] md:w-[80%] lg:w-[72%] xl:w-[68%] h-[135%] z-10 pointer-events-none reveal-portrait"
          >
            <img
              src={portrait}
              alt=""
              className="absolute inset-0 w-full h-full object-contain object-bottom grayscale contrast-[1.15] brightness-[0.95]"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 80% at 65% 55%, black 45%, transparent 92%)",
                maskImage:
                  "radial-gradient(ellipse 70% 80% at 65% 55%, black 45%, transparent 92%)",
              }}
              draggable={false}
            />

            {/* Fade portrait into background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-transparent" />
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
