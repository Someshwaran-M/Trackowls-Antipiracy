import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
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
      value: "hello@trackowls.example",
      description: "Replace with your live business email",
      href: "mailto:hello@trackowls.example",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 00000 00000",
      description: "Replace with your live contact number",
      href: "#inquiry",
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
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F7FAF4] text-[#152019] transition-colors duration-300 dark:bg-[#070A07] dark:text-white">

      <style>{`
        .contact-video {
          animation: contactVideoZoom 16s ease-in-out infinite alternate;
        }

        @keyframes contactVideoZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.07);
          }
        }

        .contact-video-line {
          animation: contactVideoLine 5s ease-in-out infinite;
        }

        @keyframes contactVideoLine {
          0% {
            transform: translateX(-130%);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          70% {
            opacity: .65;
          }

          100% {
            transform: translateX(480%);
            opacity: 0;
          }
        }

        .contact-scan {
          animation: contactScan 5s ease-in-out infinite;
        }

        @keyframes contactScan {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }

          15% {
            opacity: .75;
          }

          50% {
            opacity: .35;
          }

          85% {
            opacity: .75;
          }

          100% {
            transform: translateY(700px);
            opacity: 0;
          }
        }

        .contact-pulse {
          animation: contactPulse 2s ease-in-out infinite;
        }

        @keyframes contactPulse {
          0%,
          100% {
            box-shadow:
              0 0 0 0 rgba(173, 209, 50, .16),
              0 0 0 1px rgba(173, 209, 50, .35);
          }

          50% {
            box-shadow:
              0 0 0 10px rgba(173, 209, 50, 0),
              0 0 0 1px rgba(173, 209, 50, .8);
          }
        }

        .contact-detail-line {
          transition:
            width .35s ease,
            opacity .35s ease;
        }

        .contact-detail-item:hover .contact-detail-line {
          width: 70px;
          opacity: 1;
        }

        .contact-detail-item {
          transition:
            background-color .35s ease,
            transform .35s ease;
        }

        .contact-detail-item:hover {
          background-color: rgba(173, 209, 50, .035);
        }

        .contact-map-grid {
          background-image:
            linear-gradient(rgba(173, 209, 50, .12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(173, 209, 50, .12) 1px, transparent 1px);
          background-size: 42px 42px;
        }

        .contact-map-ring {
          animation: contactMapRing 3s ease-out infinite;
        }

        @keyframes contactMapRing {
          0% {
            transform: scale(.65);
            opacity: .8;
          }

          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        .contact-map-ring-two {
          animation: contactMapRingTwo 3s ease-out infinite .9s;
        }

        @keyframes contactMapRingTwo {
          0% {
            transform: scale(.65);
            opacity: .65;
          }

          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-video,
          .contact-video-line,
          .contact-scan,
          .contact-pulse,
          .contact-map-ring,
          .contact-map-ring-two {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          CONTACT DETAILS
      ===================================================== */}

      <section className="relative min-h-[650px] overflow-hidden bg-[#020502]">

        {/* VIDEO */}

        <video
          src="/contact-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="contact-video absolute inset-0 h-full w-full object-cover"
        />

        {/* VIDEO OVERLAYS */}

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/35" />

        {/* LIME GLOW */}

        <div className="pointer-events-none absolute -left-[15%] top-[5%] h-[500px] w-[500px] rounded-full bg-[#ADD132]/10 blur-[150px]" />

        <div className="pointer-events-none absolute -right-[15%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-[#ADD132]/10 blur-[160px]" />

        {/* GRID */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(173,209,50,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,.12) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* SCAN */}

        <div className="contact-scan pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ADD132] to-transparent shadow-[0_0_18px_rgba(173,209,50,.8)]" />

        {/* MOVING TOP LINE */}

        <div className="absolute left-0 right-0 top-0 h-px overflow-hidden bg-white/10">
          <div className="contact-video-line h-full w-[25%] bg-gradient-to-r from-transparent via-[#ADD132] to-transparent" />
        </div>

        {/* CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1420px] items-end px-4 pb-14 pt-28 sm:px-7 sm:pb-16 md:px-10 lg:px-12 lg:pb-20">

          <div className="w-full">

            {/* LABEL */}

            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-12 bg-[#ADD132] sm:w-16" />

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#ADD132] sm:text-[10px]">
                Contact Details
              </p>
            </div>

            {/* DETAILS */}

            <div className="grid border-y border-white/10 md:grid-cols-3">

              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className={`
                      contact-detail-item group relative py-7 sm:py-8 md:px-7 md:py-9 lg:px-10
                      ${
                        index !== 0
                          ? "border-t border-white/10 md:border-l md:border-t-0"
                          : ""
                      }
                    `}
                  >

                    {/* ACTIVE LINE */}

                    <div className="absolute left-0 top-0 h-full w-px bg-[#ADD132]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="flex items-start gap-4">

                      {/* ICON */}

                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-black/20 text-[#ADD132] backdrop-blur-md transition-all duration-300 group-hover:border-[#ADD132]/40 group-hover:bg-[#ADD132]/10">
                        <Icon size={19} strokeWidth={1.6} />
                      </div>

                      <div className="min-w-0">

                        <div className="flex items-center gap-3">

                          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/40 sm:text-[10px]">
                            {item.title}
                          </p>

                          <ArrowUpRight
                            size={13}
                            className="text-[#ADD132]/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ADD132]"
                          />

                        </div>

                        <p className="mt-3 break-words text-sm font-bold tracking-[-0.02em] text-white sm:text-base">
                          {item.value}
                        </p>

                        <p className="mt-1.5 text-[10px] leading-5 text-white/40 sm:text-xs sm:leading-6">
                          {item.description}
                        </p>

                      </div>
                    </div>

                    {/* DETAIL LINE */}

                    <div className="mt-7 flex items-center gap-2 md:mt-8">
                      <span className="h-1 w-1 rounded-full bg-[#ADD132]" />

                      <span className="contact-detail-line h-px w-8 bg-[#ADD132]/40" />

                      <span className="text-[8px] font-bold tracking-[0.18em] text-white/20">
                        0{index + 1}
                      </span>
                    </div>

                  </a>
                );
              })}

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10">
          <div className="mx-auto flex max-w-[1420px] items-center justify-between px-4 py-4 sm:px-7 md:px-10 lg:px-12">
            <span className="text-[7px] font-black uppercase tracking-[0.23em] text-white/25">
              Contact Details
            </span>

            <span className="hidden text-[7px] font-black uppercase tracking-[0.2em] text-[#ADD132] sm:block">
              TrackOwls
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section
        id="location"
        className="relative overflow-hidden border-y border-[#1C281C]/10 bg-[#EEF3E9] px-4 py-14 dark:border-white/[0.06] dark:bg-[#080C08] sm:px-7 sm:py-20 md:px-10 md:py-24 lg:px-12"
      >

        <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#ADD132]/[0.045] blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#ADD132]/[0.04] blur-[150px]" />

        <div className="relative mx-auto max-w-[1350px]">

          {/* LOCATION FRAME */}

          <div className="grid overflow-hidden border border-[#253125]/10 bg-white dark:border-white/[0.08] dark:bg-[#0A0E0A] lg:grid-cols-[0.72fr_1.28fr]">

            {/* DETAILS */}

            <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">

              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#ADD132]" />

              <div className="flex h-12 w-12 items-center justify-center border border-[#6F8D08]/20 bg-[#ADD132]/10 dark:border-[#ADD132]/20 sm:h-14 sm:w-14">
                <MapPin
                  size={23}
                  className="text-[#6F8D08] dark:text-[#ADD132]"
                />
              </div>

              <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.24em] text-[#6F8D08] dark:text-[#ADD132] sm:text-[10px]">
                Our Office
              </p>

              <h2 className="mt-3 text-[28px] font-black leading-[1.02] tracking-[-0.045em] text-[#152019] dark:text-white sm:text-4xl md:text-5xl">
                Coimbatore, Tamil Nadu
              </h2>

              <p className="mt-5 text-xs leading-6 text-[#687368] dark:text-white/45 sm:text-sm sm:leading-7">
                TrackOwls Anti-Piracy Private Limited
              </p>

              <p className="mt-2 text-[11px] leading-6 text-[#7A847A] dark:text-white/35 sm:text-sm sm:leading-7">
                201, First Floor,
                <br />
                Paradise Garden,
                <br />
                Coimbatore,
                <br />
                Tamil Nadu, India.
              </p>

              <div className="mt-7 flex items-center gap-2.5 text-[10px] text-[#687368] dark:text-white/45 sm:text-sm">
                <Globe
                  size={16}
                  className="text-[#6F8D08] dark:text-[#ADD132]"
                />

                Serving digital businesses globally
              </div>
            </div>

            {/* MAP VISUAL */}

            <div className="relative min-h-[320px] overflow-hidden border-t border-[#253125]/10 dark:border-white/[0.07] sm:min-h-[400px] md:min-h-[460px] lg:border-l lg:border-t-0">

              {/* GRID */}

              <div className="contact-map-grid absolute inset-0 opacity-30 dark:opacity-25" />

              {/* CENTER GLOW */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,209,50,0.15),transparent_58%)]" />

              {/* MAP LINES */}

              <div className="absolute left-[10%] top-[24%] h-px w-[78%] rotate-[17deg] bg-[#6F8D08]/15 dark:bg-[#ADD132]/15" />

              <div className="absolute left-[17%] top-[60%] h-px w-[72%] -rotate-[24deg] bg-[#6F8D08]/15 dark:bg-[#ADD132]/15" />

              <div className="absolute left-[43%] top-[7%] h-[86%] w-px rotate-[22deg] bg-[#6F8D08]/10 dark:bg-[#ADD132]/10" />

              <div className="absolute left-[64%] top-[8%] h-[82%] w-px -rotate-[30deg] bg-[#6F8D08]/10 dark:bg-[#ADD132]/10" />

              {/* LOCATION */}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#6F8D08]/20 bg-[#ADD132]/5 dark:border-[#ADD132]/20">

                  <div className="contact-map-ring absolute inset-4 rounded-full border border-[#ADD132]/40" />

                  <div className="contact-map-ring-two absolute inset-4 rounded-full border border-[#ADD132]/30" />

                  <div className="absolute inset-3 rounded-full border border-[#6F8D08]/20 dark:border-[#ADD132]/20" />

                  <div className="contact-pulse relative flex h-12 w-12 items-center justify-center rounded-full bg-[#ADD132]">
                    <MapPin
                      size={23}
                      className="text-black"
                    />
                  </div>
                </div>

                <div className="absolute left-1/2 top-[115%] -translate-x-1/2 whitespace-nowrap border border-[#253125]/10 bg-white/90 px-4 py-2 text-xs font-semibold text-[#536053] shadow-lg backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0A0E0A]/90 dark:text-white/60">
                  Coimbatore, India
                </div>

              </div>

              {/* LOCATION LABEL */}

              <div className="absolute bottom-5 left-5 border border-[#253125]/10 bg-white/85 px-4 py-3 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0A0E0A]/90 sm:bottom-7 sm:left-7">
                <p className="text-[8px] uppercase tracking-[0.18em] text-[#7D877D] dark:text-white/25 sm:text-[9px]">
                  Location
                </p>

                <p className="mt-1 text-xs font-bold text-[#172017] dark:text-white sm:text-sm">
                  TrackOwls HQ
                </p>
              </div>

              {/* DIGITAL PROTECTION */}

              <div className="absolute right-5 top-5 hidden border border-[#253125]/10 bg-white/70 px-3 py-2 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0A0E0A]/80 sm:block">
                <p className="text-[8px] uppercase tracking-[0.15em] text-[#7D877D] dark:text-white/25">
                  Digital Protection
                </p>

                <p className="mt-1 text-[10px] font-bold text-[#6F8D08] dark:text-[#ADD132]">
                  GLOBAL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;