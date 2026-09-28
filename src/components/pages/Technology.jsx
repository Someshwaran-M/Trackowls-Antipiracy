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
} from "lucide-react";

function Technology() {
  const capabilities = [
    {
      icon: Radar,
      title: "Intelligent Monitoring",
      description:
        "Continuously observe relevant digital environments to improve visibility around content, brands and intellectual property.",
    },
    {
      icon: ScanSearch,
      title: "Content Discovery",
      description:
        "Discover relevant digital content and identify potential instances of unauthorized use or distribution.",
    },
    {
      icon: Search,
      title: "Digital Intelligence",
      description:
        "Transform online signals into structured intelligence that can support investigation and protection workflows.",
    },
    {
      icon: Database,
      title: "Centralized Intelligence",
      description:
        "Bring digital observations together to create a clearer view of activity surrounding valuable digital assets.",
    },
    {
      icon: Activity,
      title: "Threat Visibility",
      description:
        "Identify suspicious digital activity and improve awareness of potential threats across monitored environments.",
    },
    {
      icon: LockKeyhole,
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
    },
    {
      icon: Radar,
      title: "Monitoring",
    },
    {
      icon: ScanSearch,
      title: "Discovery",
    },
    {
      icon: Shield,
      title: "Protection",
    },
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
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-[#263226]/10
          dark:border-white/[0.06]
        "
      >
        {/* Grid Background */}

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

        {/* Top Glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-100px]
            top-[-80px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#ADD132]/6
            blur-[100px]
            dark:bg-[#ADD132]/10
            sm:right-[-140px]
            sm:top-[-100px]
            sm:h-[500px]
            sm:w-[500px]
            sm:blur-[130px]
            lg:right-[-180px]
            lg:top-[-120px]
            lg:h-[600px]
            lg:w-[600px]
            lg:blur-[150px]
          "
        />

        {/* Bottom Glow */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-160px]
            left-[-120px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#ADD132]/4
            blur-[100px]
            dark:bg-[#ADD132]/6
            sm:bottom-[-200px]
            sm:left-[-150px]
            sm:h-[450px]
            sm:w-[450px]
            sm:blur-[120px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[1500px]
            px-4
            pb-14
            pt-12
            sm:px-7
            sm:pb-20
            sm:pt-18
            md:px-10
            md:pb-24
            md:pt-22
            lg:px-12
            lg:pb-28
            lg:pt-28
          "
        >
          <div
            className="
              grid
              items-center
              gap-10
              lg:grid-cols-2
              lg:gap-14
            "
          >
            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <div>
              {/* Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#6F8D08]/20
                  bg-[#ADD132]/10
                  px-3
                  py-1.5
                  dark:border-[#ADD132]/20
                  dark:bg-[#ADD132]/5
                  sm:px-4
                  sm:py-2
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#ADD132]
                    shadow-[0_0_12px_#ADD132]
                    sm:h-2
                    sm:w-2
                  "
                />

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#6F8D08]
                    dark:text-[#ADD132]
                    sm:text-xs
                  "
                >
                  Technology
                </span>
              </div>

              {/* Heading */}

              <h1
                className="
                  mt-5
                  text-[42px]
                  font-black
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-[#152019]
                  dark:text-white
                  sm:mt-7
                  sm:text-[54px]
                  md:text-[66px]
                  lg:text-[78px]
                  xl:text-[88px]
                "
              >
                Technology for
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  digital intelligence.
                </span>
              </h1>

              {/* Description */}

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-[12px]
                  leading-6
                  text-[#687368]
                  dark:text-slate-400
                  sm:mt-7
                  sm:text-[14px]
                  sm:leading-7
                  md:text-[15px]
                  md:leading-8
                "
              >
                TrackOwls brings monitoring, discovery and digital
                intelligence capabilities together to help organizations
                understand and protect their digital environments.
              </p>

              {/* Buttons */}

              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-2.5
                  sm:mt-9
                  sm:flex-row
                  sm:flex-wrap
                  sm:gap-3
                "
              >
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
                    text-[10px]
                    font-bold
                    text-black
                    transition
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

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-black/10
                      transition
                      duration-300
                      group-hover:rotate-45
                      sm:h-7
                      sm:w-7
                    "
                  >
                    <ArrowUpRight size={14} />
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
                    bg-white/60
                    px-6
                    py-3.5
                    text-[10px]
                    font-semibold
                    text-[#344034]
                    backdrop-blur-xl
                    transition
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

            {/* =================================================
                TECHNOLOGY VISUAL
            ================================================= */}

            <div className="relative mx-auto w-full max-w-[570px]">
              <div
                className="
                  relative
                  aspect-square
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#263226]/10
                  bg-[#EEF3E9]
                  shadow-[0_20px_70px_rgba(30,50,20,0.05)]
                  dark:border-white/[0.07]
                  dark:bg-[#080B08]
                  dark:shadow-[0_0_100px_rgba(173,209,50,0.05)]
                  sm:rounded-[2rem]
                "
              >
                {/* Grid */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-[0.045]
                    dark:opacity-[0.07]
                  "
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(173,209,50,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.5) 1px, transparent 1px)",
                    backgroundSize: "38px 38px",
                  }}
                />

                {/* Glow */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-52
                    w-52
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#ADD132]/8
                    blur-[70px]
                    dark:bg-[#ADD132]/10
                    sm:h-72
                    sm:w-72
                    sm:blur-[90px]
                  "
                />

                {/* Outer Ring */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[70%]
                    w-[70%]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[#6F8D08]/10
                    dark:border-[#ADD132]/10
                  "
                />

                {/* Inner Ring */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[50%]
                    w-[50%]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[#6F8D08]/15
                    dark:border-[#ADD132]/15
                  "
                />

                {/* Center */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    z-10
                    flex
                    h-20
                    w-20
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#6F8D08]/30
                    bg-white/80
                    text-[#6F8D08]
                    shadow-[0_0_45px_rgba(173,209,50,0.10)]
                    backdrop-blur-xl
                    dark:border-[#ADD132]/30
                    dark:bg-[#0B100A]
                    dark:text-[#ADD132]
                    dark:shadow-[0_0_60px_rgba(173,209,50,0.15)]
                    sm:h-28
                    sm:w-28
                    sm:rounded-3xl
                  "
                >
                  <Shield
                    size={36}
                    strokeWidth={1.2}
                    className="sm:h-[52px] sm:w-[52px]"
                  />
                </div>

                {/* Nodes */}

                {[
                  "left-[17%] top-[22%]",
                  "right-[16%] top-[27%]",
                  "left-[15%] bottom-[24%]",
                  "right-[17%] bottom-[20%]",
                ].map((position, index) => (
                  <div
                    key={index}
                    className={`absolute ${position}`}
                  >
                    <div
                      className="
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-[#ADD132]
                        shadow-[0_0_16px_#ADD132]
                        sm:h-3
                        sm:w-3
                      "
                    />
                  </div>
                ))}

                {/* Connection Lines */}

                <div
                  className="
                    absolute
                    left-[19%]
                    top-[25%]
                    h-px
                    w-[30%]
                    rotate-[25deg]
                    bg-[#6F8D08]/20
                    dark:bg-[#ADD132]/20
                  "
                />

                <div
                  className="
                    absolute
                    right-[19%]
                    top-[30%]
                    h-px
                    w-[30%]
                    -rotate-[25deg]
                    bg-[#6F8D08]/20
                    dark:bg-[#ADD132]/20
                  "
                />

                <div
                  className="
                    absolute
                    bottom-[26%]
                    left-[19%]
                    h-px
                    w-[30%]
                    -rotate-[25deg]
                    bg-[#6F8D08]/20
                    dark:bg-[#ADD132]/20
                  "
                />

                <div
                  className="
                    absolute
                    bottom-[23%]
                    right-[19%]
                    h-px
                    w-[30%]
                    rotate-[25deg]
                    bg-[#6F8D08]/20
                    dark:bg-[#ADD132]/20
                  "
                />

                {/* Floating Intelligence Card */}

                <div
                  className="
                    absolute
                    left-3
                    top-3
                    rounded-xl
                    border
                    border-[#263226]/10
                    bg-white/85
                    px-3
                    py-2
                    shadow-lg
                    backdrop-blur-xl
                    dark:border-white/10
                    dark:bg-[#090D09]/90
                    sm:left-5
                    sm:top-5
                    sm:px-4
                    sm:py-3
                  "
                >
                  <p
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.18em]
                      text-[#7B857B]
                      dark:text-slate-600
                      sm:text-[9px]
                    "
                  >
                    Intelligence
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      font-semibold
                      text-[#6F8D08]
                      dark:text-[#ADD132]
                      sm:mt-1
                      sm:text-xs
                    "
                  >
                    Active
                  </p>
                </div>

                {/* Floating Monitoring Card */}

                <div
                  className="
                    absolute
                    bottom-3
                    right-3
                    rounded-xl
                    border
                    border-[#263226]/10
                    bg-white/85
                    px-3
                    py-2
                    shadow-lg
                    backdrop-blur-xl
                    dark:border-white/10
                    dark:bg-[#090D09]/90
                    sm:bottom-5
                    sm:right-5
                    sm:px-4
                    sm:py-3
                  "
                >
                  <p
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.18em]
                      text-[#7B857B]
                      dark:text-slate-600
                      sm:text-[9px]
                    "
                  >
                    Monitoring
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      font-semibold
                      text-[#172017]
                      dark:text-white
                      sm:mt-1
                      sm:text-xs
                    "
                  >
                    Connected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY PHILOSOPHY
      ===================================================== */}

      <section
        className="
          px-4
          py-14
          sm:px-7
          sm:py-20
          md:px-10
          md:py-24
          lg:px-12
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <div
            className="
              grid
              gap-8
              lg:grid-cols-12
              lg:items-center
              lg:gap-12
            "
          >
            <div className="lg:col-span-5">
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-xs
                "
              >
                Our Technology Approach
              </p>

              <h2
                className="
                  mt-3
                  text-[30px]
                  font-black
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-[#152019]
                  dark:text-white
                  sm:mt-5
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Technology designed around
                <span className="text-[#789900] dark:text-[#ADD132]">
                  {" "}
                  visibility.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p
                className="
                  text-[11px]
                  leading-6
                  text-[#687368]
                  dark:text-slate-400
                  sm:text-sm
                  sm:leading-7
                  md:text-base
                  md:leading-8
                "
              >
                The digital environment is constantly changing. Our
                technology approach focuses on bringing together relevant
                signals, monitoring capabilities and intelligence so
                organizations can build a clearer understanding of their
                digital presence.
              </p>

              <p
                className="
                  mt-4
                  text-[11px]
                  leading-6
                  text-[#7A837A]
                  dark:text-slate-500
                  sm:mt-6
                  sm:text-sm
                  sm:leading-7
                  md:text-base
                  md:leading-8
                "
              >
                Rather than treating digital protection as a single activity,
                TrackOwls is designed around a connected flow of discovery,
                detection, analysis and protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section
        className="
          border-y
          border-[#263226]/10
          bg-[#EEF3E9]
          px-4
          py-14
          dark:border-white/[0.06]
          dark:bg-white/[0.015]
          sm:px-7
          sm:py-20
          md:px-10
          md:py-24
          lg:px-12
        "
      >
        <div className="mx-auto max-w-[1500px]">
          {/* Heading */}

          <div className="max-w-3xl">
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#6F8D08]
                dark:text-[#ADD132]
                sm:text-xs
              "
            >
              Core Capabilities
            </p>

            <h2
              className="
                mt-3
                text-[30px]
                font-black
                leading-[1.05]
                tracking-[-0.045em]
                text-[#152019]
                dark:text-white
                sm:mt-5
                sm:text-4xl
                lg:text-5xl
              "
            >
              The technology behind
              <span className="text-[#789900] dark:text-[#ADD132]">
                {" "}
                digital visibility.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                text-[10px]
                leading-5
                text-[#697369]
                dark:text-slate-500
                sm:mt-5
                sm:text-sm
                sm:leading-7
              "
            >
              TrackOwls combines multiple capabilities to support monitoring,
              discovery, intelligence and digital protection workflows.
            </p>
          </div>

          {/* Capability Cards */}

          <div
            className="
              mt-8
              grid
              gap-3
              sm:mt-12
              sm:grid-cols-2
              sm:gap-4
              md:gap-5
              lg:grid-cols-3
            "
          >
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-[18px]
                    border
                    border-[#263226]/10
                    bg-white/75
                    p-4
                    shadow-[0_10px_35px_rgba(30,50,20,0.03)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#ADD132]/30
                    hover:shadow-[0_15px_45px_rgba(30,50,20,0.06)]
                    dark:border-white/[0.07]
                    dark:bg-[#080B08]
                    dark:shadow-none
                    sm:rounded-3xl
                    sm:p-7
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#6F8D08]/20
                      bg-[#ADD132]/10
                      text-[#6F8D08]
                      transition
                      duration-300
                      group-hover:border-[#ADD132]/40
                      group-hover:bg-[#ADD132]/15
                      dark:border-[#ADD132]/15
                      dark:bg-[#ADD132]/[0.05]
                      dark:text-[#ADD132]
                      dark:group-hover:bg-[#ADD132]/10
                      sm:h-14
                      sm:w-14
                      sm:rounded-2xl
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                      className="sm:h-6 sm:w-6"
                    />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-5
                      text-base
                      font-bold
                      text-[#172017]
                      dark:text-white
                      sm:mt-7
                      sm:text-lg
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-2
                      text-[10px]
                      leading-5
                      text-[#697369]
                      dark:text-slate-500
                      sm:mt-3
                      sm:text-sm
                      sm:leading-6
                    "
                  >
                    {item.description}
                  </p>

                  {/* Accent Line */}

                  <div
                    className="
                      mt-5
                      h-px
                      w-8
                      bg-[#ADD132]/40
                      transition-all
                      duration-300
                      group-hover:w-16
                      sm:mt-6
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTELLIGENCE FLOW
      ===================================================== */}

      <section
        className="
          px-4
          py-14
          sm:px-7
          sm:py-20
          md:px-10
          md:py-24
          lg:px-12
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <div
            className="
              grid
              gap-8
              lg:grid-cols-2
              lg:items-center
              lg:gap-12
            "
          >
            {/* Content */}

            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-xs
                "
              >
                Intelligence Flow
              </p>

              <h2
                className="
                  mt-3
                  text-[30px]
                  font-black
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-[#152019]
                  dark:text-white
                  sm:mt-5
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                From digital signals
                <br />
                to actionable intelligence.
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-[11px]
                  leading-6
                  text-[#687368]
                  dark:text-slate-500
                  sm:mt-6
                  sm:text-sm
                  sm:leading-7
                "
              >
                A connected technology approach helps organizations move from
                discovering digital activity to understanding and responding
                to relevant protection requirements.
              </p>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                {technologyPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 sm:gap-3"
                  >
                    <CheckCircle2
                      size={16}
                      className="
                        shrink-0
                        text-[#6F8D08]
                        dark:text-[#ADD132]
                        sm:h-[18px]
                        sm:w-[18px]
                      "
                    />

                    <span
                      className="
                        text-[10px]
                        text-[#536053]
                        dark:text-slate-300
                        sm:text-sm
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Flow */}

            <div
              className="
                rounded-[20px]
                border
                border-[#263226]/10
                bg-[#EEF3E9]
                p-4
                dark:border-white/[0.07]
                dark:bg-[#080B08]
                sm:rounded-[2rem]
                sm:p-7
                md:p-9
              "
            >
              <div className="space-y-3 sm:space-y-4">
                {process.map((item, index) => (
                  <div
                    key={item.number}
                    className="
                      relative
                      flex
                      items-center
                      gap-3
                      sm:gap-4
                    "
                  >
                    {/* Number */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#6F8D08]/20
                        bg-[#ADD132]/10
                        text-[9px]
                        font-bold
                        text-[#6F8D08]
                        dark:border-[#ADD132]/20
                        dark:bg-[#ADD132]/[0.05]
                        dark:text-[#ADD132]
                        sm:h-12
                        sm:w-12
                        sm:text-xs
                      "
                    >
                      {item.number}
                    </div>

                    {/* Text */}

                    <div className="min-w-0">
                      <h3
                        className="
                          text-[11px]
                          font-bold
                          text-[#172017]
                          dark:text-white
                          sm:text-sm
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-0.5
                          text-[8px]
                          leading-5
                          text-[#7A837A]
                          dark:text-slate-600
                          sm:mt-1
                          sm:text-xs
                        "
                      >
                        {item.text}
                      </p>
                    </div>

                    {/* Connector */}

                    {index < process.length - 1 && (
                      <div
                        className="
                          absolute
                          left-5
                          top-10
                          h-4
                          w-px
                          bg-[#6F8D08]/15
                          dark:bg-[#ADD132]/15
                          sm:left-6
                          sm:top-12
                        "
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DIGITAL INFRASTRUCTURE
      ===================================================== */}

      <section
        className="
          border-y
          border-[#263226]/10
          bg-[#EEF3E9]
          px-4
          py-14
          dark:border-white/[0.06]
          dark:bg-white/[0.015]
          sm:px-7
          sm:py-20
          md:px-10
          md:py-24
          lg:px-12
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <div
            className="
              relative
              overflow-hidden
              rounded-[20px]
              border
              border-[#ADD132]/15
              bg-[#F4F7F0]
              p-5
              dark:bg-[#ADD132]/[0.025]
              sm:rounded-[2rem]
              sm:p-8
              md:p-12
              lg:p-16
            "
          >
            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-[#ADD132]/6
                blur-[90px]
                dark:bg-[#ADD132]/10
                sm:-right-32
                sm:-top-32
                sm:h-96
                sm:w-96
                sm:blur-[120px]
              "
            />

            <div
              className="
                relative
                grid
                gap-8
                lg:grid-cols-2
                lg:items-center
                lg:gap-12
              "
            >
              {/* Content */}

              <div>
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#6F8D08]/20
                    bg-[#ADD132]/10
                    text-[#6F8D08]
                    dark:border-[#ADD132]/20
                    dark:text-[#ADD132]
                    sm:h-14
                    sm:w-14
                    sm:rounded-2xl
                  "
                >
                  <Globe size={22} />
                </div>

                <p
                  className="
                    mt-5
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#6F8D08]
                    dark:text-[#ADD132]
                    sm:mt-7
                    sm:text-xs
                  "
                >
                  Digital Environment
                </p>

                <h2
                  className="
                    mt-3
                    text-[30px]
                    font-black
                    leading-[1.05]
                    tracking-[-0.045em]
                    text-[#152019]
                    dark:text-white
                    sm:mt-4
                    sm:text-4xl
                  "
                >
                  Built for a
                  <span className="text-[#789900] dark:text-[#ADD132]">
                    {" "}
                    connected world.
                  </span>
                </h2>

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-[11px]
                    leading-6
                    text-[#687368]
                    dark:text-slate-500
                    sm:mt-5
                    sm:text-sm
                    sm:leading-7
                  "
                >
                  Digital assets can exist across websites, platforms,
                  applications and online communities. TrackOwls technology is
                  designed around understanding this connected environment.
                </p>
              </div>

              {/* Infrastructure Cards */}

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {infrastructure.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        group
                        flex
                        min-h-[92px]
                        flex-col
                        justify-between
                        rounded-2xl
                        border
                        border-[#263226]/10
                        bg-white/70
                        p-4
                        transition
                        duration-300
                        hover:border-[#ADD132]/30
                        dark:border-white/[0.07]
                        dark:bg-[#080B08]
                        sm:min-h-[125px]
                        sm:p-5
                      "
                    >
                      <Icon
                        size={19}
                        className="
                          text-[#6F8D08]
                          transition
                          group-hover:text-[#789900]
                          dark:text-[#ADD132]
                        "
                      />

                      <p
                        className="
                          mt-5
                          text-[10px]
                          font-bold
                          text-[#172017]
                          dark:text-white
                          sm:mt-6
                          sm:text-sm
                        "
                      >
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="
          px-4
          py-14
          sm:px-7
          sm:py-20
          md:px-10
          md:py-24
          lg:px-12
        "
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Icon */}

          <div
            className="
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-[#6F8D08]/20
              bg-[#ADD132]/10
              text-[#6F8D08]
              dark:border-[#ADD132]/20
              dark:text-[#ADD132]
              sm:h-14
              sm:w-14
              sm:rounded-2xl
            "
          >
            <Shield size={23} />
          </div>

          <p
            className="
              mt-5
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#6F8D08]
              dark:text-[#ADD132]
              sm:mt-7
              sm:text-xs
            "
          >
            Technology & Protection
          </p>

          <h2
            className="
              mt-3
              text-[30px]
              font-black
              leading-[1.05]
              tracking-[-0.045em]
              text-[#152019]
              dark:text-white
              sm:mt-4
              sm:text-4xl
              lg:text-5xl
            "
          >
            Build greater visibility
            <br />
            into your digital environment.
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-[11px]
              leading-6
              text-[#687368]
              dark:text-slate-500
              sm:mt-5
              sm:text-sm
              sm:leading-7
              md:text-base
            "
          >
            Discover how TrackOwls technology can support your digital
            monitoring and protection requirements.
          </p>

          {/* Buttons */}

          <div
            className="
              mt-7
              flex
              flex-col
              justify-center
              gap-2.5
              sm:mt-8
              sm:flex-row
              sm:gap-3
            "
          >
            <Link
              to="/request-demo"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-[#ADD132]
                px-6
                py-3.5
                text-[10px]
                font-bold
                text-black
                transition
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
                gap-2.5
                rounded-full
                border
                border-[#263226]/15
                bg-white/60
                px-6
                py-3.5
                text-[10px]
                font-semibold
                text-[#344034]
                backdrop-blur-xl
                transition
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