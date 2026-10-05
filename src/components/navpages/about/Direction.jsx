import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

function Direction() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll("[data-direction-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("direction-visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-direction"
      className="
        relative
        min-h-screen
        w-screen
        min-w-[100vw]
        shrink-0
        overflow-hidden
        bg-[#F7F8F3]
        text-[#24191B]
        dark:bg-[#070A07]
        dark:text-white
      "
    >
      <style>
        {`
          .direction-reveal {
            opacity: 0;
            transform: translateY(35px);
            transition:
              opacity 900ms cubic-bezier(.22,1,.36,1),
              transform 900ms cubic-bezier(.22,1,.36,1);
          }

          .direction-reveal-left {
            opacity: 0;
            transform: translateX(-55px);
            transition:
              opacity 900ms cubic-bezier(.22,1,.36,1),
              transform 900ms cubic-bezier(.22,1,.36,1);
          }

          .direction-reveal-right {
            opacity: 0;
            transform: translateX(55px);
            transition:
              opacity 900ms cubic-bezier(.22,1,.36,1),
              transform 900ms cubic-bezier(.22,1,.36,1);
          }

          .direction-visible {
            opacity: 1;
            transform: translate(0, 0);
          }

          .direction-delay-1 {
            transition-delay: 120ms;
          }

          .direction-delay-2 {
            transition-delay: 240ms;
          }

          .direction-delay-3 {
            transition-delay: 360ms;
          }

          .direction-delay-4 {
            transition-delay: 480ms;
          }

          .direction-line-dot {
            animation: directionPulse 2.4s ease-in-out infinite;
          }

          @keyframes directionPulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 0.55;
            }

            50% {
              transform: scale(1.7);
              opacity: 1;
            }
          }

          .direction-number {
            transition:
              color 500ms ease,
              transform 500ms ease;
          }

          .direction-item:hover .direction-number {
            color: #add132;
            transform: translateX(5px);
          }

          .direction-item:hover .direction-arrow {
            transform: translate(4px, -4px);
            background: #add132;
            color: #101800;
            border-color: #add132;
          }

          .direction-arrow {
            transition:
              transform 400ms ease,
              background-color 400ms ease,
              color 400ms ease,
              border-color 400ms ease;
          }

          .direction-heading-accent {
            background: linear-gradient(
              90deg,
              #add132 0%,
              rgba(173, 209, 50, 0.15) 100%
            );
          }

          @media (prefers-reduced-motion: reduce) {
            .direction-reveal,
            .direction-reveal-left,
            .direction-reveal-right {
              opacity: 1;
              transform: none;
              transition: none;
            }

            .direction-line-dot {
              animation: none;
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
          opacity-70
          dark:opacity-40
        "
      >
        <div
          className="
            absolute
            -left-[180px]
            top-[15%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#ADD132]/[0.045]
            blur-[100px]
            dark:bg-[#ADD132]/[0.035]
          "
        />

        <div
          className="
            absolute
            -right-[160px]
            bottom-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#ADD132]/[0.035]
            blur-[110px]
            dark:bg-[#ADD132]/[0.025]
          "
        />
      </div>

      {/* =========================================================
          FINE GRID
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30
          dark:opacity-[0.12]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(45,60,45,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,60,45,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* =========================================================
          TOP ACCENT
      ========================================================= */}

      <div className="absolute left-0 top-0 h-[2px] w-full bg-[#ADD132]" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1500px]
          flex-col
          px-6
          py-8
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
        "
      >
        {/* =======================================================
            HEADER
        ======================================================== */}

        <div
          data-direction-reveal
          className="
            direction-reveal
            flex
            items-center
            justify-between
            border-b
            border-[#24191B]/10
            pb-5
            dark:border-white/[0.08]
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[#ADD132]
                text-[10px]
                font-black
                text-[#101800]
              "
            >
              03
            </span>

            <span
              className="
                h-px
                w-9
                bg-[#24191B]/15
                dark:bg-white/15
              "
            />

            <span
              className="
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.3em]
                text-[#73766F]
                dark:text-white/40
                sm:text-[10px]
              "
            >
              Our Direction
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
                text-[#7A7D76]
                dark:text-white/30
                sm:block
              "
            >
              TrackOwls
            </span>

            <span className="h-px w-8 bg-[#ADD132]" />

            <ArrowUpRight
              size={17}
              strokeWidth={1.7}
              className="text-[#789900] dark:text-[#ADD132]"
            />
          </div>
        </div>

        {/* =======================================================
            CONTENT
        ======================================================== */}

        <div
          className="
            grid
            flex-1
            items-center
            gap-14
            py-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
            lg:py-16
            xl:grid-cols-[0.82fr_1.18fr]
            xl:gap-28
          "
        >
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <div
            data-direction-reveal
            className="
              direction-reveal-left
              relative
            "
          >
            {/* Small label */}

            <div className="mb-6 flex items-center gap-3">
              <Sparkles
                size={16}
                strokeWidth={1.7}
                className="text-[#789900] dark:text-[#ADD132]"
              />

              <span
                className="
                  text-[8px]
                  font-extrabold
                  uppercase
                  tracking-[0.23em]
                  text-[#72786F]
                  dark:text-white/35
                "
              >
                Intelligence • Monitoring • Protection
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                max-w-[680px]
                text-[43px]
                font-black
                leading-[0.91]
                tracking-[-0.07em]
                text-[#24191B]
                dark:text-white
                sm:text-[54px]
                md:text-[62px]
                lg:text-[67px]
                xl:text-[76px]
              "
            >
              Technology that sees the threat before it becomes the{" "}
              <span className="text-[#789900] dark:text-[#ADD132]">
                problem.
              </span>
            </h1>

            {/* Accent */}

            <div className="mt-8 flex items-center gap-3">
              <span className="h-[3px] w-16 bg-[#ADD132]" />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#747B72]
                  dark:text-white/30
                "
              >
                Digital Protection
              </span>
            </div>

            {/* Large Number */}

            <div
              className="
                mt-12
                hidden
                items-end
                gap-4
                lg:flex
              "
            >
              <span
                className="
                  direction-number
                  text-[120px]
                  font-black
                  leading-[0.7]
                  tracking-[-0.1em]
                  text-[#24191B]/[0.055]
                  dark:text-white/[0.055]
                "
              >
                03
              </span>

              <div className="mb-2">
                <div className="h-px w-20 bg-[#ADD132]" />

                <span
                  className="
                    mt-2
                    block
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#7A8178]
                    dark:text-white/25
                  "
                >
                  Direction
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE — CONTENT PATH
          ====================================================== */}

          <div className="relative">
            {/* Vertical line */}

            <div
              className="
                absolute
                left-[18px]
                top-[18px]
                bottom-[18px]
                w-px
                bg-[#24191B]/10
                dark:bg-white/[0.08]
                sm:left-[23px]
              "
            />

            {/* Moving dot */}

            <div
              className="
                direction-line-dot
                absolute
                left-[15px]
                top-[26px]
                h-[7px]
                w-[7px]
                rounded-full
                bg-[#ADD132]
                sm:left-[20px]
              "
            />

            {/* ===================================================
                ITEM 01
            ==================================================== */}

            <div
              data-direction-reveal
              className="
                direction-item
                direction-reveal-right
                direction-delay-1
                relative
                flex
                gap-6
                pb-10
                sm:gap-8
                sm:pb-12
              "
            >
              <div
                className="
                  relative
                  z-10
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ADD132]
                  bg-[#F7F8F3]
                  dark:bg-[#070A07]
                  sm:h-12
                  sm:w-12
                "
              >
                <span
                  className="
                    text-[9px]
                    font-black
                    tracking-[0.1em]
                    text-[#789900]
                    dark:text-[#ADD132]
                  "
                >
                  01
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span
                      className="
                        text-[8px]
                        font-extrabold
                        uppercase
                        tracking-[0.25em]
                        text-[#789900]
                        dark:text-[#ADD132]
                      "
                    >
                      Digital Ecosystem
                    </span>

                    <p
                      className="
                        mt-4
                        max-w-[720px]
                        text-[14px]
                        font-medium
                        leading-7
                        text-[#5F6860]
                        dark:text-white/52
                        sm:text-[15px]
                        sm:leading-8
                      "
                    >
                      The digital ecosystem continues to grow rapidly, creating
                      new opportunities for businesses, creators and
                      organizations. It also creates new ways for valuable
                      content and intellectual property to be copied, misused
                      or distributed without authorization.
                    </p>
                  </div>

                  <div
                    className="
                      direction-arrow
                      hidden
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#24191B]/10
                      text-[#789900]
                      dark:border-white/10
                      dark:text-[#ADD132]
                      sm:flex
                    "
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================
                ITEM 02
            ==================================================== */}

            <div
              data-direction-reveal
              className="
                direction-item
                direction-reveal-right
                direction-delay-2
                relative
                flex
                gap-6
                border-t
                border-[#24191B]/10
                py-10
                sm:gap-8
                sm:py-12
                dark:border-white/[0.08]
              "
            >
              <div
                className="
                  relative
                  z-10
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ADD132]
                  bg-[#F7F8F3]
                  dark:bg-[#070A07]
                  sm:h-12
                  sm:w-12
                "
              >
                <span
                  className="
                    text-[9px]
                    font-black
                    tracking-[0.1em]
                    text-[#789900]
                    dark:text-[#ADD132]
                  "
                >
                  02
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span
                      className="
                        text-[8px]
                        font-extrabold
                        uppercase
                        tracking-[0.25em]
                        text-[#789900]
                        dark:text-[#ADD132]
                      "
                    >
                      Digital Intelligence
                    </span>

                    <p
                      className="
                        mt-4
                        max-w-[720px]
                        text-[14px]
                        font-medium
                        leading-7
                        text-[#5F6860]
                        dark:text-white/52
                        sm:text-[15px]
                        sm:leading-8
                      "
                    >
                      TrackOwls brings monitoring, digital intelligence and
                      protection workflows together to help organizations gain
                      visibility across the online environment.
                    </p>
                  </div>

                  <div
                    className="
                      direction-arrow
                      hidden
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#24191B]/10
                      text-[#789900]
                      dark:border-white/10
                      dark:text-[#ADD132]
                      sm:flex
                    "
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================
                ITEM 03
            ==================================================== */}

            <div
              data-direction-reveal
              className="
                direction-item
                direction-reveal-right
                direction-delay-3
                relative
                flex
                gap-6
                border-t
                border-[#24191B]/10
                pt-10
                sm:gap-8
                sm:pt-12
                dark:border-white/[0.08]
              "
            >
              <div
                className="
                  relative
                  z-10
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ADD132]
                  bg-[#F7F8F3]
                  dark:bg-[#070A07]
                  sm:h-12
                  sm:w-12
                "
              >
                <span
                  className="
                    text-[9px]
                    font-black
                    tracking-[0.1em]
                    text-[#789900]
                    dark:text-[#ADD132]
                  "
                >
                  03
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span
                      className="
                        text-[8px]
                        font-extrabold
                        uppercase
                        tracking-[0.25em]
                        text-[#789900]
                        dark:text-[#ADD132]
                      "
                    >
                      Protection
                    </span>

                    <p
                      className="
                        mt-4
                        max-w-[720px]
                        text-[14px]
                        font-medium
                        leading-7
                        text-[#5F6860]
                        dark:text-white/52
                        sm:text-[15px]
                        sm:leading-8
                      "
                    >
                      Our approach is built around understanding digital
                      activity, identifying relevant threats and helping
                      clients take informed action to protect what matters.
                    </p>
                  </div>

                  <div
                    className="
                      direction-arrow
                      hidden
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#24191B]/10
                      text-[#789900]
                      dark:border-white/10
                      dark:text-[#ADD132]
                      sm:flex
                    "
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            FOOTER STRIP
        ======================================================== */}

        <div
          data-direction-reveal
          className="
            direction-reveal
            flex
            items-center
            justify-between
            border-t
            border-[#24191B]/10
            pt-4
            dark:border-white/[0.08]
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-8 bg-[#ADD132]" />

            <span
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#777E76]
                dark:text-white/25
              "
            >
              Intelligence · Monitoring · Protection
            </span>
          </div>

          <span
            className="
              text-[7px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#777E76]
              dark:text-white/25
            "
          >
            03 / 03
          </span>
        </div>
      </div>

      {/* =========================================================
          BOTTOM ACCENT
      ========================================================= */}

      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ADD132]/40" />
    </section>
  );
}

export default Direction;