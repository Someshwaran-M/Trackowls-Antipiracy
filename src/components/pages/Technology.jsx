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

  return (
    <div className="min-h-screen overflow-hidden bg-[#070A07] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">

        {/* Grid */}
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
            right-[-180px]
            top-[-120px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#ADD132]/[0.07]
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-200px]
            left-[-150px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#ADD132]/[0.04]
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
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}
            <div>

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
                Technology
              </div>

              <h1
                className="
                  mt-7
                  text-5xl
                  font-semibold
                  leading-[1.02]
                  tracking-[-0.04em]
                  sm:text-6xl
                  lg:text-7xl
                  xl:text-8xl
                "
              >
                Technology for
                <br />
                <span className="text-[#ADD132]">
                  digital intelligence.
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
                TrackOwls brings monitoring, discovery and
                digital intelligence capabilities together to
                help organizations understand and protect their
                digital environments.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/request-demo"
                  className="
                    group
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
                  Explore With Us

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-black/10
                      transition
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </Link>

                <Link
                  to="/solutions"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.02]
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
                  View Solutions
                  <ArrowRight size={16} />
                </Link>

              </div>

            </div>

            {/* Right Technology Visual */}
            <div className="relative mx-auto w-full max-w-[570px]">

              <div
                className="
                  relative
                  aspect-square
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/[0.07]
                  bg-[#080B08]
                  shadow-[0_0_100px_rgba(173,209,50,0.05)]
                "
              >

                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(173,209,50,0.5) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(173,209,50,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "45px 45px",
                  }}
                />

                {/* Glow */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-72
                    w-72
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#ADD132]/10
                    blur-[90px]
                  "
                />

                {/* Rings */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[72%]
                    w-[72%]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[#ADD132]/10
                  "
                />

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[52%]
                    w-[52%]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[#ADD132]/15
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
                    h-28
                    w-28
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-[#ADD132]/30
                    bg-[#0B100A]
                    text-[#ADD132]
                    shadow-[0_0_60px_rgba(173,209,50,0.15)]
                  "
                >
                  <Shield size={52} strokeWidth={1.2} />
                </div>

                {/* Nodes */}
                {[
                  "left-[18%] top-[23%]",
                  "right-[17%] top-[28%]",
                  "left-[16%] bottom-[25%]",
                  "right-[18%] bottom-[21%]",
                ].map((position, index) => (
                  <div
                    key={index}
                    className={`absolute ${position}`}
                  >
                    <div
                      className="
                        h-3
                        w-3
                        rounded-full
                        bg-[#ADD132]
                        shadow-[0_0_18px_#ADD132]
                      "
                    />
                  </div>
                ))}

                {/* Connection Lines */}
                <div className="absolute left-[20%] top-[26%] h-px w-[30%] rotate-[25deg] bg-[#ADD132]/20" />

                <div className="absolute right-[20%] top-[31%] h-px w-[30%] -rotate-[25deg] bg-[#ADD132]/20" />

                <div className="absolute bottom-[27%] left-[20%] h-px w-[30%] -rotate-[25deg] bg-[#ADD132]/20" />

                <div className="absolute bottom-[24%] right-[20%] h-px w-[30%] rotate-[25deg] bg-[#ADD132]/20" />

                {/* Floating Cards */}
                <div
                  className="
                    absolute
                    left-5
                    top-5
                    rounded-xl
                    border
                    border-white/10
                    bg-[#090D09]/90
                    px-4
                    py-3
                    backdrop-blur-xl
                  "
                >
                  <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600">
                    Intelligence
                  </p>

                  <p className="mt-1 text-xs font-semibold text-[#ADD132]">
                    Active
                  </p>
                </div>

                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    rounded-xl
                    border
                    border-white/10
                    bg-[#090D09]/90
                    px-4
                    py-3
                    backdrop-blur-xl
                  "
                >
                  <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600">
                    Monitoring
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">
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
                Our Technology Approach
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
                Technology designed around
                <span className="text-[#ADD132]">
                  {" "}visibility.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-7">

              <p className="text-base leading-8 text-slate-400 sm:text-lg">
                The digital environment is constantly changing.
                Our technology approach focuses on bringing
                together relevant signals, monitoring capabilities
                and intelligence so organizations can build a
                clearer understanding of their digital presence.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-500 sm:text-lg">
                Rather than treating digital protection as a
                single activity, TrackOwls is designed around
                a connected flow of discovery, detection,
                analysis and protection.
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
              Core Capabilities
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
              The technology behind
              <span className="text-[#ADD132]">
                {" "}digital visibility.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              TrackOwls combines multiple capabilities to
              support monitoring, discovery, intelligence and
              digital protection workflows.
            </p>

          </div>

          <div
            className="
              mt-14
              grid
              gap-5
              md:grid-cols-2
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
                      duration-300
                      group-hover:border-[#ADD132]/30
                      group-hover:bg-[#ADD132]/10
                    "
                  >
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-7 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div
                    className="
                      mt-6
                      h-px
                      w-10
                      bg-[#ADD132]/30
                      transition-all
                      duration-300
                      group-hover:w-20
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

            {/* Content */}
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
                Intelligence Flow
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
                From digital signals
                <br />
                to actionable intelligence.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                A connected technology approach helps
                organizations move from discovering digital
                activity to understanding and responding to
                relevant protection requirements.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Continuous digital visibility",
                  "Structured information",
                  "Centralized intelligence",
                  "Protection-focused workflows",
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

            {/* Flow */}
            <div
              className="
                rounded-[2rem]
                border
                border-white/[0.07]
                bg-[#080B08]
                p-7
                sm:p-10
              "
            >

              <div className="space-y-4">

                {process.map((item, index) => (
                  <div
                    key={item.number}
                    className="relative flex items-center gap-4"
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#ADD132]/20
                        bg-[#ADD132]/[0.05]
                        text-xs
                        font-bold
                        text-[#ADD132]
                      "
                    >
                      {item.number}
                    </div>

                    <div className="min-w-0">

                      <h3 className="text-sm font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        {item.text}
                      </p>

                    </div>

                    {index < process.length - 1 && (
                      <div
                        className="
                          absolute
                          left-6
                          top-12
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

        </div>
      </section>

      {/* =====================================================
          DIGITAL INFRASTRUCTURE
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
                  Digital Environment
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
                  Built for a
                  <span className="text-[#ADD132]">
                    {" "}connected world.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  Digital assets can exist across websites,
                  platforms, applications and online communities.
                  TrackOwls technology is designed around
                  understanding this connected environment.
                </p>

              </div>

              {/* Infrastructure Cards */}
              <div className="grid grid-cols-2 gap-3">

                {[
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
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        min-h-[125px]
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

                      <Icon
                        size={20}
                        className="text-[#ADD132]"
                      />

                      <p className="mt-6 text-sm font-semibold">
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
            Technology & Protection
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
            Build greater visibility
            <br />
            into your digital environment.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Discover how TrackOwls technology can support
            your digital monitoring and protection requirements.
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

export default Technology;