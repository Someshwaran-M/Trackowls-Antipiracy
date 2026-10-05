import React, { useEffect, useRef, useState } from "react";
import {
  FileSearch,
  Target,
  Gavel,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

/* ============================================================
   SERVICES DATA
============================================================ */

const services = [
  {
    number: "01",
    label: "TRACK",
    title: "Content Protection",
    description:
      "Track your digital content across online platforms and identify unauthorized usage before it impacts your brand.",
    icon: FileSearch,
    side: "left",
  },
  {
    number: "02",
    label: "DETECT",
    title: "Threat Detection",
    description:
      "Advanced monitoring helps discover piracy, unauthorized distribution and suspicious digital activity.",
    icon: Target,
    side: "right",
  },
  {
    number: "03",
    label: "REMOVE",
    title: "Copyright Enforcement",
    description:
      "Identify infringing content and streamline the removal process across websites, platforms and digital channels.",
    icon: Gavel,
    side: "left",
  },
  {
    number: "04",
    label: "PROTECT",
    title: "Brand Protection",
    description:
      "Protect your brand identity from unauthorized usage, impersonation and misleading digital presence.",
    icon: ShieldCheck,
    side: "right",
  },
  {
    number: "05",
    label: "WATCH",
    title: "Continuous Monitoring",
    description:
      "Keep your digital ecosystem protected with continuous monitoring and intelligent threat discovery.",
    icon: BarChart3,
    side: "left",
  },
];

/* ============================================================
   CURVED CENTER PATH
============================================================ */

const DESKTOP_PATH =
  "M310 0 C110 100 100 220 280 315 C500 430 500 525 285 630 C105 720 105 835 295 930 C500 1035 500 1140 285 1240 C125 1315 135 1420 310 1550";

/* ============================================================
   OWL
============================================================ */

const Owl = ({ mobile = false }) => {
  return (
    <div
      className={`
        owl-scroll-character
        relative
        flex
        items-center
        justify-center
        ${
          mobile
            ? "h-[58px] w-[58px]"
            : "h-[76px] w-[76px] sm:h-[82px] sm:w-[82px]"
        }
      `}
    >
      {/* Glow */}
      <div
        className="
          absolute
          -inset-3
          rounded-full
          bg-lime-400/20
          blur-xl
          dark:bg-lime-400/15
        "
      />

      {/* Outer white circle */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          border-[4px]
          border-white
          bg-white/95
          shadow-[0_10px_35px_rgba(80,130,0,.28)]
          dark:border-[#101b12]
          dark:bg-[#101b12]/95
        "
      />

      {/* Green circle */}
      <div
        className="
          absolute
          inset-[7px]
          rounded-full
          bg-gradient-to-br
          from-[#7cab00]
          via-[#4c8100]
          to-[#274d00]
        "
      />

      {/* Owl SVG */}
      <svg
        viewBox="0 0 100 100"
        className="
          relative
          z-10
          h-[46px]
          w-[46px]
          drop-shadow-[0_3px_6px_rgba(0,0,0,.25)]
          sm:h-[52px]
          sm:w-[52px]
        "
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <path
          d="
            M22 42
            L28 20
            L42 29
            C47 27 53 27 58 29
            L72 20
            L78 42
            C82 47 84 54 84 61
            C84 77 71 87 50 87
            C29 87 16 77 16 61
            C16 54 18 47 22 42Z
          "
          fill="white"
          stroke="white"
          strokeWidth="2"
        />

        {/* Eyes */}
        <circle
          cx="35"
          cy="53"
          r="13"
          fill="#d9ff75"
          stroke="white"
          strokeWidth="2"
        />

        <circle
          cx="65"
          cy="53"
          r="13"
          fill="#d9ff75"
          stroke="white"
          strokeWidth="2"
        />

        {/* Pupils */}
        <circle cx="36" cy="54" r="5" fill="#263c05" />
        <circle cx="64" cy="54" r="5" fill="#263c05" />

        {/* Eye highlights */}
        <circle cx="38" cy="51" r="1.8" fill="white" />
        <circle cx="66" cy="51" r="1.8" fill="white" />

        {/* Beak */}
        <path
          d="M50 57 L43 66 L50 70 L57 66 Z"
          fill="#b8d956"
        />

        {/* Body */}
        <path
          d="
            M30 73
            C36 69 42 68 50 68
            C58 68 64 69 70 73
            C68 82 61 87 50 87
            C39 87 32 82 30 73Z
          "
          fill="#f7fff0"
        />

        {/* Chest */}
        <path
          d="M43 74 C45 78 48 80 50 81 C52 80 55 78 57 74"
          stroke="#6d9900"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Feet */}
        <path
          d="M38 87 L34 92 M44 87 L42 93"
          stroke="#d9ff75"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M62 87 L66 92 M56 87 L58 93"
          stroke="#d9ff75"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

/* ============================================================
   SERVICE NODE
============================================================ */

const ServiceNode = ({ Icon, index, mobile = false }) => {
  return (
    <div
      className={`
        service-node
        relative
        flex
        items-center
        justify-center
        ${
          mobile
            ? "h-[78px] w-[78px]"
            : "h-[142px] w-[142px] sm:h-[156px] sm:w-[156px]"
        }
      `}
      style={{
        animationDelay: `${index * 160}ms`,
      }}
    >
      {/* Outer ring */}
      <div
        className="
          service-node-ring
          absolute
          inset-0
          rounded-full
          border
          border-lime-500/25
          dark:border-lime-400/25
        "
      />

      {/* Dashed ring */}
      <div
        className="
          service-node-ring-reverse
          absolute
          -inset-3
          rounded-full
          border
          border-dashed
          border-lime-500/20
          dark:border-lime-400/20
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          -inset-7
          rounded-full
          bg-lime-400/10
          blur-2xl
          dark:bg-lime-500/10
        "
      />

      {/* Main node */}
      <div
        className={`
          service-node-main
          relative
          flex
          items-center
          justify-center
          rounded-full
          border
          border-lime-500/20
          bg-white/95
          shadow-[0_18px_55px_rgba(70,120,0,.20)]
          backdrop-blur-xl
          dark:border-lime-400/20
          dark:bg-[#0b170d]/95
          ${
            mobile
              ? "h-[64px] w-[64px]"
              : "h-[126px] w-[126px] sm:h-[138px] sm:w-[138px]"
          }
        `}
      >
        {/* Inner border */}
        <div className="absolute inset-3 rounded-full border border-lime-500/10 dark:border-lime-400/10" />

        {/* Icon */}
        <div
          className={`
            relative
            flex
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-[#faffef]
            via-[#efffd1]
            to-[#dff5ae]
            shadow-inner
            dark:from-[#1a301a]
            dark:via-[#102213]
            dark:to-[#09120b]
            ${
              mobile
                ? "h-12 w-12"
                : "h-[88px] w-[88px] sm:h-[96px] sm:w-[96px]"
            }
          `}
        >
          <Icon
            size={mobile ? 25 : 43}
            strokeWidth={1.7}
            className="text-[#477400] dark:text-lime-400"
          />
        </div>
      </div>

      {/* Connection dot */}
      {!mobile && (
        <span
          className="
            absolute
            right-[-7px]
            top-1/2
            z-30
            h-4
            w-4
            -translate-y-1/2
            rounded-full
            border-2
            border-white
            bg-lime-500
            shadow-[0_0_20px_rgba(140,210,0,.95)]
            dark:border-[#071009]
          "
        />
      )}
    </div>
  );
};

/* ============================================================
   SERVICE CONTENT
   NO BACKGROUND CARD
============================================================ */

const ServiceContent = ({ service }) => {
  return (
    <div
      className={`
        service-content
        relative
        w-full
        max-w-[450px]
        px-6
        py-7
        sm:px-8
        sm:py-8
        ${
          service.side === "left"
            ? "text-left"
            : "text-left"
        }
      `}
    >
      {/* Number */}
      <div className="mb-3 flex items-center gap-4">
        <span
          className="
            text-[64px]
            font-black
            leading-none
            tracking-[-0.07em]
            text-[#dce6c9]
            dark:text-[#26351e]
            sm:text-[72px]
          "
        >
          {service.number}
        </span>

        <span className="h-[2px] w-12 bg-lime-700/40 dark:bg-lime-400/40" />
      </div>

      {/* Label */}
      <div
        className="
          mb-3
          text-[11px]
          font-bold
          tracking-[0.38em]
          text-[#4f7900]
          dark:text-lime-400
        "
      >
        {service.label}
      </div>

      {/* Title */}
      <h3
        className="
          text-[25px]
          font-extrabold
          leading-tight
          tracking-[-0.035em]
          text-[#071426]
          dark:text-white
          sm:text-[28px]
        "
      >
        {service.title}
      </h3>

      {/* Small line */}
      <div className="my-4 h-[2px] w-8 bg-lime-700 dark:bg-lime-400" />

      {/* Description */}
      <p
        className="
          max-w-[390px]
          text-[15px]
          leading-7
          text-gray-600
          dark:text-gray-400
          sm:text-[16px]
        "
      >
        {service.description}
      </p>
    </div>
  );
};

/* ============================================================
   SERVICES
============================================================ */

const Services = () => {
  const sectionRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  /* ==========================================================
     SCROLL CONTROLLED OWL
  ========================================================== */

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!sectionRef.current) {
        ticking = false;
        return;
      }

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      const startPoint = viewportHeight * 0.82;
      const endPoint = -rect.height + viewportHeight * 0.18;

      const totalDistance = startPoint - endPoint;

      const travelled = startPoint - rect.top;

      let progress = travelled / totalDistance;

      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  /* ==========================================================
     OWL DESKTOP POSITION
  ========================================================== */

  const owlDesktopStyle = {
    offsetPath: `path("${DESKTOP_PATH}")`,
    offsetDistance: `${scrollProgress * 100}%`,
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#fbfcf6]
        text-[#081522]
        dark:bg-[#050b07]
        dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top left glow */}
        <div
          className="
            absolute
            -left-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-lime-300/10
            blur-[140px]
            dark:bg-lime-500/5
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute
            -right-48
            top-[30%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-lime-300/10
            blur-[150px]
            dark:bg-lime-500/5
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-[-200px]
            left-1/2
            h-[600px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-lime-200/10
            blur-[160px]
            dark:bg-lime-500/5
          "
        />

        {/* Dot pattern */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.12]
            [background-image:radial-gradient(circle_at_1px_1px,rgba(80,120,20,.35)_1px,transparent_0)]
            [background-size:42px_42px]
            dark:opacity-[0.04]
          "
        />

        {/* Decorative circles */}
        <div
          className="
            absolute
            -left-[250px]
            top-[12%]
            h-[600px]
            w-[600px]
            rounded-full
            border
            border-lime-300/20
            dark:border-lime-600/10
          "
        />

        <div
          className="
            absolute
            -right-[280px]
            bottom-[8%]
            h-[650px]
            w-[650px]
            rounded-full
            border
            border-lime-300/20
            dark:border-lime-600/10
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          pb-32
          pt-20
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mx-auto max-w-[900px] text-center">
          {/* Small heading */}
          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-[2px] w-14 bg-lime-700 dark:bg-lime-400" />

            <span
              className="
                text-[11px]
                font-bold
                tracking-[0.45em]
                text-[#4d7800]
                dark:text-lime-400
              "
            >
              SERVICES
            </span>

            <span className="h-[2px] w-14 bg-lime-700 dark:bg-lime-400" />
          </div>

          {/* Main heading */}
          <h1
            className="
              text-5xl
              font-black
              leading-[0.9]
              tracking-[-0.065em]
              text-[#071426]
              dark:text-white
              sm:text-6xl
              lg:text-[78px]
            "
          >
            Protection
            <br />

            <span className="text-[#4f8200] dark:text-lime-400">
              Built Around You
            </span>
          </h1>

          {/* Heading line */}
          <div className="mx-auto mt-6 h-[3px] w-10 bg-lime-700 dark:bg-lime-400" />

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-[720px]
              text-base
              leading-8
              text-gray-600
              dark:text-gray-400
              sm:text-lg
            "
          >
            Powerful digital protection designed to discover threats,
            protect content, enforce rights and keep your brand one step
            ahead.
          </p>
        </div>

        {/* ===================================================
            DESKTOP SERVICES
        =================================================== */}

        <div className="relative mt-20 hidden lg:block">
          <div className="relative h-[1550px]">
            {/* =================================================
                CENTER CURVED LINE
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                z-0
                h-full
                w-[620px]
                -translate-x-1/2
              "
            >
              <svg
                viewBox="0 0 620 1550"
                className="h-full w-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Green gradient */}
                  <linearGradient
                    id="serviceLineGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#426c00" />
                    <stop offset="25%" stopColor="#83b91e" />
                    <stop offset="50%" stopColor="#c9ef70" />
                    <stop offset="75%" stopColor="#75a915" />
                    <stop offset="100%" stopColor="#355900" />
                  </linearGradient>

                  {/* Glow */}
                  <filter id="serviceLineGlow">
                    <feGaussianBlur stdDeviation="12" />
                  </filter>
                </defs>

                {/* Glow line */}
                <path
                  d={DESKTOP_PATH}
                  fill="none"
                  stroke="#a8d64b"
                  strokeWidth="60"
                  strokeOpacity=".13"
                  filter="url(#serviceLineGlow)"
                />

                {/* White separation */}
                <path
                  d={DESKTOP_PATH}
                  fill="none"
                  stroke="rgba(255,255,255,.92)"
                  strokeWidth="22"
                  strokeLinecap="round"
                  className="dark:stroke-[#071009]"
                />

                {/* Main line */}
                <path
                  d={DESKTOP_PATH}
                  fill="none"
                  stroke="url(#serviceLineGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="service-path"
                />

                {/* Moving highlight */}
                <path
                  d={DESKTOP_PATH}
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeOpacity=".8"
                  strokeDasharray="3 18"
                  className="service-path-highlight"
                />

                {/* Top point */}
                <circle
                  cx="310"
                  cy="0"
                  r="8"
                  fill="#74a900"
                />

                {/* Bottom point */}
                <circle
                  cx="310"
                  cy="1550"
                  r="8"
                  fill="#74a900"
                />
              </svg>

              {/* Automatic light */}
              <div className="service-moving-light" />

              {/* =================================================
                  SCROLL CONTROLLED OWL
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  z-50
                  h-[76px]
                  w-[76px]
                  will-change-transform
                "
                style={owlDesktopStyle}
              >
                <Owl />
              </div>
            </div>

            {/* =================================================
                SERVICE ITEMS
            ================================================= */}

            {services.map((service, index) => {
              const Icon = service.icon;

              const positions = [
                0,
                310,
                620,
                930,
                1240,
              ];

              return (
                <div
                  key={service.number}
                  className="
                    absolute
                    left-0
                    right-0
                    z-20
                  "
                  style={{
                    top: `${positions[index]}px`,
                  }}
                >
                  <div className="relative grid grid-cols-2">
                    {/* LEFT SERVICE */}
                    {service.side === "left" ? (
                      <>
                        <div className="flex justify-end pr-[135px]">
                          <ServiceContent service={service} />
                        </div>

                        <div />
                      </>
                    ) : (
                      <>
                        <div />

                        {/* RIGHT SERVICE */}
                        <div className="pl-[135px]">
                          <ServiceContent service={service} />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Center node */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      z-40
                      -translate-x-1/2
                      -translate-y-1/2
                    "
                  >
                    <ServiceNode
                      Icon={Icon}
                      index={index}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            MOBILE SERVICES
        =================================================== */}

        <div className="relative mt-16 lg:hidden">
          {/* Vertical line */}
          <div
            className="
              absolute
              bottom-8
              left-[39px]
              top-0
              z-0
              w-[3px]
              rounded-full
              bg-gradient-to-b
              from-[#416d00]
              via-[#a8d94c]
              to-[#416d00]
              dark:from-lime-500
              dark:via-lime-300
              dark:to-lime-500
            "
          />

          {/* Line glow */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-8
              left-[39px]
              top-0
              z-0
              w-[14px]
              -translate-x-1/2
              rounded-full
              bg-lime-400/10
              blur-md
            "
          />

          {/* Mobile owl */}
          <div
            className="
              pointer-events-none
              absolute
              left-[1px]
              top-0
              z-40
              h-[76px]
              w-[76px]
              will-change-transform
            "
            style={{
              transform: `translateY(${scrollProgress * 100}%)`,
            }}
          >
            <Owl mobile />
          </div>

          {/* Services */}
          <div className="relative z-10 space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="
                    relative
                    min-h-[220px]
                    pl-[88px]
                  "
                  style={{
                    animation:
                      "serviceMobileReveal .8s ease both",
                    animationDelay: `${index * 130}ms`,
                  }}
                >
                  {/* Node */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      z-30
                    "
                  >
                    <ServiceNode
                      Icon={Icon}
                      index={index}
                      mobile
                    />
                  </div>

                  {/* Text */}
                  <div className="relative z-20 pt-1">
                    {/* Number */}
                    <div className="mb-2 flex items-center gap-4">
                      <span
                        className="
                          text-4xl
                          font-black
                          leading-none
                          tracking-[-0.05em]
                          text-lime-700
                          dark:text-lime-400
                        "
                      >
                        {service.number}
                      </span>

                      <span className="h-px w-10 bg-lime-700/30 dark:bg-lime-400/30" />
                    </div>

                    {/* Label */}
                    <div
                      className="
                        mb-2
                        text-[10px]
                        font-bold
                        tracking-[0.35em]
                        text-[#4d7800]
                        dark:text-lime-400
                      "
                    >
                      {service.label}
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        text-2xl
                        font-extrabold
                        tracking-tight
                        text-[#071426]
                        dark:text-white
                      "
                    >
                      {service.title}
                    </h3>

                    {/* Small line */}
                    <div className="my-3 h-[2px] w-8 bg-lime-700 dark:bg-lime-400" />

                    {/* Description */}
                    <p
                      className="
                        max-w-[500px]
                        text-sm
                        leading-7
                        text-gray-600
                        dark:text-gray-400
                      "
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        /* ====================================================
           CURVED LINE
        ==================================================== */

        .service-path {
          stroke-dasharray: 18 9;
          animation: serviceDash 4s linear infinite;
        }

        .service-path-highlight {
          animation: serviceHighlight 2.4s linear infinite;
        }

        @keyframes serviceDash {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -108;
          }
        }

        @keyframes serviceHighlight {
          0% {
            stroke-dashoffset: 0;
            opacity: .25;
          }

          50% {
            stroke-dashoffset: -60;
            opacity: 1;
          }

          100% {
            stroke-dashoffset: -120;
            opacity: .25;
          }
        }

        /* ====================================================
           AUTOMATIC LIGHT
        ==================================================== */

        .service-moving-light {
          position: absolute;
          left: 50%;
          top: 0;
          width: 15px;
          height: 15px;
          transform: translateX(-50%);
          border-radius: 9999px;
          background: #d9ff77;
          box-shadow:
            0 0 14px 5px rgba(150, 215, 35, .55),
            0 0 32px 10px rgba(150, 215, 35, .25);
          animation: serviceMovingLight 5s linear infinite;
        }

        @keyframes serviceMovingLight {
          0% {
            top: 0;
            opacity: 0;
          }

          8% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            top: calc(100% - 15px);
            opacity: 0;
          }
        }

        /* ====================================================
           NODE ROTATION
        ==================================================== */

        .service-node-ring {
          animation:
            serviceNodeRotate
            11s
            linear
            infinite;
        }

        .service-node-ring-reverse {
          animation:
            serviceNodeRotateReverse
            15s
            linear
            infinite;
        }

        @keyframes serviceNodeRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes serviceNodeRotateReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        /* ====================================================
           NODE PULSE
        ==================================================== */

        .service-node-main {
          animation:
            serviceNodePulse
            3.5s
            ease-in-out
            infinite;
        }

        @keyframes serviceNodePulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.035);
          }
        }

        /* ====================================================
           OWL
        ==================================================== */

        .owl-scroll-character {
          animation:
            owlFloat
            2.6s
            ease-in-out
            infinite;
        }

        @keyframes owlFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        /* ====================================================
           MOBILE REVEAL
        ==================================================== */

        @keyframes serviceMobileReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ====================================================
           REDUCED MOTION
        ==================================================== */

        @media (prefers-reduced-motion: reduce) {
          .service-path,
          .service-path-highlight,
          .service-moving-light,
          .service-node-ring,
          .service-node-ring-reverse,
          .service-node-main,
          .owl-scroll-character {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;