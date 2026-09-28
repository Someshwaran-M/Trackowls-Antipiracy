import React, { useState } from "react";
import {
  ChevronDown,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const faqs = [
  {
    question: "What is TrackOwls?",
    answer:
      "TrackOwls is a digital intelligence and anti-piracy platform designed to help organizations discover, monitor, analyze, and respond to threats across the digital ecosystem.",
  },
  {
    question: "What types of digital threats can TrackOwls monitor?",
    answer:
      "TrackOwls can help monitor unauthorized content, suspicious websites, social platforms, streaming platforms, marketplaces, digital media, and other online surfaces where potential threats or misuse may appear.",
  },
  {
    question: "How does TrackOwls help protect digital content?",
    answer:
      "TrackOwls brings together digital signals from multiple sources, helping teams identify potentially unauthorized usage, investigate relevant activity, and take informed protection measures.",
  },
  {
    question: "Can TrackOwls monitor multiple digital platforms?",
    answer:
      "Yes. The platform is designed around visibility across multiple digital surfaces, including websites, social platforms, OTT and video environments, e-commerce, news and media, and other online channels.",
  },
  {
    question: "How does the threat detection process work?",
    answer:
      "TrackOwls follows an intelligence-driven workflow: discover relevant digital signals, detect potential threats, analyze the available information, and support the appropriate protection response.",
  },
  {
    question: "Is TrackOwls suitable for brands and businesses?",
    answer:
      "Yes. TrackOwls can support brands, media companies, content owners, digital platforms, publishers, gaming businesses, and organizations that need greater visibility into their digital presence.",
  },
  {
    question: "Does TrackOwls provide continuous monitoring?",
    answer:
      "TrackOwls is designed around continuous digital intelligence and monitoring so teams can maintain visibility over their digital ecosystem and identify relevant activity as it emerges.",
  },
  {
    question: "How can I request a TrackOwls demo?",
    answer:
      "You can use the Request Demo option on the website to share your requirements with the TrackOwls team. The team can then understand your protection needs and discuss the appropriate solution.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

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
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[-10%]
            top-[8%]
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
            md:h-[320px]
            md:w-[320px]
            lg:left-[8%]
            lg:top-[10%]
            lg:h-[300px]
            lg:w-[300px]
            lg:blur-[130px]
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
            lg:right-[5%]
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
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1250px]
          px-4
          sm:px-7
          md:px-10
          lg:px-12
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
              Frequently Asked Questions
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
            Questions about
            <br />
            <span className="text-[#789900] dark:text-[#ADD132]">
              digital protection?
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[580px]
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
            Find answers about TrackOwls, digital intelligence, anti-piracy
            monitoring, and protecting your online presence.
          </p>
        </div>

        {/* ===================================================
            FAQ LAYOUT
        =================================================== */}

        <div
          className="
            mt-10
            grid
            gap-6
            sm:mt-12
            sm:gap-8
            md:gap-10
            lg:grid-cols-[0.75fr_1.25fr]
            lg:items-start
            lg:gap-8
          "
        >
          {/* =================================================
              LEFT INFORMATION CARD
          ================================================= */}

          <div className="lg:sticky lg:top-28">
            <div
              className="
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-[#273326]/10
                bg-white/75
                p-5
                shadow-[0_15px_45px_rgba(30,50,20,0.05)]
                backdrop-blur-xl
                dark:border-white/[0.08]
                dark:bg-[#0A1009]/80
                dark:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                sm:rounded-[24px]
                sm:p-6
                md:rounded-[28px]
                md:p-7
                lg:p-8
              "
            >
              {/* Decorative circles */}

              <div
                className="
                  absolute
                  right-[-40px]
                  top-[-40px]
                  h-28
                  w-28
                  rounded-full
                  border
                  border-[#ADD132]/15
                  sm:right-[-45px]
                  sm:top-[-45px]
                  sm:h-32
                  sm:w-32
                "
              />

              <div
                className="
                  absolute
                  right-[-18px]
                  top-[-18px]
                  h-16
                  w-16
                  rounded-full
                  border
                  border-[#ADD132]/15
                  sm:right-[-20px]
                  sm:top-[-20px]
                  sm:h-20
                  sm:w-20
                "
              />

              {/* Icon */}

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#7D9F00]/15
                  bg-[#ADD132]/10
                  text-[#6F8D08]
                  dark:border-[#ADD132]/15
                  dark:text-[#ADD132]
                  sm:h-11
                  sm:w-11
                  sm:rounded-2xl
                  md:h-12
                  md:w-12
                "
              >
                <MessageCircle
                  size={17}
                  strokeWidth={1.5}
                  className="sm:h-[18px] sm:w-[18px] md:h-5 md:w-5"
                />
              </div>

              <p
                className="
                  mt-5
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#71805F]
                  dark:text-[#ADD132]
                  sm:mt-6
                  sm:text-[8px]
                  sm:tracking-[0.23em]
                  md:mt-7
                  md:text-[9px]
                  md:tracking-[0.25em]
                "
              >
                Need more information?
              </p>

              <h3
                className="
                  mt-2
                  text-[22px]
                  font-black
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-[#172017]
                  dark:text-white
                  sm:mt-3
                  sm:text-[24px]
                  md:text-[25px]
                "
              >
                Let's talk about
                <br />
                your digital ecosystem.
              </h3>

              <p
                className="
                  mt-3
                  text-[10px]
                  leading-5
                  text-[#707A70]
                  dark:text-white/35
                  sm:mt-4
                  sm:text-[11px]
                  sm:leading-6
                "
              >
                Have a specific requirement or want to understand how
                TrackOwls can support your organization?
              </p>

              <button
                type="button"
                className="
                  group
                  mt-5
                  inline-flex
                  w-full
                  items-center
                  justify-between
                  gap-3
                  rounded-full
                  bg-[#ADD132]
                  px-4
                  py-2.5
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.15em]
                  text-[#101800]
                  shadow-[0_10px_30px_rgba(110,140,20,0.14)]
                  transition-all
                  hover:-translate-y-0.5
                  hover:shadow-[0_15px_40px_rgba(110,140,20,0.24)]
                  sm:w-auto
                  sm:gap-4
                  sm:px-5
                  sm:py-3
                  sm:text-[8px]
                  sm:tracking-[0.18em]
                "
              >
                Contact TrackOwls

                <span
                  className="
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0A1008]
                    text-[#ADD132]
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

            {/* Trust Detail */}

            <div
              className="
                mt-3
                flex
                items-center
                justify-between
                rounded-[16px]
                border
                border-[#273326]/10
                bg-white/55
                px-4
                py-3
                backdrop-blur-xl
                dark:border-white/[0.07]
                dark:bg-white/[0.02]
                sm:mt-4
                sm:rounded-[18px]
                sm:px-5
                sm:py-4
              "
            >
              <span
                className="
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.15em]
                  text-[#687267]
                  dark:text-white/30
                  sm:text-[8px]
                  sm:tracking-[0.18em]
                "
              >
                Digital Intelligence
              </span>

              <span
                className="
                  flex
                  items-center
                  gap-1.5
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.12em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:gap-2
                  sm:text-[8px]
                  sm:tracking-[0.15em]
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#7D9F00] dark:bg-[#ADD132]" />
                Active
              </span>
            </div>
          </div>

          {/* =================================================
              QUESTIONS
          ================================================= */}

          <div className="space-y-2.5 sm:space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`
                    overflow-hidden
                    rounded-[16px]
                    border
                    transition-all
                    duration-300
                    sm:rounded-[18px]
                    md:rounded-[20px]
                    ${
                      isOpen
                        ? "border-[#ADD132]/35 bg-white shadow-[0_12px_35px_rgba(40,60,25,0.06)] dark:border-[#ADD132]/25 dark:bg-[#0B120A] dark:shadow-[0_15px_45px_rgba(0,0,0,0.16)]"
                        : "border-[#273326]/10 bg-white/60 hover:border-[#ADD132]/25 dark:border-white/[0.07] dark:bg-white/[0.025] dark:hover:border-[#ADD132]/20"
                    }
                  `}
                >
                  {/* Question Button */}

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-3
                      px-4
                      py-4
                      text-left
                      sm:gap-5
                      sm:px-5
                      sm:py-5
                      md:px-6
                    "
                    aria-expanded={isOpen}
                  >
                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                      <span
                        className={`
                          shrink-0
                          text-[7px]
                          font-black
                          tracking-[0.16em]
                          sm:text-[8px]
                          sm:tracking-[0.2em]
                          ${
                            isOpen
                              ? "text-[#789900] dark:text-[#ADD132]"
                              : "text-[#9AA397] dark:text-white/20"
                          }
                        `}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`
                          text-[10px]
                          font-black
                          leading-5
                          sm:text-[12px]
                          md:text-[13px]
                          ${
                            isOpen
                              ? "text-[#172017] dark:text-white"
                              : "text-[#374036] dark:text-white/65"
                          }
                        `}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300
                        sm:h-8
                        sm:w-8
                        ${
                          isOpen
                            ? "rotate-180 border-[#ADD132]/40 bg-[#ADD132] text-[#101800]"
                            : "border-[#273326]/10 bg-white text-[#6E786C] dark:border-white/10 dark:bg-white/[0.03] dark:text-white/40"
                        }
                      `}
                    >
                      <ChevronDown size={12} className="sm:h-[14px] sm:w-[14px]" />
                    </span>
                  </button>

                  {/* Answer */}

                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div
                        className="
                          border-t
                          border-[#273326]/8
                          px-4
                          pb-5
                          pt-4
                          dark:border-white/[0.07]
                          sm:px-5
                          sm:pb-6
                          sm:pt-5
                          md:px-6
                        "
                      >
                        <p
                          className="
                            pl-[25px]
                            text-[9px]
                            leading-5
                            text-[#697369]
                            dark:text-white/40
                            sm:pl-[32px]
                            sm:text-[11px]
                            sm:leading-6
                            md:text-[12px]
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            items-stretch
            justify-between
            gap-4
            rounded-[18px]
            border
            border-[#273326]/10
            bg-white/65
            px-4
            py-4
            backdrop-blur-xl
            dark:border-white/[0.08]
            dark:bg-white/[0.025]
            sm:mt-10
            sm:flex-row
            sm:items-center
            sm:gap-5
            sm:rounded-[20px]
            sm:px-6
            sm:py-5
            md:rounded-[22px]
            md:px-8
          "
        >
          <div className="min-w-0">
            <p
              className="
                text-[7px]
                font-black
                uppercase
                tracking-[0.18em]
                text-[#3E493C]
                dark:text-white/65
                sm:text-[8px]
                sm:tracking-[0.22em]
                md:text-[9px]
              "
            >
              Still have questions?
            </p>

            <p
              className="
                mt-0.5
                text-[7px]
                text-[#7B857B]
                dark:text-white/30
                sm:mt-1
                sm:text-[8px]
              "
            >
              Our team can help you understand the right protection approach.
            </p>
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
            Talk to Our Team

            <ArrowUpRight
              size={11}
              className="
                transition-transform
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
                sm:h-[13px]
                sm:w-[13px]
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;