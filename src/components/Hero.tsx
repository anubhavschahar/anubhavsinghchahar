import { ArrowRight, ArrowDown } from "lucide-react";
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

      <div className="relative mx-auto grid min-h-[calc(100vh-10rem)] max-w-[1440px] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12 lg:gap-10">
        {/* Left / Editorial column */}
        <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-6 xl:col-span-6">
          {/* Subtle identity hint */}
          <div
            className="reveal-soft flex items-center gap-3 text-muted-foreground"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="eyebrow">Where literature meets product thinking</span>
          </div>

          {/* Headline */}
          <h1 className="editorial-display mt-6 text-foreground text-[8.5vw] leading-[1.05] sm:text-[7vw] lg:text-[4.2vw] xl:text-[58px] whitespace-pre-wrap">
            <span className="block overflow-hidden pb-[0.12em]">
              <span className="reveal-line" style={{ animationDelay: "0.2s" }}>
                Product-minded builder{"\n\n"}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <span
                className="reveal-line italic text-foreground/95"
                style={{ animationDelay: "0.5s" }}
              >
                who blends storytelling{"\n\n"}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <span className="reveal-line" style={{ animationDelay: "0.8s" }}>
                with digital product thinking.{"\n\n"}
              </span>
            </span>
          </h1>

          {/* Role subtitle */}
          <p
            className="reveal-soft mt-6 text-base font-medium tracking-wide text-foreground/80 md:text-lg"
            style={{ animationDelay: "1.05s" }}
          >
            Aspiring Product Manager
          </p>

          {/* Supporting one-liner */}
          <p
            className="reveal-soft mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base md:leading-relaxed"
            style={{ animationDelay: "1.2s" }}
          >
            Exploring how stories, ideas, and user behavior shape great digital products.
          </p>

          {/* Credibility / activity line */}
          <p
            className="reveal-soft mt-3 max-w-md text-xs leading-relaxed text-muted-foreground/80 md:text-sm"
            style={{ animationDelay: "1.3s" }}
          >
            Building in public & sharing daily reflections on literature and product thinking.
          </p>

          {/* CTAs */}
          <div
            className="reveal-soft mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"
            style={{ animationDelay: "1.45s" }}
          >
            <a
              href="#projects"
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-foreground px-7 text-sm font-bold text-background transition-all duration-500 hover:bg-[hsl(var(--accent))] hover:pl-8"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="#writing"
              className="group inline-flex h-12 items-center gap-3 rounded-full border border-border bg-transparent px-7 text-sm font-medium text-foreground transition-all duration-500 hover:border-foreground/60"
            >
              Read My Writing
            </a>
          </div>
        </div>

        {/* Right / Portrait column — visually integrated, no card frame */}
        <div className="relative order-1 flex items-center justify-center lg:order-2 lg:col-span-6 xl:col-span-6">
          <div className="relative mx-auto flex h-full min-h-[400px] w-full max-w-[420px] items-end justify-center lg:min-h-[600px] lg:max-w-[520px]">
            {/* Oversized editorial numeral behind portrait */}
            <span
              aria-hidden
              className="reveal-soft pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 font-serif text-[34vw] leading-none text-foreground/[0.04] sm:text-[22vw] lg:text-[18rem]"
              style={{ animationDelay: "0.4s" }}
            >
              01
            </span>

            {/* Subtle floor shadow */}
            <div
              aria-hidden
              className="absolute bottom-6 left-1/2 h-6 w-2/3 -translate-x-1/2 rounded-full blur-2xl"
              style={{ background: "hsl(222 47% 11% / 0.14)" }}
            />

            {/* The portrait — cutout, no rectangle */}
            <img
              src={portrait}
              alt="Portrait of Anubhav Singh Chahar"
              width={1024}
              height={1408}
              className="reveal-portrait relative z-10 h-auto w-full max-w-[320px] select-none object-contain drop-shadow-[0_30px_60px_rgba(15,23,42,0.18)] sm:max-w-[380px] lg:max-w-[460px]"
              draggable={false}
            />

            {/* Accent tick */}
            <span
              aria-hidden
              className="reveal-soft absolute right-0 top-1/3 hidden h-px w-14 bg-[hsl(var(--accent))] lg:block"
              style={{ animationDelay: "1.3s" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom rail: scroll indicator + editorial meta */}
      <div className="relative mx-auto mt-16 flex max-w-[1440px] items-end justify-between px-6 pb-10 md:mt-20 md:px-12">
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

