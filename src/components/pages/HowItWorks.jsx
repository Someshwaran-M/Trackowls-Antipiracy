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
  const [isDark, setIsDark] = useState(true);

  /* =========================================================
     THEME
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

  /* =========================================================
     AUTO SLIDE
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => {
        return (current + 1) % processSteps.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const nextStep = () => {
    setActiveStep((current) => (current + 1) % processSteps.length);
  };

  const previousStep = () => {
    setActiveStep((current) =>
      current === 0 ? processSteps.length - 1 : current - 1
    );
  };

  const currentStep = processSteps[activeStep];

  const getImage = (step) => {
    return isDark ? step.darkImage : step.lightImage;
  };

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <section
      id="how-it-works"
      className="
        relative
        w-full
        overflow-hidden
        bg-white dark:bg-[#071006]
        py-16
        text-[#152019] dark:text-white
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#ADD132]/[0.06]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[460px]
          w-[460px]
          rounded-full
          bg-[#ADD132]/[0.045]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#0A4264]/20
          blur-[120px]
        "
      />

      {/* =====================================================
          TOP LINE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#ADD132]/50
          to-transparent
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1450px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-14
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mx-auto max-w-[950px] text-center">
          {/* Small Label */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#ADD132] sm:w-12" />

            <span
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.28em]
                text-[#ADD132]
              "
            >
              How TrackOwls Works
            </span>

            <span className="h-px w-8 bg-[#ADD132] sm:w-12" />
          </div>

          {/* Heading */}

          <h2
            className="
              text-[32px]
              font-black
              leading-[1.05]
              tracking-[-0.045em]
              text-[#152019] dark:text-white
              sm:text-[40px]
              md:text-[48px]
              lg:text-[54px]
              xl:text-[58px]
            "
          >
            See it.
            <span className="text-[#ADD132]"> Understand it.</span>
            <br />
            Protect it.
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[820px]
              text-[12px]
              leading-6
              text-[#5f6b64] dark:text-white/60
              sm:text-[13px]
              sm:leading-7
              md:text-[14px]
            "
          >
            Discover threats, verify what matters, take action and keep
            watching — one continuous protection process built around your
            digital assets.
          </p>
        </div>

        {/* ===================================================
            PROCESS SHOWCASE
        =================================================== */}

        <div className="relative mt-12 sm:mt-14 lg:mt-16">
          {/* TOP INFORMATION */}

          <div
            className="
              mb-5
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* Current stage */}

            <div className="flex items-center gap-3">
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ADD132]/50
                  bg-[#ADD132]/10
                  text-[9px]
                  font-black
                  text-[#ADD132]
                "
              >
                {currentStep.number}
              </span>

              <div>
                <p
                  className="
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-[#ADD132]
                  "
                >
                  {currentStep.status}
                </p>

                <p
                  className="
                    mt-0.5
                    text-[11px]
                    font-semibold
                    text-[#68756d] dark:text-white/40
                  "
                >
                  {currentStep.signal}
                </p>
              </div>
            </div>

            {/* Arrows */}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousStep}
                aria-label="Previous stage"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10 dark:border-white/15
                  bg-black/[0.03] dark:bg-white/[0.04]
                  text-[#5f6b64] dark:text-white/60
                  transition-all
                  duration-300
                  hover:border-[#ADD132]
                  hover:bg-[#ADD132]
                  hover:text-[#071006]
                "
              >
                <span className="text-[20px] leading-none">←</span>
              </button>

              <button
                type="button"
                onClick={nextStep}
                aria-label="Next stage"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10 dark:border-white/15
                  bg-black/[0.03] dark:bg-white/[0.04]
                  text-[#5f6b64] dark:text-white/60
                  transition-all
                  duration-300
                  hover:border-[#ADD132]
                  hover:bg-[#ADD132]
                  hover:text-[#071006]
                "
              >
                <span className="text-[20px] leading-none">→</span>
              </button>
            </div>
          </div>

          {/* =================================================
              IMAGE STRIP
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {processSteps.map((step, index) => {
              const active = activeStep === index;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className="
                    group
                    relative
                    overflow-hidden
                    text-left
                    outline-none
                  "
                >
                  {/* Image */}

                  <div
                    className={`
                      relative
                      aspect-[16/9]
                      overflow-hidden
                      border
                      transition-all
                      duration-500
                      ${
                        active
                          ? "border-[#ADD132]/70"
                          : "border-black/[0.10] dark:border-white/[0.10]"
                      }
                    `}
                  >
                    <img
                      src={getImage(step)}
                      alt={step.imageAlt}
                      className={`
                        h-full
                        w-full
                        object-cover
                        object-center
                        transition-all
                        duration-700
                        ${
                          active
                            ? "scale-[1.04] opacity-100"
                            : "scale-100 opacity-65 group-hover:scale-[1.03] group-hover:opacity-90"
                        }
                      `}
                    />

                    {/* Dark Overlay */}

                    <div
                      className={`
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#020B14]
                        via-[#020B14]/15
                        to-transparent
                        transition-opacity
                        duration-500
                        ${
                          active
                            ? "opacity-80"
                            : "opacity-70 group-hover:opacity-75"
                        }
                      `}
                    />

                    {/* Lime Glow */}

                    <div
                      className={`
                        pointer-events-none
                        absolute
                        -right-10
                        -top-10
                        h-24
                        w-24
                        rounded-full
                        bg-[#ADD132]/20
                        blur-[40px]
                        transition-opacity
                        duration-500
                        ${
                          active
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-70"
                        }
                      `}
                    />

                    {/* Number */}

                    <span
                      className={`
                        absolute
                        left-4
                        top-4
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-[9px]
                        font-black
                        transition-all
                        duration-500
                        ${
                          active
                            ? "border-[#ADD132] bg-[#ADD132] text-[#071006]"
                            : "border-black/10 dark:border-white/20 bg-black/5 dark:bg-black/20 text-[#4f5d54] dark:text-white/65"
                        }
                      `}
                    >
                      {step.number}
                    </span>

                    {/* Active Indicator */}

                    {active && (
                      <span
                        className="
                          absolute
                          right-4
                          top-4
                          h-2
                          w-2
                          rounded-full
                          bg-[#ADD132]
                          shadow-[0_0_18px_rgba(173,209,50,0.9)]
                        "
                      />
                    )}

                    {/* Bottom Text */}

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <p
                        className="
                          text-[8px]
                          font-black
                          uppercase
                          tracking-[0.22em]
                          text-[#ADD132]
                        "
                      >
                        {step.title}
                      </p>

                      <h3
                        className="
                          mt-1
                          text-[16px]
                          font-black
                          leading-tight
                          tracking-[-0.025em]
                          text-[#152019] dark:text-white
                          sm:text-[18px]
                        "
                      >
                        {step.heading}
                      </h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* =================================================
              ACTIVE CONTENT
          ================================================= */}

          <div
            className="
              mt-5
              border-y
              border-black/[0.08] dark:border-white/[0.08]
              py-5
              sm:py-6
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <div className="max-w-[760px]">
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 bg-[#ADD132]" />

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
                </div>

                <h3
                  className="
                    mt-2
                    text-[20px]
                    font-black
                    leading-tight
                    tracking-[-0.03em]
                    text-[#152019] dark:text-white
                    sm:text-[24px]
                  "
                >
                  {currentStep.heading}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[720px]
                    text-[11px]
                    leading-5
                    text-[#66736b] dark:text-white/50
                    sm:text-[12px]
                    sm:leading-6
                  "
                >
                  {currentStep.body}
                </p>
              </div>

              {/* Progress */}

              <div className="shrink-0">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#748078] dark:text-white/35
                    "
                  >
                    Protection process
                  </span>

                  <span
                    className="
                      text-[9px]
                      font-black
                      tracking-[0.12em]
                      text-[#ADD132]
                    "
                  >
                    {currentStep.number} / 04
                  </span>
                </div>

                <div className="flex gap-1.5">
                  {processSteps.map((step, index) => (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      aria-label={`Go to ${step.title}`}
                      className={`
                        h-1
                        w-10
                        rounded-full
                        transition-all
                        duration-500
                        sm:w-14
                        ${
                          index === activeStep
                            ? "bg-[#ADD132]"
                            : "bg-black/10 dark:bg-white/15 hover:bg-black/20 dark:hover:bg-white/30"
                        }
                      `}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            STAGE NAVIGATION
        =================================================== */}

        <div className="mt-8 flex justify-center">
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-4
              gap-y-2
              sm:gap-x-6
            "
          >
            {processSteps.map((step, index) => (
              <React.Fragment key={step.number}>
                <button
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.2em]
                    transition-colors
                    duration-300
                    ${
                      activeStep === index
                        ? "text-[#ADD132]"
                        : "text-[#7c8880] dark:text-white/30 hover:text-[#4f5d54] dark:hover:text-white/65"
                    }
                  `}
                >
                  {step.title}
                </button>

                {index !== processSteps.length - 1 && (
                  <span className="h-px w-4 bg-black/10 dark:bg-white/10 sm:w-6" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => {
              const element = document.getElementById("services");

              if (element) {
                const position =
                  element.getBoundingClientRect().top +
                  window.scrollY -
                  90;

                window.scrollTo({
                  top: Math.max(0, position),
                  behavior: "smooth",
                });
              }
            }}
            className="
              group
              inline-flex
              h-[46px]
              items-center
              gap-3
              rounded-full
              bg-[#ADD132]
              pl-5
              pr-1.5
              text-[12px]
              font-black
              text-[#071006]
              shadow-[0_10px_30px_rgba(173,209,50,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#C9EF48]
              hover:shadow-[0_14px_38px_rgba(173,209,50,0.30)]
            "
          >
            <span>Explore our protection services</span>

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[#071006]
                text-white
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
            >
              →
            </span>
          </button>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LINE
      ===================================================== */}

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
          via-[#ADD132]/40
          to-transparent
        "
      />

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}