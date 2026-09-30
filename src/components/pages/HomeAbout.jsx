import React from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

function HomeAbout() {
  const processSteps = [
    {
      number: "01",
      title: "SCAN",
      heading: "Find the signals.",
      body:
        "We monitor websites, social platforms, Telegram, marketplaces, search results and domains to discover activity around your valuable assets.",
    },
    {
      number: "02",
      title: "DETECT",
      heading: "Verify what matters.",
      body:
        "Potential matches are reviewed and verified before evidence is captured, helping separate meaningful threats from irrelevant results.",
    },
    {
      number: "03",
      title: "REMOVE",
      heading: "Turn intelligence into action.",
      body:
        "We coordinate response workflows with platforms, hosts, registrars and search engines to address identified infringements.",
    },
    {
      number: "04",
      title: "PROTECT",
      heading: "Keep watching.",
      body:
        "We monitor repeat offenders, track emerging activity and provide ongoing visibility so protection continues beyond a single incident.",
    },
  ];

  const approachPoints = [
    "Digital visibility",
    "Threat intelligence",
    "Human verification",
    "Protection workflows",
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F4F7F0]
        py-14
        text-[#152019]
        dark:bg-[#050705]
        dark:text-white
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/4
          h-[240px]
          w-[240px]
          rounded-full
          bg-[#ADD132]/10
          blur-[100px]
          sm:h-[320px]
          sm:w-[320px]
          sm:blur-[120px]
          lg:h-[400px]
          lg:w-[400px]
          lg:blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#ADD132]/[0.06]
          blur-[110px]
          sm:h-[360px]
          sm:w-[360px]
          sm:blur-[130px]
          lg:h-[440px]
          lg:w-[440px]
          lg:blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.25]
          [background-image:linear-gradient(to_right,rgba(21,32,25,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(21,32,25,0.025)_1px,transparent_1px)]
          [background-size:72px_72px]
          dark:opacity-[0.12]
          dark:[background-image:linear-gradient(to_right,rgba(173,209,50,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(173,209,50,0.035)_1px,transparent_1px)]
        "
      />

      <div
        className="
          trackowls-container
          relative
          mx-auto
          w-full
          max-w-[1480px]
          px-5
          sm:px-7
          md:px-10
          lg:px-12
          xl:px-16
        "
      >
        {/* =========================================================
            ABOUT INTRO
        ========================================================= */}

        <div
          className="
            grid
            gap-7
            lg:grid-cols-[minmax(0,1fr)_300px]
            lg:items-end
            lg:gap-12
            xl:grid-cols-[minmax(0,1fr)_340px]
            xl:gap-16
          "
        >
          {/* LEFT */}

          <div>
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span
                  className="
                    absolute
                    inset-0
                    animate-ping
                    rounded-full
                    bg-[#ADD132]
                    opacity-60
                  "
                />

                <span className="relative h-2 w-2 rounded-full bg-[#ADD132]" />
              </span>

              <span
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:text-[11px]
                  sm:tracking-[0.25em]
                "
              >
                About TrackOwls
              </span>
            </div>

            {/* SAME GENERAL SIZE SCALE AS HOME HERO */}

            <h2
              className="
                max-w-3xl
                text-[34px]
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                text-[#152019]
                dark:text-white
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Protection
              <br />
              starts with{" "}
              <span className="relative inline-block text-[#6D900B] dark:text-[#ADD132]">
                visibility.
                <span
                  className="
                    absolute
                    -bottom-1.5
                    left-0
                    h-[2px]
                    w-full
                    origin-left
                    animate-[trackowls-line_3s_ease-in-out_infinite]
                    bg-[#ADD132]
                    sm:-bottom-2
                  "
                />
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div className="max-w-md lg:pb-1">
            <div className="mb-4 h-px w-12 bg-[#ADD132] sm:mb-5 sm:w-16" />

            <p
              className="
                text-[13px]
                leading-6
                text-[#68736B]
                dark:text-white/50
                sm:text-[14px]
                sm:leading-7
                md:text-[15px]
              "
            >
              We help organizations understand the digital ecosystem around
              their content, brands and intellectual property.
            </p>

            <p
              className="
                mt-4
                text-[12px]
                leading-5
                text-[#7A857D]
                dark:text-white/35
                sm:text-[13px]
                sm:leading-6
              "
            >
              Visibility gives rights holders the information needed to
              identify misuse, understand emerging threats and respond.
            </p>
          </div>
        </div>

        {/* =========================================================
            HOW TRACKOWLS WORKS
        ========================================================= */}

        <section
          className="
            relative
            mt-16
            border-t
            border-black/[0.07]
            py-16
            dark:border-white/[0.09]
            sm:mt-20
            sm:py-20
            md:mt-24
            md:py-24
            lg:mt-28
            lg:py-24
          "
        >
          {/* SECTION HEADER */}

          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-12
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.22em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:text-[11px]
                  sm:tracking-[0.28em]
                "
              >
                How TrackOwls works
              </p>

              <h2
                className="
                  mt-3
                  max-w-3xl
                  text-[30px]
                  font-black
                  leading-[0.96]
                  tracking-[-0.045em]
                  text-[#152019]
                  dark:text-white
                  sm:text-[34px]
                  md:text-4xl
                  lg:text-5xl
                  xl:text-[52px]
                "
              >
                From signal
                <br />
                <span className="text-[#6D900B] dark:text-[#ADD132]">
                  to protection.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-md
                text-[13px]
                leading-6
                text-[#657169]
                dark:text-white/50
                sm:text-[14px]
                sm:leading-7
                md:text-[15px]
              "
            >
              A continuous intelligence process designed to discover threats,
              verify what matters and help you take action.
            </p>
          </div>

          {/* =======================================================
              PROCESS TIMELINE
          ======================================================= */}

          <div className="relative mt-12 sm:mt-14 md:mt-16 lg:mt-18">
            {/* Desktop line */}

            <div
              className="
                pointer-events-none
                absolute
                left-[7%]
                right-[7%]
                top-[24px]
                hidden
                h-px
                bg-black/[0.10]
                dark:bg-white/[0.12]
                lg:block
              "
            >
              <div
                className="
                  h-full
                  w-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-[#ADD132]
                  to-transparent
                  opacity-80
                "
              />
            </div>

            {/* Mobile line */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-8
                left-[11px]
                top-8
                w-px
                bg-black/[0.08]
                dark:bg-white/[0.10]
                lg:hidden
              "
            >
              <div
                className="
                  h-1/2
                  w-full
                  bg-gradient-to-b
                  from-[#ADD132]/20
                  via-[#ADD132]
                  to-transparent
                "
              />
            </div>

            <div
              className="
                grid
                gap-10
                lg:grid-cols-4
                lg:gap-7
                xl:gap-10
              "
            >
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="
                    group
                    relative
                    pl-9
                    lg:pl-0
                  "
                >
                  {/* Mobile marker */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      flex
                      h-[23px]
                      w-[23px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#ADD132]/50
                      bg-[#F4F7F0]
                      dark:bg-[#050705]
                      lg:hidden
                    "
                  >
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#ADD132]
                        shadow-[0_0_10px_rgba(173,209,50,0.65)]
                        transition-transform
                        duration-300
                        group-hover:scale-150
                      "
                    />
                  </div>

                  {/* Desktop marker */}

                  <div
                    className="
                      relative
                      z-10
                      mb-6
                      hidden
                      h-[48px]
                      w-[48px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#ADD132]/35
                      bg-[#F4F7F0]
                      dark:bg-[#050705]
                      lg:flex
                    "
                  >
                    <span
                      className="
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-[#ADD132]
                        shadow-[0_0_12px_rgba(173,209,50,0.7)]
                        transition-all
                        duration-300
                        group-hover:h-3.5
                        group-hover:w-3.5
                      "
                    />
                  </div>

                  {/* Number */}

                  <p
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.18em]
                      text-[#8A958D]
                      transition-colors
                      duration-300
                      group-hover:text-[#6D900B]
                      dark:text-white/25
                      dark:group-hover:text-[#ADD132]
                      sm:text-[11px]
                    "
                  >
                    {step.number}
                  </p>

                  {/* Label */}

                  <p
                    className="
                      mt-2.5
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#6D900B]
                      dark:text-[#ADD132]
                      sm:text-[11px]
                    "
                  >
                    {step.title}
                  </p>

                  {/* Heading */}

                  <h3
                    className="
                      mt-2.5
                      max-w-[280px]
                      text-[20px]
                      font-black
                      leading-[1.08]
                      tracking-[-0.035em]
                      text-[#152019]
                      dark:text-white
                      sm:text-[21px]
                      md:text-[23px]
                      lg:text-[25px]
                    "
                  >
                    {step.heading}
                  </h3>

                  {/* Body */}

                  <p
                    className="
                      mt-3
                      max-w-[310px]
                      text-[12px]
                      leading-5
                      text-[#68736B]
                      dark:text-white/45
                      sm:text-[13px]
                      sm:leading-6
                      md:text-[14px]
                    "
                  >
                    {step.body}
                  </p>

                  {/* Editorial line */}

                  <div
                    className="
                      mt-5
                      h-px
                      w-8
                      bg-[#ADD132]/40
                      transition-all
                      duration-300
                      group-hover:w-16
                      group-hover:bg-[#ADD132]
                    "
                  />
                </div>
              ))}
            </div>
          </div>

          {/* =======================================================
              INTELLIGENCE STATEMENT
          ======================================================= */}

          <div
            className="
              mt-12
              flex
              flex-col
              gap-4
              border-t
              border-black/[0.07]
              pt-6
              dark:border-white/[0.09]
              sm:mt-14
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:pt-7
              lg:mt-16
            "
          >
            <p
              className="
                max-w-2xl
                text-[11px]
                font-medium
                leading-5
                text-[#68736B]
                dark:text-white/35
                sm:text-[12px]
                sm:leading-6
                md:text-[13px]
              "
            >
              Discover the signal. Understand the threat. Take action. Stay
              ahead.
            </p>

            <div className="flex items-center gap-2">
              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-[#ADD132]
                  shadow-[0_0_10px_rgba(173,209,50,0.7)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:text-[10px]
                  sm:tracking-[0.24em]
                "
              >
                TrackOwls Intelligence
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            OUR APPROACH
        ========================================================= */}

        <section
          className="
            border-t
            border-black/[0.07]
            py-16
            dark:border-white/[0.09]
            sm:py-20
            md:py-24
            lg:py-24
          "
        >
          <div
            className="
              grid
              items-center
              gap-9
              lg:grid-cols-[minmax(0,1fr)_minmax(300px,390px)]
              lg:gap-14
              xl:gap-20
            "
          >
            {/* LEFT */}

            <div>
              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <span
                  className="
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-[#ADD132]
                    shadow-[0_0_10px_rgba(173,209,50,0.7)]
                    sm:h-2
                    sm:w-2
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-[#6D900B]
                    dark:text-[#ADD132]
                    sm:text-[10px]
                    sm:tracking-[0.26em]
                  "
                >
                  Our Approach
                </span>
              </div>

              {/* SAME SCALE AS HOME HERO */}

              <h3
                className="
                  max-w-3xl
                  text-[34px]
                  font-black
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-[#152019]
                  dark:text-white
                  sm:text-2xl
                  md:text-4xl
                  lg:text-5xl
                "
              >
                See it.
                <span className="text-[#6D900B] dark:text-[#ADD132]">
                  {" "}
                  Understand it.
                </span>
                <br />
                Protect it.
              </h3>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-[12px]
                  leading-5
                  text-[#69746C]
                  dark:text-white/40
                  sm:mt-6
                  sm:text-[13px]
                  sm:leading-6
                  md:text-[14px]
                  md:leading-7
                "
              >
                We turn digital complexity into meaningful intelligence,
                helping organizations discover their digital presence,
                understand emerging threats and protect what matters.
              </p>

              {/* Approach points */}

              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-x-5
                  gap-y-3
                  sm:mt-8
                  sm:gap-x-6
                "
              >
                {approachPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.1em]
                        text-[#68736B]
                        dark:text-white/40
                        sm:text-[11px]
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div>
              {/* Protection intelligence */}

              <div
                className="
                  border-y
                  border-black/[0.08]
                  py-6
                  dark:border-white/[0.10]
                  sm:py-7
                "
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
                      mt-0.5
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#ADD132]/35
                      text-[#6D900B]
                      dark:text-[#ADD132]
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <ShieldCheck
                      size={19}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.17em]
                        text-[#6D900B]
                        dark:text-[#ADD132]
                        sm:text-[11px]
                      "
                    >
                      Protection intelligence
                    </p>

                    <p
                      className="
                        mt-2.5
                        text-[13px]
                        leading-6
                        text-[#657169]
                        dark:text-white/45
                        sm:text-[14px]
                        sm:leading-7
                      "
                    >
                      Visibility is the starting point. Intelligence turns
                      visibility into action.
                    </p>
                  </div>
                </div>
              </div>

              {/* About link */}

              <Link
                to="/about"
                className="
                  group
                  mt-7
                  flex
                  min-h-[60px]
                  w-full
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-black/[0.12]
                  pb-4
                  text-[#152019]
                  transition-colors
                  duration-300
                  hover:border-[#ADD132]
                  dark:border-white/[0.12]
                  dark:text-white
                  dark:hover:border-[#ADD132]
                  sm:mt-8
                  sm:min-h-[66px]
                  sm:pb-5
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#6D900B]
                      dark:text-[#ADD132]
                      sm:text-[10px]
                    "
                  >
                    Explore
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-[16px]
                      font-black
                      tracking-[-0.02em]
                      sm:text-[18px]
                    "
                  >
                    Learn more about TrackOwls
                  </p>
                </div>

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#ADD132]/40
                    transition-all
                    duration-300
                    group-hover:border-[#ADD132]
                    group-hover:bg-[#ADD132]
                    group-hover:text-[#152019]
                    sm:h-11
                    sm:w-11
                  "
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={2}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </span>
              </Link>
            </div>
          </div>
        </section>
        
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}

      <style>{`
        @keyframes trackowls-line {
          0%,
          100% {
            transform: scaleX(0.25);
            opacity: 0.35;
          }

          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @media (max-width: 639px) {
          .trackowls-container {
            width: 100%;
            max-width: 100%;
            overflow: hidden;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trackowls-container *,
          .trackowls-container *::before,
          .trackowls-container *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

export default HomeAbout;