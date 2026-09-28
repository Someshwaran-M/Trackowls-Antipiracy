import React, { useState } from "react";
import { ChevronDown, ArrowUpRight, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What is TrackOwls?",
    answer:
      "TrackOwls is a digital intelligence and anti-piracy platform designed to help organizations discover, monitor, analyze, and respond to threats across the digital ecosystem.",
  },
  {
    question: "What types of digital threats can TrackOwls monitor?",
    answer:
      "TrackOwls can help monitor unauthorized content, suspicious websites, social platforms, streaming platforms, marketplaces, digital media, and other online surfaces where potential threats or misuse may appear.",
  },
  {
    question: "How does TrackOwls help protect digital content?",
    answer:
      "TrackOwls brings together digital signals from multiple sources, helping teams identify potentially unauthorized usage, investigate relevant activity, and take informed protection measures.",
  },
  {
    question: "Can TrackOwls monitor multiple digital platforms?",
    answer:
      "Yes. The platform is designed around visibility across multiple digital surfaces, including websites, social platforms, OTT and video environments, e-commerce, news and media, and other online channels.",
  },
  {
    question: "How does the threat detection process work?",
    answer:
      "TrackOwls follows an intelligence-driven workflow: discover relevant digital signals, detect potential threats, analyze the available information, and support the appropriate protection response.",
  },
  {
    question: "Is TrackOwls suitable for brands and businesses?",
    answer:
      "Yes. TrackOwls can support brands, media companies, content owners, digital platforms, publishers, gaming businesses, and organizations that need greater visibility into their digital presence.",
  },
  {
    question: "Does TrackOwls provide continuous monitoring?",
    answer:
      "TrackOwls is designed around continuous digital intelligence and monitoring so teams can maintain visibility over their digital ecosystem and identify relevant activity as it emerges.",
  },
  {
    question: "How can I request a TrackOwls demo?",
    answer:
      "You can use the Request Demo option on the website to share your requirements with the TrackOwls team. The team can then understand your protection needs and discuss the appropriate solution.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#F4F7F0] py-24 text-[#101510] dark:bg-[#050705] dark:text-white sm:py-32">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#ADD132]/10 blur-[130px] dark:bg-[#ADD132]/5" />

        <div className="absolute bottom-[5%] right-[5%] h-[350px] w-[350px] rounded-full bg-[#ADD132]/10 blur-[140px] dark:bg-[#ADD132]/5" />

        <div
          className="absolute right-0 top-0 h-full w-[45%] opacity-[0.12] dark:opacity-[0.06]"
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

      <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#8BAA20] dark:bg-[#ADD132]" />

            <span className="text-[9px] font-black uppercase tracking-[0.38em] text-[#68755F] dark:text-[#ADD132]">
              Frequently Asked Questions
            </span>

            <span className="h-px w-10 bg-[#8BAA20] dark:bg-[#ADD132]" />
          </div>

          <h2 className="text-[40px] font-black leading-[0.95] tracking-[-0.06em] sm:text-[52px] lg:text-[64px]">
            Questions about
            <br />
            <span className="text-[#789900] dark:text-[#ADD132]">
              digital protection?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[580px] text-[12px] leading-6 text-[#6D766C] dark:text-white/40 sm:text-[13px]">
            Find answers about TrackOwls, digital intelligence, anti-piracy
            monitoring, and protecting your online presence.
          </p>
        </div>

        {/* FAQ Layout */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          {/* Left Information */}
          <div className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[28px] border border-[#273326]/10 bg-white/75 p-7 shadow-[0_20px_60px_rgba(30,50,20,0.06)] backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0A1009]/80 dark:shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <div className="absolute right-[-45px] top-[-45px] h-32 w-32 rounded-full border border-[#ADD132]/15" />
              <div className="absolute right-[-20px] top-[-20px] h-20 w-20 rounded-full border border-[#ADD132]/15" />

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#7D9F00]/15 bg-[#ADD132]/10 text-[#6F8D08] dark:border-[#ADD132]/15 dark:text-[#ADD132]">
                <MessageCircle size={20} strokeWidth={1.5} />
              </div>

              <p className="mt-7 text-[9px] font-black uppercase tracking-[0.25em] text-[#71805F] dark:text-[#ADD132]">
                Need more information?
              </p>

              <h3 className="mt-3 text-[25px] font-black leading-tight tracking-[-0.04em] text-[#172017] dark:text-white">
                Let's talk about
                <br />
                your digital ecosystem.
              </h3>

              <p className="mt-4 text-[11px] leading-6 text-[#707A70] dark:text-white/35">
                Have a specific requirement or want to understand how TrackOwls
                can support your organization?
              </p>

              <button
                type="button"
                className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#ADD132] px-5 py-3 text-[8px] font-black uppercase tracking-[0.18em] text-[#101800] shadow-[0_12px_35px_rgba(110,140,20,0.16)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(110,140,20,0.25)]"
              >
                Contact TrackOwls

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0A1008] text-[#ADD132] transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={12} />
                </span>
              </button>
            </div>

            {/* Small Trust Detail */}
            <div className="mt-4 flex items-center justify-between rounded-[18px] border border-[#273326]/10 bg-white/55 px-5 py-4 backdrop-blur-xl dark:border-white/[0.07] dark:bg-white/[0.02]">
              <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#687267] dark:text-white/30">
                Digital Intelligence
              </span>

              <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.15em] text-[#6F8D08] dark:text-[#ADD132]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7D9F00] dark:bg-[#ADD132]" />
                Active
              </span>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-[20px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#ADD132]/35 bg-white shadow-[0_15px_45px_rgba(40,60,25,0.07)] dark:border-[#ADD132]/25 dark:bg-[#0B120A] dark:shadow-[0_15px_45px_rgba(0,0,0,0.16)]"
                      : "border-[#273326]/10 bg-white/60 hover:border-[#ADD132]/25 dark:border-white/[0.07] dark:bg-white/[0.025] dark:hover:border-[#ADD132]/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-[8px] font-black tracking-[0.2em] ${
                          isOpen
                            ? "text-[#789900] dark:text-[#ADD132]"
                            : "text-[#9AA397] dark:text-white/20"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`text-[12px] font-black sm:text-[13px] ${
                          isOpen
                            ? "text-[#172017] dark:text-white"
                            : "text-[#374036] dark:text-white/65"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-[#ADD132]/40 bg-[#ADD132] text-[#101800]"
                          : "border-[#273326]/10 bg-white text-[#6E786C] dark:border-white/10 dark:bg-white/[0.03] dark:text-white/40"
                      }`}
                    >
                      <ChevronDown size={14} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="border-t border-[#273326]/8 px-5 pb-6 pt-5 sm:px-6 dark:border-white/[0.07]">
                        <p className="max-w-[700px] pl-[34px] text-[11px] leading-6 text-[#697369] dark:text-white/40 sm:text-[12px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[22px] border border-[#273326]/10 bg-white/65 px-6 py-5 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.025] sm:flex-row sm:px-8">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[#3E493C] dark:text-white/65">
              Still have questions?
            </p>

            <p className="mt-1 text-[8px] text-[#7B857B] dark:text-white/30">
              Our team can help you understand the right protection approach.
            </p>
          </div>

          <button
            type="button"
            className="group inline-flex items-center gap-3 rounded-full border border-[#6F8D08]/20 bg-[#ADD132]/10 px-5 py-3 text-[8px] font-black uppercase tracking-[0.18em] text-[#5D7607] transition-all hover:border-[#ADD132]/50 hover:bg-[#ADD132]/20 dark:border-[#ADD132]/20 dark:text-[#ADD132]"
          >
            Talk to Our Team

            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;