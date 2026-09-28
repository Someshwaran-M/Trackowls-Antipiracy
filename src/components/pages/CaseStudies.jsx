import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Radar,
  ScanSearch,
  Globe,
  Film,
  ShoppingBag,
  Gamepad2,
  Music,
  CheckCircle2,
  Activity,
} from "lucide-react";

function CaseStudies() {
  const caseStudies = [
    {
      number: "01",
      category: "Media & Entertainment",
      title: "Protecting premium digital content",
      description:
        "A digital content ecosystem needs continuous visibility across online platforms where unauthorized copies, mirrors and redistributed content can appear.",
      icon: Film,
      metrics: [
        "Content discovery",
        "Continuous monitoring",
        "Threat identification",
      ],
    },
    {
      number: "02",
      category: "Gaming",
      title: "Monitoring digital game assets",
      description:
        "TrackOwls helps digital entertainment businesses improve visibility around game-related assets, unauthorized distribution channels and emerging online threats.",
      icon: Gamepad2,
      metrics: [
        "Asset monitoring",
        "Digital intelligence",
        "Risk visibility",
      ],
    },
    {
      number: "03",
      category: "Brands & E-Commerce",
      title: "Improving brand protection visibility",
      description:
        "Online brands can face unauthorized use of brand assets, product content and digital properties across multiple online environments.",
      icon: ShoppingBag,
      metrics: [
        "Brand monitoring",
        "Content discovery",
        "Digital investigation",
      ],
    },
    {
      number: "04",
      category: "Music & Publishing",
      title: "Finding unauthorized digital distribution",
      description:
        "Digital media businesses need a clear view of where their intellectual property appears online and where potential misuse may occur.",
      icon: Music,
      metrics: [
        "IP discovery",
        "Online monitoring",
        "Evidence visibility",
      ],
    },
  ];

  const capabilities = [
    {
      icon: Radar,
      title: "Discover",
      text: "Identify relevant digital content, assets and online environments.",
    },
    {
      icon: ScanSearch,
      title: "Detect",
      text: "Surface potential unauthorized use and suspicious digital activity.",
    },
    {
      icon: Activity,
      title: "Analyze",
      text: "Organize intelligence to understand the nature and context of a threat.",
    },
    {
      icon: Shield,
      title: "Protect",
      text: "Turn intelligence into structured protection workflows.",
    },
  ];

  return (
    <div
      className="
        min-h-screen
        overflow-hidden
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
          border-[#172117]/10
          px-4
          pb-14
          pt-14
          dark:border-white/[0.06]
          sm:px-7
          sm:pb-20
          sm:pt-20
          md:px-10
          md:pb-24
          md:pt-24
          lg:px-12
          lg:pb-28
          lg:pt-28
        "
      >
        {/* Background Grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            dark:opacity-[0.07]
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
            left-1/2
            top-0
            h-[300px]
            w-[300px]
            -translate-x-1/2
            rounded-full
            bg-[#ADD132]/10
            blur-[100px]
            dark:bg-[#ADD132]/7
            sm:h-[380px]
            sm:w-[380px]
            sm:blur-[120px]
            md:h-[460px]
            md:w-[460px]
            lg:h-[520px]
            lg:w-[520px]
            lg:blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-100px]
            right-[-80px]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#ADD132]/6
            blur-[100px]
            dark:bg-[#ADD132]/4
            sm:h-[350px]
            sm:w-[350px]
          "
        />

        <div className="relative mx-auto max-w-[1500px]">
          <div
            className="
              grid
              items-center
              gap-10
              lg:grid-cols-[1.05fr_0.95fr]
              lg:gap-12
            "
          >
            {/* LEFT */}

            <div>
              {/* Label */}

              <div
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#6F8D08]/20
                  bg-[#ADD132]/10
                  px-3
                  py-1.5
                  dark:border-[#ADD132]/25
                  dark:bg-[#ADD132]/5
                  sm:mb-7
                  sm:gap-3
                  sm:px-4
                  sm:py-2
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132] shadow-[0_0_10px_#ADD132] sm:h-2 sm:w-2" />

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#6F8D08]
                    dark:text-[#C7EB45]
                    sm:text-[9px]
                    md:text-[10px]
                    md:tracking-[0.22em]
                  "
                >
                  Case Studies
                </span>
              </div>

              {/* Heading */}

              <h1
                className="
                  max-w-4xl
                  text-[42px]
                  font-black
                  leading-[0.96]
                  tracking-[-0.055em]
                  text-[#152019]
                  dark:text-white
                  sm:text-[54px]
                  md:text-[66px]
                  lg:text-[76px]
                  xl:text-[84px]
                "
              >
                Turning digital
                <span className="block text-[#789900] dark:text-[#ADD132]">
                  intelligence
                </span>
                into protection.
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
                Explore how TrackOwls approaches digital monitoring,
                intellectual property visibility and anti-piracy protection
                across modern digital environments.
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
                  to="/contact"
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#ADD132]
                    px-5
                    py-3
                    text-[10px]
                    font-bold
                    text-[#101800]
                    shadow-[0_12px_35px_rgba(110,140,20,0.15)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#C7EB45]
                    hover:shadow-[0_0_35px_rgba(173,209,50,0.2)]
                    sm:w-auto
                    sm:px-6
                    sm:py-3.5
                    sm:text-xs
                  "
                >
                  Discuss Your Challenge

                  <ArrowUpRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      sm:h-[17px]
                      sm:w-[17px]
                    "
                  />
                </Link>

                <Link
                  to="/solutions"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-[#273326]/15
                    bg-white/50
                    px-5
                    py-3
                    text-[10px]
                    font-medium
                    text-[#364136]
                    backdrop-blur-xl
                    transition
                    hover:border-[#ADD132]/40
                    hover:bg-white
                    hover:text-[#6F8D08]
                    dark:border-white/10
                    dark:bg-white/[0.02]
                    dark:text-white
                    dark:hover:bg-white/[0.03]
                    dark:hover:text-[#ADD132]
                    sm:w-auto
                    sm:px-6
                    sm:py-3.5
                    sm:text-xs
                  "
                >
                  Explore Solutions
                  <ArrowRight size={14} className="sm:h-[17px] sm:w-[17px]" />
                </Link>
              </div>
            </div>

            {/* RIGHT VISUAL */}

            <div className="relative">
              <div
                className="
                  absolute
                  inset-0
                  rounded-[24px]
                  bg-[#ADD132]/8
                  blur-3xl
                  dark:bg-[#ADD132]/10
                  sm:rounded-[2rem]
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#273326]/10
                  bg-white/75
                  p-4
                  shadow-[0_20px_60px_rgba(30,50,20,0.07)]
                  backdrop-blur-xl
                  dark:border-white/10
                  dark:bg-[#0B100B]/90
                  dark:shadow-2xl
                  sm:rounded-[2rem]
                  sm:p-6
                  md:p-7
                "
              >
                {/* Panel Header */}

                <div className="mb-5 flex items-center justify-between gap-4 sm:mb-7 md:mb-8">
                  <div>
                    <p
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.18em]
                        text-[#778176]
                        dark:text-slate-500
                        sm:text-[9px]
                        sm:tracking-[0.2em]
                        md:text-xs
                      "
                    >
                      Protection Intelligence
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-black
                        text-[#172017]
                        dark:text-white
                        sm:mt-2
                        sm:text-base
                        md:text-lg
                      "
                    >
                      Digital Threat View
                    </p>
                  </div>

                  <div
                    className="
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
                      dark:border-[#ADD132]/20
                      sm:h-10
                      sm:w-10
                      md:h-11
                      md:w-11
                    "
                  >
                    <Shield
                      className="text-[#6F8D08] dark:text-[#ADD132]"
                      size={17}
                    />
                  </div>
                </div>

                {/* Radar */}

                <div
                  className="
                    relative
                    mx-auto
                    flex
                    aspect-square
                    w-full
                    max-w-[250px]
                    items-center
                    justify-center
                    sm:max-w-[290px]
                    md:max-w-[330px]
                  "
                >
                  <div className="absolute inset-[7%] rounded-full border border-[#6F8D08]/10 dark:border-[#ADD132]/10" />

                  <div className="absolute inset-[18%] rounded-full border border-[#6F8D08]/15 dark:border-[#ADD132]/15" />

                  <div className="absolute inset-[30%] rounded-full border border-[#6F8D08]/20 dark:border-[#ADD132]/20" />

                  <div className="absolute h-px w-full bg-[#6F8D08]/10 dark:bg-[#ADD132]/10" />

                  <div className="absolute h-full w-px bg-[#6F8D08]/10 dark:bg-[#ADD132]/10" />

                  {/* Radar Ring */}

                  <div className="absolute h-[58%] w-[58%] rounded-full border border-[#6F8D08]/25 dark:border-[#ADD132]/30">
                    <div
                      className="
                        absolute
                        left-1/2
                        top-0
                        h-1/2
                        w-px
                        origin-bottom
                        bg-gradient-to-t
                        from-transparent
                        to-[#6F8D08]
                        dark:to-[#ADD132]
                      "
                    />
                  </div>

                  {/* Core */}

                  <div
                    className="
                      relative
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#6F8D08]/30
                      bg-[#ADD132]/10
                      shadow-[0_0_35px_rgba(173,209,50,0.10)]
                      dark:border-[#ADD132]/30
                      sm:h-20
                      sm:w-20
                      md:h-24
                      md:w-24
                      md:rounded-3xl
                    "
                  >
                    <Shield
                      size={28}
                      className="text-[#6F8D08] dark:text-[#ADD132] sm:h-8 sm:w-8 md:h-10 md:w-10"
                    />
                  </div>

                  {/* Signals */}

                  <span
                    className="
                      absolute
                      left-[18%]
                      top-[28%]
                      h-2
                      w-2
                      rounded-full
                      bg-[#7D9F00]
                      shadow-[0_0_12px_#7D9F00]
                      dark:bg-[#ADD132]
                      dark:shadow-[0_0_14px_#ADD132]
                    "
                  />

                  <span
                    className="
                      absolute
                      right-[18%]
                      top-[38%]
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#7D9F00]
                      shadow-[0_0_10px_#7D9F00]
                      dark:bg-[#ADD132]
                      dark:shadow-[0_0_12px_#ADD132]
                    "
                  />

                  <span
                    className="
                      absolute
                      bottom-[23%]
                      left-[30%]
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#7D9F00]
                      shadow-[0_0_10px_#7D9F00]
                      dark:bg-[#ADD132]
                      dark:shadow-[0_0_12px_#ADD132]
                    "
                  />

                  <span
                    className="
                      absolute
                      bottom-[30%]
                      right-[27%]
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#7D9F00]
                      shadow-[0_0_10px_#7D9F00]
                      dark:bg-[#ADD132]
                      dark:shadow-[0_0_12px_#ADD132]
                    "
                  />
                </div>

                {/* Visual Metrics */}

                <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-7 sm:gap-3">
                  <VisualMetric value="24/7" label="Monitoring" />
                  <VisualMetric value="Global" label="Visibility" />
                  <VisualMetric value="Smart" label="Intelligence" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="
          border-y
          border-[#172117]/10
          bg-[#EEF3E9]
          px-4
          py-14
          dark:border-white/[0.06]
          dark:bg-white/[0.012]
          sm:px-7
          sm:py-20
          md:px-10
          md:py-24
          lg:px-12
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            gap-8
            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-12
          "
        >
          <div>
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#6F8D08]
                dark:text-[#ADD132]
                sm:text-[9px]
                md:text-sm
              "
            >
              Our Approach
            </p>

            <h2
              className="
                mt-3
                text-[30px]
                font-black
                leading-[1.04]
                tracking-[-0.045em]
                text-[#152019]
                dark:text-white
                sm:mt-4
                sm:text-4xl
                md:text-5xl
              "
            >
              Every digital challenge starts with visibility.
            </h2>
          </div>

          <div className="lg:pl-8">
            <p
              className="
                text-[12px]
                leading-6
                text-[#687368]
                dark:text-slate-400
                sm:text-[14px]
                sm:leading-7
                md:text-[15px]
                md:leading-8
              "
            >
              Digital content can move across platforms, websites, services
              and communities at extraordinary speed. TrackOwls focuses on
              building visibility into these environments so organizations
              can understand where their digital assets appear and identify
              potential threats.
            </p>

            <p
              className="
                mt-4
                text-[12px]
                leading-6
                text-[#687368]
                dark:text-slate-400
                sm:mt-6
                sm:text-[14px]
                sm:leading-7
                md:text-[15px]
                md:leading-8
              "
            >
              The examples below represent the types of digital protection
              challenges TrackOwls is designed to address.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CASE STUDIES
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
          {/* Section Header */}

          <div
            className="
              mb-9
              flex
              flex-col
              justify-between
              gap-5
              sm:mb-12
              md:mb-14
              md:flex-row
              md:items-end
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-[9px]
                  md:text-sm
                "
              >
                Digital Protection Scenarios
              </p>

              <h2
                className="
                  mt-3
                  max-w-3xl
                  text-[30px]
                  font-black
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#152019]
                  dark:text-white
                  sm:mt-4
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Built for real-world digital environments.
              </h2>
            </div>

            <p
              className="
                max-w-md
                text-[10px]
                leading-5
                text-[#788278]
                dark:text-slate-500
                sm:text-xs
                sm:leading-6
                md:text-sm
                md:leading-7
              "
            >
              A closer look at the protection challenges faced by content
              owners, brands and digital businesses.
            </p>
          </div>

          {/* Cards */}

          <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
            {caseStudies.map((study) => {
              const Icon = study.icon;

              return (
                <article
                  key={study.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-[#273326]/10
                    bg-white/70
                    p-5
                    shadow-[0_15px_45px_rgba(30,50,20,0.05)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#ADD132]/35
                    hover:shadow-[0_20px_55px_rgba(80,110,20,0.08)]
                    dark:border-white/[0.08]
                    dark:bg-[#0A0E0A]
                    dark:shadow-none
                    dark:hover:border-[#ADD132]/25
                    dark:hover:bg-[#0C110C]
                    sm:rounded-[24px]
                    sm:p-7
                    md:rounded-[2rem]
                    md:p-8
                    lg:p-9
                  "
                >
                  {/* Glow */}

                  <div
                    className="
                      absolute
                      right-[-20px]
                      top-[-20px]
                      h-36
                      w-36
                      rounded-full
                      bg-[#ADD132]/5
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-[#ADD132]/10
                      dark:bg-[#ADD132]/5
                    "
                  />

                  <div className="relative">
                    {/* Top */}

                    <div className="flex items-start justify-between gap-4">
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
                          dark:border-[#ADD132]/20
                          sm:h-12
                          sm:w-12
                          sm:rounded-2xl
                          md:h-14
                          md:w-14
                        "
                      >
                        <Icon
                          size={20}
                          className="text-[#6F8D08] dark:text-[#ADD132] md:h-[25px] md:w-[25px]"
                        />
                      </div>

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          tracking-[0.14em]
                          text-[#A0AAA0]
                          dark:text-slate-600
                          sm:text-xs
                          sm:tracking-[0.15em]
                        "
                      >
                        {study.number}
                      </span>
                    </div>

                    {/* Category */}

                    <p
                      className="
                        mt-6
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#6F8D08]
                        dark:text-[#ADD132]
                        sm:mt-8
                        sm:text-[8px]
                        sm:tracking-[0.2em]
                        md:mt-9
                        md:text-xs
                      "
                    >
                      {study.category}
                    </p>

                    {/* Title */}

                    <h3
                      className="
                        mt-2
                        text-[21px]
                        font-black
                        leading-tight
                        tracking-[-0.025em]
                        text-[#172017]
                        dark:text-white
                        sm:mt-3
                        sm:text-2xl
                        md:text-3xl
                      "
                    >
                      {study.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-4
                        text-[11px]
                        leading-6
                        text-[#697369]
                        dark:text-slate-400
                        sm:mt-5
                        sm:text-xs
                        sm:leading-7
                        md:text-sm
                      "
                    >
                      {study.description}
                    </p>

                    {/* Metrics */}

                    <div
                      className="
                        mt-6
                        border-t
                        border-[#273326]/10
                        pt-5
                        dark:border-white/[0.07]
                        sm:mt-8
                        sm:pt-6
                      "
                    >
                      <p
                        className="
                          mb-3
                          text-[7px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-[#879087]
                          dark:text-slate-600
                          sm:mb-4
                          sm:text-xs
                          sm:tracking-[0.18em]
                        "
                      >
                        Protection Focus
                      </p>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {study.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="
                              inline-flex
                              items-center
                              gap-1.5
                              rounded-full
                              border
                              border-[#273326]/10
                              bg-[#F3F7EF]
                              px-2.5
                              py-1.5
                              text-[7px]
                              text-[#536053]
                              dark:border-white/[0.07]
                              dark:bg-white/[0.025]
                              dark:text-slate-300
                              sm:gap-2
                              sm:px-3
                              sm:py-2
                              sm:text-xs
                            "
                          >
                            <CheckCircle2
                              size={10}
                              className="text-[#6F8D08] dark:text-[#ADD132] sm:h-[13px] sm:w-[13px]"
                            />
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link */}

                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        gap-2
                        text-[9px]
                        font-semibold
                        text-[#526052]
                        transition-colors
                        group-hover:text-[#6F8D08]
                        dark:text-white
                        dark:group-hover:text-[#ADD132]
                        sm:mt-7
                        sm:text-sm
                      "
                    >
                      Explore protection approach

                      <ArrowUpRight
                        size={13}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          sm:h-[17px]
                          sm:w-[17px]
                        "
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKFLOW
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-y
          border-[#172117]/10
          bg-[#EDF3E8]
          px-4
          py-14
          dark:border-white/[0.06]
          dark:bg-[#080C08]
          sm:px-7
          sm:py-20
          md:px-10
          md:py-24
          lg:px-12
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[280px]
            w-[400px]
            -translate-x-1/2
            rounded-full
            bg-[#ADD132]/6
            blur-[100px]
            dark:bg-[#ADD132]/5
            sm:h-[350px]
            sm:w-[500px]
            sm:blur-[120px]
          "
        />

        <div className="relative mx-auto max-w-[1500px]">
          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#6F8D08]
                dark:text-[#ADD132]
                sm:text-[9px]
                md:text-sm
              "
            >
              Protection Intelligence
            </p>

            <h2
              className="
                mt-3
                text-[30px]
                font-black
                leading-[1.04]
                tracking-[-0.045em]
                text-[#152019]
                dark:text-white
                sm:mt-4
                sm:text-4xl
                md:text-5xl
              "
            >
              From discovery to protection.
            </h2>

            <p
              className="
                mt-4
                text-[11px]
                leading-6
                text-[#687368]
                dark:text-slate-400
                sm:mt-6
                sm:text-sm
                sm:leading-7
              "
            >
              TrackOwls brings digital intelligence into a structured
              protection workflow.
            </p>
          </div>

          {/* Workflow */}

          <div className="relative mt-9 sm:mt-12 md:mt-16">
            {/* Connecting Line */}

            <div
              className="
                absolute
                left-[12%]
                right-[12%]
                top-10
                hidden
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#ADD132]/30
                to-transparent
                lg:block
              "
            />

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      relative
                      rounded-[18px]
                      border
                      border-[#273326]/10
                      bg-white/65
                      p-5
                      text-center
                      shadow-[0_12px_35px_rgba(30,50,20,0.04)]
                      backdrop-blur-xl
                      dark:border-white/[0.07]
                      dark:bg-[#0A0E0A]
                      dark:shadow-none
                      sm:rounded-3xl
                      sm:p-6
                      md:p-7
                    "
                  >
                    <div
                      className="
                        relative
                        mx-auto
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#6F8D08]/20
                        bg-[#ADD132]/10
                        dark:border-[#ADD132]/20
                        sm:h-16
                        sm:w-16
                        md:h-20
                        md:w-20
                      "
                    >
                      <Icon
                        size={21}
                        className="text-[#6F8D08] dark:text-[#ADD132] sm:h-6 sm:w-6 md:h-7 md:w-7"
                      />

                      <span
                        className="
                          absolute
                          -right-1
                          -top-1
                          flex
                          h-5
                          w-5
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#F7FAF4]
                          bg-[#ADD132]
                          text-[7px]
                          font-bold
                          text-black
                          dark:border-[#070A07]
                          sm:h-6
                          sm:w-6
                          sm:text-[10px]
                        "
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <h3
                      className="
                        mt-5
                        text-base
                        font-black
                        text-[#172017]
                        dark:text-white
                        sm:mt-6
                        sm:text-lg
                        md:mt-7
                        md:text-xl
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[9px]
                        leading-5
                        text-[#697369]
                        dark:text-slate-500
                        sm:mt-3
                        sm:text-[11px]
                        sm:leading-6
                        md:text-sm
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPACT / GLOBAL VISIBILITY
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
              overflow-hidden
              rounded-[22px]
              border
              border-[#6F8D08]/15
              bg-[#EFF5E9]
              dark:border-[#ADD132]/15
              dark:bg-gradient-to-br
              dark:from-[#0D130D]
              dark:to-[#080B08]
              sm:rounded-[2rem]
            "
          >
            <div className="grid lg:grid-cols-[1fr_0.8fr]">
              {/* Content */}

              <div className="p-5 sm:p-8 md:p-12 lg:p-16">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#ADD132]/10
                    text-[#6F8D08]
                    dark:text-[#ADD132]
                    sm:h-12
                    sm:w-12
                    sm:rounded-2xl
                    md:h-14
                    md:w-14
                  "
                >
                  <Globe size={21} className="md:h-[27px] md:w-[27px]" />
                </div>

                <h2
                  className="
                    mt-5
                    max-w-2xl
                    text-[30px]
                    font-black
                    leading-[1.04]
                    tracking-[-0.045em]
                    text-[#152019]
                    dark:text-white
                    sm:mt-7
                    sm:text-4xl
                    md:mt-8
                    md:text-5xl
                  "
                >
                  Visibility across the modern digital landscape.
                </h2>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-[11px]
                    leading-6
                    text-[#687368]
                    dark:text-slate-400
                    sm:mt-6
                    sm:text-sm
                    sm:leading-7
                    md:text-base
                    md:leading-8
                  "
                >
                  From content platforms and social environments to websites
                  and digital marketplaces, protection requires an
                  understanding of where digital assets can appear.
                </p>

                <div className="mt-6 sm:mt-9">
                  <Link
                    to="/technology"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-[10px]
                      font-semibold
                      text-[#6F8D08]
                      dark:text-[#ADD132]
                      sm:text-sm
                    "
                  >
                    Explore our technology

                    <ArrowRight
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        sm:h-[18px]
                        sm:w-[18px]
                      "
                    />
                  </Link>
                </div>
              </div>

              {/* Visual */}

              <div
                className="
                  relative
                  min-h-[270px]
                  overflow-hidden
                  border-t
                  border-[#172117]/10
                  dark:border-white/[0.06]
                  sm:min-h-[320px]
                  md:min-h-[350px]
                  lg:border-l
                  lg:border-t-0
                "
              >
                <div className="absolute inset-0 opacity-30">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(173,209,50,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.2) 1px, transparent 1px)",
                      backgroundSize: "36px 36px",
                    }}
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
                      relative
                      h-48
                      w-48
                      rounded-full
                      border
                      border-[#6F8D08]/15
                      dark:border-[#ADD132]/15
                      sm:h-56
                      sm:w-56
                      md:h-64
                      md:w-64
                    "
                  >
                    <div className="absolute inset-7 rounded-full border border-[#6F8D08]/15 dark:border-[#ADD132]/15 sm:inset-8" />

                    <div className="absolute inset-14 rounded-full border border-[#6F8D08]/20 dark:border-[#ADD132]/20 sm:inset-16" />

                    <div className="absolute left-1/2 top-1/2 h-px w-[115%] -translate-x-1/2 bg-[#6F8D08]/20 dark:bg-[#ADD132]/20" />

                    <div className="absolute left-1/2 top-1/2 h-[115%] w-px -translate-y-1/2 bg-[#6F8D08]/20 dark:bg-[#ADD132]/20" />

                    {/* Signals */}

                    <div className="absolute left-[17%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#7D9F00] shadow-[0_0_16px_#7D9F00] dark:bg-[#ADD132] dark:shadow-[0_0_20px_#ADD132]" />

                    <div className="absolute right-[17%] top-[34%] h-2 w-2 rounded-full bg-[#7D9F00] shadow-[0_0_13px_#7D9F00] dark:bg-[#ADD132] dark:shadow-[0_0_15px_#ADD132]" />

                    <div className="absolute bottom-[20%] left-[28%] h-2 w-2 rounded-full bg-[#7D9F00] shadow-[0_0_13px_#7D9F00] dark:bg-[#ADD132] dark:shadow-[0_0_15px_#ADD132]" />

                    {/* Core */}

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-[#6F8D08]/25
                          bg-[#ADD132]/10
                          shadow-[0_0_35px_rgba(173,209,50,0.10)]
                          dark:border-[#ADD132]/30
                          sm:h-18
                          sm:w-18
                          sm:rounded-2xl
                          md:h-20
                          md:w-20
                        "
                      >
                        <Radar
                          size={26}
                          className="text-[#6F8D08] dark:text-[#ADD132] md:h-[34px] md:w-[34px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-4 pb-14 sm:px-7 sm:pb-20 md:px-10 md:pb-24 lg:px-12">
        <div
          className="
            relative
            mx-auto
            max-w-[1500px]
            overflow-hidden
            rounded-[22px]
            border
            border-[#ADD132]/20
            bg-[#ADD132]
            px-5
            py-10
            text-black
            sm:rounded-[2rem]
            sm:px-8
            sm:py-12
            md:px-12
            md:py-14
            lg:px-16
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-32
              h-64
              w-64
              rounded-full
              bg-white/20
              blur-3xl
              sm:h-72
              sm:w-72
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              justify-between
              gap-7
              lg:flex-row
              lg:items-center
              lg:gap-10
            "
          >
            <div className="max-w-3xl">
              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-black/60
                  sm:text-[9px]
                  sm:tracking-[0.2em]
                  md:text-sm
                "
              >
                Start a conversation
              </p>

              <h2
                className="
                  mt-3
                  text-[30px]
                  font-black
                  leading-[1.04]
                  tracking-[-0.045em]
                  sm:mt-4
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Have a digital protection challenge?
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-[11px]
                  leading-6
                  text-black/65
                  sm:mt-5
                  sm:text-sm
                  sm:leading-7
                  md:text-base
                "
              >
                Tell us about your content, brand or intellectual property
                challenge and explore how TrackOwls can help.
              </p>
            </div>

            <Link
              to="/contact"
              className="
                group
                inline-flex
                w-full
                shrink-0
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-black
                px-6
                py-3.5
                text-[10px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#101410]
                sm:w-auto
                sm:px-7
                sm:py-4
                sm:text-sm
              "
            >
              Contact TrackOwls

              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  sm:h-[19px]
                  sm:w-[19px]
                "
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function VisualMetric({ value, label }) {
  return (
    <div
      className="
        rounded-lg
        border
        border-[#273326]/10
        bg-[#F3F7EF]
        p-2.5
        dark:border-white/5
        dark:bg-white/[0.025]
        sm:rounded-xl
        sm:p-3
        md:p-4
      "
    >
      <p
        className="
          text-sm
          font-black
          text-[#6F8D08]
          dark:text-[#ADD132]
          sm:text-base
          md:text-xl
        "
      >
        {value}
      </p>

      <p
        className="
          mt-0.5
          text-[6px]
          text-[#7B857B]
          dark:text-slate-500
          sm:text-[8px]
          md:text-xs
        "
      >
        {label}
      </p>
    </div>
  );
}

export default CaseStudies;