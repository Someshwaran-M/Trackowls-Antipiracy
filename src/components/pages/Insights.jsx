import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Radar,
  ScanSearch,
  Globe,
  LockKeyhole,
  Activity,
  Search,
  CheckCircle2,
} from "lucide-react";

function Insights() {
  const insights = [
    {
      number: "01",
      category: "Anti-Piracy",
      title: "Understanding the modern digital piracy landscape",
      description:
        "Digital content can spread rapidly across websites, platforms and online communities. Understanding where unauthorized distribution can occur is the first step toward improving protection.",
      icon: Shield,
      readTime: "5 min read",
    },
    {
      number: "02",
      category: "Digital Intelligence",
      title: "Why digital visibility matters for IP protection",
      description:
        "Intellectual property protection starts with knowing where your digital assets appear. Structured monitoring can help organizations build a clearer picture of their online presence.",
      icon: Radar,
      readTime: "6 min read",
    },
    {
      number: "03",
      category: "Technology",
      title: "From monitoring to actionable intelligence",
      description:
        "Modern protection workflows need more than raw data. Discovery, detection and analysis can turn digital signals into intelligence that supports informed protection decisions.",
      icon: ScanSearch,
      readTime: "7 min read",
    },
    {
      number: "04",
      category: "Brand Protection",
      title: "The expanding digital surface of modern brands",
      description:
        "A brand's digital presence can extend across websites, marketplaces, social platforms and other online environments, creating a broader surface that requires visibility.",
      icon: Globe,
      readTime: "5 min read",
    },
    {
      number: "05",
      category: "Content Security",
      title: "Building a stronger digital protection workflow",
      description:
        "A structured workflow can connect discovery, verification, investigation and response to create a more consistent approach to digital content protection.",
      icon: LockKeyhole,
      readTime: "8 min read",
    },
    {
      number: "06",
      category: "Monitoring",
      title: "What continuous digital monitoring means",
      description:
        "Digital environments change constantly. Continuous monitoring can help organizations maintain awareness as new content, domains and distribution channels emerge.",
      icon: Activity,
      readTime: "4 min read",
    },
  ];

  const topics = [
    "Anti-Piracy",
    "IP Protection",
    "Brand Protection",
    "Digital Intelligence",
    "Threat Detection",
    "Online Monitoring",
  ];

  const knowledgeAreas = [
    {
      icon: Shield,
      title: "Anti-Piracy",
      text: "Digital content protection and unauthorized distribution.",
    },
    {
      icon: Radar,
      title: "IP Intelligence",
      text: "Visibility around intellectual property across digital environments.",
    },
    {
      icon: Globe,
      title: "Online Monitoring",
      text: "Understanding changing digital environments and exposure.",
    },
    {
      icon: LockKeyhole,
      title: "Digital Security",
      text: "Structured approaches to digital threats and protection.",
    },
  ];

  const featuredPoints = [
    "Understand your digital exposure",
    "Identify relevant signals and threats",
    "Organize intelligence into workflows",
    "Create a consistent protection process",
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
          px-4
          pb-14
          pt-12
          dark:border-white/[0.06]
          sm:px-7
          sm:pb-20
          sm:pt-18
          md:px-10
          md:pb-24
          md:pt-22
          lg:px-12
          lg:pb-28
          lg:pt-24
        "
      >
        {/* Background Grid */}

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

        {/* Main Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-80px]
            h-[260px]
            w-[300px]
            -translate-x-1/2
            rounded-full
            bg-[#ADD132]/7
            blur-[100px]
            dark:bg-[#ADD132]/10
            sm:h-[360px]
            sm:w-[500px]
            sm:blur-[120px]
            md:h-[430px]
            md:w-[600px]
            lg:h-[500px]
            lg:w-[700px]
            lg:blur-[140px]
          "
        />

        <div className="relative mx-auto max-w-[1500px]">
          <div
            className="
              grid
              items-center
              gap-9
              lg:grid-cols-[1.1fr_0.9fr]
              lg:gap-12
              xl:gap-16
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
                  dark:border-[#ADD132]/25
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
                    tracking-[0.2em]
                    text-[#6F8D08]
                    dark:text-[#C7EB45]
                    sm:text-[10px]
                    sm:tracking-[0.22em]
                    md:text-xs
                  "
                >
                  TrackOwls Insights
                </span>
              </div>

              {/* Heading */}

              <h1
                className="
                  mt-5
                  max-w-4xl
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
                Intelligence for a
                <span className="block text-[#789900] dark:text-[#ADD132]">
                  changing digital world.
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
                Explore perspectives on anti-piracy, intellectual property,
                digital monitoring, brand protection and the technologies
                shaping digital security.
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
                <a
                  href="#latest-insights"
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
                  Explore Insights

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
                </a>

                <Link
                  to="/technology"
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
                  Our Technology
                  <ArrowUpRight size={14} className="sm:h-[17px] sm:w-[17px]" />
                </Link>
              </div>
            </div>

            {/* =================================================
                HERO VISUAL
            ================================================= */}

            <div className="relative">
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[20px]
                  bg-[#ADD132]/7
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
                  border-[#263226]/10
                  bg-white/75
                  p-4
                  shadow-[0_20px_60px_rgba(30,50,20,0.05)]
                  backdrop-blur-xl
                  dark:border-white/10
                  dark:bg-[#0B100B]
                  dark:shadow-2xl
                  sm:rounded-[2rem]
                  sm:p-6
                  md:p-7
                "
              >
                {/* Header */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-b
                    border-[#263226]/10
                    pb-4
                    dark:border-white/[0.07]
                    sm:pb-6
                  "
                >
                  <div>
                    <p
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.18em]
                        text-[#7D877D]
                        dark:text-slate-500
                        sm:text-xs
                        sm:tracking-[0.2em]
                      "
                    >
                      Intelligence Hub
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
                      Digital Protection Signals
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
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <Search
                      size={17}
                      className="text-[#6F8D08] dark:text-[#ADD132] sm:h-[21px] sm:w-[21px]"
                    />
                  </div>
                </div>

                {/* Intelligence Visual */}

                <div
                  className="
                    relative
                    mt-5
                    h-[250px]
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#263226]/10
                    bg-[#F3F7EF]
                    dark:border-white/[0.06]
                    dark:bg-[#070A07]
                    sm:mt-7
                    sm:h-[300px]
                    sm:rounded-2xl
                    md:h-[330px]
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-30
                      dark:opacity-40
                    "
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(173,209,50,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.12) 1px, transparent 1px)",
                      backgroundSize: "38px 38px",
                    }}
                  />

                  {/* Radar */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-40
                      w-40
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      border
                      border-[#6F8D08]/15
                      dark:border-[#ADD132]/20
                      sm:h-52
                      sm:w-52
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-5
                        rounded-full
                        border
                        border-[#6F8D08]/15
                        dark:border-[#ADD132]/20
                        sm:inset-6
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-10
                        rounded-full
                        border
                        border-[#6F8D08]/20
                        dark:border-[#ADD132]/25
                        sm:inset-12
                      "
                    />

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
                        to-[#ADD132]
                      "
                    />

                    {/* Core */}

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-[#6F8D08]/25
                          bg-[#ADD132]/10
                          shadow-[0_0_30px_rgba(173,209,50,0.12)]
                          dark:border-[#ADD132]/30
                          sm:h-16
                          sm:w-16
                          sm:rounded-2xl
                        "
                      >
                        <Radar
                          size={25}
                          className="text-[#6F8D08] dark:text-[#ADD132] sm:h-7 sm:w-7"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Signal Cards */}

                  <SignalCard
                    position="left-3 top-4"
                    title="Content Signal"
                  />

                  <SignalCard
                    position="right-3 top-12"
                    title="Threat Signal"
                  />

                  <SignalCard
                    position="bottom-5 left-4"
                    title="IP Signal"
                  />

                  <SignalCard
                    position="bottom-5 right-4"
                    title="Brand Signal"
                  />
                </div>

                {/* Status */}

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    text-[9px]
                    text-[#7D877D]
                    dark:text-slate-500
                    sm:mt-5
                    sm:text-xs
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#ADD132]
                      shadow-[0_0_8px_#ADD132]
                      sm:h-2
                      sm:w-2
                    "
                  />

                  Digital intelligence environment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TOPIC BAR
      ===================================================== */}

      <section
        className="
          border-y
          border-[#1C281C]/10
          bg-[#EEF3E9]
          px-4
          py-5
          dark:border-white/[0.06]
          dark:bg-[#080C08]
          sm:px-7
          sm:py-6
          md:px-10
          lg:px-12
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1500px]
            flex-col
            gap-4
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <p
            className="
              text-[10px]
              font-semibold
              text-[#7B857B]
              dark:text-slate-500
              sm:text-sm
            "
          >
            Explore topics
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                className="
                  rounded-full
                  border
                  border-[#263226]/10
                  bg-white/60
                  px-3
                  py-1.5
                  text-[8px]
                  font-medium
                  text-[#536053]
                  transition
                  hover:border-[#ADD132]/30
                  hover:bg-[#ADD132]/10
                  hover:text-[#6F8D08]
                  dark:border-white/[0.08]
                  dark:bg-white/[0.02]
                  dark:text-slate-300
                  dark:hover:text-[#C7EB45]
                  sm:px-4
                  sm:py-2
                  sm:text-xs
                "
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LATEST INSIGHTS
      ===================================================== */}

      <section
        id="latest-insights"
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
          {/* Header */}

          <div
            className="
              mb-9
              flex
              flex-col
              justify-between
              gap-5
              md:mb-12
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
                  sm:text-sm
                "
              >
                Latest Insights
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
                Ideas, perspectives and digital intelligence.
              </h2>
            </div>

            <p
              className="
                max-w-md
                text-[10px]
                leading-5
                text-[#7B857B]
                dark:text-slate-500
                sm:text-sm
                sm:leading-7
              "
            >
              Practical perspectives on protecting content, brands and
              intellectual property in an evolving digital environment.
            </p>
          </div>

          {/* Insight Cards */}

          <div
            className="
              grid
              gap-3
              sm:gap-4
              md:grid-cols-2
              lg:grid-cols-3
              lg:gap-5
            "
          >
            {insights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-[#263226]/10
                    bg-white/70
                    shadow-[0_12px_35px_rgba(30,50,20,0.04)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#ADD132]/30
                    dark:border-white/[0.08]
                    dark:bg-[#0A0E0A]
                    dark:shadow-none
                    sm:rounded-[1.5rem]
                  "
                >
                  {/* Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-0
                      top-0
                      h-28
                      w-28
                      rounded-full
                      bg-[#ADD132]/5
                      blur-3xl
                      transition
                      duration-500
                      group-hover:bg-[#ADD132]/10
                      sm:h-40
                      sm:w-40
                    "
                  />

                  <div className="relative p-4 sm:p-6 md:p-7">
                    {/* Top */}

                    <div className="flex items-center justify-between">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-[#6F8D08]/20
                          bg-[#ADD132]/10
                          dark:border-[#ADD132]/20
                          sm:h-12
                          sm:w-12
                        "
                      >
                        <Icon
                          size={19}
                          className="text-[#6F8D08] dark:text-[#ADD132] sm:h-[22px] sm:w-[22px]"
                        />
                      </div>

                      <span
                        className="
                          text-[9px]
                          font-bold
                          tracking-[0.18em]
                          text-[#A1AAA1]
                          dark:text-slate-600
                          sm:text-xs
                        "
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* Meta */}

                    <div className="mt-5 flex items-center gap-2 sm:mt-8 sm:gap-3">
                      <span
                        className="
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-[#6F8D08]
                          dark:text-[#ADD132]
                          sm:text-[11px]
                          sm:tracking-[0.18em]
                        "
                      >
                        {item.category}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[#9AA39A] dark:bg-slate-700" />

                      <span
                        className="
                          text-[8px]
                          text-[#8A948A]
                          dark:text-slate-600
                          sm:text-xs
                        "
                      >
                        {item.readTime}
                      </span>
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        mt-3
                        text-base
                        font-black
                        leading-snug
                        tracking-tight
                        text-[#172017]
                        dark:text-white
                        sm:mt-4
                        sm:text-xl
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-3
                        text-[10px]
                        leading-5
                        text-[#697369]
                        dark:text-slate-500
                        sm:mt-4
                        sm:text-sm
                        sm:leading-7
                      "
                    >
                      {item.description}
                    </p>

                    {/* Read */}

                    <div
                      className="
                        mt-5
                        border-t
                        border-[#263226]/10
                        pt-4
                        dark:border-white/[0.07]
                        sm:mt-7
                        sm:pt-6
                      "
                    >
                      <button
                        type="button"
                        className="
                          group/link
                          inline-flex
                          items-center
                          gap-2
                          text-[10px]
                          font-semibold
                          text-[#344034]
                          transition
                          hover:text-[#6F8D08]
                          dark:text-white
                          dark:hover:text-[#ADD132]
                          sm:text-sm
                        "
                      >
                        Read insight

                        <ArrowUpRight
                          size={13}
                          className="
                            transition-transform
                            duration-300
                            group-hover/link:-translate-y-0.5
                            group-hover/link:translate-x-0.5
                            sm:h-4
                            sm:w-4
                          "
                        />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED INSIGHT
      ===================================================== */}

      <section
        className="
          border-y
          border-[#1C281C]/10
          bg-[#EEF3E9]
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
        <div className="mx-auto max-w-[1500px]">
          <div
            className="
              grid
              overflow-hidden
              rounded-[20px]
              border
              border-[#263226]/10
              bg-white/70
              shadow-[0_20px_60px_rgba(30,50,20,0.04)]
              dark:border-white/[0.08]
              dark:bg-[#0A0E0A]
              dark:shadow-none
              lg:grid-cols-[0.9fr_1.1fr]
              lg:rounded-[2rem]
            "
          >
            {/* Visual */}

            <div
              className="
                relative
                min-h-[280px]
                overflow-hidden
                border-b
                border-[#263226]/10
                dark:border-white/[0.07]
                sm:min-h-[360px]
                md:min-h-[420px]
                lg:border-b-0
                lg:border-r
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-25
                  dark:opacity-30
                "
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(173,209,50,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.18) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-40
                  w-40
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#6F8D08]/15
                  dark:border-[#ADD132]/20
                  sm:h-48
                  sm:w-48
                  md:h-56
                  md:w-56
                "
              >
                <div
                  className="
                    absolute
                    inset-6
                    rounded-full
                    border
                    border-[#6F8D08]/15
                    dark:border-[#ADD132]/20
                    sm:inset-8
                  "
                />

                <div
                  className="
                    absolute
                    inset-12
                    rounded-full
                    border
                    border-[#6F8D08]/20
                    dark:border-[#ADD132]/30
                    sm:inset-16
                  "
                />

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
                    dark:border-[#ADD132]/30
                    sm:h-20
                    sm:w-20
                    sm:rounded-2xl
                  "
                >
                  <Shield
                    size={29}
                    className="text-[#6F8D08] dark:text-[#ADD132] sm:h-9 sm:w-9"
                  />
                </div>
              </div>

              {/* Bottom labels */}

              <div
                className="
                  absolute
                  bottom-5
                  left-4
                  right-4
                  flex
                  flex-col
                  gap-2
                  sm:bottom-7
                  sm:left-7
                  sm:right-7
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <span
                  className="
                    w-fit
                    rounded-full
                    border
                    border-[#263226]/10
                    bg-white/80
                    px-3
                    py-1.5
                    text-[8px]
                    text-[#687368]
                    backdrop-blur-xl
                    dark:border-white/[0.08]
                    dark:bg-[#0A0E0A]/80
                    dark:text-slate-400
                    sm:px-4
                    sm:py-2
                    sm:text-xs
                  "
                >
                  Featured Insight
                </span>

                <span
                  className="
                    w-fit
                    rounded-full
                    border
                    border-[#6F8D08]/20
                    bg-[#ADD132]/10
                    px-3
                    py-1.5
                    text-[8px]
                    text-[#6F8D08]
                    dark:border-[#ADD132]/20
                    dark:text-[#ADD132]
                    sm:px-4
                    sm:py-2
                    sm:text-xs
                  "
                >
                  Digital Protection
                </span>
              </div>
            </div>

            {/* Content */}

            <div className="p-5 sm:p-8 md:p-12 lg:p-14">
              <div className="flex items-center gap-3">
                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#6F8D08]
                    dark:text-[#ADD132]
                    sm:text-xs
                    sm:tracking-[0.2em]
                  "
                >
                  Featured
                </span>

                <span className="h-px w-8 bg-[#ADD132]/30 sm:w-10" />
              </div>

              <h2
                className="
                  mt-4
                  max-w-2xl
                  text-[28px]
                  font-black
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-[#152019]
                  dark:text-white
                  sm:mt-6
                  sm:text-4xl
                "
              >
                Building digital resilience through better visibility.
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
                  sm:leading-8
                "
              >
                Digital protection is not limited to reacting after content
                has been misused. A visibility-first approach helps
                organizations understand their digital environment and
                develop structured protection workflows.
              </p>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                {featuredPoints.map((point) => (
                  <div
                    key={point}
                    className="
                      flex
                      items-center
                      gap-2.5
                      text-[10px]
                      text-[#536053]
                      dark:text-slate-300
                      sm:gap-3
                      sm:text-sm
                    "
                  >
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-[#6F8D08] dark:text-[#ADD132] sm:h-[17px] sm:w-[17px]"
                    />

                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-7 sm:mt-10">
                <Link
                  to="/solutions"
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
                    transition
                    hover:bg-[#C7EB45]
                    sm:w-auto
                    sm:px-6
                    sm:py-3.5
                    sm:text-sm
                  "
                >
                  Explore Protection Solutions

                  <ArrowRight
                    size={15}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                      sm:h-[18px]
                      sm:w-[18px]
                    "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          KNOWLEDGE AREAS
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
              gap-9
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-12
            "
          >
            {/* Intro */}

            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-sm
                "
              >
                Knowledge Areas
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
                Stay informed about the digital landscape.
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
                  sm:leading-8
                "
              >
                Our insights focus on the technologies, workflows and
                challenges shaping modern digital protection.
              </p>
            </div>

            {/* Knowledge Cards */}

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {knowledgeAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      group
                      rounded-2xl
                      border
                      border-[#263226]/10
                      bg-white/70
                      p-4
                      shadow-[0_10px_30px_rgba(30,50,20,0.03)]
                      transition
                      hover:-translate-y-0.5
                      hover:border-[#ADD132]/25
                      dark:border-white/[0.07]
                      dark:bg-[#0A0E0A]
                      dark:shadow-none
                      sm:p-6
                    "
                  >
                    <Icon
                      size={21}
                      className="
                        text-[#6F8D08]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                        dark:text-[#ADD132]
                        sm:h-6
                        sm:w-6
                      "
                    />

                    <h3
                      className="
                        mt-4
                        text-sm
                        font-bold
                        text-[#172017]
                        dark:text-white
                        sm:mt-5
                        sm:text-base
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        text-[10px]
                        leading-5
                        text-[#697369]
                        dark:text-slate-500
                        sm:mt-2
                        sm:text-sm
                        sm:leading-6
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
          CTA
      ===================================================== */}

      <section
        className="
          px-4
          pb-14
          sm:px-7
          sm:pb-20
          md:px-10
          md:pb-24
          lg:px-12
        "
      >
        <div
          className="
            relative
            mx-auto
            max-w-[1500px]
            overflow-hidden
            rounded-[20px]
            border
            border-[#ADD132]/20
            bg-[#ADD132]
            px-5
            py-9
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
              -right-24
              -top-28
              h-64
              w-64
              rounded-full
              bg-white/20
              blur-3xl
              sm:h-80
              sm:w-80
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
                  tracking-[0.2em]
                  text-black/60
                  sm:text-sm
                "
              >
                Go deeper
              </p>

              <h2
                className="
                  mt-3
                  text-[29px]
                  font-black
                  leading-[1.05]
                  tracking-[-0.04em]
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
                Connect with TrackOwls to discuss your content, brand or
                intellectual property protection requirements.
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
                font-bold
                text-white
                transition
                hover:bg-[#101410]
                sm:w-auto
                sm:px-7
                sm:py-4
                sm:text-sm
              "
            >
              Talk to TrackOwls

              <ArrowUpRight
                size={16}
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

/* =========================================================
   SIGNAL CARD
========================================================= */

function SignalCard({ position, title }) {
  return (
    <div
      className={`
        absolute
        ${position}
        rounded-lg
        border
        border-[#263226]/10
        bg-white/80
        px-2.5
        py-2
        shadow-lg
        backdrop-blur-xl
        dark:border-white/[0.07]
        dark:bg-[#0B100B]/90
        sm:rounded-xl
        sm:px-4
        sm:py-3
      `}
    >
      <div className="flex items-center gap-1.5 sm:gap-2">
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
            text-[7px]
            text-[#536053]
            dark:text-slate-300
            sm:text-xs
          "
        >
          {title}
        </span>
      </div>
    </div>
  );
}

export default Insights;