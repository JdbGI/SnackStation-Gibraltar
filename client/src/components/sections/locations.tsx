import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import { FadeIn, RevealText, SectionLabel, useMediaQuery } from "@/components/effects/primitives";
import { LOCATIONS, type Location } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const TOTAL = String(LOCATIONS.length).padStart(2, "0");

// Illustrated panels cycle through the brand colours for variety.
const ART_TONES = [
  {
    panel: "bg-brand",
    dots: "bg-halftone-berry",
    tile: "bg-ink text-brand shadow-[6px_6px_0_#891F5E]",
    tag: "text-ink",
  },
  {
    panel: "bg-brand-800",
    dots: "bg-halftone",
    tile: "bg-brand text-ink shadow-[6px_6px_0_#0A0A0C]",
    tag: "text-brand",
  },
  {
    panel: "bg-ink-700",
    dots: "bg-halftone",
    tile: "bg-brand text-ink shadow-[6px_6px_0_#891F5E]",
    tag: "text-brand",
  },
];

/** Stand-in artwork for locations that don't have a photo yet. */
function LocationArt({ location, index }: { location: Location; index: number }) {
  const tone = ART_TONES[index % ART_TONES.length];
  const Icon = location.icon;
  return (
    <div aria-hidden className={cn("absolute inset-0", tone.panel)}>
      <div
        className={cn(
          "absolute inset-0 opacity-80 [mask-image:radial-gradient(circle_at_75%_45%,#000_10%,transparent_75%)]",
          tone.dots,
        )}
      />
      <span
        className={cn(
          "absolute right-[12%] top-1/2 flex h-24 w-24 -translate-y-1/2 items-center justify-center rounded-[1.75rem] transition-transform duration-700 ease-out-expo group-hover:-rotate-6 group-hover:scale-110 md:h-28 md:w-28",
          tone.tile,
        )}
      >
        <Icon className="h-11 w-11 md:h-12 md:w-12" strokeWidth={1.75} />
      </span>
      <span className={cn("font-display absolute bottom-5 left-5 text-3xl leading-none md:text-4xl", tone.tag)}>
        {location.tag}
      </span>
    </div>
  );
}

function LocationCard({
  location,
  index,
  className,
}: {
  location: Location;
  index: number;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex shrink-0 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-ink-800 transition-colors duration-500 hover:border-brand/50",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {location.image ? (
          <>
            <img
              src={location.image}
              srcSet={location.imageSrcSet}
              sizes={location.imageSrcSet ? "(min-width: 1024px) 30rem, 82vw" : undefined}
              alt={`SnackStation vending machine at ${location.name}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1400 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-transparent to-transparent" />
          </>
        ) : (
          <LocationArt location={location} index={index} />
        )}
        <span className="glass absolute left-4 top-4 rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-white">
          {String(index + 1).padStart(2, "0")} / {TOTAL}
        </span>
        <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-xs font-bold text-brand">
          <MapPin className="h-3.5 w-3.5" />
          Gibraltar
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-display text-2xl md:text-[1.7rem]">{location.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{location.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {location.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function NextStopCard({ className }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={cn(
        "group relative flex shrink-0 flex-col justify-between overflow-hidden rounded-[28px] bg-brand p-8 text-ink",
        className,
      )}
    >
      <div className="bg-halftone-berry absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="relative font-mono text-xs font-bold uppercase tracking-[0.2em]">Next stop</span>
      <div className="relative py-10">
        <p className="font-display text-5xl md:text-6xl">
          Your
          <br />
          space?
        </p>
        <p className="mt-5 max-w-xs font-medium text-ink/75">
          Join our expanding network of SnackStation locations across Gibraltar.
        </p>
      </div>
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-ink text-brand transition-transform duration-500 ease-out-expo group-hover:-rotate-45 group-hover:scale-110">
        <ArrowRight className="h-6 w-6" />
      </span>
    </a>
  );
}

function Intro({ className }: { className?: string }) {
  return (
    <div className={className}>
      <SectionLabel index="08">Locations</SectionLabel>
      <RevealText
        text="Our growing *network*."
        className="font-display text-[clamp(2.4rem,8vw,4rem)] lg:text-[clamp(2.4rem,4.2vw,4.5rem)]"
      />
      <FadeIn className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
        Join our expanding network of SnackStation vending machine locations across Gibraltar.
        Our machines are strategically placed to serve various communities and businesses.
      </FadeIn>
    </div>
  );
}

/** Desktop: the section pins while vertical scroll drives the cards sideways. */
function PinnedGallery() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(1);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: outerRef, offset: ["start start", "end end"] });
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const x = useSpring(rawX, { stiffness: 140, damping: 30, mass: 0.35 });
  const bar = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(LOCATIONS.length, Math.floor(v * LOCATIONS.length) + 1));
  });

  return (
    <div ref={outerRef} className="relative" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max items-stretch gap-6 pl-[max(1.25rem,calc((100vw-1440px)/2+2rem))] pr-[8vw]"
        >
          <Intro className="flex w-[min(32rem,36vw)] shrink-0 flex-col justify-center pr-6" />
          {LOCATIONS.map((location, i) => (
            <LocationCard
              key={location.name}
              location={location}
              index={i}
              className="w-[min(30rem,36vw,58vh)]"
            />
          ))}
          <NextStopCard className="w-[min(24rem,28vw)]" />
        </motion.div>

        <div className="container absolute inset-x-0 bottom-8 flex items-center gap-5">
          <span className="font-mono text-sm tabular-nums text-white/60">
            <span className="text-brand">{String(active).padStart(2, "0")}</span> / {TOTAL}
          </span>
          <div className="relative h-px flex-1 bg-white/15">
            <motion.div style={{ scaleX: bar }} className="absolute inset-0 origin-left bg-brand" />
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/55">Scroll</span>
        </div>
      </div>
    </div>
  );
}

/** Mobile & tablet: a native swipeable, snapping carousel. */
function SwipeGallery() {
  return (
    <div className="py-24 md:py-32">
      <Intro className="container" />
      <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [scrollbar-width:none] md:px-8 [&::-webkit-scrollbar]:hidden">
        {LOCATIONS.map((location, i) => (
          <LocationCard
            key={location.name}
            location={location}
            index={i}
            className="w-[82vw] max-w-md snap-center"
          />
        ))}
        <NextStopCard className="w-[70vw] max-w-sm snap-center" />
      </div>
      <p className="container mt-2 font-mono text-xs uppercase tracking-[0.2em] text-white/55">
        Swipe to explore →
      </p>
    </div>
  );
}

export default function Locations() {
  const desktop = useMediaQuery("(min-width: 1024px) and (min-height: 640px)");
  const reduce = useReducedMotion();
  return (
    <section id="locations" className="relative">
      {desktop && !reduce ? <PinnedGallery /> : <SwipeGallery />}
    </section>
  );
}
