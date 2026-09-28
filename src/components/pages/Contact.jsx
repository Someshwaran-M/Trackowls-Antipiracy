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
    <div className="min-h-screen overflow-hidden bg-[#070A07] text-white">
      {/* HERO */}
      <section className="relative px-6 pb-24 pt-20 sm:px-10 lg:px-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(173,209,50,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-0 h-[430px] w-[650px] -translate-x-1/2 rounded-full bg-[#ADD132]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT */}
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#ADD132]/25 bg-[#ADD132]/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_12px_#ADD132]" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C7EB45]">
                  Contact TrackOwls
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Let's protect what
                <span className="block text-[#ADD132]">
                  matters digitally.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                Tell us about your content, intellectual property, brand or
                digital protection challenge. Our team can help you explore
                the right approach.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#ADD132] px-6 py-3.5 font-semibold text-black transition-all duration-300 hover:bg-[#C7EB45] hover:shadow-[0_0_35px_rgba(173,209,50,0.2)]"
                >
                  Start a Conversation
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 font-medium text-white transition hover:border-[#ADD132]/40 hover:bg-white/[0.03]"
                >
                  Explore Solutions
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-[#ADD132]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B100B] p-7 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      TrackOwls
                    </p>

                    <p className="mt-2 text-lg font-semibold">
                      Protection Intelligence
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ADD132]/20 bg-[#ADD132]/10">
                    <Shield
                      size={24}
                      className="text-[#ADD132]"
                    />
                  </div>
                </div>

                <div className="relative mt-8 flex h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[#070A07]">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(173,209,50,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.12) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  <div className="absolute h-64 w-64 rounded-full border border-[#ADD132]/15" />

                  <div className="absolute h-48 w-48 rounded-full border border-[#ADD132]/20" />

                  <div className="absolute h-32 w-32 rounded-full border border-[#ADD132]/25" />

                  <div className="absolute h-px w-[75%] bg-[#ADD132]/10" />

                  <div className="absolute h-[75%] w-px bg-[#ADD132]/10" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-[#ADD132]/30 bg-[#ADD132]/10 shadow-[0_0_50px_rgba(173,209,50,0.12)]">
                    <Shield
                      size={40}
                      className="text-[#ADD132]"
                    />
                  </div>

                  <span className="absolute left-[18%] top-[30%] h-2.5 w-2.5 rounded-full bg-[#ADD132] shadow-[0_0_15px_#ADD132]" />

                  <span className="absolute right-[20%] top-[37%] h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_15px_#ADD132]" />

                  <span className="absolute bottom-[25%] left-[30%] h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_15px_#ADD132]" />
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="text-lg font-semibold text-[#ADD132]">
                      24/7
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600">
                      Monitoring
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="text-lg font-semibold text-[#ADD132]">
                      Global
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600">
                      Visibility
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="text-lg font-semibold text-[#ADD132]">
                      Secure
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600">
                      Intelligence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="border-y border-white/[0.06] bg-[#080C08] px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-white/[0.07] bg-[#0A0E0A] p-6 transition-all duration-300 hover:border-[#ADD132]/25 hover:bg-[#0C110C]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#ADD132]/20 bg-[#ADD132]/10">
                    <Icon
                      size={21}
                      className="text-[#ADD132]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                      {item.title}
                    </p>

                    <p className="mt-2 break-words font-semibold text-white">
                      {item.value}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            {/* FORM INTRO */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADD132]">
                Start a Conversation
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Tell us what you need to protect.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Whether you're protecting digital content, intellectual
                property, a brand or an online platform, share a few details
                and we'll understand your requirements.
              </p>

              <div className="mt-10 space-y-4">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#ADD132]"
                    />

                    <span className="text-sm text-slate-300">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-[#ADD132]/15 bg-[#ADD132]/5 p-6">
                <div className="flex items-start gap-4">
                  <Clock3
                    size={21}
                    className="mt-1 shrink-0 text-[#ADD132]"
                  />

                  <div>
                    <p className="font-semibold">
                      Let's start with a conversation.
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Share your requirements and we'll discuss the next
                      steps with you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-[#ADD132]/5 blur-3xl" />

              <form
                onSubmit={handleSubmit}
                className="relative rounded-[2rem] border border-white/[0.08] bg-[#0A0E0A] p-7 sm:p-9"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">
                      Send an enquiry
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      All fields marked with * are required.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ADD132]/20 bg-[#ADD132]/10">
                    <Send
                      size={19}
                      className="text-[#ADD132]"
                    />
                  </div>
                </div>

                {submitted && (
                  <div className="mb-6 flex items-start gap-3 rounded-xl border border-[#ADD132]/20 bg-[#ADD132]/10 p-4">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#ADD132]"
                    />

                    <div>
                      <p className="font-semibold text-[#C7EB45]">
                        Message received
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        Thank you for contacting TrackOwls. Your enquiry has
                        been submitted.
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-300"
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
                      className="w-full rounded-xl border border-white/[0.08] bg-[#070A07] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-[#ADD132]/50 focus:ring-2 focus:ring-[#ADD132]/10"
                    />
                  </div>

                  {/* COMPANY */}
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full rounded-xl border border-white/[0.08] bg-[#070A07] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-[#ADD132]/50 focus:ring-2 focus:ring-[#ADD132]/10"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-white/[0.08] bg-[#070A07] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-[#ADD132]/50 focus:ring-2 focus:ring-[#ADD132]/10"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-slate-300"
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
                      className="w-full rounded-xl border border-white/[0.08] bg-[#070A07] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-[#ADD132]/50 focus:ring-2 focus:ring-[#ADD132]/10"
                    />
                  </div>

                  {/* SUBJECT */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      What can we help with? *
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-white/[0.08] bg-[#070A07] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#ADD132]/50 focus:ring-2 focus:ring-[#ADD132]/10"
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

                  {/* MESSAGE */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-300"
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
                      className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#070A07] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-[#ADD132]/50 focus:ring-2 focus:ring-[#ADD132]/10"
                    />
                  </div>
                </div>

                <div className="mt-7">
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#ADD132] px-6 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#C7EB45] hover:shadow-[0_0_30px_rgba(173,209,50,0.18)]"
                  >
                    Send Message

                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>

                <p className="mt-4 text-center text-xs leading-5 text-slate-600">
                  By submitting this form, you agree to be contacted regarding
                  your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section
        id="location"
        className="border-y border-white/[0.06] bg-[#080C08] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0A0E0A] lg:grid-cols-[0.75fr_1.25fr]">
            {/* DETAILS */}
            <div className="p-8 sm:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ADD132]/20 bg-[#ADD132]/10">
                <MapPin
                  size={25}
                  className="text-[#ADD132]"
                />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#ADD132]">
                Our Office
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Coimbatore, Tamil Nadu
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                TrackOwls Anti-Piracy Private Limited
              </p>

              <p className="mt-2 leading-7 text-slate-500">
                201, First Floor,
                <br />
                Paradise Garden,
                <br />
                Coimbatore,
                <br />
                Tamil Nadu, India.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
                <Globe
                  size={17}
                  className="text-[#ADD132]"
                />
                Serving digital businesses globally
              </div>
            </div>

            {/* MAP STYLE VISUAL */}
            <div className="relative min-h-[400px] overflow-hidden border-t border-white/[0.07] lg:border-l lg:border-t-0">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(173,209,50,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.16) 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,209,50,0.10),transparent_55%)]" />

              {/* Map lines */}
              <div className="absolute left-[15%] top-[28%] h-px w-[70%] rotate-[18deg] bg-[#ADD132]/15" />

              <div className="absolute left-[20%] top-[58%] h-px w-[65%] -rotate-[25deg] bg-[#ADD132]/15" />

              <div className="absolute left-[45%] top-[8%] h-[84%] w-px rotate-[22deg] bg-[#ADD132]/10" />

              <div className="absolute left-[62%] top-[10%] h-[80%] w-px -rotate-[30deg] bg-[#ADD132]/10" />

              {/* Location */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#ADD132]/20 bg-[#ADD132]/5">
                  <div className="absolute inset-3 rounded-full border border-[#ADD132]/20" />

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ADD132] shadow-[0_0_35px_rgba(173,209,50,0.35)]">
                    <MapPin
                      size={23}
                      className="text-black"
                    />
                  </div>
                </div>

                <div className="absolute left-1/2 top-[115%] -translate-x-1/2 whitespace-nowrap rounded-full border border-white/[0.08] bg-[#0A0E0A]/90 px-4 py-2 text-xs font-medium text-slate-300">
                  Coimbatore, India
                </div>
              </div>

              <div className="absolute bottom-7 left-7 rounded-xl border border-white/[0.08] bg-[#0A0E0A]/90 px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.15em] text-slate-600">
                  Location
                </p>

                <p className="mt-1 text-sm font-semibold">
                  TrackOwls HQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#ADD132]/20 bg-[#ADD132] px-8 py-14 text-black sm:px-12 lg:px-16">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/60">
                TrackOwls
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Your digital assets deserve visibility.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-7 text-black/65">
                Start a conversation with TrackOwls and explore a structured
                approach to digital protection.
              </p>
            </div>

            <a
              href="#contact-form"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-black px-7 py-4 font-semibold text-white transition hover:bg-[#101410]"
            >
              Contact Us
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;