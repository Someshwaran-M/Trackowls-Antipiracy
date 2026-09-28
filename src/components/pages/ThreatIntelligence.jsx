import React from "react";
import { Eye, Radar, ShieldCheck } from "lucide-react";

function ThreatIntelligence() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F9F4]
        py-12
        dark:bg-[#030503]
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          ATMOSPHERIC LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[5%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#ADD132]/10
          blur-[110px]
          dark:bg-[#ADD132]/5
          sm:-left-[220px]
          sm:h-[480px]
          sm:w-[480px]
          sm:blur-[140px]
          lg:-left-[280px]
          lg:h-[600px]
          lg:w-[600px]
          lg:blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          bottom-[-80px]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#ADD132]/10
          blur-[110px]
          dark:bg-[#ADD132]/5
          sm:-right-[220px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[140px]
          lg:-right-[260px]
          lg:bottom-[-100px]
          lg:h-[620px]
          lg:w-[620px]
          lg:blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(173,209,50,0.055)_0%,transparent_62%)]
          dark:bg-[radial-gradient(circle,rgba(173,209,50,0.035)_0%,transparent_62%)]
          sm:h-[650px]
          sm:w-[650px]
          lg:h-[850px]
          lg:w-[850px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1550px]
          px-4
          sm:px-7
          md:px-10
          lg:px-16
          xl:px-20
        "
      >
        {/* =====================================================
            TOP LABEL
        ===================================================== */}

        <div
          className="
            mb-8
            flex
            items-center
            gap-3
            sm:mb-12
            sm:gap-4
            md:mb-14
            lg:mb-16
          "
        >
          <div className="relative flex h-2 w-2 shrink-0 items-center justify-center sm:h-2.5 sm:w-2.5">
            <span className="absolute h-4 w-4 animate-ping rounded-full bg-[#ADD132]/20 sm:h-5 sm:w-5" />

            <span className="relative h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_14px_rgba(173,209,50,0.8)] sm:h-2.5 sm:w-2.5" />
          </div>

          <span
            className="
              text-[8px]
              font-black
              uppercase
              tracking-[0.22em]
              text-[#617D00]
              dark:text-[#ADD132]
              sm:text-[9px]
              sm:tracking-[0.3em]
              md:text-[10px]
              md:tracking-[0.35em]
            "
          >
            Digital Threat Intelligence
          </span>

          <span className="hidden h-px w-12 bg-gradient-to-r from-[#ADD132]/50 to-transparent sm:block sm:w-16 md:w-20" />
        </div>

        {/* =====================================================
            MAIN LAYOUT
        ===================================================== */}

        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-16
            xl:gap-24
          "
        >
          {/* =====================================================
              LEFT — EDITORIAL CONTENT
          ===================================================== */}

          <div className="relative z-10">
            {/* Main heading */}
            <h2
              className="
                max-w-[780px]
                text-[38px]
                font-black
                leading-[0.92]
                tracking-[-0.055em]
                text-[#0A100B]
                dark:text-white
                sm:text-[50px]
                sm:leading-[0.88]
                md:text-[62px]
                lg:text-[78px]
                xl:text-[96px]
              "
            >
              Not everything

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#719500]
                  via-[#ADD132]
                  to-[#D9F878]
                  bg-clip-text
                  text-transparent
                  dark:from-[#ADD132]
                  dark:via-[#C8EF56]
                  dark:to-[#E5FF9B]
                "
              >
                leaves a trace.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[590px]
                text-[12px]
                font-medium
                leading-5
                text-[#667169]
                dark:text-white/65
                sm:mt-6
                sm:text-[13px]
                sm:leading-6
                md:text-[14px]
                md:leading-7
                lg:mt-7
                lg:text-[15px]
                lg:leading-8
              "
            >
              Digital threats move silently across websites, platforms,
              marketplaces and private channels. TrackOwls creates the
              visibility required to discover activity before it becomes
              difficult to control.
            </p>

            {/* Intelligence Principle */}
            <div className="mt-7 flex items-start gap-3 sm:mt-8 sm:gap-4 md:mt-10">
              <div
                className="
                  mt-1
                  h-10
                  w-[2px]
                  shrink-0
                  rounded-full
                  bg-gradient-to-b
                  from-[#ADD132]
                  to-transparent
                  shadow-[0_0_12px_rgba(173,209,50,0.35)]
                  sm:h-12
                "
              />

              <div>
                <p
                  className="
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-[#6A8700]
                    dark:text-[#ADD132]
                    sm:text-[9px]
                    sm:tracking-[0.25em]
                  "
                >
                  Intelligence Principle
                </p>

                <p
                  className="
                    mt-1.5
                    max-w-[430px]
                    text-[11px]
                    leading-5
                    text-[#7A857D]
                    dark:text-white/45
                    sm:mt-2
                    sm:text-[12px]
                    sm:leading-6
                    md:text-[13px]
                  "
                >
                  Visibility creates awareness. Awareness creates control.
                </p>
              </div>
            </div>

            {/* Mini Metrics */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-x-7
                gap-y-4
                sm:mt-10
                sm:gap-x-10
                sm:gap-y-6
              "
            >
              {/* 24/7 */}
              <div>
                <div className="flex items-end gap-1.5 sm:gap-2">
                  <span
                    className="
                      text-xl
                      font-black
                      tracking-[-0.05em]
                      text-[#151C16]
                      dark:text-white
                      sm:text-2xl
                    "
                  >
                    24/7
                  </span>

                  <span className="mb-1 h-1.5 w-1.5 rounded-full bg-[#ADD132] shadow-[0_0_8px_#ADD132]" />
                </div>

                <p
                  className="
                    mt-1
                    text-[7px]
                    font-black
                    uppercase
                    tracking-[0.16em]
                    text-[#8B958E]
                    dark:text-white/35
                    sm:text-[8px]
                    sm:tracking-[0.2em]
                  "
                >
                  Continuous Visibility
                </p>
              </div>

              <div className="hidden h-8 w-px bg-black/10 sm:block dark:bg-white/10 sm:h-10" />

              {/* LIVE */}
              <div>
                <div className="flex items-end gap-1.5 sm:gap-2">
                  <span
                    className="
                      text-xl
                      font-black
                      tracking-[-0.05em]
                      text-[#151C16]
                      dark:text-white
                      sm:text-2xl
                    "
                  >
                    LIVE
                  </span>

                  <span className="mb-1 h-1.5 w-1.5 rounded-full bg-[#ADD132] shadow-[0_0_8px_#ADD132]" />
                </div>

                <p
                  className="
                    mt-1
                    text-[7px]
                    font-black
                    uppercase
                    tracking-[0.16em]
                    text-[#8B958E]
                    dark:text-white/35
                    sm:text-[8px]
                    sm:tracking-[0.2em]
                  "
                >
                  Threat Signals
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — INTELLIGENCE VISUAL
          ===================================================== */}

          <div className="relative min-w-0">
            {/* Outer Glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[300px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#ADD132]/10
                blur-[70px]
                dark:bg-[#ADD132]/6
                sm:h-[400px]
                sm:w-[400px]
                sm:blur-[90px]
                lg:h-[480px]
                lg:w-[480px]
                lg:blur-[100px]
              "
            />

            {/* Main Intelligence Panel */}
            <div
              className="
                relative
                min-h-0
                overflow-hidden
                rounded-[24px]
                border
                border-black/[0.07]
                bg-white/55
                shadow-[0_25px_80px_rgba(25,45,20,0.08)]
                backdrop-blur-2xl
                dark:border-white/[0.09]
                dark:bg-[#070B08]/80
                dark:shadow-[0_30px_90px_rgba(0,0,0,0.5)]
                sm:rounded-[30px]
                lg:rounded-[36px]
              "
            >
              {/* Panel Header */}
              <div
                className="
                  relative
                  z-20
                  flex
                  items-center
                  justify-between
                  gap-3
                  border-b
                  border-black/[0.06]
                  px-4
                  py-4
                  dark:border-white/[0.08]
                  sm:px-6
                  sm:py-5
                  md:px-8
                "
              >
                <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                  <div className="flex shrink-0 gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]/40" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]/15" />
                  </div>

                  <span
                    className="
                      truncate
                      text-[7px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#7E8981]
                      dark:text-white/40
                      sm:text-[8px]
                      sm:tracking-[0.28em]
                    "
                  >
                    Threat Surface
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ADD132] shadow-[0_0_8px_#ADD132]" />

                  <span
                    className="
                      text-[7px]
                      font-black
                      uppercase
                      tracking-[0.14em]
                      text-[#678400]
                      dark:text-[#ADD132]
                      sm:text-[8px]
                      sm:tracking-[0.2em]
                    "
                  >
                    Monitoring
                  </span>
                </div>
              </div>

              {/* Visual Area */}
              <div
                className="
                  relative
                  flex
                  min-h-[330px]
                  items-center
                  justify-center
                  overflow-hidden
                  sm:min-h-[390px]
                  md:min-h-[430px]
                "
              >
                {/* Coordinates */}
                <span
                  className="
                    absolute
                    left-4
                    top-4
                    font-mono
                    text-[6px]
                    tracking-[0.15em]
                    text-[#9BA49E]
                    dark:text-white/20
                    sm:left-6
                    sm:top-6
                    sm:text-[7px]
                  "
                >
                  SIGNAL / 001
                </span>

                <span
                  className="
                    absolute
                    right-4
                    top-4
                    font-mono
                    text-[6px]
                    tracking-[0.15em]
                    text-[#9BA49E]
                    dark:text-white/20
                    sm:right-6
                    sm:top-6
                    sm:text-[7px]
                  "
                >
                  ACTIVE
                </span>

                <span
                  className="
                    absolute
                    bottom-4
                    left-4
                    font-mono
                    text-[6px]
                    tracking-[0.15em]
                    text-[#9BA49E]
                    dark:text-white/20
                    sm:bottom-6
                    sm:left-6
                    sm:text-[7px]
                  "
                >
                  TRACKOWLS INTELLIGENCE
                </span>

                <span
                  className="
                    absolute
                    bottom-4
                    right-4
                    font-mono
                    text-[6px]
                    tracking-[0.15em]
                    text-[#9BA49E]
                    dark:text-white/20
                    sm:bottom-6
                    sm:right-6
                    sm:text-[7px]
                  "
                >
                  2026
                </span>

                {/* =================================================
                    RADAR
                ================================================= */}

                <div
                  className="
                    relative
                    h-[250px]
                    w-[250px]
                    sm:h-[310px]
                    sm:w-[310px]
                    md:h-[350px]
                    md:w-[350px]
                    lg:h-[390px]
                    lg:w-[390px]
                  "
                >
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border border-[#719500]/15 dark:border-[#ADD132]/12" />

                  {/* Second Ring */}
                  <div className="absolute inset-[32px] rounded-full border border-[#719500]/15 dark:border-[#ADD132]/12] sm:inset-[42px]" />

                  {/* Third Ring */}
                  <div className="absolute inset-[64px] rounded-full border border-[#719500]/15 dark:border-[#ADD132]/12] sm:inset-[78px]" />

                  {/* Inner Ring */}
                  <div className="absolute inset-[96px] rounded-full border border-[#719500]/20 dark:border-[#ADD132]/18] sm:inset-[112px]" />

                  {/* Horizontal Line */}
                  <div className="absolute left-0 top-1/2 h-px w-full bg-[#719500]/10 dark:bg-[#ADD132]/10" />

                  {/* Vertical Line */}
                  <div className="absolute left-1/2 top-0 h-full w-px bg-[#719500]/10 dark:bg-[#ADD132]/10" />

                  {/* Diagonal Lines */}
                  <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-[#719500]/5 dark:bg-[#ADD132]/5" />

                  <div className="absolute left-1/2 top-0 h-full w-px -rotate-45 bg-[#719500]/5 dark:bg-[#ADD132]/5" />

                  {/* Radar Sweep */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-1/2
                      w-[1.5px]
                      origin-bottom
                      -translate-x-1/2
                      bg-gradient-to-t
                      from-[#ADD132]
                      via-[#ADD132]/50
                      to-transparent
                      shadow-[0_0_14px_rgba(173,209,50,0.9)]
                      animate-[threatRadar_5s_linear_infinite]
                    "
                  />

                  {/* Radar Sweep Glow */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[48%]
                      w-[48%]
                      origin-bottom-left
                      -translate-y-full
                      rounded-tr-full
                      bg-gradient-to-t
                      from-[#ADD132]/10
                      to-transparent
                      blur-xl
                      animate-[threatRadar_5s_linear_infinite]
                    "
                  />

                  {/* Threat Node 01 */}
                  <div className="absolute left-[19%] top-[26%]">
                    <span className="absolute -inset-2 animate-ping rounded-full bg-[#ADD132]/10" />
                    <span className="relative block h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_16px_#ADD132] sm:h-2.5 sm:w-2.5" />
                  </div>

                  {/* Threat Node 02 */}
                  <div className="absolute right-[20%] top-[20%]">
                    <span className="absolute -inset-2 animate-ping rounded-full bg-[#ADD132]/10 [animation-delay:700ms]" />
                    <span className="relative block h-1.5 w-1.5 rounded-full bg-[#ADD132] shadow-[0_0_14px_#ADD132] sm:h-2 sm:w-2" />
                  </div>

                  {/* Threat Node 03 */}
                  <div className="absolute bottom-[22%] right-[21%]">
                    <span className="absolute -inset-2 animate-ping rounded-full bg-[#ADD132]/10 [animation-delay:1200ms]" />
                    <span className="relative block h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_16px_#ADD132] sm:h-2.5 sm:w-2.5" />
                  </div>

                  {/* Threat Node 04 */}
                  <div className="absolute bottom-[27%] left-[20%]">
                    <span className="absolute -inset-2 animate-ping rounded-full bg-[#ADD132]/10 [animation-delay:1700ms]" />
                    <span className="relative block h-1.5 w-1.5 rounded-full bg-[#ADD132] shadow-[0_0_14px_#ADD132]" />
                  </div>

                  {/* Center Core */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      z-10
                      flex
                      h-[76px]
                      w-[76px]
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#ADD132]/35
                      bg-[#ADD132]/10
                      shadow-[0_0_50px_rgba(173,209,50,0.15)]
                      backdrop-blur-xl
                      dark:bg-[#ADD132]/[0.06]
                      sm:h-[88px]
                      sm:w-[88px]
                      md:h-[100px]
                      md:w-[100px]
                    "
                  >
                    <div className="absolute inset-2.5 animate-pulse rounded-full border border-[#ADD132]/20 sm:inset-3" />

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-[#ADD132]
                        text-[#111900]
                        shadow-[0_0_30px_rgba(173,209,50,0.35)]
                        sm:h-12
                        sm:w-12
                        md:h-14
                        md:w-14
                      "
                    >
                      <ShieldCheck
                        size={22}
                        strokeWidth={1.4}
                        className="sm:h-6 sm:w-6 md:h-[27px] md:w-[27px]"
                      />
                    </div>
                  </div>

                  {/* Floating Signal — Left */}
                  <div
                    className="
                      absolute
                      left-[2%]
                      top-[42%]
                      hidden
                      rounded-xl
                      border
                      border-black/[0.06]
                      bg-white/75
                      px-3
                      py-2
                      shadow-[0_12px_35px_rgba(30,50,20,0.06)]
                      backdrop-blur-xl
                      sm:block
                      dark:border-white/[0.08]
                      dark:bg-[#0B110C]/80
                    "
                  >
                    <p className="text-[7px] font-black uppercase tracking-[0.16em] text-[#87928A] dark:text-white/35">
                      Signal
                    </p>

                    <p className="mt-1 text-[9px] font-bold text-[#192119] dark:text-white/75">
                      Detected
                    </p>
                  </div>

                  {/* Floating Signal — Right */}
                  <div
                    className="
                      absolute
                      right-[1%]
                      top-[43%]
                      hidden
                      rounded-xl
                      border
                      border-black/[0.06]
                      bg-white/75
                      px-3
                      py-2
                      shadow-[0_12px_35px_rgba(30,50,20,0.06)]
                      backdrop-blur-xl
                      sm:block
                      dark:border-white/[0.08]
                      dark:bg-[#0B110C]/80
                    "
                  >
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

              {/* =================================================
                  BOTTOM SIGNAL BAR
              ================================================= */}

              <div className="grid border-t border-black/[0.06] dark:border-white/[0.08] sm:grid-cols-3">
                {/* Discovery */}
                <div
                  className="
                    border-b
                    border-black/[0.06]
                    px-4
                    py-4
                    dark:border-white/[0.08]
                    sm:border-b-0
                    sm:border-r
                    sm:px-5
                    sm:py-5
                    md:px-6
                  "
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-[7px]
                        font-black
                        uppercase
                        tracking-[0.16em]
                        text-[#89948C]
                        dark:text-white/35
                        sm:text-[8px]
                        sm:tracking-[0.2em]
                      "
                    >
                      Discovery
                    </span>

                    <Eye
                      size={13}
                      className="text-[#719400] dark:text-[#ADD132]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="mt-1.5 flex items-center gap-2 sm:mt-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

                    <span className="text-[9px] font-bold text-[#172019] dark:text-white/75 sm:text-[10px]">
                      Continuous
                    </span>
                  </div>
                </div>

                {/* Detection */}
                <div
                  className="
                    border-b
                    border-black/[0.06]
                    px-4
                    py-4
                    dark:border-white/[0.08]
                    sm:border-b-0
                    sm:border-r
                    sm:px-5
                    sm:py-5
                    md:px-6
                  "
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-[7px]
                        font-black
                        uppercase
                        tracking-[0.16em]
                        text-[#89948C]
                        dark:text-white/35
                        sm:text-[8px]
                        sm:tracking-[0.2em]
                      "
                    >
                      Detection
                    </span>

                    <Radar
                      size={13}
                      className="text-[#719400] dark:text-[#ADD132]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="mt-1.5 flex items-center gap-2 sm:mt-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

                    <span className="text-[9px] font-bold text-[#172019] dark:text-white/75 sm:text-[10px]">
                      Intelligent
                    </span>
                  </div>
                </div>

                {/* Response */}
                <div className="px-4 py-4 sm:px-5 sm:py-5 md:px-6">
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-[7px]
                        font-black
                        uppercase
                        tracking-[0.16em]
                        text-[#89948C]
                        dark:text-white/35
                        sm:text-[8px]
                        sm:tracking-[0.2em]
                      "
                    >
                      Response
                    </span>

                    <ShieldCheck
                      size={13}
                      className="text-[#719400] dark:text-[#ADD132]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="mt-1.5 flex items-center gap-2 sm:mt-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

                    <span className="text-[9px] font-bold text-[#172019] dark:text-white/75 sm:text-[10px]">
                      Structured
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Accent */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-4
                -right-4
                h-16
                w-16
                rounded-full
                border
                border-[#ADD132]/20
                dark:border-[#ADD132]/15
                sm:-bottom-5
                sm:-right-5
                sm:h-24
                sm:w-24
              "
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

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

export default ThreatIntelligence;