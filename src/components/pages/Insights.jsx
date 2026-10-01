import React, { useEffect, useMemo, useState } from "react";

import { Link } from "react-router-dom";

import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Check,
  FileCheck2,
  Fingerprint,
  Search,
  Send,
  ShieldCheck,
  BellRing,
} from "lucide-react";

const monitoringFeatures = [
  {
    number: "01",
    label: "SOURCE SCANNING",
    title: "Discover where activity appears.",
    body:
      "Scheduled scans of pirate sites, Telegram, social media, marketplaces, domains and search results.",
    icon: Search,
  },
  {
    number: "02",
    label: "MATCH AND VERIFY",
    title: "Separate signals from noise.",
    body:
      "Finds are matched to the titles, keywords and brand assets you provide, then checked by a person before any notice goes out.",
    icon: Fingerprint,
  },
  {
    number: "03",
    label: "EVIDENCE CAPTURE",
    title: "Keep every detail together.",
    body:
      "Each case stores the URL, screenshot, date and time, and an archived copy of the page.",
    icon: FileCheck2,
  },
  {
    number: "04",
    label: "TAKEDOWN WORKFLOW",
    title: "Move from detection to action.",
    body:
      "Ready notice templates, platform and host contacts, follow-up reminders and a status for every case.",
    icon: Send,
  },
  {
    number: "05",
    label: "ALERTS",
    title: "Know when something changes.",
    body:
      "Email or WhatsApp alerts for new leaks, with priority handling for release days and live events.",
    icon: BellRing,
  },
  {
    number: "06",
    label: "REPORTS",
    title: "Turn cases into visibility.",
    body:
      "Cases by platform, response times, repeat offenders and monthly totals you can share with your team.",
    icon: BarChart3,
  },
];

const caseStages = [
  "Found",
  "Verified",
  "Notice sent",
  "Follow-up",
  "Removed",
  "Escalated",
];

const caseData = {
  Found: {
    removed: 94,
    progress: 24,
    escalated: 10,
    cases: [
      ["pirate-site.example/new-release-hd", "Piracy", "12 min ago"],
      ["t.me/course-share-example", "Telegram", "28 min ago"],
      ["Search result: mirror page", "Search", "41 min ago"],
      ["fake-brand-page (social)", "Social", "1 hr ago"],
      ["clone-store.example", "Marketplace", "2 hrs ago"],
    ],
    platforms: [
      ["Search engines", "Fast", 85],
      ["Social platforms", "Medium", 60],
      ["Hosting providers", "Medium", 55],
      ["Offshore hosts", "Slow", 25],
    ],
  },

  Verified: {
    removed: 95,
    progress: 22,
    escalated: 11,
    cases: [
      ["pirate-site.example/new-release-hd", "Piracy", "18 min ago"],
      ["t.me/course-share-example", "Telegram", "34 min ago"],
      ["Search result: mirror page", "Search", "52 min ago"],
      ["fake-brand-page (social)", "Social", "1 hr ago"],
      ["clone-store.example", "Marketplace", "2 hrs ago"],
    ],
    platforms: [
      ["Search engines", "Fast", 88],
      ["Social platforms", "Medium", 64],
      ["Hosting providers", "Medium", 58],
      ["Offshore hosts", "Slow", 28],
    ],
  },

  "Notice sent": {
    removed: 96,
    progress: 21,
    escalated: 10,
    cases: [
      ["pirate-site.example/new-release-hd", "Piracy", "22 min ago"],
      ["t.me/course-share-example", "Telegram", "38 min ago"],
      ["Search result: mirror page", "Search", "56 min ago"],
      ["fake-brand-page (social)", "Social", "1 hr ago"],
      ["clone-store.example", "Marketplace", "2 hrs ago"],
    ],
    platforms: [
      ["Search engines", "Fast", 90],
      ["Social platforms", "Medium", 68],
      ["Hosting providers", "Medium", 61],
      ["Offshore hosts", "Slow", 31],
    ],
  },

  "Follow-up": {
    removed: 97,
    progress: 21,
    escalated: 10,
    cases: [
      ["pirate-site.example/new-release-hd", "Piracy", "26 min ago"],
      ["t.me/course-share-example", "Telegram", "44 min ago"],
      ["Search result: mirror page", "Search", "1 hr ago"],
      ["fake-brand-page (social)", "Social", "2 hrs ago"],
      ["clone-store.example", "Marketplace", "3 hrs ago"],
    ],
    platforms: [
      ["Search engines", "Fast", 92],
      ["Social platforms", "Medium", 70],
      ["Hosting providers", "Medium", 64],
      ["Offshore hosts", "Slow", 34],
    ],
  },

  Removed: {
    removed: 97,
    progress: 21,
    escalated: 10,
    cases: [
      ["pirate-site.example/new-release-hd", "Piracy", "32 min ago"],
      ["t.me/course-share-example", "Telegram", "48 min ago"],
      ["Search result: mirror page", "Search", "1 hr ago"],
      ["fake-brand-page (social)", "Social", "2 hrs ago"],
      ["clone-store.example", "Marketplace", "3 hrs ago"],
    ],
    platforms: [
      ["Search engines", "Fast", 95],
      ["Social platforms", "Medium", 74],
      ["Hosting providers", "Medium", 67],
      ["Offshore hosts", "Slow", 38],
    ],
  },

  Escalated: {
    removed: 97,
    progress: 21,
    escalated: 10,
    cases: [
      ["pirate-site.example/new-release-hd", "Piracy", "36 min ago"],
      ["t.me/course-share-example", "Telegram", "54 min ago"],
      ["Search result: mirror page", "Search", "1 hr ago"],
      ["fake-brand-page (social)", "Social", "2 hrs ago"],
      ["clone-store.example", "Marketplace", "3 hrs ago"],
    ],
    platforms: [
      ["Search engines", "Fast", 96],
      ["Social platforms", "Medium", 76],
      ["Hosting providers", "Medium", 69],
      ["Offshore hosts", "Slow", 40],
    ],
  },
};

function Insights() {
  const [activeStage, setActiveStage] = useState("Found");
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature(
        (current) => (current + 1) % monitoringFeatures.length
      );
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const active = monitoringFeatures[activeFeature];
  const ActiveIcon = active.icon;

  const activeData = useMemo(
    () => caseData[activeStage],
    [activeStage]
  );

  const selectStage = (stage) => {
    setActiveStage(stage);
    setSelectedCase(null);
  };

  return (
    <main className="relative overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1580px] px-5 py-14 sm:px-7 sm:py-16 md:px-10 lg:px-12 lg:py-20 xl:px-16">
        <section
          id="monitoring-dashboard"
          className="mt-12 sm:mt-14 lg:mt-16"
        >
          <div className="flex flex-col gap-5 border-b border-[#DDE5D7] pb-5 dark:border-white/[0.08] sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#A8CF2E]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#6F8F18] dark:text-[#A8CF2E]">
                  Case journey
                </span>
              </div>

              <h2 className="mt-3 text-[25px] font-black leading-tight tracking-[-0.035em] text-[#132018] dark:text-white sm:text-[30px] md:text-[34px]">
                Every case has a
                <span className="text-[#6F8F18] dark:text-[#A8CF2E]">
                  {" "}
                  clear path.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-[11px] leading-5 text-[#5B675E] dark:text-white/40 sm:text-[12px]">
              Select a stage to inspect the current case activity and
              platform response.
            </p>
          </div>

          {/* STAGE BUTTONS */}

          <div className="mt-6 flex flex-wrap gap-2">
            {caseStages.map((stage, index) => {
              const selected = activeStage === stage;

              return (
                <button
                  key={stage}
                  type="button"
                  onClick={() => selectStage(stage)}
                  className={`case-stage-button group relative inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[10px] font-semibold transition-all duration-300 ${
                    selected
                      ? "border-[#A8CF2E] bg-[#A8CF2E] text-[#132018] shadow-[0_5px_20px_rgba(168,207,46,0.18)]"
                      : "border-[#D7E0D2] bg-white text-[#3F4C44] hover:-translate-y-0.5 hover:border-[#A8CF2E]/50 dark:border-white/10 dark:bg-white/[0.025] dark:text-white/55"
                  }`}
                >
                  <span
                    className={`text-[7px] font-black tracking-[0.1em] ${
                      selected
                        ? "text-[#132018]/60"
                        : "text-[#8A948D] dark:text-white/20"
                    }`}
                  >
                    0{index + 1}
                  </span>

                  {stage}

                  {selected && <Check className="h-3 w-3" />}
                </button>
              );
            })}
          </div>

          {/* DASHBOARD */}

          <div className="monitoring-dashboard mt-5 overflow-hidden rounded-[16px] border border-[#DDE5D7] bg-white shadow-[0_14px_45px_rgba(18,30,20,0.05)] dark:border-white/[0.10] dark:bg-[#080D09] dark:shadow-none">
            {/* DASHBOARD HEADER */}

            <div className="flex flex-col gap-3 bg-[#0B160F] px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-center gap-3">
                <Activity
                  className="h-4 w-4 text-[#A8CF2E]"
                  strokeWidth={1.6}
                />

                <div>
                  <p className="text-[11px] font-semibold sm:text-xs">
                    TrackOwls monitoring dashboard
                  </p>

                  <p className="mt-0.5 text-[8px] uppercase tracking-[0.15em] text-white/40">
                    Live sample environment
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.14em] text-white/45">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A8CF2E] shadow-[0_0_8px_rgba(168,207,46,0.9)]" />

                {activeStage} selected
              </div>
            </div>

            {/* STAT STRIP */}

            <div className="grid grid-cols-2 border-b border-[#DDE5D7] dark:border-white/[0.08] sm:grid-cols-4">
              {[
                ["128", "Links found"],
                [String(activeData.removed), "Removed"],
                [String(activeData.progress), "In progress"],
                [String(activeData.escalated), "Escalated"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-r border-b border-[#E3E9DF] px-5 py-5 last:border-r-0 dark:border-white/[0.07] sm:border-b-0 sm:px-6"
                >
                  <div
                    key={`${activeStage}-${value}`}
                    className="dashboard-number text-[25px] font-black leading-none tracking-[-0.04em] text-[#132018] dark:text-white sm:text-[28px]"
                  >
                    {value}
                  </div>

                  <p className="mt-2 text-[9px] text-[#5B675E] dark:text-white/40">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* DASHBOARD CONTENT */}

            <div className="flex flex-col lg:flex-row">
              {/* RECENT CASES */}

              <div className="min-w-0 flex-1 border-b border-[#DDE5D7] p-5 dark:border-white/[0.08] lg:border-b-0 lg:border-r lg:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#6F8F18] dark:text-[#A8CF2E]">
                      Case activity
                    </p>

                    <h3 className="mt-1 text-[15px] font-extrabold text-[#132018] dark:text-white">
                      Recent cases
                    </h3>
                  </div>

                  <span className="text-[8px] text-[#7A857D] dark:text-white/25">
                    {activeData.cases.length} active records
                  </span>
                </div>

                <div className="mt-4">
                  {activeData.cases.map(([title, type, time], index) => {
                    const selected = selectedCase?.title === title;

                    return (
                      <button
                        key={`${title}-${index}`}
                        type="button"
                        onClick={() =>
                          setSelectedCase({
                            title,
                            type,
                            time,
                          })
                        }
                        className={`monitoring-case group flex w-full items-center justify-between gap-4 border-t border-[#E3E9DF] py-3 text-left transition-all duration-300 dark:border-white/[0.07] ${
                          selected
                            ? "bg-[#F1F7E4] dark:bg-[#A8CF2E]/[0.04]"
                            : "hover:bg-[#F8FAF6] dark:hover:bg-white/[0.02]"
                        }`}
                      >
                        <div className="min-w-0">
                          <p className="truncate text-[10px] font-medium text-[#243129] dark:text-white/70 sm:text-[11px]">
                            {title}
                          </p>

                          <p className="mt-1 text-[7px] uppercase tracking-[0.12em] text-[#7A857D] dark:text-white/25">
                            {type} · {time}
                          </p>
                        </div>

                        <span
                          className={`shrink-0 rounded-full border px-2.5 py-1 text-[7px] font-bold ${
                            activeStage === "Removed"
                              ? "border-[#A8CF2E] bg-[#A8CF2E] text-[#132018]"
                              : activeStage === "Escalated"
                              ? "border-[#132018] bg-[#132018] text-white dark:border-white dark:bg-white dark:text-[#132018]"
                              : "border-[#D7E0D2] text-[#637068] dark:border-white/10 dark:text-white/45"
                          }`}
                        >
                          {activeStage}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {selectedCase && (
                  <div className="mt-4 flex items-center justify-between rounded-[10px] border border-[#A8CF2E]/30 bg-[#A8CF2E]/[0.07] px-3 py-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck
                        className="h-4 w-4 text-[#6F8F18] dark:text-[#A8CF2E]"
                        strokeWidth={1.6}
                      />

                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#6F8F18] dark:text-[#A8CF2E]">
                          Selected case
                        </p>

                        <p className="mt-0.5 max-w-[320px] truncate text-[9px] text-[#526057] dark:text-white/45">
                          {selectedCase.title}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedCase(null)}
                      className="text-[7px] font-bold uppercase tracking-[0.12em] text-[#6F8F18] hover:underline dark:text-[#A8CF2E]"
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>

              {/* PLATFORM RESPONSE */}

              <div className="w-full p-5 sm:p-6 lg:w-[42%]">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#6F8F18] dark:text-[#A8CF2E]">
                    Response intelligence
                  </p>

                  <h3 className="mt-1 text-[15px] font-extrabold text-[#132018] dark:text-white">
                    Platform response
                  </h3>
                </div>

                <div className="mt-5 space-y-5">
                  {activeData.platforms.map(
                    ([name, speed, percentage]) => (
                      <div key={name}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[10px] text-[#526057] dark:text-white/50">
                            {name}
                          </span>

                          <span className="text-[8px] font-semibold text-[#6F8F18] dark:text-[#A8CF2E]">
                            {speed}
                          </span>
                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-[#DDE5D7] dark:bg-white/[0.10]">
                          <span
                            key={`${activeStage}-${percentage}`}
                            className="platform-bar block h-full rounded-full bg-[#72A51F]"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#E3E9DF] pt-4 dark:border-white/[0.07]">
                  <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#7A857D] dark:text-white/25">
                    Response index
                  </span>

                  <span className="text-[11px] font-black text-[#6F8F18] dark:text-[#A8CF2E]">
                    {Math.round(
                      activeData.platforms.reduce(
                        (sum, item) => sum + item[2],
                        0
                      ) / activeData.platforms.length
                    )}
                    %
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .insights-enter {
          animation: insightsEnter 800ms cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes insightsEnter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .monitoring-dashboard {
          animation: dashboardReveal 700ms cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes dashboardReveal {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .case-stage-button {
          animation: stageReveal 450ms cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes stageReveal {
          from {
            opacity: 0;
            transform: translateY(6px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .monitoring-case {
          animation: caseReveal 500ms cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes caseReveal {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .dashboard-number {
          animation: numberReveal 450ms ease both;
        }

        @keyframes numberReveal {
          from {
            opacity: 0;
            transform: translateY(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .platform-bar {
          animation: platformFill 800ms cubic-bezier(.22,1,.36,1) both;
          transform-origin: left center;
        }

        @keyframes platformFill {
          from {
            transform: scaleX(0);
            opacity: .35;
          }

          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .insights-enter,
          .monitoring-dashboard,
          .case-stage-button,
          .monitoring-case,
          .dashboard-number,
          .platform-bar {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}

export default Insights;