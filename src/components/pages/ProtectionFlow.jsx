import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Fingerprint,
  Globe2,
  LockKeyhole,
  MessageSquare,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const protectionStages = [
  {
    number: "01",
    label: "MAP",
    title: "Build the digital picture.",
    text:
      "Create a living view of the websites, platforms, channels, domains and digital properties connected to your business.",
    icon: Globe2,
  },
  {
    number: "02",
    label: "QUALIFY",
    title: "Give important signals context.",
    text:
      "Bring together ownership details, content references and surrounding activity so meaningful cases can be understood clearly.",
    icon: Fingerprint,
  },
  {
    number: "03",
    label: "PRIORITISE",
    title: "Focus attention where it matters.",
    text:
      "Organise findings by relevance, urgency and potential impact so teams can concentrate on the situations requiring action.",
    icon: Target,
  },
  {
    number: "04",
    label: "RESPOND",
    title: "Move with a defined next step.",
    text:
      "Turn verified findings into structured response workflows with evidence, communication and follow-up kept together.",
    icon: MessageSquare,
  },
];

const operatingPrinciples = [
  {
    number: "01",
    title: "Context before action",
    text:
      "A digital signal becomes useful when it can be understood in relation to the asset, source and surrounding activity.",
  },
  {
    number: "02",
    title: "Evidence stays connected",
    text:
      "Important information should remain attached to the case from the first discovery through the response process.",
  },
  {
    number: "03",
    title: "Protection keeps evolving",
    text:
      "Digital environments change constantly, so protection needs an operating model rather than a single intervention.",
  },
];

function ProtectionFlow() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((current) => (current + 1) % protectionStages.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const active = protectionStages[activeStage];
  const ActiveIcon = active.icon;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F9F4]
        py-16
        text-[#111711]
        dark:bg-[#050705]
        dark:text-white
        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-32
            top-20
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#ADD132]/10
            blur-[120px]
            dark:bg-[#ADD132]/5
            sm:h-[450px]
            sm:w-[450px]
            lg:h-[600px]
            lg:w-[600px]
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -left-32
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#ADD132]/6
            blur-[130px]
            dark:bg-[#ADD132]/4
            sm:h-[500px]
            sm:w-[500px]
          "
        />
      </div>

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1480px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
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
            gap-8
            border-b
            border-black/10
            pb-10
            dark:border-white/10
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-16
            lg:pb-14
          "
        >
          <div className="max-w-[850px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#789900] dark:bg-[#ADD132]" />

              <span
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.3em]
                  text-[#71805F]
                  dark:text-[#ADD132]
                  sm:text-[9px]
                  sm:tracking-[0.4em]
                "
              >
                Protection Operating System
              </span>
            </div>

            <h2
              className="
                max-w-[900px]
                text-[34px]
                font-black
                leading-[0.96]
                tracking-[-0.045em]
                text-[#152019]
                dark:text-white
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Protection needs more than
              <span className="text-[#789900] dark:text-[#ADD132]">
                {" "}
                detection.
              </span>
            </h2>
          </div>

          <div className="max-w-[440px] lg:pb-1">
            <p
              className="
                text-[13px]
                leading-6
                text-[#697369]
                dark:text-white/45
                sm:text-[14px]
                sm:leading-7
              "
            >
              TrackOwls turns scattered digital activity into a structured
              protection workflow — giving teams a clearer way to understand,
              prioritise and respond to what is happening around their assets.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#789900] dark:bg-[#ADD132]" />

              <span
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.22em]
                  text-[#718A18]
                  dark:text-[#ADD132]
                "
              >
                Intelligence → Context → Response
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            COMMAND LINE
        ===================================================== */}

        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          <div
            className="
              flex
              flex-col
              lg:flex-row
            "
          >
            {/* LEFT STAGE NAVIGATION */}

            <div
              className="
                w-full
                border-b
                border-black/10
                dark:border-white/10
                lg:w-[34%]
                lg:border-b-0
                lg:border-r
                lg:pr-12
              "
            >
              <div className="mb-8 flex items-center justify-between lg:mb-10">
                <div>
                  <span
                    className="
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.28em]
                      text-[#7B8679]
                      dark:text-white/35
                    "
                  >
                    Operating sequence
                  </span>

                  <p
                    className="
                      mt-2
                      text-[20px]
                      font-bold
                      tracking-[-0.025em]
                      text-[#152019]
                      dark:text-white
                      sm:text-[24px]
                    "
                  >
                    From signal to action.
                  </p>
                </div>

                <ScanLine
                  size={20}
                  strokeWidth={1.4}
                  className="text-[#789900] dark:text-[#ADD132]"
                />
              </div>

              <div className="flex flex-col">
                {protectionStages.map((stage, index) => {
                  const Icon = stage.icon;
                  const isActive = index === activeStage;

                  return (
                    <button
                      key={stage.number}
                      type="button"
                      onClick={() => setActiveStage(index)}
                      className={`
                        group
                        relative
                        flex
                        cursor-pointer
                        items-start
                        gap-4
                        border-t
                        border-black/10
                        py-5
                        text-left
                        transition-all
                        duration-500
                        dark:border-white/10
                        sm:gap-5
                        sm:py-6
                      `}
                    >
                      <div
                        className={`
                          mt-0.5
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          border
                          transition-all
                          duration-500
                          ${
                            isActive
                              ? "border-[#ADD132] bg-[#ADD132] text-[#152019]"
                              : "border-black/10 bg-transparent text-[#7C877A] group-hover:border-[#ADD132]/50 dark:border-white/10 dark:text-white/30"
                          }
                        `}
                      >
                        <Icon size={15} strokeWidth={1.5} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3">
                          <span
                            className={`
                              text-[8px]
                              font-black
                              tracking-[0.2em]
                              ${
                                isActive
                                  ? "text-[#789900] dark:text-[#ADD132]"
                                  : "text-[#8A9488] dark:text-white/25"
                              }
                            `}
                          >
                            {stage.number}
                          </span>

                          <span
                            className={`
                              text-[8px]
                              font-black
                              uppercase
                              tracking-[0.2em]
                              ${
                                isActive
                                  ? "text-[#789900] dark:text-[#ADD132]"
                                  : "text-[#818B80] dark:text-white/30"
                              }
                            `}
                          >
                            {stage.label}
                          </span>
                        </div>

                        <p
                          className={`
                            mt-2
                            text-[14px]
                            font-bold
                            tracking-[-0.01em]
                            transition-colors
                            duration-300
                            sm:text-[16px]
                            ${
                              isActive
                                ? "text-[#152019] dark:text-white"
                                : "text-[#5E695F] dark:text-white/45"
                            }
                          `}
                        >
                          {stage.title}
                        </p>
                      </div>

                      <ArrowRight
                        size={15}
                        className={`
                          mt-2
                          shrink-0
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "translate-x-0 text-[#789900] opacity-100 dark:text-[#ADD132]"
                              : "-translate-x-2 text-[#789900] opacity-0 group-hover:translate-x-0 group-hover:opacity-60 dark:text-[#ADD132]"
                          }
                        `}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT ACTIVE STAGE */}

            <div className="relative w-full lg:w-[66%] lg:pl-14 xl:pl-20">
              <div
                className="
                  relative
                  min-h-[430px]
                  overflow-hidden
                  py-10
                  sm:min-h-[500px]
                  sm:py-14
                  lg:min-h-[560px]
                  lg:py-16
                "
              >
                {/* Decorative vertical measurement line */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-5
                    top-0
                    w-px
                    bg-black/10
                    dark:bg-white/10
                    sm:left-7
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-[20px]
                    top-0
                    w-px
                    bg-gradient-to-b
                    from-transparent
                    via-[#ADD132]/60
                    to-transparent
                    opacity-50
                    dark:opacity-80
                    sm:left-[28px]
                  "
                />

                {/* Active content */}

                <div className="relative pl-12 sm:pl-16">
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.3em]
                        text-[#789900]
                        dark:text-[#ADD132]
                      "
                    >
                      Active intelligence stage
                    </span>

                    <span className="h-px w-10 bg-[#ADD132]/40" />
                  </div>

                  <div
                    key={active.number}
                    className="
                      mt-8
                      animate-[protectionReveal_700ms_ease-out]
                    "
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="
                          text-[46px]
                          font-black
                          leading-none
                          tracking-[-0.06em]
                          text-[#789900]/15
                          dark:text-[#ADD132]/15
                          sm:text-[64px]
                          lg:text-[80px]
                        "
                      >
                        {active.number}
                      </span>

                      <span
                        className="
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.28em]
                          text-[#789900]
                          dark:text-[#ADD132]
                        "
                      >
                        {active.label}
                      </span>
                    </div>

                    <h3
                      className="
                        mt-7
                        max-w-[700px]
                        text-[30px]
                        font-black
                        leading-[1]
                        tracking-[-0.04em]
                        text-[#152019]
                        dark:text-white
                        sm:text-[40px]
                        md:text-[48px]
                        lg:text-[56px]
                      "
                    >
                      {active.title}
                    </h3>

                    <p
                      className="
                        mt-6
                        max-w-[570px]
                        text-[14px]
                        leading-7
                        text-[#697369]
                        dark:text-white/45
                        sm:text-[15px]
                        sm:leading-8
                      "
                    >
                      {active.text}
                    </p>

                    <div className="mt-10 flex items-center gap-5">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          border
                          border-[#ADD132]/40
                          bg-[#ADD132]/10
                          text-[#789900]
                          dark:text-[#ADD132]
                        "
                      >
                        <ActiveIcon size={20} strokeWidth={1.5} />
                      </div>

                      <div>
                        <p
                          className="
                            text-[8px]
                            font-black
                            uppercase
                            tracking-[0.22em]
                            text-[#7D887C]
                            dark:text-white/30
                          "
                        >
                          Current focus
                        </p>

                        <p
                          className="
                            mt-1
                            text-[12px]
                            font-bold
                            text-[#263126]
                            dark:text-white/70
                          "
                        >
                          {active.label} / intelligence layer
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress */}

                  <div className="mt-12 max-w-[620px]">
                    <div className="flex items-center justify-between">
                      <span
                        className="
                          text-[7px]
                          font-black
                          uppercase
                          tracking-[0.2em]
                          text-[#8A9488]
                          dark:text-white/25
                        "
                      >
                        Workflow progression
                      </span>

                      <span
                        className="
                          text-[8px]
                          font-black
                          text-[#789900]
                          dark:text-[#ADD132]
                        "
                      >
                        {active.number} / 04
                      </span>
                    </div>

                    <div className="mt-3 flex gap-1.5">
                      {protectionStages.map((stage, index) => (
                        <div
                          key={stage.number}
                          className={`
                            h-[3px]
                            flex-1
                            transition-all
                            duration-700
                            ${
                              index <= activeStage
                                ? "bg-[#ADD132]"
                                : "bg-black/10 dark:bg-white/10"
                            }
                          `}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLES
        ===================================================== */}

        <div
          className="
            mt-16
            border-t
            border-black/10
            pt-12
            dark:border-white/10
            sm:mt-20
            sm:pt-14
            lg:mt-24
            lg:pt-16
          "
        >
          <div
            className="
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:justify-between
              lg:gap-16
            "
          >
            <div className="max-w-[440px]">
              <div className="flex items-center gap-3">
                <Sparkles
                  size={16}
                  strokeWidth={1.4}
                  className="text-[#789900] dark:text-[#ADD132]"
                />

                <span
                  className="
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.28em]
                    text-[#7A8579]
                    dark:text-white/35
                  "
                >
                  Operating principles
                </span>
              </div>

              <h3
                className="
                  mt-5
                  text-[28px]
                  font-black
                  leading-[1]
                  tracking-[-0.04em]
                  text-[#152019]
                  dark:text-white
                  sm:text-[36px]
                  md:text-[42px]
                "
              >
                Make every protection decision clearer.
              </h3>
            </div>

            <div className="w-full lg:max-w-[680px]">
              {operatingPrinciples.map((item) => (
                <div
                  key={item.number}
                  className="
                    group
                    flex
                    gap-5
                    border-t
                    border-black/10
                    py-6
                    dark:border-white/10
                    sm:gap-7
                    sm:py-7
                  "
                >
                  <span
                    className="
                      pt-1
                      text-[9px]
                      font-black
                      tracking-[0.18em]
                      text-[#789900]
                      dark:text-[#ADD132]
                    "
                  >
                    {item.number}
                  </span>

                  <div className="flex-1">
                    <h4
                      className="
                        text-[16px]
                        font-bold
                        tracking-[-0.015em]
                        text-[#152019]
                        dark:text-white
                        sm:text-[18px]
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-2
                        max-w-[560px]
                        text-[12px]
                        leading-6
                        text-[#737D73]
                        dark:text-white/40
                        sm:text-[13px]
                        sm:leading-7
                      "
                    >
                      {item.text}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="
                      mt-1
                      shrink-0
                      text-[#A2ADA0]
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-[#789900]
                      dark:text-white/20
                      dark:group-hover:text-[#ADD132]
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL STATEMENT
        ===================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden
            border-y
            border-black/10
            py-12
            dark:border-white/10
            sm:mt-20
            sm:py-16
            lg:mt-24
            lg:py-20
          "
        >
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
            <ShieldCheck
              size={180}
              strokeWidth={0.5}
              className="text-[#789900]/5 dark:text-[#ADD132]/5 sm:size-[240px]"
            />
          </div>

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
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
                The TrackOwls approach
              </span>

              <h3
                className="
                  mt-5
                  text-[30px]
                  font-black
                  leading-[1]
                  tracking-[-0.045em]
                  text-[#152019]
                  dark:text-white
                  sm:text-[40px]
                  md:text-[48px]
                  lg:text-[56px]
                "
              >
                Turn digital uncertainty into a clearer operating picture.
              </h3>

              <p
                className="
                  mt-5
                  max-w-[620px]
                  text-[13px]
                  leading-7
                  text-[#697369]
                  dark:text-white/40
                  sm:text-[14px]
                  sm:leading-8
                "
              >
                Protection becomes easier to manage when teams can see the
                environment, understand the significance of activity and move
                through a consistent response process.
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
                border
                border-[#789900]/30
                px-5
                py-3
                text-[9px]
                font-black
                uppercase
                tracking-[0.2em]
                text-[#627D00]
                transition-all
                duration-300
                hover:border-[#ADD132]
                hover:bg-[#ADD132]
                hover:text-[#111711]
                dark:border-[#ADD132]/30
                dark:text-[#ADD132]
                dark:hover:bg-[#ADD132]
                dark:hover:text-[#111711]
                sm:px-6
                sm:py-3.5
              "
            >
              Explore TrackOwls

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

        {/* =====================================================
            MICRO FOOTER LINE
        ===================================================== */}

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LockKeyhole
              size={13}
              strokeWidth={1.5}
              className="text-[#789900] dark:text-[#ADD132]"
            />

            <span
              className="
                text-[7px]
                font-black
                uppercase
                tracking-[0.2em]
                text-[#899287]
                dark:text-white/25
              "
            >
              Structured protection intelligence
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#ADD132]" />

            <span
              className="
                text-[7px]
                font-black
                uppercase
                tracking-[0.18em]
                text-[#899287]
                dark:text-white/25
              "
            >
              TrackOwls
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes protectionReveal {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

export default ProtectionFlow;