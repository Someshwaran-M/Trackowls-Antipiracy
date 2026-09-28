import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Film,
  Gamepad2,
  GraduationCap,
  ShoppingBag,
  Building2,
  Newspaper,
  Music,
  Globe,
  ScanSearch,
  CheckCircle2,
} from "lucide-react";

function Industries() {
  const industries = [
    {
      icon: Film,
      title: "Media & Entertainment",
      description:
        "Support the protection of films, series, video content and other digital entertainment assets from unauthorized distribution.",
      tags: ["Content Protection", "Piracy Monitoring", "Digital Discovery"],
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description:
        "Improve visibility around gaming content, digital releases, assets and unauthorized online distribution.",
      tags: ["Game Content", "Asset Monitoring", "Threat Detection"],
    },
    {
      icon: Music,
      title: "Music",
      description:
        "Monitor digital environments for unauthorized availability and distribution of music and related digital assets.",
      tags: ["Music Monitoring", "Content Discovery", "IP Protection"],
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce & Brands",
      description:
        "Help brands identify unauthorized digital activity and gain visibility into their online presence.",
      tags: ["Brand Protection", "Online Monitoring", "IP Visibility"],
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Support educational organizations and content owners in monitoring the digital distribution of valuable learning content.",
      tags: ["Content Monitoring", "IP Protection", "Digital Visibility"],
    },
    {
      icon: Newspaper,
      title: "Publishing & News",
      description:
        "Help publishers and media organizations understand how their digital content is distributed and reused online.",
      tags: ["Content Discovery", "Digital Monitoring", "IP Protection"],
    },
    {
      icon: Building2,
      title: "Enterprise",
      description:
        "Provide organizations with digital intelligence to understand and monitor activity surrounding their valuable assets.",
      tags: ["Digital Intelligence", "Monitoring", "Threat Visibility"],
    },
    {
      icon: Globe,
      title: "Digital Platforms",
      description:
        "Support digital businesses with broader visibility into online activity, content usage and potential threats.",
      tags: ["Platform Monitoring", "Threat Detection", "Digital Intelligence"],
    },
  ];

  const intelligenceData = [
    ["CONTENT", "Digital Assets", "84%"],
    ["BRAND", "Online Presence", "72%"],
    ["IP", "Protected Assets", "91%"],
    ["THREATS", "Detection Visibility", "78%"],
  ];

  const intelligencePoints = [
    "Industry-focused monitoring",
    "Digital asset visibility",
    "Content discovery",
    "Threat intelligence",
  ];

  const ecosystemItems = [
    "Content",
    "Brands",
    "Intellectual Property",
    "Digital Assets",
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
          border-[#1C281C]/10
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
            dark:opacity-[0.06]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(173,209,50,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Left Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            top-10
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#ADD132]/6
            blur-[100px]
            dark:bg-[#ADD132]/7
            sm:h-[400px]
            sm:w-[400px]
            sm:blur-[120px]
            lg:h-[500px]
            lg:w-[500px]
            lg:blur-[140px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            bottom-0
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#ADD132]/5
            blur-[100px]
            dark:bg-[#ADD132]/6
            sm:h-[350px]
            sm:w-[350px]
            sm:blur-[120px]
            lg:h-[450px]
            lg:w-[450px]
            lg:blur-[130px]
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
            pt-14
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
          <div className="max-w-5xl">
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
                sm:gap-2.5
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
                  shadow-[0_0_10px_#ADD132]
                  sm:h-2
                  sm:w-2
                "
              />

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-[10px]
                  sm:tracking-[0.24em]
                  md:text-xs
                "
              >
                Industries We Protect
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-5
                max-w-5xl
                text-[42px]
                font-black
                leading-[0.97]
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
              Protection for
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                every digital industry.
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
              Digital content and intellectual property are valuable across
              every industry. TrackOwls helps organizations gain visibility
              into online activity and protect the digital assets that matter
              to them.
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
                  hover:shadow-[0_0_35px_rgba(173,209,50,0.18)]
                  sm:w-auto
                  sm:px-6
                  sm:py-3.5
                  sm:text-xs
                "
              >
                Request a Demo

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
                  bg-white/50
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
                Contact Us
                <ArrowRight size={14} className="sm:h-[17px] sm:w-[17px]" />
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
            {/* Left */}

            <div className="lg:col-span-5">
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-[9px]
                  md:text-xs
                "
              >
                Digital Protection Across Industries
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
                  sm:mt-5
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Every industry has
                <span className="text-[#789900] dark:text-[#ADD132]">
                  {" "}
                  digital assets.
                </span>
              </h2>
            </div>

            {/* Right */}

            <div className="lg:col-span-7">
              <p
                className="
                  text-[12px]
                  leading-6
                  text-[#687368]
                  dark:text-slate-400
                  sm:text-[14px]
                  sm:leading-7
                  md:text-base
                  md:leading-8
                "
              >
                From entertainment and gaming to education, publishing and
                enterprise, organizations are increasingly dependent on
                digital content and intellectual property.
              </p>

              <p
                className="
                  mt-4
                  text-[12px]
                  leading-6
                  text-[#7B857B]
                  dark:text-slate-500
                  sm:mt-6
                  sm:text-[14px]
                  sm:leading-7
                  md:text-base
                  md:leading-8
                "
              >
                TrackOwls provides monitoring and intelligence capabilities
                that can be adapted to different digital environments and
                organizational needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES GRID
      ===================================================== */}

      <section
        className="
          border-y
          border-[#1C281C]/10
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
        <div className="mx-auto max-w-[1500px]">
          {/* Header */}

          <div className="max-w-3xl">
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#6F8D08]
                dark:text-[#ADD132]
                sm:text-[9px]
                md:text-xs
              "
            >
              Industry Solutions
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
                sm:mt-5
                sm:text-4xl
                md:text-5xl
              "
            >
              Built around the way
              <span className="text-[#789900] dark:text-[#ADD132]">
                {" "}
                your industry works.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                text-[10px]
                leading-5
                text-[#788278]
                dark:text-slate-500
                sm:mt-5
                sm:text-xs
                sm:leading-6
                md:text-sm
                md:leading-7
              "
            >
              Explore how digital monitoring, content discovery and
              protection capabilities can support different types of
              organizations.
            </p>
          </div>

          {/* Cards */}

          <div
            className="
              mt-8
              grid
              gap-3
              sm:mt-10
              sm:grid-cols-2
              sm:gap-4
              lg:mt-12
              lg:grid-cols-4
              lg:gap-5
            "
          >
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-[#263226]/10
                    bg-white/70
                    p-4
                    shadow-[0_12px_35px_rgba(30,50,20,0.04)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#ADD132]/30
                    hover:bg-white
                    dark:border-white/[0.07]
                    dark:bg-[#080B08]
                    dark:shadow-none
                    dark:hover:border-[#ADD132]/25
                    dark:hover:bg-[#0B100B]
                    sm:rounded-2xl
                    sm:p-6
                    md:p-7
                  "
                >
                  {/* Top Line */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-px
                      w-0
                      bg-[#ADD132]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

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
                      border-[#6F8D08]/15
                      bg-[#ADD132]/10
                      text-[#6F8D08]
                      transition
                      duration-500
                      group-hover:border-[#ADD132]/30
                      group-hover:bg-[#ADD132]/15
                      dark:border-[#ADD132]/15
                      dark:bg-[#ADD132]/5
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
                      font-black
                      leading-tight
                      text-[#172017]
                      dark:text-white
                      sm:mt-7
                      sm:text-lg
                    "
                  >
                    {industry.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-2.5
                      text-[10px]
                      leading-5
                      text-[#697369]
                      dark:text-slate-500
                      sm:mt-3
                      sm:text-xs
                      sm:leading-6
                      md:text-sm
                    "
                  >
                    {industry.description}
                  </p>

                  {/* Tags */}

                  <div className="mt-5 space-y-2 sm:mt-6 sm:space-y-2.5">
                    {industry.tags.map((tag) => (
                      <div
                        key={tag}
                        className="
                          flex
                          items-center
                          gap-2
                          text-[9px]
                          text-[#536053]
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
                            shadow-[0_0_6px_rgba(173,209,50,0.35)]
                          "
                        />

                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* Explore */}

                  <div
                    className="
                      mt-5
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
                      sm:mt-7
                      sm:text-xs
                    "
                  >
                    Explore Industry

                    <ArrowUpRight
                      size={12}
                      className="
                        transition
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        sm:h-[14px]
                        sm:w-[14px]
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
          INDUSTRY INTELLIGENCE
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
              gap-10
              lg:grid-cols-2
              lg:items-center
              lg:gap-14
            "
          >
            {/* Visual */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-[#263226]/10
                bg-white/70
                p-4
                shadow-[0_20px_60px_rgba(30,50,20,0.05)]
                backdrop-blur-xl
                dark:border-white/[0.07]
                dark:bg-[#080B08]
                dark:shadow-none
                sm:rounded-[2rem]
                sm:p-7
                md:p-10
              "
            >
              {/* Glow */}

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
                  bg-[#ADD132]/5
                  blur-[80px]
                  dark:bg-[#ADD132]/6
                  sm:h-80
                  sm:w-80
                  sm:blur-[100px]
                "
              />

              <div className="relative">
                {/* Header */}

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.18em]
                        text-[#7D877D]
                        dark:text-slate-600
                        sm:text-xs
                        sm:tracking-[0.2em]
                      "
                    >
                      Industry Intelligence
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-black
                        text-[#172017]
                        dark:text-white
                        sm:mt-2
                        sm:text-lg
                      "
                    >
                      Digital Protection
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
                      border-[#6F8D08]/15
                      bg-[#ADD132]/10
                      text-[#6F8D08]
                      dark:border-[#ADD132]/20
                      dark:bg-[#ADD132]/10
                      dark:text-[#ADD132]
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <ScanSearch size={17} className="sm:h-[19px] sm:w-[19px]" />
                  </div>
                </div>

                {/* Signals */}

                <div className="mt-7 space-y-4 sm:mt-10 sm:space-y-5">
                  {intelligenceData.map(([label, title, value]) => (
                    <div key={label}>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p
                            className="
                              text-[7px]
                              uppercase
                              tracking-[0.18em]
                              text-[#8A948A]
                              dark:text-slate-600
                              sm:text-[9px]
                              sm:tracking-[0.2em]
                            "
                          >
                            {label}
                          </p>

                          <p
                            className="
                              mt-1
                              text-[10px]
                              font-semibold
                              text-[#4F5A4F]
                              dark:text-slate-300
                              sm:text-xs
                            "
                          >
                            {title}
                          </p>
                        </div>

                        <span
                          className="
                            text-[9px]
                            font-bold
                            text-[#6F8D08]
                            dark:text-[#ADD132]
                            sm:text-xs
                          "
                        >
                          {value}
                        </span>
                      </div>

                      <div
                        className="
                          mt-2
                          h-1
                          overflow-hidden
                          rounded-full
                          bg-[#263226]/10
                          dark:bg-white/[0.06]
                          sm:mt-3
                        "
                      >
                        <div
                          className="
                            h-full
                            rounded-full
                            bg-[#ADD132]
                            shadow-[0_0_8px_rgba(173,209,50,0.25)]
                          "
                          style={{
                            width: value,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}

            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-xs
                "
              >
                Industry Intelligence
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
                  sm:mt-5
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Different industries.
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  Different digital risks.
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
                  md:leading-8
                "
              >
                Digital protection requirements can vary significantly
                between industries. TrackOwls focuses on providing flexible
                monitoring and intelligence capabilities that can support
                different digital environments.
              </p>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                {intelligencePoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 sm:gap-3"
                  >
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-[#6F8D08] dark:text-[#ADD132] sm:h-[18px] sm:w-[18px]"
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
          </div>
        </div>
      </section>

      {/* =====================================================
          GLOBAL COVERAGE
      ===================================================== */}

      <section
        className="
          border-y
          border-[#1C281C]/10
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
        <div className="mx-auto max-w-[1500px]">
          <div
            className="
              relative
              overflow-hidden
              rounded-[20px]
              border
              border-[#6F8D08]/15
              bg-[#F1F6EB]
              p-5
              dark:border-[#ADD132]/10
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
                bg-[#ADD132]/8
                blur-[100px]
                dark:bg-[#ADD132]/10
                sm:h-80
                sm:w-80
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
                  <Globe size={21} className="sm:h-[25px] sm:w-[25px]" />
                </div>

                <p
                  className="
                    mt-5
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#6F8D08]
                    dark:text-[#ADD132]
                    sm:mt-7
                    sm:text-xs
                  "
                >
                  Digital Ecosystem
                </p>

                <h2
                  className="
                    mt-3
                    text-[29px]
                    font-black
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-[#152019]
                    dark:text-white
                    sm:mt-4
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  Protect your digital
                  <span className="text-[#789900] dark:text-[#ADD132]">
                    {" "}
                    presence wherever it lives.
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
                  From digital content platforms to online channels,
                  visibility can help organizations understand how their
                  assets are being used across the internet.
                </p>
              </div>

              {/* Ecosystem Cards */}

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {ecosystemItems.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      min-h-[100px]
                      items-end
                      rounded-xl
                      border
                      border-[#263226]/10
                      bg-white/60
                      p-4
                      transition
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#ADD132]/30
                      dark:border-white/[0.07]
                      dark:bg-[#080B08]
                      sm:min-h-[120px]
                      sm:rounded-2xl
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
                          shadow-[0_0_10px_#ADD132]
                          sm:h-2
                          sm:w-2
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
            <Shield size={22} className="sm:h-[26px] sm:w-[26px]" />
          </div>

          <p
            className="
              mt-5
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#6F8D08]
              dark:text-[#ADD132]
              sm:mt-7
              sm:text-xs
            "
          >
            Industry Protection
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
            Your industry is digital.
            <br />
            <span className="text-[#789900] dark:text-[#ADD132]">
              Your protection should be too.
            </span>
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
            Connect with TrackOwls to explore digital monitoring and
            protection capabilities for your organization.
          </p>

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
                hover:-translate-y-0.5
                hover:bg-[#C7EB45]
                hover:shadow-[0_0_30px_rgba(173,209,50,0.20)]
                sm:w-auto
                sm:px-7
                sm:py-4
                sm:text-sm
              "
            >
              Request a Demo
              <ArrowUpRight size={15} className="sm:h-[17px] sm:w-[17px]" />
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
                bg-white/40
                px-6
                py-3.5
                text-[10px]
                font-semibold
                text-[#344034]
                transition
                duration-300
                hover:border-[#ADD132]/30
                hover:text-[#6F8D08]
                dark:border-white/10
                dark:bg-transparent
                dark:text-white
                dark:hover:text-[#ADD132]
                sm:w-auto
                sm:px-7
                sm:py-4
                sm:text-sm
              "
            >
              Contact Us
              <ArrowRight size={15} className="sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industries;