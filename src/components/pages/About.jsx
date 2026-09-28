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
} from "lucide-react";

function About() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#070A07] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">

        {/* Grid */}
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

        <div
          className="
            pointer-events-none
            absolute
            -right-40
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
          <div className="max-w-4xl">

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
              About TrackOwls
            </div>

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
              Protecting the
              <br />
              <span className="text-[#ADD132]">
                digital ecosystem.
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
              TrackOwls Anti-Piracy Private Limited is focused
              on helping organizations discover, monitor and
              protect their digital content, intellectual
              property and online presence.
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="relative py-24 sm:py-28 lg:py-32">

        <div
          className="
            mx-auto
            max-w-[1500px]
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">

            {/* Left */}
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
                Who We Are
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
                A new approach to
                <span className="text-[#ADD132]">
                  {" "}digital protection.
                </span>
              </h2>

            </div>

            {/* Right */}
            <div className="lg:col-span-7">

              <p
                className="
                  text-base
                  leading-8
                  text-slate-400
                  sm:text-lg
                "
              >
                The internet has transformed how content is
                created, distributed and consumed. At the same
                time, unauthorized copying, distribution and
                misuse can create significant challenges for
                digital businesses and content owners.
              </p>

              <p
                className="
                  mt-6
                  text-base
                  leading-8
                  text-slate-400
                  sm:text-lg
                "
              >
                TrackOwls is designed around visibility,
                intelligence and protection — helping
                organizations understand their digital
                environment and identify potential threats
                affecting their content and intellectual property.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
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

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">

            {/* Mission */}
            <div className="bg-[#080B08] p-8 sm:p-12 lg:p-14">

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
                  bg-[#ADD132]/[0.06]
                  text-[#ADD132]
                "
              >
                <Target size={25} />
              </div>

              <p
                className="
                  mt-8
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#ADD132]
                "
              >
                Our Mission
              </p>

              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Make digital protection more intelligent.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Our mission is to help organizations gain
                better visibility into their digital footprint
                and build stronger protection around the
                content and intellectual property they value.
              </p>

            </div>

            {/* Vision */}
            <div className="bg-[#080B08] p-8 sm:p-12 lg:p-14">

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
                  bg-[#ADD132]/[0.06]
                  text-[#ADD132]
                "
              >
                <Eye size={25} />
              </div>

              <p
                className="
                  mt-8
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#ADD132]
                "
              >
                Our Vision
              </p>

              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                A safer digital ecosystem.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                We envision a digital environment where
                organizations can create, distribute and grow
                their digital assets with greater confidence
                and visibility.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
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

          <div className="max-w-2xl">

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#ADD132]
              "
            >
              What We Do
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
              Visibility. Intelligence.
              <br />
              <span className="text-[#ADD132]">
                Protection.
              </span>
            </h2>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
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
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-3xl
                    border
                    border-white/[0.07]
                    bg-white/[0.02]
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#ADD132]/20
                    hover:bg-[#ADD132]/[0.025]
                    sm:p-8
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#ADD132]/15
                      bg-[#ADD132]/[0.05]
                      text-[#ADD132]
                      transition
                      duration-300
                      group-hover:bg-[#ADD132]/10
                    "
                  >
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-7 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          FOUNDING
      ===================================================== */}
      <section className="border-y border-white/[0.06] py-24 sm:py-28 lg:py-32">

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
              grid
              gap-12
              lg:grid-cols-12
              lg:items-center
            "
          >

            <div className="lg:col-span-7">

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#ADD132]
                "
              >
                TrackOwls
              </p>

              <h2
                className="
                  mt-5
                  max-w-3xl
                  text-3xl
                  font-semibold
                  leading-tight
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Building technology for
                <span className="text-[#ADD132]">
                  {" "}digital protection.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-sm
                  leading-7
                  text-slate-500
                  sm:text-base
                "
              >
                Founded in 2026, TrackOwls Anti-Piracy Private
                Limited is developing solutions focused on
                digital content monitoring, anti-piracy,
                intellectual property protection and online
                threat visibility.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "Anti-Piracy",
                  "Digital Intelligence",
                  "IP Protection",
                  "Online Monitoring",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.025]
                      px-4
                      py-2.5
                      text-xs
                      text-slate-400
                    "
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#ADD132]"
                    />
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* Year Card */}
            <div className="lg:col-span-5">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#ADD132]/15
                  bg-[#ADD132]/[0.035]
                  p-8
                  sm:p-10
                "
              >

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-56
                    w-56
                    rounded-full
                    bg-[#ADD132]/10
                    blur-[80px]
                  "
                />

                <div className="relative">

                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Established
                  </p>

                  <p
                    className="
                      mt-3
                      text-7xl
                      font-semibold
                      tracking-[-0.06em]
                      text-[#ADD132]
                    "
                  >
                    2026
                  </p>

                  <div className="mt-7 h-px bg-white/[0.08]" />

                  <p className="mt-6 text-sm leading-6 text-slate-400">
                    TrackOwls Anti-Piracy Private Limited
                  </p>

                  <p className="mt-2 text-xs text-slate-600">
                    Coimbatore, Tamil Nadu
                  </p>

                </div>

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

          <h2
            className="
              mt-7
              text-3xl
              font-semibold
              tracking-tight
              sm:text-4xl
              lg:text-5xl
            "
          >
            Protect your digital
            <br />
            <span className="text-[#ADD132]">
              future with TrackOwls.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Discover how TrackOwls can help your organization
            gain visibility and strengthen its digital protection
            strategy.
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

export default About;