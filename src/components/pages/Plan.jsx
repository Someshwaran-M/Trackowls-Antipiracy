import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleCheck,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const plans = [
  {
    number: "01",
    name: "STARTER",
    label: "FOUNDATION",
    audience: "Creators & small brands",
    title: "Create a reliable protection baseline.",
    description:
      "A focused protection setup for creators and smaller brands that need dependable monitoring, evidence and takedown support.",
    features: [
      "Monthly scans",
      "Takedown management",
      "Monthly report",
    ],
  },
  {
    number: "02",
    name: "PRO",
    label: "CONTINUOUS",
    audience: "Growing studios & brands",
    title: "Keep protection moving with your business.",
    description:
      "Expanded monitoring for growing catalogues, brands and digital businesses that need stronger visibility and response workflows.",
    features: [
      "Daily monitoring",
      "Search de-indexing",
      "Brand protection cases",
      "Case dashboard",
    ],
    featured: true,
  },
  {
    number: "03",
    name: "ENTERPRISE",
    label: "EXTENDED",
    audience: "Large catalogues & organisations",
    title: "Coordinate protection across a wider operation.",
    description:
      "A tailored protection model for larger organisations requiring broader coverage, escalation support and dedicated coordination.",
    features: [
      "Custom coverage",
      "Legal escalation",
      "Dedicated manager",
    ],
  },
];

function Plan() {
  const [activePlan, setActivePlan] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActivePlan((current) => (current + 1) % plans.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const selectedPlan = plans[activePlan];

  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-[#F8FAF6]
        font-['Roboto',sans-serif]
        text-[#172018]
        dark:bg-[#050805]
        dark:text-white
      "
    >
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden">
        {/* Ambient light */}

        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute
              -left-40
              -top-40
              h-[400px]
              w-[400px]
              animate-[pulseGlow_8s_ease-in-out_infinite]
              rounded-full
              bg-[#ADD132]/10
              blur-[130px]
              dark:bg-[#ADD132]/[0.04]
            "
          />

          <div
            className="
              absolute
              -right-40
              top-[25%]
              h-[350px]
              w-[350px]
              animate-[pulseGlowReverse_10s_ease-in-out_infinite]
              rounded-full
              bg-[#DCE9C5]/50
              blur-[130px]
              dark:bg-[#ADD132]/[0.035]
            "
          />
        </div>

        <div
          className="
            relative
            mx-auto
            max-w-[1480px]
            px-5
            pb-16
            pt-16
            sm:px-7
            sm:pb-20
            sm:pt-20
            md:px-10
            md:pb-24
            md:pt-24
            lg:px-14
            lg:pb-28
            lg:pt-28
            xl:px-16
          "
        >
          <div
            className="
              flex
              flex-col
              gap-10
              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-20
            "
          >
            <div className="max-w-[850px]">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#ADD132]" />

                <span
                  className="
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.35em]
                    text-[#6E870D]
                    dark:text-[#ADD132]
                    sm:text-[9px]
                  "
                >
                  Protection Journey
                </span>
              </div>

              <h1
                className="
                  max-w-[850px]
                  text-[34px]
                  font-black
                  leading-[0.96]
                  tracking-[-0.045em]
                  text-[#172018]
                  dark:text-white
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
              >
                Protection should evolve
                <span className="text-[#789900] dark:text-[#ADD132]">
                  {" "}
                  with your exposure.
                </span>
              </h1>
            </div>

            <div className="max-w-[410px]">
              <p
                className="
                  text-[13px]
                  leading-7
                  text-[#69756D]
                  dark:text-white/45
                  sm:text-[14px]
                "
              >
                Choose a protection model based on the scale of your content,
                brand and digital presence. Your coverage can evolve as your
                requirements change.
              </p>
            </div>
          </div>

          {/* Intro line */}

          <div
            className="
              mt-12
              flex
              flex-col
              gap-4
              border-t
              border-black/[0.08]
              pt-5
              dark:border-white/[0.09]
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-center gap-3">
              <ShieldCheck
                size={16}
                strokeWidth={1.5}
                className="text-[#789900] dark:text-[#ADD132]"
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#69756D]
                  dark:text-white/40
                "
              >
                Human-reviewed protection workflow
              </span>
            </div>

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#89938B]
                dark:text-white/25
              "
            >
              TrackOwls / 2026
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROTECTION STORYLINE
      ========================================================== */}

      <section
        className="
          relative
          border-y
          border-black/[0.08]
          bg-[#F0F4EC]
          dark:border-white/[0.08]
          dark:bg-[#080D09]
        "
      >
        <div
          className="
            mx-auto
            max-w-[1480px]
            px-5
            sm:px-7
            md:px-10
            lg:px-14
            xl:px-16
          "
        >
          <div
            className="
              flex
              flex-col
              lg:flex-row
            "
          >
            {/* =================================================
                LEFT STORYLINE
            ================================================== */}

            <div
              className="
                relative
                w-full
                border-b
                border-black/[0.08]
                py-12
                dark:border-white/[0.08]
                lg:w-[42%]
                lg:border-b-0
                lg:border-r
                lg:py-20
                lg:pr-16
              "
            >
              <div className="lg:sticky lg:top-32">
                <div className="flex items-center gap-3">
                  <span
                    className="
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.3em]
                      text-[#789900]
                      dark:text-[#ADD132]
                    "
                  >
                    The journey
                  </span>

                  <span className="h-px w-8 bg-[#ADD132]/50" />
                </div>

                <h2
                  className="
                    mt-5
                    max-w-[480px]
                    text-[28px]
                    font-black
                    leading-[1]
                    tracking-[-0.04em]
                    text-[#172018]
                    dark:text-white
                    sm:text-[36px]
                    md:text-[42px]
                  "
                >
                  Three ways to build your protection operation.
                </h2>

                <p
                  className="
                    mt-5
                    max-w-[440px]
                    text-[13px]
                    leading-7
                    text-[#69756D]
                    dark:text-white/40
                    sm:text-[14px]
                  "
                >
                  Each level is designed around a different operational need —
                  from establishing a baseline to coordinating protection across
                  a larger catalogue.
                </p>

                {/* Vertical progress */}

                <div className="mt-10 hidden lg:block">
                  <div className="relative h-[230px] w-px bg-black/10 dark:bg-white/10">
                    <div
                      className="
                        absolute
                        left-0
                        top-0
                        w-px
                        bg-[#ADD132]
                        shadow-[0_0_12px_rgba(173,209,50,0.7)]
                        transition-all
                        duration-700
                      "
                      style={{
                        height: `${((activePlan + 1) / plans.length) * 100}%`,
                      }}
                    />

                    {plans.map((plan, index) => (
                      <button
                        key={plan.number}
                        type="button"
                        onClick={() => setActivePlan(index)}
                        className="
                          group
                          absolute
                          left-1/2
                          flex
                          -translate-x-1/2
                          cursor-pointer
                          items-center
                        "
                        style={{
                          top: `${(index / (plans.length - 1)) * 100}%`,
                        }}
                        aria-label={`Select ${plan.name}`}
                      >
                        <span
                          className={`
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded-full
                            border
                            bg-[#F0F4EC]
                            transition-all
                            duration-500
                            dark:bg-[#080D09]
                            ${
                              index === activePlan
                                ? "scale-125 border-[#ADD132] shadow-[0_0_16px_rgba(173,209,50,0.35)]"
                                : "border-black/15 dark:border-white/15"
                            }
                          `}
                        >
                          <span
                            className={`
                              h-1.5
                              w-1.5
                              rounded-full
                              transition-all
                              duration-500
                              ${
                                index === activePlan
                                  ? "bg-[#ADD132]"
                                  : "bg-black/15 dark:bg-white/15"
                              }
                            `}
                          />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-9 flex items-center gap-2 lg:hidden">
                  {plans.map((plan, index) => (
                    <button
                      key={plan.number}
                      type="button"
                      onClick={() => setActivePlan(index)}
                      className={`
                        h-1.5
                        cursor-pointer
                        transition-all
                        duration-500
                        ${
                          index === activePlan
                            ? "w-10 bg-[#ADD132]"
                            : "w-5 bg-black/10 dark:bg-white/10"
                        }
                      `}
                      aria-label={`Select ${plan.name}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT CONTENT
            ================================================== */}

            <div
              className="
                relative
                w-full
                lg:w-[58%]
                lg:pl-16
                xl:pl-20
              "
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Animated pulse */}

              <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-px overflow-hidden lg:block">
                <div
                  className="
                    absolute
                    left-0
                    top-[-120px]
                    h-[120px]
                    w-px
                    animate-[storyPulse_4s_linear_infinite]
                    bg-gradient-to-b
                    from-transparent
                    via-[#ADD132]
                    to-transparent
                    shadow-[0_0_15px_rgba(173,209,50,0.8)]
                  "
                />
              </div>

              <div
                key={selectedPlan.name}
                className="
                  relative
                  min-h-[650px]
                  animate-[storyEnter_650ms_ease-out]
                  py-12
                  sm:py-14
                  md:py-16
                  lg:py-20
                "
              >
                {/* Header */}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        text-[9px]
                        font-black
                        tracking-[0.25em]
                        text-[#789900]
                        dark:text-[#ADD132]
                      "
                    >
                      {selectedPlan.number}
                    </span>

                    <span className="h-px w-7 bg-[#ADD132]/50" />

                    <span
                      className="
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.25em]
                        text-[#789900]
                        dark:text-[#ADD132]
                      "
                    >
                      {selectedPlan.label}
                    </span>
                  </div>

                  {selectedPlan.featured && (
                    <span
                      className="
                        flex
                        items-center
                        gap-1.5
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.16em]
                        text-[#789900]
                        dark:text-[#ADD132]
                      "
                    >
                      <Sparkles size={11} />
                      Recommended
                    </span>
                  )}
                </div>

                {/* Main heading */}

                <div className="mt-12">
                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#89938B]
                      dark:text-white/25
                    "
                  >
                    {selectedPlan.audience}
                  </span>

                  <h3
                    className="
                      mt-4
                      max-w-[680px]
                      text-[30px]
                      font-black
                      leading-[1]
                      tracking-[-0.04em]
                      text-[#172018]
                      dark:text-white
                      sm:text-[38px]
                      md:text-[46px]
                      lg:text-[52px]
                    "
                  >
                    {selectedPlan.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-[590px]
                      text-[13px]
                      leading-7
                      text-[#69756D]
                      dark:text-white/45
                      sm:text-[14px]
                      sm:leading-8
                    "
                  >
                    {selectedPlan.description}
                  </p>
                </div>

                {/* Feature pathway */}

                <div className="mt-12">
                  <div className="flex items-center justify-between border-b border-black/[0.08] pb-4 dark:border-white/[0.08]">
                    <span
                      className="
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.25em]
                        text-[#7D887F]
                        dark:text-white/30
                      "
                    >
                      Protection scope
                    </span>

                    <span
                      className="
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.16em]
                        text-[#7D887F]
                        dark:text-white/25
                      "
                    >
                      {selectedPlan.features.length} capabilities
                    </span>
                  </div>

                  <div>
                    {selectedPlan.features.map((feature, index) => (
                      <div
                        key={feature}
                        className="
                          group
                          flex
                          items-center
                          gap-4
                          border-b
                          border-black/[0.08]
                          py-5
                          animate-[featureSlide_500ms_ease-out_both]
                          dark:border-white/[0.08]
                          sm:py-6
                        "
                        style={{
                          animationDelay: `${index * 100 + 150}ms`,
                        }}
                      >
                        <span
                          className="
                            flex
                            h-7
                            w-7
                            shrink-0
                            items-center
                            justify-center
                            border
                            border-[#ADD132]/30
                            text-[#789900]
                            transition-all
                            duration-300
                            group-hover:border-[#ADD132]
                            group-hover:bg-[#ADD132]
                            group-hover:text-[#101600]
                            dark:text-[#ADD132]
                            dark:group-hover:text-[#101600]
                          "
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>

                        <span
                          className="
                            flex-1
                            text-[12px]
                            font-semibold
                            text-[#435047]
                            dark:text-white/60
                            sm:text-[13px]
                          "
                        >
                          {feature}
                        </span>

                        <ArrowUpRight
                          size={14}
                          className="
                            text-[#A0AAA2]
                            transition-all
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:text-[#789900]
                            dark:group-hover:text-[#ADD132]
                          "
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}

                <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span
                      className="
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.2em]
                        text-[#89938B]
                        dark:text-white/25
                      "
                    >
                      Investment
                    </span>

                    <p
                      className="
                        mt-1
                        text-[15px]
                        font-bold
                        text-[#172018]
                        dark:text-white
                      "
                    >
                      Custom protection scope
                    </p>
                  </div>

                  <button
                    type="button"
                    className="
                      group
                      inline-flex
                      w-fit
                      cursor-pointer
                      items-center
                      gap-3
                      bg-[#172018]
                      px-5
                      py-3.5
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.18em]
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
                    Discuss this option

                    <ArrowRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPARISON STRIP
      ========================================================== */}

      <section
        className="
          mx-auto
          max-w-[1480px]
          px-5
          py-16
          sm:px-7
          sm:py-20
          md:px-10
          md:py-24
          lg:px-14
          xl:px-16
        "
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
          <div className="max-w-[470px]">
            <span
              className="
                text-[8px]
                font-black
                uppercase
                tracking-[0.3em]
                text-[#789900]
                dark:text-[#ADD132]
              "
            >
              Coverage logic
            </span>

            <h2
              className="
                mt-4
                text-[28px]
                font-black
                leading-[1]
                tracking-[-0.04em]
                text-[#172018]
                dark:text-white
                sm:text-[34px]
                md:text-[40px]
              "
            >
              Scale the protection model as the requirement changes.
            </h2>
          </div>

          <div className="w-full max-w-[700px]">
            {[
              {
                number: "01",
                title: "Start focused",
                text: "Establish visibility and dependable response for your core digital assets.",
              },
              {
                number: "02",
                title: "Expand coverage",
                text: "Increase monitoring frequency and introduce broader protection workflows.",
              },
              {
                number: "03",
                title: "Coordinate at scale",
                text: "Build a tailored operating model around larger catalogues and organisations.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="
                  group
                  flex
                  gap-5
                  border-t
                  border-black/[0.08]
                  py-6
                  dark:border-white/[0.09]
                  sm:gap-7
                  sm:py-7
                "
              >
                <span
                  className="
                    pt-1
                    text-[9px]
                    font-black
                    tracking-[0.2em]
                    text-[#789900]
                    dark:text-[#ADD132]
                  "
                >
                  {item.number}
                </span>

                <div className="flex-1">
                  <h3
                    className="
                      text-[15px]
                      font-bold
                      text-[#172018]
                      dark:text-white
                      sm:text-[17px]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[580px]
                      text-[12px]
                      leading-6
                      text-[#758078]
                      dark:text-white/40
                      sm:text-[13px]
                    "
                  >
                    {item.text}
                  </p>
                </div>

                <CircleCheck
                  size={17}
                  strokeWidth={1.5}
                  className="
                    mt-1
                    text-[#B0B9B1]
                    transition-colors
                    duration-300
                    group-hover:text-[#789900]
                    dark:text-white/20
                    dark:group-hover:text-[#ADD132]
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-black/[0.08]
          bg-[#EAF0E5]
          dark:border-white/[0.08]
          dark:bg-[#090F0B]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-160px]
            h-[350px]
            w-[650px]
            -translate-x-1/2
            animate-[finalGlow_7s_ease-in-out_infinite]
            rounded-full
            bg-[#ADD132]/10
            blur-[140px]
            dark:bg-[#ADD132]/[0.04]
          "
        />

        <div
          className="
            relative
            mx-auto
            flex
            max-w-[1480px]
            flex-col
            gap-8
            px-5
            py-16
            sm:px-7
            sm:py-20
            md:px-10
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:px-14
            lg:py-24
            xl:px-16
          "
        >
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3">
              <Zap
                size={15}
                strokeWidth={1.5}
                className="text-[#789900] dark:text-[#ADD132]"
              />

              <span
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.3em]
                  text-[#789900]
                  dark:text-[#ADD132]
                "
              >
                Find your protection model
              </span>
            </div>

            <h2
              className="
                mt-5
                text-[30px]
                font-black
                leading-[1]
                tracking-[-0.045em]
                text-[#172018]
                dark:text-white
                sm:text-[40px]
                md:text-[48px]
                lg:text-[54px]
              "
            >
              Let's build the right level of coverage for your operation.
            </h2>

            <p
              className="
                mt-5
                max-w-[620px]
                text-[13px]
                leading-7
                text-[#69756D]
                dark:text-white/40
                sm:text-[14px]
              "
            >
              Tell us about your content, brand or catalogue and we can discuss
              the protection scope that fits your requirements.
            </p>
          </div>

          <button
            type="button"
            className="
              group
              inline-flex
              w-fit
              cursor-pointer
              items-center
              gap-3
              bg-[#172018]
              px-6
              py-3.5
              text-[9px]
              font-black
              uppercase
              tracking-[0.2em]
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
            Talk to TrackOwls

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </button>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800;900&display=swap');

        @keyframes pulseGlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.55;
          }

          50% {
            transform: translate3d(35px, 25px, 0) scale(1.12);
            opacity: 0.9;
          }
        }

        @keyframes pulseGlowReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.45;
          }

          50% {
            transform: translate3d(-30px, -25px, 0) scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes storyPulse {
          0% {
            transform: translateY(-140px);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateY(760px);
            opacity: 0;
          }
        }

        @keyframes storyEnter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes featureSlide {
          from {
            opacity: 0;
            transform: translateX(14px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes finalGlow {
          0%,
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.4;
          }

          50% {
            transform: translateX(-50%) scale(1.18);
            opacity: 0.75;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}

export default Plan;