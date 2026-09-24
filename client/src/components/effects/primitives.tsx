import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Variants,
} from "framer-motion";
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
  type PointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia(query).matches,
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

/* ------------------------------------------------------------------ */
/* Word-by-word masked reveal. Wrap words in *asterisks* to highlight. */
/* ------------------------------------------------------------------ */

const wordContainer: Variants = {
  hidden: {},
  visible: ({ stagger, delay }: { stagger: number; delay: number }) => ({
    transition: { staggerChildren: stagger, delayChildren: delay },
  }),
};

const wordVariant: Variants = {
  hidden: { y: "110%", rotate: 6 },
  visible: {
    y: "0%",
    rotate: 0,
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
};

type RevealTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  highlightClassName?: string;
  stagger?: number;
  delay?: number;
  /** Animate immediately instead of when scrolled into view. */
  play?: boolean;
};

export function RevealText({
  text,
  as: Tag = "h2",
  className,
  highlightClassName = "text-brand extrude",
  stagger = 0.06,
  delay = 0,
  play,
}: RevealTextProps) {
  const controlled = play !== undefined;
  let highlighting = false;
  const words = text.split(" ").map((raw) => {
    if (raw.startsWith("*")) highlighting = true;
    const highlighted = highlighting;
    if (raw.replace(/[.,!?]$/, "").endsWith("*")) highlighting = false;
    return { word: raw.replace(/\*/g, ""), highlighted };
  });
  return (
    <Tag className={className}>
      <motion.span
        className="block"
        variants={wordContainer}
        custom={{ stagger, delay }}
        initial="hidden"
        {...(controlled
          ? { animate: play ? "visible" : "hidden" }
          : { whileInView: "visible", viewport: { once: true, margin: "-12% 0px" } })}
      >
        {words.map(({ word, highlighted }, i) => {
          return (
            <Fragment key={`${word}-${i}`}>
              <span className="-mb-[0.14em] -mr-[0.14em] inline-block overflow-hidden pb-[0.14em] pr-[0.14em] align-bottom">
                <motion.span
                  variants={wordVariant}
                  className={cn("inline-block origin-bottom-left", highlighted && highlightClassName)}
                >
                  {word}
                </motion.span>
              </span>
              {i < words.length - 1 && " "}
            </Fragment>
          );
        })}
      </motion.span>
    </Tag>
  );
}

/* ------------------------------------------------------------------ */

type FadeInProps = ComponentPropsWithoutRef<typeof motion.div> & {
  delay?: number;
  y?: number;
};

export function FadeIn({ delay = 0, y = 28, className, children, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE_OUT_EXPO }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */

export function SectionLabel({
  index,
  children,
  className,
  tone = "brand",
}: {
  index: string;
  children: ReactNode;
  className?: string;
  tone?: "brand" | "ink";
}) {
  return (
    <FadeIn
      y={12}
      className={cn(
        "mb-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]",
        tone === "brand" ? "text-brand" : "text-ink",
        className,
      )}
    >
      <span
        className={cn(
          "relative flex h-2 w-2",
          tone === "brand" ? "text-brand" : "text-ink",
        )}
      >
        <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-current" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
      </span>
      <span className="opacity-70">{index}</span>
      <span className={cn("h-px w-8", tone === "brand" ? "bg-brand/50" : "bg-ink/40")} />
      <span>{children}</span>
    </FadeIn>
  );
}

/* ------------------------------------------------------------------ */

export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.8,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState(() => (typeof window === "undefined" ? to : 0));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE_OUT_EXPO,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */

export function Magnetic({
  children,
  strength = 0.3,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const springCfg = { stiffness: 220, damping: 16, mass: 0.5 };
  const x = useSpring(0, springCfg);
  const y = useSpring(0, springCfg);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x, y }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */

export function SpotlightCard({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      onPointerMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-ink-800/80",
        className,
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx, 50%) var(--my, 50%), rgb(255 128 191 / 0.12), transparent 42%)",
        }}
      />
      <div className="spotlight-border opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function TiltCard({
  children,
  className,
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const cfg = { stiffness: 180, damping: 18 };
  const rotateX = useSpring(rx, cfg);
  const rotateY = useSpring(ry, cfg);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div className={cn("[perspective:1200px]", className)}>
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function Marquee({
  children,
  reverse,
  duration = 40,
  pauseOnHover,
  className,
  gapClassName = "gap-10 pr-10",
}: {
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  pauseOnHover?: boolean;
  className?: string;
  gapClassName?: string;
}) {
  return (
    <div
      className={cn("group flex overflow-hidden", className)}
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1 || undefined}
          className={cn(
            "flex min-w-full shrink-0 animate-marquee items-center justify-around will-change-transform",
            gapClassName,
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("h-5 w-5 shrink-0", className)}>
      <path
        fill="currentColor"
        d="M12 0c.6 5.9 5.6 11.4 12 12-6.4.6-11.4 6.1-12 12-.6-5.9-5.6-11.4-12-12C6.4 11.4 11.4 5.9 12 0Z"
      />
    </svg>
  );
}

/**
 * Stacked "speed lines" that grow longer towards the bottom: the same motif
 * that trails off the end of the SnackStation wordmark.
 */
export function SpeedLines({
  className,
  lines = 6,
  animated = false,
}: {
  className?: string;
  lines?: number;
  animated?: boolean;
}) {
  return (
    <svg
      viewBox={`0 0 100 ${lines * 10}`}
      preserveAspectRatio="none"
      aria-hidden
      className={cn("overflow-visible", className)}
    >
      {Array.from({ length: lines }).map((_, i) => {
        const len = 35 + (65 * (i + 1)) / lines;
        return (
          <rect
            key={i}
            x={0}
            y={i * 10 + 2}
            width={len}
            height={6}
            fill="currentColor"
            className={animated ? "animate-speed-line" : undefined}
            style={
              animated
                ? { animationDelay: `${i * 0.08}s`, transformBox: "fill-box", transformOrigin: "right" }
                : undefined
            }
          />
        );
      })}
    </svg>
  );
}
