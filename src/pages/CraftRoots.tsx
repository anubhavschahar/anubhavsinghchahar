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

const Body = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
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

const whys = [
  { label: "Symptom", text: "Artisans in Channapatna are earning less." },
  { label: "Why 1", text: "Fewer customers are buying directly from them." },
  { label: "Why 2", text: "Tourists are not stopping in Channapatna anymore." },
  { label: "Why 3", text: "The Bengaluru–Mysuru expressway bypasses the town." },
  { label: "Why 4", text: "Artisans relied almost entirely on walk-in trade." },
  { label: "Root Cause", text: "They had no way to reach travellers before the trip." },
];

const stats = [
  { value: "71%", text: "rated strong interest in learning a local craft" },
  { value: "72%", text: "said they were likely to use a platform like CraftRoots" },
  { value: "58%", text: "were willing to pay ₹700+ per experience" },
  { value: "92%", text: "of artisans were open to hosting workshops" },
];

const verbs = [
  { title: "Discover", text: "Find verified artisan workshops nearby." },
  { title: "Trust", text: "Know the host, location, reviews, and authenticity before booking." },
  { title: "Participate", text: "Learn the craft, make something, and take it home." },
];

const pillars = [
  "Verified artisan profiles",
  "Experience discovery by location and craft",
  "Booking and payment flow",
  "Pre-session guidance",
  "Reviews and trust-building",
  "Artisan dashboard for availability, bookings, and earnings",
];

const journey = [
  { title: "Discover", text: "Browse verified experiences nearby." },
  { title: "Book", text: "Pick a date and pay securely." },
  { title: "Make", text: "Meet the artisan and learn by doing." },
  { title: "Keep", text: "Take home the piece and review the host." },
];

const metrics = [
  { label: "Adoption", value: "50–100", text: "bookings/month by month 3" },
  { label: "Participation", value: "70–80%", text: "booking-to-attendance rate" },
  { label: "Income Impact", value: "2–3×", text: "artisan earnings per session" },
  { label: "Satisfaction", value: "4.0+", text: "average rating · 80% report the experience as meaningful" },
];

import prdAsset from "@/assets/docs/prd.asset.json";
import deckAsset from "@/assets/docs/deck.asset.json";
import onepageAsset from "@/assets/docs/onepage.asset.json";
import competitorAsset from "@/assets/docs/competitor.asset.json";
import journeyAsset from "@/assets/docs/journey.asset.json";
import personasAsset from "@/assets/docs/personas.asset.json";

const documents = [
  {
    label: "Strategy",
    title: "Product Requirements Document",
    text: "The full product thinking behind CraftRoots — vision, users, features, roadmap, metrics, risks, and business model.",
    cta: "Read PRD →",
    href: prdAsset.url,
  },
  {
    label: "Narrative",
    title: "Pitch Deck",
    text: "The original CAUSE 2026 pitch narrative explaining the Channapatna pilot, 5 Whys, validation, solution, and success metrics.",
    cta: "View Deck →",
    href: deckAsset.url,
  },
  {
    label: "Summary",
    title: "One Page Document",
    text: "A concise narrative explaining the market gap, the two-sided audience, and the product vision.",
    cta: "Read Summary →",
    href: onepageAsset.url,
  },
  {
    label: "Market",
    title: "Competitor Analysis",
    text: "A study of OTAs, experience marketplaces, luxury operators, government portals, and e-commerce craft platforms.",
    cta: "Read Analysis →",
    href: competitorAsset.url,
  },
  {
    label: "Experience",
    title: "Customer Journey Map",
    text: "The end-to-end traveller journey from discovery and booking to workshop experience, feedback, loyalty, and advocacy.",
    cta: "View Journey →",
    href: journeyAsset.url,
  },
  {
    label: "Research",
    title: "Personas & Empathy Maps",
    text: "The traveller and artisan personas used to understand motivations, goals, behaviours, and pain points.",
    cta: "View Personas →",
    href: personasAsset.url,
  },
];

const CraftRoots = () => {
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
              "radial-gradient(ellipse at 20% 10%, rgba(40,30,20,0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(20,25,35,0.4) 0%, transparent 55%), #0A0A0A",
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
            Chapter II · 01
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
              CraftRoots
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p
              className="text-[28px] md:text-[46px] lg:text-[54px] leading-[1.1] font-light italic text-white/90 mb-14 max-w-[880px]"
              style={serif}
            >
              Turning a bypassed craft town
              <br />
              into a bookable experience.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="max-w-[640px] space-y-6">
              <Body>
                Channapatna has spent more than 200 years making wooden toys by hand. But when the new Bengaluru–Mysuru expressway bypassed the town, travellers stopped entering it.
              </Body>
              <Body>CraftRoots began with one question:</Body>
              <p
                className="text-[22px] md:text-[30px] leading-[1.3] font-light italic text-white/85 pl-6 border-l border-white/20"
                style={serif}
              >
                How might we help artisans reach travellers before the journey begins?
              </p>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 border-t border-white/10 pt-10">
              {[
                { l: "Role", v: "Product Strategy · User Research · MVP Definition" },
                { l: "Timeline", v: "Concept Stage" },
                { l: "Project Type", v: "Marketplace Product Concept" },
                { l: "Tools", v: "Research · Figma · No-code MVP Thinking · Product Documentation" },
                { l: "Recognition", v: "Promising Startup Award — CAUSE 2026" },
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

      {/* 02 — The Place */}
      <Chapter number="02 — The Place">
        <SectionTitle>A craft town the highway forgot.</SectionTitle>
        <div className="space-y-6">
          <Body>
            Channapatna sits around 60 km from Bengaluru, close enough for a weekend trip and known for its lacquerware tradition. But the new expressway changed the flow of travellers. People were still travelling nearby. They simply stopped entering the town.
          </Body>
          <Body>
            The problem was not that the craft had lost value.
            <br />
            The problem was that the old discovery channel had disappeared.
          </Body>
        </div>
      </Chapter>

      <Divider />

      {/* 03 — Root Cause */}
      <Chapter number="03 — The Root Cause">
        <SectionTitle>
          We started with a symptom.
          <br />
          We ended with a cause.
        </SectionTitle>
        <div className="max-w-[760px]">
          <ol className="space-y-0">
            {whys.map((w, i) => (
              <Reveal key={w.label} delay={i * 80}>
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
                    className={`font-light leading-[1.45] ${
                      i === whys.length - 1
                        ? "text-[22px] md:text-[30px] italic text-white/95"
                        : "text-[18px] md:text-[22px] text-white/80"
                    }`}
                    style={i === whys.length - 1 ? serif : serif}
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
              The real problem was not income alone.
              <br />
              It was access.
            </p>
          </Reveal>
        </div>
      </Chapter>

      <Divider />

      {/* 04 — What We Heard */}
      <Chapter number="04 — What We Heard">
        <SectionTitle>
          The demand was there.
          <br />
          The access was not.
        </SectionTitle>
        <Body className="mb-16">
          To understand whether this was a demand problem or an access problem, we validated the idea with travellers and artisans.
        </Body>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14 max-w-[900px]">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 100}>
              <div className="border-t border-white/10 pt-8">
                <div
                  className="text-[64px] md:text-[92px] leading-[1] font-light text-white mb-4"
                  style={serif}
                >
                  {s.value}
                </div>
                <p
                  className="text-[14px] md:text-[15px] text-white/60 font-light leading-[1.6]"
                  style={sans}
                >
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p
            className="mt-16 text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.8] max-w-[720px]"
            style={serif}
          >
            The insight was clear: people wanted meaningful experiences, artisans were open to hosting, but no trusted bridge existed between them.
          </p>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 05 — The Question */}
      <Chapter number="05 — The Question">
        <SectionTitle>The question that shaped the product.</SectionTitle>
        <Reveal delay={100}>
          <blockquote className="pl-6 md:pl-10 border-l border-white/20 mb-16 md:mb-20">
            <p
              className="text-[28px] md:text-[44px] lg:text-[52px] leading-[1.15] font-light italic text-white/90"
              style={serif}
            >
              How might we enable travellers
              <br />
              to discover, trust, and participate
              <br />
              in authentic artisan experiences?
            </p>
          </blockquote>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 max-w-[900px]">
          {verbs.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <div className="border-t border-white/10 pt-6">
                <h4
                  className="text-[28px] md:text-[34px] font-light italic text-white/95 mb-4"
                  style={serif}
                >
                  {v.title}
                </h4>
                <p
                  className="text-[14px] md:text-[15px] text-white/60 font-light leading-[1.7]"
                  style={sans}
                >
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Chapter>

      <Divider />

      {/* 06 — The Users */}
      <Chapter number="06 — The Users">
        <SectionTitle>Two sides of the same marketplace.</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 max-w-[1000px]">
          {[
            {
              name: "Priya Sharma",
              role: "The Urban Weekend Explorer",
              summary:
                "Priya wants authentic weekend experiences, not tourist traps. She is interested in learning traditional crafts hands-on, but struggles to find verified workshops, clear safety information, and trustworthy local options.",
              pains: [
                "Cannot find authentic craft experiences on mainstream travel platforms",
                "Unsure about quality and safety",
                "Finds only product stores instead of hands-on experiences",
                "Plans last-minute and needs fast discovery",
              ],
            },
            {
              name: "Ramesh Patel",
              role: "The Artisan Host",
              summary:
                "Ramesh represents the skilled artisan who wants fair income, recognition, and direct access to customers. He has deep craft knowledge, but limited digital reach and depends heavily on middlemen.",
              pains: [
                "Middlemen capture most of the product value",
                "No direct access to travellers",
                "Low digital literacy",
                "Unpredictable income",
              ],
            },
          ].map((u, i) => (
            <Reveal key={u.name} delay={i * 120}>
              <article className="border-t border-white/10 pt-8">
                <h4
                  className="text-[36px] md:text-[46px] font-light text-white mb-2"
                  style={serif}
                >
                  {u.name}
                </h4>
                <div
                  className="text-[11px] tracking-[0.35em] uppercase text-white/40 mb-8"
                  style={sans}
                >
                  {u.role}
                </div>
                <p
                  className="text-[15px] md:text-[16px] text-white/65 font-light leading-[1.85] mb-8"
                  style={sans}
                >
                  {u.summary}
                </p>
                <div
                  className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4"
                  style={sans}
                >
                  Pain points
                </div>
                <ul className="space-y-3">
                  {u.pains.map((p) => (
                    <li
                      key={p}
                      className="text-[14px] md:text-[15px] text-white/60 font-light leading-[1.6] pl-5 relative"
                      style={sans}
                    >
                      <span className="absolute left-0 top-[10px] w-2 h-px bg-white/30" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Chapter>

      <Divider />

      {/* 07 — Product Decision */}
      <Chapter number="07 — The Product Decision">
        <SectionTitle>CraftRoots would not simply list workshops.</SectionTitle>
        <Body className="mb-14">
          The product decision was to build the infrastructure that makes artisan experiences discoverable, trustworthy, and repeatable.
        </Body>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8 max-w-[900px]">
          {pillars.map((p, i) => (
            <Reveal key={p} delay={i * 70}>
              <li className="flex items-baseline gap-6 border-t border-white/10 pt-5">
                <span
                  className="text-[11px] tracking-[0.35em] uppercase text-white/30"
                  style={sans}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-[18px] md:text-[22px] font-light text-white/85 leading-[1.4]"
                  style={serif}
                >
                  {p}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={200}>
          <p
            className="mt-16 text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.8] max-w-[720px]"
            style={serif}
          >
            The goal was not just to digitize craft.
            <br />
            The goal was to turn invisible skill into visible value.
          </p>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 08 — How It Works */}
      <Chapter number="08 — How It Works">
        <SectionTitle>From discovery to memory.</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 max-w-[1000px] mb-14">
          {journey.map((j, i) => (
            <Reveal key={j.title} delay={i * 100}>
              <div className="border-t border-white/10 pt-6">
                <div
                  className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-4"
                  style={sans}
                >
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <h4
                  className="text-[28px] md:text-[34px] font-light italic text-white/95 mb-3"
                  style={serif}
                >
                  {j.title}
                </h4>
                <p
                  className="text-[14px] md:text-[15px] text-white/60 font-light leading-[1.7]"
                  style={sans}
                >
                  {j.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Body>
          Every booking creates direct income for an artisan. Every review creates trust for the next traveller.
        </Body>
      </Chapter>

      <Divider />

      {/* 09 — Success Metrics */}
      <Chapter number="09 — Success Metrics">
        <SectionTitle>How we would know it is working.</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14 max-w-[1000px]">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 100}>
              <div className="border-t border-white/10 pt-8">
                <div
                  className="text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5"
                  style={sans}
                >
                  {m.label}
                </div>
                <div
                  className="text-[52px] md:text-[72px] leading-[1] font-light text-white mb-4"
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
            className="mt-16 text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.8] max-w-[720px]"
            style={serif}
          >
            The metrics were designed to measure more than usage. They measured whether the platform created trust, participation, income, and meaning.
          </p>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 10 — Recognition */}
      <Chapter number="10 — Recognition">
        <SectionTitle>Promising Startup Award</SectionTitle>
        <div className="max-w-[720px] border-t border-white/10 pt-10">
          <p
            className="text-[15px] md:text-[17px] text-white/60 font-light leading-[1.9] mb-10"
            style={sans}
          >
            CraftRoots was recognized with the Promising Startup Award at CAUSE 2026 for its potential to create a sustainable experience-led marketplace connecting travelers and artisans.
          </p>
          <a
            href="https://drive.google.com/file/d/14BjSKmIwTFTvxAowiYXjGFkYgNwfL01c/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[11px] tracking-[0.35em] uppercase text-white/75 border-b border-white/20 pb-1 hover:text-white hover:border-white/60 transition-all duration-500"
            style={sans}
          >
            See the Certificate →
          </a>
        </div>
      </Chapter>

      <Divider />

      {/* 11 — Documents */}
      <Chapter number="11 — Documents & Research">
        <SectionTitle>Documents Behind the Work</SectionTitle>
        <Body className="mb-16">
          A case study can only show part of the thinking. These documents contain the research, mapping, prioritization, and product decisions that shaped CraftRoots.
        </Body>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-[1100px] border-t border-white/10">
          {documents.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-white/10 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-white/10 px-2 md:px-8 py-10 md:py-12 hover:bg-white/[0.03] transition-colors duration-500"
              >
                <div
                  className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-5"
                  style={sans}
                >
                  {d.label}
                </div>
                <h4
                  className="text-[26px] md:text-[32px] font-light text-white/95 mb-4 leading-[1.15]"
                  style={serif}
                >
                  {d.title}
                </h4>
                <p
                  className="text-[14px] md:text-[15px] text-white/55 font-light leading-[1.75] mb-8 max-w-[440px]"
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

      {/* 12 — What I Learned */}
      <Chapter number="12 — What I Learned">
        <SectionTitle>What CraftRoots changed in how I think.</SectionTitle>
        <div className="space-y-6 max-w-[680px]">
          <Body>
            CraftRoots taught me that the best product opportunities are not always about inventing something new.
          </Body>
          <Body>
            Sometimes they are about noticing an exchange that should already be happening — and building the trust, structure, and access that allow it to happen at scale.
          </Body>
          <Body>The product was never only about booking workshops.</Body>
          <p
            className="text-[22px] md:text-[30px] italic font-light text-white/90 leading-[1.35] pt-4"
            style={serif}
          >
            It was about turning invisible skill into visible value.
          </p>
        </div>
      </Chapter>

      <Divider />

      {/* 12 — Next Chapter */}
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
              ThinkFloor
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p
              className="text-[20px] md:text-[28px] font-light italic text-white/70 leading-[1.35] mb-14 max-w-[720px]"
              style={serif}
            >
              Rethinking event sponsorship through live audience access.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <a
              href="/work/thinkfloor"
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
            <span>Fin. — Chapter II · 01</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CraftRoots;
