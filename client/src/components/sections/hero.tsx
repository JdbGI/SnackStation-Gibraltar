import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Check, MousePointerClick } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GhostButton, PrimaryButton } from "@/components/brand/buttons";
import { HalftoneMachine } from "@/components/effects/halftone-machine";
import { useIntroReady } from "@/components/effects/intro";
import { EASE_OUT_EXPO, Magnetic, SpeedLines } from "@/components/effects/primitives";
import { cn } from "@/lib/utils";

const LINES = ["Snacks.", "Drinks.", "24/7."];
const AUDIENCES = ["hotels", "shipyards", "stadiums", "offices", "workplaces"];

function RotatingWord({ play }: { play: boolean }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!play) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % AUDIENCES.length), 2200);
    return () => window.clearInterval(id);
  }, [play]);
  return (
    <span className="relative inline-block overflow-hidden pr-1 align-top">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={AUDIENCES[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
          className="inline-block font-bold italic text-brand"
        >
          {AUDIENCES[index]}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const ready = useIntroReady();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const [drinks, setDrinks] = useState(0);

  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 1, ease: EASE_OUT_EXPO, delay },
  });

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32 lg:pb-16"
    >
      {/* Backdrop */}
      <div className="bg-grid mask-radial absolute inset-0 -z-10" />
      <motion.div
        aria-hidden
        className="absolute -right-48 -top-48 -z-10 h-[42rem] w-[42rem] rounded-full bg-brand/25 blur-[140px]"
        animate={{ x: [0, -70, 0], y: [0, 50, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-56 -left-40 -z-10 h-[36rem] w-[36rem] rounded-full bg-brand-800/50 blur-[140px]"
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="bg-halftone absolute bottom-0 left-0 -z-10 h-80 w-2/3 opacity-50 [mask-image:radial-gradient(ellipse_at_bottom_left,#000,transparent_70%)]"
      />

      <div className="container grid items-center gap-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-10">
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
          <motion.div
            {...enter(0)}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-4 text-sm text-white/80 backdrop-blur"
          >
            <span className="flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-ink">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-ink" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
              </span>
              Open 24/7
            </span>
            Gibraltar-based · fully managed
          </motion.div>

          <h1 className="font-display text-[clamp(3.6rem,10.5vw,8.75rem)]">
            <span className="sr-only">
              SnackStation — fully managed vending solutions in Gibraltar. Snacks and drinks, 24/7.
            </span>
            <span aria-hidden className="block">
              {LINES.map((line, i) => (
                <span key={line} className="-mb-[0.1em] block overflow-hidden pb-[0.1em] pr-[0.12em]">
                  <motion.span
                    className={cn(
                      "flex items-center gap-[0.2em]",
                      i === 2 && "text-brand",
                      i === 2 && ready && "extrude animate-extrude [animation-delay:0.75s]",
                    )}
                    initial={{ y: "110%", rotate: 6 }}
                    animate={ready ? { y: "0%", rotate: 0 } : undefined}
                    transition={{ duration: 1.1, ease: EASE_OUT_EXPO, delay: 0.1 + i * 0.12 }}
                  >
                    {line}
                    {i === 2 && (
                      <SpeedLines lines={6} className="h-[0.62em] w-[1.1em] -skew-x-12 text-brand-800" />
                    )}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <motion.p {...enter(0.5)} className="mt-8 text-xl text-white md:text-2xl">
            Fully managed vending for Gibraltar&apos;s <RotatingWord play={ready} />
          </motion.p>

          <motion.p {...enter(0.6)} className="mt-5 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            SnackStation is a fully managed, Gibraltar-based vending machine supplier delivering
            high-quality snacks and drinks to key locations across Gibraltar. Our card-only, cashless
            machines reduce maintenance issues and maximise uptime, while our local team handles
            installation and ongoing support using a digital inventory management system.
          </motion.p>

          <motion.div {...enter(0.7)} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <PrimaryButton href="#contact">Enquire about a machine</PrimaryButton>
            </Magnetic>
            <GhostButton href="#offer">Our service models</GhostButton>
          </motion.div>

          <motion.ul
            {...enter(0.8)}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/60"
          >
            {["Local Gibraltar team", "Card-only & cashless", "Supply, stocking & maintenance"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[360px]"
        >
          <div aria-hidden className="absolute inset-[8%] -z-10 rounded-full bg-brand/25 blur-[90px]" />
          <HalftoneMachine onVend={() => setDrinks((n) => n + 1)} />
          <p
            aria-live="polite"
            className="mt-8 flex items-center justify-center gap-2 text-center font-mono text-xs uppercase tracking-[0.18em] text-white/50"
          >
            <MousePointerClick className="h-4 w-4 text-brand" />
            {drinks === 0 ? "Tap the machine for a drink" : "Enjoy your drink!"}
          </p>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-brand md:flex"
      >
        <span className="flex h-9 w-6 justify-center rounded-full border border-current pt-2">
          <span className="h-2 w-1 animate-scroll-dot rounded-full bg-brand" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      </a>
    </section>
  );
}
