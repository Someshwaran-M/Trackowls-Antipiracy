import React, { useEffect, useState } from "react";

import {
  ArrowUpRight,
  Globe2,
  Share2,
  Play,
  ShoppingCart,
  FileText,
  Image as ImageIcon,
  ShieldCheck,
  Check,
} from "lucide-react";

/* =========================================================
   PROTECTION SURFACES
========================================================= */

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

/* =========================================================
   ANTI-PIRACY
========================================================= */

const antiPiracyItems = [
  "Piracy monitoring across pirate sites, Telegram, social media and search",
  "Takedown management followed up until resolved",
  "Search de-indexing on Google and Bing",
  "Repeat offender tracking for mirrors and re-uploads",
  "Evidence reports ready for legal use",
  "Legal escalation through our legal partners",
];

/* =========================================================
   BRAND PROTECTION
========================================================= */

const brandProtectionItems = [
  "Fake website takedowns via hosts and registrars",
  "Impersonation removal for fake pages and accounts",
  "Counterfeit listing removal on marketplaces",
  "Look-alike domain monitoring",
  "Trademark watch (coming soon)",
  "Legal escalation through licensed attorneys",
];

/* =========================================================
   ANIMATED LETTER TEXT
========================================================= */

function AnimatedLetters({ text, playKey }) {
  return (
    <span
      key={playKey}
      className="inline"
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="protection-letter"
          style={{
            "--letter-delay": `${index * 0.014}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

/* =========================================================
   TABLE CAPABILITY ROW
========================================================= */

function ProtectionTableRow({
  number,
  leftText,
  rightText,
}) {
  const [animationKey, setAnimationKey] = useState(0);

  const replayLetters = () => {
    setAnimationKey((current) => current + 1);
  };

  return (
    <tr
      onClick={replayLetters}
      className="
        group
        cursor-pointer
        border-b
        border-black/[0.07]
        transition-colors
        duration-300
        hover:bg-[#ADD132]/[0.035]
        dark:border-white/[0.07]
        dark:hover:bg-[#ADD132]/[0.035]
      "
    >
      {/* ===================================================
          LEFT
      =================================================== */}

      <td
        className="
          w-1/2
          border-r
          border-black/[0.07]
          px-4
          py-3.5
          align-middle
          dark:border-white/[0.07]
          sm:px-5
          sm:py-4
          md:px-6
        "
      >
        <div className="flex min-w-0 items-start gap-2.5">
          <span
            className="
              mt-[3px]
              hidden
              w-5
              shrink-0
              text-[8px]
              font-bold
              tracking-[0.08em]
              text-black/25
              dark:text-white/20
              sm:block
            "
          >
            {number}
          </span>

          <span
            className="
              mt-[6px]
              h-1.5
              w-1.5
              shrink-0
              rounded-full
              bg-[#ADD132]
              shadow-[0_0_7px_rgba(173,209,50,0.35)]
              transition-transform
              duration-300
              group-hover:scale-125
            "
          />

          <span
            className="
              min-w-0
              text-[10px]
              font-normal
              leading-[1.6]
              text-[#27342D]
              dark:text-white/65
              sm:text-[11px]
              md:text-[12px]
            "
          >
            <AnimatedLetters
              text={leftText}
              playKey={`left-${animationKey}`}
            />
          </span>
        </div>
      </td>

      {/* ===================================================
          RIGHT
      =================================================== */}

      <td
        className="
          w-1/2
          px-4
          py-3.5
          align-middle
          sm:px-5
          sm:py-4
          md:px-6
        "
      >
        <div className="flex min-w-0 items-start gap-2.5">
          <span
            className="
              mt-[3px]
              hidden
              w-5
              shrink-0
              text-[8px]
              font-bold
              tracking-[0.08em]
              text-black/25
              dark:text-white/20
              sm:block
            "
          >
            {number}
          </span>

          <span
            className="
              mt-[6px]
              h-1.5
              w-1.5
              shrink-0
              rounded-full
              bg-[#ADD132]
              shadow-[0_0_7px_rgba(173,209,50,0.35)]
              transition-transform
              duration-300
              group-hover:scale-125
            "
          />

          <span
            className="
              min-w-0
              text-[10px]
              font-normal
              leading-[1.6]
              text-[#27342D]
              dark:text-white/65
              sm:text-[11px]
              md:text-[12px]
            "
          >
            <AnimatedLetters
              text={rightText}
              playKey={`right-${animationKey}`}
            />
          </span>
        </div>
      </td>
    </tr>
  );
}

/* =========================================================
   PROTECTION ECOSYSTEM
========================================================= */

function ProtectionEcosystem() {
  const [activeSurface, setActiveSurface] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSurface(
        (current) => (current + 1) % protectionSurfaces.length
      );
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F9F4]
        py-12
        font-['Roboto',sans-serif]
        text-[#152019]
        dark:bg-[#070A07]
        dark:text-white
        sm:py-14
        md:py-16
        lg:py-18
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-[15%]
            h-[280px]
            w-[300px]
            rounded-full
            bg-[#ADD132]/[0.03]
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-[10%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#ADD132]/[0.025]
            blur-[120px]
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
          max-w-[1480px]
          px-5
          sm:px-7
          md:px-10
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            MAIN HEADER
        ===================================================== */}

        <header
          className="
            border-b
            border-black/[0.08]
            pb-7
            dark:border-white/[0.08]
            sm:pb-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#ADD132]" />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-[#6D900B]
                    dark:text-[#ADD132]
                  "
                >
                  Protection Ecosystem
                </span>
              </div>

              <h2
                className="
                  text-[27px]
                  font-extrabold
                  leading-[1.08]
                  tracking-[-0.035em]
                  sm:text-3xl
                  md:text-[44px]
                  lg:text-[48px]
                "
              >
                Anti Piracy and Brand
                <span className="text-[#6D900B] dark:text-[#ADD132]">
                  {" "}
                  Production.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-[410px]
                text-[10px]
                font-normal
                leading-5
                text-black/45
                dark:text-white/40
                sm:text-[11px]
                md:text-right
              "
            >
              Protect valuable digital assets across the places where piracy,
              impersonation, counterfeit activity and unauthorized distribution
              can appear.
            </p>
          </div>
        </header>

        {/* =====================================================
            PROTECTION CAPABILITIES
        ===================================================== */}
{/* =========================================================
    PREMIUM DUAL PROTECTION MATRIX
========================================================= */}

<section className="mt-9 sm:mt-11">

  {/* =======================================================
      SECTION HEADER
  ======================================================= */}

  <div
    className="
      mb-5
      flex
      flex-col
      gap-3
      sm:flex-row
      sm:items-center
      sm:justify-between
    "
  >

    <div className="flex items-center gap-3">

      <span
        className="
          text-[8px]
          font-black
          tracking-[0.2em]
          text-[#6D900B]
          dark:text-[#ADD132]
        "
      >
        01
      </span>

      <span className="h-px w-7 bg-[#ADD132]" />

      <span
        className="
          text-[8px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-black/45
          dark:text-white/35
        "
      >
        Protection capabilities
      </span>

    </div>


    <div
      className="
        flex
        items-center
        gap-2
        self-start
        sm:self-auto
      "
    >

      <span className="relative flex h-1.5 w-1.5">

        <span
          className="
            absolute
            inset-0
            animate-ping
            rounded-full
            bg-[#ADD132]
            opacity-40
          "
        />

        <span
          className="
            relative
            h-1.5
            w-1.5
            rounded-full
            bg-[#ADD132]
            shadow-[0_0_8px_rgba(173,209,50,0.8)]
          "
        />

      </span>

      <span
        className="
          text-[7px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-black/35
          dark:text-white/30
        "
      >
        Protection active
      </span>

    </div>

  </div>


  {/* =======================================================
      MATRIX WRAPPER
  ======================================================= */}

  <div
    className="
      protection-matrix
      relative
      overflow-hidden
      rounded-[16px]
      border
      border-black/[0.10]
      bg-white
      shadow-[0_12px_40px_rgba(18,30,20,0.045)]
      dark:border-white/[0.10]
      dark:bg-[#090D0A]
      dark:shadow-[0_15px_50px_rgba(0,0,0,0.22)]
    "
  >

    {/* =====================================================
        MOVING SCAN BEAM
    ===================================================== */}

    <div
      className="
        pointer-events-none
        absolute
        left-0
        right-0
        top-0
        z-40
        h-px
        overflow-hidden
      "
    >
      <span
        className="
          protection-scan
          absolute
          top-0
          h-px
          w-[24%]
          bg-gradient-to-r
          from-transparent
          via-[#ADD132]
          to-transparent
          shadow-[0_0_14px_rgba(173,209,50,0.9)]
        "
      />
    </div>


    {/* =====================================================
        TABLE
    ===================================================== */}

    <table
      className="
        w-full
        table-fixed
        border-collapse
      "
    >

      <colgroup>
        <col className="w-1/2" />
        <col className="w-1/2" />
      </colgroup>


      {/* ===================================================
          HEADER
      =================================================== */}

      <thead>

        <tr
          className="
            border-b
            border-black/[0.08]
            bg-[#F7F9F5]
            dark:border-white/[0.08]
            dark:bg-[#0D120E]
          "
        >

          {/* LEFT */}

          <th
            className="
              border-r
              border-black/[0.08]
              px-4
              py-4
              text-left
              align-middle
              font-normal
              dark:border-white/[0.08]
              sm:px-5
              md:px-6
            "
          >

            <div
              className="
                protection-header
                flex
                items-center
                gap-3
              "
            >

              <div
                className="
                  protection-number
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-[9px]
                  border
                  border-[#ADD132]/45
                  bg-[#ADD132]/[0.06]
                  text-[8px]
                  font-black
                  text-[#6D900B]
                  dark:text-[#ADD132]
                "
              >
                01
              </div>


              <div className="min-w-0">

                <h3
                  className="
                    text-[13px]
                    font-extrabold
                    leading-tight
                    tracking-[-0.015em]
                    text-[#152019]
                    dark:text-white
                    sm:text-[14px]
                  "
                >
                  Anti-piracy
                </h3>

                <p
                  className="
                    mt-1
                    text-[8px]
                    leading-none
                    text-black/40
                    dark:text-white/30
                  "
                >
                  Digital rights protection
                </p>

              </div>

            </div>

          </th>


          {/* RIGHT */}

          <th
            className="
              px-4
              py-4
              text-left
              align-middle
              font-normal
              sm:px-5
              md:px-6
            "
          >

            <div
              className="
                protection-header
                flex
                items-center
                gap-3
              "
            >

              <div
                className="
                  protection-number
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-[9px]
                  border
                  border-[#ADD132]/45
                  bg-[#ADD132]/[0.06]
                  text-[8px]
                  font-black
                  text-[#6D900B]
                  dark:text-[#ADD132]
                "
              >
                02
              </div>


              <div className="min-w-0">

                <h3
                  className="
                    text-[13px]
                    font-extrabold
                    leading-tight
                    tracking-[-0.015em]
                    text-[#152019]
                    dark:text-white
                    sm:text-[14px]
                  "
                >
                  Brand protection
                </h3>

                <p
                  className="
                    mt-1
                    text-[8px]
                    leading-none
                    text-black/40
                    dark:text-white/30
                  "
                >
                  Brand integrity protection
                </p>

              </div>

            </div>

          </th>

        </tr>

      </thead>


      {/* ===================================================
          BODY
      =================================================== */}

      <tbody>

        {/* DESCRIPTION */}

        <tr
          className="
            border-b
            border-black/[0.08]
            dark:border-white/[0.08]
          "
        >

          <td
            className="
              border-r
              border-black/[0.08]
              px-4
              py-4
              align-middle
              dark:border-white/[0.08]
              sm:px-5
              md:px-6
            "
          >

            <p
              className="
                max-w-[470px]
                text-[10px]
                leading-5
                text-black/55
                dark:text-white/45
                sm:text-[11px]
                md:text-xs
              "
            >
              Stop illegal copies of your movies, music, sports and
              courses.
            </p>

          </td>


          <td
            className="
              px-4
              py-4
              align-middle
              sm:px-5
              md:px-6
            "
          >

            <p
              className="
                max-w-[470px]
                text-[10px]
                leading-5
                text-black/55
                dark:text-white/45
                sm:text-[11px]
                md:text-xs
              "
            >
              Defend your name, logo and customers from misuse.
            </p>

          </td>

        </tr>


        {/* =================================================
            CAPABILITY ROWS
        ================================================= */}

        {antiPiracyItems.map((leftItem, index) => {

          const rightItem = brandProtectionItems[index];

          return (
            <tr
              key={`${leftItem}-${rightItem}`}
              className="
                protection-row
                group
                border-b
                border-black/[0.07]
                last:border-b-0
                dark:border-white/[0.07]
              "
              style={{
                "--row-delay": `${index * 90}ms`,
              }}
            >

              {/* LEFT CELL */}

              <td
                className="
                  protection-cell
                  relative
                  border-r
                  border-black/[0.07]
                  px-4
                  py-3.5
                  dark:border-white/[0.07]
                  sm:px-5
                  md:px-6
                "
              >

                {/* Hover background */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    origin-left
                    scale-x-0
                    bg-[#ADD132]/[0.055]
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-x-100
                    dark:bg-[#ADD132]/[0.045]
                  "
                />


                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-3
                  "
                >

                  {/* Number */}

                  <span
                    className="
                      protection-row-number
                      w-5
                      shrink-0
                      text-[7px]
                      font-black
                      tracking-[0.1em]
                      text-black/25
                      transition-colors
                      duration-300
                      group-hover:text-[#6D900B]
                      dark:text-white/20
                      dark:group-hover:text-[#ADD132]
                      sm:w-6
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  {/* Indicator */}

                  <span
                    className="
                      protection-dot
                      relative
                      flex
                      h-4
                      w-4
                      shrink-0
                      items-center
                      justify-center
                    "
                  >

                    <span
                      className="
                        absolute
                        h-4
                        w-4
                        scale-0
                        rounded-full
                        border
                        border-[#ADD132]/40
                        transition-all
                        duration-500
                        group-hover:scale-100
                      "
                    />

                    <span
                      className="
                        relative
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#ADD132]
                        transition-all
                        duration-300
                        group-hover:scale-125
                        group-hover:shadow-[0_0_9px_rgba(173,209,50,0.9)]
                      "
                    />

                  </span>


                  {/* Text */}

                  <span
                    className="
                      relative
                      text-[10px]
                      font-medium
                      leading-5
                      text-[#39453E]
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-[#152019]
                      dark:text-white/55
                      dark:group-hover:text-white
                      sm:text-[11px]
                      md:text-xs
                    "
                  >
                    {leftItem}
                  </span>

                </div>

              </td>


              {/* RIGHT CELL */}

              <td
                className="
                  protection-cell
                  relative
                  px-4
                  py-3.5
                  sm:px-5
                  md:px-6
                "
              >

                {/* Hover background */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    origin-right
                    scale-x-0
                    bg-[#ADD132]/[0.055]
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-x-100
                    dark:bg-[#ADD132]/[0.045]
                  "
                />


                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-3
                  "
                >

                  {/* Number */}

                  <span
                    className="
                      protection-row-number
                      w-5
                      shrink-0
                      text-[7px]
                      font-black
                      tracking-[0.1em]
                      text-black/25
                      transition-colors
                      duration-300
                      group-hover:text-[#6D900B]
                      dark:text-white/20
                      dark:group-hover:text-[#ADD132]
                      sm:w-6
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  {/* Indicator */}

                  <span
                    className="
                      protection-dot
                      relative
                      flex
                      h-4
                      w-4
                      shrink-0
                      items-center
                      justify-center
                    "
                  >

                    <span
                      className="
                        absolute
                        h-4
                        w-4
                        scale-0
                        rounded-full
                        border
                        border-[#ADD132]/40
                        transition-all
                        duration-500
                        group-hover:scale-100
                      "
                    />

                    <span
                      className="
                        relative
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#ADD132]
                        transition-all
                        duration-300
                        group-hover:scale-125
                        group-hover:shadow-[0_0_9px_rgba(173,209,50,0.9)]
                      "
                    />

                  </span>


                  {/* Text */}

                  <span
                    className="
                      relative
                      text-[10px]
                      font-medium
                      leading-5
                      text-[#39453E]
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-[#152019]
                      dark:text-white/55
                      dark:group-hover:text-white
                      sm:text-[11px]
                      md:text-xs
                    "
                  >
                    {rightItem}
                  </span>

                </div>

              </td>

            </tr>
          );

        })}

      </tbody>


      {/* ===================================================
          TABLE FOOTER
      =================================================== */}

      <tfoot>

        <tr>

          <td
            colSpan="2"
            className="
              bg-[#F8FAF6]
              px-4
              py-3.5
              dark:bg-[#0A0F0B]
              sm:px-5
              md:px-6
            "
          >

            <div
              className="
                flex
                flex-col
                gap-2
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <div className="flex items-center gap-2">

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#ADD132]
                    shadow-[0_0_8px_rgba(173,209,50,0.7)]
                  "
                />

                <span
                  className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-black/40
                    dark:text-white/30
                  "
                >
                  Continuous monitoring
                </span>

              </div>


              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.15em]
                  text-black/30
                  dark:text-white/25
                "
              >
                12 capabilities
              </span>

            </div>

          </td>

        </tr>

      </tfoot>

    </table>


    {/* =====================================================
        VERTICAL CENTER SIGNAL
    ===================================================== */}

    <div
      className="
        pointer-events-none
        absolute
        bottom-[52px]
        left-1/2
        top-[73px]
        hidden
        w-px
        -translate-x-1/2
        bg-gradient-to-b
        from-transparent
        via-[#ADD132]/20
        to-transparent
        md:block
      "
    />

  </div>


  {/* =======================================================
      LEGAL NOTE
  ======================================================= */}

  <div
    className="
      mt-4
      flex
      items-start
      gap-3
      border-l
      border-[#ADD132]/50
      pl-4
    "
  >

    <ShieldCheck
      className="
        mt-0.5
        h-3.5
        w-3.5
        shrink-0
        text-[#6D900B]
        dark:text-[#ADD132]
      "
    />

    <p
      className="
        max-w-[900px]
        text-[9px]
        font-normal
        leading-5
        text-black/40
        dark:text-white/35
        sm:text-[10px]
      "
    >
      Trademark registration and court filings are handled by
      licensed attorneys. We provide monitoring, evidence and
      takedowns.
    </p>

  </div>


  {/* =======================================================
      ANIMATION CSS
  ======================================================= */}

  <style>{`

    /* ================================================
       TABLE ENTRY
    ================================================= */

    .protection-matrix {
      animation:
        protectionMatrixReveal
        800ms
        cubic-bezier(0.22, 1, 0.36, 1)
        both;
    }

    @keyframes protectionMatrixReveal {

      0% {
        opacity: 0;
        transform: translateY(22px);
        clip-path: inset(12% 0 12% 0);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
        clip-path: inset(0 0 0 0);
      }

    }


    /* ================================================
       HEADER REVEAL
    ================================================= */

    .protection-header {
      animation:
        protectionHeaderReveal
        700ms
        250ms
        cubic-bezier(0.22, 1, 0.36, 1)
        both;
    }

    @keyframes protectionHeaderReveal {

      0% {
        opacity: 0;
        transform: translateX(-12px);
      }

      100% {
        opacity: 1;
        transform: translateX(0);
      }

    }


    /* ================================================
       NUMBER PULSE
    ================================================= */

    .protection-number {
      animation:
        protectionNumberReveal
        650ms
        400ms
        cubic-bezier(0.22, 1, 0.36, 1)
        both;
    }

    @keyframes protectionNumberReveal {

      0% {
        opacity: 0;
        transform: scale(0.65);
      }

      70% {
        opacity: 1;
        transform: scale(1.08);
      }

      100% {
        opacity: 1;
        transform: scale(1);
      }

    }


    /* ================================================
       ROW STAGGER
    ================================================= */

    .protection-row {
      opacity: 0;
      animation:
        protectionRowReveal
        600ms
        var(--row-delay)
        cubic-bezier(0.22, 1, 0.36, 1)
        forwards;
    }

    @keyframes protectionRowReveal {

      0% {
        opacity: 0;
        transform: translateY(12px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }

    }


    /* ================================================
       MOVING SCAN BEAM
    ================================================= */

    .protection-scan {
      animation:
        protectionScan
        5s
        cubic-bezier(0.45, 0, 0.55, 1)
        infinite;
    }

    @keyframes protectionScan {

      0% {
        left: -25%;
        opacity: 0;
      }

      10% {
        opacity: 1;
      }

      50% {
        opacity: 1;
      }

      90% {
        opacity: 1;
      }

      100% {
        left: 125%;
        opacity: 0;
      }

    }


    /* ================================================
       HOVER LINE
    ================================================= */

    .protection-row::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -1px;
      width: 0;
      height: 1px;
      background: #ADD132;
      transform: translateX(-50%);
      transition:
        width 500ms cubic-bezier(0.22, 1, 0.36, 1);
      pointer-events: none;
      z-index: 20;
    }

    .protection-row:hover::after {
      width: 100%;
    }


    /* ================================================
       MOBILE
    ================================================= */

    @media (max-width: 640px) {

      .protection-matrix {
        border-radius: 13px;
      }

      .protection-row::after {
        display: none;
      }

    }


    /* ================================================
       REDUCED MOTION
    ================================================= */

    @media (prefers-reduced-motion: reduce) {

      .protection-matrix,
      .protection-header,
      .protection-number,
      .protection-row,
      .protection-scan {
        animation: none !important;
      }

      .protection-matrix {
        opacity: 1 !important;
        transform: none !important;
        clip-path: none !important;
      }

      .protection-header,
      .protection-number,
      .protection-row {
        opacity: 1 !important;
        transform: none !important;
      }

    }

  `}</style>

</section>

        
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        /*
          Letter animation happens only when the
          capability row is hovered.
        */

        .protection-letter {
          display: inline-block;
          opacity: 1;
          transform: translateY(0);
          transition: none;
        }

        .capability-row:hover .protection-letter {
          animation: protectionLetterReveal 0.3s ease-out
            var(--letter-delay) both;
        }

        @keyframes protectionLetterReveal {
          0% {
            opacity: 0.25;
            transform: translateY(4px);
            filter: blur(1.5px);
          }

          60% {
            opacity: 0.9;
            transform: translateY(-1px);
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /*
          The scan travels down the whole protection table.
        */

        @keyframes tableScan {
          0% {
            transform: translateY(0);
            opacity: 0;
          }

          8% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        /*
          Mobile touch interaction.
        */

        @media (max-width: 639px) {
          .capability-row:active .protection-letter {
            animation: protectionLetterReveal 0.28s ease-out
              var(--letter-delay) both;
          }
        }

        /*
          Reduced motion accessibility.
        */

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

export default ProtectionEcosystem;