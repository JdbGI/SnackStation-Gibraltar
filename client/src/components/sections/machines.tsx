import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CreditCard, Rotate3d, Snowflake, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import {
  Counter,
  EASE_OUT_EXPO,
  FadeIn,
  RevealText,
  SectionLabel,
} from "@/components/effects/primitives";
import {
  MACHINE_ART,
  MACHINE_PAYMENT,
  MACHINE_SHELVES,
  MACHINE_VIEWS,
  MACHINES,
  machineImage,
  whatsappLink,
  type Machine,
  type MachineView,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

type MachineId = Machine["id"];

const { width: ART_W, height: ART_H } = MACHINE_ART;
const pctX = (px: number) => `${(px / ART_W) * 100}%`;
const pctY = (px: number) => `${(px / ART_H) * 100}%`;
const pad = (n: number) => String(n).padStart(2, "0");

const STAGE_SIZES = "(min-width: 1024px) 24rem, 56vw";
const COMPARE_SIZES = "(min-width: 768px) 11rem, 24vw";

const VIEW_NAMES: Record<MachineView, string> = {
  "front-left": "Left",
  front: "Front",
  "front-right": "Right",
};
const VIEW_ALT: Record<MachineView, string> = {
  "front-left": "seen from the front left",
  front: "seen from the front",
  "front-right": "seen from the front right",
};

/* ------------------------------------------------------------------ */
/* Picker                                                             */
/* ------------------------------------------------------------------ */

function MachinePicker({
  activeId,
  onSelect,
  className,
}: {
  activeId: MachineId;
  onSelect: (id: MachineId) => void;
  className?: string;
}) {
  return (
    <div
      role="group"
      aria-label="Choose a machine"
      className={cn(
        "grid grid-cols-3 rounded-full border border-white/10 bg-white/[0.04] p-1.5 sm:inline-grid sm:self-start",
        className,
      )}
    >
      {MACHINES.map((machine) => {
        const active = machine.id === activeId;
        return (
          <button
            key={machine.id}
            type="button"
            aria-pressed={active}
            onClick={() => onSelect(machine.id)}
            className={cn(
              "font-display relative rounded-full px-3 py-3 text-base transition-colors duration-300 sm:px-8 md:text-lg lg:px-3",
              active ? "text-ink" : "text-white/70 hover:text-white",
            )}
          >
            {active && (
              <motion.span
                layoutId="machine-pill"
                className="absolute inset-0 rounded-full bg-brand"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{machine.name}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Stage: the machine on a lit showroom floor, turning between views  */
/* ------------------------------------------------------------------ */

/** Lights up one shelf: a full-brightness copy of the front view, clipped to that shelf. */
function ShelfSpotlight({ machine, shelf }: { machine: Machine; shelf: number | null }) {
  // Hold the last shelf while the highlight fades out, so it doesn't slide away first.
  const [last, setLast] = useState(0);
  if (shelf !== null && shelf !== last) setLast(shelf);

  const { left, right, shelves } = machine.art.window;
  const top = shelves[last];
  const bottom = shelves[last + 1];
  const on = shelf !== null;
  const front = machineImage(machine.id, "front");

  return (
    <>
      <img
        src={front.src}
        srcSet={front.srcSet}
        sizes={STAGE_SIZES}
        width={ART_W}
        height={ART_H}
        alt=""
        loading="lazy"
        decoding="async"
        draggable={false}
        className="absolute inset-0 h-full w-full transition-[clip-path,opacity] duration-500 ease-out-expo"
        style={{
          opacity: on ? 1 : 0,
          clipPath: `inset(${pctY(top)} ${pctX(ART_W - right)} ${pctY(ART_H - bottom)} ${pctX(left)} round 6px)`,
        }}
      />
      <span
        className="absolute rounded-md ring-2 ring-brand shadow-[0_0_28px_rgb(255_128_191/0.55)] transition-all duration-500 ease-out-expo"
        style={{
          left: pctX(left),
          width: pctX(right - left),
          top: pctY(top),
          height: pctY(bottom - top),
          opacity: on ? 1 : 0,
        }}
      />
    </>
  );
}

/** Technical-drawing size marks around the cabinet, shown on the front view. */
function SizeMarks({ machine, show }: { machine: Machine; show: boolean }) {
  const { cabinet } = machine.art;
  const label = "absolute rounded-full bg-ink px-2 py-0.5 whitespace-nowrap";
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 font-mono text-[10px] font-bold tracking-wider text-brand transition-opacity duration-500 md:text-xs",
        show ? "opacity-100" : "opacity-0",
      )}
    >
      <span
        className="absolute w-2.5 border-y border-brand/70"
        style={{
          right: `calc(${pctX(ART_W - cabinet.left)} + 0.75rem)`,
          top: pctY(cabinet.top),
          bottom: pctY(ART_H - cabinet.bottom),
        }}
      >
        <span className="absolute inset-y-0 left-1/2 border-l border-dashed border-brand/70" />
        <span className={cn(label, "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90")}>
          {machine.specs.height} mm
        </span>
      </span>
      <span
        className="absolute h-2.5 border-x border-brand/70"
        style={{
          left: pctX(cabinet.left),
          right: pctX(ART_W - cabinet.right),
          top: `calc(${pctY(cabinet.bottom)} + 0.5rem)`,
        }}
      >
        <span className="absolute inset-x-0 top-1/2 border-t border-dashed border-brand/70" />
        <span className={cn(label, "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2")}>
          {machine.specs.width} mm
        </span>
      </span>
    </div>
  );
}

function FloatChip({
  icon: Icon,
  className,
  delay = 0,
  children,
}: {
  icon: LucideIcon;
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "glass absolute hidden animate-float items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white md:flex lg:hidden xl:flex",
        className,
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-ink">
        <Icon className="h-3.5 w-3.5" />
      </span>
      {children}
    </span>
  );
}

function Stage({
  machine,
  view,
  setView,
  shelf,
  className,
}: {
  machine: Machine;
  view: MachineView;
  setView: (view: MachineView) => void;
  shelf: number | null;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-25% 0px" });
  const touched = useRef(false);
  const dragX = useRef<number | null>(null);
  const activeIndex = MACHINES.indexOf(machine);
  // Pointing at a shelf always shows the front, where the shelves line up.
  const shown: MachineView = shelf === null ? view : "front";
  const [low, high] = machine.specs.temperature;

  // A quick turn when the showroom first comes into view, to show that it turns.
  useEffect(() => {
    if (!inView || reduce) return;
    const turns: MachineView[] = ["front-right", "front", "front-left", "front"];
    const timers = turns.map((turn, i) =>
      window.setTimeout(() => {
        if (!touched.current) setView(turn);
      }, 600 + i * 650),
    );
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [inView, reduce, setView]);

  const turnTo = (next: MachineView) => {
    touched.current = true;
    setView(next);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") {
      if ((e.target as HTMLElement).closest("[data-turn-controls]")) return;
      const r = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      turnTo(x < 0.38 ? "front-left" : x > 0.62 ? "front-right" : "front");
      return;
    }
    if (dragX.current === null) return;
    const dx = e.clientX - dragX.current;
    if (Math.abs(dx) < 32) return;
    // Like a turntable: drag right to bring the left side round.
    const i = MACHINE_VIEWS.indexOf(view) + (dx > 0 ? -1 : 1);
    turnTo(MACHINE_VIEWS[Math.max(0, Math.min(MACHINE_VIEWS.length - 1, i))]);
    dragX.current = e.clientX;
  };

  const endDrag = () => {
    dragX.current = null;
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse") dragX.current = e.clientX;
      }}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={(e) => {
        endDrag();
        if (e.pointerType === "mouse") setView("front");
      }}
      className={cn(
        "relative isolate aspect-[4/5] touch-pan-y select-none overflow-hidden rounded-[28px] border border-white/10 bg-ink-800 [container-type:inline-size] sm:aspect-[5/4] lg:sticky lg:top-28 lg:aspect-auto lg:h-[min(48rem,calc(100svh-8rem))] lg:self-start",
        className,
      )}
    >
      {/* Showroom: a pink spotlight from above, a halftone wall and a floor */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_75%_at_50%_0%,rgb(255_128_191/0.3),transparent_70%)]" />
        <div className="bg-halftone absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_40%,#000,transparent_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[13%] border-t border-white/10 bg-gradient-to-b from-ink-700 to-ink-950" />
        <div className="absolute bottom-[6%] left-1/2 h-[12%] w-3/4 -translate-x-1/2 rounded-full glow-pink [--glow:0.22]" />
      </div>

      {/* The model name, big and hollow on the back wall */}
      <AnimatePresence initial={false}>
        <motion.span
          key={machine.id}
          aria-hidden
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="font-display hollow pointer-events-none absolute inset-x-0 top-[9%] -z-10 select-none text-center text-[19cqw] text-brand/25"
        >
          {machine.name}
        </motion.span>
      </AnimatePresence>

      {MACHINES.map((m, i) => {
        const offset = i - activeIndex;
        const active = offset === 0;
        return (
          <div
            key={m.id}
            aria-hidden={!active || undefined}
            className="absolute bottom-[9%] left-1/2 h-[82%] transition-[opacity,transform] duration-700 ease-out-expo"
            style={{
              aspectRatio: `${ART_W} / ${ART_H}`,
              opacity: active ? 1 : 0,
              transform: `translateX(calc(-50% + ${offset * 40}%)) scale(${active ? 1 : 0.92})`,
            }}
          >
            <span className="absolute inset-x-[12%] -bottom-[1.5%] h-[4%] rounded-[100%] bg-black/80 blur-md" />
            {MACHINE_VIEWS.map((v) => {
              const image = machineImage(m.id, v);
              const visible = v === shown;
              return (
                <img
                  key={v}
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes={STAGE_SIZES}
                  width={ART_W}
                  height={ART_H}
                  alt={active && visible ? `SnackStation ${m.name} vending machine, ${VIEW_ALT[v]}` : ""}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className={cn(
                    "absolute inset-0 h-full w-full transition-[opacity,filter] duration-500",
                    visible ? "opacity-100" : "opacity-0",
                    active && shelf !== null && "brightness-[0.35]",
                  )}
                />
              );
            })}
            {active && <ShelfSpotlight machine={m} shelf={shelf} />}
            {active && <SizeMarks machine={m} show={shown === "front"} />}
          </div>
        );
      })}

      <FloatChip icon={Snowflake} className="left-[5%] top-[30%]">
        Chilled {low}-{high}°C
      </FloatChip>
      <FloatChip icon={CreditCard} delay={-3} className="right-[5%] top-[52%]">
        Tap to pay
      </FloatChip>

      <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink/70 px-3 py-1.5 font-mono text-xs text-white/70 backdrop-blur">
        <span className="text-brand">{pad(activeIndex + 1)}</span> / {pad(MACHINES.length)}
      </span>

      <div
        data-turn-controls
        role="group"
        aria-label="Turn the machine"
        className="absolute right-3 top-3 flex items-center gap-0.5 rounded-full border border-white/10 bg-ink/70 p-1 backdrop-blur"
      >
        <Rotate3d aria-hidden className="mx-2 h-4 w-4 text-brand" />
        {MACHINE_VIEWS.map((v) => (
          <button
            key={v}
            type="button"
            aria-pressed={shown === v}
            onClick={() => turnTo(v)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-bold transition-colors duration-300",
              shown === v ? "bg-brand text-ink" : "text-white/70 hover:text-white",
            )}
          >
            {VIEW_NAMES[v]}
          </button>
        ))}
      </div>

      <span className="absolute bottom-4 left-5 hidden font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 lg:block">
        Move across to turn
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Details: name, headline numbers and the shelf-by-shelf layout      */
/* ------------------------------------------------------------------ */

function Details({
  machine,
  shelf,
  setShelf,
  className,
}: {
  machine: Machine;
  shelf: number | null;
  setShelf: (shelf: number | null) => void;
  className?: string;
}) {
  const { specs } = machine;
  const stats = [
    { value: specs.capacity, label: "Items, approx." },
    { value: specs.selections, label: "Choices, max." },
    { value: specs.shelves, label: "Shelves" },
  ];

  return (
    <div className={cn("flex flex-col", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">SnackStation</p>
      <div className="relative -mb-[0.12em] overflow-hidden pb-[0.12em] pr-[0.15em]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.h3
            key={machine.id}
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-105%" }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            className="font-display extrude mt-2 text-[clamp(3.5rem,6.5vw,6rem)] text-brand"
          >
            {machine.name}
          </motion.h3>
        </AnimatePresence>
      </div>
      <p className="mt-5 text-lg text-white/60">{machine.summary}</p>

      <dl className="mt-8 grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <dt className="order-last mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50 md:text-[11px]">
              {stat.label}
            </dt>
            <dd className="font-display text-[clamp(2rem,3.4vw,3rem)] text-white">
              <Counter to={stat.value} duration={1.2} />
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10">
        <div className="flex items-baseline justify-between gap-4">
          <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
            What&apos;s inside
          </h4>
          <p className="text-xs text-white/50">Hover or tap a shelf to spot it</p>
        </div>
        <ol className="mt-3 border-t border-white/10" onPointerLeave={() => setShelf(null)}>
          {MACHINE_SHELVES.map((item, i) => {
            const Icon = item.icon;
            const on = shelf === i;
            return (
              <li key={i} className="border-b border-white/10">
                <button
                  type="button"
                  aria-pressed={on}
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") setShelf(i);
                  }}
                  onFocus={() => setShelf(i)}
                  onBlur={() => setShelf(null)}
                  onClick={() => setShelf(i)}
                  className="flex w-full items-center gap-4 py-2 text-left"
                >
                  <span className="w-6 font-mono text-xs tabular-nums text-white/40">{pad(i + 1)}</span>
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-xl transition-colors duration-300",
                      on ? "bg-brand text-ink" : "bg-brand/10 text-brand",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className={cn("font-semibold transition-colors duration-300", on ? "text-brand" : "text-white/85")}>
                    {item.label}
                  </span>
                  <span
                    aria-hidden
                    className={cn("ml-auto h-px bg-brand transition-all duration-500 ease-out-expo", on ? "w-10" : "w-0")}
                  />
                </button>
              </li>
            );
          })}
        </ol>
        <p className="mt-3 text-sm text-white/50">
          Our standard layout. We build the range around what your site likes.
        </p>
      </div>

      <a
        href={whatsappLink(
          `Hi SnackStation! I'm interested in the ${machine.name} machine. Could we book a free site visit?`,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="group/cta mt-8 flex items-center justify-between rounded-full bg-brand px-6 py-4 font-bold text-ink transition-colors duration-300 hover:bg-white"
      >
        Ask about the {machine.name}
        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Compare: all three side by side, drawn to scale, specs underneath  */
/* ------------------------------------------------------------------ */

const SPEC_ROWS: { label: string; value: (machine: Machine) => string }[] = [
  { label: "Holds", value: (m) => `About ${m.specs.capacity} items` },
  { label: "Choices", value: (m) => `Up to ${m.specs.selections}` },
  { label: "Shelves", value: (m) => String(m.specs.shelves) },
  { label: "Width", value: (m) => `${m.specs.width} mm` },
  { label: "Depth", value: (m) => `${m.specs.depth} mm` },
  { label: "Height", value: (m) => `${m.specs.height} mm` },
  { label: "Weight", value: (m) => `${m.specs.weightKg} kg` },
  {
    label: "Chilled",
    value: (m) => `${m.specs.temperature[0]}-${m.specs.temperature[1]}°C, adjustable`,
  },
];

const STOCK_TYPES = Array.from(new Set(MACHINE_SHELVES.map((shelf) => shelf.label)));

const cell = "px-2 py-3 md:px-6 md:py-4";

function SharedCell({ children }: { children: ReactNode }) {
  return (
    <td colSpan={MACHINES.length} className={cn(cell, "text-center")}>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {children}
        <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
          All models
        </span>
      </div>
    </td>
  );
}

function RowHead({ children }: { children: ReactNode }) {
  return (
    <th
      scope="row"
      className={cn(
        cell,
        "text-left font-mono text-[10px] font-normal uppercase tracking-[0.15em] text-white/50 md:text-xs",
      )}
    >
      {children}
    </th>
  );
}

function Compare() {
  const { cabinet } = MACHINES[0].art;
  return (
    <div className="mt-24 md:mt-32">
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Side by side</p>
          <h3 className="font-display mt-4 text-[clamp(2rem,5vw,3.75rem)]">
            Vending machine <span className="text-brand">specs</span>
          </h3>
        </div>
        <p className="text-white/60 md:max-w-sm md:justify-self-end">
          Same height, three widths. Every machine is chilled, cashless and stocked by our team.
        </p>
      </div>

      <FadeIn className="mt-10 overflow-x-auto rounded-[28px] border border-white/10 bg-ink-800/60">
        <table className="w-full min-w-[20rem] table-fixed border-collapse">
          <caption className="sr-only">SnackStation Mini, Mighty and Mega vending machine specifications</caption>
          <colgroup>
            <col className="w-[4.5rem] md:w-48" />
            {MACHINES.map((machine) => (
              <col key={machine.id} />
            ))}
          </colgroup>
          <thead>
            <tr>
              <td className={cn(cell, "align-top")}>
                {/* One ruler covers all three: they're the same height */}
                <div className="relative ml-auto h-40 w-6 md:mr-4 md:h-72">
                  <span
                    aria-hidden
                    className="absolute left-1/2 w-2.5 -translate-x-1/2 border-y border-brand/60"
                    style={{ top: pctY(cabinet.top), bottom: pctY(ART_H - cabinet.bottom) }}
                  >
                    <span className="absolute inset-y-0 left-1/2 border-l border-dashed border-brand/60" />
                  </span>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap rounded-full bg-ink px-2 py-0.5 font-mono text-[10px] font-bold text-brand md:text-xs">
                    {MACHINES[0].specs.height} mm
                  </span>
                </div>
              </td>
              {MACHINES.map((machine) => {
                const front = machineImage(machine.id, "front");
                const { cabinet: box } = machine.art;
                return (
                  <th key={machine.id} scope="col" className={cn(cell, "align-bottom font-normal")}>
                    <div className="group relative h-40 md:h-72">
                      <div
                        className="absolute bottom-0 left-1/2 h-full -translate-x-1/2"
                        style={{ aspectRatio: `${ART_W} / ${ART_H}` }}
                      >
                        <img
                          src={front.src}
                          srcSet={front.srcSet}
                          sizes={COMPARE_SIZES}
                          width={ART_W}
                          height={ART_H}
                          alt={`SnackStation ${machine.name} vending machine`}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out-expo group-hover:-translate-y-2"
                        />
                        <span
                          aria-hidden
                          className="absolute top-full mt-2 h-2.5 border-x border-brand/60"
                          style={{ left: pctX(box.left), right: pctX(ART_W - box.right) }}
                        >
                          <span className="absolute inset-x-0 top-1/2 border-t border-dashed border-brand/60" />
                          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-ink px-1.5 font-mono text-[9px] font-bold text-brand md:text-[11px]">
                            {machine.specs.width} mm
                          </span>
                        </span>
                      </div>
                    </div>
                    <span className="font-display mt-8 block text-[clamp(0.95rem,4.2vw,2.25rem)]">{machine.name}</span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {SPEC_ROWS.map((row) => {
              const values = MACHINES.map(row.value);
              return (
                <tr key={row.label} className="border-t border-white/10">
                  <RowHead>{row.label}</RowHead>
                  {values.every((value) => value === values[0]) ? (
                    <SharedCell>
                      <span className="text-sm font-semibold md:text-base">{values[0]}</span>
                    </SharedCell>
                  ) : (
                    values.map((value, i) => (
                      <td
                        key={MACHINES[i].id}
                        className={cn(cell, "text-center text-sm font-semibold text-white md:text-base")}
                      >
                        {value}
                      </td>
                    ))
                  )}
                </tr>
              );
            })}
            <tr className="border-t border-white/10">
              <RowHead>Stocks</RowHead>
              <SharedCell>
                {STOCK_TYPES.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
                  >
                    {type}
                  </span>
                ))}
              </SharedCell>
            </tr>
            <tr className="border-t border-white/10">
              <RowHead>Payment</RowHead>
              <SharedCell>
                <span className="text-sm font-semibold md:text-base">{MACHINE_PAYMENT}</span>
              </SharedCell>
            </tr>
          </tbody>
        </table>
      </FadeIn>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/50">
        Specs are from the manufacturer. How many items a machine holds depends on the size of the
        products. Machine images are illustrations, and the range in your machine is chosen for
        your site.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function Machines() {
  const [activeId, setActiveId] = useState<MachineId>("mighty");
  const [view, setView] = useState<MachineView>("front");
  const [shelf, setShelf] = useState<number | null>(null);
  const machine = MACHINES.find((m) => m.id === activeId) ?? MACHINES[0];

  const select = (id: MachineId) => {
    setActiveId(id);
    setShelf(null);
  };

  return (
    <section id="machines" className="relative overflow-hidden py-24 md:py-32">
      <div className="bg-grid mask-radial pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -left-60 top-1/4 h-[44rem] w-[44rem] rounded-full glow-berry [--glow:0.45]" />
      <div className="pointer-events-none absolute -right-60 bottom-0 h-[36rem] w-[36rem] rounded-full glow-pink [--glow:0.12]" />

      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel index="06">Our machines</SectionLabel>
            <RevealText
              text="Mini. Mighty. *Mega.*"
              className="font-display text-[clamp(2.6rem,7.4vw,6.25rem)]"
            />
          </div>
          <FadeIn className="text-lg leading-relaxed text-white/60 lg:max-w-md lg:justify-self-end lg:pb-3">
            Three chilled, cashless machines, one for every size of site. They all stand 1940{"\u00a0"}mm
            tall. What changes is the width, and how much they hold. We&apos;ll recommend the right
            one after your free site visit.
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-10">
          <MachinePicker activeId={activeId} onSelect={select} className="lg:col-start-2 lg:row-start-1" />
          <Stage
            machine={machine}
            view={view}
            setView={setView}
            shelf={shelf}
            className="lg:col-start-1 lg:row-span-2 lg:row-start-1"
          />
          <Details
            machine={machine}
            shelf={shelf}
            setShelf={setShelf}
            className="lg:col-start-2 lg:row-start-2"
          />
        </div>

        <Compare />
      </div>
    </section>
  );
}
