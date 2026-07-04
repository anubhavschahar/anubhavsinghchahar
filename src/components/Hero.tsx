import { useState } from "react";
import { Menu, X } from "lucide-react";

const portrait = "/hero-bg.jpg";


const navItems = [
  { label: "Thinking", href: "/#thinking" },
  { label: "Work", href: "/#work" },
  { label: "Journey", href: "/#journey" },
  { label: "Writing", href: "/#writing" },
];

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-[85vh] w-full bg-transparent text-[#F5F5F5] overflow-hidden selection:bg-[#2563EB] selection:text-white">

      <div className="relative z-10 mx-auto w-full max-w-[1440px] min-h-[85vh] flex flex-col px-6 md:px-12 lg:px-16 pt-8 md:pt-10 pb-10">
        {/* Navigation */}
        <nav
          className="relative z-50 flex items-center justify-between w-full reveal-soft"
          style={{ animationDelay: "0.1s", fontFamily: "'Inter', sans-serif" }}
        >
          <a
            href="/#top"
            className="text-[13px] font-semibold tracking-[0.36em] text-[#F5F5F5]"
          >
            ANUBHAV SINGH CHAHAR
          </a>

          <ul className="hidden lg:flex items-center gap-10 text-[13px] text-[#F5F5F5]/70">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group relative transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            className="hidden lg:inline-flex items-center gap-2 border border-[#F5F5F5]/25 px-5 py-2.5 text-[12px] font-medium tracking-[0.08em] rounded-full text-[#F5F5F5] hover:border-white hover:bg-white/[0.04] transition-all duration-500"
          >
            Get in Touch <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center border border-[#F5F5F5]/20 text-[#F5F5F5] transition-colors duration-300 hover:border-[#F5F5F5]/55 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div
            className="relative z-40 mt-4 border-y border-[#F5F5F5]/10 bg-[#0A0A0A]/75 px-4 py-4 backdrop-blur-xl lg:hidden reveal-soft"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <ul className="flex flex-col gap-1 text-[13px] text-[#F5F5F5]/78">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 tracking-[0.12em] uppercase transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="block py-3 tracking-[0.12em] uppercase text-[#F5F5F5] transition-colors duration-300 hover:text-white"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Main composition */}
        <div className="relative flex-1 grid grid-cols-12 gap-8 items-center pt-16 md:pt-20 lg:pt-24">
          <div className="col-span-12 lg:col-span-7 z-20">
            {/* Chapter label */}
            <p
              className="reveal-soft mb-10 md:mb-12 text-[11px] tracking-[0.42em] uppercase text-[#2563EB]"
              style={{
                animationDelay: "0.35s",
                fontFamily:
                  "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
              }}
            >
              Product Thinking
            </p>

            <h1 className="editorial-display text-[#F5F5F5] text-[10.5vw] md:text-[7.2vw] lg:text-[5.4vw] leading-[1.05]">
              <span className="reveal-line block" style={{ animationDelay: "0.55s" }}>
                Every product begins
              </span>
              <span className="reveal-line block" style={{ animationDelay: "0.75s" }}>
                with a question.
              </span>
            </h1>

            <h2
              className="editorial-display mt-10 md:mt-12 text-[#F5F5F5] text-[10.5vw] md:text-[7.2vw] lg:text-[5.4vw] leading-[1.05]"
            >
              <span
                className="reveal-line block italic"
                style={{ animationDelay: "0.95s" }}
              >
                Mine always
              </span>
              <span
                className="reveal-line block italic"
                style={{ animationDelay: "1.15s" }}
              >
                starts with people.
              </span>
            </h2>

            <p
              className="reveal-soft mt-10 md:mt-12 max-w-[560px] text-[15px] md:text-[16px] leading-[1.85] text-[#F5F5F5]/70 font-light"
              style={{
                animationDelay: "1.5s",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              The pages ahead aren't meant to be skimmed.
              <br /><br />
              They're a reflection of how I approach problems, learn from people, and make product decisions.
              <br /><br />
              If you're curious about how I think, you're in the right place.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <a
                href="https://www.linkedin.com/in/anubhav-singh-chahar"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-soft inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] text-white text-[13px] font-medium tracking-[0.04em] rounded-full transition-all duration-500 hover:bg-[#1d4ed8] hover:-translate-y-[1px]"
                style={{ animationDelay: "1.75s", fontFamily: "'Inter', sans-serif" }}
              >
                Visit LinkedIn <span aria-hidden>→</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1Hifyt_7OanHQkaIsNgo09ZqNYz98wj4p/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-soft inline-flex items-center gap-2 px-8 py-4 border border-[#F5F5F5]/25 text-[#F5F5F5] text-[13px] font-medium tracking-[0.04em] rounded-full transition-all duration-500 hover:border-white hover:bg-white/[0.04]"
                style={{ animationDelay: "1.9s", fontFamily: "'Inter', sans-serif" }}
              >
                Download Résumé <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="reveal-soft relative z-20 mt-12 flex flex-col items-start gap-3"
          style={{ animationDelay: "2.1s", fontFamily: "'Inter', sans-serif" }}
        >
          <span className="text-[11px] tracking-[0.32em] uppercase text-[#F5F5F5]/40">
            Scroll to begin the first chapter
          </span>
          <span className="text-[#F5F5F5]/40 animate-scroll-nudge text-sm">↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
