import React, { useState } from "react";

import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ShieldCheck,
  ScanSearch,
  LockKeyhole,
  Globe,
} from "lucide-react";

const protectionAreas = [
  "Digital Content",
  "Intellectual Property",
  "Brand Protection",
];

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@trackowls.example",
    description: "Replace with your live business email",
    href: "mailto:hello@trackowls.example",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 00000 00000",
    description: "Replace with your live contact number",
    href: "#demo-form",
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

const FormField = ({ label, required, children }) => (
  <label className="block">
    <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#657A18] dark:text-[#ADD132] sm:text-[10px]">
      {label}
      {required && (
        <span className="ml-1 text-[#ADD132]">*</span>
      )}
    </span>

    {children}
  </label>
);

function RequestDemo() {
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
    setSubmitted(true);
  };

  return (
    <div className="request-page min-h-screen overflow-hidden bg-[#F4F7F0] text-[#152019] dark:bg-[#070A07] dark:text-white">
      <style>{`
        .request-page {
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .request-display {
          font-family: "Manrope", "Inter", Arial, sans-serif;
          font-weight: 800;
          letter-spacing: -0.065em;
        }

        .request-console {
          position: relative;
          isolation: isolate;
        }

        .request-console::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.55;
          background-image:
            linear-gradient(
              rgba(21, 32, 25, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(21, 32, 25, 0.035) 1px,
              transparent 1px
            );
          background-size: 34px 34px;
        }

        .dark .request-console::before {
          opacity: 0.22;
          background-image:
            linear-gradient(
              rgba(173, 209, 50, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(173, 209, 50, 0.055) 1px,
              transparent 1px
            );
        }

        .request-console-content {
          position: relative;
          z-index: 2;
        }

        .request-number {
          font-variant-numeric: tabular-nums;
        }

        .request-purpose-row {
          position: relative;
          transition:
            padding-left 300ms ease,
            background-color 300ms ease;
        }

        .request-purpose-row::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #ADD132;
          transform: scaleY(0);
          transform-origin: center;
          transition: transform 300ms ease;
        }

        .request-purpose-row:hover {
          padding-left: 14px;
          background: rgba(173, 209, 50, 0.045);
        }

        .request-purpose-row:hover::after {
          transform: scaleY(1);
        }

        .request-field {
          position: relative;
        }

        .request-field::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: rgba(38, 50, 38, 0.12);
          transition:
            background-color 250ms ease,
            height 250ms ease;
        }

        .dark .request-field::after {
          background: rgba(255, 255, 255, 0.1);
        }

        .request-field:focus-within::after {
          height: 2px;
          background: #ADD132;
        }

        .request-input {
          width: 100%;
          border: 0;
          background: transparent;
          outline: none;
          color: #152019;
          padding: 12px 0 14px;
          font-size: 14px;
          transition: color 200ms ease;
        }

        .dark .request-input {
          color: #ffffff;
        }

        .request-input::placeholder {
          color: #9BA59C;
        }

        .dark .request-input::placeholder {
          color: rgba(255, 255, 255, 0.25);
        }

        .request-input option {
          background: #ffffff;
          color: #152019;
        }

        .dark .request-input option {
          background: #0D130F;
          color: #ffffff;
        }

        .request-submit {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .request-submit::before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-radius: 999px;
          left: 50%;
          top: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition:
            width 550ms ease,
            height 550ms ease;
          z-index: -1;
        }

        .request-submit:hover::before {
          width: 500px;
          height: 500px;
        }

        .request-submit-arrow {
          transition:
            transform 300ms ease,
            background-color 300ms ease;
        }

        .request-submit:hover .request-submit-arrow {
          transform: rotate(45deg);
        }

        .request-submit:hover {
          box-shadow:
            0 15px 45px rgba(173, 209, 50, 0.18);
        }

        .request-brand-mark {
          position: relative;
        }

        .request-brand-mark::before {
          content: "";
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #ADD132;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          box-shadow: 0 0 20px rgba(173, 209, 50, 0.8);
        }

        .request-side-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(173, 209, 50, 0.65),
            transparent
          );
        }

        .request-icon-box {
          transition:
            transform 300ms ease,
            border-color 300ms ease,
            background-color 300ms ease;
        }

        .request-contact-row:hover .request-icon-box {
          transform: translateY(-3px);
          border-color: rgba(173, 209, 50, 0.5);
          background: rgba(173, 209, 50, 0.08);
        }

        .request-contact-row {
          transition: transform 300ms ease;
        }

        .request-contact-row:hover {
          transform: translateX(5px);
        }

        .request-success {
          animation: requestSuccessIn 550ms cubic-bezier(.22,1,.36,1);
        }

        @keyframes requestSuccessIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .request-reveal {
          animation: requestReveal 700ms cubic-bezier(.22,1,.36,1) both;
        }

        .request-reveal-delay-1 {
          animation-delay: 100ms;
        }

        .request-reveal-delay-2 {
          animation-delay: 180ms;
        }

        .request-reveal-delay-3 {
          animation-delay: 260ms;
        }

        @keyframes requestReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 767px) {
          .request-console::before {
            background-size: 25px 25px;
          }

          .request-input {
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .request-purpose-row,
          .request-contact-row,
          .request-icon-box,
          .request-submit,
          .request-submit-arrow {
            transition: none;
          }

          .request-reveal,
          .request-success {
            animation: none;
          }
        }
      `}</style>

      {/* =========================================================
          HERO / PROTECTION CONSOLE
      ========================================================= */}

      <section className="request-console relative border-b border-[#1D291E]/10 dark:border-white/[0.07]">
        <div className="request-console-content">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
            <div className="grid min-h-[650px] grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">

              {/* LEFT SIDE */}
              <div className="relative flex flex-col justify-between border-b border-[#1D291E]/10 py-14 dark:border-white/[0.07] lg:border-b-0 lg:border-r lg:py-20 lg:pr-14 xl:pr-20">

                <div className="request-side-line hidden lg:block" />

                <div className="request-reveal">
                  <div className="mb-8 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_18px_rgba(173,209,50,0.8)]" />

                    <span className="text-[9px] font-extrabold uppercase tracking-[0.28em] text-[#657A18] dark:text-[#ADD132] sm:text-[10px]">
                      Request Demo
                    </span>
                  </div>

                  <h1 className="request-display max-w-[720px] text-[52px] leading-[0.94] text-[#152019] dark:text-white sm:text-[64px] md:text-[74px] lg:text-[68px] xl:text-[82px]">
                    See how
                    <br />

                    <span className="text-[#789900] dark:text-[#ADD132]">
                      TrackOwls
                    </span>

                    <br />

                    protects what matters.
                  </h1>

                  <p className="mt-8 max-w-xl text-[13px] leading-7 text-[#687368] dark:text-white/50 sm:text-[15px] sm:leading-8">
                    Request a personalized demonstration and discover a structured
                    approach to digital protection.
                  </p>
                </div>

                <div className="request-reveal request-reveal-delay-2 mt-12">
                  <div className="flex items-center gap-4">
                    <div className="request-brand-mark relative pl-5">
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#657A18] dark:text-[#ADD132]">
                        TrackOwls Protection
                      </span>
                    </div>

                    <span className="h-4 w-px bg-[#263226]/15 dark:bg-white/10" />

                    <span className="text-[8px] uppercase tracking-[0.18em] text-[#7D897F]">
                      Scan
                    </span>

                    <span className="text-[#ADD132]">/</span>

                    <span className="text-[8px] uppercase tracking-[0.18em] text-[#7D897F]">
                      Detect
                    </span>

                    <span className="text-[#ADD132]">/</span>

                    <span className="text-[8px] uppercase tracking-[0.18em] text-[#7D897F]">
                      Remove
                    </span>

                    <span className="text-[#ADD132]">/</span>

                    <span className="text-[8px] uppercase tracking-[0.18em] text-[#7D897F]">
                      Protect
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col justify-center py-12 lg:py-20 lg:pl-14 xl:pl-20">
                <div className="request-reveal request-reveal-delay-1 max-w-xl">

                  <div className="mb-8 flex items-end justify-between border-b border-[#263226]/10 pb-5 dark:border-white/[0.08]">
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.24em] text-[#657A18] dark:text-[#ADD132]">
                        Personalized Demonstration
                      </span>

                      <h2 className="mt-2 text-[27px] font-extrabold tracking-[-0.045em] text-[#152019] dark:text-white sm:text-3xl">
                        Tell us what you need to protect.
                      </h2>
                    </div>

                    <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#263226]/10 dark:border-white/10 sm:flex">
                      <ArrowUpRight
                        size={17}
                        className="text-[#657A18] dark:text-[#ADD132]"
                      />
                    </div>
                  </div>

                  <p className="mb-9 text-[13px] leading-7 text-[#687368] dark:text-white/50 sm:text-sm sm:leading-7">
                    Whether you're protecting digital content, intellectual
                    property, a brand or an online platform, share a few details and
                    we'll understand your requirements.
                  </p>

                  <div className="border-y border-[#263226]/10 py-6 dark:border-white/[0.08]">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#657A18] dark:text-[#ADD132]">
                        Let's start with a conversation.
                      </p>

                      <p className="text-[10px] leading-5 text-[#687368] dark:text-white/40 sm:max-w-sm sm:text-right">
                        Share your requirements and we'll discuss the next steps with
                        you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT THE DEMO CAN BE USED FOR
      ========================================================= */}

      <section
        className="border-b border-[#263226]/10 dark:border-white/[0.07]"
      >
        <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-14 xl:px-16">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-20">

            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#7B877D] dark:text-white/30">
                You can use this demo to
              </p>

              <div className="mt-4 h-[2px] w-12 bg-[#ADD132]" />
            </div>

            <div className="border-t border-[#263226]/10 dark:border-white/[0.08]">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className="request-purpose-row group flex min-h-[64px] items-center gap-5 border-b border-[#263226]/10 px-2 dark:border-white/[0.07] sm:min-h-[70px] sm:px-4"
                >
                  <span className="request-number w-8 shrink-0 text-[9px] font-bold text-[#8A958B] dark:text-white/25">
                    0{index + 1}
                  </span>

                  <span className="text-[12px] text-[#536053] dark:text-white/55 sm:text-sm">
                    {reason}
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="ml-auto shrink-0 text-[#6F8D08] opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 dark:text-[#ADD132]"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FORM
      ========================================================= */}

      <section
        id="demo-form"
        className="border-b border-[#263226]/10 dark:border-white/[0.07]"
      >
        <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-16">

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[240px_minmax(0,850px)] lg:gap-20 xl:grid-cols-[270px_minmax(0,900px)]">

            {/* FORM INTRO */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={18}
                  strokeWidth={1.5}
                  className="text-[#6F8D08] dark:text-[#ADD132]"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6F8D08] dark:text-[#ADD132]">
                  TrackOwls Protection
                </span>
              </div>

              <div className="mt-8 hidden lg:block">
                <div className="space-y-7">
                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ADD132] text-[#101600]">
                      <ScanSearch size={14} />
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#7B877D] dark:text-white/35">
                      Scan
                    </span>
                  </div>

                  <div className="ml-4 h-8 w-px bg-[#ADD132]/30" />

                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ADD132]/40 text-[#6F8D08] dark:text-[#ADD132]">
                      <LockKeyhole size={14} />
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#7B877D] dark:text-white/35">
                      Protect
                    </span>
                  </div>

                  <div className="ml-4 h-8 w-px bg-[#ADD132]/30" />

                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ADD132]/40 text-[#6F8D08] dark:text-[#ADD132]">
                      <Globe size={14} />
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#7B877D] dark:text-white/35">
                      Digital
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            {/* FORM WORKSPACE */}
            <div className="min-w-0">

              <div className="mb-10 border-b border-[#263226]/10 pb-7 dark:border-white/[0.08]">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#6F8D08] dark:text-[#ADD132]">
                  Request Demo
                </p>

                <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[#152019] dark:text-white sm:text-4xl">
                  Send an enquiry
                </h3>
              </div>

              {submitted ? (
                <div className="request-success border-y border-[#ADD132]/25 py-16">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ADD132]/10 text-[#6F8D08] dark:text-[#ADD132]">
                      <CheckCircle2 size={24} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-[#152019] dark:text-white">
                        Message received
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-[#687368] dark:text-white/50">
                        Thank you for contacting TrackOwls. Your enquiry has
                        been submitted.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>

                  <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">

                    {/* FULL NAME */}
                    <div className="request-field py-6">
                      <FormField label="Full Name" required>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="request-input"
                        />
                      </FormField>
                    </div>

                    {/* COMPANY */}
                    <div className="request-field py-6">
                      <FormField label="Company">
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className="request-input"
                        />
                      </FormField>
                    </div>

                    {/* EMAIL */}
                    <div className="request-field py-6">
                      <FormField label="Email Address" required>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@company.com"
                          className="request-input"
                        />
                      </FormField>
                    </div>

                    {/* PHONE */}
                    <div className="request-field py-6">
                      <FormField label="Phone Number">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className="request-input"
                        />
                      </FormField>
                    </div>

                    {/* SUBJECT */}
                    <div className="request-field py-6 md:col-span-2">
                      <FormField label="What can we help with?" required>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="request-input cursor-pointer"
                        >
                          <option value="">
                            Select a topic
                          </option>

                          <option value="Anti-Piracy">
                            Anti-Piracy
                          </option>

                          <option value="IP Protection">
                            IP Protection
                          </option>

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

                          <option value="Partnership">
                            Partnership
                          </option>

                          <option value="Other">
                            Other
                          </option>
                        </select>
                      </FormField>
                    </div>

                    {/* MESSAGE */}
                    <div className="request-field py-6 md:col-span-2">
                      <FormField label="Message" required>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your requirements..."
                          className="request-input resize-none"
                        />
                      </FormField>
                    </div>
                  </div>

                  {/* SUBMIT */}
                  <div className="mt-8 border-t border-[#263226]/10 pt-7 dark:border-white/[0.08]">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                      <p className="max-w-md text-[9px] leading-5 text-[#829082] dark:text-white/30">
                        All fields marked with * are required.
                      </p>

                      <button
                        type="submit"
                        className="request-submit group inline-flex w-full items-center justify-center gap-4 bg-[#ADD132] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#101600] transition-all duration-300 hover:bg-[#C2E54A] sm:w-auto"
                      >
                        <span className="relative z-10">
                          Send Message
                        </span>

                        <span className="request-submit-arrow relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#101600] text-[#ADD132]">
                          <Send size={13} />
                        </span>
                      </button>
                    </div>

                    <p className="mt-5 text-[8px] leading-5 text-[#8A958B] dark:text-white/25">
                      By submitting this form, you agree to be contacted
                      regarding your enquiry.
                    </p>
                  </div>

                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MOBILE / LOWER CONTACT INFORMATION
          Existing data retained but kept visually minimal.
      ========================================================= */}

      <section
        id="location"
        className="border-b border-[#263226]/10 dark:border-white/[0.07]"
      >
        <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-14 xl:px-16">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="request-contact-row group flex items-start gap-4 border-t border-[#263226]/10 pt-6 dark:border-white/[0.08]"
                >
                  <div className="request-icon-box flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#263226]/10 text-[#6F8D08] dark:border-white/10 dark:text-[#ADD132]">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#657A18] dark:text-[#ADD132]">
                      {item.title}
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#152019] dark:text-white">
                      {item.value}
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-[#7B877D] dark:text-white/35">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={14}
                    className="ml-auto shrink-0 text-[#7B877D] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#6F8D08] dark:group-hover:text-[#ADD132]"
                  />
                </a>
              );
            })}

          </div>
        </div>
      </section>
    </div>
  );
}

export default RequestDemo;