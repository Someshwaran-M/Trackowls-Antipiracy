import React from "react";
import { motion } from "framer-motion";

/* =========================================================
   JOURNEY DATA
========================================================= */

const journeyData = [
  {
    year: "01",
    title: "Content Protection",
    role: "DIGITAL MONITORING",
    description:
      "Track your digital content across online platforms and identify unauthorized usage before it impacts your brand.",
    side: "left",
    mark: "TRACK",
  },
  {
    year: "02",
    title: "Threat Detection",
    role: "INTELLIGENCE",
    description:
      "Advanced monitoring helps discover piracy, unauthorized distribution and suspicious digital activity.",
    side: "right",
    mark: "DETECT",
  },
  {
    year: "03",
    title: "Copyright Enforcement",
    role: "TAKEDOWN",
    description:
      "Identify infringing content and streamline the removal process across websites, platforms and digital channels.",
    side: "left",
    mark: "REMOVE",
  },
  {
    year: "04",
    title: "Brand Protection",
    role: "BRAND SECURITY",
    description:
      "Protect your brand identity from unauthorized usage, impersonation and misleading digital presence.",
    side: "right",
    mark: "PROTECT",
  },
  {
    year: "05",
    title: "Continuous Monitoring",
    role: "24 / 7 PROTECTION",
    description:
      "Keep your digital ecosystem protected with continuous monitoring and intelligent threat discovery.",
    side: "left",
    mark: "WATCH",
  },
];

/* =========================================================
   OWL SVG
========================================================= */

const Owl = () => {
  return (
    <div className="journey-owl">

      <div className="owl-aura" />

      <svg
        viewBox="0 0 120 120"
        className="owl-svg"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* =================================================
            SHADOW
        ================================================= */}

        <ellipse
          cx="60"
          cy="103"
          rx="25"
          ry="5"
          fill="rgba(45,25,20,0.16)"
        />

        {/* =================================================
            LEFT WING
        ================================================= */}

        <g className="owl-wing owl-wing-left">

          <path
            d="
              M42 52
              C25 47 13 56 12 74
              C11 86 19 94 32 92
              C41 88 47 75 48 63
              Z
            "
            fill="#4A302A"
          />

          <path
            d="
              M35 59
              C24 59 20 67 21 77
              C22 82 27 86 32 84
              C38 78 41 68 40 62
              Z
            "
            fill="#674238"
          />

        </g>

        {/* =================================================
            RIGHT WING
        ================================================= */}

        <g className="owl-wing owl-wing-right">

          <path
            d="
              M78 52
              C95 47 107 56 108 74
              C109 86 101 94 88 92
              C79 88 73 75 72 63
              Z
            "
            fill="#4A302A"
          />

          <path
            d="
              M85 59
              C96 59 100 67 99 77
              C98 82 93 86 88 84
              C82 78 79 68 80 62
              Z
            "
            fill="#674238"
          />

        </g>

        {/* =================================================
            BODY
        ================================================= */}

        <ellipse
          cx="60"
          cy="65"
          rx="31"
          ry="37"
          fill="#3B2824"
        />

        {/* =================================================
            BELLY
        ================================================= */}

        <ellipse
          cx="60"
          cy="73"
          rx="20"
          ry="25"
          fill="#EBD2AF"
        />

        {/* =================================================
            BELLY DETAIL
        ================================================= */}

        <path
          d="
            M48 68
            C53 74 53 82 60 87
            C67 82 67 74 72 68
          "
          fill="none"
          stroke="#D7B990"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* =================================================
            HEAD
        ================================================= */}

        <circle
          cx="60"
          cy="39"
          r="31"
          fill="#402A25"
        />

        {/* =================================================
            EARS
        ================================================= */}

        <path
          d="
            M38 19
            L28 2
            L49 12
            Z
          "
          fill="#402A25"
        />

        <path
          d="
            M82 19
            L92 2
            L71 12
            Z
          "
          fill="#402A25"
        />

        {/* EAR INNER */}

        <path
          d="
            M37 14
            L32 8
            L44 13
            Z
          "
          fill="#D58B68"
        />

        <path
          d="
            M83 14
            L88 8
            L76 13
            Z
          "
          fill="#D58B68"
        />

        {/* =================================================
            FACE
        ================================================= */}

        <circle
          cx="48"
          cy="40"
          r="15"
          fill="#F1DCC0"
        />

        <circle
          cx="72"
          cy="40"
          r="15"
          fill="#F1DCC0"
        />

        {/* =================================================
            EYES
        ================================================= */}

        <circle
          cx="48"
          cy="40"
          r="7"
          fill="#FFFFFF"
        />

        <circle
          cx="72"
          cy="40"
          r="7"
          fill="#FFFFFF"
        />

        <circle
          cx="49"
          cy="40"
          r="3"
          fill="#17100E"
        />

        <circle
          cx="71"
          cy="40"
          r="3"
          fill="#17100E"
        />

        {/* =================================================
            BEAK
        ================================================= */}

        <path
          d="
            M60 43
            L52 53
            L60 58
            L68 53
            Z
          "
          fill="#D78661"
        />

        {/* =================================================
            CHEEKS
        ================================================= */}

        <circle
          cx="38"
          cy="50"
          r="3"
          fill="#D78661"
          opacity="0.5"
        />

        <circle
          cx="82"
          cy="50"
          r="3"
          fill="#D78661"
          opacity="0.5"
        />

        {/* =================================================
            FEET
        ================================================= */}

        <g
          fill="none"
          stroke="#D78661"
          strokeWidth="3"
          strokeLinecap="round"
        >

          <path d="M49 98 L43 105" />
          <path d="M49 98 L49 106" />
          <path d="M49 98 L55 105" />

          <path d="M71 98 L65 105" />
          <path d="M71 98 L71 106" />
          <path d="M71 98 L77 105" />

        </g>

      </svg>
    </div>
  );
};

/* =========================================================
   FLOATING DECORATION
========================================================= */

const FloatingDot = ({ className = "" }) => {
  return (
    <motion.span
      className={`floating-dot ${className}`}
      animate={{
        y: [0, -12, 0],
        opacity: [0.4, 0.9, 0.4],
        scale: [0.85, 1, 0.85],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

/* =========================================================
   BRAND MARK
========================================================= */

const BrandMark = ({ text }) => {
  return (
    <motion.div
      className="brand-mark"
      animate={{
        y: [0, -4, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span>{text}</span>
    </motion.div>
  );
};

/* =========================================================
   JOURNEY CARD
========================================================= */

const JourneyCard = ({ item, index }) => {
  return (
    <motion.article
      className={`journey-card-wrapper ${item.side}`}
      initial={{
        opacity: 0,
        x: item.side === "left" ? -120 : 120,
        y: 40,
        scale: 0.92,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >

      {/* CARD */}

      <motion.div
        className="journey-card"
        whileHover={{
          y: -10,
          scale: 1.018,
        }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        {/* TOP GLOW */}

        <motion.div
          className="card-sweep"
          animate={{
            x: ["-120%", "150%"],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        />

        {/* CARD HEADER */}

        <div className="card-header">

          <div className="card-year-mobile">
            {item.year}
          </div>

          <BrandMark text={item.mark} />

        </div>

        {/* YEAR */}

        <div className="card-year">
          {item.year}
        </div>

        {/* TITLE */}

        <h3>
          {item.title}
        </h3>

        {/* ROLE */}

        <div className="card-role">
          {item.role}
        </div>

        {/* SMALL LINE */}

        <motion.div
          className="card-line"
          initial={{
            width: 0,
          }}
          whileInView={{
            width: 48,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
        />

        {/* DESCRIPTION */}

        <p>
          {item.description}
        </p>

        {/* FOOTER */}

        <div className="card-footer">

          <span>
            TRACKOWLS
          </span>

          <motion.span
            className="card-arrow"
            whileHover={{
              rotate: 45,
              scale: 1.1,
            }}
          >
            ↗
          </motion.span>

        </div>

      </motion.div>

      {/* =================================================
          YEAR PILL
      ================================================= */}

      <motion.div
        className="journey-year-pill"
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.25,
          type: "spring",
          stiffness: 150,
        }}
      >

        <span className="pill-dot" />

        {item.year}

        <span className="pill-dot" />

      </motion.div>

    </motion.article>
  );
};

/* =========================================================
   SERVICES
========================================================= */

const Services = () => {
  return (
    <section className="services-journey">

      <style>{`

        /* =====================================================
           ROOT
        ===================================================== */

        .services-journey {
          position: relative;
          width: 100%;
          min-height: 100vh;

          overflow: hidden;

          background:
            #F8E8C6;

          color: #392522;

          isolation: isolate;
        }

        /* =====================================================
           DARK MODE
        ===================================================== */

        .dark .services-journey {
          background:
            #0B0908;

          color: #F4E6D1;
        }

        /* =====================================================
           BACKGROUND
        ===================================================== */

        .services-journey::before {
          content: "";

          position: absolute;

          inset: 0;

          pointer-events: none;

          background:
            radial-gradient(
              circle at 50% 25%,
              rgba(255,255,255,0.32),
              transparent 30%
            ),
            radial-gradient(
              circle at 15% 75%,
              rgba(213,139,104,0.08),
              transparent 25%
            ),
            radial-gradient(
              circle at 85% 60%,
              rgba(213,139,104,0.07),
              transparent 25%
            );

          z-index: -5;
        }

        .dark .services-journey::before {
          background:
            radial-gradient(
              circle at 50% 25%,
              rgba(213,139,104,0.04),
              transparent 30%
            ),
            radial-gradient(
              circle at 15% 75%,
              rgba(213,139,104,0.05),
              transparent 25%
            );
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .journey-container {
          position: relative;

          width: min(1450px, 100%);

          margin: auto;

          padding:
            70px
            50px
            120px;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .journey-header {
          position: relative;

          z-index: 20;

          margin-bottom: 50px;
        }

        .journey-label {
          display: flex;

          align-items: center;

          gap: 18px;

          color: #D48966;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.3em;

          text-transform: uppercase;
        }

        .journey-label::before {
          content: "";

          width: 38px;

          height: 2px;

          background: #D48966;
        }

        .journey-title {
          margin: 20px 0 0;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            clamp(
              55px,
              7vw,
              105px
            );

          font-weight: 800;

          letter-spacing: -0.075em;

          line-height: 0.88;

          color: #392522;
        }

        .dark .journey-title {
          color: #F3E5D1;
        }

        .journey-title span {
          color: #D48966;

          font-family:
            Georgia,
            serif;

          font-style: italic;

          font-weight: 400;

          letter-spacing: -0.05em;
        }

        .journey-description {
          max-width: 550px;

          margin-top: 28px;

          color:
            rgba(57,37,34,0.58);

          font-size: 14px;

          line-height: 1.8;
        }

        .dark .journey-description {
          color:
            rgba(243,229,209,0.5);
        }

        /* =====================================================
           JOURNEY AREA
        ===================================================== */

        .journey-area {
          position: relative;

          width: 100%;

          min-height: 1700px;

          margin-top: 20px;
        }

        /* =====================================================
           CENTRAL S PATH
        ===================================================== */

        .journey-svg {
          position: absolute;

          left: 50%;

          top: 0;

          width: 650px;

          height: 100%;

          transform:
            translateX(-50%);

          overflow: visible;

          z-index: 1;

          pointer-events: none;
        }

        .path-shadow {
          fill: none;

          stroke:
            rgba(89,61,48,0.035);

          stroke-width: 18;

          stroke-linecap: round;

          filter:
            blur(8px);
        }

        .path-main {
          fill: none;

          stroke:
            rgba(143,105,77,0.18);

          stroke-width: 4;

          stroke-linecap: round;
        }

        .dark .path-main {
          stroke:
            rgba(213,139,104,0.18);
        }

        .path-secondary {
          fill: none;

          stroke:
            rgba(143,105,77,0.08);

          stroke-width: 2;

          stroke-linecap: round;

          transform:
            translateX(12px);
        }

        .dark .path-secondary {
          stroke:
            rgba(213,139,104,0.08);
        }

        /* =====================================================
           MOVING LIGHT
        ===================================================== */

        .path-light {
          fill: none;

          stroke: #D48966;

          stroke-width: 3;

          stroke-linecap: round;

          stroke-dasharray:
            2 75;

          opacity: 0.6;

          filter:
            drop-shadow(
              0 0 6px
              rgba(212,137,102,0.7)
            );

          animation:
            pathTravel
            4s
            linear
            infinite;
        }

        @keyframes pathTravel {

          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -300;
          }

        }

        /* =====================================================
           OWL
        ===================================================== */

        .owl-motion {
          position: absolute;

          top: 0;

          left: 50%;

          width: 100px;

          height: 100px;

          margin-left: -50px;

          z-index: 30;

          offset-path:
            path(
              "M325 0
               C325 140 130 180 150 350
               C170 500 500 510 470 690
               C440 850 120 850 145 1010
               C170 1170 500 1190 450 1360
               C420 1470 350 1600 325 1700"
            );

          offset-rotate: auto;

          animation:
            owlJourney
            14s
            cubic-bezier(
              0.42,
              0,
              0.58,
              1
            )
            infinite;
        }

        @keyframes owlJourney {

          0% {
            offset-distance: 0%;
          }

          100% {
            offset-distance: 100%;
          }

        }

        .journey-owl {
          position: relative;

          width: 100px;

          height: 100px;

          animation:
            owlFloat
            1.1s
            ease-in-out
            infinite;
        }

        @keyframes owlFloat {

          0%,
          100% {
            transform:
              translateY(0)
              rotate(-2deg);
          }

          50% {
            transform:
              translateY(-8px)
              rotate(2deg);
          }

        }

        .owl-svg {
          position: relative;

          width: 100%;

          height: 100%;

          z-index: 5;

          filter:
            drop-shadow(
              0 14px 15px
              rgba(53,33,27,0.2)
            );
        }

        /* =====================================================
           OWL WINGS
        ===================================================== */

        .owl-wing-left {
          transform-box: fill-box;

          transform-origin: right center;

          animation:
            owlLeftWing
            0.48s
            ease-in-out
            infinite;
        }

        .owl-wing-right {
          transform-box: fill-box;

          transform-origin: left center;

          animation:
            owlRightWing
            0.48s
            ease-in-out
            infinite;
        }

        @keyframes owlLeftWing {

          0%,
          100% {
            transform:
              rotate(0deg);
          }

          50% {
            transform:
              rotate(-17deg);
          }

        }

        @keyframes owlRightWing {

          0%,
          100% {
            transform:
              rotate(0deg);
          }

          50% {
            transform:
              rotate(17deg);
          }

        }

        /* =====================================================
           OWL AURA
        ===================================================== */

        .owl-aura {
          position: absolute;

          inset: 8px;

          border-radius: 50%;

          background:
            rgba(213,139,104,0.14);

          filter:
            blur(18px);

          animation:
            owlAura
            1.8s
            ease-in-out
            infinite;
        }

        @keyframes owlAura {

          0%,
          100% {
            opacity: 0.35;

            transform:
              scale(0.85);
          }

          50% {
            opacity: 0.8;

            transform:
              scale(1.15);
          }

        }

        /* =====================================================
           CARD LAYOUT
        ===================================================== */

        .journey-cards {
          position: relative;

          z-index: 10;

          width: 100%;

          display: flex;

          flex-direction: column;

          gap: 85px;
        }

        .journey-card-wrapper {
          position: relative;

          width: 100%;

          min-height: 245px;

          display: flex;

          align-items: center;
        }

        .journey-card-wrapper.left {
          justify-content: flex-start;

          padding-right: 51%;
        }

        .journey-card-wrapper.right {
          justify-content: flex-end;

          padding-left: 51%;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .journey-card {
          position: relative;

          width: 100%;

          max-width: 590px;

          min-height: 245px;

          padding:
            30px
            35px
            25px;

          overflow: hidden;

          border-radius: 25px;

          background:
            rgba(
              255,
              255,
              255,
              0.91
            );

          border:
            1px solid
            rgba(
              85,
              57,
              45,
              0.09
            );

          box-shadow:
            0
            24px
            55px
            rgba(
              67,
              44,
              34,
              0.10
            );

          backdrop-filter:
            blur(14px);
        }

        .dark .journey-card {
          background:
            rgba(
              29,
              23,
              20,
              0.92
            );

          border-color:
            rgba(
              255,
              255,
              255,
              0.07
            );

          box-shadow:
            0
            24px
            60px
            rgba(
              0,
              0,
              0,
              0.3
            );
        }

        /* =====================================================
           CARD TOP LINE
        ===================================================== */

        .journey-card::before {
          content: "";

          position: absolute;

          left: 0;

          top: 0;

          width: 100%;

          height: 4px;

          background:
            linear-gradient(
              90deg,
              #C77E5D,
              #E2AA89,
              transparent
            );
        }

        /* =====================================================
           CARD SWEEP
        ===================================================== */

        .card-sweep {
          position: absolute;

          top: -50%;

          left: -100%;

          width: 45%;

          height: 200%;

          transform:
            rotate(18deg);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(
                255,
                255,
                255,
                0.35
              ),
              transparent
            );

          pointer-events: none;
        }

        .dark .card-sweep {
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(
                255,
                255,
                255,
                0.04
              ),
              transparent
            );
        }

        /* =====================================================
           CARD HEADER
        ===================================================== */

        .card-header {
          display: flex;

          align-items: center;

          justify-content:
            space-between;
        }

        .brand-mark {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          padding:
            6px
            12px;

          min-width: 78px;

          border-radius: 6px;

          background:
            #392522;

          color: white;

          font-size: 9px;

          font-weight: 900;

          letter-spacing:
            0.16em;
        }

        .dark .brand-mark {
          background:
            #D48966;

          color:
            #2C1C18;
        }

        .card-year-mobile {
          display: none;
        }

        /* =====================================================
           YEAR
        ===================================================== */

        .card-year {
          margin-top: 16px;

          font-size:
            clamp(
              44px,
              5vw,
              70px
            );

          font-weight: 800;

          line-height: 0.85;

          letter-spacing:
            -0.07em;

          color: #392522;
        }

        .dark .card-year {
          color: #F3E5D1;
        }

        /* =====================================================
           TITLE
        ===================================================== */

        .journey-card h3 {
          margin:
            12px
            0
            0;

          font-size:
            clamp(
              22px,
              2.2vw,
              30px
            );

          line-height: 1;

          letter-spacing:
            -0.045em;

          font-weight: 800;

          color:
            #392522;
        }

        .dark .journey-card h3 {
          color:
            #F3E5D1;
        }

        /* =====================================================
           ROLE
        ===================================================== */

        .card-role {
          margin-top: 7px;

          color:
            #D08360;

          font-size: 10px;

          font-weight: 800;

          letter-spacing:
            0.15em;
        }

        /* =====================================================
           LINE
        ===================================================== */

        .card-line {
          height: 3px;

          margin-top: 13px;

          border-radius: 999px;

          background:
            #D48966;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .journey-card p {
          max-width: 520px;

          margin:
            14px
            0
            0;

          color:
            rgba(
              57,
              37,
              34,
              0.60
            );

          font-size: 12px;

          line-height: 1.8;
        }

        .dark .journey-card p {
          color:
            rgba(
              243,
              229,
              209,
              0.53
            );
        }

        /* =====================================================
           FOOTER
        ===================================================== */

        .card-footer {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          margin-top: 16px;

          padding-top: 13px;

          border-top:
            1px solid
            rgba(
              57,
              37,
              34,
              0.08
            );
        }

        .dark .card-footer {
          border-color:
            rgba(
              255,
              255,
              255,
              0.06
            );
        }

        .card-footer > span:first-child {
          color:
            rgba(
              57,
              37,
              34,
              0.32
            );

          font-size: 8px;

          font-weight: 800;

          letter-spacing:
            0.22em;
        }

        .dark .card-footer > span:first-child {
          color:
            rgba(
              243,
              229,
              209,
              0.30
            );
        }

        .card-arrow {
          display: flex;

          align-items: center;

          justify-content: center;

          width: 30px;

          height: 30px;

          border-radius: 50%;

          color:
            #6C4B3E;

          border:
            1px solid
            rgba(
              108,
              75,
              62,
              0.18
            );

          font-size: 17px;
        }

        .dark .card-arrow {
          color:
            #D48966;

          border-color:
            rgba(
              212,
              137,
              102,
              0.22
            );
        }

        /* =====================================================
           YEAR PILL
        ===================================================== */

        .journey-year-pill {
          position: absolute;

          top: 50%;

          z-index: 25;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          width: 112px;

          height: 38px;

          transform:
            translateY(-50%);

          border-radius: 999px;

          background:
            #392522;

          border:
            3px solid
            #F8E8C6;

          color:
            #F8E8C6;

          font-size: 10px;

          font-weight: 800;

          letter-spacing:
            0.14em;

          box-shadow:
            0
            12px
            30px
            rgba(
              57,
              37,
              34,
              0.15
            );
        }

        .left .journey-year-pill {
          left: calc(50% - 56px);
        }

        .right .journey-year-pill {
          left: calc(50% - 56px);
        }

        .dark .journey-year-pill {
          background:
            #D48966;

          color:
            #2E1C17;

          border-color:
            #0B0908;
        }

        .pill-dot {
          width: 4px;

          height: 4px;

          border-radius: 50%;

          background:
            #D48966;
        }

        /* =====================================================
           FLOATING DOTS
        ===================================================== */

        .floating-dot {
          position: absolute;

          width: 10px;

          height: 10px;

          border-radius: 50%;

          background:
            #D48966;

          z-index: 4;
        }

        .dot-one {
          top: 120px;

          left: 52%;
        }

        .dot-two {
          top: 570px;

          left: 32%;

          width: 7px;

          height: 7px;
        }

        .dot-three {
          top: 980px;

          left: 61%;

          width: 8px;

          height: 8px;
        }

        .dot-four {
          top: 1450px;

          left: 44%;

          width: 6px;

          height: 6px;
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 800px) {

          .journey-container {
            padding:
              55px
              20px
              90px;
          }

          .journey-title {
            font-size:
              clamp(
                48px,
                14vw,
                75px
              );
          }

          .journey-description {
            font-size: 12px;
          }

          .journey-area {
            min-height: 1450px;
          }

          /* -----------------------------------------------
             MOBILE PATH
          ----------------------------------------------- */

          .journey-svg {
            left: 70px;

            width: 250px;

            transform: none;
          }

          /* -----------------------------------------------
             MOBILE CARDS
          ----------------------------------------------- */

          .journey-card-wrapper.left,
          .journey-card-wrapper.right {
            padding:
              0
              0
              0
              120px;

            justify-content:
              flex-start;
          }

          .journey-card-wrapper {
            min-height: 225px;
          }

          .journey-card {
            max-width:
              calc(
                100vw - 155px
              );

            padding:
              22px
              22px
              20px;

            border-radius:
              20px;
          }

          .card-year {
            font-size:
              45px;
          }

          .journey-card h3 {
            font-size:
              21px;
          }

          .journey-card p {
            font-size:
              11px;

            line-height:
              1.65;
          }

          /* -----------------------------------------------
             MOBILE YEAR
          ----------------------------------------------- */

          .journey-year-pill {
            left: 18px !important;

            width: 80px;

            height: 31px;

            font-size: 8px;

            border-width:
              2px;
          }

          /* -----------------------------------------------
             MOBILE OWL
          ----------------------------------------------- */

          .owl-motion {
            left: 70px;

            margin-left:
              -35px;

            width: 70px;

            height: 70px;

            offset-path:
              path(
                "M70 0
                 C70 120 25 150 35 285
                 C45 410 190 425 175 560
                 C160 690 35 700 40 830
                 C45 960 190 970 170 1100
                 C155 1210 95 1330 70 1450"
              );
          }

          .journey-owl {
            width: 70px;

            height: 70px;
          }

          /* -----------------------------------------------
             MOBILE BRAND
          ----------------------------------------------- */

          .brand-mark {
            min-width: 65px;

            padding:
              5px
              8px;

            font-size: 7px;
          }

          .card-role {
            font-size: 8px;
          }

          .card-footer {
            margin-top: 11px;
          }

          .card-footer > span:first-child {
            font-size: 7px;
          }

          .card-arrow {
            width: 26px;

            height: 26px;

            font-size: 14px;
          }

          /* -----------------------------------------------
             MOBILE DOTS
          ----------------------------------------------- */

          .dot-one {
            left: 58%;

            top: 100px;
          }

          .dot-two {
            left: 28%;

            top: 510px;
          }

          .dot-three {
            left: 65%;

            top: 900px;
          }

          .dot-four {
            left: 45%;

            top: 1300px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 500px) {

          .journey-container {
            padding:
              45px
              14px
              70px;
          }

          .journey-label {
            font-size:
              8px;

            gap: 10px;
          }

          .journey-label::before {
            width: 24px;
          }

          .journey-title {
            font-size:
              47px;
          }

          .journey-description {
            max-width:
              90%;

            font-size:
              11px;
          }

          .journey-area {
            margin-top:
              45px;

            min-height:
              1350px;
          }

          .journey-card-wrapper.left,
          .journey-card-wrapper.right {
            padding-left:
              102px;
          }

          .journey-card {
            max-width:
              calc(
                100vw - 116px
              );

            min-height:
              205px;

            padding:
              18px
              18px
              17px;

            border-radius:
              17px;
          }

          .card-year {
            margin-top:
              12px;

            font-size:
              38px;
          }

          .journey-card h3 {
            margin-top:
              8px;

            font-size:
              18px;
          }

          .card-role {
            margin-top:
              5px;

            font-size:
              7px;
          }

          .card-line {
            margin-top:
              9px;

            height:
              2px;
          }

          .journey-card p {
            margin-top:
              9px;

            font-size:
              9.5px;

            line-height:
              1.55;
          }

          .journey-year-pill {
            left:
              4px !important;

            width:
              70px;

            height:
              28px;

            font-size:
              7px;
          }

          .journey-svg {
            left:
              52px;

            width:
              190px;
          }

          .owl-motion {
            left:
              52px;

            width:
              58px;

            height:
              58px;

            margin-left:
              -29px;
          }

          .journey-owl {
            width:
              58px;

            height:
              58px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (
          prefers-reduced-motion:
          reduce
        ) {

          .owl-motion,
          .journey-owl,
          .owl-wing-left,
          .owl-wing-right,
          .path-light,
          .brand-mark,
          .floating-dot,
          .card-sweep {
            animation:
              none !important;
          }
        }

      `}</style>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="journey-container">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.header
          className="journey-header"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <div className="journey-label">
            Journey
          </div>

          <h2 className="journey-title">
            The Journey{" "}
            <span>
              So Far
            </span>
          </h2>

          <p className="journey-description">
            Every step in the TrackOwls journey is built around
            discovering threats, protecting digital content and
            helping brands stay one step ahead.
          </p>

        </motion.header>

        {/* ===================================================
            JOURNEY AREA
        =================================================== */}

        <div className="journey-area">

          {/* =================================================
              FLOATING DOTS
          ================================================= */}

          <FloatingDot className="dot-one" />

          <FloatingDot className="dot-two" />

          <FloatingDot className="dot-three" />

          <FloatingDot className="dot-four" />

          {/* =================================================
              SVG JOURNEY PATH
          ================================================= */}

          <svg
            className="journey-svg"
            viewBox="0 0 650 1700"
            preserveAspectRatio="none"
          >

            <defs>

              <filter
                id="journeyBlur"
              >
                <feGaussianBlur
                  stdDeviation="7"
                />
              </filter>

            </defs>

            {/* PATH SHADOW */}

            <path
              className="path-shadow"
              d="
                M325 0
                C325 140 130 180 150 350
                C170 500 500 510 470 690
                C440 850 120 850 145 1010
                C170 1170 500 1190 450 1360
                C420 1470 350 1600 325 1700
              "
            />

            {/* MAIN PATH */}

            <path
              id="journeyPath"
              className="path-main"
              d="
                M325 0
                C325 140 130 180 150 350
                C170 500 500 510 470 690
                C440 850 120 850 145 1010
                C170 1170 500 1190 450 1360
                C420 1470 350 1600 325 1700
              "
            />

            {/* SECONDARY PATH */}

            <path
              className="path-secondary"
              d="
                M337 0
                C337 140 142 180 162 350
                C182 500 512 510 482 690
                C452 850 132 850 157 1010
                C182 1170 512 1190 462 1360
                C432 1470 362 1600 337 1700
              "
            />

            {/* MOVING LIGHT */}

            <path
              className="path-light"
              d="
                M325 0
                C325 140 130 180 150 350
                C170 500 500 510 470 690
                C440 850 120 850 145 1010
                C170 1170 500 1190 450 1360
                C420 1470 350 1600 325 1700
              "
            />

          </svg>

          {/* =================================================
              OWL
          ================================================= */}

          <div className="owl-motion">

            <Owl />

          </div>

          {/* =================================================
              CARDS
          ================================================= */}

          <div className="journey-cards">

            {journeyData.map(
              (item, index) => (
                <JourneyCard
                  key={item.year}
                  item={item}
                  index={index}
                />
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Services;