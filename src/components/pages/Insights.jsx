import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Radar,
  ScanSearch,
  Globe,
  LockKeyhole,
  Activity,
  Search,
  CheckCircle2,
} from "lucide-react";

function Insights() {
  const insights = [
    {
      number: "01",
      category: "Anti-Piracy",
      title: "Understanding the modern digital piracy landscape",
      description:
        "Digital content can spread rapidly across websites, platforms and online communities. Understanding where unauthorized distribution can occur is the first step toward improving protection.",
      icon: Shield,
      readTime: "5 min read",
    },
    {
      number: "02",
      category: "Digital Intelligence",
      title: "Why digital visibility matters for IP protection",
      description:
        "Intellectual property protection starts with knowing where your digital assets appear. Structured monitoring can help organizations build a clearer picture of their online presence.",
      icon: Radar,
      readTime: "6 min read",
    },
    {
      number: "03",
      category: "Technology",
      title: "From monitoring to actionable intelligence",
      description:
        "Modern protection workflows need more than raw data. Discovery, detection and analysis can turn digital signals into intelligence that supports informed protection decisions.",
      icon: ScanSearch,
      readTime: "7 min read",
    },
    {
      number: "04",
      category: "Brand Protection",
      title: "The expanding digital surface of modern brands",
      description:
        "A brand's digital presence can extend across websites, marketplaces, social platforms and other online environments, creating a broader surface that requires visibility.",
      icon: Globe,
      readTime: "5 min read",
    },
    {
      number: "05",
      category: "Content Security",
      title: "Building a stronger digital protection workflow",
      description:
        "A structured workflow can connect discovery, verification, investigation and response to create a more consistent approach to digital content protection.",
      icon: LockKeyhole,
      readTime: "8 min read",
    },
    {
      number: "06",
      category: "Monitoring",
      title: "What continuous digital monitoring means",
      description:
        "Digital environments change constantly. Continuous monitoring can help organizations maintain awareness as new content, domains and distribution channels emerge.",
      icon: Activity,
      readTime: "4 min read",
    },
  ];

  const topics = [
    "Anti-Piracy",
    "IP Protection",
    "Brand Protection",
    "Digital Intelligence",
    "Threat Detection",
    "Online Monitoring",
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

        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[#ADD132]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* HERO CONTENT */}
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#ADD132]/25 bg-[#ADD132]/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_12px_#ADD132]" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C7EB45]">
                  TrackOwls Insights
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Intelligence for a
                <span className="block text-[#ADD132]">
                  changing digital world.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                Explore perspectives on anti-piracy, intellectual property,
                digital monitoring, brand protection and the technologies
                shaping digital security.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#latest-insights"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#ADD132] px-6 py-3.5 font-semibold text-black transition-all duration-300 hover:bg-[#C7EB45] hover:shadow-[0_0_35px_rgba(173,209,50,0.2)]"
                >
                  Explore Insights
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <Link
                  to="/technology"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 font-medium text-white transition hover:border-[#ADD132]/40 hover:bg-white/[0.03]"
                >
                  Our Technology
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-[#ADD132]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B100B] p-7 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Intelligence Hub
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Digital Protection Signals
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ADD132]/20 bg-[#ADD132]/10">
                    <Search size={21} className="text-[#ADD132]" />
                  </div>
                </div>

                {/* Intelligence visual */}
                <div className="relative mt-7 h-[330px] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#070A07]">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(173,209,50,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.12) 1px, transparent 1px)",
                      backgroundSize: "38px 38px",
                    }}
                  />

                  <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ADD132]/20">
                    <div className="absolute inset-5 rounded-full border border-[#ADD132]/20" />
                    <div className="absolute inset-10 rounded-full border border-[#ADD132]/25" />

                    <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom bg-gradient-to-t from-transparent to-[#ADD132]" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ADD132]/30 bg-[#ADD132]/10">
                        <Radar size={28} className="text-[#ADD132]" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-6 top-7 rounded-xl border border-white/[0.07] bg-[#0B100B]/90 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#ADD132]" />
                      <span className="text-xs text-slate-300">
                        Content Signal
                      </span>
                    </div>
                  </div>

                  <div className="absolute right-6 top-20 rounded-xl border border-white/[0.07] bg-[#0B100B]/90 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#ADD132]" />
                      <span className="text-xs text-slate-300">
                        Threat Signal
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 rounded-xl border border-white/[0.07] bg-[#0B100B]/90 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#ADD132]" />
                      <span className="text-xs text-slate-300">
                        IP Signal
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-7 right-7 rounded-xl border border-white/[0.07] bg-[#0B100B]/90 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#ADD132]" />
                      <span className="text-xs text-slate-300">
                        Brand Signal
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 text-xs text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-[#ADD132]" />
                  Digital intelligence environment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOPIC BAR */}
      <section className="border-y border-white/[0.06] bg-[#080C08] px-6 py-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-medium text-slate-500">
            Explore topics
          </p>

          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-[#ADD132]/30 hover:bg-[#ADD132]/5 hover:text-[#C7EB45]"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST INSIGHTS */}
      <section
        id="latest-insights"
        className="px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADD132]">
                Latest Insights
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Ideas, perspectives and digital intelligence.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              Practical perspectives on protecting content, brands and
              intellectual property in an evolving digital environment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0A0E0A] transition-all duration-500 hover:-translate-y-1 hover:border-[#ADD132]/25"
                >
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#ADD132]/5 blur-3xl transition duration-500 group-hover:bg-[#ADD132]/10" />

                  <div className="relative p-7">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ADD132]/20 bg-[#ADD132]/10">
                        <Icon
                          size={22}
                          className="text-[#ADD132]"
                        />
                      </div>

                      <span className="text-xs font-semibold tracking-[0.18em] text-slate-600">
                        {item.number}
                      </span>
                    </div>

                    <div className="mt-8 flex items-center gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ADD132]">
                        {item.category}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-slate-700" />

                      <span className="text-xs text-slate-600">
                        {item.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-7 border-t border-white/[0.07] pt-6">
                      <button
                        type="button"
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#ADD132]"
                      >
                        Read insight
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED INSIGHT */}
      <section className="border-y border-white/[0.06] bg-[#080C08] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0A0E0A] lg:grid-cols-[0.9fr_1.1fr]">
            {/* Visual */}
            <div className="relative min-h-[420px] overflow-hidden border-b border-white/[0.07] lg:border-b-0 lg:border-r">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(173,209,50,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.18) 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              <div className="absolute left-1/2 top-1/2 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#ADD132]/20">
                <div className="absolute inset-8 rounded-full border border-[#ADD132]/20" />
                <div className="absolute inset-16 rounded-full border border-[#ADD132]/30" />

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#ADD132]/30 bg-[#ADD132]/10">
                  <Shield size={36} className="text-[#ADD132]" />
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex justify-between">
                <span className="rounded-full border border-white/[0.08] bg-[#0A0E0A]/80 px-4 py-2 text-xs text-slate-400">
                  Featured Insight
                </span>

                <span className="rounded-full border border-[#ADD132]/20 bg-[#ADD132]/5 px-4 py-2 text-xs text-[#ADD132]">
                  Digital Protection
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-12 lg:p-14">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ADD132]">
                  Featured
                </span>

                <span className="h-px w-10 bg-[#ADD132]/30" />
              </div>

              <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Building digital resilience through better visibility.
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-slate-400">
                Digital protection is not limited to reacting after content
                has been misused. A visibility-first approach helps
                organizations understand their digital environment and
                develop structured protection workflows.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Understand your digital exposure",
                  "Identify relevant signals and threats",
                  "Organize intelligence into workflows",
                  "Create a consistent protection process",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#ADD132]"
                    />
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  to="/solutions"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#ADD132] px-6 py-3.5 font-semibold text-black transition hover:bg-[#C7EB45]"
                >
                  Explore Protection Solutions
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KNOWLEDGE AREAS */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADD132]">
                Knowledge Areas
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Stay informed about the digital landscape.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Our insights focus on the technologies, workflows and
                challenges shaping modern digital protection.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Shield,
                  title: "Anti-Piracy",
                  text: "Digital content protection and unauthorized distribution.",
                },
                {
                  icon: Radar,
                  title: "IP Intelligence",
                  text: "Visibility around intellectual property across digital environments.",
                },
                {
                  icon: Globe,
                  title: "Online Monitoring",
                  text: "Understanding changing digital environments and exposure.",
                },
                {
                  icon: LockKeyhole,
                  title: "Digital Security",
                  text: "Structured approaches to digital threats and protection.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-white/[0.07] bg-[#0A0E0A] p-6 transition hover:border-[#ADD132]/25"
                  >
                    <Icon
                      size={24}
                      className="text-[#ADD132] transition-transform duration-300 group-hover:scale-110"
                    />

                    <h3 className="mt-5 font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#ADD132]/20 bg-[#ADD132] px-8 py-14 text-black sm:px-12 lg:px-16">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/60">
                Go deeper
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Have a digital protection challenge?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-7 text-black/65">
                Connect with TrackOwls to discuss your content, brand or
                intellectual property protection requirements.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-black px-7 py-4 font-semibold text-white transition hover:bg-[#101410]"
            >
              Talk to TrackOwls
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Insights;