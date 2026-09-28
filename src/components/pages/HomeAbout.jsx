import React from "react";
import { Link } from "react-router-dom";

import {
  Eye,
  Fingerprint,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

function HomeAbout() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F4F7F0]
        py-16
        dark:bg-[#050705]
        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/4
          h-[260px]
          w-[260px]
          animate-pulse
          rounded-full
          bg-[#ADD132]/10
          blur-[100px]
          sm:h-[350px]
          sm:w-[350px]
          sm:blur-[120px]
          lg:h-[420px]
          lg:w-[420px]
          lg:blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#ADD132]/8
          blur-[110px]
          sm:h-[400px]
          sm:w-[400px]
          sm:blur-[140px]
          lg:h-[500px]
          lg:w-[500px]
          lg:blur-[160px]
        "
      />

      <div className="trackowls-container relative mx-auto w-full max-w-[1500px] px-4 sm:px-7 md:px-9 lg:px-12 xl:px-16">
        {/* =====================================================
            TOP HEADING
        ===================================================== */}

        <div
          className="
            grid
            gap-6
            lg:grid-cols-[1fr_auto]
            lg:items-end
            lg:gap-10
          "
        >
          {/* Heading */}
          <div>
            {/* Label */}
            <div className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-3">
              <span className="relative flex h-1.5 w-1.5 shrink-0 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ADD132] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#ADD132] sm:h-2 sm:w-2" />
              </span>

              <span
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:text-[9px]
                  sm:tracking-[0.28em]
                  md:text-[10px]
                  md:tracking-[0.35em]
                "
              >
                About TrackOwls
              </span>
            </div>

            {/* Main heading */}
            <h2
              className="
                max-w-5xl
                text-[42px]
                font-black
                leading-[0.92]
                tracking-[-0.055em]
                text-[#152019]
                dark:text-white
                sm:text-[52px]
                sm:leading-[0.88]
                md:text-[64px]
                lg:text-[76px]
                xl:text-[88px]
              "
            >
              Protection
              <br />
              starts with
              <br />
              <span className="relative inline-block text-[#6D900B] dark:text-[#ADD132]">
                visibility.

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-full
                    origin-left
                    animate-[trackowls-line_3s_ease-in-out_infinite]
                    bg-[#ADD132]
                    sm:-bottom-3
                    sm:h-[3px]
                  "
                />
              </span>
            </h2>
          </div>

          {/* Intro */}
          <div className="lg:pb-2">
            <p
              className="
                max-w-xs
                text-[12px]
                leading-5
                text-[#68736B]
                dark:text-white/40
                sm:text-[13px]
                sm:leading-6
                md:text-sm
                md:leading-7
              "
            >
              We help organizations understand the digital ecosystem around
              their content, brands and intellectual property.
            </p>
          </div>
        </div>

        {/* =====================================================
            INTERACTIVE STORY
        ===================================================== */}

        <div className="relative mt-14 sm:mt-16 md:mt-20 lg:mt-24">
          {/* Animated vertical beam */}
          <div
            className="
              absolute
              bottom-0
              left-[23px]
              top-0
              hidden
              w-px
              overflow-hidden
              bg-black/[0.07]
              dark:bg-white/[0.08]
              sm:block
              sm:left-[31px]
            "
          >
            <div
              className="
                trackowls-beam
                absolute
                left-0
                top-0
                h-24
                w-full
                bg-[#ADD132]
                shadow-[0_0_15px_#ADD132]
                sm:h-32
              "
            />
          </div>

          {/* =====================================================
              01 / DISCOVER
          ===================================================== */}

          <div
            className="
              group
              relative
              grid
              gap-5
              pb-12
              sm:grid-cols-[64px_1fr]
              sm:gap-8
              sm:pb-16
              md:gap-10
              md:pb-18
              lg:pb-20
            "
          >
            {/* Icon */}
            <div
              className="
                relative
                z-10
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#ADD132]/30
                bg-[#F4F7F0]
                dark:bg-[#050705]
                sm:h-16
                sm:w-16
              "
            >
              <Eye
                className="
                  h-4
                  w-4
                  text-[#6D900B]
                  transition-transform
                  duration-500
                  group-hover:scale-125
                  dark:text-[#ADD132]
                  sm:h-5
                  sm:w-5
                "
              />
            </div>

            <div
              className="
                grid
                gap-4
                md:grid-cols-[0.8fr_1.2fr]
                md:items-center
                md:gap-8
              "
            >
              <div>
                <span
                  className="
                    text-[8px]
                    font-black
                    tracking-[0.22em]
                    text-[#89938B]
                    dark:text-white/20
                    sm:text-[9px]
                    sm:tracking-[0.28em]
                    md:text-[10px]
                    md:tracking-[0.3em]
                  "
                >
                  01 / DISCOVER
                </span>

                <h3
                  className="
                    mt-2
                    text-[26px]
                    font-black
                    leading-[0.95]
                    tracking-[-0.04em]
                    text-[#152019]
                    dark:text-white
                    sm:mt-3
                    sm:text-3xl
                    md:text-4xl
                  "
                >
                  Know what
                  <br />
                  exists.
                </h3>
              </div>

              <p
                className="
                  max-w-xl
                  text-[12px]
                  leading-5
                  text-[#707A72]
                  dark:text-white/40
                  sm:text-[13px]
                  sm:leading-6
                  md:text-sm
                  md:leading-7
                  lg:text-base
                  lg:leading-8
                "
              >
                The digital ecosystem is vast and constantly changing.
                TrackOwls brings visibility to the places, platforms and
                digital activity surrounding your valuable assets.
              </p>
            </div>
          </div>

          {/* =====================================================
              02 / UNDERSTAND
          ===================================================== */}

          <div
            className="
              group
              relative
              grid
              gap-5
              pb-12
              sm:grid-cols-[64px_1fr]
              sm:gap-8
              sm:pb-16
              md:gap-10
              md:pb-18
              lg:pb-20
            "
          >
            {/* Icon */}
            <div
              className="
                relative
                z-10
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#ADD132]/30
                bg-[#F4F7F0]
                dark:bg-[#050705]
                sm:h-16
                sm:w-16
              "
            >
              <Fingerprint
                className="
                  h-4
                  w-4
                  text-[#6D900B]
                  transition-transform
                  duration-500
                  group-hover:scale-125
                  dark:text-[#ADD132]
                  sm:h-5
                  sm:w-5
                "
              />
            </div>

            <div
              className="
                grid
                gap-4
                md:grid-cols-[0.8fr_1.2fr]
                md:items-center
                md:gap-8
              "
            >
              <div>
                <span
                  className="
                    text-[8px]
                    font-black
                    tracking-[0.22em]
                    text-[#89938B]
                    dark:text-white/20
                    sm:text-[9px]
                    sm:tracking-[0.28em]
                    md:text-[10px]
                    md:tracking-[0.3em]
                  "
                >
                  02 / UNDERSTAND
                </span>

                <h3
                  className="
                    mt-2
                    text-[26px]
                    font-black
                    leading-[0.95]
                    tracking-[-0.04em]
                    text-[#152019]
                    dark:text-white
                    sm:mt-3
                    sm:text-3xl
                    md:text-4xl
                  "
                >
                  Read the
                  <br />
                  signals.
                </h3>
              </div>

              <p
                className="
                  max-w-xl
                  text-[12px]
                  leading-5
                  text-[#707A72]
                  dark:text-white/40
                  sm:text-[13px]
                  sm:leading-6
                  md:text-sm
                  md:leading-7
                  lg:text-base
                  lg:leading-8
                "
              >
                Signals become meaningful when they are connected. We help
                transform scattered digital activity into intelligence that
                provides a clearer picture of emerging risks.
              </p>
            </div>
          </div>

          {/* =====================================================
              03 / PROTECT
          ===================================================== */}

          <div
            className="
              group
              relative
              grid
              gap-5
              sm:grid-cols-[64px_1fr]
              sm:gap-8
              md:gap-10
            "
          >
            {/* Icon */}
            <div
              className="
                relative
                z-10
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#ADD132]/30
                bg-[#F4F7F0]
                dark:bg-[#050705]
                sm:h-16
                sm:w-16
              "
            >
              <ShieldCheck
                className="
                  h-4
                  w-4
                  text-[#6D900B]
                  transition-transform
                  duration-500
                  group-hover:scale-125
                  dark:text-[#ADD132]
                  sm:h-5
                  sm:w-5
                "
              />
            </div>

            <div
              className="
                grid
                gap-4
                md:grid-cols-[0.8fr_1.2fr]
                md:items-center
                md:gap-8
              "
            >
              <div>
                <span
                  className="
                    text-[8px]
                    font-black
                    tracking-[0.22em]
                    text-[#89938B]
                    dark:text-white/20
                    sm:text-[9px]
                    sm:tracking-[0.28em]
                    md:text-[10px]
                    md:tracking-[0.3em]
                  "
                >
                  03 / PROTECT
                </span>

                <h3
                  className="
                    mt-2
                    text-[26px]
                    font-black
                    leading-[0.95]
                    tracking-[-0.04em]
                    text-[#152019]
                    dark:text-white
                    sm:mt-3
                    sm:text-3xl
                    md:text-4xl
                  "
                >
                  Act with
                  <br />
                  confidence.
                </h3>
              </div>

              <p
                className="
                  max-w-xl
                  text-[12px]
                  leading-5
                  text-[#707A72]
                  dark:text-white/40
                  sm:text-[13px]
                  sm:leading-6
                  md:text-sm
                  md:leading-7
                  lg:text-base
                  lg:leading-8
                "
              >
                Intelligence becomes valuable when it leads to action.
                TrackOwls is built to help organizations respond to digital
                threats with greater clarity and control.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            PREMIUM ABOUT CTA
        ===================================================== */}

        <section
          className="
            relative
            mt-12
            py-10
            sm:mt-16
            sm:py-12
            md:mt-20
            md:py-14
            lg:mt-24
            lg:mr-0
            lg:py-16
          "
        >
          {/* Ambient glow */}
          <div
            className="
              pointer-events-none
              absolute
              -left-24
              top-1/2
              h-56
              w-56
              -translate-y-1/2
              rounded-full
              bg-[#ADD132]/10
              blur-[90px]
              sm:h-72
              sm:w-72
              sm:blur-[120px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-48
              w-48
              rounded-full
              bg-[#ADD132]/5
              blur-[80px]
              sm:h-64
              sm:w-64
              sm:blur-[100px]
            "
          />

          <div className="trackowls-container relative">
            <div
              className="
                grid
                items-center
                gap-8
                lg:grid-cols-[1fr_auto]
                lg:gap-12
              "
            >
              {/* Left content */}
              <div className="relative">
                {/* Label */}
                <div className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-3">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      animate-pulse
                      rounded-full
                      bg-[#ADD132]
                      shadow-[0_0_12px_rgba(173,209,50,0.7)]
                      sm:h-2
                      sm:w-2
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#6D900B]
                      dark:text-[#ADD132]
                      sm:text-[9px]
                      sm:tracking-[0.28em]
                      md:text-[10px]
                      md:tracking-[0.35em]
                    "
                  >
                    Our Approach
                  </span>
                </div>

                {/* Heading */}
                <h3
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
                  See it.
                  <span className="text-[#6D900B] dark:text-[#ADD132]">
                    {" "}
                    Understand it.
                  </span>
                  <br />
                  Protect it.
                </h3>

                {/* Description */}
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
                    md:mt-7
                    md:text-sm
                    md:leading-7
                  "
                >
                  We turn digital complexity into meaningful intelligence,
                  helping organizations discover their digital presence,
                  understand emerging threats and protect what matters.
                </p>
              </div>

              {/* Right CTA */}
              <Link
                to="/about"
                className="
                  group
                  relative
                  block
                  w-full
                  max-w-full
                  sm:max-w-[420px]
                "
              >
                {/* Animated border */}
                <div
                  className="
                    absolute
                    -inset-[1px]
                    rounded-full
                    bg-gradient-to-r
                    from-[#ADD132]/30
                    via-[#ADD132]
                    to-[#ADD132]/20
                    opacity-60
                    transition-all
                    duration-700
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    relative
                    flex
                    min-h-[64px]
                    items-center
                    justify-between
                    gap-2
                    rounded-full
                    bg-[#F3F6EE]
                    p-1.5
                    dark:bg-[#070A07]
                    sm:min-h-[72px]
                    sm:p-2
                  "
                >
                  {/* Arrow */}
                  <span
                    className="
                      relative
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      bg-[#ADD132]
                      text-[#152019]
                      shadow-[0_10px_35px_rgba(173,209,50,0.2)]
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:shadow-[0_15px_50px_rgba(173,209,50,0.35)]
                      sm:h-14
                      sm:w-14
                      md:h-16
                      md:w-16
                    "
                  >
                    <ArrowUpRight
                      className="
                        relative
                        z-10
                        h-5
                        w-5
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        sm:h-6
                        sm:w-6
                      "
                    />

                    <span
                      className="
                        absolute
                        inset-0
                        scale-0
                        rounded-full
                        bg-white/30
                        transition-transform
                        duration-500
                        group-hover:scale-100
                      "
                    />
                  </span>

                  {/* Text */}
                  <div className="min-w-0 flex-1 px-2 sm:px-4 md:px-5">
                    <p
                      className="
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.2em]
                        text-[#6D900B]
                        dark:text-[#ADD132]
                        sm:text-[9px]
                        sm:tracking-[0.25em]
                        md:text-[10px]
                        md:tracking-[0.3em]
                      "
                    >
                      Explore
                    </p>

                    <p
                      className="
                        mt-1
                        truncate
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.12em]
                        text-[#152019]
                        dark:text-white
                        sm:text-xs
                        sm:tracking-[0.16em]
                        md:text-sm
                        md:tracking-[0.18em]
                      "
                    >
                      Learn More
                    </p>
                  </div>

                  {/* Mini visual */}
                  <div className="hidden items-center gap-1.5 pr-4 sm:flex">
                    <span
                      className="
                        h-6
                        w-1
                        rounded-full
                        bg-[#ADD132]/20
                        transition-all
                        duration-500
                        group-hover:h-9
                        group-hover:bg-[#ADD132]
                      "
                    />

                    <span
                      className="
                        h-8
                        w-1
                        rounded-full
                        bg-[#ADD132]/40
                        transition-all
                        duration-500
                        group-hover:h-5
                        group-hover:bg-[#ADD132]
                      "
                    />

                    <span
                      className="
                        h-5
                        w-1
                        rounded-full
                        bg-[#ADD132]/70
                        transition-all
                        duration-500
                        group-hover:h-8
                        group-hover:bg-[#ADD132]
                      "
                    />

                    <span
                      className="
                        h-7
                        w-1
                        rounded-full
                        bg-[#ADD132]
                        transition-all
                        duration-500
                        group-hover:h-5
                      "
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

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

        @keyframes trackowls-beam {
          0% {
            transform: translateY(-130px);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          70% {
            opacity: 1;
          }

          100% {
            transform: translateY(600px);
            opacity: 0;
          }
        }

        .trackowls-beam {
          animation: trackowls-beam 4s ease-in-out infinite;
        }

        @media (max-width: 639px) {
          .trackowls-container {
            width: 100%;
            max-width: 100%;
            overflow: hidden;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trackowls-beam {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

export default HomeAbout;