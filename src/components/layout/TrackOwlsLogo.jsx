import React from "react";
import { Link } from "react-router-dom";

export default function TrackOwlsLogo() {
  return (
    <Link
      to="/"
      aria-label="TrackOwls Home"
      className="
        relative
        flex
        h-full
        w-full
        min-w-0
        items-center
        justify-start
        overflow-visible
      "
    >
      {/* Soft background glow */}
      <span
        className="
          pointer-events-none
          absolute
          left-[43%]
          top-1/2
          h-[72px]
          w-[220px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#ADD132]/10
          blur-[35px]
          dark:bg-[#ADD132]/15
        "
      />

      {/* TrackOwls Logo */}
      <video
        src="/logo-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="
          relative
          z-10
          block
          h-[70px]
          w-[180px]
          max-w-none
          shrink-0
          object-contain

          sm:h-[74px]
          sm:w-[205px]

          md:h-[78px]
          md:w-[225px]

          lg:h-[80px]
          lg:w-[245px]

          xl:h-[82px]
          xl:w-[270px]

          2xl:h-[84px]
          2xl:w-[290px]
        "
      />
    </Link>
  );
}