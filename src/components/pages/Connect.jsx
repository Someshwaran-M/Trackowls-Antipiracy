import React from "react";

import {
  ShieldCheck,
  Globe2,
  Search,
  ScanSearch,
  Fingerprint,
} from "lucide-react";

function Connect() {
  const signalPaths = {
    discovery:
      "M120 120 C350 80 420 280 600 325",

    detection:
      "M1100 110 C900 100 850 270 600 325",

    identity:
      "M150 510 C350 500 430 390 600 325",

    protection:
      "M1060 520 C850 510 790 400 600 325",

    global:
      "M600 70 C600 170 600 230 600 325",
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F5F8F0]
        py-12
        text-[#152019]
        dark:bg-[#050705]
        dark:text-white
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
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#ADD132]/30
          to-transparent
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

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
        {/* ===================================================
            HEADER
        =================================================== */}

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
          {/* LEFT */}

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
                  sm:tracking-[0.28em]
                  md:text-[10px]
                  md:tracking-[0.3em]
                "
              >
                Digital Intelligence
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-4xl
                text-[34px]
                font-black
                leading-[0.98]
                tracking-[-0.045em]
                text-[#152019]
                dark:text-white
                sm:text-[38px]
                md:text-[46px]
                lg:text-[56px]
                xl:text-[64px]
              "
            >
              Every signal
              <br />
              <span className="text-[#6D900B] dark:text-[#ADD132]">
                connects.
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}

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
              md:leading-6
              lg:pb-1
            "
          >
            TrackOwls connects fragmented digital signals into one
            continuously evolving picture of your digital ecosystem.
          </p>
        </div>

        {/* ===================================================
            NETWORK
        =================================================== */}

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
          {/* =================================================
              CONNECTION LINES + MOVING SIGNALS
          ================================================= */}

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
            aria-hidden="true"
          >
            {/* Discovery */}

            <path
              id="connect-discovery"
              d={signalPaths.discovery}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[#ADD132]/20"
            />

            {/* Detection */}

            <path
              id="connect-detection"
              d={signalPaths.detection}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[#ADD132]/20"
            />

            {/* Identity */}

            <path
              id="connect-identity"
              d={signalPaths.identity}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[#ADD132]/20"
            />

            {/* Protection */}

            <path
              id="connect-protection"
              d={signalPaths.protection}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[#ADD132]/20"
            />

            {/* Global Web */}

            <path
              id="connect-global"
              d={signalPaths.global}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[#ADD132]/20"
            />

            {/* =================================================
                MOVING SIGNAL — DISCOVERY
            ================================================= */}

            <circle
              r="3.5"
              fill="#ADD132"
              filter="url(#signalGlow)"
            >
              <animateMotion
                dur="3.8s"
                repeatCount="indefinite"
                rotate="auto"
                path={signalPaths.discovery}
              />
            </circle>

            {/* =================================================
                MOVING SIGNAL — DETECTION
            ================================================= */}

            <circle
              r="3.5"
              fill="#ADD132"
              filter="url(#signalGlow)"
            >
              <animateMotion
                dur="4.4s"
                begin="-1.6s"
                repeatCount="indefinite"
                rotate="auto"
                path={signalPaths.detection}
              />
            </circle>

            {/* =================================================
                MOVING SIGNAL — IDENTITY
            ================================================= */}

            <circle
              r="3.5"
              fill="#ADD132"
              filter="url(#signalGlow)"
            >
              <animateMotion
                dur="4.1s"
                begin="-2s"
                repeatCount="indefinite"
                rotate="auto"
                path={signalPaths.identity}
              />
            </circle>

            {/* =================================================
                MOVING SIGNAL — PROTECTION
            ================================================= */}

            <circle
              r="3.5"
              fill="#ADD132"
              filter="url(#signalGlow)"
            >
              <animateMotion
                dur="4.7s"
                begin="-2.4s"
                repeatCount="indefinite"
                rotate="auto"
                path={signalPaths.protection}
              />
            </circle>

            {/* =================================================
                MOVING SIGNAL — GLOBAL WEB
            ================================================= */}

            <circle
              r="3.5"
              fill="#ADD132"
              filter="url(#signalGlow)"
            >
              <animateMotion
                dur="3.5s"
                begin="-1s"
                repeatCount="indefinite"
                rotate="auto"
                path={signalPaths.global}
              />
            </circle>

            {/* Glow filter */}

            <defs>
              <filter
                id="signalGlow"
                x="-200%"
                y="-200%"
                width="400%"
                height="400%"
              >
                <feGaussianBlur
                  stdDeviation="3"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* =================================================
              CENTRAL INTELLIGENCE POINT
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            {/* Glow */}

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

            {/* Core */}

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
              {/* Rotating ring */}

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

              {/* Inner ring */}

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
                  sm:tracking-[0.25em]
                  md:text-[10px]
                  md:tracking-[0.28em]
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
                  sm:tracking-[0.17em]
                  md:text-[9px]
                  md:tracking-[0.19em]
                "
              >
                Intelligence Layer
              </p>
            </div>
          </div>

          {/* =================================================
              GLOBAL WEB
          ================================================= */}

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
              <Globe2
                className="
                  h-3.5
                  w-3.5
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:h-4
                  sm:w-4
                "
              />
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
                md:text-[9px]
                md:tracking-[0.22em]
              "
            >
              Global Web
            </p>
          </div>

          {/* =================================================
              DISCOVERY
          ================================================= */}

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
              <Search
                className="
                  h-3.5
                  w-3.5
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:h-4
                  sm:w-4
                "
              />
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
                md:text-[9px]
                md:tracking-[0.22em]
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

          {/* =================================================
              DETECTION
          ================================================= */}

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
              <ScanSearch
                className="
                  h-3.5
                  w-3.5
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:h-4
                  sm:w-4
                "
              />
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
                md:text-[9px]
                md:tracking-[0.22em]
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

          {/* =================================================
              IDENTITY
          ================================================= */}

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
              <Fingerprint
                className="
                  h-3.5
                  w-3.5
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:h-4
                  sm:w-4
                "
              />
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
                md:text-[9px]
                md:tracking-[0.22em]
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

          {/* =================================================
              PROTECTION
          ================================================= */}

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
              <ShieldCheck
                className="
                  h-3.5
                  w-3.5
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:h-4
                  sm:w-4
                "
              />
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
                md:text-[9px]
                md:tracking-[0.22em]
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
                sm:tracking-[0.22em]
              "
            >
              Many signals. One intelligence layer.
            </p>

            <div className="flex items-center gap-2">
              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-[#ADD132]
                "
              />

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

      {/* =====================================================
          REDUCED MOTION
      ===================================================== */}

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Connect;