import React from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  Fingerprint,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7F0] py-28 dark:bg-[#050705] sm:py-36">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] animate-pulse rounded-full bg-[#ADD132]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#ADD132]/8 blur-[160px]" />

      <div className="trackowls-container relative">

        {/* Top heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

          <div>

            <div className="mb-7 flex items-center gap-3">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ADD132] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ADD132]" />
              </span>

              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#6D900B] dark:text-[#ADD132]">
                About TrackOwls
              </span>

            </div>

            <h2 className="max-w-5xl text-[clamp(3.5rem,7.5vw,8rem)] font-black leading-[0.8] tracking-[-0.08em] text-[#152019] dark:text-white">

              Protection
              <br />

              starts with
              <br />

              <span className="relative inline-block text-[#6D900B] dark:text-[#ADD132]">
                visibility.

                <span className="absolute -bottom-3 left-0 h-[3px] w-full origin-left animate-[trackowls-line_3s_ease-in-out_infinite] bg-[#ADD132]" />
              </span>

            </h2>

          </div>

          <div className="lg:pb-3">
            <p className="max-w-xs text-sm leading-7 text-[#68736B] dark:text-white/40">
              We help organizations understand the digital ecosystem around
              their content, brands and intellectual property.
            </p>
          </div>

        </div>

        {/* Interactive story */}
        <div className="relative mt-24">

          {/* Animated vertical beam */}
          <div className="absolute bottom-0 left-[31px] top-0 hidden w-px overflow-hidden bg-black/[0.07] dark:bg-white/[0.08] sm:block">

            <div className="trackowls-beam absolute left-0 top-0 h-32 w-full bg-[#ADD132] shadow-[0_0_15px_#ADD132]" />

          </div>

          {/* 01 */}
          <div className="group relative grid gap-8 pb-20 sm:grid-cols-[64px_1fr] sm:gap-12">

            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#F4F7F0] dark:bg-[#050705]">

              <Eye className="h-5 w-5 text-[#6D900B] transition-transform duration-500 group-hover:scale-125 dark:text-[#ADD132]" />

            </div>

            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">

              <div>

                <span className="text-[10px] font-black tracking-[0.3em] text-[#89938B] dark:text-white/20">
                  01 / DISCOVER
                </span>

                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#152019] dark:text-white sm:text-4xl">
                  Know what
                  <br />
                  exists.
                </h3>

              </div>

              <p className="max-w-xl text-base leading-8 text-[#707A72] dark:text-white/40">
                The digital ecosystem is vast and constantly changing.
                TrackOwls brings visibility to the places, platforms and
                digital activity surrounding your valuable assets.
              </p>

            </div>

          </div>

          {/* 02 */}
          <div className="group relative grid gap-8 pb-20 sm:grid-cols-[64px_1fr] sm:gap-12">

            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#F4F7F0] dark:bg-[#050705]">

              <Fingerprint className="h-5 w-5 text-[#6D900B] transition-transform duration-500 group-hover:scale-125 dark:text-[#ADD132]" />

            </div>

            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">

              <div>

                <span className="text-[10px] font-black tracking-[0.3em] text-[#89938B] dark:text-white/20">
                  02 / UNDERSTAND
                </span>

                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#152019] dark:text-white sm:text-4xl">
                  Read the
                  <br />
                  signals.
                </h3>

              </div>

              <p className="max-w-xl text-base leading-8 text-[#707A72] dark:text-white/40">
                Signals become meaningful when they are connected. We help
                transform scattered digital activity into intelligence that
                provides a clearer picture of emerging risks.
              </p>

            </div>

          </div>

          {/* 03 */}
          <div className="group relative grid gap-8 sm:grid-cols-[64px_1fr] sm:gap-12">

            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#ADD132]/30 bg-[#F4F7F0] dark:bg-[#050705]">

              <ShieldCheck className="h-5 w-5 text-[#6D900B] transition-transform duration-500 group-hover:scale-125 dark:text-[#ADD132]" />

            </div>

            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">

              <div>

                <span className="text-[10px] font-black tracking-[0.3em] text-[#89938B] dark:text-white/20">
                  03 / PROTECT
                </span>

                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#152019] dark:text-white sm:text-4xl">
                  Act with
                  <br />
                  confidence.
                </h3>

              </div>

              <p className="max-w-xl text-base leading-8 text-[#707A72] dark:text-white/40">
                Intelligence becomes valuable when it leads to action.
                TrackOwls is built to help organizations respond to digital
                threats with greater clarity and control.
              </p>

            </div>

          </div>

        </div>

        {/* Premium About CTA */}
        <section className="relative mr-16 py-16">

          {/* Ambient glow */}
          <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#ADD132]/10 blur-[120px]" />

          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full blur-[100px]" />

          <div className="trackowls-container relative">

            <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">

              {/* Left content */}
              <div className="relative">

                <div className="mb-6 flex items-center gap-3">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#ADD132] shadow-[0_0_12px_rgba(173,209,50,0.7)]" />

                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#6D900B] dark:text-[#ADD132]">
                    Our Approach
                  </span>

                </div>

                <h3 className="max-w-3xl text-4xl font-black leading-[0.9] tracking-[-0.055em] text-[#152019] dark:text-white sm:text-5xl lg:text-6xl">

                  See it.

                  <span className="text-[#6D900B] dark:text-[#ADD132]">
                    {" "}Understand it.
                  </span>

                  <br />

                  Protect it.

                </h3>

                <p className="mt-7 max-w-xl text-sm leading-7 text-[#69746C] dark:text-white/40">
                  We turn digital complexity into meaningful intelligence,
                  helping organizations discover their digital presence,
                  understand emerging threats and protect what matters.
                </p>

              </div>

              {/* Right CTA */}
              <Link
                to="/about"
                className="group relative block w-full max-w-[420px]"
              >

                {/* Outer animated border */}
                <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#ADD132]/30 via-[#ADD132] to-[#ADD132]/20 opacity-60 transition-all duration-700 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between rounded-full bg-[#F3F6EE] p-2 dark:bg-[#070A07]">

                  {/* Arrow */}
                  <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#ADD132] text-[#152019] shadow-[0_10px_35px_rgba(173,209,50,0.2)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_15px_50px_rgba(173,209,50,0.35)]">

                    <ArrowUpRight className="relative z-10 h-6 w-6 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />

                    <span className="absolute inset-0 scale-0 rounded-full bg-white/30 transition-transform duration-500 group-hover:scale-100" />

                  </span>

                  {/* Text */}
                  <div className="flex-1 px-5 sm:px-7">

                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6D900B] dark:text-[#ADD132]">
                      Explore
                    </p>

                    <p className="mt-1 text-sm font-black uppercase tracking-[0.18em] text-[#152019] dark:text-white">
                      Learn More
                    </p>

                  </div>

                  {/* Mini visual */}
                  <div className="hidden items-center gap-1.5 pr-5 sm:flex">

                    <span className="h-7 w-1 rounded-full bg-[#ADD132]/20 transition-all duration-500 group-hover:h-10 group-hover:bg-[#ADD132]" />

                    <span className="h-10 w-1 rounded-full bg-[#ADD132]/40 transition-all duration-500 group-hover:h-6 group-hover:bg-[#ADD132]" />

                    <span className="h-5 w-1 rounded-full bg-[#ADD132]/70 transition-all duration-500 group-hover:h-9 group-hover:bg-[#ADD132]" />

                    <span className="h-8 w-1 rounded-full bg-[#ADD132] transition-all duration-500 group-hover:h-5" />

                  </div>

                </div>

              </Link>

            </div>

          </div>
        </section>

      </div>

      <style>{`
        @keyframes trackowls-line {
          0%,
          100% {
            transform: scaleX(0.25);
            opacity: 0.35;
          }

          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes trackowls-beam {
          0% {
            transform: translateY(-130px);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          70% {
            opacity: 1;
          }

          100% {
            transform: translateY(600px);
            opacity: 0;
          }
        }

        .trackowls-beam {
          animation: trackowls-beam 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default HomeAbout;