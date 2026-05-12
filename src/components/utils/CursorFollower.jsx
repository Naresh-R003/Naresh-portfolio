"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, [query]);

  return matches;
}

export default function CursorFollower() {
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [active, setActive] = useState(false);

  const dotSize = 8;
  const ringSize = 44;

  const x = useMotionValue(-999);
  const y = useMotionValue(-999);

  const springConfig = useMemo(
    () => (reduceMotion ? { stiffness: 1200, damping: 120 } : { stiffness: 700, damping: 40 }),
    [reduceMotion],
  );

  const dotX = useSpring(x, springConfig);
  const dotY = useSpring(y, springConfig);

  const ringX = useSpring(x, reduceMotion ? { stiffness: 900, damping: 90 } : { stiffness: 280, damping: 34 });
  const ringY = useSpring(y, reduceMotion ? { stiffness: 900, damping: 90 } : { stiffness: 280, damping: 34 });

  useEffect(() => {
    if (!canHover) return;

    const onMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      if (!active) setActive(true);
    };

    const onLeave = () => setActive(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [active, canHover, x, y]);

  if (!canHover) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]">
      <motion.div
        aria-hidden="true"
        className="cursor-ring"
        style={{
          width: ringSize,
          height: ringSize,
          x: ringX,
          y: ringY,
          translateX: `-${ringSize / 2}px`,
          translateY: `-${ringSize / 2}px`,
          opacity: active ? 1 : 0,
        }}
      />
      <motion.div
        aria-hidden="true"
        className="cursor-dot"
        style={{
          width: dotSize,
          height: dotSize,
          x: dotX,
          y: dotY,
          translateX: `-${dotSize / 2}px`,
          translateY: `-${dotSize / 2}px`,
          opacity: active ? 1 : 0,
        }}
      />
    </div>
  );
}

