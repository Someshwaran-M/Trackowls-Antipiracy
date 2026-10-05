import React from "react";
import {
  Building2,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

function Company() {
  return (
    <section
      id="company"
      className="
        relative
        flex
        h-screen
        min-h-screen
        w-screen
        min-w-[100vw]
        overflow-hidden
        bg-[#F7FAF4]
        text-[#152019]
        dark:bg-[#070A07]
        dark:text-white
      "
    >
      {/* =========================================================
          MAIN WRAPPER
      ========================================================= */}
      <div
        className="
          relative
          mx-auto
          flex
          h-full
          w-full
          max-w-[1800px]
          flex-col
          px-8
          py-7
          sm:px-10
          md:px-12
          lg:px-16
          xl:px-[68px]
        "
      >
        {/* =====================================================
            TOP RIGHT NUMBER
        ===================================================== */}
        <div
          className="
            absolute
            right-7
            top-7
            z-20
            flex
            items-center
            gap-4
            text-[#687368]
            dark:text-white/40
          "
        >
          <span
            className="
              text-[24px]
              font-black
              leading-none
              tracking-[-0.04em]
            "
          >
            01
          </span>

          <ArrowUpRight
            size={18}
            strokeWidth={1.5}
          />
        </div>

        {/* =====================================================
            MAIN HERO
        ===================================================== */}
        <div
          className="
            flex
            min-h-0
            flex-1
            flex-col
            justify-center
            lg:flex-row
            lg:items-center
            lg:gap-[7%]
          "
        >
          {/* ===================================================
              LEFT CONTENT
          =================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              justify-center
              lg:w-[52%]
              lg:max-w-[760px]
            "
          >
            {/* Label */}
            <div className="mb-7">
              <span
                className="
                  inline-flex
                  items-center
                  rounded-[5px]
                  bg-[#EEF5D8]
                  px-4
                  py-2
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.25em]
                  text-[#668000]
                  dark:bg-[#17220D]
                  dark:text-[#ADD132]
                "
              >
                The Company
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="
                max-w-[760px]
                text-[clamp(52px,5.2vw,88px)]
                font-black
                leading-[0.88]
                tracking-[-0.065em]
                text-[#101712]
                dark:text-white
              "
            >
              Building
              <br />

              <span className="text-[#6F9500] dark:text-[#ADD132]">
                technology
              </span>{" "}

              <span className="text-[#414943] dark:text-white/75">
                for
              </span>

              <br />

              digital protection.
            </h1>

            {/* Heading Accent */}
            <div className="mt-7 flex items-center gap-4">
              <span
                className="
                  h-[4px]
                  w-[88px]
                  bg-[#ADD132]
                  sm:w-[90px]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#687368]
                  dark:text-white/45
                "
              >
                Intelligence · Monitoring · Protection
              </span>
            </div>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-[720px]
                text-[16px]
                font-medium
                leading-[1.7]
                text-[#5E6962]
                sm:text-[17px]
                dark:text-white/55
              "
            >
              TrackOwls Anti-Piracy Private Limited is focused on helping
              organizations understand, monitor and protect their valuable
              digital content, intellectual property and online presence.
            </p>

            {/* Scroll */}
            <div
              className="
                mt-10
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.25em]
                  text-[#668000]
                  dark:text-[#ADD132]
                "
              >
                Scroll to explore
              </span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="text-[#668000] dark:text-[#ADD132]"
              />
            </div>
          </div>

          {/* ===================================================
              RIGHT CONTENT
          =================================================== */}
          <div
            className="
              relative
              mt-8
              flex
              w-full
              flex-col
              items-center
              justify-center
              lg:mt-0
              lg:w-[42%]
            "
          >
            {/* =================================================
                IMAGE
            ================================================= */}
            <div
              className="
                relative
                h-[300px]
                w-full
                max-w-[610px]
                overflow-hidden
                rounded-[14px]
                border
                border-[#D8E2C2]
                bg-[#EAF1DD]
                shadow-[0_20px_45px_rgba(45,70,35,0.10)]
                sm:h-[360px]
                md:h-[430px]
                lg:h-[55vh]
                lg:max-h-[610px]
                dark:border-[#2A381E]
                dark:bg-[#10170E]
                dark:shadow-[0_20px_45px_rgba(0,0,0,0.35)]
              "
            >
              <img
                src="/images/company-protection.jpg"
                alt="TrackOwls Digital Protection"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </div>

            {/* =================================================
                COMPANY CARD
            ================================================= */}
            <div
              className="
                relative
                mt-7
                flex
                h-[118px]
                w-full
                max-w-[400px]
                items-center
                overflow-hidden
                rounded-[12px]
                bg-[#182018]
                px-7
                shadow-[0_18px_40px_rgba(35,55,35,0.14)]
                dark:bg-[#101610]
                dark:shadow-[0_18px_40px_rgba(0,0,0,0.38)]
              "
            >
              {/* Number */}
              <div
                className="
                  flex
                  h-full
                  w-[70px]
                  shrink-0
                  items-center
                  border-r
                  border-white/15
                "
              >
                <span
                  className="
                    text-[38px]
                    font-black
                    leading-none
                    tracking-[-0.06em]
                    text-[#78876F]
                    dark:text-[#65745C]
                  "
                >
                  01
                </span>
              </div>

              {/* Company Details */}
              <div className="ml-7 min-w-0 flex-1">
                <h2
                  className="
                    max-w-[230px]
                    text-[17px]
                    font-extrabold
                    leading-[1.2]
                    tracking-[-0.02em]
                    text-white
                  "
                >
                  TrackOwls Anti-Piracy
                  <br />
                  Private Limited
                </h2>

                <div className="mt-4 flex items-center gap-4">
                  {/* Established */}
                  <div className="flex items-center gap-2">
                    <CalendarDays
                      size={16}
                      strokeWidth={1.8}
                      className="text-[#ADD132]"
                    />

                    <span
                      className="
                        text-[12px]
                        font-bold
                        text-[#ADD132]
                      "
                    >
                      2026
                    </span>
                  </div>

                  {/* Divider */}
                  <span className="h-5 w-px bg-white/15" />

                  {/* Headquarters */}
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={16}
                      strokeWidth={1.8}
                      className="text-[#ADD132]"
                    />

                    <span
                      className="
                        whitespace-nowrap
                        text-[11px]
                        font-semibold
                        text-white/80
                      "
                    >
                      Coimbatore, Tamil Nadu
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM DECORATIVE LINE
        ===================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-8
            right-8
            hidden
            items-center
            gap-0
            lg:flex
          "
        >
          <span
            className="
              h-px
              w-[150px]
              rotate-[-35deg]
              origin-right
              bg-[#B4D13A]
              dark:bg-[#718C1C]
            "
          />

          <span
            className="
              absolute
              right-[-5px]
              h-4
              w-4
              rounded-full
              bg-[#8EAD16]
              dark:bg-[#ADD132]
            "
          />
        </div>

        {/* =====================================================
            LARGE BACKGROUND 01
        ===================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-[-30px]
            left-[-5px]
            select-none
            text-[300px]
            font-black
            leading-none
            tracking-[-0.12em]
            text-[#D9E3C5]/55
            dark:text-[#ADD132]/[0.045]
          "
        >
          01
        </div>
      </div>
    </section>
  );
}

export default Company;