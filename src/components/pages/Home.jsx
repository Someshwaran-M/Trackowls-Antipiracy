import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import ThreatIntelligence from "./ThreatIntelligence";
import Connect from "./Connect";
import ProtectionEcosystem from "./ProtectionEcosystem";
import IntelligentStatement from "./IntelligentStatement";
import HomeAbout from "./HomeAbout";
import ClientReviews from "./ClientReviews";
import Faq from "./Faq";
import ProductionFlow from "./ProtectionFlow";

function Home() {
  return (
    <main
      className="
        relative
        w-full
        max-w-full
        overflow-x-hidden
        overflow-y-visible
        bg-[#F8FAF5]
        text-[#101610]
        dark:bg-[#050805]
        dark:text-white
      "
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          min-h-[calc(100svh-72px)]
          overflow-hidden
          bg-cover
          bg-center
          bg-no-repeat
          bg-[url('/home-light.png')]
          dark:bg-[url('/home-dark.png')]
          sm:min-h-[calc(100vh-90px)]
        "
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-[#F7FAF3]/45 dark:bg-[#050805]/35" />

        {/* Atmospheric glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-[55%]
            top-[15%]
            h-[220px]
            w-[220px]
            -translate-x-1/2
            rounded-full
            bg-[#ADD132]/10
            blur-[70px]
            sm:h-[320px]
            sm:w-[320px]
            sm:blur-[90px]
            md:h-[400px]
            md:w-[400px]
            md:blur-[110px]
            lg:h-[500px]
            lg:w-[500px]
            lg:blur-[130px]
          "
        />

        {/* Hero content */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[calc(100svh-72px)]
            w-full
            max-w-[1500px]
            items-center
            px-4
            py-8
            sm:min-h-[calc(100vh-90px)]
            sm:px-7
            sm:py-10
            md:px-9
            md:py-12
            lg:px-12
            lg:py-14
            xl:px-16
          "
        >
          <div className="w-full max-w-[850px]">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-2.5 md:mb-6">
              <span className="relative flex h-1.5 w-1.5 shrink-0 sm:h-2 sm:w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#ADD132] opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#ADD132] sm:h-2 sm:w-2" />
              </span>

              <span
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.16em]
                  text-[#658800]
                  dark:text-[#ADD132]
                  sm:text-[9px]
                  sm:tracking-[0.2em]
                  md:text-[10px]
                  md:tracking-[0.24em]
                "
              >
                Digital Anti-Piracy Intelligence
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="
                max-w-[900px]
                text-[34px]
                font-black
                leading-[1]
                tracking-[-0.045em]
                text-[#0C120D]
                dark:text-white
                sm:text-[46px]
                sm:leading-[0.98]
                md:text-[58px]
                lg:text-[78px]
                xl:text-[96px]
              "
            >
              Protect your
              <span className="block text-[#79A400] dark:text-[#ADD132]">
                digital world.
              </span>
            </h1>

            {/* Description */}
            <div
              className="
                mt-5
                flex
                max-w-[720px]
                gap-3
                sm:mt-6
                sm:gap-3.5
                md:mt-7
                md:gap-4
                lg:mt-8
              "
            >
              <div
                className="
                  mt-0.5
                  h-[48px]
                  w-[2px]
                  shrink-0
                  bg-[#ADD132]
                  sm:h-[54px]
                  md:h-[60px]
                  lg:h-[64px]
                "
              />

              <p
                className="
                  max-w-[650px]
                  text-[12px]
                  font-medium
                  leading-5
                  text-[#5E6A62]
                  dark:text-white/60
                  sm:text-[13px]
                  sm:leading-6
                  md:text-[14px]
                  lg:text-[15px]
                "
              >
                TrackOwls helps businesses discover, monitor and detect
                unauthorized digital content, protecting valuable intellectual
                property across the constantly changing online ecosystem.
              </p>
            </div>

            {/* Protection capabilities */}
            <div
              className="
                mt-5
                grid
                gap-3
                sm:mt-6
                sm:grid-cols-2
                sm:gap-4
                md:mt-7
                md:gap-5
                lg:mt-8
                lg:gap-6
              "
            >
              {/* Capability 1 */}
              <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#ADD132]/40
                    bg-white/40
                    text-[#6F9500]
                    backdrop-blur-md
                    dark:bg-black/20
                    dark:text-[#ADD132]
                    sm:h-10
                    sm:w-10
                    md:h-11
                    md:w-11
                    lg:h-12
                    lg:w-12
                  "
                >
                  <ScanSearch
                    size={17}
                    strokeWidth={1.5}
                    className="sm:h-[18px] sm:w-[18px] md:h-5 md:w-5"
                  />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      text-[11px]
                      font-black
                      leading-4
                      text-[#172018]
                      dark:text-white
                      sm:text-[12px]
                      sm:leading-5
                      md:text-[13px]
                      lg:text-[14px]
                    "
                  >
                    Detect Digital Threats
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[9px]
                      leading-4
                      text-[#707B73]
                      dark:text-white/40
                      sm:text-[10px]
                      md:text-[11px]
                      lg:text-xs
                    "
                  >
                    Identify unauthorized content
                  </p>
                </div>
              </div>

              {/* Capability 2 */}
              <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#ADD132]/40
                    bg-white/40
                    text-[#6F9500]
                    backdrop-blur-md
                    dark:bg-black/20
                    dark:text-[#ADD132]
                    sm:h-10
                    sm:w-10
                    md:h-11
                    md:w-11
                    lg:h-12
                    lg:w-12
                  "
                >
                  <ShieldCheck
                    size={17}
                    strokeWidth={1.5}
                    className="sm:h-[18px] sm:w-[18px] md:h-5 md:w-5"
                  />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      text-[11px]
                      font-black
                      leading-4
                      text-[#172018]
                      dark:text-white
                      sm:text-[12px]
                      sm:leading-5
                      md:text-[13px]
                      lg:text-[14px]
                    "
                  >
                    Protect Your IP
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[9px]
                      leading-4
                      text-[#707B73]
                      dark:text-white/40
                      sm:text-[10px]
                      md:text-[11px]
                      lg:text-xs
                    "
                  >
                    Turn intelligence into protection
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div
              className="
                mt-5
                flex
                w-full
                flex-col
                gap-2
                sm:mt-6
                sm:flex-row
                sm:gap-3
                md:mt-7
                lg:mt-8
              "
            >
              {/* Technology */}
              <Link
                to="/technology"
                className="
                  group
                  flex
                  h-[46px]
                  w-full
                  items-center
                  justify-between
                  gap-4
                  rounded-full
                  bg-[#ADD132]
                  pl-4
                  pr-1.5
                  text-[11px]
                  font-black
                  text-[#101600]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-[#BDE640]
                  hover:shadow-[0_20px_60px_rgba(173,209,50,0.3)]
                  sm:h-[50px]
                  sm:w-fit
                  sm:min-w-[135px]
                  sm:pl-5
                  sm:text-[12px]
                  md:h-[54px]
                  md:min-w-[145px]
                  md:pl-6
                  lg:h-[58px]
                  lg:min-w-[155px]
                "
              >
                <span>Technology</span>

                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#17200F]
                    text-white
                    transition-transform
                    duration-500
                    group-hover:rotate-45
                    sm:h-9
                    sm:w-9
                    md:h-10
                    md:w-10
                    lg:h-11
                    lg:w-11
                  "
                >
                  <ArrowUpRight size={15} />
                </span>
              </Link>

              {/* Solutions */}
              <Link
                to="/solutions"
                className="
                  group
                  flex
                  h-[46px]
                  w-full
                  items-center
                  justify-between
                  gap-3
                  rounded-full
                  border
                  border-black/10
                  bg-white/40
                  px-4
                  text-[11px]
                  font-bold
                  text-[#172019]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-[#ADD132]/50
                  hover:bg-[#ADD132]
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white
                  dark:hover:bg-white/[0.08]
                  sm:h-[50px]
                  sm:w-fit
                  sm:px-5
                  sm:text-[12px]
                  md:h-[54px]
                  md:px-6
                  lg:h-[58px]
                  lg:px-7
                "
              >
                <span>Explore Protection</span>

                <ArrowRight
                  size={14}
                  className="
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* Intelligence tags */}
            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-x-3
                gap-y-1.5
                sm:mt-6
                sm:gap-x-4
                sm:gap-y-2
                md:mt-7
                md:gap-x-5
                lg:mt-8
                lg:gap-x-6
              "
            >
              {[
                "Monitoring",
                "Threat Detection",
                "IP Protection",
                "Digital Intelligence",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-[7px]
                    font-black
                    uppercase
                    tracking-[0.1em]
                    text-[#7A857D]
                    dark:text-white/35
                    sm:gap-2
                    sm:text-[8px]
                    sm:tracking-[0.12em]
                    md:text-[9px]
                    md:tracking-[0.14em]
                  "
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ADD132]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator - tablet/desktop */}
        <div
          className="
            absolute
            bottom-5
            left-1/2
            z-20
            hidden
            -translate-x-1/2
            items-center
            gap-3
            md:flex
          "
        >
          <span
            className="
              text-[7px]
              font-black
              uppercase
              tracking-[0.22em]
              text-black/35
              dark:text-white/30
            "
          >
            Scroll to explore
          </span>

          <ArrowRight
            size={12}
            className="text-[#719800] dark:text-[#ADD132]"
          />
        </div>
      </section>

      {/* =====================================================
          HOME SECTIONS
      ===================================================== */}

      <HomeAbout />

      <ThreatIntelligence />

      <Connect />

      <ProtectionEcosystem />

      <IntelligentStatement />

      <ProductionFlow />

      <ClientReviews />

      <Faq />

      {/* =====================================================
          ANIMATION
      ===================================================== */}

      <style>{`
        @keyframes trackowls-scan {
          0% {
            transform: translateX(-120px);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateX(900px);
            opacity: 0;
          }
        }

        /* Prevent accidental horizontal overflow */
        html,
        body {
          max-width: 100%;
          overflow-x: hidden;
        }

        @media (max-width: 639px) {
          section {
            scroll-margin-top: 72px;
          }

          h1,
          h2,
          h3,
          p {
            max-width: 100%;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          section {
            scroll-margin-top: 90px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}

export default Home;