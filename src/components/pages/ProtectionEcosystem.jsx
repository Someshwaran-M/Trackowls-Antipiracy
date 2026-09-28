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
    <section className="relative overflow-hidden bg-white py-16 dark:bg-black sm:py-4 lg:py-16">
      {/* =====================================================
          AMBIENT LIGHT
      ====================================================== */}

      <div className="pointer-events-none absolute left-[-250px] top-[20%] h-[600px] w-[600px] rounded-full bg-[#ADD132]/10 blur-[170px]" />

      <div className="pointer-events-none absolute right-[-250px] bottom-[-200px] h-[600px] w-[600px] rounded-full bg-[#ADD132]/10 blur-[180px]" />

      <div className="trackowls-container relative">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          {/* LEFT */}
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#ADD132]" />

              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#6D900B] dark:text-[#ADD132]">
                Protection Ecosystem
              </span>
            </div>

            <h2 className="max-w-2xl text-[clamp(3.5rem,6.5vw,7rem)] font-black leading-[0.82] tracking-[-0.075em] text-[#101610] dark:text-white">
              Everything
              <span className="block text-[#6D900B] dark:text-[#ADD132]">
                connected.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-[14px] leading-7 text-[#68746B] dark:text-white/45">
              TrackOwls connects the signals surrounding your digital
              ecosystem into one continuous protection layer.
            </p>

            {/* CTA */}
            <button
              type="button"
              className="group mt-9 inline-flex items-center gap-4"
            >
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#ADD132] text-[#152019] shadow-[0_15px_45px_rgba(173,209,50,0.25)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_20px_60px_rgba(173,209,50,0.35)]">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />

                <span className="absolute inset-0 rounded-full border border-[#ADD132] opacity-0 transition-all duration-500 group-hover:inset-[-7px] group-hover:opacity-40" />
              </span>

              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#152019] dark:text-white">
                Explore Ecosystem
              </span>
            </button>
          </div>

          {/* RIGHT INTRO */}
          <div className="relative">
            <div className="flex items-center justify-end gap-4">
              <Activity className="h-4 w-4 text-[#6D900B] dark:text-[#ADD132]" />

              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#7D877F] dark:text-white/30">
                Digital Visibility Active
              </span>

              <span className="relative h-2 w-2 rounded-full bg-[#ADD132]">
                <span className="absolute inset-[-4px] animate-ping rounded-full bg-[#ADD132]/30" />
              </span>
            </div>

            <div className="mt-8 border-t border-black/[0.08] pt-6 dark:border-white/[0.08]">
              <p className="text-right text-[10px] font-bold uppercase tracking-[0.25em] text-[#9AA39C] dark:text-white/25">
                Monitoring
              </p>

              <div className="mt-3 flex items-center justify-end gap-8">
                <span className="text-4xl font-black tracking-[-0.06em] text-[#152019] dark:text-white">
                  24/7
                </span>

                <span className="h-8 w-px bg-black/10 dark:bg-white/10" />

                <span className="text-4xl font-black tracking-[-0.06em] text-[#6D900B] dark:text-[#ADD132]">
                  360°
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            INTELLIGENCE FIELD
        ====================================================== */}

        <div className="relative mt-20 min-h-[620px] overflow-hidden border-y border-black/[0.08] dark:border-white/[0.08]">
          {/* Field glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ADD132]/[0.07] blur-[120px]" />

          {/* Vertical scanner */}
          <div className="trackowls-scanner absolute bottom-0 top-0 left-[42%] z-20 w-px bg-gradient-to-b from-transparent via-[#ADD132] to-transparent opacity-80">
            <span className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ADD132]/20 blur-2xl" />
          </div>

          {/* Radar heading */}
          <div className="absolute left-0 top-0 z-20 pt-8">
            <div className="flex items-center gap-3">
              <ScanSearch className="h-4 w-4 text-[#6D900B] dark:text-[#ADD132]" />

              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#7D877F] dark:text-white/30">
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

          {/* Horizontal field markers */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-between">
            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#A1AAA4] dark:text-white/20">
              Signal
            </span>

            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#A1AAA4] dark:text-white/20">
              Detect
            </span>

            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#A1AAA4] dark:text-white/20">
              Analyze
            </span>

            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#A1AAA4] dark:text-white/20">
              Protect
            </span>
          </div>

          {/* =================================================
              SIGNAL NODES
          ================================================== */}

          <span className="trackowls-signal-dot absolute left-[10%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-1 absolute left-[24%] top-[34%] h-2 w-2 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-2 absolute left-[17%] top-[50%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-3 absolute left-[30%] top-[66%] h-2 w-2 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-4 absolute left-[15%] top-[82%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-5 absolute right-[25%] top-[18%] h-2 w-2 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-6 absolute right-[13%] top-[34%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-7 absolute right-[28%] top-[50%] h-2 w-2 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-8 absolute right-[17%] top-[66%] h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

          <span className="trackowls-signal-dot delay-9 absolute right-[30%] top-[82%] h-2 w-2 rounded-full bg-[#ADD132]" />

          {/* =================================================
              CENTER INTELLIGENCE CORE
          ================================================== */}

          <div className="absolute left-[42%] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="trackowls-core-glow absolute -inset-16 rounded-full bg-[#ADD132]/10 blur-[45px]" />

            <div className="trackowls-core relative flex h-32 w-32 items-center justify-center rounded-full border border-[#ADD132]/40 bg-[#F8FAF5]/90 shadow-[0_0_80px_rgba(173,209,50,0.15)] backdrop-blur-xl dark:bg-[#0A100B]/90">
              <div className="absolute inset-3 rounded-full border border-[#ADD132]/20" />

              <div className="absolute inset-7 rounded-full border border-dashed border-[#ADD132]/30" />

              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#ADD132] text-[#152019] shadow-[0_0_30px_rgba(173,209,50,0.45)]">
                <ScanSearch className="h-5 w-5" />
              </div>
            </div>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6D900B] dark:text-[#ADD132]">
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
              "left-[4%] top-[11%]",
              "right-[4%] top-[26%]",
              "left-[5%] top-[43%]",
              "right-[5%] top-[58%]",
              "left-[4%] top-[75%]",
              "right-[4%] top-[82%]",
            ];

            return (
              <div
                key={item.number}
                className={`trackowls-surface-label absolute z-30 ${positions[index]}`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#ADD132]/30 bg-white/80 backdrop-blur-xl dark:bg-[#0B110C]/85">
                    <Icon className="h-3.5 w-3.5 text-[#6D900B] dark:text-[#ADD132]" />

                    <span className="absolute -inset-1 rounded-full border border-[#ADD132]/10" />
                  </div>

                  <div
                    className={
                      index % 2 === 0
                        ? ""
                        : "text-right"
                    }
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-black tracking-[0.2em] text-[#6D900B] dark:text-[#ADD132]">
                        {item.number}
                      </span>

                      <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#172019] dark:text-white">
                        {item.title}
                      </span>
                    </div>

                    <p className="mt-1 text-[7px] font-medium uppercase tracking-[0.14em] text-[#8B958E] dark:text-white/25">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>


      <style>{`
        /* =========================================
           SCANNER
        ========================================= */

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
          animation: trackowls-scanner 7s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }


        /* =========================================
           SIGNAL LINES
        ========================================= */

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


        /* =========================================
           SIGNAL DOTS
        ========================================= */

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


        /* =========================================
           CORE GLOW
        ========================================= */

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


        /* =========================================
           CORE
        ========================================= */

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


        /* =========================================
           SURFACE LABEL FLOAT
        ========================================= */

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


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 767px) {
          .trackowls-scanner {
            animation-duration: 5s;
          }

          .trackowls-surface-label {
            transform: scale(0.85);
          }
        }


        /* =========================================
           REDUCED MOTION
        ========================================= */

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