import React from "react";

const WhoWeAre = () => {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-20">

          <div className="lg:col-span-5">
            <p className="about-manrope text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#6F8D08] dark:text-[#ADD132] sm:text-xs">
              Who We Are
            </p>

            <h2 className="mt-5 text-[38px] font-extrabold leading-[0.94] tracking-[-0.06em] text-[#152019] dark:text-white sm:text-5xl md:text-6xl">
              A new approach to

              <br />

              <span className="text-[#789900] dark:text-[#ADD132]">
                digital protection.
              </span>
            </h2>

            <div className="mt-8 h-px w-16 bg-[#ADD132]" />
          </div>

          <div className="lg:col-span-7">

            <p className="about-manrope text-[15px] leading-8 text-[#687368] dark:text-white/50 sm:text-lg sm:leading-9">
              The internet has transformed how content is created,
              distributed and consumed. At the same time, unauthorized
              copying, distribution and misuse can create significant
              challenges for digital businesses and content owners.
            </p>

            <p className="about-manrope mt-6 text-[15px] leading-8 text-[#687368] dark:text-white/50 sm:text-lg sm:leading-9">
              TrackOwls is designed around visibility, intelligence and
              protection — helping organizations understand their digital
              environment and identify potential threats affecting their
              content and intellectual property.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;