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
    <section className="relative overflow-hidden bg-[#F5F8F0] py-32 dark:bg-[#050705]">

      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ADD132]/[0.06] blur-[150px]" />

      <div className="trackowls-container relative">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132] shadow-[0_0_12px_#ADD132]" />

              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#6D900B] dark:text-[#ADD132]">
                Digital Intelligence
              </span>
            </div>

            <h2 className="max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.82] tracking-[-0.08em] text-[#152019] dark:text-white">
              Every signal
              <br />
              <span className="text-[#6D900B] dark:text-[#ADD132]">
                connects.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#707B72] dark:text-white/35">
            TrackOwls connects fragmented digital signals into one
            continuously evolving picture of your digital ecosystem.
          </p>
        </div>

        {/* Network */}
        <div className="relative mt-20 min-h-[650px] overflow-hidden">

          {/* Connection lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
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
            <circle r="4" fill="#ADD132">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path="M120 120 C350 80 420 280 600 325"
              />
            </circle>

            <circle r="4" fill="#ADD132">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path="M1100 110 C900 100 850 270 600 325"
              />
            </circle>

            <circle r="4" fill="#ADD132">
              <animateMotion
                dur="4.5s"
                repeatCount="indefinite"
                path="M150 510 C350 500 430 390 600 325"
              />
            </circle>

          </svg>

          {/* Central intelligence point */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            <div className="absolute -inset-20 animate-pulse rounded-full bg-[#ADD132]/10 blur-3xl" />

            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#F5F8F0]/80 shadow-[0_0_100px_rgba(173,209,50,0.15)] backdrop-blur-xl dark:bg-[#050705]/80">

              <div className="absolute inset-5 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-[#ADD132]/25" />

              <div className="absolute inset-10 rounded-full border border-[#ADD132]/20" />

              <ShieldCheck className="relative h-10 w-10 text-[#6D900B] dark:text-[#ADD132]" />
            </div>

            <div className="absolute left-1/2 top-full mt-6 -translate-x-1/2 whitespace-nowrap text-center">

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#152019] dark:text-white">
                TrackOwls Core
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#89938B] dark:text-white/25">
                Intelligence Layer
              </p>

            </div>
          </div>

          {/* TOP NODE */}
          <div className="absolute left-1/2 top-4 -translate-x-1/2 text-center">

            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#ADD132]/25 bg-[#ADD132]/10">
              <Globe2 className="h-4 w-4 text-[#6D900B] dark:text-[#ADD132]" />
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#152019] dark:text-white">
              Global Web
            </p>
          </div>

          {/* LEFT TOP NODE */}
          <div className="absolute left-[5%] top-[10%]">

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#ADD132]/25 bg-[#ADD132]/10">
              <Search className="h-4 w-4 text-[#6D900B] dark:text-[#ADD132]" />
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#152019] dark:text-white">
              Discovery
            </p>

            <p className="mt-1 text-[9px] text-[#8A948C] dark:text-white/25">
              Digital signals
            </p>
          </div>

          {/* RIGHT TOP NODE */}
          <div className="absolute right-[5%] top-[9%] text-right">

            <div className="mb-4 ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#ADD132]/25 bg-[#ADD132]/10">
              <ScanSearch className="h-4 w-4 text-[#6D900B] dark:text-[#ADD132]" />
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#152019] dark:text-white">
              Detection
            </p>

            <p className="mt-1 text-[9px] text-[#8A948C] dark:text-white/25">
              Threat signals
            </p>
          </div>

          {/* LEFT BOTTOM NODE */}
          <div className="absolute bottom-[12%] left-[8%]">

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#ADD132]/25 bg-[#ADD132]/10">
              <Fingerprint className="h-4 w-4 text-[#6D900B] dark:text-[#ADD132]" />
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#152019] dark:text-white">
              Identity
            </p>

            <p className="mt-1 text-[9px] text-[#8A948C] dark:text-white/25">
              Brand & IP
            </p>
          </div>

          {/* RIGHT BOTTOM NODE */}
          <div className="absolute bottom-[11%] right-[8%] text-right">

            <div className="mb-4 ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#ADD132]/25 bg-[#ADD132]/10">
              <ShieldCheck className="h-4 w-4 text-[#6D900B] dark:text-[#ADD132]" />
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#152019] dark:text-white">
              Protection
            </p>

            <p className="mt-1 text-[9px] text-[#8A948C] dark:text-white/25">
              Action layer
            </p>
          </div>
        </div>

        {/* Bottom statement */}
        

      </div>
    </section>
  );
}

export default Connect;