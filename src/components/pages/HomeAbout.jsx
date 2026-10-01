import React from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  ScanSearch,
  SearchCheck,
  Trash2,
  Shield,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    number: "01",
    title: "SCAN",
    heading: "Find the signals.",
    body:
      "We monitor websites, social platforms, Telegram, marketplaces, search results and domains to discover activity around your valuable assets.",
    icon: ScanSearch,
  },
  {
    number: "02",
    title: "DETECT",
    heading: "Verify what matters.",
    body:
      "Potential matches are reviewed and verified before evidence is captured, helping separate meaningful threats from irrelevant results.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "REMOVE",
    heading: "Turn intelligence into action.",
    body:
      "We coordinate response workflows with platforms, hosts, registrars and search engines to address identified infringements.",
    icon: Trash2,
  },
  {
    number: "04",
    title: "PROTECT",
    heading: "Keep watching.",
    body:
      "We monitor repeat offenders, track emerging activity and provide ongoing visibility so protection continues beyond a single incident.",
    icon: Shield,
  },
];

const approachPoints = [
  "Digital visibility",
  "Threat intelligence",
  "Human verification",
  "Protection workflows",
];

const whyTrackOwls = [
  {
    title: "One partner",
    text: "One partner for content and brand protection.",
  },
  {
    title: "Human review",
    text: "Human review before every takedown, so no wrongful claims.",
  },
  {
    title: "Regional focus",
    text: "Made for India and regional-language content.",
  },
  {
    title: "Authorization",
    text: "Written authorization before we act for you.",
  },
  {
    title: "Transparent reporting",
    text: "Honest reports, including what we could not remove.",
  },
  {
    title: "Confidential handling",
    text: "Confidential handling of your files and data.",
  },
];

function HomeAbout() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F4F7F0]
        py-14
        text-[#152019]
        dark:bg-[#050705]
        dark:text-white
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-24
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#ADD132]/10
          blur-[110px]
          sm:h-[360px]
          sm:w-[360px]
          lg:h-[450px]
          lg:w-[450px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#ADD132]/[0.06]
          blur-[120px]
          sm:h-[400px]
          sm:w-[400px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.28]
          [background-image:linear-gradient(to_right,rgba(21,32,25,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(21,32,25,0.025)_1px,transparent_1px)]
          [background-size:80px_80px]
          dark:opacity-[0.1]
          dark:[background-image:linear-gradient(to_right,rgba(173,209,50,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(173,209,50,0.035)_1px,transparent_1px)]
        "
      />

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
            MAIN ABOUT VISUAL
        ===================================================== */}

        <div
          className="
            grid
            gap-10
            lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]
            lg:items-center
            lg:gap-14
            xl:gap-20
          "
        >
          {/* IMAGE */}

          <div
            className="
              relative
              order-2
              h-[350px]
              overflow-hidden
              border
              border-black/[0.08]
              bg-[#E8EDE2]
              dark:border-white/[0.08]
              dark:bg-[#080D09]
              sm:h-[430px]
              lg:order-1
              lg:h-[520px]
            "
          >
            <img
              src="/home-about-light.jpeg"
              alt="TrackOwls digital anti-piracy intelligence"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                dark:hidden
              "
            />

            <img
              src="/home-about-dark.jpeg"
              alt="TrackOwls digital anti-piracy intelligence"
              className="
                absolute
                inset-0
                hidden
                h-full
                w-full
                object-cover
                object-center
                dark:block
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/75
                via-black/15
                to-transparent
              "
            />

            <div
              className="
                absolute
                left-5
                right-5
                top-5
                z-20
                flex
                items-center
                justify-between
                sm:left-7
                sm:right-7
                sm:top-7
              "
            >
              <div className="flex items-center gap-2">
                <span
                  className="
                    h-2
                    w-2
                    animate-pulse
                    rounded-full
                    bg-[#ADD132]
                    shadow-[0_0_15px_rgba(173,209,50,0.9)]
                  "
                />

                <span
                  className="
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-white/80
                  "
                >
                  Protection intelligence
                </span>
              </div>

              <span
                className="
                  text-[8px]
                  font-bold
                  tracking-[0.15em]
                  text-white/45
                "
              >
                LIVE
              </span>
            </div>

            <div
              className="
                pointer-events-none
                absolute
                left-0
                right-0
                top-0
                z-10
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#ADD132]
                to-transparent
                opacity-80
                animate-[trackScan_4s_linear_infinite]
              "
            />

            <span
              className="
                absolute
                left-5
                top-16
                z-10
                h-7
                w-7
                border-l
                border-t
                border-[#ADD132]/60
                sm:left-7
              "
            />

            <span
              className="
                absolute
                right-5
                top-16
                z-10
                h-7
                w-7
                border-r
                border-t
                border-[#ADD132]/60
                sm:right-7
              "
            />

            <span
              className="
                absolute
                bottom-20
                left-5
                z-10
                h-7
                w-7
                border-b
                border-l
                border-[#ADD132]/60
                sm:left-7
              "
            />

            <span
              className="
                absolute
                bottom-20
                right-5
                z-10
                h-7
                w-7
                border-b
                border-r
                border-[#ADD132]/60
                sm:right-7
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-20
                p-5
                sm:p-7
              "
            >
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p
                    className="
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.22em]
                      text-[#ADD132]
                    "
                  >
                    TrackOwls / 01
                  </p>

                  <h3
                    className="
                      mt-2
                      max-w-lg
                      text-[25px]
                      font-black
                      leading-[0.98]
                      tracking-[-0.04em]
                      text-white
                      sm:text-[32px]
                    "
                  >
                    Visibility creates
                    <br />
                    awareness.
                  </h3>
                </div>

                <div
                  className="
                    hidden
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#ADD132]/50
                    bg-black/20
                    backdrop-blur-md
                    sm:flex
                  "
                >
                  <ShieldCheck
                    size={20}
                    strokeWidth={1.7}
                    className="text-[#ADD132]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              ABOUT TRACKOWLS — RIGHT
          ================================================= */}

          <div className="order-1 lg:order-2">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#ADD132]" />

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.24em]
                  text-[#6D900B]
                  dark:text-[#ADD132]
                  sm:text-[10px]
                "
              >
                About TrackOwls
              </span>
            </div>

            <h2
              className="
                max-w-2xl
                text-[34px]
                font-black
                leading-[1]
                tracking-[-0.045em]
                text-[#152019]
                dark:text-white
                sm:text-[42px]
                md:text-[48px]
                lg:text-[54px]
              "
            >
              Protecting digital content
              <br />
              <span className="text-[#6D900B] dark:text-[#ADD132]">
                in a changing world.
              </span>
            </h2>

            <div className="mt-7 max-w-xl">
              <div className="mb-5 h-px w-14 bg-[#ADD132]" />

              <p
                className="
                  text-[13px]
                  leading-6
                  text-[#68736B]
                  dark:text-white/55
                  sm:text-[14px]
                  sm:leading-7
                "
              >
                TrackOwls is an anti-piracy and digital protection company
                focused on helping businesses, creators and organizations
                protect their valuable content and intellectual property
                online.
              </p>

              <p
                className="
                  mt-5
                  text-[13px]
                  leading-6
                  text-[#68736B]
                  dark:text-white/45
                  sm:text-[14px]
                  sm:leading-7
                "
              >
                We monitor websites, social platforms, Telegram, marketplaces,
                search engines and other digital channels to identify
                unauthorized use, piracy, impersonation and other forms of
                online misuse.
              </p>

              <p
                className="
                  mt-5
                  text-[13px]
                  leading-6
                  text-[#68736B]
                  dark:text-white/40
                  sm:text-[14px]
                  sm:leading-7
                "
              >
                Our team combines technology, monitoring and human
                verification to identify relevant threats, collect evidence
                and support appropriate removal and protection workflows.
              </p>
            </div>

            <div
              className="
                mt-8
                border-y
                border-black/[0.08]
                dark:border-white/[0.08]
              "
            >
              <div
                className="
                  grid
                  grid-cols-2
                  divide-x
                  divide-black/[0.08]
                  dark:divide-white/[0.08]
                "
              >
                <div className="py-4 pr-5">
                  <p
                    className="
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#6D900B]
                      dark:text-[#ADD132]
                    "
                  >
                    Focus
                  </p>

                  <p
                    className="
                      mt-2
                      text-[12px]
                      font-bold
                      text-[#152019]
                      dark:text-white
                      sm:text-[13px]
                    "
                  >
                    Digital Protection
                  </p>
                </div>

                <div className="py-4 pl-5">
                  <p
                    className="
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#6D900B]
                      dark:text-[#ADD132]
                    "
                  >
                    Approach
                  </p>

                  <p
                    className="
                      mt-2
                      text-[12px]
                      font-bold
                      text-[#152019]
                      dark:text-white
                      sm:text-[13px]
                    "
                  >
                    Intelligence & Action
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            WHY TRACKOWLS
            ADDED FROM PROVIDED IMAGE
        ===================================================== */}

       {/* =====================================================
    WHY TRACKOWLS — EDITORIAL MANIFESTO DESIGN
===================================================== */}

<div
  className="
    relative
    mt-16
    border-t
    border-black/[0.08]
    pt-14
    dark:border-white/[0.09]
    sm:mt-20
    sm:pt-16
    md:mt-24
    md:pt-20
  "
>
  <div
    className="
      grid
      gap-12
      lg:grid-cols-[0.75fr_1.25fr]
      lg:gap-20
      xl:gap-28
    "
  >
    {/* =================================================
        LEFT — EDITORIAL STATEMENT
    ================================================= */}

    <div className="relative">
      <div className="sticky top-32">
        {/* LABEL */}

        <div className="mb-5 flex items-center gap-3">
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[#ADD132]
              shadow-[0_0_12px_rgba(173,209,50,0.65)]
            "
          />

          <span
            className="
              text-[9px]
              font-black
              uppercase
              tracking-[0.24em]
              text-[#6D900B]
              dark:text-[#ADD132]
              sm:text-[10px]
            "
          >
            Why TrackOwls
          </span>
        </div>

        {/* LARGE WORD */}

        <div
          className="
            select-none
            text-[76px]
            font-black
            leading-[0.78]
            tracking-[-0.09em]
            text-[#152019]/[0.06]
            dark:text-white/[0.055]
            sm:text-[100px]
            md:text-[120px]
            lg:text-[135px]
          "
        >
          WHY
        </div>

        <h3
          className="
            relative
            -mt-2
            max-w-md
            text-[30px]
            font-black
            leading-[1]
            tracking-[-0.045em]
            text-[#152019]
            dark:text-white
            sm:text-[38px]
            md:text-[44px]
          "
        >
          Protection should be
          <span className="text-[#6D900B] dark:text-[#ADD132]">
            {" "}
            responsible.
          </span>
        </h3>

        <div
          className="
            mt-7
            h-px
            w-20
            bg-[#ADD132]
          "
        />

        <p
          className="
            mt-6
            max-w-sm
            text-[12px]
            leading-6
            text-[#68736B]
            dark:text-white/40
            sm:text-[13px]
            sm:leading-7
          "
        >
          TrackOwls combines technology, human review and clear processes to
          help organizations protect their content and brands responsibly.
        </p>

        {/* SMALL MARK */}

        <div
          className="
            mt-8
            flex
            items-center
            gap-3
            text-[8px]
            font-black
            uppercase
            tracking-[0.2em]
            text-[#68736B]/60
            dark:text-white/25
          "
        >
          <span className="h-px w-8 bg-[#ADD132]/60" />
          Six principles
        </div>
      </div>
    </div>

    {/* =================================================
        RIGHT — MANIFESTO LIST
    ================================================= */}

    <div className="relative">
      {/* TOP LINE */}

      <div
        className="
          mb-2
          flex
          items-center
          justify-between
          border-b
          border-black/[0.08]
          pb-4
          dark:border-white/[0.08]
        "
      >
        <span
          className="
            text-[8px]
            font-black
            uppercase
            tracking-[0.2em]
            text-[#6D900B]
            dark:text-[#ADD132]
          "
        >
          Our principles
        </span>

        <span
          className="
            text-[8px]
            font-bold
            tracking-[0.16em]
            text-black/25
            dark:text-white/20
          "
        >
          01 — 06
        </span>
      </div>

      {/* ITEMS */}

      <div>
        {whyTrackOwls.map((item, index) => (
          <div
            key={item.title}
            className="
              group
              relative
              flex
              gap-5
              border-b
              border-black/[0.08]
              py-7
              dark:border-white/[0.08]
              sm:gap-7
              sm:py-8
            "
          >
            {/* NUMBER */}

            <div
              className="
                w-8
                shrink-0
                pt-1
                sm:w-10
              "
            >
              <span
                className="
                  text-[10px]
                  font-black
                  tracking-[0.15em]
                  text-[#6D900B]/60
                  transition-colors
                  duration-300
                  group-hover:text-[#6D900B]
                  dark:text-[#ADD132]/50
                  dark:group-hover:text-[#ADD132]
                  sm:text-[11px]
                "
              >
                0{index + 1}
              </span>
            </div>

            {/* CONTENT */}

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-px
                    w-0
                    bg-[#ADD132]
                    transition-all
                    duration-500
                    group-hover:w-8
                  "
                />

                <span
                  className="
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-[#68736B]/50
                    transition-colors
                    duration-300
                    group-hover:text-[#6D900B]
                    dark:text-white/20
                    dark:group-hover:text-[#ADD132]
                  "
                >
                  TrackOwls principle
                </span>
              </div>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-[17px]
                  font-bold
                  leading-[1.45]
                  tracking-[-0.02em]
                  text-[#152019]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  dark:text-white
                  sm:text-[19px]
                  md:text-[21px]
                "
              >
                {item.title}
                <span className="font-normal text-[#68736B] dark:text-white/45">
                  {" "}
                  {item.text.replace(item.title, "").trim()}
                </span>
              </p>
            </div>

            {/* RIGHT INDICATOR */}

            <div
              className="
                hidden
                shrink-0
                items-center
                sm:flex
              "
            >
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/[0.08]
                  text-black/20
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:border-[#ADD132]
                  group-hover:bg-[#ADD132]
                  group-hover:text-[#152019]
                  group-hover:opacity-100
                  dark:border-white/[0.08]
                  dark:text-white/20
                "
              >
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                />
              </span>
            </div>

            {/* ACTIVE LINE */}

            <span
              className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-0
                bg-[#ADD132]
                transition-all
                duration-500
                group-hover:w-full
              "
            />
          </div>
        ))}
      </div>

      {/* =================================================
          CTA
      ================================================= */}

      <div
        className="
          mt-8
          flex
          flex-col
          gap-5
          sm:mt-10
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div className="flex items-center gap-3">
          <ShieldCheck
            size={18}
            strokeWidth={1.7}
            className="text-[#6D900B] dark:text-[#ADD132]"
          />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#68736B]
              dark:text-white/40
            "
          >
            Responsible digital protection
          </span>
        </div>

        <Link
          to="/about"
          className="
            group
            inline-flex
            items-center
            gap-4
            border-b-2
            border-[#152019]
            pb-3
            text-[#152019]
            transition-all
            duration-300
            hover:border-[#ADD132]
            dark:border-white
            dark:text-white
            dark:hover:border-[#ADD132]
          "
        >
          <span
            className="
              text-[10px]
              font-black
              uppercase
              tracking-[0.18em]
            "
          >
            Learn More
          </span>

          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-current
              transition-all
              duration-300
              group-hover:border-[#ADD132]
              group-hover:bg-[#ADD132]
              group-hover:text-[#152019]
            "
          >
            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </span>
        </Link>
      </div>
    </div>
  </div>
</div>
        {/* =====================================================
            ANIMATIONS
        ===================================================== */}

      </div>

      <style>{`
        @keyframes trackLine {
          0%,
          100% {
            transform: scaleX(0.25);
            opacity: 0.35;
          }

          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes trackScan {
          0% {
            transform: translateY(-30px);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          80% {
            opacity: 0.8;
          }

          100% {
            transform: translateY(520px);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

export default HomeAbout;