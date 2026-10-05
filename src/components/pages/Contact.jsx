import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
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
      value: "hello@trackowls.example",
      description: "Replace with your live business email",
      href: "mailto:hello@trackowls.example",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 00000 00000",
      description: "Replace with your live contact number",
      href: "#inquiry",
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
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F7FAF4] text-[#152019] transition-colors duration-300 dark:bg-[#070A07] dark:text-white">

      {/* =====================================================
          CONTACT DETAILS
          NO CARDS
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-[#1C281C]/10 bg-[#EEF3E9] dark:border-white/[0.06] dark:bg-[#080C08]">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#ADD132]/10 blur-3xl dark:bg-[#ADD132]/5" />

          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#ADD132]/10 blur-3xl dark:bg-[#ADD132]/5" />

          <div
            className="absolute inset-0 opacity-40 dark:opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(80,100,70,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(80,100,70,0.05) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1420px] px-4 py-10 sm:px-7 sm:py-14 md:px-10 md:py-16 lg:px-12">

          {/* Section heading */}

          <div className="mb-8 flex items-center gap-3 sm:mb-10">
            <span className="h-px w-10 bg-[#ADD132] sm:w-14" />

            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6F8D08] dark:text-[#ADD132] sm:text-[10px]">
              Contact Details
            </p>
          </div>

          {/* Contact details — completely cardless */}

          <div className="grid md:grid-cols-3">

            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  className={`
                    group relative
                    py-2
                    md:px-7
                    md:py-3
                    lg:px-10
                    ${index !== 0
                      ? "mt-7 border-t border-[#253125]/10 pt-7 dark:border-white/[0.08] md:mt-0 md:border-l md:border-t-0 md:pt-3"
                      : ""}
                  `}
                >

                  <div className="flex items-start gap-4">

                    {/* Icon without card */}

                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border-l-2 border-[#ADD132] text-[#6F8D08] transition-transform duration-300 group-hover:translate-x-1 dark:text-[#ADD132] sm:h-11 sm:w-11">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0">

                      <div className="flex items-center gap-3">
                        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#7B857B] dark:text-white/35 sm:text-[10px]">
                          {item.title}
                        </p>

                        <ArrowUpRight
                          size={14}
                          className="text-[#6F8D08]/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#6F8D08] dark:text-[#ADD132]/40 dark:group-hover:text-[#ADD132]"
                        />
                      </div>

                      <p className="mt-2 break-words text-sm font-bold tracking-[-0.02em] text-[#172017] dark:text-white sm:text-base">
                        {item.value}
                      </p>

                      <p className="mt-1.5 text-[10px] leading-5 text-[#788278] dark:text-white/40 sm:text-xs sm:leading-6">
                        {item.description}
                      </p>

                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 md:mt-8">
                    <span className="h-1 w-1 rounded-full bg-[#ADD132]" />

                    <span className="h-px w-8 bg-[#ADD132]/30 transition-all duration-300 group-hover:w-14" />

                    <span className="text-[8px] font-bold tracking-[0.18em] text-[#9AA39A] dark:text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                </a>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      <section
        id="contact-form"
        className="relative overflow-hidden px-4 py-16 sm:px-7 sm:py-20 md:px-10 md:py-24 lg:px-12"
      >
        <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ADD132]/5 blur-[120px] dark:bg-[#ADD132]/[0.025]" />

        <div className="relative mx-auto max-w-[1350px]">

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 xl:gap-24">

            {/* FORM INTRO */}

            <div className="lg:sticky lg:top-28">

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#ADD132]" />

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6F8D08] dark:text-[#ADD132] sm:text-[10px]">
                  Start a Conversation
                </p>
              </div>

              <h2 className="mt-5 max-w-xl text-[34px] font-black leading-[0.98] tracking-[-0.055em] text-[#152019] dark:text-white sm:text-5xl md:text-6xl">
                Tell us what you need to protect.
              </h2>

              <p className="mt-6 max-w-xl text-[12px] leading-6 text-[#687368] dark:text-white/45 sm:text-sm sm:leading-7 md:text-base md:leading-8">
                Whether you're protecting digital content, intellectual
                property, a brand or an online platform, share a few details
                and we'll understand your requirements.
              </p>

              {/* Reasons */}

              <div className="mt-8 border-t border-[#253125]/10 dark:border-white/[0.08]">
                {reasons.map((reason, index) => (
                  <div
                    key={reason}
                    className="group flex items-center gap-3 border-b border-[#253125]/10 py-3.5 dark:border-white/[0.08] sm:py-4"
                  >
                    <span className="w-5 text-[8px] font-bold tracking-[0.15em] text-[#9AA39A] dark:text-white/20">
                      0{index + 1}
                    </span>

                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-[#6F8D08] transition-transform duration-300 group-hover:scale-110 dark:text-[#ADD132]"
                    />

                    <span className="text-[11px] text-[#536053] dark:text-white/55 sm:text-sm">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>

              {/* Conversation Note */}

              <div className="mt-8 border-l-2 border-[#ADD132] bg-[#ADD132]/5 p-4 dark:bg-[#ADD132]/[0.035] sm:mt-10 sm:p-5">
                <div className="flex items-start gap-3">

                  <Clock3
                    size={18}
                    className="mt-0.5 shrink-0 text-[#6F8D08] dark:text-[#ADD132]"
                  />

                  <div>
                    <p className="text-xs font-bold text-[#172017] dark:text-white sm:text-sm">
                      Let's start with a conversation.
                    </p>

                    <p className="mt-1.5 text-[10px] leading-5 text-[#687368] dark:text-white/40 sm:text-xs sm:leading-6">
                      Share your requirements and we'll discuss the next
                      steps with you.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* FORM */}

            <div className="relative">

              <div className="pointer-events-none absolute -inset-5 bg-[#ADD132]/5 blur-3xl dark:bg-[#ADD132]/[0.025]" />

              <form
                onSubmit={handleSubmit}
                className="relative overflow-hidden border border-[#253125]/10 bg-white dark:border-white/[0.08] dark:bg-[#0A0E0A]"
              >

                <div className="h-1 w-full bg-[#ADD132]" />

                <div className="p-5 sm:p-7 md:p-9 lg:p-10">

                  {/* Form Header */}

                  <div className="flex items-start justify-between gap-5 border-b border-[#253125]/10 pb-6 dark:border-white/[0.08] sm:pb-7">

                    <div>
                      <p className="text-lg font-black tracking-[-0.03em] text-[#172017] dark:text-white sm:text-xl">
                        Send an enquiry
                      </p>

                      <p className="mt-1.5 text-[9px] text-[#788278] dark:text-white/35 sm:text-xs">
                        All fields marked with * are required.
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#6F8D08]/20 bg-[#ADD132]/10 dark:border-[#ADD132]/20">
                      <Send
                        size={18}
                        className="text-[#6F8D08] dark:text-[#ADD132]"
                      />
                    </div>

                  </div>

                  {/* Success */}

                  {submitted && (
                    <div className="mt-6 flex items-start gap-3 border border-[#6F8D08]/20 bg-[#ADD132]/10 p-4 dark:border-[#ADD132]/20 dark:bg-[#ADD132]/10">

                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#6F8D08] dark:text-[#C7EB45]"
                      />

                      <div>
                        <p className="text-xs font-bold text-[#6F8D08] dark:text-[#C7EB45] sm:text-sm">
                          Message received
                        </p>

                        <p className="mt-1 text-[10px] leading-5 text-[#687368] dark:text-white/45 sm:text-sm">
                          Thank you for contacting TrackOwls. Your enquiry has
                          been submitted.
                        </p>
                      </div>

                    </div>
                  )}

                  {/* Form Fields */}

                  <div className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6">

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

                    <FormField label="Phone Number" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className={inputClass}
                      />
                    </FormField>

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
                    </div>

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

                  <div className="mt-6 sm:mt-7">
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 bg-[#ADD132] px-5 py-3.5 text-xs font-bold text-[#101800] transition-all duration-300 hover:bg-[#C7EB45] hover:shadow-[0_0_35px_rgba(173,209,50,0.18)] sm:py-4 sm:text-sm"
                    >
                      Send Message

                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </button>
                  </div>

                  <p className="mt-3 text-center text-[8px] leading-5 text-[#8A948A] dark:text-white/25 sm:mt-4 sm:text-xs">
                    By submitting this form, you agree to be contacted
                    regarding your enquiry.
                  </p>

                </div>
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
        className="border-y border-[#1C281C]/10 bg-[#EEF3E9] px-4 py-14 dark:border-white/[0.06] dark:bg-[#080C08] sm:px-7 sm:py-20 md:px-10 md:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1350px]">

          <div className="grid overflow-hidden border border-[#253125]/10 bg-white dark:border-white/[0.08] dark:bg-[#0A0E0A] lg:grid-cols-[0.72fr_1.28fr]">

            {/* DETAILS */}

            <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">

              <div className="absolute left-0 top-0 h-full w-1 bg-[#ADD132]" />

              <div className="flex h-12 w-12 items-center justify-center border border-[#6F8D08]/20 bg-[#ADD132]/10 dark:border-[#ADD132]/20 sm:h-14 sm:w-14">
                <MapPin
                  size={23}
                  className="text-[#6F8D08] dark:text-[#ADD132]"
                />
              </div>

              <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.24em] text-[#6F8D08] dark:text-[#ADD132] sm:text-[10px]">
                Our Office
              </p>

              <h2 className="mt-3 text-[28px] font-black leading-[1.02] tracking-[-0.045em] text-[#152019] dark:text-white sm:text-4xl md:text-5xl">
                Coimbatore, Tamil Nadu
              </h2>

              <p className="mt-5 text-xs leading-6 text-[#687368] dark:text-white/45 sm:text-sm sm:leading-7">
                TrackOwls Anti-Piracy Private Limited
              </p>

              <p className="mt-2 text-[11px] leading-6 text-[#7A847A] dark:text-white/35 sm:text-sm sm:leading-7">
                201, First Floor,
                <br />
                Paradise Garden,
                <br />
                Coimbatore,
                <br />
                Tamil Nadu, India.
              </p>

              <div className="mt-7 flex items-center gap-2.5 text-[10px] text-[#687368] dark:text-white/45 sm:text-sm">
                <Globe
                  size={16}
                  className="text-[#6F8D08] dark:text-[#ADD132]"
                />

                Serving digital businesses globally
              </div>
            </div>

            {/* MAP VISUAL */}

            <div className="relative min-h-[300px] overflow-hidden border-t border-[#253125]/10 dark:border-white/[0.07] sm:min-h-[370px] md:min-h-[430px] lg:border-l lg:border-t-0">

              <div
                className="absolute inset-0 opacity-30 dark:opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(173,209,50,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.16) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,209,50,0.13),transparent_58%)]" />

              <div className="absolute left-[12%] top-[25%] h-px w-[75%] rotate-[17deg] bg-[#6F8D08]/15 dark:bg-[#ADD132]/15" />

              <div className="absolute left-[18%] top-[60%] h-px w-[70%] -rotate-[24deg] bg-[#6F8D08]/15 dark:bg-[#ADD132]/15" />

              <div className="absolute left-[43%] top-[7%] h-[86%] w-px rotate-[22deg] bg-[#6F8D08]/10 dark:bg-[#ADD132]/10" />

              <div className="absolute left-[64%] top-[8%] h-[82%] w-px -rotate-[30deg] bg-[#6F8D08]/10 dark:bg-[#ADD132]/10" />

              {/* Location */}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#6F8D08]/20 bg-[#ADD132]/5 dark:border-[#ADD132]/20">

                  <div className="absolute inset-3 rounded-full border border-[#6F8D08]/20 dark:border-[#ADD132]/20" />

                  <div className="absolute inset-0 animate-ping rounded-full border border-[#ADD132]/20" />

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ADD132] shadow-[0_0_35px_rgba(173,209,50,0.35)]">
                    <MapPin
                      size={23}
                      className="text-black"
                    />
                  </div>
                </div>

                <div className="absolute left-1/2 top-[115%] -translate-x-1/2 whitespace-nowrap border border-[#253125]/10 bg-white/90 px-4 py-2 text-xs font-semibold text-[#536053] shadow-lg backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0A0E0A]/90 dark:text-white/60">
                  Coimbatore, India
                </div>
              </div>

              {/* Location Label */}

              <div className="absolute bottom-5 left-5 border border-[#253125]/10 bg-white/85 px-4 py-3 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0A0E0A]/90 sm:bottom-7 sm:left-7">

                <p className="text-[8px] uppercase tracking-[0.18em] text-[#7D877D] dark:text-white/25 sm:text-[9px]">
                  Location
                </p>

                <p className="mt-1 text-xs font-bold text-[#172017] dark:text-white sm:text-sm">
                  TrackOwls HQ
                </p>
              </div>

              <div className="absolute right-5 top-5 hidden border border-[#253125]/10 bg-white/70 px-3 py-2 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0A0E0A]/80 sm:block">

                <p className="text-[8px] uppercase tracking-[0.15em] text-[#7D877D] dark:text-white/25">
                  Digital Protection
                </p>

                <p className="mt-1 text-[10px] font-bold text-[#6F8D08] dark:text-[#ADD132]">
                  GLOBAL
                </p>

              </div>
            </div>
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
  rounded-none
  border
  border-[#253125]/10
  bg-[#F8FAF5]
  px-4
  py-3
  text-[11px]
  text-[#172017]
  outline-none
  transition-all
  duration-300
  placeholder:text-[#A0AAA0]
  focus:border-[#6F8D08]/50
  focus:ring-2
  focus:ring-[#ADD132]/10
  dark:border-white/[0.08]
  dark:bg-[#070A07]
  dark:text-white
  dark:placeholder:text-white/20
  dark:focus:border-[#ADD132]/50
  sm:px-4
  sm:py-3.5
  sm:text-sm
`;

export default Contact;