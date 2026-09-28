import React from "react";

import {
  ArrowUpRight,
  Globe2,
  Share2,
  Play,
  ShoppingCart,
  FileText,
  Image as ImageIcon,
  ScanSearch,
  Activity,
} from "lucide-react";

const protectionSurfaces = [
  {
    number: "01",
    title: "Websites",
    subtitle: "& Portals",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Social Platforms",
    subtitle: "Social Media Channels",
    icon: Share2,
  },
  {
    number: "03",
    title: "Streaming",
    subtitle: "OTT & Video Platforms",
    icon: Play,
  },
  {
    number: "04",
    title: "Marketplaces",
    subtitle: "E-Commerce Marketplaces",
    icon: ShoppingCart,
  },
  {
    number: "05",
    title: "Publishing",
    subtitle: "News & Publishing",
    icon: FileText,
  },
  {
    number: "06",
    title: "Digital Media",
    subtitle: "Images, Audio & More",
    icon: ImageIcon,
  },
];

const ProtectionEcosystem = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-12
        dark:bg-black
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          AMBIENT LIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[20%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#ADD132]/10
          blur-[110px]
          sm:left-[-220px]
          sm:h-[480px]
          sm:w-[480px]
          sm:blur-[140px]
          lg:left-[-250px]
          lg:h-[600px]
          lg:w-[600px]
          lg:blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          bottom-[-120px]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#ADD132]/10
          blur-[120px]
          sm:right-[-220px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[150px]
          lg:right-[-250px]
          lg:bottom-[-200px]
          lg:h-[600px]
          lg:w-[600px]
          lg:blur-[180px]
        "
      />

      <div
        className="
          trackowls-container
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
        ====================================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-end
            lg:gap-14
          "
        >
          {/* LEFT */}
          <div className="relative z-10">
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 bg-[#ADD132] sm:w-12" />

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
                Protection Ecosystem
              </span>
            </div>

            <h2
              className="
                max-w-2xl
                text-[42px]
                font-black
                leading-[0.92]
                tracking-[-0.055em]
                text-[#101610]
                dark:text-white
                sm:text-[52px]
                sm:leading-[0.87]
                md:text-[64px]
                lg:text-[76px]
                xl:text-[88px]
              "
            >
              Everything

              <span className="block text-[#6D900B] dark:text-[#ADD132]">
                connected.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-[12px]
                leading-5
                text-[#68746B]
                dark:text-white/45
                sm:mt-6
                sm:text-[13px]
                sm:leading-6
                md:text-[14px]
                md:leading-7
              "
            >
              TrackOwls connects the signals surrounding your digital
              ecosystem into one continuous protection layer.
            </p>

            {/* CTA */}
            <button
              type="button"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-3
                sm:mt-7
                sm:gap-4
              "
            >
              <span
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#ADD132]
                  text-[#152019]
                  shadow-[0_15px_45px_rgba(173,209,50,0.25)]
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:shadow-[0_20px_60px_rgba(173,209,50,0.35)]
                  sm:h-12
                  sm:w-12
                  md:h-14
                  md:w-14
                "
              >
                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    sm:h-5
                    sm:w-5
                  "
                />

                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-[#ADD132]
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:inset-[-6px]
                    group-hover:opacity-40
                  "
                />
              </span>

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-[#152019]
                  dark:text-white
                  sm:text-[10px]
                  sm:tracking-[0.22em]
                  md:text-xs
                  md:tracking-[0.25em]
                "
              >
                Explore Ecosystem
              </span>
            </button>
          </div>

          {/* RIGHT INTRO */}
          <div className="relative">
            <div className="flex items-center justify-start gap-3 sm:justify-end sm:gap-4">
              <Activity className="h-3.5 w-3.5 text-[#6D900B] dark:text-[#ADD132] sm:h-4 sm:w-4" />

              <span
                className="
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#7D877F]
                  dark:text-white/30
                  sm:text-[8px]
                  sm:tracking-[0.25em]
                  md:text-[9px]
                  md:tracking-[0.3em]
                "
              >
                Digital Visibility Active
              </span>

              <span className="relative h-1.5 w-1.5 shrink-0 rounded-full bg-[#ADD132] sm:h-2 sm:w-2">
                <span className="absolute inset-[-3px] animate-ping rounded-full bg-[#ADD132]/30" />
              </span>
            </div>

            <div
              className="
                mt-6
                border-t
                border-black/[0.08]
                pt-5
                dark:border-white/[0.08]
                sm:mt-7
                sm:pt-6
              "
            >
              <p
                className="
                  text-left
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#9AA39C]
                  dark:text-white/25
                  sm:text-right
                  sm:text-[9px]
                  sm:tracking-[0.25em]
                "
              >
                Monitoring
              </p>

              <div className="mt-2 flex items-center justify-start gap-5 sm:justify-end sm:gap-8">
                <span
                  className="
                    text-3xl
                    font-black
                    tracking-[-0.06em]
                    text-[#152019]
                    dark:text-white
                    sm:text-4xl
                  "
                >
                  24/7
                </span>

                <span className="h-7 w-px bg-black/10 dark:bg-white/10 sm:h-8" />

                <span
                  className="
                    text-3xl
                    font-black
                    tracking-[-0.06em]
                    text-[#6D900B]
                    dark:text-[#ADD132]
                    sm:text-4xl
                  "
                >
                  360°
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            INTELLIGENCE FIELD
        ====================================================== */}

        <div
          className="
            relative
            mt-12
            min-h-[440px]
            overflow-hidden
            border-y
            border-black/[0.08]
            dark:border-white/[0.08]
            sm:mt-16
            sm:min-h-[520px]
            md:min-h-[580px]
            lg:mt-20
            lg:min-h-[620px]
          "
        >
          {/* Field glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[300px]
              w-[300px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#ADD132]/[0.07]
              blur-[80px]
              sm:h-[400px]
              sm:w-[400px]
              sm:blur-[100px]
              lg:h-[500px]
              lg:w-[500px]
              lg:blur-[120px]
            "
          />

          {/* Vertical scanner */}
          <div
            className="
              trackowls-scanner
              absolute
              bottom-0
              left-[42%]
              top-0
              z-20
              w-px
              bg-gradient-to-b
              from-transparent
              via-[#ADD132]
              to-transparent
              opacity-80
            "
          >
            <span className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ADD132]/20 blur-2xl sm:h-20 sm:w-20" />
          </div>

          {/* Radar heading */}
          <div className="absolute left-0 top-0 z-20 pt-5 sm:pt-7 md:pt-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <ScanSearch className="h-3.5 w-3.5 text-[#6D900B] dark:text-[#ADD132] sm:h-4 sm:w-4" />

              <span
                className="
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#7D877F]
                  dark:text-white/30
                  sm:text-[8px]
                  sm:tracking-[0.26em]
                  md:text-[9px]
                  md:tracking-[0.3em]
                "
              >
                Intelligence Field
              </span>
            </div>
          </div>

          {/* Signal lines */}
          <div className="absolute inset-0">
            <div className="trackowls-signal-line absolute left-0 right-0 top-[18%] h-px bg-gradient-to-r from-transparent via-[#ADD132]/25 to-transparent" />

            <div className="trackowls-signal-line signal-delay-1 absolute left-0 right-0 top-[34%] h-px bg-gradient-to-r from-transparent via-[#ADD132]/20 to-transparent" />

            <div className="trackowls-signal-line signal-delay-2 absolute left-0 right-0 top-[50%] h-px bg-gradient-to-r from-transparent via-[#ADD132]/30 to-transparent" />

            <div className="trackowls-signal-line signal-delay-3 absolute left-0 right-0 top-[66%] h-px bg-gradient-to-r from-transparent via-[#ADD132]/20 to-transparent" />

            <div className="trackowls-signal-line signal-delay-4 absolute left-0 right-0 top-[82%] h-px bg-gradient-to-r from-transparent via-[#ADD132]/25 to-transparent" />
          </div>

          {/* =================================================
              SIGNAL DOTS
          ================================================== */}

          <span className="trackowls-signal-dot absolute left-[10%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-1 absolute left-[24%] top-[34%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-2 absolute left-[17%] top-[50%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-3 absolute left-[30%] top-[66%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-4 absolute left-[15%] top-[82%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-5 absolute right-[25%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-6 absolute right-[13%] top-[34%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-7 absolute right-[28%] top-[50%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-8 absolute right-[17%] top-[66%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-9 absolute right-[30%] top-[82%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          {/* =================================================
              CENTER INTELLIGENCE CORE
          ================================================== */}

          <div className="absolute left-[42%] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div
              className="
                trackowls-core-glow
                absolute
                -inset-10
                rounded-full
                bg-[#ADD132]/10
                blur-[35px]
                sm:-inset-16
                sm:blur-[45px]
              "
            />

            <div
              className="
                trackowls-core
                relative
                flex
                h-[88px]
                w-[88px]
                items-center
                justify-center
                rounded-full
                border
                border-[#ADD132]/40
                bg-[#F8FAF5]/90
                shadow-[0_0_60px_rgba(173,209,50,0.15)]
                backdrop-blur-xl
                dark:bg-[#0A100B]/90
                sm:h-[108px]
                sm:w-[108px]
                md:h-32
                md:w-32
              "
            >
              <div className="absolute inset-2 rounded-full border border-[#ADD132]/20 sm:inset-3" />

              <div className="absolute inset-5 rounded-full border border-dashed border-[#ADD132]/30 sm:inset-7" />

              <div
                className="
                  relative
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#ADD132]
                  text-[#152019]
                  shadow-[0_0_30px_rgba(173,209,50,0.45)]
                  sm:h-9
                  sm:w-9
                  md:h-10
                  md:w-10
                "
              >
                <ScanSearch className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
            </div>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap sm:-bottom-10">
              <span
                className="
                  text-[6px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:text-[7px]
                  sm:tracking-[0.25em]
                  md:text-[8px]
                  md:tracking-[0.3em]
                "
              >
                TrackOwls Intelligence
              </span>
            </div>
          </div>

          {/* =================================================
              SURFACE LABELS
          ================================================== */}

          {protectionSurfaces.map((item, index) => {
            const Icon = item.icon;

            const positions = [
              "left-[2%] top-[10%]",
              "right-[2%] top-[25%]",
              "left-[2%] top-[42%]",
              "right-[2%] top-[57%]",
              "left-[2%] top-[73%]",
              "right-[2%] top-[80%]",
            ];

            return (
              <div
                key={item.number}
                className={`trackowls-surface-label absolute z-30 ${positions[index]}`}
              >
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                  {/* Icon */}
                  <div
                    className="
                      relative
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#ADD132]/30
                      bg-white/80
                      backdrop-blur-xl
                      dark:bg-[#0B110C]/85
                      sm:h-8
                      sm:w-8
                      md:h-10
                      md:w-10
                    "
                  >
                    <Icon className="h-2.5 w-2.5 text-[#6D900B] dark:text-[#ADD132] sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />

                    <span className="absolute -inset-1 rounded-full border border-[#ADD132]/10" />
                  </div>

                  <div
                    className={
                      index % 2 === 0 ? "" : "text-right"
                    }
                  >
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span
                        className="
                          text-[6px]
                          font-black
                          tracking-[0.12em]
                          text-[#6D900B]
                          dark:text-[#ADD132]
                          sm:text-[7px]
                          sm:tracking-[0.16em]
                          md:text-[8px]
                          md:tracking-[0.2em]
                        "
                      >
                        {item.number}
                      </span>

                      <span
                        className="
                          max-w-[75px]
                          truncate
                          text-[6px]
                          font-black
                          uppercase
                          tracking-[0.1em]
                          text-[#172019]
                          dark:text-white
                          sm:max-w-[100px]
                          sm:text-[7px]
                          sm:tracking-[0.14em]
                          md:max-w-none
                          md:text-[9px]
                          md:tracking-[0.18em]
                        "
                      >
                        {item.title}
                      </span>
                    </div>

                    <p
                      className="
                        mt-0.5
                        max-w-[90px]
                        truncate
                        text-[5px]
                        font-medium
                        uppercase
                        tracking-[0.08em]
                        text-[#8B958E]
                        dark:text-white/25
                        sm:max-w-[120px]
                        sm:text-[6px]
                        sm:tracking-[0.1em]
                        md:max-w-none
                        md:text-[7px]
                        md:tracking-[0.14em]
                      "
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Horizontal field markers */}
          <div
            className="
              absolute
              bottom-4
              left-0
              right-0
              flex
              justify-between
              px-1
              sm:bottom-6
            "
          >
            {["Signal", "Detect", "Analyze", "Protect"].map((item) => (
              <span
                key={item}
                className="
                  text-[6px]
                  font-black
                  uppercase
                  tracking-[0.16em]
                  text-[#A1AAA4]
                  dark:text-white/20
                  sm:text-[7px]
                  sm:tracking-[0.2em]
                  md:text-[8px]
                  md:tracking-[0.25em]
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes trackowls-scanner {
          0% {
            left: 12%;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          50% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            left: 92%;
            opacity: 0;
          }
        }

        .trackowls-scanner {
          animation: trackowls-scanner 7s cubic-bezier(0.65, 0, 0.35, 1)
            infinite;
        }

        @keyframes trackowls-signal-line {
          0%,
          100% {
            opacity: 0.15;
            transform: scaleX(0.85);
          }

          50% {
            opacity: 0.55;
            transform: scaleX(1);
          }
        }

        .trackowls-signal-line {
          animation: trackowls-signal-line 4s ease-in-out infinite;
          transform-origin: center;
        }

        .signal-delay-1 {
          animation-delay: 0.6s;
        }

        .signal-delay-2 {
          animation-delay: 1.2s;
        }

        .signal-delay-3 {
          animation-delay: 1.8s;
        }

        .signal-delay-4 {
          animation-delay: 2.4s;
        }

        @keyframes trackowls-signal-dot {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.7);
            box-shadow: 0 0 0 rgba(173, 209, 50, 0);
          }

          50% {
            opacity: 1;
            transform: scale(1.4);
            box-shadow: 0 0 18px rgba(173, 209, 50, 0.75);
          }
        }

        .trackowls-signal-dot {
          animation: trackowls-signal-dot 2.8s ease-in-out infinite;
        }

        .delay-1 {
          animation-delay: 0.3s;
        }

        .delay-2 {
          animation-delay: 0.6s;
        }

        .delay-3 {
          animation-delay: 0.9s;
        }

        .delay-4 {
          animation-delay: 1.2s;
        }

        .delay-5 {
          animation-delay: 1.5s;
        }

        .delay-6 {
          animation-delay: 1.8s;
        }

        .delay-7 {
          animation-delay: 2.1s;
        }

        .delay-8 {
          animation-delay: 2.4s;
        }

        .delay-9 {
          animation-delay: 2.7s;
        }

        @keyframes trackowls-core-glow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.9);
          }

          50% {
            opacity: 0.6;
            transform: scale(1.08);
          }
        }

        .trackowls-core-glow {
          animation: trackowls-core-glow 4s ease-in-out infinite;
        }

        @keyframes trackowls-core {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.035);
          }
        }

        .trackowls-core {
          animation: trackowls-core 4s ease-in-out infinite;
        }

        @keyframes trackowls-surface {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        .trackowls-surface-label {
          animation: trackowls-surface 5s ease-in-out infinite;
        }

        @media (max-width: 639px) {
          .trackowls-surface-label {
            transform: scale(0.82);
            transform-origin: center;
          }

          .trackowls-scanner {
            animation-duration: 5s;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .trackowls-surface-label {
            transform: scale(0.9);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trackowls-scanner,
          .trackowls-signal-line,
          .trackowls-signal-dot,
          .trackowls-core-glow,
          .trackowls-core,
          .trackowls-surface-label {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProtectionEcosystem;