import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

/* =========================================================
   PLAN DATA
========================================================= */

const plans = [
  {
    number: "01",
    name: "STARTER",
    label: "FOUNDATION",
    audience: "Creators & small brands",
    title: "Create a reliable protection baseline.",
    description:
      "A focused protection setup for creators and smaller brands that need dependable monitoring, evidence and takedown support.",
    features: [
      "Monthly scans",
      "Takedown management",
      "Monthly report",
    ],
    featured: false,
  },

  {
    number: "02",
    name: "PRO",
    label: "CONTINUOUS",
    audience: "Growing studios & brands",
    title: "Keep protection moving with your business.",
    description:
      "Expanded monitoring for growing catalogues, brands and digital businesses that need stronger visibility and response workflows.",
    features: [
      "Daily monitoring",
      "Search de-indexing",
      "Brand protection cases",
      "Case dashboard",
    ],
    featured: true,
  },

  {
    number: "03",
    name: "ENTERPRISE",
    label: "EXTENDED",
    audience: "Large catalogues & organisations",
    title: "Coordinate protection across a wider operation.",
    description:
      "A tailored protection model for larger organisations requiring broader coverage, escalation support and dedicated coordination.",
    features: [
      "Custom coverage",
      "Legal escalation",
      "Dedicated manager",
    ],
    featured: false,
  },
];


/* =========================================================
   ANIMATED FEATURE TEXT
========================================================= */

function AnimatedText({ text, active, animationKey }) {
  return (
    <span className="inline-block">

      {text.split("").map((letter, index) => (
        <span
          key={`${animationKey}-${index}`}
          className={active ? "plan-letter" : ""}
          style={
            active
              ? {
                  animationDelay: `${index * 0.018}s`,
                }
              : undefined
          }
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}

    </span>
  );
}


/* =========================================================
   PLAN CARD
========================================================= */

function PlanCard({
  plan,
  index,
  activeIndex,
  setActiveIndex,
  animationKey,
}) {
  const isActive = index === activeIndex;

  return (
    <article
      onMouseEnter={() => {
        setActiveIndex(index);
      }}
      className={`
        plan-card
        group
        relative
        flex
        min-h-[590px]
        w-full
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        bg-white
        transition-all
        duration-700

        dark:bg-[#090D0A]

        ${
          isActive
            ? `
              -translate-y-2
              border-[#ADD132]/70
              shadow-[0_24px_70px_rgba(173,209,50,0.13)]
              dark:shadow-[0_24px_70px_rgba(173,209,50,0.07)]
            `
            : `
              translate-y-0
              border-black/[0.08]
              shadow-[0_12px_35px_rgba(0,0,0,0.035)]
              dark:border-white/[0.08]
              dark:shadow-[0_12px_35px_rgba(0,0,0,0.15)]
            `
        }
      `}
      style={{
        animationDelay: `${index * 140}ms`,
      }}
    >

      {/* ===================================================
          TOP SCANNER
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          z-30
          h-[2px]
          overflow-hidden
        "
      >
        <span
          className={`
            absolute
            top-0
            h-full
            w-[45%]
            bg-gradient-to-r
            from-transparent
            via-[#ADD132]
            to-transparent

            ${
              isActive
                ? "animate-[planScanner_1.3s_ease-in-out_infinite]"
                : "opacity-0"
            }
          `}
        />
      </div>


      {/* ===================================================
          AMBIENT GLOW
      =================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-44
          w-44
          rounded-full
          bg-[#ADD132]/10
          blur-[65px]
          transition-opacity
          duration-700

          ${isActive ? "opacity-100" : "opacity-0"}
        `}
      />


      {/* ===================================================
          POPULAR BADGE
      =================================================== */}

      {plan.featured && (
        <div
          className="
            absolute
            right-4
            top-4
            z-40
            flex
            items-center
            gap-1.5
            rounded-full
            border
            border-[#ADD132]/30
            bg-[#ADD132]/10
            px-3
            py-1.5
            text-[7px]
            font-black
            uppercase
            tracking-[0.14em]
            text-[#678300]
            dark:text-[#ADD132]
          "
        >
          <Sparkles size={9} />
          Popular
        </div>
      )}


      {/* ===================================================
          HEADER
      =================================================== */}

      <header
        className="
          relative
          border-b
          border-black/[0.07]
          px-5
          pb-5
          pt-6
          dark:border-white/[0.07]
          sm:px-6
          sm:pt-7
        "
      >

        <div className="flex items-start gap-3">

          {/* Number */}

          <div
            className={`
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              text-[8px]
              font-black
              tracking-[0.12em]
              transition-all
              duration-500

              ${
                isActive
                  ? `
                    border-[#ADD132]
                    bg-[#ADD132]
                    text-[#101600]
                    shadow-[0_0_22px_rgba(173,209,50,0.24)]
                  `
                  : `
                    border-black/10
                    bg-black/[0.015]
                    text-black/35
                    dark:border-white/10
                    dark:bg-white/[0.02]
                    dark:text-white/30
                  `
              }
            `}
          >
            {plan.number}
          </div>


          {/* Name */}

          <div className="min-w-0">

            <p
              className="
                text-[7px]
                font-black
                uppercase
                tracking-[0.24em]
                text-[#789900]
                dark:text-[#ADD132]
              "
            >
              {plan.label}
            </p>

            <h3
              className="
                mt-1
                text-[17px]
                font-black
                tracking-[-0.025em]
                text-[#172018]
                dark:text-white
              "
            >
              {plan.name}
            </h3>

          </div>

        </div>


        {/* Audience */}

        <div className="mt-5 flex items-center gap-2">

          <span
            className={`
              h-1.5
              w-1.5
              rounded-full
              bg-[#ADD132]
              transition-all
              duration-500

              ${
                isActive
                  ? "shadow-[0_0_10px_rgba(173,209,50,0.9)]"
                  : ""
              }
            `}
          />

          <span
            className="
              text-[8px]
              font-medium
              text-black/40
              dark:text-white/30
            "
          >
            {plan.audience}
          </span>

        </div>

      </header>


      {/* ===================================================
          CONTENT
      =================================================== */}

      <div
        className="
          relative
          flex
          flex-1
          flex-col
          px-5
          py-5
          sm:px-6
          sm:py-6
        "
      >

        {/* Title */}

        <h4
          className="
            max-w-[390px]
            text-[21px]
            font-black
            leading-[1.08]
            tracking-[-0.035em]
            text-[#172018]
            dark:text-white
            sm:text-[23px]
          "
        >
          {plan.title}
        </h4>


        {/* Description */}

        <p
          className="
            mt-3
            min-h-[72px]
            max-w-[400px]
            text-[11px]
            leading-[1.75]
            text-[#69756D]
            dark:text-white/40
            sm:text-[12px]
          "
        >
          {plan.description}
        </p>


        {/* =================================================
            PROTECTION SCOPE
        ================================================= */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            border-b
            border-black/[0.07]
            pb-3
            dark:border-white/[0.07]
          "
        >

          <div className="flex items-center gap-2">

            <ShieldCheck
              size={13}
              strokeWidth={1.8}
              className="
                text-[#789900]
                dark:text-[#ADD132]
              "
            />

            <span
              className="
                text-[7px]
                font-black
                uppercase
                tracking-[0.2em]
                text-black/35
                dark:text-white/25
              "
            >
              Protection scope
            </span>

          </div>


          <span
            className="
              text-[7px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-black/25
              dark:text-white/20
            "
          >
            {plan.features.length} capabilities
          </span>

        </div>


        {/* =================================================
            FEATURES
        ================================================= */}

        <div>

          {plan.features.map((feature, featureIndex) => (

            <div
              key={`${plan.number}-${feature}-${animationKey}`}
              className="
                flex
                min-h-[56px]
                items-center
                gap-3
                border-b
                border-black/[0.06]
                py-3
                dark:border-white/[0.06]
              "
            >

              {/* Check */}

              <span
                className={`
                  flex
                  h-5
                  w-5
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ADD132]/35
                  bg-[#ADD132]/[0.06]
                  text-[#789900]
                  transition-all
                  duration-500
                  dark:text-[#ADD132]

                  ${
                    isActive
                      ? `
                        scale-110
                        border-[#ADD132]
                        bg-[#ADD132]
                        text-[#101600]
                      `
                      : ""
                  }
                `}
              >
                <Check size={10} strokeWidth={3} />
              </span>


              {/* Feature text */}

              <span
                className="
                  flex-1
                  text-[10px]
                  font-semibold
                  leading-5
                  text-[#435047]
                  dark:text-white/55
                  sm:text-[11px]
                "
              >
                <AnimatedText
                  text={feature}
                  active={isActive}
                  animationKey={`${animationKey}-${featureIndex}`}
                />
              </span>


              {/* Arrow */}

              <ArrowUpRight
                size={12}
                className={`
                  shrink-0
                  transition-all
                  duration-500

                  ${
                    isActive
                      ? `
                        -translate-y-0.5
                        translate-x-0.5
                        text-[#789900]
                        opacity-100
                        dark:text-[#ADD132]
                      `
                      : `
                        text-black/10
                        opacity-0
                        dark:text-white/10
                      `
                  }
                `}
              />

            </div>

          ))}

        </div>


        {/* =================================================
            GET QUOTE
        ================================================= */}

        <div className="mt-auto pt-6">

          <Link
            to={`/request-demo?plan=${plan.name.toLowerCase()}`}
            className={`
              group/quote
              relative
              z-20
              flex
              min-h-[62px]
              w-full
              items-center
              justify-between
              overflow-hidden
              rounded-xl
              px-5
              py-3.5
              transition-all
              duration-500

              ${
                isActive
                  ? `
                    bg-[#ADD132]
                    text-[#101600]
                    shadow-[0_12px_35px_rgba(173,209,50,0.22)]
                    hover:bg-[#BDE640]
                  `
                  : `
                    bg-[#172018]
                    text-white
                    hover:bg-[#ADD132]
                    hover:text-[#101600]
                    dark:bg-[#ADD132]
                    dark:text-[#101600]
                    dark:hover:bg-[#BDE640]
                  `
              }
            `}
          >

            {/* Moving shine */}

            <span
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-[-80%]
                z-0
                w-[40%]
                skew-x-[-20deg]
                bg-white/25
                transition-all
                duration-700
                group-hover/quote:left-[130%]
              "
            />


            {/* Text */}

            <span
              className={`
                relative
                z-10
                text-[9px]
                font-black
                uppercase
                tracking-[0.2em]

                ${
                  isActive
                    ? "text-[#101600]"
                    : "text-white"
                }

                dark:text-[#101600]
              `}
            >
              Get a quote
            </span>


            {/* Arrow */}

            <span
              className={`
                relative
                z-10
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-current/25
                transition-transform
                duration-300
                group-hover/quote:translate-x-1
              `}
            >
              <ArrowRight size={12} />
            </span>

          </Link>


          <p
            className="
              mt-2
              text-center
              text-[7px]
              text-black/30
              dark:text-white/20
            "
          >
            Discuss this protection model with TrackOwls
          </p>

        </div>

      </div>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer
        className="
          flex
          items-center
          justify-between
          border-t
          border-black/[0.06]
          bg-black/[0.012]
          px-5
          py-3
          dark:border-white/[0.06]
          dark:bg-white/[0.01]
          sm:px-6
        "
      >

        <span
          className="
            text-[7px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-black/25
            dark:text-white/20
          "
        >
          TrackOwls protection
        </span>

        <span
          className="
            text-[7px]
            font-black
            tracking-[0.15em]
            text-[#789900]
            dark:text-[#ADD132]
          "
        >
          {plan.number} / 03
        </span>

      </footer>

    </article>
  );
}


/* =========================================================
   PLAN PAGE
========================================================= */

function Plan() {

  const [activePlan, setActivePlan] = useState(0);

  const [animationKey, setAnimationKey] = useState(0);


  /* =======================================================
     AUTOMATIC CARD ROTATION
     
     Starter
        ↓ 4 sec
     Pro
        ↓ 4 sec
     Enterprise
        ↓ 4 sec
     Starter
        ↓
     repeat
  ======================================================= */

  useEffect(() => {

    const timer = setInterval(() => {

      setActivePlan((current) => {
        return (current + 1) % plans.length;
      });

      setAnimationKey((current) => current + 1);

    }, 4000);

    return () => {
      clearInterval(timer);
    };

  }, []);


  /* =======================================================
     MANUAL CARD SELECTION
  ======================================================= */

  const selectPlan = (index) => {

    setActivePlan(index);

    setAnimationKey((current) => current + 1);

  };


  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-[#F8FAF6]
        font-['Roboto',sans-serif]
        text-[#172018]
        dark:bg-[#050805]
        dark:text-white
      "
    >

      {/* ===================================================
          HERO
      =================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-black/[0.06]
          dark:border-white/[0.07]
        "
      >

        {/* Background glow */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#ADD132]/10
            blur-[130px]
            dark:bg-[#ADD132]/[0.04]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-[20%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#DCE9C5]/50
            blur-[130px]
            dark:bg-[#ADD132]/[0.035]
          "
        />


        <div
          className="
            relative
            mx-auto
            max-w-[1480px]
            px-5
            pb-12
            pt-12
            sm:px-7
            sm:pb-14
            sm:pt-14
            md:px-10
            md:pb-16
            md:pt-16
            lg:px-12
            xl:px-14
          "
        >

          {/* Eyebrow */}

          <div className="mb-4 flex items-center gap-3">

            <span className="h-px w-8 bg-[#ADD132]" />

            <span
              className="
                text-[8px]
                font-black
                uppercase
                tracking-[0.3em]
                text-[#6E870D]
                dark:text-[#ADD132]
              "
            >
              Protection journey
            </span>

          </div>


          {/* Main heading */}

          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            <h1
              className="
                max-w-[720px]
                text-[32px]
                font-black
                leading-[1]
                tracking-[-0.045em]
                text-[#172018]
                dark:text-white
                sm:text-[38px]
                md:text-[44px]
                lg:text-[48px]
              "
            >
              Protection should evolve{" "}
              <span className="text-[#789900] dark:text-[#ADD132]">
                with your exposure.
              </span>
            </h1>


            <p
              className="
                max-w-[400px]
                text-[11px]
                leading-6
                text-[#69756D]
                dark:text-white/40
                sm:text-[12px]
              "
            >
              Choose a protection model based on the scale of your content,
              brand and digital presence. Your coverage can evolve as your
              requirements change.
            </p>

          </div>


          

        </div>

      </section>


      {/* ===================================================
          PLAN CARDS
      =================================================== */}

      <section
        className="
          border-b
          border-black/[0.08]
          bg-[#EFF4EA]
          dark:border-white/[0.07]
          dark:bg-[#080D09]
        "
      >

        <div
          className="
            mx-auto
            max-w-[1380px]
            px-5
            py-10
            sm:px-7
            sm:py-12
            md:px-10
            md:py-14
            lg:px-12
            xl:px-14
          "
        >

          {/* Section heading */}

          <div
            className="
              mb-7
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >

            <div>

              <div className="mb-2 flex items-center gap-2.5">

                <span
                  className="
                    text-[8px]
                    font-black
                    tracking-[0.2em]
                    text-[#789900]
                    dark:text-[#ADD132]
                  "
                >
                  01
                </span>

                <span className="h-px w-6 bg-[#ADD132]/60" />

                <span
                  className="
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-black/35
                    dark:text-white/30
                  "
                >
                  Protection models
                </span>

              </div>


              <h2
                className="
                  text-[23px]
                  font-black
                  tracking-[-0.035em]
                  text-[#172018]
                  dark:text-white
                  sm:text-[27px]
                "
              >
                Choose your level of protection.
              </h2>

            </div>


            {/* Auto status */}

            <div className="flex items-center gap-2">

              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-[#ADD132]
                  shadow-[0_0_9px_rgba(173,209,50,0.7)]
                "
              />

              <span
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-black/30
                  dark:text-white/25
                "
              >
                Automatic selection
              </span>

            </div>

          </div>


          {/* =================================================
              CARDS
          ================================================= */}

          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-stretch
            "
          >

            {plans.map((plan, index) => (

              <div
                key={plan.number}
                className="
                  flex
                  w-full
                  lg:w-1/3
                "
              >

                <PlanCard
                  plan={plan}
                  index={index}
                  activeIndex={activePlan}
                  setActiveIndex={selectPlan}
                  animationKey={animationKey}
                />

              </div>

            ))}

          </div>


          {/* =================================================
              MOBILE / MANUAL INDICATORS
          ================================================= */}

          <div className="mt-6 flex justify-center gap-2">

            {plans.map((plan, index) => (

              <button
                key={plan.number}
                type="button"
                onClick={() => selectPlan(index)}
                aria-label={`Select ${plan.name}`}
                className={`
                  h-1.5
                  cursor-pointer
                  rounded-full
                  transition-all
                  duration-500

                  ${
                    activePlan === index
                      ? "w-9 bg-[#ADD132]"
                      : "w-2 bg-black/10 dark:bg-white/10"
                  }
                `}
              />

            ))}

          </div>

        </div>

      </section>






      {/* ===================================================
          ANIMATIONS
      =================================================== */}

      <style>{`

        /* ================================================
           CARD ENTRANCE
        ================================================= */

        .plan-card {
          opacity: 0;
          animation:
            planCardEntrance
            700ms
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        @keyframes planCardEntrance {

          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.97);
          }

          65% {
            opacity: 1;
            transform: translateY(-3px) scale(1.01);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }


        /* ================================================
           SCANNER
        ================================================= */

        @keyframes planScanner {

          0% {
            left: -50%;
          }

          100% {
            left: 120%;
          }

        }


        /* ================================================
           LETTER BY LETTER
        ================================================= */

        .plan-letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(7px);
          filter: blur(2px);

          animation:
            planLetterReveal
            420ms
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        @keyframes planLetterReveal {

          0% {
            opacity: 0;
            transform: translateY(7px);
            filter: blur(3px);
          }

          55% {
            opacity: 0.8;
            transform: translateY(-1px);
            filter: blur(0.5px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }

        }


        /* ================================================
           BUTTON SHINE
        ================================================= */

        .plan-card a:hover {
          box-shadow:
            0 10px 32px
            rgba(173, 209, 50, 0.18);
        }


        /* ================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {

          .plan-card {
            animation: none !important;
            opacity: 1 !important;
          }

          .plan-letter {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }

        }

      `}</style>

    </main>
  );
}

export default Plan;