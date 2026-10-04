import React from "react";
import { ArrowUpRight } from "lucide-react";

const whyTrackOwls = [
  {
    number: "01",
    title: "One partner",
    text: "One partner for content and brand protection.",
  },
  {
    number: "02",
    title: "Human review",
    text: "Human review before every takedown, so no wrongful claims.",
  },
  {
    number: "03",
    title: "Regional focus",
    text: "Made for India and regional-language content.",
  },
  {
    number: "04",
    title: "Authorization",
    text: "Written authorization before we act for you.",
  },
  {
    number: "05",
    title: "Transparent reporting",
    text: "Honest reports, including what we could not remove.",
  },
  {
    number: "06",
    title: "Confidential handling",
    text: "Confidential handling of your files and data.",
  },
];

const WhyTrackOwls = () => {
  return (
    <section className="bg-white py-20 dark:bg-[#070A07] sm:py-24 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">

        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-7">
            <p className="about-manrope text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#6F8D08] dark:text-[#ADD132] sm:text-xs">
              Why TrackOwls
            </p>

            <h2 className="mt-5 max-w-4xl text-[40px] font-extrabold leading-[0.93] tracking-[-0.06em] text-[#152019] dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Protection built around

              <br />

              <span className="text-[#789900] dark:text-[#ADD132]">
                visibility and trust.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="about-manrope max-w-xl text-[15px] leading-8 text-[#687368] dark:text-white/50 sm:text-lg sm:leading-9">
              TrackOwls combines monitoring, human review, authorization
              and transparent reporting into a structured protection
              workflow.
            </p>
          </div>

        </div>

        <div className="mt-14 border-t border-[#172117]/10 dark:border-white/[0.08] lg:mt-20">

          {whyTrackOwls.map((item) => (
            <div
              key={item.number}
              className="group grid gap-5 border-b border-[#172117]/10 py-8 transition-all duration-300 hover:bg-[#F7FAF4] dark:border-white/[0.08] dark:hover:bg-white/[0.015] sm:py-10 md:grid-cols-[90px_0.85fr_1.15fr] md:items-center md:gap-8 lg:py-12"
            >

              <div>
                <span className="about-manrope text-[11px] font-extrabold tracking-[0.18em] text-[#829082] dark:text-white/30">
                  {item.number}
                </span>
              </div>

              <h3 className="text-[24px] font-extrabold leading-tight tracking-[-0.04em] text-[#152019] dark:text-white sm:text-3xl lg:text-[34px]">
                {item.title}
              </h3>

              <div className="flex items-start gap-4">
                <p className="about-manrope max-w-2xl text-[15px] leading-7 text-[#667267] dark:text-white/55 sm:text-lg sm:leading-8">
                  {item.text}
                </p>

                <ArrowUpRight
                  size={21}
                  className="mt-1 hidden shrink-0 text-[#7A960F] opacity-30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100 dark:text-[#ADD132] sm:block"
                />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyTrackOwls;