import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMonitor,
  FiShield,
  FiServer,
  FiCpu,
} from "react-icons/fi";

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    number: "01",
    title: "IT Consulting",
    description:
      "Strategic technology consulting to help your business make smarter decisions.",
    icon: FiMonitor,
    stage: "Strategy",
    accent: "#C98562",
  },
  {
    number: "02",
    title: "Cybersecurity",
    description:
      "Protect your business with reliable cybersecurity solutions and services.",
    icon: FiShield,
    stage: "Protection",
    accent: "#B96E4C",
  },
  {
    number: "03",
    title: "Infrastructure",
    description:
      "Build secure, scalable, and reliable technology infrastructure.",
    icon: FiServer,
    stage: "Foundation",
    accent: "#D28D67",
  },
  {
    number: "04",
    title: "Technology Solutions",
    description:
      "Modern technology solutions designed around your business requirements.",
    icon: FiCpu,
    stage: "Innovation",
    accent: "#A95E43",
  },
];

/* =========================================================
   CARD ANIMATION
========================================================= */

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   HEADER ANIMATION
========================================================= */

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   OWL
   Pure SVG - no external image required
========================================================= */

const JourneyOwl = () => {
  return (
    <svg
      className="journey-owl"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      {/* OWL BODY */}

      <g>
        {/* BODY */}
        <ellipse
          cx="50"
          cy="56"
          rx="28"
          ry="31"
          fill="#34221F"
        />

        {/* BELLY */}
        <ellipse
          cx="50"
          cy="63"
          rx="18"
          ry="20"
          fill="#F2D9B8"
        />

        {/* LEFT WING */}
        <path
          d="M27 48 C10 53 13 76 31 79 C37 72 38 57 27 48Z"
          fill="#4A302B"
        />

        {/* RIGHT WING */}
        <path
          d="M73 48 C90 53 87 76 69 79 C63 72 62 57 73 48Z"
          fill="#4A302B"
        />

        {/* HEAD */}
        <circle
          cx="50"
          cy="34"
          r="29"
          fill="#3A2723"
        />

        {/* EAR LEFT */}
        <path
          d="M28 20 L21 4 L39 13 Z"
          fill="#3A2723"
        />

        {/* EAR RIGHT */}
        <path
          d="M72 20 L79 4 L61 13 Z"
          fill="#3A2723"
        />

        {/* FACE LEFT */}
        <circle
          cx="39"
          cy="34"
          r="13"
          fill="#F0D9BA"
        />

        {/* FACE RIGHT */}
        <circle
          cx="61"
          cy="34"
          r="13"
          fill="#F0D9BA"
        />

        {/* EYES */}
        <circle
          cx="40"
          cy="34"
          r="6"
          fill="#FFFFFF"
        />

        <circle
          cx="60"
          cy="34"
          r="6"
          fill="#FFFFFF"
        />

        {/* PUPILS */}
        <circle
          cx="40"
          cy="34"
          r="2.5"
          fill="#1F1715"
        />

        <circle
          cx="60"
          cy="34"
          r="2.5"
          fill="#1F1715"
        />

        {/* BEAK */}
        <path
          d="M50 38 L43 47 L50 50 L57 47 Z"
          fill="#C98562"
        />

        {/* FEET */}
        <path
          d="M38 84 L31 91 M38 84 L38 93 M38 84 L45 91"
          stroke="#C98562"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M62 84 L55 91 M62 84 L62 93 M62 84 L69 91"
          stroke="#C98562"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* CHEEK DETAILS */}
        <circle
          cx="32"
          cy="43"
          r="3"
          fill="#D88E6C"
          opacity="0.55"
        />

        <circle
          cx="68"
          cy="43"
          r="3"
          fill="#D88E6C"
          opacity="0.55"
        />
      </g>
    </svg>
  );
};

/* =========================================================
   SERVICES COMPONENT
========================================================= */

const Services = () => {
  return (
    <section
      className="
        services-journey
        relative
        overflow-hidden
        bg-[#F7E7C5]
        text-[#35231F]
        dark:bg-[#090806]
        dark:text-[#F5E9D4]
      "
    >
      {/* =====================================================
          CUSTOM CSS
      ===================================================== */}

      <style>{`
        /* =====================================================
           ROOT
        ===================================================== */

        .services-journey {
          min-height: 100vh;
          position: relative;
          isolation: isolate;
        }

        /* =====================================================
           BACKGROUND
        ===================================================== */

        .journey-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: -1;
          overflow: hidden;
        }

        .journey-background::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 12% 18%,
              rgba(201, 133, 98, 0.10),
              transparent 24%
            ),
            radial-gradient(
              circle at 85% 70%,
              rgba(201, 133, 98, 0.08),
              transparent 25%
            );
        }

        .dark .journey-background::before {
          background:
            radial-gradient(
              circle at 12% 18%,
              rgba(201, 133, 98, 0.08),
              transparent 24%
            ),
            radial-gradient(
              circle at 85% 70%,
              rgba(201, 133, 98, 0.06),
              transparent 25%
            );
        }

        /* =====================================================
           DECORATIVE DOTS
        ===================================================== */

        .journey-dot {
          position: absolute;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #D98D68;
          opacity: 0.85;
          animation: dotPulse 3s ease-in-out infinite;
        }

        .journey-dot.one {
          left: 14%;
          top: 25%;
        }

        .journey-dot.two {
          right: 13%;
          top: 48%;
          animation-delay: 0.8s;
        }

        .journey-dot.three {
          left: 18%;
          bottom: 15%;
          animation-delay: 1.5s;
        }

        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.35;
          }

          50% {
            transform: scale(1.25);
            opacity: 1;
          }
        }

        /* =====================================================
           MAIN CONTAINER
        ===================================================== */

        .journey-container {
          width: min(1380px, 100%);
          margin: 0 auto;
          padding: 90px 42px 130px;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .journey-header {
          position: relative;
          z-index: 10;
          max-width: 900px;
        }

        .journey-label {
          display: flex;
          align-items: center;
          gap: 18px;
          color: #D58B68;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.34em;
          text-transform: uppercase;
        }

        .journey-label-line {
          width: 38px;
          height: 2px;
          background: #D58B68;
        }

        .journey-title {
          margin-top: 22px;
          font-family:
            "Manrope",
            "Inter",
            Arial,
            sans-serif;
          font-size: clamp(54px, 7vw, 105px);
          font-weight: 800;
          line-height: 0.88;
          letter-spacing: -0.075em;
          color: #35231F;
        }

        .dark .journey-title {
          color: #F4E7D1;
        }

        .journey-title-script {
          color: #D58B68;
          font-family:
            Georgia,
            "Times New Roman",
            serif;
          font-style: italic;
          font-weight: 400;
          letter-spacing: -0.065em;
        }

        .journey-intro {
          margin-top: 30px;
          max-width: 570px;
          color: rgba(53, 35, 31, 0.62);
          font-size: 15px;
          line-height: 1.9;
        }

        .dark .journey-intro {
          color: rgba(244, 231, 209, 0.56);
        }

        /* =====================================================
           JOURNEY AREA
        ===================================================== */

        .journey-area {
          position: relative;
          margin-top: 80px;
          min-height: 1350px;
        }

        /* =====================================================
           SVG PATH
        ===================================================== */

        .journey-path {
          position: absolute;
          top: 0;
          left: 50%;
          width: 500px;
          height: 100%;
          transform: translateX(-50%);
          overflow: visible;
          pointer-events: none;
          z-index: 1;
        }

        .journey-path-main {
          fill: none;
          stroke: rgba(166, 130, 93, 0.22);
          stroke-width: 5;
          stroke-linecap: round;
        }

        .journey-path-inner {
          fill: none;
          stroke: rgba(166, 130, 93, 0.12);
          stroke-width: 2.5;
          stroke-linecap: round;
        }

        .dark .journey-path-main {
          stroke: rgba(211, 151, 111, 0.22);
        }

        .dark .journey-path-inner {
          stroke: rgba(211, 151, 111, 0.12);
        }

        /* =====================================================
           OWL
        ===================================================== */

        .owl-motion-wrapper {
          width: 90px;
          height: 90px;
          margin-left: -45px;
          margin-top: -45px;
          filter:
            drop-shadow(
              0 15px 20px rgba(74, 48, 43, 0.20)
            );
        }

        .journey-owl {
          width: 90px;
          height: 90px;
          display: block;
          animation: owlFloat 1.8s ease-in-out infinite;
        }

        @keyframes owlFloat {
          0%,
          100% {
            transform: translateY(0) rotate(-2deg);
          }

          50% {
            transform: translateY(-7px) rotate(2deg);
          }
        }

        /* =====================================================
           SERVICE ITEMS
        ===================================================== */

        .journey-items {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          gap: 55px;
        }

        .journey-item {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 260px;
          align-items: center;
        }

        .journey-item.left .journey-card {
          grid-column: 1;
          margin-right: 70px;
        }

        .journey-item.right .journey-card {
          grid-column: 2;
          margin-left: 70px;
        }

        /* =====================================================
           YEAR / NUMBER BADGE
        ===================================================== */

        .journey-number {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 8;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 105px;
          height: 42px;
          padding: 0 18px;
          border-radius: 999px;
          background: #39241F;
          border: 3px solid #F7E7C5;
          box-shadow:
            0 10px 30px rgba(70, 42, 33, 0.16);
          color: #F8EEDC;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .dark .journey-number {
          border-color: #090806;
          background: #E6B28F;
          color: #2C1C19;
        }

        .journey-number::before,
        .journey-number::after {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #D98D68;
        }

        .journey-number::before {
          margin-right: 10px;
        }

        .journey-number::after {
          margin-left: 10px;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .journey-card {
          position: relative;
          overflow: hidden;
          min-height: 245px;
          padding: 34px 40px 36px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(116, 78, 61, 0.10);
          box-shadow:
            0 20px 55px rgba(76, 49, 37, 0.10);
          backdrop-filter: blur(8px);
          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease,
            border-color 0.5s ease;
        }

        .journey-card:hover {
          transform: translateY(-8px);
          border-color: rgba(201, 133, 98, 0.35);
          box-shadow:
            0 28px 70px rgba(76, 49, 37, 0.16);
        }

        .dark .journey-card {
          background: rgba(28, 22, 19, 0.90);
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.30);
        }

        .dark .journey-card:hover {
          border-color: rgba(211, 151, 111, 0.35);
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.45);
        }

        .journey-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background:
            linear-gradient(
              90deg,
              #D58B68,
              #E7B292,
              transparent
            );
        }

        .journey-card-glow {
          position: absolute;
          right: -70px;
          bottom: -70px;
          width: 190px;
          height: 190px;
          border-radius: 50%;
          background: rgba(213, 139, 104, 0.10);
          filter: blur(25px);
          pointer-events: none;
        }

        /* =====================================================
           CARD TOP
        ===================================================== */

        .journey-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .journey-stage {
          color: #D17F5A;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .journey-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          border-radius: 50%;
          color: #B96749;
          background: rgba(201, 133, 98, 0.11);
          border: 1px solid rgba(201, 133, 98, 0.20);
          font-size: 22px;
          transition:
            transform 0.45s ease,
            background 0.45s ease;
        }

        .journey-card:hover .journey-icon {
          transform: rotate(-8deg) scale(1.08);
          background: #C98562;
          color: white;
        }

        .dark .journey-icon {
          color: #E0A47F;
          background: rgba(201, 133, 98, 0.08);
        }

        /* =====================================================
           CARD TITLE
        ===================================================== */

        .journey-card-title {
          margin-top: 16px;
          color: #34221F;
          font-family:
            "Manrope",
            "Inter",
            Arial,
            sans-serif;
          font-size: clamp(27px, 3vw, 42px);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.055em;
        }

        .dark .journey-card-title {
          color: #F5E8D4;
        }

        .journey-card-description {
          max-width: 520px;
          margin-top: 17px;
          color: rgba(53, 35, 31, 0.62);
          font-size: 14px;
          line-height: 1.8;
        }

        .dark .journey-card-description {
          color: rgba(245, 232, 212, 0.55);
        }

        /* =====================================================
           CARD FOOTER
        ===================================================== */

        .journey-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px solid rgba(91, 59, 46, 0.10);
        }

        .dark .journey-card-footer {
          border-top-color: rgba(255, 255, 255, 0.08);
        }

        .journey-card-label {
          color: rgba(53, 35, 31, 0.40);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.20em;
          text-transform: uppercase;
        }

        .dark .journey-card-label {
          color: rgba(245, 232, 212, 0.35);
        }

        .journey-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          color: #7D5140;
          border: 1px solid rgba(125, 81, 64, 0.20);
          transition:
            transform 0.35s ease,
            background 0.35s ease,
            color 0.35s ease;
        }

        .journey-card:hover .journey-arrow {
          transform: rotate(45deg);
          background: #C98562;
          border-color: #C98562;
          color: white;
        }

        /* =====================================================
           BOTTOM CTA
        ===================================================== */

        .journey-bottom {
          position: relative;
          z-index: 10;
          margin-top: 90px;
          padding-top: 30px;
          border-top: 1px solid rgba(91, 59, 46, 0.13);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .dark .journey-bottom {
          border-top-color: rgba(255, 255, 255, 0.08);
        }

        .journey-bottom-label {
          color: rgba(53, 35, 31, 0.42);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.25em;
          text-transform: uppercase;
        }

        .dark .journey-bottom-label {
          color: rgba(245, 232, 212, 0.35);
        }

        .journey-bottom-text {
          margin-top: 8px;
          color: #51362E;
          font-size: 15px;
          font-weight: 600;
        }

        .dark .journey-bottom-text {
          color: #E9D8C1;
        }

        .journey-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 22px;
          border-radius: 999px;
          color: white;
          background: #39241F;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease;
        }

        .journey-button:hover {
          transform: translateY(-3px);
          background: #C98562;
          box-shadow:
            0 15px 35px rgba(201, 133, 98, 0.28);
        }

        .dark .journey-button {
          background: #D58B68;
          color: #2B1C18;
        }

        .dark .journey-button:hover {
          background: #E3A57F;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .journey-container {
            padding: 75px 28px 100px;
          }

          .journey-area {
            min-height: 1300px;
          }

          .journey-path {
            width: 330px;
          }

          .journey-item.left .journey-card {
            margin-right: 45px;
          }

          .journey-item.right .journey-card {
            margin-left: 45px;
          }

          .journey-card {
            padding: 28px 28px 30px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 680px) {
          .journey-container {
            padding: 58px 18px 80px;
          }

          .journey-label {
            font-size: 9px;
            letter-spacing: 0.25em;
          }

          .journey-label-line {
            width: 27px;
          }

          .journey-title {
            margin-top: 18px;
            font-size: clamp(46px, 14vw, 72px);
          }

          .journey-intro {
            margin-top: 22px;
            font-size: 13px;
            line-height: 1.75;
          }

          .journey-area {
            margin-top: 55px;
            min-height: auto;
            padding-left: 32px;
          }

          /*
             On mobile the winding path moves to the left.
          */

          .journey-path {
            left: 38px;
            width: 105px;
            height: calc(100% - 20px);
            transform: none;
          }

          .journey-items {
            gap: 28px;
          }

          .journey-item {
            display: block;
            min-height: auto;
            padding-left: 24px;
          }

          .journey-item.left .journey-card,
          .journey-item.right .journey-card {
            margin: 0;
          }

          .journey-number {
            left: -4px;
            top: 30px;
            min-width: 67px;
            height: 32px;
            padding: 0 9px;
            font-size: 8px;
            letter-spacing: 0.10em;
            transform: translate(-50%, 0);
          }

          .journey-number::before,
          .journey-number::after {
            width: 3px;
            height: 3px;
          }

          .journey-number::before {
            margin-right: 5px;
          }

          .journey-number::after {
            margin-left: 5px;
          }

          .journey-card {
            min-height: 0;
            padding: 24px 21px 23px;
            border-radius: 22px;
          }

          .journey-card-title {
            font-size: 27px;
          }

          .journey-card-description {
            font-size: 12px;
            line-height: 1.75;
          }

          .journey-icon {
            width: 43px;
            height: 43px;
            font-size: 18px;
          }

          .journey-card-footer {
            margin-top: 18px;
            padding-top: 14px;
          }

          .journey-card-label {
            font-size: 8px;
          }

          .journey-bottom {
            margin-top: 60px;
            align-items: flex-start;
            flex-direction: column;
          }

          .journey-button {
            width: 100%;
            justify-content: center;
          }

          .owl-motion-wrapper {
            width: 58px;
            height: 58px;
            margin-left: -29px;
            margin-top: -29px;
          }

          .journey-owl {
            width: 58px;
            height: 58px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .journey-dot,
          .journey-owl {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="journey-background">
        <span className="journey-dot one" />
        <span className="journey-dot two" />
        <span className="journey-dot three" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="journey-container">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.header
          className="journey-header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <div className="journey-label">
            <span className="journey-label-line" />
            <span>Our Journey</span>
          </div>

          <h2 className="journey-title">
            The Journey{" "}
            <span className="journey-title-script">
              So Far
            </span>
          </h2>

          <p className="journey-intro">
            From strategic planning to secure infrastructure and
            modern technology, every service is part of a larger
            journey toward smarter and more reliable digital
            experiences.
          </p>
        </motion.header>

        {/* ===================================================
            JOURNEY AREA
        =================================================== */}

        <div className="journey-area">

          {/* =================================================
              WINDING SVG PATH
          ================================================= */}

          <svg
            className="journey-path"
            viewBox="0 0 500 1450"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Main Path */}

            <path
              id="servicesJourneyPath"
              className="journey-path-main"
              d="
                M 260 0
                C 260 130,
                  120 180,
                  135 320
                C 150 455,
                  390 475,
                  370 625
                C 350 770,
                  100 770,
                  125 920
                C 150 1060,
                  405 1070,
                  370 1210
                C 350 1300,
                  270 1370,
                  260 1450
              "
            />

            {/* Inner Decorative Path */}

            <path
              className="journey-path-inner"
              d="
                M 275 0
                C 275 125,
                  140 190,
                  155 315
                C 175 440,
                  410 480,
                  390 620
                C 370 755,
                  125 780,
                  150 910
                C 180 1050,
                  425 1080,
                  390 1205
                C 365 1300,
                  290 1375,
                  275 1450
              "
            />

            {/* =================================================
                ANIMATED OWL
            ================================================== */}

            <g>
              <animateMotion
                dur="18s"
                repeatCount="indefinite"
                rotate="auto"
                keyPoints="0;0.2;0.4;0.6;0.8;1"
                keyTimes="0;0.2;0.4;0.6;0.8;1"
                calcMode="linear"
              >
                <mpath href="#servicesJourneyPath" />
              </animateMotion>

              <g transform="translate(-45,-45)">
                <JourneyOwl />
              </g>
            </g>
          </svg>

          {/* =================================================
              SERVICE ITEMS
          ================================================== */}

          <div className="journey-items">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  className={`
                    journey-item
                    ${index % 2 === 0 ? "left" : "right"}
                  `}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.22,
                  }}
                  transition={{
                    delay: index * 0.12,
                  }}
                >
                  {/* =========================================
                      NUMBER
                  ========================================== */}

                  <div className="journey-number">
                    {service.number}
                  </div>

                  {/* =========================================
                      CARD
                  ========================================== */}

                  <div className="journey-card">

                    <div className="journey-card-glow" />

                    {/* CARD TOP */}

                    <div className="journey-card-top">

                      <div>
                        <div className="journey-stage">
                          {service.stage}
                        </div>
                      </div>

                      <div className="journey-icon">
                        <Icon />
                      </div>

                    </div>

                    {/* TITLE */}

                    <h3 className="journey-card-title">
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="journey-card-description">
                      {service.description}
                    </p>

                    {/* FOOTER */}

                    <div className="journey-card-footer">

                      <span className="journey-card-label">
                        TrackOwls Service
                      </span>

                      <span className="journey-arrow">
                        <FiArrowUpRight />
                      </span>

                    </div>
                  </div>
                </motion.article>
              );
            })}

          </div>
        </div>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <motion.div
          className="journey-bottom"
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.8,
          }}
        >
          <div>
            <div className="journey-bottom-label">
              Technology Expertise
            </div>

            <div className="journey-bottom-text">
              Practical technology. Meaningful outcomes.
            </div>
          </div>

          <a
            href="/services"
            className="journey-button"
          >
            Explore All Services

            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;