import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "./primitives";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[120] h-[3px] origin-left bg-gradient-to-r from-brand-200 via-brand to-brand-600"
    />
  );
}

export function Grain() {
  return (
    <div
      aria-hidden
      className="grain pointer-events-none fixed inset-0 z-[95] hidden opacity-[0.045] mix-blend-overlay md:block"
    />
  );
}

/**
 * A pink ring that trails the pointer and swells over anything clickable.
 * Only on mouse-driven devices, and never when reduced motion is requested.
 */
export function CursorFollower() {
  const reduce = useReducedMotion();
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const enabled = finePointer && !reduce;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 45, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 45, mass: 0.4 });

  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target instanceof Element ? e.target : null;
      const labelled = target?.closest<HTMLElement>("[data-cursor]");
      setLabel(labelled?.dataset.cursor ?? null);
      setHovering(!!target?.closest("a, button, [role='button'], input, select, textarea, [data-cursor]"));
    };
    const onLeave = () => setVisible(false);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = label ? 84 : hovering ? 56 : 28;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[150] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className={cn(
          "flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand font-mono text-[10px] font-bold uppercase tracking-widest text-ink",
          (hovering || label) && "bg-brand",
        )}
        animate={{
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
