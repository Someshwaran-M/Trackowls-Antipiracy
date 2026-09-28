import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`
        relative
        h-[52px]
        w-[52px]
        transition-all
        duration-300
        ${
          showButton
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-3 opacity-0"
        }
      `}
    >
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
          cursor-pointer
          items-center
          justify-center
          rounded-full
          border
          border-[#ADD132]/40
          bg-white
          text-[#648A00]
          shadow-[0_6px_20px_rgba(70,100,10,0.14)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#ADD132]
          hover:bg-[#ADD132]
          hover:text-[#101800]
          dark:bg-[#0B100D]
          dark:text-[#ADD132]
          dark:border-[#ADD132]/35
          dark:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
          dark:hover:bg-[#ADD132]
          dark:hover:text-[#101800]
          focus:outline-none
          focus:ring-2
          focus:ring-[#ADD132]/40
        "
      >
        <ArrowUp
          size={23}
          strokeWidth={2.5}
          className="
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
          "
        />
      </button>
    </div>
  );
}