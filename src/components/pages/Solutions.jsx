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

  return (
    <div className="min-h-screen overflow-hidden bg-[#070A07] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">

        {/* Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(173,209,50,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(173,209,50,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#ADD132]/[0.07]
            blur-[140px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[1500px]
            px-5
            pb-20
            pt-20
            sm:px-8
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
                border-[#ADD132]/20
                bg-[#ADD132]/[0.05]
                px-4
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#ADD132]
                sm:text-xs
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#ADD132]" />
              Our Solutions
            </div>

            {/* Heading */}
            <h1
              className="
                mt-7
                text-5xl
                font-semibold
                leading-[1.02]
                tracking-[-0.04em]
                sm:text-6xl
                lg:text-8xl
              "
            >
              Digital protection
              <br />
              <span className="text-[#ADD132]">
                built around visibility.
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-slate-400
                sm:text-lg
                sm:leading-8
              "
            >
              Explore TrackOwls solutions designed to help
              organizations monitor digital environments,
              discover unauthorized activity and protect
              valuable digital assets.
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="py-24 sm:py-28 lg:py-32">

        <div
          className="
            mx-auto
            max-w-[1500px]
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">

            <div className="lg:col-span-5">

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#ADD132]
                "
              >
                One Protection Ecosystem
              </p>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                From discovery to
                <span className="text-[#ADD132]">
                  {" "}protection.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-7">

              <p
                className="
                  text-base
                  leading-8
                  text-slate-400
                  sm:text-lg
                "
              >
                Digital threats can appear across websites,
                platforms, social channels and other online
                environments. TrackOwls brings multiple
                protection capabilities together to help
                organizations gain a clearer picture of their
                digital landscape.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                {[
                  "Discover digital activity",
                  "Monitor online environments",
                  "Identify potential threats",
                  "Protect valuable assets",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#ADD132]"
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
          border-white/[0.06]
          bg-white/[0.015]
          py-24
          sm:py-28
          lg:py-32
        "
      >

        <div
          className="
            mx-auto
            max-w-[1500px]
            px-5
            sm:px-8
            lg:px-12
          "
        >

          {/* Section Heading */}
          <div className="max-w-3xl">

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#ADD132]
              "
            >
              What We Offer
            </p>

            <h2
              className="
                mt-5
                text-3xl
                font-semibold
                tracking-tight
                sm:text-4xl
                lg:text-5xl
              "
            >
              Solutions for the
              <span className="text-[#ADD132]">
                {" "}modern digital environment.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Our capabilities are designed to give organizations
              greater visibility into digital activity and support
              their content and intellectual property protection
              strategies.
            </p>

          </div>

          {/* Cards */}
          <div
            className="
              mt-14
              grid
              gap-5
              md:grid-cols-2
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
                    rounded-3xl
                    border
                    border-white/[0.07]
                    bg-[#080B08]
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#ADD132]/25
                    hover:bg-[#ADD132]/[0.025]
                    sm:p-8
                  "
                >

                  {/* Number */}
                  <span
                    className="
                      absolute
                      right-7
                      top-6
                      text-xs
                      font-semibold
                      tracking-[0.2em]
                      text-white/10
                      transition
                      duration-300
                      group-hover:text-[#ADD132]/30
                    "
                  >
                    {solution.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#ADD132]/15
                      bg-[#ADD132]/[0.05]
                      text-[#ADD132]
                      transition
                      duration-500
                      group-hover:border-[#ADD132]/30
                      group-hover:bg-[#ADD132]/10
                    "
                  >
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 text-xl font-semibold">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {solution.description}
                  </p>

                  {/* Points */}
                  <div className="mt-7 space-y-3">

                    {solution.points.map((point) => (
                      <div
                        key={point}
                        className="
                          flex
                          items-center
                          gap-2.5
                          text-xs
                          text-slate-400
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-[#ADD132]
                          "
                        />

                        {point}
                      </div>
                    ))}

                  </div>

                  {/* Bottom Link */}
                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      text-[#ADD132]
                      opacity-70
                      transition
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    Learn More
                    <ArrowUpRight
                      size={14}
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
      <section className="py-24 sm:py-28 lg:py-32">

        <div
          className="
            mx-auto
            max-w-[1500px]
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Left Visual */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/[0.07]
                bg-[#080B08]
                p-7
                sm:p-10
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-72
                  w-72
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#ADD132]/[0.07]
                  blur-[100px]
                "
              />

              <div className="relative">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                      Protection Flow
                    </p>

                    <p className="mt-2 text-lg font-semibold">
                      Digital Intelligence
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#ADD132]/10
                      text-[#ADD132]
                    "
                  >
                    <Radar size={19} />
                  </div>

                </div>

                <div className="mt-10 space-y-4">

                  {[
                    ["01", "Discover", "Find relevant digital activity"],
                    ["02", "Detect", "Identify potential threats"],
                    ["03", "Analyze", "Understand the digital signal"],
                    ["04", "Protect", "Support appropriate response"],
                  ].map(([number, title, text], index) => (
                    <div
                      key={number}
                      className="relative flex items-center gap-4"
                    >

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-[#ADD132]/15
                          bg-[#ADD132]/[0.05]
                          text-xs
                          font-semibold
                          text-[#ADD132]
                        "
                      >
                        {number}
                      </div>

                      <div>

                        <p className="text-sm font-semibold">
                          {title}
                        </p>

                        <p className="mt-1 text-xs text-slate-600">
                          {text}
                        </p>

                      </div>

                      {index < 3 && (
                        <div
                          className="
                            absolute
                            left-[21px]
                            top-[44px]
                            h-4
                            w-px
                            bg-[#ADD132]/15
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
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#ADD132]
                "
              >
                How It Works
              </p>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-semibold
                  leading-tight
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Turn digital signals
                <span className="text-[#ADD132]">
                  {" "}into intelligence.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-base">
                TrackOwls focuses on the flow from digital
                discovery to actionable intelligence, helping
                organizations understand what is happening
                around their valuable digital assets.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Continuous digital visibility",
                  "Structured intelligence",
                  "Centralized monitoring",
                  "Investigation support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#ADD132]"
                    />

                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

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
          border-white/[0.06]
          bg-white/[0.015]
          py-24
          sm:py-28
          lg:py-32
        "
      >

        <div
          className="
            mx-auto
            max-w-[1500px]
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-[#ADD132]/10
              bg-[#ADD132]/[0.025]
              p-8
              sm:p-12
              lg:p-16
            "
          >

            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-96
                w-96
                rounded-full
                bg-[#ADD132]/10
                blur-[120px]
              "
            />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#ADD132]/20
                    bg-[#ADD132]/10
                    text-[#ADD132]
                  "
                >
                  <Globe size={25} />
                </div>

                <p
                  className="
                    mt-7
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#ADD132]
                  "
                >
                  Digital Visibility
                </p>

                <h2
                  className="
                    mt-4
                    text-3xl
                    font-semibold
                    leading-tight
                    sm:text-4xl
                  "
                >
                  Understand your
                  <span className="text-[#ADD132]">
                    {" "}online footprint.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  Digital content can move across multiple
                  channels and platforms. Better visibility
                  helps organizations understand where their
                  content and brand appear online.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-3">

                {[
                  "Web",
                  "Platforms",
                  "Social",
                  "Digital Channels",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      min-h-[110px]
                      items-end
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#080B08]
                      p-5
                      transition
                      duration-300
                      hover:border-[#ADD132]/20
                    "
                  >
                    <div>

                      <div className="h-2 w-2 rounded-full bg-[#ADD132]" />

                      <p className="mt-4 text-sm font-semibold">
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
      <section className="py-24 sm:py-28 lg:py-32">

        <div
          className="
            mx-auto
            max-w-4xl
            px-5
            text-center
            sm:px-8
          "
        >

          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-[#ADD132]/20
              bg-[#ADD132]/10
              text-[#ADD132]
            "
          >
            <Shield size={26} />
          </div>

          <p
            className="
              mt-7
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#ADD132]
            "
          >
            Protect What Matters
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-semibold
              tracking-tight
              sm:text-4xl
              lg:text-5xl
            "
          >
            Build stronger visibility
            <br />
            around your digital assets.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Talk to the TrackOwls team about your digital
            monitoring and protection requirements.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/request-demo"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#ADD132]
                px-7
                py-4
                text-sm
                font-bold
                text-black
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#C7EB45]
                hover:shadow-xl
                hover:shadow-[#ADD132]/20
              "
            >
              Request a Demo
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/10
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:border-[#ADD132]/30
                hover:text-[#ADD132]
              "
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Solutions;