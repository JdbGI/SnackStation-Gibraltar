import { AnimatePresence, animate, motion, useReducedMotion } from "framer-motion";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { EASE_IN_OUT, EASE_OUT_EXPO, SpeedLines } from "./primitives";

const STORAGE_KEY = "snackstation:intro-seen";

const IntroContext = createContext({ ready: true });

/** True once the intro curtain has started lifting (or was skipped). */
export function useIntroReady() {
  return useContext(IntroContext).ready;
}

function shouldPlayIntro() {
  if (typeof window === "undefined") return false;
  if (window.location.hash) return false;
  try {
    return !window.sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return true;
  }
}

export function IntroProvider({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const [play] = useState(() => shouldPlayIntro() && !reduce);
  const [ready, setReady] = useState(!play);

  const handleReveal = () => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Storage can be unavailable (private mode); the intro just replays.
    }
    setReady(true);
  };

  return (
    <IntroContext.Provider value={{ ready }}>
      {play && <Preloader onReveal={handleReveal} />}
      {children}
    </IntroContext.Provider>
  );
}

function Preloader({ onReveal }: { onReveal: () => void }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"loading" | "wipe" | "gone">("loading");

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const controls = animate(0, 100, {
      duration: 0.9,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setPhase("wipe"),
    });
    return () => {
      controls.stop();
      root.style.overflow = "";
    };
  }, []);

  const lift = () => {
    document.documentElement.style.overflow = "";
    setPhase("gone");
    onReveal();
  };

  return (
    <AnimatePresence>
      {phase !== "gone" && (
        <motion.div
          key="preloader"
          aria-hidden
          className="fixed inset-0 z-[200] flex flex-col overflow-hidden bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: EASE_IN_OUT }}
        >
          <div className="bg-halftone mask-radial pointer-events-none absolute inset-0 opacity-30" />

          <div className="relative flex flex-1 items-center justify-center px-6">
            <div className="relative w-[min(78vw,560px)]">
              <motion.div
                initial={{ x: "30%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                className="absolute -left-[45%] top-1/2 w-[55%] -translate-y-1/2 text-brand/70"
              >
                <SpeedLines lines={9} animated className="h-20 w-full md:h-28" />
              </motion.div>
              <motion.img
                src="/brand/snackstation-logo-pink.png"
                alt=""
                initial={{ clipPath: "inset(0 100% 0 0)", x: -40, skewX: -12 }}
                animate={{ clipPath: "inset(0 0% 0 0)", x: 0, skewX: 0 }}
                transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.05 }}
                className="relative w-full"
                style={{ filter: "drop-shadow(6px 6px 0 #891F5E)" }}
              />
            </div>
          </div>

          <div className="relative flex items-end justify-between px-6 pb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-white/50 md:px-10">
            <span>Gibraltar · 24/7</span>
            <span className="font-display text-5xl not-italic tracking-normal text-brand md:text-7xl">
              {String(count).padStart(3, "0")}
            </span>
            <span className="hidden sm:inline">Stocking the machine…</span>
          </div>

          <motion.div
            className="absolute inset-0 origin-bottom bg-brand"
            initial={{ scaleY: 0 }}
            animate={phase === "wipe" ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.45, ease: EASE_IN_OUT }}
            onAnimationComplete={() => {
              if (phase === "wipe") lift();
            }}
          >
            <div className="bg-halftone-berry absolute inset-0" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
