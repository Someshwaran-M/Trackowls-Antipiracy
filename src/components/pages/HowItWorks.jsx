import React, { useEffect, useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "SCAN",
    heading: "Find the signals.",
    body: "We monitor websites, social platforms, Telegram, marketplaces, search results and domains to discover activity around your valuable assets.",
    lightImage: "/how-scan-light.jpeg",
    darkImage: "/how-scan-dark.jpeg",
    imageAlt: "TrackOwls digital scanning and monitoring",
    status: "SOURCE SCANNING",
    signal: "DISCOVERING",
  },
  {
    number: "02",
    title: "DETECT",
    heading: "Verify what matters.",
    body: "Potential matches are reviewed and verified before evidence is captured, helping separate meaningful threats from irrelevant results.",
    lightImage: "/how-detect-light.jpeg",
    darkImage: "/how-detect-dark.jpeg",
    imageAlt: "TrackOwls threat detection and verification",
    status: "THREAT DETECTION",
    signal: "VERIFYING",
  },
  {
    number: "03",
    title: "REMOVE",
    heading: "Turn intelligence into action.",
    body: "We coordinate response workflows with platforms, hosts, registrars and search engines to address identified infringements.",
    lightImage: "/how-remove-light.jpeg",
    darkImage: "/how-remove-dark.jpeg",
    imageAlt: "TrackOwls takedown and removal workflow",
    status: "RESPONSE WORKFLOW",
    signal: "RESPONDING",
  },
  {
    number: "04",
    title: "PROTECT",
    heading: "Keep watching.",
    body: "We monitor repeat offenders, track emerging activity and provide ongoing visibility so protection continues beyond a single incident.",
    lightImage: "/how-protect-light.jpeg",
    darkImage: "/how-protect-dark.jpeg",
    imageAlt: "TrackOwls continuous digital protection",
    status: "CONTINUOUS PROTECTION",
    signal: "PROTECTING",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  /* =====================================================
     THEME
  ===================================================== */

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

  /* =====================================================
     CURRENT STEP
  ===================================================== */

  const previewIndex =
    hoveredStep !== null ? hoveredStep : activeStep;

  const currentStep = processSteps[previewIndex];

  /* =====================================================
     AUTOMATIC ANIMATION
  ===================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => {
        return (current + 1) % processSteps.length;
      });

      setHoveredStep(null);
      setAnimationKey((key) => key + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* =====================================================
     SELECT STEP
  ===================================================== */

  const selectStep = (index) => {
    setActiveStep(index);
    setHoveredStep(null);
    setAnimationKey((key) => key + 1);
  };

  return (
    <section
      className="
        relative
        mt-8
        w-full
        overflow-hidden
        py-12
        
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#ADD132]/[0.04]
          blur-[110px]
          dark:bg-[#ADD132]/[0.06]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#ADD132]/[0.025]
          blur-[110px]
          dark:bg-[#ADD132]/[0.035]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1420px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="
                  h-px
                  w-8
                  bg-[#ADD132]
                  sm:w-10
                "
              />

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                "
              >
                How TrackOwls works
              </span>
            </div>

            <h3
                className="
                  max-w-3xl
                  text-[34px]
                  font-black
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-[#152019]
                  dark:text-white
                  sm:text-2xl
                  md:text-4xl
                  lg:text-5xl
                "
              >
                See it.
                <span className="text-[#6D900B] dark:text-[#ADD132]">
                  {" "}
                  Understand it.
                </span>
                <br />
                Protect it.
              </h3>
          </div>

          <p
            className="
              max-w-[440px]
              text-[12px]
              leading-6
              text-[#69746C]
              dark:text-white/45
              sm:text-[13px]
            "
          >
            Discover threats, verify what matters, take action and keep
            watching — one continuous protection process.
          </p>
        </div>

        {/* ===================================================
            FIXED PROCESS AREA
        =================================================== */}

        <div
          className="
            mt-9
            overflow-hidden
            border-y
            border-black/[0.06]
            dark:border-white/[0.07]
            lg:mt-11
          "
        >
          <div
            className="
              grid
              w-full
              lg:h-[540px]
              lg:grid-cols-[42%_58%]
            "
          >
            {/* =================================================
                LEFT SIDE — FIXED 540px
            ================================================= */}

            <div
              className="
                flex
                h-full
                min-w-0
                flex-col
              "
            >
              {processSteps.map((step, index) => {
                const isActive = activeStep === index;
                const isPreview = previewIndex === index;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => selectStep(index)}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    onFocus={() => setHoveredStep(index)}
                    onBlur={() => setHoveredStep(null)}
                    className={`
                      group
                      relative
                      flex
                      h-1/4
                      min-h-0
                      w-full
                      flex-1
                      items-center
                      gap-4
                      px-1
                      text-left
                      outline-none
                      transition-all
                      duration-300
                      sm:gap-5

                      ${
                        index !== processSteps.length - 1
                          ? "border-b border-black/[0.05] dark:border-white/[0.06]"
                          : ""
                      }
                    `}
                  >
                    {/* Active line */}

                    <span
                      className={`
                        absolute
                        left-0
                        top-1/2
                        h-10
                        w-[2px]
                        -translate-y-1/2
                        bg-[#ADD132]
                        transition-all
                        duration-500

                        ${
                          isPreview
                            ? "scale-y-100 opacity-100"
                            : "scale-y-0 opacity-0"
                        }
                      `}
                    />

                    {/* Number */}

                    <span
                      className={`
                        relative
                        ml-1
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-[9px]
                        font-black
                        transition-all
                        duration-500

                        ${
                          isPreview
                            ? "border-[#ADD132] bg-[#ADD132]/10 text-[#6D900B] dark:text-[#ADD132]"
                            : "border-black/[0.09] text-[#8B958D] dark:border-white/[0.11] dark:text-white/30"
                        }
                      `}
                    >
                      {step.number}

                      {isActive && (
                        <span
                          className="
                            absolute
                            inset-[-4px]
                            rounded-full
                            border
                            border-[#ADD132]/20
                            animate-ping
                          "
                        />
                      )}
                    </span>

                    {/* Content */}

                    <span className="min-w-0 flex-1">
                      <span
                        className={`
                          block
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.22em]
                          transition-colors
                          duration-300

                          ${
                            isPreview
                              ? "text-[#6D900B] dark:text-[#ADD132]"
                              : "text-[#7E8880] dark:text-white/35"
                          }
                        `}
                      >
                        {step.title}
                      </span>

                      <span
                        className={`
                          mt-1
                          block
                          text-[16px]
                          font-black
                          leading-tight
                          tracking-[-0.025em]
                          transition-all
                          duration-300
                          sm:text-[18px]

                          ${
                            isPreview
                              ? "text-[#152019] dark:text-white"
                              : "text-[#4F5A53] dark:text-white/50"
                          }
                        `}
                      >
                        {step.heading}
                      </span>
                    </span>

                    {/* Arrow */}

                    <span
                      className={`
                        mr-3
                        text-[17px]
                        transition-all
                        duration-300

                        ${
                          isPreview
                            ? "translate-x-0 text-[#ADD132] opacity-100"
                            : "-translate-x-2 opacity-0"
                        }
                      `}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* =================================================
                RIGHT SIDE — FIXED 540px
            ================================================= */}

            <div
              className="
                relative
                h-full
                min-w-0
                overflow-hidden
                bg-[#F4F7F1]
                dark:bg-[#080C09]
                lg:border-l
                lg:border-black/[0.05]
                dark:lg:border-white/[0.06]
              "
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                key={`${previewIndex}-${animationKey}`}
                className="
                  absolute
                  inset-0
                  animate-[howVisualIn_800ms_ease-out]
                "
              >
                <img
                  src={
                    isDark
                      ? currentStep.darkImage
                      : currentStep.lightImage
                  }
                  alt={currentStep.imageAlt}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    animate-[howVisualZoom_5s_ease-out_forwards]
                  "
                />
              </div>

              {/* =================================================
                  BOTTOM OVERLAY
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  z-10
                  h-[48%]
                  bg-gradient-to-t
                  from-black/85
                  via-black/35
                  to-transparent
                "
              />

              {/* =================================================
                  LIME GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  z-20
                  h-56
                  w-56
                  rounded-full
                  bg-[#ADD132]/20
                  blur-[90px]
                  animate-[howGlow_4s_ease-in-out_infinite]
                "
              />

              {/* =================================================
                  LIGHT SWEEP
              ================================================= */}

              <div
                key={`light-${previewIndex}-${animationKey}`}
                className="
                  pointer-events-none
                  absolute
                  -left-[25%]
                  top-[-20%]
                  z-20
                  h-[140%]
                  w-[16%]
                  rotate-[15deg]
                  bg-gradient-to-r
                  from-transparent
                  via-[#ADD132]/20
                  to-transparent
                  blur-[20px]
                  animate-[howSweep_4s_ease-in-out_infinite]
                "
              />

              {/* =================================================
                  SIGNAL
              ================================================= */}

              <span
                className="
                  pointer-events-none
                  absolute
                  left-[20%]
                  top-[27%]
                  z-30
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[#ADD132]
                  shadow-[0_0_25px_rgba(173,209,50,0.9)]
                  animate-pulse
                "
              />

              <span
                className="
                  pointer-events-none
                  absolute
                  left-[20%]
                  top-[27%]
                  z-20
                  h-10
                  w-10
                  -translate-x-[15px]
                  -translate-y-[15px]
                  rounded-full
                  border
                  border-[#ADD132]/40
                  animate-[howSignal_2s_ease-out_infinite]
                "
              />

              {/* =================================================
                  LIVE STATUS
              ================================================= */}

              <div
                className="
                  absolute
                  right-5
                  top-5
                  z-40
                  flex
                  items-center
                  gap-2
                "
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute
                      inset-0
                      animate-ping
                      rounded-full
                      bg-[#ADD132]
                    "
                  />

                  <span
                    className="
                      relative
                      h-2
                      w-2
                      rounded-full
                      bg-[#ADD132]
                    "
                  />
                </span>

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white/70
                  "
                >
                  Live intelligence
                </span>
              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <div
                key={`description-${previewIndex}-${animationKey}`}
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-40
                  p-5
                  animate-[howDescription_600ms_ease-out]
                  sm:p-6
                  lg:p-7
                "
              >
                <div className="max-w-[680px]">
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.2em]
                        text-[#ADD132]
                      "
                    >
                      {currentStep.status}
                    </span>

                    <span
                      className="
                        h-px
                        w-6
                        bg-[#ADD132]/50
                      "
                    />

                    <span
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-white/40
                      "
                    >
                      {currentStep.signal}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-2
                      text-[22px]
                      font-black
                      leading-tight
                      tracking-[-0.035em]
                      text-white
                      sm:text-[26px]
                    "
                  >
                    {currentStep.heading}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[650px]
                      text-[11px]
                      leading-5
                      text-white/65
                      sm:text-[12px]
                      sm:leading-6
                    "
                  >
                    {currentStep.body}
                  </p>
                </div>
              </div>

              {/* =================================================
                  CORNER MARKS
              ================================================= */}

              <span
                className="
                  pointer-events-none
                  absolute
                  left-5
                  top-5
                  z-30
                  h-6
                  w-6
                  border-l
                  border-t
                  border-[#ADD132]/40
                "
              />

              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-5
                  right-5
                  z-30
                  h-6
                  w-6
                  border-b
                  border-r
                  border-[#ADD132]/40
                "
              />

              <span
                className="
                  absolute
                  bottom-6
                  right-7
                  z-40
                  hidden
                  text-[8px]
                  font-black
                  tracking-[0.18em]
                  text-white/35
                  sm:block
                "
              >
                {currentStep.number} / 04
              </span>
            </div>
          </div>
        </div>

        {/* ===================================================
            MOBILE HINT
        =================================================== */}

        <div
          className="
            mt-4
            flex
            items-center
            gap-2
            lg:hidden
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#ADD132]
            "
          />

          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#8A938C]
              dark:text-white/30
            "
          >
            Tap a stage to explore
          </span>
        </div>

        {/* ===================================================
            PROCESS LABELS
        =================================================== */}

        <div
          className="
            mt-7
            flex
            flex-wrap
            items-center
            gap-x-3
            gap-y-2
          "
        >
          {processSteps.map((step, index) => (
            <React.Fragment key={step.number}>
              <button
                type="button"
                onClick={() => selectStep(index)}
                className={`
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  transition-colors
                  duration-300

                  ${
                    activeStep === index
                      ? "text-[#6D900B] dark:text-[#ADD132]"
                      : "text-[#909991] dark:text-white/25"
                  }
                `}
              >
                {step.title}
              </button>

              {index !== processSteps.length - 1 && (
                <span
                  className="
                    h-px
                    w-5
                    bg-black/[0.10]
                    dark:bg-white/[0.10]
                  "
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes howVisualIn {
          0% {
            opacity: 0;
            transform: scale(1.035);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes howVisualZoom {
          0% {
            transform: scale(1);
          }

          100% {
            transform: scale(1.035);
          }
        }

        @keyframes howDescription {
          0% {
            opacity: 0;
            transform: translateY(14px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes howGlow {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.35;
          }

          50% {
            transform: scale(1.12);
            opacity: 0.65;
          }
        }

        @keyframes howSweep {
          0% {
            left: -30%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          70% {
            opacity: 0.55;
          }

          100% {
            left: 125%;
            opacity: 0;
          }
        }

        @keyframes howSignal {
          0% {
            transform: translate(-15px, -15px) scale(0.4);
            opacity: 0.8;
          }

          100% {
            transform: translate(-15px, -15px) scale(2);
            opacity: 0;
          }
        }

        @media (max-width: 1023px) {
          .how-it-works-fixed {
            height: auto !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}