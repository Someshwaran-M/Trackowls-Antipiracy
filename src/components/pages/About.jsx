import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Target,
  Eye,
  Globe,
  LockKeyhole,
  CheckCircle2,
  ScanSearch,
  Users,
  CalendarDays,
  Radio,
  Fingerprint,
  Search,
} from "lucide-react";

function About() {
  const capabilities = [
    {
      icon: Globe,
      title: "Digital Visibility",
      text: "Understand where your digital content and assets appear across the online environment.",
    },
    {
      icon: ScanSearch,
      title: "Content Discovery",
      text: "Identify potential instances of unauthorized use and distribution of digital content.",
    },
    {
      icon: LockKeyhole,
      title: "IP Protection",
      text: "Support organizations in protecting valuable intellectual property and digital assets.",
    },
    {
      icon: Shield,
      title: "Threat Protection",
      text: "Bring together monitoring and intelligence to help identify digital threats.",
    },
  ];

  const whyTrackOwls = [
    {
      number: "01",
      title: "One protection partner",
      text: "One partner for content and brand protection.",
    },
    {
      number: "02",
      title: "Human-reviewed action",
      text: "Human review before every takedown, so no wrongful claims.",
    },
    {
      number: "03",
      title: "Regional understanding",
      text: "Made for India and regional-language content.",
    },
    {
      number: "04",
      title: "Authorized protection",
      text: "Written authorization before we act for you.",
    },
    {
      number: "05",
      title: "Transparent reporting",
      text: "Honest reports, including what we could not remove.",
    },
    {
      number: "06",
      title: "Confidential handling",
      text: "Confidential handling of your files and data.",
    },
  ];

  const protectedIndustries = [
    {
      number: "01",
      title: "Film & OTT",
      short: "Entertainment",
      body: "Leaked releases and illegal uploads.",
    },
    {
      number: "02",
      title: "Music",
      short: "Audio & Artists",
      body: "Unauthorized uploads and fake artist pages.",
    },
    {
      number: "03",
      title: "Sports",
      short: "Live Content",
      body: "Illegal restreams and clipped highlights.",
    },
    {
      number: "04",
      title: "E-learning",
      short: "Education",
      body: "Leaked courses, videos, notes and PDFs.",
    },
    {
      number: "05",
      title: "D2C & Retail",
      short: "Commerce",
      body: "Fake stores and counterfeit listings.",
    },
    {
      number: "06",
      title: "Creators",
      short: "Digital Creators",
      body: "Stolen videos and channel impersonation.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7FAF4] text-[#152019] transition-colors duration-300 dark:bg-[#070A07] dark:text-white">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden border-b border-[#182218]/10 dark:border-white/[0.06]">

        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.055]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(91,120,45,0.55) 1px, transparent 1px),
              linear-gradient(90deg, rgba(91,120,45,0.55) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Main glow */}
        <div className="pointer-events-none absolute -right-32 top-10 h-[320px] w-[320px] rounded-full bg-[#ADD132]/10 blur-[110px] dark:bg-[#ADD132]/[0.06] sm:-right-40 sm:h-[420px] sm:w-[420px] sm:blur-[130px] lg:h-[500px] lg:w-[500px] lg:blur-[140px]" />

        <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-[260px] w-[260px] rounded-full bg-[#ADD132]/5 blur-[100px] dark:hidden sm:h-[350px] sm:w-[350px]" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-16 pt-16 sm:px-7 sm:pb-20 sm:pt-20 md:px-10 md:pb-24 md:pt-24 lg:px-12 lg:pb-28 lg:pt-28 xl:px-16">

          <div className="max-w-5xl">

            <div className="mb-7 inline-flex items-center gap-2 border-b border-[#6F8D08]/25 pb-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#6F8D08] dark:border-[#ADD132]/25 dark:text-[#ADD132] sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132] shadow-[0_0_10px_#ADD132]" />
              About TrackOwls
            </div>

            <h1 className="text-[46px] font-black leading-[0.9] tracking-[-0.06em] text-[#152019] dark:text-white sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[100px]">
              Protecting the
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                digital ecosystem.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-[16px] leading-7 text-[#667267] dark:text-white/50 sm:text-lg sm:leading-8 md:text-xl">
              TrackOwls Anti-Piracy Private Limited is focused on helping
              organizations discover, monitor and protect their digital
              content, intellectual property and online presence.
            </p>

            {/* Hero statistics */}
            <div className="mt-10 grid max-w-[700px] grid-cols-3 border-y border-[#172117]/10 dark:border-white/[0.08]">

              <HeroStat
                value="2026"
                label="Founded"
              />

              <HeroStat
                value="24/7"
                label="Intelligence"
              />

              <HeroStat
                value="360°"
                label="Visibility"
              />

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}

      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16">

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">

            <div className="lg:col-span-5">

              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#6F8D08] dark:text-[#ADD132] sm:text-xs">
                Who We Are
              </p>

              <h2 className="mt-5 text-[36px] font-black leading-[0.95] tracking-[-0.055em] text-[#152019] dark:text-white sm:text-5xl md:text-6xl">
                A new approach to
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  digital protection.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-7">

              <p className="text-[16px] leading-8 text-[#687368] dark:text-white/50 sm:text-lg sm:leading-9">
                The internet has transformed how content is created,
                distributed and consumed. At the same time, unauthorized
                copying, distribution and misuse can create significant
                challenges for digital businesses and content owners.
              </p>

              <p className="mt-6 text-[16px] leading-8 text-[#687368] dark:text-white/50 sm:text-lg sm:leading-9">
                TrackOwls is designed around visibility, intelligence and
                protection — helping organizations understand their digital
                environment and identify potential threats affecting their
                content and intellectual property.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION / VISION
      ========================================================== */}

      <section className="border-y border-[#172117]/10 bg-[#EDF3E8] py-20 dark:border-white/[0.06] dark:bg-white/[0.015] sm:py-24 md:py-28 lg:py-32">

        <div className="mx-auto max-w-[1500px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16">

          <div className="grid md:grid-cols-2">

            {/* Mission */}

            <div className="border-b border-[#172117]/10 pb-12 md:border-b-0 md:border-r md:pb-0 md:pr-12 lg:pr-16 dark:border-white/[0.08]">

              <div className="flex items-center gap-4">

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#ADD132]/10 text-[#6F8D08] dark:text-[#ADD132]">
                  <Target size={22} />
                </span>

                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#6F8D08] dark:text-[#ADD132]">
                  Our Mission
                </span>

              </div>

              <h3 className="mt-8 max-w-xl text-[32px] font-black leading-[1] tracking-[-0.045em] text-[#152019] dark:text-white sm:text-4xl md:text-5xl">
                Make digital protection
                <span className="text-[#789900] dark:text-[#ADD132]">
                  {" "}more intelligent.
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-[16px] leading-8 text-[#687368] dark:text-white/50 sm:text-lg sm:leading-9">
                Our mission is to help organizations gain better visibility
                into their digital footprint and build stronger protection
                around the content and intellectual property they value.
              </p>

            </div>

            {/* Vision */}

            <div className="pt-12 md:pl-12 md:pt-0 lg:pl-16">

              <div className="flex items-center gap-4">

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#ADD132]/10 text-[#6F8D08] dark:text-[#ADD132]">
                  <Eye size={22} />
                </span>

                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#6F8D08] dark:text-[#ADD132]">
                  Our Vision
                </span>

              </div>

              <h3 className="mt-8 max-w-xl text-[32px] font-black leading-[1] tracking-[-0.045em] text-[#152019] dark:text-white sm:text-4xl md:text-5xl">
                A safer
                <span className="text-[#789900] dark:text-[#ADD132]">
                  {" "}digital ecosystem.
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-[16px] leading-8 text-[#687368] dark:text-white/50 sm:text-lg sm:leading-9">
                We envision a digital environment where organizations can
                create, distribute and grow their digital assets with greater
                confidence and visibility.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          WHY TRACKOWLS
      ========================================================== */}

      <section className="relative overflow-hidden bg-white py-20 dark:bg-[#070A07] sm:py-24 lg:py-32">

        {/* Background accent */}
        <div className="pointer-events-none absolute right-[-180px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[#ADD132]/5 blur-[140px] dark:bg-[#ADD132]/[0.035]" />

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16">

          {/* Header */}

          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-7">

              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#6F8D08] dark:text-[#ADD132] sm:text-xs">
                Why TrackOwls
              </p>

              <h2 className="mt-5 max-w-4xl text-[40px] font-black leading-[0.92] tracking-[-0.055em] text-[#152019] dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Protection built around
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  visibility and trust.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5 lg:pb-2">

              <p className="max-w-xl text-[16px] leading-8 text-[#687368] dark:text-white/50 sm:text-lg sm:leading-9">
                TrackOwls combines monitoring, human review, authorization
                and transparent reporting into a structured protection
                workflow.
              </p>

            </div>

          </div>

          {/* Editorial list */}

          <div className="mt-14 border-t border-[#172117]/10 dark:border-white/[0.08] lg:mt-20">

            {whyTrackOwls.map((item) => (

              <div
                key={item.number}
                className="group grid gap-5 border-b border-[#172117]/10 py-8 transition-all duration-300 hover:bg-[#F7FAF4] dark:border-white/[0.08] dark:hover:bg-white/[0.015] sm:py-10 md:grid-cols-[90px_0.85fr_1.15fr] md:items-center md:gap-8 lg:py-12"
              >

                <div className="flex items-center gap-3">

                  <span className="text-[12px] font-black tracking-[0.18em] text-[#829082] dark:text-white/30">
                    {item.number}
                  </span>

                  <span className="h-px w-8 bg-[#ADD132]/50 transition-all duration-300 group-hover:w-12" />

                </div>

                <h3 className="text-[24px] font-black leading-tight tracking-[-0.035em] text-[#152019] dark:text-white sm:text-3xl lg:text-[34px]">
                  {item.title}
                </h3>

                <div className="flex items-start gap-4 md:justify-between">

                  <p className="max-w-2xl text-[15px] leading-7 text-[#667267] dark:text-white/55 sm:text-lg sm:leading-8">
                    {item.text}
                  </p>

                  <ArrowUpRight
                    size={22}
                    className="mt-1 hidden shrink-0 text-[#7A960F] opacity-30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 dark:text-[#ADD132] sm:block"
                  />

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          WHO WE PROTECT
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#F5F7F2] py-20 dark:bg-[#0A100D] sm:py-24 lg:py-32">

        <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[420px] w-[420px] rounded-full bg-[#ADD132]/5 blur-[130px] dark:bg-[#ADD132]/[0.025]" />

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16">

          {/* Header */}

          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-7">

              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#6F8D08] dark:text-[#ADD132] sm:text-xs">
                Who We Protect
              </p>

              <h2 className="mt-5 max-w-4xl text-[40px] font-black leading-[0.92] tracking-[-0.055em] text-[#152019] dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Protection across
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  digital industries.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="max-w-xl text-[16px] leading-8 text-[#687368] dark:text-white/50 sm:text-lg sm:leading-9">
                From entertainment and education to commerce and independent
                creators, TrackOwls is designed around the different ways
                digital assets can be misused online.
              </p>

            </div>

          </div>

          {/* Industry editorial grid */}

          <div className="mt-14 grid border-l border-t border-[#172117]/10 dark:border-white/[0.08] sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">

            {protectedIndustries.map((item) => (

              <div
                key={item.title}
                className="group relative min-h-[230px] border-b border-r border-[#172117]/10 p-7 transition-all duration-500 hover:bg-white dark:border-white/[0.08] dark:hover:bg-white/[0.018] sm:min-h-[250px] sm:p-9 lg:min-h-[280px] lg:p-10"
              >

                {/* Number */}

                <div className="flex items-center justify-between">

                  <span className="text-[11px] font-black tracking-[0.2em] text-[#829082] dark:text-white/30">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="text-[#7A960F] opacity-30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100 dark:text-[#ADD132]"
                  />

                </div>

                {/* Content */}

                <div className="mt-12">

                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7B857B] dark:text-white/30">
                    {item.short}
                  </p>

                  <h3 className="mt-3 text-[27px] font-black leading-none tracking-[-0.04em] text-[#152019] dark:text-white sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-[15px] leading-7 text-[#667267] dark:text-white/50 sm:text-base sm:leading-8">
                    {item.body}
                  </p>

                </div>

                {/* Bottom accent */}

                <div className="absolute bottom-0 left-7 h-[2px] w-0 bg-[#ADD132] transition-all duration-500 group-hover:w-12 sm:left-9 lg:left-10" />

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================== */}

      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">

        <div className="mx-auto max-w-[1500px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16">

          <div className="max-w-3xl">

            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#6F8D08] dark:text-[#ADD132] sm:text-xs">
              What We Do
            </p>

            <h2 className="mt-5 text-[40px] font-black leading-[0.92] tracking-[-0.055em] text-[#152019] dark:text-white sm:text-5xl md:text-6xl">
              Visibility. Intelligence.
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                Protection.
              </span>
            </h2>

          </div>

          {/* Capability editorial list */}

          <div className="mt-14 border-t border-[#172117]/10 dark:border-white/[0.08] lg:mt-20">

            {capabilities.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group grid gap-6 border-b border-[#172117]/10 py-9 dark:border-white/[0.08] sm:py-11 md:grid-cols-[80px_0.8fr_1.2fr] md:items-center md:gap-10 lg:py-14"
                >

                  <div className="flex items-center gap-3">

                    <span className="text-[11px] font-black tracking-[0.18em] text-[#829082] dark:text-white/30">
                      0{index + 1}
                    </span>

                    <Icon
                      size={20}
                      className="text-[#6F8D08] dark:text-[#ADD132]"
                    />

                  </div>

                  <h3 className="text-[27px] font-black tracking-[-0.04em] text-[#152019] dark:text-white sm:text-3xl lg:text-4xl">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-5">

                    <p className="max-w-2xl text-[15px] leading-7 text-[#687368] dark:text-white/50 sm:text-lg sm:leading-8">
                      {item.text}
                    </p>

                    <ArrowRight
                      size={21}
                      className="hidden shrink-0 text-[#7A960F] opacity-30 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 dark:text-[#ADD132] sm:block"
                    />

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================================================
          FOUNDING + COMPANY
      ========================================================== */}

      <section className="border-y border-[#172117]/10 bg-[#EDF3E8] py-20 dark:border-white/[0.06] dark:bg-white/[0.012] sm:py-24 md:py-28 lg:py-32">

        <div className="mx-auto max-w-[1500px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16">

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-20">

            <div className="lg:col-span-7">

              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#6F8D08] dark:text-[#ADD132] sm:text-xs">
                TrackOwls
              </p>

              <h2 className="mt-5 max-w-4xl text-[40px] font-black leading-[0.92] tracking-[-0.055em] text-[#152019] dark:text-white sm:text-5xl md:text-6xl">
                Building technology for
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  digital protection.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-[16px] leading-8 text-[#687368] dark:text-white/50 sm:text-lg sm:leading-9">
                Founded in 2026, TrackOwls Anti-Piracy Private Limited is
                developing solutions focused on digital content monitoring,
                anti-piracy, intellectual property protection and online
                threat visibility.
              </p>

              {/* Focus areas */}

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {[
                  "Anti-Piracy",
                  "Digital Intelligence",
                  "IP Protection",
                  "Online Monitoring",
                ].map((item, index) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-[#172117]/10 pb-4 dark:border-white/[0.08]"
                  >

                    <span className="text-[10px] font-black tracking-[0.18em] text-[#829082] dark:text-white/25">
                      0{index + 1}
                    </span>

                    <CheckCircle2
                      size={17}
                      className="text-[#6F8D08] dark:text-[#ADD132]"
                    />

                    <span className="text-sm font-bold text-[#445046] dark:text-white/65 sm:text-base">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Company information */}

            <div className="relative lg:col-span-5">

              <div className="border-t-2 border-[#ADD132] pt-7">

                <div className="flex items-end justify-between gap-5">

                  <div>

                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#778176] dark:text-white/30">
                      Established
                    </p>

                    <p className="mt-3 text-[68px] font-black leading-none tracking-[-0.07em] text-[#789900] dark:text-[#ADD132] sm:text-8xl">
                      2026
                    </p>

                  </div>

                  <CalendarDays
                    size={34}
                    strokeWidth={1.5}
                    className="mb-2 text-[#6F8D08] dark:text-[#ADD132]"
                  />

                </div>

                <div className="my-8 h-px bg-[#172117]/10 dark:bg-white/[0.08]" />

                <p className="text-lg font-black leading-7 text-[#364136] dark:text-white/80 sm:text-xl">
                  TrackOwls Anti-Piracy Private Limited
                </p>

                <p className="mt-2 text-sm text-[#7A857A] dark:text-white/35 sm:text-base">
                  Coimbatore, Tamil Nadu
                </p>

                <div className="mt-9 grid gap-7 sm:grid-cols-2">

                  <div className="border-l-2 border-[#ADD132]/40 pl-4">

                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#7B857B] dark:text-white/30">
                      Founder
                    </p>

                    <p className="mt-2 text-base font-black text-[#172017] dark:text-white">
                      P Dhanalakshmi
                    </p>

                  </div>

                  <div className="border-l-2 border-[#ADD132]/40 pl-4">

                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#7B857B] dark:text-white/30">
                      Co-Founder
                    </p>

                    <p className="mt-2 text-base font-black text-[#172017] dark:text-white">
                      Shamsath Begum
                    </p>

                  </div>

                </div>

                <div className="mt-9 flex items-center gap-3 border-t border-[#172117]/10 pt-5 dark:border-white/[0.08]">

                  <span className="h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_10px_#ADD132]" />

                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#6F8D08] dark:text-[#ADD132] sm:text-xs">
                    Digital Intelligence Platform
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}

      <section className="relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ADD132]/7 blur-[100px] dark:bg-[#ADD132]/5 sm:h-[450px] sm:w-[450px] sm:blur-[130px]" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-7">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#ADD132]/10 text-[#6F8D08] dark:text-[#ADD132] sm:h-16 sm:w-16">

            <Shield size={26} />

          </div>

          <h2 className="mt-7 text-[38px] font-black leading-[0.95] tracking-[-0.055em] text-[#152019] dark:text-white sm:text-5xl md:text-6xl">

            Protect your digital
            <br />

            <span className="text-[#789900] dark:text-[#ADD132]">
              future with TrackOwls.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-[#687368] dark:text-white/50 sm:text-lg sm:leading-9">
            Discover how TrackOwls can help your organization gain visibility
            and strengthen its digital protection strategy.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/request-demo"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#ADD132] px-7 py-4 text-sm font-black text-[#101800] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C7EB45] hover:shadow-xl hover:shadow-[#ADD132]/20"
            >
              Request a Demo
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#273326]/15 bg-white/60 px-7 py-4 text-sm font-bold text-[#364136] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ADD132]/40 hover:text-[#6F8D08] dark:border-white/10 dark:bg-white/[0.02] dark:text-white dark:hover:border-[#ADD132]/30 dark:hover:text-[#ADD132]"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

/* =============================================================
   HERO STAT
============================================================= */

function HeroStat({ value, label }) {
  return (
    <div className="border-r border-[#172117]/10 px-3 py-5 first:pl-0 last:border-r-0 dark:border-white/[0.08] sm:px-5 sm:py-6">

      <p className="text-[28px] font-black leading-none tracking-[-0.055em] text-[#172017] dark:text-white sm:text-3xl md:text-4xl">
        {value}
      </p>

      <p className="mt-2 text-[9px] font-black uppercase tracking-[0.18em] text-[#7B857B] dark:text-white/30 sm:text-[10px]">
        {label}
      </p>

    </div>
  );
}

export default About;