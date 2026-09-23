import { Marquee, Star } from "@/components/effects/primitives";
import { TICKER_ITEMS } from "@/lib/site-data";

export default function Ticker() {
  return (
    <section aria-label="Highlights" className="relative z-10 overflow-hidden py-14 md:py-20">
      <div className="relative -left-[5%] z-10 w-[110%] -rotate-[2.5deg] bg-brand py-4 text-ink shadow-[0_20px_60px_-20px_rgba(255,128,191,0.6)] md:py-5">
        <Marquee duration={38} gapClassName="gap-8 pr-8">
          {TICKER_ITEMS.map((item) => (
            <span key={item} className="font-display flex items-center gap-8 whitespace-nowrap text-2xl md:text-4xl">
              {item}
              <Star className="h-5 w-5 text-brand-800 md:h-7 md:w-7" />
            </span>
          ))}
        </Marquee>
      </div>
      <div className="relative -left-[5%] -mt-3 w-[110%] rotate-[2deg] border-y border-brand/30 bg-ink py-4 md:py-5">
        <Marquee duration={46} reverse gapClassName="gap-8 pr-8">
          {TICKER_ITEMS.map((item) => (
            <span
              key={item}
              className="font-display hollow-brand flex items-center gap-8 whitespace-nowrap text-2xl md:text-4xl"
            >
              {item}
              <Star className="h-5 w-5 text-brand md:h-7 md:w-7" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
