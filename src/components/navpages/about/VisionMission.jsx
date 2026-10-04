import React from "react";
import { Target, Eye } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="border-y border-[#172117]/10 bg-[#EDF3E8] py-20 dark:border-white/[0.06] dark:bg-white/[0.015] sm:py-24 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">

        <div className="grid md:grid-cols-2">

          {/* Mission */}
          <div className="border-b border-[#172117]/10 pb-12 dark:border-white/[0.08] md:border-b-0 md:border-r md:pb-0 md:pr-12 lg:pr-16">

            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ADD132]/10 text-[#6F8D08] dark:text-[#ADD132]">
                <Target size={22} />
              </span>

              <span className="about-manrope text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#6F8D08] dark:text-[#ADD132]">
                Our Mission
              </span>
            </div>

            <h3 className="mt-8 text-[32px] font-extrabold leading-[1] tracking-[-0.05em] text-[#152019] dark:text-white sm:text-4xl md:text-5xl">
              Make digital protection

              <span className="text-[#789900] dark:text-[#ADD132]">
                {" "}more intelligent.
              </span>
            </h3>

            <p className="about-manrope mt-6 max-w-xl text-[15px] leading-8 text-[#687368] dark:text-white/50 sm:text-lg sm:leading-9">
              Our mission is to help organizations gain better visibility
              into their digital footprint and build stronger protection
              around the content and intellectual property they value.
            </p>

          </div>

          {/* Vision */}
          <div className="pt-12 md:pl-12 md:pt-0 lg:pl-16">

            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ADD132]/10 text-[#6F8D08] dark:text-[#ADD132]">
                <Eye size={22} />
              </span>

              <span className="about-manrope text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#6F8D08] dark:text-[#ADD132]">
                Our Vision
              </span>
            </div>

            <h3 className="mt-8 text-[32px] font-extrabold leading-[1] tracking-[-0.05em] text-[#152019] dark:text-white sm:text-4xl md:text-5xl">
              A safer

              <span className="text-[#789900] dark:text-[#ADD132]">
                {" "}digital ecosystem.
              </span>
            </h3>

            <p className="about-manrope mt-6 max-w-xl text-[15px] leading-8 text-[#687368] dark:text-white/50 sm:text-lg sm:leading-9">
              We envision a digital environment where organizations can
              create, distribute and grow their digital assets with greater
              confidence and visibility.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;