import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ScanSearch,
  SearchCheck,
  Trash2,
  ShieldCheck,
  Activity,
  Radio,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "SCAN",
    heading: "Find the signals.",
    body:
      "We monitor websites, social platforms, Telegram, marketplaces, search results and domains to discover activity around your valuable assets.",
    lightImage: "/how-scan-light.jpeg",
    darkImage: "/how-scan-dark.jpeg",
    imageAlt: "TrackOwls digital scanning and monitoring",
    status: "SOURCE SCANNING",
    signal: "DISCOVERING",
    icon: ScanSearch,
  },
  {
    number: "02",
    title: "DETECT",
    heading: "Verify what matters.",
    body:
      "Potential matches are reviewed and verified before evidence is captured, helping separate meaningful threats from irrelevant results.",
    lightImage: "/how-detect-light.jpeg",
    darkImage: "/how-detect-dark.jpeg",
    imageAlt: "TrackOwls threat detection and verification",
    status: "THREAT DETECTION",
    signal: "VERIFYING",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "REMOVE",
    heading: "Turn intelligence into action.",
    body:
      "We coordinate response workflows with platforms, hosts, registrars and search engines to address identified infringements.",
    lightImage: "/how-remove-light.jpeg",
    darkImage: "/how-remove-dark.jpeg",
    imageAlt: "TrackOwls takedown and removal workflow",
    status: "RESPONSE WORKFLOW",
    signal: "RESPONDING",
    icon: Trash2,
  },
  {
    number: "04",
    title: "PROTECT",
    heading: "Keep watching.",
    body:
      "We monitor repeat offenders, track emerging activity and provide ongoing visibility so protection continues beyond a single incident.",
    lightImage: "/how-protect-light.jpeg",
    darkImage: "/how-protect-dark.jpeg",
    imageAlt: "TrackOwls continuous digital protection",
    status: "CONTINUOUS PROTECTION",
    signal: "PROTECTING",
    icon: ShieldCheck,
  },
];

function TypeText({ text, speed = 45, delay = 0, keyValue }) {
  return (
    <span
      key={keyValue}
      className="how-type-text"
      aria-label={text}
    >
      {Array.from(text).map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="how-type-letter"
          style={{
            animationDelay: `${delay + index * speed}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const currentStep = processSteps[activeStep];
  const CurrentIcon = currentStep.icon;

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

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % processSteps.length);
    }, 5200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextStep = () => {
    setActiveStep((current) => (current + 1) % processSteps.length);
  };

  const previousStep = () => {
    setActiveStep((current) =>
      current === 0 ? processSteps.length - 1 : current - 1
    );
  };

  const selectStep = (index) => {
    setActiveStep(index);
  };

  const getImage = (step) => {
    return isDark ? step.darkImage : step.lightImage;
  };

  return (
    <section
      id="how-it-works"
      className="how-command-section relative w-full overflow-hidden bg-[#F5F8F2] text-[#152019] dark:bg-[#050805] dark:text-white"
    >
      <style>{`
        .how-command-section {
          --how-green: #ADD132;
          --how-green-dark: #6F9008;
          --how-light-line: rgba(29, 52, 34, 0.12);
          --how-dark-line: rgba(255, 255, 255, 0.08);
        }

        .how-command-section * {
          -webkit-tap-highlight-color: transparent;
        }

        /* =========================
           HERO VIDEO
        ========================= */

        .how-video-hero {
          min-height: 680px;
        }

        .how-video {
          animation: howVideoZoom 14s ease-in-out infinite alternate;
        }

        @keyframes howVideoZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.06);
          }
        }

        .how-video-scan {
          animation: howVideoScan 5s ease-in-out infinite;
        }

        @keyframes howVideoScan {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }

          15% {
            opacity: .8;
          }

          50% {
            opacity: .35;
          }

          85% {
            opacity: .8;
          }

          100% {
            transform: translateY(700px);
            opacity: 0;
          }
        }

        .how-video-line {
          animation: howVideoLine 4s linear infinite;
        }

        @keyframes howVideoLine {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(450%);
          }
        }

        /* =========================
           LETTER ANIMATION
        ========================= */

        .how-type-text {
          display: inline;
        }

        .how-type-letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(12px);
          animation-name: howLetterType;
          animation-duration: 420ms;
          animation-timing-function: cubic-bezier(.16, 1, .3, 1);
          animation-fill-mode: forwards;
          will-change: opacity, transform;
        }

        @keyframes howLetterType {
          0% {
            opacity: 0;
            transform: translateY(12px);
            filter: blur(5px);
          }

          55% {
            opacity: .75;
            filter: blur(1px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* =========================
           PROCESS
        ========================= */

        .how-stage {
          transition:
            background-color .35s ease,
            transform .35s ease,
            border-color .35s ease;
        }

        .how-stage:hover {
          transform: translateX(5px);
        }

        .how-stage-active {
          transform: translateX(8px);
        }

        .how-stage-active:hover {
          transform: translateX(8px);
        }

        .how-stage-dot {
          animation: howDot 2s ease-in-out infinite;
        }

        @keyframes howDot {
          0%,
          100% {
            box-shadow:
              0 0 0 0 rgba(173,209,50,.15),
              0 0 0 1px rgba(173,209,50,.35);
          }

          50% {
            box-shadow:
              0 0 0 9px rgba(173,209,50,0),
              0 0 0 1px rgba(173,209,50,.85);
          }
        }

        .how-image {
          animation: howImage 9s ease-in-out infinite alternate;
        }

        @keyframes howImage {
          from {
            transform: scale(1.01);
          }

          to {
            transform: scale(1.075);
          }
        }

        .how-image-scan {
          animation: howImageScan 4.5s ease-in-out infinite;
        }

        @keyframes howImageScan {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }

          15% {
            opacity: .75;
          }

          50% {
            opacity: .35;
          }

          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        .how-marquee {
          animation: howMarquee 24s linear infinite;
        }

        @keyframes howMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .how-signal {
          animation: howSignal 1.8s ease-in-out infinite;
        }

        @keyframes howSignal {
          0%,
          100% {
            opacity: .4;
            transform: scale(.85);
          }

          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .how-progress {
          transition: width 700ms cubic-bezier(.16,1,.3,1);
        }

        .how-enter {
          animation: howEnter .7s cubic-bezier(.16,1,.3,1);
        }

        @keyframes howEnter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =========================
           MOBILE
        ========================= */

        .how-mobile-stages {
          scrollbar-width: none;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }

        .how-mobile-stages::-webkit-scrollbar {
          display: none;
        }

        .how-mobile-stage {
          scroll-snap-align: start;
          flex: 0 0 82%;
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .how-video,
          .how-video-scan,
          .how-video-line,
          .how-type-letter,
          .how-stage-dot,
          .how-image,
          .how-image-scan,
          .how-marquee,
          .how-signal,
          .how-enter {
            animation: none !important;
          }

          .how-type-letter {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }

        @media (max-width: 767px) {
          .how-video-hero {
            min-height: 620px;
          }

          .how-stage:hover,
          .how-stage-active,
          .how-stage-active:hover {
            transform: none;
          }
        }
      `}</style>

      {/* =====================================================
          VIDEO HERO
      ===================================================== */}

      <section className="how-video-hero relative overflow-hidden bg-[#020502]">
        <video
          src="/how-it-works-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="how-video absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        {/* LIME ATMOSPHERE */}

        <div className="pointer-events-none absolute -left-[15%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#ADD132]/10 blur-[150px]" />

        <div className="pointer-events-none absolute -right-[15%] bottom-[5%] h-[450px] w-[450px] rounded-full bg-[#ADD132]/10 blur-[150px]" />

        {/* SCAN LINE */}

        <div className="how-video-scan pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ADD132] to-transparent shadow-[0_0_20px_rgba(173,209,50,.8)]" />

        {/* TOP MOVING LINE */}

        <div className="absolute left-0 right-0 top-0 h-px overflow-hidden bg-white/10">
          <div className="how-video-line h-full w-[25%] bg-gradient-to-r from-transparent via-[#ADD132] to-transparent" />
        </div>

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1480px] items-center px-5 py-20 sm:px-8 md:px-10 lg:px-14 xl:px-16">
          <div className="w-full">

            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-14 bg-[#ADD132]" />

              <span className="text-[9px] font-black uppercase tracking-[0.32em] text-[#ADD132]">
                How TrackOwls Works
              </span>
            </div>

            <div className="max-w-[950px]">
              <h1 className="text-[52px] font-black leading-[.88] tracking-[-.075em] text-white sm:text-[70px] md:text-[88px] lg:text-[108px] xl:text-[120px]">
                See it.
                <br />

                <span className="text-[#ADD132]">
                  Understand it.
                </span>

                <br />

                Protect it.
              </h1>
            </div>

            <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-[600px] text-[13px] leading-7 text-white/55 sm:text-[14px] sm:leading-8">
                Discover threats, verify what matters, take action and keep
                watching — one continuous protection process built around your
                digital assets.
              </p>

              <div className="flex items-center gap-5 border-l border-white/15 pl-5 sm:pl-7">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="how-signal h-2 w-2 rounded-full bg-[#ADD132]" />

                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#ADD132]">
                      Live protection process
                    </span>
                  </div>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Scan / Detect / Remove / Protect
                  </p>
                </div>
              </div>
            </div>

            {/* HERO PROCESS LINE */}

            <div className="mt-14 grid grid-cols-2 border-y border-white/10 sm:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => selectStep(index)}
                    className={`group flex items-center gap-3 px-4 py-5 text-left transition-all sm:px-5 ${
                      index !== 0
                        ? "border-l border-white/10"
                        : ""
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all ${
                        index === activeStep
                          ? "border-[#ADD132] bg-[#ADD132] text-[#101700]"
                          : "border-white/15 text-white/40 group-hover:border-[#ADD132] group-hover:text-[#ADD132]"
                      }`}
                    >
                      <Icon size={14} />
                    </span>

                    <span>
                      <span
                        className={`block text-[8px] font-black uppercase tracking-[0.18em] ${
                          index === activeStep
                            ? "text-[#ADD132]"
                            : "text-white/35"
                        }`}
                      >
                        {step.title}
                      </span>

                      <span className="mt-1 block text-[7px] text-white/20">
                        {step.status}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* HERO BOTTOM */}

        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10">
          <div className="mx-auto flex max-w-[1480px] items-center justify-between px-5 py-4 sm:px-8 md:px-10 lg:px-14 xl:px-16">
            <span className="text-[7px] font-black uppercase tracking-[0.24em] text-white/30">
              TrackOwls Digital Protection Process
            </span>

            <span className="hidden text-[7px] font-black uppercase tracking-[0.2em] text-[#ADD132] sm:block">
              01 — 04
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS CONTENT
      ===================================================== */}

      <div className="relative">

        {/* BACKGROUND GRID */}

        <div className="pointer-events-none absolute inset-0 opacity-[.35] dark:opacity-[.12]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(35,65,42,.045) 1px, transparent 1px),
                linear-gradient(90deg, rgba(35,65,42,.045) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1480px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-16">

          {/* INTRO */}

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-12 bg-[#ADD132]" />

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6D900B] dark:text-[#ADD132]">
                  Protection sequence
                </span>
              </div>

              <h2 className="text-[42px] font-black leading-[.92] tracking-[-.065em] text-[#152019] dark:text-white sm:text-[56px] md:text-[68px]">
                From signal
                <br />

                <span className="text-[#789900] dark:text-[#ADD132]">
                  to protection.
                </span>
              </h2>
            </div>

            <div className="max-w-[400px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="how-signal h-2 w-2 rounded-full bg-[#ADD132]" />

                <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#718078] dark:text-white/35">
                  Continuous workflow
                </span>
              </div>

              <p className="text-[13px] leading-7 text-[#68746C] dark:text-white/45">
                Each stage connects to the next, creating a continuous
                protection process rather than a single response.
              </p>
            </div>
          </div>

          {/* =================================================
              PROCESS NAVIGATION
          ================================================= */}

          <div
            className="mt-14"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >

            {/* DESKTOP */}

            <div className="hidden md:flex overflow-hidden border-y border-[#CCD6C9] dark:border-white/[0.08]">

              {/* LEFT */}

              <div className="relative w-[34%] shrink-0 border-r border-[#CCD6C9] dark:border-white/[0.08]">
                <div className="absolute bottom-0 left-[32px] top-0 w-px bg-[#D3DDD0] dark:bg-white/[0.07]" />

                {processSteps.map((step, index) => {
                  const active = index === activeStep;
                  const completed = index <= activeStep;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => selectStep(index)}
                      className={`how-stage relative flex w-full items-center gap-5 border-b border-[#D4DDD1] px-7 py-8 text-left last:border-b-0 dark:border-white/[0.07] ${
                        active
                          ? "how-stage-active bg-[#EAF2E4] dark:bg-[#ADD132]/[0.055]"
                          : "bg-transparent hover:bg-[#EEF3EA] dark:hover:bg-white/[0.02]"
                      }`}
                    >
                      <span
                        className={`absolute bottom-0 left-0 top-0 w-[3px] bg-[#ADD132] transition-transform duration-500 ${
                          active ? "scale-y-100" : "scale-y-0"
                        }`}
                      />

                      <span
                        className={`relative z-10 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border text-[9px] font-black ${
                          active
                            ? "border-[#ADD132] bg-[#ADD132] text-[#142019]"
                            : completed
                            ? "border-[#ADD132]/30 bg-[#ADD132]/[0.08] text-[#6D900B] dark:text-[#ADD132]"
                            : "border-[#D0D9CD] bg-white text-[#8D9890] dark:border-white/[0.10] dark:bg-[#0A0F0B] dark:text-white/25"
                        }`}
                      >
                        {step.number}
                      </span>

                      <span className="min-w-0">
                        <span
                          className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] ${
                            active
                              ? "text-[#152019] dark:text-white"
                              : "text-[#7D8981] dark:text-white/35"
                          }`}
                        >
                          {step.title}

                          {active && (
                            <ArrowUpRight
                              size={12}
                              className="text-[#6D900B] dark:text-[#ADD132]"
                            />
                          )}
                        </span>

                        <span
                          className={`mt-2 block text-[7px] font-bold uppercase tracking-[0.15em] ${
                            active
                              ? "text-[#6D900B] dark:text-[#ADD132]"
                              : "text-[#9AA39D] dark:text-white/20"
                          }`}
                        >
                          {step.status}
                        </span>
                      </span>

                      {active && (
                        <span className="how-stage-dot absolute right-6 h-2 w-2 rounded-full bg-[#ADD132]" />
                      )}
                    </button>
                  );
                })}

                <div className="flex items-center justify-between border-t border-[#D4DDD1] px-7 py-5 dark:border-white/[0.07]">
                  <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#89948D] dark:text-white/25">
                    Protection sequence
                  </span>

                  <span className="text-[8px] font-black text-[#6D900B] dark:text-[#ADD132]">
                    {currentStep.number} / 04
                  </span>
                </div>
              </div>

              {/* RIGHT */}

              <div className="min-w-0 flex-1 bg-white dark:bg-[#080D09]">

                {/* DATA BAR */}

                <div className="relative h-9 overflow-hidden border-b border-[#D8E0D5] bg-[#EEF3EA] dark:border-white/[0.06] dark:bg-[#0A100B]">
                  <div className="how-marquee flex h-full w-max items-center gap-9 whitespace-nowrap">
                    {[
                      "TRACKOWLS / DIGITAL SIGNAL",
                      "SOURCE ANALYSIS",
                      "THREAT INTELLIGENCE",
                      "EVIDENCE",
                      "RESPONSE",
                      "CONTINUOUS MONITORING",
                      "TRACKOWLS / DIGITAL SIGNAL",
                      "SOURCE ANALYSIS",
                      "THREAT INTELLIGENCE",
                      "EVIDENCE",
                      "RESPONSE",
                      "CONTINUOUS MONITORING",
                    ].map((item, index) => (
                      <React.Fragment key={`${item}-${index}`}>
                        <span className="text-[7px] font-black uppercase tracking-[0.22em] text-[#87928A] dark:text-white/25">
                          {item}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#ADD132]" />
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* IMAGE */}

                <div className="relative min-h-[390px] overflow-hidden bg-[#071008] lg:min-h-[460px]">
                  <img
                    src={getImage(currentStep)}
                    alt={currentStep.imageAlt}
                    className="how-image absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#020802]/90 via-[#020802]/25 to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020802]/90 via-transparent to-transparent" />

                  <div className="how-image-scan absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#ADD132] to-transparent shadow-[0_0_15px_rgba(173,209,50,.8)]" />

                  {/* FRAME */}

                  <div className="absolute inset-6 border border-white/[0.12] sm:inset-8">
                    <span className="absolute left-0 top-0 h-8 w-8 border-l border-t border-[#ADD132]" />
                    <span className="absolute right-0 top-0 h-8 w-8 border-r border-t border-[#ADD132]" />
                    <span className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-[#ADD132]" />
                    <span className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-[#ADD132]" />
                  </div>

                  {/* STATUS */}

                  <div className="absolute left-9 top-9 flex items-center gap-3">
                    <span className="how-signal h-2 w-2 rounded-full bg-[#ADD132]" />

                    <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/65">
                      {currentStep.signal}
                    </span>
                  </div>

                  {/* NUMBER */}

                  <span className="absolute bottom-2 left-7 text-[150px] font-black leading-none tracking-[-.1em] text-white/[0.12]">
                    {currentStep.number}
                  </span>

                  {/* TITLE */}

                  <div className="absolute bottom-8 right-8 text-right">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ADD132]">
                      {currentStep.title}
                    </p>

                    <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.15em] text-white/35">
                      {currentStep.status}
                    </p>
                  </div>
                </div>

                {/* INFORMATION */}

                <div
                  key={currentStep.number}
                  className="how-enter"
                >
                  <div className="p-7 sm:p-9 lg:p-11">

                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ADD132]/10 text-[#6D900B] dark:text-[#ADD132]">
                          <CurrentIcon size={19} strokeWidth={1.6} />
                        </div>

                        <div>
                          <p className="text-[8px] font-black uppercase tracking-[0.22em] text-[#6D900B] dark:text-[#ADD132]">
                            {currentStep.status}
                          </p>

                          <p className="mt-1 text-[8px] font-semibold text-[#909A93] dark:text-white/25">
                            Stage {currentStep.number} of 04
                          </p>
                        </div>
                      </div>

                      <Activity
                        size={16}
                        className="text-[#89948D] dark:text-white/20"
                      />
                    </div>

                    <h3 className="mt-8 max-w-[680px] text-[34px] font-black leading-[.96] tracking-[-.055em] text-[#152019] dark:text-white sm:text-[46px]">
                      <TypeText
                        text={currentStep.heading}
                        speed={48}
                        delay={80}
                        keyValue={currentStep.number}
                      />
                    </h3>

                    <p className="mt-5 max-w-[680px] text-[13px] leading-7 text-[#66736A] dark:text-white/48 sm:text-[14px] sm:leading-8">
                      {currentStep.body}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#ADD132]/[0.06] text-[8px] font-black text-[#6D900B] dark:text-[#ADD132]">
                        {currentStep.number}
                      </span>

                      <span className="h-px w-10 bg-[#ADD132]" />

                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#87928A] dark:text-white/28">
                        {currentStep.signal}
                      </span>
                    </div>
                  </div>

                  {/* PROGRESS */}

                  <div className="border-t border-[#D8E0D5] dark:border-white/[0.07]">
                    <div className="flex flex-col gap-5 px-7 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-9">

                      <div className="flex items-center gap-3">
                        <Radio
                          size={14}
                          className="text-[#6D900B] dark:text-[#ADD132]"
                        />

                        <div>
                          <p className="text-[7px] font-black uppercase tracking-[0.18em] text-[#909A93] dark:text-white/25">
                            Protection process
                          </p>

                          <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#59655C] dark:text-white/45">
                            {currentStep.signal}
                          </p>
                        </div>
                      </div>

                      <div className="w-full max-w-[240px]">
                        <div className="mb-2 flex justify-between">
                          <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#9AA39D] dark:text-white/20">
                            Progress
                          </span>

                          <span className="text-[8px] font-black text-[#6D900B] dark:text-[#ADD132]">
                            {currentStep.number} / 04
                          </span>
                        </div>

                        <div className="flex gap-1">
                          {processSteps.map((step, index) => (
                            <button
                              key={step.number}
                              type="button"
                              onClick={() => selectStep(index)}
                              aria-label={`Go to ${step.title}`}
                              className="h-1 flex-1 overflow-hidden rounded-full bg-[#D9E1D6] dark:bg-white/[0.09]"
                            >
                              <span
                                className={`block h-full w-full transition-all duration-500 ${
                                  index <= activeStep
                                    ? "bg-[#ADD132]"
                                    : "bg-transparent"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                MOBILE
            ================================================= */}

            <div className="md:hidden">

              <div className="how-mobile-stages -mx-5 flex gap-3 overflow-x-auto px-5 pb-3">
                {processSteps.map((step, index) => {
                  const active = index === activeStep;
                  const Icon = step.icon;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => selectStep(index)}
                      className={`how-mobile-stage relative overflow-hidden border p-5 text-left ${
                        active
                          ? "border-[#ADD132] bg-[#EAF2E4] dark:bg-[#ADD132]/[0.055]"
                          : "border-[#D0D9CD] bg-white/50 dark:border-white/[0.08] dark:bg-white/[0.015]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                            active
                              ? "border-[#ADD132] bg-[#ADD132] text-[#142019]"
                              : "border-[#CBD5C9] text-[#89948C] dark:border-white/[0.10] dark:text-white/30"
                          }`}
                        >
                          <Icon size={14} />
                        </span>

                        {active && (
                          <span className="how-stage-dot h-2 w-2 rounded-full bg-[#ADD132]" />
                        )}
                      </div>

                      <p
                        className={`mt-7 text-[10px] font-black uppercase tracking-[0.2em] ${
                          active
                            ? "text-[#6D900B] dark:text-[#ADD132]"
                            : "text-[#7F8982] dark:text-white/35"
                        }`}
                      >
                        {step.title}
                      </p>

                      <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.15em] text-[#9AA39D] dark:text-white/20">
                        {step.status}
                      </p>

                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-[#ADD132] transition-all duration-500 ${
                          active ? "w-full" : "w-0"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* MOBILE ACTIVE */}

              <div
                key={`mobile-${currentStep.number}-${isDark}`}
                className="how-enter mt-5 overflow-hidden border border-[#CDD7CA] bg-white dark:border-white/[0.08] dark:bg-[#080D09]"
              >
                <div className="relative h-[270px] overflow-hidden bg-[#071008]">
                  <img
                    src={getImage(currentStep)}
                    alt={currentStep.imageAlt}
                    className="how-image absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020802]/90 via-transparent to-transparent" />

                  <div className="how-image-scan absolute left-0 right-0 top-1/2 h-px bg-[#ADD132]/70" />

                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="how-signal h-2 w-2 rounded-full bg-[#ADD132]" />

                    <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/60">
                      {currentStep.signal}
                    </span>
                  </div>

                  <span className="absolute bottom-2 left-5 text-[100px] font-black leading-none tracking-[-.1em] text-white/[0.12]">
                    {currentStep.number}
                  </span>

                  <span className="absolute bottom-5 right-5 text-[9px] font-black uppercase tracking-[0.25em] text-[#ADD132]">
                    {currentStep.title}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ADD132]/10 text-[#6D900B] dark:text-[#ADD132]">
                      <CurrentIcon size={17} />
                    </div>

                    <div>
                      <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#6D900B] dark:text-[#ADD132]">
                        {currentStep.status}
                      </p>

                      <p className="mt-1 text-[8px] font-semibold text-[#919B94] dark:text-white/25">
                        Stage {currentStep.number} of 04
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-7 text-[30px] font-black leading-[.98] tracking-[-.055em] text-[#152019] dark:text-white">
                    <TypeText
                      text={currentStep.heading}
                      speed={45}
                      delay={80}
                      keyValue={`mobile-${currentStep.number}`}
                    />
                  </h3>

                  <p className="mt-5 text-[13px] leading-7 text-[#66736A] dark:text-white/45">
                    {currentStep.body}
                  </p>

                  <div className="mt-7 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#ADD132]" />

                    <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#87928A] dark:text-white/25">
                      {currentStep.signal}
                    </span>
                  </div>
                </div>

                <div className="border-t border-[#D8E0D5] px-6 py-5 dark:border-white/[0.07]">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[7px] font-black uppercase tracking-[0.18em] text-[#929C95] dark:text-white/20">
                      Progress
                    </span>

                    <span className="text-[8px] font-black text-[#6D900B] dark:text-[#ADD132]">
                      {currentStep.number} / 04
                    </span>
                  </div>

                  <div className="flex gap-1.5">
                    {processSteps.map((step, index) => (
                      <button
                        key={step.number}
                        type="button"
                        onClick={() => selectStep(index)}
                        aria-label={`Go to ${step.title}`}
                        className="h-1 flex-1 overflow-hidden rounded-full bg-[#D9E1D6] dark:bg-white/[0.09]"
                      >
                        <span
                          className={`block h-full w-full transition-all duration-500 ${
                            index <= activeStep
                              ? "bg-[#ADD132]"
                              : "bg-transparent"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* MOBILE CONTROLS */}

              <div className="mt-5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={previousStep}
                  aria-label="Previous stage"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CBD6C8] bg-white text-[#68746C] transition-all hover:border-[#ADD132] hover:bg-[#ADD132] hover:text-[#142019] dark:border-white/[0.10] dark:bg-white/[0.025] dark:text-white/45"
                >
                  <ArrowLeft size={15} />
                </button>

                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#89948D] dark:text-white/25">
                  Scan / Detect / Remove / Protect
                </span>

                <button
                  type="button"
                  onClick={nextStep}
                  aria-label="Next stage"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CBD6C8] bg-white text-[#68746C] transition-all hover:border-[#ADD132] hover:bg-[#ADD132] hover:text-[#142019] dark:border-white/[0.10] dark:bg-white/[0.025] dark:text-white/45"
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM STATEMENT
          ================================================= */}

          <div className="mt-14 border-t border-[#D1DBCE] pt-6 dark:border-white/[0.07]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

                <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#7B877F] dark:text-white/30">
                  Scan / Detect / Remove / Protect
                </span>
              </div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A948D] dark:text-white/25">
                TrackOwls Digital Protection Process
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT */}

      <div className="relative h-px overflow-hidden bg-[#DCE4D8] dark:bg-white/[0.06]">
        <div className="how-video-line absolute left-0 top-0 h-full w-[30%] bg-gradient-to-r from-transparent via-[#ADD132] to-transparent" />
      </div>
    </section>
  );
}