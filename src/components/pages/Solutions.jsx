import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Search,
  Radar,
  Globe,
  LockKeyhole,
  ScanSearch,
  Eye,
  FileSearch,
  CheckCircle2,
} from "lucide-react";

function Solutions() {
  const solutions = [
    {
      number: "01",
      icon: Shield,
      title: "Anti-Piracy",
      description:
        "Identify and monitor unauthorized distribution of digital content across online platforms and sources.",
      points: [
        "Content monitoring",
        "Unauthorized distribution discovery",
        "Piracy intelligence",
        "Digital evidence collection",
      ],
    },
    {
      number: "02",
      icon: LockKeyhole,
      title: "IP Protection",
      description:
        "Help protect valuable intellectual property by improving visibility into how digital assets are used online.",
      points: [
        "IP visibility",
        "Asset monitoring",
        "Unauthorized usage discovery",
        "Protection intelligence",
      ],
    },
    {
      number: "03",
      icon: Eye,
      title: "Brand Protection",
      description:
        "Monitor digital environments for unauthorized brand usage, suspicious activity and potential misuse.",
      points: [
        "Brand monitoring",
        "Unauthorized usage detection",
        "Digital presence visibility",
        "Threat identification",
      ],
    },
    {
      number: "04",
      icon: Radar,
      title: "Online Monitoring",
      description:
        "Maintain continuous visibility across digital channels to discover relevant content and potential threats.",
      points: [
        "Continuous monitoring",
        "Digital source discovery",
        "Activity tracking",
        "Intelligence collection",
      ],
    },
    {
      number: "05",
      icon: ScanSearch,
      title: "Threat Detection",
      description:
        "Identify suspicious digital activity and potential threats affecting your content, brand and intellectual property.",
      points: [
        "Threat discovery",
        "Suspicious activity monitoring",
        "Digital intelligence",
        "Risk visibility",
      ],
    },
    {
      number: "06",
      icon: FileSearch,
      title: "Digital Investigation",
      description:
        "Gather and organize digital intelligence to support investigations into unauthorized content and online activity.",
      points: [
        "Digital research",
        "Evidence discovery",
        "Source identification",
        "Investigation support",
      ],
    },
  ];

  const discoveryPoints = [
    "Discover digital activity",
    "Monitor online environments",
    "Identify potential threats",
    "Protect valuable assets",
  ];

  const flowSteps = [
    {
      number: "01",
      title: "Discover",
      text: "Find relevant digital activity",
    },
    {
      number: "02",
      title: "Detect",
      text: "Identify potential threats",
    },
    {
      number: "03",
      title: "Analyze",
      text: "Understand the digital signal",
    },
    {
      number: "04",
      title: "Protect",
      text: "Support appropriate response",
    },
  ];

  const intelligenceAreas = [
    "Web",
    "Platforms",
    "Social",
    "Digital Channels",
  ];

  const workflowPoints = [
    "Continuous digital visibility",
    "Structured intelligence",
    "Centralized monitoring",
    "Investigation support",
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
        {/* Grid */}

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

        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            top-10
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#ADD132]/6
            blur-[100px]
            dark:bg-[#ADD132]/10
            sm:h-[420px]
            sm:w-[420px]
            sm:blur-[120px]
            lg:h-[500px]
            lg:w-[500px]
            lg:blur-[140px]
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
          <div className="max-w-4xl">
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
                  tracking-[0.23em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-xs
                "
              >
                Our Solutions
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-5
                max-w-5xl
                text-[42px]
                font-black
                leading-[0.98]
                tracking-[-0.055em]
                text-[#152019]
                dark:text-white
                sm:mt-7
                sm:text-[54px]
                md:text-[66px]
                lg:text-[82px]
                xl:text-[92px]
              "
            >
              Digital protection
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                built around visibility.
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
              Explore TrackOwls solutions designed to help organizations
              monitor digital environments, discover unauthorized activity and
              protect valuable digital assets.
            </p>

            {/* Hero Buttons */}

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
                  gap-2.5
                  rounded-full
                  bg-[#ADD132]
                  px-5
                  py-3
                  text-[10px]
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#C7EB45]
                  hover:shadow-[0_0_35px_rgba(173,209,50,0.2)]
                  sm:w-auto
                  sm:px-6
                  sm:py-3.5
                  sm:text-xs
                "
              >
                Explore Protection

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    sm:h-[18px]
                    sm:w-[18px]
                  "
                />
              </Link>

              <Link
                to="/contact"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#263226]/15
                  bg-white/60
                  px-5
                  py-3
                  text-[10px]
                  font-medium
                  text-[#344034]
                  backdrop-blur-xl
                  transition
                  hover:border-[#ADD132]/40
                  hover:bg-white
                  hover:text-[#6F8D08]
                  dark:border-white/10
                  dark:bg-white/[0.02]
                  dark:text-white
                  dark:hover:bg-white/[0.04]
                  dark:hover:text-[#ADD132]
                  sm:w-auto
                  sm:px-6
                  sm:py-3.5
                  sm:text-xs
                "
              >
                Talk to Our Team

                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
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
                One Protection Ecosystem
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
                From discovery to
                <span className="text-[#789900] dark:text-[#ADD132]">
                  {" "}
                  protection.
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
                Digital threats can appear across websites, platforms,
                social channels and other online environments. TrackOwls
                brings multiple protection capabilities together to help
                organizations gain a clearer picture of their digital
                landscape.
              </p>

              <div
                className="
                  mt-6
                  grid
                  gap-2.5
                  sm:mt-7
                  sm:grid-cols-2
                  sm:gap-4
                "
              >
                {discoveryPoints.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2.5
                      text-[10px]
                      text-[#536053]
                      dark:text-slate-300
                      sm:text-sm
                    "
                  >
                    <CheckCircle2
                      size={15}
                      className="
                        shrink-0
                        text-[#6F8D08]
                        dark:text-[#ADD132]
                        sm:h-[17px]
                        sm:w-[17px]
                      "
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTION GRID
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
          {/* Section Heading */}

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
              What We Offer
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
              Solutions for the
              <span className="text-[#789900] dark:text-[#ADD132]">
                {" "}
                modern digital environment.
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
              Our capabilities are designed to give organizations greater
              visibility into digital activity and support their content and
              intellectual property protection strategies.
            </p>
          </div>

          {/* Cards */}

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
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
                  className="
                    group
                    relative
                    overflow-hidden
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
                    sm:p-6
                    md:p-7
                  "
                >
                  {/* Accent Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-[#ADD132]/0
                      blur-3xl
                      transition
                      duration-500
                      group-hover:bg-[#ADD132]/10
                    "
                  />

                  {/* Number */}

                  <span
                    className="
                      absolute
                      right-5
                      top-5
                      text-[9px]
                      font-semibold
                      tracking-[0.2em]
                      text-[#A1AAA1]
                      transition
                      duration-300
                      group-hover:text-[#789900]/50
                      dark:text-white/10
                      dark:group-hover:text-[#ADD132]/30
                      sm:right-7
                      sm:top-6
                      sm:text-xs
                    "
                  >
                    {solution.number}
                  </span>

                  {/* Icon */}

                  <div
                    className="
                      relative
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
                      duration-500
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
                      relative
                      mt-5
                      text-base
                      font-bold
                      text-[#172017]
                      dark:text-white
                      sm:mt-7
                      sm:text-xl
                    "
                  >
                    {solution.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      relative
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
                    {solution.description}
                  </p>

                  {/* Points */}

                  <div className="relative mt-5 space-y-2.5 sm:mt-7 sm:space-y-3">
                    {solution.points.map((point) => (
                      <div
                        key={point}
                        className="
                          flex
                          items-center
                          gap-2.5
                          text-[9px]
                          text-[#596459]
                          dark:text-slate-400
                          sm:text-xs
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-[#ADD132]
                            shadow-[0_0_6px_rgba(173,209,50,0.25)]
                          "
                        />

                        {point}
                      </div>
                    ))}
                  </div>

                  {/* Bottom Link */}

                  <div
                    className="
                      relative
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-[9px]
                      font-semibold
                      text-[#6F8D08]
                      opacity-80
                      transition
                      duration-300
                      group-hover:opacity-100
                      dark:text-[#ADD132]
                      sm:mt-8
                      sm:text-xs
                    "
                  >
                    Learn More

                    <ArrowUpRight
                      size={13}
                      className="
                        transition
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
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
            {/* Left Visual */}

            <div
              className="
                relative
                overflow-hidden
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
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-56
                  w-56
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#ADD132]/7
                  blur-[80px]
                  dark:bg-[#ADD132]/10
                  sm:h-72
                  sm:w-72
                  sm:blur-[100px]
                "
              />

              <div className="relative">
                {/* Visual Header */}

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.2em]
                        text-[#7D877D]
                        dark:text-slate-600
                        sm:text-xs
                      "
                    >
                      Protection Flow
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-bold
                        text-[#172017]
                        dark:text-white
                        sm:mt-2
                        sm:text-lg
                      "
                    >
                      Digital Intelligence
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#6F8D08]/20
                      bg-[#ADD132]/10
                      text-[#6F8D08]
                      dark:border-[#ADD132]/20
                      dark:text-[#ADD132]
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <Radar size={18} />
                  </div>
                </div>

                {/* Flow */}

                <div className="mt-7 space-y-3 sm:mt-10 sm:space-y-4">
                  {flowSteps.map((step, index) => (
                    <div
                      key={step.number}
                      className="
                        relative
                        flex
                        items-center
                        gap-3
                        sm:gap-4
                      "
                    >
                      <div
                        className="
                          relative
                          z-10
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-[#6F8D08]/20
                          bg-[#ADD132]/10
                          text-[9px]
                          font-semibold
                          text-[#6F8D08]
                          dark:border-[#ADD132]/15
                          dark:bg-[#ADD132]/[0.05]
                          dark:text-[#ADD132]
                          sm:h-11
                          sm:w-11
                          sm:text-xs
                        "
                      >
                        {step.number}
                      </div>

                      <div>
                        <p
                          className="
                            text-[11px]
                            font-bold
                            text-[#172017]
                            dark:text-white
                            sm:text-sm
                          "
                        >
                          {step.title}
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[8px]
                            text-[#7D877D]
                            dark:text-slate-600
                            sm:mt-1
                            sm:text-xs
                          "
                        >
                          {step.text}
                        </p>
                      </div>

                      {index < flowSteps.length - 1 && (
                        <div
                          className="
                            absolute
                            left-[18px]
                            top-[37px]
                            h-4
                            w-px
                            bg-[#6F8D08]/15
                            dark:bg-[#ADD132]/15
                            sm:left-[21px]
                            sm:top-[44px]
                          "
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content */}

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
                How It Works
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
                Turn digital signals
                <span className="text-[#789900] dark:text-[#ADD132]">
                  {" "}
                  into intelligence.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  text-[11px]
                  leading-6
                  text-[#687368]
                  dark:text-slate-500
                  sm:mt-6
                  sm:text-sm
                  sm:leading-7
                  md:text-base
                "
              >
                TrackOwls focuses on the flow from digital discovery to
                actionable intelligence, helping organizations understand what
                is happening around their valuable digital assets.
              </p>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                {workflowPoints.map((item) => (
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

              <Link
                to="/technology"
                className="
                  group
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  text-[10px]
                  font-bold
                  text-[#6F8D08]
                  transition
                  hover:text-[#789900]
                  dark:text-[#ADD132]
                  dark:hover:text-[#C7EB45]
                  sm:mt-9
                  sm:text-xs
                "
              >
                Explore Our Technology

                <ArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GLOBAL DIGITAL VISIBILITY
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
            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-72
                w-72
                rounded-full
                bg-[#ADD132]/7
                blur-[100px]
                dark:bg-[#ADD132]/10
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
              {/* Text */}

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
                  Digital Visibility
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
                  Understand your
                  <span className="text-[#789900] dark:text-[#ADD132]">
                    {" "}
                    online footprint.
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
                    md:text-base
                  "
                >
                  Digital content can move across multiple channels and
                  platforms. Better visibility helps organizations understand
                  where their content and brand appear online.
                </p>
              </div>

              {/* Intelligence Areas */}

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {intelligenceAreas.map((item) => (
                  <div
                    key={item}
                    className="
                      group
                      flex
                      min-h-[90px]
                      items-end
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
                      sm:min-h-[110px]
                      sm:p-5
                    "
                  >
                    <div>
                      <div
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#ADD132]
                          shadow-[0_0_8px_rgba(173,209,50,0.35)]
                        "
                      />

                      <p
                        className="
                          mt-3
                          text-[10px]
                          font-bold
                          text-[#172017]
                          dark:text-white
                          sm:mt-4
                          sm:text-sm
                        "
                      >
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
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
            Protect What Matters
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
            Build stronger visibility
            <br />
            around your digital assets.
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
            Talk to the TrackOwls team about your digital monitoring and
            protection requirements.
          </p>

          {/* CTA Buttons */}

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

export default Solutions;