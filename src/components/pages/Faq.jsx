import React, { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  MessageCircleQuestion,
} from "lucide-react";

function Faq() {
  const faqs = [
    [
      "What is TrackOwls?",
      "TrackOwls is a digital intelligence and anti-piracy platform designed to help organizations discover, monitor, analyze, and respond to threats across the digital ecosystem.",
    ],
    [
      "What types of digital threats can TrackOwls monitor?",
      "TrackOwls can help monitor unauthorized content, suspicious websites, social platforms, streaming platforms, marketplaces, digital media, and other online surfaces where potential threats or misuse may appear.",
    ],
    [
      "How does TrackOwls help protect digital content?",
      "TrackOwls brings together digital signals from multiple sources, helping teams identify potentially unauthorized usage, investigate relevant activity, and take informed protection measures.",
    ],
    [
      "Can TrackOwls monitor multiple digital platforms?",
      "Yes. The platform is designed around visibility across multiple digital surfaces, including websites, social platforms, OTT and video environments, e-commerce, news and media, and other online channels.",
    ],
    [
      "How does the threat detection process work?",
      "TrackOwls follows an intelligence-driven workflow: discover relevant digital signals, detect potential threats, analyze the available information, and support the appropriate protection response.",
    ],
    [
      "Is TrackOwls suitable for brands and businesses?",
      "Yes. TrackOwls can support brands, media companies, content owners, digital platforms, publishers, gaming businesses, and organizations that need greater visibility into their digital presence.",
    ],
    [
      "Does TrackOwls provide continuous monitoring?",
      "TrackOwls is designed around continuous digital intelligence and monitoring so teams can maintain visibility over their digital ecosystem and identify relevant activity as it emerges.",
    ],
    [
      "How can I request a TrackOwls demo?",
      "You can use the Request Demo option on the website to share your requirements with the TrackOwls team. The team can then understand your protection needs and discuss the appropriate solution.",
    ],
  ];

  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq((current) => (current === index ? -1 : index));
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F8FAF6]
        font-['Roboto',sans-serif]
        text-[#152019]
        dark:bg-[#050805]
        dark:text-white
      "
    >
      {/* =====================================================
          AMBIENT LIGHT
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-40
            top-[-120px]
            h-[360px]
            w-[360px]
            animate-[faqGlow_9s_ease-in-out_infinite]
            rounded-full
            bg-[#ADD132]/8
            blur-[130px]
            dark:bg-[#ADD132]/[0.035]
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-[350px]
            w-[350px]
            animate-[faqGlowReverse_11s_ease-in-out_infinite]
            rounded-full
            bg-[#DDEBC4]/50
            blur-[130px]
            dark:bg-[#ADD132]/[0.025]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1480px]
          px-5
          py-16
          sm:px-7
          sm:py-20
          md:px-10
          md:py-24
          lg:px-14
          lg:py-28
          xl:px-16
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-8
            border-b
            border-black/[0.08]
            pb-10
            dark:border-white/[0.09]
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-16
            lg:pb-14
          "
        >
          <div className="max-w-[820px]">
            <div className="mb-5 flex items-center gap-3">
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  border
                  border-[#ADD132]/30
                  bg-[#ADD132]/5
                  text-[#789900]
                  dark:text-[#ADD132]
                "
              >
                <MessageCircleQuestion
                  size={15}
                  strokeWidth={1.5}
                />
              </span>

              <span
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.32em]
                  text-[#6F850E]
                  dark:text-[#ADD132]
                  sm:text-[9px]
                "
              >
                Knowledge Centre
              </span>
            </div>

            <h2
              className="
                text-[34px]
                font-black
                leading-[0.97]
                tracking-[-0.045em]
                text-[#152019]
                dark:text-white
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Questions before
              <span className="text-[#789900] dark:text-[#ADD132]">
                {" "}
                protection begins.
              </span>
            </h2>
          </div>

          <div className="max-w-[410px] lg:pb-1">
            <p
              className="
                text-[13px]
                leading-7
                text-[#69756D]
                dark:text-white/45
                sm:text-[14px]
              "
            >
              Explore the fundamentals of TrackOwls, its monitoring approach,
              supported digital surfaces and how organizations can begin using
              the platform.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ADD132]" />

              <span
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#789900]
                  dark:text-[#ADD132]
                "
              >
                08 questions
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            FAQ AREA
        ================================================= */}

        <div className="relative mt-12 lg:mt-16">
          {/* Vertical signal line */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[17px]
              top-0
              hidden
              w-px
              bg-black/[0.08]
              dark:bg-white/[0.09]
              sm:block
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-[17px]
              top-0
              hidden
              h-[130px]
              w-px
              animate-[faqSignal_4.5s_linear_infinite]
              bg-gradient-to-b
              from-transparent
              via-[#ADD132]
              to-transparent
              shadow-[0_0_14px_rgba(173,209,50,0.7)]
              sm:block
            "
          />

          <div className="space-y-0">
            {faqs.map(([question, answer], index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  key={question}
                  className="
                    relative
                    border-b
                    border-black/[0.08]
                    dark:border-white/[0.09]
                  "
                >
                  {/* =================================================
                      QUESTION ROW
                  ================================================= */}

                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="
                      group
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      gap-4
                      py-6
                      text-left
                      sm:gap-6
                      sm:py-7
                      md:py-8
                    "
                  >
                    {/* Number */}

                    <div
                      className="
                        relative
                        hidden
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        sm:flex
                      "
                    >
                      <span
                        className={`
                          absolute
                          inset-0
                          rounded-full
                          border
                          transition-all
                          duration-500
                          ${
                            isOpen
                              ? "scale-100 border-[#ADD132]/50 bg-[#ADD132]/10"
                              : "scale-75 border-black/10 dark:border-white/10"
                          }
                        `}
                      />

                      <span
                        className={`
                          relative
                          text-[8px]
                          font-black
                          tracking-[0.1em]
                          transition-colors
                          duration-300
                          ${
                            isOpen
                              ? "text-[#789900] dark:text-[#ADD132]"
                              : "text-[#89948B] dark:text-white/25"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Mobile number */}

                    <span
                      className={`
                        w-7
                        shrink-0
                        text-[8px]
                        font-black
                        tracking-[0.1em]
                        sm:hidden
                        ${
                          isOpen
                            ? "text-[#789900] dark:text-[#ADD132]"
                            : "text-[#89948B] dark:text-white/25"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}

                    <span
                      className={`
                        flex-1
                        text-[15px]
                        font-bold
                        leading-6
                        tracking-[-0.015em]
                        transition-all
                        duration-300
                        sm:text-[17px]
                        md:text-[18px]
                        ${
                          isOpen
                            ? "text-[#152019] dark:text-white"
                            : "text-[#566159] group-hover:text-[#152019] dark:text-white/55 dark:group-hover:text-white"
                        }
                      `}
                    >
                      {question}
                    </span>

                    {/* Right status */}

                    <span
                      className="
                        hidden
                        items-center
                        gap-3
                        sm:flex
                      "
                    >
                      <span
                        className={`
                          text-[7px]
                          font-black
                          uppercase
                          tracking-[0.18em]
                          transition-all
                          duration-300
                          ${
                            isOpen
                              ? "text-[#789900] opacity-100 dark:text-[#ADD132]"
                              : "text-[#8A948C] opacity-0 group-hover:opacity-100 dark:text-white/25"
                          }
                        `}
                      >
                        {isOpen ? "Open" : "View"}
                      </span>

                      <span
                        className={`
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          border
                          transition-all
                          duration-500
                          ${
                            isOpen
                              ? "rotate-180 border-[#ADD132]/40 bg-[#ADD132] text-[#152019]"
                              : "border-black/10 text-[#778178] group-hover:border-[#ADD132]/40 dark:border-white/10 dark:text-white/30"
                          }
                        `}
                      >
                        <ChevronDown size={14} strokeWidth={2} />
                      </span>
                    </span>

                    {/* Mobile icon */}

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
                        sm:hidden
                        ${
                          isOpen
                            ? "rotate-180 border-[#ADD132]/40 bg-[#ADD132] text-[#152019]"
                            : "border-black/10 text-[#778178] dark:border-white/10 dark:text-white/30"
                        }
                      `}
                    >
                      <ChevronDown size={14} strokeWidth={2} />
                    </span>
                  </button>

                  {/* =================================================
                      ANSWER
                  ================================================= */}

                  <div
                    className={`
                      grid
                      transition-[grid-template-rows,opacity]
                      duration-500
                      ease-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                          pb-7
                          pl-11
                          sm:pl-[66px]
                          md:pb-8
                        "
                      >
                        <div
                          className="
                            flex
                            max-w-[820px]
                            gap-4
                            border-l-2
                            border-[#ADD132]/40
                            pl-5
                            sm:pl-6
                          "
                        >
                          <p
                            className="
                              text-[12px]
                              leading-7
                              text-[#68736B]
                              dark:text-white/45
                              sm:text-[13px]
                              sm:leading-7
                              md:text-[14px]
                            "
                          >
                            {answer}
                          </p>
                        </div>

                        <div className="mt-5 flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-[#ADD132]" />

                          <span
                            className="
                              text-[7px]
                              font-black
                              uppercase
                              tracking-[0.18em]
                              text-[#89948B]
                              dark:text-white/25
                            "
                          >
                            TrackOwls intelligence
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================
            BOTTOM INFORMATION
        ================================================= */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-black/[0.08]
            pt-7
            dark:border-white/[0.09]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                border
                border-[#ADD132]/30
                bg-[#ADD132]/5
                text-[#789900]
                dark:text-[#ADD132]
              "
            >
              <MessageCircleQuestion
                size={14}
                strokeWidth={1.5}
              />
            </span>

            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  text-[#435047]
                  dark:text-white/60
                "
              >
                Still have a question?
              </p>

              <p
                className="
                  mt-0.5
                  text-[8px]
                  text-[#8A948C]
                  dark:text-white/25
                "
              >
                Our team can discuss your specific protection requirements.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="
              group
              inline-flex
              w-fit
              cursor-pointer
              items-center
              gap-3
              border
              border-[#172018]
              px-5
              py-3
              text-[8px]
              font-black
              uppercase
              tracking-[0.2em]
              text-[#172018]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#ADD132]
              hover:bg-[#ADD132]
              dark:border-white/15
              dark:text-white
              dark:hover:border-[#ADD132]
              dark:hover:text-[#101600]
            "
          >
            Contact TrackOwls

            <ArrowUpRight
              size={14}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800;900&display=swap');

        @keyframes faqGlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.45;
          }

          50% {
            transform: translate3d(-25px, 30px, 0) scale(1.12);
            opacity: 0.8;
          }
        }

        @keyframes faqGlowReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.35;
          }

          50% {
            transform: translate3d(30px, -25px, 0) scale(1.1);
            opacity: 0.7;
          }
        }

        @keyframes faqSignal {
          0% {
            transform: translateY(-150px);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateY(850px);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Faq;