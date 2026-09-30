import React from "react";
import { Link } from "react-router-dom";
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

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-white
        text-[#152019]
        transition-colors
        duration-300
        dark:bg-[#070A07]
        dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -top-40
          left-1/2
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-[#ADD132]/[0.08]
          blur-[120px]
          dark:bg-[#ADD132]/[0.06]
        "
      />

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1500px]
          px-5
          py-14
          sm:px-8
          lg:px-12
          lg:py-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-12
            md:grid-cols-2
            lg:grid-cols-12
            lg:gap-8
          "
        >
          {/* =================================================
              COMPANY
          ================================================= */}

          <div className="lg:col-span-4">
            {/* LOGO */}

            <Link
              to="/"
              className="
                inline-flex
                items-center
                transition
                duration-300
                hover:opacity-90
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-[210px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  bg-[#ADD132]
                  p-1
                "
              >
                <video
                  src="/logo-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>

            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-6
                text-[#68746C]
                dark:text-white/50
              "
            >
              TrackOwls Anti-Piracy Private Limited helps
              businesses protect their digital content,
              intellectual property and brands through
              intelligent monitoring and protection.
            </p>

            {/* TAGLINE */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                gap-2
                text-xs
                font-medium
                text-[#ADD132]
              "
            >
              <span>Scan</span>

              <span className="text-[#A0AAA3] dark:text-white/20">
                |
              </span>

              <span>Detect</span>

              <span className="text-[#A0AAA3] dark:text-white/20">
                |
              </span>

              <span>Remove</span>

              <span className="text-[#A0AAA3] dark:text-white/20">
                |
              </span>

              <span>Protect</span>
            </div>

            {/* SOCIAL */}

            <div className="mt-7 flex items-center gap-2">
              {[
                {
                  label: "LinkedIn",
                  icon: "in",
                },
                {
                  label: "Instagram",
                  icon: "◎",
                },
                {
                  label: "X",
                  icon: "X",
                },
                {
                  label: "Facebook",
                  icon: "f",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-black/[0.08]
                    bg-black/[0.025]
                    text-xs
                    font-bold
                    text-[#68746C]
                    transition-all
                    duration-300
                    hover:border-[#ADD132]/30
                    hover:bg-[#ADD132]/10
                    hover:text-[#6D900B]
                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:text-white/45
                    dark:hover:text-[#ADD132]
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="lg:col-span-2">
            <h3
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#152019]
                dark:text-white
              "
            >
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Solutions", "/solutions"],
                ["Industries", "/industries"],
                ["Technology", "/technology"],
                ["Case Studies", "/case-studies"],
              ].map(([label, path]) => (
                <Link
                  key={label}
                  to={path}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-[#68746C]
                    transition
                    duration-300
                    hover:text-[#6D900B]
                    dark:text-white/45
                    dark:hover:text-[#ADD132]
                  "
                >
                  <ChevronRight
                    size={13}
                    className="
                      -translate-x-2
                      text-[#ADD132]
                      opacity-0
                      transition
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />

                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* =================================================
              SOLUTIONS
          ================================================= */}

          <div className="lg:col-span-2">
            <h3
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#152019]
                dark:text-white
              "
            >
              Solutions
            </h3>

            <div className="mt-5 space-y-3">
              {[
                "Anti-Piracy",
                "IP Protection",
                "Brand Protection",
                "Cybersecurity",
                "Online Monitoring",
                "Digital Investigation",
                "Threat Detection",
              ].map((item) => (
                <Link
                  key={item}
                  to="/solutions"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-[#68746C]
                    transition
                    duration-300
                    hover:text-[#6D900B]
                    dark:text-white/45
                    dark:hover:text-[#ADD132]
                  "
                >
                  <ChevronRight
                    size={13}
                    className="
                      -translate-x-2
                      text-[#ADD132]
                      opacity-0
                      transition
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />

                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="lg:col-span-4">
            <h3
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#152019]
                dark:text-white
              "
            >
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">
              {/* ADDRESS */}

              <div className="flex items-start gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#ADD132]/20
                    bg-[#ADD132]/[0.06]
                    text-[#ADD132]
                  "
                >
                  <MapPin size={16} />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-medium
                      text-[#8A948E]
                      dark:text-white/35
                    "
                  >
                    Office
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-5
                      text-[#4F5C54]
                      dark:text-white/65
                    "
                  >
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
                className="group flex items-center gap-3"
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#ADD132]/20
                    bg-[#ADD132]/[0.06]
                    text-[#ADD132]
                  "
                >
                  <Mail size={16} />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-medium
                      text-[#8A948E]
                      dark:text-white/35
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-[#4F5C54]
                      transition
                      group-hover:text-[#6D900B]
                      dark:text-white/65
                      dark:group-hover:text-[#ADD132]
                    "
                  >
                    contact@trackowls.com
                  </p>
                </div>
              </a>

              {/* PHONE */}

              <a
                href="tel:+919XXXXXXXXX"
                className="group flex items-center gap-3"
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#ADD132]/20
                    bg-[#ADD132]/[0.06]
                    text-[#ADD132]
                  "
                >
                  <Phone size={16} />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-medium
                      text-[#8A948E]
                      dark:text-white/35
                    "
                  >
                    Phone
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-[#4F5C54]
                      transition
                      group-hover:text-[#6D900B]
                      dark:text-white/65
                      dark:group-hover:text-[#ADD132]
                    "
                  >
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* =================================================
            NEWSLETTER
        ================================================= */}

        <div
          className="
            mt-14
            rounded-2xl
            border
            border-black/[0.07]
            bg-black/[0.025]
            p-5
            sm:p-6
            dark:border-white/[0.07]
            dark:bg-white/[0.02]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={18}
                  className="text-[#ADD132]"
                />

                <h3
                  className="
                    text-sm
                    font-semibold
                    text-[#152019]
                    dark:text-white
                  "
                >
                  Stay informed
                </h3>
              </div>

              <p
                className="
                  mt-1.5
                  text-xs
                  text-[#7B877F]
                  dark:text-white/35
                "
              >
                Get the latest insights on digital protection
                and online threats.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="
                flex
                w-full
                max-w-xl
                flex-col
                gap-2
                sm:flex-row
              "
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="
                  h-12
                  flex-1
                  rounded-xl
                  border
                  border-black/[0.08]
                  bg-white
                  px-4
                  text-sm
                  text-[#152019]
                  outline-none
                  placeholder:text-[#9AA49E]
                  transition
                  focus:border-[#ADD132]/50
                  focus:ring-2
                  focus:ring-[#ADD132]/10
                  dark:border-white/10
                  dark:bg-[#0B100D]
                  dark:text-white
                  dark:placeholder:text-white/25
                "
              />

              <button
                type="submit"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#ADD132]
                  px-5
                  text-sm
                  font-bold
                  text-black
                  transition
                  duration-300
                  hover:bg-[#C7EB45]
                "
              >
                Subscribe

                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div
          className="
            mt-10
            border-t
            border-black/[0.07]
            pt-6
            dark:border-white/[0.07]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              text-xs
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* COPYRIGHT */}

            <div className="space-y-2">
              <p
                className="
                  text-[#7B877F]
                  dark:text-white/35
                "
              >
                © {currentYear} TrackOwls Anti-Piracy
                Private Limited. All rights reserved.
              </p>

              {/* POWERED BY */}

              <p
                className="
                  text-[11px]
                  font-medium
                  tracking-wide
                  text-[#8A948E]
                  dark:text-white/30
                "
              >
                Powered by{" "}
                <span
                  className="
                    font-bold
                    text-[#6D900B]
                    transition-colors
                    duration-300
                    dark:text-[#ADD132]
                  "
                >
                  MK Dynamic Technology
                </span>
              </p>
            </div>

            {/* LEGAL LINKS */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-2
              "
            >
              <Link
                to="/privacy-policy"
                className="
                  text-[#7B877F]
                  transition
                  hover:text-[#6D900B]
                  dark:text-white/35
                  dark:hover:text-[#ADD132]
                "
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="
                  text-[#7B877F]
                  transition
                  hover:text-[#6D900B]
                  dark:text-white/35
                  dark:hover:text-[#ADD132]
                "
              >
                Terms & Conditions
              </Link>

              <Link
                to="/sitemap"
                className="
                  text-[#7B877F]
                  transition
                  hover:text-[#6D900B]
                  dark:text-white/35
                  dark:hover:text-[#ADD132]
                "
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;