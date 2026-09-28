import React from "react";
import { Eye, Radar, ShieldCheck } from "lucide-react";

function ThreatIntelligence() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9F4] py-16 pt-[20px] dark:bg-[#030503] sm:py-2 lg:py-2 mt-[-20px]">

      {/* Atmospheric Light */}
      <div className="pointer-events-none absolute -left-[280px] top-[5%] h-[600px] w-[600px] rounded-full bg-[#ADD132]/10 blur-[170px] dark:bg-[#ADD132]/5" />

      <div className="pointer-events-none absolute -right-[260px] bottom-[-100px] h-[620px] w-[620px] rounded-full bg-[#ADD132]/10 blur-[170px] dark:bg-[#ADD132]/5" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(173,209,50,0.055)_0%,transparent_62%)] dark:bg-[radial-gradient(circle,rgba(173,209,50,0.035)_0%,transparent_62%)]" />

      <div className="relative mx-auto max-w-[1550px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Top Label */}
        <div className="mb-14 flex items-center gap-4 lg:mb-20">
          <div className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute h-5 w-5 animate-ping rounded-full bg-[#ADD132]/20" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-[#ADD132] shadow-[0_0_18px_rgba(173,209,50,0.8)]" />
          </div>

          <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#617D00] dark:text-[#ADD132] sm:text-[10px]">
            Digital Threat Intelligence
          </span>

          <span className="hidden h-px w-20 bg-gradient-to-r from-[#ADD132]/50 to-transparent sm:block" />
        </div>

        {/* Main Layout */}
        <div className="grid items-center gap-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* LEFT — EDITORIAL CONTENT */}
          <div className="relative z-10">

            <h2 className="max-w-[780px] text-[56px] font-black leading-[0.84] tracking-[-0.08em] text-[#0A100B] dark:text-white sm:text-[72px] md:text-[82px] lg:text-[92px] xl:text-[104px]">
              Not everything

              <span className="block bg-gradient-to-r from-[#719500] via-[#ADD132] to-[#D9F878] bg-clip-text text-transparent dark:from-[#ADD132] dark:via-[#C8EF56] dark:to-[#E5FF9B]">
                leaves a trace.
              </span>
            </h2>

            <p className="mt-9 max-w-[590px] text-[14px] font-medium leading-8 text-[#667169] dark:text-white/65 sm:text-[15px]">
              Digital threats move silently across websites, platforms,
              marketplaces and private channels. TrackOwls creates the
              visibility required to discover activity before it becomes
              difficult to control.
            </p>

            {/* Intelligence Principle */}
            <div className="mt-10 flex items-start gap-4">
              <div className="mt-2 h-12 w-[2px] rounded-full bg-gradient-to-b from-[#ADD132] to-transparent shadow-[0_0_12px_rgba(173,209,50,0.35)]" />

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#6A8700] dark:text-[#ADD132]">
                  Intelligence Principle
                </p>

                <p className="mt-2 max-w-[430px] text-[13px] leading-6 text-[#7A857D] dark:text-white/45">
                  Visibility creates awareness. Awareness creates control.
                </p>
              </div>
            </div>

            {/* Mini Metrics */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">

              <div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-black tracking-[-0.05em] text-[#151C16] dark:text-white">
                    24/7
                  </span>

                  <span className="mb-1 h-1.5 w-1.5 rounded-full bg-[#ADD132] shadow-[0_0_8px_#ADD132]" />
                </div>

                <p className="mt-1 text-[8px] font-black uppercase tracking-[0.2em] text-[#8B958E] dark:text-white/35">
                  Continuous Visibility
                </p>
              </div>

              <div className="hidden h-10 w-px bg-black/10 sm:block dark:bg-white/10" />

              <div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-black tracking-[-0.05em] text-[#151C16] dark:text-white">
                    LIVE
                  </span>

                  <span className="mb-1 h-1.5 w-1.5 rounded-full bg-[#ADD132] shadow-[0_0_8px_#ADD132]" />
                </div>

                <p className="mt-1 text-[8px] font-black uppercase tracking-[0.2em] text-[#8B958E] dark:text-white/35">
                  Threat Signals
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT — INTELLIGENCE VISUAL */}
          <div className="relative">

            {/* Outer Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ADD132]/10 blur-[100px] dark:bg-[#ADD132]/6" />

            {/* Main Intelligence Panel */}
            <div className="relative min-h-[560px] overflow-hidden rounded-[36px] border border-black/[0.07] bg-white/55 shadow-[0_40px_120px_rgba(25,45,20,0.08)] backdrop-blur-2xl dark:border-white/[0.09] dark:bg-[#070B08]/80 dark:shadow-[0_40px_120px_rgba(0,0,0,0.5)]">

              {/* Panel Header */}
              <div className="relative z-20 flex items-center justify-between border-b border-black/[0.06] px-6 py-5 dark:border-white/[0.08] sm:px-8">

                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]/40" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]/15" />
                  </div>

                  <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#7E8981] dark:text-white/40">
                    Threat Surface
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ADD132] shadow-[0_0_8px_#ADD132]" />

                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#678400] dark:text-[#ADD132]">
                    Monitoring
                  </span>
                </div>

              </div>

              {/* Visual Area */}
              <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden">

                {/* Coordinates */}
                <span className="absolute left-6 top-6 font-mono text-[7px] tracking-[0.2em] text-[#9BA49E] dark:text-white/20">
                  SIGNAL / 001
                </span>

                <span className="absolute right-6 top-6 font-mono text-[7px] tracking-[0.2em] text-[#9BA49E] dark:text-white/20">
                  ACTIVE
                </span>

                <span className="absolute bottom-6 left-6 font-mono text-[7px] tracking-[0.2em] text-[#9BA49E] dark:text-white/20">
                  TRACKOWLS INTELLIGENCE
                </span>

                <span className="absolute bottom-6 right-6 font-mono text-[7px] tracking-[0.2em] text-[#9BA49E] dark:text-white/20">
                  2026
                </span>

                {/* Radar */}
                <div className="relative h-[330px] w-[330px] sm:h-[390px] sm:w-[390px]">

                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border border-[#719500]/15 dark:border-[#ADD132]/12" />

                  {/* Second Ring */}
                  <div className="absolute inset-[45px] rounded-full border border-[#719500]/15 dark:border-[#ADD132]/12" />

                  {/* Third Ring */}
                  <div className="absolute inset-[90px] rounded-full border border-[#719500]/15 dark:border-[#ADD132]/12" />

                  {/* Inner Ring */}
                  <div className="absolute inset-[135px] rounded-full border border-[#719500]/20 dark:border-[#ADD132]/18" />

                  {/* Horizontal Line */}
                  <div className="absolute left-0 top-1/2 h-px w-full bg-[#719500]/10 dark:bg-[#ADD132]/10" />

                  {/* Vertical Line */}
                  <div className="absolute left-1/2 top-0 h-full w-px bg-[#719500]/10 dark:bg-[#ADD132]/10" />

                  {/* Diagonal Lines */}
                  <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-[#719500]/5 dark:bg-[#ADD132]/5" />

                  <div className="absolute left-1/2 top-0 h-full w-px -rotate-45 bg-[#719500]/5 dark:bg-[#ADD132]/5" />

                  {/* Radar Sweep */}
                  <div className="absolute left-1/2 top-0 h-1/2 w-[1.5px] origin-bottom -translate-x-1/2 bg-gradient-to-t from-[#ADD132] via-[#ADD132]/50 to-transparent shadow-[0_0_14px_rgba(173,209,50,0.9)] animate-[threatRadar_5s_linear_infinite]" />

                  {/* Radar Sweep Glow */}
                  <div className="absolute left-1/2 top-1/2 h-[48%] w-[48%] origin-bottom-left -translate-y-full rounded-tr-full bg-gradient-to-t from-[#ADD132]/10 to-transparent blur-xl animate-[threatRadar_5s_linear_infinite]" />

                  {/* Threat Node 01 */}
                  <div className="absolute left-[19%] top-[26%]">
                    <span className="absolute -inset-2 animate-ping rounded-full bg-[#ADD132]/10" />
                    <span className="relative block h-2.5 w-2.5 rounded-full bg-[#ADD132] shadow-[0_0_18px_#ADD132]" />
                  </div>

                  {/* Threat Node 02 */}
                  <div className="absolute right-[20%] top-[20%]">
                    <span className="absolute -inset-2 animate-ping rounded-full bg-[#ADD132]/10 [animation-delay:700ms]" />
                    <span className="relative block h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_16px_#ADD132]" />
                  </div>

                  {/* Threat Node 03 */}
                  <div className="absolute bottom-[22%] right-[21%]">
                    <span className="absolute -inset-2 animate-ping rounded-full bg-[#ADD132]/10 [animation-delay:1200ms]" />
                    <span className="relative block h-2.5 w-2.5 rounded-full bg-[#ADD132] shadow-[0_0_18px_#ADD132]" />
                  </div>

                  {/* Threat Node 04 */}
                  <div className="absolute bottom-[27%] left-[20%]">
                    <span className="absolute -inset-2 animate-ping rounded-full bg-[#ADD132]/10 [animation-delay:1700ms]" />
                    <span className="relative block h-1.5 w-1.5 rounded-full bg-[#ADD132] shadow-[0_0_14px_#ADD132]" />
                  </div>

                  {/* Center Core */}
                  <div className="absolute left-1/2 top-1/2 z-10 flex h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#ADD132]/35 bg-[#ADD132]/10 shadow-[0_0_70px_rgba(173,209,50,0.15)] backdrop-blur-xl dark:bg-[#ADD132]/[0.06]">

                    <div className="absolute inset-3 animate-pulse rounded-full border border-[#ADD132]/20" />

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ADD132] text-[#111900] shadow-[0_0_35px_rgba(173,209,50,0.35)]">
                      <ShieldCheck size={27} strokeWidth={1.4} />
                    </div>
                  </div>

                  {/* Floating Signal — Left */}
                  <div className="absolute left-[2%] top-[42%] hidden rounded-xl border border-black/[0.06] bg-white/75 px-3 py-2 shadow-[0_12px_35px_rgba(30,50,20,0.06)] backdrop-blur-xl sm:block dark:border-white/[0.08] dark:bg-[#0B110C]/80">

                    <p className="text-[7px] font-black uppercase tracking-[0.16em] text-[#87928A] dark:text-white/35">
                      Signal
                    </p>

                    <p className="mt-1 text-[9px] font-bold text-[#192119] dark:text-white/75">
                      Detected
                    </p>
                  </div>

                  {/* Floating Signal — Right */}
                  <div className="absolute right-[1%] top-[43%] hidden rounded-xl border border-black/[0.06] bg-white/75 px-3 py-2 shadow-[0_12px_35px_rgba(30,50,20,0.06)] backdrop-blur-xl sm:block dark:border-white/[0.08] dark:bg-[#0B110C]/80">

                    <p className="text-[7px] font-black uppercase tracking-[0.16em] text-[#87928A] dark:text-white/35">
                      Status
                    </p>

                    <p className="mt-1 flex items-center gap-1.5 text-[9px] font-bold text-[#192119] dark:text-white/75">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />
                      Active
                    </p>
                  </div>

                </div>
              </div>

              {/* Bottom Signal Bar */}
              <div className="grid border-t border-black/[0.06] dark:border-white/[0.08] sm:grid-cols-3">

                {/* Discovery */}
                <div className="border-b border-black/[0.06] px-6 py-5 dark:border-white/[0.08] sm:border-b-0 sm:border-r">

                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#89948C] dark:text-white/35">
                      Discovery
                    </span>

                    <Eye
                      size={14}
                      className="text-[#719400] dark:text-[#ADD132]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

                    <span className="text-[10px] font-bold text-[#172019] dark:text-white/75">
                      Continuous
                    </span>
                  </div>
                </div>

                {/* Detection */}
                <div className="border-b border-black/[0.06] px-6 py-5 dark:border-white/[0.08] sm:border-b-0 sm:border-r">

                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#89948C] dark:text-white/35">
                      Detection
                    </span>

                    <Radar
                      size={14}
                      className="text-[#719400] dark:text-[#ADD132]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

                    <span className="text-[10px] font-bold text-[#172019] dark:text-white/75">
                      Intelligent
                    </span>
                  </div>
                </div>

                {/* Response */}
                <div className="px-6 py-5">

                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#89948C] dark:text-white/35">
                      Response
                    </span>

                    <ShieldCheck
                      size={14}
                      className="text-[#719400] dark:text-[#ADD132]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

                    <span className="text-[10px] font-bold text-[#172019] dark:text-white/75">
                      Structured
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Corner Accent */}
            <div className="pointer-events-none absolute -bottom-5 -right-5 h-24 w-24 rounded-full border border-[#ADD132]/20 dark:border-[#ADD132]/15" />

          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes threatRadar {
          0% {
            transform: translateX(-50%) rotate(0deg);
          }

          100% {
            transform: translateX(-50%) rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

export default ThreatIntelligence;