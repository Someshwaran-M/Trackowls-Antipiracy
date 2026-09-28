import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Radar,
  ScanSearch,
  CheckCircle2,
  CalendarDays,
  MonitorPlay,
  Users,
  LockKeyhole,
  Globe,
} from "lucide-react";

function RequestDemo() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your Django/API integration.
    console.log("Demo request:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        website: "",
        interest: "",
        message: "",
      });
    }, 4000);
  };

  const demoBenefits = [
    {
      icon: MonitorPlay,
      title: "Product Walkthrough",
      text: "Explore the TrackOwls protection workflow and platform capabilities.",
    },
    {
      icon: Radar,
      title: "Digital Monitoring",
      text: "Understand how digital environments can be monitored for relevant signals.",
    },
    {
      icon: ScanSearch,
      title: "Threat Visibility",
      text: "See how digital intelligence can help identify potential protection concerns.",
    },
    {
      icon: Users,
      title: "Use-Case Discussion",
      text: "Discuss your organization's specific content, brand or IP protection requirements.",
    },
  ];

  const protectionAreas = [
    "Anti-Piracy",
    "IP Protection",
    "Brand Protection",
    "Online Monitoring",
    "Threat Detection",
    "Digital Investigation",
  ];

  const formInputClass = `
    w-full
    rounded-xl
    border
    border-[#253025]/10
    bg-[#F8FAF6]
    px-4
    py-3
    text-[12px]
    text-[#172017]
    outline-none
    transition
    placeholder:text-[#9AA39A]
    focus:border-[#ADD132]/60
    focus:ring-2
    focus:ring-[#ADD132]/10
    dark:border-white/[0.08]
    dark:bg-[#070A07]
    dark:text-white
    dark:placeholder:text-slate-700
  `;

  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#F7FAF4]
        text-[#152019]
        transition-colors
        duration-300
        dark:bg-[#070A07]
        dark:text-white
      "
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-[#253025]/10
          px-4
          pb-14
          pt-12
          dark:border-white/[0.06]
          sm:px-7
          sm:pb-20
          sm:pt-18
          md:px-10
          md:pb-24
          md:pt-22
          lg:px-12
          lg:pb-28
          lg:pt-24
        "
      >
        {/* Background Grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            dark:opacity-[0.06]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(173,209,50,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-70px]
            h-[280px]
            w-[320px]
            -translate-x-1/2
            rounded-full
            bg-[#ADD132]/7
            blur-[100px]
            dark:bg-[#ADD132]/10
            sm:h-[380px]
            sm:w-[520px]
            md:h-[450px]
            md:w-[650px]
            md:blur-[130px]
          "
        />

        <div className="relative mx-auto max-w-[1500px]">
          <div
            className="
              grid
              items-center
              gap-9
              lg:grid-cols-[1.05fr_0.95fr]
              lg:gap-12
              xl:gap-16
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div>
              {/* Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#6F8D08]/20
                  bg-[#ADD132]/10
                  px-3
                  py-1.5
                  dark:border-[#ADD132]/25
                  dark:bg-[#ADD132]/5
                  sm:gap-2.5
                  sm:px-4
                  sm:py-2
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#ADD132]
                    shadow-[0_0_12px_#ADD132]
                    sm:h-2
                    sm:w-2
                  "
                />

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#6F8D08]
                    dark:text-[#C7EB45]
                    sm:text-[10px]
                    md:text-xs
                  "
                >
                  Request a Demo
                </span>
              </div>

              {/* Heading */}

              <h1
                className="
                  mt-5
                  max-w-4xl
                  text-[42px]
                  font-black
                  leading-[0.97]
                  tracking-[-0.055em]
                  text-[#152019]
                  dark:text-white
                  sm:mt-7
                  sm:text-[54px]
                  md:text-[66px]
                  lg:text-[78px]
                  xl:text-[88px]
                "
              >
                See digital
                <span className="block text-[#789900] dark:text-[#ADD132]">
                  protection in action.
                </span>
              </h1>

              {/* Description */}

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-[12px]
                  leading-6
                  text-[#687368]
                  dark:text-slate-400
                  sm:mt-7
                  sm:text-[14px]
                  sm:leading-7
                  md:text-[15px]
                  md:leading-8
                "
              >
                Discover how TrackOwls approaches anti-piracy, IP protection,
                brand protection and digital intelligence through a
                personalized product demonstration.
              </p>

              {/* Buttons */}

              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-2.5
                  sm:mt-9
                  sm:flex-row
                  sm:flex-wrap
                  sm:gap-3
                "
              >
                <a
                  href="#demo-form"
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    rounded-full
                    bg-[#ADD132]
                    px-5
                    py-3
                    text-[10px]
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:bg-[#C7EB45]
                    hover:shadow-[0_0_35px_rgba(173,209,50,0.2)]
                    sm:w-auto
                    sm:px-6
                    sm:py-3.5
                    sm:text-xs
                  "
                >
                  Request Your Demo

                  <ArrowRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      sm:h-[18px]
                      sm:w-[18px]
                    "
                  />
                </a>

                <Link
                  to="/technology"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-[#263226]/15
                    bg-white/60
                    px-5
                    py-3
                    text-[10px]
                    font-medium
                    text-[#344034]
                    backdrop-blur-xl
                    transition
                    hover:border-[#ADD132]/40
                    hover:bg-white
                    hover:text-[#6F8D08]
                    dark:border-white/10
                    dark:bg-white/[0.02]
                    dark:text-white
                    dark:hover:bg-white/[0.04]
                    dark:hover:text-[#ADD132]
                    sm:w-auto
                    sm:px-6
                    sm:py-3.5
                    sm:text-xs
                  "
                >
                  Explore Technology

                  <ArrowUpRight
                    size={14}
                    className="sm:h-[17px] sm:w-[17px]"
                  />
                </Link>
              </div>

              {/* Trust Points */}

              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-2.5
                  sm:mt-9
                  sm:flex-row
                  sm:flex-wrap
                  sm:gap-x-7
                  sm:gap-y-3
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    text-[#7B857B]
                    dark:text-slate-500
                    sm:text-sm
                  "
                >
                  <CheckCircle2
                    size={15}
                    className="text-[#6F8D08] dark:text-[#ADD132]"
                  />

                  Personalized walkthrough
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    text-[#7B857B]
                    dark:text-slate-500
                    sm:text-sm
                  "
                >
                  <CheckCircle2
                    size={15}
                    className="text-[#6F8D08] dark:text-[#ADD132]"
                  />

                  Business-focused discussion
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT VISUAL
            ================================================= */}

            <div className="relative">
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[20px]
                  bg-[#ADD132]/7
                  blur-3xl
                  dark:bg-[#ADD132]/10
                  sm:rounded-[2rem]
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#263226]/10
                  bg-white/75
                  p-4
                  shadow-[0_20px_60px_rgba(30,50,20,0.05)]
                  backdrop-blur-xl
                  dark:border-white/10
                  dark:bg-[#0B100B]
                  dark:shadow-2xl
                  sm:rounded-[2rem]
                  sm:p-6
                  md:p-7
                "
              >
                {/* Header */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-b
                    border-[#263226]/10
                    pb-4
                    dark:border-white/[0.07]
                    sm:pb-6
                  "
                >
                  <div>
                    <p
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.18em]
                        text-[#7D877D]
                        dark:text-slate-500
                        sm:text-xs
                      "
                    >
                      Live Demonstration
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-black
                        text-[#172017]
                        dark:text-white
                        sm:mt-2
                        sm:text-lg
                      "
                    >
                      Protection Intelligence
                    </p>
                  </div>

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
                      border-[#6F8D08]/20
                      bg-[#ADD132]/10
                      dark:border-[#ADD132]/20
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <MonitorPlay
                      size={17}
                      className="text-[#6F8D08] dark:text-[#ADD132] sm:h-[23px] sm:w-[23px]"
                    />
                  </div>
                </div>

                {/* Main Visual */}

                <div
                  className="
                    relative
                    mt-5
                    h-[250px]
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#263226]/10
                    bg-[#F3F7EF]
                    dark:border-white/[0.06]
                    dark:bg-[#070A07]
                    sm:mt-7
                    sm:h-[300px]
                    sm:rounded-2xl
                    md:h-[330px]
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-30
                      dark:opacity-40
                    "
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(173,209,50,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.12) 1px, transparent 1px)",
                      backgroundSize: "38px 38px",
                    }}
                  />

                  {/* Radar */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-40
                      w-40
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      border
                      border-[#6F8D08]/15
                      dark:border-[#ADD132]/15
                      sm:h-52
                      sm:w-52
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-5
                        rounded-full
                        border
                        border-[#6F8D08]/15
                        dark:border-[#ADD132]/20
                        sm:inset-8
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-10
                        rounded-full
                        border
                        border-[#6F8D08]/20
                        dark:border-[#ADD132]/25
                        sm:inset-16
                      "
                    />

                    <div
                      className="
                        absolute
                        left-1/2
                        top-0
                        h-1/2
                        w-px
                        origin-bottom
                        bg-gradient-to-t
                        from-transparent
                        to-[#ADD132]
                      "
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-[#6F8D08]/25
                          bg-[#ADD132]/10
                          shadow-[0_0_35px_rgba(173,209,50,0.12)]
                          dark:border-[#ADD132]/30
                          sm:h-20
                          sm:w-20
                          sm:rounded-2xl
                        "
                      >
                        <Shield
                          size={27}
                          className="text-[#6F8D08] dark:text-[#ADD132] sm:h-[35px] sm:w-[35px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Signal Cards */}

                  <SignalCard
                    position="left-3 top-4 sm:left-5 sm:top-6"
                    title="Content Discovery"
                  />

                  <SignalCard
                    position="right-3 top-12 sm:right-5 sm:top-20"
                    title="Threat Detection"
                  />

                  <SignalCard
                    position="bottom-5 left-4 sm:bottom-8 sm:left-6"
                    title="IP Intelligence"
                  />

                  <SignalCard
                    position="bottom-5 right-4 sm:bottom-7 sm:right-6"
                    title="Protection"
                  />
                </div>

                {/* Status */}

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    justify-between
                    gap-3
                    sm:mt-6
                  "
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#ADD132]
                        shadow-[0_0_10px_#ADD132]
                        sm:h-2
                        sm:w-2
                      "
                    />

                    <span
                      className="
                        text-[8px]
                        text-[#7D877D]
                        dark:text-slate-500
                        sm:text-xs
                      "
                    >
                      Intelligent monitoring environment
                    </span>
                  </div>

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      text-[#6F8D08]
                      dark:text-[#ADD132]
                      sm:text-xs
                    "
                  >
                    TrackOwls
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT TO EXPECT
      ===================================================== */}

      <section
        className="
          border-y
          border-[#253025]/10
          bg-[#EEF3E9]
          px-4
          py-14
          dark:border-white/[0.06]
          dark:bg-[#080C08]
          sm:px-7
          sm:py-20
          md:px-10
          md:py-24
          lg:px-12
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#6F8D08]
                dark:text-[#ADD132]
                sm:text-sm
              "
            >
              What To Expect
            </p>

            <h2
              className="
                mt-3
                text-[30px]
                font-black
                leading-[1.04]
                tracking-[-0.045em]
                text-[#152019]
                dark:text-white
                sm:mt-4
                sm:text-4xl
                md:text-5xl
              "
            >
              More than a product tour.
            </h2>

            <p
              className="
                mt-4
                text-[11px]
                leading-6
                text-[#687368]
                dark:text-slate-400
                sm:mt-6
                sm:text-sm
                sm:leading-7
              "
            >
              The demonstration is designed to help you understand how
              TrackOwls can fit into your digital protection requirements.
            </p>
          </div>

          {/* Benefits */}

          <div
            className="
              mt-9
              grid
              gap-3
              sm:mt-12
              sm:grid-cols-2
              sm:gap-4
              lg:mt-16
              lg:grid-cols-4
              lg:gap-5
            "
          >
            {demoBenefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-[18px]
                    border
                    border-[#263226]/10
                    bg-white/70
                    p-4
                    shadow-[0_10px_30px_rgba(30,50,20,0.03)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#ADD132]/25
                    dark:border-white/[0.07]
                    dark:bg-[#0A0E0A]
                    dark:shadow-none
                    sm:rounded-3xl
                    sm:p-6
                    md:p-7
                  "
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#6F8D08]/20
                        bg-[#ADD132]/10
                        dark:border-[#ADD132]/20
                        sm:h-14
                        sm:w-14
                        sm:rounded-2xl
                      "
                    >
                      <Icon
                        size={20}
                        className="text-[#6F8D08] dark:text-[#ADD132] sm:h-[25px] sm:w-[25px]"
                      />
                    </div>

                    <span
                      className="
                        text-[8px]
                        font-semibold
                        tracking-[0.18em]
                        text-[#A1AAA1]
                        dark:text-slate-700
                        sm:text-xs
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-5
                      text-sm
                      font-bold
                      text-[#172017]
                      dark:text-white
                      sm:mt-7
                      sm:text-xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      leading-5
                      text-[#697369]
                      dark:text-slate-500
                      sm:mt-3
                      sm:text-sm
                      sm:leading-7
                    "
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          DEMO FORM
      ===================================================== */}

      <section
        id="demo-form"
        className="
          px-4
          py-14
          sm:px-7
          sm:py-20
          md:px-10
          md:py-24
          lg:px-12
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <div
            className="
              grid
              gap-9
              lg:grid-cols-[0.7fr_1.3fr]
              lg:gap-12
            "
          >
            {/* =================================================
                LEFT FORM INTRO
            ================================================= */}

            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-sm
                "
              >
                Book Your Demo
              </p>

              <h2
                className="
                  mt-3
                  text-[30px]
                  font-black
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#152019]
                  dark:text-white
                  sm:mt-4
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Let's understand your protection requirements.
              </h2>

              <p
                className="
                  mt-4
                  text-[11px]
                  leading-6
                  text-[#687368]
                  dark:text-slate-400
                  sm:mt-6
                  sm:text-sm
                  sm:leading-8
                "
              >
                Complete the form and share a little about your organization
                and what you would like to explore during the demonstration.
              </p>

              {/* Checklist */}

              <div className="mt-7 space-y-3 sm:mt-10 sm:space-y-4">
                {[
                  "Personalized product walkthrough",
                  "Discussion around your digital environment",
                  "Explore relevant TrackOwls capabilities",
                  "Understand possible protection workflows",
                  "Ask questions directly with the team",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 sm:gap-3"
                  >
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-[#6F8D08] dark:text-[#ADD132] sm:h-[18px] sm:w-[18px]"
                    />

                    <span
                      className="
                        text-[10px]
                        text-[#536053]
                        dark:text-slate-300
                        sm:text-sm
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Calendar Card */}

              <div
                className="
                  mt-7
                  rounded-2xl
                  border
                  border-[#ADD132]/20
                  bg-[#ADD132]/10
                  p-4
                  dark:border-[#ADD132]/15
                  dark:bg-[#ADD132]/5
                  sm:mt-10
                  sm:p-6
                "
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <CalendarDays
                    size={19}
                    className="
                      mt-0.5
                      shrink-0
                      text-[#6F8D08]
                      dark:text-[#ADD132]
                      sm:h-[22px]
                      sm:w-[22px]
                    "
                  />

                  <div>
                    <p
                      className="
                        text-sm
                        font-bold
                        text-[#172017]
                        dark:text-white
                        sm:text-base
                      "
                    >
                      Request a convenient demo
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-[10px]
                        leading-5
                        text-[#697369]
                        dark:text-slate-500
                        sm:mt-2
                        sm:text-sm
                        sm:leading-6
                      "
                    >
                      Tell us your requirements and preferred availability.
                      Our team can follow up with the next steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <div className="relative">
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[20px]
                  bg-[#ADD132]/5
                  blur-3xl
                  sm:rounded-[2rem]
                "
              />

              <form
                onSubmit={handleSubmit}
                className="
                  relative
                  rounded-[20px]
                  border
                  border-[#263226]/10
                  bg-white/75
                  p-4
                  shadow-[0_20px_60px_rgba(30,50,20,0.04)]
                  backdrop-blur-xl
                  dark:border-white/[0.08]
                  dark:bg-[#0A0E0A]
                  dark:shadow-none
                  sm:rounded-[2rem]
                  sm:p-7
                  md:p-9
                "
              >
                {/* Form Header */}

                <div
                  className="
                    mb-6
                    flex
                    items-center
                    justify-between
                    gap-4
                    sm:mb-8
                  "
                >
                  <div>
                    <p
                      className="
                        text-base
                        font-black
                        text-[#172017]
                        dark:text-white
                        sm:text-lg
                      "
                    >
                      Request a TrackOwls Demo
                    </p>

                    <p
                      className="
                        mt-1
                        text-[9px]
                        text-[#7D877D]
                        dark:text-slate-500
                        sm:text-sm
                      "
                    >
                      Tell us about your organization.
                    </p>
                  </div>

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
                      border-[#6F8D08]/20
                      bg-[#ADD132]/10
                      dark:border-[#ADD132]/20
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <CalendarDays
                      size={17}
                      className="text-[#6F8D08] dark:text-[#ADD132] sm:h-[19px] sm:w-[19px]"
                    />
                  </div>
                </div>

                {/* Success */}

                {submitted && (
                  <div
                    className="
                      mb-5
                      flex
                      items-start
                      gap-2.5
                      rounded-xl
                      border
                      border-[#ADD132]/20
                      bg-[#ADD132]/10
                      p-3
                      sm:mb-6
                      sm:gap-3
                      sm:p-4
                    "
                  >
                    <CheckCircle2
                      size={17}
                      className="
                        mt-0.5
                        shrink-0
                        text-[#6F8D08]
                        dark:text-[#ADD132]
                        sm:h-[19px]
                        sm:w-[19px]
                      "
                    />

                    <div>
                      <p
                        className="
                          text-xs
                          font-bold
                          text-[#6F8D08]
                          dark:text-[#C7EB45]
                          sm:text-sm
                        "
                      >
                        Demo request received
                      </p>

                      <p
                        className="
                          mt-1
                          text-[9px]
                          leading-5
                          text-[#697369]
                          dark:text-slate-400
                          sm:text-sm
                          sm:leading-6
                        "
                      >
                        Thank you. Your request has been submitted
                        successfully.
                      </p>
                    </div>
                  </div>
                )}

                {/* Fields */}

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                  {/* NAME */}

                  <div>
                    <label
                      htmlFor="name"
                      className="
                        mb-1.5
                        block
                        text-[10px]
                        font-medium
                        text-[#536053]
                        dark:text-slate-300
                        sm:mb-2
                        sm:text-sm
                      "
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={formInputClass}
                    />
                  </div>

                  {/* COMPANY */}

                  <div>
                    <label
                      htmlFor="company"
                      className="
                        mb-1.5
                        block
                        text-[10px]
                        font-medium
                        text-[#536053]
                        dark:text-slate-300
                        sm:mb-2
                        sm:text-sm
                      "
                    >
                      Company *
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className={formInputClass}
                    />
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label
                      htmlFor="email"
                      className="
                        mb-1.5
                        block
                        text-[10px]
                        font-medium
                        text-[#536053]
                        dark:text-slate-300
                        sm:mb-2
                        sm:text-sm
                      "
                    >
                      Work Email *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={formInputClass}
                    />
                  </div>

                  {/* PHONE */}

                  <div>
                    <label
                      htmlFor="phone"
                      className="
                        mb-1.5
                        block
                        text-[10px]
                        font-medium
                        text-[#536053]
                        dark:text-slate-300
                        sm:mb-2
                        sm:text-sm
                      "
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={formInputClass}
                    />
                  </div>

                  {/* WEBSITE */}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="website"
                      className="
                        mb-1.5
                        block
                        text-[10px]
                        font-medium
                        text-[#536053]
                        dark:text-slate-300
                        sm:mb-2
                        sm:text-sm
                      "
                    >
                      Company Website
                    </label>

                    <input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourcompany.com"
                      className={formInputClass}
                    />
                  </div>

                  {/* INTEREST */}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="interest"
                      className="
                        mb-1.5
                        block
                        text-[10px]
                        font-medium
                        text-[#536053]
                        dark:text-slate-300
                        sm:mb-2
                        sm:text-sm
                      "
                    >
                      What would you like to explore? *
                    </label>

                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className={`${formInputClass} appearance-none`}
                    >
                      <option value="" disabled>
                        Select a protection area
                      </option>

                      <option value="Anti-Piracy">Anti-Piracy</option>

                      <option value="IP Protection">IP Protection</option>

                      <option value="Brand Protection">
                        Brand Protection
                      </option>

                      <option value="Online Monitoring">
                        Online Monitoring
                      </option>

                      <option value="Threat Detection">
                        Threat Detection
                      </option>

                      <option value="Digital Investigation">
                        Digital Investigation
                      </option>

                      <option value="Multiple Areas">
                        Multiple Areas
                      </option>
                    </select>
                  </div>

                  {/* MESSAGE */}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="
                        mb-1.5
                        block
                        text-[10px]
                        font-medium
                        text-[#536053]
                        dark:text-slate-300
                        sm:mb-2
                        sm:text-sm
                      "
                    >
                      Tell us about your requirements *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What would you like to see during the demo?"
                      className={`${formInputClass} resize-none`}
                    />
                  </div>
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="
                    group
                    mt-5
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    rounded-xl
                    bg-[#ADD132]
                    px-6
                    py-3.5
                    text-xs
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:bg-[#C7EB45]
                    hover:shadow-[0_0_30px_rgba(173,209,50,0.18)]
                    sm:mt-7
                    sm:py-4
                    sm:text-sm
                  "
                >
                  Request Demo

                  <ArrowUpRight
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      sm:h-[19px]
                      sm:w-[19px]
                    "
                  />
                </button>

                <p
                  className="
                    mt-3
                    text-center
                    text-[8px]
                    leading-4
                    text-[#8A948A]
                    dark:text-slate-600
                    sm:mt-4
                    sm:text-xs
                    sm:leading-5
                  "
                >
                  By submitting this form, you agree to be contacted regarding
                  your demo request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROTECTION AREAS
      ===================================================== */}

      <section
        className="
          border-y
          border-[#253025]/10
          bg-[#EEF3E9]
          px-4
          py-14
          dark:border-white/[0.06]
          dark:bg-[#080C08]
          sm:px-7
          sm:py-20
          md:px-10
          md:py-24
          lg:px-12
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <div
            className="
              grid
              gap-9
              lg:grid-cols-[0.75fr_1.25fr]
              lg:gap-12
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-sm
                "
              >
                What We Can Explore
              </p>

              <h2
                className="
                  mt-3
                  text-[30px]
                  font-black
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#152019]
                  dark:text-white
                  sm:mt-4
                  sm:text-4xl
                  md:text-5xl
                "
              >
                One platform. Multiple protection needs.
              </h2>

              <p
                className="
                  mt-4
                  text-[11px]
                  leading-6
                  text-[#687368]
                  dark:text-slate-400
                  sm:mt-6
                  sm:text-sm
                  sm:leading-8
                "
              >
                Your demonstration can focus on the areas most relevant to
                your organization.
              </p>
            </div>

            {/* Areas */}

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {protectionAreas.map((area, index) => (
                <div
                  key={area}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[#263226]/10
                    bg-white/70
                    p-4
                    transition
                    hover:border-[#ADD132]/25
                    dark:border-white/[0.07]
                    dark:bg-[#0A0E0A]
                    sm:gap-4
                    sm:p-5
                  "
                >
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
                      border-[#6F8D08]/20
                      bg-[#ADD132]/10
                      text-[10px]
                      font-bold
                      text-[#6F8D08]
                      dark:border-[#ADD132]/20
                      dark:text-[#ADD132]
                      sm:h-10
                      sm:w-10
                      sm:text-sm
                    "
                  >
                    0{index + 1}
                  </div>

                  <span
                    className="
                      text-[10px]
                      font-medium
                      text-[#536053]
                      transition
                      group-hover:text-[#172017]
                      dark:text-slate-300
                      dark:group-hover:text-white
                      sm:text-sm
                    "
                  >
                    {area}
                  </span>

                  <ArrowRight
                    size={14}
                    className="
                      ml-auto
                      shrink-0
                      text-[#A1AAA1]
                      transition
                      group-hover:translate-x-1
                      group-hover:text-[#6F8D08]
                      dark:text-slate-700
                      dark:group-hover:text-[#ADD132]
                      sm:h-4
                      sm:w-4
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GLOBAL
      ===================================================== */}

      <section
        className="
          px-4
          py-14
          sm:px-7
          sm:py-20
          md:px-10
          md:py-24
          lg:px-12
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <div
            className="
              relative
              overflow-hidden
              rounded-[20px]
              border
              border-[#ADD132]/20
              bg-[#EEF3E9]
              p-5
              dark:bg-gradient-to-br
              dark:from-[#0D130D]
              dark:to-[#080B08]
              sm:rounded-[2rem]
              sm:p-8
              md:p-12
              lg:p-16
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-[#ADD132]/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                grid
                items-center
                gap-9
                lg:grid-cols-[1fr_0.7fr]
                lg:gap-12
              "
            >
              {/* Text */}

              <div>
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#6F8D08]/20
                    bg-[#ADD132]/10
                    sm:h-14
                    sm:w-14
                    sm:rounded-2xl
                  "
                >
                  <Globe
                    size={21}
                    className="text-[#6F8D08] dark:text-[#ADD132] sm:h-[27px] sm:w-[27px]"
                  />
                </div>

                <h2
                  className="
                    mt-6
                    max-w-2xl
                    text-[30px]
                    font-black
                    leading-[1.04]
                    tracking-[-0.045em]
                    text-[#152019]
                    dark:text-white
                    sm:mt-8
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  Built for a connected digital world.
                </h2>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-[11px]
                    leading-6
                    text-[#687368]
                    dark:text-slate-400
                    sm:mt-6
                    sm:text-sm
                    sm:leading-8
                  "
                >
                  Explore how TrackOwls can help your organization improve
                  visibility across the digital environments where content,
                  brands and intellectual property can appear.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                  {[
                    "Digital Content",
                    "Intellectual Property",
                    "Brand Protection",
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-[#263226]/10
                        bg-white/50
                        px-3
                        py-1.5
                        text-[8px]
                        text-[#697369]
                        backdrop-blur-xl
                        dark:border-white/[0.08]
                        dark:bg-white/[0.02]
                        dark:text-slate-400
                        sm:px-4
                        sm:py-2
                        sm:text-xs
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Globe Visual */}

              <div className="flex justify-center">
                <div
                  className="
                    relative
                    flex
                    h-48
                    w-48
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#6F8D08]/15
                    dark:border-[#ADD132]/15
                    sm:h-56
                    sm:w-56
                    md:h-64
                    md:w-64
                  "
                >
                  <div
                    className="
                      absolute
                      inset-6
                      rounded-full
                      border
                      border-[#6F8D08]/15
                      dark:border-[#ADD132]/15
                      sm:inset-8
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-12
                      rounded-full
                      border
                      border-[#6F8D08]/20
                      dark:border-[#ADD132]/20
                      sm:inset-16
                    "
                  />

                  <div
                    className="
                      absolute
                      h-px
                      w-full
                      bg-[#6F8D08]/10
                      dark:bg-[#ADD132]/15
                    "
                  />

                  <div
                    className="
                      absolute
                      h-full
                      w-px
                      bg-[#6F8D08]/10
                      dark:bg-[#ADD132]/15
                    "
                  />

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#6F8D08]/25
                      bg-[#ADD132]/10
                      dark:border-[#ADD132]/30
                      sm:h-20
                      sm:w-20
                      sm:rounded-2xl
                    "
                  >
                    <LockKeyhole
                      size={27}
                      className="text-[#6F8D08] dark:text-[#ADD132] sm:h-[33px] sm:w-[33px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          px-4
          pb-14
          sm:px-7
          sm:pb-20
          md:px-10
          md:pb-24
          lg:px-12
        "
      >
        <div
          className="
            relative
            mx-auto
            max-w-[1500px]
            overflow-hidden
            rounded-[20px]
            border
            border-[#ADD132]/20
            bg-[#ADD132]
            px-5
            py-9
            text-black
            sm:rounded-[2rem]
            sm:px-8
            sm:py-12
            md:px-12
            md:py-14
            lg:px-16
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-32
              h-64
              w-64
              rounded-full
              bg-white/20
              blur-3xl
              sm:h-80
              sm:w-80
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              justify-between
              gap-7
              lg:flex-row
              lg:items-center
              lg:gap-10
            "
          >
            <div className="max-w-3xl">
              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-black/60
                  sm:text-sm
                "
              >
                TrackOwls Demo
              </p>

              <h2
                className="
                  mt-3
                  text-[29px]
                  font-black
                  leading-[1.05]
                  tracking-[-0.04em]
                  sm:mt-4
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Ready to explore TrackOwls?
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-[11px]
                  leading-6
                  text-black/65
                  sm:mt-5
                  sm:text-sm
                  sm:leading-7
                  md:text-base
                "
              >
                Request a personalized demonstration and discover a structured
                approach to digital protection.
              </p>
            </div>

            <a
              href="#demo-form"
              className="
                group
                inline-flex
                w-full
                shrink-0
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-black
                px-6
                py-3.5
                text-[10px]
                font-bold
                text-white
                transition
                hover:bg-[#101410]
                sm:w-auto
                sm:px-7
                sm:py-4
                sm:text-sm
              "
            >
              Request Demo

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  sm:h-[19px]
                  sm:w-[19px]
                "
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   SIGNAL CARD
========================================================= */

function SignalCard({ position, title }) {
  return (
    <div
      className={`
        absolute
        ${position}
        rounded-lg
        border
        border-[#263226]/10
        bg-white/80
        px-2.5
        py-2
        shadow-lg
        backdrop-blur-xl
        dark:border-white/[0.08]
        dark:bg-[#0B100B]/90
        sm:rounded-xl
        sm:px-4
        sm:py-3
      `}
    >
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#ADD132]
            shadow-[0_0_10px_#ADD132]
            sm:h-2
            sm:w-2
          "
        />

        <span
          className="
            whitespace-nowrap
            text-[7px]
            text-[#536053]
            dark:text-slate-300
            sm:text-xs
          "
        >
          {title}
        </span>
      </div>
    </div>
  );
}

export default RequestDemo;