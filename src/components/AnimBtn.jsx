import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ButtonWrapper = () => {
  return (
    <div className="flex min-h-[200px] items-center justify-center bg-slate-800 px-4">
      <SpotlightButton />
    </div>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const span = spanRef.current;
    if (!btn || !span) return;

    // Ensure span has a smooth transition
    span.style.transition = "left 200ms ease";

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const offset = e.clientX - rect.left;
      const leftPct = `${Math.max(
        0,
        Math.min(100, (offset / rect.width) * 100)
      )}%`;
      span.style.left = leftPct;
    };

    const handleMouseLeave = () => {
      span.style.left = "50%";
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Hover me
      </span>
      <span
        ref={spanRef}
        // keep default left at 50% for centered spotlight
        style={{ left: "50%" }}
        className="pointer-events-none absolute top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};

export default ButtonWrapper;
