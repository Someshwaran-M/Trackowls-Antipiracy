import React, { useEffect, useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Bell,
  CheckCircle2,
  Clock3,
  Eye,
  FileSearch,
  Globe2,
  Link2,
  Radio,
  Search,
  ShieldCheck,
  Timer,
  Trash2,
  TrendingUp,
} from "lucide-react";

const caseStages = [
  {
    label: "Found",
    description: "New activity discovered",
    icon: Search,
  },
  {
    label: "Verified",
    description: "Match reviewed",
    icon: CheckCircle2,
  },
  {
    label: "Notice sent",
    description: "Response initiated",
    icon: Bell,
  },
  {
    label: "Follow-up",
    description: "Platform response tracked",
    icon: Clock3,
  },
  {
    label: "Removed",
    description: "Infringement addressed",
    icon: ShieldCheck,
  },
  {
    label: "Escalated",
    description: "Further action required",
    icon: AlertTriangle,
  },
];

const monitoringFeatures = [
  {
    number: "01",
    title: "Source scanning",
    description:
      "Scheduled scans of pirate sites, Telegram, social media, marketplaces, domains and search results.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Match and verify",
    description:
      "Finds are matched to the titles, keywords and brand assets you provide, then checked by a person before any notice goes out.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Evidence capture",
    description:
      "Each case stores the URL, screenshot, date and time, and an archived copy of the page.",
    icon: Eye,
  },
  {
    number: "04",
    title: "Takedown workflow",
    description:
      "Ready notice templates, platform and host contacts, follow-up reminders and a status for every case.",
    icon: Trash2,
  },
  {
    number: "05",
    title: "Alerts",
    description:
      "Email or WhatsApp alerts for new leaks, with priority handling for release days and live events.",
    icon: Bell,
  },
  {
    number: "06",
    title: "Reports",
    description:
      "Cases by platform, response times, repeat offenders and monthly totals you can share with your team.",
    icon: TrendingUp,
  },
];

const recentCases = [
  {
    source: "pirate-site.example/new-release-hd",
    status: "Found",
    type: "NEW SIGNAL",
  },
  {
    source: "t.me/course-share-example",
    status: "Notice sent",
    type: "ACTION",
  },
  {
    source: "Search result: mirror page",
    status: "De-indexed",
    type: "RESOLVED",
  },
  {
    source: "fake-brand-page (social)",
    status: "Removed",
    type: "RESOLVED",
  },
  {
    source: "clone-store.example",
    status: "Follow-up",
    type: "MONITORING",
  },
];

const platformResponse = [
  {
    name: "Search engines",
    speed: "Fast",
    percentage: 85,
  },
  {
    name: "Social platforms",
    speed: "Medium",
    percentage: 60,
  },
  {
    name: "Hosting providers",
    speed: "Medium",
    percentage: 55,
  },
  {
    name: "Offshore hosts",
    speed: "Slow",
    percentage: 25,
  },
];

const clientUseCases = [
  {
    number: "01",
    title: "Movie release week",
    description:
      "Add the title and its alternate names before release. The tool watches for camcord uploads and streaming links, and alerts you to each new find so notices go out the same day.",
  },
  {
    number: "02",
    title: "Paid course leaks",
    description:
      "Track your course names and instructor names across Telegram groups and file-sharing links. Repeat re-uploads are grouped so we can act on the source.",
  },
  {
    number: "03",
    title: "Live match or event",
    description:
      "Set the event time and channel names. Restream links are flagged during the event and sent to hosts straight away.",
  },
  {
    number: "04",
    title: "Brand impersonation",
    description:
      "Add your brand name, logo and official handles. Fake pages, look-alike domains and counterfeit listings appear in one queue for review.",
  },
];

const reportItems = [
  "Total links found and links removed",
  "Cases still open, with the reason",
  "Top pirate sites and channels for your content",
  "Platforms and hosts ranked by response time",
  "Repeat offenders and mirror sites",
  "Brand misuse cases by type",
  "Search results cleaned up",
  "Recommended next actions, including legal steps",
];

function MonitoringTools() {
  const [activeStage, setActiveStage] = useState(4);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const updateTheme = () => {
      setIsDark(root.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((current) => {
        return (current + 1) % monitoringFeatures.length;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const activeFeatureData = monitoringFeatures[activeFeature];
  const ActiveFeatureIcon = activeFeatureData.icon;

  return (
    <section
      id="monitoring-tools"
      className="relative overflow-hidden bg-[#F5F7F2] text-[#152019] dark:bg-[#060906] dark:text-white"
    >
      <style>{`
        .monitor-pulse {
          animation: monitorPulse 1.8s ease-in-out infinite;
        }

        @keyframes monitorPulse {
          0%, 100% {
            opacity: .35;
            transform: scale(.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        .monitor-sweep {
          animation: monitorSweep 4s ease-in-out infinite;
        }

        @keyframes monitorSweep {
          0% {
            transform: translateX(-120%);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          75% {
            opacity: .7;
          }

          100% {
            transform: translateX(120%);
            opacity: 0;
          }
        }

        .monitor-video-scan {
          animation: monitorVideoScan 5s ease-in-out infinite;
        }

        @keyframes monitorVideoScan {
          0% {
            transform: translateX(-140%);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          70% {
            opacity: .8;
          }

          100% {
            transform: translateX(500%);
            opacity: 0;
          }
        }

        .monitor-flow {
          animation: monitorFlow 22s linear infinite;
        }

        @keyframes monitorFlow {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .monitor-status-bar {
          animation: monitorStatusBar 1.2s cubic-bezier(.16,1,.3,1);
          transform-origin: left center;
        }

        @keyframes monitorStatusBar {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        .monitor-feature-enter {
          animation: monitorFeatureEnter .6s cubic-bezier(.16,1,.3,1);
        }

        @keyframes monitorFeatureEnter {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .monitor-case-dot {
          animation: monitorCaseDot 2.2s ease-in-out infinite;
        }

        @keyframes monitorCaseDot {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(173,209,50,.18);
          }

          50% {
            box-shadow: 0 0 0 7px rgba(173,209,50,0);
          }
        }

        .monitor-cursor {
          animation: monitorCursor 1s steps(2,end) infinite;
        }

        @keyframes monitorCursor {
          0%, 45% {
            opacity: 1;
          }

          46%, 100% {
            opacity: 0;
          }
        }

        .monitor-scan-line {
          animation: monitorScanLine 5s ease-in-out infinite;
        }

        @keyframes monitorScanLine {
          0% {
            top: 5%;
            opacity: 0;
          }

          15% {
            opacity: .7;
          }

          50% {
            opacity: .35;
          }

          85% {
            opacity: .7;
          }

          100% {
            top: 95%;
            opacity: 0;
          }
        }

        .monitor-row {
          transition:
            background-color .3s ease,
            padding-left .3s ease,
            color .3s ease;
        }

        .monitor-row:hover {
          padding-left: 10px;
        }

        @media (max-width: 767px) {
          .monitor-row:hover {
            padding-left: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .monitor-pulse,
          .monitor-sweep,
          .monitor-video-scan,
          .monitor-flow,
          .monitor-status-bar,
          .monitor-feature-enter,
          .monitor-case-dot,
          .monitor-cursor,
          .monitor-scan-line {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          VIDEO HERO
      ===================================================== */}

      <section className="relative min-h-[620px] overflow-hidden bg-[#030603]">
        <video
          src="/monitoring-tools-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

        <div className="pointer-events-none absolute left-[15%] top-0 h-full w-[35%] bg-[#ADD132]/10 blur-[120px]" />

        <div className="absolute left-0 right-0 top-0 h-px overflow-hidden bg-white/10">
          <div className="monitor-video-scan absolute inset-y-0 left-0 w-[25%] bg-gradient-to-r from-transparent via-[#ADD132] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1480px] items-center px-5 py-20 sm:px-8 md:px-10 lg:px-14 xl:px-16">
          <div className="flex w-full flex-col gap-14 lg:flex-row lg:items-end lg:justify-between">
            
            <div className="max-w-[850px]">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-[#ADD132]" />

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#ADD132]">
                  Monitoring Tools
                </span>
              </div>

              <p className="mb-5 text-[8px] font-black uppercase tracking-[0.28em] text-white/35">
                TrackOwls monitoring system
              </p>

              <h1 className="text-[48px] font-black leading-[.9] tracking-[-.07em] text-white sm:text-[62px] md:text-[74px] lg:text-[88px]">
                Every signal.
                <br />
                <span className="text-[#ADD132]">
                  One control surface.
                </span>
              </h1>

              <p className="mt-7 max-w-[620px] text-[13px] leading-7 text-white/55 sm:text-[14px] sm:leading-8">
                Our web application keeps every case in one place, from the
                first detection to the final removal. Your team can see what
                was found, what we did and what is still open.
              </p>
            </div>

            <div className="max-w-[390px] border-l border-white/15 pl-6 sm:pl-8">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#ADD132] shadow-[0_0_15px_rgba(173,209,50,.8)]" />

                <span className="text-[8px] font-black uppercase tracking-[0.23em] text-[#ADD132]">
                  Live monitoring environment
                </span>
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-black uppercase tracking-[0.18em] text-white/30">
                    System status
                  </span>

                  <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#ADD132]">
                    ACTIVE
                  </span>
                </div>

                <div className="mt-3 h-px bg-white/10">
                  <div className="h-px w-[86%] bg-[#ADD132]" />
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4">
                <div>
                  <p className="text-[7px] font-black uppercase tracking-[0.18em] text-white/25">
                    Sources
                  </p>

                  <p className="mt-1 text-[11px] font-bold text-white/65">
                    24 / 7
                  </p>
                </div>

                <div>
                  <p className="text-[7px] font-black uppercase tracking-[0.18em] text-white/25">
                    Detection
                  </p>

                  <p className="mt-1 text-[11px] font-bold text-white/65">
                    LIVE
                  </p>
                </div>

                <div>
                  <p className="text-[7px] font-black uppercase tracking-[0.18em] text-white/25">
                    Response
                  </p>

                  <p className="mt-1 text-[11px] font-bold text-white/65">
                    TRACKED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10">
          <div className="mx-auto flex max-w-[1480px] items-center justify-between px-5 py-4 sm:px-8 md:px-10 lg:px-14 xl:px-16">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

              <span className="text-[7px] font-black uppercase tracking-[0.22em] text-white/35">
                Continuous visibility
              </span>
            </div>

            <div className="hidden gap-6 sm:flex">
              <span className="text-[7px] font-black uppercase tracking-[0.18em] text-white/25">
                Discover
              </span>

              <span className="text-[7px] font-black uppercase tracking-[0.18em] text-white/25">
                Verify
              </span>

              <span className="text-[7px] font-black uppercase tracking-[0.18em] text-white/25">
                Respond
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-[1480px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-16">

        {/* =====================================================
            SYSTEM HEADER
        ===================================================== */}

        <div className="flex flex-col gap-10 border-b border-[#CCD6C9] pb-10 dark:border-white/[0.08] lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[850px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-[#ADD132]" />

              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6D900B] dark:text-[#ADD132]">
                Monitoring Tools
              </span>
            </div>

            <h2 className="text-[40px] font-black leading-[.94] tracking-[-.065em] text-[#152019] dark:text-white sm:text-[52px] md:text-[64px] lg:text-[72px]">
              Every signal.
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                One control surface.
              </span>
            </h2>
          </div>

          <div className="max-w-[410px]">
            <div className="mb-4 flex items-center gap-2">
              <span className="monitor-pulse h-2 w-2 rounded-full bg-[#ADD132]" />

              <span className="text-[8px] font-black uppercase tracking-[0.23em] text-[#718078] dark:text-white/35">
                Live monitoring environment
              </span>
            </div>

            <p className="text-[13px] leading-7 text-[#68746C] dark:text-white/48 sm:text-[14px] sm:leading-8">
              Our web application keeps every case in one place, from the
              first detection to the final removal. Your team can see what
              was found, what we did and what is still open.
            </p>
          </div>
        </div>

        {/* =====================================================
            LIVE SOURCE MONITOR
        ===================================================== */}

        <div className="mt-8 overflow-hidden border-y border-[#CDD8CA] bg-[#EEF3EA] dark:border-white/[0.08] dark:bg-[#090E0A]">
          <div className="monitor-flow flex w-max">
            {[
              "WEBSITES",
              "TELEGRAM",
              "SOCIAL MEDIA",
              "MARKETPLACES",
              "DOMAINS",
              "SEARCH",
              "WEBSITES",
              "TELEGRAM",
              "SOCIAL MEDIA",
              "MARKETPLACES",
              "DOMAINS",
              "SEARCH",
            ].map((item, index) => (
              <React.Fragment key={`${item}-${index}`}>
                <div className="flex items-center gap-3 px-6 py-3">
                  <span className="monitor-pulse h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

                  <span className="text-[7px] font-black uppercase tracking-[0.22em] text-[#78857C] dark:text-white/30">
                    {item}
                  </span>
                </div>

                <span className="h-3 w-px bg-[#CBD6C8] dark:bg-white/[0.08]" />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* =====================================================
            CONTROL CENTER
        ===================================================== */}

        <div className="mt-10 border-y border-[#CBD6C8] dark:border-white/[0.08]">

          <div className="flex flex-col gap-5 border-b border-[#D4DDD0] px-5 py-5 dark:border-white/[0.07] sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-4">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#ADD132]/35 bg-[#ADD132]/[0.07]">
                <Activity
                  size={17}
                  className="text-[#6D900B] dark:text-[#ADD132]"
                />

                <span className="monitor-pulse absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[#ADD132]" />
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.22em] text-[#6D900B] dark:text-[#ADD132]">
                  TrackOwls dashboard: Sample Film Studio
                </p>

                <p className="mt-1 text-[9px] text-[#89948C] dark:text-white/25">
                  Illustration with sample data
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="monitor-pulse h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

              <span className="text-[7px] font-black uppercase tracking-[0.18em] text-[#7E8A82] dark:text-white/30">
                Monitoring active
              </span>
            </div>
          </div>

          {/* METRICS */}

          <div className="flex flex-wrap border-b border-[#D4DDD0] dark:border-white/[0.07]">
            {[
              ["128", "Links found"],
              ["97", "Removed"],
              ["21", "In progress"],
              ["10", "Escalated"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`min-w-[50%] flex-1 px-5 py-7 sm:min-w-0 sm:px-7 ${
                  index !== 0
                    ? "border-l border-[#D4DDD0] dark:border-white/[0.07]"
                    : ""
                }`}
              >
                <div className="flex items-end gap-2">
                  <span className="text-[32px] font-black leading-none tracking-[-.05em] text-[#152019] dark:text-white sm:text-[40px]">
                    {value}
                  </span>

                  {index === 1 && (
                    <span className="mb-1 h-1.5 w-1.5 rounded-full bg-[#ADD132]" />
                  )}
                </div>

                <p className="mt-2 text-[7px] font-black uppercase tracking-[0.18em] text-[#859189] dark:text-white/28">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* DASHBOARD STREAM */}

          <div className="flex flex-col lg:flex-row">

            {/* RECENT CASES */}

            <div className="flex-1 border-b border-[#D4DDD0] dark:border-white/[0.07] lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between border-b border-[#D4DDD0] px-5 py-4 dark:border-white/[0.07] sm:px-7">
                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#152019] dark:text-white">
                    Recent cases
                  </p>

                  <p className="mt-1 text-[8px] text-[#8A958D] dark:text-white/25">
                    Latest activity across monitored sources
                  </p>
                </div>

                <Link2
                  size={14}
                  className="text-[#6D900B] dark:text-[#ADD132]"
                />
              </div>

              <div>
                {recentCases.map((item, index) => (
                  <div
                    key={item.source}
                    className="monitor-row group flex items-center gap-4 border-b border-[#DDE4DA] px-5 py-4 last:border-b-0 dark:border-white/[0.055] sm:px-7"
                  >
                    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                      <span
                        className={`monitor-case-dot h-2 w-2 rounded-full ${
                          item.status === "Removed" ||
                          item.status === "De-indexed"
                            ? "bg-[#ADD132]"
                            : "bg-[#8E9A92]"
                        }`}
                      />

                      {index !== recentCases.length - 1 && (
                        <span className="absolute top-7 h-8 w-px bg-[#D8E0D6] dark:bg-white/[0.07]" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[10px] font-semibold text-[#4E5B52] dark:text-white/55 sm:text-[11px]">
                        {item.source}
                      </p>

                      <p className="mt-1 text-[7px] font-black uppercase tracking-[0.16em] text-[#9AA39D] dark:text-white/22">
                        {item.type}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 text-[7px] font-black uppercase tracking-[0.13em] ${
                        item.status === "Removed" ||
                        item.status === "De-indexed"
                          ? "text-[#6D900B] dark:text-[#ADD132]"
                          : "text-[#8B968E] dark:text-white/30"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PLATFORM RESPONSE */}

            <div className="w-full lg:w-[42%]">
              <div className="border-b border-[#D4DDD0] px-5 py-4 dark:border-white/[0.07] sm:px-7">
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#152019] dark:text-white">
                  Platform response
                </p>

                <p className="mt-1 text-[8px] text-[#8A958D] dark:text-white/25">
                  Typical response visibility
                </p>
              </div>

              <div className="space-y-6 px-5 py-7 sm:px-7">
                {platformResponse.map((item) => (
                  <div key={item.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[9px] font-semibold text-[#647067] dark:text-white/50">
                        {item.name}
                      </span>

                      <span className="text-[7px] font-black uppercase tracking-[0.15em] text-[#8B968E] dark:text-white/25">
                        {item.speed}
                      </span>
                    </div>

                    <div className="relative h-1 overflow-hidden rounded-full bg-[#DDE4DA] dark:bg-white/[0.08]">
                      <div
                        className="monitor-status-bar absolute inset-y-0 left-0 rounded-full bg-[#ADD132]"
                        style={{
                          width: `${item.percentage}%`,
                        }}
                      />
                    </div>

                    <div className="mt-2 text-right">
                      <span className="text-[8px] font-black text-[#6D900B] dark:text-[#ADD132]">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CASE JOURNEY
        ===================================================== */}

        <div className="mt-20 sm:mt-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#ADD132]" />

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6D900B] dark:text-[#ADD132]">
                  Case journey
                </span>
              </div>

              <h3 className="text-[34px] font-black leading-[.96] tracking-[-.055em] text-[#152019] dark:text-white sm:text-5xl">
                Every case has
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  a clear path.
                </span>
              </h3>
            </div>

            <p className="max-w-[430px] text-[12px] leading-7 text-[#6B776E] dark:text-white/45 sm:text-[13px]">
              Select a stage to inspect the current case activity and platform
              response.
            </p>
          </div>

          <div className="mt-10 overflow-hidden border-y border-[#CDD8CA] dark:border-white/[0.08]">

            {/* DESKTOP */}

            <div className="hidden md:flex">
              {caseStages.map((stage, index) => {
                const StageIcon = stage.icon;
                const active = index === activeStage;
                const completed = index <= activeStage;

                return (
                  <button
                    key={stage.label}
                    type="button"
                    onClick={() => setActiveStage(index)}
                    className={`group relative flex min-w-0 flex-1 flex-col items-center border-r border-[#D4DDD0] px-4 py-7 text-center transition-all last:border-r-0 dark:border-white/[0.07] ${
                      active
                        ? "bg-[#EAF1E6] dark:bg-[#ADD132]/[0.045]"
                        : "hover:bg-[#EEF3EA] dark:hover:bg-white/[0.015]"
                    }`}
                  >
                    <span
                      className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                        active
                          ? "border-[#ADD132] bg-[#ADD132] text-[#142019] shadow-[0_0_0_8px_rgba(173,209,50,.08)]"
                          : completed
                          ? "border-[#ADD132]/50 bg-[#ADD132]/10 text-[#6D900B] dark:text-[#ADD132]"
                          : "border-[#CAD5C7] bg-[#F4F7F1] text-[#87938A] dark:border-white/[0.10] dark:bg-[#060906] dark:text-white/30"
                      }`}
                    >
                      <StageIcon size={15} />
                    </span>

                    <span
                      className={`mt-4 text-[8px] font-black uppercase tracking-[0.16em] ${
                        active
                          ? "text-[#6D900B] dark:text-[#ADD132]"
                          : "text-[#78847C] dark:text-white/35"
                      }`}
                    >
                      {stage.label}
                    </span>

                    <span className="mt-1 text-[7px] leading-4 text-[#9AA39D] dark:text-white/20">
                      {stage.description}
                    </span>

                    {active && (
                      <span className="monitor-pulse absolute bottom-3 h-1.5 w-1.5 rounded-full bg-[#ADD132]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* MOBILE */}

            <div className="md:hidden">
              {caseStages.map((stage, index) => {
                const StageIcon = stage.icon;
                const active = index === activeStage;

                return (
                  <button
                    key={stage.label}
                    type="button"
                    onClick={() => setActiveStage(index)}
                    className={`flex w-full items-center gap-4 border-b border-[#D4DDD0] px-5 py-5 text-left last:border-b-0 dark:border-white/[0.07] ${
                      active ? "bg-[#EAF1E6] dark:bg-[#ADD132]/[0.045]" : ""
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                        active
                          ? "border-[#ADD132] bg-[#ADD132] text-[#142019]"
                          : "border-[#CBD5C7] text-[#7E8A82] dark:border-white/[0.10] dark:text-white/30"
                      }`}
                    >
                      <StageIcon size={14} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-[9px] font-black uppercase tracking-[0.16em] ${
                          active
                            ? "text-[#6D900B] dark:text-[#ADD132]"
                            : "text-[#78847C] dark:text-white/35"
                        }`}
                      >
                        {stage.label}
                      </span>

                      <span className="mt-1 block text-[8px] text-[#9AA39D] dark:text-white/20">
                        {stage.description}
                      </span>
                    </span>

                    {active && (
                      <span className="monitor-pulse h-2 w-2 shrink-0 rounded-full bg-[#ADD132]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3 border-b border-[#D3DDD0] py-5 dark:border-white/[0.07] sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="monitor-pulse h-2 w-2 rounded-full bg-[#ADD132]" />

              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#6D900B] dark:text-[#ADD132]">
                Current stage
              </span>
            </div>

            <ArrowRight
              size={13}
              className="hidden text-[#9AA39D] dark:text-white/20 sm:block"
            />

            <span className="text-[9px] font-semibold text-[#69756C] dark:text-white/40">
              {caseStages[activeStage].label}
            </span>

            <span className="text-[9px] text-[#89948C] dark:text-white/25">
              {caseStages[activeStage].description}
            </span>
          </div>
        </div>

        {/* =====================================================
            MONITORING CAPABILITIES
        ===================================================== */}

        <div className="mt-20 border-y border-[#CDD8CA] dark:border-white/[0.08] sm:mt-24">
          <div className="flex flex-col lg:flex-row">

            {/* FEATURE NAVIGATION */}

            <div className="w-full border-b border-[#CDD8CA] dark:border-white/[0.08] lg:w-[42%] lg:border-b-0 lg:border-r">
              <div className="px-5 py-8 sm:px-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

                  <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#6D900B] dark:text-[#ADD132]">
                    Monitoring capabilities
                  </span>
                </div>

                <h3 className="max-w-[450px] text-[30px] font-black leading-[.98] tracking-[-.05em] text-[#152019] dark:text-white sm:text-4xl">
                  Built around
                  <br />
                  <span className="text-[#789900] dark:text-[#ADD132]">
                    every signal.
                  </span>
                </h3>
              </div>

              <div>
                {monitoringFeatures.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  const active = index === activeFeature;

                  return (
                    <button
                      key={feature.number}
                      type="button"
                      onClick={() => setActiveFeature(index)}
                      className={`group flex w-full items-center gap-4 border-t border-[#D7E0D4] px-5 py-5 text-left transition-all duration-300 dark:border-white/[0.065] sm:px-8 ${
                        active
                          ? "bg-[#EDF3E9] dark:bg-[#ADD132]/[0.035]"
                          : "hover:bg-[#F0F4ED] dark:hover:bg-white/[0.018]"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                          active
                            ? "border-[#ADD132] bg-[#ADD132] text-[#142019]"
                            : "border-[#CBD6C8] text-[#7C887F] dark:border-white/[0.10] dark:text-white/30"
                        }`}
                      >
                        <FeatureIcon size={14} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-3">
                          <span
                            className={`text-[8px] font-black tracking-[0.14em] ${
                              active
                                ? "text-[#6D900B] dark:text-[#ADD132]"
                                : "text-[#9AA39D] dark:text-white/20"
                            }`}
                          >
                            {feature.number}
                          </span>

                          <span
                            className={`text-[10px] font-black uppercase tracking-[0.12em] ${
                              active
                                ? "text-[#152019] dark:text-white"
                                : "text-[#68746C] dark:text-white/45"
                            }`}
                          >
                            {feature.title}
                          </span>
                        </span>
                      </span>

                      <ArrowRight
                        size={13}
                        className={`shrink-0 transition-all ${
                          active
                            ? "translate-x-0 text-[#ADD132] opacity-100"
                            : "-translate-x-1 text-[#A0AAA3] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 dark:text-white/25"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ACTIVE FEATURE CONSOLE */}

            <div className="relative min-h-[460px] flex-1 overflow-hidden bg-[#E9EFE5] dark:bg-[#080D09]">
              <div className="monitor-scan-line pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ADD132]/60 to-transparent" />

              <div className="absolute right-6 top-6 flex items-center gap-2">
                <span className="monitor-pulse h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

                <span className="text-[7px] font-black uppercase tracking-[0.18em] text-[#7D8981] dark:text-white/25">
                  LIVE
                </span>
              </div>

              <div
                key={activeFeatureData.number}
                className="monitor-feature-enter relative p-7 sm:p-10 md:p-12 lg:p-14"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#ADD132]/10 text-[#6D900B] dark:text-[#ADD132]">
                    <ActiveFeatureIcon
                      size={20}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#6D900B] dark:text-[#ADD132]">
                      Capability {activeFeatureData.number}
                    </span>

                    <p className="mt-1 text-[8px] text-[#87938A] dark:text-white/25">
                      Active monitoring layer
                    </p>
                  </div>
                </div>

                <h4 className="mt-10 max-w-[620px] text-[34px] font-black leading-[.95] tracking-[-.055em] text-[#152019] dark:text-white sm:text-5xl">
                  {activeFeatureData.title}
                </h4>

                <p className="mt-6 max-w-[620px] text-[13px] leading-7 text-[#68746C] dark:text-white/45 sm:text-[14px] sm:leading-8">
                  {activeFeatureData.description}
                </p>

                <div className="mt-8 flex items-center gap-2">
                  <span className="text-[8px] font-black text-[#6D900B] dark:text-[#ADD132]">
                    $
                  </span>

                  <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#7C887F] dark:text-white/25">
                    TrackOwls intelligence layer
                  </span>

                  <span className="monitor-cursor h-3 w-px bg-[#ADD132]" />
                </div>
              </div>

              {/* PROCESS SIGNALS */}

              <div className="relative border-t border-[#D1DCCF] dark:border-white/[0.07]">
                <div className="flex flex-wrap">
                  {[
                    ["DISCOVER", Search],
                    ["VERIFY", FileSearch],
                    ["CAPTURE", Eye],
                    ["RESPOND", Radio],
                  ].map(([label, Icon], index) => (
                    <div
                      key={label}
                      className={`flex min-w-[50%] flex-1 items-center gap-2 px-6 py-4 ${
                        index !== 0
                          ? "border-l border-[#D1DCCF] dark:border-white/[0.07]"
                          : ""
                      }`}
                    >
                      <Icon
                        size={12}
                        className="text-[#789900] dark:text-[#ADD132]"
                      />

                      <span className="text-[7px] font-black uppercase tracking-[0.16em] text-[#7F8A82] dark:text-white/25">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NOTE */}

        <div className="mt-5 flex items-start gap-3">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ADD132]" />

          <p className="text-[9px] leading-5 text-[#89948D] dark:text-white/25">
            Content fingerprinting and forensic watermarking are planned as
            later additions.
          </p>
        </div>

        {/* =====================================================
            HOW CLIENTS USE THE TOOL
        ===================================================== */}

        <div className="mt-20 sm:mt-24">
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#ADD132]" />

              <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#6D900B] dark:text-[#ADD132]">
                How clients use the tool
              </span>
            </div>

            <h3 className="text-[34px] font-black leading-[.96] tracking-[-.055em] text-[#152019] dark:text-white sm:text-5xl">
              Monitoring that adapts
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                to the moment.
              </span>
            </h3>
          </div>

          <div className="border-t border-[#CDD8CA] dark:border-white/[0.08]">
            {clientUseCases.map((item) => (
              <div
                key={item.number}
                className="monitor-row group flex flex-col gap-5 border-b border-[#CDD8CA] py-7 transition-colors hover:bg-[#EDF2E9] dark:border-white/[0.08] dark:hover:bg-white/[0.015] sm:flex-row sm:items-start sm:gap-8 sm:py-9"
              >
                <div className="flex items-center gap-4 sm:w-[150px] sm:shrink-0">
                  <span className="text-[9px] font-black tracking-[0.2em] text-[#829087] dark:text-white/25">
                    {item.number}
                  </span>

                  <span className="h-px w-8 bg-[#ADD132] transition-all duration-300 group-hover:w-12" />
                </div>

                <div className="sm:w-[260px] sm:shrink-0">
                  <h4 className="text-[19px] font-black tracking-[-.035em] text-[#152019] dark:text-white sm:text-[22px]">
                    {item.title}
                  </h4>
                </div>

                <p className="max-w-[700px] text-[12px] leading-7 text-[#6C786F] dark:text-white/43 sm:text-[13px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            MONTHLY REPORT
        ===================================================== */}

        <div className="mt-20 border-y border-[#CDD8CA] dark:border-white/[0.08] sm:mt-24">
          <div className="flex flex-col lg:flex-row">

            <div className="w-full border-b border-[#CDD8CA] px-6 py-9 dark:border-white/[0.08] lg:w-[38%] lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#ADD132]/[0.07] text-[#6D900B] dark:text-[#ADD132]">
                <TrendingUp
                  size={18}
                  strokeWidth={1.5}
                />
              </div>

              <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#6D900B] dark:text-[#ADD132]">
                Reporting
              </p>

              <h3 className="mt-4 text-[31px] font-black leading-[.96] tracking-[-.05em] text-[#152019] dark:text-white sm:text-4xl">
                What your monthly
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  report includes
                </span>
              </h3>
            </div>

            <div className="flex-1">
              {reportItems.map((item, index) => (
                <div
                  key={item}
                  className="monitor-row group flex items-center gap-4 border-b border-[#D8E0D5] px-6 py-4 last:border-b-0 dark:border-white/[0.055] sm:px-9"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D1DCCF] text-[7px] font-black text-[#7F8B82] dark:border-white/[0.10] dark:text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-[10px] leading-5 text-[#637067] dark:text-white/45 sm:text-[11px]">
                    {item}
                  </span>

                  <CheckCircle2
                    size={13}
                    className="shrink-0 text-[#ADD132] opacity-40 transition-opacity group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL SYSTEM STATUS
        ===================================================== */}

        <div className="mt-16 border-t border-[#CDD8CA] pt-7 dark:border-white/[0.08]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="monitor-pulse h-2 w-2 rounded-full bg-[#ADD132]" />

              <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#6D900B] dark:text-[#ADD132]">
                TrackOwls monitoring system
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Timer
                size={13}
                className="text-[#7C887F] dark:text-white/25"
              />

              <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#8A958D] dark:text-white/25">
                Continuous visibility
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SIGNAL LINE */}

      <div className="relative h-px overflow-hidden bg-[#D8E1D5] dark:bg-white/[0.06]">
        <div className="monitor-sweep absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-transparent via-[#ADD132] to-transparent" />
      </div>
    </section>
  );
}

export default MonitoringTools;