import React, { useEffect, useRef } from "react";

import Company from "../navpages/about/Company";
import WhatWeDo from "../navpages/about/WhatWeDo";
import WhoWeProtect from "../navpages/about/WhoWeProtect";
import WhoWeAre from "../navpages/about/WhoWeAre";
import VisionMission from "../navpages/about/VisionMission";
import WhyTrackOwls from "../navpages/about/WhyTrackowls";

function About() {
  const horizontalSectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = horizontalSectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const isMobile = () => window.innerWidth <= 768;

    const updateHeight = () => {
      if (isMobile()) {
        section.style.height = "auto";
        track.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const maxScroll =
        track.scrollWidth - window.innerWidth;

      section.style.height = `${window.innerHeight + maxScroll}px`;
    };

    const handleScroll = () => {
      if (isMobile()) return;

      const rect = section.getBoundingClientRect();

      const maxHorizontal =
        track.scrollWidth - window.innerWidth;

      if (maxHorizontal <= 0) return;

      /*
        Vertical scroll position inside the horizontal section
        becomes horizontal movement.
      */
      const progress = Math.min(
        Math.max(-rect.top / maxHorizontal, 0),
        1
      );

      const translateX = progress * maxHorizontal;

      track.style.transform = `translate3d(-${translateX}px, 0, 0)`;
    };

    const handleResize = () => {
      updateHeight();
      handleScroll();
    };

    updateHeight();
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="about-page bg-[#F7FAF4] text-[#152019] dark:bg-[#070A07] dark:text-white">

      {/* =========================================================
          ABOUT TYPOGRAPHY
      ========================================================= */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

          .about-manrope {
            font-family: 'Manrope', 'Inter', Arial, sans-serif;
          }

          .about-hero-title {
            font-family: 'Manrope', 'Inter', Arial, sans-serif;
            font-size: clamp(42px, 5vw, 70px);
            font-weight: 800;
            line-height: 0.91;
            letter-spacing: -0.065em;
          }

          /* =====================================================
             HORIZONTAL SCROLL AREA
          ===================================================== */

          .about-horizontal-section {
            position: relative;
            width: 100%;
          }

          .about-horizontal-sticky {
            position: sticky;
            top: 0;
            width: 100%;
            height: 100vh;
            overflow: hidden;
          }

          .about-horizontal-track {
            display: flex;
            width: max-content;
            height: 100%;
            will-change: transform;
            transform: translate3d(0, 0, 0);
          }

          .about-fixed-panel {
  flex: 0 0 100vw;
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 20;
}

          .about-moving-content {
            display: flex;
            flex: 0 0 auto;
            height: 100vh;
          }

        .about-moving-item {
  flex: 0 0 100vw;
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  overflow: hidden;
}

          /* =====================================================
             DESKTOP
          ===================================================== */

          @media (min-width: 769px) {
            .about-horizontal-section {
              display: block;
            }
          }

          /* =====================================================
             TABLET / MOBILE
          ===================================================== */

          @media (max-width: 768px) {
            .about-horizontal-section {
              height: auto !important;
            }

            .about-horizontal-sticky {
              position: relative;
              height: auto;
              overflow: visible;
            }

            .about-horizontal-track {
              display: block;
              width: 100%;
              height: auto;
              transform: none !important;
            }

            .about-fixed-panel {
              width: 100%;
              min-width: 0;
              height: auto;
            }

            .about-moving-content {
              display: block;
              height: auto;
            }

            .about-moving-item {
              width: 100%;
              min-width: 0;
              height: auto;
            }
          }

          @media (max-width: 640px) {
            .about-hero-title {
              font-size: clamp(36px, 10vw, 52px);
              line-height: 0.93;
              letter-spacing: -0.06em;
            }
          }
        `}
      </style>


      {/* =========================================================
          HORIZONTAL SCROLL EXPERIENCE
      ========================================================= */}

      <section
        ref={horizontalSectionRef}
        className="about-horizontal-section"
      >

        <div className="about-horizontal-sticky">

          <div
            ref={trackRef}
            className="about-horizontal-track"
          >

            {/* ===================================================
                FIXED ABOUT PANEL
            =================================================== */}

            <div className="about-fixed-panel">

              <section
                className="
                  relative
                  h-screen
                  overflow-hidden
                  bg-[#020502]
                "
              >

                {/* BACKGROUND VIDEO */}

                <video
                  src="/about-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                />


                {/* DARK OVERLAY */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-black/40
                  "
                />


                {/* LEFT GRADIENT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/80
                    via-black/40
                    to-black/10
                  "
                />


                {/* BOTTOM GRADIENT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-1/2
                    bg-gradient-to-t
                    from-black/70
                    via-black/20
                    to-transparent
                  "
                />


                {/* HERO CONTENT */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    items-center
                    px-8
                    md:px-10
                    lg:px-14
                  "
                >

                  <div className="max-w-[600px]">

                    {/* LABEL */}

                    <div className="mb-5 flex items-center gap-3">

                      <span
                        className="
                          h-px
                          w-10
                          bg-[#ADD132]
                          sm:w-14
                        "
                      />

                      <span
                        className="
                          about-manrope
                          text-[9px]
                          font-extrabold
                          uppercase
                          tracking-[0.3em]
                          text-[#ADD132]
                          sm:text-[10px]
                          md:text-[11px]
                        "
                      >
                        About TrackOwls
                      </span>

                    </div>


                    {/* TITLE */}

                    <h1
                      className="
                        about-hero-title
                        font-extrabold
                        text-white
                      "
                    >
                      Protecting the

                      <br />

                      <span className="text-[#ADD132]">
                        digital ecosystem.
                      </span>
                    </h1>


                    {/* SCROLL INDICATOR */}

                    <div
                      className="
                        mt-10
                        flex
                        items-center
                        gap-4
                        text-white/70
                      "
                    >

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/30
                        "
                      >
                        <span className="text-lg">
                          →
                        </span>
                      </div>

                      <span
                        className="
                          about-manrope
                          text-xs
                          uppercase
                          tracking-[0.2em]
                        "
                      >
                        Scroll to explore
                      </span>

                    </div>

                  </div>

                </div>

              </section>

            </div>


            {/* ===================================================
                MOVING CONTENT
            =================================================== */}

            <div className="about-moving-content">

              {/* =================================================
                  COMPANY
              ================================================= */}

              <div className="about-moving-item">
                <Company />
              </div>


              {/* =================================================
                  WHO WE ARE
              ================================================= */}

              <div className="about-moving-item">
                <WhoWeAre />
              </div>


              {/* =================================================
                  VISION / MISSION
              ================================================= */}

              <div className="about-moving-item">
                <VisionMission />
              </div>


              {/* =================================================
                  WHY TRACKOWLS
              ================================================= */}

              <div className="about-moving-item">
                <WhyTrackOwls />
              </div>


              {/* =================================================
                  WHAT WE DO
              ================================================= */}

              <div className="about-moving-item">
                <WhatWeDo />
              </div>


              {/* =================================================
                  WHO WE PROTECT
              ================================================= */}

              <div className="about-moving-item">
                <WhoWeProtect />
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;