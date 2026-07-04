import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const serif = { fontFamily: "'Cormorant Garamond', serif" } as const;
const sans = { fontFamily: "'Inter', sans-serif" } as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-8"
    style={sans}
  >
    {children}
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="text-[36px] md:text-[56px] lg:text-[68px] leading-[1.05] font-light italic tracking-tight text-white/95 mb-12 md:mb-16 max-w-[900px]"
    style={serif}
  >
    {children}
  </h2>
);

const Body = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={`text-[15px] md:text-[17px] text-white/60 font-light leading-[1.9] max-w-[640px] ${className}`}
    style={sans}
  >
    {children}
  </p>
);

const Divider = () => (
  <div
    aria-hidden
    className="w-full h-16 md:h-24"
    style={{
      background:
        "linear-gradient(to bottom, rgba(5,5,5,0) 0%, rgba(5,5,5,0.5) 50%, rgba(5,5,5,0) 100%)",
    }}
  />
);

const Chapter = ({
  id,
  number,
  children,
}: {
  id?: string;
  number: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="relative w-full px-6 md:px-16 py-20 md:py-32"
    style={{ backgroundColor: "rgba(5,5,5,0.6)" }}
  >
    <div className="max-w-[1100px] mx-auto">
      <Reveal>
        <Eyebrow>{number}</Eyebrow>
      </Reveal>
      <Reveal delay={80}>{children}</Reveal>
    </div>
  </section>
);

const journey = [
  { label: "Step 01", title: "Discovery", text: "Mapping the event ecosystem — organizers, speakers, attendees, and companies." },
  { label: "Step 02", title: "Interviews", text: "Conversations with organizers and stakeholders to understand real pains." },
  { label: "Step 03", title: "Insights", text: "Patterns across sponsorship weakness, attention value, and monetization gaps." },
  { label: "Step 04", title: "Problem Framing", text: "Reframing the opportunity from sponsorship to live audience access." },
  { label: "Step 05", title: "Solution", text: "A B2B model that packages audience access into a predictable product." },
];

const personas = [
  {
    name: "Riya",
    role: "Organizer",
    quote: "I bring everyone together, but I'm the last one to benefit.",
    goal: "Build sustainable revenue from her events.",
    pain: "No reliable way to monetize the audience she gathers.",
  },
  {
    name: "Amit",
    role: "Speaker",
    quote: "I want my talks to create real impact, not disappear after 30 minutes.",
    goal: "Extend his influence and reach beyond the event.",
    pain: "No platform to continue engaging with attendees after speaking.",
  },
  {
    name: "The Attendee",
    role: "Attendee",
    quote: "I learn so much — but I forget most of it after the event.",
    goal: "Capture and convert learning into real opportunities.",
    pain: "No structured way to access insights or follow up with people they met.",
  },
];

const costs = [
  "Platform fees",
  "Venue rental",
  "Refreshments",
  "Equipment",
  "Content production",
  "Marketing",
  "Travel",
  "Logistics",
  "Compliance",
  "Fees",
];

const whys = [
  {
    label: "Problem",
    text: "Companies spend heavily trying to reach niche audiences that organizers already bring together, but organizers have no mechanism to monetize that value.",
  },
  { label: "Why 1", text: "Organizers are not earning enough from their events." },
  { label: "Why 2", text: "They rely mostly on ticket sales or sponsorships." },
  { label: "Why 3", text: "There is no structured way for companies to directly engage with the audience." },
  { label: "Why 4", text: "Current event formats focus mostly on sessions and networking." },
  { label: "Why 5", text: "Organizers do not have a ready-to-use model or platform." },
  { label: "Root Cause", text: "The audience has value, but the event format does not capture it." },
];

const vp = [
  { label: "For", text: "Event organizers struggling with unpredictable revenue and rising costs" },
  { label: "Who need", text: "Sustainable, high-quality events that build their reputation" },
  { label: "ThinkFloor provides", text: "Theme-based sponsor matching + live audience access for companies" },
  { label: "Unlike", text: "Traditional sponsorships that are random, passive, and low-value" },
  { label: "It delivers", text: "Predictable, measurable partnerships and stronger monetization potential" },
];

const flow = [
  { title: "Organizer creates an event profile", text: "The event theme, audience type, expected attendees, and engagement format are defined." },
  { title: "Companies discover relevant audiences", text: "Companies choose events where the audience matches their product, category, or experiment." },
  { title: "Company books a live access slot", text: "The company gets a 15–20 minute structured interaction window during the event." },
  { title: "Audience participates", text: "Attendees test, respond, give feedback, or engage with the product." },
  { title: "Organizer earns predictable revenue", text: "Revenue is shared between the organizer and the platform." },
  { title: "Company receives insights", text: "The company gets feedback, validation signals, leads, or early-user responses." },
];

const assumptions = [
  { n: "01", text: "Companies value meetup audiences as product-testing segments." },
  { n: "02", text: "Organizers are willing to redesign part of their event format." },
  { n: "03", text: "Attendees agree to test prototypes without dropping off from the event experience." },
];

const successMetrics = [
  "Company willingness to pay",
  "Organizer willingness to allocate event time",
  "Attendee participation rate",
  "Feedback completion rate",
  "Sponsor satisfaction",
  "Organizer revenue uplift",
];

const ThinkFloor = () => {
  return (
    <main className="relative min-h-screen text-[#F5F5F5]">
      {/* Cinematic fixed backdrop */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-[#0A0A0A] overflow-hidden pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 10%, rgba(30,25,40,0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(20,30,35,0.4) 0%, transparent 55%), #0A0A0A",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Top nav bar */}
      <div className="relative z-10 w-full px-6 md:px-16 pt-8 md:pt-10">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-[11px] tracking-[0.4em] uppercase text-white/70 hover:text-white transition-colors duration-500"
            style={sans}
          >
            ← Back to Library
          </Link>
          <span
            className="text-[10px] tracking-[0.5em] uppercase text-white/30"
            style={sans}
          >
            Chapter II · 02
          </span>
        </div>
      </div>

      {/* 01 — Cover */}
      <section className="relative w-full px-6 md:px-16 pt-20 md:pt-40 pb-20 md:pb-32">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div
              className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-10"
              style={sans}
            >
              01 — Cover
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="text-[68px] md:text-[128px] lg:text-[156px] leading-[0.9] font-light tracking-tight text-white mb-10"
              style={serif}
            >
              ThinkFloor
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p
              className="text-[28px] md:text-[46px] lg:text-[54px] leading-[1.1] font-light italic text-white/90 mb-14 max-w-[880px]"
              style={serif}
            >
              Rethinking event sponsorship
              <br />
              through live audience access.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="max-w-[640px] space-y-6">
              <Body>
                Events bring together people, attention, and context. But for many organizers, monetization still depends on tickets, banners, stalls, and logo placements.
              </Body>
              <Body>ThinkFloor began with one question:</Body>
              <p
                className="text-[22px] md:text-[30px] leading-[1.3] font-light italic text-white/85 pl-6 border-l border-white/20"
                style={serif}
              >
                What if sponsors could buy meaningful audience interaction instead of passive visibility?
              </p>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 border-t border-white/10 pt-10">
              {[
                { l: "Role", v: "Value Proposition Design · User Research · Business Model Thinking" },
                { l: "Project Type", v: "B2B Product Concept" },
                { l: "Focus", v: "Event Monetization · Live Audience Access · Product Validation" },
                { l: "Tagline", v: "Events that Think Back" },
              ].map((m) => (
                <div key={m.l}>
                  <div
                    className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3"
                    style={sans}
                  >
                    {m.l}
                  </div>
                  <p
                    className="text-[13px] md:text-[14px] text-white/70 font-light leading-[1.7]"
                    style={sans}
                  >
                    {m.v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* 02 — The Contradiction */}
      <Chapter number="02 — The Contradiction">
        <SectionTitle>
          The room was full.
          <br />
          The revenue wasn't.
        </SectionTitle>
        <div className="space-y-6 mb-16">
          <Body>
            Event organizers were bringing together valuable audiences, but the monetization model was weak. Sponsors were often paying for passive visibility, while companies actually wanted something more useful: feedback, validation, early users, and direct access to relevant people.
          </Body>
          <Body>
            The problem was not that events lacked value.
            <br />
            The problem was that the value was not being structured into something companies could buy.
          </Body>
        </div>
        <Reveal delay={200}>
          <blockquote className="pl-6 md:pl-10 border-l border-white/20 max-w-[820px]">
            <p
              className="text-[26px] md:text-[40px] lg:text-[46px] leading-[1.2] font-light italic text-white/90"
              style={serif}
            >
              The perfect audience was already in the room.
              <br />
              The organizer just had no way to monetize it.
            </p>
          </blockquote>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 03 — Research Journey */}
      <Chapter number="03 — Research Journey">
        <SectionTitle>Before proposing a solution, we followed the problem.</SectionTitle>
        <Body className="mb-16">
          We explored the event ecosystem through conversations, observations, and stakeholder perspectives. The goal was to understand not only what organizers struggled with, but also what speakers, attendees, and companies needed from events.
        </Body>
        <ol className="max-w-[760px]">
          {journey.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <li
                className={`grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] gap-6 md:gap-10 items-start py-8 border-t border-white/10 ${
                  i === journey.length - 1 ? "border-b" : ""
                }`}
              >
                <div
                  className="text-[10px] tracking-[0.35em] uppercase text-white/40 pt-2"
                  style={sans}
                >
                  {s.label}
                </div>
                <div>
                  <h4
                    className="text-[22px] md:text-[30px] font-light italic text-white/95 mb-3"
                    style={serif}
                  >
                    {s.title}
                  </h4>
                  <p
                    className="text-[14px] md:text-[15px] text-white/60 font-light leading-[1.75]"
                    style={sans}
                  >
                    {s.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Chapter>

      <Divider />

      {/* 04 — The People in the System */}
      <Chapter number="04 — The People in the System">
        <SectionTitle>Three people. Three different pains.</SectionTitle>
        <div className="space-y-14 md:space-y-20 max-w-[900px]">
          {personas.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="border-t border-white/10 pt-10">
                <div
                  className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-4"
                  style={sans}
                >
                  {p.role}
                </div>
                <h4
                  className="text-[36px] md:text-[52px] font-light text-white mb-8"
                  style={serif}
                >
                  {p.name}
                </h4>
                <blockquote className="pl-5 md:pl-8 border-l border-white/20 mb-10">
                  <p
                    className="text-[20px] md:text-[28px] leading-[1.35] font-light italic text-white/85"
                    style={serif}
                  >
                    “{p.quote}”
                  </p>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
                  <div>
                    <div
                      className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3"
                      style={sans}
                    >
                      Goal
                    </div>
                    <p
                      className="text-[14px] md:text-[15px] text-white/65 font-light leading-[1.75]"
                      style={sans}
                    >
                      {p.goal}
                    </p>
                  </div>
                  <div>
                    <div
                      className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3"
                      style={sans}
                    >
                      Pain
                    </div>
                    <p
                      className="text-[14px] md:text-[15px] text-white/65 font-light leading-[1.75]"
                      style={sans}
                    >
                      {p.pain}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Chapter>

      <Divider />

      {/* 05 — The Market Context */}
      <Chapter number="05 — The Market Context">
        <SectionTitle>Why this mattered now.</SectionTitle>
        <div className="space-y-6 mb-16 max-w-[720px]">
          <Body>
            Attendee demand for meaningful community events is rising, but organizer ability to supply those events sustainably is falling.
          </Body>
          <Body>
            The MICE segment in India represents a large and growing market, but many small and mid-sized organizers still struggle with predictable revenue. Costs continue to rise across platform fees, venue rental, refreshments, equipment, content production, marketing, travel, logistics, compliance, and fees.
          </Body>
        </div>
        <Reveal delay={200}>
          <div className="border-t border-white/10 pt-10 max-w-[900px]">
            <div
              className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-8"
              style={sans}
            >
              The Cost Burden
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-5">
              {costs.map((c, i) => (
                <span
                  key={c}
                  className="text-[18px] md:text-[24px] font-light italic text-white/70 leading-[1.3]"
                  style={serif}
                >
                  {c}
                  {i < costs.length - 1 && (
                    <span className="text-white/20 ml-8">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 06 — Problem Behind the Problem */}
      <Chapter number="06 — Problem Behind the Problem">
        <SectionTitle>We kept asking why.</SectionTitle>
        <div className="max-w-[820px]">
          <ol className="space-y-0">
            {whys.map((w, i) => (
              <Reveal key={w.label} delay={i * 70}>
                <li
                  className={`grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] gap-6 md:gap-10 items-start py-8 border-t border-white/10 ${
                    i === whys.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div
                    className="text-[10px] tracking-[0.35em] uppercase text-white/40 pt-1"
                    style={sans}
                  >
                    {w.label}
                  </div>
                  <p
                    className={`font-light leading-[1.5] ${
                      i === 0 || i === whys.length - 1
                        ? "text-[20px] md:text-[26px] italic text-white/95"
                        : "text-[17px] md:text-[20px] text-white/75"
                    }`}
                    style={serif}
                  >
                    {w.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200}>
            <p
              className="mt-12 text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.8]"
              style={serif}
            >
              The real opportunity was not to sell more sponsorship.
              <br />
              It was to redesign what sponsorship could mean.
            </p>
          </Reveal>
        </div>
      </Chapter>

      <Divider />

      {/* 07 — The Insight */}
      <Chapter number="07 — The Insight">
        <SectionTitle>The real product was not sponsorship.</SectionTitle>
        <Reveal delay={100}>
          <blockquote className="pl-6 md:pl-10 border-l border-white/20 mb-14 md:mb-16 max-w-[900px]">
            <p
              className="text-[30px] md:text-[46px] lg:text-[54px] leading-[1.15] font-light italic text-white/90"
              style={serif}
            >
              The real product was access
              <br />
              to a live, relevant audience.
            </p>
          </blockquote>
        </Reveal>
        <div className="space-y-6 max-w-[720px]">
          <Body>
            Companies want feedback, early adopters, product trials, contextual advertising, experiments, and first customers. Organizers already gather these audiences, but lack a structured way to package that access into a predictable revenue stream.
          </Body>
          <Body>
            This insight reframed the opportunity:
            <br />
            not as event sponsorship,
            <br />
            but as live audience access.
          </Body>
        </div>
      </Chapter>

      <Divider />

      {/* 08 — The Value Proposition */}
      <Chapter number="08 — The Value Proposition">
        <SectionTitle>What ThinkFloor offers.</SectionTitle>
        <Body className="mb-16">
          ThinkFloor helps event organizers turn unpredictable sponsorship into predictable, theme-aligned revenue by matching companies with relevant events and enabling live audience access for product trials, feedback, first customers, experiments, and contextual engagement.
        </Body>
        <div className="max-w-[900px]">
          {vp.map((v, i) => (
            <Reveal key={v.label} delay={i * 80}>
              <div
                className={`grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-14 py-8 border-t border-white/10 ${
                  i === vp.length - 1 ? "border-b" : ""
                }`}
              >
                <div
                  className="text-[10px] tracking-[0.35em] uppercase text-white/40 pt-2"
                  style={sans}
                >
                  {v.label}
                </div>
                <p
                  className="text-[18px] md:text-[24px] font-light text-white/85 leading-[1.45]"
                  style={serif}
                >
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Chapter>

      <Divider />

      {/* 09 — How It Works */}
      <Chapter number="09 — How It Works">
        <SectionTitle>From passive sponsorship to active participation.</SectionTitle>
        <ol className="max-w-[900px]">
          {flow.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <li
                className={`grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-10 items-start py-8 border-t border-white/10 ${
                  i === flow.length - 1 ? "border-b" : ""
                }`}
              >
                <div
                  className="text-[24px] md:text-[36px] font-light italic text-white/40"
                  style={serif}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4
                    className="text-[20px] md:text-[26px] font-light text-white/95 mb-3 leading-[1.3]"
                    style={serif}
                  >
                    {f.title}
                  </h4>
                  <p
                    className="text-[14px] md:text-[15px] text-white/60 font-light leading-[1.75]"
                    style={sans}
                  >
                    {f.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Chapter>

      <Divider />

      {/* 10 — Business Model */}
      <Chapter number="10 — Business Model">
        <SectionTitle>A monetization model where everyone has a reason to participate.</SectionTitle>
        <Body className="mb-16">
          The revenue model was designed to make the organizer more money while keeping the platform sustainable.
        </Body>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-[1000px] mb-14">
          {[
            { label: "Organizer Share", value: "70%", text: "of every live audience access booking." },
            { label: "Platform Share", value: "30%", text: "sustains matching, tooling, and operations." },
            { label: "Expected Impact", value: "5–10×", text: "ticket revenue potential through structured live audience access." },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 100}>
              <div className="border-t border-white/10 pt-8">
                <div
                  className="text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5"
                  style={sans}
                >
                  {m.label}
                </div>
                <div
                  className="text-[64px] md:text-[92px] leading-[1] font-light text-white mb-4"
                  style={serif}
                >
                  {m.value}
                </div>
                <p
                  className="text-[14px] md:text-[15px] text-white/60 font-light leading-[1.65]"
                  style={sans}
                >
                  {m.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p
            className="mt-6 text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.85] max-w-[760px]"
            style={serif}
          >
            The business model only works if all three sides receive value:
            <br />
            organizers earn more,
            <br />
            companies learn faster,
            <br />
            and attendees experience something useful rather than another ad.
          </p>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 11 — Leap of Faith Assumptions */}
      <Chapter number="11 — Leap of Faith Assumptions">
        <SectionTitle>What needed to be true.</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-[1000px] mb-14">
          {assumptions.map((a, i) => (
            <Reveal key={a.n} delay={i * 100}>
              <div className="border-t border-white/10 pt-8">
                <div
                  className="text-[52px] md:text-[72px] leading-[1] font-light italic text-white/40 mb-6"
                  style={serif}
                >
                  {a.n}
                </div>
                <p
                  className="text-[17px] md:text-[20px] font-light text-white/85 leading-[1.5]"
                  style={serif}
                >
                  {a.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p
            className="text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.85] max-w-[760px]"
            style={serif}
          >
            These were the riskiest assumptions. The MVP needed to test them before building a full platform.
          </p>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 12 — MVP Experiment Plan */}
      <Chapter number="12 — MVP Experiment Plan">
        <SectionTitle>Testing before building.</SectionTitle>
        <div className="max-w-[900px] space-y-12">
          <Reveal>
            <div className="border-t border-white/10 pt-8">
              <div
                className="text-[10px] tracking-[0.35em] uppercase text-white/40 mb-4"
                style={sans}
              >
                Hypothesis
              </div>
              <p
                className="text-[20px] md:text-[28px] font-light italic text-white/90 leading-[1.4]"
                style={serif}
              >
                Companies will pay to access relevant live audiences for product testing, feedback, or early customer discovery.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-t border-white/10 pt-8">
              <div
                className="text-[10px] tracking-[0.35em] uppercase text-white/40 mb-4"
                style={sans}
              >
                MVP Test
              </div>
              <p
                className="text-[16px] md:text-[19px] font-light text-white/75 leading-[1.75]"
                style={sans}
              >
                Create a landing page and manually match one company with one event organizer for a structured live audience interaction.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="border-t border-white/10 pt-8">
              <div
                className="text-[10px] tracking-[0.35em] uppercase text-white/40 mb-6"
                style={sans}
              >
                Success Metrics
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-4">
                {successMetrics.map((m) => (
                  <li
                    key={m}
                    className="text-[15px] md:text-[16px] text-white/70 font-light leading-[1.7] pl-5 relative"
                    style={sans}
                  >
                    <span className="absolute left-0 top-[13px] w-2 h-px bg-white/30" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p
              className="text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.85]"
              style={serif}
            >
              If the metrics hit, the product could scale into a full ThinkFloor platform.
              <br />
              If not, the format should be refined before building.
            </p>
          </Reveal>
        </div>
      </Chapter>

      <Divider />

      {/* 13 — Documents Behind the Work */}
      <Chapter number="13 — Documents Behind the Work">
        <SectionTitle>Documents Behind the Work</SectionTitle>
        <Body className="mb-16">
          A case study can only show part of the thinking. This document contains the research journey, personas, problem framing, value proposition canvas, leap-of-faith assumptions, and MVP experiment plan behind ThinkFloor.
        </Body>
        <div className="max-w-[900px] border-t border-white/10">
          <Reveal>
            <a
              href="#thinkfloor-deck"
              className="group block border-b border-white/10 px-2 md:px-8 py-10 md:py-14 hover:bg-white/[0.03] transition-colors duration-500"
            >
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-5"
                style={sans}
              >
                PDF Deck
              </div>
              <h4
                className="text-[28px] md:text-[38px] font-light text-white/95 mb-5 leading-[1.15]"
                style={serif}
              >
                ThinkFloor Value Proposition Deck
              </h4>
              <p
                className="text-[14px] md:text-[16px] text-white/55 font-light leading-[1.8] mb-8 max-w-[560px]"
                style={sans}
              >
                The original project deck covering discovery, interviews, insights, problem framing, value proposition canvas, leap-of-faith assumptions, and MVP experiment plan.
              </p>
              <span
                className="inline-block text-[11px] tracking-[0.35em] uppercase text-white/70 border-b border-white/20 pb-1 group-hover:text-white group-hover:border-white/60 transition-all duration-500"
                style={sans}
              >
                View Document →
              </span>
            </a>
          </Reveal>
        </div>
      </Chapter>

      <Divider />

      {/* 14 — What I Learned */}
      <Chapter number="14 — What I Learned">
        <SectionTitle>What ThinkFloor changed in how I think.</SectionTitle>
        <div className="space-y-6 max-w-[700px]">
          <Body>
            ThinkFloor taught me that monetization is not only about charging more.
          </Body>
          <Body>
            It is about understanding what value already exists in a system and designing a better way for that value to be exchanged.
          </Body>
          <p
            className="text-[22px] md:text-[30px] italic font-light text-white/90 leading-[1.4] pt-4"
            style={serif}
          >
            The audience was already there.
            <br />
            The attention was already there.
            <br />
            The missing product was the structure.
          </p>
        </div>
      </Chapter>

      <Divider />

      {/* 15 — Next Chapter */}
      <section
        className="relative w-full px-6 md:px-16 py-24 md:py-40"
        style={{ backgroundColor: "rgba(5,5,5,0.7)" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div
              className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-10"
              style={sans}
            >
              Next Chapter
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="text-[64px] md:text-[112px] leading-[0.95] font-light text-white mb-8"
              style={serif}
            >
              ReEarth
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p
              className="text-[20px] md:text-[28px] font-light italic text-white/70 leading-[1.35] mb-14 max-w-[720px]"
              style={serif}
            >
              Exploring sustainability compliance for SMEs.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <a
              href="/work/reearth"
              className="inline-block text-[11px] tracking-[0.4em] uppercase text-white/80 border-b border-white/25 pb-1 hover:text-white hover:border-white/70 transition-all duration-500"
              style={sans}
            >
              Continue Reading →
            </a>
          </Reveal>

          <div
            className="mt-24 pt-10 border-t border-white/5 flex justify-between items-center text-[10px] tracking-[0.4em] uppercase text-white/25"
            style={sans}
          >
            <Link to="/" className="hover:text-white/60 transition-colors duration-500">
              ← Back to Library
            </Link>
            <span>Fin. — Chapter II · 02</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThinkFloor;
