import React from "react";
import {
  ArrowRight,
  ScanSearch,
  BrainCircuit,
  ShieldCheck,
  Globe2,
} from "lucide-react";

function WhatWeDo() {
  const capabilities = [
    {
      number: "01",
      title: "Digital Visibility",
      icon: Globe2,
      text: "Understand where your digital content and assets appear across the online environment.",
    },
    {
      number: "02",
      title: "Content Discovery",
      icon: ScanSearch,
      text: "Identify potential instances of unauthorized use and distribution of digital content.",
    },
    {
      number: "03",
      title: "Digital Intelligence",
      icon: BrainCircuit,
      text: "Turn digital activity into meaningful intelligence that helps organizations understand emerging threats.",
    },
    {
      number: "04",
      title: "IP Protection",
      icon: ShieldCheck,
      text: "Support organizations in protecting valuable intellectual property and digital assets.",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7FAF4]
        py-20
        dark:bg-[#070A07]
        sm:py-24
        md:py-28
        lg:py-32
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[-180px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#ADD132]/[0.045]
          blur-[110px]
          dark:bg-[#ADD132]/[0.025]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-[-180px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#7A960F]/[0.035]
          blur-[110px]
          dark:bg-[#ADD132]/[0.018]
        "
      />

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-[1450px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
        "
      >

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">

          {/* Left heading */}

          <div className="lg:col-span-8">

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-[#ADD132] sm:w-14" />

              <p
                className="
                  about-manrope
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.3em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-xs
                "
              >
                What We Do
              </p>

            </div>

            <h2
              className="
                mt-6
                max-w-4xl
                text-[42px]
                font-extrabold
                leading-[0.91]
                tracking-[-0.065em]
                text-[#152019]
                dark:text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Visibility.
              <br />
              Intelligence.
              <br />

              <span className="text-[#789900] dark:text-[#ADD132]">
                Protection.
              </span>
            </h2>

          </div>

          {/* Right description */}

          <div className="lg:col-span-4">

            <p
              className="
                about-manrope
                max-w-lg
                text-[14px]
                leading-7
                text-[#687368]
                dark:text-white/50
                sm:text-base
                sm:leading-8
              "
            >
              We combine digital monitoring, intelligent discovery and
              protection workflows to help organizations understand what is
              happening around their valuable digital assets.
            </p>

            <div className="mt-7 flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-[#ADD132]" />

              <span
                className="
                  about-manrope
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.2em]
                  text-[#697469]
                  dark:text-white/35
                "
              >
                TrackOwls Protection Ecosystem
              </span>

            </div>

          </div>

        </div>

        {/* =======================================================
            CAPABILITY LIST
        ======================================================= */}

        <div
          className="
            mt-14
            border-t
            border-[#172117]/10
            dark:border-white/[0.08]
            lg:mt-20
          "
        >

          {capabilities.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="
                  group
                  relative
                  grid
                  gap-7
                  border-b
                  border-[#172117]/10
                  py-9
                  transition-all
                  duration-500
                  dark:border-white/[0.08]
                  sm:py-11
                  md:grid-cols-[90px_0.85fr_1.15fr]
                  md:items-center
                  md:gap-10
                  lg:py-14
                "
              >

                {/* Hover indicator */}

                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[2px]
                    origin-top
                    scale-y-0
                    bg-[#ADD132]
                    transition-transform
                    duration-500
                    group-hover:scale-y-100
                  "
                />

                {/* =================================================
                    NUMBER + ICON
                ================================================= */}

                <div className="flex items-center gap-4">

                  <span
                    className="
                      about-manrope
                      text-[10px]
                      font-extrabold
                      tracking-[0.2em]
                      text-[#899489]
                      dark:text-white/25
                      sm:text-[11px]
                    "
                  >
                    {item.number}
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#172117]/10
                      bg-white/60
                      text-[#789900]
                      transition-all
                      duration-300
                      group-hover:border-[#ADD132]
                      group-hover:bg-[#ADD132]
                      group-hover:text-[#101800]
                      dark:border-white/[0.09]
                      dark:bg-white/[0.025]
                      dark:text-[#ADD132]
                    "
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <div>

                  <h3
                    className="
                      text-[27px]
                      font-extrabold
                      leading-none
                      tracking-[-0.045em]
                      text-[#152019]
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      dark:text-white
                      sm:text-3xl
                      lg:text-4xl
                    "
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
                      mt-4
                      h-[2px]
                      w-7
                      bg-[#ADD132]
                      transition-all
                      duration-500
                      group-hover:w-14
                    "
                  />

                </div>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <div className="flex items-center gap-5">

                  <p
                    className="
                      about-manrope
                      max-w-2xl
                      text-[14px]
                      leading-7
                      text-[#687368]
                      dark:text-white/50
                      sm:text-base
                      sm:leading-8
                    "
                  >
                    {item.text}
                  </p>

                  <div
                    className="
                      hidden
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#172117]/10
                      text-[#789900]
                      opacity-40
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:border-[#ADD132]
                      group-hover:bg-[#ADD132]
                      group-hover:text-[#101800]
                      group-hover:opacity-100
                      dark:border-white/[0.1]
                      dark:text-[#ADD132]
                      sm:flex
                    "
                  >
                    <ArrowRight size={17} />
                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-[#172117]/10
            pt-7
            dark:border-white/[0.08]
            sm:flex-row
            sm:items-center
            sm:justify-between
            lg:mt-16
          "
        >

          <p
            className="
              about-manrope
              max-w-2xl
              text-xs
              leading-6
              text-[#7A857A]
              dark:text-white/35
              sm:text-sm
            "
          >
            From discovery to protection, every capability works together
            to create a clearer view of the digital environment.
          </p>

          <div className="flex shrink-0 items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-[#ADD132]" />

            <span
              className="
                about-manrope
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-[#6F8D08]
                dark:text-[#ADD132]
              "
            >
              Scan • Detect • Remove • Protect
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhatWeDo;