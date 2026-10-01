import React from "react";
import {
  ArrowUpRight,
  FileSearch,
  ShieldCheck,
  Activity,
  BarChart3,
} from "lucide-react";

const gettingStartedSteps = [
  {
    number: "01",
    label: "START",
    title: "Free audit",
    text: "We scan for your content or brand and share a sample report.",
    icon: FileSearch,
  },
  {
    number: "02",
    label: "AUTHORIZE",
    title: "Authorization",
    text: "You sign an agreement and share your official titles and brand details.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    label: "ACTIVATE",
    title: "Activation",
    text: "Your account opens in the tool and monitoring starts.",
    icon: Activity,
  },
  {
    number: "04",
    label: "MONITOR",
    title: "Reporting",
    text: "You get alerts, a live case view and a monthly report.",
    icon: BarChart3,
  },
];

function GettingStarted() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAF3] py-16 text-[#132018] dark:bg-[#070A07] dark:text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">

        {/* HEADER */}

        <div className="flex flex-col gap-5 border-b border-[#DCE5D7] pb-8 dark:border-white/[0.09] sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#ADD132]" />

              <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#718B1B] dark:text-[#ADD132]">
                Simple onboarding
              </span>
            </div>

            <h2 className="text-[34px] font-black leading-none tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[64px]">
              Getting{" "}
              <span className="text-[#789A16] dark:text-[#ADD132]">
                started.
              </span>
            </h2>
          </div>

          <p className="max-w-[390px] text-[12px] leading-6 text-[#647067] dark:text-white/40 sm:text-[13px] sm:leading-7">
            A straightforward path from your first audit to continuous
            monitoring and reporting.
          </p>
        </div>

        {/* PROCESS */}

        <div className="relative mt-12 lg:mt-16">

          {/* CONNECTING LINE */}

          <div className="pointer-events-none absolute left-[7%] right-[7%] top-[34px] hidden h-px bg-[#CCD8C8] dark:bg-white/[0.12] lg:block" />

          <div className="grid gap-0 lg:grid-cols-4">

            {gettingStartedSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className={`
                    group relative
                    border-[#CCD8C8]
                    dark:border-white/[0.12]
                    ${
                      index !== 0
                        ? "border-t lg:border-l lg:border-t-0"
                        : ""
                    }
                  `}
                >
                  <div className="px-0 py-8 sm:px-6 lg:px-8 lg:py-0">

                    {/* NUMBER */}

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#C9D5C5] bg-[#F7FAF3] transition-all duration-500 group-hover:border-[#ADD132] group-hover:bg-[#ADD132] group-hover:shadow-[0_0_0_8px_rgba(173,209,50,0.08)] dark:border-white/[0.12] dark:bg-[#070A07] dark:group-hover:bg-[#ADD132]">
                        <div className="flex flex-col items-center">
                          <span className="text-[13px] font-black text-[#647D16] transition-colors group-hover:text-[#132018] dark:text-[#ADD132]">
                            {step.number}
                          </span>

                          <span className="mt-0.5 text-[6px] font-black uppercase tracking-[0.16em] text-[#8A958B] group-hover:text-[#132018]/60 dark:text-white/20">
                            Step
                          </span>
                        </div>
                      </div>

                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8A958B] dark:text-white/20 lg:hidden">
                        {step.label}
                      </span>
                    </div>

                    {/* CONTENT */}

                    <div className="mt-7">

                      <div className="flex items-center gap-3">
                        <Icon
                          size={15}
                          strokeWidth={1.5}
                          className="text-[#718B1B] dark:text-[#ADD132]"
                        />

                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#718B1B] dark:text-[#ADD132]">
                          {step.label}
                        </span>
                      </div>

                      <h3 className="mt-4 text-[21px] font-black tracking-[-0.025em] text-[#132018] dark:text-white sm:text-[23px]">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-[280px] text-[12px] leading-6 text-[#647067] dark:text-white/40 sm:text-[13px] sm:leading-7">
                        {step.text}
                      </p>
                    </div>

                    {/* BOTTOM INDICATOR */}

                    <div className="mt-7 flex items-center gap-2 opacity-40 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                      <span className="h-px w-8 bg-[#ADD132]" />

                      <ArrowUpRight
                        size={13}
                        className="text-[#718B1B] dark:text-[#ADD132]"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

       
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

export default GettingStarted;