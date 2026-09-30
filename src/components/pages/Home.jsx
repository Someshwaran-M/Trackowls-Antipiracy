import React, { useEffect, useRef } from "react";

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

import AntiPiracyAnimation from "../animations/AntiPiracyAnimation";
import HomeTech from "./HomeTech";
import Plan from "./Plan";

/* =========================================================
   VIEWPORT REVEAL
========================================================= */

function Reveal({ children, className = "", delay = 0 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("track-reveal-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`track-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  return (
    <main
      className="
        relative
        w-full
        max-w-full
        overflow-x-hidden
        bg-[#F8FAF5]
        font-['Roboto',sans-serif]
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
          flex
          min-h-[calc(100svh-72px)]
          items-center
          overflow-hidden
          bg-[url('/home-light.png')]
          bg-cover
          bg-center
          bg-no-repeat
          dark:bg-[url('/home-dark.png')]
          sm:min-h-[calc(100svh-90px)]
        "
      >
        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-[#F7FAF3]/45
            dark:bg-[#050805]/35
          "
        />

        {/* Main background glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-[65%]
            top-[20%]
            h-[260px]
            w-[260px]
            -translate-x-1/2
            rounded-full
            bg-[#ADD132]/10
            blur-[80px]
            sm:h-[340px]
            sm:w-[340px]
            sm:blur-[100px]
            md:h-[420px]
            md:w-[420px]
            lg:h-[520px]
            lg:w-[520px]
            lg:blur-[140px]
          "
        />

        {/* Bottom glow */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[100px]
            -left-[100px]
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#ADD132]/[0.06]
            blur-[100px]
            md:h-[400px]
            md:w-[400px]
          "
        />

        {/* =================================================
            HERO CONTAINER
        ================================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            w-full
            max-w-[1480px]
            items-center
            gap-10
            px-5
            py-14
            sm:px-7
            sm:py-16
            md:px-10
            md:py-20
            lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)]
            lg:gap-12
            lg:px-12
            lg:py-24
            xl:grid-cols-[minmax(0,820px)_minmax(400px,1fr)]
            xl:gap-16
            xl:px-16
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="w-full max-w-[820px]">
            {/* Eyebrow */}

            <Reveal>
              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                  sm:mb-6
                "
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span
                    className="
                      absolute
                      inset-0
                      animate-ping
                      rounded-full
                      bg-[#ADD132]
                      opacity-60
                    "
                  />

                  <span
                    className="
                      relative
                      h-2
                      w-2
                      rounded-full
                      bg-[#ADD132]
                    "
                  />
                </span>

                <span
                  className="
                    text-[11px]
                    font-black
                    uppercase
                    tracking-[0.16em]
                    text-[#658800]
                    dark:text-[#ADD132]
                    sm:text-xs
                    sm:tracking-[0.18em]
                  "
                >
                  Scan. Detect. Remove. Protect.
                </span>
              </div>
            </Reveal>

            {/* Heading */}

            <Reveal delay={80}>
              <h1
                className="
                  max-w-3xl
                  text-[34px]
                  font-black
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-[#152019]
                  dark:text-white
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
              >
                Rights In.
                <br />

                <span className="text-[#6D900B] dark:text-[#ADD132]">
                  Piracy Out.
                </span>
              </h1>
            </Reveal>

            {/* Description */}

            <Reveal delay={160}>
              <div
                className="
                  mt-6
                  flex
                  max-w-[680px]
                  items-start
                  gap-4
                  sm:mt-7
                  lg:mt-8
                "
              >
                <div
                  className="
                    mt-1
                    h-[64px]
                    w-[2px]
                    shrink-0
                    rounded-full
                    bg-[#ADD132]
                    sm:h-[66px]
                  "
                />

                <p
                  className="
                    text-[14px]
                    font-normal
                    leading-[1.75]
                    text-[#5E6A62]
                    dark:text-white/60
                    sm:text-[15px]
                    sm:leading-7
                    lg:text-base
                  "
                >
                  TrackOwls finds pirated copies of your movies, music,
                  sports and courses, and fake sites or accounts using your
                  brand. Then we get them taken down.
                </p>
              </div>
            </Reveal>

            {/* Capabilities */}

            <Reveal delay={240}>
              <div
                className="
                  mt-7
                  grid
                  gap-5
                  sm:grid-cols-2
                  sm:gap-6
                  md:mt-8
                  lg:mt-9
                "
              >
                {/* Find pirated content */}

                <div className="group flex min-w-0 items-center gap-3.5">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#ADD132]/35
                      bg-white/50
                      text-[#6F9500]
                      shadow-[0_8px_30px_rgba(100,130,20,0.06)]
                      backdrop-blur-md
                      transition-all
                      duration-300
                      dark:bg-black/20
                      dark:text-[#ADD132]
                      sm:h-[52px]
                      sm:w-[52px]
                      lg:h-14
                      lg:w-14
                      group-hover:border-[#ADD132]/60
                      group-hover:bg-[#ADD132]/10
                    "
                  >
                    <ScanSearch
                      size={21}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[14px]
                        font-black
                        leading-5
                        text-[#172018]
                        dark:text-white
                        sm:text-[15px]
                      "
                    >
                      Find Pirated Content
                    </p>

                    <p
                      className="
                        mt-1
                        text-[12px]
                        leading-5
                        text-[#707B73]
                        dark:text-white/45
                        sm:text-[13px]
                      "
                    >
                      Discover unauthorized copies
                    </p>
                  </div>
                </div>

                {/* Protect rights */}

                <div className="group flex min-w-0 items-center gap-3.5">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#ADD132]/35
                      bg-white/50
                      text-[#6F9500]
                      shadow-[0_8px_30px_rgba(100,130,20,0.06)]
                      backdrop-blur-md
                      transition-all
                      duration-300
                      dark:bg-black/20
                      dark:text-[#ADD132]
                      sm:h-[52px]
                      sm:w-[52px]
                      lg:h-14
                      lg:w-14
                      group-hover:border-[#ADD132]/60
                      group-hover:bg-[#ADD132]/10
                    "
                  >
                    <ShieldCheck
                      size={21}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[14px]
                        font-black
                        leading-5
                        text-[#172018]
                        dark:text-white
                        sm:text-[15px]
                      "
                    >
                      Protect Your Rights
                    </p>

                    <p
                      className="
                        mt-1
                        text-[12px]
                        leading-5
                        text-[#707B73]
                        dark:text-white/45
                        sm:text-[13px]
                      "
                    >
                      Remove threats and protect your content
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Buttons */}

            <Reveal delay={320}>
              <div
                className="
                  mt-8
                  flex
                  w-full
                  flex-col
                  gap-3
                  sm:w-auto
                  sm:flex-row
                  lg:mt-9
                "
              >
                <Link
                  to="/request-demo"
                  className="
                    group
                    flex
                    min-h-[52px]
                    w-full
                    items-center
                    justify-between
                    gap-4
                    rounded-full
                    bg-[#ADD132]
                    py-1.5
                    pl-5
                    pr-1.5
                    text-[13px]
                    font-black
                    text-[#101600]
                    shadow-[0_10px_30px_rgba(173,209,50,0.12)]
                    transition-all
                    duration-300
                    active:scale-[0.98]
                    sm:w-fit
                    sm:min-w-[165px]
                    sm:pl-6
                    hover:-translate-y-1
                    hover:bg-[#BDE640]
                    hover:shadow-[0_18px_50px_rgba(173,209,50,0.25)]
                  "
                >
                  <span>Request a free piracy audit</span>

                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#17200F]
                      text-white
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="
                    group
                    flex
                    min-h-[52px]
                    w-full
                    items-center
                    justify-between
                    gap-4
                    rounded-full
                    border
                    border-black/10
                    bg-white/50
                    px-5
                    text-[13px]
                    font-bold
                    text-[#172019]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    active:scale-[0.98]
                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:text-white
                    sm:w-fit
                    sm:min-w-[185px]
                    sm:px-6
                    hover:-translate-y-1
                    hover:border-[#ADD132]/50
                    hover:bg-[#ADD132]/10
                    dark:hover:bg-white/[0.08]
                  "
                >
                  <span>Report piracy</span>

                  <ArrowRight
                    size={16}
                    className="
                      shrink-0
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </Reveal>

            {/* Tags */}

            <Reveal delay={400}>
              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-x-4
                  gap-y-2.5
                  sm:mt-8
                  sm:gap-x-5
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
                      gap-2
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.1em]
                      text-[#737F76]
                      dark:text-white/40
                      sm:text-[11px]
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

                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* =================================================
              RIGHT SIDE - SEPARATE CODED ANIMATION
          ================================================= */}

          <Reveal
            delay={180}
            className="
              flex
              w-full
              items-center
              justify-center
              lg:justify-end
            "
          >
            <AntiPiracyAnimation />
          </Reveal>
        </div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <div
          className="
            absolute
            bottom-6
            left-1/2
            z-20
            hidden
            -translate-x-1/2
            items-center
            gap-3
            lg:flex
          "
        >
          <span
            className="
              text-[10px]
              font-black
              uppercase
              tracking-[0.2em]
              text-black/35
              dark:text-white/30
            "
          >
            Scroll to explore
          </span>

          <ArrowRight
            size={14}
            className="
              animate-[track-scroll-arrow_1.5s_ease-in-out_infinite]
              text-[#719800]
              dark:text-[#ADD132]
            "
          />
        </div>
      </section>


      <HomeAbout />

      <ThreatIntelligence />

      <HomeTech />

      <Connect />

      <ProtectionEcosystem />

      <IntelligentStatement />

      <ProductionFlow />

      <Plan />

      <ClientReviews />

      <Faq />

      {/* =====================================================
          HOME ANIMATIONS
      ===================================================== */}

      <style>{`
        /* ================================================
           REVEAL
        ================================================= */

        .track-reveal,
        .track-reveal *,
        button,
        a,
        input,
        textarea,
        select {
          font-family: "Roboto", sans-serif;
        }

        .track-reveal {
          opacity: 0;
          transform: translate3d(0, 24px, 0);
          transition:
            opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .track-reveal-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        /* ================================================
           SCROLL ARROW
        ================================================= */

        @keyframes track-scroll-arrow {
          0%,
          100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(5px);
          }
        }

        /* ================================================
           MOBILE
        ================================================= */

        @media (max-width: 639px) {
          section {
            scroll-margin-top: 78px;
          }

          html {
            -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
          }

          .track-reveal {
            transform: translate3d(0, 18px, 0);
            transition:
              opacity 550ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 550ms cubic-bezier(0.16, 1, 0.3, 1);
          }

          .track-reveal-visible {
            transform: translate3d(0, 0, 0);
          }
        }

        /* ================================================
           TABLET
        ================================================= */

        @media (min-width: 640px) and (max-width: 1023px) {
          section {
            scroll-margin-top: 90px;
          }
        }

        /* ================================================
           TOUCH
        ================================================= */

        @media (hover: none) and (pointer: coarse) {
          .track-reveal {
            backface-visibility: hidden;
          }
        }

        /* ================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .track-reveal,
          .track-reveal-visible {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}

export default Home;