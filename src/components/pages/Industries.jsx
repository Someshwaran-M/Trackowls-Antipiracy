import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Film,
  Gamepad2,
  GraduationCap,
  ShoppingBag,
  Building2,
  Newspaper,
  Music,
  Globe,
  ScanSearch,
  CheckCircle2,
} from "lucide-react";

function Industries() {
  const industries = [
    {
      icon: Film,
      title: "Media & Entertainment",
      description:
        "Support the protection of films, series, video content and other digital entertainment assets from unauthorized distribution.",
      tags: ["Content Protection", "Piracy Monitoring", "Digital Discovery"],
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description:
        "Improve visibility around gaming content, digital releases, assets and unauthorized online distribution.",
      tags: ["Game Content", "Asset Monitoring", "Threat Detection"],
    },
    {
      icon: Music,
      title: "Music",
      description:
        "Monitor digital environments for unauthorized availability and distribution of music and related digital assets.",
      tags: ["Music Monitoring", "Content Discovery", "IP Protection"],
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce & Brands",
      description:
        "Help brands identify unauthorized digital activity and gain visibility into their online presence.",
      tags: ["Brand Protection", "Online Monitoring", "IP Visibility"],
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Support educational organizations and content owners in monitoring the digital distribution of valuable learning content.",
      tags: ["Content Monitoring", "IP Protection", "Digital Visibility"],
    },
    {
      icon: Newspaper,
      title: "Publishing & News",
      description:
        "Help publishers and media organizations understand how their digital content is distributed and reused online.",
      tags: ["Content Discovery", "Digital Monitoring", "IP Protection"],
    },
    {
      icon: Building2,
      title: "Enterprise",
      description:
        "Provide organizations with digital intelligence to understand and monitor activity surrounding their valuable assets.",
      tags: ["Digital Intelligence", "Monitoring", "Threat Visibility"],
    },
    {
      icon: Globe,
      title: "Digital Platforms",
      description:
        "Support digital businesses with broader visibility into online activity, content usage and potential threats.",
      tags: ["Platform Monitoring", "Threat Detection", "Digital Intelligence"],
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#070A07] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">

        {/* Background Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(173,209,50,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(173,209,50,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#ADD132]/[0.06]
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            bottom-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#ADD132]/[0.05]
            blur-[130px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[1500px]
            px-5
            pb-20
            pt-20
            sm:px-8
            lg:px-12
            lg:pb-28
            lg:pt-28
          "
        >
          <div className="max-w-5xl">

            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#ADD132]/20
                bg-[#ADD132]/[0.05]
                px-4
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#ADD132]
                sm:text-xs
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#ADD132]" />
              Industries We Protect
            </div>

            {/* Heading */}
            <h1
              className="
                mt-7
                text-5xl
                font-semibold
                leading-[1.02]
                tracking-[-0.04em]
                sm:text-6xl
                lg:text-8xl
              "
            >
              Protection for
              <br />
              <span className="text-[#ADD132]">
                every digital industry.
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-slate-400
                sm:text-lg
                sm:leading-8
              "
            >
              Digital content and intellectual property are
              valuable across every industry. TrackOwls helps
              organizations gain visibility into online activity
              and protect the digital assets that matter to them.
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="py-24 sm:py-28 lg:py-32">

        <div
          className="
            mx-auto
            max-w-[1500px]
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">

            <div className="lg:col-span-5">

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#ADD132]
                "
              >
                Digital Protection Across Industries
              </p>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Every industry has
                <span className="text-[#ADD132]">
                  {" "}digital assets.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-7">

              <p
                className="
                  text-base
                  leading-8
                  text-slate-400
                  sm:text-lg
                "
              >
                From entertainment and gaming to education,
                publishing and enterprise, organizations are
                increasingly dependent on digital content and
                intellectual property.
              </p>

              <p
                className="
                  mt-6
                  text-base
                  leading-8
                  text-slate-500
                  sm:text-lg
                "
              >
                TrackOwls provides monitoring and intelligence
                capabilities that can be adapted to different
                digital environments and organizational needs.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          INDUSTRIES GRID
      ===================================================== */}
      <section
        className="
          border-y
          border-white/[0.06]
          bg-white/[0.015]
          py-24
          sm:py-28
          lg:py-32
        "
      >

        <div
          className="
            mx-auto
            max-w-[1500px]
            px-5
            sm:px-8
            lg:px-12
          "
        >

          {/* Heading */}
          <div className="max-w-3xl">

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#ADD132]
              "
            >
              Industry Solutions
            </p>

            <h2
              className="
                mt-5
                text-3xl
                font-semibold
                tracking-tight
                sm:text-4xl
                lg:text-5xl
              "
            >
              Built around the way
              <span className="text-[#ADD132]">
                {" "}your industry works.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Explore how digital monitoring, content discovery
              and protection capabilities can support different
              types of organizations.
            </p>

          </div>

          {/* Cards */}
          <div
            className="
              mt-14
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-4
            "
          >

            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/[0.07]
                    bg-[#080B08]
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#ADD132]/25
                    hover:bg-[#ADD132]/[0.025]
                    sm:p-8
                  "
                >

                  {/* Top Line */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-px
                      w-0
                      bg-[#ADD132]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#ADD132]/15
                      bg-[#ADD132]/[0.05]
                      text-[#ADD132]
                      transition
                      duration-500
                      group-hover:border-[#ADD132]/30
                      group-hover:bg-[#ADD132]/10
                    "
                  >
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 text-lg font-semibold">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {industry.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 space-y-2.5">

                    {industry.tags.map((tag) => (
                      <div
                        key={tag}
                        className="
                          flex
                          items-center
                          gap-2
                          text-xs
                          text-slate-400
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-[#ADD132]
                          "
                        />

                        {tag}
                      </div>
                    ))}

                  </div>

                  {/* Explore */}
                  <div
                    className="
                      mt-7
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      text-[#ADD132]
                      opacity-70
                      transition
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    Explore Industry
                    <ArrowUpRight
                      size={14}
                      className="
                        transition
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          INDUSTRY INTELLIGENCE
      ===================================================== */}
      <section className="py-24 sm:py-28 lg:py-32">

        <div
          className="
            mx-auto
            max-w-[1500px]
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Visual */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/[0.07]
                bg-[#080B08]
                p-7
                sm:p-10
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-80
                  w-80
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#ADD132]/[0.06]
                  blur-[100px]
                "
              />

              <div className="relative">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                      Industry Intelligence
                    </p>

                    <p className="mt-2 text-lg font-semibold">
                      Digital Protection
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#ADD132]/10
                      text-[#ADD132]
                    "
                  >
                    <ScanSearch size={19} />
                  </div>

                </div>

                {/* Signal Visualization */}
                <div className="mt-10 space-y-5">

                  {[
                    ["CONTENT", "Digital Assets", "84%"],
                    ["BRAND", "Online Presence", "72%"],
                    ["IP", "Protected Assets", "91%"],
                    ["THREATS", "Detection Visibility", "78%"],
                  ].map(([label, title, value]) => (
                    <div key={label}>

                      <div className="flex items-center justify-between">

                        <div>
                          <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                            {label}
                          </p>

                          <p className="mt-1 text-xs font-medium text-slate-300">
                            {title}
                          </p>
                        </div>

                        <span className="text-xs font-semibold text-[#ADD132]">
                          {value}
                        </span>

                      </div>

                      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.06]">

                        <div
                          className="h-full rounded-full bg-[#ADD132]"
                          style={{
                            width: value,
                          }}
                        />

                      </div>

                    </div>
                  ))}

                </div>

              </div>
            </div>

            {/* Content */}
            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#ADD132]
                "
              >
                Industry Intelligence
              </p>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-semibold
                  leading-tight
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Different industries.
                <br />
                <span className="text-[#ADD132]">
                  Different digital risks.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-slate-500
                  sm:text-base
                "
              >
                Digital protection requirements can vary
                significantly between industries. TrackOwls
                focuses on providing flexible monitoring and
                intelligence capabilities that can support
                different digital environments.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Industry-focused monitoring",
                  "Digital asset visibility",
                  "Content discovery",
                  "Threat intelligence",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#ADD132]"
                    />

                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          GLOBAL COVERAGE
      ===================================================== */}
      <section
        className="
          border-y
          border-white/[0.06]
          bg-white/[0.015]
          py-24
          sm:py-28
          lg:py-32
        "
      >

        <div
          className="
            mx-auto
            max-w-[1500px]
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-[#ADD132]/10
              bg-[#ADD132]/[0.025]
              p-8
              sm:p-12
              lg:p-16
            "
          >

            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-96
                w-96
                rounded-full
                bg-[#ADD132]/10
                blur-[120px]
              "
            />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#ADD132]/20
                    bg-[#ADD132]/10
                    text-[#ADD132]
                  "
                >
                  <Globe size={25} />
                </div>

                <p
                  className="
                    mt-7
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#ADD132]
                  "
                >
                  Digital Ecosystem
                </p>

                <h2
                  className="
                    mt-4
                    text-3xl
                    font-semibold
                    leading-tight
                    sm:text-4xl
                  "
                >
                  Protect your digital
                  <span className="text-[#ADD132]">
                    {" "}presence wherever it lives.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  From digital content platforms to online
                  channels, visibility can help organizations
                  understand how their assets are being used
                  across the internet.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-3">

                {[
                  "Content",
                  "Brands",
                  "Intellectual Property",
                  "Digital Assets",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      min-h-[120px]
                      items-end
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#080B08]
                      p-5
                      transition
                      duration-300
                      hover:border-[#ADD132]/20
                    "
                  >
                    <div>

                      <div className="h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_12px_#ADD132]" />

                      <p className="mt-4 text-sm font-semibold">
                        {item}
                      </p>

                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="py-24 sm:py-28 lg:py-32">

        <div
          className="
            mx-auto
            max-w-4xl
            px-5
            text-center
            sm:px-8
          "
        >

          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-[#ADD132]/20
              bg-[#ADD132]/10
              text-[#ADD132]
            "
          >
            <Shield size={26} />
          </div>

          <p
            className="
              mt-7
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#ADD132]
            "
          >
            Industry Protection
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-semibold
              tracking-tight
              sm:text-4xl
              lg:text-5xl
            "
          >
            Your industry is digital.
            <br />
            <span className="text-[#ADD132]">
              Your protection should be too.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Connect with TrackOwls to explore digital monitoring
            and protection capabilities for your organization.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/request-demo"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#ADD132]
                px-7
                py-4
                text-sm
                font-bold
                text-black
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#C7EB45]
                hover:shadow-xl
                hover:shadow-[#ADD132]/20
              "
            >
              Request a Demo
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/10
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:border-[#ADD132]/30
                hover:text-[#ADD132]
              "
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Industries;