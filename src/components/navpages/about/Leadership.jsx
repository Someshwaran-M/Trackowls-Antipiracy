import React from "react";
import { ArrowUpRight, MoveUpRight } from "lucide-react";

function Leadership() {
  return (
    <section
      id="leadership"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#F7FAF4]
        text-[#152019]
        dark:bg-[#070A07]
        dark:text-white
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-100px]
          top-[100px]
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#ADD132]/10
          blur-[80px]
          dark:bg-[#ADD132]/[0.025]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          bottom-[-100px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#ADD132]/10
          blur-[100px]
          dark:bg-[#ADD132]/[0.025]
        "
      />

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-[#ADD132]" />

      {/* =========================================================
          LARGE BACKGROUND NUMBER
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-45px]
          right-[-15px]
          select-none
          text-[280px]
          font-black
          leading-none
          tracking-[-0.12em]
          text-[#152019]/[0.035]
          dark:text-[#ADD132]/[0.035]
          sm:text-[350px]
          lg:text-[430px]
        "
      >
        02
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1500px]
          flex-col
          px-5
          py-7
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
        "
      >
        {/* =======================================================
            TOP HEADER
        ======================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[#152019]/10
            pb-5
            dark:border-white/[0.08]
            sm:pb-6
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-px
                w-10
                bg-[#ADD132]
                sm:w-14
              "
            />

            <span
              className="
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.3em]
                text-[#647064]
                dark:text-white/40
                sm:text-[10px]
              "
            >
              Leadership
            </span>
          </div>

          <div
            className="
              flex
              items-center
              gap-3
              text-[#6E796F]
              dark:text-white/40
            "
          >
            <span
              className="
                text-[24px]
                font-black
                leading-none
                tracking-[-0.04em]
              "
            >
              02
            </span>

            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================== */}

        <div
          className="
            flex
            flex-1
            flex-col
            justify-center
            py-10
            sm:py-12
            lg:py-14
          "
        >
          {/* =====================================================
              INTRO
          ====================================================== */}

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[1fr_0.75fr]
              lg:items-end
              lg:gap-16
            "
          >
            {/* Heading */}

            <div>
              <p
                className="
                  mb-5
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.28em]
                  text-[#769900]
                  dark:text-[#ADD132]
                "
              >
                Leadership
              </p>

              <h1
                className="
                  max-w-[760px]
                  text-[48px]
                  font-black
                  leading-[0.9]
                  tracking-[-0.07em]
                  text-[#152019]
                  dark:text-white
                  sm:text-[58px]
                  md:text-[68px]
                  lg:text-[78px]
                "
              >
                People behind
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  the vision.
                </span>
              </h1>
            </div>

            {/* Description */}

            <div className="lg:pb-2">
              <div className="mb-5 h-[3px] w-12 bg-[#ADD132]" />

              <p
                className="
                  max-w-[390px]
                  text-[13px]
                  font-medium
                  leading-7
                  text-[#5F6B62]
                  dark:text-white/50
                  sm:text-[14px]
                "
              >
                TrackOwls is being built with a focus on practical digital
                protection and intelligent monitoring.
              </p>
            </div>
          </div>

          {/* =====================================================
              LEADERSHIP NUMBER BAR
          ====================================================== */}

          <div
            className="
              relative
              mt-12
              sm:mt-14
              lg:mt-16
            "
          >
            {/* Horizontal connector */}

            <div
              className="
                pointer-events-none
                absolute
                left-0
                right-0
                top-1/2
                hidden
                h-px
                -translate-y-1/2
                bg-[#152019]/10
                dark:bg-white/[0.08]
                lg:block
              "
            />

            


            

            {/* =================================================
                FOUNDER / CO-FOUNDER CARDS
            ================================================= */}

            <div
              className="
                relative
                z-10
                grid
                gap-5
                md:grid-cols-2
                lg:gap-6
              "
            >
              {/* =================================================
                  FOUNDER
              ================================================= */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[12px]
                  border
                  border-[#152019]/10
                  bg-[#FFFFFF]
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_22px_45px_rgba(20,45,25,0.10)]
                  dark:border-white/[0.08]
                  dark:bg-[#0D130F]
                  dark:hover:border-[#ADD132]/25
                  sm:p-7
                  lg:p-8
                "
              >
                {/* Top */}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        text-[9px]
                        font-black
                        tracking-[0.18em]
                        text-[#789900]
                        dark:text-[#ADD132]
                      "
                    >
                      01
                    </span>

                    <span
                      className="
                        h-px
                        w-8
                        bg-[#152019]/15
                        dark:bg-white/15
                      "
                    />

                    <span
                      className="
                        text-[8px]
                        font-extrabold
                        uppercase
                        tracking-[0.25em]
                        text-[#687368]
                        dark:text-white/35
                      "
                    >
                      Founder
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#152019]/10
                      transition-all
                      duration-300
                      group-hover:border-[#ADD132]
                      group-hover:bg-[#ADD132]
                      dark:border-white/10
                    "
                  >
                    <MoveUpRight
                      size={15}
                      strokeWidth={1.6}
                      className="
                        text-[#789900]
                        transition-colors
                        duration-300
                        group-hover:text-[#101800]
                        dark:text-[#ADD132]
                      "
                    />
                  </div>
                </div>

                {/* Founder Name */}

                <div className="mt-9">
                  <p
                    className="
                      text-[8px]
                      font-extrabold
                      uppercase
                      tracking-[0.25em]
                      text-[#7B867D]
                      dark:text-white/25
                    "
                  >
                    Founder
                  </p>

                  <h3
                    className="
                      mt-2
                      text-[28px]
                      font-black
                      leading-none
                      tracking-[-0.055em]
                      text-[#152019]
                      dark:text-white
                      sm:text-[34px]
                    "
                  >
                    P Dhanalakshmi
                  </h3>
                </div>

                {/* Bottom */}

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        h-[3px]
                        w-12
                        bg-[#ADD132]
                        transition-all
                        duration-500
                        group-hover:w-20
                      "
                    />

                    <span
                      className="
                        h-px
                        w-8
                        bg-[#152019]/10
                        dark:bg-white/10
                      "
                    />
                  </div>

                  <span
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#7B867D]
                      dark:text-white/25
                    "
                  >
                    TrackOwls
                  </span>
                </div>
              </div>

              {/* =================================================
                  CO-FOUNDER
              ================================================= */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[12px]
                  border
                  border-[#152019]/10
                  bg-[#FFFFFF]
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_22px_45px_rgba(20,45,25,0.10)]
                  dark:border-white/[0.08]
                  dark:bg-[#0D130F]
                  dark:hover:border-[#ADD132]/25
                  sm:p-7
                  lg:p-8
                "
              >
                {/* Top */}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        text-[9px]
                        font-black
                        tracking-[0.18em]
                        text-[#789900]
                        dark:text-[#ADD132]
                      "
                    >
                      02
                    </span>

                    <span
                      className="
                        h-px
                        w-8
                        bg-[#152019]/15
                        dark:bg-white/15
                      "
                    />

                    <span
                      className="
                        text-[8px]
                        font-extrabold
                        uppercase
                        tracking-[0.25em]
                        text-[#687368]
                        dark:text-white/35
                      "
                    >
                      Co-Founder
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#152019]/10
                      transition-all
                      duration-300
                      group-hover:border-[#ADD132]
                      group-hover:bg-[#ADD132]
                      dark:border-white/10
                    "
                  >
                    <MoveUpRight
                      size={15}
                      strokeWidth={1.6}
                      className="
                        text-[#789900]
                        transition-colors
                        duration-300
                        group-hover:text-[#101800]
                        dark:text-[#ADD132]
                      "
                    />
                  </div>
                </div>

                {/* Co-Founder Name */}

                <div className="mt-9">
                  <p
                    className="
                      text-[8px]
                      font-extrabold
                      uppercase
                      tracking-[0.25em]
                      text-[#7B867D]
                      dark:text-white/25
                    "
                  >
                    Co-Founder
                  </p>

                  <h3
                    className="
                      mt-2
                      text-[28px]
                      font-black
                      leading-none
                      tracking-[-0.055em]
                      text-[#152019]
                      dark:text-white
                      sm:text-[34px]
                    "
                  >
                    Shamsath Begum
                  </h3>
                </div>

                {/* Bottom */}

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        h-[3px]
                        w-12
                        bg-[#ADD132]
                        transition-all
                        duration-500
                        group-hover:w-20
                      "
                    />

                    <span
                      className="
                        h-px
                        w-8
                        bg-[#152019]/10
                        dark:bg-white/10
                      "
                    />
                  </div>

                  <span
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#7B867D]
                      dark:text-white/25
                    "
                  >
                    TrackOwls
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ADD132]/40" />
    </section>
  );
}

export default Leadership;