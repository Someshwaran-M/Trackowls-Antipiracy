import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Sparkles,
  ShieldCheck,
  Target,
  Activity,
  BarChart3,
  Crosshair,
  Layers3,
} from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "STARTER",
    title: "Start protecting your digital content.",
    summary: "For creators and small brands.",
    priceLabel: "Custom",
    description:
      "A focused protection setup for creators and smaller brands that need reliable monitoring and takedown support.",
    bullets: [
      "Monthly scans",
      "Takedown management",
      "Monthly report",
    ],
    buttonLabel: "Get a quote",
    featured: false,
    number: "01",
  },
  {
    name: "PRO",
    title: "Stay ahead of digital misuse.",
    summary: "For growing studios and brands.",
    priceLabel: "Custom",
    description:
      "Expanded monitoring for growing catalogues, brands and digital businesses that need faster visibility and stronger protection workflows.",
    bullets: [
      "Daily monitoring",
      "Search de-indexing",
      "Brand protection cases",
      "Case dashboard",
    ],
    buttonLabel: "Get a quote",
    featured: true,
    number: "02",
  },
  {
    name: "ENTERPRISE",
    title: "Protection built around your catalogue.",
    summary: "For large catalogues.",
    priceLabel: "Custom",
    description:
      "A tailored protection workflow for larger organisations requiring broader coverage, escalation support and dedicated coordination.",
    bullets: [
      "Custom coverage",
      "Legal escalation",
      "Dedicated manager",
    ],
    buttonLabel: "Talk to us",
    featured: false,
    number: "03",
  },
];

function Plans() {
  const [activePlan, setActivePlan] = useState(1);
  const [isDark, setIsDark] = useState(false);

  const selectedPlan = plans[activePlan];

  /* =========================================================
     THEME DETECTION
  ========================================================= */

  useEffect(() => {
    const root = document.documentElement;

    const updateTheme = () => {
      setIsDark(root.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main
      id="plans"
      className="
        relative
        overflow-hidden
        bg-[#F5F8F2]
        text-[#152019]
        dark:bg-[#070A07]
        dark:text-white
      "
    >
      <style>{`

        /* =====================================================
           VIDEO HERO
        ===================================================== */

        .plans-video-hero {
          min-height: 650px;
        }

        .plans-video {
          transform: scale(1.015);
          animation: plansVideoBreath 16s ease-in-out infinite alternate;
        }

        @keyframes plansVideoBreath {
          from {
            transform: scale(1.015);
          }

          to {
            transform: scale(1.055);
          }
        }

        /* =====================================================
           VIDEO LIGHT MOVEMENT
        ===================================================== */

        .plans-video-light {
          animation: plansVideoLight 8s ease-in-out infinite;
        }

        @keyframes plansVideoLight {
          0%,
          100% {
            opacity: .25;
            transform: translateX(-5%);
          }

          50% {
            opacity: .5;
            transform: translateX(5%);
          }
        }

        /* =====================================================
           SCAN LINE
        ===================================================== */

        .plans-scan-line {
          animation: plansScanLine 5s ease-in-out infinite;
        }

        @keyframes plansScanLine {
          0% {
            transform: translateX(-120%);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          75% {
            opacity: 1;
          }

          100% {
            transform: translateX(520%);
            opacity: 0;
          }
        }

        /* =====================================================
           PULSE
        ===================================================== */

        .plans-pulse {
          animation: plansPulse 2.4s ease-in-out infinite;
        }

        @keyframes plansPulse {
          0%,
          100% {
            opacity: .35;
            transform: scale(.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        /* =====================================================
           HERO REVEAL
        ===================================================== */

        .plans-hero-content {
          animation: plansHeroReveal 900ms cubic-bezier(.16,1,.3,1) both;
        }

        .plans-hero-side {
          animation: plansHeroReveal 900ms .15s cubic-bezier(.16,1,.3,1)
            both;
        }

        @keyframes plansHeroReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =====================================================
           STRATEGY NODE
        ===================================================== */

        .plans-strategy-node {
          transition:
            transform .35s ease,
            border-color .35s ease,
            background-color .35s ease;
        }

        .plans-strategy-node:hover {
          transform: translateY(-3px);
        }

        /* =====================================================
           PLAN ROW
        ===================================================== */

        .plans-row {
          transition:
            background-color .35s ease,
            padding-left .35s ease;
        }

        .plans-row:hover {
          padding-left: 10px;
        }

        .plans-number {
          transition:
            transform 500ms cubic-bezier(.16,1,.3,1),
            opacity 500ms ease;
        }

        .plans-row:hover .plans-number {
          transform: translateX(8px);
        }

        /* =====================================================
           DETAIL ENTER
        ===================================================== */

        .plans-detail-enter {
          animation: plansDetailEnter 500ms cubic-bezier(.16,1,.3,1);
        }

        @keyframes plansDetailEnter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =====================================================
           STRATEGY LINE
        ===================================================== */

        .plans-strategy-line {
          animation: plansStrategyLine 3s ease-in-out infinite;
        }

        @keyframes plansStrategyLine {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }

          45% {
            transform: scaleX(1);
            transform-origin: left;
          }

          55% {
            transform: scaleX(1);
            transform-origin: right;
          }

          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
        }

        /* =====================================================
           ACTIVE DOT
        ===================================================== */

        .plans-active-dot {
          box-shadow:
            0 0 0 5px rgba(173, 209, 50, .08),
            0 0 20px rgba(173, 209, 50, .25);
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 767px) {
          .plans-video-hero {
            min-height: 720px;
          }

          .plans-row:hover {
            padding-left: 0;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .plans-video,
          .plans-video-light,
          .plans-scan-line,
          .plans-pulse,
          .plans-hero-content,
          .plans-hero-side,
          .plans-detail-enter,
          .plans-strategy-line {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          VIDEO STRATEGY HERO
      ===================================================== */}

      <section className="plans-video-hero relative overflow-hidden bg-[#030603]">

        {/* VIDEO */}

        <video
          src="/plans-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="
            plans-video
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* VIDEO DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

        {/* MOVING LIGHT */}

        <div
          className="
            plans-video-light
            pointer-events-none
            absolute
            left-[25%]
            top-0
            h-full
            w-[35%]
            bg-[#ADD132]/10
            blur-[120px]
          "
        />

        {/* SCAN */}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden bg-white/10">

          <div className="plans-scan-line absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-transparent via-[#ADD132] to-transparent" />

        </div>

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1480px] flex-col justify-center px-5 py-20 sm:px-8 md:px-10 lg:px-14 lg:py-24 xl:px-16">

          <div className="grid gap-14 lg:grid-cols-[1.25fr_.75fr] lg:items-end">

            {/* LEFT */}

            <div className="plans-hero-content max-w-[900px]">

              <div className="mb-7 flex items-center gap-3">

                <span className="h-px w-12 bg-[#ADD132]" />

                <span className="text-[9px] font-black uppercase tracking-[0.32em] text-[#ADD132]">
                  Plans
                </span>

              </div>

              <p className="mb-5 text-[8px] font-black uppercase tracking-[0.3em] text-white/40">
                Protection strategy / 2026
              </p>

              <h1
                className="
                  max-w-[850px]
                  text-[48px]
                  font-black
                  leading-[.88]
                  tracking-[-.07em]
                  text-white
                  sm:text-[62px]
                  md:text-[74px]
                  lg:text-[88px]
                  xl:text-[100px]
                "
              >
                Protection that
                <br />
                <span className="text-[#ADD132]">
                  scales with you.
                </span>
              </h1>

              <div className="mt-8 max-w-[690px]">

                <p className="text-[13px] leading-7 text-white/60 sm:text-[14px] sm:leading-8">
                  Every plan includes human review before each notice and a
                  monthly report. Choose the protection model that fits your
                  content, brand and monitoring requirements.
                </p>

              </div>

            </div>

            {/* RIGHT STRATEGY PANEL */}

            <div className="plans-hero-side">

              <div className="border-l border-white/15 pl-6 sm:pl-8">

                <div className="flex items-center gap-3">

                  <span className="plans-pulse h-2 w-2 rounded-full bg-[#ADD132]" />

                  <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#ADD132]">
                    Protection strategy
                  </span>

                </div>

                <p className="mt-5 max-w-[380px] text-[11px] leading-6 text-white/45 sm:text-[12px] sm:leading-7">
                  Human-reviewed protection workflow
                </p>

                {/* STRATEGY FLOW */}

                <div className="mt-8">

                  <div className="relative h-px bg-white/10">

                    <div className="plans-strategy-line absolute inset-y-0 left-0 w-full bg-[#ADD132]" />

                  </div>

                  <div className="mt-5 flex justify-between">

                    {[
                      ["01", "Monitor"],
                      ["02", "Enforce"],
                      ["03", "Report"],
                    ].map(([number, label]) => (

                      <div
                        key={number}
                        className="flex flex-col gap-2"
                      >

                        <span className="text-[8px] font-black tracking-[0.16em] text-white/30">
                          {number}
                        </span>

                        <span className="text-[8px] font-black uppercase tracking-[0.14em] text-white/60">
                          {label}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

                {/* VIDEO STATUS */}

                <div className="mt-9 flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#ADD132]/10">

                    <Target
                      size={13}
                      className="text-[#ADD132]"
                    />

                  </div>

                  <div>

                    <p className="text-[7px] font-black uppercase tracking-[0.18em] text-white/30">
                      Strategy status
                    </p>

                    <p className="mt-1 text-[9px] font-bold text-white/70">
                      Protection model ready
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* HERO BOTTOM STRATEGY AXIS */}

          <div className="mt-16 border-t border-white/10 pt-5 sm:mt-20">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">

                <span className="plans-pulse h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

                <span className="text-[7px] font-black uppercase tracking-[0.22em] text-white/35">
                  Protection planning system
                </span>

              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2">

                <span className="text-[7px] font-black uppercase tracking-[0.17em] text-white/30">
                  Monitoring
                </span>

                <span className="text-[7px] font-black uppercase tracking-[0.17em] text-white/30">
                  Enforcement
                </span>

                <span className="text-[7px] font-black uppercase tracking-[0.17em] text-white/30">
                  Reporting
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROTECTION AXIS
      ===================================================== */}

      <section className="relative border-b border-[#D0DAD0] bg-[#F5F8F2] dark:border-white/[0.07] dark:bg-[#070A07]">

        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">

          <div className="flex flex-col sm:flex-row">

            {[
              ["01", "Monitoring", Activity],
              ["02", "Enforcement", Crosshair],
              ["03", "Reporting", BarChart3],
            ].map(([number, label, Icon], index) => (

              <div
                key={label}
                className={`
                  flex
                  flex-1
                  items-center
                  gap-4
                  py-5
                  ${
                    index !== 0
                      ? "border-t border-[#D0DAD0] dark:border-white/[0.08] sm:border-l sm:border-t-0 sm:pl-7"
                      : ""
                  }
                  ${
                    index === 0
                      ? "sm:pr-7"
                      : index === 1
                      ? "sm:px-7"
                      : "sm:pl-7"
                  }
                `}
              >

                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#ADD132]/[0.08]">

                  <Icon
                    size={13}
                    className="text-[#6D900B] dark:text-[#ADD132]"
                  />

                </div>

                <span className="text-[9px] font-black tracking-[0.18em] text-[#89948D] dark:text-white/25">
                  {number}
                </span>

                <span className="h-px w-7 bg-[#ADD132]" />

                <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#556158] dark:text-white/50">
                  {label}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PLANS EXPERIENCE
      ===================================================== */}

      <section className="relative border-y border-[#D0DAD0] bg-[#EDF2E9] dark:border-white/[0.07] dark:bg-[#090D09]">

        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">

          <div className="flex flex-col lg:flex-row">

            {/* =================================================
                PLAN SELECTOR
            ================================================= */}

            <div className="w-full lg:w-[56%]">

              <div className="border-b border-[#D0DAD0] py-6 dark:border-white/[0.07]">

                <div className="flex items-center justify-between">

                  <span className="text-[8px] font-black uppercase tracking-[0.24em] text-[#6D900B] dark:text-[#ADD132]">
                    Protection models
                  </span>

                  <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#919B94] dark:text-white/20">
                    03 options
                  </span>

                </div>

              </div>

              <div>

                {plans.map((plan, index) => {

                  const active = activePlan === index;

                  return (
                    <button
                      key={plan.name}
                      type="button"
                      onClick={() => setActivePlan(index)}
                      className="
                        plans-row
                        group
                        relative
                        block
                        w-full
                        border-b
                        border-[#D0DAD0]
                        py-8
                        text-left
                        transition-all
                        duration-500
                        last:border-b-0
                        dark:border-white/[0.07]
                        sm:py-10
                        lg:py-12
                      "
                    >

                      {/* ACTIVE INDICATOR */}

                      <span
                        className={`
                          absolute
                          inset-y-4
                          left-0
                          w-[3px]
                          origin-center
                          bg-[#ADD132]
                          transition-transform
                          duration-500
                          ${
                            active
                              ? "scale-y-100"
                              : "scale-y-0 group-hover:scale-y-100"
                          }
                        `}
                      />

                      <div className="flex items-start gap-5 pl-4 sm:gap-7 sm:pl-6">

                        {/* NUMBER */}

                        <div className="w-8 shrink-0 pt-1">

                          <span
                            className={`
                              plans-number
                              block
                              text-[10px]
                              font-black
                              tracking-[0.15em]
                              ${
                                active
                                  ? "text-[#6D900B] dark:text-[#ADD132]"
                                  : "text-[#929C95] dark:text-white/25"
                              }
                            `}
                          >
                            {plan.number}
                          </span>

                        </div>

                        {/* MAIN */}

                        <div className="min-w-0 flex-1">

                          <div className="flex flex-wrap items-center gap-3">

                            <span
                              className={`
                                h-2
                                w-2
                                rounded-full
                                transition-all
                                duration-300
                                ${
                                  active
                                    ? "plans-active-dot bg-[#ADD132]"
                                    : "bg-[#C1CAC3] dark:bg-white/20"
                                }
                              `}
                            />

                            <span
                              className={`
                                text-[9px]
                                font-black
                                uppercase
                                tracking-[0.2em]
                                ${
                                  active
                                    ? "text-[#6D900B] dark:text-[#ADD132]"
                                    : "text-[#7B877F] dark:text-white/35"
                                }
                              `}
                            >
                              {plan.name}
                            </span>

                            {plan.featured && (
                              <span className="inline-flex items-center gap-1 rounded-full border border-[#ADD132]/30 bg-[#ADD132]/10 px-2.5 py-1 text-[7px] font-black uppercase tracking-[0.15em] text-[#6D900B] dark:text-[#ADD132]">

                                <Sparkles size={9} />

                                Popular

                              </span>
                            )}

                          </div>

                          <h2
                            className={`
                              mt-4
                              max-w-[580px]
                              text-[27px]
                              font-black
                              leading-[1]
                              tracking-[-0.045em]
                              transition-colors
                              duration-300
                              sm:text-[34px]
                              lg:text-[39px]
                              ${
                                active
                                  ? "text-[#152019] dark:text-white"
                                  : "text-[#536057] dark:text-white/55"
                              }
                            `}
                          >
                            {plan.title}
                          </h2>

                          <p
                            className={`
                              mt-3
                              text-[12px]
                              font-medium
                              leading-6
                              transition-colors
                              duration-300
                              sm:text-[13px]
                              ${
                                active
                                  ? "text-[#69756D] dark:text-white/50"
                                  : "text-[#89938C] dark:text-white/25"
                              }
                            `}
                          >
                            {plan.summary}
                          </p>

                        </div>

                        {/* ARROW */}

                        <div className="hidden pt-1 sm:block">

                          <span
                            className={`
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-full
                              border
                              transition-all
                              duration-300
                              ${
                                active
                                  ? "border-[#ADD132] bg-[#ADD132] text-[#101600]"
                                  : "border-[#CBD5CB] text-[#89948D] group-hover:border-[#ADD132] group-hover:text-[#6D900B] dark:border-white/[0.10] dark:text-white/25 dark:group-hover:text-[#ADD132]"
                              }
                            `}
                          >

                            <ArrowUpRight
                              size={15}
                              className={`
                                transition-transform
                                duration-300
                                ${
                                  active
                                    ? "-translate-y-0.5 translate-x-0.5"
                                    : ""
                                }
                              `}
                            />

                          </span>

                        </div>

                      </div>

                    </button>
                  );
                })}

              </div>

            </div>

            {/* =================================================
                ACTIVE PLAN DETAIL
            ================================================= */}

            <div className="relative flex w-full flex-1 border-t border-[#D0DAD0] dark:border-white/[0.07] lg:border-l lg:border-t-0">

              <div className="relative flex-1 overflow-hidden px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">

                {/* DECORATIVE STRATEGY RAIL */}

                <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-[#ADD132]/50 via-transparent to-[#ADD132]/10" />

                <div className="absolute right-8 top-10 flex flex-col items-center gap-2">

                  <span className="plans-pulse h-2 w-2 rounded-full bg-[#ADD132]" />

                  <span className="h-16 w-px bg-gradient-to-b from-[#ADD132]/50 to-transparent" />

                </div>

                <div
                  className="plans-detail-enter relative"
                  key={selectedPlan.name}
                >

                  {/* PLAN HEADER */}

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <span className="plans-pulse h-2 w-2 rounded-full bg-[#ADD132]" />

                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#6D900B] dark:text-[#ADD132]">
                        Selected protection
                      </span>

                    </div>

                    <span className="text-[8px] font-black tracking-[0.15em] text-[#929C95] dark:text-white/25">
                      {selectedPlan.number}
                    </span>

                  </div>

                  {/* STRATEGY LABEL */}

                  <div className="mt-8 flex items-center gap-3">

                    <Layers3
                      size={14}
                      className="text-[#6D900B] dark:text-[#ADD132]"
                    />

                    <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#8A948E] dark:text-white/25">
                      Protection strategy
                    </span>

                  </div>

                  {/* PRICE */}

                  <div className="mt-8">

                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8A948E] dark:text-white/25">
                      Investment
                    </span>

                    <div className="mt-2 flex items-end gap-3">

                      <span className="text-[52px] font-black leading-none tracking-[-0.07em] text-[#152019] dark:text-white sm:text-[64px]">
                        {selectedPlan.priceLabel}
                      </span>

                    </div>

                  </div>

                  {/* DESCRIPTION */}

                  <p className="mt-7 max-w-[560px] text-[13px] leading-7 text-[#68746D] dark:text-white/45 sm:text-[14px] sm:leading-8">
                    {selectedPlan.description}
                  </p>

                  {/* INCLUDED */}

                  <div className="mt-10 border-t border-[#D0DAD0] pt-7 dark:border-white/[0.08]">

                    <div className="flex items-center justify-between">

                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#6D900B] dark:text-[#ADD132]">
                        Included
                      </span>

                      <span className="text-[8px] font-black uppercase tracking-[0.16em] text-[#919B94] dark:text-white/20">
                        Core protection
                      </span>

                    </div>

                    <div className="mt-6 space-y-4">

                      {selectedPlan.bullets.map((item, index) => (

                        <div
                          key={item}
                          className="flex items-center gap-4"
                        >

                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#ADD132]/25 bg-[#ADD132]/10 text-[#6D900B] dark:text-[#ADD132]">

                            <Check
                              size={12}
                              strokeWidth={3}
                            />

                          </span>

                          <span className="text-[12px] font-semibold text-[#4D5951] dark:text-white/60 sm:text-[13px]">
                            {item}
                          </span>

                          <span className="ml-auto hidden text-[7px] font-black tracking-[0.15em] text-[#A0AAA3] dark:text-white/15 sm:block">
                            0{index + 1}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* CTA */}

                  <div className="mt-10">

                    <Link
                      to="/contact"
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
                        py-4
                        text-[12px]
                        font-black
                        text-[#101600]
                        shadow-[0_10px_35px_rgba(173,209,50,0.12)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-[#BDE640]
                        hover:shadow-[0_15px_40px_rgba(173,209,50,0.2)]
                        sm:w-auto
                      "
                    >

                      {selectedPlan.buttonLabel}

                      <ArrowUpRight
                        size={16}
                        strokeWidth={2.5}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />

                    </Link>

                  </div>

                </div>

              </div>

              {/* ACTIVE PLAN FOOTER */}

              <div className="absolute bottom-0 left-0 right-0 border-t border-[#D0DAD0] px-6 py-5 dark:border-white/[0.07] sm:px-10 lg:px-12">

                <div className="flex items-center gap-3">

                  <ShieldCheck
                    size={14}
                    className="text-[#6D900B] dark:text-[#ADD132]"
                  />

                  <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#7E8981] dark:text-white/25">
                    Human review before each notice
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM STATEMENT
      ===================================================== */}

      <section className="relative">

        <div className="mx-auto max-w-[1480px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-14 lg:py-20 xl:px-16">

          <div className="flex flex-col gap-8 border-t border-[#D0DAD0] pt-8 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">

            <div className="flex max-w-[760px] gap-4">

              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#ADD132]/10 text-[#6D900B] dark:text-[#ADD132]">

                <ShieldCheck size={17} />

              </div>

              <div>

                <p className="text-[13px] font-black text-[#152019] dark:text-white sm:text-[14px]">
                  Every engagement starts with understanding your exposure.
                </p>

                <p className="mt-1 text-[11px] leading-6 text-[#6D776F] dark:text-white/40 sm:text-[12px]">
                  Coverage and workflow can be discussed according to your
                  catalogue, brand requirements and protection objectives.
                </p>

              </div>

            </div>

            <div className="sm:text-right">

              <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8A948E] dark:text-white/25">
                TrackOwls
              </p>

              <p className="mt-1 text-[11px] font-semibold text-[#536057] dark:text-white/45">
                Digital protection infrastructure
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#EAF1E5] dark:bg-[#0A110D]">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-0 h-[320px] w-[620px] -translate-x-1/2 rounded-full bg-[#ADD132]/10 blur-[130px] dark:bg-[#ADD132]/[0.055]" />

        </div>

        <div className="relative mx-auto max-w-[1480px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-16">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="text-[9px] font-black uppercase tracking-[0.24em] text-[#6D900B] dark:text-[#ADD132]">
                Protection starts here
              </p>

              <h2
                className="
                  mt-4
                  max-w-[850px]
                  text-[38px]
                  font-black
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-[#152019]
                  dark:text-white
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Find the right protection
                <br />
                <span className="text-[#6D900B] dark:text-[#ADD132]">
                  for your content.
                </span>
              </h2>

            </div>

            <Link
              to="/contact"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-[#152019]
                px-6
                py-3.5
                text-[12px]
                font-black
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#ADD132]
                hover:text-[#101600]
                dark:bg-[#ADD132]
                dark:text-[#101600]
                dark:hover:bg-[#BDE640]
              "
            >

              Talk to us

              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM ACCENT
      ===================================================== */}

      <div className="relative h-px overflow-hidden bg-[#D4DED0] dark:bg-white/[0.07]">

        <div className="plans-scan-line absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-transparent via-[#ADD132] to-transparent" />

      </div>

    </main>
  );
}

export default Plans;