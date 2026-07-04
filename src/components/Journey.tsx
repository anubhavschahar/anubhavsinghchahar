import Reveal from "./Reveal";

const serif = { fontFamily: "'Cormorant Garamond', serif" } as const;
const sans = { fontFamily: "'Inter', sans-serif" } as const;

const education = [
  {
    years: "2025 — 2027",
    degree: "MBA in Technology Management",
    school: "Institute of Product Leadership, CMR University",
    location: "Bangalore, India",
    note: "Scholarship Holder",
    areas: [
      "Product Marketing",
      "Business Analytics",
      "Data Analytics for Managers",
      "Value Proposition Design",
      "Art of Storytelling",
      "Project & Operations Management",
      "Digital Transformation",
    ],
    reflection:
      "This is where I began connecting business, technology, storytelling, and product thinking into one way of solving problems.",
  },
  {
    years: "2020 — 2024",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    school: "IMS Engineering College, AKTU",
    location: "Ghaziabad, India",
    note: null as string | null,
    areas: [] as string[],
    reflection:
      "Engineering gave me a technical foundation, but it also taught me something bigger: every system works only when the people using it are understood.",
  },
];

const leadership = [
  {
    n: "01",
    role: "Sponsorship Head, Event Team",
    org: "Institute of Product Leadership",
    body: "Led partner outreach and coordinated sponsor deliverables across college-wide events.",
    taught:
      "How to communicate value clearly, manage expectations, and coordinate across people with different priorities.",
  },
  {
    n: "02",
    role: "Head Boy & Football Team Captain",
    org: "12th Grade",
    body: "Represented the student body and led the football team to an interschool tournament victory.",
    taught:
      "Leadership is not about being louder. It is about making people believe the goal is worth showing up for.",
  },
  {
    n: "03",
    role: "Sports Captain",
    org: "11th Grade",
    body: "Built school football and volleyball teams from scratch, managed training schedules, and coordinated inter-school fixtures.",
    taught:
      "Building a team is a product problem too — you understand people, define roles, create rhythm, and help everyone move toward the same outcome.",
  },
  {
    n: "04",
    role: "Zonal-Level Football",
    org: "Graduation & School Years",
    body: "Competed at zonal-level football throughout graduation and remained a consistent team contributor since 8th grade.",
    taught:
      "Discipline compounds quietly. You do not become reliable in one match. You become reliable by showing up for years.",
  },
];

type Cert = { title: string; issuer: string; href: string };

const certGroups: { title: string; items: Cert[] }[] = [
  {
    title: "Product Management, Strategy & Communication",
    items: [
      {
        title: "Product Management Job Simulation",
        issuer: "Electronic Arts via Forage",
        href: "#certificate-ea",
      },
      {
        title: "Product Management & Marketing Fundamentals",
        issuer: "Institute of Product Leadership",
        href: "#certificate-ipl-pmm",
      },
      {
        title: "Value Proposition Design & Innovation Frameworks",
        issuer: "Institute of Product Leadership",
        href: "#certificate-ipl-vpd",
      },
      {
        title: "Business Analysis & Process Management",
        issuer: "Coursera",
        href: "#certificate-coursera-ba",
      },
      {
        title: "Presentation Zen, Storytelling & Creative Confidence",
        issuer: "Institute of Product Leadership",
        href: "#certificate-presentation-zen",
      },
    ],
  },
  {
    title: "Data Analytics & Applied AI",
    items: [
      {
        title: "GenAI-Powered Data Analytics Job Simulation",
        issuer: "Tata via Forage",
        href: "#certificate-tata-genai",
      },
      {
        title: "Data Analytics Job Simulation",
        issuer: "Deloitte via Forage",
        href: "#certificate-deloitte-da",
      },
      {
        title: "Statistics Foundations, Levels 1–4",
        issuer: "LinkedIn Learning",
        href: "#certificate-statistics",
      },
    ],
  },
];

const Journey = () => {
  return (
    <section
      id="journey"
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
            CHAPTER III
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="text-[13vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.95] tracking-tight font-light italic mb-12 md:mb-20"
            style={serif}
          >
            Journey
          </h2>
        </Reveal>

        <div className="max-w-[680px]">
          <Reveal delay={160}>
            <p
              className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.85] mb-6"
              style={sans}
            >
              Not every lesson came from a project.
            </p>
            <p
              className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.85] mb-6"
              style={sans}
            >
              Some came from classrooms.
              <br />
              Some came from leading teams.
              <br />
              Some came from sports fields, presentations, failures, and the discipline of showing up again.
            </p>
            <p
              className="text-[15px] md:text-[17px] text-white/55 font-light leading-[1.85]"
              style={sans}
            >
              This chapter is a record of the experiences that shaped how I learn, communicate, and lead.
            </p>
          </Reveal>
        </div>

        {/* 01 — Education */}
        <div className="mt-28 md:mt-40">
          <Reveal>
            <div className="flex items-baseline gap-6 mb-14 md:mb-20 border-t border-white/10 pt-10">
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/30"
                style={sans}
              >
                01
              </div>
              <h3
                className="text-[36px] md:text-[52px] leading-[1.05] font-light italic text-white/90"
                style={serif}
              >
                Education
              </h3>
            </div>
          </Reveal>

          <div className="space-y-20 md:space-y-28">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 80}>
                <article className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-14">
                  <div>
                    <div
                      className="text-[11px] tracking-[0.35em] uppercase text-white/40"
                      style={sans}
                    >
                      {e.years}
                    </div>
                  </div>
                  <div className="max-w-[720px]">
                    <h4
                      className="text-[26px] md:text-[34px] leading-[1.2] font-light text-white/95 mb-3"
                      style={serif}
                    >
                      {e.degree}
                    </h4>
                    <p
                      className="text-[14px] md:text-[15px] text-white/60 font-light leading-[1.7] mb-1"
                      style={sans}
                    >
                      {e.school}
                    </p>
                    <p
                      className="text-[13px] md:text-[14px] text-white/40 font-light leading-[1.7]"
                      style={sans}
                    >
                      {e.location}
                    </p>

                    {e.note && (
                      <div
                        className="mt-6 inline-block text-[10px] tracking-[0.35em] uppercase text-white/70 border-b border-white/25 pb-1"
                        style={sans}
                      >
                        {e.note}
                      </div>
                    )}

                    {e.areas.length > 0 && (
                      <div className="mt-8">
                        <div
                          className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-4"
                          style={sans}
                        >
                          Relevant learning areas
                        </div>
                        <ul
                          className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-white/65 font-light"
                          style={sans}
                        >
                          {e.areas.map((a) => (
                            <li key={a} className="relative pl-4">
                              <span className="absolute left-0 top-[10px] w-[6px] h-px bg-white/30" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-10 pl-5 border-l border-white/15">
                      <div
                        className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3"
                        style={sans}
                      >
                        Margin note
                      </div>
                      <p
                        className="text-[15px] md:text-[16px] font-light italic leading-[1.75] text-white/55"
                        style={serif}
                      >
                        “{e.reflection}”
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 02 — Leadership & Sports */}
        <div className="mt-32 md:mt-44">
          <Reveal>
            <div className="flex items-baseline gap-6 mb-10 border-t border-white/10 pt-10">
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/30"
                style={sans}
              >
                02
              </div>
              <h3
                className="text-[36px] md:text-[52px] leading-[1.05] font-light italic text-white/90 max-w-[760px]"
                style={serif}
              >
                Leadership was never only a title.
              </h3>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p
              className="max-w-[680px] text-[15px] md:text-[17px] text-white/55 font-light leading-[1.85] mb-16 md:mb-24"
              style={sans}
            >
              Before I entered product work, I learned leadership through responsibility, team pressure, and sport. Those experiences shaped how I communicate, organize people, and stay composed when things are uncertain.
            </p>
          </Reveal>

          <div className="space-y-16 md:space-y-20">
            {leadership.map((l, i) => (
              <Reveal key={l.n} delay={i * 60}>
                <article
                  className={`grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-12 ${
                    i > 0 ? "border-t border-white/10 pt-16 md:pt-20" : ""
                  }`}
                >
                  <div
                    className="text-[11px] tracking-[0.4em] uppercase text-white/30"
                    style={sans}
                  >
                    {l.n}
                  </div>
                  <div className="max-w-[720px]">
                    <h4
                      className="text-[24px] md:text-[32px] leading-[1.2] font-light text-white/95 mb-2"
                      style={serif}
                    >
                      {l.role}
                    </h4>
                    <p
                      className="text-[13px] md:text-[14px] text-white/45 font-light leading-[1.7] mb-6"
                      style={sans}
                    >
                      {l.org}
                    </p>
                    <p
                      className="text-[15px] md:text-[17px] text-white/65 font-light leading-[1.85] mb-8"
                      style={sans}
                    >
                      {l.body}
                    </p>
                    <div className="pl-5 border-l border-white/15">
                      <div
                        className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3"
                        style={sans}
                      >
                        What it taught me
                      </div>
                      <p
                        className="text-[15px] md:text-[16px] font-light italic leading-[1.75] text-white/55"
                        style={serif}
                      >
                        “{l.taught}”
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 03 — Certifications */}
        <div className="mt-32 md:mt-44">
          <Reveal>
            <div className="flex items-baseline gap-6 mb-10 border-t border-white/10 pt-10">
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
                Certifications
              </h3>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p
              className="max-w-[680px] text-[15px] md:text-[17px] text-white/55 font-light leading-[1.85] mb-16 md:mb-20"
              style={sans}
            >
              These certifications helped me build structured knowledge across product strategy, communication, analytics, business analysis, and applied AI.
            </p>
          </Reveal>

          <div className="space-y-20 md:space-y-28">
            {certGroups.map((group, gi) => (
              <div key={group.title}>
                <Reveal delay={gi * 60}>
                  <div
                    className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-10"
                    style={sans}
                  >
                    Category 0{gi + 1} — {group.title}
                  </div>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                  {group.items.map((c, i) => (
                    <Reveal key={c.title} delay={i * 50}>
                      <a
                        href={c.href}
                        className="group block h-full p-8 md:p-10 bg-[rgba(10,10,10,0.85)] hover:bg-[rgba(20,20,20,0.9)] transition-colors duration-500"
                      >
                        <div className="flex flex-col h-full min-h-[220px]">
                          <div
                            className="text-[9px] tracking-[0.4em] uppercase text-white/30 mb-6"
                            style={sans}
                          >
                            Certificate · 0{i + 1}
                          </div>
                          <h4
                            className="text-[19px] md:text-[22px] leading-[1.25] font-light text-white/90 mb-4"
                            style={serif}
                          >
                            {c.title}
                          </h4>
                          <p
                            className="text-[13px] text-white/50 font-light leading-[1.6] mb-auto"
                            style={sans}
                          >
                            {c.issuer}
                          </p>
                          <div
                            className="mt-8 pt-6 border-t border-white/10 text-[10px] tracking-[0.35em] uppercase text-white/60 group-hover:text-white transition-colors duration-500"
                            style={sans}
                          >
                            View Certificate →
                          </div>
                        </div>
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 04 — Beyond the Resume */}
        <div className="mt-32 md:mt-44">
          <Reveal>
            <div className="flex items-baseline gap-6 mb-14 md:mb-20 border-t border-white/10 pt-10">
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/30"
                style={sans}
              >
                04
              </div>
              <h3
                className="text-[36px] md:text-[52px] leading-[1.05] font-light italic text-white/90"
                style={serif}
              >
                Beyond the Resume
              </h3>
            </div>
          </Reveal>

          <div className="max-w-[720px]">
            <Reveal delay={100}>
              <p
                className="text-[16px] md:text-[18px] text-white/60 font-light leading-[1.9] mb-8"
                style={sans}
              >
                The pattern across my journey has stayed the same.
              </p>
              <div
                className="text-[16px] md:text-[18px] text-white/60 font-light leading-[1.9] mb-10 space-y-1"
                style={sans}
              >
                <p>I like understanding people.</p>
                <p>I like building teams.</p>
                <p>I like asking why something is not working.</p>
                <p>I like turning unclear problems into something structured.</p>
              </div>
              <p
                className="text-[16px] md:text-[18px] text-white/60 font-light leading-[1.9] mb-16 md:mb-20"
                style={sans}
              >
                Whether it was leading on the field, presenting in a classroom, or building product concepts, the lesson has been the same:
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p
                className="text-[36px] md:text-[56px] lg:text-[64px] leading-[1.1] font-light italic text-white/95 tracking-tight"
                style={serif}
              >
                Before you lead a solution,
                <br />
                you have to understand the people inside the problem.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Transition */}
        <Reveal delay={160}>
          <div className="mt-28 md:mt-40 pt-10 md:pt-14 border-t border-white/10 text-right max-w-[680px] ml-auto">
            <p
              className="text-[16px] md:text-[18px] text-white/60 font-light leading-[1.8]"
              style={sans}
            >
              Projects showed how I think.
            </p>
            <p
              className="text-[16px] md:text-[18px] text-white/60 font-light leading-[1.8] mb-8"
              style={sans}
            >
              Journey shows what shaped that thinking.
            </p>
            <p
              className="text-[15px] md:text-[16px] text-white/45 font-light italic leading-[1.8] mb-10"
              style={serif}
            >
              The next chapter moves into the place where I slow down, read, and reflect.
            </p>
            <div
              className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-3"
              style={sans}
            >
              Next Chapter
            </div>
            <div
              className="text-[28px] md:text-[36px] font-light italic text-white/85 mb-8"
              style={serif}
            >
              Writing
            </div>
            <a
              href="#writing"
              className="inline-block text-[11px] tracking-[0.35em] uppercase text-white/75 border-b border-white/20 pb-1 hover:text-white hover:border-white/60 transition-all duration-500"
              style={sans}
            >
              Continue Reading →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Journey;
