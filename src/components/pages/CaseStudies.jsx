import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Radar,
  ScanSearch,
  Globe,
  Film,
  ShoppingBag,
  Gamepad2,
  Music,
  CheckCircle2,
  Activity,
} from "lucide-react";

function CaseStudies() {
  const caseStudies = [
    {
      number: "01",
      category: "Media & Entertainment",
      title: "Protecting premium digital content",
      description:
        "A digital content ecosystem needs continuous visibility across online platforms where unauthorized copies, mirrors and redistributed content can appear.",
      icon: Film,
      metrics: [
        "Content discovery",
        "Continuous monitoring",
        "Threat identification",
      ],
    },
    {
      number: "02",
      category: "Gaming",
      title: "Monitoring digital game assets",
      description:
        "TrackOwls helps digital entertainment businesses improve visibility around game-related assets, unauthorized distribution channels and emerging online threats.",
      icon: Gamepad2,
      metrics: [
        "Asset monitoring",
        "Digital intelligence",
        "Risk visibility",
      ],
    },
    {
      number: "03",
      category: "Brands & E-Commerce",
      title: "Improving brand protection visibility",
      description:
        "Online brands can face unauthorized use of brand assets, product content and digital properties across multiple online environments.",
      icon: ShoppingBag,
      metrics: [
        "Brand monitoring",
        "Content discovery",
        "Digital investigation",
      ],
    },
    {
      number: "04",
      category: "Music & Publishing",
      title: "Finding unauthorized digital distribution",
      description:
        "Digital media businesses need a clear view of where their intellectual property appears online and where potential misuse may occur.",
      icon: Music,
      metrics: [
        "IP discovery",
        "Online monitoring",
        "Evidence visibility",
      ],
    },
  ];

  const capabilities = [
    {
      icon: Radar,
      title: "Discover",
      text: "Identify relevant digital content, assets and online environments.",
    },
    {
      icon: ScanSearch,
      title: "Detect",
      text: "Surface potential unauthorized use and suspicious digital activity.",
    },
    {
      icon: Activity,
      title: "Analyze",
      text: "Organize intelligence to understand the nature and context of a threat.",
    },
    {
      icon: Shield,
      title: "Protect",
      text: "Turn intelligence into structured protection workflows.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070A07] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 pt-20 pb-24 sm:px-10 lg:px-16">
        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(173,209,50,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#ADD132]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left */}
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#ADD132]/25 bg-[#ADD132]/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_12px_#ADD132]" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C7EB45]">
                  Case Studies
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Turning digital
                <span className="block text-[#ADD132]">
                  intelligence
                </span>
                into protection.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                Explore how TrackOwls approaches digital monitoring,
                intellectual property visibility and anti-piracy protection
                across modern digital environments.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#ADD132] px-6 py-3.5 font-semibold text-black transition-all duration-300 hover:bg-[#C7EB45] hover:shadow-[0_0_35px_rgba(173,209,50,0.2)]"
                >
                  Discuss Your Challenge
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 font-medium text-white transition hover:border-[#ADD132]/40 hover:bg-white/[0.03]"
                >
                  Explore Solutions
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-[#ADD132]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B100B]/90 p-7 shadow-2xl">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Protection Intelligence
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Digital Threat View
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ADD132]/20 bg-[#ADD132]/10">
                    <Shield className="text-[#ADD132]" size={21} />
                  </div>
                </div>

                {/* Radar */}
                <div className="relative mx-auto flex aspect-square max-w-[330px] items-center justify-center">
                  <div className="absolute inset-[8%] rounded-full border border-[#ADD132]/10" />
                  <div className="absolute inset-[20%] rounded-full border border-[#ADD132]/15" />
                  <div className="absolute inset-[32%] rounded-full border border-[#ADD132]/20" />
                  <div className="absolute h-px w-full bg-[#ADD132]/10" />
                  <div className="absolute h-full w-px bg-[#ADD132]/10" />

                  <div className="absolute h-[58%] w-[58%] rounded-full border border-[#ADD132]/30">
                    <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom bg-gradient-to-t from-[#ADD132]/0 to-[#ADD132]" />
                  </div>

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-[#ADD132]/30 bg-[#ADD132]/10 shadow-[0_0_45px_rgba(173,209,50,0.12)]">
                    <Shield size={40} className="text-[#ADD132]" />
                  </div>

                  <span className="absolute left-[18%] top-[28%] h-2.5 w-2.5 rounded-full bg-[#ADD132] shadow-[0_0_14px_#ADD132]" />
                  <span className="absolute right-[18%] top-[38%] h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_12px_#ADD132]" />
                  <span className="absolute bottom-[23%] left-[30%] h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_12px_#ADD132]" />
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/5 bg-white/[0.025] p-4">
                    <p className="text-xl font-semibold text-[#ADD132]">
                      24/7
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Monitoring
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.025] p-4">
                    <p className="text-xl font-semibold text-[#ADD132]">
                      Global
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Visibility
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.025] p-4">
                    <p className="text-xl font-semibold text-[#ADD132]">
                      Smart
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Intelligence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-white/[0.06] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADD132]">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Every digital challenge starts with visibility.
            </h2>
          </div>

          <div className="lg:pl-12">
            <p className="text-lg leading-8 text-slate-400">
              Digital content can move across platforms, websites, services
              and communities at extraordinary speed. TrackOwls focuses on
              building visibility into these environments so organizations
              can understand where their digital assets appear and identify
              potential threats.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              The examples below represent the types of digital protection
              challenges TrackOwls is designed to address.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADD132]">
                Digital Protection Scenarios
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Built for real-world digital environments.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              A closer look at the protection challenges faced by content
              owners, brands and digital businesses.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => {
              const Icon = study.icon;

              return (
                <article
                  key={study.number}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0A0E0A] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#ADD132]/25 hover:bg-[#0C110C] sm:p-9"
                >
                  <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#ADD132]/5 blur-3xl transition-all duration-500 group-hover:bg-[#ADD132]/10" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ADD132]/20 bg-[#ADD132]/10">
                        <Icon
                          size={25}
                          className="text-[#ADD132]"
                        />
                      </div>

                      <span className="text-sm font-semibold tracking-[0.15em] text-slate-600">
                        {study.number}
                      </span>
                    </div>

                    <p className="mt-9 text-xs font-semibold uppercase tracking-[0.2em] text-[#ADD132]">
                      {study.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {study.title}
                    </h3>

                    <p className="mt-5 leading-7 text-slate-400">
                      {study.description}
                    </p>

                    <div className="mt-8 border-t border-white/[0.07] pt-6">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        Protection Focus
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {study.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-xs text-slate-300"
                          >
                            <CheckCircle2
                              size={13}
                              className="text-[#ADD132]"
                            />
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-[#ADD132]">
                      Explore protection approach
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#080C08] px-6 py-24 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#ADD132]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADD132]">
              Protection Intelligence
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              From discovery to protection.
            </h2>

            <p className="mt-6 leading-7 text-slate-400">
              TrackOwls brings digital intelligence into a structured
              protection workflow.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Connecting line */}
            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[#ADD132]/30 to-transparent lg:block" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="relative rounded-3xl border border-white/[0.07] bg-[#0A0E0A] p-7 text-center"
                  >
                    <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#ADD132]/20 bg-[#ADD132]/10">
                      <Icon size={28} className="text-[#ADD132]" />

                      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#070A07] bg-[#ADD132] text-[10px] font-bold text-black">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-[#ADD132]/15 bg-gradient-to-br from-[#0D130D] to-[#080B08]">
            <div className="grid lg:grid-cols-[1fr_0.8fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ADD132]/10">
                  <Globe className="text-[#ADD132]" size={27} />
                </div>

                <h2 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  Visibility across the modern digital landscape.
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-slate-400">
                  From content platforms and social environments to websites
                  and digital marketplaces, protection requires an
                  understanding of where digital assets can appear.
                </p>

                <div className="mt-9">
                  <Link
                    to="/technology"
                    className="group inline-flex items-center gap-3 font-semibold text-[#ADD132]"
                  >
                    Explore our technology
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[350px] overflow-hidden border-t border-white/[0.06] lg:border-l lg:border-t-0">
                <div className="absolute inset-0 opacity-30">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(173,209,50,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,0.2) 1px, transparent 1px)",
                      backgroundSize: "42px 42px",
                    }}
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-64 w-64 rounded-full border border-[#ADD132]/15">
                    <div className="absolute inset-8 rounded-full border border-[#ADD132]/15" />
                    <div className="absolute inset-16 rounded-full border border-[#ADD132]/20" />

                    <div className="absolute left-1/2 top-1/2 h-[1px] w-[115%] -translate-x-1/2 bg-[#ADD132]/20" />
                    <div className="absolute left-1/2 top-1/2 h-[115%] w-[1px] -translate-y-1/2 bg-[#ADD132]/20" />

                    <div className="absolute left-[17%] top-[22%] h-3 w-3 rounded-full bg-[#ADD132] shadow-[0_0_20px_#ADD132]" />
                    <div className="absolute right-[17%] top-[34%] h-2.5 w-2.5 rounded-full bg-[#ADD132] shadow-[0_0_15px_#ADD132]" />
                    <div className="absolute bottom-[20%] left-[28%] h-2.5 w-2.5 rounded-full bg-[#ADD132] shadow-[0_0_15px_#ADD132]" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#ADD132]/30 bg-[#ADD132]/10">
                        <Radar size={34} className="text-[#ADD132]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#ADD132]/20 bg-[#ADD132] px-8 py-14 text-black sm:px-12 lg:px-16">
          <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/60">
                Start a conversation
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Have a digital protection challenge?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-7 text-black/65">
                Tell us about your content, brand or intellectual property
                challenge and explore how TrackOwls can help.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-black px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#101410]"
            >
              Contact TrackOwls
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

export default CaseStudies;