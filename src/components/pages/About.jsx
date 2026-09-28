import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Target,
  Eye,
  Globe,
  LockKeyhole,
  CheckCircle2,
  ScanSearch,
  Users,
  CalendarDays,
} from "lucide-react";

function About() {
  const capabilities = [
    {
      icon: Globe,
      title: "Digital Visibility",
      text: "Understand where your digital content and assets appear across the online environment.",
    },
    {
      icon: ScanSearch,
      title: "Content Discovery",
      text: "Identify potential instances of unauthorized use and distribution of digital content.",
    },
    {
      icon: LockKeyhole,
      title: "IP Protection",
      text: "Support organizations in protecting valuable intellectual property and digital assets.",
    },
    {
      icon: Shield,
      title: "Threat Protection",
      text: "Bring together monitoring and intelligence to help identify digital threats.",
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
          border-[#182218]/10
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
            backgroundImage: `
              linear-gradient(rgba(91,120,45,0.55) 1px, transparent 1px),
              linear-gradient(90deg, rgba(91,120,45,0.55) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Main glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            top-10
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#ADD132]/10
            blur-[110px]
            dark:bg-[#ADD132]/[0.06]
            sm:-right-40
            sm:h-[420px]
            sm:w-[420px]
            sm:blur-[130px]
            lg:h-[500px]
            lg:w-[500px]
            lg:blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-100px]
            left-[-100px]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#ADD132]/5
            blur-[100px]
            dark:hidden
            sm:h-[350px]
            sm:w-[350px]
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
          <div className="max-w-4xl">
            {/* Label */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#6F8D08]/20
                bg-[#ADD132]/[0.07]
                px-3
                py-1.5
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#6F8D08]
                dark:border-[#ADD132]/20
                dark:bg-[#ADD132]/[0.05]
                dark:text-[#ADD132]
                sm:px-4
                sm:py-2
                sm:text-[9px]
                md:text-[10px]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132] shadow-[0_0_10px_#ADD132]" />
              About TrackOwls
            </div>

            {/* Heading */}

            <h1
              className="
                mt-5
                text-[42px]
                font-black
                leading-[0.96]
                tracking-[-0.055em]
                text-[#152019]
                dark:text-white
                sm:mt-7
                sm:text-[56px]
                md:text-[68px]
                lg:text-[82px]
                xl:text-[92px]
              "
            >
              Protecting the
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                digital ecosystem.
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-2xl
                text-[12px]
                leading-6
                text-[#667267]
                dark:text-white/45
                sm:mt-7
                sm:text-[14px]
                sm:leading-7
                md:text-[15px]
                md:leading-8
              "
            >
              TrackOwls Anti-Piracy Private Limited is focused on helping
              organizations discover, monitor and protect their digital
              content, intellectual property and online presence.
            </p>

            {/* Hero stats */}

            <div
              className="
                mt-7
                grid
                max-w-[650px]
                grid-cols-3
                gap-2
                sm:mt-9
                sm:gap-3
                md:gap-4
              "
            >
              <HeroStat value="2026" label="Founded" />
              <HeroStat value="24/7" label="Intelligence" />
              <HeroStat value="360°" label="Visibility" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="
          relative
          py-14
          sm:py-20
          md:py-24
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            max-w-[1500px]
            px-4
            sm:px-7
            md:px-10
            lg:px-12
          "
        >
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
                  tracking-[0.25em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-[9px]
                  md:text-xs
                  md:tracking-[0.3em]
                "
              >
                Who We Are
              </p>

              <h2
                className="
                  mt-3
                  text-[30px]
                  font-black
                  leading-[1.02]
                  tracking-[-0.045em]
                  text-[#152019]
                  dark:text-white
                  sm:mt-5
                  sm:text-4xl
                  md:text-5xl
                "
              >
                A new approach to
                <span className="text-[#789900] dark:text-[#ADD132]">
                  {" "}
                  digital protection.
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
                  dark:text-white/45
                  sm:text-[14px]
                  sm:leading-7
                  md:text-base
                  md:leading-8
                "
              >
                The internet has transformed how content is created,
                distributed and consumed. At the same time, unauthorized
                copying, distribution and misuse can create significant
                challenges for digital businesses and content owners.
              </p>

              <p
                className="
                  mt-4
                  text-[12px]
                  leading-6
                  text-[#687368]
                  dark:text-white/45
                  sm:mt-6
                  sm:text-[14px]
                  sm:leading-7
                  md:text-base
                  md:leading-8
                "
              >
                TrackOwls is designed around visibility, intelligence and
                protection — helping organizations understand their digital
                environment and identify potential threats affecting their
                content and intellectual property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
      ===================================================== */}

      <section
        className="
          border-y
          border-[#172117]/10
          bg-[#EDF3E8]
          py-14
          dark:border-white/[0.06]
          dark:bg-white/[0.015]
          sm:py-20
          md:py-24
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            max-w-[1500px]
            px-4
            sm:px-7
            md:px-10
            lg:px-12
          "
        >
          <div
            className="
              grid
              gap-px
              overflow-hidden
              rounded-[20px]
              border
              border-[#273326]/10
              bg-[#273326]/10
              dark:border-white/[0.07]
              dark:bg-white/[0.07]
              md:grid-cols-2
              md:rounded-3xl
            "
          >
            {/* Mission */}

            <div
              className="
                bg-white/80
                p-5
                dark:bg-[#080B08]
                sm:p-8
                md:p-10
                lg:p-14
              "
            >
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
                  sm:h-12
                  sm:w-12
                  sm:rounded-2xl
                  md:h-14
                  md:w-14
                "
              >
                <Target size={21} className="md:h-[25px] md:w-[25px]" />
              </div>

              <p
                className="
                  mt-5
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:mt-7
                  sm:text-[9px]
                  md:mt-8
                  md:text-xs
                  md:tracking-[0.25em]
                "
              >
                Our Mission
              </p>

              <h3
                className="
                  mt-3
                  text-[21px]
                  font-black
                  leading-tight
                  tracking-[-0.025em]
                  text-[#152019]
                  dark:text-white
                  sm:mt-4
                  sm:text-2xl
                  md:text-3xl
                "
              >
                Make digital protection more intelligent.
              </h3>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-[11px]
                  leading-6
                  text-[#687368]
                  dark:text-white/40
                  sm:mt-5
                  sm:text-sm
                  sm:leading-7
                  md:text-base
                "
              >
                Our mission is to help organizations gain better visibility
                into their digital footprint and build stronger protection
                around the content and intellectual property they value.
              </p>
            </div>

            {/* Vision */}

            <div
              className="
                bg-white/80
                p-5
                dark:bg-[#080B08]
                sm:p-8
                md:p-10
                lg:p-14
              "
            >
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
                  sm:h-12
                  sm:w-12
                  sm:rounded-2xl
                  md:h-14
                  md:w-14
                "
              >
                <Eye size={21} className="md:h-[25px] md:w-[25px]" />
              </div>

              <p
                className="
                  mt-5
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:mt-7
                  sm:text-[9px]
                  md:mt-8
                  md:text-xs
                  md:tracking-[0.25em]
                "
              >
                Our Vision
              </p>

              <h3
                className="
                  mt-3
                  text-[21px]
                  font-black
                  leading-tight
                  tracking-[-0.025em]
                  text-[#152019]
                  dark:text-white
                  sm:mt-4
                  sm:text-2xl
                  md:text-3xl
                "
              >
                A safer digital ecosystem.
              </h3>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-[11px]
                  leading-6
                  text-[#687368]
                  dark:text-white/40
                  sm:mt-5
                  sm:text-sm
                  sm:leading-7
                  md:text-base
                "
              >
                We envision a digital environment where organizations can
                create, distribute and grow their digital assets with greater
                confidence and visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

      <section
        className="
          relative
          py-14
          sm:py-20
          md:py-24
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            max-w-[1500px]
            px-4
            sm:px-7
            md:px-10
            lg:px-12
          "
        >
          <div className="max-w-2xl">
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#6F8D08]
                dark:text-[#ADD132]
                sm:text-[9px]
                md:text-xs
                md:tracking-[0.3em]
              "
            >
              What We Do
            </p>

            <h2
              className="
                mt-3
                text-[30px]
                font-black
                leading-[1.02]
                tracking-[-0.045em]
                text-[#152019]
                dark:text-white
                sm:mt-5
                sm:text-4xl
                md:text-5xl
              "
            >
              Visibility. Intelligence.
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                Protection.
              </span>
            </h2>
          </div>

          <div
            className="
              mt-8
              grid
              gap-3
              sm:mt-10
              sm:gap-4
              md:grid-cols-2
              lg:mt-12
              lg:grid-cols-4
              lg:gap-5
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
                    border-[#273326]/10
                    bg-white/70
                    p-5
                    shadow-[0_12px_35px_rgba(30,50,20,0.04)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#ADD132]/35
                    hover:bg-white
                    dark:border-white/[0.07]
                    dark:bg-white/[0.02]
                    dark:shadow-none
                    dark:hover:border-[#ADD132]/20
                    dark:hover:bg-[#ADD132]/[0.025]
                    sm:rounded-[22px]
                    sm:p-6
                    md:p-7
                    lg:rounded-3xl
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#6F8D08]/15
                      bg-[#ADD132]/10
                      text-[#6F8D08]
                      transition
                      duration-300
                      group-hover:bg-[#ADD132]/15
                      dark:border-[#ADD132]/15
                      dark:text-[#ADD132]
                      sm:h-11
                      sm:w-11
                      md:h-12
                      md:w-12
                      md:rounded-2xl
                    "
                  >
                    <Icon size={18} className="md:h-[21px] md:w-[21px]" />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-[15px]
                      font-black
                      text-[#172017]
                      dark:text-white
                      sm:mt-6
                      sm:text-base
                      md:mt-7
                      md:text-lg
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      leading-5
                      text-[#697369]
                      dark:text-white/40
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
      </section>

      {/* =====================================================
          FOUNDING + COMPANY DETAILS
      ===================================================== */}

      <section
        className="
          border-y
          border-[#172117]/10
          bg-[#EDF3E8]
          py-14
          dark:border-white/[0.06]
          dark:bg-white/[0.012]
          sm:py-20
          md:py-24
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            max-w-[1500px]
            px-4
            sm:px-7
            md:px-10
            lg:px-12
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-12
              lg:items-center
              lg:gap-12
            "
          >
            {/* Left Content */}

            <div className="lg:col-span-7">
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-[9px]
                  md:text-xs
                  md:tracking-[0.3em]
                "
              >
                TrackOwls
              </p>

              <h2
                className="
                  mt-3
                  max-w-3xl
                  text-[30px]
                  font-black
                  leading-[1.02]
                  tracking-[-0.045em]
                  text-[#152019]
                  dark:text-white
                  sm:mt-5
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Building technology for
                <span className="text-[#789900] dark:text-[#ADD132]">
                  {" "}
                  digital protection.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-[11px]
                  leading-6
                  text-[#687368]
                  dark:text-white/40
                  sm:mt-6
                  sm:text-sm
                  sm:leading-7
                  md:text-base
                "
              >
                Founded in 2026, TrackOwls Anti-Piracy Private Limited is
                developing solutions focused on digital content monitoring,
                anti-piracy, intellectual property protection and online
                threat visibility.
              </p>

              {/* Focus Areas */}

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                {[
                  "Anti-Piracy",
                  "Digital Intelligence",
                  "IP Protection",
                  "Online Monitoring",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-[#273326]/10
                      bg-white/65
                      px-3
                      py-2
                      text-[8px]
                      text-[#687368]
                      backdrop-blur-xl
                      dark:border-white/10
                      dark:bg-white/[0.025]
                      dark:text-white/40
                      sm:gap-2
                      sm:px-4
                      sm:py-2.5
                      sm:text-xs
                    "
                  >
                    <CheckCircle2
                      size={12}
                      className="shrink-0 text-[#6F8D08] dark:text-[#ADD132]"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Company Card */}

            <div className="lg:col-span-5">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#6F8D08]/15
                  bg-white/70
                  p-5
                  shadow-[0_20px_60px_rgba(40,60,20,0.06)]
                  backdrop-blur-xl
                  dark:border-[#ADD132]/15
                  dark:bg-[#ADD132]/[0.035]
                  dark:shadow-none
                  sm:rounded-3xl
                  sm:p-7
                  md:p-10
                "
              >
                {/* Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#ADD132]/10
                    blur-[70px]
                    sm:h-56
                    sm:w-56
                    sm:blur-[80px]
                  "
                />

                <div className="relative">
                  {/* Year */}

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p
                        className="
                          text-[8px]
                          uppercase
                          tracking-[0.2em]
                          text-[#778176]
                          dark:text-white/30
                          sm:text-[9px]
                          md:text-xs
                          md:tracking-[0.25em]
                        "
                      >
                        Established
                      </p>

                      <p
                        className="
                          mt-1
                          text-[54px]
                          font-black
                          leading-none
                          tracking-[-0.06em]
                          text-[#789900]
                          dark:text-[#ADD132]
                          sm:mt-3
                          sm:text-6xl
                          md:text-7xl
                        "
                      >
                        2026
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
                        border
                        border-[#6F8D08]/15
                        bg-[#ADD132]/10
                        text-[#6F8D08]
                        dark:border-[#ADD132]/15
                        dark:text-[#ADD132]
                        sm:h-12
                        sm:w-12
                        sm:rounded-2xl
                      "
                    >
                      <CalendarDays size={18} className="sm:h-5 sm:w-5" />
                    </div>
                  </div>

                  <div className="my-5 h-px bg-[#172117]/10 dark:bg-white/[0.08] sm:my-7" />

                  {/* Company */}

                  <p
                    className="
                      text-[11px]
                      font-bold
                      leading-5
                      text-[#364136]
                      dark:text-white/65
                      sm:text-sm
                      sm:leading-6
                    "
                  >
                    TrackOwls Anti-Piracy Private Limited
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      text-[#7A857A]
                      dark:text-white/30
                      sm:mt-2
                      sm:text-xs
                    "
                  >
                    Coimbatore, Tamil Nadu
                  </p>

                  {/* Founder Details */}

                  <div className="mt-5 grid gap-2 sm:mt-6 sm:grid-cols-2 sm:gap-3">
                    <div
                      className="
                        rounded-xl
                        border
                        border-[#273326]/10
                        bg-[#F5F8F0]/80
                        p-3
                        dark:border-white/[0.07]
                        dark:bg-white/[0.025]
                        sm:rounded-2xl
                        sm:p-4
                      "
                    >
                      <p
                        className="
                          text-[6px]
                          font-black
                          uppercase
                          tracking-[0.16em]
                          text-[#7B857B]
                          dark:text-white/25
                          sm:text-[7px]
                          sm:tracking-[0.2em]
                        "
                      >
                        Founder
                      </p>

                      <p
                        className="
                          mt-1
                          text-[10px]
                          font-black
                          text-[#172017]
                          dark:text-white
                          sm:mt-1.5
                          sm:text-[11px]
                          md:text-xs
                        "
                      >
                        P Dhanalakshmi
                      </p>
                    </div>

                    <div
                      className="
                        rounded-xl
                        border
                        border-[#273326]/10
                        bg-[#F5F8F0]/80
                        p-3
                        dark:border-white/[0.07]
                        dark:bg-white/[0.025]
                        sm:rounded-2xl
                        sm:p-4
                      "
                    >
                      <p
                        className="
                          text-[6px]
                          font-black
                          uppercase
                          tracking-[0.16em]
                          text-[#7B857B]
                          dark:text-white/25
                          sm:text-[7px]
                          sm:tracking-[0.2em]
                        "
                      >
                        Co-Founder
                      </p>

                      <p
                        className="
                          mt-1
                          text-[10px]
                          font-black
                          text-[#172017]
                          dark:text-white
                          sm:mt-1.5
                          sm:text-[11px]
                          md:text-xs
                        "
                      >
                        Shamsath Begum
                      </p>
                    </div>
                  </div>

                  {/* Status */}

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-[#6F8D08]/10
                      bg-[#ADD132]/5
                      px-3
                      py-2.5
                      dark:border-[#ADD132]/10
                      dark:bg-[#ADD132]/[0.03]
                      sm:mt-4
                      sm:px-4
                      sm:py-3
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7D9F00] shadow-[0_0_8px_#7D9F00] dark:bg-[#ADD132] dark:shadow-[0_0_8px_#ADD132]" />

                    <span
                      className="
                        text-[7px]
                        font-black
                        uppercase
                        tracking-[0.15em]
                        text-[#6F8D08]
                        dark:text-[#ADD132]
                        sm:text-[8px]
                        sm:tracking-[0.18em]
                      "
                    >
                      Digital Intelligence Platform
                    </span>
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

      <section
        className="
          relative
          overflow-hidden
          py-14
          sm:py-20
          md:py-24
          lg:py-28
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#ADD132]/7
            blur-[100px]
            dark:bg-[#ADD132]/5
            sm:h-[400px]
            sm:w-[400px]
            sm:blur-[130px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-4xl
            px-4
            text-center
            sm:px-7
          "
        >
          <div
            className="
              mx-auto
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
              sm:h-12
              sm:w-12
              sm:rounded-2xl
              md:h-14
              md:w-14
            "
          >
            <Shield size={21} className="md:h-[26px] md:w-[26px]" />
          </div>

          <h2
            className="
              mt-5
              text-[30px]
              font-black
              leading-[1.02]
              tracking-[-0.045em]
              text-[#152019]
              dark:text-white
              sm:mt-7
              sm:text-4xl
              md:text-5xl
            "
          >
            Protect your digital
            <br />
            <span className="text-[#789900] dark:text-[#ADD132]">
              future with TrackOwls.
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
              dark:text-white/40
              sm:mt-5
              sm:text-sm
              sm:leading-7
              md:text-base
            "
          >
            Discover how TrackOwls can help your organization gain visibility
            and strengthen its digital protection strategy.
          </p>

          <div
            className="
              mt-6
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
                py-3
                text-[10px]
                font-bold
                text-[#101800]
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
              <ArrowUpRight size={14} className="sm:h-[17px] sm:w-[17px]" />
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
                border-[#273326]/15
                bg-white/60
                px-6
                py-3
                text-[10px]
                font-semibold
                text-[#364136]
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
              <ArrowRight size={14} className="sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroStat({ value, label }) {
  return (
    <div
      className="
        rounded-xl
        border
        border-[#273326]/10
        bg-white/60
        px-3
        py-2.5
        backdrop-blur-xl
        dark:border-white/[0.07]
        dark:bg-white/[0.025]
        sm:rounded-2xl
        sm:px-4
        sm:py-3
      "
    >
      <p
        className="
          text-sm
          font-black
          tracking-[-0.04em]
          text-[#172017]
          dark:text-white
          sm:text-lg
          md:text-xl
        "
      >
        {value}
      </p>

      <p
        className="
          mt-0.5
          text-[6px]
          font-black
          uppercase
          tracking-[0.14em]
          text-[#7B857B]
          dark:text-white/30
          sm:text-[7px]
          sm:tracking-[0.18em]
        "
      >
        {label}
      </p>
    </div>
  );
}

export default About;