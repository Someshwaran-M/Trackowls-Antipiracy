import React from "react";
import {
  ShieldCheck,
  Globe2,
  Radar,
  Search,
  ArrowUpRight,
  Activity,
  Eye,
} from "lucide-react";

const intelligencePoints = [
  {
    number: "01",
    title: "Digital Visibility",
    text: "Understand where your content, brand, and intellectual property appear across the digital ecosystem.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Threat Discovery",
    text: "Identify suspicious activity and potential risks before they become difficult to manage.",
    icon: Search,
  },
  {
    number: "03",
    title: "Continuous Intelligence",
    text: "Maintain an evolving view of digital activity across multiple online surfaces.",
    icon: Activity,
  },
];

function ProtectionFlow() {
  return (
    <section className="relative overflow-hidden bg-[#F5F8F1] py-28 text-[#101510] dark:bg-[#050705] dark:text-white sm:py-36">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[5%] h-[550px] w-[550px] rounded-full bg-[#ADD132]/10 blur-[170px] dark:bg-[#ADD132]/5" />

        <div className="absolute bottom-[-15%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#ADD132]/8 blur-[160px] dark:bg-[#ADD132]/4" />

        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(40,60,30,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(40,60,30,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ───────────────── TOP HEADER ───────────────── */}

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-11 bg-[#8BAA20] dark:bg-[#ADD132]" />

              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#68755F] dark:text-[#ADD132]">
                Digital Protection Intelligence
              </span>
            </div>

            <h2 className="max-w-[900px] text-[46px] font-black leading-[0.88] tracking-[-0.075em] sm:text-[64px] lg:text-[88px]">
              Know what is
              <br />
              happening
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                around you.
              </span>
            </h2>
          </div>

          <div className="max-w-[480px] lg:ml-auto lg:pb-3">

            <p className="text-[12px] leading-7 text-[#697369] dark:text-white/40 sm:text-[13px]">
              Digital protection starts with awareness. TrackOwls helps
              organizations build a clearer picture of their digital
              environment, connect meaningful signals, and understand what
              deserves attention.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7D9F00] dark:bg-[#ADD132]" />

              <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#6F8D08] dark:text-[#ADD132]">
                Intelligence is visibility
              </span>
            </div>

          </div>
        </div>

        {/* ───────────────── MAIN FEATURE ───────────────── */}

        <div className="mt-24 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">

          {/* Large Visual */}

          <div className="relative min-h-[540px] overflow-hidden rounded-[35px] border border-[#263226]/10 bg-white/70 shadow-[0_30px_100px_rgba(35,55,25,0.07)] backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#091008]/80 dark:shadow-[0_30px_100px_rgba(0,0,0,0.2)]">

            {/* Header */}

            <div className="flex items-center justify-between border-b border-[#263226]/10 px-6 py-5 dark:border-white/[0.07] sm:px-8">

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#ADD132]/10 text-[#6F8D08] dark:text-[#ADD132]">
                  <Radar size={15} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#364135] dark:text-white/60">
                    Digital Environment
                  </p>

                  <p className="mt-1 text-[6px] font-bold uppercase tracking-[0.15em] text-[#899286] dark:text-white/20">
                    Intelligence Surface
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7D9F00] dark:bg-[#ADD132]" />

                <span className="text-[7px] font-black uppercase tracking-[0.18em] text-[#789900] dark:text-[#ADD132]">
                  Active
                </span>
              </div>

            </div>

            {/* Visual */}

            <div className="relative h-[480px]">

              {/* Radar rings */}

              <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#789900]/10 dark:border-[#ADD132]/10" />

              <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#789900]/10 dark:border-[#ADD132]/10" />

              <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#789900]/15 dark:border-[#ADD132]/15" />

              {/* Cross */}

              <div className="absolute left-1/2 top-[8%] bottom-[8%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#789900]/15 to-transparent dark:via-[#ADD132]/10" />

              <div className="absolute left-[8%] right-[8%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#789900]/15 to-transparent dark:via-[#ADD132]/10" />

              {/* Center */}

              <div className="absolute left-1/2 top-1/2 flex h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#789900]/25 bg-[#F5F8F1]/90 shadow-[0_0_70px_rgba(110,140,20,0.12)] backdrop-blur-xl dark:border-[#ADD132]/25 dark:bg-[#081008]/90 dark:shadow-[0_0_80px_rgba(173,209,50,0.12)] sm:h-[175px] sm:w-[175px]">

                <div className="absolute inset-[15px] rounded-full border border-dashed border-[#789900]/15 dark:border-[#ADD132]/10" />

                <div className="text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ADD132]/10 text-[#6F8D08] dark:text-[#ADD132]">
                    <ShieldCheck size={28} strokeWidth={1.2} />
                  </div>

                  <p className="mt-3 text-[8px] font-black uppercase tracking-[0.28em] text-[#303A2F] dark:text-white/70">
                    TrackOwls
                  </p>

                  <p className="mt-1 text-[6px] font-bold uppercase tracking-[0.2em] text-[#8A9387] dark:text-white/25">
                    Intelligence Core
                  </p>

                </div>
              </div>

              {/* Signal Labels */}

              <Signal
                className="left-[10%] top-[18%]"
                label="Web"
                value="Detected"
              />

              <Signal
                className="right-[9%] top-[25%]"
                label="Social"
                value="Monitoring"
              />

              <Signal
                className="left-[12%] bottom-[23%]"
                label="Media"
                value="Analyzing"
              />

              <Signal
                className="right-[10%] bottom-[18%]"
                label="Marketplace"
                value="Visible"
              />

              {/* Signal lines */}

              <div className="absolute left-[20%] top-[30%] h-px w-[30%] rotate-[25deg] bg-[#789900]/15 dark:bg-[#ADD132]/15" />

              <div className="absolute right-[20%] top-[34%] h-px w-[30%] -rotate-[25deg] bg-[#789900]/15 dark:bg-[#ADD132]/15" />

              <div className="absolute bottom-[32%] left-[20%] h-px w-[30%] -rotate-[20deg] bg-[#789900]/15 dark:bg-[#ADD132]/15" />

              <div className="absolute bottom-[28%] right-[20%] h-px w-[30%] rotate-[20deg] bg-[#789900]/15 dark:bg-[#ADD132]/15" />

              {/* Bottom status */}

              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between border-t border-[#263226]/10 pt-4 dark:border-white/[0.07]">

                <span className="text-[6px] font-black uppercase tracking-[0.2em] text-[#8A9387] dark:text-white/20">
                  Digital Visibility Layer
                </span>

                <span className="text-[6px] font-black uppercase tracking-[0.2em] text-[#789900] dark:text-[#ADD132]">
                  Connected
                </span>

              </div>

            </div>
          </div>

          {/* Right Editorial Panel */}

          <div className="flex flex-col justify-between rounded-[35px] border border-[#263226]/10 bg-[#EAF1E0]/70 p-7 dark:border-white/[0.08] dark:bg-[#0A1109]/70 sm:p-9">

            <div>

              <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#789900] dark:text-[#ADD132]">
                The Principle
              </span>

              <h3 className="mt-6 text-[34px] font-black leading-[0.94] tracking-[-0.06em] sm:text-[42px]">
                You cannot
                <br />
                protect what
                <br />
                you cannot
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  see.
                </span>
              </h3>

              <p className="mt-7 text-[11px] leading-6 text-[#707A70] dark:text-white/35">
                TrackOwls is built around a simple principle: meaningful
                protection begins with meaningful visibility.
              </p>

            </div>

            <div className="mt-12">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#789900] dark:bg-[#ADD132]" />

                <span className="text-[7px] font-black uppercase tracking-[0.22em] text-[#687267] dark:text-white/30">
                  Intelligence First
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">

                <MiniMetric
                  value="360°"
                  label="Visibility"
                />

                <MiniMetric
                  value="24/7"
                  label="Monitoring"
                />

                <MiniMetric
                  value="6+"
                  label="Surfaces"
                />

                <MiniMetric
                  value="LIVE"
                  label="Intelligence"
                />

              </div>

            </div>

          </div>
        </div>

        {/* ───────────────── INTELLIGENCE POINTS ───────────────── */}

        <div className="mt-24">

          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#789900] dark:text-[#ADD132]">
                What This Means
              </span>

              <h3 className="mt-3 text-[30px] font-black tracking-[-0.05em] sm:text-[38px]">
                Intelligence with context.
              </h3>
            </div>

            <p className="max-w-[350px] text-[9px] leading-5 text-[#7B857B] dark:text-white/25">
              Connecting signals creates a clearer understanding of the
              environment surrounding your digital presence.
            </p>

          </div>

          <div className="divide-y divide-[#263226]/10 border-y border-[#263226]/10 dark:divide-white/[0.07] dark:border-white/[0.08]">

            {intelligencePoints.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.number}
                  className="group grid gap-5 py-8 lg:grid-cols-[80px_0.9fr_1.3fr_50px] lg:items-center"
                >

                  <span className="text-[9px] font-black tracking-[0.2em] text-[#789900] dark:text-[#ADD132]">
                    {point.number}
                  </span>

                  <div className="flex items-center gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#789900]/15 bg-[#ADD132]/10 text-[#6F8D08] dark:border-[#ADD132]/15 dark:text-[#ADD132]">
                      <Icon size={16} strokeWidth={1.4} />
                    </div>

                    <h4 className="text-[14px] font-black tracking-[-0.02em] text-[#1C241B] dark:text-white">
                      {point.title}
                    </h4>

                  </div>

                  <p className="max-w-[600px] text-[10px] leading-6 text-[#737D72] dark:text-white/30">
                    {point.text}
                  </p>

                  <ArrowUpRight
                    size={15}
                    className="hidden text-[#789900] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-[#ADD132] lg:block"
                  />

                </div>
              );
            })}

          </div>
        </div>

        {/* ───────────────── FINAL STATEMENT ───────────────── */}

        <div className="mt-28 border-t border-[#263226]/10 pt-16 text-center dark:border-white/[0.08]">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#789900]/20 bg-[#ADD132]/10 text-[#6F8D08] dark:border-[#ADD132]/20 dark:text-[#ADD132]">
            <Globe2 size={19} strokeWidth={1.3} />
          </div>

          <h3 className="mx-auto mt-7 max-w-[800px] text-[34px] font-black leading-[0.95] tracking-[-0.06em] sm:text-[48px]">
            A clearer view of your
            <span className="text-[#789900] dark:text-[#ADD132]">
              {" "}digital world.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-[530px] text-[10px] leading-5 text-[#7A8378] dark:text-white/30">
            TrackOwls brings digital signals together so organizations can
            understand their environment and make more informed protection
            decisions.
          </p>

          <button
            type="button"
            className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#ADD132] px-6 py-3.5 text-[8px] font-black uppercase tracking-[0.18em] text-[#101800] shadow-[0_15px_40px_rgba(110,140,20,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(110,140,20,0.25)]"
          >
            Explore TrackOwls

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#091007] text-[#ADD132] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={12} />
            </span>
          </button>

        </div>

      </div>
    </section>
  );
}

/* ───────────────── SIGNAL ───────────────── */

function Signal({ className = "", label, value }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="flex items-center gap-2">

        <span className="relative flex h-3 w-3 items-center justify-center rounded-full border border-[#789900]/30 dark:border-[#ADD132]/30">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7D9F00] dark:bg-[#ADD132]" />
        </span>

        <div>
          <p className="text-[6px] font-black uppercase tracking-[0.2em] text-[#687267] dark:text-white/30">
            {label}
          </p>

          <p className="mt-0.5 text-[6px] font-bold uppercase tracking-[0.15em] text-[#789900] dark:text-[#ADD132]">
            {value}
          </p>
        </div>

      </div>
    </div>
  );
}

/* ───────────────── MINI METRIC ───────────────── */

function MiniMetric({ value, label }) {
  return (
    <div>
      <div className="text-[24px] font-black leading-none tracking-[-0.06em] text-[#172017] dark:text-white">
        {value}
      </div>

      <div className="mt-2 text-[6px] font-black uppercase tracking-[0.2em] text-[#7B857B] dark:text-white/25">
        {label}
      </div>
    </div>
  );
}

export default ProtectionFlow;