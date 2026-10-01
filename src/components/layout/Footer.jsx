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

  const solutionLinks = [
    "Anti-Piracy",
    "IP Protection",
    "Brand Protection",
    "Online Monitoring",
    "Digital Investigation",
    "Threat Detection",
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
      }, 200);
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
        <div className="absolute left-[-180px] top-[80px] h-[420px] w-[420px] rounded-full bg-[#ADD132]/[0.055] blur-[130px] dark:bg-[#ADD132]/[0.035]" />

        <div className="absolute right-[-160px] bottom-[-160px] h-[460px] w-[460px] rounded-full bg-[#ADD132]/[0.045] blur-[140px] dark:bg-[#ADD132]/[0.025]" />

        <div className="absolute left-1/2 top-0 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ADD132]/40 to-transparent" />

        <div className="absolute left-1/2 top-[220px] h-[1px] w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D7E0D2] to-transparent dark:via-white/[0.04]" />
      </div>

      {/* =========================================================
          FOOTER CONTAINER
      ========================================================= */}

      <div className="relative mx-auto w-full max-w-[1480px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">

        {/* =======================================================
            FOOTER TOP STATEMENT
        ======================================================= */}


        {/* =======================================================
            MAIN FOOTER
        ======================================================= */}

        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-16">

          {/* =====================================================
              COMPANY
          ===================================================== */}

          <div className="lg:col-span-4">

            {/* LOGO */}

            <Link
              to="/"
              aria-label="TrackOwls Home"
              className="group relative inline-flex"
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[100px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ADD132]/10 blur-[42px] dark:bg-[#ADD132]/[0.07]" />

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

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-[410px] text-[12px] leading-6 text-[#657269] dark:text-white/42 sm:text-[13px] sm:leading-7">
              TrackOwls Anti-Piracy Private Limited helps businesses protect
              their digital content, intellectual property and brands through
              intelligent monitoring and protection.
            </p>

            {/* TAGLINE */}

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {["Scan", "Detect", "Remove", "Protect"].map((item, index) => (
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
              ))}
            </div>

            {/* SOCIAL */}

            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#D2DDD0] bg-white/70 text-[11px] font-black text-[#68746C] transition-all duration-300 hover:-translate-y-1 hover:border-[#ADD132] hover:bg-[#ADD132] hover:text-[#142019] dark:border-white/[0.10] dark:bg-white/[0.025] dark:text-white/45 dark:hover:border-[#ADD132] dark:hover:bg-[#ADD132] dark:hover:text-[#142019]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}

          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

              <h3 className="text-[8px] font-black uppercase tracking-[0.25em] text-[#17221B] dark:text-white">
                Quick Links
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
                    className="text-[#ADD132] opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />

                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* =====================================================
              SOLUTIONS
          ===================================================== */}

          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

              <h3 className="text-[8px] font-black uppercase tracking-[0.25em] text-[#17221B] dark:text-white">
                Solutions
              </h3>
            </div>

            <div className="space-y-3.5">
              {solutionLinks.map((item) => (
                <Link
                  key={item}
                  to="/solutions"
                  className="group flex items-center gap-2 text-[12px] text-[#68746C] transition-all duration-300 hover:translate-x-1 hover:text-[#6D900B] dark:text-white/42 dark:hover:text-[#ADD132]"
                >
                  <ChevronRight
                    size={12}
                    className="text-[#ADD132] opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />

                  <span>{item}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* =====================================================
              CONTACT
          ===================================================== */}

          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />

              <h3 className="text-[8px] font-black uppercase tracking-[0.25em] text-[#17221B] dark:text-white">
                Contact Us
              </h3>
            </div>

            <div className="space-y-5">

              {/* ADDRESS */}

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ADD132]/20 bg-[#ADD132]/[0.07] text-[#718A1B] dark:text-[#ADD132]">
                  <MapPin size={16} strokeWidth={1.6} />
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
                className="group flex items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ADD132]/20 bg-[#ADD132]/[0.07] text-[#718A1B] dark:text-[#ADD132]">
                  <Mail size={16} strokeWidth={1.6} />
                </div>

                <div>
                  <p className="text-[7px] font-black uppercase tracking-[0.2em] text-[#89948D] dark:text-white/25">
                    Email
                  </p>

                  <p className="mt-1.5 text-[12px] text-[#536057] transition-colors group-hover:text-[#6D900B] dark:text-white/60 dark:group-hover:text-[#ADD132]">
                    contact@trackowls.com
                  </p>
                </div>
              </a>

              {/* PHONE */}

              <a
                href="tel:+919XXXXXXXXX"
                className="group flex items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ADD132]/20 bg-[#ADD132]/[0.07] text-[#718A1B] dark:text-[#ADD132]">
                  <Phone size={16} strokeWidth={1.6} />
                </div>

                <div>
                  <p className="text-[7px] font-black uppercase tracking-[0.2em] text-[#89948D] dark:text-white/25">
                    Phone
                  </p>

                  <p className="mt-1.5 text-[12px] text-[#536057] transition-colors group-hover:text-[#6D900B] dark:text-white/60 dark:group-hover:text-[#ADD132]">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* =======================================================
            NEWSLETTER
        ======================================================= */}

        <div className="py-2 sm:py-4">
          <div className="relative overflow-hidden rounded-[22px] border border-[#D2DDD0] bg-[#102016] px-5 py-7 text-white shadow-[0_18px_60px_rgba(10,30,15,0.08)] dark:border-white/[0.08] dark:bg-[#0C140E] sm:px-7 sm:py-8 lg:px-9">

            {/* DECORATION */}

            <div className="pointer-events-none absolute right-[-50px] top-[-90px] h-[250px] w-[250px] rounded-full border border-[#ADD132]/10" />

            <div className="pointer-events-none absolute right-[20px] top-[-60px] h-[190px] w-[190px] rounded-full border border-[#ADD132]/10" />

            <div className="pointer-events-none absolute bottom-[-80px] left-[30%] h-[180px] w-[180px] rounded-full bg-[#ADD132]/[0.06] blur-[55px]" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-[570px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ADD132] text-[#142019]">
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
                  className="h-12 flex-1 rounded-xl border border-white/[0.10] bg-white/[0.055] px-4 text-[12px] text-white outline-none placeholder:text-white/25 transition-all focus:border-[#ADD132]/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#ADD132]/10"
                />

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#ADD132] px-6 text-[9px] font-black uppercase tracking-[0.14em] text-[#142019] transition-all duration-300 hover:bg-[#C7EB45] hover:shadow-[0_8px_28px_rgba(173,209,50,0.2)]"
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

            {/* COPYRIGHT */}

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

            {/* LEGAL */}

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
          MOBILE BOTTOM ACCENT
      ========================================================= */}

      <div className="h-[3px] w-full bg-[#ADD132]" />
    </footer>
  );
}

export default Footer;