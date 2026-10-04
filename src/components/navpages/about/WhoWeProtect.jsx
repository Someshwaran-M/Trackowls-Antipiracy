import React from "react";
import { ArrowUpRight } from "lucide-react";

function WhoWeProtect() {
  const protectedIndustries = [
    {
      number: "01",
      short: "Entertainment",
      title: "Film & Media",
      body: "Protect movies, shows, music and other digital entertainment from unauthorized distribution and misuse.",
    },
    {
      number: "02",
      short: "Education",
      title: "Creators & Courses",
      body: "Help educators, trainers and creators monitor unauthorized sharing of courses, learning materials and digital content.",
    },
    {
      number: "03",
      short: "Commerce",
      title: "Brands & Businesses",
      body: "Support businesses in identifying fake websites, impersonation, unauthorized brand use and digital misuse.",
    },
    {
      number: "04",
      short: "Publishing",
      title: "Publishers",
      body: "Help publishers and digital media organizations maintain visibility over unauthorized copies and content distribution.",
    },
    {
      number: "05",
      short: "Independent",
      title: "Creators",
      body: "Give independent creators greater visibility into where their original digital work appears across the internet.",
    },
    {
      number: "06",
      short: "Digital Assets",
      title: "IP Owners",
      body: "Help intellectual property owners identify online misuse and understand activity surrounding their valuable assets.",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F5F7F2]
        py-20
        dark:bg-[#0A100D]
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
          dark:bg-[#ADD132]/[0.02]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[-180px]
          h-[420px]
          w-[420px]
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

          {/* Heading */}

          <div className="lg:col-span-7">

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
                Who We Protect
              </p>

            </div>

            <h2
              className="
                mt-6
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
              Protection across
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                digital industries.
              </span>
            </h2>

          </div>

          {/* Description */}

          <div className="lg:col-span-5">

            <p
              className="
                about-manrope
                max-w-xl
                text-[14px]
                leading-7
                text-[#687368]
                dark:text-white/50
                sm:text-base
                sm:leading-8
              "
            >
              From entertainment and education to commerce and independent
              creators, TrackOwls is designed around the different ways
              digital assets can be misused online.
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
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                "
              >
                Digital Protection Ecosystem
              </span>

            </div>

          </div>

        </div>

        {/* =======================================================
            INDUSTRY GRID
        ======================================================= */}

        <div
          className="
            mt-14
            border-l
            border-t
            border-[#172117]/10
            dark:border-white/[0.08]
            sm:grid-cols-2
            lg:mt-20
            lg:grid-cols-3
          "
        >

          <div className="grid sm:grid-cols-2 lg:grid-cols-3">

            {protectedIndustries.map((item) => (

              <div
                key={item.number}
                className="
                  group
                  relative
                  min-h-[225px]
                  border-b
                  border-r
                  border-[#172117]/10
                  p-7
                  transition-all
                  duration-500
                  hover:bg-white
                  dark:border-white/[0.08]
                  dark:hover:bg-white/[0.018]
                  sm:min-h-[245px]
                  sm:p-9
                  lg:min-h-[275px]
                  lg:p-10
                "
              >

                {/* Hover line */}

                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-0
                    bg-[#ADD132]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* =================================================
                    TOP
                ================================================= */}

                <div className="flex items-center justify-between">

                  <span
                    className="
                      about-manrope
                      text-[10px]
                      font-extrabold
                      tracking-[0.2em]
                      text-[#829082]
                      dark:text-white/30
                    "
                  >
                    {item.number}
                  </span>

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#172117]/10
                      text-[#7A960F]
                      opacity-40
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:border-[#ADD132]
                      group-hover:bg-[#ADD132]
                      group-hover:text-[#101800]
                      group-hover:opacity-100
                      dark:border-white/[0.1]
                      dark:text-[#ADD132]
                    "
                  >
                    <ArrowUpRight size={15} />
                  </div>

                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="mt-10">

                  <p
                    className="
                      about-manrope
                      text-[9px]
                      font-extrabold
                      uppercase
                      tracking-[0.22em]
                      text-[#7B857B]
                      dark:text-white/30
                    "
                  >
                    {item.short}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-[26px]
                      font-extrabold
                      leading-none
                      tracking-[-0.045em]
                      text-[#152019]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      dark:text-white
                      sm:text-3xl
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
                      group-hover:w-12
                    "
                  />

                  <p
                    className="
                      about-manrope
                      mt-5
                      max-w-sm
                      text-[14px]
                      leading-7
                      text-[#667267]
                      dark:text-white/50
                      sm:text-base
                      sm:leading-8
                    "
                  >
                    {item.body}
                  </p>

                </div>

              </div>

            ))}

          </div>

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
            Whether you are a global business, publisher, educator or
            independent creator, TrackOwls helps bring greater visibility
            to your digital presence.
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
              Built for the digital ecosystem
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhoWeProtect;