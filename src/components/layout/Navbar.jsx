import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  MessageCircle,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "Industries", path: "/industries" },
  { name: "Technology", path: "/technology" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Insights", path: "/insights" },
  { name: "Contact", path: "/contact" },
];

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

export default function Navbar() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("trackowls-theme");
    return savedTheme ? savedTheme === "dark" : true;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  /* =====================================================
     THEME CHANGE
  ===================================================== */

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("trackowls-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const changeTheme = (dark) => {
    setDarkMode(dark);

    document.documentElement.classList.toggle("dark", dark);

    localStorage.setItem(
      "trackowls-theme",
      dark ? "dark" : "light"
    );
  };

  /* =====================================================
     ACTIVE LINK
  ===================================================== */

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`
          fixed left-0 right-0 top-0 z-[1000]
          px-2.5 pt-3 transition-all duration-500
          sm:px-4 sm:pt-4
          lg:px-6
          xl:px-8
        `}
      >
        <div
          className={`
            relative mx-auto flex h-[64px] w-full max-w-[1480px]
            items-center justify-between gap-2
            rounded-[20px] px-2
            backdrop-blur-2xl
            transition-all duration-500

            sm:h-[70px]
            sm:rounded-[22px]
            sm:px-3

            lg:h-[74px]
            lg:rounded-[24px]
            lg:px-3.5

            ${
              darkMode
                ? `
                  border border-white/[0.08]
                  bg-[#0B100D]/95
                  shadow-[0_18px_60px_rgba(0,0,0,0.45)]
                `
                : `
                  border border-black/[0.08]
                  bg-white/95
                  shadow-[0_12px_45px_rgba(30,60,35,0.12)]
                `
            }
          `}
        >
          {/* TOP GREEN LINE */}

          <div
            className="
              pointer-events-none
              absolute
              left-[10%]
              right-[10%]
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#ADD132]/60
              to-transparent
            "
          />

          {/* =================================================
              BRAND
          ================================================= */}

          <Link
            to="/"
            onClick={closeMenu}
            className="
              group
              relative
              z-10
              flex
              shrink-0
              items-center
              gap-2
              rounded-xl
              px-1
              transition-all
              duration-300
              sm:gap-2.5
            "
          >
            {/* LOGO */}

            <div
              className="
                flex
                h-[42px]
                w-[42px]
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-[12px]
                bg-[#ADD132]
                p-[3px]
                shadow-[0_0_20px_rgba(173,209,50,0.16)]
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:shadow-[0_0_30px_rgba(173,209,50,0.32)]

                sm:h-[46px]
                sm:w-[46px]

                lg:h-[48px]
                lg:w-[48px]
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

            {/* BRAND NAME */}

            <div
              className={`
                whitespace-nowrap
                text-[16px]
                font-black
                leading-none
                tracking-[-0.6px]
                transition-colors
                duration-300

                sm:text-[18px]

                lg:text-[20px]

                ${
                  darkMode
                    ? "text-white"
                    : "text-[#152019]"
                }
              `}
            >
              TRACK<span className="text-[#ADD132]">OWLS</span>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="
              hidden
              flex-1
              items-center
              justify-center
              gap-0.5
              xl:flex
            "
          >
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    relative
                    flex
                    h-[46px]
                    items-center
                    justify-center
                    rounded-[13px]
                    px-2.5
                    text-[12px]
                    font-semibold
                    whitespace-nowrap
                    transition-all
                    duration-300

                    2xl:px-3

                    ${
                      active
                        ? darkMode
                          ? `
                            bg-[#ADD132]/10
                            text-[#DFFF72]
                          `
                          : `
                            bg-[#ADD132]/15
                            text-[#294300]
                          `
                        : darkMode
                          ? `
                            text-white/60
                            hover:bg-white/[0.05]
                            hover:text-white
                          `
                          : `
                            text-[#59665E]
                            hover:bg-[#ADD132]/10
                            hover:text-[#182219]
                          `
                    }
                  `}
                >
                  {item.name}

                  {active && (
                    <span
                      className="
                        absolute
                        bottom-[5px]
                        left-1/2
                        h-1
                        w-1
                        -translate-x-1/2
                        rounded-full
                        bg-[#ADD132]
                        shadow-[0_0_10px_rgba(173,209,50,0.9)]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              ACTIONS
          ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              shrink-0
              items-center
              gap-1
              sm:gap-1.5
            "
          >
            {/* SEARCH */}

            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              className={`
                hidden
                h-[43px]
                w-[43px]
                items-center
                justify-center
                rounded-full
                border
                transition-all
                duration-300
                md:flex

                ${
                  darkMode
                    ? `
                      border-white/10
                      bg-white/[0.04]
                      text-white
                      hover:border-[#ADD132]
                      hover:bg-[#ADD132]
                      hover:text-black
                    `
                    : `
                      border-black/10
                      bg-black/[0.025]
                      text-[#172119]
                      hover:border-[#ADD132]
                      hover:bg-[#ADD132]
                      hover:text-black
                    `
                }
              `}
            >
              {searchOpen ? (
                <X size={18} />
              ) : (
                <Search
                  size={18}
                  strokeWidth={1.8}
                />
              )}
            </button>

              
            {/* =================================================
                THEME SWITCH
            ================================================= */}

            <div
              className={`
                flex
                h-[45px]
                items-center
                gap-1
                rounded-full
                border
                p-1
                transition-all
                duration-300

                ${
                  darkMode
                    ? `
                      border-white/10
                      bg-[#111812]
                    `
                    : `
                      border-black/[0.10]
                      bg-[#F1F3EF]
                    `
                }
              `}
            >
              {/* LIGHT */}

              <button
                type="button"
                onClick={() => changeTheme(false)}
                aria-label="Switch to light mode"
                aria-pressed={!darkMode}
                className={`
                  flex
                  h-[37px]
                  w-[37px]
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    !darkMode
                      ? `
                        bg-[#ADD132]
                        text-[#101800]
                        shadow-[0_3px_15px_rgba(173,209,50,0.38)]
                        scale-100
                      `
                      : `
                        bg-transparent
                        text-white/40
                        hover:bg-white/[0.07]
                        hover:text-white/80
                      `
                  }
                `}
              >
                <Sun
                  size={18}
                  strokeWidth={2}
                />
              </button>

              {/* DARK */}

              <button
                type="button"
                onClick={() => changeTheme(true)}
                aria-label="Switch to dark mode"
                aria-pressed={darkMode}
                className={`
                  flex
                  h-[37px]
                  w-[37px]
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    darkMode
                      ? `
                        bg-[#ADD132]
                        text-[#101800]
                        shadow-[0_3px_15px_rgba(173,209,50,0.38)]
                        scale-100
                      `
                      : `
                        bg-transparent
                        text-[#6B756E]
                        hover:bg-black/[0.05]
                        hover:text-[#182219]
                      `
                  }
                `}
              >
                <Moon
                  size={18}
                  strokeWidth={2}
                />
              </button>
            </div>

            {/* =================================================
                REQUEST DEMO
            ================================================= */}

            <Link
              to="/request-demo"
              onClick={closeMenu}
              className="
                group
                hidden
                h-[45px]
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-[#C7EB45]
                to-[#ADD132]
                pl-4
                pr-1
                text-[12px]
                font-extrabold
                text-[#101800]
                shadow-[0_7px_25px_rgba(173,209,50,0.16)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_10px_32px_rgba(173,209,50,0.34)]
                lg:flex
              "
            >
              <span>Request a Demo</span>

              <span
                className="
                  flex
                  h-[37px]
                  w-[37px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#071006]
                  text-white
                  transition-transform
                  duration-300
                  group-hover:-rotate-[35deg]
                "
              >
                <ArrowUpRight size={17} />
              </span>
            </Link>

            {/* MOBILE MENU */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className={`
                flex
                h-[41px]
                w-[41px]
                items-center
                justify-center
                rounded-full
                border
                transition-all
                duration-300
                xl:hidden

                ${
                  darkMode
                    ? `
                      border-white/10
                      bg-white/[0.04]
                      text-white
                      hover:border-[#ADD132]
                      hover:bg-[#ADD132]
                      hover:text-black
                    `
                    : `
                      border-black/10
                      bg-black/[0.025]
                      text-[#172119]
                      hover:border-[#ADD132]
                      hover:bg-[#ADD132]
                      hover:text-black
                    `
                }
              `}
            >
              {menuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* =====================================================
            SEARCH PANEL
        ===================================================== */}

        <div
          className={`
            mx-auto
            mt-2
            w-full
            max-w-[1480px]
            overflow-hidden
            rounded-[20px]
            border
            p-2
            backdrop-blur-2xl
            transition-all
            duration-300

            ${
              darkMode
                ? `
                  border-[#ADD132]/15
                  bg-[#070D09]/96
                  shadow-[0_18px_55px_rgba(0,0,0,0.45)]
                `
                : `
                  border-black/10
                  bg-white/96
                  shadow-[0_18px_50px_rgba(30,60,35,0.12)]
                `
            }

            ${
              searchOpen
                ? "max-h-[150px] opacity-100"
                : "pointer-events-none max-h-0 !p-0 opacity-0"
            }
          `}
        >
          <div
            className={`
              flex
              h-[50px]
              items-center
              gap-3
              rounded-[14px]
              px-4

              ${
                darkMode
                  ? `
                    bg-white/[0.045]
                    text-[#ADD132]
                  `
                  : `
                    bg-[#ADD132]/[0.07]
                    text-[#657168]
                  `
              }
            `}
          >
            <Search size={18} />

            <input
              type="text"
              value={searchValue}
              onChange={(e) =>
                setSearchValue(e.target.value)
              }
              placeholder="Search TrackOwls..."
              className={`
                min-w-0
                flex-1
                border-0
                bg-transparent
                text-sm
                outline-none

                ${
                  darkMode
                    ? `
                      text-white
                      placeholder:text-white/40
                    `
                    : `
                      text-[#182219]
                      placeholder:text-[#7B877F]
                    `
                }
              `}
            />

            {searchValue && (
              <button
                type="button"
                onClick={() => setSearchValue("")}
                className={`
                  transition-colors

                  ${
                    darkMode
                      ? "text-white/45 hover:text-white"
                      : "text-[#6B776F] hover:text-black"
                  }
                `}
              >
                <X size={17} />
              </button>
            )}
          </div>

          {searchValue && (
            <div
              className={`
                flex
                gap-1.5
                px-2
                pt-2
                text-[11px]

                ${
                  darkMode
                    ? "text-white/50"
                    : "text-[#657168]"
                }
              `}
            >
              <span>Searching for</span>

              <strong
                className={
                  darkMode
                    ? "text-white"
                    : "text-[#182219]"
                }
              >
                {searchValue}
              </strong>
            </div>
          )}
        </div>

        {/* =====================================================
            MOBILE / TABLET MENU
        ===================================================== */}

        <div
          className={`
            mx-auto
            mt-2
            w-full
            max-w-[1480px]
            overflow-hidden
            rounded-[22px]
            border
            backdrop-blur-2xl
            transition-all
            duration-500
            xl:hidden

            ${
              darkMode
                ? `
                  border-[#ADD132]/15
                  bg-[#070D09]/97
                  shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                `
                : `
                  border-black/10
                  bg-white/97
                  shadow-[0_20px_55px_rgba(30,60,35,0.13)]
                `
            }

            ${
              menuOpen
                ? "max-h-[800px] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >
          <div className="p-3 sm:p-4">
            {/* MOBILE BRAND */}

            <div
              className={`
                mb-2
                flex
                items-center
                gap-3
                border-b
                px-1
                pb-3

                ${
                  darkMode
                    ? "border-white/[0.08]"
                    : "border-black/[0.07]"
                }
              `}
            >
              <div
                className="
                  flex
                  h-[43px]
                  w-[43px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[12px]
                  bg-[#ADD132]
                  p-[3px]
                "
              >
                <video
                  src="/logo-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <div
                  className={`
                    text-[17px]
                    font-black
                    tracking-[-0.5px]

                    ${
                      darkMode
                        ? "text-white"
                        : "text-[#172119]"
                    }
                  `}
                >
                  TRAK<span className="text-[#ADD132]">
                    OWLS
                  </span>
                </div>

                <p
                  className={`
                    mt-0.5
                    text-[10px]

                    ${
                      darkMode
                        ? "text-white/45"
                        : "text-[#69756D]"
                    }
                  `}
                >
                  Digital Protection Intelligence
                </p>
              </div>
            </div>

            {/* MOBILE LINKS */}

            <div className="grid gap-1 sm:grid-cols-2 sm:gap-1.5">
              {navItems.map((item, index) => {
                const active = isActive(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={`
                      group
                      grid
                      min-h-[48px]
                      grid-cols-[28px_1fr_auto]
                      items-center
                      gap-2
                      rounded-[13px]
                      px-3
                      text-[13px]
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        active
                          ? darkMode
                            ? `
                              bg-[#ADD132]/10
                              text-[#DFFF72]
                              shadow-[inset_3px_0_0_#ADD132]
                            `
                            : `
                              bg-[#ADD132]/15
                              text-[#294300]
                              shadow-[inset_3px_0_0_#ADD132]
                            `
                          : darkMode
                            ? `
                              text-white/65
                              hover:bg-white/[0.04]
                              hover:text-white
                            `
                            : `
                              text-[#59665E]
                              hover:bg-[#ADD132]/10
                              hover:text-[#172119]
                            `
                      }
                    `}
                  >
                    <span
                      className={`
                        text-[9px]
                        font-black

                        ${
                          active
                            ? "text-[#769C0B]"
                            : darkMode
                              ? "text-white/25"
                              : "text-[#8B958F]"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{item.name}</span>

                    {active ? (
                      <Check
                        size={16}
                        className="text-[#ADD132]"
                      />
                    ) : (
                      <ArrowRight
                        size={16}
                        className={`
                          transition-transform
                          duration-300
                          group-hover:translate-x-1

                          ${
                            darkMode
                              ? "text-white/30"
                              : "text-[#8B958F]"
                          }
                        `}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* MOBILE DEMO */}

            <Link
              to="/request-demo"
              onClick={closeMenu}
              className="
                group
                mt-2
                flex
                min-h-[54px]
                items-center
                justify-between
                rounded-full
                bg-gradient-to-r
                from-[#C7EB45]
                to-[#ADD132]
                pl-5
                pr-1.5
                text-[13px]
                font-extrabold
                text-[#101800]
              "
            >
              <span>Request a Demo</span>

              <span
                className="
                  flex
                  h-[43px]
                  w-[43px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#071006]
                  text-white
                  transition-transform
                  duration-300
                  group-hover:-rotate-[35deg]
                "
              >
                <ArrowUpRight size={19} />
              </span>
            </Link>
          </div>
        </div>
      </header>

             
      {/* =====================================================
          WHATSAPP
      ===================================================== */}

      <div
        className="
          fixed
          bottom-5
          right-4
          z-[1100]
          sm:bottom-6
          sm:right-6
        "
      >
        <ScrollToTop />
        
        {whatsappOpen && (
          <div
            className={`
              absolute
              bottom-[72px]
              right-0
              w-[285px]
              rounded-[20px]
              border
              p-4
              backdrop-blur-2xl
              sm:w-[300px]

              ${
                darkMode
                  ? `
                    border-[#ADD132]/15
                    bg-[#070D09]/97
                    shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                  `
                  : `
                    border-black/10
                    bg-white/97
                    shadow-[0_20px_60px_rgba(20,50,25,0.16)]
                  `
              }
            `}
          >
            <button
              type="button"
              onClick={() => setWhatsappOpen(false)}
              className={`
                absolute
                right-3
                top-3
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full

                ${
                  darkMode
                    ? "text-white/45 hover:bg-white/10 hover:text-white"
                    : "text-[#6B776F] hover:bg-black/5 hover:text-black"
                }
              `}
            >
              <X size={14} />
            </button>

            <div className="flex gap-3">
              <div
                className="
                  flex
                  h-[44px]
                  w-[44px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[13px]
                  bg-gradient-to-br
                  from-[#35E879]
                  to-[#18B957]
                  text-white
                  shadow-[0_8px_20px_rgba(37,211,102,0.25)]
                "
              >
                <MessageCircle size={22} />
              </div>

              <div className="pr-4">
                <h4
                  className={`
                    text-[13px]
                    font-extrabold
                    ${
                      darkMode
                        ? "text-white"
                        : "text-[#172119]"
                    }
                  `}
                >
                  TrackOwls Support
                </h4>

                <p
                  className={`
                    mt-1
                    text-[11px]
                    leading-relaxed
                    ${
                      darkMode
                        ? "text-white/50"
                        : "text-[#68746C]"
                    }
                  `}
                >
                  Need help with digital protection?
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20TrackOwls,%20I%20would%20like%20to%20know%20more.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-2
                    inline-flex
                    items-center
                    gap-1
                    text-[11px]
                    font-extrabold
                    text-[#6B9408]
                    hover:text-[#3F5D00]
                  "
                >
                  Start a conversation
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setWhatsappOpen(!whatsappOpen)}
          aria-label="WhatsApp"
          className="
            group
            relative
            flex
            h-[56px]
            w-[56px]
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-[#35E879]
            to-[#18B957]
            text-white
            shadow-[0_10px_32px_rgba(37,211,102,0.30)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
        >
          <span
            className="
              absolute
              -inset-1
              animate-ping
              rounded-full
              border
              border-[#25D366]/40
            "
          />

          <MessageCircle
            size={27}
            strokeWidth={2.1}
          />

          <span
            className="
              absolute
              right-1
              top-1
              h-3
              w-3
              rounded-full
              border-2
              border-white
              bg-[#C7EB45]
            "
          />
        </button>
      </div>
    </>
  );
}