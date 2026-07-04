import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import deletedAccountShot from "@/assets/subspace-deleted-account.png.asset.json";

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

const platforms = ["iPhone", "Android", "Windows laptop with Chrome browser"];

const flows = [
  "Registration",
  "Onboarding",
  "Profile setup",
  "Contact permissions",
  "Gift card browsing",
  "Rental checkout",
  "Wallet",
  "Account deletion",
  "Re-registration",
  "Payment attempt",
  "App restart",
  "Web login",
];

const edgeCases = [
  "Account deletion and re-registration with the same number",
  "Cross-platform feature parity",
  "Payment flow after deleted account state",
  "Contact integration",
  "Shared subscription visibility",
];

const frameworks = ["JTBD", "AARRR", "SWOT", "Porter's Five Forces", "RICE Prioritization"];

type Feedback = {
  number: string;
  section: string;
  title: string;
  observed: string;
  problem: string;
  ship: string;
  shipList?: string[];
  insight: string;
};

const feedbacks: Feedback[] = [
  {
    number: "05",
    section: "01 — Platform promise vs platform reality.",
    title: "The iPhone experience did not match the subscription management promise.",
    observed:
      "On Android, the product surfaced subscription-related language and shared subscription functionality. On iPhone, the experience leaned more toward purchases and gift cards, creating a mismatch between the product promise and the actual platform experience.",
    problem:
      "iPhone users represent a premium segment, but they could not experience the core subscription management value in the same way Android users could. This creates activation failure, trust loss, and wasted acquisition effort.",
    ship:
      "Create an iOS-native activation path using manual subscription entry, smart catalog selection, and email-based subscription detection. If iOS cannot support the same detection method as Android, the product should communicate that honestly and give users a working alternative.",
    insight:
      "A product strategy cannot ignore platform constraints. If the core value depends on platform permissions, the alternative path must exist before launch.",
  },
  {
    number: "06",
    section: "02 — Competitor pressure was not only from direct competitors.",
    title: "Infrastructure players were becoming the real threat.",
    observed:
      "Competitors and adjacent players such as Jupiter, PhonePe, CRED, and UPI AutoPay already owned parts of the subscription visibility, payments, and mandate-management experience.",
    problem:
      "Subspace was not only competing with other subscription apps. It was competing with default payment infrastructure and finance apps users already trusted.",
    ship: "Differentiate around what infrastructure players do not solve well:",
    shipList: [
      "subscription optimization,",
      "shared subscriptions,",
      "social coordination,",
      "and savings intelligence.",
    ],
    insight:
      "Competitive analysis should include infrastructure players, not only direct competitors.",
  },
  {
    number: "07",
    section: "03 — The AI promise was not visible enough.",
    title: "Users cannot value AI they never experience.",
    observed:
      "The product positioned itself as AI-native, but the user-facing journey did not clearly show how AI helped users manage subscriptions, save money, or make better decisions.",
    problem:
      "When AI is buried or invisible, it becomes a marketing claim rather than a product experience. Users need to see the value of AI during onboarding, detection, recommendations, and savings moments.",
    ship: "Turn the hidden AI experience into a visible Subscription Copilot.",
    shipList: [
      "Renewal alerts",
      "Split suggestions",
      "Gift card optimization",
      "Plan downgrade alerts",
      "Savings opportunities",
    ],
    insight:
      "The PM's job is not to add AI. The PM's job is to make AI solve a user problem visibly.",
  },
  {
    number: "08",
    section: "04 — Activation failed before value could begin.",
    title: "Onboarding dropped users into a hollow product.",
    observed:
      "After registration, users landed in the product with limited guidance, generic profile information, empty states, and no clear first action.",
    problem:
      "A feature-dense product without sequencing creates cognitive overload. Users do not know where to begin, which weakens activation and reduces the chance that they discover the product's core value.",
    ship: "Create a progressive onboarding flow:",
    shipList: [
      "Step 1: Welcome the user and ask what they want to manage.",
      "Step 2: Offer three paths — Scan email, Scan SMS on Android, Add manually.",
      "Step 3: Ask how they usually pay.",
      "Step 4: Introduce shared subscriptions if relevant.",
      "Step 5: Nudge KYC only when it unlocks a clear benefit.",
    ],
    insight: "First impressions are system design, not copywriting.",
  },
  {
    number: "09",
    section: "05 — Shared subscriptions could become the strategic wedge.",
    title: "The strongest feature needed a stronger distribution path.",
    observed:
      "Android had working shared subscription functionality for services like Netflix, Spotify, and JioHotstar-style use cases, but the feature was not equally visible or accessible across platforms.",
    problem:
      "Shared subscriptions were one of the few differentiated assets Subspace had, but without better surfacing or partnerships, the feature risked staying buried.",
    ship: "Position Subspace as a Family Plan Manager for OTT and subscription platforms.",
    shipList: [
      "OTT platforms could let users split family plans through Subspace.",
      "Subspace could handle reminders, UPI-based collections, group coordination, and payment accountability.",
      "Recommended pilot: start with a smaller Indian OTT or content platform before approaching larger players.",
    ],
    insight:
      "The strongest strategy came from connecting an existing product strength with a market timing opportunity.",
  },
];

const week1 = [
  "Fix onboarding",
  "Rename misleading detection language",
  "Ship manual subscription entry",
];
const week2 = [
  "Build email-based detection",
  "Fix deleted-account state across platforms",
  "Unblock iPhone activation",
];
const week34 = [
  "Launch Subscription Health Score",
  "Surface shared subscriptions more prominently",
];
const week612 = ["Pilot one OTT partnership to validate B2B potential"];

const deletionStory = [
  "I deleted the account.",
  "I re-registered with the same number.",
  "The product allowed browsing.",
  "The payment journey failed later.",
  "The state changed again after app restart.",
];

const documents = [
  {
    type: "Report",
    title: "Product Teardown Report",
    text:
      "The full Subspace.money teardown covering methodology, company context, five feedback areas, screenshots, product recommendations, RICE prioritization, and execution order.",
    cta: "View Report →",
    href: "/documents/subspace-teardown-report.pdf",
  },
  {
    type: "Brief",
    title: "Assignment Brief",
    text:
      "The original Product Intern Assignment brief outlining the task, evaluation criteria, product pillars, and expected feedback structure.",
    cta: "View Brief →",
    href: "/documents/subspace-assignment-brief.pdf",
  },
];

const SubspaceTeardown = () => {
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
            Chapter II · 04
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
              className="text-[56px] md:text-[104px] lg:text-[128px] leading-[0.9] font-light tracking-tight text-white mb-10"
              style={serif}
            >
              Subspace.money
              <br />
              Product Teardown
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p
              className="text-[28px] md:text-[46px] lg:text-[54px] leading-[1.1] font-light italic text-white/90 mb-14 max-w-[880px]"
              style={serif}
            >
              Finding the gap between
              <br />
              product promise and product reality.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="max-w-[640px] space-y-6">
              <Body>
                Subspace.money positioned itself as an AI-native subscription management platform. But after testing the product across iPhone, Android, and Web, I found a deeper problem.
              </Body>
              <Body>The issue was not only missing features.</Body>
              <Body>
                It was the gap between what the product promised and what users actually experienced.
              </Body>
              <Body>This teardown began with one question:</Body>
              <p
                className="text-[22px] md:text-[30px] leading-[1.3] font-light italic text-white/85 pl-6 border-l border-white/20"
                style={serif}
              >
                Where does the product promise break inside the real user journey?
              </p>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 border-t border-white/10 pt-10">
              {[
                {
                  l: "Role",
                  v: "Product Analysis · UX Teardown · Competitive Research · Prioritization",
                },
                { l: "Project Type", v: "Product Intern Assignment" },
                { l: "Timeline", v: "48-hour teardown" },
                { l: "Platforms Tested", v: "iPhone · Android · Web on Windows Chrome" },
                {
                  l: "Frameworks Used",
                  v: "JTBD · AARRR · SWOT · Porter's Five Forces · RICE",
                },
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

      {/* 02 — The Assignment */}
      <Chapter number="02 — The Assignment">
        <SectionTitle>The task was not to give generic feedback.</SectionTitle>
        <div className="space-y-6 mb-14 max-w-[720px]">
          <Body>
            The assignment asked for five sharp feedbacks across product pillars: GTM and ICPs, competitor analysis, features and services, UX, and potential collaborations.
          </Body>
          <Body>Each feedback had to follow a clear chain:</Body>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 max-w-[1000px]">
          {[
            { l: "Observed", v: "What I actually saw in the product." },
            { l: "Problem", v: "Why it mattered for users or the business." },
            { l: "Ship Instead", v: "What I would specifically recommend building or changing." },
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
          <p
            className="mt-14 text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.85] max-w-[720px]"
            style={serif}
          >
            This structure forced the teardown to move beyond opinions and stay grounded in real product evidence.
          </p>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 03 — How I Tested */}
      <Chapter number="03 — How I Tested">
        <SectionTitle>I tested the product like a real customer.</SectionTitle>
        <Body className="mb-16">
          I tested Subspace.money across iPhone, Android, and Web to compare the experience across platforms and identify where the product journey changed.
        </Body>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 max-w-[1000px]">
          {[
            { title: "Platforms", items: platforms },
            { title: "Flows tested", items: flows },
            { title: "Edge cases tested", items: edgeCases },
            { title: "Frameworks applied", items: frameworks },
          ].map((g, gi) => (
            <Reveal key={g.title} delay={gi * 100}>
              <div className="border-t border-white/10 pt-8">
                <h4
                  className="text-[20px] md:text-[24px] font-light italic text-white/90 mb-8 leading-[1.35]"
                  style={serif}
                >
                  {g.title}
                </h4>
                <ul className="space-y-4">
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
      </Chapter>

      <Divider />

      {/* 04 — The Core Discovery */}
      <Chapter number="04 — The Core Discovery">
        <SectionTitle>The product was trying to be too many things at once.</SectionTitle>
        <div className="space-y-6 mb-14 max-w-[720px]">
          <Body>
            Across platforms, Subspace.money surfaced gift cards, rentals, subscription management, bill payments, social features, seller tools, and rewards.
          </Body>
          <Body>But the hierarchy was unclear.</Body>
          <Body>
            The product promised subscription management, yet the user journey often felt closer to a gift card marketplace. On iPhone, the experience was especially fragmented because the core subscription detection experience was not equivalent to Android.
          </Body>
        </div>
        <Reveal delay={200}>
          <blockquote className="pl-6 md:pl-10 border-l border-white/20 max-w-[900px]">
            <p
              className="text-[26px] md:text-[40px] lg:text-[46px] leading-[1.2] font-light italic text-white/90"
              style={serif}
            >
              The product had many features.
              <br />
              But the first user job was not clear enough.
            </p>
          </blockquote>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 05–09 — Feedback sections */}
      {feedbacks.map((f, fi) => (
        <div key={f.number}>
          <Chapter number={`${f.number} — Feedback ${["One", "Two", "Three", "Four", "Five"][fi]}`}>
            <div
              className="text-[13px] md:text-[15px] tracking-[0.28em] uppercase text-white/50 mb-8"
              style={sans}
            >
              {f.section}
            </div>
            <SectionTitle>{f.title}</SectionTitle>

            <div className="grid grid-cols-1 gap-10 md:gap-14 max-w-[900px]">
              {[
                { l: "Observed", v: f.observed },
                { l: "Problem", v: f.problem },
              ].map((b, i) => (
                <Reveal key={b.l} delay={i * 80}>
                  <div className="border-t border-white/10 pt-8">
                    <div
                      className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4"
                      style={sans}
                    >
                      {b.l}
                    </div>
                    <p
                      className="text-[16px] md:text-[19px] font-light text-white/80 leading-[1.75]"
                      style={sans}
                    >
                      {b.v}
                    </p>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={200}>
                <div className="border-t border-white/10 pt-8">
                  <div
                    className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4"
                    style={sans}
                  >
                    Ship Instead
                  </div>
                  <p
                    className="text-[16px] md:text-[19px] font-light text-white/85 leading-[1.75] mb-6"
                    style={sans}
                  >
                    {f.ship}
                  </p>
                  {f.shipList && (
                    <ul className="space-y-4 max-w-[720px]">
                      {f.shipList.map((s) => (
                        <li
                          key={s}
                          className="text-[15px] md:text-[17px] text-white/70 font-light leading-[1.7] pl-5 relative"
                          style={sans}
                        >
                          <span className="absolute left-0 top-[13px] w-2 h-px bg-white/30" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            </div>

            <Reveal delay={280}>
              <p
                className="mt-14 text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.85] max-w-[760px]"
                style={serif}
              >
                {f.insight}
              </p>
            </Reveal>
          </Chapter>
          <Divider />
        </div>
      ))}

      {/* 10 — Prioritization */}
      <Chapter number="10 — Prioritization">
        <SectionTitle>What I would ship first.</SectionTitle>
        <Body className="mb-16">
          After identifying the five feedback areas, I used RICE prioritization to separate urgent fixes from strategic opportunities.
        </Body>

        <div className="max-w-[1000px] space-y-0">
          {[
            { w: "Week 1", items: week1 },
            { w: "Week 2", items: week2 },
            { w: "Week 3–4", items: week34 },
            { w: "Week 6–12", items: week612 },
          ].map((row, i) => (
            <Reveal key={row.w} delay={i * 80}>
              <div className="grid grid-cols-[110px_1fr] md:grid-cols-[180px_1fr] gap-6 md:gap-12 items-start py-8 border-t border-white/10">
                <div
                  className="text-[11px] tracking-[0.4em] uppercase text-white/50 pt-2"
                  style={sans}
                >
                  {row.w}
                </div>
                <ul className="space-y-3">
                  {row.items.map((it) => (
                    <li
                      key={it}
                      className="text-[18px] md:text-[24px] font-light italic text-white/85 leading-[1.4]"
                      style={serif}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-white/10" />
        </div>

        <Reveal delay={300}>
          <p
            className="mt-14 text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.85] max-w-[720px]"
            style={serif}
          >
            The first priority was not adding more features.
            <br />
            It was repairing activation, trust, and platform clarity.
          </p>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 11 — The Deleted Account Edge Case */}
      <Chapter number="11 — The Deleted Account Edge Case">
        <SectionTitle>The edge case that revealed a trust problem.</SectionTitle>
        <Body className="mb-14">
          One of the most important findings came from testing account deletion and re-registration.
        </Body>
        <Body className="mb-16">
          The product allowed parts of the experience to remain accessible even after account deletion, but blocked the user later in the journey. This created a confusing and trust-breaking experience.
        </Body>

        <ol className="max-w-[900px] mb-14">
          {deletionStory.map((line, i) => (
            <Reveal key={line} delay={i * 80}>
              <li
                className={`grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-10 items-start py-6 border-t border-white/10 ${
                  i === deletionStory.length - 1 ? "border-b" : ""
                }`}
              >
                <div
                  className="text-[10px] tracking-[0.35em] uppercase text-white/40 pt-2"
                  style={sans}
                >
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <p
                  className="text-[18px] md:text-[24px] font-light italic text-white/85 leading-[1.4]"
                  style={serif}
                >
                  {line}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200}>
          <div className="max-w-[720px] space-y-6">
            <div
              className="text-[10px] tracking-[0.4em] uppercase text-white/40"
              style={sans}
            >
              Conclusion
            </div>
            <p
              className="text-[22px] md:text-[30px] font-light italic text-white/90 leading-[1.35]"
              style={serif}
            >
              The system knew the account was deleted.
              <br />
              But the experience did not handle that state consistently.
            </p>
            <Body>
              Recommendation: create a clear reactivation flow and unify deleted-account checks across app and web sessions.
            </Body>
            <p
              className="text-[15px] md:text-[17px] italic text-white/55 font-light leading-[1.85] pt-4"
              style={serif}
            >
              Great PMs test deletion, not just creation.
            </p>
          </div>
        </Reveal>

        {/* Redacted evidence placeholder */}
        <Reveal delay={280}>
          <div className="mt-16 max-w-[900px]">
            <div
              className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-4"
              style={sans}
            >
              Evidence — Redacted Screenshot
            </div>
            <div className="aspect-[16/9] w-full border border-white/10 relative overflow-hidden bg-black">
              <img
                src={deletedAccountShot.url}
                alt="Deleted-account payment failure screen — sensitive fields obscured."
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div
              className="mt-4 text-[11px] text-white/50 font-light italic"
              style={sans}
            >
              Deleted-account payment failure screen — sensitive fields obscured.
            </div>
          </div>
        </Reveal>
      </Chapter>

      <Divider />

      {/* 12 — Documents Behind the Work */}
      <Chapter number="12 — Documents Behind the Work">
        <SectionTitle>Documents Behind the Work</SectionTitle>
        <Body className="mb-16">
          A case study can only show part of the thinking. These documents contain the full teardown, screenshots, framework analysis, prioritization matrix, and assignment brief behind the project.
        </Body>
        <div className="max-w-[1000px] border-t border-white/10">
          {documents.map((d) => (
            <Reveal key={d.title}>
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
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
        <SectionTitle>What this teardown changed in how I think.</SectionTitle>
        <div className="space-y-6 max-w-[720px]">
          <Body>
            This teardown taught me that a PM's job is not only to find missing features.
          </Body>
          <Body>
            It is to find where the product promise breaks inside the real user journey.
          </Body>
          <Body>
            The most valuable insights did not come from reading the website or the assignment brief. They came from using the product across platforms, testing edge cases, comparing what was promised against what was shipped, and asking what should be fixed first.
          </Body>
          <p
            className="text-[22px] md:text-[30px] italic font-light text-white/90 leading-[1.4] pt-4"
            style={serif}
          >
            The product had many pieces.
            <br />
            The real work was finding the puzzle frame.
          </p>
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
            <p
              className="text-[18px] md:text-[24px] font-light italic text-white/70 leading-[1.5] mb-4 max-w-[820px]"
              style={serif}
            >
              Selected Work showed how I build, test, and critique products.
            </p>
            <p
              className="text-[18px] md:text-[24px] font-light italic text-white/70 leading-[1.5] mb-14 max-w-[820px]"
              style={serif}
            >
              The next chapter moves beyond products —
              <br />
              into writing, reflection, and the ideas that shape how I think.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-8"
              style={sans}
            >
              Next Chapter
            </div>
          </Reveal>
          <Reveal delay={180}>
            <h2
              className="text-[56px] md:text-[104px] leading-[0.95] font-light text-white mb-14"
              style={serif}
            >
              Journey
            </h2>
          </Reveal>
          <Reveal delay={280}>
            <a
              href="/#journey"
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
            <span>Fin. — Chapter II · 04</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SubspaceTeardown;
