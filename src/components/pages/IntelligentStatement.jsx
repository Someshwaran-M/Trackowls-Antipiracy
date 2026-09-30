import React, { useEffect, useState } from "react";

import {
  ArrowUpRight,
  Play,
  Globe2,
  ShieldCheck,
  Radio,
  BarChart3,
  Zap,
  ShoppingCart,
  FileText,
  Image as ImageIcon,
  Users,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const surfaces = [
  {
    title: "Web Monitoring",
    subtitle: "Websites & Portals",
    icon: Globe2,
  },
  {
    title: "Social Intelligence",
    subtitle: "Social Platforms",
    icon: Users,
  },
  {
    title: "Streaming Scan",
    subtitle: "OTT & Video",
    icon: Play,
  },
  {
    title: "Marketplace Watch",
    subtitle: "E-Commerce",
    icon: ShoppingCart,
  },
  {
    title: "Content Tracking",
    subtitle: "News & Media",
    icon: FileText,
  },
  {
    title: "Media Analysis",
    subtitle: "Images & Audio",
    icon: ImageIcon,
  },
];

const monthlyReportItems = [
  "Total links found and links removed",
  "Cases still open, with the reason",
  "Top pirate sites and channels for your content",
  "Platforms and hosts ranked by response time",
  "Repeat offenders and mirror sites",
  "Brand misuse cases by type",
  "Search results cleaned up",
  "Recommended next actions, including legal steps",
];

const gettingStartedSteps = [
  {
    title: "FREE AUDIT",
    body: "We scan for your content or brand and share a sample report.",
    code: "AUDIT",
  },
  {
    title: "AUTHORIZATION",
    body: "You sign an agreement and share your official titles and brand details.",
    code: "AUTH",
  },
  {
    title: "ACTIVATION",
    body: "Your account opens in the tool and monitoring starts.",
    code: "LIVE",
  },
  {
    title: "REPORTING",
    body: "You get alerts, a live case view and a monthly report.",
    code: "REPORT",
  },
];

/* =========================================================
   MAIN
========================================================= */

function IntelligentStatement() {
  const [activeReport, setActiveReport] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const reportTimer = window.setInterval(() => {
      setActiveReport((current) => (current + 1) % monthlyReportItems.length);
    }, 2600);

    const stepTimer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % gettingStartedSteps.length);
    }, 3200);

    return () => {
      window.clearInterval(reportTimer);
      window.clearInterval(stepTimer);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          INTELLIGENT STATEMENT
      ===================================================== */}

      <section
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#F5F8F0]
          text-[#101510]
          dark:bg-[#050805]
          dark:text-white
        "
      >
        {/* Background */}

        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_75%_45%,rgba(173,209,50,0.13),transparent_35%),radial-gradient(circle_at_10%_10%,rgba(173,209,50,0.07),transparent_28%)]
              dark:hidden
            "
          />

          <div
            className="
              absolute inset-0 hidden
              bg-[radial-gradient(circle_at_75%_45%,rgba(173,209,50,0.09),transparent_35%),radial-gradient(circle_at_10%_10%,rgba(173,209,50,0.04),transparent_28%)]
              dark:block
            "
          />

          <div
            className="
              absolute
              right-[-15%]
              top-1/2
              h-[320px]
              w-[320px]
              -translate-y-1/2
              rounded-full
              bg-[#ADD132]/10
              blur-[110px]
              dark:bg-[#ADD132]/6
              sm:h-[450px]
              sm:w-[450px]
              lg:h-[620px]
              lg:w-[620px]
            "
          />

          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-[60%]
              opacity-[0.08]
              dark:opacity-[0.06]
            "
            style={{
              backgroundImage:
                "radial-gradient(rgba(125,159,0,0.45) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
              maskImage:
                "radial-gradient(circle at center, black, transparent 72%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black, transparent 72%)",
            }}
          />
        </div>

        <div
          className="
            relative
            mx-auto
            flex
            min-h-screen
            max-w-[1580px]
            items-center
            px-5
            py-16
            sm:px-8
            sm:py-20
            md:px-10
            lg:px-14
            xl:px-16
          "
        >
          <div className="flex w-full flex-col gap-14 lg:flex-row lg:items-center lg:gap-16">
            {/* LEFT */}

            <div className="relative z-20 w-full lg:w-[46%]">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-[#8BAA20] dark:bg-[#ADD132]" />

                <span
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.3em]
                    text-[#657352]
                    dark:text-[#ADD132]
                    sm:text-[10px]
                  "
                >
                  TrackOwls Intelligence
                </span>
              </div>

              <h1
                className="
                  max-w-[680px]
                  text-[34px]
                  font-black
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-[#101510]
                  dark:text-white
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[58px]
                  xl:text-[66px]
                "
              >
                Global Visibility
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  for a Safer
                </span>
                <br />
                Digital World.
              </h1>

              <p
                className="
                  mt-6
                  max-w-[520px]
                  text-[13px]
                  leading-7
                  text-[#687267]
                  dark:text-white/45
                  sm:text-[14px]
                  sm:leading-8
                "
              >
                TrackOwls connects digital signals across the web to deliver
                real-time intelligence, helping you detect threats early,
                protect your brand, and stay ahead.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#ADD132]
                    px-5
                    py-3
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.15em]
                    text-[#101800]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_14px_35px_rgba(110,140,20,0.25)]
                  "
                >
                  Explore Intelligence

                  <span
                    className="
                      flex h-7 w-7 items-center justify-center
                      rounded-full bg-[#0A1008] text-[#ADD132]
                    "
                  >
                    <ArrowUpRight size={13} />
                  </span>
                </button>

                <button
                  type="button"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#1B261A]/10
                    bg-white/60
                    px-5
                    py-3
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.15em]
                    text-[#4E594E]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[#ADD132]/50
                    dark:border-white/10
                    dark:bg-white/[0.035]
                    dark:text-white/55
                  "
                >
                  <span
                    className="
                      flex h-7 w-7 items-center justify-center
                      rounded-full border border-[#ADD132]/30
                      text-[#6F8D08] dark:text-[#ADD132]
                    "
                  >
                    <Play size={10} fill="currentColor" />
                  </span>

                  Watch Overview
                </button>
              </div>

              <div className="mt-10 flex items-center gap-5">
                <Stat value="6+" label="Digital Surfaces" />

                <StatDivider />

                <Stat value="24/7" label="Intelligence" />

                <StatDivider />

                <Stat value="360°" label="Visibility" />
              </div>
            </div>

            {/* RIGHT INTELLIGENCE SYSTEM */}

            <div
              className="
                relative
                min-h-[420px]
                w-full
                flex-1
                sm:min-h-[500px]
                md:min-h-[560px]
                lg:min-h-[600px]
              "
            >
              <div
                className="
                  absolute
                  right-0
                  top-0
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#ADD132]/25
                  bg-white/65
                  px-3
                  py-1.5
                  backdrop-blur-xl
                  dark:bg-[#071006]/70
                "
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ADD132] shadow-[0_0_8px_#ADD132]" />

                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#566152] dark:text-white/55">
                  Live Monitoring
                </span>

                <span className="h-3 w-px bg-black/10 dark:bg-white/10" />

                <span className="text-[8px] font-black text-[#719000] dark:text-[#ADD132]">
                  24/7
                </span>
              </div>

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[300px]
                  w-[300px]
                  -translate-x-1/2
                  -translate-y-1/2
                  sm:h-[390px]
                  sm:w-[390px]
                  md:h-[470px]
                  md:w-[470px]
                  lg:h-[530px]
                  lg:w-[530px]
                "
              >
                <div className="absolute inset-0 animate-[spin_30s_linear_infinite] rounded-full border border-[#789900]/15 dark:border-[#ADD132]/15" />

                <div className="absolute inset-[8%] rounded-full border border-dashed border-[#789900]/15 dark:border-[#ADD132]/15" />

                <div className="absolute inset-[17%] rounded-full border border-[#789900]/10 dark:border-[#ADD132]/10" />

                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#789900]/15 to-transparent dark:via-[#ADD132]/15" />

                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#789900]/15 to-transparent dark:via-[#ADD132]/15" />

                {/* Globe */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[165px]
                    w-[165px]
                    -translate-x-1/2
                    -translate-y-1/2
                    overflow-hidden
                    rounded-full
                    border
                    border-[#6E8B1C]/35
                    bg-[radial-gradient(circle_at_35%_28%,rgba(173,209,50,0.18),rgba(237,244,225,0.96)_68%)]
                    shadow-[0_0_55px_rgba(110,140,20,0.12)]
                    dark:border-[#ADD132]/40
                    dark:bg-[radial-gradient(circle_at_35%_28%,rgba(173,209,50,0.22),rgba(8,15,8,0.98)_68%)]
                    dark:shadow-[0_0_70px_rgba(173,209,50,0.14)]
                    sm:h-[220px]
                    sm:w-[220px]
                    md:h-[275px]
                    md:w-[275px]
                    lg:h-[315px]
                    lg:w-[315px]
                  "
                >
                  <div className="absolute inset-[8%] rounded-full border border-[#708A2A]/15 dark:border-[#ADD132]/15" />

                  <div className="absolute left-0 right-0 top-1/2 h-px bg-[#708A2A]/15 dark:bg-[#ADD132]/15" />

                  <div className="absolute left-[8%] right-[8%] top-[30%] h-[25%] rounded-[50%] border border-[#708A2A]/10 dark:border-[#ADD132]/10" />

                  <div className="absolute left-[8%] right-[8%] top-[45%] h-[25%] rounded-[50%] border border-[#708A2A]/10 dark:border-[#ADD132]/10" />

                  <div className="absolute bottom-[2%] left-1/2 top-[2%] w-[42%] -translate-x-1/2 rounded-[50%] border border-[#708A2A]/15 dark:border-[#ADD132]/15" />

                  <div className="absolute bottom-[2%] left-1/2 top-[2%] w-[68%] -translate-x-1/2 rounded-[50%] border border-[#708A2A]/10 dark:border-[#ADD132]/10" />

                  <div
                    className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite] opacity-50"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(125,159,0,0.7) 1px, transparent 1.4px)",
                      backgroundSize: "8px 8px",
                    }}
                  />

                  <SignalDot className="left-[25%] top-[32%]" />
                  <SignalDot className="right-[23%] top-[42%]" />
                  <SignalDot className="bottom-[26%] left-[40%]" />
                  <SignalDot className="bottom-[32%] right-[34%]" />
                </div>

                {/* Orbiting signal */}

                <div className="absolute inset-[5%] animate-[spin_18s_linear_infinite] rounded-full">
                  <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#ADD132] shadow-[0_0_15px_#ADD132]" />
                </div>

                <div className="absolute inset-[12%] animate-[spin_24s_linear_infinite_reverse] rounded-full border border-dashed border-[#ADD132]/15">
                  <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#789900] shadow-[0_0_12px_#ADD132] dark:bg-[#ADD132]" />
                </div>

                {/* Core */}

                <div
                  className="
                    absolute
                    bottom-[-2%]
                    left-1/2
                    flex
                    -translate-x-1/2
                    flex-col
                    items-center
                  "
                >
                  <div
                    className="
                      flex
                      h-[62px]
                      w-[62px]
                      animate-[pulse_3s_ease-in-out_infinite]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#ADD132]/40
                      bg-[#F5F8F0]
                      shadow-[0_0_35px_rgba(173,209,50,0.15)]
                      dark:bg-[#071007]
                    "
                  >
                    <ShieldCheck
                      size={26}
                      strokeWidth={1.4}
                      className="text-[#6F8D08] dark:text-[#ADD132]"
                    />
                  </div>

                  <span className="mt-2 text-[8px] font-black uppercase tracking-[0.3em] text-[#3F493E] dark:text-white/65">
                    TrackOwls Core
                  </span>

                  <span className="mt-1 text-[6px] uppercase tracking-[0.24em] text-[#7C857A] dark:text-white/25">
                    Intelligence Layer
                  </span>
                </div>

                {/* Surface labels */}

                <SurfaceLabel
                  icon={<Globe2 size={13} />}
                  title="Web Monitoring"
                  className="right-[-3%] top-[10%]"
                />

                <SurfaceLabel
                  icon={<Users size={13} />}
                  title="Social Intelligence"
                  className="left-[-5%] top-[24%]"
                />

                <SurfaceLabel
                  icon={<Play size={13} />}
                  title="Streaming Scan"
                  className="left-[-6%] top-[55%]"
                />

                <SurfaceLabel
                  icon={<ShoppingCart size={13} />}
                  title="Marketplace Watch"
                  className="bottom-[13%] left-[2%]"
                />

                <SurfaceLabel
                  icon={<FileText size={13} />}
                  title="Content Tracking"
                  className="right-[-5%] top-[55%]"
                />

                <SurfaceLabel
                  icon={<ImageIcon size={13} />}
                  title="Media Analysis"
                  className="bottom-[13%] right-[2%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MONTHLY REPORT
          NEW DESIGN — LIVE PROTECTION CONSOLE
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          py-20
          text-[#101510]
          dark:bg-[#070A07]
          dark:text-white
          sm:py-24
          lg:py-32
        "
      >
        {/* Ambient line */}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ADD132]/40 to-transparent" />

        <div className="pointer-events-none absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#ADD132]/5 blur-[130px]" />

        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-[45%] opacity-[0.045] dark:opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(125,159,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(125,159,0,0.25) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />

        <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
          {/* Header */}

          <div className="flex flex-col gap-7 border-b border-black/[0.08] pb-10 dark:border-white/[0.08] lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#ADD132]" />

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6D900B] dark:text-[#ADD132]">
                  Monthly Report
                </span>
              </div>

              <h2
                className="
                  max-w-[720px]
                  text-[34px]
                  font-black
                  leading-[0.95]
                  tracking-[-0.055em]
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[58px]
                "
              >
                Your protection.
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  Clearly measured.
                </span>
              </h2>
            </div>

            <div className="max-w-[390px]">
              <p className="text-[13px] leading-7 text-[#687267] dark:text-white/45 sm:text-[14px]">
                A structured view of your digital protection activity,
                helping your team understand what was found, what changed
                and what needs attention next.
              </p>
            </div>
          </div>

          {/* Main console */}

          <div className="relative mt-12 overflow-hidden border border-black/[0.08] bg-[#F7FAF3] dark:border-white/[0.08] dark:bg-[#0A1009] lg:mt-16">
            {/* Top console bar */}

            <div className="flex flex-col border-b border-black/[0.08] dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4 px-5 py-4 sm:px-7">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ADD132]" />
                  <span className="h-2 w-2 rounded-full bg-[#ADD132]/35" />
                  <span className="h-2 w-2 rounded-full bg-[#ADD132]/15" />
                </div>

                <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#697267] dark:text-white/40">
                  Protection intelligence / monthly cycle
                </span>
              </div>

              <div className="border-t border-black/[0.08] px-5 py-4 dark:border-white/[0.08] sm:border-l sm:border-t-0 sm:px-7">
                <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-[#6D900B] dark:text-[#ADD132]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ADD132]" />
                  Monitoring active
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              {/* INDEX */}

              <div className="w-full border-b border-black/[0.08] lg:w-[34%] lg:border-b-0 lg:border-r dark:border-white/[0.08]">
                <div className="px-5 py-6 sm:px-7">
                  <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#8A948E] dark:text-white/30">
                    Report index
                  </p>

                  <div className="mt-6 space-y-1">
                    {monthlyReportItems.map((item, index) => {
                      const active = index === activeReport;

                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setActiveReport(index)}
                          className={`
                            group
                            flex
                            w-full
                            items-center
                            gap-4
                            border-l
                            px-3
                            py-3
                            text-left
                            transition-all
                            duration-500
                            ${
                              active
                                ? "border-[#ADD132] bg-[#ADD132]/10"
                                : "border-transparent hover:border-[#ADD132]/40 hover:bg-[#ADD132]/5"
                            }
                          `}
                        >
                          <span
                            className={`
                              shrink-0
                              text-[9px]
                              font-black
                              tracking-[0.15em]
                              ${
                                active
                                  ? "text-[#6D900B] dark:text-[#ADD132]"
                                  : "text-[#A0A89F] dark:text-white/20"
                              }
                            `}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span
                            className={`
                              text-[11px]
                              leading-5
                              transition-colors
                              sm:text-xs
                              ${
                                active
                                  ? "font-semibold text-[#152019] dark:text-white"
                                  : "text-[#697267] dark:text-white/40"
                              }
                            `}
                          >
                            {item}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ACTIVE REPORT */}

              <div className="relative min-h-[460px] flex-1 overflow-hidden">
                {/* scanning line */}

                <div
                  key={activeReport}
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    right-0
                    top-0
                    h-px
                    animate-[reportScan_2.4s_ease-in-out]
                    bg-gradient-to-r
                    from-transparent
                    via-[#ADD132]
                    to-transparent
                    opacity-70
                  "
                />

                {/* radial signal */}

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ADD132]/10" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#ADD132]/10 animate-[spin_20s_linear_infinite]" />

                <div className="relative flex min-h-[460px] flex-col justify-between p-6 sm:p-9 md:p-12">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#789900] dark:text-[#ADD132]">
                        Active intelligence
                      </span>

                      <div className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#8A948E] dark:text-white/30">
                        REPORT /{" "}
                        {String(activeReport + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <BarChart3
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#789900] dark:text-[#ADD132]"
                    />
                  </div>

                  <div key={activeReport} className="animate-[reportReveal_0.6s_ease-out]">
                    <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8A948E] dark:text-white/25">
                      Protection signal
                    </div>

                    <h3
                      className="
                        mt-5
                        max-w-[700px]
                        text-[28px]
                        font-black
                        leading-[1.05]
                        tracking-[-0.045em]
                        text-[#152019]
                        dark:text-white
                        sm:text-4xl
                        md:text-[46px]
                      "
                    >
                      {monthlyReportItems[activeReport]}
                    </h3>

                    <div className="mt-7 flex items-center gap-4">
                      <div className="h-px w-16 bg-[#ADD132]" />

                      <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#789900] dark:text-[#ADD132]">
                        Recorded in monthly intelligence
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 border-t border-black/[0.08] pt-6 dark:border-white/[0.08] sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8A948E] dark:text-white/25">
                        Report coverage
                      </p>

                      <div className="mt-3 flex gap-1">
                        {monthlyReportItems.map((_, index) => (
                          <span
                            key={index}
                            className={`
                              h-1
                              transition-all
                              duration-500
                              ${
                                index === activeReport
                                  ? "w-8 bg-[#ADD132]"
                                  : "w-3 bg-[#ADD132]/20"
                              }
                            `}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8A948E] dark:text-white/25">
                        TrackOwls
                      </span>

                      <div className="mt-1 text-[11px] font-bold text-[#536052] dark:text-white/45">
                        Intelligence report
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Report footer signals */}

          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-black/[0.08] pt-5 dark:border-white/[0.08]">
            {[
              ["01", "Detected"],
              ["02", "Verified"],
              ["03", "Actioned"],
              ["04", "Reported"],
            ].map(([number, label]) => (
              <div key={number} className="flex items-center gap-2">
                <span className="text-[8px] font-black tracking-[0.18em] text-[#789900] dark:text-[#ADD132]">
                  {number}
                </span>

                <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#7B857B] dark:text-white/30">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          GETTING STARTED
          NEW DESIGN — ACTIVATION SEQUENCE
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#EFF5EA]
          py-20
          text-[#101510]
          dark:bg-[#0A110D]
          dark:text-white
          sm:py-24
          lg:py-32
        "
      >
        {/* Atmosphere */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-12%] top-[25%] h-[420px] w-[420px] rounded-full bg-[#ADD132]/6 blur-[130px]" />

          <div className="absolute right-[5%] top-[10%] h-[280px] w-[280px] rounded-full border border-[#ADD132]/5" />

          <div className="absolute right-[10%] top-[17%] h-[150px] w-[150px] rounded-full border border-dashed border-[#ADD132]/10 animate-[spin_25s_linear_infinite]" />
        </div>

        <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
          {/* Header */}

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#ADD132]" />

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6D900B] dark:text-[#ADD132]">
                  Getting Started
                </span>
              </div>

              <h2
                className="
                  text-[34px]
                  font-black
                  leading-[0.94]
                  tracking-[-0.055em]
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[58px]
                "
              >
                From first scan
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  to active protection.
                </span>
              </h2>
            </div>

            <div className="max-w-[420px]">
              <p className="text-[13px] leading-7 text-[#687267] dark:text-white/45 sm:text-[14px]">
                Start with a simple audit, activate your monitoring environment
                and move into continuous intelligence with a clear protection
                workflow.
              </p>
            </div>
          </div>

          {/* Activation system */}

          <div className="relative mt-16 sm:mt-20 lg:mt-24">
            {/* Energy path */}

            <div className="pointer-events-none absolute left-[6%] right-[6%] top-[38px] hidden h-px overflow-hidden bg-[#79951D]/15 lg:block dark:bg-[#ADD132]/15">
              <span
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[22%]
                  animate-[energyTravel_3.5s_linear_infinite]
                  bg-gradient-to-r
                  from-transparent
                  via-[#ADD132]
                  to-transparent
                "
              />
            </div>

            {/* Mobile vertical energy path */}

            <div className="pointer-events-none absolute bottom-[70px] left-[17px] top-[38px] w-px bg-[#79951D]/15 lg:hidden dark:bg-[#ADD132]/15">
              <span className="absolute left-0 top-0 h-20 w-px animate-[energyVertical_3.5s_linear_infinite] bg-gradient-to-b from-transparent via-[#ADD132] to-transparent" />
            </div>

            <div className="flex flex-col gap-12 lg:flex-row lg:gap-0">
              {gettingStartedSteps.map((step, index) => {
                const active = index === activeStep;

                return (
                  <div
                    key={step.title}
                    className="group relative flex-1 lg:px-6 lg:first:pl-0 lg:last:pr-0"
                  >
                    {/* Stage marker */}

                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className="relative z-10 flex items-center gap-5 text-left lg:block"
                    >
                      <span
                        className={`
                          relative
                          flex
                          h-[36px]
                          w-[36px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          text-[8px]
                          font-black
                          tracking-[0.15em]
                          transition-all
                          duration-500
                          lg:h-[76px]
                          lg:w-[76px]
                          ${
                            active
                              ? "border-[#ADD132] bg-[#ADD132] text-[#101800] shadow-[0_0_35px_rgba(173,209,50,0.25)]"
                              : "border-[#79951D]/25 bg-[#EFF5EA] text-[#6D900B] dark:border-[#ADD132]/20 dark:bg-[#0A110D] dark:text-[#ADD132]"
                          }
                        `}
                      >
                        {active && (
                          <span className="absolute -inset-2 animate-ping rounded-full border border-[#ADD132]/20" />
                        )}

                        <span className="relative">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </span>

                      <span className="lg:mt-7">
                        <span className="block text-[8px] font-black uppercase tracking-[0.24em] text-[#8A948E] dark:text-white/25">
                          Stage {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`
                            mt-2
                            block
                            text-[18px]
                            font-black
                            tracking-[-0.03em]
                            transition-colors
                            duration-300
                            sm:text-xl
                            ${
                              active
                                ? "text-[#6D900B] dark:text-[#ADD132]"
                                : "text-[#152019] dark:text-white/75"
                            }
                          `}
                        >
                          {step.title}
                        </span>
                      </span>
                    </button>

                    {/* Description */}

                    <div className="ml-[56px] mt-4 max-w-[310px] lg:ml-0 lg:mt-7">
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className={`
                            text-[8px]
                            font-black
                            uppercase
                            tracking-[0.25em]
                            ${
                              active
                                ? "text-[#789900] dark:text-[#ADD132]"
                                : "text-[#A0A89F] dark:text-white/20"
                            }
                          `}
                        >
                          {step.code}
                        </span>

                        <span
                          className={`
                            h-px
                            transition-all
                            duration-500
                            ${
                              active
                                ? "w-12 bg-[#ADD132]"
                                : "w-5 bg-[#ADD132]/20"
                            }
                          `}
                        />
                      </div>

                      <p
                        className={`
                          text-[12px]
                          leading-7
                          transition-colors
                          duration-500
                          sm:text-[13px]
                          ${
                            active
                              ? "text-[#4E594E] dark:text-white/65"
                              : "text-[#737D73] dark:text-white/35"
                          }
                        `}
                      >
                        {step.body}
                      </p>

                      <div
                        className={`
                          mt-5 h-px
                          transition-all
                          duration-700
                          ${
                            active
                              ? "w-20 bg-[#ADD132]"
                              : "w-8 bg-[#ADD132]/25"
                          }
                        `}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom activation status */}

          <div className="mt-16 border-t border-[#263226]/10 pt-7 dark:border-white/[0.08] sm:mt-20">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#ADD132]/60" />
                  <span className="relative h-2 w-2 rounded-full bg-[#ADD132]" />
                </span>

                <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#657352] dark:text-white/35">
                  Protection workflow ready
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {gettingStartedSteps.map((step, index) => (
                  <React.Fragment key={step.title}>
                    <span
                      className={`
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.18em]
                        transition-colors
                        ${
                          index <= activeStep
                            ? "text-[#6D900B] dark:text-[#ADD132]"
                            : "text-[#9AA39A] dark:text-white/20"
                        }
                      `}
                    >
                      {step.code}
                    </span>

                    {index < gettingStartedSteps.length - 1 && (
                      <span className="text-[#9AA39A] dark:text-white/15">
                        /
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation styles */}

      <style>{`
        @keyframes reportScan {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(460px);
            opacity: 0;
          }
        }

        @keyframes reportReveal {
          0% {
            opacity: 0;
            transform: translateY(12px);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes energyTravel {
          0% {
            left: -25%;
          }
          100% {
            left: 110%;
          }
        }

        @keyframes energyVertical {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(600%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </>
  );
}

/* =========================================================
   STAT
========================================================= */

function Stat({ value, label }) {
  return (
    <div className="min-w-[65px] sm:min-w-[80px]">
      <div className="text-2xl font-black tracking-[-0.05em] text-[#111711] dark:text-white sm:text-3xl">
        {value}
      </div>

      <div className="mt-1 text-[7px] font-black uppercase leading-3 tracking-[0.16em] text-[#7B857B] dark:text-white/30 sm:text-[8px]">
        {label}
      </div>
    </div>
  );
}

/* =========================================================
   STAT DIVIDER
========================================================= */

function StatDivider() {
  return (
    <div className="h-8 w-px bg-[#172117]/10 dark:bg-white/10 sm:h-9" />
  );
}

/* =========================================================
   SIGNAL DOT
========================================================= */

function SignalDot({ className = "" }) {
  return (
    <span
      className={`
        absolute
        h-1.5
        w-1.5
        animate-pulse
        rounded-full
        bg-[#7D9F00]
        shadow-[0_0_8px_rgba(125,159,0,0.55)]
        dark:bg-[#ADD132]
        dark:shadow-[0_0_10px_rgba(173,209,50,0.9)]
        ${className}
      `}
    />
  );
}

/* =========================================================
   SURFACE LABEL
========================================================= */

function SurfaceLabel({ icon, title, className = "" }) {
  return (
    <div
      className={`
        absolute
        z-30
        flex
        items-center
        gap-2
        border-b
        border-[#33432D]/15
        bg-white/50
        px-2
        py-2
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#ADD132]/50
        dark:border-[#ADD132]/15
        dark:bg-[#0B130A]/45
        ${className}
      `}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#ADD132]/10 text-[#6F8D08] dark:text-[#ADD132]">
        {icon}
      </span>

      <span className="whitespace-nowrap text-[7px] font-black uppercase tracking-[0.08em] text-[#20291F] dark:text-white/75 sm:text-[8px]">
        {title}
      </span>
    </div>
  );
}

export default IntelligentStatement;