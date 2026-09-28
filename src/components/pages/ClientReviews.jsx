import React from "react";
import { ArrowUpRight, Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Arun Kumar",
    role: "Media & Entertainment",
    company: "Digital Content Platform",
    initials: "AK",
    review:
      "TrackOwls gave us a much clearer view of where our content was appearing online. The intelligence and monitoring approach helped our team respond faster to potential piracy.",
  },
  {
    name: "Priya Sharma",
    role: "Brand Protection",
    company: "E-Commerce Brand",
    initials: "PS",
    review:
      "The visibility across different digital platforms is impressive. TrackOwls makes it easier to identify suspicious activity and understand potential risks to our brand.",
  },
  {
    name: "Rahul Menon",
    role: "Digital Operations",
    company: "Technology Company",
    initials: "RM",
    review:
      "We were looking for a more structured way to monitor our digital presence. TrackOwls provides a clean intelligence layer that helps our team discover and investigate threats.",
  },
];

function ClientReviews() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7F0] py-24 text-[#101510] dark:bg-[#050705] dark:text-white sm:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[15%] h-[300px] w-[300px] rounded-full bg-[#ADD132]/10 blur-[120px] dark:bg-[#ADD132]/5" />
        <div className="absolute bottom-[5%] right-[8%] h-[350px] w-[350px] rounded-full bg-[#ADD132]/10 blur-[140px] dark:bg-[#ADD132]/5" />

        <div
          className="absolute right-0 top-0 h-full w-[45%] opacity-[0.12] dark:opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(90,120,45,0.45) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#8BAA20] dark:bg-[#ADD132]" />

            <span className="text-[9px] font-black uppercase tracking-[0.38em] text-[#68755F] dark:text-[#ADD132]">
              Client Reviews
            </span>

            <span className="h-px w-10 bg-[#8BAA20] dark:bg-[#ADD132]" />
          </div>

          <h2 className="text-[38px] font-black leading-[0.95] tracking-[-0.055em] sm:text-[52px] lg:text-[64px]">
            Trusted by teams
            <br />
            <span className="text-[#789900] dark:text-[#ADD132]">
              protecting what matters.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[600px] text-[12px] leading-6 text-[#6D766C] dark:text-white/40 sm:text-[13px]">
            Real-world digital protection starts with visibility, intelligence,
            and the confidence to act.
          </p>
        </div>

        {/* Review Cards */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className="group relative overflow-hidden rounded-[26px] border border-[#273326]/10 bg-white/80 p-7 shadow-[0_20px_60px_rgba(30,50,20,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ADD132]/40 hover:shadow-[0_25px_70px_rgba(80,110,20,0.12)] dark:border-white/[0.08] dark:bg-[#0A1009]/80 dark:shadow-[0_20px_60px_rgba(0,0,0,0.18)] dark:hover:border-[#ADD132]/30"
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#ADD132] transition-all duration-500 group-hover:w-full" />

              {/* Quote */}
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#7D9F00]/15 bg-[#ADD132]/10 text-[#6F8D08] dark:border-[#ADD132]/15 dark:text-[#ADD132]">
                  <Quote size={18} />
                </div>

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={11}
                      fill="currentColor"
                      className="text-[#91AD28] dark:text-[#ADD132]"
                    />
                  ))}
                </div>
              </div>

              {/* Review */}
              <p className="mt-7 min-h-[150px] text-[13px] leading-7 text-[#515C50] dark:text-white/55">
                “{review.review}”
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-[#172117]/8 dark:bg-white/[0.08]" />

              {/* Client */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#152014] text-[10px] font-black text-[#ADD132] dark:bg-[#ADD132] dark:text-[#101800]">
                    {review.initials}
                  </div>

                  <div>
                    <h3 className="text-[11px] font-black text-[#172017] dark:text-white">
                      {review.name}
                    </h3>

                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#7D8779] dark:text-white/30">
                      {review.role}
                    </p>
                  </div>
                </div>

                <div className="hidden text-right sm:block">
                  <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#7D8779] dark:text-white/25">
                    {review.company}
                  </p>
                </div>
              </div>

              {/* Number */}
              <div className="absolute bottom-5 right-6 text-[42px] font-black leading-none tracking-[-0.08em] text-[#152014]/[0.035] dark:text-white/[0.025]">
                0{index + 1}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[22px] border border-[#273326]/10 bg-white/65 px-6 py-5 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.025] sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ADD132]/10 text-[#6F8D08] dark:text-[#ADD132]">
              <Star size={15} fill="currentColor" />
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#394337] dark:text-white/70">
                Built around trust
              </p>

              <p className="mt-1 text-[8px] text-[#7B857B] dark:text-white/30">
                Intelligence that helps teams protect their digital presence.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="group inline-flex items-center gap-3 rounded-full border border-[#6F8D08]/20 bg-[#ADD132]/10 px-5 py-3 text-[8px] font-black uppercase tracking-[0.18em] text-[#5D7607] transition-all hover:border-[#ADD132]/50 hover:bg-[#ADD132]/20 dark:border-[#ADD132]/20 dark:text-[#ADD132]"
          >
            Become a Client

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ADD132] text-[#101800] transition-transform group-hover:rotate-45">
              <ArrowUpRight size={12} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ClientReviews;