import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  FileSearch,
  Globe2,
  Radar,
  ScanSearch,
  ShieldCheck,
  Target,
} from "lucide-react"
import {
  Fingerprint,
  Search,
} from "lucide-react";

import { Link } from "react-router-dom";
import ThreatIntelligence from "./ThreatIntelligence";
import Connect from "./Connect";
import ProtectionEcosystem from "./ProtectionEcosystem";
import IntelligentStatement from "./IntelligentStatement";
import HomeAbout from "./HomeAbout";
import ClientReviews from "./ClientReviews";
import Faq from "./Faq";
import ProductionFlow from "./ProtectionFlow";

function Home() {
  const threatSignals = [
    {
      number: "01",
      title: "Unauthorized Distribution",
      text: "Content appearing outside approved channels.",
      icon: Globe2,
    },
    {
      number: "02",
      title: "Digital Infringement",
      text: "Your intellectual property being reused without authorization.",
      icon: FileSearch,
    },
    {
      number: "03",
      title: "Brand Misuse",
      text: "Digital assets and brand identity appearing in unexpected places.",
      icon: Target,
    },
    {
      number: "04",
      title: "Hidden Online Activity",
      text: "Threat signals distributed across constantly changing channels.",
      icon: Radar,
    },
  ];

  const ecosystem = [
    "Websites",
    "Social Platforms",
    "Streaming Channels",
    "Digital Marketplaces",
  ];

  return (
    <main
      className="
        relative
        left-1/2
        w-screen
        -translate-x-1/2
        overflow-hidden
        bg-[#F8FAF5]
        text-[#101610]
        dark:bg-[#050805]
        dark:text-white
      "
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          min-h-[calc(100vh-90px)]
          overflow-hidden
          bg-cover
          bg-center
          bg-no-repeat
          bg-[url('/home-light.png')]
          dark:bg-[url('/home-dark.png')]
        "
      >
        {/* Background readability overlay */}
        <div className="absolute inset-0 bg-[#F7FAF3]/45 dark:bg-[#050805]/35" />

        {/* Green atmospheric glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-[55%]
            top-[18%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#ADD132]/10
            blur-[130px]
          "
        />

        {/* Hero Content */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[calc(100vh-90px)]
            max-w-[1500px]
            items-center
            px-6
            py-20
            sm:px-10
            lg:px-16
            xl:px-20
          "
        >
          <div className="max-w-[850px]">

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#ADD132] opacity-60" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-[#ADD132]" />
              </span>

              <span className="text-[10px] font-black uppercase tracking-[0.32em] text-[#658800] dark:text-[#ADD132] sm:text-xs">
                Digital Anti-Piracy Intelligence
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="
                max-w-[900px]
                text-[54px]
                font-black
                leading-[0.88]
                tracking-[-0.07em]
                text-[#0C120D]
                dark:text-white
                sm:text-[72px]
                md:text-[88px]
                lg:text-[100px]
                xl:text-[116px]
              "
            >
              Protect your
              <span className="block text-[#79A400] dark:text-[#ADD132]">
                digital world.
              </span>
            </h1>

            {/* Description */}
            <div className="mt-8 flex max-w-[760px] gap-5">
              <div className="mt-1 h-[64px] w-[2px] shrink-0 bg-[#ADD132]" />

              <p className="text-[15px] font-medium leading-8 text-[#5E6A62] dark:text-white/60 sm:text-[17px]">
                TrackOwls helps businesses discover, monitor and detect
                unauthorized digital content, protecting valuable intellectual
                property across the constantly changing online ecosystem.
              </p>
            </div>

            {/* Protection Capabilities */}
            <div className="mt-9 grid gap-6 sm:grid-cols-2">

              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#ADD132]/40
                    bg-white/40
                    text-[#6F9500]
                    backdrop-blur-md
                    dark:bg-black/20
                    dark:text-[#ADD132]
                  "
                >
                  <ScanSearch size={21} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-sm font-black text-[#172018] dark:text-white">
                    Detect Digital Threats
                  </p>

                  <p className="mt-1 text-xs text-[#707B73] dark:text-white/40">
                    Identify unauthorized content
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#ADD132]/40
                    bg-white/40
                    text-[#6F9500]
                    backdrop-blur-md
                    dark:bg-black/20
                    dark:text-[#ADD132]
                  "
                >
                  <ShieldCheck size={21} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-sm font-black text-[#172018] dark:text-white">
                    Protect Your IP
                  </p>

                  <p className="mt-1 text-xs text-[#707B73] dark:text-white/40">
                    Turn intelligence into protection
                  </p>
                </div>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/technology"
                className="
                  group
                  flex
                  h-[60px]
                  w-fit
                  items-center
                  justify-between
                  gap-8
                  rounded-full
                  bg-[#ADD132]
                  pl-7
                  pr-2
                  text-[13px]
                  font-black
                  text-[#101600]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-[#BDE640]
                  hover:shadow-[0_20px_60px_rgba(173,209,50,0.3)]
                "
              >
                <span>Technology</span>

                <span
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#17200F]
                    text-white
                    transition-transform
                    duration-500
                    group-hover:rotate-45
                  "
                >
                  <ArrowUpRight size={18} />
                </span>
              </Link>

              <Link
                to="/solutions"
                className="
                  group
                  flex
                  h-[60px]
                  w-fit
                  items-center
                  gap-5
                  rounded-full
                  border
                  border-black/10
                  bg-white/40
                  px-7
                  text-[13px]
                  font-bold
                  text-[#172019]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-[#ADD132]/50
                  hover:bg-[#ADD132]
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white
                  dark:hover:bg-white/[0.08]
                "
              >
                Explore Protection

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

            {/* Intelligence Tags */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {[
                "Monitoring",
                "Threat Detection",
                "IP Protection",
                "Digital Intelligence",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.16em]
                    text-[#7A857D]
                    dark:text-white/35
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />
                  {item}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div
          className="
            absolute
            bottom-7
            left-1/2
            z-20
            hidden
            -translate-x-1/2
            items-center
            gap-3
            md:flex
          "
        >
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-black/35 dark:text-white/30">
            Scroll to explore
          </span>

          <ArrowRight
            size={13}
            className="text-[#719800] dark:text-[#ADD132]"
          />
        </div>
      </section>


      <HomeAbout />
      
      <ThreatIntelligence />

      <Connect />

      <ProtectionEcosystem />
    
      <IntelligentStatement />

      <ProductionFlow />

      <ClientReviews />

      <Faq />


      <style>{`
        @keyframes trackowls-scan {
          0% {
            transform: translateX(-120px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(900px);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
}

export default Home;