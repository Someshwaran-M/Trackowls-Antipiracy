import React from "react";
import {
  ArrowUpRight,
  Play,
  Globe2,
  ShieldCheck,
  Radio,
  BarChart3,
  Zap,
  ShoppingCart,
  FileText,
  Image as ImageIcon,
  Users,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const surfaces = [
  {
    title: "Web Monitoring",
    subtitle: "Websites & Portals",
    icon: Globe2,
    position: "web",
  },
  {
    title: "Social Intelligence",
    subtitle: "Social Platforms",
    icon: Users,
    position: "social",
  },
  {
    title: "Streaming Scan",
    subtitle: "OTT & Video",
    icon: Play,
    position: "streaming",
  },
  {
    title: "Marketplace Watch",
    subtitle: "E-Commerce",
    icon: ShoppingCart,
    position: "marketplace",
  },
  {
    title: "Content Tracking",
    subtitle: "News & Media",
    icon: FileText,
    position: "content",
  },
  {
    title: "Media Analysis",
    subtitle: "Images & Audio",
    icon: ImageIcon,
    position: "media",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

function IntelligentStatement() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-[#F5F8F0]
        text-[#101510]

        dark:bg-[#050805]
        dark:text-white

        transition-colors
        duration-300
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Light mode atmosphere */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_72%_48%,rgba(173,209,50,0.12),transparent_35%),radial-gradient(circle_at_12%_10%,rgba(173,209,50,0.08),transparent_28%)]
            dark:hidden
          "
        />

        {/* Dark mode atmosphere */}
        <div
          className="
            absolute inset-0 hidden
            bg-[radial-gradient(circle_at_72%_48%,rgba(173,209,50,0.10),transparent_35%),radial-gradient(circle_at_12%_10%,rgba(173,209,50,0.05),transparent_28%)]
            dark:block
          "
        />

        {/* Light mode soft glow */}
        <div
          className="
            absolute
            right-[12%]
            top-1/2
            h-[600px]
            w-[600px]
            -translate-y-1/2
            rounded-full
            bg-[#ADD132]/10
            blur-[150px]
            dark:hidden
          "
        />

        {/* Dark mode glow */}
        <div
          className="
            absolute
            right-[12%]
            top-1/2
            hidden
            h-[600px]
            w-[600px]
            -translate-y-1/2
            rounded-full
            bg-[#ADD132]/7
            blur-[150px]
            dark:block
          "
        />

        {/* Light grid */}
        <div
          className="
            absolute
            right-0
            top-0
            h-full
            w-[58%]
            opacity-[0.18]
            dark:hidden
          "
          style={{
            backgroundImage:
              "radial-gradient(rgba(89,116,45,0.35) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, transparent 72%)",
          }}
        />

        {/* Dark grid */}
        <div
          className="
            absolute
            right-0
            top-0
            hidden
            h-full
            w-[58%]
            opacity-20
            dark:block
          "
          style={{
            backgroundImage:
              "radial-gradient(rgba(173,209,50,0.35) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, transparent 72%)",
          }}
        />

        {/* Center divider */}
        <div
          className="
            absolute
            left-1/2
            top-0
            hidden
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-[#64734D]/10
            to-transparent
            lg:block

            dark:via-[#ADD132]/10
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1580px]
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-12
          lg:py-24
          xl:px-16
        "
      >
        <div
          className="
            grid
            min-h-[700px]
            items-center
            gap-8
            lg:grid-cols-[0.86fr_1.14fr]
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-20 max-w-[610px]">

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-11 bg-[#8BAA20] dark:bg-[#ADD132]" />

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.38em]
                  text-[#657352]
                  dark:text-[#ADD132]
                "
              >
                TrackOwls Intelligence
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-[42px]
                font-black
                leading-[0.93]
                tracking-[-0.065em]

                text-[#101510]

                sm:text-[54px]
                lg:text-[64px]
                xl:text-[74px]

                dark:text-white
              "
            >
              Global Visibility

              <br />

              <span className="text-[#789900] dark:text-[#ADD132]">
                for a Safer
              </span>

              <br />

              Digital World.
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-[500px]
                text-[12px]
                leading-6

                text-[#687267]

                sm:text-[13px]

                dark:text-white/45
              "
            >
              TrackOwls connects digital signals across the web to deliver
              real-time intelligence, helping you detect threats early,
              protect your brand, and stay ahead.
            </p>

            {/* =================================================
                CTA
            ================================================= */}

            <div className="mt-8 flex flex-wrap items-center gap-3">

              {/* Primary */}
              <button
                type="button"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  bg-[#ADD132]
                  px-5
                  py-3
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.15em]
                  text-[#101800]
                  shadow-[0_12px_35px_rgba(110,140,20,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_16px_45px_rgba(110,140,20,0.28)]
                "
              >
                Explore Intelligence

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0A1008]
                    text-[#ADD132]
                  "
                >
                  <ArrowUpRight size={13} />
                </span>
              </button>

              {/* Secondary */}
              <button
                type="button"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#1B261A]/10
                  bg-white/70
                  px-4
                  py-3
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.15em]
                  text-[#4E594E]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#ADD132]/50
                  hover:bg-white

                  dark:border-white/10
                  dark:bg-white/[0.035]
                  dark:text-white/55
                  dark:hover:bg-white/[0.06]
                "
              >
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#7F9D16]/30
                    text-[#6F8D08]

                    dark:border-[#ADD132]/30
                    dark:text-[#ADD132]
                  "
                >
                  <Play size={10} fill="currentColor" />
                </span>

                Watch Overview
              </button>
            </div>

            {/* =================================================
                STATS
            ================================================= */}

            <div className="mt-11 flex max-w-[500px] items-center">

              <Stat
                value="6+"
                label={
                  <>
                    Digital
                    <br />
                    Surfaces
                  </>
                }
              />

              <StatDivider />

              <Stat
                value="24/7"
                label={
                  <>
                    Continuous
                    <br />
                    Intelligence
                  </>
                }
              />

              <StatDivider />

              <Stat
                value="360°"
                label={
                  <>
                    Brand
                    <br />
                    Visibility
                  </>
                }
              />

            </div>
          </div>

          {/* =================================================
              RIGHT INTELLIGENCE VISUAL
          ================================================= */}

          <div className="relative min-h-[540px] lg:min-h-[680px]">

            {/* Live status */}

            <div
              className="
                absolute
                right-0
                top-0
                z-40
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[#7F9D16]/25
                bg-white/75
                px-4
                py-2
                shadow-[0_10px_35px_rgba(30,50,20,0.08)]
                backdrop-blur-xl

                dark:border-[#ADD132]/25
                dark:bg-[#071006]/75
                dark:shadow-none
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#7D9F00]
                  shadow-[0_0_7px_rgba(125,159,0,0.6)]

                  dark:bg-[#ADD132]
                  dark:shadow-[0_0_8px_#ADD132]
                "
              />

              <span
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#566152]

                  dark:text-white/65
                "
              >
                Live Monitoring
              </span>

              <span className="h-3 w-px bg-[#1D281C]/10 dark:bg-white/15" />

              <span className="text-[8px] font-black tracking-[0.15em] text-[#719000] dark:text-[#ADD132]">
                24/7
              </span>
            </div>

            {/* =================================================
                INTELLIGENCE SYSTEM
            ================================================= */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[440px]
                w-[440px]
                -translate-x-1/2
                -translate-y-1/2

                sm:h-[500px]
                sm:w-[500px]

                lg:h-[580px]
                lg:w-[580px]
              "
            >
              {/* Outer rings */}

              <div className="absolute inset-0 rounded-full border border-[#6C842C]/15 dark:border-[#ADD132]/15" />

              <div className="absolute inset-[7%] rounded-full border border-[#6C842C]/15 dark:border-[#ADD132]/15" />

              <div className="absolute inset-[15%] rounded-full border border-[#6C842C]/10 dark:border-[#ADD132]/10" />

              {/* Cross lines */}

              <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#77912F]/15 to-transparent dark:via-[#ADD132]/20" />

              <div className="absolute bottom-0 left-1/2 top-0 w-px bg-gradient-to-b from-transparent via-[#77912F]/10 to-transparent dark:via-[#ADD132]/15" />

              {/* Diagonal lines */}

              <div className="absolute left-1/2 top-1/2 h-px w-[88%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-r from-transparent via-[#77912F]/10 to-transparent dark:via-[#ADD132]/10" />

              <div className="absolute left-1/2 top-1/2 h-px w-[88%] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gradient-to-r from-transparent via-[#77912F]/10 to-transparent dark:via-[#ADD132]/10" />

              {/* =================================================
                  GLOBE
              ================================================= */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[46%]
                  h-[260px]
                  w-[260px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#6E8B1C]/40

                  bg-[radial-gradient(circle_at_35%_28%,rgba(173,209,50,0.20),rgba(237,244,225,0.96)_68%)]

                  shadow-[0_0_70px_rgba(110,140,20,0.10)]

                  sm:h-[320px]
                  sm:w-[320px]

                  lg:h-[370px]
                  lg:w-[370px]

                  dark:border-[#ADD132]/45
                  dark:bg-[radial-gradient(circle_at_35%_28%,rgba(173,209,50,0.24),rgba(8,15,8,0.98)_65%)]
                  dark:shadow-[0_0_70px_rgba(173,209,50,0.16)]
                "
              >
                {/* Globe border */}

                <div className="absolute inset-[7%] rounded-full border border-[#708A2A]/15 dark:border-[#ADD132]/15" />

                {/* Latitude */}

                <div className="absolute left-[5%] right-[5%] top-1/2 h-px bg-[#708A2A]/15 dark:bg-[#ADD132]/15" />

                <div className="absolute left-[10%] right-[10%] top-[31%] h-[25%] rounded-[50%] border border-[#708A2A]/10 dark:border-[#ADD132]/10" />

                <div className="absolute left-[10%] right-[10%] top-[44%] h-[25%] rounded-[50%] border border-[#708A2A]/10 dark:border-[#ADD132]/10" />

                {/* Longitude */}

                <div className="absolute bottom-[2%] left-1/2 top-[2%] w-[43%] -translate-x-1/2 rounded-[50%] border border-[#708A2A]/15 dark:border-[#ADD132]/15" />

                <div className="absolute bottom-[2%] left-1/2 top-[2%] w-[70%] -translate-x-1/2 rounded-[50%] border border-[#708A2A]/10 dark:border-[#ADD132]/10" />

                {/* Digital dots */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    opacity-50
                    dark:opacity-60
                  "
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(125,159,0,0.75) 1px, transparent 1.3px)",
                    backgroundSize: "8px 8px",
                    maskImage:
                      "radial-gradient(ellipse at center, black 15%, transparent 70%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse at center, black 15%, transparent 70%)",
                  }}
                />

                {/* Abstract continents */}

                <div
                  className="
                    absolute
                    left-[20%]
                    top-[25%]
                    h-[85px]
                    w-[65px]
                    rotate-[14deg]
                    rounded-[45%_55%_35%_60%]
                    bg-[#779900]/10

                    dark:bg-[#ADD132]/12
                  "
                />

                <div
                  className="
                    absolute
                    right-[19%]
                    top-[36%]
                    h-[105px]
                    w-[62px]
                    rotate-[-18deg]
                    rounded-[50%_40%_60%_35%]
                    bg-[#779900]/10

                    dark:bg-[#ADD132]/12
                  "
                />

                <div
                  className="
                    absolute
                    bottom-[17%]
                    left-[42%]
                    h-[60px]
                    w-[40px]
                    rotate-[28deg]
                    rounded-[40%_60%_30%_70%]
                    bg-[#779900]/8

                    dark:bg-[#ADD132]/10
                  "
                />

                {/* Signal points */}

                <SignalDot className="left-[26%] top-[33%]" />

                <SignalDot className="right-[25%] top-[42%]" />

                <SignalDot className="bottom-[27%] left-[40%]" />

                <SignalDot className="bottom-[34%] right-[35%]" />
              </div>

              {/* =================================================
                  CONNECTION LINES
              ================================================= */}

              <div className="absolute left-[12%] top-[29%] h-px w-[30%] rotate-[17deg] bg-gradient-to-r from-[#718D25]/30 to-transparent dark:from-[#ADD132]/40" />

              <div className="absolute right-[12%] top-[30%] h-px w-[28%] -rotate-[18deg] bg-gradient-to-l from-[#718D25]/30 to-transparent dark:from-[#ADD132]/40" />

              <div className="absolute bottom-[28%] left-[14%] h-px w-[28%] rotate-[-15deg] bg-gradient-to-r from-[#718D25]/25 to-transparent dark:from-[#ADD132]/30" />

              <div className="absolute bottom-[27%] right-[14%] h-px w-[28%] rotate-[15deg] bg-gradient-to-l from-[#718D25]/25 to-transparent dark:from-[#ADD132]/30" />

              {/* Orbit points */}

              <OrbitPoint className="left-[17%] top-[10%]" />

              <OrbitPoint className="right-[8%] top-[43%]" />

              <OrbitPoint className="bottom-[8%] left-[20%]" />

              <OrbitPoint className="bottom-[14%] right-[22%]" />

              {/* =================================================
                  TRACKOWLS CORE
              ================================================= */}

              <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2">

                <div className="relative h-[95px] w-[225px] sm:h-[110px] sm:w-[270px]">

                  {/* Base */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-12
                      w-full
                      -translate-x-1/2
                      rounded-[50%]
                      border
                      border-[#718C29]/20
                      bg-white/80

                      dark:border-[#ADD132]/25
                      dark:bg-[#081007]/90
                    "
                  />

                  {/* Base ring */}

                  <div className="absolute bottom-2 left-1/2 h-7 w-[80%] -translate-x-1/2 rounded-[50%] border border-[#718C29]/15 dark:border-[#ADD132]/15" />

                  {/* Shield */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      flex
                      h-[76px]
                      w-[76px]
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#718C29]/30
                      bg-[#F5F8F0]
                      shadow-[0_0_35px_rgba(110,140,20,0.12)]

                      sm:h-[86px]
                      sm:w-[86px]

                      dark:border-[#ADD132]/35
                      dark:bg-[#071007]
                      dark:shadow-[0_0_40px_rgba(173,209,50,0.18)]
                    "
                  >
                    <div className="absolute inset-2 rounded-full border border-[#718C29]/15 dark:border-[#ADD132]/15" />

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#779900]/5 dark:bg-[#ADD132]/5">
                      <ShieldCheck
                        size={27}
                        strokeWidth={1.2}
                        className="text-[#6F8D08] dark:text-[#ADD132]"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-0 text-center">
                  <div className="text-[8px] font-black uppercase tracking-[0.32em] text-[#3F493E] dark:text-white/70">
                    TrackOwls Core
                  </div>

                  <div className="mt-1 text-[6px] font-medium uppercase tracking-[0.28em] text-[#7C857A] dark:text-white/25">
                    Intelligence Layer
                  </div>
                </div>
              </div>

              {/* =================================================
                  INTELLIGENCE CARDS
              ================================================= */}

              {surfaces.map((item) => {
                const Icon = item.icon;

                return (
                  <IntelligenceCard
                    key={item.title}
                    position={item.position}
                    icon={<Icon size={14} strokeWidth={1.5} />}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM METRICS
        ===================================================== */}

        <div
          className="
            relative
            z-30
            grid
            overflow-hidden
            rounded-[22px]
            border
            border-[#1A2618]/10
            bg-white/75
            shadow-[0_20px_60px_rgba(35,55,25,0.08)]
            backdrop-blur-xl

            sm:grid-cols-2
            lg:grid-cols-4

            dark:border-white/10
            dark:bg-[#0A1009]/90
            dark:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
          "
        >
          <BottomMetric
            icon={<Radio size={16} />}
            value="6+"
            label="Digital Surfaces Monitored"
          />

          <BottomMetric
            icon={<BarChart3 size={16} />}
            value="24/7"
            label="Continuous Intelligence"
          />

          <BottomMetric
            icon={<ShieldCheck size={16} />}
            value="360°"
            label="Brand Visibility"
          />

          <BottomMetric
            icon={<Zap size={16} />}
            value="LIVE"
            label="Threat Detection"
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STAT
========================================================= */

function Stat({ value, label }) {
  return (
    <div className="min-w-[75px]">
      <div className="text-2xl font-black tracking-[-0.05em] text-[#111711] dark:text-white">
        {value}
      </div>

      <div className="mt-1 text-[7px] font-black uppercase leading-3 tracking-[0.18em] text-[#7B857B] dark:text-white/30">
        {label}
      </div>
    </div>
  );
}

/* =========================================================
   STAT DIVIDER
========================================================= */

function StatDivider() {
  return (
    <div className="mx-5 h-9 w-px bg-[#172117]/10 dark:bg-white/10" />
  );
}

/* =========================================================
   SIGNAL DOT
========================================================= */

function SignalDot({ className = "" }) {
  return (
    <span
      className={`
        absolute
        h-1.5
        w-1.5
        rounded-full
        bg-[#7D9F00]
        shadow-[0_0_8px_rgba(125,159,0,0.55)]

        dark:bg-[#ADD132]
        dark:shadow-[0_0_10px_rgba(173,209,50,0.9)]

        ${className}
      `}
    />
  );
}

/* =========================================================
   ORBIT POINT
========================================================= */

function OrbitPoint({ className = "" }) {
  return (
    <span
      className={`
        absolute
        h-1.5
        w-1.5
        rounded-full
        bg-[#7D9F00]
        shadow-[0_0_8px_rgba(125,159,0,0.5)]

        dark:bg-[#ADD132]
        dark:shadow-[0_0_10px_#ADD132]

        ${className}
      `}
    />
  );
}

/* =========================================================
   INTELLIGENCE CARD
========================================================= */

function IntelligenceCard({
  icon,
  title,
  subtitle,
  position,
}) {
  return (
    <div
      className={`
        absolute
        z-30
        flex
        w-[170px]
        items-center
        gap-2.5
        rounded-[15px]
        border
        border-[#33432D]/10
        bg-white/85
        px-3
        py-2.5
        shadow-[0_15px_40px_rgba(35,55,25,0.10)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#ADD132]/40
        hover:shadow-[0_18px_45px_rgba(35,55,25,0.15)]

        dark:border-[#ADD132]/15
        dark:bg-[#0B130A]/90
        dark:shadow-[0_18px_45px_rgba(0,0,0,0.22)]
        dark:hover:border-[#ADD132]/35
        dark:hover:bg-[#0E180C]

        ${positionClass[position]}
      `}
    >
      {/* Icon */}

      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-[#7C991B]/15
          bg-[#ADD132]/10
          text-[#6F8D08]

          dark:border-[#ADD132]/15
          dark:text-[#ADD132]
        "
      >
        {icon}
      </div>

      {/* Content */}

      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="truncate text-[9px] font-black text-[#20291F] dark:text-white">
            {title}
          </span>

          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7D9F00] dark:bg-[#ADD132]" />
        </div>

        <div className="mt-1 truncate text-[6px] font-medium uppercase tracking-[0.1em] text-[#7D8579] dark:text-white/35">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CARD POSITIONS
========================================================= */

const positionClass = {
  web: "right-[2%] top-[9%]",

  social: "left-[0%] top-[20%]",

  streaming: "left-[-1%] top-[48%]",

  marketplace: "left-[5%] bottom-[18%]",

  content: "right-[-1%] top-[48%]",

  media: "right-[7%] bottom-[17%]",
};

/* =========================================================
   BOTTOM METRIC
========================================================= */

function BottomMetric({ icon, value, label }) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        border-b
        border-[#172117]/10
        px-5
        py-5

        lg:border-b-0
        lg:border-r
        lg:last:border-r-0

        dark:border-white/10
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-[#7F9D16]/20
          bg-[#ADD132]/5
          text-[#6F8D08]

          dark:border-[#ADD132]/20
          dark:text-[#ADD132]
        "
      >
        {icon}
      </div>

      <div>
        <div className="text-xl font-black tracking-[-0.05em] text-[#172017] dark:text-white">
          {value}
        </div>

        <div className="mt-0.5 text-[7px] font-black uppercase tracking-[0.15em] text-[#7B857B] dark:text-white/30">
          {label}
        </div>
      </div>
    </div>
  );
}

export default IntelligentStatement;