import React from "react";
import {
  ArrowRight,
  ScanSearch,
  BrainCircuit,
  ShieldCheck,
  Globe2,
} from "lucide-react";

function WhatWeDo() {
  const capabilities = [
    {
      number: "01",
      title: "Digital Visibility",
      icon: Globe2,
      text: "Understand where your digital content and assets appear across the online environment.",
    },
    {
      number: "02",
      title: "Content Discovery",
      icon: ScanSearch,
      text: "Identify potential instances of unauthorized use and distribution of digital content.",
    },
    {
      number: "03",
      title: "Digital Intelligence",
      icon: BrainCircuit,
      text: "Turn digital activity into meaningful intelligence that helps organizations understand emerging threats.",
    },
    {
      number: "04",
      title: "IP Protection",
      icon: ShieldCheck,
      text: "Support organizations in protecting valuable intellectual property and digital assets.",
    },
  ];

  return (
    <section
      className="
        what-we-do-section
        relative
        overflow-hidden
        bg-[#F7FAF4]
        py-20
        text-[#152019]
        dark:bg-[#070A07]
        dark:text-white
        sm:py-14
        md:py-18
        lg:py-22
      "
    >
      <style>{`
        /* =========================================================
           MAIN
        ========================================================= */

        .what-we-do-section {
          --wwd-lime: #ADD132;
          --wwd-lime-dark: #789900;
          --wwd-text: #152019;
          --wwd-muted: #687368;
          --wwd-line: rgba(126, 158, 35, 0.26);
          --wwd-border: rgba(70, 95, 65, 0.13);
        }

        /* =========================================================
           BACKGROUND ATMOSPHERE
        ========================================================= */

        .wwd-bg-orbit {
          position: absolute;
          width: 430px;
          height: 430px;
          border-radius: 999px;
          border: 1px solid rgba(173, 209, 50, 0.12);
          pointer-events: none;
        }

        .wwd-bg-orbit::before,
        .wwd-bg-orbit::after {
          content: "";
          position: absolute;
          inset: 28px;
          border-radius: inherit;
          border: 1px solid rgba(173, 209, 50, 0.09);
        }

        .wwd-bg-orbit::after {
          inset: 80px;
          border-style: dashed;
          opacity: 0.7;
        }

        .wwd-bg-left {
          left: -330px;
          top: 170px;
        }

        .wwd-bg-right {
          right: -330px;
          top: 120px;
        }

        .wwd-bg-dot {
          position: absolute;
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: var(--wwd-lime);
          box-shadow:
            0 0 0 5px rgba(173, 209, 50, 0.10),
            0 0 22px rgba(173, 209, 50, 0.38);
          animation: wwdFloatDot 4s ease-in-out infinite;
        }

        .wwd-bg-left .wwd-bg-dot {
          right: 73px;
          top: 112px;
        }

        .wwd-bg-right .wwd-bg-dot {
          left: 75px;
          top: 82px;
          animation-delay: 1.2s;
        }

        @keyframes wwdFloatDot {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        /* =========================================================
           CONTAINER
        ========================================================= */

        .wwd-container {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1480px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        /* =========================================================
           HEADER
        ========================================================= */

        .wwd-header {
          display: grid;
          grid-template-columns: minmax(0, 1.18fr) minmax(300px, 0.82fr);
          gap: 70px;
          align-items: end;
        }

        .wwd-eyebrow {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .wwd-eyebrow-line {
          width: 56px;
          height: 2px;
          flex: 0 0 auto;
          background: var(--wwd-lime);
        }

        .wwd-eyebrow-text {
          font-family: "Manrope", "Inter", Arial, sans-serif;
          font-size: 11px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.30em;
          text-transform: uppercase;
          color: #6f8d08;
        }

        .wwd-heading {
          margin-top: 42px;
          max-width: 850px;
          font-family: "Manrope", "Inter", Arial, sans-serif;
          font-size: clamp(42px, 5vw, 76px);
          font-weight: 800;
          line-height: 0.92;
          letter-spacing: -0.065em;
          color: var(--wwd-text);
        }

        .wwd-heading-accent {
          color: var(--wwd-lime-dark);
        }

        .wwd-description {
          max-width: 540px;
          margin-left: auto;
          font-family: "Manrope", "Inter", Arial, sans-serif;
          font-size: 17px;
          line-height: 1.65;
          color: var(--wwd-muted);
        }

        .wwd-ecosystem-label {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 25px;
        }

        .wwd-ecosystem-line {
          width: 44px;
          height: 2px;
          background: var(--wwd-lime);
        }

        .wwd-ecosystem-text {
          font-family: "Manrope", "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #697469;
        }

        /* =========================================================
           ECOSYSTEM
        ========================================================= */

        .wwd-ecosystem {
          position: relative;
          margin-top: 78px;
        }

        /*
          Main horizontal green connection line
        */

        .wwd-main-line {
          position: absolute;
          left: -70px;
          right: -70px;
          top: 91px;
          height: 2px;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(173, 209, 50, 0.22) 5%,
              rgba(173, 209, 50, 0.55) 15%,
              rgba(173, 209, 50, 0.55) 85%,
              rgba(173, 209, 50, 0.22) 95%,
              transparent 100%
            );
        }

        .wwd-main-line::after {
          content: "";
          position: absolute;
          top: 0;
          left: -20%;
          width: 20%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.95),
            var(--wwd-lime),
            transparent
          );
          animation: wwdLineScan 4s linear infinite;
        }

        @keyframes wwdLineScan {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(600%);
          }
        }

        .wwd-items {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 28px;
        }

        .wwd-item {
          position: relative;
          min-width: 0;
        }

        /* =========================================================
           NODE ROW
        ========================================================= */

        .wwd-node-row {
          position: relative;
          height: 184px;
          display: flex;
          align-items: flex-start;
        }

        .wwd-number {
          position: absolute;
          left: 0;
          top: 48px;
          z-index: 4;
          font-family: "Manrope", "Inter", Arial, sans-serif;
          font-size: 43px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.06em;
          color: var(--wwd-lime-dark);
        }

        .wwd-node-wrap {
          position: absolute;
          left: 50%;
          top: 0;
          width: 150px;
          height: 150px;
          transform: translateX(-50%);
        }

        /*
          Outer orbit
        */

        .wwd-orbit {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          border: 1px solid rgba(173, 209, 50, 0.35);
          transform: rotate(-18deg);
          animation: wwdOrbitRotate 12s linear infinite;
        }

        .wwd-orbit::before {
          content: "";
          position: absolute;
          inset: 10px;
          border-radius: inherit;
          border: 1px dashed rgba(173, 209, 50, 0.35);
        }

        .wwd-orbit::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          top: 14px;
          right: 22px;
          border-radius: 999px;
          background: var(--wwd-lime);
          box-shadow: 0 0 12px rgba(173, 209, 50, 0.7);
        }

        @keyframes wwdOrbitRotate {
          from {
            transform: rotate(-18deg);
          }

          to {
            transform: rotate(342deg);
          }
        }

        .wwd-orbit-secondary {
          position: absolute;
          inset: 22px;
          border-radius: 999px;
          border: 1px solid rgba(173, 209, 50, 0.20);
          border-top-color: rgba(173, 209, 50, 0.72);
          border-bottom-color: rgba(173, 209, 50, 0.08);
          animation: wwdOrbitReverse 8s linear infinite;
        }

        @keyframes wwdOrbitReverse {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(-360deg);
          }
        }

        /*
          Small orbit nodes
        */

        .wwd-orbit-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--wwd-lime);
          box-shadow: 0 0 0 4px rgba(173, 209, 50, 0.10);
        }

        .wwd-orbit-dot.one {
          left: 6px;
          top: 67px;
        }

        .wwd-orbit-dot.two {
          right: 12px;
          bottom: 34px;
        }

        /*
          Main circular icon
        */

        .wwd-icon-circle {
          position: absolute;
          inset: 31px;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(173, 209, 50, 0.65);
          background: rgba(247, 250, 244, 0.94);
          color: #1a241b;
          box-shadow:
            0 0 0 9px rgba(173, 209, 50, 0.055),
            0 12px 30px rgba(45, 65, 35, 0.08);
          transition:
            transform 450ms ease,
            box-shadow 450ms ease,
            background-color 450ms ease;
        }

        .wwd-item:hover .wwd-icon-circle {
          transform: scale(1.06);
          background: rgba(173, 209, 50, 0.16);
          box-shadow:
            0 0 0 12px rgba(173, 209, 50, 0.08),
            0 18px 42px rgba(45, 65, 35, 0.13);
        }

        .wwd-icon-circle svg {
          width: 31px;
          height: 31px;
          stroke-width: 1.6;
        }

        /*
          Connection points
        */

        .wwd-point {
          position: absolute;
          top: 85px;
          width: 11px;
          height: 11px;
          z-index: 7;
          border-radius: 50%;
          background: var(--wwd-lime);
          box-shadow:
            0 0 0 5px rgba(173, 209, 50, 0.10),
            0 0 18px rgba(173, 209, 50, 0.35);
        }

        .wwd-point-left {
          left: -6px;
        }

        .wwd-point-right {
          right: -6px;
        }

        /* =========================================================
           CONTENT
        ========================================================= */

        .wwd-content {
          position: relative;
          padding-left: 44px;
          padding-right: 18px;
        }

        .wwd-content-line {
          width: 43px;
          height: 3px;
          margin-bottom: 18px;
          background: var(--wwd-lime);
          transition: width 400ms ease;
        }

        .wwd-item:hover .wwd-content-line {
          width: 64px;
        }

        .wwd-title {
          margin: 0;
          font-family: "Manrope", "Inter", Arial, sans-serif;
          font-size: clamp(23px, 1.8vw, 30px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -0.045em;
          color: var(--wwd-text);
        }

        .wwd-small-line {
          width: 21px;
          height: 3px;
          margin-top: 13px;
          background: var(--wwd-lime);
        }

        .wwd-text {
          max-width: 330px;
          margin-top: 13px;
          font-family: "Manrope", "Inter", Arial, sans-serif;
          font-size: 15px;
          line-height: 1.65;
          color: var(--wwd-muted);
        }

        /* =========================================================
           FINAL ARROW
        ========================================================= */

        .wwd-end-arrow {
          position: absolute;
          right: -48px;
          top: 65px;
          z-index: 8;
          width: 68px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(173, 209, 50, 0.50);
          background: rgba(247, 250, 244, 0.75);
          color: #789900;
          backdrop-filter: blur(8px);
          animation: wwdArrowPulse 3s ease-in-out infinite;
        }

        .wwd-end-arrow svg {
          width: 30px;
          height: 30px;
          stroke-width: 1.5;
        }

        @keyframes wwdArrowPulse {
          0%,
          100% {
            transform: translateX(0);
            box-shadow: 0 0 0 rgba(173, 209, 50, 0);
          }

          50% {
            transform: translateX(5px);
            box-shadow: 0 0 30px rgba(173, 209, 50, 0.14);
          }
        }

        /* =========================================================
           DARK MODE
        ========================================================= */

        html.dark .what-we-do-section {
          --wwd-text: #ffffff;
          --wwd-muted: rgba(255, 255, 255, 0.52);
          --wwd-line: rgba(173, 209, 50, 0.28);
          --wwd-border: rgba(255, 255, 255, 0.08);
        }

        html.dark .wwd-eyebrow-text {
          color: #ADD132;
        }

        html.dark .wwd-heading-accent {
          color: #ADD132;
        }

        html.dark .wwd-ecosystem-text {
          color: rgba(255, 255, 255, 0.38);
        }

        html.dark .wwd-icon-circle {
          background: rgba(8, 14, 9, 0.92);
          color: #ffffff;
          border-color: rgba(173, 209, 50, 0.58);
          box-shadow:
            0 0 0 9px rgba(173, 209, 50, 0.045),
            0 14px 35px rgba(0, 0, 0, 0.30);
        }

        html.dark .wwd-item:hover .wwd-icon-circle {
          background: rgba(173, 209, 50, 0.10);
        }

        html.dark .wwd-end-arrow {
          background: rgba(7, 10, 7, 0.76);
          color: #ADD132;
        }

        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1100px) {
          .wwd-container {
            padding-left: 32px;
            padding-right: 32px;
          }

          .wwd-header {
            gap: 45px;
          }

          .wwd-heading {
            font-size: clamp(42px, 5.5vw, 64px);
          }

          .wwd-items {
            gap: 10px;
          }

          .wwd-number {
            left: 0;
            font-size: 34px;
          }

          .wwd-node-wrap {
            width: 132px;
            height: 132px;
          }

          .wwd-icon-circle {
            inset: 27px;
          }

          .wwd-point {
            top: 76px;
          }

          .wwd-main-line {
            top: 76px;
          }

          .wwd-node-row {
            height: 170px;
          }

          .wwd-content {
            padding-left: 28px;
            padding-right: 8px;
          }

          .wwd-title {
            font-size: 23px;
          }

          .wwd-text {
            font-size: 13px;
            line-height: 1.55;
          }

          .wwd-end-arrow {
            right: -30px;
            top: 55px;
            width: 54px;
            height: 54px;
          }
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 767px) {
          .wwd-bg-orbit {
            width: 280px;
            height: 280px;
          }

          .wwd-bg-left {
            left: -230px;
            top: 300px;
          }

          .wwd-bg-right {
            right: -230px;
            top: 620px;
          }

          .wwd-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .wwd-header {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .wwd-eyebrow {
            gap: 12px;
          }

          .wwd-eyebrow-line {
            width: 36px;
          }

          .wwd-eyebrow-text {
            font-size: 9px;
            letter-spacing: 0.25em;
          }

          .wwd-heading {
            margin-top: 28px;
            font-size: clamp(40px, 12vw, 56px);
            line-height: 0.94;
          }

          .wwd-description {
            margin-left: 0;
            font-size: 14px;
            line-height: 1.7;
          }

          .wwd-ecosystem-label {
            margin-top: 20px;
          }

          .wwd-ecosystem {
            margin-top: 55px;
          }

          /*
            Mobile becomes a vertical connected system.
          */

          .wwd-main-line {
            left: 47px;
            right: auto;
            top: 0;
            width: 2px;
            height: calc(100% - 30px);
            background: linear-gradient(
              180deg,
              transparent,
              rgba(173, 209, 50, 0.55) 10%,
              rgba(173, 209, 50, 0.55) 90%,
              transparent
            );
          }

          .wwd-main-line::after {
            top: -20%;
            left: 0;
            width: 100%;
            height: 20%;
            animation: wwdVerticalScan 4s linear infinite;
          }

          @keyframes wwdVerticalScan {
            from {
              transform: translateY(0);
            }

            to {
              transform: translateY(600%);
            }
          }

          .wwd-items {
            display: flex;
            flex-direction: column;
            gap: 0;
          }

          .wwd-item {
            min-height: 255px;
          }

          .wwd-node-row {
            height: 150px;
          }

          .wwd-number {
            left: 0;
            top: 51px;
            font-size: 25px;
          }

          .wwd-node-wrap {
            left: 48px;
            top: 12px;
            width: 105px;
            height: 105px;
            transform: translateX(-50%);
          }

          .wwd-orbit {
            inset: 0;
          }

          .wwd-orbit-secondary {
            inset: 17px;
          }

          .wwd-icon-circle {
            inset: 24px;
          }

          .wwd-icon-circle svg {
            width: 24px;
            height: 24px;
          }

          .wwd-point {
            width: 8px;
            height: 8px;
            top: 71px;
          }

          .wwd-point-left {
            left: 44px;
          }

          .wwd-point-right {
            display: none;
          }

          .wwd-content {
            margin-left: 88px;
            padding: 0 0 0 0;
          }

          .wwd-content-line {
            width: 34px;
            height: 2px;
            margin-bottom: 14px;
          }

          .wwd-title {
            font-size: 25px;
          }

          .wwd-text {
            max-width: 100%;
            margin-top: 13px;
            font-size: 14px;
            line-height: 1.65;
          }

          .wwd-end-arrow {
            display: none;
          }
        }

        @media (max-width: 430px) {
          .wwd-heading {
            font-size: 39px;
          }

          .wwd-item {
            min-height: 265px;
          }

          .wwd-number {
            font-size: 22px;
          }

          .wwd-content {
            margin-left: 83px;
          }

          .wwd-title {
            font-size: 23px;
          }

          .wwd-text {
            font-size: 13px;
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {
          .wwd-bg-dot,
          .wwd-orbit,
          .wwd-orbit-secondary,
          .wwd-main-line::after,
          .wwd-end-arrow {
            animation: none !important;
          }

          .wwd-icon-circle,
          .wwd-content-line {
            transition: none !important;
          }
        }
      `}</style>

      {/* =========================================================
          BACKGROUND ORBITS
      ========================================================= */}

      <div className="wwd-bg-orbit wwd-bg-left">
        <span className="wwd-bg-dot" />
      </div>

      <div className="wwd-bg-orbit wwd-bg-right">
        <span className="wwd-bg-dot" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="wwd-container">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="wwd-header">

          {/* LEFT */}
          <div>
            <div className="wwd-eyebrow">
              <span className="wwd-eyebrow-line" />

              <span className="wwd-eyebrow-text">
                What We Do
              </span>
            </div>

            <h2 className="wwd-heading">
              Visibility. Intelligence.
              <br />
              <span className="wwd-heading-accent">
                Protection.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p className="wwd-description">
              We combine digital monitoring, intelligent discovery and
              protection workflows to help organizations understand what is
              happening around their valuable digital assets.
            </p>

            <div className="wwd-ecosystem-label">
              <span className="wwd-ecosystem-line" />

              <span className="wwd-ecosystem-text">
                TrackOwls Protection Ecosystem
              </span>
            </div>
          </div>
        </div>

        {/* =======================================================
            PROTECTION ECOSYSTEM
        ======================================================= */}

        <div className="wwd-ecosystem">

          {/* MAIN CONNECTION */}
          <div className="wwd-main-line" />

          <div className="wwd-items">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="wwd-item"
                >

                  {/* NODE / NUMBER */}
                  <div className="wwd-node-row">

                    <span className="wwd-number">
                      {item.number}
                    </span>

                    <div className="wwd-node-wrap">

                      <div className="wwd-orbit" />

                      <div className="wwd-orbit-secondary" />

                      <span className="wwd-orbit-dot one" />
                      <span className="wwd-orbit-dot two" />

                      <div className="wwd-icon-circle">
                        <Icon />
                      </div>
                    </div>

                    {/* LINE CONNECTION POINTS */}
                    <span className="wwd-point wwd-point-left" />

                    {index < capabilities.length - 1 && (
                      <span className="wwd-point wwd-point-right" />
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="wwd-content">

                    <div className="wwd-content-line" />

                    <h3 className="wwd-title">
                      {item.title}
                    </h3>

                    <div className="wwd-small-line" />

                    <p className="wwd-text">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

          {/* FINAL ARROW */}
          <div className="wwd-end-arrow">
            <ArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;