import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Fingerprint,
  FileCheck2,
  Send,
  BellRing,
  BarChart3,
  Check,
  Activity,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import Insights from "./Insights";


/* =========================================================
   MONITORING CAPABILITIES
========================================================= */

const monitoringFeatures = [
  {
    number: "01",
    label: "SOURCE SCANNING",
    title: "Discover where activity appears.",
    shortTitle: "Source scanning",
    body:
      "Scheduled scans of pirate sites, Telegram, social media, marketplaces, domains and search results.",
    icon: Search,
    metric: "24/7",
    metricLabel: "digital visibility",
  },

  {
    number: "02",
    label: "MATCH AND VERIFY",
    title: "Separate signals from noise.",
    shortTitle: "Match and verify",
    body:
      "Finds are matched to the titles, keywords and brand assets you provide, then checked by a person before any notice goes out.",
    icon: Fingerprint,
    metric: "Human",
    metricLabel: "verification",
  },

  {
    number: "03",
    label: "EVIDENCE CAPTURE",
    title: "Keep every detail together.",
    shortTitle: "Evidence capture",
    body:
      "Each case stores the URL, screenshot, date and time, and an archived copy of the page.",
    icon: FileCheck2,
    metric: "Case",
    metricLabel: "evidence record",
  },

  {
    number: "04",
    label: "TAKEDOWN WORKFLOW",
    title: "Move from detection to action.",
    shortTitle: "Takedown workflow",
    body:
      "Ready notice templates, platform and host contacts, follow-up reminders and a status for every case.",
    icon: Send,
    metric: "Action",
    metricLabel: "workflow",
  },

  {
    number: "05",
    label: "ALERTS",
    title: "Know when something changes.",
    shortTitle: "Alerts",
    body:
      "Email or WhatsApp alerts for new leaks, with priority handling for release days and live events.",
    icon: BellRing,
    metric: "Live",
    metricLabel: "alerts",
  },

  {
    number: "06",
    label: "REPORTS",
    title: "Turn cases into visibility.",
    shortTitle: "Reports",
    body:
      "Cases by platform, response times, repeat offenders and monthly totals you can share with your team.",
    icon: BarChart3,
    metric: "Monthly",
    metricLabel: "reporting",
  },
];


/* =========================================================
   CASE STAGES
========================================================= */

const caseStages = [
  "Found",
  "Verified",
  "Notice sent",
  "Follow-up",
  "Removed",
  "Escalated",
];


/* =========================================================
   SAMPLE CASE DATA
========================================================= */

const caseData = {
  Found: [
    {
      title: "pirate-site.example/new-release-hd",
      type: "Piracy",
      time: "2 min ago",
    },
    {
      title: "mirror-content.example/episode-04",
      type: "Mirror",
      time: "11 min ago",
    },
    {
      title: "clone-store.example",
      type: "Brand",
      time: "24 min ago",
    },
  ],

  Verified: [
    {
      title: "t.me/course-share-example",
      type: "Telegram",
      time: "5 min ago",
    },
    {
      title: "pirate-index.example/title",
      type: "Search",
      time: "18 min ago",
    },
    {
      title: "fake-brand-page.social",
      type: "Impersonation",
      time: "31 min ago",
    },
  ],

  "Notice sent": [
    {
      title: "pirate-site.example/new-release",
      type: "Host notice",
      time: "8 min ago",
    },
    {
      title: "social.example/fake-account",
      type: "Platform notice",
      time: "22 min ago",
    },
    {
      title: "mirror.example/content",
      type: "Copyright notice",
      time: "46 min ago",
    },
  ],

  "Follow-up": [
    {
      title: "offshore-host.example/content",
      type: "Hosting",
      time: "14 min ago",
    },
    {
      title: "t.me/reupload-example",
      type: "Telegram",
      time: "39 min ago",
    },
    {
      title: "clone-store.example/item",
      type: "Marketplace",
      time: "1 hr ago",
    },
  ],

  Removed: [
    {
      title: "fake-brand-page.social",
      type: "Removed",
      time: "7 min ago",
    },
    {
      title: "pirate-site.example/movie",
      type: "Removed",
      time: "29 min ago",
    },
    {
      title: "clone-store.example",
      type: "Removed",
      time: "52 min ago",
    },
  ],

  Escalated: [
    {
      title: "offshore-host.example/content",
      type: "Legal",
      time: "12 min ago",
    },
    {
      title: "repeat-offender.example",
      type: "Escalation",
      time: "34 min ago",
    },
    {
      title: "counterfeit-market.example",
      type: "Attorney review",
      time: "1 hr ago",
    },
  ],
};


/* =========================================================
   PLATFORM DATA
========================================================= */

const platformData = {
  Found: [
    ["Search engines", "Fast", 86],
    ["Social platforms", "Medium", 62],
    ["Hosting providers", "Medium", 57],
    ["Offshore hosts", "Slow", 27],
  ],

  Verified: [
    ["Search engines", "Fast", 91],
    ["Social platforms", "Fast", 78],
    ["Hosting providers", "Medium", 64],
    ["Offshore hosts", "Slow", 31],
  ],

  "Notice sent": [
    ["Search engines", "Fast", 94],
    ["Social platforms", "Fast", 82],
    ["Hosting providers", "Medium", 72],
    ["Offshore hosts", "Slow", 36],
  ],

  "Follow-up": [
    ["Search engines", "Fast", 89],
    ["Social platforms", "Medium", 69],
    ["Hosting providers", "Medium", 61],
    ["Offshore hosts", "Slow", 29],
  ],

  Removed: [
    ["Search engines", "Fast", 97],
    ["Social platforms", "Fast", 91],
    ["Hosting providers", "Fast", 86],
    ["Offshore hosts", "Medium", 48],
  ],

  Escalated: [
    ["Search engines", "Medium", 72],
    ["Social platforms", "Medium", 61],
    ["Hosting providers", "Slow", 43],
    ["Offshore hosts", "Slow", 21],
  ],
};


/* =========================================================
   DASHBOARD COUNTERS
========================================================= */

const stageStats = {
  Found: {
    found: 128,
    removed: 97,
    progress: 21,
    escalated: 10,
  },

  Verified: {
    found: 128,
    removed: 97,
    progress: 28,
    escalated: 10,
  },

  "Notice sent": {
    found: 128,
    removed: 97,
    progress: 34,
    escalated: 10,
  },

  "Follow-up": {
    found: 128,
    removed: 97,
    progress: 21,
    escalated: 12,
  },

  Removed: {
    found: 128,
    removed: 104,
    progress: 14,
    escalated: 10,
  },

  Escalated: {
    found: 128,
    removed: 97,
    progress: 18,
    escalated: 16,
  },
};


/* =========================================================
   STATUS COLOR HELPER
========================================================= */

function statusClasses(stage) {
  if (stage === "Removed") {
    return "bg-[#ADD132] text-[#152019] border-[#ADD132]";
  }

  if (stage === "Escalated") {
    return "bg-[#152019] text-white border-[#152019] dark:bg-white dark:text-[#152019] dark:border-white";
  }

  return "bg-transparent text-[#536058] border-black/10 dark:text-white/55 dark:border-white/10";
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

function MonitoringTool() {

  const [activeFeature, setActiveFeature] = useState(0);

  const [activeStage, setActiveStage] = useState("Found");

  const [selectedCase, setSelectedCase] = useState(null);


  /* =======================================================
     AUTOMATIC FEATURE ROTATION
  ======================================================= */

  useEffect(() => {

    const timer = setInterval(() => {

      setActiveFeature((current) => {

        return (current + 1) % monitoringFeatures.length;

      });

    }, 4200);

    return () => clearInterval(timer);

  }, []);


  const active = monitoringFeatures[activeFeature];

  const ActiveIcon = active.icon;


  /* =======================================================
     ACTIVE DATA
  ======================================================= */

  const activeCases = useMemo(() => {

    return caseData[activeStage] || [];

  }, [activeStage]);


  const activePlatforms = useMemo(() => {

    return platformData[activeStage] || [];

  }, [activeStage]);


  const stats = stageStats[activeStage] || stageStats.Found;


  /* =======================================================
     FEATURE CLICK
  ======================================================= */

  const selectFeature = (index) => {

    setActiveFeature(index);

  };


  /* =======================================================
     CASE STAGE CLICK
  ======================================================= */

  const selectStage = (stage) => {

    setActiveStage(stage);

    setSelectedCase(null);

  };


  return (

    <section
      className="
        monitoring-tool
        relative
        overflow-hidden
        bg-[#F4F7F2]
        py-14
        text-[#152019]
        dark:bg-[#070A07]
        dark:text-white
        sm:py-16
        lg:py-20
      "
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#ADD132]/50
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-[12%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#ADD132]/[0.07]
          blur-[120px]
          dark:bg-[#ADD132]/[0.04]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[5%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#ADD132]/[0.05]
          blur-[120px]
          dark:bg-[#ADD132]/[0.035]
        "
      />


      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1480px]
          px-5
          sm:px-7
          md:px-10
          lg:px-12
          xl:px-16
        "
      >


        {/* =================================================
            INTRO
        ================================================= */}

        <div
          className="
            monitoring-intro
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          <div className="max-w-[760px]">

            <div className="flex items-center gap-3">

              <span
                className="
                  h-px
                  w-8
                  bg-[#ADD132]
                  sm:w-12
                "
              />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:text-[9px]
                "
              >
                Monitoring infrastructure
              </span>

            </div>


            <h2
              className="
                mt-4
                text-[30px]
                font-black
                leading-[1.02]
                tracking-[-0.045em]
                text-[#152019]
                dark:text-white
                sm:text-[36px]
                md:text-[42px]
                lg:text-[50px]
              "
            >
              The TrackOwls
              <span className="text-[#6D900B] dark:text-[#ADD132]">
                {" "}
                monitoring tool.
              </span>
            </h2>


            <p
              className="
                mt-4
                max-w-[700px]
                text-[13px]
                leading-6
                text-[#5E6A62]
                dark:text-white/50
                sm:text-[14px]
                md:text-[15px]
              "
            >
              Our web application keeps every case in one place, from
              the first detection to the final removal. Your team can
              see what was found, what we did and what is still open.
            </p>

          </div>


          {/* LIVE STATUS */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-3
              border-l
              border-[#ADD132]/40
              pl-4
            "
          >

            <span
              className="
                relative
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#ADD132]/40
              "
            >

              <span
                className="
                  absolute
                  h-2
                  w-2
                  animate-ping
                  rounded-full
                  bg-[#ADD132]
                  opacity-50
                "
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                  bg-[#ADD132]
                  shadow-[0_0_10px_rgba(173,209,50,0.9)]
                "
              />

            </span>


            <div>

              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                "
              >
                Monitoring active
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  text-black/40
                  dark:text-white/35
                "
              >
                Continuous digital visibility
              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            FEATURE SELECTOR
        ================================================= */}

        <div className="mt-10 sm:mt-12">

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-black/[0.08]
              pb-3
              dark:border-white/[0.08]
            "
          >

            <div className="flex items-center gap-3">

              <span
                className="
                  text-[8px]
                  font-black
                  tracking-[0.2em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                "
              >
                01
              </span>

              <span className="h-px w-7 bg-[#ADD132]" />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-black/40
                  dark:text-white/30
                "
              >
                Monitoring capabilities
              </span>

            </div>


            <span
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-black/30
                dark:text-white/25
              "
            >
              06 systems
            </span>

          </div>


          {/* CAPABILITY NAV */}

          <div
            className="
              monitoring-tabs
              overflow-x-auto
              border-b
              border-black/[0.08]
              scrollbar-none
              dark:border-white/[0.08]
            "
          >

            <div className="flex min-w-max">

              {monitoringFeatures.map((feature, index) => {

                const Icon = feature.icon;

                const isActive = index === activeFeature;

                return (

                  <button
                    key={feature.number}
                    type="button"
                    onClick={() => selectFeature(index)}
                    className={`
                      monitoring-tab
                      group
                      relative
                      flex
                      min-w-[145px]
                      flex-col
                      gap-3
                      border-r
                      border-black/[0.07]
                      px-4
                      py-4
                      text-left
                      transition-all
                      duration-300
                      dark:border-white/[0.07]
                      sm:min-w-[170px]
                      sm:px-5

                      ${
                        isActive
                          ? "bg-white dark:bg-white/[0.035]"
                          : "bg-transparent hover:bg-white/60 dark:hover:bg-white/[0.02]"
                      }
                    `}
                  >

                    <span
                      className={`
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        bg-[#ADD132]
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-1/2"
                        }
                      `}
                    />


                    <div className="flex items-center justify-between">

                      <span
                        className={`
                          text-[8px]
                          font-black
                          tracking-[0.16em]
                          ${
                            isActive
                              ? "text-[#6D900B] dark:text-[#ADD132]"
                              : "text-black/25 dark:text-white/20"
                          }
                        `}
                      >
                        {feature.number}
                      </span>


                      <Icon
                        className={`
                          h-4
                          w-4
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "scale-110 text-[#6D900B] dark:text-[#ADD132]"
                              : "text-black/30 dark:text-white/25"
                          }
                        `}
                        strokeWidth={1.6}
                      />

                    </div>


                    <span
                      className={`
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.13em]
                        sm:text-[9px]
                        ${
                          isActive
                            ? "text-[#152019] dark:text-white"
                            : "text-black/45 dark:text-white/40"
                        }
                      `}
                    >
                      {feature.shortTitle}
                    </span>

                  </button>

                );

              })}

            </div>

          </div>


          {/* =================================================
              ACTIVE FEATURE PANEL
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              border-b
              border-black/[0.08]
              bg-white
              dark:border-white/[0.08]
              dark:bg-[#090D0A]
            "
          >

            <div
              className="
                monitoring-progress
                absolute
                left-0
                top-0
                z-20
                h-[2px]
                bg-[#ADD132]
              "
            />


            <div
              key={active.number}
              className="
                monitoring-active-content
                flex
                flex-col
                lg:flex-row
              "
            >

              {/* FEATURE INDEX */}

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-between
                  border-b
                  border-black/[0.08]
                  px-5
                  py-5
                  dark:border-white/[0.08]
                  lg:w-[240px]
                  lg:flex-col
                  lg:items-start
                  lg:justify-between
                  lg:border-b-0
                  lg:border-r
                  lg:px-7
                  lg:py-7
                "
              >

                <div>

                  <span
                    className="
                      text-[8px]
                      font-black
                      tracking-[0.2em]
                      text-[#6D900B]
                      dark:text-[#ADD132]
                    "
                  >
                    SIGNAL
                  </span>

                  <div
                    className="
                      mt-2
                      text-[30px]
                      font-black
                      tracking-[-0.05em]
                      text-[#152019]
                      dark:text-white
                      sm:text-[36px]
                    "
                  >
                    {active.number}
                  </div>

                </div>


                <div className="text-right lg:text-left">

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-black/30
                      dark:text-white/25
                    "
                  >
                    {active.metric}
                  </span>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      text-black/45
                      dark:text-white/35
                    "
                  >
                    {active.metricLabel}
                  </p>

                </div>

              </div>


              {/* FEATURE CONTENT */}

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  justify-center
                  px-5
                  py-7
                  sm:px-7
                  lg:px-10
                  lg:py-9
                  xl:px-14
                "
              >

                <div className="flex items-center gap-3">

                  <ActiveIcon
                    className="
                      h-4
                      w-4
                      text-[#6D900B]
                      dark:text-[#ADD132]
                    "
                    strokeWidth={1.6}
                  />

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#6D900B]
                      dark:text-[#ADD132]
                    "
                  >
                    {active.label}
                  </span>

                </div>


                <h3
                  className="
                    mt-3
                    max-w-[650px]
                    text-[24px]
                    font-black
                    leading-[1.08]
                    tracking-[-0.035em]
                    text-[#152019]
                    dark:text-white
                    sm:text-[28px]
                    md:text-[32px]
                  "
                >
                  {active.title}
                </h3>


                <p
                  className="
                    mt-3
                    max-w-[720px]
                    text-[12px]
                    leading-6
                    text-[#647067]
                    dark:text-white/45
                    sm:text-[13px]
                    sm:leading-6
                  "
                >
                  {active.body}
                </p>


                {/* FEATURE PROGRESS */}

                <div className="mt-6 flex items-center gap-3">

                  <span
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.17em]
                      text-black/30
                      dark:text-white/25
                    "
                  >
                    SYSTEM
                  </span>

                  <div
                    className="
                      h-px
                      w-20
                      overflow-hidden
                      bg-black/10
                      dark:bg-white/10
                    "
                  >

                    <span
                      className="block h-full bg-[#ADD132]"
                      style={{
                        width: `${((activeFeature + 1) / 6) * 100}%`,
                      }}
                    />

                  </div>

                  <span
                    className="
                      text-[7px]
                      font-black
                      text-[#6D900B]
                      dark:text-[#ADD132]
                    "
                  >
                    0{activeFeature + 1}/06
                  </span>

                </div>

              </div>


              {/* ACTION */}

              <div
                className="
                  flex
                  items-end
                  px-5
                  pb-6
                  lg:w-[170px]
                  lg:px-6
                  lg:pb-7
                "
              >

                <button
                  type="button"
                  onClick={() => {
                    document
                      .getElementById("monitoring-dashboard")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                  }}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#152019]
                    dark:text-white
                  "
                >

                  View activity

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-[#ADD132]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowRight className="h-3 w-3" />
                  </span>

                </button>

              </div>

            </div>

          </div>

        </div>


<Insights />


       

        
      </div>


      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`

        /* ===============================================
           INTRO
        =============================================== */

        .monitoring-intro {
          animation:
            monitoringIntro
            750ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes monitoringIntro {

          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        /* ===============================================
           TAB ACTIVE
        =============================================== */

        .monitoring-tab {
          -webkit-tap-highlight-color: transparent;
        }

        .monitoring-tab:active {
          transform: scale(.98);
        }


        /* ===============================================
           ACTIVE CONTENT
        =============================================== */

        .monitoring-active-content {
          animation:
            activeMonitoringReveal
            650ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes activeMonitoringReveal {

          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        /* ===============================================
           PROGRESS BAR
        =============================================== */

        .monitoring-progress {
          width: 0%;
          animation:
            monitoringProgress
            4.2s
            linear
            infinite;
        }

        @keyframes monitoringProgress {

          0% {
            width: 0%;
            opacity: .4;
          }

          10% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            width: 100%;
            opacity: .2;
          }

        }


        /* ===============================================
           DASHBOARD NUMBERS
        =============================================== */

        .dashboard-number {
          animation:
            numberReveal
            600ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes numberReveal {

          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        /* ===============================================
           PLATFORM BARS
        =============================================== */

        .platform-bar {
          transform-origin: left center;
          animation:
            platformBarReveal
            900ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes platformBarReveal {

          from {
            transform: scaleX(0);
            opacity: .25;
          }

          to {
            transform: scaleX(1);
            opacity: 1;
          }

        }


        /* ===============================================
           CASE HOVER
        =============================================== */

        .monitoring-case:hover {
          padding-left: 6px;
          padding-right: 6px;
        }


        /* ===============================================
           CASE STAGE
        =============================================== */

        .case-stage-button {
          -webkit-tap-highlight-color: transparent;
        }


        /* ===============================================
           CUSTOM SCROLLBAR
        =============================================== */

        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-none {
          scrollbar-width: none;
        }


        /* ===============================================
           REDUCED MOTION
        =============================================== */

        @media (prefers-reduced-motion: reduce) {

          .monitoring-intro,
          .monitoring-active-content,
          .monitoring-progress,
          .dashboard-number,
          .platform-bar {
            animation: none !important;
          }

        }

      `}</style>

    </section>

  );
}


export default MonitoringTool;