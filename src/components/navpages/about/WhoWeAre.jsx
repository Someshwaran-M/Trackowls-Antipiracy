import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const WhoWeAre = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll("[data-who-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("who-reveal-active");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#F6F8F2]
        text-[#152019]
        dark:bg-[#070A07]
        dark:text-white
      "
    >
      <style>
        {`
          .who-slide-left {
            opacity: 0;
            transform: translateX(-55px);
            transition:
              opacity 900ms cubic-bezier(.22,1,.36,1),
              transform 900ms cubic-bezier(.22,1,.36,1);
          }

          .who-slide-right {
            opacity: 0;
            transform: translateX(55px);
            transition:
              opacity 1000ms cubic-bezier(.22,1,.36,1),
              transform 1000ms cubic-bezier(.22,1,.36,1);
          }

          .who-slide-up {
            opacity: 0;
            transform: translateY(35px);
            transition:
              opacity 900ms cubic-bezier(.22,1,.36,1),
              transform 900ms cubic-bezier(.22,1,.36,1);
          }

          .who-reveal-active {
            opacity: 1;
            transform: translate(0, 0);
          }

          .who-delay-1 {
            transition-delay: 120ms;
          }

          .who-delay-2 {
            transition-delay: 240ms;
          }

          .who-delay-3 {
            transition-delay: 360ms;
          }

          .who-large-number {
            transition:
              transform 700ms cubic-bezier(.22,1,.36,1),
              color 500ms ease;
          }

          .who-number-wrapper:hover .who-large-number {
            transform: translateX(15px);
            color: rgba(173, 209, 50, 0.13);
          }

          .who-content-line {
            transform-origin: left;
            transform: scaleX(0);
            transition: transform 1000ms cubic-bezier(.22,1,.36,1);
          }

          .who-reveal-active .who-content-line {
            transform: scaleX(1);
          }

          .who-arrow {
            transition:
              transform 400ms ease,
              background-color 400ms ease,
              border-color 400ms ease;
          }

          .who-arrow:hover {
            transform: translate(4px, -4px);
            background: #ADD132;
            border-color: #ADD132;
          }

          .who-arrow:hover svg {
            color: #101800;
          }

          @media (prefers-reduced-motion: reduce) {
            .who-slide-left,
            .who-slide-right,
            .who-slide-up {
              opacity: 1;
              transform: none;
              transition: none;
            }

            .who-content-line {
              transform: scaleX(1);
              transition: none;
            }
          }
        `}
      </style>

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Large glow */}

        <div
          className="
            absolute
            -left-[180px]
            top-[20%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#ADD132]/[0.035]
            blur-[120px]
            dark:bg-[#ADD132]/[0.025]
          "
        />

        {/* Right glow */}

        <div
          className="
            absolute
            -right-[160px]
            bottom-[5%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#ADD132]/[0.04]
            blur-[110px]
            dark:bg-[#ADD132]/[0.025]
          "
        />

        {/* Vertical background line */}

        <div
          className="
            absolute
            bottom-0
            left-[8%]
            top-0
            hidden
            w-px
            bg-[#152019]/[0.045]
            dark:bg-white/[0.035]
            lg:block
          "
        />

        {/* Horizontal background line */}

        <div
          className="
            absolute
            left-0
            right-0
            top-[58%]
            h-px
            bg-[#152019]/[0.04]
            dark:bg-white/[0.035]
          "
        />
      </div>

      {/* =========================================================
          TOP ACCENT
      ========================================================= */}

      <div className="absolute left-0 top-0 h-[2px] w-full bg-[#ADD132]" />

      {/* =========================================================
          MAIN
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1500px]
          flex-col
          px-5
          py-8
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
        "
      >
        {/* =======================================================
            TOP HEADER
        ======================================================== */}

        <div
          data-who-reveal
          className="
            who-slide-up
            flex
            items-center
            justify-between
            border-b
            border-[#152019]/10
            pb-5
            dark:border-white/[0.08]
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-10 bg-[#ADD132]" />

            <span
              className="
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.3em]
                text-[#6F8D08]
                dark:text-[#ADD132]
                sm:text-[10px]
              "
            >
              Who We Are
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="
                hidden
                text-[8px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#737B73]
                dark:text-white/30
                sm:block
              "
            >
              TrackOwls
            </span>

            <span className="h-px w-8 bg-[#ADD132]" />

            <ArrowUpRight
              size={16}
              strokeWidth={1.6}
              className="text-[#789900] dark:text-[#ADD132]"
            />
          </div>
        </div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================== */}

        <div
          className="
            grid
            flex-1
            items-center
            gap-12
            py-14
            lg:grid-cols-12
            lg:gap-16
            lg:py-16
            xl:gap-24
          "
        >
          {/* =====================================================
              LEFT VISUAL
          ====================================================== */}

          <div
            data-who-reveal
            className="
              who-slide-left
              lg:col-span-5
            "
          >
            <div
              className="
                who-number-wrapper
                relative
                min-h-[360px]
                overflow-hidden
                border
                border-[#152019]/10
                bg-[#EDF2E8]
                dark:border-white/[0.08]
                dark:bg-[#0B100C]
                sm:min-h-[430px]
                lg:min-h-[520px]
              "
            >
              {/* Corner accents */}

              <span
                className="
                  absolute
                  left-0
                  top-0
                  h-16
                  w-px
                  bg-[#ADD132]
                "
              />

              <span
                className="
                  absolute
                  left-0
                  top-0
                  h-px
                  w-16
                  bg-[#ADD132]
                "
              />

              <span
                className="
                  absolute
                  bottom-0
                  right-0
                  h-16
                  w-px
                  bg-[#ADD132]/50
                "
              />

              <span
                className="
                  absolute
                  bottom-0
                  right-0
                  h-px
                  w-16
                  bg-[#ADD132]/50
                "
              />

              {/* Large number */}

              <div
                className="
                  absolute
                  bottom-[-45px]
                  left-[-12px]
                  select-none
                "
              >
                <span
                  className="
                    who-large-number
                    block
                    text-[260px]
                    font-black
                    leading-none
                    tracking-[-0.15em]
                    text-[#152019]/[0.055]
                    dark:text-[#ADD132]/[0.055]
                    sm:text-[320px]
                    lg:text-[360px]
                  "
                >
                  04
                </span>
              </div>

              {/* Center content */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  justify-between
                  p-7
                  sm:p-9
                  lg:p-10
                "
              >
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[8px]
                      font-extrabold
                      uppercase
                      tracking-[0.3em]
                      text-[#6F8D08]
                      dark:text-[#ADD132]
                    "
                  >
                    Identity
                  </span>

                  <span
                    className="
                      text-[8px]
                      font-bold
                      tracking-[0.2em]
                      text-[#7A8179]
                      dark:text-white/25
                    "
                  >
                    04
                  </span>
                </div>

                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-[3px] w-12 bg-[#ADD132]" />

                    <span
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#747B73]
                        dark:text-white/30
                      "
                    >
                      Digital Protection
                    </span>
                  </div>

                  <p
                    className="
                      max-w-[280px]
                      text-[11px]
                      font-semibold
                      uppercase
                      leading-6
                      tracking-[0.18em]
                      text-[#667067]
                      dark:text-white/35
                    "
                  >
                    Visibility
                    <br />
                    Intelligence
                    <br />
                    Protection
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT CONTENT
          ====================================================== */}

          <div
            data-who-reveal
            className="
              who-slide-right
              lg:col-span-7
            "
          >
            {/* Label */}

            <div className="mb-7 flex items-center gap-3">
              <span
                className="
                  text-[9px]
                  font-black
                  tracking-[0.22em]
                  text-[#789900]
                  dark:text-[#ADD132]
                "
              >
                04
              </span>

              <span className="h-px w-12 bg-[#ADD132]" />

              <span
                className="
                  text-[8px]
                  font-extrabold
                  uppercase
                  tracking-[0.28em]
                  text-[#757D75]
                  dark:text-white/35
                "
              >
                Our Identity
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-[800px]
                text-[43px]
                font-black
                leading-[0.92]
                tracking-[-0.07em]
                text-[#152019]
                dark:text-white
                sm:text-[54px]
                md:text-[62px]
                lg:text-[68px]
                xl:text-[76px]
              "
            >
              A new approach to
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                digital protection.
              </span>
            </h2>

            {/* Accent */}

            <div
              data-who-reveal
              className="
                who-slide-up
                who-delay-1
                mt-8
                flex
                items-center
                gap-4
              "
            >
              <div className="h-[3px] w-16 bg-[#ADD132]" />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#777E77]
                  dark:text-white/30
                "
              >
                The TrackOwls Perspective
              </span>
            </div>

            {/* ===================================================
                TEXT 01
            ==================================================== */}

            <div
              data-who-reveal
              className="
                who-slide-up
                who-delay-2
                mt-12
                border-t
                border-[#152019]/10
                pt-7
                dark:border-white/[0.08]
              "
            >
              <div className="grid gap-5 sm:grid-cols-[55px_1fr] sm:gap-7">
                <span
                  className="
                    text-[11px]
                    font-black
                    tracking-[0.15em]
                    text-[#789900]
                    dark:text-[#ADD132]
                  "
                >
                  01
                </span>

                <p
                  className="
                    about-manrope
                    max-w-[760px]
                    text-[15px]
                    leading-8
                    text-[#687368]
                    dark:text-white/50
                    sm:text-lg
                    sm:leading-9
                  "
                >
                  The internet has transformed how content is created,
                  distributed and consumed. At the same time, unauthorized
                  copying, distribution and misuse can create significant
                  challenges for digital businesses and content owners.
                </p>
              </div>
            </div>

            {/* ===================================================
                TEXT 02
            ==================================================== */}

            <div
              data-who-reveal
              className="
                who-slide-up
                who-delay-3
                mt-7
                border-t
                border-[#152019]/10
                pt-7
                dark:border-white/[0.08]
              "
            >
              <div className="grid gap-5 sm:grid-cols-[55px_1fr] sm:gap-7">
                <span
                  className="
                    text-[11px]
                    font-black
                    tracking-[0.15em]
                    text-[#789900]
                    dark:text-[#ADD132]
                  "
                >
                  02
                </span>

                <p
                  className="
                    about-manrope
                    max-w-[760px]
                    text-[15px]
                    leading-8
                    text-[#687368]
                    dark:text-white/50
                    sm:text-lg
                    sm:leading-9
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
        </div>

        {/* =======================================================
            BOTTOM
        ======================================================== */}

        <div
          data-who-reveal
          className="
            who-slide-up
            flex
            items-center
            justify-between
            border-t
            border-[#152019]/10
            pt-5
            dark:border-white/[0.08]
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

            <span
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#747B73]
                dark:text-white/25
              "
            >
              Digital Protection · TrackOwls
            </span>
          </div>

          <span
            className="
              text-[7px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-[#747B73]
              dark:text-white/25
            "
          >
            04 / Who We Are
          </span>
        </div>
      </div>

      {/* =========================================================
          BOTTOM ACCENT
      ========================================================= */}

      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ADD132]/40" />
    </section>
  );
};

export default WhoWeAre;