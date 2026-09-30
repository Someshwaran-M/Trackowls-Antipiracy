import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Radar,
  ScanSearch,
  Database,
  Globe,
  LockKeyhole,
  Activity,
  Search,
  CheckCircle2,
  BellRing,
  FileSearch,
  Send,
  BarChart3,
} from "lucide-react";

function Technology() {
  const capabilities = [
    {
      icon: Radar,
      number: "01",
      title: "Intelligent Monitoring",
      description:
        "Continuously observe relevant digital environments to improve visibility around content, brands and intellectual property.",
    },
    {
      icon: ScanSearch,
      number: "02",
      title: "Content Discovery",
      description:
        "Discover relevant digital content and identify potential instances of unauthorized use or distribution.",
    },
    {
      icon: Search,
      number: "03",
      title: "Digital Intelligence",
      description:
        "Transform online signals into structured intelligence that can support investigation and protection workflows.",
    },
    {
      icon: Database,
      number: "04",
      title: "Centralized Intelligence",
      description:
        "Bring digital observations together to create a clearer view of activity surrounding valuable digital assets.",
    },
    {
      icon: Activity,
      number: "05",
      title: "Threat Visibility",
      description:
        "Identify suspicious digital activity and improve awareness of potential threats across monitored environments.",
    },
    {
      icon: LockKeyhole,
      number: "06",
      title: "Protection Workflows",
      description:
        "Support teams with information that can help them evaluate and respond to digital protection requirements.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      text: "Find relevant digital signals across monitored environments.",
    },
    {
      number: "02",
      title: "Detect",
      text: "Identify activity that may require further attention.",
    },
    {
      number: "03",
      title: "Analyze",
      text: "Organize and understand the available digital intelligence.",
    },
    {
      number: "04",
      title: "Protect",
      text: "Use intelligence to support appropriate protection workflows.",
    },
  ];

  const technologyPoints = [
    "Continuous digital visibility",
    "Structured information",
    "Centralized intelligence",
    "Protection-focused workflows",
  ];

  const infrastructure = [
    {
      icon: Globe,
      title: "Digital Sources",
      text: "Websites, platforms, applications and online communities.",
    },
    {
      icon: Radar,
      title: "Monitoring",
      text: "Continuous observation of relevant digital environments.",
    },
    {
      icon: ScanSearch,
      title: "Discovery",
      text: "Identification and organization of relevant digital signals.",
    },
    {
      icon: Shield,
      title: "Protection",
      text: "Intelligence that supports response and protection workflows.",
    },
  ];

  const dashboardMetrics = [
    ["128", "Links found"],
    ["97", "Removed"],
    ["21", "In progress"],
    ["10", "Escalated"],
  ];

  const recentCases = [
    ["pirate-site.example/new-release-hd", "Found"],
    ["t.me/course-share-example", "Notice sent"],
    ["Search result: mirror page", "De-indexed"],
    ["fake-brand-page (social)", "Removed"],
    ["clone-store.example", "Follow-up"],
  ];

  const platformResponse = [
    ["Search engines", "Fast", "w-[92%]"],
    ["Social platforms", "Medium", "w-[65%]"],
    ["Hosting providers", "Medium", "w-[65%]"],
    ["Offshore hosts", "Slow", "w-[38%]"],
  ];

  const clientUseCases = [
    [
      "MOVIE RELEASE WEEK",
      "Add the title and its alternate names before release. The tool watches for camcord uploads and streaming links, and alerts you to each new find so notices go out the same day.",
    ],
    [
      "PAID COURSE LEAKS",
      "Track your course names and instructor names across Telegram groups and file-sharing links. Repeat re-uploads are grouped so we can act on the source.",
    ],
    [
      "LIVE MATCH OR EVENT",
      "Set the event time and channel names. Restream links are flagged during the event and sent to hosts straight away.",
    ],
    [
      "BRAND IMPERSONATION",
      "Add your brand name, logo and official handles. Fake pages, look-alike domains and counterfeit listings appear in one queue for review.",
    ],
  ];

  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#F7FAF4]
        text-[#152019]
        transition-colors
        duration-300
        dark:bg-[#070A07]
        dark:text-white
      "
    >
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden border-b border-[#263226]/10 dark:border-white/[0.06]">
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            dark:opacity-[0.055]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(173,209,50,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-120px]
            top-[-100px]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#ADD132]/7
            blur-[110px]
            dark:bg-[#ADD132]/10
            sm:right-[-160px]
            sm:top-[-130px]
            sm:h-[520px]
            sm:w-[520px]
            lg:right-[-200px]
            lg:top-[-150px]
            lg:h-[650px]
            lg:w-[650px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-170px]
            left-[-140px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#ADD132]/4
            blur-[110px]
            dark:bg-[#ADD132]/6
            sm:h-[480px]
            sm:w-[480px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[1500px]
            px-5
            pb-16
            pt-14
            sm:px-7
            sm:pb-20
            sm:pt-20
            md:px-10
            md:pb-24
            md:pt-24
            lg:px-12
            lg:pb-28
            lg:pt-28
            xl:px-16
          "
        >
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 border-b border-[#ADD132]/40 pb-2">
                <span className="h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_14px_#ADD132]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#6F8D08] dark:text-[#ADD132] sm:text-xs">
                  Technology
                </span>
              </div>

              <h1
                className="
                  mt-6
                  text-[44px]
                  font-black
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-[#152019]
                  dark:text-white
                  sm:text-[56px]
                  md:text-[68px]
                  lg:text-[78px]
                  xl:text-[92px]
                "
              >
                Technology for
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  digital intelligence.
                </span>
              </h1>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-[13px]
                  leading-7
                  text-[#687368]
                  dark:text-white/55
                  sm:mt-8
                  sm:text-[15px]
                  sm:leading-8
                "
              >
                TrackOwls brings monitoring, discovery and digital intelligence
                capabilities together to help organizations understand and
                protect their digital environments.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to="/request-demo"
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#ADD132]
                    px-6
                    py-3.5
                    text-[11px]
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#C7EB45]
                    hover:shadow-xl
                    hover:shadow-[#ADD132]/20
                    sm:w-auto
                    sm:px-7
                    sm:py-4
                    sm:text-sm
                  "
                >
                  Explore With Us

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>

                <Link
                  to="/solutions"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-[#263226]/15
                    bg-white/50
                    px-6
                    py-3.5
                    text-[11px]
                    font-semibold
                    text-[#344034]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[#ADD132]/40
                    hover:text-[#6F8D08]
                    dark:border-white/10
                    dark:bg-white/[0.02]
                    dark:text-white
                    dark:hover:border-[#ADD132]/30
                    dark:hover:text-[#ADD132]
                    sm:w-auto
                    sm:px-7
                    sm:py-4
                    sm:text-sm
                  "
                >
                  View Solutions
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Technology visual */}
            <div className="relative mx-auto w-full max-w-[610px]">
              <div className="relative aspect-square overflow-hidden rounded-[32px] border border-[#263226]/10 dark:border-white/[0.07]">
                <div
                  className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(173,209,50,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.5) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />

                <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6F8D08]/15 dark:border-[#ADD132]/15" />

                <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6F8D08]/10 dark:border-[#ADD132]/10" />

                <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ADD132]/8 blur-[80px] dark:bg-[#ADD132]/10" />

                {/* Connections */}
                <div className="absolute left-[14%] top-[27%] h-px w-[72%] rotate-[18deg] bg-[#6F8D08]/20 dark:bg-[#ADD132]/20" />
                <div className="absolute left-[14%] top-[68%] h-px w-[72%] -rotate-[18deg] bg-[#6F8D08]/20 dark:bg-[#ADD132]/20" />
                <div className="absolute left-1/2 top-[14%] h-[72%] w-px bg-[#6F8D08]/15 dark:bg-[#ADD132]/15" />

                {[
                  "left-[15%] top-[22%]",
                  "right-[15%] top-[26%]",
                  "left-[15%] bottom-[22%]",
                  "right-[15%] bottom-[26%]",
                ].map((position, index) => (
                  <div
                    key={index}
                    className={`absolute ${position} flex h-12 w-12 items-center justify-center rounded-full border border-[#ADD132]/25 bg-[#ADD132]/10`}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ADD132] shadow-[0_0_16px_#ADD132]" />
                  </div>
                ))}

                <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#ADD132]/40 bg-white/80 text-[#6F8D08] shadow-[0_0_50px_rgba(173,209,50,0.12)] backdrop-blur-xl dark:bg-[#0B100A]/90 dark:text-[#ADD132] sm:h-32 sm:w-32">
                  <Shield
                    size={42}
                    strokeWidth={1.2}
                    className="sm:h-14 sm:w-14"
                  />
                </div>

                <div className="absolute left-5 top-5">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#7B857B] dark:text-white/35">
                    Intelligence
                  </p>
                  <p className="mt-1 text-xs font-bold text-[#6F8D08] dark:text-[#ADD132]">
                    Active
                  </p>
                </div>

                <div className="absolute bottom-5 right-5 text-right">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#7B857B] dark:text-white/35">
                    Monitoring
                  </p>
                  <p className="mt-1 text-xs font-bold text-[#172017] dark:text-white">
                    Connected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY PHILOSOPHY
      ========================================================== */}

      <section className="relative px-5 py-16 sm:px-7 sm:py-20 md:px-10 md:py-24 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6F8D08] dark:text-[#ADD132] sm:text-xs">
                Our Technology Approach
              </p>

              <h2 className="mt-4 text-[32px] font-black leading-[1.02] tracking-[-0.05em] text-[#152019] dark:text-white sm:text-4xl lg:text-5xl">
                Technology designed around{" "}
                <span className="text-[#789900] dark:text-[#ADD132]">
                  visibility.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-[13px] leading-7 text-[#687368] dark:text-white/55 sm:text-base sm:leading-8">
                The digital environment is constantly changing. Our technology
                approach focuses on bringing together relevant signals,
                monitoring capabilities and intelligence so organizations can
                build a clearer understanding of their digital presence.
              </p>

              <p className="mt-5 text-[13px] leading-7 text-[#7A837A] dark:text-white/40 sm:text-base sm:leading-8">
                Rather than treating digital protection as a single activity,
                TrackOwls is designed around a connected flow of discovery,
                detection, analysis and protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE CAPABILITIES — EDITORIAL LIST, NO CARDS
      ========================================================== */}

      <section className="relative border-y border-[#263226]/10 bg-[#EEF3E9] px-5 py-16 dark:border-white/[0.06] dark:bg-white/[0.015] sm:px-7 sm:py-20 md:px-10 md:py-24 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-3xl">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6F8D08] dark:text-[#ADD132] sm:text-xs">
              Core Capabilities
            </p>

            <h2 className="mt-4 text-[32px] font-black leading-[1.02] tracking-[-0.05em] text-[#152019] dark:text-white sm:text-4xl lg:text-5xl">
              The technology behind{" "}
              <span className="text-[#789900] dark:text-[#ADD132]">
                digital visibility.
              </span>
            </h2>

            <p className="mt-5 text-[13px] leading-7 text-[#697369] dark:text-white/45 sm:text-base sm:leading-8">
              TrackOwls combines multiple capabilities to support monitoring,
              discovery, intelligence and digital protection workflows.
            </p>
          </div>

          <div className="mt-12 border-t border-[#263226]/10 dark:border-white/[0.08]">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    grid
                    gap-5
                    border-b
                    border-[#263226]/10
                    py-7
                    transition-all
                    duration-500
                    hover:bg-white/40
                    dark:border-white/[0.08]
                    dark:hover:bg-white/[0.02]
                    sm:grid-cols-[80px_70px_0.8fr_1.2fr]
                    sm:items-center
                    sm:gap-6
                    sm:py-9
                  "
                >
                  <span className="text-sm font-black tracking-[0.08em] text-[#8A948E] dark:text-white/25">
                    {item.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#ADD132]/10 text-[#6F8D08] transition-transform duration-500 group-hover:scale-110 dark:text-[#ADD132]">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>

                  <h3 className="text-xl font-black tracking-[-0.03em] text-[#172017] dark:text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="max-w-xl text-[13px] leading-7 text-[#697369] dark:text-white/50 sm:text-sm sm:leading-7">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          INTELLIGENCE FLOW
      ========================================================== */}

      <section className="relative px-5 py-16 sm:px-7 sm:py-20 md:px-10 md:py-24 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6F8D08] dark:text-[#ADD132] sm:text-xs">
                Intelligence Flow
              </p>

              <h2 className="mt-4 text-[32px] font-black leading-[1.02] tracking-[-0.05em] text-[#152019] dark:text-white sm:text-4xl lg:text-5xl">
                From digital signals
                <br />
                to actionable intelligence.
              </h2>

              <p className="mt-5 max-w-xl text-[13px] leading-7 text-[#687368] dark:text-white/50 sm:text-base sm:leading-8">
                A connected technology approach helps organizations move from
                discovering digital activity to understanding and responding
                to relevant protection requirements.
              </p>

              <div className="mt-7 space-y-3">
                {technologyPoints.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#6F8D08] dark:text-[#ADD132]"
                    />
                    <span className="text-sm text-[#536053] dark:text-white/60">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Horizontal process */}
            <div className="relative">
              <div className="absolute left-[8%] right-[8%] top-[42px] hidden h-px bg-gradient-to-r from-transparent via-[#ADD132]/40 to-transparent lg:block" />

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {process.map((item, index) => (
                  <div key={item.number} className="relative">
                    <div className="relative z-10 flex h-[86px] w-[86px] items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#F7FAF4] text-sm font-black text-[#6F8D08] shadow-[0_0_0_10px_rgba(173,209,50,0.04)] dark:bg-[#070A07] dark:text-[#ADD132]">
                      {item.number}
                    </div>

                    <h3 className="mt-6 text-lg font-black text-[#172017] dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-[#7A837A] dark:text-white/40">
                      {item.text}
                    </p>

                    {index < process.length - 1 && (
                      <div className="absolute left-[43px] top-[86px] h-8 w-px bg-[#ADD132]/20 sm:hidden" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MONITORING DASHBOARD
      ========================================================== */}

      <section className="relative overflow-hidden border-y border-[#263226]/10 bg-white px-5 py-20 dark:border-white/[0.06] dark:bg-[#070A07] sm:px-7 sm:py-24 md:px-10 lg:px-12 xl:px-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(173,209,50,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto max-w-[1480px]">
          <div className="mb-12 lg:mb-16">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6D900B] dark:text-[#ADD132] sm:text-xs">
              Monitoring dashboard
            </p>

            <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <h2 className="text-[34px] font-black leading-[0.96] tracking-[-0.05em] text-[#152019] dark:text-white sm:text-5xl lg:text-6xl">
                  TrackOwls dashboard:
                  <br />
                  <span className="text-[#789900] dark:text-[#ADD132]">
                    Sample Film Studio
                  </span>
                </h2>

                <p className="mt-5 text-sm text-[#5E6A62] dark:text-white/45">
                  Illustration with sample data
                </p>
              </div>

              <span className="self-start border-b border-[#ADD132]/50 pb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#6D900B] dark:text-[#ADD132]">
                Demo only
              </span>
            </div>
          </div>

          {/* Metric rail */}
          <div className="grid border-y border-[#263226]/10 dark:border-white/[0.08] md:grid-cols-4">
            {dashboardMetrics.map(([value, label], index) => (
              <div
                key={label}
                className={`
                  relative
                  py-7
                  md:px-6
                  md:py-9
                  ${
                    index !== dashboardMetrics.length - 1
                      ? "border-b border-[#263226]/10 dark:border-white/[0.08] md:border-b-0 md:border-r"
                      : ""
                  }
                `}
              >
                <p className="text-5xl font-black tracking-[-0.06em] text-[#152019] dark:text-white sm:text-6xl">
                  {value}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#697369] dark:text-white/40">
                  {label}
                </p>

                <span className="absolute bottom-0 left-0 h-0.5 w-8 bg-[#ADD132] transition-all duration-500 hover:w-16" />
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            {/* Recent cases */}
            <div>
              <div className="flex items-center justify-between border-b border-[#263226]/10 pb-4 dark:border-white/[0.08]">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#6D900B] dark:text-[#ADD132]">
                    Recent cases
                  </p>
                  <p className="mt-1 text-xs text-[#8A948E] dark:text-white/30">
                    Latest monitoring activity
                  </p>
                </div>

                <FileSearch
                  size={19}
                  className="text-[#6D900B] dark:text-[#ADD132]"
                />
              </div>

              <div>
                {recentCases.map(([title, stage], index) => (
                  <div
                    key={title}
                    className="group grid grid-cols-[38px_1fr_auto] items-center gap-4 border-b border-[#263226]/10 py-5 dark:border-white/[0.08]"
                  >
                    <span className="text-xs font-black text-[#9BA39C] dark:text-white/25">
                      0{index + 1}
                    </span>

                    <p className="min-w-0 truncate text-sm text-[#152019] transition-colors group-hover:text-[#6D900B] dark:text-white/75 dark:group-hover:text-[#ADD132] sm:text-[15px]">
                      {title}
                    </p>

                    <span className="whitespace-nowrap text-[9px] font-black uppercase tracking-[0.12em] text-[#6D900B] dark:text-[#ADD132]">
                      {stage}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform response */}
            <div>
              <div className="flex items-center justify-between border-b border-[#263226]/10 pb-4 dark:border-white/[0.08]">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#6D900B] dark:text-[#ADD132]">
                    Platform response
                  </p>
                  <p className="mt-1 text-xs text-[#8A948E] dark:text-white/30">
                    Illustrative response speed
                  </p>
                </div>

                <Activity
                  size={19}
                  className="text-[#6D900B] dark:text-[#ADD132]"
                />
              </div>

              <div className="mt-2">
                {platformResponse.map(([platform, response, width]) => (
                  <div
                    key={platform}
                    className="border-b border-[#263226]/10 py-5 dark:border-white/[0.08]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-[#536053] dark:text-white/55">
                        {platform}
                      </span>

                      <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#6D900B] dark:text-[#ADD132]">
                        {response}
                      </span>
                    </div>

                    <div className="mt-3 h-px w-full bg-[#263226]/10 dark:bg-white/10">
                      <div
                        className={`h-px bg-[#ADD132] transition-all duration-700 ${width}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Case stages */}
          <div className="mt-14 border-t border-[#263226]/10 pt-8 dark:border-white/[0.08]">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#6D900B] dark:text-[#ADD132]">
                  Case stages
                </p>
              </div>

              <span className="text-[10px] uppercase tracking-[0.15em] text-[#8A948E] dark:text-white/25">
                Workflow
              </span>
            </div>

            <div className="relative grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
              <div className="absolute left-0 right-0 top-3 hidden h-px bg-[#ADD132]/20 lg:block" />

              {[
                "Found",
                "Verified",
                "Notice sent",
                "Follow-up",
                "Removed",
                "Escalated",
              ].map((stage, index) => (
                <div key={stage} className="relative">
                  <div className="relative z-10 h-6 w-6 rounded-full border border-[#ADD132]/40 bg-white dark:bg-[#070A07]">
                    <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ADD132]" />
                  </div>

                  <p className="mt-3 text-xs font-bold text-[#536053] dark:text-white/60">
                    {stage}
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-[#9BA39C] dark:text-white/25">
                    0{index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW CLIENTS USE THE TOOL — EDITORIAL TIMELINE
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#EFF5EA] px-5 py-20 dark:bg-[#0B110D] sm:px-7 sm:py-24 md:px-10 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6D900B] dark:text-[#ADD132] sm:text-xs">
                How clients use the tool
              </p>

              <h2 className="mt-4 text-[34px] font-black leading-[0.96] tracking-[-0.05em] text-[#152019] dark:text-white sm:text-5xl lg:text-6xl">
                Built around
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  real situations.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#697369] dark:text-white/45 sm:text-base sm:leading-8">
                Different digital environments create different protection
                requirements. TrackOwls organizes monitoring activity around
                the situations teams need to respond to.
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-5 left-[15px] top-5 w-px bg-[#ADD132]/25 sm:left-[23px]" />

              <div className="space-y-10 sm:space-y-14">
                {clientUseCases.map(([title, body], index) => (
                  <div
                    key={title}
                    className="relative grid grid-cols-[32px_1fr] gap-5 sm:grid-cols-[48px_1fr] sm:gap-7"
                  >
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#ADD132]/40 bg-[#EFF5EA] text-[10px] font-black text-[#6D900B] dark:bg-[#0B110D] dark:text-[#ADD132] sm:h-12 sm:w-12 sm:text-xs">
                      0{index + 1}
                    </div>

                    <div className="border-b border-[#263226]/10 pb-10 dark:border-white/[0.08] sm:pb-14">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="h-px w-8 bg-[#ADD132]" />

                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#6D900B] dark:text-[#ADD132] sm:text-xs">
                          Use case
                        </p>
                      </div>

                      <h3 className="mt-4 text-2xl font-black tracking-[-0.035em] text-[#152019] dark:text-white sm:text-3xl">
                        {title}
                      </h3>

                      <p className="mt-4 max-w-2xl text-[13px] leading-7 text-[#697369] dark:text-white/50 sm:text-base sm:leading-8">
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIGITAL INFRASTRUCTURE — CONNECTED SYSTEM
      ========================================================== */}

      <section className="relative border-y border-[#263226]/10 bg-[#F4F7F0] px-5 py-20 dark:border-white/[0.06] dark:bg-white/[0.015] sm:px-7 sm:py-24 md:px-10 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6D900B] dark:text-[#ADD132] sm:text-xs">
                Digital Environment
              </p>

              <h2 className="mt-4 text-[34px] font-black leading-[0.98] tracking-[-0.05em] text-[#152019] dark:text-white sm:text-5xl">
                Built for a{" "}
                <span className="text-[#789900] dark:text-[#ADD132]">
                  connected world.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#687368] dark:text-white/45 sm:text-base sm:leading-8">
                Digital assets can exist across websites, platforms,
                applications and online communities. TrackOwls technology is
                designed around understanding this connected environment.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-6 right-6 top-1/2 hidden h-px -translate-y-1/2 bg-[#ADD132]/20 sm:block" />

              <div className="grid gap-8 sm:grid-cols-4 sm:gap-0">
                {infrastructure.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="relative flex flex-col items-start sm:px-5 sm:text-center"
                    >
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#F4F7F0] text-[#6D900B] dark:bg-[#0A100C] dark:text-[#ADD132] sm:mx-auto">
                        <Icon size={21} strokeWidth={1.6} />
                      </div>

                      <p className="mt-5 text-sm font-black text-[#172017] dark:text-white">
                        {item.title}
                      </p>

                      <p className="mt-2 max-w-[180px] text-[11px] leading-5 text-[#7A837A] dark:text-white/35 sm:mx-auto">
                        {item.text}
                      </p>

                      {index < infrastructure.length - 1 && (
                        <div className="absolute left-7 top-14 h-8 w-px bg-[#ADD132]/20 sm:hidden" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MONITORING TOOL WORKFLOW
      ========================================================== */}

      <section className="relative px-5 py-20 sm:px-7 sm:py-24 md:px-10 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-12 max-w-3xl">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6D900B] dark:text-[#ADD132] sm:text-xs">
              Monitoring workflow
            </p>

            <h2 className="mt-4 text-[34px] font-black leading-[0.96] tracking-[-0.05em] text-[#152019] dark:text-white sm:text-5xl lg:text-6xl">
              From the first signal
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                to the final action.
              </span>
            </h2>
          </div>

          <div className="grid gap-0 border-y border-[#263226]/10 dark:border-white/[0.08] lg:grid-cols-5">
            {[
              [
                "01",
                "Source scanning",
                "Scheduled scans across websites, Telegram, social media, marketplaces, domains and search results.",
                Radar,
              ],
              [
                "02",
                "Match & verify",
                "Relevant titles, keywords and brand assets are identified and checked before action.",
                Search,
              ],
              [
                "03",
                "Evidence capture",
                "URL, screenshot, date, time and archived page information are organized for each finding.",
                FileSearch,
              ],
              [
                "04",
                "Takedown workflow",
                "Notice templates, platform contacts, follow-ups and case status are brought together.",
                Send,
              ],
              [
                "05",
                "Reports & alerts",
                "Teams can follow priority alerts, response times, repeat offenders and reporting activity.",
                BarChart3,
              ],
            ].map(([number, title, text, Icon], index) => (
              <div
                key={title}
                className="
                  group
                  relative
                  border-b
                  border-[#263226]/10
                  px-0
                  py-8
                  dark:border-white/[0.08]
                  lg:border-b-0
                  lg:px-7
                  lg:py-10
                  lg:first:pl-0
                  lg:last:pr-0
                  lg:[&:not(:last-child)]:border-r
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-[0.15em] text-[#9BA39C] dark:text-white/25">
                    {number}
                  </span>

                  <Icon
                    size={19}
                    className="text-[#6D900B] transition-transform duration-300 group-hover:scale-110 dark:text-[#ADD132]"
                  />
                </div>

                <h3 className="mt-7 text-lg font-black tracking-[-0.025em] text-[#172017] dark:text-white">
                  {title}
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-[#7A837A] dark:text-white/40">
                  {text}
                </p>

                <div className="mt-7 h-px w-8 bg-[#ADD132]/50 transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}

      <section className="relative overflow-hidden px-5 py-20 sm:px-7 sm:py-24 md:px-10 lg:px-12 xl:px-16">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ADD132]/8 blur-[110px] dark:bg-[#ADD132]/7 sm:h-[500px] sm:w-[500px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#ADD132]/10 text-[#6D900B] dark:text-[#ADD132]">
            <Shield size={24} strokeWidth={1.6} />
          </div>

          <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.25em] text-[#6D900B] dark:text-[#ADD132] sm:text-xs">
            Technology & Protection
          </p>

          <h2 className="mt-4 text-[34px] font-black leading-[0.98] tracking-[-0.05em] text-[#152019] dark:text-white sm:text-5xl lg:text-6xl">
            Build greater visibility
            <br />
            into your digital environment.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#687368] dark:text-white/45 sm:text-base sm:leading-8">
            Discover how TrackOwls technology can support your digital
            monitoring and protection requirements.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/request-demo"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#ADD132]
                px-7
                py-4
                text-sm
                font-bold
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#C7EB45]
                hover:shadow-xl
                hover:shadow-[#ADD132]/20
                sm:w-auto
              "
            >
              Request a Demo
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/contact"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[#263226]/15
                bg-white/50
                px-7
                py-4
                text-sm
                font-semibold
                text-[#344034]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#ADD132]/40
                hover:text-[#6F8D08]
                dark:border-white/10
                dark:bg-white/[0.02]
                dark:text-white
                dark:hover:border-[#ADD132]/30
                dark:hover:text-[#ADD132]
                sm:w-auto
              "
            >
              Contact Us
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technology;