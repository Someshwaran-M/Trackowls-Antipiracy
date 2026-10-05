import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    ["Home", "home"],
    ["How it works", "how-it-works"],
    ["About", "about"],
    ["Services", "services"],
    ["Monitoring Tools", "monitoring-tools"],
    ["Plans", "plans"],
    ["Contact", "contact"],
  ];

  const socialLinks = [
    { label: "LinkedIn", icon: "in", href: "#" },
    { label: "Instagram", icon: "◎", href: "#" },
    { label: "X", icon: "𝕏", href: "#" },
    { label: "Facebook", icon: "f", href: "#" },
  ];

  const handleQuickLink = (section) => {
    if (section === "contact") {
      navigate("/contact");
      return;
    }

    const scrollToSection = () => {
      const element = document.getElementById(section);

      if (!element) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const navbarOffset = 90;

      const elementPosition =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;

      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: "smooth",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToSection();
      }, 250);
    } else {
      scrollToSection();
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#F5F8F1] text-[#142019] dark:bg-[#050805] dark:text-white">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[-220px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[#ADD132]/[0.045] blur-[150px] dark:bg-[#ADD132]/[0.035]" />

        <div className="absolute right-[-220px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-[#ADD132]/[0.04] blur-[150px] dark:bg-[#ADD132]/[0.025]" />

        <div className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ADD132]/50 to-transparent" />

        <div className="absolute left-1/2 top-[250px] h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D7E0D2] to-transparent dark:via-white/[0.035]" />

        <div className="absolute right-[12%] top-[90px] h-[180px] w-[180px] rounded-full border border-[#ADD132]/[0.07]" />

        <div className="absolute right-[15%] top-[120px] h-[120px] w-[120px] rounded-full border border-dashed border-[#ADD132]/[0.06]" />

      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto w-full max-w-[1480px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">

        {/* =======================================================
            TOP BRAND STATEMENT
        ======================================================= */}

        <div className="border-b border-[#D8E1D4] py-10 dark:border-white/[0.07] sm:py-12">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="mb-4 flex items-center gap-3">

                <span className="h-px w-10 bg-[#ADD132]" />

                <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#6D900B] dark:text-[#ADD132]">
                  TrackOwls
                </span>

              </div>

              <h2 className="max-w-[800px] text-[30px] font-black leading-[0.95] tracking-[-0.06em] text-[#142019] dark:text-white sm:text-4xl md:text-5xl">
                Digital protection,
                <br />
                <span className="text-[#789900] dark:text-[#ADD132]">
                  intelligently connected.
                </span>
              </h2>

            </div>

            <div className="flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_14px_rgba(173,209,50,0.65)]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#7B877F] dark:text-white/35">
                Scan / Detect / Remove / Protect
              </span>

            </div>

          </div>

        </div>

        {/* =======================================================
            MAIN FOOTER
        ======================================================= */}

        <div className="py-12 sm:py-14 lg:py-16">

          <div className="flex flex-col gap-14 lg:flex-row lg:gap-16">

            {/* ===================================================
                COMPANY
            =================================================== */}

            <div className="w-full lg:max-w-[470px] lg:flex-1">

              <Link
                to="/"
                aria-label="TrackOwls Home"
                className="group relative inline-flex"
              >

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[100px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ADD132]/10 blur-[45px] dark:bg-[#ADD132]/[0.07]" />

                <div className="relative flex h-[82px] w-[280px] items-center overflow-visible">

                  <video
                    src="/logo-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    className="relative z-10 h-[78px] w-[275px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                </div>

              </Link>

              <p className="mt-5 max-w-[410px] text-[12px] leading-6 text-[#657269] dark:text-white/42 sm:text-[13px] sm:leading-7">
                TrackOwls Anti-Piracy Private Limited helps businesses protect
                their digital content, intellectual property and brands through
                intelligent monitoring and protection.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">

                {["Scan", "Detect", "Remove", "Protect"].map(
                  (item, index) => (
                    <React.Fragment key={item}>

                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#718A1B] dark:text-[#ADD132]">
                        {item}
                      </span>

                      {index !== 3 && (
                        <span className="text-[#A5AEA7] dark:text-white/15">
                          /
                        </span>
                      )}

                    </React.Fragment>
                  )
                )}

              </div>

              {/* SOCIAL */}

              <div className="mt-7 flex items-center gap-2">

                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#D2DDD0] bg-white/60 text-[10px] font-black text-[#68746C] transition-all duration-300 hover:-translate-y-1 hover:border-[#ADD132] hover:bg-[#ADD132] hover:text-[#142019] dark:border-white/[0.10] dark:bg-white/[0.025] dark:text-white/45 dark:hover:border-[#ADD132] dark:hover:bg-[#ADD132] dark:hover:text-[#142019]"
                  >
                    {social.icon}
                  </a>
                ))}

              </div>

            </div>

            {/* ===================================================
                NAVIGATION
            =================================================== */}

            <div className="w-full lg:w-[240px]">

              <div className="mb-6 flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

                <h3 className="text-[8px] font-black uppercase tracking-[0.25em] text-[#17221B] dark:text-white">
                  Navigation
                </h3>

              </div>

              <div className="space-y-3.5">

                {quickLinks.map(([label, section]) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => handleQuickLink(section)}
                    className="group flex w-full items-center gap-2 border-0 bg-transparent p-0 text-left text-[12px] text-[#68746C] transition-all duration-300 hover:translate-x-1 hover:text-[#6D900B] dark:text-white/42 dark:hover:text-[#ADD132]"
                  >

                    <ChevronRight
                      size={12}
                      className="shrink-0 text-[#ADD132] opacity-0 transition-all duration-300 group-hover:opacity-100"
                    />

                    <span>{label}</span>

                  </button>
                ))}

              </div>

            </div>

            {/* ===================================================
                CONTACT
            =================================================== */}

            <div className="w-full lg:flex-1">

              <div className="mb-6 flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

                <h3 className="text-[8px] font-black uppercase tracking-[0.25em] text-[#17221B] dark:text-white">
                  Contact Us
                </h3>

              </div>

              <div className="border-y border-[#D8E1D4] dark:border-white/[0.08]">

                {/* OFFICE */}

                <div className="group flex items-start gap-4 border-b border-[#D8E1D4] py-5 dark:border-white/[0.08]">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#ADD132]/20 bg-[#ADD132]/[0.06] text-[#718A1B] dark:text-[#ADD132]">

                    <MapPin size={15} strokeWidth={1.6} />

                  </div>

                  <div>

                    <p className="text-[7px] font-black uppercase tracking-[0.2em] text-[#89948D] dark:text-white/25">
                      Office
                    </p>

                    <p className="mt-1.5 text-[12px] leading-5 text-[#536057] dark:text-white/60">
                      201, First Floor,
                      <br />
                      Paradise Garden,
                      <br />
                      Coimbatore, Tamil Nadu
                    </p>

                  </div>

                </div>

                {/* EMAIL */}

                <a
                  href="mailto:contact@trackowls.com"
                  className="group flex items-center gap-4 border-b border-[#D8E1D4] py-5 dark:border-white/[0.08]"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#ADD132]/20 bg-[#ADD132]/[0.06] text-[#718A1B] dark:text-[#ADD132]">

                    <Mail size={15} strokeWidth={1.6} />

                  </div>

                  <div className="min-w-0">

                    <p className="text-[7px] font-black uppercase tracking-[0.2em] text-[#89948D] dark:text-white/25">
                      Email
                    </p>

                    <p className="mt-1.5 break-all text-[12px] text-[#536057] transition-colors group-hover:text-[#6D900B] dark:text-white/60 dark:group-hover:text-[#ADD132]">
                      contact@trackowls.com
                    </p>

                  </div>

                  <ArrowUpRight
                    size={14}
                    className="ml-auto shrink-0 text-[#ADD132] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />

                </a>

                {/* PHONE */}

                <a
                  href="tel:+919XXXXXXXXX"
                  className="group flex items-center gap-4 py-5"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#ADD132]/20 bg-[#ADD132]/[0.06] text-[#718A1B] dark:text-[#ADD132]">

                    <Phone size={15} strokeWidth={1.6} />

                  </div>

                  <div>

                    <p className="text-[7px] font-black uppercase tracking-[0.2em] text-[#89948D] dark:text-white/25">
                      Phone
                    </p>

                    <p className="mt-1.5 text-[12px] text-[#536057] transition-colors group-hover:text-[#6D900B] dark:text-white/60 dark:group-hover:text-[#ADD132]">
                      +91 XXXXX XXXXX
                    </p>

                  </div>

                  <ArrowUpRight
                    size={14}
                    className="ml-auto shrink-0 text-[#ADD132] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />

                </a>

              </div>

            </div>

          </div>

        </div>

        {/* =======================================================
            NEWSLETTER
        ======================================================= */}

        <div className="border-t border-[#D8E1D4] py-8 dark:border-white/[0.07]">

          <div className="relative overflow-hidden border border-[#D2DDD0] bg-[#0D1911] px-5 py-7 text-white dark:border-white/[0.08] dark:bg-[#0A110C] sm:px-7 sm:py-8 lg:px-9">

            <div className="pointer-events-none absolute right-[-60px] top-[-100px] h-[260px] w-[260px] rounded-full border border-[#ADD132]/10" />

            <div className="pointer-events-none absolute right-[35px] top-[-55px] h-[170px] w-[170px] rounded-full border border-dashed border-[#ADD132]/10" />

            <div className="pointer-events-none absolute bottom-[-90px] left-[35%] h-[190px] w-[190px] rounded-full bg-[#ADD132]/[0.055] blur-[60px]" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-[570px]">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center bg-[#ADD132] text-[#142019]">

                    <ShieldCheck size={17} strokeWidth={1.8} />

                  </div>

                  <div>

                    <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#ADD132]">
                      Stay informed
                    </p>

                    <h3 className="mt-1 text-[17px] font-black tracking-[-0.02em]">
                      Digital protection insights
                    </h3>

                  </div>

                </div>

                <p className="mt-4 text-[11px] leading-6 text-white/50 sm:text-[12px]">
                  Get the latest insights on digital protection and online
                  threats.
                </p>

              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full max-w-xl flex-col gap-2 sm:flex-row"
              >

                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  className="h-12 flex-1 border border-white/[0.10] bg-white/[0.045] px-4 text-[12px] text-white outline-none placeholder:text-white/25 transition-all focus:border-[#ADD132]/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#ADD132]/10"
                />

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 bg-[#ADD132] px-6 text-[9px] font-black uppercase tracking-[0.14em] text-[#142019] transition-all duration-300 hover:bg-[#C7EB45] hover:shadow-[0_8px_28px_rgba(173,209,50,0.2)]"
                >
                  Subscribe
                  <ArrowUpRight size={15} strokeWidth={2} />
                </button>

              </form>

            </div>

          </div>

        </div>

        {/* =======================================================
            BOTTOM BAR
        ======================================================= */}

        <div className="border-t border-[#D8E1D4] py-7 dark:border-white/[0.08]">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[10px] leading-5 text-[#7A867E] dark:text-white/30">
                © {currentYear} TrackOwls Anti-Piracy Private Limited.
                All rights reserved.
              </p>

              <p className="mt-1.5 text-[9px] tracking-wide text-[#8B958F] dark:text-white/25">
                Powered by{" "}
                <span className="font-bold text-[#6D900B] dark:text-[#ADD132]">
                  MK Dynamic Technology
                </span>
              </p>

            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5">

              <Link
                to="/privacy-policy"
                className="text-[9px] font-medium text-[#7A867E] transition-colors hover:text-[#6D900B] dark:text-white/30 dark:hover:text-[#ADD132]"
              >
                Privacy Policy
              </Link>

              <span className="h-3 w-px bg-[#D2DCD0] dark:bg-white/10" />

              <Link
                to="/terms"
                className="text-[9px] font-medium text-[#7A867E] transition-colors hover:text-[#6D900B] dark:text-white/30 dark:hover:text-[#ADD132]"
              >
                Terms & Conditions
              </Link>

              <span className="h-3 w-px bg-[#D2DCD0] dark:bg-white/10" />

              <Link
                to="/sitemap"
                className="text-[9px] font-medium text-[#7A867E] transition-colors hover:text-[#6D900B] dark:text-white/30 dark:hover:text-[#ADD132]"
              >
                Sitemap
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          BOTTOM ACCENT
      ========================================================= */}

      <div className="h-[3px] w-full bg-[#ADD132]" />

    </footer>
  );
}

export default Footer;