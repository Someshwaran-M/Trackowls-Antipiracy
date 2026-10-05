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
    <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#6F8D08] dark:text-[#ADD132] sm:text-[10px]">
      {label}
      {required && <span className="ml-1 text-[#ADD132]">*</span>}
    </span>
    {children}
  </label>
);

const inputClass =
  "w-full border-0 border-b border-[#263226]/15 bg-transparent px-0 py-3 text-sm text-[#152019] outline-none transition-all duration-300 placeholder:text-[#98A198] focus:border-[#ADD132] dark:border-white/[0.12] dark:text-white dark:placeholder:text-white/25";

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
    <div className="min-h-screen overflow-hidden bg-[#F7FAF4] text-[#152019] dark:bg-[#070A07] dark:text-white">
      <style>{`
        .request-premium-font {
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .request-hero-title {
          font-family: "Manrope", "Inter", Arial, sans-serif;
          font-size: clamp(42px, 6vw, 82px);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -0.075em;
        }

        .request-outline {
          color: transparent;
          -webkit-text-stroke: 1px rgba(21, 32, 25, 0.18);
        }

        .dark .request-outline {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.16);
        }

        .request-scan {
          animation: requestScan 4s ease-in-out infinite;
        }

        .request-pulse {
          animation: requestPulse 2.5s ease-in-out infinite;
        }

        .request-orbit {
          animation: requestOrbit 18s linear infinite;
        }

        .request-orbit-reverse {
          animation: requestOrbitReverse 24s linear infinite;
        }

        .request-contact {
          transition:
            transform 350ms ease,
            padding-left 350ms ease,
            background-color 350ms ease;
        }

        .request-contact:hover {
          transform: translateX(8px);
          padding-left: 8px;
          background: rgba(173, 209, 50, 0.035);
        }

        .dark .request-contact:hover {
          background: rgba(173, 209, 50, 0.025);
        }

        .request-contact-arrow {
          opacity: 0.25;
          transition:
            opacity 300ms ease,
            transform 300ms ease;
        }

        .request-contact:hover .request-contact-arrow {
          opacity: 1;
          transform: translate(4px, -4px);
        }

        .request-reason {
          position: relative;
          transition:
            transform 300ms ease,
            background-color 300ms ease;
        }

        .request-reason::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          background: #ADD132;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 300ms ease;
        }

        .request-reason:hover {
          transform: translateX(7px);
          background: rgba(173, 209, 50, 0.035);
        }

        .request-reason:hover::before {
          transform: scaleY(1);
        }

        .request-form {
          position: relative;
        }

        .request-form::before {
          content: "";
          position: absolute;
          left: -24px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(
            to bottom,
            #ADD132 0%,
            rgba(173, 209, 50, 0.2) 50%,
            transparent 100%
          );
        }

        .request-button {
          position: relative;
          overflow: hidden;
        }

        .request-button::before {
          content: "";
          position: absolute;
          left: -120%;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transform: skewX(-20deg);
          transition: left 550ms ease;
        }

        .request-button:hover::before {
          left: 120%;
        }

        .request-button > * {
          position: relative;
          z-index: 2;
        }

        .request-focus-line {
          position: relative;
        }

        .request-focus-line::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 44px;
          height: 2px;
          background: #ADD132;
        }

        .request-corner {
          position: relative;
        }

        .request-corner::before,
        .request-corner::after {
          content: "";
          position: absolute;
          width: 32px;
          height: 32px;
          pointer-events: none;
        }

        .request-corner::before {
          left: 0;
          top: 0;
          border-left: 1px solid rgba(173, 209, 50, 0.45);
          border-top: 1px solid rgba(173, 209, 50, 0.45);
        }

        .request-corner::after {
          right: 0;
          bottom: 0;
          border-right: 1px solid rgba(173, 209, 50, 0.45);
          border-bottom: 1px solid rgba(173, 209, 50, 0.45);
        }

        @keyframes requestScan {
          0% {
            transform: translateY(-35px);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          75% {
            opacity: 1;
          }

          100% {
            transform: translateY(330px);
            opacity: 0;
          }
        }

        @keyframes requestPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.45;
          }

          50% {
            transform: scale(1.45);
            opacity: 1;
          }
        }

        @keyframes requestOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes requestOrbitReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @media (max-width: 767px) {
          .request-hero-title {
            font-size: clamp(42px, 13vw, 66px);
          }

          .request-form::before {
            left: -12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .request-scan,
          .request-pulse,
          .request-orbit,
          .request-orbit-reverse {
            animation: none;
          }
        }
      `}</style>

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-[#172117]/10 dark:border-white/[0.07]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-220px] top-[-260px] h-[600px] w-[600px] rounded-full bg-[#ADD132]/[0.045] blur-[120px]" />

          <div className="request-orbit absolute right-[-170px] top-[-190px] h-[560px] w-[560px] rounded-full border border-[#ADD132]/10" />

          <div className="request-orbit-reverse absolute right-[-250px] top-[-280px] h-[760px] w-[760px] rounded-full border border-dashed border-[#ADD132]/[0.07]" />

          <div className="absolute right-[14%] top-[36%] h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_25px_#ADD132] request-pulse" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-16">
          <div className="max-w-[1000px]">
            <div className="mb-9 flex items-center gap-3">
              <span className="h-px w-12 bg-[#ADD132] sm:w-16" />

              <span className="request-premium-font text-[9px] font-extrabold uppercase tracking-[0.32em] text-[#6F8D08] dark:text-[#ADD132] sm:text-[10px]">
                Request Demo
              </span>
            </div>

            <h1 className="request-hero-title text-[#152019] dark:text-white">
              See how
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                TrackOwls
              </span>
              <br />
              <span className="request-outline">
                protects what matters.
              </span>
            </h1>

            <p className="request-premium-font mt-10 max-w-2xl text-[14px] leading-7 text-[#687368] dark:text-white/50 sm:text-base sm:leading-8">
              Request a personalized demonstration and discover a structured
              approach to digital protection.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="request-pulse h-2 w-2 rounded-full bg-[#ADD132]" />

                <span className="request-premium-font text-[9px] font-bold uppercase tracking-[0.22em] text-[#6F8D08] dark:text-[#ADD132]">
                  TrackOwls Protection
                </span>
              </div>

              <span className="hidden h-4 w-px bg-[#263226]/15 dark:bg-white/10 sm:block" />

              <div className="flex items-center gap-3 text-[8px] uppercase tracking-[0.18em] text-[#7D897F]">
                <span>Scan</span>
                <span className="text-[#ADD132]">/</span>
                <span>Detect</span>
                <span className="text-[#ADD132]">/</span>
                <span>Remove</span>
                <span className="text-[#ADD132]">/</span>
                <span>Protect</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-[11%] hidden h-[360px] w-px overflow-hidden bg-[#ADD132]/10 lg:block">
          <div className="request-scan absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-transparent via-[#ADD132] to-transparent" />
        </div>
      </section>



      {/* DEMO CONTENT */}

      <section
        id="demo-form"
        className="relative overflow-hidden border-b border-[#172117]/10 dark:border-white/[0.07]"
      >
        <div className="absolute right-[-300px] top-[10%] hidden h-[700px] w-[700px] rounded-full border border-[#ADD132]/[0.05] lg:block" />

        <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-16">
          <div className="request-corner relative max-w-[1050px] px-6 py-7 sm:px-10 sm:py-10">
            <div className="flex items-center gap-4">
              <span className="request-premium-font text-[9px] font-bold tracking-[0.2em] text-[#ADD132]">
                01
              </span>

              <span className="h-px w-10 bg-[#ADD132]" />

              <span className="request-premium-font text-[9px] font-extrabold uppercase tracking-[0.28em] text-[#6F8D08] dark:text-[#ADD132]">
                Personalized Demonstration
              </span>
            </div>

            <h2 className="mt-8 max-w-4xl text-[41px] font-black leading-[0.94] tracking-[-0.065em] text-[#152019] dark:text-white sm:text-5xl md:text-6xl lg:text-[70px]">
              Tell us what you
              <br />
              <span className="text-[#789900] dark:text-[#ADD132]">
                need to protect.
              </span>
            </h2>

            <p className="request-premium-font mt-8 max-w-2xl text-[14px] leading-7 text-[#687368] dark:text-white/50 sm:text-base sm:leading-8">
              Whether you're protecting digital content, intellectual
              property, a brand or an online platform, share a few details and
              we'll understand your requirements.
            </p>
          </div>

          <div className="mt-14 border-y border-[#263226]/10 py-7 dark:border-white/[0.08]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="request-premium-font text-[9px] font-bold uppercase tracking-[0.2em] text-[#6F8D08] dark:text-[#ADD132]">
                Let's start with a conversation.
              </p>

              <p className="request-premium-font text-[10px] leading-5 text-[#687368] dark:text-white/40 sm:max-w-lg sm:text-right">
                Share your requirements and we'll discuss the next steps with
                you.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-[1050px]">
            <div className="mb-7">
              <p className="request-premium-font text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#7B877D] dark:text-white/30">
                You can use this demo to
              </p>

              <div className="mt-3 h-px w-10 bg-[#ADD132]" />
            </div>

            <div className="flex flex-col border-t border-[#263226]/10 dark:border-white/[0.08]">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className="request-reason flex min-h-[56px] items-center gap-5 border-b border-[#263226]/10 px-3 dark:border-white/[0.07] sm:px-4"
                >
                  <span className="request-premium-font w-8 shrink-0 text-[9px] font-bold text-[#8A958B] dark:text-white/25">
                    0{index + 1}
                  </span>

                  <span className="text-[12px] text-[#536053] dark:text-white/55 sm:text-sm">
                    {reason}
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="ml-auto shrink-0 text-[#6F8D08] dark:text-[#ADD132]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}

          <div className="request-form mt-20 max-w-[1050px] pl-5 sm:pl-7 md:pl-9 lg:pl-11">
            <div className="border-t border-[#263226]/10 pt-10 dark:border-white/[0.08]">
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <p className="request-premium-font text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#6F8D08] dark:text-[#ADD132]">
                    Request Demo
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-[-0.045em] text-[#152019] dark:text-white sm:text-3xl">
                    Send an enquiry
                  </h3>
                </div>

                <div className="hidden items-center gap-2 sm:flex">
                  <ShieldCheck
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#ADD132]"
                  />

                  <span className="request-premium-font text-[8px] uppercase tracking-[0.18em] text-[#8A958B]">
                    TrackOwls Protection
                  </span>
                </div>
              </div>

              {submitted ? (
                <div className="border-y border-[#ADD132]/25 py-16">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#ADD132]/10 text-[#6F8D08] dark:text-[#ADD132]">
                      <CheckCircle2 size={24} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-black tracking-[-0.04em] text-[#152019] dark:text-white">
                        Message received
                      </h3>

                      <p className="request-premium-font mt-3 max-w-xl text-sm leading-7 text-[#687368] dark:text-white/50">
                        Thank you for contacting TrackOwls. Your enquiry has
                        been submitted.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <div className="border-t border-[#263226]/10 py-7 dark:border-white/[0.08]">
                      <FormField label="Full Name" required>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </FormField>
                    </div>

                    <div className="border-t border-[#263226]/10 py-7 dark:border-white/[0.08]">
                      <FormField label="Company">
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className={inputClass}
                        />
                      </FormField>
                    </div>

                    <div className="border-t border-[#263226]/10 py-7 dark:border-white/[0.08]">
                      <FormField label="Email Address" required>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@company.com"
                          className={inputClass}
                        />
                      </FormField>
                    </div>

                    <div className="border-t border-[#263226]/10 py-7 dark:border-white/[0.08]">
                      <FormField label="Phone Number">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className={inputClass}
                        />
                      </FormField>
                    </div>

                    <div className="border-t border-[#263226]/10 py-7 dark:border-white/[0.08]">
                      <FormField label="What can we help with?" required>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className={`${inputClass} cursor-pointer`}
                        >
                          <option
                            value=""
                            className="bg-white dark:bg-[#070A07]"
                          >
                            Select a topic
                          </option>

                          <option
                            value="Anti-Piracy"
                            className="bg-white dark:bg-[#070A07]"
                          >
                            Anti-Piracy
                          </option>

                          <option
                            value="IP Protection"
                            className="bg-white dark:bg-[#070A07]"
                          >
                            IP Protection
                          </option>

                          <option
                            value="Brand Protection"
                            className="bg-white dark:bg-[#070A07]"
                          >
                            Brand Protection
                          </option>

                          <option
                            value="Online Monitoring"
                            className="bg-white dark:bg-[#070A07]"
                          >
                            Online Monitoring
                          </option>

                          <option
                            value="Threat Detection"
                            className="bg-white dark:bg-[#070A07]"
                          >
                            Threat Detection
                          </option>

                          <option
                            value="Digital Investigation"
                            className="bg-white dark:bg-[#070A07]"
                          >
                            Digital Investigation
                          </option>

                          <option
                            value="Partnership"
                            className="bg-white dark:bg-[#070A07]"
                          >
                            Partnership
                          </option>

                          <option
                            value="Other"
                            className="bg-white dark:bg-[#070A07]"
                          >
                            Other
                          </option>
                        </select>
                      </FormField>
                    </div>

                    <div className="border-t border-[#263226]/10 py-7 dark:border-white/[0.08]">
                      <FormField label="Message" required>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your requirements..."
                          className={`${inputClass} resize-none`}
                        />
                      </FormField>
                    </div>
                  </div>

                  <div className="mt-7 border-t border-[#263226]/10 pt-7 dark:border-white/[0.08]">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <p className="request-premium-font max-w-md text-[9px] leading-5 text-[#829082] dark:text-white/30">
                        All fields marked with * are required.
                      </p>

                      <button
                        type="submit"
                        className="request-button group inline-flex w-full items-center justify-center gap-3 bg-[#ADD132] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#101600] transition-all duration-300 hover:bg-[#C2E54A] sm:w-auto"
                      >
                        <span>Send Message</span>

                        <Send
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    </div>

                    <p className="request-premium-font mt-5 text-[8px] leading-5 text-[#8A958B] dark:text-white/25">
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


    </div>
  );
}

export default RequestDemo;