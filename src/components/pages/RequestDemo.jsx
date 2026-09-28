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

  return (
    <div className="min-h-screen overflow-hidden bg-[#070A07] text-white">
      {/* HERO */}
      <section className="relative px-6 pb-24 pt-20 sm:px-10 lg:px-16">
        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(173,209,50,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-[#ADD132]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT */}
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#ADD132]/25 bg-[#ADD132]/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_12px_#ADD132]" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C7EB45]">
                  Request a Demo
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                See digital
                <span className="block text-[#ADD132]">
                  protection in action.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                Discover how TrackOwls approaches anti-piracy, IP protection,
                brand protection and digital intelligence through a
                personalized product demonstration.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#demo-form"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#ADD132] px-6 py-3.5 font-semibold text-black transition-all duration-300 hover:bg-[#C7EB45] hover:shadow-[0_0_35px_rgba(173,209,50,0.2)]"
                >
                  Request Your Demo
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <Link
                  to="/technology"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 font-medium text-white transition hover:border-[#ADD132]/40 hover:bg-white/[0.03]"
                >
                  Explore Technology
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              {/* Small trust points */}
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2
                    size={16}
                    className="text-[#ADD132]"
                  />
                  Personalized walkthrough
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2
                    size={16}
                    className="text-[#ADD132]"
                  />
                  Business-focused discussion
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-[#ADD132]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B100B] p-7 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Live Demonstration
                    </p>

                    <p className="mt-2 text-lg font-semibold">
                      Protection Intelligence
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ADD132]/20 bg-[#ADD132]/10">
                    <MonitorPlay
                      size={23}
                      className="text-[#ADD132]"
                    />
                  </div>
                </div>

                {/* Main visual */}
                <div className="relative mt-7 h-[330px] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#070A07]">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(173,209,50,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.12) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Radar */}
                  <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ADD132]/15">
                    <div className="absolute inset-8 rounded-full border border-[#ADD132]/20" />
                    <div className="absolute inset-16 rounded-full border border-[#ADD132]/25" />

                    <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom bg-gradient-to-t from-transparent to-[#ADD132]" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#ADD132]/30 bg-[#ADD132]/10 shadow-[0_0_40px_rgba(173,209,50,0.12)]">
                        <Shield
                          size={35}
                          className="text-[#ADD132]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Signal cards */}
                  <div className="absolute left-5 top-6 rounded-xl border border-white/[0.08] bg-[#0B100B]/90 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_10px_#ADD132]" />

                      <span className="text-xs text-slate-300">
                        Content Discovery
                      </span>
                    </div>
                  </div>

                  <div className="absolute right-5 top-20 rounded-xl border border-white/[0.08] bg-[#0B100B]/90 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_10px_#ADD132]" />

                      <span className="text-xs text-slate-300">
                        Threat Detection
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-6 rounded-xl border border-white/[0.08] bg-[#0B100B]/90 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_10px_#ADD132]" />

                      <span className="text-xs text-slate-300">
                        IP Intelligence
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-7 right-6 rounded-xl border border-white/[0.08] bg-[#0B100B]/90 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_10px_#ADD132]" />

                      <span className="text-xs text-slate-300">
                        Protection
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_10px_#ADD132]" />

                    <span className="text-xs text-slate-500">
                      Intelligent monitoring environment
                    </span>
                  </div>

                  <span className="text-xs font-medium text-[#ADD132]">
                    TrackOwls
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="border-y border-white/[0.06] bg-[#080C08] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADD132]">
              What To Expect
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              More than a product tour.
            </h2>

            <p className="mt-6 leading-7 text-slate-400">
              The demonstration is designed to help you understand how
              TrackOwls can fit into your digital protection requirements.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {demoBenefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-white/[0.07] bg-[#0A0E0A] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#ADD132]/25"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ADD132]/20 bg-[#ADD132]/10">
                      <Icon
                        size={25}
                        className="text-[#ADD132]"
                      />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.18em] text-slate-700">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEMO FORM */}
      <section
        id="demo-form"
        className="px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADD132]">
                Book Your Demo
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Let's understand your protection requirements.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Complete the form and share a little about your organization
                and what you would like to explore during the demonstration.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Personalized product walkthrough",
                  "Discussion around your digital environment",
                  "Explore relevant TrackOwls capabilities",
                  "Understand possible protection workflows",
                  "Ask questions directly with the team",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#ADD132]"
                    />

                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-[#ADD132]/15 bg-[#ADD132]/5 p-6">
                <div className="flex items-start gap-4">
                  <CalendarDays
                    size={22}
                    className="mt-1 shrink-0 text-[#ADD132]"
                  />

                  <div>
                    <p className="font-semibold">
                      Request a convenient demo
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Tell us your requirements and preferred availability.
                      Our team can follow up with the next steps.
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
                      Request a TrackOwls Demo
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Tell us about your organization.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ADD132]/20 bg-[#ADD132]/10">
                    <CalendarDays
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
                        Demo request received
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Thank you. Your request has been submitted
                        successfully.
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
                      className="w-full rounded-xl border border-white/[0.08] bg-[#070A07] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-[#ADD132]/50 focus:ring-2 focus:ring-[#ADD132]/10"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-300"
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

                  {/* WEBSITE */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="website"
                      className="mb-2 block text-sm font-medium text-slate-300"
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
                      className="w-full rounded-xl border border-white/[0.08] bg-[#070A07] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-[#ADD132]/50 focus:ring-2 focus:ring-[#ADD132]/10"
                    />
                  </div>

                  {/* INTEREST */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="interest"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      What would you like to explore? *
                    </label>

                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-white/[0.08] bg-[#070A07] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#ADD132]/50 focus:ring-2 focus:ring-[#ADD132]/10"
                    >
                      <option value="" disabled>
                        Select a protection area
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

                      <option value="Multiple Areas">
                        Multiple Areas
                      </option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Tell us about your requirements *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What would you like to see during the demo?"
                      className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#070A07] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-[#ADD132]/50 focus:ring-2 focus:ring-[#ADD132]/10"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#ADD132] px-6 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#C7EB45] hover:shadow-[0_0_30px_rgba(173,209,50,0.18)]"
                >
                  Request Demo

                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-slate-600">
                  By submitting this form, you agree to be contacted regarding
                  your demo request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* PROTECTION AREAS */}
      <section className="border-y border-white/[0.06] bg-[#080C08] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADD132]">
                What We Can Explore
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                One platform. Multiple protection needs.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Your demonstration can focus on the areas most relevant to
                your organization.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {protectionAreas.map((area, index) => (
                <div
                  key={area}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-[#0A0E0A] p-5 transition hover:border-[#ADD132]/25"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#ADD132]/20 bg-[#ADD132]/10 text-sm font-bold text-[#ADD132]">
                    0{index + 1}
                  </div>

                  <span className="font-medium text-slate-300 transition group-hover:text-white">
                    {area}
                  </span>

                  <ArrowRight
                    size={16}
                    className="ml-auto text-slate-700 transition group-hover:translate-x-1 group-hover:text-[#ADD132]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#ADD132]/15 bg-gradient-to-br from-[#0D130D] to-[#080B08] p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ADD132]/10 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_0.7fr]">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ADD132]/20 bg-[#ADD132]/10">
                  <Globe
                    size={27}
                    className="text-[#ADD132]"
                  />
                </div>

                <h2 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  Built for a connected digital world.
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-slate-400">
                  Explore how TrackOwls can help your organization improve
                  visibility across the digital environments where content,
                  brands and intellectual property can appear.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-xs text-slate-400">
                    Digital Content
                  </span>

                  <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-xs text-slate-400">
                    Intellectual Property
                  </span>

                  <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-xs text-slate-400">
                    Brand Protection
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-[#ADD132]/15">
                  <div className="absolute inset-8 rounded-full border border-[#ADD132]/15" />

                  <div className="absolute inset-16 rounded-full border border-[#ADD132]/20" />

                  <div className="absolute h-px w-full bg-[#ADD132]/15" />

                  <div className="absolute h-full w-px bg-[#ADD132]/15" />

                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#ADD132]/30 bg-[#ADD132]/10">
                    <LockKeyhole
                      size={33}
                      className="text-[#ADD132]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#ADD132]/20 bg-[#ADD132] px-8 py-14 text-black sm:px-12 lg:px-16">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/60">
                TrackOwls Demo
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Ready to explore TrackOwls?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-7 text-black/65">
                Request a personalized demonstration and discover a structured
                approach to digital protection.
              </p>
            </div>

            <a
              href="#demo-form"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-black px-7 py-4 font-semibold text-white transition hover:bg-[#101410]"
            >
              Request Demo
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

export default RequestDemo;