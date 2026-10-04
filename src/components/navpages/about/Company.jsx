import React from "react";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function Company() {
  return (
    <section
      id="company"
      className="
        relative overflow-hidden
        bg-[#F5F7F2] text-[#152019]
        dark:bg-[#070A07] dark:text-white
      "
    >
      {/* Top Accent */}
      <div className="h-[2px] w-full bg-[#ADD132]" />

      <div className="mx-auto max-w-[1420px] px-5 sm:px-7 md:px-8 lg:px-10 xl:px-12">

        {/* =========================================================
            01 — COMPANY
        ========================================================= */}

        <section className="border-b border-[#172117]/10 py-10 dark:border-white/[0.08] sm:py-12 lg:py-14">

          {/* Section Header */}
          <div className="mb-7 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ADD132] text-[10px] font-black text-[#101800]">
                01
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#69736B] dark:text-white/40">
                The Company
              </span>
            </div>

            <ArrowUpRight
              size={17}
              strokeWidth={1.8}
              className="text-[#789900] dark:text-[#ADD132]"
            />
          </div>

          <div className="grid gap-9 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12 xl:gap-16">

            {/* Company Introduction */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#687368] dark:text-white/35">
                TrackOwls Anti-Piracy Private Limited
              </p>

              <h2
                className="
                  mt-4
                  max-w-[760px]
                  text-[38px]
                  font-extrabold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#152019]
                  dark:text-white
                  sm:text-[44px]
                  md:text-[48px]
                  lg:text-[54px]
                  xl:text-[58px]
                "
              >
                Building technology
                <br />
                for{" "}
                <span className="relative text-[#789900] dark:text-[#ADD132]">
                  digital protection.
                  <span className="absolute -bottom-1.5 left-0 h-[2px] w-11 bg-[#ADD132] sm:w-14" />
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-[640px]
                  text-[13px]
                  leading-6
                  text-[#687368]
                  dark:text-white/52
                  sm:text-[14px]
                  sm:leading-7
                "
              >
                TrackOwls Anti-Piracy Private Limited is focused on helping
                organizations understand, monitor and protect their valuable
                digital content, intellectual property and online presence.
              </p>
            </div>

            {/* Company Details */}
            <div className="lg:border-l lg:border-[#172117]/10 lg:pl-8 dark:lg:border-white/[0.08]">

              <div className="grid">

                {/* Company */}
                <div className="border-b border-[#172117]/10 py-4 first:pt-0 dark:border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Building2
                      size={15}
                      strokeWidth={1.8}
                      className="text-[#789900] dark:text-[#ADD132]"
                    />

                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#7B857B] dark:text-white/35">
                      Company
                    </span>
                  </div>

                  <p className="mt-2 text-[13px] font-bold leading-5 text-[#263129] dark:text-white/80">
                    TrackOwls Anti-Piracy Private Limited
                  </p>
                </div>

                {/* Established */}
                <div className="border-b border-[#172117]/10 py-4 dark:border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <CalendarDays
                      size={15}
                      strokeWidth={1.8}
                      className="text-[#789900] dark:text-[#ADD132]"
                    />

                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#7B857B] dark:text-white/35">
                      Established
                    </span>
                  </div>

                  <p className="mt-1.5 text-[30px] font-extrabold leading-none tracking-[-0.04em] text-[#789900] dark:text-[#ADD132]">
                    2026
                  </p>
                </div>

                {/* Headquarters */}
                <div className="py-4 last:pb-0">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={15}
                      strokeWidth={1.8}
                      className="text-[#789900] dark:text-[#ADD132]"
                    />

                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#7B857B] dark:text-white/35">
                      Headquarters
                    </span>
                  </div>

                  <p className="mt-2 text-[13px] font-bold leading-5 text-[#263129] dark:text-white/80">
                    Coimbatore, Tamil Nadu
                  </p>
                </div>

              </div>
            </div>
          </div>
          
        </section>


        {/* =========================================================
            02 — LEADERSHIP
        ========================================================= */}

        <section className="border-b border-[#172117]/10 py-10 dark:border-white/[0.08] sm:py-12 lg:py-14">

          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#152019] text-[10px] font-black text-white dark:bg-[#ADD132] dark:text-[#101800]">
                  02
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#69736B] dark:text-white/40">
                  Leadership
                </span>
              </div>

              <h3
                className="
                  mt-4
                  text-[34px]
                  font-extrabold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#152019]
                  dark:text-white
                  sm:text-[40px]
                  md:text-[44px]
                  lg:text-[48px]
                "
              >
                People behind the{" "}
                <span className="text-[#789900] dark:text-[#ADD132]">
                  vision.
                </span>
              </h3>
            </div>

            <p className="max-w-[320px] text-[12px] leading-5 text-[#687368] dark:text-white/45 sm:text-right">
              TrackOwls is being built with a focus on practical digital
              protection and intelligent monitoring.
            </p>
          </div>

          {/* People */}
          <div className="mt-8 grid border-t border-[#172117]/10 dark:border-white/[0.08] md:grid-cols-2">

            {/* Founder */}
            <div
              className="
                group
                border-b
                border-[#172117]/10
                py-6
                md:border-b-0
                md:border-r
                md:pr-8
                dark:border-white/[0.08]
              "
            >
              <div className="flex items-start justify-between">

                <span className="text-[9px] font-bold tracking-[0.18em] text-[#929B94] dark:text-white/25">
                  01
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="
                    text-[#789900]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    dark:text-[#ADD132]
                  "
                />
              </div>

              <div className="mt-7">
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#7B857B] dark:text-white/30">
                  Founder
                </p>

                <h4
                  className="
                    mt-2
                    text-[25px]
                    font-extrabold
                    tracking-[-0.04em]
                    text-[#152019]
                    dark:text-white
                    sm:text-[28px]
                  "
                >
                  P Dhanalakshmi
                </h4>

                <div className="mt-4 flex items-center gap-2">
                  <span className="h-[2px] w-7 bg-[#ADD132] transition-all duration-500 group-hover:w-14" />
                  <span className="h-px w-7 bg-[#172117]/10 dark:bg-white/10" />
                </div>
              </div>
            </div>

            {/* Co-Founder */}
            <div
              className="
                group
                py-6
                md:pl-8
              "
            >
              <div className="flex items-start justify-between">

                <span className="text-[9px] font-bold tracking-[0.18em] text-[#929B94] dark:text-white/25">
                  02
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="
                    text-[#789900]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    dark:text-[#ADD132]
                  "
                />
              </div>

              <div className="mt-7">
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#7B857B] dark:text-white/30">
                  Co-Founder
                </p>

                <h4
                  className="
                    mt-2
                    text-[25px]
                    font-extrabold
                    tracking-[-0.04em]
                    text-[#152019]
                    dark:text-white
                    sm:text-[28px]
                  "
                >
                  Shamsath Begum
                </h4>

                <div className="mt-4 flex items-center gap-2">
                  <span className="h-[2px] w-7 bg-[#ADD132] transition-all duration-500 group-hover:w-14" />
                  <span className="h-px w-7 bg-[#172117]/10 dark:bg-white/10" />
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================
            03 — OUR DIRECTION
        ========================================================= */}

        <section className="py-10 sm:py-12 lg:py-14">

          {/* Header */}
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ADD132] text-[10px] font-black text-[#101800]">
                03
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#69736B] dark:text-white/40">
                Our Direction
              </span>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-[2px] w-7 bg-[#ADD132]" />
              <span className="h-px w-10 bg-[#172117]/10 dark:bg-white/10" />
            </div>
          </div>

          {/* Direction Content */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-16">

            {/* Heading */}
            <div>
              <div className="flex items-center gap-2">
                <Sparkles
                  size={16}
                  strokeWidth={1.8}
                  className="text-[#789900] dark:text-[#ADD132]"
                />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#7B857B] dark:text-white/35">
                  Intelligence • Monitoring • Protection
                </span>
              </div>

              <h3
                className="
                  mt-4
                  max-w-[480px]
                  text-[32px]
                  font-extrabold
                  leading-[1.02]
                  tracking-[-0.05em]
                  text-[#152019]
                  dark:text-white
                  sm:text-[37px]
                  md:text-[41px]
                  lg:text-[45px]
                "
              >
                Technology that sees the threat before it becomes the problem.
              </h3>
            </div>

            {/* Description */}
            <div className="lg:pt-1">

              <p className="text-[13px] leading-6 text-[#59645B] dark:text-white/52 sm:text-[14px] sm:leading-7">
                The digital ecosystem continues to grow rapidly, creating new
                opportunities for businesses, creators and organizations. It
                also creates new ways for valuable content and intellectual
                property to be copied, misused or distributed without
                authorization.
              </p>

              <p className="mt-5 text-[13px] leading-6 text-[#59645B] dark:text-white/52 sm:text-[14px] sm:leading-7">
                TrackOwls brings monitoring, digital intelligence and
                protection workflows together to help organizations gain
                visibility across the online environment.
              </p>

              <p className="mt-5 text-[13px] leading-6 text-[#59645B] dark:text-white/52 sm:text-[14px] sm:leading-7">
                Our approach is built around understanding digital activity,
                identifying relevant threats and helping clients take informed
                action to protect what matters.
              </p>
            </div>
          </div>

        </section>
      </div>

      {/* Bottom Accent */}
      <div className="h-[2px] w-full bg-[#ADD132]/40" />
    </section>
  );
}

export default Company;