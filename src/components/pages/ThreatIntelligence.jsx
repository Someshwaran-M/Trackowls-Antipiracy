import React from "react";
import { Eye, Radar, ShieldCheck, ArrowUpRight } from "lucide-react";
import HomeThreatSurface from "./HomeThreatSurface";

function ThreatIntelligence() {


  return (
    <section className="relative overflow-hidden bg-[#F7F9F4] py-20 text-[#152019] dark:bg-[#030503] dark:text-white sm:py-24 lg:py-32">
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      <div className="pointer-events-none absolute -left-[180px] top-[5%] h-[360px] w-[360px] rounded-full bg-[#ADD132]/10 blur-[110px] dark:bg-[#ADD132]/5 sm:-left-[220px] sm:h-[480px] sm:w-[480px] sm:blur-[140px] lg:-left-[280px] lg:h-[600px] lg:w-[600px] lg:blur-[170px]" />

      <div className="pointer-events-none absolute -right-[180px] bottom-[-80px] h-[380px] w-[380px] rounded-full bg-[#ADD132]/10 blur-[110px] dark:bg-[#ADD132]/5 sm:-right-[220px] sm:h-[500px] sm:w-[500px] sm:blur-[140px] lg:-right-[260px] lg:bottom-[-100px] lg:h-[620px] lg:w-[620px] lg:blur-[170px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(173,209,50,0.055)_0%,transparent_62%)] dark:bg-[radial-gradient(circle,rgba(173,209,50,0.035)_0%,transparent_62%)] sm:h-[650px] sm:w-[650px] lg:h-[850px] lg:w-[850px]" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto w-full max-w-[1550px] px-5 sm:px-7 md:px-10 lg:px-14 xl:px-20">

        {/* TOP LABEL */}

        <div className="mb-10 flex items-center gap-3 sm:mb-14 sm:gap-4 lg:mb-16">
          <div className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
            <span className="absolute h-5 w-5 animate-ping rounded-full bg-[#ADD132]/20" />

            <span className="relative h-2.5 w-2.5 rounded-full bg-[#ADD132] shadow-[0_0_14px_rgba(173,209,50,0.8)]" />
          </div>

          <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#617D00] dark:text-[#ADD132] sm:text-[9px] sm:tracking-[0.32em]">
            Digital Threat Intelligence
          </span>

          <span className="hidden h-px w-16 bg-gradient-to-r from-[#ADD132]/50 to-transparent sm:block md:w-20" />
        </div>

        {/* =======================================================
            HERO INTELLIGENCE AREA
        ======================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">

          {/* LEFT CONTENT */}

          <div className="relative z-10">
            <h2 className="max-w-[780px] text-[34px] font-black leading-[0.94] tracking-[-0.05em] text-[#0A100B] dark:text-white sm:text-4xl md:text-[42px] lg:text-[52px] xl:text-[64px]">
              Not everything

              <span className="block bg-gradient-to-r from-[#719500] via-[#ADD132] to-[#D9F878] bg-clip-text text-transparent dark:from-[#ADD132] dark:via-[#C8EF56] dark:to-[#E5FF9B]">
                leaves a trace.
              </span>
            </h2>

            <p className="mt-6 max-w-[620px] text-[14px] font-medium leading-7 text-[#667169] dark:text-white/60 sm:text-[15px] sm:leading-8">
              Digital threats move silently across websites, platforms,
              marketplaces and private channels. TrackOwls creates the
              visibility required to discover activity before it becomes
              difficult to control.
            </p>

            {/* Intelligence principle */}

            <div className="mt-8 flex items-start gap-4 sm:mt-10">
              <div className="mt-1 h-12 w-[2px] shrink-0 rounded-full bg-gradient-to-b from-[#ADD132] to-transparent shadow-[0_0_12px_rgba(173,209,50,0.35)]" />

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[#6A8700] dark:text-[#ADD132] sm:text-[10px]">
                  Intelligence Principle
                </p>

                <p className="mt-1.5 max-w-[470px] text-[13px] leading-6 text-[#7A857D] dark:text-white/45 sm:text-[14px] sm:leading-7">
                  Visibility creates awareness. Awareness creates control.
                </p>
              </div>
            </div>

            {/* Metrics */}

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5 sm:mt-11 sm:gap-x-10">
              <Metric
                value="24/7"
                label="Continuous Visibility"
              />

              <span className="hidden h-8 w-px bg-black/10 sm:block dark:bg-white/10" />

              <Metric
                value="LIVE"
                label="Threat Signals"
              />

              <span className="hidden h-8 w-px bg-black/10 sm:block dark:bg-white/10" />

              <Metric
                value="360°"
                label="Digital Coverage"
              />
            </div>
          </div>

          {/* =====================================================
              RIGHT RADAR
          ====================================================== */}

          <div className="relative min-w-0">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ADD132]/10 blur-[70px] dark:bg-[#ADD132]/[0.06] sm:h-[400px] sm:w-[400px] sm:blur-[90px] lg:h-[500px] lg:w-[500px] lg:blur-[110px]" />

            <div className="relative mx-auto flex min-h-[400px] items-center justify-center sm:min-h-[500px] md:min-h-[570px]">

              {/* Radar */}

              <div className="relative h-[290px] w-[290px] sm:h-[390px] sm:w-[390px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]">

                {/* Rings */}

                <div className="absolute inset-0 rounded-full border border-[#719500]/15 dark:border-[#ADD132]/12" />
                <div className="absolute inset-[12%] rounded-full border border-[#719500]/15 dark:border-[#ADD132]/12" />
                <div className="absolute inset-[25%] rounded-full border border-[#719500]/15 dark:border-[#ADD132]/12" />
                <div className="absolute inset-[38%] rounded-full border border-[#719500]/20 dark:border-[#ADD132]/18" />

                {/* Crosshair */}

                <div className="absolute left-0 top-1/2 h-px w-full bg-[#719500]/10 dark:bg-[#ADD132]/10" />

                <div className="absolute left-1/2 top-0 h-full w-px bg-[#719500]/10 dark:bg-[#ADD132]/10" />

                <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-[#719500]/5 dark:bg-[#ADD132]/5" />

                <div className="absolute left-1/2 top-0 h-full w-px -rotate-45 bg-[#719500]/5 dark:bg-[#ADD132]/5" />

                {/* Radar sweep */}

                <div className="absolute left-1/2 top-0 h-1/2 w-[2px] origin-bottom -translate-x-1/2 bg-gradient-to-t from-[#ADD132] via-[#ADD132]/50 to-transparent shadow-[0_0_14px_rgba(173,209,50,0.9)] animate-[threatRadar_5s_linear_infinite]" />

                <div className="absolute left-1/2 top-1/2 h-[48%] w-[48%] origin-bottom-left -translate-y-full rounded-tr-full bg-gradient-to-t from-[#ADD132]/10 to-transparent blur-xl animate-[threatRadar_5s_linear_infinite]" />

                {/* Threat nodes */}

                <ThreatNode
                  className="left-[18%] top-[27%]"
                  delay="0ms"
                  size="large"
                />

                <ThreatNode
                  className="right-[19%] top-[19%]"
                  delay="700ms"
                />

                <ThreatNode
                  className="bottom-[21%] right-[19%]"
                  delay="1200ms"
                  size="large"
                />

                <ThreatNode
                  className="bottom-[28%] left-[19%]"
                  delay="1700ms"
                />

                <ThreatNode
                  className="left-[43%] top-[15%]"
                  delay="2100ms"
                />

                <ThreatNode
                  className="bottom-[14%] left-[45%]"
                  delay="2600ms"
                  size="large"
                />

                {/* Center */}

                <div className="absolute left-1/2 top-1/2 z-10 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#ADD132]/35 bg-[#ADD132]/10 shadow-[0_0_50px_rgba(173,209,50,0.15)] backdrop-blur-xl dark:bg-[#ADD132]/[0.06] sm:h-[94px] sm:w-[94px] md:h-[105px] md:w-[105px]">

                  <div className="absolute inset-2.5 animate-pulse rounded-full border border-[#ADD132]/20 sm:inset-3" />

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ADD132] text-[#111900] shadow-[0_0_30px_rgba(173,209,50,0.35)] sm:h-12 sm:w-12 md:h-14 md:w-14">
                    <ShieldCheck
                      size={23}
                      strokeWidth={1.4}
                      className="sm:h-6 sm:w-6 md:h-7 md:w-7"
                    />
                  </div>
                </div>

                {/* Radar labels */}

                <div className="absolute left-[3%] top-[42%] hidden border-l border-[#ADD132]/40 pl-3 sm:block">
                  <p className="text-[7px] font-black uppercase tracking-[0.14em] text-[#87928A] dark:text-white/35">
                    Signal
                  </p>

                  <p className="mt-1 text-[9px] font-bold text-[#192119] dark:text-white/75">
                    Detected
                  </p>
                </div>

                <div className="absolute right-[2%] top-[43%] hidden border-r border-[#ADD132]/40 pr-3 text-right sm:block">
                  <p className="text-[7px] font-black uppercase tracking-[0.14em] text-[#87928A] dark:text-white/35">
                    Status
                  </p>

                  <p className="mt-1 flex items-center justify-end gap-1.5 text-[9px] font-bold text-[#192119] dark:text-white/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132] shadow-[0_0_8px_#ADD132]" />
                    Active
                  </p>
                </div>

                {/* Coordinates */}

                <span className="absolute left-[8%] top-[5%] font-mono text-[6px] tracking-[0.14em] text-[#9BA49E] dark:text-white/20">
                  SIGNAL / 001
                </span>

                <span className="absolute right-[8%] top-[5%] font-mono text-[6px] tracking-[0.14em] text-[#9BA49E] dark:text-white/20">
                  ACTIVE
                </span>

                <span className="absolute bottom-[5%] left-[8%] font-mono text-[6px] tracking-[0.14em] text-[#9BA49E] dark:text-white/20">
                  TRACKOWLS INTELLIGENCE
                </span>

                <span className="absolute bottom-[5%] right-[8%] font-mono text-[6px] tracking-[0.14em] text-[#9BA49E] dark:text-white/20">
                  2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            SIGNAL BAR
        ======================================================== */}

        <div className="mt-8 grid border-y border-black/[0.07] dark:border-white/[0.08] sm:grid-cols-3 lg:mt-10">
          <SignalItem
            icon={<Eye size={15} strokeWidth={1.5} />}
            title="Discovery"
            value="Continuous"
            border
          />

          <SignalItem
            icon={<Radar size={15} strokeWidth={1.5} />}
            title="Detection"
            value="Intelligent"
            border
          />

          <SignalItem
            icon={<ShieldCheck size={15} strokeWidth={1.5} />}
            title="Response"
            value="Structured"
          />
        </div>
        
      </div>


<HomeThreatSurface />
      {/* =========================================================
          ANIMATIONS
      ========================================================== */}

      <style>{`
        @keyframes threatRadar {
          0% {
            transform: translateX(-50%) rotate(0deg);
          }

          100% {
            transform: translateX(-50%) rotate(360deg);
          }
        }

        @media (max-width: 639px) {
          section {
            scroll-margin-top: 72px;
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

/* =============================================================
   METRIC
============================================================= */

function Metric({ value, label }) {
  return (
    <div>
      <div className="flex items-end gap-2">
        <span className="text-xl font-black tracking-[-0.04em] text-[#151C16] dark:text-white sm:text-2xl">
          {value}
        </span>

        <span className="mb-1 h-1.5 w-1.5 rounded-full bg-[#ADD132] shadow-[0_0_8px_#ADD132]" />
      </div>

      <p className="mt-1 text-[7px] font-black uppercase tracking-[0.16em] text-[#8B958E] dark:text-white/35 sm:text-[8px]">
        {label}
      </p>
    </div>
  );
}

/* =============================================================
   THREAT NODE
============================================================= */

function ThreatNode({
  className,
  delay = "0ms",
  size = "normal",
}) {
  const large = size === "large";

  return (
    <div className={`absolute ${className}`}>
      <span
        className="absolute animate-ping rounded-full bg-[#ADD132]/10"
        style={{
          inset: large ? "-8px" : "-6px",
          animationDelay: delay,
        }}
      />

      <span
        className={`relative block rounded-full bg-[#ADD132] shadow-[0_0_16px_#ADD132] ${
          large ? "h-2 w-2" : "h-1.5 w-1.5"
        }`}
      />
    </div>
  );
}

/* =============================================================
   SIGNAL ITEM
============================================================= */

function SignalItem({
  icon,
  title,
  value,
  border = false,
}) {
  return (
    <div
      className={`
        px-4
        py-4
        sm:px-5
        sm:py-5
        ${border ? "border-b sm:border-b-0 sm:border-r" : ""}
        border-black/[0.07]
        dark:border-white/[0.08]
      `}
    >
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#89948C] dark:text-white/35 sm:text-[9px]">
          {title}
        </span>

        <span className="text-[#719400] dark:text-[#ADD132]">
          {icon}
        </span>
      </div>

      <div className="mt-1.5 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

        <span className="text-[10px] font-bold text-[#172019] dark:text-white/75 sm:text-[11px]">
          {value}
        </span>
      </div>
    </div>
  );
}

export default ThreatIntelligence;