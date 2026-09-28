import React from "react";
import { ArrowUpRight, Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Arun Kumar",
    role: "Media & Entertainment",
    company: "Digital Content Platform",
    initials: "AK",
    review:
      "TrackOwls gave us a much clearer view of where our content was appearing online. The intelligence and monitoring approach helped our team respond faster to potential piracy.",
  },
  {
    name: "Priya Sharma",
    role: "Brand Protection",
    company: "E-Commerce Brand",
    initials: "PS",
    review:
      "The visibility across different digital platforms is impressive. TrackOwls makes it easier to identify suspicious activity and understand potential risks to our brand.",
  },
  {
    name: "Rahul Menon",
    role: "Digital Operations",
    company: "Technology Company",
    initials: "RM",
    review:
      "We were looking for a more structured way to monitor our digital presence. TrackOwls provides a clean intelligence layer that helps our team discover and investigate threats.",
  },
];

function ClientReviews() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F4F7F0]
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
            left-[-10%]
            top-[10%]
            h-[220px]
            w-[220px]
            rounded-full
            bg-[#ADD132]/8
            blur-[90px]
            dark:bg-[#ADD132]/4
            sm:left-[5%]
            sm:h-[280px]
            sm:w-[280px]
            sm:blur-[110px]
            md:h-[350px]
            md:w-[350px]
            lg:left-[10%]
            lg:top-[15%]
            lg:h-[300px]
            lg:w-[300px]
            lg:blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-5%]
            right-[-10%]
            h-[240px]
            w-[240px]
            rounded-full
            bg-[#ADD132]/8
            blur-[100px]
            dark:bg-[#ADD132]/4
            sm:right-[2%]
            sm:h-[300px]
            sm:w-[300px]
            sm:blur-[120px]
            md:h-[350px]
            md:w-[350px]
            lg:bottom-[5%]
            lg:right-[8%]
            lg:blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-0
            top-0
            h-full
            w-full
            opacity-[0.07]
            dark:opacity-[0.05]
            sm:w-[60%]
            md:w-[50%]
            lg:w-[45%]
          "
          style={{
            backgroundImage:
              "radial-gradient(rgba(90,120,45,0.45) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 70%)",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1450px]
          px-4
          sm:px-7
          md:px-10
          lg:px-12
          xl:px-16
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-2
              sm:mb-5
              sm:gap-3
              md:mb-6
            "
          >
            <span className="h-px w-6 bg-[#8BAA20] dark:bg-[#ADD132] sm:w-8 md:w-10" />

            <span
              className="
                text-[7px]
                font-black
                uppercase
                tracking-[0.25em]
                text-[#68755F]
                dark:text-[#ADD132]
                sm:text-[8px]
                sm:tracking-[0.32em]
                md:text-[9px]
                md:tracking-[0.38em]
              "
            >
              Client Reviews
            </span>

            <span className="h-px w-6 bg-[#8BAA20] dark:bg-[#ADD132] sm:w-8 md:w-10" />
          </div>

          <h2
            className="
              text-[32px]
              font-black
              leading-[0.96]
              tracking-[-0.055em]
              sm:text-[42px]
              md:text-[52px]
              lg:text-[64px]
            "
          >
            Trusted by teams
            <br />
            <span className="text-[#789900] dark:text-[#ADD132]">
              protecting what matters.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[600px]
              text-[10px]
              leading-5
              text-[#6D766C]
              dark:text-white/40
              sm:mt-5
              sm:text-[11px]
              sm:leading-6
              md:mt-6
              md:text-[12px]
              lg:text-[13px]
            "
          >
            Real-world digital protection starts with visibility, intelligence,
            and the confidence to act.
          </p>
        </div>

        {/* ===================================================
            REVIEW CARDS
        =================================================== */}

        <div
          className="
            mt-10
            grid
            gap-4
            sm:mt-12
            sm:gap-5
            lg:mt-14
            lg:grid-cols-3
          "
        >
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className="
                group
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-[#273326]/10
                bg-white/80
                p-5
                shadow-[0_15px_45px_rgba(30,50,20,0.05)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#ADD132]/40
                hover:shadow-[0_20px_55px_rgba(80,110,20,0.10)]
                dark:border-white/[0.08]
                dark:bg-[#0A1009]/80
                dark:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                dark:hover:border-[#ADD132]/30
                sm:rounded-[23px]
                sm:p-6
                md:p-7
              "
            >
              {/* Top accent */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-0
                  bg-[#ADD132]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

              {/* Quote + Rating */}

              <div className="flex items-start justify-between gap-4">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#7D9F00]/15
                    bg-[#ADD132]/10
                    text-[#6F8D08]
                    dark:border-[#ADD132]/15
                    dark:text-[#ADD132]
                    sm:h-10
                    sm:w-10
                    sm:rounded-[14px]
                    md:h-11
                    md:w-11
                    md:rounded-2xl
                  "
                >
                  <Quote
                    size={15}
                    className="sm:h-4 sm:w-4 md:h-[18px] md:w-[18px]"
                  />
                </div>

                <div className="flex gap-0.5 sm:gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={9}
                      fill="currentColor"
                      className="text-[#91AD28] dark:text-[#ADD132] sm:h-[10px] sm:w-[10px] md:h-[11px] md:w-[11px]"
                    />
                  ))}
                </div>
              </div>

              {/* Review */}

              <p
                className="
                  mt-5
                  min-h-0
                  text-[11px]
                  leading-5
                  text-[#515C50]
                  dark:text-white/55
                  sm:mt-6
                  sm:min-h-[130px]
                  sm:text-[12px]
                  sm:leading-6
                  md:mt-7
                  md:min-h-[150px]
                  md:text-[13px]
                  md:leading-7
                "
              >
                “{review.review}”
              </p>

              {/* Divider */}

              <div className="my-5 h-px bg-[#172117]/8 dark:bg-white/[0.08] sm:my-6" />

              {/* Client */}

              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#152014]
                      text-[8px]
                      font-black
                      text-[#ADD132]
                      dark:bg-[#ADD132]
                      dark:text-[#101800]
                      sm:h-10
                      sm:w-10
                      sm:text-[9px]
                      md:h-11
                      md:w-11
                      md:text-[10px]
                    "
                  >
                    {review.initials}
                  </div>

                  <div className="min-w-0">
                    <h3
                      className="
                        truncate
                        text-[9px]
                        font-black
                        text-[#172017]
                        dark:text-white
                        sm:text-[10px]
                        md:text-[11px]
                      "
                    >
                      {review.name}
                    </h3>

                    <p
                      className="
                        mt-0.5
                        truncate
                        text-[6px]
                        font-bold
                        uppercase
                        tracking-[0.09em]
                        text-[#7D8779]
                        dark:text-white/30
                        sm:mt-1
                        sm:text-[7px]
                        sm:tracking-[0.11em]
                        md:text-[8px]
                        md:tracking-[0.12em]
                      "
                    >
                      {review.role}
                    </p>
                  </div>
                </div>

                <div className="hidden max-w-[130px] text-right sm:block">
                  <p
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.1em]
                      text-[#7D8779]
                      dark:text-white/25
                      md:text-[8px]
                      md:tracking-[0.12em]
                    "
                  >
                    {review.company}
                  </p>
                </div>
              </div>

              {/* Number */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-4
                  right-5
                  text-[32px]
                  font-black
                  leading-none
                  tracking-[-0.08em]
                  text-[#152014]/[0.035]
                  dark:text-white/[0.025]
                  sm:bottom-5
                  sm:right-6
                  sm:text-[38px]
                  md:text-[42px]
                "
              >
                0{index + 1}
              </div>
            </article>
          ))}
        </div>

        {/* ===================================================
            BOTTOM TRUST STRIP
        =================================================== */}

        <div
          className="
            mt-5
            flex
            flex-col
            items-stretch
            justify-between
            gap-5
            rounded-[18px]
            border
            border-[#273326]/10
            bg-white/65
            px-4
            py-4
            backdrop-blur-xl
            dark:border-white/[0.08]
            dark:bg-white/[0.025]
            sm:mt-6
            sm:flex-row
            sm:items-center
            sm:rounded-[20px]
            sm:px-6
            sm:py-5
            md:px-8
            lg:mt-7
            lg:rounded-[22px]
          "
        >
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-[#ADD132]/10
                text-[#6F8D08]
                dark:text-[#ADD132]
                sm:h-9
                sm:w-9
                sm:rounded-xl
              "
            >
              <Star
                size={13}
                fill="currentColor"
                className="sm:h-[15px] sm:w-[15px]"
              />
            </div>

            <div className="min-w-0">
              <p
                className="
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.16em]
                  text-[#394337]
                  dark:text-white/70
                  sm:text-[8px]
                  sm:tracking-[0.2em]
                  md:text-[9px]
                "
              >
                Built around trust
              </p>

              <p
                className="
                  mt-0.5
                  truncate
                  text-[7px]
                  text-[#7B857B]
                  dark:text-white/30
                  sm:mt-1
                  sm:text-[8px]
                "
              >
                Intelligence that helps teams protect their digital presence.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="
              group
              inline-flex
              w-full
              items-center
              justify-center
              gap-2.5
              rounded-full
              border
              border-[#6F8D08]/20
              bg-[#ADD132]/10
              px-4
              py-2.5
              text-[7px]
              font-black
              uppercase
              tracking-[0.15em]
              text-[#5D7607]
              transition-all
              hover:border-[#ADD132]/50
              hover:bg-[#ADD132]/20
              dark:border-[#ADD132]/20
              dark:text-[#ADD132]
              sm:w-auto
              sm:gap-3
              sm:px-5
              sm:py-3
              sm:text-[8px]
              sm:tracking-[0.18em]
            "
          >
            Become a Client

            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-[#ADD132]
                text-[#101800]
                transition-transform
                group-hover:rotate-45
                sm:h-6
                sm:w-6
              "
            >
              <ArrowUpRight size={10} className="sm:h-3 sm:w-3" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ClientReviews;