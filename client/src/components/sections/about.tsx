import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Counter,
  EASE_OUT_EXPO,
  FadeIn,
  RevealText,
  SectionLabel,
  SpotlightCard,
} from "@/components/effects/primitives";
import { FEATURES, MANAGED_TASKS, STATS, type Feature } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function CardHeading({ feature, large }: { feature: Feature; large?: boolean }) {
  const Icon = feature.icon;
  return (
    <div className="relative">
      <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-ink shadow-[3px_3px_0_#891F5E] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className={cn("font-display", large ? "text-3xl md:text-4xl" : "text-2xl md:text-[1.7rem]")}>
        {feature.title}
      </h3>
      <p className="mt-3 max-w-md text-white/60">{feature.description}</p>
    </div>
  );
}

function ManagedCard({ className }: { className?: string }) {
  return (
    <SpotlightCard className={cn("flex flex-col justify-between gap-10 p-8 md:p-10", className)}>
      <CardHeading feature={FEATURES.managed} large />
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ staggerChildren: 0.25, delayChildren: 0.2 }}
        className="relative max-w-xs space-y-3"
      >
        {MANAGED_TASKS.map((task, i) => (
          <motion.li
            key={task}
            variants={{ hidden: { opacity: 0.25, x: -10 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-ink/60 px-4 py-3"
          >
            <span className="flex items-center gap-3">
              <span className="font-mono text-xs text-white/55">0{i + 1}</span>
              <span className="font-semibold">{task}</span>
            </span>
            <motion.span
              variants={{ hidden: { scale: 0, rotate: -90 }, visible: { scale: 1, rotate: 0 } }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-ink"
            >
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </motion.span>
          </motion.li>
        ))}
      </motion.ul>
      <img
        src="/favicon.png"
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -bottom-10 -right-10 w-48 rotate-12 animate-float opacity-90 [--float-rotate:12deg] md:w-64"
      />
    </SpotlightCard>
  );
}

function CashlessCard({ className }: { className?: string }) {
  return (
    <SpotlightCard className={cn("flex flex-col gap-8 p-8 sm:flex-row sm:items-center md:p-10", className)}>
      <div className="flex-1">
        <CardHeading feature={FEATURES.cashless} />
      </div>
      <div aria-hidden className="relative mx-auto flex h-36 w-44 shrink-0 items-center justify-center">
        <div className="absolute right-2 top-1/2 flex h-24 w-20 -translate-y-1/2 items-center justify-center rounded-2xl border border-brand/40 bg-ink">
          <svg viewBox="0 0 40 40" className="h-12 w-12 text-brand">
            {[8, 14, 20].map((r, i) => (
              <path
                key={r}
                d={`M ${10 + r * 0.7} ${20 - r * 0.7} A ${r} ${r} 0 0 1 ${10 + r * 0.7} ${20 + r * 0.7}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            ))}
          </svg>
        </div>
        <div className="absolute left-0 top-1/2 h-16 w-24 -translate-y-1/2 -rotate-12 rounded-xl bg-gradient-to-br from-brand-300 via-brand to-brand-800 p-2 shadow-xl transition-transform duration-700 ease-out-expo group-hover:translate-x-10 group-hover:rotate-0">
          <div className="h-3 w-4 rounded-sm bg-brand-100/80" />
          <div className="mt-4 h-1 w-14 rounded-full bg-ink/40" />
        </div>
      </div>
    </SpotlightCard>
  );
}

const gibraltarTime = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Gibraltar",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

function useGibraltarTime() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const text = gibraltarTime.format(now);
  return { text, hour: Number(text.slice(0, 2)) % 24 };
}

function ClockCard({ className }: { className?: string }) {
  const { text, hour } = useGibraltarTime();
  return (
    <SpotlightCard className={cn("grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center", className)}>
      <CardHeading feature={FEATURES.allDay} />
      <div className="lg:text-right">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-emerald-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available around the clock
        </div>
        <p className="mt-4 font-mono text-5xl font-bold tabular-nums tracking-tight text-white md:text-6xl">
          {text}
        </p>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-white/55">
          Gibraltar time
        </p>
        <div aria-hidden className="mt-5 flex h-10 items-end gap-[3px] lg:justify-end">
          {Array.from({ length: 24 }).map((_, h) => (
            <span
              key={h}
              className={cn(
                "w-2 rounded-full transition-colors",
                h === hour ? "h-full bg-white" : "h-2/3 bg-brand/70",
              )}
            />
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}

function StockCard({ className }: { className?: string }) {
  const levels = [0.9, 0.55, 0.75, 0.4, 0.85];
  return (
    <SpotlightCard className={cn("flex flex-col gap-8 p-8 sm:flex-row sm:items-center md:p-10", className)}>
      <div className="flex-1">
        <CardHeading feature={FEATURES.stock} />
      </div>
      <div aria-hidden className="flex h-24 w-full shrink-0 items-end gap-2 sm:w-40">
        {levels.map((level, i) => (
          <motion.span
            key={i}
            className="flex-1 origin-bottom rounded-t-lg bg-gradient-to-t from-brand-800 to-brand"
            style={{ height: "100%" }}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: [1, level, level, 1] }}
            transition={{
              duration: 5,
              times: [0, 0.35, 0.65, 1],
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </SpotlightCard>
  );
}

export function Stats() {
  return (
    <section aria-label="SnackStation in numbers" className="relative border-y border-white/10">
      <div className="bg-halftone pointer-events-none absolute inset-0 opacity-[0.12]" />
      <div className="container relative grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.08} className="bg-ink px-2 py-10 sm:px-6 md:py-14">
            <p className="font-display text-[clamp(3rem,8vw,5.5rem)] text-brand">
              <Counter to={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-3 text-sm text-white/60 md:text-base">{stat.label}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
          <div>
            <SectionLabel index="01">What we offer</SectionLabel>
            <RevealText
              text="Your convenient *snack* provider in Gibraltar."
              className="font-display text-[clamp(2.6rem,6.2vw,5.75rem)]"
            />
          </div>
          <FadeIn className="space-y-4 text-lg leading-relaxed text-white/60 lg:pb-3">
            <p>
              We&apos;re Gibraltar&apos;s leading vending machine provider, offering modern
              solutions that combine convenience with quality refreshments.
            </p>
            <p>
              From offices and hotels to shipyards, warehouses and sports venues, we supply and
              manage snack and drink vending machines right across Gibraltar, designed to suit
              various business locations and customer needs.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-4 md:gap-5 lg:grid-cols-6">
          <FadeIn className="lg:col-span-3 lg:row-span-2 [&>*]:h-full">
            <ManagedCard />
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-3 [&>*]:h-full">
            <CashlessCard />
          </FadeIn>
          <FadeIn delay={0.2} className="lg:col-span-3 [&>*]:h-full">
            <StockCard />
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-6 [&>*]:h-full">
            <ClockCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
