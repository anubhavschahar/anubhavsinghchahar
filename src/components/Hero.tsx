import { ArrowRight, ArrowDown, Download } from "lucide-react";
import portrait from "@/assets/anubhav-portrait.png";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-background pt-28 md:pt-32"
    >
      {/* Ambient editorial texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(1200px 600px at 85% 20%, hsl(221 83% 53% / 0.06), transparent 60%), radial-gradient(900px 500px at 10% 90%, hsl(222 47% 11% / 0.04), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-6 md:px-12 lg:grid-cols-12 lg:gap-10">
        {/* Left / Editorial column */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
          {/* Chapter marker */}
          <div
            className="reveal-soft flex items-center gap-4 text-muted-foreground"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="eyebrow">Chapter 01</span>
            <span className="h-px w-16 origin-left bg-border animate-hairline" />
            <span className="eyebrow text-foreground/60">The Opening</span>
          </div>

          {/* Headline */}
          <h1 className="editorial-display mt-10 text-foreground text-[15vw] leading-[0.95] sm:text-[11vw] lg:text-[8.4vw] xl:text-[128px]">
            <span className="block overflow-hidden">
              <span
                className="reveal-line"
                style={{ animationDelay: "0.15s" }}
              >
                Understanding
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="reveal-line italic text-foreground/95"
                style={{ animationDelay: "0.45s" }}
              >
                comes{" "}
                <span className="relative inline-block">
                  first
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-[3px] w-full origin-left scale-x-0 bg-[hsl(var(--accent))] animate-hairline"
                    style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
                  />
                </span>
                .
              </span>
            </span>
          </h1>

          {/* Supporting copy */}
          <p
            className="reveal-soft mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg md:leading-[1.7]"
            style={{ animationDelay: "0.95s" }}
          >
            The best products aren&rsquo;t built by jumping to solutions.
            They&rsquo;re built by understanding people, questioning
            assumptions, and uncovering the real problem first.
          </p>

          {/* CTAs */}
          <div
            className="reveal-soft mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"
            style={{ animationDelay: "1.25s" }}
          >
            <a
              href="#thinking"
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-foreground px-7 text-sm font-medium text-background transition-all duration-500 hover:bg-[hsl(var(--accent))] hover:pl-8"
            >
              Explore My Thinking
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="#resume"
              className="group inline-flex h-12 items-center gap-3 rounded-full border border-border bg-transparent px-7 text-sm font-medium text-foreground transition-all duration-500 hover:border-foreground/60"
            >
              <Download className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5" />
              Download Resume
            </a>
          </div>

          {/* Byline */}
          <div
            className="reveal-soft mt-16 flex items-center gap-5 text-muted-foreground"
            style={{ animationDelay: "1.5s" }}
          >
            <span className="eyebrow text-foreground/60">By</span>
            <span className="text-sm font-medium tracking-wide text-foreground">
              Anubhav Singh Chahar
            </span>
            <span className="h-px w-10 bg-border" />
            <span className="eyebrow">Product Manager</span>
          </div>
        </div>

        {/* Right / Portrait column — visually integrated, no card frame */}
        <div className="relative lg:col-span-5 xl:col-span-5">
          <div className="relative mx-auto flex h-full min-h-[520px] w-full max-w-[520px] items-end justify-center lg:min-h-[720px]">
            {/* Oversized editorial numeral behind portrait */}
            <span
              aria-hidden
              className="reveal-soft pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 font-serif text-[42vw] leading-none text-foreground/[0.045] sm:text-[26vw] lg:text-[22rem]"
              style={{ animationDelay: "0.4s" }}
            >
              01
            </span>

            {/* Vertical caption */}
            <div
              className="reveal-soft absolute left-0 top-6 hidden origin-top-left -rotate-90 translate-x-[-8px] lg:block"
              style={{ animationDelay: "1.1s" }}
            >
              <span className="eyebrow text-muted-foreground whitespace-nowrap">
                Portrait — Study No. 01 · 2026
              </span>
            </div>

            {/* Subtle floor shadow */}
            <div
              aria-hidden
              className="absolute bottom-6 left-1/2 h-6 w-2/3 -translate-x-1/2 rounded-full blur-2xl"
              style={{ background: "hsl(222 47% 11% / 0.16)" }}
            />

            {/* The portrait — cutout, no rectangle */}
            <img
              src={portrait}
              alt="Portrait of Anubhav Singh Chahar"
              width={1024}
              height={1408}
              className="reveal-portrait relative z-10 h-auto w-full max-w-[460px] select-none object-contain drop-shadow-[0_30px_60px_rgba(15,23,42,0.18)] lg:max-w-[520px]"
              draggable={false}
            />

            {/* Accent tick */}
            <span
              aria-hidden
              className="reveal-soft absolute right-2 top-1/3 hidden h-px w-14 bg-[hsl(var(--accent))] lg:block"
              style={{ animationDelay: "1.3s" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom rail: scroll indicator + editorial meta */}
      <div className="relative mx-auto mt-16 flex max-w-[1440px] items-end justify-between px-6 pb-10 md:mt-24 md:px-12">
        <a
          href="#thinking"
          className="reveal-soft group inline-flex flex-col items-start gap-3"
          style={{ animationDelay: "1.6s" }}
        >
          <span className="eyebrow text-muted-foreground">Start Reading</span>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
            <span className="relative block h-8 w-px overflow-hidden bg-border">
              <span className="absolute inset-x-0 top-0 block h-3 bg-foreground animate-scroll-nudge" />
            </span>
            <ArrowDown className="h-4 w-4 animate-scroll-nudge" />
          </span>
        </a>

        <div
          className="reveal-soft hidden text-right md:block"
          style={{ animationDelay: "1.7s" }}
        >
          <p className="eyebrow text-muted-foreground">Volume I · Issue 01</p>
          <p className="mt-2 text-sm text-foreground/70">
            A portfolio, told as a story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
