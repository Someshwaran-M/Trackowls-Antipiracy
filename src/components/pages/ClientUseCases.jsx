import React from "react";
import {
  Clapperboard,
  GraduationCap,
  Radio,
  Fingerprint,
  ArrowUpRight,
  Check,
  BarChart3,
  Search,
  ShieldCheck,
  Clock3,
  Scale,
} from "lucide-react";

function ClientUseCases() {
  const useCases = [
    {
      number: "01",
      icon: Clapperboard,
      label: "ENTERTAINMENT",
      title: "Movie release week",
      text: "Add the title and its alternate names before release. The tool watches for camcord uploads and streaming links, and alerts you to each new find so notices go out the same day.",
    },
    {
      number: "02",
      icon: GraduationCap,
      label: "EDUCATION",
      title: "Paid course leaks",
      text: "Track your course names and instructor names across Telegram groups and file-sharing links. Repeat re-uploads are grouped so we can act on the source.",
    },
    {
      number: "03",
      icon: Radio,
      label: "LIVE CONTENT",
      title: "Live match or event",
      text: "Set the event time and channel names. Restream links are flagged during the event and sent to hosts straight away.",
    },
    {
      number: "04",
      icon: Fingerprint,
      label: "BRAND PROTECTION",
      title: "Brand impersonation",
      text: "Add your brand name, logo and official handles. Fake pages, look-alike domains and counterfeit listings appear in one queue for review.",
    },
  ];

  const reportItems = [
    {
      icon: Search,
      text: "Total links found and links removed",
    },
    {
      icon: ShieldCheck,
      text: "Cases still open, with the reason",
    },
    {
      icon: BarChart3,
      text: "Top pirate sites and channels for your content",
    },
    {
      icon: Clock3,
      text: "Platforms and hosts ranked by response time",
    },
    {
      icon: Fingerprint,
      text: "Repeat offenders and mirror sites",
    },
    {
      icon: Scale,
      text: "Brand misuse cases by type",
    },
    {
      icon: Search,
      text: "Search results cleaned up",
    },
    {
      icon: ArrowUpRight,
      text: "Recommended next actions, including legal steps",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#F7FAF3] text-[#132018] dark:bg-[#070A07] dark:text-white">
      {/* =========================================================
          HOW CLIENTS USE THE TOOL
      ========================================================= */}

      <section className="relative border-t border-[#DCE5D7] dark:border-white/[0.08]">
        <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-16">
          {/* SECTION INTRO */}

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#ADD132]" />

                <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#718B1B] dark:text-[#ADD132]">
                  Real-world workflows
                </span>
              </div>

              <h2 className="max-w-[700px] text-[34px] font-black leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[68px]">
                How clients
                <br />
                use the{" "}
                <span className="text-[#789A16] dark:text-[#ADD132]">
                  tool.
                </span>
              </h2>
            </div>

            <div className="max-w-[570px] lg:ml-auto">
              <p className="text-[13px] leading-7 text-[#5F6B62] dark:text-white/45 sm:text-[14px]">
                Different threats require different monitoring patterns. TrackOwls
                brings those workflows into one place so teams can respond while
                the activity is still relevant.
              </p>
            </div>
          </div>

          {/* USE CASES */}

          <div className="mt-14 border-t border-[#CBD6C8] dark:border-white/[0.12]">
            <div className="grid md:grid-cols-2">
              {useCases.map((item, index) => {
                const Icon = item.icon;
                const isRight = index % 2 === 1;
                const isBottom = index >= 2;

                return (
                  <article
                    key={item.number}
                    className={`
                      group relative
                      px-0 py-8
                      sm:py-10
                      md:px-8
                      lg:px-10
                      ${
                        !isRight
                          ? "md:border-r md:border-[#CBD6C8] md:dark:border-white/[0.12]"
                          : ""
                      }
                      ${
                        isBottom
                          ? "border-t border-[#CBD6C8] dark:border-white/[0.12]"
                          : ""
                      }
                      ${index === 0 ? "md:pr-10 lg:pr-14" : ""}
                      ${index === 1 ? "md:pl-10 lg:pl-14" : ""}
                    `}
                  >
                    {/* TOP LINE */}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center border border-[#D5DED0] text-[#6D8718] dark:border-white/[0.12] dark:text-[#ADD132]">
                          <Icon size={14} strokeWidth={1.5} />
                        </span>

                        <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#7C887E] dark:text-white/30">
                          {item.label}
                        </span>
                      </div>

                      <span className="text-[9px] font-black tracking-[0.18em] text-[#93A08F] dark:text-white/20">
                        {item.number}
                      </span>
                    </div>

                    {/* CONTENT */}

                    <div className="mt-7">
                      <h3 className="text-[22px] font-black tracking-[-0.025em] text-[#132018] dark:text-white sm:text-[25px]">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-[590px] text-[12px] leading-6 text-[#5F6B62] dark:text-white/45 sm:text-[13px] sm:leading-7">
                        {item.text}
                      </p>
                    </div>

                    {/* HOVER INDICATOR */}

                    <div className="mt-7 flex items-center gap-2 opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      <span className="h-px w-8 bg-[#ADD132]" />

                      <span className="text-[7px] font-black uppercase tracking-[0.18em] text-[#6D8718] dark:text-[#ADD132]">
                        Monitor
                      </span>

                      <ArrowUpRight
                        size={12}
                        className="text-[#6D8718] dark:text-[#ADD132]"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MONTHLY REPORT
      ========================================================= */}

      <section className="relative overflow-hidden border-y border-[#DCE5D7] bg-[#EDF3E9] dark:border-white/[0.08] dark:bg-[#0B120D]">
        {/* DECORATIVE ELEMENT */}

        <div className="pointer-events-none absolute right-[-120px] top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="h-[430px] w-[430px] rounded-full border border-[#ADD132]/10">
            <div className="m-[70px] h-[290px] rounded-full border border-[#ADD132]/10">
              <div className="m-[70px] h-[150px] rounded-full border border-[#ADD132]/10" />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            {/* LEFT */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#ADD132]" />

                <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#718B1B] dark:text-[#ADD132]">
                  Monthly intelligence
                </span>
              </div>

              <h2 className="max-w-[570px] text-[32px] font-black leading-[1] tracking-[-0.04em] text-[#132018] dark:text-white sm:text-4xl md:text-5xl lg:text-[56px]">
                What your monthly
                <span className="block text-[#789A16] dark:text-[#ADD132]">
                  report includes.
                </span>
              </h2>

              <p className="mt-6 max-w-[470px] text-[12px] leading-6 text-[#657168] dark:text-white/40 sm:text-[13px] sm:leading-7">
                A clear operational view of what was discovered, what changed,
                what remains open and where the next response should focus.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ADD132] text-[#132018]">
                  <BarChart3 size={15} strokeWidth={1.7} />
                </span>

                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#718B1B] dark:text-[#ADD132]">
                    TrackOwls intelligence
                  </p>

                  <p className="mt-1 text-[10px] text-[#667269] dark:text-white/35">
                    Structured reporting for every cycle
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT REPORT LIST */}

            <div className="relative">
              <div className="grid border-t border-[#C8D4C4] dark:border-white/[0.12] sm:grid-cols-2">
                {reportItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={`${item.text}-${index}`}
                      className={`
                        group flex gap-4 border-b border-[#C8D4C4] py-6
                        dark:border-white/[0.12]
                        ${
                          index % 2 === 0
                            ? "sm:border-r sm:pr-8 lg:pr-10"
                            : "sm:pl-8 lg:pl-10"
                        }
                      `}
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C7D4C1] bg-[#F7FAF3] text-[#6E8A16] transition-all duration-300 group-hover:border-[#ADD132] group-hover:bg-[#ADD132] group-hover:text-[#132018] dark:border-white/[0.12] dark:bg-white/[0.02] dark:text-[#ADD132] dark:group-hover:bg-[#ADD132] dark:group-hover:text-[#132018]">
                        <Icon size={12} strokeWidth={1.7} />
                      </div>

                      <div className="flex-1">
                        <p className="text-[12px] font-semibold leading-6 text-[#243128] dark:text-white/70 sm:text-[13px] sm:leading-7">
                          {item.text}
                        </p>
                      </div>

                      <Check
                        size={13}
                        className="mt-1 shrink-0 text-[#86A51C] opacity-40 transition-all duration-300 group-hover:opacity-100 dark:text-[#ADD132]"
                      />
                    </div>
                  );
                })}
              </div>

              {/* REPORT FOOTER */}

              <div className="mt-7 flex items-center justify-between">
                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#7B877D] dark:text-white/25">
                  Reporting overview
                </span>

                <span className="flex items-center gap-2 text-[7px] font-black uppercase tracking-[0.18em] text-[#718B1B] dark:text-[#ADD132]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />
                  08 report signals
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}

export default ClientUseCases;