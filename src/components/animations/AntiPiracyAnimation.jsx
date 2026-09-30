import React, { useEffect, useState } from "react";

import {
  Activity,
  CheckCircle2,
  Globe2,
  Radar,
  ScanSearch,
  Search,
  ShieldCheck,
  ShieldAlert,
  Target,
  Zap,
} from "lucide-react";

/* =========================================================
   SCENES
========================================================= */

const scenes = [
  {
    id: "radar",
    label: "Threat Radar",
    number: "01",
  },
  {
    id: "discovery",
    label: "Content Discovery",
    number: "02",
  },
  {
    id: "protection",
    label: "Rights Protection",
    number: "03",
  },
  {
    id: "takedown",
    label: "Protection Flow",
    number: "04",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

function AntiPiracyAnimation() {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScene((current) => (current + 1) % scenes.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const currentScene = scenes[activeScene];

  return (
    <div className="track-intelligence-animation">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}
        <div className="track-ai-background" />

      <div className="track-ai-glow track-ai-glow-one" />
      <div className="track-ai-glow track-ai-glow-two" />

      <div className="track-ai-grid" />

      {/* =====================================================
          MAIN VISUAL
      ===================================================== */}

      <div className="track-ai-visual">

        {/* Decorative outer rings */}

        <div className="track-ai-outer-ring ring-one" />
        <div className="track-ai-outer-ring ring-two" />
        <div className="track-ai-outer-ring ring-three" />

        {/* Top technical label */}

        <div className="track-ai-top-label">
          <span className="track-ai-status-dot" />

          <span>
            TRACKOWLS INTELLIGENCE
          </span>

          <span className="track-ai-live">
            LIVE
          </span>
        </div>

        {/* Scene title */}

        <div className="track-ai-scene-title">
          <span>{currentScene.number}</span>
          {currentScene.label}
        </div>

        {/* =================================================
            SCENE CONTENT
        ================================================= */}

        <div
          className="track-ai-scene"
          key={currentScene.id}
        >
          {activeScene === 0 && <ThreatRadar />}

          {activeScene === 1 && <ContentDiscovery />}

          {activeScene === 2 && <RightsProtection />}

          {activeScene === 3 && <ProtectionFlow />}
        </div>

        {/* =================================================
            BOTTOM INTELLIGENCE LINE
        ================================================= */}

        <div className="track-ai-bottom">

          <div>
            <span>MONITORING</span>
            <strong>24/7</strong>
          </div>

          <div className="track-ai-bottom-line" />

          <div>
            <span>DETECTION</span>
            <strong>LIVE</strong>
          </div>

          <div className="track-ai-bottom-line" />

          <div>
            <span>PROTECTION</span>
            <strong>ACTIVE</strong>
          </div>

        </div>

        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="track-ai-progress">
          {scenes.map((scene, index) => (
            <span
              key={scene.id}
              className={index === activeScene ? "active" : ""}
            />
          ))}
        </div>

      </div>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`

        /* =====================================================
           VARIABLES
        ===================================================== */

        :root {
          --ai-green: #6d900b;
          --ai-green-bright: #8eaf1e;
          --ai-green-light: #add132;

          --ai-heading: #162018;
          --ai-text: #35463b;
          --ai-muted: #66766c;

          --ai-line: rgba(70, 100, 78, 0.22);
          --ai-line-light: rgba(70, 100, 78, 0.12);

          --ai-glow: rgba(142, 175, 30, 0.22);

          --ai-background: #f7faf4;
        }

        /* =====================================================
           MAIN WRAPPER
        ===================================================== */

/* =====================================================
   NORMAL LIGHT / DARK BACKGROUND
===================================================== */

.track-ai-background {
  position: absolute;

  inset: -20px;

  z-index: -10;

  border-radius: 32px;

  background: #f7f9f5;

  border: 1px solid rgba(70, 100, 78, 0.08);

  pointer-events: none;
}


/* DARK MODE */

html.dark .track-ai-background {
  background: #07100c;

  border-color: rgba(173, 209, 50, 0.08);
}

        .track-intelligence-animation {
          position: relative;

          width: 100%;
          max-width: 580px;

          min-height: 510px;

          margin: 0 auto;

          isolation: isolate;
        }

        /* =====================================================
           BACKGROUND GLOW
        ===================================================== */

        .track-ai-glow {
          position: absolute;

          border-radius: 999px;

          pointer-events: none;

          filter: blur(65px);

          z-index: -3;
        }

        .track-ai-glow-one {
          width: 250px;
          height: 250px;

          top: 5%;
          right: 5%;

          background:
            rgba(173, 209, 50, 0.13);

          animation:
            aiGlowOne 6s ease-in-out infinite;
        }

        .track-ai-glow-two {
          width: 220px;
          height: 220px;

          bottom: 5%;
          left: 0;

          background:
            rgba(36, 173, 126, 0.08);

          animation:
            aiGlowTwo 7s ease-in-out infinite;
        }

        /* =====================================================
           GRID
        ===================================================== */

        .track-ai-grid {
          position: absolute;

          inset: 5% 0;

          z-index: -2;

          opacity: 0.45;

          background-image:
            linear-gradient(
              rgba(109, 144, 11, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(109, 144, 11, 0.045) 1px,
              transparent 1px
            );

          background-size: 42px 42px;

          mask-image:
            radial-gradient(
              ellipse at center,
              black 10%,
              transparent 72%
            );
        }

        /* =====================================================
           MAIN VISUAL
        ===================================================== */

        .track-ai-visual {
          position: relative;

          width: 100%;
          min-height: 475px;

          overflow: hidden;

          border-radius: 32px;

          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(173, 209, 50, 0.075),
              transparent 34%
            );

          border:
            1px solid rgba(84, 113, 79, 0.13);

          box-shadow:
            0 35px 90px rgba(58, 83, 52, 0.08);

          isolation: isolate;
        }

        /*
          Very subtle top illumination.
        */

        .track-ai-visual::before {
          content: "";

          position: absolute;

          width: 65%;
          height: 1px;

          top: 22px;
          left: 17.5%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(109, 144, 11, 0.45),
              transparent
            );

          box-shadow:
            0 0 18px rgba(109, 144, 11, 0.18);
        }

        /*
          Bottom illumination.
        */

        .track-ai-visual::after {
          content: "";

          position: absolute;

          width: 60%;
          height: 100px;

          bottom: -75px;
          left: 20%;

          border-radius: 50%;

          background:
            rgba(173, 209, 50, 0.08);

          filter: blur(35px);

          pointer-events: none;
        }

        /* =====================================================
           OUTER ORBITAL RINGS
        ===================================================== */

        .track-ai-outer-ring {
          position: absolute;

          left: 50%;
          top: 51%;

          border-radius: 50%;

          border:
            1px solid rgba(109, 144, 11, 0.09);

          pointer-events: none;

          z-index: -1;
        }

        .track-ai-outer-ring.ring-one {
          width: 350px;
          height: 350px;

          transform:
            translate(-50%, -50%);

          animation:
            outerRotate 18s linear infinite;
        }

        .track-ai-outer-ring.ring-two {
          width: 430px;
          height: 220px;

          transform:
            translate(-50%, -50%)
            rotate(18deg);

          border-color:
            rgba(109, 144, 11, 0.07);

          animation:
            outerRotateReverse 22s linear infinite;
        }

        .track-ai-outer-ring.ring-three {
          width: 475px;
          height: 170px;

          transform:
            translate(-50%, -50%)
            rotate(-24deg);

          border-color:
            rgba(36, 173, 126, 0.06);

          animation:
            outerRotate 28s linear infinite;
        }

        /* =====================================================
           TOP LABEL
        ===================================================== */

        .track-ai-top-label {
          position: absolute;

          top: 32px;
          left: 50%;

          transform:
            translateX(-50%);

          display: flex;
          align-items: center;

          gap: 8px;

          white-space: nowrap;

          color:
            var(--ai-muted);

          font-size: 8px;
          font-weight: 900;

          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .track-ai-status-dot {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background:
            #20a978;

          box-shadow:
            0 0 9px rgba(32, 169, 120, 0.55);

          animation:
            statusPulse 1.8s ease-in-out infinite;
        }

        .track-ai-live {
          color:
            var(--ai-green);

          font-size: 7px;

          letter-spacing: 0.13em;
        }

        /* =====================================================
           SCENE TITLE
        ===================================================== */

        .track-ai-scene-title {
          position: absolute;

          top: 62px;
          left: 50%;

          transform:
            translateX(-50%);

          display: flex;
          align-items: center;

          gap: 8px;

          white-space: nowrap;

          color:
            var(--ai-heading);

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.08em;

          text-transform: uppercase;
        }

        .track-ai-scene-title span {
          color:
            var(--ai-green);

          font-size: 8px;

          letter-spacing: 0.12em;
        }

        /* =====================================================
           SCENE
        ===================================================== */

        .track-ai-scene {
          position: absolute;

          inset: 0;

          padding:
            90px 25px 70px;

          animation:
            sceneAppear 650ms
            cubic-bezier(
              0.16,
              1,
              0.3,
              1
            );
        }

        /* =====================================================
           SCENE 01
           THREAT RADAR
        ===================================================== */

        .ai-radar-scene {
          position: relative;

          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ai-radar-core {
          position: relative;

          width: 240px;
          height: 240px;

          border-radius: 50%;

          border:
            1px solid rgba(109, 144, 11, 0.2);

          background:
            radial-gradient(
              circle,
              rgba(173, 209, 50, 0.08),
              transparent 65%
            );

          box-shadow:
            0 0 70px rgba(109, 144, 11, 0.05);
        }

        /*
          Radar circles.
        */

        .ai-radar-circle {
          position: absolute;

          border:
            1px solid rgba(109, 144, 11, 0.13);

          border-radius: 50%;

          left: 50%;
          top: 50%;

          transform:
            translate(-50%, -50%);
        }

        .ai-radar-circle.one {
          width: 68%;
          height: 68%;
        }

        .ai-radar-circle.two {
          width: 42%;
          height: 42%;
        }

        .ai-radar-circle.three {
          width: 17%;
          height: 17%;

          border-color:
            rgba(109, 144, 11, 0.2);
        }

        /*
          Cross lines.
        */

        .ai-radar-horizontal {
          position: absolute;

          top: 50%;
          left: 0;
          right: 0;

          height: 1px;

          background:
            rgba(109, 144, 11, 0.11);
        }

        .ai-radar-vertical {
          position: absolute;

          left: 50%;
          top: 0;
          bottom: 0;

          width: 1px;

          background:
            rgba(109, 144, 11, 0.11);
        }

        /*
          Sweep.
        */

        .ai-radar-sweep {
          position: absolute;

          inset: 0;

          overflow: hidden;

          border-radius: 50%;
        }

        .ai-radar-sweep::before {
          content: "";

          position: absolute;

          width: 50%;
          height: 50%;

          left: 50%;
          top: 0;

          transform-origin:
            bottom left;

          background:
            conic-gradient(
              from 0deg,
              rgba(109, 144, 11, 0.24),
              rgba(109, 144, 11, 0.04),
              transparent
            );

          clip-path:
            polygon(
              0 0,
              100% 0,
              0 100%
            );

          animation:
            radarRotate 3s linear infinite;
        }

        /*
          Center.
        */

        .ai-radar-center {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 17px;
          height: 17px;

          transform:
            translate(-50%, -50%);

          border:
            2px solid var(--ai-green);

          border-radius: 50%;

          background:
            var(--ai-background);

          box-shadow:
            0 0 20px rgba(109, 144, 11, 0.4);

          z-index: 5;
        }

        .ai-radar-center::after {
          content: "";

          position: absolute;

          inset: 4px;

          border-radius: 50%;

          background:
            var(--ai-green);

          animation:
            corePulse 1.6s ease-in-out infinite;
        }

        /*
          Threat points.
        */

        .ai-threat {
          position: absolute;

          width: 7px;
          height: 7px;

          border-radius: 50%;

          background:
            #d78a29;

          box-shadow:
            0 0 15px rgba(215, 138, 41, 0.55);

          animation:
            threatPulse 1.7s ease-in-out infinite;
        }

        .ai-threat.one {
          top: 22%;
          right: 25%;
        }

        .ai-threat.two {
          bottom: 25%;
          left: 21%;

          animation-delay: 0.4s;
        }

        .ai-threat.three {
          top: 31%;
          left: 18%;

          animation-delay: 0.8s;
        }

        .ai-threat.four {
          right: 19%;
          bottom: 19%;

          animation-delay: 1.1s;
        }

        /*
          Radar labels.
        */

        .ai-radar-label {
          position: absolute;

          display: flex;
          align-items: center;

          gap: 6px;

          color:
            var(--ai-text);

          font-size: 7px;
          font-weight: 800;

          letter-spacing: 0.1em;

          text-transform: uppercase;

          white-space: nowrap;
        }

        .ai-radar-label::before {
          content: "";

          width: 4px;
          height: 4px;

          border-radius: 50%;

          background:
            #d78a29;
        }

        .ai-radar-label.one {
          top: 18%;
          right: 1%;
        }

        .ai-radar-label.two {
          bottom: 18%;
          left: 1%;
        }

        /*
          Radar metric.
        */

        .ai-radar-metric {
          position: absolute;

          right: 8%;
          top: 50%;

          transform:
            translateY(-50%);

          text-align: left;
        }

        .ai-radar-metric strong {
          display: block;

          color:
            var(--ai-heading);

          font-size: 26px;

          line-height: 1;

          font-weight: 800;
        }

        .ai-radar-metric span {
          display: block;

          margin-top: 5px;

          color:
            var(--ai-muted);

          font-size: 6px;

          font-weight: 900;

          letter-spacing: 0.14em;
        }

        /* =====================================================
           SCENE 02
           CONTENT DISCOVERY
        ===================================================== */

        .ai-discovery-scene {
          position: relative;

          width: 100%;
          height: 100%;
        }

        /*
          Connection system.
        */

        .ai-discovery-lines {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          overflow: visible;

          pointer-events: none;
        }

        .ai-discovery-lines line {
          stroke:
            rgba(109, 144, 11, 0.22);

          stroke-width:
            0.2;

          vector-effect:
            non-scaling-stroke;

          stroke-dasharray:
            3 4;

          animation:
            lineDash 5s linear infinite;
        }

        /*
          Center intelligence core.
        */

        .ai-discovery-core {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 92px;
          height: 92px;

          transform:
            translate(-50%, -50%);

          display: flex;
          align-items: center;
          justify-content: center;

          color:
            var(--ai-green);

          border:
            1px solid rgba(109, 144, 11, 0.25);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(173, 209, 50, 0.15),
              rgba(173, 209, 50, 0.035) 55%,
              transparent 70%
            );

          box-shadow:
            0 0 55px rgba(109, 144, 11, 0.08);

          z-index: 10;

          animation:
            discoveryCore 2.5s ease-in-out infinite;
        }

        .ai-discovery-core::before {
          content: "";

          position: absolute;

          inset: -12px;

          border:
            1px solid rgba(109, 144, 11, 0.1);

          border-radius: 50%;

          animation:
            discoveryRing 2.5s ease-out infinite;
        }

        .ai-discovery-core::after {
          content: "";

          position: absolute;

          inset: 17px;

          border:
            1px dashed rgba(109, 144, 11, 0.17);

          border-radius: 50%;

          animation:
            discoveryRotate 10s linear infinite;
        }

        .ai-discovery-core svg {
          position: relative;

          z-index: 5;
        }

        /*
          Source labels.
          NO CARDS.
        */

        .ai-source {
          position: absolute;

          display: flex;
          align-items: center;

          gap: 8px;

          color:
            var(--ai-text);

          z-index: 5;

          animation:
            sourceFloat 3.2s ease-in-out infinite;
        }

        .ai-source-icon {
          display: flex;

          width: 29px;
          height: 29px;

          align-items: center;
          justify-content: center;

          border:
            1px solid rgba(109, 144, 11, 0.2);

          border-radius: 50%;

          color:
            var(--ai-green);

          background:
            rgba(173, 209, 50, 0.07);
        }

        .ai-source-text strong {
          display: block;

          color:
            var(--ai-heading);

          font-size: 8px;

          font-weight: 800;

          letter-spacing: 0.05em;
        }

        .ai-source-text span {
          display: block;

          margin-top: 3px;

          color:
            var(--ai-muted);

          font-size: 6px;

          letter-spacing: 0.05em;
        }

        .ai-source.one {
          top: 7%;
          left: 3%;
        }

        .ai-source.two {
          top: 7%;
          right: 3%;

          animation-delay: 0.5s;
        }

        .ai-source.three {
          bottom: 8%;
          left: 7%;

          animation-delay: 1s;
        }

        .ai-source.four {
          right: 6%;
          bottom: 8%;

          animation-delay: 1.5s;
        }

        /*
          Small source signal.
        */

        .ai-source-signal {
          position: absolute;

          width: 4px;
          height: 4px;

          border-radius: 50%;

          background:
            var(--ai-green);

          box-shadow:
            0 0 10px rgba(109, 144, 11, 0.4);

          animation:
            sourceSignal 2s ease-in-out infinite;
        }

        .ai-source.one .ai-source-signal {
          right: -15px;
          bottom: -4px;
        }

        .ai-source.two .ai-source-signal {
          left: -15px;
          bottom: -4px;
        }

        .ai-source.three .ai-source-signal {
          right: -15px;
          top: -4px;
        }

        .ai-source.four .ai-source-signal {
          left: -15px;
          top: -4px;
        }

        /* =====================================================
           SCENE 03
           RIGHTS PROTECTION
        ===================================================== */

        .ai-protection-scene {
          position: relative;

          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        /*
          Rotating elliptical system.
        */

        .ai-protection-orbit {
          position: absolute;

          width: 310px;
          height: 170px;

          border:
            1px solid rgba(109, 144, 11, 0.12);

          border-radius: 50%;

          transform:
            rotate(25deg);

          animation:
            protectionOrbit 12s linear infinite;
        }

        .ai-protection-orbit.two {
          width: 260px;
          height: 210px;

          transform:
            rotate(-35deg);

          border-color:
            rgba(36, 173, 126, 0.1);

          animation-duration:
            16s;

          animation-direction:
            reverse;
        }

        .ai-protection-orbit.three {
          width: 190px;
          height: 285px;

          transform:
            rotate(65deg);

          border-color:
            rgba(109, 144, 11, 0.08);

          animation-duration:
            20s;
        }

        /*
          Shield.
        */

        .ai-shield {
          position: relative;

          width: 112px;
          height: 132px;

          display: flex;
          align-items: center;
          justify-content: center;

          color:
            var(--ai-green);

          clip-path:
            polygon(
              50% 0,
              90% 15%,
              86% 62%,
              50% 100%,
              14% 62%,
              10% 15%
            );

          background:
            linear-gradient(
              145deg,
              rgba(173, 209, 50, 0.2),
              rgba(173, 209, 50, 0.035)
            );

          filter:
            drop-shadow(
              0 0 25px rgba(109, 144, 11, 0.12)
            );

          z-index: 5;

          animation:
            shieldFloat 3.2s ease-in-out infinite;
        }

        .ai-shield::before {
          content: "";

          position: absolute;

          inset: 2px;

          clip-path: inherit;

          background:
            var(--ai-background);
        }

        .ai-shield svg {
          position: relative;

          z-index: 2;
        }

        /*
          Shield center glow.
        */

        .ai-shield-glow {
          position: absolute;

          width: 180px;
          height: 180px;

          border-radius: 50%;

          background:
            rgba(173, 209, 50, 0.08);

          filter:
            blur(30px);

          animation:
            shieldGlow 3s ease-in-out infinite;
        }

        /*
          Protection labels.
          No boxes.
        */

        .ai-protection-label {
          position: absolute;

          display: flex;
          align-items: center;

          gap: 7px;

          color:
            var(--ai-text);

          font-size: 7px;

          font-weight: 800;

          letter-spacing: 0.1em;

          text-transform: uppercase;
        }

        .ai-protection-label::before {
          content: "";

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background:
            var(--ai-green);

          box-shadow:
            0 0 10px rgba(109, 144, 11, 0.4);
        }

        .ai-protection-label.one {
          top: 15%;
          left: 4%;
        }

        .ai-protection-label.two {
          right: 4%;
          bottom: 17%;
        }

        .ai-protection-label.three {
          right: 11%;
          top: 25%;
        }

        /*
          Protection scanning dots.
        */

        .ai-protection-dot {
          position: absolute;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background:
            var(--ai-green);

          box-shadow:
            0 0 12px rgba(109, 144, 11, 0.55);

          animation:
            protectionDot 2.4s ease-in-out infinite;
        }

        .ai-protection-dot.one {
          top: 23%;
          left: 25%;
        }

        .ai-protection-dot.two {
          right: 24%;
          bottom: 26%;

          animation-delay: 0.7s;
        }

        .ai-protection-dot.three {
          right: 20%;
          top: 40%;

          animation-delay: 1.2s;
        }

        /* =====================================================
           SCENE 04
           PROTECTION FLOW
        ===================================================== */

        .ai-flow-scene {
          position: relative;

          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        /*
          Main horizontal intelligence line.
        */

        .ai-flow-line {
          position: absolute;

          left: 12%;
          right: 12%;

          top: 50%;

          height: 1px;

          background:
            linear-gradient(
              90deg,
              rgba(215, 138, 41, 0.35),
              rgba(109, 144, 11, 0.45),
              rgba(32, 169, 120, 0.5)
            );
        }

        /*
          Animated signal.
        */

        .ai-flow-signal {
          position: absolute;

          top: 50%;

          left: 12%;

          width: 7px;
          height: 7px;

          transform:
            translateY(-50%);

          border-radius: 50%;

          background:
            var(--ai-green);

          box-shadow:
            0 0 16px rgba(109, 144, 11, 0.55);

          animation:
            flowSignal 2.7s linear infinite;
        }

        .ai-flow-signal.two {
          animation-delay: 0.9s;
        }

        .ai-flow-signal.three {
          animation-delay: 1.8s;
        }

        /*
          Flow nodes.
          No cards.
        */

        .ai-flow-node {
          position: absolute;

          top: 50%;

          transform:
            translateY(-50%);

          display: flex;
          flex-direction: column;
          align-items: center;

          width: 120px;

          text-align: center;

          z-index: 5;
        }

        .ai-flow-node.one {
          left: 7%;
        }

        .ai-flow-node.two {
          left: 50%;

          transform:
            translate(-50%, -50%);
        }

        .ai-flow-node.three {
          right: 7%;
        }

        .ai-flow-icon {
          position: relative;

          width: 54px;
          height: 54px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background:
            var(--ai-background);

          border:
            1px solid rgba(109, 144, 11, 0.25);

          color:
            var(--ai-green);

          box-shadow:
            0 0 25px rgba(109, 144, 11, 0.05);
        }

        .ai-flow-icon::before {
          content: "";

          position: absolute;

          inset: -7px;

          border:
            1px solid rgba(109, 144, 11, 0.08);

          border-radius: 50%;

          animation:
            flowNodePulse 2.2s ease-out infinite;
        }

        .ai-flow-node.warning .ai-flow-icon {
          color:
            #c57c24;

          border-color:
            rgba(197, 124, 36, 0.3);
        }

        .ai-flow-node.success .ai-flow-icon {
          color:
            #15966c;

          border-color:
            rgba(21, 150, 108, 0.3);
        }

        .ai-flow-title {
          margin-top: 14px;

          color:
            var(--ai-heading);

          font-size: 8px;

          font-weight: 900;

          letter-spacing: 0.04em;
        }

        .ai-flow-subtitle {
          margin-top: 4px;

          color:
            var(--ai-muted);

          font-size: 6px;

          letter-spacing: 0.04em;
        }

        .ai-flow-status {
          margin-top: 7px;

          color:
            var(--ai-green);

          font-size: 6px;

          font-weight: 900;

          letter-spacing: 0.12em;
        }

        .ai-flow-node.warning .ai-flow-status {
          color:
            #c57c24;
        }

        .ai-flow-node.success .ai-flow-status {
          color:
            #15966c;
        }

        /* =====================================================
           BOTTOM METRICS
        ===================================================== */

        .track-ai-bottom {
          position: absolute;

          left: 18%;
          right: 18%;
          bottom: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 15px;

          z-index: 20;
        }

        .track-ai-bottom > div:not(.track-ai-bottom-line) {
          display: flex;
          align-items: center;

          gap: 6px;
        }

        .track-ai-bottom span {
          color:
            var(--ai-muted);

          font-size: 5.5px;

          font-weight: 800;

          letter-spacing: 0.12em;
        }

        .track-ai-bottom strong {
          color:
            var(--ai-heading);

          font-size: 7px;

          font-weight: 900;
        }

        .track-ai-bottom-line {
          width: 22px;
          height: 1px;

          background:
            rgba(109, 144, 11, 0.16);
        }

        /* =====================================================
           PROGRESS
        ===================================================== */

        .track-ai-progress {
          position: absolute;

          left: 50%;
          bottom: 17px;

          transform:
            translateX(-50%);

          display: flex;
          align-items: center;

          gap: 5px;
        }

        .track-ai-progress span {
          width: 15px;
          height: 2px;

          border-radius: 999px;

          background:
            rgba(80, 105, 87, 0.18);

          transition:
            all 450ms ease;
        }

        .track-ai-progress span.active {
          width: 30px;

          background:
            var(--ai-green-bright);

          box-shadow:
            0 0 10px rgba(109, 144, 11, 0.25);
        }

        /* =====================================================
           FLOATING LABELS
        ===================================================== */

        .track-ai-floating-label {
          position: absolute;

          display: flex;
          align-items: center;

          gap: 7px;

          color:
            var(--ai-muted);

          font-size: 7px;

          font-weight: 800;

          letter-spacing: 0.08em;

          text-transform: uppercase;

          white-space: nowrap;

          animation:
            floatingTechLabel 4s ease-in-out infinite;

          z-index: 20;
        }

        .track-ai-floating-label span {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background:
            var(--ai-green);

          box-shadow:
            0 0 9px rgba(109, 144, 11, 0.4);
        }

        .track-ai-floating-label.label-one {
          top: 28%;
          left: -38px;
        }

        .track-ai-floating-label.label-two {
          top: 15%;
          right: -40px;

          animation-delay:
            1s;
        }

        .track-ai-floating-label.label-three {
          bottom: 22%;
          right: -32px;

          animation-delay:
            2s;
        }

        /* =====================================================
           DARK MODE
        ===================================================== */

        html.dark {
          --ai-green: #add132;
          --ai-green-bright: #add132;
          --ai-green-light: #c8eb62;

          --ai-heading: #edf7f1;
          --ai-text: rgba(221, 239, 230, 0.78);
          --ai-muted: rgba(154, 188, 176, 0.58);

          --ai-line: rgba(111, 157, 139, 0.22);
          --ai-line-light: rgba(111, 157, 139, 0.12);

          --ai-glow: rgba(173, 209, 50, 0.18);

          --ai-background: #071a15;
        }

        html.dark .track-ai-visual {
          border-color:
            rgba(111, 157, 139, 0.2);

          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(173, 209, 50, 0.06),
              transparent 35%
            );

          box-shadow:
            0 40px 100px rgba(0, 0, 0, 0.2);
        }

        html.dark .track-ai-visual::before {
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(173, 209, 50, 0.55),
              transparent
            );

          box-shadow:
            0 0 18px rgba(173, 209, 50, 0.2);
        }

        html.dark .track-ai-grid {
          opacity: 0.22;

          background-image:
            linear-gradient(
              rgba(173, 209, 50, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(173, 209, 50, 0.055) 1px,
              transparent 1px
            );
        }

        html.dark .track-ai-outer-ring {
          border-color:
            rgba(173, 209, 50, 0.08);
        }

        html.dark .track-ai-outer-ring.ring-two {
          border-color:
            rgba(173, 209, 50, 0.06);
        }

        html.dark .track-ai-outer-ring.ring-three {
          border-color:
            rgba(36, 197, 138, 0.055);
        }

        html.dark .ai-radar-core {
          border-color:
            rgba(173, 209, 50, 0.22);

          background:
            radial-gradient(
              circle,
              rgba(173, 209, 50, 0.07),
              transparent 65%
            );

          box-shadow:
            0 0 70px rgba(173, 209, 50, 0.05);
        }

        html.dark .ai-radar-circle {
          border-color:
            rgba(173, 209, 50, 0.13);
        }

        html.dark .ai-radar-circle.three {
          border-color:
            rgba(173, 209, 50, 0.22);
        }

        html.dark .ai-radar-horizontal,
        html.dark .ai-radar-vertical {
          background:
            rgba(173, 209, 50, 0.11);
        }

        html.dark .ai-radar-center {
          border-color:
            #add132;

          background:
            #071a15;

          box-shadow:
            0 0 22px rgba(173, 209, 50, 0.5);
        }

        html.dark .ai-radar-center::after {
          background:
            #add132;
        }

        html.dark .ai-radar-label {
          color:
            rgba(221, 239, 230, 0.72);
        }

        html.dark .ai-radar-metric strong {
          color:
            #edf7f1;
        }

        html.dark .ai-radar-metric span {
          color:
            rgba(154, 188, 176, 0.55);
        }

        html.dark .ai-discovery-lines line {
          stroke:
            rgba(173, 209, 50, 0.23);
        }

        html.dark .ai-discovery-core {
          color:
            #add132;

          border-color:
            rgba(173, 209, 50, 0.3);

          background:
            radial-gradient(
              circle,
              rgba(173, 209, 50, 0.12),
              rgba(173, 209, 50, 0.025) 55%,
              transparent 70%
            );

          box-shadow:
            0 0 60px rgba(173, 209, 50, 0.07);
        }

        html.dark .ai-discovery-core::before {
          border-color:
            rgba(173, 209, 50, 0.11);
        }

        html.dark .ai-discovery-core::after {
          border-color:
            rgba(173, 209, 50, 0.15);
        }

        html.dark .ai-source-icon {
          border-color:
            rgba(173, 209, 50, 0.2);

          color:
            #add132;

          background:
            rgba(173, 209, 50, 0.06);
        }

        html.dark .ai-source-text strong {
          color:
            #e1eee8;
        }

        html.dark .ai-source-text span {
          color:
            rgba(154, 188, 176, 0.52);
        }

        html.dark .ai-protection-orbit {
          border-color:
            rgba(173, 209, 50, 0.11);
        }

        html.dark .ai-protection-orbit.two {
          border-color:
            rgba(36, 197, 138, 0.08);
        }

        html.dark .ai-protection-orbit.three {
          border-color:
            rgba(173, 209, 50, 0.07);
        }

        html.dark .ai-shield {
          color:
            #add132;

          background:
            linear-gradient(
              145deg,
              rgba(173, 209, 50, 0.2),
              rgba(173, 209, 50, 0.025)
            );

          filter:
            drop-shadow(
              0 0 28px rgba(173, 209, 50, 0.18)
            );
        }

        html.dark .ai-shield::before {
          background:
            #071a15;
        }

        html.dark .ai-protection-label {
          color:
            rgba(221, 239, 230, 0.7);
        }

        html.dark .ai-flow-line {
          background:
            linear-gradient(
              90deg,
              rgba(215, 138, 41, 0.4),
              rgba(173, 209, 50, 0.45),
              rgba(32, 197, 138, 0.45)
            );
        }

        html.dark .ai-flow-icon {
          background:
            #071a15;

          border-color:
            rgba(173, 209, 50, 0.25);

          color:
            #add132;

          box-shadow:
            0 0 28px rgba(173, 209, 50, 0.05);
        }

        html.dark .ai-flow-icon::before {
          border-color:
            rgba(173, 209, 50, 0.08);
        }

        html.dark .ai-flow-node.warning .ai-flow-icon {
          color:
            #e1a34c;

          border-color:
            rgba(225, 163, 76, 0.3);
        }

        html.dark .ai-flow-node.success .ai-flow-icon {
          color:
            #36c995;

          border-color:
            rgba(54, 201, 149, 0.3);
        }

        html.dark .ai-flow-title {
          color:
            #edf7f1;
        }

        html.dark .ai-flow-subtitle {
          color:
            rgba(154, 188, 176, 0.55);
        }

        html.dark .track-ai-bottom strong {
          color:
            #edf7f1;
        }

        html.dark .track-ai-bottom span {
          color:
            rgba(154, 188, 176, 0.5);
        }

        html.dark .track-ai-bottom-line {
          background:
            rgba(173, 209, 50, 0.13);
        }

        html.dark .track-ai-progress span {
          background:
            rgba(150, 185, 172, 0.17);
        }

        html.dark .track-ai-progress span.active {
          background:
            #add132;

          box-shadow:
            0 0 12px rgba(173, 209, 50, 0.3);
        }

        html.dark .track-ai-floating-label {
          color:
            rgba(154, 188, 176, 0.58);
        }

        html.dark .track-ai-floating-label span {
          background:
            #add132;

          box-shadow:
            0 0 10px rgba(173, 209, 50, 0.45);
        }

        /* =====================================================
           ANIMATIONS
        ===================================================== */

        @keyframes aiGlowOne {
          0%,
          100% {
            transform:
              translate(0, 0)
              scale(1);
          }

          50% {
            transform:
              translate(-18px, 15px)
              scale(1.1);
          }
        }

        @keyframes aiGlowTwo {
          0%,
          100% {
            transform:
              translate(0, 0)
              scale(1);
          }

          50% {
            transform:
              translate(18px, -12px)
              scale(1.08);
          }
        }

        @keyframes outerRotate {
          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }

        @keyframes outerRotateReverse {
          from {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }
        }

        @keyframes statusPulse {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.85);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes sceneAppear {
          from {
            opacity: 0;

            transform:
              scale(0.97)
              translateY(10px);
          }

          to {
            opacity: 1;

            transform:
              scale(1)
              translateY(0);
          }
        }

        @keyframes radarRotate {
          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(360deg);
          }
        }

        @keyframes corePulse {
          0%,
          100% {
            transform:
              scale(0.7);

            opacity: 0.55;
          }

          50% {
            transform:
              scale(1.15);

            opacity: 1;
          }
        }

        @keyframes threatPulse {
          0%,
          100% {
            transform:
              scale(0.75);

            opacity: 0.35;
          }

          50% {
            transform:
              scale(1.45);

            opacity: 1;
          }
        }

        @keyframes lineDash {
          to {
            stroke-dashoffset:
              -40;
          }
        }

        @keyframes discoveryCore {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(0.96);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.04);
          }
        }

        @keyframes discoveryRing {
          0% {
            opacity: 0.7;

            transform:
              scale(0.85);
          }

          100% {
            opacity: 0;

            transform:
              scale(1.2);
          }
        }

        @keyframes discoveryRotate {
          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(360deg);
          }
        }

        @keyframes sourceFloat {
          0%,
          100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-6px);
          }
        }

        @keyframes sourceSignal {
          0%,
          100% {
            opacity: 0.3;

            transform:
              scale(0.7);
          }

          50% {
            opacity: 1;

            transform:
              scale(1.5);
          }
        }

        @keyframes protectionOrbit {
          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(360deg);
          }
        }

        @keyframes shieldFloat {
          0%,
          100% {
            transform:
              translateY(0)
              scale(0.98);
          }

          50% {
            transform:
              translateY(-8px)
              scale(1.02);
          }
        }

        @keyframes shieldGlow {
          0%,
          100% {
            opacity: 0.35;

            transform:
              scale(0.85);
          }

          50% {
            opacity: 0.8;

            transform:
              scale(1.1);
          }
        }

        @keyframes protectionDot {
          0%,
          100% {
            opacity: 0.25;

            transform:
              scale(0.7);
          }

          50% {
            opacity: 1;

            transform:
              scale(1.4);
          }
        }

        @keyframes flowSignal {
          0% {
            left: 12%;

            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            left: 88%;

            opacity: 0;
          }
        }

        @keyframes flowNodePulse {
          0% {
            opacity: 0.7;

            transform:
              scale(0.85);
          }

          100% {
            opacity: 0;

            transform:
              scale(1.25);
          }
        }

        @keyframes floatingTechLabel {
          0%,
          100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-7px);
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .track-intelligence-animation {
            max-width: 540px;
          }

          .track-ai-floating-label.label-one {
            left: -20px;
          }

          .track-ai-floating-label.label-two {
            right: -22px;
          }

          .track-ai-floating-label.label-three {
            right: -20px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {

          .track-intelligence-animation {
            min-height: 430px;
          }

          .track-ai-visual {
            min-height: 405px;

            border-radius: 24px;
          }

          .track-ai-top-label {
            top: 23px;

            font-size: 6px;

            letter-spacing: 0.13em;
          }

          .track-ai-live {
            font-size: 5.5px;
          }

          .track-ai-scene-title {
            top: 49px;

            font-size: 8px;
          }

          .track-ai-scene-title span {
            font-size: 6px;
          }

          .track-ai-scene {
            padding:
              73px 12px 65px;
          }

          /* -----------------------------------------------
             RADAR
          ----------------------------------------------- */

          .ai-radar-core {
            width: 185px;
            height: 185px;
          }

          .ai-radar-metric {
            right: 3%;
          }

          .ai-radar-metric strong {
            font-size: 19px;
          }

          .ai-radar-metric span {
            font-size: 5px;
          }

          .ai-radar-label {
            font-size: 5.5px;
          }

          .ai-radar-label.one {
            right: -3%;
          }

          /* -----------------------------------------------
             DISCOVERY
          ----------------------------------------------- */

          .ai-discovery-core {
            width: 70px;
            height: 70px;
          }

          .ai-discovery-core svg {
            width: 23px;
            height: 23px;
          }

          .ai-source {
            gap: 5px;
          }

          .ai-source-icon {
            width: 24px;
            height: 24px;
          }

          .ai-source-icon svg {
            width: 11px;
            height: 11px;
          }

          .ai-source-text strong {
            font-size: 6.5px;
          }

          .ai-source-text span {
            font-size: 5px;
          }

          .ai-source.one {
            left: 0;
          }

          .ai-source.two {
            right: 0;
          }

          .ai-source.three {
            left: 1%;
          }

          .ai-source.four {
            right: 1%;
          }

          /* -----------------------------------------------
             PROTECTION
          ----------------------------------------------- */

          .ai-protection-orbit {
            width: 245px;
            height: 135px;
          }

          .ai-protection-orbit.two {
            width: 205px;
            height: 170px;
          }

          .ai-protection-orbit.three {
            width: 150px;
            height: 220px;
          }

          .ai-shield {
            width: 88px;
            height: 105px;
          }

          .ai-shield svg {
            width: 39px;
            height: 39px;
          }

          .ai-protection-label {
            font-size: 5.5px;
          }

          .ai-protection-label.one {
            left: 1%;
          }

          .ai-protection-label.two {
            right: 1%;
          }

          /* -----------------------------------------------
             FLOW
          ----------------------------------------------- */

          .ai-flow-line {
            left: 9%;
            right: 9%;
          }

          .ai-flow-node {
            width: 85px;
          }

          .ai-flow-node.one {
            left: 1%;
          }

          .ai-flow-node.three {
            right: 1%;
          }

          .ai-flow-icon {
            width: 44px;
            height: 44px;
          }

          .ai-flow-icon svg {
            width: 15px;
            height: 15px;
          }

          .ai-flow-title {
            font-size: 6.5px;
          }

          .ai-flow-subtitle {
            font-size: 5px;
          }

          .ai-flow-status {
            font-size: 5px;
          }

          /* -----------------------------------------------
             BOTTOM
          ----------------------------------------------- */

          .track-ai-bottom {
            left: 10%;
            right: 10%;

            bottom: 31px;

            gap: 7px;
          }

          .track-ai-bottom > div:not(.track-ai-bottom-line) {
            gap: 4px;
          }

          .track-ai-bottom span {
            font-size: 4.5px;
          }

          .track-ai-bottom strong {
            font-size: 5.5px;
          }

          .track-ai-bottom-line {
            width: 12px;
          }

          .track-ai-progress {
            bottom: 14px;
          }

          .track-ai-progress span {
            width: 10px;
          }

          .track-ai-progress span.active {
            width: 21px;
          }

          /* -----------------------------------------------
             FLOATING LABELS
          ----------------------------------------------- */

          .track-ai-floating-label {
            display: none;
          }

          /* -----------------------------------------------
             OUTER RINGS
          ----------------------------------------------- */

          .track-ai-outer-ring.ring-one {
            width: 270px;
            height: 270px;
          }

          .track-ai-outer-ring.ring-two {
            width: 320px;
            height: 170px;
          }

          .track-ai-outer-ring.ring-three {
            width: 350px;
            height: 130px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .track-intelligence-animation {
            min-height: 405px;
          }

          .track-ai-visual {
            min-height: 385px;
          }

          .ai-radar-core {
            width: 160px;
            height: 160px;
          }

          .ai-radar-metric {
            display: none;
          }

          .ai-discovery-core {
            width: 60px;
            height: 60px;
          }

          .ai-source-text span {
            display: none;
          }

          .ai-source-icon {
            width: 22px;
            height: 22px;
          }

          .ai-flow-node {
            width: 70px;
          }

          .ai-flow-icon {
            width: 38px;
            height: 38px;
          }

          .ai-flow-title {
            font-size: 5.5px;
          }

          .ai-flow-subtitle {
            display: none;
          }

          .track-ai-bottom {
            display: none;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .track-ai-glow,
          .track-ai-outer-ring,
          .track-ai-status-dot,
          .ai-radar-sweep::before,
          .ai-radar-center::after,
          .ai-threat,
          .ai-discovery-lines line,
          .ai-discovery-core,
          .ai-discovery-core::before,
          .ai-discovery-core::after,
          .ai-source,
          .ai-source-signal,
          .ai-protection-orbit,
          .ai-shield,
          .ai-shield-glow,
          .ai-protection-dot,
          .ai-flow-signal,
          .ai-flow-icon::before,
          .track-ai-floating-label {
            animation: none !important;
          }
        }

      `}</style>
    </div>
  );
}

/* =========================================================
   SCENE 01 — THREAT RADAR
========================================================= */

function ThreatRadar() {
  return (
    <div className="ai-radar-scene">

      <div className="ai-radar-core">

        <div className="ai-radar-circle one" />
        <div className="ai-radar-circle two" />
        <div className="ai-radar-circle three" />

        <div className="ai-radar-horizontal" />
        <div className="ai-radar-vertical" />

        <div className="ai-radar-sweep" />

        <div className="ai-radar-center" />

        <span className="ai-threat one" />
        <span className="ai-threat two" />
        <span className="ai-threat three" />
        <span className="ai-threat four" />

        <div className="ai-radar-label one">
          Threat Signal
        </div>

        <div className="ai-radar-label two">
          Digital Signal
        </div>

      </div>

      <div className="ai-radar-metric">
        <strong>04</strong>

        <span>
          THREATS DETECTED
        </span>
      </div>

    </div>
  );
}

/* =========================================================
   SCENE 02 — CONTENT DISCOVERY
========================================================= */

function ContentDiscovery() {
  return (
    <div className="ai-discovery-scene">

      {/* Connection lines */}

      <svg
        className="ai-discovery-lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="50"
          y1="50"
          x2="16"
          y2="18"
        />

        <line
          x1="50"
          y1="50"
          x2="84"
          y2="18"
        />

        <line
          x1="50"
          y1="50"
          x2="20"
          y2="82"
        />

        <line
          x1="50"
          y1="50"
          x2="80"
          y2="82"
        />
      </svg>

      {/* Center intelligence */}

      <div className="ai-discovery-core">
        <ScanSearch
          size={29}
          strokeWidth={1.4}
        />
      </div>

      {/* Web */}

      <SourceNode
        className="one"
        icon={<Globe2 size={13} />}
        title="WEB"
        value="1,284 signals"
      />

      {/* Search */}

      <SourceNode
        className="two"
        icon={<Search size={13} />}
        title="SEARCH"
        value="462 matches"
      />

      {/* Social */}

      <SourceNode
        className="three"
        icon={<Activity size={13} />}
        title="SOCIAL"
        value="318 signals"
      />

      {/* Streaming */}

      <SourceNode
        className="four"
        icon={<Zap size={13} />}
        title="STREAMING"
        value="126 matches"
      />

    </div>
  );
}

/* =========================================================
   SOURCE NODE
========================================================= */

function SourceNode({
  className,
  icon,
  title,
  value,
}) {
  return (
    <div className={`ai-source ${className}`}>

      <div className="ai-source-icon">
        {icon}
      </div>

      <div className="ai-source-text">
        <strong>{title}</strong>
        <span>{value}</span>
      </div>

      <span className="ai-source-signal" />

    </div>
  );
}

/* =========================================================
   SCENE 03 — RIGHTS PROTECTION
========================================================= */

function RightsProtection() {
  return (
    <div className="ai-protection-scene">

      <div className="ai-protection-orbit" />
      <div className="ai-protection-orbit two" />
      <div className="ai-protection-orbit three" />

      <div className="ai-shield-glow" />

      <div className="ai-shield">
        <ShieldCheck
          size={50}
          strokeWidth={1.2}
        />
      </div>

      <div className="ai-protection-label one">
        Rights protected
      </div>

      <div className="ai-protection-label two">
        Monitoring active
      </div>

      <div className="ai-protection-label three">
        IP secured
      </div>

      <span className="ai-protection-dot one" />
      <span className="ai-protection-dot two" />
      <span className="ai-protection-dot three" />

    </div>
  );
}

/* =========================================================
   SCENE 04 — PROTECTION FLOW
========================================================= */

function ProtectionFlow() {
  return (
    <div className="ai-flow-scene">

      <div className="ai-flow-line" />

      <div className="ai-flow-signal" />
      <div className="ai-flow-signal two" />
      <div className="ai-flow-signal three" />

      {/* Detection */}

      <FlowNode
        className="one warning"
        icon={<ShieldAlert size={19} />}
        title="Unauthorized"
        subtitle="Threat detected"
        status="DETECTED"
      />

      {/* Investigation */}

      <FlowNode
        className="two"
        icon={<ScanSearch size={19} />}
        title="Investigation"
        subtitle="Evidence captured"
        status="VERIFIED"
      />

      {/* Protection */}

      <FlowNode
        className="three success"
        icon={<CheckCircle2 size={19} />}
        title="Protection"
        subtitle="Threat removed"
        status="RESOLVED"
      />

    </div>
  );
}

/* =========================================================
   FLOW NODE
========================================================= */

function FlowNode({
  className,
  icon,
  title,
  subtitle,
  status,
}) {
  return (
    <div className={`ai-flow-node ${className}`}>

      <div className="ai-flow-icon">
        {icon}
      </div>

      <div className="ai-flow-title">
        {title}
      </div>

      <div className="ai-flow-subtitle">
        {subtitle}
      </div>

      <div className="ai-flow-status">
        {status}
      </div>

    </div>
  );
}

export default AntiPiracyAnimation;