import React, { useEffect, useState } from "react";

import {
  ArrowUpRight,
  Globe2,
  Share2,
  Play,
  ShoppingCart,
  FileText,
  Image as ImageIcon,
  ScanSearch,
  Activity,
  ShieldCheck,
  Fingerprint,
} from "lucide-react";

const protectionSurfaces = [
  {
    number: "01",
    title: "Websites",
    subtitle: "& Portals",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Social Platforms",
    subtitle: "Social Media Channels",
    icon: Share2,
  },
  {
    number: "03",
    title: "Streaming",
    subtitle: "OTT & Video Platforms",
    icon: Play,
  },
  {
    number: "04",
    title: "Marketplaces",
    subtitle: "E-Commerce Marketplaces",
    icon: ShoppingCart,
  },
  {
    number: "05",
    title: "Publishing",
    subtitle: "News & Publishing",
    icon: FileText,
  },
  {
    number: "06",
    title: "Digital Media",
    subtitle: "Images, Audio & More",
    icon: ImageIcon,
  },
];

const antiPiracyItems = [
  "Piracy monitoring across pirate sites, Telegram, social media and search",
  "Takedown management followed up until resolved",
  "Search de-indexing on Google and Bing",
  "Repeat offender tracking for mirrors and re-uploads",
  "Evidence reports ready for legal use",
  "Legal escalation through our legal partners",
];

const brandProtectionItems = [
  "Fake website takedowns via hosts and registrars",
  "Impersonation removal for fake pages and accounts",
  "Counterfeit listing removal on marketplaces",
  "Look-alike domain monitoring",
  "Trademark watch (coming soon)",
  "Legal escalation through licensed attorneys",
];

function ProtectionEcosystem() {
  const [activeSurface, setActiveSurface] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSurface((current) => (current + 1) % protectionSurfaces.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F9F4]
        py-14
        font-['Roboto',sans-serif]
        text-[#152019]
        dark:bg-[#070A07]
        dark:text-white
        sm:py-18
        md:py-20
        lg:py-24
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-[180px]
            top-[20%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#ADD132]/[0.045]
            blur-[130px]
            animate-[softFloat_10s_ease-in-out_infinite]
          "
        />

        <div
          className="
            absolute
            -right-[180px]
            bottom-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#ADD132]/[0.045]
            blur-[140px]
            animate-[softFloatReverse_12s_ease-in-out_infinite]
          "
        />

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#ADD132]/40
            to-transparent
          "
        />
      </div>

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1320px]
          px-5
          sm:px-7
          md:px-10
          lg:px-12
          xl:px-16
        "
      >
        {/* =========================================================
            INTRO
        ========================================================= */}

        <div
          className="
            relative
            max-w-3xl
            border-l
            border-[#ADD132]/50
            pl-5
            sm:pl-7
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#ADD132]
                shadow-[0_0_12px_#ADD132]
              "
            />

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#6D900B]
                dark:text-[#ADD132]
                sm:text-[9px]
              "
            >
              Protection Ecosystem
            </span>
          </div>

          <h2
            className="
              mt-4
              text-[30px]
              font-extrabold
              leading-[1.05]
              tracking-[-0.035em]
              text-[#152019]
              dark:text-white
              sm:text-[36px]
              md:text-[42px]
              lg:text-[48px]
            "
          >
            Protection that follows
            <span className="text-[#6D900B] dark:text-[#ADD132]">
              {" "}
              the signal.
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-[12px]
              leading-6
              text-[#68736B]
              dark:text-white/45
              sm:text-[13px]
              sm:leading-7
            "
          >
            Protect your valuable digital assets across the places where
            piracy, impersonation, counterfeit activity and unauthorized
            distribution can appear.
          </p>
        </div>

        {/* =========================================================
            PROTECTION FLOW
        ========================================================= */}

        <div className="relative mt-12 sm:mt-16">
          {/* CENTRAL SPINE */}

          <div
            className="
              absolute
              bottom-0
              left-[18px]
              top-0
              w-px
              bg-gradient-to-b
              from-transparent
              via-[#ADD132]/35
              to-transparent
              sm:left-1/2
              sm:-translate-x-1/2
            "
          />

          {/* MOVING SIGNAL */}

          <div
            className="
              absolute
              left-[16px]
              top-0
              z-20
              h-5
              w-1
              rounded-full
              bg-[#ADD132]
              shadow-[0_0_14px_#ADD132]
              animate-[flowDown_5s_linear_infinite]
              sm:left-1/2
              sm:-translate-x-1/2
            "
          />

          {/* =======================================================
              ANTI PIRACY
          ======================================================= */}

          <FlowSection
            number="01"
            eyebrow="Digital Rights"
            title="Anti-Piracy"
            description="Stop illegal copies of your movies, music, sports and courses."
            items={antiPiracyItems}
            icon={ScanSearch}
            side="left"
          />

          {/* =======================================================
              CORE
          ======================================================= */}

          <div
            className="
              relative
              my-12
              flex
              items-center
              sm:my-14
            "
          >
            <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-[#ADD132]/25 sm:block" />

            <div
              className="
                relative
                ml-[2px]
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#ADD132]/40
                bg-[#F7F9F4]
                shadow-[0_0_25px_rgba(173,209,50,0.12)]
                dark:bg-[#070A07]
                sm:mx-5
              "
            >
              <span
                className="
                  absolute
                  inset-1
                  rounded-full
                  border
                  border-dashed
                  border-[#ADD132]/30
                  animate-spin
                "
                style={{ animationDuration: "8s" }}
              />

              <ShieldCheck
                className="
                  relative
                  z-10
                  h-4
                  w-4
                  text-[#6D900B]
                  dark:text-[#ADD132]
                "
              />
            </div>

            <div className="hidden h-px flex-1 bg-gradient-to-r from-[#ADD132]/25 to-transparent sm:block" />
          </div>

          {/* =======================================================
              BRAND PROTECTION
          ======================================================= */}

          <FlowSection
            number="02"
            eyebrow="Brand Integrity"
            title="Brand Protection"
            description="Defend your name, logo and customers from misuse."
            items={brandProtectionItems}
            icon={Fingerprint}
            side="right"
            legalNote="Trademark registration and court filings are handled by licensed attorneys. We provide monitoring, evidence and takedowns."
          />
        </div>

        {/* =========================================================
            PROTECTION SURFACES
        ========================================================= */}

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div
            className="
              border-t
              border-black/[0.07]
              pt-8
              dark:border-white/[0.08]
            "
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-[#6D900B]
                    dark:text-[#ADD132]
                    sm:text-[9px]
                  "
                >
                  Protection surfaces
                </span>

                <h3
                  className="
                    mt-2
                    text-[25px]
                    font-extrabold
                    tracking-[-0.03em]
                    text-[#152019]
                    dark:text-white
                    sm:text-[30px]
                    md:text-[34px]
                  "
                >
                  One ecosystem. Many surfaces.
                </h3>
              </div>

              <p
                className="
                  max-w-sm
                  text-[11px]
                  leading-5
                  text-[#78837B]
                  dark:text-white/35
                  sm:text-[12px]
                  sm:leading-6
                "
              >
                Visibility extends across the digital environments where
                valuable content, brands and intellectual property appear.
              </p>
            </div>
          </div>

          {/* =======================================================
              SURFACE FLOW
          ======================================================= */}

          <div className="relative mt-8">
            <div
              className="
                absolute
                left-0
                right-0
                top-1/2
                hidden
                h-px
                -translate-y-1/2
                bg-gradient-to-r
                from-transparent
                via-[#ADD132]/25
                to-transparent
                lg:block
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                gap-0
                lg:flex-row
                lg:items-stretch
              "
            >
              {protectionSurfaces.map((item, index) => {
                const Icon = item.icon;
                const active = index === activeSurface;

                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveSurface(index)}
                    className="
                      group
                      relative
                      flex
                      min-h-[76px]
                      flex-1
                      items-center
                      gap-4
                      border-b
                      border-black/[0.07]
                      py-4
                      text-left
                      transition-all
                      duration-500
                      dark:border-white/[0.07]
                      lg:min-h-[150px]
                      lg:flex-col
                      lg:items-start
                      lg:justify-center
                      lg:border-b-0
                      lg:border-r
                      lg:px-5
                      lg:py-5
                      lg:last:border-r-0
                    "
                  >
                    {/* ACTIVE MARKER */}

                    <span
                      className={`
                        absolute
                        left-0
                        top-0
                        h-full
                        w-[2px]
                        bg-[#ADD132]
                        transition-transform
                        duration-500
                        lg:bottom-0
                        lg:left-0
                        lg:top-auto
                        lg:h-[2px]
                        lg:w-full
                        lg:origin-left
                        ${
                          active
                            ? "scale-100"
                            : "scale-0 group-hover:scale-100"
                        }
                      `}
                    />

                    <span
                      className={`
                        text-[8px]
                        font-bold
                        tracking-[0.12em]
                        transition-colors
                        lg:absolute
                        lg:left-5
                        lg:top-5
                        ${
                          active
                            ? "text-[#6D900B] dark:text-[#ADD132]"
                            : "text-[#A0AAA2] dark:text-white/20"
                        }
                      `}
                    >
                      {item.number}
                    </span>

                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        border
                        transition-all
                        duration-500
                        lg:h-9
                        lg:w-9
                        ${
                          active
                            ? "border-[#ADD132]/40 bg-[#ADD132]/10 text-[#6D900B] dark:text-[#ADD132]"
                            : "border-black/[0.08] text-[#8A958D] dark:border-white/[0.08] dark:text-white/25"
                        }
                      `}
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    <span className="min-w-0">
                      <span
                        className={`
                          block
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.06em]
                          transition-colors
                          sm:text-[11px]
                          ${
                            active
                              ? "text-[#152019] dark:text-white"
                              : "text-[#68736B] dark:text-white/45"
                          }
                        `}
                      >
                        {item.title}
                      </span>

                      <span
                        className="
                          mt-0.5
                          block
                          text-[8px]
                          text-[#909A93]
                          dark:text-white/25
                          sm:text-[9px]
                        "
                      >
                        {item.subtitle}
                      </span>
                    </span>

                    <span
                      className={`
                        ml-auto
                        text-[8px]
                        transition-all
                        duration-300
                        lg:absolute
                        lg:bottom-5
                        lg:right-5
                        ${
                          active
                            ? "translate-x-0 text-[#6D900B] opacity-100 dark:text-[#ADD132]"
                            : "-translate-x-2 text-[#ADD132] opacity-0"
                        }
                      `}
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE SURFACE DESCRIPTION */}

          <div
            key={activeSurface}
            className="
              mt-5
              flex
              items-center
              gap-3
              animate-[surfaceReveal_500ms_ease-out]
            "
          >
            <span className="h-px w-7 bg-[#ADD132]" />

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#6D900B]
                dark:text-[#ADD132]
              "
            >
              Active surface
            </span>

            <span className="text-[9px] text-[#879189] dark:text-white/25">
              —
            </span>

            <span
              className="
                text-[10px]
                font-medium
                text-[#5F6A63]
                dark:text-white/45
              "
            >
              {protectionSurfaces[activeSurface].title}
            </span>
          </div>
        </div>

        {/* =========================================================
            FINAL STATEMENT
        ========================================================= */}

        <div
          className="
            mt-14
            border-t
            border-black/[0.07]
            pt-7
            dark:border-white/[0.08]
            sm:mt-16
            sm:pt-8
          "
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                "
              >
                TrackOwls protection
              </span>

              <p
                className="
                  mt-2
                  text-[17px]
                  font-bold
                  leading-tight
                  tracking-[-0.02em]
                  text-[#152019]
                  dark:text-white
                  sm:text-[20px]
                  md:text-[22px]
                "
              >
                See the activity. Understand the risk. Take action.
              </p>
            </div>

            <button
              type="button"
              className="
                group
                flex
                w-fit
                items-center
                gap-2
                border-b
                border-[#ADD132]/50
                pb-1.5
                text-[8px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#152019]
                transition-all
                hover:border-[#ADD132]
                dark:text-white
                sm:text-[9px]
              "
            >
              Explore protection

              <ArrowUpRight
                className="
                  h-3.5
                  w-3.5
                  text-[#6D900B]
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  dark:text-[#ADD132]
                "
              />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800;900&display=swap');

        @keyframes flowDown {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes softFloat {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(30px, -20px) scale(1.08);
          }
        }

        @keyframes softFloatReverse {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-30px, 20px) scale(1.08);
          }
        }

        @keyframes surfaceReveal {
          from {
            opacity: 0;
            transform: translateY(6px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ===============================================================
   FLOW SECTION
=============================================================== */

function FlowSection({
  number,
  eyebrow,
  title,
  description,
  items,
  icon: Icon,
  side,
  legalNote,
}) {
  const isLeft = side === "left";

  return (
    <div
      className={`
        relative
        pl-12
        sm:pl-0
        ${
          isLeft
            ? "sm:pr-[53%]"
            : "sm:pl-[53%]"
        }
      `}
    >
      {/* MOBILE CONNECTOR */}

      <div
        className="
          absolute
          left-[14px]
          top-0
          h-10
          w-2
          rounded-full
          bg-[#ADD132]/20
          sm:hidden
        "
      />

      {/* DESKTOP CONNECTOR */}

      <div
        className={`
          absolute
          top-7
          hidden
          h-px
          w-[8%]
          bg-[#ADD132]/30
          sm:block
          ${
            isLeft
              ? "right-1/2"
              : "left-1/2"
          }
        `}
      />

      {/* NODE */}

      <div
        className={`
          absolute
          top-0
          hidden
          h-3
          w-3
          rounded-full
          border-2
          border-[#ADD132]
          bg-[#F7F9F4]
          shadow-[0_0_12px_rgba(173,209,50,0.35)]
          dark:bg-[#070A07]
          sm:block
          ${
            isLeft
              ? "right-[calc(50%-6px)]"
              : "left-[calc(50%-6px)]"
          }
        `}
      />

      <div
        className="
          border-t
          border-black/[0.07]
          pt-6
          dark:border-white/[0.07]
          sm:pt-7
        "
      >
        {/* HEADER */}

        <div className="flex items-center gap-3">
          <span
            className="
              text-[8px]
              font-bold
              tracking-[0.18em]
              text-[#9AA39C]
              dark:text-white/25
            "
          >
            {number}
          </span>

          <span className="h-px w-5 bg-[#ADD132]" />

          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#6D900B]
              dark:text-[#ADD132]
            "
          >
            {eyebrow}
          </span>
        </div>

        {/* TITLE */}

        <div className="mt-4 flex items-center gap-3">
          <Icon
            className="
              h-5
              w-5
              shrink-0
              text-[#6D900B]
              dark:text-[#ADD132]
            "
          />

          <h3
            className="
              text-[26px]
              font-extrabold
              leading-none
              tracking-[-0.035em]
              text-[#152019]
              dark:text-white
              sm:text-[30px]
              md:text-[34px]
            "
          >
            {title}
          </h3>
        </div>

        <p
          className="
            mt-4
            max-w-xl
            text-[12px]
            leading-6
            text-[#68736B]
            dark:text-white/45
            sm:text-[13px]
            sm:leading-7
          "
        >
          {description}
        </p>

        {/* ITEMS */}

        <div className="mt-6">
          {items.map((item, index) => (
            <div
              key={item}
              className="
                group
                flex
                items-start
                gap-3
                border-t
                border-black/[0.06]
                py-3
                dark:border-white/[0.06]
              "
            >
              <span
                className="
                  pt-0.5
                  text-[8px]
                  font-bold
                  tracking-[0.1em]
                  text-[#9AA39C]
                  transition-colors
                  group-hover:text-[#6D900B]
                  dark:text-white/20
                  dark:group-hover:text-[#ADD132]
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className="
                  mt-[6px]
                  h-1
                  w-1
                  shrink-0
                  rounded-full
                  bg-[#ADD132]/50
                  transition-transform
                  duration-300
                  group-hover:scale-150
                "
              />

              <p
                className="
                  text-[11px]
                  leading-5
                  text-[#657068]
                  dark:text-white/50
                  sm:text-[12px]
                  sm:leading-6
                "
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* LEGAL NOTE */}

        {legalNote && (
          <div
            className="
              mt-5
              border-l
              border-[#ADD132]
              pl-4
            "
          >
            <p
              className="
                text-[10px]
                leading-5
                text-[#7A857D]
                dark:text-white/35
                sm:text-[11px]
                sm:leading-6
              "
            >
              {legalNote}
            </p>
          </div>
        )}

        {/* FOOTER */}

        <div className="mt-5 flex items-center gap-2">
          <span className="h-px w-7 bg-[#ADD132]" />

          <span
            className="
              text-[7px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#8A958D]
              dark:text-white/25
            "
          >
            Active protection layer
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProtectionEcosystem;