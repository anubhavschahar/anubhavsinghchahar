import { Link } from "react-router-dom";
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

const drivers = [
  "Stricter EPR enforcement",
  "ESG and BRSR reporting pressure",
  "Fake or unverifiable certificates",
  "Fragmented recycler networks",
  "Rising plastic waste",
  "Audit and brand credibility risks",
];

const stakeholders = [
  "Plastic-producing SMEs",
  "D2C brands",
  "FMCG startups",
  "Verified recyclers",
  "PROs",
  "CPCB consultants",
  "Sustainability auditors",
  "CA firms",
  "Packaging manufacturers",
  "Logistics partners",
  "Regulators",
];

const questionsA = [
  "How is EPR compliance handled step by step?",
  "Where does the process create the most friction or uncertainty?",
  "How do you verify whether certificates are genuine and audit-safe?",
  "How do EPR costs behave over time?",
  "What would concern you about a new subscription-based compliance model?",
];

const questionsB = [
  "How does the compliance workflow operate end to end?",
  "Where do compliance failures typically happen?",
  "How transparent is the recycling value chain today?",
  "What factors influence pricing variation?",
  "Would the ecosystem accept a centralized subscription-based model?",
];

const vp = [
  { label: "For", text: "Plastic-producing SMEs and D2C brands" },
  {
    label: "Who struggle with",
    text: "Unreliable recyclers, fake certificates, unpredictable pricing, and audit pressure",
  },
  {
    label: "ReEarth provides",
    text: "Verified recycling, CPCB-aligned certificates, real-time tracking, audit-ready reports, and predictable monthly costs",
  },
  {
    label: "Unlike",
    text: "Traditional PRO contracts, credit marketplaces, and manual compliance processes",
  },
  {
    label: "ReEarth creates",
    text: "A trusted, subscription-based compliance layer for recycling.",
  },
];

const bmc = [
  {
    label: "Customer Segments",
    items: [
      "Plastic-producing SMEs",
      "D2C brands using plastic packaging",
      "FMCG startups",
      "E-commerce private labels",
      "Mid-sized consumer brands without in-house compliance teams",
    ],
  },
  {
    label: "Value Propositions",
    items: [
      "Verified recycler network",
      "CPCB-aligned authentic certificates",
      "Predictable subscription pricing",
      "Real-time compliance dashboard",
      "Audit-ready documentation",
    ],
  },
  {
    label: "Channels",
    items: [
      "LinkedIn outreach to founders",
      "CA firm partnerships",
      "Compliance consultant partnerships",
      "Cold email targeting D2C brands",
    ],
  },
  {
    label: "Customer Relationships",
    items: [
      "Dedicated compliance manager",
      "Onboarding and compliance audit mapping",
      "Monthly compliance report review",
      "Renewal-based annual subscription",
    ],
  },
  {
    label: "Revenue Stream",
    items: ["Subscription Model"],
  },
];

const mvpPillars = [
  "Verified recycler network",
  "Digital certificate verification engine",
  "Real-time compliance dashboard",
  "Monthly audit-ready reports",
  "Compliance obligation mapping",
  "Recycler verification and auditing",
  "Regulatory update monitoring",
  "Dedicated compliance manager support",
];

const asIs = [
  "Manual EPR certificate generation",
  "Fake and unverifiable recyclers",
  "No centralized data repository",
  "Limited audit capability",
  "High compliance failures",
  "Poor segregation and tracking",
];

const toBe = [
  "Fully digital EPR compliance platform",
  "Verified recycler registry",
  "QR and blockchain-based traceability",
  "Auto compliance dashboards",
  "Real-time ESG and BRSR reporting",
  "Transparent, fraud-free certificate system",
];

const risks = [
  "Regulatory changes in EPR and waste management rules",
  "Data falsification or manipulation by stakeholders",
  "Cybersecurity threats",
  "Low adoption by informal recyclers and waste pickers",
  "Insufficient recycler processing capacity",
  "Resistance from municipalities due to infrastructure gaps",
];

const documents = [
  {
    type: "PDF Deck",
    title: "ReEarth Pitch Deck",
    text:
      "The original venture concept explaining the problem, value proposition, competitors, why-now framing, and ReEarth’s subscription-based compliance model.",
    cta: "View Deck →",
    href: "/__l5e/assets-v1/29b3cad7-2387-4f83-905d-264ecbeed0ea/ReEarth-Pitch-Deck.pptx",
  },
  {
    type: "Canvas",
    title: "Business Model Canvas",
    text:
      "The business model behind ReEarth, including key partners, value propositions, customer segments, channels, customer relationships, cost structure, and revenue streams.",
    cta: "View Canvas →",
    href: "/__l5e/assets-v1/aa39a11a-8add-4fad-9521-64710fd219ce/ReEarth-Business-Model-Canvas.pdf",
  },
  {
    type: "Research",
    title: "Research Questions",
    text:
      "The interview question bank designed for compliance heads, company owners, PROs, and EPR providers.",
    cta: "Read Questions →",
    href: "/__l5e/assets-v1/caf7b9e2-b890-48eb-be6f-92561a4188e2/ReEarth-Research-Questions.pdf",
  },
  {
    type: "Report",
    title: "Sustainability Practices Report",
    text:
      "The industry-level research report on India’s recycling and waste management sector, EPR systems, ESG pressures, risks, and digital traceability requirements.",
    cta: "Read Report →",
    href: "/__l5e/assets-v1/7d391d83-69fb-4ddb-bda9-f4098679073f/Sustainability-Practices-Report.pdf",
  },
];

const ReEarth = () => {
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
              "radial-gradient(ellipse at 15% 15%, rgba(20,35,25,0.4) 0%, transparent 55%), radial-gradient(ellipse at 85% 85%, rgba(25,30,20,0.35) 0%, transparent 55%), #0A0A0A",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Top nav bar */}
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
            Chapter II · 03
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
              ReEarth
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p
              className="text-[28px] md:text-[46px] lg:text-[54px] leading-[1.1] font-light italic text-white/90 mb-14 max-w-[880px]"
              style={serif}
            >
              Making EPR compliance
              <br />
              predictable for SMEs.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="max-w-[640px] space-y-6">
              <Body>
                For many small and mid-sized businesses, sustainability compliance is not ignored because they do not care.
              </Body>
              <Body>
                It is delayed because the system is fragmented, expensive, unpredictable, and difficult to verify.
              </Body>
              <Body>ReEarth began with one question:</Body>
              <p
                className="text-[22px] md:text-[30px] leading-[1.3] font-light italic text-white/85 pl-6 border-l border-white/20"
                style={serif}
              >
                How might we help plastic-producing SMEs manage EPR compliance without being surprised by fluctuating costs, unreliable recyclers, or audit risks?
              </p>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 border-t border-white/10 pt-10">
              {[
                { l: "Role", v: "Sustainability Research · Business Model Design · Product Strategy" },
                { l: "Project Type", v: "Subscription-Based Compliance Product Concept" },
                { l: "Focus", v: "EPR Compliance · ESG Reporting · Waste Traceability" },
                { l: "Tagline", v: "Where Recycling Meets Planet Restoration" },
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

      {/* 02 — The Problem */}
      <Chapter number="02 — The Problem">
        <SectionTitle>
          Compliance was not just difficult.
          <br />
          It was unpredictable.
        </SectionTitle>
        <div className="space-y-6 mb-16">
          <Body>
            India’s recycling and waste management ecosystem is becoming increasingly compliance-driven, but many SMEs still manage EPR obligations through fragmented recyclers, manual documentation, and unclear pricing.
          </Body>
          <Body>
            For businesses, the pain was not only the regulation itself.
            <br />
            The pain was the uncertainty around whether their recycling claims, certificates, and documentation would actually hold up during audits.
          </Body>
        </div>
        <Reveal delay={200}>
          <blockquote className="pl-6 md:pl-10 border-l border-white/20 max-w-[900px]">
            <p
              className="text-[26px] md:text-[40px] lg:text-[46px] leading-[1.2] font-light italic text-white/90"
              style={serif}
            >
              The issue was not lack of intent.
              <br />
              It was lack of trust, visibility, and predictability.
            </p>
          </blockquote>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 03 — Why this mattered now */}
      <Chapter number="03 — Why This Mattered Now">
        <SectionTitle>Why now?</SectionTitle>
        <div className="space-y-6 mb-16 max-w-[720px]">
          <Body>
            India’s EPR regulations are becoming stricter, ESG reporting pressure is increasing, and companies are expected to prove sustainability claims with verified data rather than broad promises.
          </Body>
          <Body>
            The recycling industry is moving from informal, fragmented operations toward more structured compliance systems focused on traceability, audit readiness, and digital reporting.
          </Body>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0 max-w-[900px]">
          {drivers.map((d, i) => (
            <Reveal key={d} delay={i * 70}>
              <div className="border-t border-white/10 py-6">
                <div
                  className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-2"
                  style={sans}
                >
                  Driver {String(i + 1).padStart(2, "0")}
                </div>
                <p
                  className="text-[18px] md:text-[22px] font-light italic text-white/85 leading-[1.4]"
                  style={serif}
                >
                  {d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Chapter>

      <Divider />

      {/* 04 — The System */}
      <Chapter number="04 — The System">
        <SectionTitle>The problem lived inside a system.</SectionTitle>
        <div className="space-y-6 mb-16 max-w-[720px]">
          <Body>
            ReEarth was not a single-user problem. It involved producers, recyclers, PROs, auditors, consultants, regulators, logistics partners, and certificate providers.
          </Body>
          <Body>
            To understand the opportunity, I mapped the ecosystem around waste traceability, EPR certificates, recycler verification, and compliance reporting.
          </Body>
        </div>
        <Reveal delay={200}>
          <div className="border-t border-white/10 pt-10 max-w-[1000px]">
            <div
              className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-8"
              style={sans}
            >
              Ecosystem Map
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-5">
              {stakeholders.map((s, i) => (
                <span
                  key={s}
                  className="text-[18px] md:text-[24px] font-light italic text-white/70 leading-[1.3]"
                  style={serif}
                >
                  {s}
                  {i < stakeholders.length - 1 && (
                    <span className="text-white/20 ml-8">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 05 — What we needed to understand */}
      <Chapter number="05 — What We Needed to Understand">
        <SectionTitle>Before designing the product, I needed better questions.</SectionTitle>
        <Body className="mb-16">
          Because compliance is a high-trust and high-risk space, the research could not begin with solution ideas. It had to begin with how companies currently manage EPR, where uncertainty appears, and what would make a new model trustworthy.
        </Body>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 max-w-[1000px]">
          {[
            { title: "Questions for compliance heads / company owners", items: questionsA },
            { title: "Questions for EPR / PRO / compliance providers", items: questionsB },
          ].map((g, gi) => (
            <Reveal key={g.title} delay={gi * 120}>
              <div className="border-t border-white/10 pt-8">
                <h4
                  className="text-[20px] md:text-[24px] font-light italic text-white/90 mb-8 leading-[1.35]"
                  style={serif}
                >
                  {g.title}
                </h4>
                <ul className="space-y-5">
                  {g.items.map((q) => (
                    <li
                      key={q}
                      className="text-[14px] md:text-[15px] text-white/65 font-light leading-[1.75] pl-5 relative"
                      style={sans}
                    >
                      <span className="absolute left-0 top-[13px] w-2 h-px bg-white/30" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={260}>
          <p
            className="mt-16 text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.85] max-w-[760px]"
            style={serif}
          >
            The research challenge was not only finding answers.
            <br />
            It was knowing what questions would reveal trust, risk, and adoption barriers.
          </p>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 06 — The Root Cause */}
      <Chapter number="06 — The Root Cause">
        <SectionTitle>The real problem was structural.</SectionTitle>
        <Body className="mb-14">
          The current EPR ecosystem has too many disconnected actors and too little shared visibility. Businesses depend on external recyclers and compliance providers, but often lack a reliable way to verify whether recycling activity, certificates, and reports are authentic.
        </Body>
        <Reveal delay={150}>
          <div className="border-t border-white/10 pt-10 max-w-[900px]">
            <div
              className="text-[10px] tracking-[0.35em] uppercase text-white/40 mb-6"
              style={sans}
            >
              Root Cause
            </div>
            <p
              className="text-[24px] md:text-[36px] font-light italic text-white/90 leading-[1.3]"
              style={serif}
            >
              A fragmented compliance ecosystem with no unified, transparent, or accountable system for verified recycling.
            </p>
          </div>
        </Reveal>
        <Reveal delay={240}>
          <p
            className="mt-14 text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.85] max-w-[720px]"
            style={serif}
          >
            The opportunity was not just to digitize compliance.
            <br />
            It was to make trust visible.
          </p>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 07 — The Product Hypothesis */}
      <Chapter number="07 — The Product Hypothesis">
        <SectionTitle>The subscription hypothesis.</SectionTitle>
        <Body className="mb-14">
          The hypothesis was that SMEs would prefer predictable monthly compliance support over unpredictable one-time recycler or PRO arrangements if the platform could provide verification, reporting, and audit readiness.
        </Body>
        <Reveal delay={150}>
          <blockquote className="pl-6 md:pl-10 border-l border-white/20 mb-16 md:mb-20 max-w-[900px]">
            <p
              className="text-[30px] md:text-[46px] lg:text-[54px] leading-[1.15] font-light italic text-white/90"
              style={serif}
            >
              ReEarth makes EPR compliance feel less like a chase
              <br />
              and more like a subscription.
            </p>
          </blockquote>
        </Reveal>
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

      {/* 08 — Business Model */}
      <Chapter number="08 — Business Model">
        <SectionTitle>A business model built around predictability.</SectionTitle>
        <Body className="mb-16">
          The business model was designed around recurring subscriptions instead of uncertain one-off compliance transactions.
        </Body>
        <div className="max-w-[1000px]">
          {bmc.map((b, i) => (
            <Reveal key={b.label} delay={i * 80}>
              <div
                className={`grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-14 py-10 border-t border-white/10 ${
                  i === bmc.length - 1 ? "border-b" : ""
                }`}
              >
                <div
                  className="text-[10px] tracking-[0.35em] uppercase text-white/40 pt-2"
                  style={sans}
                >
                  {b.label}
                </div>
                <ul className="space-y-3">
                  {b.items.map((it) => (
                    <li
                      key={it}
                      className="text-[16px] md:text-[19px] font-light text-white/80 leading-[1.55]"
                      style={serif}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Chapter>

      <Divider />

      {/* 09 — Product Direction */}
      <Chapter number="09 — Product Direction">
        <SectionTitle>What ReEarth would build.</SectionTitle>
        <Body className="mb-16">
          The product direction focused on reducing uncertainty across the compliance journey.
        </Body>
        <ol className="max-w-[900px]">
          {mvpPillars.map((p, i) => (
            <Reveal key={p} delay={i * 60}>
              <li
                className={`grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-10 items-start py-7 border-t border-white/10 ${
                  i === mvpPillars.length - 1 ? "border-b" : ""
                }`}
              >
                <div
                  className="text-[24px] md:text-[36px] font-light italic text-white/40"
                  style={serif}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p
                  className="text-[18px] md:text-[24px] font-light text-white/85 leading-[1.4]"
                  style={serif}
                >
                  {p}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={200}>
          <p
            className="mt-14 text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.85] max-w-[760px]"
            style={serif}
          >
            The product was not trying to replace the regulatory system.
            <br />
            It was trying to help SMEs survive inside it with more clarity and less risk.
          </p>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 10 — As-Is vs To-Be */}
      <Chapter number="10 — As-Is vs To-Be">
        <SectionTitle>From manual compliance to traceable compliance.</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-[1000px]">
          {[
            { label: "As-Is", items: asIs },
            { label: "To-Be", items: toBe },
          ].map((col, ci) => (
            <Reveal key={col.label} delay={ci * 120}>
              <div className="border-t border-white/10 pt-8">
                <div
                  className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-8"
                  style={sans}
                >
                  {col.label}
                </div>
                <ul className="space-y-5">
                  {col.items.map((it) => (
                    <li
                      key={it}
                      className="text-[18px] md:text-[22px] font-light italic text-white/85 leading-[1.4]"
                      style={serif}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Chapter>

      <Divider />

      {/* 11 — Risks and Constraints */}
      <Chapter number="11 — Risks and Constraints">
        <SectionTitle>The hard parts mattered most.</SectionTitle>
        <Body className="mb-16">
          ReEarth operates in a regulated and trust-heavy environment. That meant the biggest risks were not only product risks, but ecosystem risks.
        </Body>
        <ol className="max-w-[900px]">
          {risks.map((r, i) => (
            <Reveal key={r} delay={i * 60}>
              <li
                className={`grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-10 items-start py-7 border-t border-white/10 ${
                  i === risks.length - 1 ? "border-b" : ""
                }`}
              >
                <div
                  className="text-[10px] tracking-[0.35em] uppercase text-white/40 pt-2"
                  style={sans}
                >
                  Risk {String(i + 1).padStart(2, "0")}
                </div>
                <p
                  className="text-[17px] md:text-[22px] font-light text-white/80 leading-[1.45]"
                  style={serif}
                >
                  {r}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={220}>
          <p
            className="mt-14 text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.85] max-w-[760px]"
            style={serif}
          >
            This project taught me that in regulated markets, a product is only as strong as the trust system around it.
          </p>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 12 — Documents Behind the Work */}
      <Chapter number="12 — Documents Behind the Work">
        <SectionTitle>Documents Behind the Work</SectionTitle>
        <Body className="mb-16">
          A case study can only show part of the thinking. These documents contain the research, business model, questions, industry analysis, and product reasoning that shaped ReEarth.
        </Body>
        <div className="max-w-[1000px] border-t border-white/10">
          {documents.map((d) => (
            <Reveal key={d.title}>
              <a
                href={d.href}
                className="group block border-b border-white/10 px-2 md:px-8 py-10 md:py-14 hover:bg-white/[0.03] transition-colors duration-500"
              >
                <div
                  className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-5"
                  style={sans}
                >
                  {d.type}
                </div>
                <h4
                  className="text-[26px] md:text-[36px] font-light text-white/95 mb-5 leading-[1.15]"
                  style={serif}
                >
                  {d.title}
                </h4>
                <p
                  className="text-[14px] md:text-[16px] text-white/55 font-light leading-[1.8] mb-8 max-w-[620px]"
                  style={sans}
                >
                  {d.text}
                </p>
                <span
                  className="inline-block text-[11px] tracking-[0.35em] uppercase text-white/70 border-b border-white/20 pb-1 group-hover:text-white group-hover:border-white/60 transition-all duration-500"
                  style={sans}
                >
                  {d.cta}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Chapter>

      <Divider />

      {/* 13 — What I Learned */}
      <Chapter number="13 — What I Learned">
        <SectionTitle>What ReEarth changed in how I think.</SectionTitle>
        <div className="space-y-6 max-w-[720px]">
          <Body>
            ReEarth taught me that some product problems cannot be solved by designing a better interface alone.
          </Body>
          <Body>In compliance-heavy markets, the real product is often trust.</Body>
          <p
            className="text-[22px] md:text-[30px] italic font-light text-white/90 leading-[1.4] pt-4"
            style={serif}
          >
            The dashboard matters.
            <br />
            The reports matter.
            <br />
            The pricing matters.
          </p>
          <Body>But the deeper value is certainty.</Body>
          <Body>
            ReEarth helped me understand that good products in complex systems do not simply make work easier. They make risk easier to see, manage, and reduce.
          </Body>
        </div>
      </Chapter>

      <Divider />

      {/* 14 — Next Chapter */}
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
              className="text-[56px] md:text-[104px] leading-[0.95] font-light text-white mb-8"
              style={serif}
            >
              Subspace.money Product Teardown
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p
              className="text-[20px] md:text-[28px] font-light italic text-white/70 leading-[1.35] mb-14 max-w-[720px]"
              style={serif}
            >
              Finding the gap between product promise and product reality.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <a
              href="/work/subspace-teardown"
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
            <a href="/#work" className="hover:text-white/60 transition-colors duration-500">← Back to Library</a>
            <span>Fin. — Chapter II · 03</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReEarth;
