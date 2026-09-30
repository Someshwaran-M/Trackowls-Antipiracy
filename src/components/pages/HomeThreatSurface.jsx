import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  Activity,
  ScanSearch,
  Radio,
  Globe2,
} from "lucide-react";

const threats = [
  {
    number: "01",
    threat: "Pirated video",
    look: "Free movie or course on a pirate site",
    response: "Detect, notice, de-index",
    type: "CONTENT",
  },
  {
    number: "02",
    threat: "Telegram sharing",
    look: "Paid content in channels and groups",
    response: "Report to Telegram, track re-creation",
    type: "DISTRIBUTION",
  },
  {
    number: "03",
    threat: "Fake store",
    look: "Copy of your website selling fake goods",
    response: "Host and registrar takedown",
    type: "BRAND",
  },
  {
    number: "04",
    threat: "Impersonation",
    look: "Fake page using your logo",
    response: "Platform impersonation report",
    type: "IDENTITY",
  },
  {
    number: "05",
    threat: "Counterfeit listing",
    look: "Fake product on a marketplace",
    response: "Marketplace brand report",
    type: "MARKETPLACE",
  },
];

export default function HomeThreatSurface() {
  const [activeThreat, setActiveThreat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveThreat((current) => (current + 1) % threats.length);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  const active = threats[activeThreat];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F9F4]
        py-20
        dark:bg-[#030503]
        sm:py-24
        lg:py-32
      "
    >
      {/* =====================================================
          AMBIENT LIGHT
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[-160px]
            top-[20%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#ADD132]/[0.045]
            blur-[120px]
            dark:bg-[#ADD132]/[0.025]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-120px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#ADD132]/[0.04]
            blur-[120px]
            dark:bg-[#ADD132]/[0.025]
          "
        />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#ADD132]/50" />
              <span className="relative h-2 w-2 rounded-full bg-[#ADD132]" />
            </span>

            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#6D900B] dark:text-[#ADD132] sm:text-[10px]">
              Threat Surface
            </p>
          </div>

          <h2
            className="
              mt-5
              max-w-3xl
              text-[34px]
              font-black
              leading-[0.94]
              tracking-[-0.05em]
              text-[#152019]
              dark:text-white
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Every threat leaves
            <br />
            a signal.
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-[14px]
              leading-7
              text-[#687368]
              dark:text-white/50
              sm:text-[15px]
              sm:leading-8
            "
          >
            TrackOwls identifies unauthorized content, impersonation,
            counterfeit activity and digital distribution before those
            signals become larger threats.
          </p>
        </div>

        {/* =====================================================
            MAIN LEFT DIAGRAM + RIGHT CONTENT
        ====================================================== */}

        <div
          className="
            mt-14
            flex
            flex-col
            gap-14
            lg:mt-20
            lg:flex-row
            lg:items-center
            lg:gap-20
            xl:gap-28
          "
        >
          {/* =================================================
              LEFT — INTELLIGENCE DIAGRAM
          ================================================== */}

          <div
            className="
              relative
              flex
              min-h-[420px]
              w-full
              items-center
              justify-center
              lg:min-h-[560px]
              lg:w-[48%]
              lg:shrink-0
            "
          >
            {/* Large atmospheric circle */}
            <div
              className="
                absolute
                h-[310px]
                w-[310px]
                rounded-full
                border
                border-[#ADD132]/10
                sm:h-[380px]
                sm:w-[380px]
                lg:h-[460px]
                lg:w-[460px]
              "
            />

            {/* Second circle */}
            <div
              className="
                absolute
                h-[240px]
                w-[240px]
                rounded-full
                border
                border-[#ADD132]/15
                sm:h-[300px]
                sm:w-[300px]
                lg:h-[360px]
                lg:w-[360px]
              "
            />

            {/* Inner circle */}
            <div
              className="
                absolute
                h-[170px]
                w-[170px]
                rounded-full
                border
                border-[#ADD132]/20
                sm:h-[210px]
                sm:w-[210px]
                lg:h-[260px]
                lg:w-[260px]
              "
            />

            {/* Rotating scanning ring */}
            <div
              className="
                absolute
                h-[310px]
                w-[310px]
                animate-[threatRotate_14s_linear_infinite]
                rounded-full
                border-t
                border-[#ADD132]/50
                border-r-transparent
                border-b-transparent
                border-l-transparent
                sm:h-[380px]
                sm:w-[380px]
                lg:h-[460px]
                lg:w-[460px]
              "
            />

            {/* Second rotating ring */}
            <div
              className="
                absolute
                h-[240px]
                w-[240px]
                animate-[threatRotateReverse_9s_linear_infinite]
                rounded-full
                border-b
                border-[#ADD132]/30
                border-l-transparent
                border-r-transparent
                border-t-transparent
                sm:h-[300px]
                sm:w-[300px]
                lg:h-[360px]
                lg:w-[360px]
              "
            />

            {/* Horizontal signal line */}
            <div
              className="
                absolute
                h-px
                w-[280px]
                bg-gradient-to-r
                from-transparent
                via-[#ADD132]/20
                to-transparent
                sm:w-[360px]
                lg:w-[460px]
              "
            />

            {/* Vertical signal line */}
            <div
              className="
                absolute
                h-[280px]
                w-px
                bg-gradient-to-b
                from-transparent
                via-[#ADD132]/20
                to-transparent
                sm:h-[360px]
                lg:h-[460px]
              "
            />

            {/* =================================================
                OUTER SIGNAL POINTS
            ================================================== */}

            <ThreatPoint
              active={activeThreat === 0}
              position="left-[17%] top-[28%]"
            />

            <ThreatPoint
              active={activeThreat === 1}
              position="right-[15%] top-[22%]"
            />

            <ThreatPoint
              active={activeThreat === 2}
              position="right-[10%] bottom-[29%]"
            />

            <ThreatPoint
              active={activeThreat === 3}
              position="left-[14%] bottom-[24%]"
            />

            <ThreatPoint
              active={activeThreat === 4}
              position="left-[50%] top-[8%] -translate-x-1/2"
            />

            {/* =================================================
                CENTRAL CORE
            ================================================== */}

            <div className="relative z-20 flex h-[170px] w-[170px] items-center justify-center sm:h-[200px] sm:w-[200px] lg:h-[220px] lg:w-[220px]">
              {/* Pulse */}
              <span className="absolute inset-0 animate-[corePulse_3s_ease-in-out_infinite] rounded-full border border-[#ADD132]/10" />

              <span className="absolute -inset-4 rounded-full border border-[#ADD132]/10" />

              <span className="absolute -inset-8 rounded-full border border-[#ADD132]/[0.05]" />

              {/* Core circle */}
              <div
                className="
                  relative
                  flex
                  h-[125px]
                  w-[125px]
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ADD132]/40
                  bg-[#F7F9F4]/90
                  shadow-[0_0_70px_rgba(173,209,50,0.14)]
                  backdrop-blur-xl
                  dark:bg-[#030503]/90
                  sm:h-[145px]
                  sm:w-[145px]
                  lg:h-[155px]
                  lg:w-[155px]
                "
              >
                <ShieldCheck
                  size={34}
                  strokeWidth={1.4}
                  className="text-[#6D900B] dark:text-[#ADD132] sm:h-10 sm:w-10"
                />

                <span className="mt-3 text-[9px] font-black uppercase tracking-[0.22em] text-[#152019] dark:text-white">
                  TrackOwls
                </span>

                <span className="mt-1 text-[6px] font-black uppercase tracking-[0.18em] text-[#8A948E] dark:text-white/25">
                  Intelligence Core
                </span>
              </div>
            </div>

            {/* =================================================
                LIVE LABEL
            ================================================== */}

            <div
              className="
                absolute
                bottom-2
                left-1/2
                flex
                -translate-x-1/2
                items-center
                gap-2
                whitespace-nowrap
              "
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#ADD132]/60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#ADD132]" />
              </span>

              <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#7A847D] dark:text-white/25">
                Digital surfaces scanning
              </span>
            </div>

            {/* Top label */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <div className="flex items-center gap-2">
                <span className="h-px w-5 bg-[#ADD132]/40" />

                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#7A847D] dark:text-white/25">
                  Threat network
                </span>

                <span className="h-px w-5 bg-[#ADD132]/40" />
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — THREAT CONTENT
          ================================================== */}

          <div className="w-full lg:flex-1">
            {/* Status */}
            <div className="flex items-center justify-between border-b border-black/[0.08] pb-4 dark:border-white/[0.08]">
              <div className="flex items-center gap-3">
                <Activity
                  size={14}
                  strokeWidth={1.8}
                  className="text-[#6D900B] dark:text-[#ADD132]"
                />

                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#7A847D] dark:text-white/30">
                  Active threat signal
                </span>
              </div>

              <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#6D900B] dark:text-[#ADD132]">
                {active.number} / 05
              </span>
            </div>

            {/* Active threat */}
            <div className="relative py-8 sm:py-10">
              {/* Active indicator */}
              <div className="absolute left-0 top-8 h-[100px] w-px bg-gradient-to-b from-[#ADD132] via-[#ADD132]/40 to-transparent sm:top-10" />

              <div className="pl-6 sm:pl-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#6D900B] dark:text-[#ADD132]">
                    {active.type}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#ADD132]" />

                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8A948E] dark:text-white/25">
                    Detected
                  </span>
                </div>

                <h3
                  key={active.threat}
                  className="
                    mt-4
                    animate-[threatTextIn_0.5s_ease-out]
                    text-[30px]
                    font-black
                    leading-[0.95]
                    tracking-[-0.045em]
                    text-[#152019]
                    dark:text-white
                    sm:text-[38px]
                    md:text-[42px]
                    lg:text-[46px]
                  "
                >
                  {active.threat}
                </h3>

                <p
                  key={`${active.threat}-look`}
                  className="
                    mt-5
                    max-w-xl
                    animate-[threatTextIn_0.6s_ease-out]
                    text-[13px]
                    leading-6
                    text-[#68736B]
                    dark:text-white/45
                    sm:text-[14px]
                    sm:leading-7
                  "
                >
                  {active.look}
                </p>

                {/* Response */}
                <div className="mt-7 flex items-start gap-4">
                  <div className="mt-2 flex shrink-0 items-center gap-2">
                    <span className="h-px w-8 bg-[#ADD132]" />

                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />
                  </div>

                  <div>
                    <p className="text-[7px] font-black uppercase tracking-[0.2em] text-[#8A948E] dark:text-white/25">
                      Response path
                    </p>

                    <p className="mt-1 text-[12px] font-semibold leading-6 text-[#526057] dark:text-white/65 sm:text-[13px]">
                      {active.response}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                THREAT NAVIGATION
            ================================================== */}

            <div className="border-t border-black/[0.08] dark:border-white/[0.08]">
              {threats.map((item, index) => {
                const isActive = index === activeThreat;

                return (
                  <button
                    key={item.threat}
                    type="button"
                    onClick={() => setActiveThreat(index)}
                    className="
                      group
                      relative
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      gap-4
                      border-b
                      border-black/[0.07]
                      py-4
                      text-left
                      transition-all
                      duration-300
                      dark:border-white/[0.07]
                      sm:py-5
                    "
                  >
                    {/* Active line */}
                    <span
                      className={`
                        absolute
                        bottom-0
                        left-0
                        top-0
                        w-px
                        bg-[#ADD132]
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0"
                        }
                      `}
                    />

                    {/* Number */}
                    <span
                      className={`
                        w-7
                        shrink-0
                        text-[9px]
                        font-black
                        tracking-[0.16em]
                        transition-colors
                        duration-300
                        ${
                          isActive
                            ? "text-[#6D900B] dark:text-[#ADD132]"
                            : "text-[#A2AAA4] dark:text-white/20"
                        }
                      `}
                    >
                      {item.number}
                    </span>

                    {/* Line */}
                    <span
                      className={`
                        h-px
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "w-7 bg-[#ADD132]"
                            : "w-3 bg-black/10 dark:bg-white/10"
                        }
                      `}
                    />

                    {/* Name */}
                    <span
                      className={`
                        flex-1
                        text-[13px]
                        font-black
                        tracking-[-0.01em]
                        transition-all
                        duration-300
                        sm:text-[14px]
                        ${
                          isActive
                            ? "translate-x-1 text-[#152019] dark:text-white"
                            : "text-[#7A847D] dark:text-white/40"
                        }
                      `}
                    >
                      {item.threat}
                    </span>

                    {/* Type */}
                    <span
                      className={`
                        hidden
                        text-[7px]
                        font-black
                        uppercase
                        tracking-[0.16em]
                        transition-colors
                        duration-300
                        sm:block
                        ${
                          isActive
                            ? "text-[#6D900B] dark:text-[#ADD132]"
                            : "text-[#9AA39D] dark:text-white/20"
                        }
                      `}
                    >
                      {item.type}
                    </span>

                    <ArrowUpRight
                      size={15}
                      className={`
                        shrink-0
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "-translate-y-0.5 translate-x-0.5 text-[#6D900B] opacity-100 dark:text-[#ADD132]"
                            : "text-[#A2AAA4] opacity-25 dark:text-white/20"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>

            {/* Scan status */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Radio
                  size={13}
                  strokeWidth={1.7}
                  className="text-[#6D900B] dark:text-[#ADD132]"
                />

                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#8A948E] dark:text-white/25">
                  Continuous monitoring
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#ADD132]/50" />

                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#ADD132]" />
                </span>

                <span className="text-[7px] font-black uppercase tracking-[0.18em] text-[#6D900B] dark:text-[#ADD132]">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mt-12 border-t border-black/[0.08] pt-7 dark:border-white/[0.08] sm:mt-16 sm:pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <ScanSearch
                size={14}
                strokeWidth={1.7}
                className="text-[#6D900B] dark:text-[#ADD132]"
              />

              <p className="text-[11px] leading-5 text-[#7A847D] dark:text-white/35 sm:text-[12px]">
                Every signal is mapped to the appropriate protection workflow.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8A948E] dark:text-white/25">
                {String(activeThreat + 1).padStart(2, "0")} of{" "}
                {String(threats.length).padStart(2, "0")}
              </span>

              <div className="h-px w-12 bg-[#ADD132]/40">
                <div
                  className="h-full bg-[#ADD132] transition-all duration-700"
                  style={{
                    width: `${((activeThreat + 1) / threats.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes threatRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes threatRotateReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes corePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.65;
          }

          50% {
            transform: scale(1.06);
            opacity: 1;
          }
        }

        @keyframes threatTextIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-ping,
          .animate-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   DIAGRAM THREAT POINT
============================================================ */

function ThreatPoint({ active, position }) {
  return (
    <div
      className={`
        absolute
        ${position}
        z-10
        transition-all
        duration-700
        ${
          active
            ? "scale-125"
            : "scale-100"
        }
      `}
    >
      <span className="relative flex h-3 w-3 items-center justify-center">
        {active && (
          <span className="absolute -inset-2 animate-ping rounded-full border border-[#ADD132]/30" />
        )}

        <span
          className={`
            h-2
            w-2
            rounded-full
            transition-all
            duration-500
            ${
              active
                ? "bg-[#ADD132] shadow-[0_0_18px_rgba(173,209,50,0.8)]"
                : "bg-[#ADD132]/40"
            }
          `}
        />
      </span>
    </div>
  );
}