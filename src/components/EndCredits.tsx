const serif = { fontFamily: "'Cormorant Garamond', serif" } as const;
const sans = { fontFamily: "'Inter', sans-serif" } as const;

const navLinks = [
  { label: "Thinking", href: "#thinking" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Writing", href: "#writing" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const EndCredits = () => {
  return (
    <section
      id="contact"
      className="relative w-full px-8 md:px-16 py-24 md:py-40 text-white"
      style={{ backgroundColor: "rgba(5,5,5,0.6)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 lg:gap-28">
          {/* Left column — closing statement */}
          <div>
            <div
              className="text-[10px] tracking-[0.5em] uppercase text-white/35 mb-8"
              style={sans}
            >
              End Credits
            </div>
            <h2
              className="text-[13vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.95] tracking-tight font-light italic mb-14 md:mb-20"
              style={serif}
            >
              End Credits
            </h2>

            <div className="max-w-[680px] mb-20 md:mb-28">
              <p
                className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.9] mb-6"
                style={sans}
              >
                You have reached the end of this portfolio.
              </p>
              <p
                className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.9] mb-6"
                style={sans}
              >
                But this is not where the work ends.
              </p>
              <p
                className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.9] mb-6"
                style={sans}
              >
                I am looking for opportunities where I can observe deeply, ask better questions, work with teams, and build products that make sense for real people.
              </p>
              <p
                className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.9]"
                style={sans}
              >
                If something in these chapters made you pause, think, or feel curious, I would be happy to continue the conversation.
              </p>
            </div>

            <blockquote className="max-w-[920px] mb-20 md:mb-28">
              <p
                className="text-[36px] md:text-[56px] lg:text-[72px] leading-[1.05] font-light italic text-white/90 tracking-tight"
                style={serif}
              >
                Let’s build something meaningful.
              </p>
            </blockquote>

            <div className="max-w-[520px] mb-16 md:mb-20 pl-5 border-l border-white/15">
              <div
                className="text-[10px] tracking-[0.35em] uppercase text-white/35 mb-5"
                style={sans}
              >
                Currently Open To
              </div>
              <p
                className="text-[14px] md:text-[15px] text-white/65 font-light leading-[1.8] mb-4"
                style={sans}
              >
                Product Management, Associate Product Manager, and Product Internship opportunities.
              </p>
              <p
                className="text-[14px] md:text-[15px] text-white/45 font-light leading-[1.8]"
                style={sans}
              >
                India · Open to remote, hybrid, and relocation opportunities
              </p>
            </div>
          </div>

          {/* Right column — contact actions */}
          <div className="lg:pt-36">
            <div className="mb-12">
              <div
                className="text-[10px] tracking-[0.35em] uppercase text-white/35 mb-8"
                style={sans}
              >
                Get in Touch
              </div>
              <div className="flex flex-col items-start gap-6 md:gap-8">
                <a
                  href="mailto:your-email-here"
                  className="group inline-flex items-center text-[13px] md:text-[15px] tracking-[0.35em] uppercase text-white/85 hover:text-white transition-colors duration-500"
                  style={sans}
                >
                  <span className="border-b border-white/20 pb-1 group-hover:border-white/60 transition-all duration-500">
                    Contact Me →
                  </span>
                </a>
                <a
                  href="#resume"
                  className="group inline-flex items-center text-[13px] md:text-[15px] tracking-[0.35em] uppercase text-white/65 hover:text-white transition-colors duration-500"
                  style={sans}
                >
                  <span className="border-b border-white/20 pb-1 group-hover:border-white/60 transition-all duration-500">
                    Download Résumé →
                  </span>
                </a>
                <a
                  href="#linkedin"
                  className="group inline-flex items-center text-[13px] md:text-[15px] tracking-[0.35em] uppercase text-white/65 hover:text-white transition-colors duration-500"
                  style={sans}
                >
                  <span className="border-b border-white/20 pb-1 group-hover:border-white/60 transition-all duration-500">
                    View LinkedIn →
                  </span>
                </a>
                <a
                  href="#padhalikhajaat"
                  className="group inline-flex items-center text-[13px] md:text-[15px] tracking-[0.35em] uppercase text-white/50 hover:text-white transition-colors duration-500"
                  style={sans}
                >
                  <span className="border-b border-white/20 pb-1 group-hover:border-white/60 transition-all duration-500">
                    Visit padhalikhajaat →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="mt-20 md:mt-28 pt-14 md:pt-20 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 md:gap-16">
            <div>
              <p
                className="text-[28px] md:text-[38px] lg:text-[46px] leading-[1.1] font-light italic text-white/90 mb-4"
                style={serif}
              >
                Anubhav Singh Chahar
              </p>
              <p
                className="text-[12px] md:text-[13px] tracking-[0.3em] uppercase text-white/45 mb-5"
                style={sans}
              >
                Product Thinker · Storyteller · Problem Investigator
              </p>
              <p
                className="text-[13px] md:text-[14px] text-white/35 font-light italic leading-[1.7]"
                style={serif}
              >
                Built with curiosity, reflection, and a lot of questions.
              </p>
            </div>
            <div
              className="text-[10px] tracking-[0.4em] uppercase text-white/25"
              style={sans}
            >
              Asc. — 2026 · Fin.
            </div>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="mt-16 md:mt-24 pt-10 border-t border-white/5">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors duration-300"
                    style={sans}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default EndCredits;