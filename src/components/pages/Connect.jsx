import React from "react";
import {
  ShieldCheck,
  Globe2,
  Search,
  ScanSearch,
  Fingerprint,
} from "lucide-react";

function Connect() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F5F8F0]
        py-12
        dark:bg-[#050705]
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#ADD132]/[0.06]
          blur-[90px]
          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[110px]
          md:h-[550px]
          md:w-[550px]
          lg:h-[700px]
          lg:w-[700px]
          lg:blur-[150px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          px-4
          sm:px-7
          md:px-10
          lg:px-14
          xl:px-16
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            justify-between
            gap-5
            sm:gap-7
            md:flex-row
            md:items-end
            md:gap-10
          "
        >
          <div className="min-w-0">
            {/* Label */}
            <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-[#ADD132]
                  shadow-[0_0_12px_#ADD132]
                "
              />

              <span
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.22em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:text-[9px]
                  sm:tracking-[0.3em]
                  md:text-[10px]
                  md:tracking-[0.35em]
                "
              >
                Digital Intelligence
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-4xl
                text-[40px]
                font-black
                leading-[0.92]
                tracking-[-0.055em]
                text-[#152019]
                dark:text-white
                sm:text-[50px]
                sm:leading-[0.88]
                md:text-[62px]
                lg:text-[76px]
                xl:text-[88px]
              "
            >
              Every signal
              <br />
              <span className="text-[#6D900B] dark:text-[#ADD132]">
                connects.
              </span>
            </h2>
          </div>

          {/* Description */}
          <p
            className="
              max-w-sm
              text-[12px]
              leading-5
              text-[#707B72]
              dark:text-white/35
              sm:text-[13px]
              sm:leading-6
              md:text-[14px]
              md:leading-7
              lg:pb-1
            "
          >
            TrackOwls connects fragmented digital signals into one
            continuously evolving picture of your digital ecosystem.
          </p>
        </div>

        {/* =====================================================
            NETWORK
        ===================================================== */}

        <div
          className="
            relative
            mt-10
            min-h-[470px]
            overflow-hidden
            sm:mt-14
            sm:min-h-[540px]
            md:mt-16
            md:min-h-[600px]
            lg:mt-20
            lg:min-h-[650px]
          "
        >
          {/* ===================================================
              CONNECTION LINES
          =================================================== */}

          <svg
            className="
              pointer-events-none
              absolute
              inset-0
              h-full
              w-full
            "
            viewBox="0 0 1200 650"
            preserveAspectRatio="none"
          >
            <path
              d="M120 120 C350 80 420 280 600 325"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[#ADD132]/20"
            />

            <path
              d="M1100 110 C900 100 850 270 600 325"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[#ADD132]/20"
            />

            <path
              d="M150 510 C350 500 430 390 600 325"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[#ADD132]/20"
            />

            <path
              d="M1060 520 C850 510 790 400 600 325"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[#ADD132]/20"
            />

            <path
              d="M600 70 C600 170 600 230 600 325"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[#ADD132]/20"
            />

            {/* Moving signals */}

            <circle r="3.5" fill="#ADD132">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path="M120 120 C350 80 420 280 600 325"
              />
            </circle>

            <circle r="3.5" fill="#ADD132">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path="M1100 110 C900 100 850 270 600 325"
              />
            </circle>

            <circle r="3.5" fill="#ADD132">
              <animateMotion
                dur="4.5s"
                repeatCount="indefinite"
                path="M150 510 C350 500 430 390 600 325"
              />
            </circle>
          </svg>

          {/* ===================================================
              CENTRAL INTELLIGENCE POINT
          =================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <div
              className="
                absolute
                -inset-12
                animate-pulse
                rounded-full
                bg-[#ADD132]/10
                blur-3xl
                sm:-inset-16
                md:-inset-20
              "
            />

            <div
              className="
                relative
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                border
                border-[#ADD132]/30
                bg-[#F5F8F0]/80
                shadow-[0_0_70px_rgba(173,209,50,0.15)]
                backdrop-blur-xl
                dark:bg-[#050705]/80
                sm:h-32
                sm:w-32
                md:h-36
                md:w-36
                lg:h-40
                lg:w-40
              "
            >
              <div
                className="
                  absolute
                  inset-3
                  animate-[spin_20s_linear_infinite]
                  rounded-full
                  border
                  border-dashed
                  border-[#ADD132]/25
                  sm:inset-4
                  md:inset-5
                "
              />

              <div
                className="
                  absolute
                  inset-6
                  rounded-full
                  border
                  border-[#ADD132]/20
                  sm:inset-8
                  md:inset-10
                "
              />

              <ShieldCheck
                className="
                  relative
                  h-6
                  w-6
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:h-8
                  sm:w-8
                  md:h-9
                  md:w-9
                  lg:h-10
                  lg:w-10
                "
              />
            </div>

            {/* Core label */}
            <div
              className="
                absolute
                left-1/2
                top-full
                mt-4
                -translate-x-1/2
                whitespace-nowrap
                text-center
                sm:mt-5
                md:mt-6
              "
            >
              <p
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.22em]
                  text-[#152019]
                  dark:text-white
                  sm:text-[9px]
                  sm:tracking-[0.26em]
                  md:text-[10px]
                  md:tracking-[0.3em]
                "
              >
                TrackOwls Core
              </p>

              <p
                className="
                  mt-1
                  text-[7px]
                  uppercase
                  tracking-[0.14em]
                  text-[#89938B]
                  dark:text-white/25
                  sm:text-[8px]
                  sm:tracking-[0.18em]
                  md:text-[9px]
                  md:tracking-[0.2em]
                "
              >
                Intelligence Layer
              </p>
            </div>
          </div>

          {/* ===================================================
              TOP NODE
          =================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-2
              -translate-x-1/2
              text-center
              sm:top-3
              md:top-4
            "
          >
            <div
              className="
                mx-auto
                mb-2
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#ADD132]/25
                bg-[#ADD132]/10
                sm:mb-3
                sm:h-9
                sm:w-9
                md:mb-4
                md:h-10
                md:w-10
              "
            >
              <Globe2 className="h-3.5 w-3.5 text-[#6D900B] dark:text-[#ADD132] sm:h-4 sm:w-4" />
            </div>

            <p
              className="
                text-[7px]
                font-black
                uppercase
                tracking-[0.16em]
                text-[#152019]
                dark:text-white
                sm:text-[8px]
                sm:tracking-[0.2em]
                md:text-[10px]
                md:tracking-[0.25em]
              "
            >
              Global Web
            </p>
          </div>

          {/* ===================================================
              LEFT TOP NODE
          =================================================== */}

          <div
            className="
              absolute
              left-[2%]
              top-[11%]
              sm:left-[4%]
              md:left-[5%]
            "
          >
            <div
              className="
                mb-2
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#ADD132]/25
                bg-[#ADD132]/10
                sm:mb-3
                sm:h-9
                sm:w-9
                md:mb-4
                md:h-10
                md:w-10
              "
            >
              <Search className="h-3.5 w-3.5 text-[#6D900B] dark:text-[#ADD132] sm:h-4 sm:w-4" />
            </div>

            <p
              className="
                text-[7px]
                font-black
                uppercase
                tracking-[0.16em]
                text-[#152019]
                dark:text-white
                sm:text-[8px]
                sm:tracking-[0.2em]
                md:text-[10px]
                md:tracking-[0.25em]
              "
            >
              Discovery
            </p>

            <p
              className="
                mt-0.5
                text-[7px]
                text-[#8A948C]
                dark:text-white/25
                sm:text-[8px]
                md:text-[9px]
              "
            >
              Digital signals
            </p>
          </div>

          {/* ===================================================
              RIGHT TOP NODE
          =================================================== */}

          <div
            className="
              absolute
              right-[2%]
              top-[10%]
              text-right
              sm:right-[4%]
              md:right-[5%]
            "
          >
            <div
              className="
                mb-2
                ml-auto
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#ADD132]/25
                bg-[#ADD132]/10
                sm:mb-3
                sm:h-9
                sm:w-9
                md:mb-4
                md:h-10
                md:w-10
              "
            >
              <ScanSearch className="h-3.5 w-3.5 text-[#6D900B] dark:text-[#ADD132] sm:h-4 sm:w-4" />
            </div>

            <p
              className="
                text-[7px]
                font-black
                uppercase
                tracking-[0.16em]
                text-[#152019]
                dark:text-white
                sm:text-[8px]
                sm:tracking-[0.2em]
                md:text-[10px]
                md:tracking-[0.25em]
              "
            >
              Detection
            </p>

            <p
              className="
                mt-0.5
                text-[7px]
                text-[#8A948C]
                dark:text-white/25
                sm:text-[8px]
                md:text-[9px]
              "
            >
              Threat signals
            </p>
          </div>

          {/* ===================================================
              LEFT BOTTOM NODE
          =================================================== */}

          <div
            className="
              absolute
              bottom-[10%]
              left-[3%]
              sm:bottom-[11%]
              sm:left-[6%]
              md:bottom-[12%]
              md:left-[8%]
            "
          >
            <div
              className="
                mb-2
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#ADD132]/25
                bg-[#ADD132]/10
                sm:mb-3
                sm:h-9
                sm:w-9
                md:mb-4
                md:h-10
                md:w-10
              "
            >
              <Fingerprint className="h-3.5 w-3.5 text-[#6D900B] dark:text-[#ADD132] sm:h-4 sm:w-4" />
            </div>

            <p
              className="
                text-[7px]
                font-black
                uppercase
                tracking-[0.16em]
                text-[#152019]
                dark:text-white
                sm:text-[8px]
                sm:tracking-[0.2em]
                md:text-[10px]
                md:tracking-[0.25em]
              "
            >
              Identity
            </p>

            <p
              className="
                mt-0.5
                text-[7px]
                text-[#8A948C]
                dark:text-white/25
                sm:text-[8px]
                md:text-[9px]
              "
            >
              Brand & IP
            </p>
          </div>

          {/* ===================================================
              RIGHT BOTTOM NODE
          =================================================== */}

          <div
            className="
              absolute
              bottom-[9%]
              right-[3%]
              text-right
              sm:bottom-[10%]
              sm:right-[6%]
              md:bottom-[11%]
              md:right-[8%]
            "
          >
            <div
              className="
                mb-2
                ml-auto
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#ADD132]/25
                bg-[#ADD132]/10
                sm:mb-3
                sm:h-9
                sm:w-9
                md:mb-4
                md:h-10
                md:w-10
              "
            >
              <ShieldCheck className="h-3.5 w-3.5 text-[#6D900B] dark:text-[#ADD132] sm:h-4 sm:w-4" />
            </div>

            <p
              className="
                text-[7px]
                font-black
                uppercase
                tracking-[0.16em]
                text-[#152019]
                dark:text-white
                sm:text-[8px]
                sm:tracking-[0.2em]
                md:text-[10px]
                md:tracking-[0.25em]
              "
            >
              Protection
            </p>

            <p
              className="
                mt-0.5
                text-[7px]
                text-[#8A948C]
                dark:text-white/25
                sm:text-[8px]
                md:text-[9px]
              "
            >
              Action layer
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div
          className="
            mt-6
            border-t
            border-black/[0.06]
            pt-5
            dark:border-white/[0.06]
            sm:mt-8
            sm:pt-6
            md:mt-10
          "
        >
          <div
            className="
              flex
              flex-col
              gap-2
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                text-[8px]
                font-black
                uppercase
                tracking-[0.18em]
                text-[#7E8981]
                dark:text-white/25
                sm:text-[9px]
                sm:tracking-[0.25em]
              "
            >
              Many signals. One intelligence layer.
            </p>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ADD132]" />

              <span
                className="
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:text-[8px]
                  sm:tracking-[0.22em]
                "
              >
                Intelligence Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;