import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Shield,
  Clock3,
  Send,
  CheckCircle2,
  Globe,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
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

    // Replace this with your backend/API integration.
    console.log("Contact form:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@trackowls.com",
      description: "Send us your requirements",
      href: "mailto:contact@trackowls.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      description: "Talk to our team",
      href: "tel:+91XXXXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Coimbatore, Tamil Nadu",
      description: "201, First Floor, Paradise Garden",
      href: "#location",
    },
  ];

  const reasons = [
    "Discuss anti-piracy requirements",
    "Explore IP protection solutions",
    "Understand digital monitoring",
    "Discuss brand protection",
    "Request a product demonstration",
    "Explore technology partnerships",
  ];

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
          border-[#1C281C]/10
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
            dark:opacity-[0.07]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(173,209,50,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Main Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-80px]
            h-[280px]
            w-[280px]
            -translate-x-1/2
            rounded-full
            bg-[#ADD132]/8
            blur-[100px]
            dark:bg-[#ADD132]/10
            sm:h-[380px]
            sm:w-[450px]
            sm:blur-[120px]
            md:h-[450px]
            md:w-[600px]
            lg:h-[500px]
            lg:w-[650px]
            lg:blur-[140px]
          "
        />

        <div className="relative mx-auto max-w-[1500px]">
          <div
            className="
              grid
              items-center
              gap-10
              lg:grid-cols-[1.05fr_0.95fr]
              lg:gap-12
              xl:gap-16
            "
          >
            {/* =================================================
                HERO LEFT
            ================================================= */}

            <div>
              {/* Label */}

              <div
                className="
                  mb-5
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
                  sm:mb-7
                  sm:gap-3
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
                    sm:text-[9px]
                    md:text-[10px]
                  "
                >
                  Contact TrackOwls
                </span>
              </div>

              {/* Heading */}

              <h1
                className="
                  max-w-4xl
                  text-[42px]
                  font-black
                  leading-[0.97]
                  tracking-[-0.055em]
                  text-[#152019]
                  dark:text-white
                  sm:text-[54px]
                  md:text-[66px]
                  lg:text-[76px]
                  xl:text-[86px]
                "
              >
                Let's protect what
                <span className="block text-[#789900] dark:text-[#ADD132]">
                  matters digitally.
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
                Tell us about your content, intellectual property, brand or
                digital protection challenge. Our team can help you explore
                the right approach.
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
                  href="#contact-form"
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
                    text-[#101800]
                    transition-all
                    duration-300
                    hover:bg-[#C7EB45]
                    hover:shadow-[0_0_35px_rgba(173,209,50,0.20)]
                    sm:w-auto
                    sm:px-6
                    sm:py-3.5
                    sm:text-xs
                  "
                >
                  Start a Conversation

                  <ArrowRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      sm:h-[17px]
                      sm:w-[17px]
                    "
                  />
                </a>

                <Link
                  to="/solutions"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-[#253125]/15
                    bg-white/50
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
                  Explore Solutions
                  <ArrowUpRight
                    size={14}
                    className="sm:h-[17px] sm:w-[17px]"
                  />
                </Link>
              </div>
            </div>

            {/* =================================================
                HERO RIGHT VISUAL
            ================================================= */}

            <div className="relative">
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[22px]
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
                  shadow-[0_20px_60px_rgba(30,50,20,0.06)]
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

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.18em]
                        text-[#778177]
                        dark:text-slate-500
                        sm:text-[9px]
                        sm:tracking-[0.2em]
                      "
                    >
                      TrackOwls
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-black
                        text-[#172017]
                        dark:text-white
                        sm:mt-2
                        sm:text-base
                        md:text-lg
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
                      sm:h-10
                      sm:w-10
                      md:h-12
                      md:w-12
                    "
                  >
                    <Shield
                      size={18}
                      className="text-[#6F8D08] dark:text-[#ADD132] sm:h-5 sm:w-5 md:h-6 md:w-6"
                    />
                  </div>
                </div>

                {/* Intelligence Visual */}

                <div
                  className="
                    relative
                    mt-5
                    flex
                    h-[250px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#253125]/10
                    bg-[#F3F7EF]
                    dark:border-white/[0.06]
                    dark:bg-[#070A07]
                    sm:mt-7
                    sm:h-[300px]
                    sm:rounded-2xl
                    md:h-[320px]
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
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Radar circles */}

                  <div
                    className="
                      absolute
                      h-[230px]
                      w-[230px]
                      rounded-full
                      border
                      border-[#6F8D08]/10
                      dark:border-[#ADD132]/15
                      sm:h-64
                      sm:w-64
                    "
                  />

                  <div
                    className="
                      absolute
                      h-[175px]
                      w-[175px]
                      rounded-full
                      border
                      border-[#6F8D08]/15
                      dark:border-[#ADD132]/20
                      sm:h-48
                      sm:w-48
                    "
                  />

                  <div
                    className="
                      absolute
                      h-[120px]
                      w-[120px]
                      rounded-full
                      border
                      border-[#6F8D08]/20
                      dark:border-[#ADD132]/25
                      sm:h-32
                      sm:w-32
                    "
                  />

                  {/* Cross */}

                  <div className="absolute h-px w-[75%] bg-[#6F8D08]/10 dark:bg-[#ADD132]/10" />

                  <div className="absolute h-[75%] w-px bg-[#6F8D08]/10 dark:bg-[#ADD132]/10" />

                  {/* Core */}

                  <div
                    className="
                      relative
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#6F8D08]/25
                      bg-[#ADD132]/10
                      shadow-[0_0_45px_rgba(173,209,50,0.10)]
                      dark:border-[#ADD132]/30
                      sm:h-20
                      sm:w-20
                      md:h-24
                      md:w-24
                      md:rounded-3xl
                    "
                  >
                    <Shield
                      size={27}
                      className="text-[#6F8D08] dark:text-[#ADD132] sm:h-8 sm:w-8 md:h-10 md:w-10"
                    />
                  </div>

                  {/* Signals */}

                  <span
                    className="
                      absolute
                      left-[18%]
                      top-[30%]
                      h-2
                      w-2
                      rounded-full
                      bg-[#7D9F00]
                      shadow-[0_0_14px_#7D9F00]
                      dark:bg-[#ADD132]
                      dark:shadow-[0_0_15px_#ADD132]
                    "
                  />

                  <span
                    className="
                      absolute
                      right-[20%]
                      top-[37%]
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#7D9F00]
                      shadow-[0_0_12px_#7D9F00]
                      dark:bg-[#ADD132]
                      dark:shadow-[0_0_15px_#ADD132]
                    "
                  />

                  <span
                    className="
                      absolute
                      bottom-[25%]
                      left-[30%]
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#7D9F00]
                      shadow-[0_0_12px_#7D9F00]
                      dark:bg-[#ADD132]
                      dark:shadow-[0_0_15px_#ADD132]
                    "
                  />
                </div>

                {/* Metrics */}

                <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
                  <MetricCard value="24/7" label="Monitoring" />

                  <MetricCard value="Global" label="Visibility" />

                  <MetricCard value="Secure" label="Intelligence" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT DETAILS
      ===================================================== */}

      <section
        className="
          border-y
          border-[#1C281C]/10
          bg-[#EEF3E9]
          px-4
          py-10
          dark:border-white/[0.06]
          dark:bg-[#080C08]
          sm:px-7
          sm:py-14
          md:px-10
          md:py-16
          lg:px-12
        "
      >
        <div className="mx-auto grid max-w-[1500px] gap-3 md:grid-cols-3 md:gap-4">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="
                  group
                  rounded-[18px]
                  border
                  border-[#253125]/10
                  bg-white/65
                  p-4
                  shadow-[0_10px_35px_rgba(30,50,20,0.03)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#ADD132]/30
                  dark:border-white/[0.07]
                  dark:bg-[#0A0E0A]
                  dark:shadow-none
                  dark:hover:border-[#ADD132]/25
                  sm:rounded-2xl
                  sm:p-5
                  md:p-6
                "
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="
                      flex
                      h-10
                      w-10
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
                    <Icon
                      size={18}
                      className="text-[#6F8D08] dark:text-[#ADD132] sm:h-[21px] sm:w-[21px]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#7B857B]
                        dark:text-slate-600
                        sm:text-[9px]
                        md:text-xs
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-1.5
                        break-words
                        text-sm
                        font-bold
                        text-[#172017]
                        dark:text-white
                        sm:mt-2
                        sm:text-base
                      "
                    >
                      {item.value}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        leading-5
                        text-[#788278]
                        dark:text-slate-500
                        sm:text-xs
                        sm:leading-6
                        md:text-sm
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      <section
        id="contact-form"
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
              gap-10
              lg:grid-cols-[0.75fr_1.25fr]
              lg:gap-12
              xl:gap-16
            "
          >
            {/* FORM INTRO */}

            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:text-[9px]
                  md:text-sm
                "
              >
                Start a Conversation
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
                Tell us what you need to protect.
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
                  md:text-base
                  md:leading-8
                "
              >
                Whether you're protecting digital content, intellectual
                property, a brand or an online platform, share a few details
                and we'll understand your requirements.
              </p>

              {/* Reasons */}

              <div className="mt-7 space-y-3 sm:mt-9 sm:space-y-4">
                {reasons.map((reason) => (
                  <div
                    key={reason}
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
                      {reason}
                    </span>
                  </div>
                ))}
              </div>

              {/* Conversation Note */}

              <div
                className="
                  mt-7
                  rounded-[18px]
                  border
                  border-[#6F8D08]/15
                  bg-[#ADD132]/8
                  p-4
                  dark:border-[#ADD132]/15
                  dark:bg-[#ADD132]/5
                  sm:mt-10
                  sm:rounded-2xl
                  sm:p-6
                "
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <Clock3
                    size={18}
                    className="mt-0.5 shrink-0 text-[#6F8D08] dark:text-[#ADD132] sm:h-[21px] sm:w-[21px]"
                  />

                  <div>
                    <p
                      className="
                        text-xs
                        font-bold
                        text-[#172017]
                        dark:text-white
                        sm:text-sm
                      "
                    >
                      Let's start with a conversation.
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-[10px]
                        leading-5
                        text-[#687368]
                        dark:text-slate-500
                        sm:mt-2
                        sm:text-sm
                        sm:leading-6
                      "
                    >
                      Share your requirements and we'll discuss the next
                      steps with you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}

            <div className="relative">
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[22px]
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
                  border-[#253125]/10
                  bg-white/80
                  p-4
                  shadow-[0_20px_60px_rgba(30,50,20,0.05)]
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

                <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
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
                      Send an enquiry
                    </p>

                    <p
                      className="
                        mt-1
                        text-[9px]
                        text-[#788278]
                        dark:text-slate-500
                        sm:text-sm
                      "
                    >
                      All fields marked with * are required.
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
                    <Send
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
                      border-[#6F8D08]/20
                      bg-[#ADD132]/10
                      p-3
                      dark:border-[#ADD132]/20
                      dark:bg-[#ADD132]/10
                      sm:mb-6
                      sm:gap-3
                      sm:p-4
                    "
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-[#6F8D08] dark:text-[#ADD132] sm:h-[19px] sm:w-[19px]"
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
                        Message received
                      </p>

                      <p
                        className="
                          mt-1
                          text-[10px]
                          leading-5
                          text-[#687368]
                          dark:text-slate-400
                          sm:text-sm
                        "
                      >
                        Thank you for contacting TrackOwls. Your enquiry has
                        been submitted.
                      </p>
                    </div>
                  </div>
                )}

                {/* Form Fields */}

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                  {/* NAME */}

                  <FormField label="Full Name *" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </FormField>

                  {/* COMPANY */}

                  <FormField label="Company" htmlFor="company">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className={inputClass}
                    />
                  </FormField>

                  {/* EMAIL */}

                  <FormField label="Email Address *" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </FormField>

                  {/* PHONE */}

                  <FormField label="Phone Number" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                    />
                  </FormField>

                  {/* SUBJECT */}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className={labelClass}
                    >
                      What can we help with? *
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select a topic
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
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* MESSAGE */}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className={labelClass}
                    >
                      Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className={`${inputClass} min-h-[140px] resize-none sm:min-h-[160px]`}
                    />
                  </div>
                </div>

                {/* Submit */}

                <div className="mt-5 sm:mt-7">
                  <button
                    type="submit"
                    className="
                      group
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-2.5
                      rounded-xl
                      bg-[#ADD132]
                      px-5
                      py-3.5
                      text-xs
                      font-bold
                      text-[#101800]
                      transition-all
                      duration-300
                      hover:bg-[#C7EB45]
                      hover:shadow-[0_0_30px_rgba(173,209,50,0.18)]
                      sm:gap-3
                      sm:px-6
                      sm:py-4
                      sm:text-sm
                    "
                  >
                    Send Message

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
                </div>

                <p
                  className="
                    mt-3
                    text-center
                    text-[8px]
                    leading-5
                    text-[#8A948A]
                    dark:text-slate-600
                    sm:mt-4
                    sm:text-xs
                  "
                >
                  By submitting this form, you agree to be contacted
                  regarding your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section
        id="location"
        className="
          border-y
          border-[#1C281C]/10
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
              overflow-hidden
              rounded-[20px]
              border
              border-[#253125]/10
              bg-white/70
              shadow-[0_20px_60px_rgba(30,50,20,0.04)]
              dark:border-white/[0.08]
              dark:bg-[#0A0E0A]
              dark:shadow-none
              lg:grid-cols-[0.75fr_1.25fr]
              lg:rounded-[2rem]
            "
          >
            {/* DETAILS */}

            <div className="p-5 sm:p-8 md:p-10 lg:p-12">
              <div
                className="
                  flex
                  h-12
                  w-12
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
                <MapPin
                  size={22}
                  className="text-[#6F8D08] dark:text-[#ADD132] sm:h-[25px] sm:w-[25px]"
                />
              </div>

              <p
                className="
                  mt-6
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#6F8D08]
                  dark:text-[#ADD132]
                  sm:mt-8
                  sm:text-xs
                "
              >
                Our Office
              </p>

              <h2
                className="
                  mt-2
                  text-[27px]
                  font-black
                  leading-tight
                  tracking-[-0.035em]
                  text-[#152019]
                  dark:text-white
                  sm:mt-3
                  sm:text-3xl
                  md:text-4xl
                "
              >
                Coimbatore, Tamil Nadu
              </h2>

              <p
                className="
                  mt-4
                  text-xs
                  leading-6
                  text-[#687368]
                  dark:text-slate-400
                  sm:mt-5
                  sm:text-sm
                  sm:leading-7
                "
              >
                TrackOwls Anti-Piracy Private Limited
              </p>

              <p
                className="
                  mt-2
                  text-[11px]
                  leading-6
                  text-[#7A847A]
                  dark:text-slate-500
                  sm:text-sm
                  sm:leading-7
                "
              >
                201, First Floor,
                <br />
                Paradise Garden,
                <br />
                Coimbatore,
                <br />
                Tamil Nadu, India.
              </p>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2.5
                  text-[10px]
                  text-[#687368]
                  dark:text-slate-400
                  sm:mt-8
                  sm:gap-3
                  sm:text-sm
                "
              >
                <Globe
                  size={15}
                  className="text-[#6F8D08] dark:text-[#ADD132] sm:h-[17px] sm:w-[17px]"
                />

                Serving digital businesses globally
              </div>
            </div>

            {/* MAP VISUAL */}

            <div
              className="
                relative
                min-h-[280px]
                overflow-hidden
                border-t
                border-[#253125]/10
                dark:border-white/[0.07]
                sm:min-h-[350px]
                md:min-h-[400px]
                lg:border-l
                lg:border-t-0
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-25
                  dark:opacity-30
                "
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(173,209,50,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.16) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_center,rgba(173,209,50,0.12),transparent_55%)]
                "
              />

              {/* Map lines */}

              <div className="absolute left-[15%] top-[28%] h-px w-[70%] rotate-[18deg] bg-[#6F8D08]/15 dark:bg-[#ADD132]/15" />

              <div className="absolute left-[20%] top-[58%] h-px w-[65%] -rotate-[25deg] bg-[#6F8D08]/15 dark:bg-[#ADD132]/15" />

              <div className="absolute left-[45%] top-[8%] h-[84%] w-px rotate-[22deg] bg-[#6F8D08]/10 dark:bg-[#ADD132]/10" />

              <div className="absolute left-[62%] top-[10%] h-[80%] w-px -rotate-[30deg] bg-[#6F8D08]/10 dark:bg-[#ADD132]/10" />

              {/* Location */}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className="
                    relative
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#6F8D08]/20
                    bg-[#ADD132]/5
                    dark:border-[#ADD132]/20
                    sm:h-24
                    sm:w-24
                  "
                >
                  <div className="absolute inset-2.5 rounded-full border border-[#6F8D08]/20 dark:border-[#ADD132]/20 sm:inset-3" />

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#ADD132]
                      shadow-[0_0_35px_rgba(173,209,50,0.35)]
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <MapPin
                      size={20}
                      className="text-black sm:h-[23px] sm:w-[23px]"
                    />
                  </div>
                </div>

                <div
                  className="
                    absolute
                    left-1/2
                    top-[112%]
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-full
                    border
                    border-[#253125]/10
                    bg-white/90
                    px-3
                    py-1.5
                    text-[9px]
                    font-semibold
                    text-[#536053]
                    shadow-lg
                    dark:border-white/[0.08]
                    dark:bg-[#0A0E0A]/90
                    dark:text-slate-300
                    sm:px-4
                    sm:py-2
                    sm:text-xs
                  "
                >
                  Coimbatore, India
                </div>
              </div>

              {/* Location Label */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  rounded-xl
                  border
                  border-[#253125]/10
                  bg-white/80
                  px-3
                  py-2
                  backdrop-blur-xl
                  dark:border-white/[0.08]
                  dark:bg-[#0A0E0A]/90
                  sm:bottom-7
                  sm:left-7
                  sm:px-4
                  sm:py-3
                "
              >
                <p
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.15em]
                    text-[#7D877D]
                    dark:text-slate-600
                    sm:text-[10px]
                  "
                >
                  Location
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    font-bold
                    text-[#172017]
                    dark:text-white
                    sm:text-sm
                  "
                >
                  TrackOwls HQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-4 py-14 sm:px-7 sm:py-20 md:px-10 md:py-24 lg:px-12">
        <div
          className="
            relative
            mx-auto
            max-w-[1500px]
            overflow-hidden
            rounded-[22px]
            border
            border-[#ADD132]/20
            bg-[#ADD132]
            px-5
            py-10
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
              -right-20
              -top-28
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
                  sm:text-[9px]
                  md:text-sm
                "
              >
                TrackOwls
              </p>

              <h2
                className="
                  mt-3
                  text-[30px]
                  font-black
                  leading-[1.04]
                  tracking-[-0.045em]
                  sm:mt-4
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Your digital assets deserve visibility.
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
                Start a conversation with TrackOwls and explore a structured
                approach to digital protection.
              </p>
            </div>

            <a
              href="#contact-form"
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
              Contact Us

              <ArrowUpRight
                size={16}
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
   FORM FIELD
========================================================= */

function FormField({ label, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>

      {children}
    </div>
  );
}

/* =========================================================
   METRIC CARD
========================================================= */

function MetricCard({ value, label }) {
  return (
    <div
      className="
        rounded-lg
        border
        border-[#253125]/10
        bg-[#F3F7EF]
        p-2.5
        dark:border-white/[0.06]
        dark:bg-white/[0.02]
        sm:rounded-xl
        sm:p-3
        md:p-4
      "
    >
      <p
        className="
          text-sm
          font-black
          text-[#6F8D08]
          dark:text-[#ADD132]
          sm:text-base
          md:text-lg
        "
      >
        {value}
      </p>

      <p
        className="
          mt-0.5
          text-[6px]
          text-[#7D877D]
          dark:text-slate-600
          sm:text-[8px]
          md:text-[11px]
        "
      >
        {label}
      </p>
    </div>
  );
}

/* =========================================================
   SHARED FORM STYLES
========================================================= */

const labelClass = `
  mb-2
  block
  text-[9px]
  font-semibold
  text-[#536053]
  dark:text-slate-300
  sm:text-xs
  md:text-sm
`;

const inputClass = `
  w-full
  rounded-xl
  border
  border-[#253125]/10
  bg-[#F8FAF5]
  px-3.5
  py-3
  text-[11px]
  text-[#172017]
  outline-none
  transition
  placeholder:text-[#A0AAA0]
  focus:border-[#6F8D08]/50
  focus:ring-2
  focus:ring-[#ADD132]/10
  dark:border-white/[0.08]
  dark:bg-[#070A07]
  dark:text-white
  dark:placeholder:text-slate-700
  dark:focus:border-[#ADD132]/50
  sm:px-4
  sm:py-3.5
  sm:text-sm
`;

export default Contact;