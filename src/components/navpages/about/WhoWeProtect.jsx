import React from "react";
import { ArrowUpRight } from "lucide-react";

const protectedIndustries = [
  {
    number: "01",
    short: "Entertainment",
    title: "Film & Media",
    body: "Protect movies, shows, music and other digital entertainment from unauthorized distribution and misuse.",
  },
  {
    number: "02",
    short: "Education",
    title: "Creators & Courses",
    body: "Help educators, trainers and creators monitor unauthorized sharing of courses, learning materials and digital content.",
  },
  {
    number: "03",
    short: "Commerce",
    title: "Brands & Businesses",
    body: "Support businesses in identifying fake websites, impersonation, unauthorized brand use and digital misuse.",
  },
  {
    number: "04",
    short: "Publishing",
    title: "Publishers",
    body: "Help publishers and digital media organizations maintain visibility over unauthorized copies and content distribution.",
  },
  {
    number: "05",
    short: "Independent",
    title: "Creators",
    body: "Give independent creators greater visibility into where their original digital work appears across the internet.",
  },
  {
    number: "06",
    short: "Digital Assets",
    title: "IP Owners",
    body: "Help intellectual property owners identify online misuse and understand activity surrounding their valuable assets.",
  },
];

function WhoWeProtect() {
  return (
    <section
      className="
        protect-section
        relative
        overflow-hidden
        bg-[#F5F8F1]
        py-20
        text-[#152019]
        dark:bg-[#070A07]
        dark:text-white
        sm:py-14
        md:py-18
        lg:py-22
      "
    >
      <style>
        {`
          .protect-section {
            isolation: isolate;
          }

          /* =========================================
             BACKGROUND
          ========================================= */

          .protect-section::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: -2;

            background:
              radial-gradient(
                circle at 72% 50%,
                rgba(255,255,255,0.95),
                transparent 34%
              ),
              radial-gradient(
                circle at 18% 85%,
                rgba(173,209,50,0.08),
                transparent 28%
              );
          }

          .dark .protect-section::before {
            background:
              radial-gradient(
                circle at 72% 50%,
                rgba(173,209,50,0.055),
                transparent 35%
              ),
              radial-gradient(
                circle at 18% 85%,
                rgba(173,209,50,0.025),
                transparent 30%
              );
          }

          .protect-bg-ring {
            position: absolute;
            border: 1px solid rgba(21,32,25,0.08);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
          }

          .protect-bg-ring.ring-one {
            width: 600px;
            height: 600px;
            right: -220px;
            top: 80px;
          }

          .protect-bg-ring.ring-two {
            width: 820px;
            height: 820px;
            right: -330px;
            top: -40px;
          }

          .dark .protect-bg-ring {
            border-color: rgba(173,209,50,0.055);
          }

          /* =========================================
             MAIN CONTAINER
          ========================================= */

          .protect-container {
            position: relative;
            z-index: 2;

            width: 100%;
            max-width: 1500px;

            margin: 0 auto;

            padding-left: 24px;
            padding-right: 24px;
          }

          .protect-layout {
            display: grid;

            grid-template-columns:
              minmax(360px, 0.78fr)
              minmax(620px, 1.22fr);

            align-items: center;

            gap: 45px;
          }

          /* =========================================
             LEFT CONTENT
          ========================================= */

          .protect-content {
            position: relative;
            z-index: 10;
          }

          .protect-kicker {
            display: flex;
            align-items: center;
            gap: 12px;

            margin-bottom: 28px;

            font-family:
              "Manrope",
              "Inter",
              Arial,
              sans-serif;

            font-size: 11px;
            font-weight: 800;

            letter-spacing: 0.3em;

            text-transform: uppercase;

            color: #6F8D08;
          }

          .dark .protect-kicker {
            color: #ADD132;
          }

          .protect-kicker-line {
            width: 42px;
            height: 2px;

            background: #ADD132;
          }

          .dark .protect-kicker-line {
            background: #ADD132;
          }

          .protect-heading {
            margin: 0;

            max-width: 670px;

            font-family:
              "Manrope",
              "Inter",
              Arial,
              sans-serif;

            font-size: clamp(52px, 6vw, 88px);

            font-weight: 800;

            line-height: 0.88;

            letter-spacing: -0.075em;

            color: #152019;
          }

          .dark .protect-heading {
            color: #F4F8F2;
          }

          .protect-heading-accent {
            display: inline-block;

            margin-top: 8px;

            color: #789900;
          }

          .dark .protect-heading-accent {
            color: #ADD132;
          }

          .protect-description {
            max-width: 570px;

            margin-top: 40px;

            font-family:
              "Manrope",
              "Inter",
              Arial,
              sans-serif;

            font-size: 16px;

            line-height: 1.9;

            color: #5F6B63;
          }

          .dark .protect-description {
            color: rgba(255,255,255,0.55);
          }

          .protect-scroll {
            display: flex;
            align-items: center;
            gap: 12px;

            margin-top: 44px;

            font-family:
              "Manrope",
              "Inter",
              Arial,
              sans-serif;

            font-size: 9px;

            font-weight: 800;

            letter-spacing: 0.25em;

            text-transform: uppercase;

            color: #6F8D08;
          }

          .dark .protect-scroll {
            color: #ADD132;
          }

          .protect-scroll-arrow {
            animation:
              protect-scroll-arrow
              1.8s
              ease-in-out
              infinite;
          }

          @keyframes protect-scroll-arrow {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(5px);
            }
          }

          /* =========================================
             CARD STAGE
          ========================================= */

          .protect-card-stage {
            position: relative;

            width: 100%;

            height: 650px;

            display: flex;

            align-items: center;
            justify-content: center;
          }

          .protect-stage-frame {
            position: absolute;

            width: 88%;
            height: 86%;

            border:
              1px solid
              rgba(21,32,25,0.14);

            transform:
              rotate(-2deg);

            pointer-events: none;
          }

          .protect-stage-frame::before {
            content: "";

            position: absolute;

            inset: 17px;

            border:
              1px solid
              rgba(21,32,25,0.07);

            transform:
              rotate(1.3deg);
          }

          .dark .protect-stage-frame {
            border-color:
              rgba(173,209,50,0.13);
          }

          .dark .protect-stage-frame::before {
            border-color:
              rgba(255,255,255,0.05);
          }

          /* =========================================
             CARD STACK
          ========================================= */

          .protect-card-stack {
            position: relative;

            width: 620px;
            height: 600px;

            max-width: 100%;

            margin: auto;
          }

          /* =========================================
             CARDS
             SMALLER SIZE
          ========================================= */

          .protect-card {
            position: absolute;

            width: 205px;
            height: 280px;

            padding: 23px;

            border-radius: 15px;

            background:
              rgba(255,255,255,0.86);

            border:
              1px solid
              rgba(21,32,25,0.12);

            box-shadow:
              0 22px 48px
              rgba(30,48,34,0.12),
              0 4px 12px
              rgba(30,48,34,0.05);

            backdrop-filter: blur(12px);

            transition:
              transform 0.55s
              cubic-bezier(.22,1,.36,1),
              box-shadow 0.45s ease,
              border-color 0.45s ease;

            animation:
              protect-floating-card
              7s
              ease-in-out
              infinite;
          }

          .dark .protect-card {
            background:
              linear-gradient(
                145deg,
                rgba(18,25,19,0.97),
                rgba(9,14,10,0.98)
              );

            border-color:
              rgba(173,209,50,0.13);

            box-shadow:
              0 28px 58px
              rgba(0,0,0,0.45),
              0 5px 15px
              rgba(0,0,0,0.22);
          }

          @keyframes protect-floating-card {
            0%,
            100% {
              margin-top: 0;
            }

            50% {
              margin-top: -6px;
            }
          }

          /* =========================================
             CARD POSITIONS
             SAME OVERLAPPING DESIGN
          ========================================= */

          .protect-card:nth-child(1) {
            left: 55px;
            top: 25px;

            transform:
              rotate(-7deg);

            z-index: 2;

            animation-delay: -0.5s;
          }

          .protect-card:nth-child(2) {
            right: 35px;
            top: 5px;

            transform:
              rotate(5deg);

            z-index: 3;

            animation-delay: -1.5s;
          }

          .protect-card:nth-child(3) {
            left: 5px;
            top: 255px;

            transform:
              rotate(5deg);

            z-index: 8;

            animation-delay: -2.5s;
          }

          .protect-card:nth-child(4) {
            right: 15px;
            top: 265px;

            transform:
              rotate(-4deg);

            z-index: 10;

            animation-delay: -3.5s;
          }

          .protect-card:nth-child(5) {
            left: 208px;
            bottom: -5px;

            transform:
              rotate(7deg);

            z-index: 6;

            animation-delay: -4.5s;
          }

          .protect-card:nth-child(6) {
            left: 207px;
            top: 145px;

            transform:
              rotate(-1deg);

            z-index: 1;

            opacity: 100;

            animation-delay: -5.5s;
          }

          /* =========================================
             HOVER
          ========================================= */

          .protect-card:hover {
            z-index: 50 !important;

            transform:
              rotate(0deg)
              translateY(-10px)
              scale(1.035) !important;

            border-color:
              rgba(173,209,50,0.65);

            box-shadow:
              0 32px 65px
              rgba(28,46,31,0.19);
          }

          .dark .protect-card:hover {
            border-color:
              rgba(173,209,50,0.62);

            box-shadow:
              0 35px 72px
              rgba(0,0,0,0.58);
          }

          /* =========================================
             CARD TOP
          ========================================= */

          .protect-card-top {
            display: flex;

            align-items: center;
            justify-content: space-between;
          }

          .protect-card-number {
            font-family:
              "Manrope",
              "Inter",
              Arial,
              sans-serif;

            font-size: 14px;

            font-weight: 800;

            letter-spacing: -0.04em;

            color: #435347;
          }

          .dark .protect-card-number {
            color: #ADD132;
          }

          .protect-card-arrow {
            display: flex;

            align-items: center;
            justify-content: center;

            width: 31px;
            height: 31px;

            border-radius: 50%;

            border:
              1px solid
              rgba(21,32,25,0.13);

            color: #68766B;

            transition:
              all 0.35s ease;
          }

          .dark .protect-card-arrow {
            border-color:
              rgba(173,209,50,0.18);

            color: #ADD132;
          }

          .protect-card:hover
          .protect-card-arrow {
            background: #ADD132;

            border-color: #ADD132;

            color: #152019;

            transform:
              translate(2px,-2px);
          }

          /* =========================================
             STAR
          ========================================= */

          .protect-card-star {
            position: absolute;

            top: 58px;
            right: 23px;

            font-size: 12px;

            color: #78857B;

            opacity: 0.65;

            transition:
              transform 0.4s ease,
              color 0.35s ease;
          }

          .dark .protect-card-star {
            color: #ADD132;

            opacity: 0.40;
          }

          .protect-card:hover
          .protect-card-star {
            color: #ADD132;

            transform:
              rotate(90deg)
              scale(1.15);
          }

          /* =========================================
             CARD CONTENT
          ========================================= */

          .protect-card-content {
            position: absolute;

            left: 23px;
            right: 23px;
            bottom: 23px;
          }

          .protect-card-short {
            margin: 0;

            font-family:
              "Manrope",
              "Inter",
              Arial,
              sans-serif;

            font-size: 7px;

            font-weight: 800;

            letter-spacing: 0.18em;

            text-transform: uppercase;

            color: #7B887E;
          }

          .dark .protect-card-short {
            color: rgba(255,255,255,0.34);
          }

          .protect-card-title {
            margin-top: 8px;

            font-family:
              "Manrope",
              "Inter",
              Arial,
              sans-serif;

            font-size: 21px;

            font-weight: 800;

            line-height: 0.98;

            letter-spacing: -0.05em;

            color: #172019;

            transition:
              color 0.35s ease,
              transform 0.4s ease;
          }

          .dark .protect-card-title {
            color: #F1F6EF;
          }

          .protect-card:hover
          .protect-card-title {
            color: #6F8D08;

            transform:
              translateX(3px);
          }

          .dark .protect-card:hover
          .protect-card-title {
            color: #ADD132;
          }

          .protect-card-line {
            width: 22px;
            height: 2px;

            margin-top: 12px;

            background: #ADD132;

            transition:
              width 0.45s
              cubic-bezier(.22,1,.36,1);
          }

          .protect-card:hover
          .protect-card-line {
            width: 43px;
          }

          .protect-card-body {
            margin-top: 11px;

            font-family:
              "Manrope",
              "Inter",
              Arial,
              sans-serif;

            font-size: 9px;

            line-height: 1.55;

            color: #66746A;
          }

          .dark .protect-card-body {
            color: rgba(255,255,255,0.48);
          }

          /* =========================================
             CENTER ACCENT
          ========================================= */

          .protect-center-accent {
            position: absolute;

            left: 50%;
            top: 50%;

            width: 8px;
            height: 8px;

            border-radius: 50%;

            background: #ADD132;

            box-shadow:
              0 0 0 7px
              rgba(173,209,50,0.10),
              0 0 30px
              rgba(173,209,50,0.28);

            transform:
              translate(-50%,-50%);

            z-index: 25;

            pointer-events: none;
          }

          /* =========================================
             BOTTOM
          ========================================= */

          .protect-bottom {
            display: flex;

            align-items: center;
            justify-content: space-between;

            gap: 25px;

            margin-top: 15px;

            padding-top: 22px;

            border-top:
              1px solid
              rgba(21,32,25,0.10);
          }

          .dark .protect-bottom {
            border-color:
              rgba(255,255,255,0.07);
          }

          .protect-bottom-text {
            max-width: 720px;

            margin: 0;

            font-family:
              "Manrope",
              "Inter",
              Arial,
              sans-serif;

            font-size: 12px;

            line-height: 1.7;

            color: #69766D;
          }

          .dark .protect-bottom-text {
            color: rgba(255,255,255,0.36);
          }

          .protect-bottom-label {
            display: flex;

            align-items: center;

            gap: 10px;

            flex-shrink: 0;

            font-family:
              "Manrope",
              "Inter",
              Arial,
              sans-serif;

            font-size: 9px;

            font-weight: 800;

            letter-spacing: 0.20em;

            text-transform: uppercase;

            color: #6F8D08;
          }

          .dark .protect-bottom-label {
            color: #ADD132;
          }

          .protect-bottom-dot {
            width: 7px;
            height: 7px;

            border-radius: 50%;

            background: #ADD132;

            box-shadow:
              0 0 0 5px
              rgba(173,209,50,0.10);
          }

          /* =========================================
             TABLET
          ========================================= */

          @media (max-width: 1100px) {

            .protect-layout {
              grid-template-columns: 1fr;

              gap: 55px;
            }

            .protect-content {
              max-width: 850px;
            }

            .protect-card-stage {
              height: 640px;
            }

            .protect-card-stack {
              transform:
                scale(0.88);
            }
          }

          /* =========================================
             SMALL TABLET
          ========================================= */

          @media (max-width: 800px) {

            .protect-container {
              padding-left: 20px;
              padding-right: 20px;
            }

            .protect-heading {
              font-size:
                clamp(
                  48px,
                  9vw,
                  72px
                );
            }

            .protect-card-stage {
              height: 620px;
            }

            .protect-card-stack {
              transform:
                scale(0.76);
            }
          }

          /* =========================================
             MOBILE
          ========================================= */

          @media (max-width: 600px) {

            .protect-layout {
              display: block;
            }

            .protect-heading {
              font-size:
                clamp(
                  45px,
                  12vw,
                  62px
                );

              line-height: 0.91;
            }

            .protect-description {
              margin-top: 30px;

              font-size: 14px;

              line-height: 1.8;
            }

            .protect-scroll {
              margin-top: 32px;
            }

            .protect-card-stage {
              height: 600px;

              margin-top: 30px;

              overflow: visible;
            }

            .protect-card-stack {
              width: 430px;
              height: 580px;

              transform:
                scale(0.66);
            }

            .protect-stage-frame {
              width: 100%;
              height: 88%;
            }

            .protect-bottom {
              flex-direction: column;

              align-items: flex-start;

              margin-top: 10px;
            }

            .protect-bottom-label {
              order: -1;
            }
          }

          /* =========================================
             SMALL MOBILE
          ========================================= */

          @media (max-width: 430px) {

            .protect-card-stage {
              height: 550px;
            }

            .protect-card-stack {
              transform:
                scale(0.57);
            }

            .protect-stage-frame {
              width: 92%;
            }
          }

          /* =========================================
             VERY SMALL MOBILE
          ========================================= */

          @media (max-width: 360px) {

            .protect-card-stage {
              height: 510px;
            }

            .protect-card-stack {
              transform:
                scale(0.51);
            }
          }

          /* =========================================
             REDUCED MOTION
          ========================================= */

          @media (prefers-reduced-motion: reduce) {

            .protect-card {
              animation: none !important;
              transition: none !important;
            }

            .protect-scroll-arrow {
              animation: none !important;
            }
          }
        `}
      </style>

      {/* Background */}
      <div className="protect-bg-ring ring-one" />
      <div className="protect-bg-ring ring-two" />

      <div className="protect-container">

        <div className="protect-layout">

          {/* LEFT CONTENT */}
          <div className="protect-content">

            <div className="protect-kicker">
              <span className="protect-kicker-line" />
              Who We Protect
            </div>

            <h2 className="protect-heading">
              Protection across

              <br />

              <span className="protect-heading-accent">
                digital industries.
              </span>
            </h2>

            <p className="protect-description">
              From entertainment and education to commerce and independent
              creators, TrackOwls is designed around the different ways
              digital assets can be misused online.
            </p>

            <div className="protect-scroll">
              <span>Scroll to explore</span>

              <span className="protect-scroll-arrow">
                ↓
              </span>
            </div>

          </div>

          {/* CARD AREA */}
          <div className="protect-card-stage">

            <div className="protect-stage-frame" />

            <div className="protect-center-accent" />

            <div className="protect-card-stack">

              {protectedIndustries.map((item) => (
                <article
                  key={item.number}
                  className="protect-card"
                >

                  <div className="protect-card-top">

                    <span className="protect-card-number">
                      {item.number}
                    </span>

                    <span className="protect-card-arrow">
                      <ArrowUpRight size={14} />
                    </span>

                  </div>

                  <span className="protect-card-star">
                    ✦
                  </span>

                  <div className="protect-card-content">

                    <p className="protect-card-short">
                      {item.short}
                    </p>

                    <h3 className="protect-card-title">
                      {item.title}
                    </h3>

                    <div className="protect-card-line" />

                    <p className="protect-card-body">
                      {item.body}
                    </p>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="protect-bottom">

          <p className="protect-bottom-text">
            Whether you are a global business, publisher, educator or
            independent creator, TrackOwls helps bring greater visibility
            to your digital presence.
          </p>

          <div className="protect-bottom-label">

            <span className="protect-bottom-dot" />

            <span>
              Built for the digital ecosystem
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhoWeProtect;