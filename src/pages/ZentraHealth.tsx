import Reveal from "@/components/Reveal";

const serif = { fontFamily: "'Cormorant Garamond', serif" } as const;
const sans = { fontFamily: "'Inter', sans-serif" } as const;

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
    className={`text-[15px] md:text-[17px] text-white/60 font-light leading-[1.9] max-w-[680px] ${className}`}
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
        <div
          className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-8"
          style={sans}
        >
          {number}
        </div>
      </Reveal>
      <Reveal delay={80}>{children}</Reveal>
    </div>
  </section>
);

const challengeMetrics = [
  { l: "ARR", v: "₹68 Cr against a ₹95 Cr target" },
  { l: "Monthly Active Users", v: "31% of registered employees" },
  { l: "Net Revenue Retention", v: "88%" },
  { l: "Gross Margin", v: "58% vs 72–78% SaaS benchmark" },
  { l: "Technical Debt", v: "28% of engineering effort" },
];

const assets = [
  "Clinical network",
  "Health data",
  "ZenBand hardware",
  "ZenMind mental-health module",
  "Enterprise client relationships",
  "ABDM integration capability",
];

const vrioMatrix = [
  { asset: "Clinical network", value: "Yes", rare: "Partial", imitate: "No", org: "Partial" },
  { asset: "Health data", value: "Yes", rare: "Yes", imitate: "Partial", org: "No" },
  { asset: "ZenBand hardware", value: "Partial", rare: "No", imitate: "No", org: "No" },
  { asset: "ZenMind module", value: "Yes", rare: "Partial", imitate: "Partial", org: "Partial" },
  { asset: "Enterprise relationships", value: "Yes", rare: "Partial", imitate: "No", org: "Partial" },
  { asset: "ABDM integration", value: "Yes", rare: "No", imitate: "No", org: "Partial" },
];

const valueCreators = [
  "ZenOS enterprise platform packaging",
  "ZenMind customer value",
  "Early ZenData monetisation",
];
const valueDestroyers = [
  "Long enterprise sales cycles",
  "Low sales productivity",
  "Loss-making ZenBand hardware",
  "Technical debt",
  "Weak expansion revenue",
  "High client concentration",
];

const flywheel = [
  "More enterprise users",
  "More consented health signals",
  "Better risk identification",
  "Better interventions",
  "Measurable outcomes",
  "Stronger employer ROI",
  "Higher retention and expansion",
  "More users",
];

const moatLayers = [
  "Longitudinal health data",
  "ZenMind engagement",
  "Clinical interventions",
  "Employer workflows",
  "Outcome measurement",
  "Trust and compliance",
  "Segment-specific benchmarking",
];

const first90 = [
  "Freeze non-defensible ZenBand expansion",
  "Reduce investment in commoditised content",
  "Restore product leadership",
  "Improve app reliability",
  "Improve onboarding and activation",
  "Reduce clinical waiting times",
  "Strengthen customer success",
  "Build a minimum viable data foundation",
  "Create separate ZenMind and ZenData packages",
];

const months418 = [
  "Launch paid ZenMind and ZenData modules",
  "Build outcome-linked data pipelines",
  "Develop proprietary risk and intervention models",
  "Integrate with enterprise workflows",
  "Improve compliance readiness",
  "Develop a focused GCC proposition",
  "Move Net Revenue Retention above 100% as an interim target",
];

const metrics = [
  { n: "0", l: "Sustainable VRIO assets today" },
  { n: "31%", l: "Registered users active monthly" },
  { n: "₹21.7 Cr", l: "Conservative sales-productivity opportunity identified" },
  { n: "18 months", l: "Recommended transformation roadmap" },
];

const ZentraHealth = () => {
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
              "radial-gradient(ellipse at 20% 10%, rgba(25,25,35,0.5) 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(30,25,30,0.4) 0%, transparent 55%), #0A0A0A",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Top nav */}
      <div className="relative z-10 w-full px-6 md:px-16 pt-8 md:pt-10">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <a
            href="/#work"
            className="text-[11px] tracking-[0.4em] uppercase text-white/70 hover:text-white transition-colors duration-500"
            style={sans}
          >← Back to Library</a>
          <span
            className="text-[10px] tracking-[0.5em] uppercase text-white/30"
            style={sans}
          >
            Chapter II · 05
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
              MBA Capstone · Product Strategy
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="text-[52px] md:text-[92px] lg:text-[112px] leading-[0.95] font-light tracking-tight text-white mb-10"
              style={serif}
            >
              Building a Defensible Advantage in Digital Health
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p
              className="text-[24px] md:text-[38px] lg:text-[44px] leading-[1.2] font-light italic text-white/90 mb-14 max-w-[880px]"
              style={serif}
            >
              Evaluating ZentraHealth's strategic assets and designing an enterprise-health outcomes moat.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="max-w-[680px] space-y-6">
              <Body>
                ZentraHealth had built a broad digital-health ecosystem spanning enterprise wellness, mental health, clinical services, wearables, and analytics. But breadth had not translated into defensibility, customer retention, or sustainable economics.
              </Body>
              <Body>
                As part of a three-member capstone team, I contributed to evaluating the company's competitive position, identifying where its value chain created and destroyed value, and designing a focused 18-month strategic roadmap.
              </Body>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 border-t border-white/10 pt-10">
              {[
                { l: "Role", v: "Product Strategy and Competitive Analysis" },
                { l: "Context", v: "MBA Technology Management Capstone" },
                { l: "Team", v: "Three members" },
                { l: "Frameworks", v: "VRIO · Porter's Value Chain · Competitive Benchmarking" },
                { l: "Deliverables", v: "Board-style presentation and detailed strategy report" },
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

          <Reveal delay={500}>
            <p
              className="mt-14 text-[13px] md:text-[14px] italic text-white/45 font-light leading-[1.7] max-w-[720px]"
              style={serif}
            >
              An academic MBA capstone case study. Not professional employment, client consulting, or work completed directly for ZentraHealth.
            </p>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* 01 — The Strategic Challenge */}
      <Chapter number="01 — The Strategic Challenge">
        <SectionTitle>ZentraHealth was operating at a critical crossroads.</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 max-w-[980px]">
          {challengeMetrics.map((m, i) => (
            <Reveal key={m.l} delay={i * 80}>
              <div className="border-t border-white/10 pt-6">
                <div
                  className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-3"
                  style={sans}
                >
                  {m.l}
                </div>
                <p
                  className="text-[18px] md:text-[22px] font-light italic text-white/85 leading-[1.4]"
                  style={serif}
                >
                  {m.v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="border-l border-white/20 pl-6 md:pl-10 max-w-[780px]">
            <div
              className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4"
              style={sans}
            >
              Central Question
            </div>
            <p
              className="text-[22px] md:text-[30px] leading-[1.3] font-light italic text-white/90"
              style={serif}
            >
              Did ZentraHealth possess a genuinely defensible competitive advantage—or only a collection of valuable but easily replicable capabilities?
            </p>
          </div>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 02 — My Approach */}
      <Chapter number="02 — My Approach">
        <SectionTitle>Three lenses, six assets, one honest verdict.</SectionTitle>
        <Body className="mb-14">
          The analysis combined VRIO across six strategic assets, Porter's Value Chain to see where value was created and destroyed, and competitive benchmarking against direct and adjacent players.
        </Body>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 max-w-[1000px] mb-16">
          {[
            { l: "Lens 01", v: "VRIO analysis of six assets" },
            { l: "Lens 02", v: "Porter's Value Chain" },
            { l: "Lens 03", v: "Competitive benchmarking" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="border-t border-white/15 pt-8">
                <div
                  className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4"
                  style={sans}
                >
                  {s.l}
                </div>
                <p
                  className="text-[18px] md:text-[22px] font-light italic text-white/85 leading-[1.4]"
                  style={serif}
                >
                  {s.v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={260}>
          <div
            className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6"
            style={sans}
          >
            The Six Assets Assessed
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 max-w-[840px]">
            {assets.map((a) => (
              <li
                key={a}
                className="text-[15px] md:text-[17px] text-white/70 font-light leading-[1.8] pl-5 relative"
                style={sans}
              >
                <span className="absolute left-0 top-[13px] w-2 h-px bg-white/30" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 03 — What the Analysis Revealed */}
      <Chapter number="03 — What the Analysis Revealed">
        <SectionTitle>None of the six assets currently satisfied all four VRIO conditions.</SectionTitle>

        {/* VRIO matrix */}
        <Reveal delay={100}>
          <div className="overflow-x-auto border-t border-white/10 pt-6 mb-16 max-w-[980px]">
            <table className="w-full text-left" style={sans}>
              <thead>
                <tr className="text-[10px] tracking-[0.35em] uppercase text-white/40">
                  <th className="py-4 pr-6 font-normal">Asset</th>
                  <th className="py-4 pr-6 font-normal">Valuable</th>
                  <th className="py-4 pr-6 font-normal">Rare</th>
                  <th className="py-4 pr-6 font-normal">Hard to Imitate</th>
                  <th className="py-4 font-normal">Organised</th>
                </tr>
              </thead>
              <tbody>
                {vrioMatrix.map((r) => (
                  <tr key={r.asset} className="border-t border-white/10">
                    <td className="py-5 pr-6 text-[15px] md:text-[16px] text-white/85 font-light italic" style={serif}>
                      {r.asset}
                    </td>
                    <td className="py-5 pr-6 text-[13px] md:text-[14px] text-white/60 font-light">{r.value}</td>
                    <td className="py-5 pr-6 text-[13px] md:text-[14px] text-white/60 font-light">{r.rare}</td>
                    <td className="py-5 pr-6 text-[13px] md:text-[14px] text-white/60 font-light">{r.imitate}</td>
                    <td className="py-5 text-[13px] md:text-[14px] text-white/60 font-light">{r.org}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-[1000px] mb-14">
          <Reveal delay={140}>
            <div>
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4"
                style={sans}
              >
                Strongest Today — ZenMind
              </div>
              <p className="text-[18px] md:text-[22px] font-light italic text-white/85 leading-[1.4] mb-6" style={serif}>
                The clearest demonstrated satisfaction signal in the portfolio.
              </p>
              <ul className="space-y-3 mb-6">
                {["NPS of 42", "Adoption across 68 enterprise clients", "Strongest satisfaction signal in the portfolio"].map((q) => (
                  <li key={q} className="text-[14px] md:text-[15px] text-white/65 font-light leading-[1.75] pl-5 relative" style={sans}>
                    <span className="absolute left-0 top-[13px] w-2 h-px bg-white/30" />
                    {q}
                  </li>
                ))}
              </ul>
              <Body>
                However, it was bundled, under-sold, and lacked separate pricing and measurable outcome evidence.
              </Body>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div>
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4"
                style={sans}
              >
                Highest Potential — Health Data
              </div>
              <p className="text-[18px] md:text-[22px] font-light italic text-white/85 leading-[1.4] mb-6" style={serif}>
                A large signal base without the infrastructure to convert it into advantage.
              </p>
              <ul className="space-y-3 mb-6">
                {["3.8 crore health-data points", "380,000 registered users"].map((q) => (
                  <li key={q} className="text-[14px] md:text-[15px] text-white/65 font-light leading-[1.75] pl-5 relative" style={sans}>
                    <span className="absolute left-0 top-[13px] w-2 h-px bg-white/30" />
                    {q}
                  </li>
                ))}
              </ul>
              <Body className="mb-4">However, the company lacked:</Body>
              <ul className="space-y-3">
                {["A structured data lake", "A mature machine-learning pipeline", "Proprietary health models", "Adequate data-science capacity"].map((q) => (
                  <li key={q} className="text-[14px] md:text-[15px] text-white/65 font-light leading-[1.75] pl-5 relative" style={sans}>
                    <span className="absolute left-0 top-[13px] w-2 h-px bg-white/30" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="border-l border-white/20 pl-6 md:pl-10 max-w-[780px]">
            <div
              className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4"
              style={sans}
            >
              Key Insight
            </div>
            <p
              className="text-[22px] md:text-[30px] leading-[1.3] font-light italic text-white/90"
              style={serif}
            >
              ZentraHealth had a database, but not yet a data advantage.
            </p>
          </div>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 04 — Where Value Was Created and Destroyed */}
      <Chapter number="04 — Where Value Was Created and Destroyed">
        <SectionTitle>The value chain was leaking faster than it was compounding.</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-[1000px] mb-16">
          <Reveal delay={100}>
            <div className="border-t border-white/15 pt-8">
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6"
                style={sans}
              >
                Value Creators
              </div>
              <ul className="space-y-4">
                {valueCreators.map((q) => (
                  <li key={q} className="text-[16px] md:text-[18px] font-light italic text-white/85 leading-[1.4]" style={serif}>
                    — {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="border-t border-white/15 pt-8">
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6"
                style={sans}
              >
                Value Destroyers
              </div>
              <ul className="space-y-4">
                {valueDestroyers.map((q) => (
                  <li key={q} className="text-[16px] md:text-[18px] font-light italic text-white/70 leading-[1.4]" style={serif}>
                    — {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={260}>
          <div className="border-l border-white/20 pl-6 md:pl-10 max-w-[820px]">
            <div
              className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4"
              style={sans}
            >
              Quantified Opportunity (Estimated)
            </div>
            <p
              className="text-[22px] md:text-[30px] leading-[1.3] font-light italic text-white/90 mb-4"
              style={serif}
            >
              ₹21.7 Cr conservative sales-productivity opportunity identified through analysis.
            </p>
            <p className="text-[13px] md:text-[14px] text-white/45 font-light leading-[1.7] italic" style={serif}>
              Presented as an estimated opportunity, not revenue generated.
            </p>
          </div>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 05 — The Strategic Recommendation */}
      <Chapter number="05 — The Strategic Recommendation">
        <SectionTitle>Stop being a broad wellness platform. Become an enterprise health-intelligence platform.</SectionTitle>

        <div className="space-y-6 mb-14 max-w-[720px]">
          <Body>
            ZentraHealth should stop positioning itself as a broad wellness platform.
          </Body>
          <Body>
            It should reposition itself as an enterprise preventive-health and mental-health intelligence platform, initially focused on high-value GCC employers.
          </Body>
        </div>

        {/* Flywheel */}
        <Reveal delay={140}>
          <div
            className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6"
            style={sans}
          >
            The Enterprise Health Outcomes Flywheel
          </div>
          <div className="border border-white/10 rounded-sm p-6 md:p-10 mb-16 max-w-[980px]">
            <ol className="space-y-4">
              {flywheel.map((step, i) => (
                <li key={step} className="flex items-baseline gap-4">
                  <span
                    className="text-[10px] tracking-[0.35em] uppercase text-white/30 w-8 shrink-0"
                    style={sans}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[16px] md:text-[20px] font-light italic text-white/85 leading-[1.4]"
                    style={serif}
                  >
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div
            className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6"
            style={sans}
          >
            The Proposed Moat Combines
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 max-w-[900px]">
            {moatLayers.map((a) => (
              <li
                key={a}
                className="text-[15px] md:text-[17px] text-white/75 font-light leading-[1.8] pl-5 relative"
                style={sans}
              >
                <span className="absolute left-0 top-[13px] w-2 h-px bg-white/30" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 06 — Roadmap */}
      <Chapter number="06 — 90-Day and 18-Month Roadmap">
        <SectionTitle>Contain the leaks first. Compound the moat second.</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-[1000px]">
          <Reveal delay={100}>
            <div className="border-t border-white/15 pt-8">
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6"
                style={sans}
              >
                First 90 Days
              </div>
              <ul className="space-y-4">
                {first90.map((q) => (
                  <li key={q} className="text-[14px] md:text-[16px] text-white/70 font-light leading-[1.75] pl-5 relative" style={sans}>
                    <span className="absolute left-0 top-[13px] w-2 h-px bg-white/30" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="border-t border-white/15 pt-8">
              <div
                className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6"
                style={sans}
              >
                Months 4–18
              </div>
              <ul className="space-y-4">
                {months418.map((q) => (
                  <li key={q} className="text-[14px] md:text-[16px] text-white/70 font-light leading-[1.75] pl-5 relative" style={sans}>
                    <span className="absolute left-0 top-[13px] w-2 h-px bg-white/30" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Chapter>

      <Divider />

      {/* Metrics */}
      <section className="relative w-full px-6 md:px-16 py-20 md:py-32" style={{ backgroundColor: "rgba(5,5,5,0.6)" }}>
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div
              className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-12"
              style={sans}
            >
              By the Numbers
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 border-t border-white/10 pt-12">
            {metrics.map((m, i) => (
              <Reveal key={m.l} delay={i * 100}>
                <div>
                  <div
                    className="text-[40px] md:text-[64px] leading-[1] font-light italic text-white/95 mb-4"
                    style={serif}
                  >
                    {m.n}
                  </div>
                  <p
                    className="text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-white/50 font-light leading-[1.6]"
                    style={sans}
                  >
                    {m.l}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* 07 — Final Takeaway */}
      <Chapter number="07 — Final Project Takeaway">
        <Reveal>
          <p
            className="text-[32px] md:text-[52px] lg:text-[60px] leading-[1.15] font-light italic text-white/95 mb-14 max-w-[980px]"
            style={serif}
          >
            ZentraHealth did not lack assets. It lacked a system that allowed those assets to reinforce one another.
          </p>
        </Reveal>
        <div className="space-y-6 max-w-[720px]">
          <Body>
            Product breadth can create operational complexity instead of competitive advantage—unless data, workflows, outcomes, and customer distribution work together as a connected system.
          </Body>
          <Body>
            The strongest strategic moves for ZentraHealth were not new products. They were the connections between the products it already had.
          </Body>
        </div>
      </Chapter>

      <Divider />

      {/* Closing nav */}
      <section className="relative w-full px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-white/10 pt-10">
          <a
            href="/#work"
            className="text-[11px] tracking-[0.4em] uppercase text-white/70 hover:text-white transition-colors duration-500"
            style={sans}
          >← Back to Library</a>
          <a
            href="/#journey"
            className="text-[11px] tracking-[0.4em] uppercase text-white/85 border-b border-white/25 pb-1 hover:text-white hover:border-white/70 transition-all duration-500"
            style={sans}
          >
            Chapter III — Journey →
          </a>
        </div>
      </section>
    </main>
  );
};

export default ZentraHealth;
