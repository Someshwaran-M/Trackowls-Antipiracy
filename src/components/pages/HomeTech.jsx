import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Search,
  Fingerprint,
  FileCheck2,
  Send,
  BellRing,
  BarChart3,
  Check,
  Activity,
} from "lucide-react";

const monitoringFeatures = [
  {
    number: "01",
    label: "SOURCE SCANNING",
    title: "Discover where activity appears.",
    body:
      "Scheduled scans of pirate sites, Telegram, social media, marketplaces, domains and search results.",
    icon: Search,
  },
  {
    number: "02",
    label: "MATCH AND VERIFY",
    title: "Separate signals from noise.",
    body:
      "Finds are matched to the titles, keywords and brand assets you provide, then checked by a person before any notice goes out.",
    icon: Fingerprint,
  },
  {
    number: "03",
    label: "EVIDENCE CAPTURE",
    title: "Keep every detail together.",
    body:
      "Each case stores the URL, screenshot, date and time, and an archived copy of the page.",
    icon: FileCheck2,
  },
  {
    number: "04",
    label: "TAKEDOWN WORKFLOW",
    title: "Move from detection to action.",
    body:
      "Ready notice templates, platform and host contacts, follow-up reminders and a status for every case.",
    icon: Send,
  },
  {
    number: "05",
    label: "ALERTS",
    title: "Know when something changes.",
    body:
      "Email or WhatsApp alerts for new leaks, with priority handling for release days and live events.",
    icon: BellRing,
  },
  {
    number: "06",
    label: "REPORTS",
    title: "Turn cases into visibility.",
    body:
      "Cases by platform, response times, repeat offenders and monthly totals you can share with your team.",
    icon: BarChart3,
  },
];

const caseStages = [
  "Found",
  "Verified",
  "Notice sent",
  "Follow-up",
  "Removed",
  "Escalated",
];

function HomeTech() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((current) => (current + 1) % monitoringFeatures.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const active = monitoringFeatures[activeFeature];
  const ActiveIcon = active.icon;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F5F7F2]
        py-14
        text-[#152019]
        dark:bg-[#070A07]
        dark:text-white
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          AMBIENT SYSTEM BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-[12%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#ADD132]/[0.07]
          blur-[130px]
          sm:h-[500px]
          sm:w-[500px]
          lg:h-[620px]
          lg:w-[620px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-[8%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#ADD132]/[0.05]
          blur-[130px]
          sm:h-[500px]
          sm:w-[500px]
          lg:h-[620px]
          lg:w-[620px]
        "
      />

      {/* Fine technical lines */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#ADD132]/40
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-full
          w-px
          -translate-x-1/2
          bg-black/[0.025]
          dark:bg-white/[0.025]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#ADD132]/20
          to-transparent
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1480px]
          px-5
          sm:px-7
          md:px-10
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            gap-7
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-12
          "
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#ADD132] sm:w-12" />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:text-[9px]
                  sm:tracking-[0.3em]
                "
              >
                The TrackOwls monitoring tool
              </span>
            </div>

            <h2
              className="
                mt-4
                text-[32px]
                font-black
                leading-[1]
                tracking-[-0.045em]
                text-[#152019]
                dark:text-white
                sm:text-[36px]
                md:text-[42px]
                lg:text-[52px]
                xl:text-[60px]
              "
            >
              One place to
              <br />
              <span className="text-[#6D900B] dark:text-[#ADD132]">
                monitor everything.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                text-[13px]
                leading-6
                text-[#5E6A62]
                dark:text-white/55
                sm:text-[14px]
                md:text-[15px]
              "
            >
              Our web application keeps every case in one place, from the
              first detection to the final removal. Your team can see what was
              found, what we did and what is still open.
            </p>
          </div>

          {/* LIVE SYSTEM STATUS */}

          <div className="flex items-center gap-3">
            <div
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                border
                border-[#ADD132]/30
              "
            >
              <span
                className="
                  absolute
                  inset-1
                  border
                  border-[#ADD132]/10
                "
              />

              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-[#ADD132]
                  shadow-[0_0_14px_rgba(173,209,50,0.8)]
                "
              />
            </div>

            <div>
              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                "
              >
                Monitoring active
              </p>

              <p
                className="
                  mt-0.5
                  text-[11px]
                  text-[#7A847D]
                  dark:text-white/35
                "
              >
                Continuous digital visibility
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            INTELLIGENCE SIGNAL RAIL
        ===================================================== */}

        <div className="relative mt-12 sm:mt-14 lg:mt-16">
          {/* Top technical line */}

          <div className="absolute left-0 right-0 top-0 h-px bg-black/[0.08] dark:bg-white/[0.08]" />

          {/* Animated signal */}

          <div className="absolute left-0 right-0 top-0 hidden h-px overflow-hidden sm:block">
            <span className="tech-signal-line" />
          </div>

          {/* Stage navigation */}

          <div
            className="
              grid
              grid-cols-2
              border-b
              border-black/[0.08]
              dark:border-white/[0.08]
              sm:grid-cols-3
              lg:grid-cols-6
            "
          >
            {monitoringFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeFeature;

              return (
                <button
                  key={feature.number}
                  type="button"
                  onClick={() => setActiveFeature(index)}
                  className={`
                    group
                    relative
                    flex
                    min-h-[94px]
                    cursor-pointer
                    flex-col
                    justify-between
                    border-b
                    border-r
                    border-black/[0.07]
                    px-4
                    py-4
                    text-left
                    transition-all
                    duration-500
                    dark:border-white/[0.07]
                    sm:min-h-[105px]
                    sm:px-5
                    sm:py-5
                    lg:min-h-[118px]
                    lg:border-b-0
                    ${
                      isActive
                        ? "bg-[#E9F1DD] dark:bg-[#0D160E]"
                        : "bg-transparent hover:bg-[#EEF3E9] dark:hover:bg-white/[0.025]"
                    }
                  `}
                >
                  {/* Active vertical marker */}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      top-0
                      w-[2px]
                      bg-[#ADD132]
                      transition-transform
                      duration-500
                      ${
                        isActive
                          ? "scale-y-100"
                          : "scale-y-0 group-hover:scale-y-50"
                      }
                    `}
                  />

                  <div className="flex items-center justify-between">
                    <span
                      className={`
                        text-[9px]
                        font-bold
                        tracking-[0.18em]
                        transition-colors
                        ${
                          isActive
                            ? "text-[#6D900B] dark:text-[#ADD132]"
                            : "text-[#8B958E] dark:text-white/25"
                        }
                      `}
                    >
                      {feature.number}
                    </span>

                    <Icon
                      className={`
                        h-4
                        w-4
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "text-[#6D900B] dark:text-[#ADD132] scale-110"
                            : "text-[#89938C] dark:text-white/25"
                        }
                      `}
                      strokeWidth={1.6}
                    />
                  </div>

                  <span
                    className={`
                      mt-4
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      transition-colors
                      sm:text-[9px]
                      ${
                        isActive
                          ? "text-[#152019] dark:text-white"
                          : "text-[#7B867E] dark:text-white/40"
                      }
                    `}
                  >
                    {feature.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* =================================================
              ACTIVE INTELLIGENCE
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              border-b
              border-black/[0.08]
              dark:border-white/[0.08]
            "
          >
            {/* Moving horizontal scanner */}

            <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#ADD132]/60 to-transparent animate-scanner" />

            <div
              key={active.number}
              className="
                grid
                min-h-[280px]
                lg:grid-cols-[0.8fr_1.4fr]
              "
            >
              {/* LEFT SIGNAL */}

              <div
                className="
                  relative
                  flex
                  min-h-[230px]
                  items-center
                  justify-center
                  overflow-hidden
                  border-b
                  border-black/[0.08]
                  dark:border-white/[0.08]
                  lg:border-b-0
                  lg:border-r
                "
              >
                {/* Concentric signal rings */}

                <div
                  className="
                    absolute
                    h-[170px]
                    w-[170px]
                    rounded-full
                    border
                    border-[#ADD132]/10
                    animate-signal-ring
                    sm:h-[210px]
                    sm:w-[210px]
                  "
                />

                <div
                  className="
                    absolute
                    h-[125px]
                    w-[125px]
                    rounded-full
                    border
                    border-[#ADD132]/15
                    animate-signal-ring-reverse
                    sm:h-[155px]
                    sm:w-[155px]
                  "
                />

                <div
                  className="
                    absolute
                    h-[80px]
                    w-[80px]
                    rounded-full
                    border
                    border-[#ADD132]/25
                  "
                />

                {/* Center */}

                <div
                  className="
                    relative
                    flex
                    h-[64px]
                    w-[64px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#ADD132]/50
                    bg-[#F5F7F2]
                    shadow-[0_0_45px_rgba(173,209,50,0.12)]
                    dark:bg-[#070A07]
                    dark:shadow-[0_0_45px_rgba(173,209,50,0.08)]
                  "
                >
                  <div
                    className="
                      absolute
                      inset-2
                      rounded-full
                      border
                      border-[#ADD132]/20
                    "
                  />

                  <ActiveIcon
                    className="relative z-10 h-5 w-5 text-[#6D900B] dark:text-[#ADD132]"
                    strokeWidth={1.6}
                  />
                </div>

                {/* Signal points */}

                <span className="absolute left-[24%] top-[34%] h-1.5 w-1.5 animate-ping rounded-full bg-[#ADD132]" />

                <span className="absolute right-[25%] top-[25%] h-1 w-1 animate-pulse rounded-full bg-[#ADD132]" />

                <span className="absolute bottom-[28%] left-[30%] h-1 w-1 animate-pulse rounded-full bg-[#ADD132]" />

                <span className="absolute bottom-[24%] right-[28%] h-1.5 w-1.5 animate-ping rounded-full bg-[#ADD132]" />

                {/* Label */}

                <div className="absolute bottom-5 left-5">
                  <p
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-[#6D900B]
                      dark:text-[#ADD132]
                    "
                  >
                    Active intelligence
                  </p>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      text-[#7B867E]
                      dark:text-white/35
                    "
                  >
                    Signal {active.number} / 06
                  </p>
                </div>

                <Activity
                  className="
                    absolute
                    right-5
                    top-5
                    h-4
                    w-4
                    text-[#ADD132]/50
                  "
                  strokeWidth={1.5}
                />
              </div>

              {/* RIGHT CONTENT */}

              <div
                className="
                  flex
                  flex-col
                  justify-center
                  px-5
                  py-8
                  sm:px-8
                  lg:px-12
                  xl:px-16
                "
              >
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-bold tracking-[0.18em] text-[#8B958E] dark:text-white/25">
                    {active.number}
                  </span>

                  <span className="h-px w-8 bg-[#ADD132]" />

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#6D900B]
                      dark:text-[#ADD132]
                    "
                  >
                    {active.label}
                  </span>
                </div>

                <h3
                  className="
                    mt-4
                    max-w-2xl
                    text-[25px]
                    font-black
                    leading-[1.04]
                    tracking-[-0.035em]
                    text-[#152019]
                    dark:text-white
                    sm:text-[30px]
                    md:text-[34px]
                    lg:text-[40px]
                  "
                >
                  {active.title}
                </h3>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-[13px]
                    leading-6
                    text-[#657168]
                    dark:text-white/50
                    sm:text-[14px]
                    sm:leading-7
                  "
                >
                  {active.body}
                </p>

                {/* Progress */}

                <div className="mt-7 flex items-center gap-3">
                  <span className="text-[8px] font-bold tracking-[0.18em] text-[#7B867E] dark:text-white/30">
                    INTELLIGENCE FLOW
                  </span>

                  <div className="h-px w-20 bg-black/10 dark:bg-white/10">
                    <span
                      className="block h-px bg-[#ADD132] transition-all duration-700"
                      style={{
                        width: `${((activeFeature + 1) / 6) * 100}%`,
                      }}
                    />
                  </div>

                  <span className="text-[8px] font-bold text-[#6D900B] dark:text-[#ADD132]">
                    0{activeFeature + 1}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CASE JOURNEY
        ===================================================== */}

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#ADD132]" />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#6D900B]
                    dark:text-[#ADD132]
                  "
                >
                  Case journey
                </span>
              </div>

              <h3
                className="
                  mt-3
                  text-[27px]
                  font-black
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-[#152019]
                  dark:text-white
                  sm:text-[32px]
                  md:text-[38px]
                "
              >
                Every case has a
                <span className="text-[#6D900B] dark:text-[#ADD132]">
                  {" "}
                  clear path.
                </span>
              </h3>
            </div>

            <p
              className="
                max-w-md
                text-[12px]
                leading-6
                text-[#68736B]
                dark:text-white/40
                sm:text-[13px]
              "
            >
              From the first signal to the final action, every case moves
              through a defined protection workflow.
            </p>
          </div>

          {/* Journey line */}

          <div className="relative mt-9">
            {/* Desktop line */}

            <div
              className="
                absolute
                left-0
                right-0
                top-[15px]
                hidden
                h-px
                bg-black/10
                dark:bg-white/10
                lg:block
              "
            />

            <div
              className="
                absolute
                left-0
                top-[15px]
                hidden
                h-px
                bg-[#ADD132]
                lg:block
                journey-progress
              "
            />

            <div
              className="
                grid
                grid-cols-2
                gap-y-7
                sm:grid-cols-3
                lg:grid-cols-6
              "
            >
              {caseStages.map((stage, index) => {
                const isRemoved = stage === "Removed";

                return (
                  <div
                    key={stage}
                    className="
                      group
                      relative
                      flex
                      flex-col
                      items-start
                      lg:items-center
                      lg:text-center
                    "
                  >
                    <div
                      className={`
                        relative
                        z-10
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        bg-[#F5F7F2]
                        text-[8px]
                        font-bold
                        transition-all
                        duration-500
                        dark:bg-[#070A07]
                        ${
                          isRemoved
                            ? "border-[#ADD132] bg-[#ADD132] text-[#152019]"
                            : "border-black/10 text-[#6D900B] group-hover:border-[#ADD132] dark:border-white/10 dark:text-[#ADD132]"
                        }
                      `}
                    >
                      {isRemoved ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        String(index + 1).padStart(2, "0")
                      )}
                    </div>

                    <span
                      className="
                        mt-3
                        text-[9px]
                        font-semibold
                        text-[#5E6A62]
                        dark:text-white/50
                        sm:text-[10px]
                      "
                    >
                      {stage}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            FUTURE TECHNOLOGY
        ===================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            border-t
            border-black/[0.08]
            pt-7
            dark:border-white/[0.08]
            sm:mt-12
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-start gap-3">
            <span className="mt-1 h-8 w-px bg-[#ADD132]" />

            <p
              className="
                max-w-3xl
                text-[11px]
                leading-5
                text-[#68736B]
                dark:text-white/40
                sm:text-[12px]
                sm:leading-6
              "
            >
              Content fingerprinting and forensic watermarking are planned as
              later additions.
            </p>
          </div>

          <Link
            to="/technology"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-2.5
              border-b
              border-[#ADD132]/50
              pb-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#152019]
              transition-all
              duration-300
              hover:border-[#ADD132]
              dark:text-white
              sm:text-[10px]
            "
          >
            Explore Technology

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#ADD132]
                text-[#152019]
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-0.5
              "
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>

      {/* =====================================================
          ANIMATION STYLES
      ===================================================== */}

      <style>{`
        .tech-signal-line {
          position: absolute;
          top: 0;
          left: -20%;
          width: 20%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #ADD132,
            transparent
          );
          animation: techSignal 3.5s linear infinite;
        }

        .animate-scanner {
          animation: scannerMove 5s linear infinite;
        }

        .animate-signal-ring {
          animation: signalRing 5s ease-in-out infinite;
        }

        .animate-signal-ring-reverse {
          animation: signalRingReverse 6s ease-in-out infinite;
        }

        .journey-progress {
          width: 83%;
          animation: journeyPulse 3s ease-in-out infinite;
        }

        @keyframes techSignal {
          0% {
            left: -20%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            left: 100%;
            opacity: 0;
          }
        }

        @keyframes scannerMove {
          0% {
            transform: translateX(0);
            opacity: 0;
          }

          10% {
            opacity: 0.4;
          }

          50% {
            opacity: 1;
          }

          90% {
            opacity: 0.4;
          }

          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }

        @keyframes signalRing {
          0%,
          100% {
            transform: scale(0.94);
            opacity: 0.35;
          }

          50% {
            transform: scale(1.04);
            opacity: 0.8;
          }
        }

        @keyframes signalRingReverse {
          0%,
          100% {
            transform: scale(1.04);
            opacity: 0.2;
          }

          50% {
            transform: scale(0.92);
            opacity: 0.65;
          }
        }

        @keyframes journeyPulse {
          0%,
          100% {
            opacity: 0.45;
          }

          50% {
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-signal-line,
          .animate-scanner,
          .animate-signal-ring,
          .animate-signal-ring-reverse,
          .journey-progress {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default HomeTech;