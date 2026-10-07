import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Menu,
  MessageCircle,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import TrackOwlsLogo from "./TrackOwlsLogo";

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "How it works",
    path: "/how-it-works",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Monitoring Tools",
    path: "/monitoring-tools",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const location = useLocation();

  /* =======================================================
     THEME
  ======================================================= */

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("trackowls-theme");

    return savedTheme ? savedTheme === "dark" : true;
  });

  /* =======================================================
     SEARCH
  ======================================================= */

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* =======================================================
     WHATSAPP
  ======================================================= */

  const [whatsappOpen, setWhatsappOpen] = useState(false);

  /* =======================================================
     SCROLL TO TOP
  ======================================================= */

  const [showScrollTop, setShowScrollTop] = useState(false);

  /* =======================================================
     APPLY THEME
  ======================================================= */

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem(
      "trackowls-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  /* =======================================================
     THEME CHANGE
  ======================================================= */

  const changeTheme = (dark) => {
    setDarkMode(dark);

    document.documentElement.classList.toggle("dark", dark);

    localStorage.setItem(
      "trackowls-theme",
      dark ? "dark" : "light"
    );
  };

  /* =======================================================
     ACTIVE LINK
  ======================================================= */

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  /* =======================================================
     CLOSE PANELS WHEN ROUTE CHANGES
  ======================================================= */

  useEffect(() => {
    setSearchOpen(false);
    setSearchValue("");
    setMobileMenuOpen(false);
    setWhatsappOpen(false);
  }, [location.pathname]);

  /* =======================================================
     CLOSE MOBILE MENU ON RESIZE
  ======================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =======================================================
     SCROLL LISTENER
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     SCROLL TO TOP
  ======================================================= */

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     MOBILE NAV CLICK
  ======================================================= */

  const handleMobileNavigation = () => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <>
      {/* =====================================================
          FULL WIDTH NAVBAR
      ===================================================== */}

      <header
        className="
          fixed
          left-0
          right-0
          top-0
          z-[1000]
          w-full
        "
      >
        {/* ===================================================
            NAVBAR CONTAINER
        =================================================== */}

        <div
          className="
            relative
            h-[82px]
            w-full
            overflow-visible
            border-b
            border-black/[0.08]
            bg-[#F8FAF5]
            shadow-[0_12px_40px_rgba(20,40,25,0.08)]
            dark:border-white/[0.08]
            dark:bg-[#070A07]
            dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
            lg:h-[88px]
          "
        >
          {/* =================================================
              SUBTLE LIGHT GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-[-100px]
              top-1/2
              h-[150px]
              w-[330px]
              -translate-y-1/2
              rounded-full
              bg-[#ADD132]/[0.07]
              blur-[75px]
              dark:bg-[#ADD132]/[0.09]
            "
          />

          {/* =================================================
              SUBTLE RIGHT GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              right-[4%]
              top-1/2
              h-[110px]
              w-[280px]
              -translate-y-1/2
              rounded-full
              bg-[#ADD132]/[0.04]
              blur-[70px]
              dark:bg-[#ADD132]/[0.06]
            "
          />

          {/* =================================================
              TOP ACCENT LINE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#ADD132]/60
              to-transparent
            "
          />

          {/* =================================================
              BOTTOM ACCENT LINE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#ADD132]/35
              to-transparent
            "
          />

          {/* =================================================
              NAV CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-20
              flex
              h-full
              w-full
              items-center
              px-4
              sm:px-6
              lg:px-8
              xl:px-10
              2xl:px-14
            "
          >
            {/* =================================================
                LOGO
                WIDER / NO BOX / NO TEXT
            ================================================= */}

            {/* =================================================
    LOGO
================================================= */}

<div
  className="
    relative
    flex
    h-full
    w-[174px]
    shrink-0
    items-center
    overflow-visible
    sm:w-[205px]
    md:w-[220px]
    lg:w-[250px]
    xl:w-[275px]
    2xl:w-[290px]
  "
>
  <TrackOwlsLogo />
</div>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              className="
                ml-auto
                hidden
                h-full
                items-center
                gap-1
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
                      group
                      relative
                      flex
                      h-[46px]
                      items-center
                      justify-center
                      whitespace-nowrap
                      rounded-full
                      px-[13px]
                      text-[13px]
                      font-semibold
                      tracking-[-0.01em]
                      transition-all
                      duration-300

                      ${
                        active
                          ? `
                            bg-[#ADD132]/15
                            text-[#294300]
                            dark:bg-[#ADD132]/15
                            dark:text-[#DFFF72]
                          `
                          : `
                            text-[#182219]
                            hover:bg-black/[0.04]
                            hover:text-[#101800]
                            dark:text-white/75
                            dark:hover:bg-white/[0.06]
                            dark:hover:text-white
                          `
                      }
                    `}
                  >
                    {item.name}

                    {/* Active indicator */}

                    {active && (
                      <span
                        className="
                          absolute
                          bottom-[4px]
                          left-1/2
                          h-[3px]
                          w-[22px]
                          -translate-x-1/2
                          rounded-full
                          bg-[#ADD132]
                          shadow-[0_0_12px_rgba(173,209,50,0.85)]
                        "
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* =================================================
                RIGHT ACTION AREA
            ================================================= */}

            <div
              className="
                ml-3
                hidden
                shrink-0
                items-center
                gap-2
                border-l
                border-black/10
                pl-3
                dark:border-white/10
                xl:flex
                xl:ml-4
                xl:pl-4
              "
            >
              {/* =================================================
                  SEARCH
              ================================================= */}

              <button
                type="button"
                onClick={() => setSearchOpen((prev) => !prev)}
                aria-label={
                  searchOpen ? "Close search" : "Open search"
                }
                className="
                  flex
                  h-[44px]
                  w-[44px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  bg-white/40
                  text-[#182219]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#ADD132]/60
                  hover:bg-[#ADD132]
                  hover:text-[#101800]
                  dark:border-white/10
                  dark:bg-white/[0.03]
                  dark:text-white
                  dark:hover:border-[#ADD132]
                  dark:hover:bg-[#ADD132]
                  dark:hover:text-[#101800]
                "
              >
                {searchOpen ? (
                  <X
                    size={19}
                    strokeWidth={2}
                  />
                ) : (
                  <Search
                    size={19}
                    strokeWidth={1.9}
                  />
                )}
              </button>

              {/* =================================================
                  THEME SWITCH
              ================================================= */}

              <div
                className="
                  flex
                  h-[44px]
                  items-center
                  gap-1
                  rounded-full
                  border
                  border-black/10
                  bg-white/40
                  p-1
                  backdrop-blur-md
                  dark:border-white/10
                  dark:bg-white/[0.03]
                "
              >
                {/* LIGHT */}

                <button
                  type="button"
                  onClick={() => changeTheme(false)}
                  aria-label="Switch to light mode"
                  aria-pressed={!darkMode}
                  className={`
                    flex
                    h-[36px]
                    w-[36px]
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
                          shadow-[0_0_16px_rgba(173,209,50,0.40)]
                        `
                        : `
                          text-[#667067]
                          hover:text-[#182219]
                          dark:text-white/45
                          dark:hover:text-white
                        `
                    }
                  `}
                >
                  <Sun
                    size={17}
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
                    h-[36px]
                    w-[36px]
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
                          shadow-[0_0_16px_rgba(173,209,50,0.40)]
                        `
                        : `
                          text-[#667067]
                          hover:text-[#182219]
                          dark:text-white/45
                          dark:hover:text-white
                        `
                    }
                  `}
                >
                  <Moon
                    size={17}
                    strokeWidth={2}
                  />
                </button>
              </div>

              {/* =================================================
                  FREE AUDIT
              ================================================= */}

              <Link
                to="/request-demo"
                className="
                  group
                  flex
                  h-[48px]
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#C9EF48]
                  to-[#ADD132]
                  pl-5
                  pr-1.5
                  text-[13px]
                  font-extrabold
                  text-[#101800]
                  shadow-[0_8px_28px_rgba(173,209,50,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_38px_rgba(173,209,50,0.35)]
                "
              >
                <span>
                  Free audit
                </span>

                <span
                  className="
                    flex
                    h-[38px]
                    w-[38px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#071006]
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  <ArrowRight
                    size={17}
                    strokeWidth={2}
                  />
                </span>
              </Link>
            </div>

            {/* =================================================
                MOBILE ACTIONS
            ================================================= */}

            <div
              className="
                ml-auto
                flex
                items-center
                gap-2
                xl:hidden
              "
            >
              {/* Mobile theme */}

              <button
                type="button"
                onClick={() => changeTheme(!darkMode)}
                aria-label={
                  darkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                className="
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  bg-white/50
                  text-[#182219]
                  backdrop-blur-md
                  transition-all
                  hover:border-[#ADD132]
                  hover:bg-[#ADD132]
                  hover:text-[#101800]
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white
                  dark:hover:bg-[#ADD132]
                  dark:hover:text-[#101800]
                  sm:flex
                "
              >
                {darkMode ? (
                  <Moon
                    size={18}
                    strokeWidth={2}
                  />
                ) : (
                  <Sun
                    size={18}
                    strokeWidth={2}
                  />
                )}
              </button>

              {/* Mobile search */}

              <button
                type="button"
                onClick={() => setSearchOpen((prev) => !prev)}
                aria-label={
                  searchOpen
                    ? "Close search"
                    : "Open search"
                }
                className="
                  hidden
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  bg-white/50
                  text-[#182219]
                  backdrop-blur-md
                  transition-all
                  hover:border-[#ADD132]
                  hover:bg-[#ADD132]
                  hover:text-[#101800]
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white
                  dark:hover:bg-[#ADD132]
                  dark:hover:text-[#101800]
                  sm:flex
                "
              >
                {searchOpen ? (
                  <X size={18} />
                ) : (
                  <Search size={18} />
                )}
              </button>

              {/* Mobile menu */}

              <button
                type="button"
                onClick={() =>
                  setMobileMenuOpen((prev) => !prev)
                }
                aria-label={
                  mobileMenuOpen
                    ? "Close menu"
                    : "Open menu"
                }
                aria-expanded={mobileMenuOpen}
                className="
                  flex
                  h-[44px]
                  w-[44px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  bg-white/50
                  text-[#182219]
                  backdrop-blur-md
                  transition-all
                  hover:border-[#ADD132]
                  hover:bg-[#ADD132]
                  hover:text-[#101800]
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white
                  dark:hover:bg-[#ADD132]
                  dark:hover:text-[#101800]
                "
              >
                {mobileMenuOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>
            </div>
          </div>

          {/* =================================================
              SEARCH PANEL
          ================================================= */}

          <div
            className={`
              absolute
              left-4
              right-4
              top-[92px]
              z-40
              overflow-hidden
              rounded-[20px]
              border
              border-black/10
              bg-white/95
              p-2
              shadow-[0_20px_60px_rgba(20,40,25,0.18)]
              backdrop-blur-2xl
              transition-all
              duration-300
              dark:border-[#ADD132]/20
              dark:bg-[#06100B]/96
              dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
              sm:left-6
              sm:right-6
              lg:left-8
              lg:right-8

              ${
                searchOpen
                  ? "max-h-[120px] opacity-100"
                  : "pointer-events-none max-h-0 !p-0 opacity-0"
              }
            `}
          >
            <div
              className="
                flex
                h-[54px]
                items-center
                gap-3
                rounded-[15px]
                border
                border-black/[0.07]
                bg-black/[0.025]
                px-4
                dark:border-white/[0.07]
                dark:bg-white/[0.035]
              "
            >
              <Search
                size={19}
                strokeWidth={1.8}
                className="
                  shrink-0
                  text-[#648A00]
                  dark:text-[#ADD132]
                "
              />

              <input
                type="text"
                value={searchValue}
                onChange={(e) =>
                  setSearchValue(e.target.value)
                }
                placeholder="Search TrackOwls..."
                autoFocus={searchOpen}
                className="
                  min-w-0
                  flex-1
                  border-0
                  bg-transparent
                  text-sm
                  text-[#182219]
                  outline-none
                  placeholder:text-[#7C867F]
                  dark:text-white
                  dark:placeholder:text-white/35
                "
              />

              {searchValue && (
                <button
                  type="button"
                  onClick={() => setSearchValue("")}
                  aria-label="Clear search"
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    text-[#68736C]
                    transition-all
                    hover:bg-black/5
                    hover:text-black
                    dark:text-white/40
                    dark:hover:bg-white/10
                    dark:hover:text-white
                  "
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {searchValue && (
              <div
                className="
                  flex
                  gap-1.5
                  px-3
                  pb-1
                  pt-2
                  text-[11px]
                  text-[#718078]
                  dark:text-white/45
                "
              >
                <span>
                  Searching for
                </span>

                <strong
                  className="
                    text-[#182219]
                    dark:text-white
                  "
                >
                  {searchValue}
                </strong>
              </div>
            )}
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================= */}

          <div
            className={`
              absolute
              left-3
              right-3
              top-[92px]
              z-30
              overflow-hidden
              rounded-[24px]
              border
              border-black/10
              bg-[#F8FAF5]/98
              p-2
              shadow-[0_25px_70px_rgba(20,40,25,0.16)]
              backdrop-blur-2xl
              transition-all
              duration-300
              dark:border-white/10
              dark:bg-[#07100B]/98
              dark:shadow-[0_25px_70px_rgba(0,0,0,0.50)]

              ${
                mobileMenuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-3 opacity-0"
              }
            `}
          >
            <div
              className="
                max-h-[calc(100vh-115px)]
                overflow-y-auto
                p-2
              "
            >
              {/* Mobile navigation */}

              <div className="space-y-1">
                {navItems.map((item) => {
                  const active = isActive(item.path);

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={handleMobileNavigation}
                      className={`
                        flex
                        min-h-[48px]
                        items-center
                        justify-between
                        rounded-[14px]
                        px-4
                        text-[14px]
                        font-semibold
                        transition-all

                        ${
                          active
                            ? `
                              bg-[#ADD132]/15
                              text-[#416000]
                              dark:bg-[#ADD132]/15
                              dark:text-[#DFFF72]
                            `
                            : `
                              text-[#263129]
                              hover:bg-black/[0.04]
                              dark:text-white/75
                              dark:hover:bg-white/[0.06]
                              dark:hover:text-white
                            `
                        }
                      `}
                    >
                      <span>
                        {item.name}
                      </span>

                      <ArrowRight
                        size={16}
                        className={`
                          transition-transform
                          duration-300
                          ${
                            active
                              ? "translate-x-0 text-[#719800] dark:text-[#ADD132]"
                              : "text-black/25 dark:text-white/25"
                          }
                        `}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Mobile divider */}

              <div
                className="
                  my-3
                  h-px
                  bg-black/[0.07]
                  dark:bg-white/[0.08]
                "
              />

              {/* Mobile Free Audit */}

              <Link
                to="/request-demo"
                onClick={handleMobileNavigation}
                className="
                  group
                  flex
                  h-[52px]
                  items-center
                  justify-between
                  rounded-full
                  bg-gradient-to-r
                  from-[#C9EF48]
                  to-[#ADD132]
                  pl-5
                  pr-1.5
                  text-[13px]
                  font-extrabold
                  text-[#101800]
                  shadow-[0_10px_30px_rgba(173,209,50,0.20)]
                "
              >
                <span>
                  Request a free audit
                </span>

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#071006]
                    text-white
                  "
                >
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          FLOATING CONTROLS
      ===================================================== */}

      <div
        className="
          fixed
          bottom-5
          right-5
          z-[1100]
          flex
          flex-col
          items-center
          gap-4
          sm:bottom-6
          sm:right-6
        "
      >
        {/* ===================================================
            SCROLL TO TOP
        =================================================== */}

        <div
          className={`
            relative
            h-[52px]
            w-[52px]
            transition-all
            duration-300

            ${
              showScrollTop
                ? "visible translate-y-0 opacity-100"
                : "invisible translate-y-3 opacity-0"
            }
          `}
        >
          {/* Outer ring */}

          <span
            className="
              pointer-events-none
              absolute
              -inset-[5px]
              rounded-full
              border
              border-[#ADD132]/20
            "
          />

          {/* Inner ring */}

          <span
            className="
              pointer-events-none
              absolute
              -inset-[1px]
              rounded-full
              border
              border-[#ADD132]/35
            "
          />

          {/* Button */}

          <button
            type="button"
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
            className="
              group
              relative
              z-10
              flex
              h-[52px]
              w-[52px]
              items-center
              justify-center
              rounded-full
              border
              border-[#ADD132]/40
              bg-white
              text-[#648A00]
              shadow-[0_8px_25px_rgba(60,90,10,0.16)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#ADD132]
              hover:bg-[#ADD132]
              hover:text-[#101800]
              hover:shadow-[0_10px_30px_rgba(173,209,50,0.30)]
              focus:outline-none
              focus:ring-2
              focus:ring-[#ADD132]/40
              dark:border-[#ADD132]/35
              dark:bg-[#0B100D]
              dark:text-[#ADD132]
              dark:shadow-[0_8px_25px_rgba(0,0,0,0.35)]
              dark:hover:bg-[#ADD132]
              dark:hover:text-[#101800]
            "
          >
            <ArrowUp
              size={22}
              strokeWidth={2.5}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
              "
            />
          </button>
        </div>

        {/* ===================================================
            WHATSAPP
        =================================================== */}

        <div className="relative">
          {/* WhatsApp popup */}

          {whatsappOpen && (
            <div
              className="
                absolute
                bottom-[72px]
                right-0
                w-[300px]
                overflow-hidden
                rounded-[20px]
                border
                border-black/10
                bg-white/96
                p-4
                shadow-[0_20px_60px_rgba(20,40,25,0.18)]
                backdrop-blur-2xl
                dark:border-[#ADD132]/20
                dark:bg-[#07100B]/96
                dark:shadow-[0_20px_60px_rgba(0,0,0,0.50)]
              "
            >
              {/* Close */}

              <button
                type="button"
                onClick={() =>
                  setWhatsappOpen(false)
                }
                aria-label="Close WhatsApp"
                className="
                  absolute
                  right-3
                  top-3
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  text-[#6B776F]
                  transition-colors
                  hover:bg-black/5
                  hover:text-black
                  dark:text-white/40
                  dark:hover:bg-white/10
                  dark:hover:text-white
                "
              >
                <X size={14} />
              </button>

              <div className="flex gap-3">
                {/* Icon */}

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

                {/* Content */}

                <div className="pr-4">
                  <h4
                    className="
                      text-[13px]
                      font-extrabold
                      text-[#172119]
                      dark:text-white
                    "
                  >
                    TrackOwls Support
                  </h4>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      leading-relaxed
                      text-[#68746C]
                      dark:text-white/50
                    "
                  >
                    Need help with digital
                    protection?
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
                      text-[#648A00]
                      transition-colors
                      hover:text-[#3F5D00]
                      dark:text-[#ADD132]
                      dark:hover:text-[#DFFF72]
                    "
                  >
                    Start a conversation

                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* WhatsApp button */}

          <button
            type="button"
            onClick={() =>
              setWhatsappOpen((prev) => !prev)
            }
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
            {/* Pulse */}

            <span
              className="
                absolute
                -inset-1
                animate-ping
                rounded-full
                border
                border-[#25D366]/30
              "
            />

            <MessageCircle
              size={27}
              strokeWidth={2.1}
            />

            {/* Online dot */}

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
      </div>
    </>
  );
}