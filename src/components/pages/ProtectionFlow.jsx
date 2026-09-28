import React from "react";
import {
  ShieldCheck,
  Globe2,
  Radar,
  Search,
  ArrowUpRight,
  Activity,
  Eye,
} from "lucide-react";

const intelligencePoints = [
  {
    number: "01",
    title: "Digital Visibility",
    text: "Understand where your content, brand, and intellectual property appear across the digital ecosystem.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Threat Discovery",
    text: "Identify suspicious activity and potential risks before they become difficult to manage.",
    icon: Search,
  },
  {
    number: "03",
    title: "Continuous Intelligence",
    text: "Maintain an evolving view of digital activity across multiple online surfaces.",
    icon: Activity,
  },
];

function ProtectionFlow() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F5F8F1]
        py-12
        text-[#101510]
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

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            right-[-20%]
            top-[5%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#ADD132]/10
            blur-[100px]
            dark:bg-[#ADD132]/5
            sm:right-[-12%]
            sm:h-[400px]
            sm:w-[400px]
            sm:blur-[130px]
            md:h-[500px]
            md:w-[500px]
            lg:right-[-10%]
            lg:h-[550px]
            lg:w-[550px]
            lg:blur-[170px]
          "
        />

        <div
          className="
            absolute
            bottom-[-12%]
            left-[-20%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#ADD132]/8
            blur-[100px]
            dark:bg-[#ADD132]/4
            sm:left-[-12%]
            sm:h-[400px]
            sm:w-[400px]
            sm:blur-[130px]
            md:h-[450px]
            md:w-[450px]
            lg:left-[-10%]
            lg:h-[500px]
            lg:w-[500px]
            lg:blur-[160px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            dark:opacity-[0.015]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(40,60,30,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(40,60,30,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          px-4
          sm:px-7
          md:px-10
          lg:px-12
          xl:px-16
        "
      >
        {/* ===================================================
            TOP HEADER
        =================================================== */}

        <div
          className="
            grid
            gap-6
            md:gap-8
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-end
            lg:gap-10
          "
        >
          <div>
            {/* Eyebrow */}

            <div
              className="
                mb-4
                flex
                items-center
                gap-2.5
                sm:mb-5
                sm:gap-3
              "
            >
              <span className="h-px w-7 bg-[#8BAA20] dark:bg-[#ADD132] sm:w-9 md:w-11" />

              <span
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-[#68755F]
                  dark:text-[#ADD132]
                  sm:text-[9px]
                  sm:tracking-[0.32em]
                  md:tracking-[0.4em]
                "
              >
                Digital Protection Intelligence
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-[900px]
                text-[38px]
                font-black
                leading-[0.92]
                tracking-[-0.06em]
                sm:text-[48px]
                md:text-[60px]
                lg:text-[76px]
                xl:text-[88px]
              "
            >
              Know what is
              <br />
              happening
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                around you.
              </span>
            </h2>
          </div>

          {/* Header Description */}

          <div
            className="
              max-w-[480px]
              lg:ml-auto
              lg:pb-2
            "
          >
            <p
              className="
                text-[11px]
                leading-5
                text-[#697369]
                dark:text-white/40
                sm:text-[12px]
                sm:leading-6
                md:text-[13px]
                md:leading-7
              "
            >
              Digital protection starts with awareness. TrackOwls helps
              organizations build a clearer picture of their digital
              environment, connect meaningful signals, and understand what
              deserves attention.
            </p>

            <div className="mt-4 flex items-center gap-2.5 sm:mt-5 sm:gap-3 md:mt-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7D9F00] dark:bg-[#ADD132]" />

              <span
                className="
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-[8px]
                  sm:tracking-[0.22em]
                "
              >
                Intelligence is visibility
              </span>
            </div>
          </div>
        </div>

        {/* ===================================================
            MAIN FEATURE
        =================================================== */}

        <div
          className="
            mt-12
            grid
            gap-5
            md:mt-14
            md:gap-6
            lg:mt-16
            lg:grid-cols-[1.25fr_0.75fr]
          "
        >
          {/* =================================================
              LARGE VISUAL
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-[#263226]/10
              bg-white/70
              shadow-[0_20px_70px_rgba(35,55,25,0.07)]
              backdrop-blur-xl
              dark:border-white/[0.08]
              dark:bg-[#091008]/80
              dark:shadow-[0_20px_70px_rgba(0,0,0,0.2)]
              sm:rounded-[28px]
              lg:rounded-[35px]
            "
          >
            {/* Visual Header */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-[#263226]/10
                px-4
                py-4
                dark:border-white/[0.07]
                sm:px-6
                sm:py-5
                md:px-7
              "
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#ADD132]/10
                    text-[#6F8D08]
                    dark:text-[#ADD132]
                    sm:h-8
                    sm:w-8
                    sm:rounded-xl
                  "
                >
                  <Radar size={14} strokeWidth={1.4} />
                </div>

                <div>
                  <p
                    className="
                      text-[7px]
                      font-black
                      uppercase
                      tracking-[0.18em]
                      text-[#364135]
                      dark:text-white/60
                      sm:text-[8px]
                      sm:tracking-[0.2em]
                    "
                  >
                    Digital Environment
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[5px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#899286]
                      dark:text-white/20
                      sm:text-[6px]
                    "
                  >
                    Intelligence Surface
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7D9F00] dark:bg-[#ADD132]" />

                <span
                  className="
                    text-[6px]
                    font-black
                    uppercase
                    tracking-[0.15em]
                    text-[#789900]
                    dark:text-[#ADD132]
                    sm:text-[7px]
                    sm:tracking-[0.18em]
                  "
                >
                  Active
                </span>
              </div>
            </div>

            {/* =================================================
                VISUAL AREA
            ================================================= */}

            <div
              className="
                relative
                h-[360px]
                sm:h-[430px]
                md:h-[470px]
                lg:h-[500px]
                xl:h-[480px]
              "
            >
              {/* Radar Rings */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[250px]
                  w-[250px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#789900]/10
                  dark:border-[#ADD132]/10
                  sm:h-[310px]
                  sm:w-[310px]
                  md:h-[340px]
                  md:w-[340px]
                  lg:h-[360px]
                  lg:w-[360px]
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[185px]
                  w-[185px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#789900]/10
                  dark:border-[#ADD132]/10
                  sm:h-[235px]
                  sm:w-[235px]
                  md:h-[255px]
                  md:w-[255px]
                  lg:h-[270px]
                  lg:w-[270px]
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[125px]
                  w-[125px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#789900]/15
                  dark:border-[#ADD132]/15
                  sm:h-[155px]
                  sm:w-[155px]
                  md:h-[170px]
                  md:w-[170px]
                  lg:h-[180px]
                  lg:w-[180px]
                "
              />

              {/* Cross */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[8%]
                  bottom-[8%]
                  w-px
                  -translate-x-1/2
                  bg-gradient-to-b
                  from-transparent
                  via-[#789900]/15
                  to-transparent
                  dark:via-[#ADD132]/10
                "
              />

              <div
                className="
                  absolute
                  left-[8%]
                  right-[8%]
                  top-1/2
                  h-px
                  -translate-y-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-[#789900]/15
                  to-transparent
                  dark:via-[#ADD132]/10
                "
              />

              {/* =================================================
                  CENTER
              ================================================= */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-[110px]
                  w-[110px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#789900]/25
                  bg-[#F5F8F1]/90
                  shadow-[0_0_50px_rgba(110,140,20,0.12)]
                  backdrop-blur-xl
                  dark:border-[#ADD132]/25
                  dark:bg-[#081008]/90
                  dark:shadow-[0_0_60px_rgba(173,209,50,0.12)]
                  sm:h-[135px]
                  sm:w-[135px]
                  md:h-[155px]
                  md:w-[155px]
                  lg:h-[145px]
                  lg:w-[145px]
                "
              >
                <div className="absolute inset-[10px] rounded-full border border-dashed border-[#789900]/15 dark:border-[#ADD132]/10] sm:inset-[12px] md:inset-[15px]" />

                <div className="text-center">
                  <div
                    className="
                      mx-auto
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#ADD132]/10
                      text-[#6F8D08]
                      dark:text-[#ADD132]
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <ShieldCheck
                      size={23}
                      strokeWidth={1.2}
                      className="sm:h-7 sm:w-7"
                    />
                  </div>

                  <p
                    className="
                      mt-2
                      text-[7px]
                      font-black
                      uppercase
                      tracking-[0.22em]
                      text-[#303A2F]
                      dark:text-white/70
                      sm:mt-3
                      sm:text-[8px]
                      sm:tracking-[0.28em]
                    "
                  >
                    TrackOwls
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[5px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#8A9387]
                      dark:text-white/25
                      sm:text-[6px]
                      sm:tracking-[0.2em]
                    "
                  >
                    Intelligence Core
                  </p>
                </div>
              </div>

              {/* =================================================
                  SIGNAL LABELS
              ================================================= */}

              <Signal
                className="left-[7%] top-[18%] sm:left-[10%]"
                label="Web"
                value="Detected"
              />

              <Signal
                className="right-[6%] top-[25%] sm:right-[9%]"
                label="Social"
                value="Monitoring"
              />

              <Signal
                className="left-[8%] bottom-[20%] sm:left-[12%] sm:bottom-[23%]"
                label="Media"
                value="Analyzing"
              />

              <Signal
                className="right-[7%] bottom-[15%] sm:right-[10%] sm:bottom-[18%]"
                label="Marketplace"
                value="Visible"
              />

              {/* =================================================
                  SIGNAL LINES
              ================================================= */}

              <div
                className="
                  absolute
                  left-[20%]
                  top-[30%]
                  h-px
                  w-[25%]
                  rotate-[25deg]
                  bg-[#789900]/15
                  dark:bg-[#ADD132]/15
                  sm:w-[30%]
                "
              />

              <div
                className="
                  absolute
                  right-[20%]
                  top-[34%]
                  h-px
                  w-[25%]
                  -rotate-[25deg]
                  bg-[#789900]/15
                  dark:bg-[#ADD132]/15
                  sm:w-[30%]
                "
              />

              <div
                className="
                  absolute
                  bottom-[30%]
                  left-[20%]
                  h-px
                  w-[25%]
                  -rotate-[20deg]
                  bg-[#789900]/15
                  dark:bg-[#ADD132]/15
                  sm:bottom-[32%]
                  sm:w-[30%]
                "
              />

              <div
                className="
                  absolute
                  bottom-[26%]
                  right-[20%]
                  h-px
                  w-[25%]
                  rotate-[20deg]
                  bg-[#789900]/15
                  dark:bg-[#ADD132]/15
                  sm:bottom-[28%]
                  sm:w-[30%]
                "
              />

              {/* Bottom Status */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  flex
                  items-center
                  justify-between
                  border-t
                  border-[#263226]/10
                  pt-3
                  dark:border-white/[0.07]
                  sm:bottom-5
                  sm:left-6
                  sm:right-6
                  sm:pt-4
                "
              >
                <span
                  className="
                    text-[5px]
                    font-black
                    uppercase
                    tracking-[0.15em]
                    text-[#8A9387]
                    dark:text-white/20
                    sm:text-[6px]
                    sm:tracking-[0.2em]
                  "
                >
                  Digital Visibility Layer
                </span>

                <span
                  className="
                    text-[5px]
                    font-black
                    uppercase
                    tracking-[0.15em]
                    text-[#789900]
                    dark:text-[#ADD132]
                    sm:text-[6px]
                    sm:tracking-[0.2em]
                  "
                >
                  Connected
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT EDITORIAL PANEL
          ================================================= */}

          <div
            className="
              flex
              flex-col
              justify-between
              rounded-[24px]
              border
              border-[#263226]/10
              bg-[#EAF1E0]/70
              p-5
              dark:border-white/[0.08]
              dark:bg-[#0A1109]/70
              sm:rounded-[28px]
              sm:p-7
              md:p-8
              lg:rounded-[35px]
              lg:p-9
            "
          >
            <div>
              <span
                className="
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.22em]
                  text-[#789900]
                  dark:text-[#ADD132]
                  sm:text-[8px]
                  sm:tracking-[0.28em]
                "
              >
                The Principle
              </span>

              <h3
                className="
                  mt-4
                  text-[30px]
                  font-black
                  leading-[0.96]
                  tracking-[-0.055em]
                  sm:mt-5
                  sm:text-[36px]
                  md:text-[40px]
                  lg:text-[42px]
                "
              >
                You cannot
                <br />
                protect what
                <br />
                you cannot
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  see.
                </span>
              </h3>

              <p
                className="
                  mt-5
                  text-[10px]
                  leading-5
                  text-[#707A70]
                  dark:text-white/35
                  sm:mt-6
                  sm:text-[11px]
                  sm:leading-6
                  md:mt-7
                "
              >
                TrackOwls is built around a simple principle: meaningful
                protection begins with meaningful visibility.
              </p>
            </div>

            {/* Metrics */}

            <div className="mt-8 sm:mt-10 md:mt-12">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="h-px w-6 bg-[#789900] dark:bg-[#ADD132] sm:w-8" />

                <span
                  className="
                    text-[6px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-[#687267]
                    dark:text-white/30
                    sm:text-[7px]
                    sm:tracking-[0.22em]
                  "
                >
                  Intelligence First
                </span>
              </div>

              <div
                className="
                  mt-5
                  grid
                  grid-cols-2
                  gap-x-5
                  gap-y-6
                  sm:mt-6
                  sm:gap-x-6
                  sm:gap-y-7
                "
              >
                <MiniMetric value="360°" label="Visibility" />
                <MiniMetric value="24/7" label="Monitoring" />
                <MiniMetric value="6+" label="Surfaces" />
                <MiniMetric value="LIVE" label="Intelligence" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            INTELLIGENCE POINTS
        ===================================================== */}

        <div className="mt-14 sm:mt-18 md:mt-20 lg:mt-24">
          <div
            className="
              mb-7
              flex
              flex-col
              justify-between
              gap-3
              sm:mb-8
              sm:flex-row
              sm:items-end
              md:mb-10
            "
          >
            <div>
              <span
                className="
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.24em]
                  text-[#789900]
                  dark:text-[#ADD132]
                  sm:text-[8px]
                  sm:tracking-[0.3em]
                "
              >
                What This Means
              </span>

              <h3
                className="
                  mt-2
                  text-[26px]
                  font-black
                  tracking-[-0.045em]
                  sm:mt-3
                  sm:text-[32px]
                  md:text-[36px]
                  lg:text-[38px]
                "
              >
                Intelligence with context.
              </h3>
            </div>

            <p
              className="
                max-w-[350px]
                text-[8px]
                leading-5
                text-[#7B857B]
                dark:text-white/25
                sm:text-[9px]
              "
            >
              Connecting signals creates a clearer understanding of the
              environment surrounding your digital presence.
            </p>
          </div>

          <div
            className="
              divide-y
              divide-[#263226]/10
              border-y
              border-[#263226]/10
              dark:divide-white/[0.07]
              dark:border-white/[0.08]
            "
          >
            {intelligencePoints.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.number}
                  className="
                    group
                    grid
                    gap-4
                    py-6
                    sm:gap-5
                    sm:py-7
                    md:py-8
                    lg:grid-cols-[70px_0.9fr_1.3fr_50px]
                    lg:items-center
                  "
                >
                  {/* Number */}

                  <span
                    className="
                      text-[8px]
                      font-black
                      tracking-[0.18em]
                      text-[#789900]
                      dark:text-[#ADD132]
                      sm:text-[9px]
                      sm:tracking-[0.2em]
                    "
                  >
                    {point.number}
                  </span>

                  {/* Title */}

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[#789900]/15
                        bg-[#ADD132]/10
                        text-[#6F8D08]
                        dark:border-[#ADD132]/15
                        dark:text-[#ADD132]
                        sm:h-10
                        sm:w-10
                        sm:rounded-xl
                      "
                    >
                      <Icon size={15} strokeWidth={1.4} />
                    </div>

                    <h4
                      className="
                        text-[13px]
                        font-black
                        tracking-[-0.015em]
                        text-[#1C241B]
                        dark:text-white
                        sm:text-[14px]
                      "
                    >
                      {point.title}
                    </h4>
                  </div>

                  {/* Description */}

                  <p
                    className="
                      max-w-[600px]
                      text-[9px]
                      leading-5
                      text-[#737D72]
                      dark:text-white/30
                      sm:text-[10px]
                      sm:leading-6
                    "
                  >
                    {point.text}
                  </p>

                  <ArrowUpRight
                    size={15}
                    className="
                      hidden
                      text-[#789900]
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      dark:text-[#ADD132]
                      lg:block
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            FINAL STATEMENT
        ===================================================== */}

        <div
          className="
            mt-16
            border-t
            border-[#263226]/10
            pt-10
            text-center
            dark:border-white/[0.08]
            sm:mt-20
            sm:pt-12
            md:mt-24
            md:pt-14
            lg:mt-24
            lg:pt-16
          "
        >
          <div
            className="
              mx-auto
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#789900]/20
              bg-[#ADD132]/10
              text-[#6F8D08]
              dark:border-[#ADD132]/20
              dark:text-[#ADD132]
              sm:h-12
              sm:w-12
            "
          >
            <Globe2 size={17} strokeWidth={1.3} />
          </div>

          <h3
            className="
              mx-auto
              mt-5
              max-w-[800px]
              text-[28px]
              font-black
              leading-[0.97]
              tracking-[-0.05em]
              sm:mt-6
              sm:text-[38px]
              md:text-[44px]
              lg:text-[48px]
            "
          >
            A clearer view of your
            <span className="text-[#789900] dark:text-[#ADD132]">
              {" "}
              digital world.
            </span>
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-[530px]
              text-[9px]
              leading-5
              text-[#7A8378]
              dark:text-white/30
              sm:mt-5
              sm:text-[10px]
            "
          >
            TrackOwls brings digital signals together so organizations can
            understand their environment and make more informed protection
            decisions.
          </p>

          <button
            type="button"
            className="
              group
              mt-6
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#ADD132]
              px-5
              py-3
              text-[7px]
              font-black
              uppercase
              tracking-[0.16em]
              text-[#101800]
              shadow-[0_15px_40px_rgba(110,140,20,0.16)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_20px_50px_rgba(110,140,20,0.25)]
              sm:mt-7
              sm:px-6
              sm:py-3.5
              sm:text-[8px]
              sm:tracking-[0.18em]
            "
          >
            Explore TrackOwls

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#091007]
                text-[#ADD132]
                transition-transform
                duration-300
                group-hover:rotate-45
                sm:h-7
                sm:w-7
              "
            >
              <ArrowUpRight size={11} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SIGNAL
========================================================= */

function Signal({ className = "", label, value }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span
          className="
            relative
            flex
            h-2.5
            w-2.5
            items-center
            justify-center
            rounded-full
            border
            border-[#789900]/30
            dark:border-[#ADD132]/30
            sm:h-3
            sm:w-3
          "
        >
          <span className="h-1 w-1 rounded-full bg-[#7D9F00] dark:bg-[#ADD132] sm:h-1.5 sm:w-1.5" />
        </span>

        <div>
          <p
            className="
              text-[5px]
              font-black
              uppercase
              tracking-[0.15em]
              text-[#687267]
              dark:text-white/30
              sm:text-[6px]
              sm:tracking-[0.2em]
            "
          >
            {label}
          </p>

          <p
            className="
              mt-0.5
              text-[5px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#789900]
              dark:text-[#ADD132]
              sm:text-[6px]
              sm:tracking-[0.15em]
            "
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MINI METRIC
========================================================= */

function MiniMetric({ value, label }) {
  return (
    <div>
      <div
        className="
          text-[21px]
          font-black
          leading-none
          tracking-[-0.05em]
          text-[#172017]
          dark:text-white
          sm:text-[23px]
          md:text-[24px]
        "
      >
        {value}
      </div>

      <div
        className="
          mt-1.5
          text-[5px]
          font-black
          uppercase
          tracking-[0.16em]
          text-[#7B857B]
          dark:text-white/25
          sm:mt-2
          sm:text-[6px]
          sm:tracking-[0.2em]
        "
      >
        {label}
      </div>
    </div>
  );
}

export default ProtectionFlow;