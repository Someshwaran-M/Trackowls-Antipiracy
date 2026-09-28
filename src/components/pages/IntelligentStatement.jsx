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
        transition-colors
        duration-300
        dark:bg-[#050805]
        dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Light atmosphere */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_72%_48%,rgba(173,209,50,0.12),transparent_35%),radial-gradient(circle_at_12%_10%,rgba(173,209,50,0.08),transparent_28%)]
            dark:hidden
          "
        />

        {/* Dark atmosphere */}
        <div
          className="
            absolute
            inset-0
            hidden
            bg-[radial-gradient(circle_at_72%_48%,rgba(173,209,50,0.10),transparent_35%),radial-gradient(circle_at_12%_10%,rgba(173,209,50,0.05),transparent_28%)]
            dark:block
          "
        />

        {/* Light glow */}
        <div
          className="
            absolute
            right-[-15%]
            top-1/2
            h-[320px]
            w-[320px]
            -translate-y-1/2
            rounded-full
            bg-[#ADD132]/10
            blur-[100px]
            dark:hidden
            sm:right-[2%]
            sm:h-[420px]
            sm:w-[420px]
            sm:blur-[120px]
            md:h-[520px]
            md:w-[520px]
            lg:right-[12%]
            lg:h-[600px]
            lg:w-[600px]
            lg:blur-[150px]
          "
        />

        {/* Dark glow */}
        <div
          className="
            absolute
            right-[-15%]
            top-1/2
            hidden
            h-[320px]
            w-[320px]
            -translate-y-1/2
            rounded-full
            bg-[#ADD132]/7
            blur-[100px]
            dark:block
            sm:right-[2%]
            sm:h-[420px]
            sm:w-[420px]
            sm:blur-[120px]
            md:h-[520px]
            md:w-[520px]
            lg:right-[12%]
            lg:h-[600px]
            lg:w-[600px]
            lg:blur-[150px]
          "
        />

        {/* Light grid */}
        <div
          className="
            absolute
            right-0
            top-0
            h-full
            w-full
            opacity-[0.10]
            dark:hidden
            sm:w-[65%]
            md:w-[60%]
          "
          style={{
            backgroundImage:
              "radial-gradient(rgba(89,116,45,0.35) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
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
            w-full
            opacity-15
            dark:block
            sm:w-[65%]
            md:w-[60%]
          "
          style={{
            backgroundImage:
              "radial-gradient(rgba(173,209,50,0.35) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
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
            dark:via-[#ADD132]/10
            lg:block
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
          w-full
          max-w-[1580px]
          px-4
          py-12
          sm:px-7
          sm:py-16
          md:px-10
          md:py-20
          lg:px-12
          lg:py-24
          xl:px-16
        "
      >
        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[0.86fr_1.14fr]
            lg:gap-8
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-20 max-w-[610px]">
            {/* Eyebrow */}

            <div
              className="
                mb-4
                flex
                items-center
                gap-2.5
                sm:mb-5
                sm:gap-3
                md:mb-6
              "
            >
              <span className="h-px w-7 bg-[#8BAA20] dark:bg-[#ADD132] sm:w-9 md:w-11" />

              <span
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-[#657352]
                  dark:text-[#ADD132]
                  sm:text-[9px]
                  sm:tracking-[0.32em]
                  md:tracking-[0.38em]
                "
              >
                TrackOwls Intelligence
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                text-[38px]
                font-black
                leading-[0.94]
                tracking-[-0.055em]
                text-[#101510]
                dark:text-white
                sm:text-[48px]
                md:text-[58px]
                lg:text-[66px]
                xl:text-[74px]
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
                mt-5
                max-w-[500px]
                text-[11px]
                leading-5
                text-[#687267]
                dark:text-white/45
                sm:mt-6
                sm:text-[12px]
                sm:leading-6
                md:mt-7
                md:text-[13px]
              "
            >
              TrackOwls connects digital signals across the web to deliver
              real-time intelligence, helping you detect threats early,
              protect your brand, and stay ahead.
            </p>

            {/* CTA */}

            <div
              className="
                mt-6
                flex
                flex-col
                items-stretch
                gap-2.5
                sm:mt-7
                sm:flex-row
                sm:flex-wrap
                sm:items-center
                sm:gap-3
              "
            >
              {/* Primary */}

              <button
                type="button"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-between
                  gap-3
                  rounded-full
                  bg-[#ADD132]
                  px-4
                  py-2.5
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-[#101800]
                  shadow-[0_12px_35px_rgba(110,140,20,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_16px_45px_rgba(110,140,20,0.28)]
                  sm:w-auto
                  sm:gap-4
                  sm:px-5
                  sm:py-3
                  sm:text-[9px]
                  sm:tracking-[0.15em]
                "
              >
                Explore Intelligence

                <span
                  className="
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0A1008]
                    text-[#ADD132]
                    sm:h-7
                    sm:w-7
                  "
                >
                  <ArrowUpRight size={12} />
                </span>
              </button>

              {/* Secondary */}

              <button
                type="button"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  border
                  border-[#1B261A]/10
                  bg-white/70
                  px-4
                  py-2.5
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.14em]
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
                  sm:w-auto
                  sm:gap-3
                  sm:py-3
                  sm:text-[9px]
                  sm:tracking-[0.15em]
                "
              >
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#7F9D16]/30
                    text-[#6F8D08]
                    dark:border-[#ADD132]/30
                    dark:text-[#ADD132]
                    sm:h-7
                    sm:w-7
                  "
                >
                  <Play size={9} fill="currentColor" />
                </span>

                Watch Overview
              </button>
            </div>

            {/* Stats */}

            <div
              className="
                mt-8
                flex
                max-w-[500px]
                items-center
                sm:mt-10
                md:mt-11
              "
            >
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

          <div
            className="
              relative
              min-h-[430px]
              sm:min-h-[500px]
              md:min-h-[540px]
              lg:min-h-[580px]
              xl:min-h-[620px]
            "
          >
            {/* Live status */}

            <div
              className="
                absolute
                right-0
                top-0
                z-40
                flex
                items-center
                gap-2
                rounded-full
                border
                border-[#7F9D16]/25
                bg-white/75
                px-3
                py-1.5
                shadow-[0_10px_35px_rgba(30,50,20,0.08)]
                backdrop-blur-xl
                dark:border-[#ADD132]/25
                dark:bg-[#071006]/75
                dark:shadow-none
                sm:gap-3
                sm:px-4
                sm:py-2
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
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.16em]
                  text-[#566152]
                  dark:text-white/65
                  sm:text-[8px]
                  sm:tracking-[0.2em]
                "
              >
                Live Monitoring
              </span>

              <span className="h-3 w-px bg-[#1D281C]/10 dark:bg-white/15" />

              <span className="text-[7px] font-black tracking-[0.13em] text-[#719000] dark:text-[#ADD132] sm:text-[8px] sm:tracking-[0.15em]">
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
                h-[330px]
                w-[330px]
                -translate-x-1/2
                -translate-y-1/2
                sm:h-[420px]
                sm:w-[420px]
                md:h-[480px]
                md:w-[480px]
                lg:h-[540px]
                lg:w-[540px]
                xl:h-[580px]
                xl:w-[580px]
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
                  h-[190px]
                  w-[190px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#6E8B1C]/40
                  bg-[radial-gradient(circle_at_35%_28%,rgba(173,209,50,0.20),rgba(237,244,225,0.96)_68%)]
                  shadow-[0_0_50px_rgba(110,140,20,0.10)]
                  sm:h-[250px]
                  sm:w-[250px]
                  md:h-[300px]
                  md:w-[300px]
                  lg:h-[340px]
                  lg:w-[340px]
                  xl:h-[370px]
                  xl:w-[370px]
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
                    h-[60px]
                    w-[48px]
                    rotate-[14deg]
                    rounded-[45%_55%_35%_60%]
                    bg-[#779900]/10
                    dark:bg-[#ADD132]/12
                    sm:h-[70px]
                    sm:w-[55px]
                    md:h-[80px]
                    md:w-[62px]
                    lg:h-[85px]
                    lg:w-[65px]
                  "
                />

                <div
                  className="
                    absolute
                    right-[19%]
                    top-[36%]
                    h-[72px]
                    w-[46px]
                    rotate-[-18deg]
                    rounded-[50%_40%_60%_35%]
                    bg-[#779900]/10
                    dark:bg-[#ADD132]/12
                    sm:h-[85px]
                    sm:w-[52px]
                    md:h-[95px]
                    md:w-[58px]
                    lg:h-[105px]
                    lg:w-[62px]
                  "
                />

                <div
                  className="
                    absolute
                    bottom-[17%]
                    left-[42%]
                    h-[42px]
                    w-[28px]
                    rotate-[28deg]
                    rounded-[40%_60%_30%_70%]
                    bg-[#779900]/8
                    dark:bg-[#ADD132]/10
                    sm:h-[50px]
                    sm:w-[34px]
                    md:h-[55px]
                    md:w-[37px]
                    lg:h-[60px]
                    lg:w-[40px]
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

              <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2">
                <div
                  className="
                    relative
                    h-[78px]
                    w-[180px]
                    sm:h-[90px]
                    sm:w-[220px]
                    md:h-[100px]
                    md:w-[250px]
                    lg:h-[110px]
                    lg:w-[270px]
                  "
                >
                  {/* Base */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-9
                      w-full
                      -translate-x-1/2
                      rounded-[50%]
                      border
                      border-[#718C29]/20
                      bg-white/80
                      dark:border-[#ADD132]/25
                      dark:bg-[#081007]/90
                      sm:h-10
                      md:h-11
                      lg:h-12
                    "
                  />

                  {/* Base ring */}

                  <div className="absolute bottom-1.5 left-1/2 h-5 w-[80%] -translate-x-1/2 rounded-[50%] border border-[#718C29]/15 dark:border-[#ADD132]/15 sm:bottom-2 sm:h-6 md:h-7" />

                  {/* Shield */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      flex
                      h-[58px]
                      w-[58px]
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#718C29]/30
                      bg-[#F5F8F0]
                      shadow-[0_0_30px_rgba(110,140,20,0.12)]
                      dark:border-[#ADD132]/35
                      dark:bg-[#071007]
                      dark:shadow-[0_0_35px_rgba(173,209,50,0.18)]
                      sm:h-[70px]
                      sm:w-[70px]
                      md:h-[80px]
                      md:w-[80px]
                      lg:h-[86px]
                      lg:w-[86px]
                    "
                  >
                    <div className="absolute inset-1.5 rounded-full border border-[#718C29]/15 dark:border-[#ADD132]/15 sm:inset-2" />

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-[#779900]/5
                        dark:bg-[#ADD132]/5
                        sm:h-10
                        sm:w-10
                        md:h-11
                        md:w-11
                        lg:h-12
                        lg:w-12
                      "
                    >
                      <ShieldCheck
                        size={21}
                        strokeWidth={1.2}
                        className="text-[#6F8D08] dark:text-[#ADD132] sm:h-6 sm:w-6 md:h-7 md:w-7"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-0 text-center">
                  <div
                    className="
                      text-[7px]
                      font-black
                      uppercase
                      tracking-[0.25em]
                      text-[#3F493E]
                      dark:text-white/70
                      sm:text-[8px]
                      sm:tracking-[0.32em]
                    "
                  >
                    TrackOwls Core
                  </div>

                  <div
                    className="
                      mt-0.5
                      text-[5px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-[#7C857A]
                      dark:text-white/25
                      sm:text-[6px]
                      sm:tracking-[0.28em]
                    "
                  >
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
                    icon={<Icon size={13} strokeWidth={1.5} />}
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
            mt-4
            grid
            overflow-hidden
            rounded-[18px]
            border
            border-[#1A2618]/10
            bg-white/75
            shadow-[0_15px_45px_rgba(35,55,25,0.08)]
            backdrop-blur-xl
            sm:mt-6
            sm:grid-cols-2
            sm:rounded-[20px]
            lg:grid-cols-4
            lg:rounded-[22px]
            dark:border-white/10
            dark:bg-[#0A1009]/90
            dark:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
          "
        >
          <BottomMetric
            icon={<Radio size={15} />}
            value="6+"
            label="Digital Surfaces Monitored"
          />

          <BottomMetric
            icon={<BarChart3 size={15} />}
            value="24/7"
            label="Continuous Intelligence"
          />

          <BottomMetric
            icon={<ShieldCheck size={15} />}
            value="360°"
            label="Brand Visibility"
          />

          <BottomMetric
            icon={<Zap size={15} />}
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
    <div className="min-w-[55px] sm:min-w-[65px] md:min-w-[75px]">
      <div
        className="
          text-xl
          font-black
          tracking-[-0.05em]
          text-[#111711]
          dark:text-white
          sm:text-2xl
        "
      >
        {value}
      </div>

      <div
        className="
          mt-1
          text-[6px]
          font-black
          uppercase
          leading-3
          tracking-[0.15em]
          text-[#7B857B]
          dark:text-white/30
          sm:text-[7px]
          sm:tracking-[0.18em]
        "
      >
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
    <div className="mx-3 h-7 w-px bg-[#172117]/10 dark:bg-white/10 sm:mx-4 sm:h-8 md:mx-5 md:h-9" />
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
        w-[132px]
        items-center
        gap-2
        rounded-[12px]
        border
        border-[#33432D]/10
        bg-white/85
        px-2
        py-2
        shadow-[0_12px_30px_rgba(35,55,25,0.10)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#ADD132]/40
        hover:shadow-[0_16px_38px_rgba(35,55,25,0.15)]
        dark:border-[#ADD132]/15
        dark:bg-[#0B130A]/90
        dark:shadow-[0_16px_38px_rgba(0,0,0,0.22)]
        dark:hover:border-[#ADD132]/35
        dark:hover:bg-[#0E180C]
        sm:w-[150px]
        sm:gap-2.5
        sm:rounded-[14px]
        sm:px-2.5
        sm:py-2.5
        md:w-[160px]
        md:px-3
        lg:w-[170px]
        lg:rounded-[15px]
        ${positionClass[position]}
      `}
    >
      {/* Icon */}

      <div
        className="
          flex
          h-7
          w-7
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
          sm:h-8
          sm:w-8
        "
      >
        {icon}
      </div>

      {/* Content */}

      <div className="min-w-0">
        <div className="flex items-center gap-1.5">
          <span
            className="
              truncate
              text-[7px]
              font-black
              text-[#20291F]
              dark:text-white
              sm:text-[8px]
              md:text-[9px]
            "
          >
            {title}
          </span>

          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7D9F00] dark:bg-[#ADD132]" />
        </div>

        <div
          className="
            mt-0.5
            truncate
            text-[5px]
            font-medium
            uppercase
            tracking-[0.08em]
            text-[#7D8579]
            dark:text-white/35
            sm:text-[6px]
            sm:tracking-[0.1em]
          "
        >
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
  web: "right-[0%] top-[7%]",

  social: "left-[-1%] top-[19%]",

  streaming: "left-[-2%] top-[48%]",

  marketplace: "left-[3%] bottom-[16%]",

  content: "right-[-2%] top-[48%]",

  media: "right-[4%] bottom-[15%]",
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
        gap-3
        border-b
        border-[#172117]/10
        px-4
        py-4
        dark:border-white/10
        sm:gap-4
        sm:px-5
        sm:py-5
        lg:border-b-0
        lg:border-r
        lg:last:border-r-0
      "
    >
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
          border-[#7F9D16]/20
          bg-[#ADD132]/5
          text-[#6F8D08]
          dark:border-[#ADD132]/20
          dark:text-[#ADD132]
          sm:h-9
          sm:w-9
          sm:rounded-xl
        "
      >
        {icon}
      </div>

      <div>
        <div
          className="
            text-lg
            font-black
            tracking-[-0.05em]
            text-[#172017]
            dark:text-white
            sm:text-xl
          "
        >
          {value}
        </div>

        <div
          className="
            mt-0.5
            text-[6px]
            font-black
            uppercase
            tracking-[0.12em]
            text-[#7B857B]
            dark:text-white/30
            sm:text-[7px]
            sm:tracking-[0.15em]
          "
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export default IntelligentStatement;