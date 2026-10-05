import React, { useEffect, useState } from "react";
import { Target, Eye, ArrowRight } from "lucide-react";

const VisionMission = () => {
  const [activeCard, setActiveCard] = useState("mission");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((current) =>
        current === "mission" ? "vision" : "mission"
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative overflow-hidden
        bg-[#F7F9F4]
        py-20
        text-[#152019]
        dark:bg-[#070A07]
        dark:text-white
        sm:py-24
        md:py-28
        lg:py-32
      "
    >
      <style>
        {`
          /* =========================================================
             VISION / MISSION
          ========================================================= */

          .vm-section {
            position: relative;
          }

          .vm-container {
            position: relative;
            max-width: 1400px;
            margin: 0 auto;
          }

          /* =========================================================
             STAGE
          ========================================================= */

          .vm-stage {
            position: relative;

            width: 100%;
            height: 650px;

            margin-top: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            perspective: 1600px;
          }

          /* =========================================================
             BACK DECORATIVE FRAME
          ========================================================= */

          .vm-frame {
            position: absolute;

            width: min(1080px, 82%);
            height: 500px;

            border: 1px solid rgba(21, 32, 25, 0.18);

            transform:
              translateX(35px)
              translateY(-35px)
              rotate(3deg);

            pointer-events: none;

            transition:
              border-color .5s ease;
          }

          .dark .vm-frame {
            border-color: rgba(173, 209, 50, 0.22);
          }

          /* =========================================================
             CARD
          ========================================================= */

          .vm-card {
            position: absolute;

            left: 50%;
            top: 50%;

            width: min(980px, 78%);
            height: 450px;

            transform-origin: center;

            transition:
              transform 1.2s cubic-bezier(.22, 1, .36, 1),
              opacity .9s ease,
              filter .9s ease,
              box-shadow 1s ease;

            will-change: transform, opacity;
          }

          /* =========================================================
             CARD INNER
          ========================================================= */

          .vm-card-inner {
            position: relative;

            width: 100%;
            height: 100%;

            overflow: hidden;

            border: 1.5px solid;

            box-sizing: border-box;
          }

          .vm-card-inner::after {
            content: "";

            position: absolute;

            inset: 17px;

            border: 1px solid;

            pointer-events: none;
          }

          /* =========================================================
             MISSION CARD — LIGHT
          ========================================================= */

          .vm-mission {
            background: #FFFFFF;
            border-color: #152019;

            color: #152019;

            box-shadow:
              16px 20px 0 rgba(21, 32, 25, 0.06);
          }

          .vm-mission .vm-card-inner {
            background: #FFFFFF;
            border-color: #152019;
          }

          .vm-mission .vm-card-inner::after {
            border-color: rgba(21, 32, 25, 0.10);
          }

          /* =========================================================
             MISSION CARD — DARK
          ========================================================= */

          .dark .vm-mission {
            background: #0D120E;
            border-color: rgba(173, 209, 50, 0.42);

            color: #F4F8F1;

            box-shadow:
              16px 20px 0 rgba(0, 0, 0, 0.38);
          }

          .dark .vm-mission .vm-card-inner {
            background: #0D120E;
            border-color: rgba(173, 209, 50, 0.42);
          }

          .dark .vm-mission .vm-card-inner::after {
            border-color: rgba(255, 255, 255, 0.07);
          }

          /* =========================================================
             VISION CARD — LIGHT
          ========================================================= */

          .vm-vision {
            background: #172019;
            border-color: #172019;

            color: #F7F9F4;

            box-shadow:
              16px 20px 0 rgba(21, 32, 25, 0.12);
          }

          .vm-vision .vm-card-inner {
            background: #172019;
            border-color: #172019;
          }

          .vm-vision .vm-card-inner::after {
            border-color: rgba(255, 255, 255, 0.12);
          }

          /* =========================================================
             VISION CARD — DARK
          ========================================================= */

          .dark .vm-vision {
            background: #111812;
            border-color: rgba(173, 209, 50, 0.42);

            color: #F4F8F1;

            box-shadow:
              16px 20px 0 rgba(0, 0, 0, 0.45);
          }

          .dark .vm-vision .vm-card-inner {
            background: #111812;
            border-color: rgba(173, 209, 50, 0.42);
          }

          .dark .vm-vision .vm-card-inner::after {
            border-color: rgba(173, 209, 50, 0.10);
          }

          /* =========================================================
             CARD POSITIONS
          ========================================================= */

          .vm-mission-front {
            z-index: 10;

            transform:
              translate(-50%, -50%)
              translateX(-20px)
              translateY(0)
              rotate(-1deg)
              scale(1);

            opacity: 1;

            filter: none;
          }

          .vm-mission-back {
            z-index: 3;

            transform:
              translate(-50%, -50%)
              translateX(90px)
              translateY(-55px)
              rotate(3deg)
              scale(.91);

            opacity: .22;

            filter: brightness(.94);
          }

          .dark .vm-mission-back {
            filter: brightness(.72);
          }

          .vm-vision-front {
            z-index: 10;

            transform:
              translate(-50%, -50%)
              translateX(20px)
              translateY(0)
              rotate(1deg)
              scale(1);

            opacity: 1;

            filter: none;
          }

          .vm-vision-back {
            z-index: 3;

            transform:
              translate(-50%, -50%)
              translateX(-90px)
              translateY(-55px)
              rotate(-3deg)
              scale(.91);

            opacity: .22;

            filter: brightness(.94);
          }

          .dark .vm-vision-back {
            filter: brightness(.72);
          }

          /* =========================================================
             CARD CONTENT
          ========================================================= */

          .vm-content {
            position: relative;
            z-index: 5;

            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;

            padding:
              55px
              9%;
          }

          /* =========================================================
             LABEL
          ========================================================= */

          .vm-label {
            display: flex;
            align-items: center;
            gap: 13px;

            margin-bottom: 25px;
          }

          .vm-label-line {
            width: 45px;
            height: 2px;

            flex-shrink: 0;
          }

          .vm-label-text {
            font-family:
              "Manrope",
              "Inter",
              Arial,
              sans-serif;

            font-size: 10px;
            font-weight: 800;

            letter-spacing: .28em;
            text-transform: uppercase;
          }

          /* =========================================================
             MISSION LABEL — LIGHT
          ========================================================= */

          .vm-mission .vm-label-line {
            background: #ADD132;
          }

          .vm-mission .vm-label-text {
            color: #5F7209;
          }

          /* =========================================================
             MISSION LABEL — DARK
          ========================================================= */

          .dark .vm-mission .vm-label-line {
            background: #ADD132;
          }

          .dark .vm-mission .vm-label-text {
            color: #ADD132;
          }

          /* =========================================================
             VISION LABEL — LIGHT
          ========================================================= */

          .vm-vision .vm-label-line {
            background: #ADD132;
          }

          .vm-vision .vm-label-text {
            color: #ADD132;
          }

          /* =========================================================
             VISION LABEL — DARK
          ========================================================= */

          .dark .vm-vision .vm-label-line {
            background: #ADD132;
          }

          .dark .vm-vision .vm-label-text {
            color: #ADD132;
          }

          /* =========================================================
             HEADING
          ========================================================= */

          .vm-title {
            margin: 0;

            max-width: 850px;

            font-family:
              "Manrope",
              "Inter",
              Arial,
              sans-serif;

            font-size: clamp(40px, 5vw, 68px);

            font-weight: 800;

            line-height: .97;

            letter-spacing: -.065em;
          }

          /* Mission heading */

          .vm-mission .vm-title {
            color: #152019;
          }

          .dark .vm-mission .vm-title {
            color: #F4F8F1;
          }

          /* Vision heading */

          .vm-vision .vm-title {
            color: #F4F8F1;
          }

          .dark .vm-vision .vm-title {
            color: #F4F8F1;
          }

          /* =========================================================
             ACCENT
          ========================================================= */

          .vm-accent {
            color: #7A9908;
          }

          .dark .vm-accent {
            color: #ADD132;
          }

          .vm-vision .vm-accent {
            color: #ADD132;
          }

          /* =========================================================
             DESCRIPTION
          ========================================================= */

          .vm-description {
            max-width: 730px;

            margin-top: 28px;

            font-family:
              "Manrope",
              "Inter",
              Arial,
              sans-serif;

            font-size: 15px;

            line-height: 1.85;
          }

          /* Mission */

          .vm-mission .vm-description {
            color: #5E6962;
          }

          .dark .vm-mission .vm-description {
            color: rgba(255, 255, 255, .58);
          }

          /* Vision */

          .vm-vision .vm-description {
            color: rgba(244, 248, 241, .68);
          }

          .dark .vm-vision .vm-description {
            color: rgba(255, 255, 255, .58);
          }

          /* =========================================================
             ICON
          ========================================================= */

          .vm-icon {
            position: absolute;

            top: 45px;
            right: 7%;

            width: 55px;
            height: 55px;

            display: flex;

            align-items: center;
            justify-content: center;

            border: 1px solid;

            border-radius: 50%;
          }

          /* Mission */

          .vm-mission .vm-icon {
            color: #5F7209;

            border-color: rgba(95, 114, 9, .25);

            background: rgba(173, 209, 50, .08);
          }

          .dark .vm-mission .vm-icon {
            color: #ADD132;

            border-color: rgba(173, 209, 50, .28);

            background: rgba(173, 209, 50, .04);
          }

          /* Vision */

          .vm-vision .vm-icon {
            color: #ADD132;

            border-color: rgba(173, 209, 50, .35);

            background: rgba(173, 209, 50, .06);
          }

          .dark .vm-vision .vm-icon {
            color: #ADD132;

            border-color: rgba(173, 209, 50, .28);

            background: rgba(173, 209, 50, .04);
          }

          /* =========================================================
             BOTTOM
          ========================================================= */

          .vm-bottom {
            display: flex;

            align-items: center;
            justify-content: space-between;

            margin-top: 10px;

            border-top: 1px solid rgba(21, 32, 25, .10);

            padding-top: 15px;
          }

          .dark .vm-bottom {
            border-color: rgba(255, 255, 255, .08);
          }

          .vm-bottom-text {
            font-family:
              "Manrope",
              "Inter",
              Arial,
              sans-serif;

            font-size: 9px;

            font-weight: 800;

            letter-spacing: .25em;

            text-transform: uppercase;

            color: #667169;
          }

          .dark .vm-bottom-text {
            color: rgba(255, 255, 255, .40);
          }

          /* =========================================================
             DOTS
          ========================================================= */

          .vm-controls {
            position: absolute;

            left: 50%;
            bottom: 8px;

            z-index: 30;

            display: flex;
            gap: 8px;

            transform: translateX(-50%);
          }

          .vm-dot {
            width: 7px;
            height: 7px;

            padding: 0;

            border: 0;

            border-radius: 50%;

            background: rgba(21, 32, 25, .20);

            cursor: pointer;

            transition:
              width .4s ease,
              background .4s ease;
          }

          .dark .vm-dot {
            background: rgba(173, 209, 50, .22);
          }

          .vm-dot.active {
            width: 28px;

            border-radius: 10px;

            background: #ADD132;
          }

          /* =========================================================
             TABLET
          ========================================================= */

          @media (max-width: 1024px) {

            .vm-stage {
              height: 610px;
            }

            .vm-card {
              width: 84%;
              height: 425px;
            }

            .vm-frame {
              width: 88%;
              height: 475px;
            }

            .vm-content {
              padding:
                48px
                8%;
            }

            .vm-title {
              font-size: clamp(38px, 5.2vw, 58px);
            }

          }

          /* =========================================================
             MOBILE
          ========================================================= */

          @media (max-width: 767px) {

            .vm-stage {
              height: 620px;

              margin-top: 0;
            }

            .vm-frame {
              width: 94%;
              height: 430px;

              transform:
                translateX(8px)
                translateY(-20px)
                rotate(2deg);
            }

            .vm-card {
              width: 94%;
              height: 395px;
            }

            .vm-mission-front {
              transform:
                translate(-50%, -50%)
                translateX(-5px)
                rotate(-.8deg)
                scale(1);
            }

            .vm-mission-back {
              transform:
                translate(-50%, -50%)
                translateX(25px)
                translateY(-30px)
                rotate(2deg)
                scale(.91);
            }

            .vm-vision-front {
              transform:
                translate(-50%, -50%)
                translateX(5px)
                rotate(.8deg)
                scale(1);
            }

            .vm-vision-back {
              transform:
                translate(-50%, -50%)
                translateX(-25px)
                translateY(-30px)
                rotate(-2deg)
                scale(.91);
            }

            .vm-content {
              padding:
                40px
                8%;
            }

            .vm-label {
              margin-bottom: 20px;
            }

            .vm-label-line {
              width: 30px;
            }

            .vm-label-text {
              font-size: 8px;
            }

            .vm-title {
              font-size: clamp(34px, 9vw, 48px);
            }

            .vm-description {
              margin-top: 23px;

              font-size: 12.5px;

              line-height: 1.75;
            }

            .vm-icon {
              top: 32px;

              right: 7%;

              width: 45px;
              height: 45px;
            }

            .vm-controls {
              bottom: 3px;
            }

            .vm-bottom {
              margin-top: 5px;
            }

            .vm-bottom-text {
              font-size: 7px;
              letter-spacing: .14em;
            }
          }

          /* =========================================================
             SMALL MOBILE
          ========================================================= */

          @media (max-width: 480px) {

            .vm-stage {
              height: 600px;
            }

            .vm-card {
              width: 95%;
              height: 375px;
            }

            .vm-frame {
              height: 410px;
            }

            .vm-content {
              padding:
                34px
                7%;
            }

            .vm-title {
              font-size: 32px;
            }

            .vm-description {
              font-size: 12px;
              line-height: 1.7;
            }

            .vm-icon {
              display: none;
            }
          }

          /* =========================================================
             REDUCED MOTION
          ========================================================= */

          @media (prefers-reduced-motion: reduce) {

            .vm-card,
            .vm-frame,
            .vm-dot {
              transition: none !important;
            }

          }
        `}
      </style>

      <div className="vm-container px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">

        {/* =========================================================
            CARD STAGE
        ========================================================= */}

        <div className="vm-stage">

          {/* Decorative frame */}

          <div className="vm-frame" />

          {/* =======================================================
              MISSION CARD
          ======================================================= */}

          <article
            className={`
              vm-card
              vm-mission
              ${
                activeCard === "mission"
                  ? "vm-mission-front"
                  : "vm-mission-back"
              }
            `}
          >
            <div className="vm-card-inner">

              <div className="vm-content">

                <div className="vm-label">

                  <span className="vm-label-line" />

                  <span className="vm-label-text">
                    Our Mission
                  </span>

                </div>

                <h3 className="vm-title">

                  Make digital protection

                  <span className="vm-accent">
                    {" "}more intelligent.
                  </span>

                </h3>

                <p className="vm-description">

                  Our mission is to help organizations gain better visibility
                  into their digital footprint and build stronger protection
                  around the content and intellectual property they value.

                </p>

              </div>

              <div className="vm-icon">
                <Target
                  size={22}
                  strokeWidth={1.7}
                />
              </div>

            </div>
          </article>

          {/* =======================================================
              VISION CARD
          ======================================================= */}

          <article
            className={`
              vm-card
              vm-vision
              ${
                activeCard === "vision"
                  ? "vm-vision-front"
                  : "vm-vision-back"
              }
            `}
          >
            <div className="vm-card-inner">

              <div className="vm-content">

                <div className="vm-label">

                  <span className="vm-label-line" />

                  <span className="vm-label-text">
                    Our Vision
                  </span>

                </div>

                <h3 className="vm-title">

                  A safer

                  <span className="vm-accent">
                    {" "}digital ecosystem.
                  </span>

                </h3>

                <p className="vm-description">

                  We envision a digital environment where organizations can
                  create, distribute and grow their digital assets with greater
                  confidence and visibility.

                </p>

              </div>

              <div className="vm-icon">
                <Eye
                  size={22}
                  strokeWidth={1.7}
                />
              </div>

            </div>
          </article>

          {/* =======================================================
              CARD CONTROLS
          ======================================================= */}

          <div className="vm-controls">

            <button
              type="button"
              aria-label="Show Mission"
              className={`
                vm-dot
                ${activeCard === "mission" ? "active" : ""}
              `}
              onClick={() => setActiveCard("mission")}
            />

            <button
              type="button"
              aria-label="Show Vision"
              className={`
                vm-dot
                ${activeCard === "vision" ? "active" : ""}
              `}
              onClick={() => setActiveCard("vision")}
            />

          </div>

        </div>

        {/* =========================================================
            BOTTOM INFORMATION
        ========================================================= */}

        <div className="vm-bottom">

          <span className="vm-bottom-text">
            Intelligent Protection
          </span>

          <span className="vm-bottom-text flex items-center gap-2">
            Mission / Vision
            <ArrowRight size={12} />
          </span>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;