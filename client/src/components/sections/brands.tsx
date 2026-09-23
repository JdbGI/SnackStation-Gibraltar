import { useState } from "react";
import { FadeIn, Marquee, RevealText, SectionLabel } from "@/components/effects/primitives";
import { BRANDS } from "@/lib/site-data";

function BrandTile({ brand }: { brand: (typeof BRANDS)[number] }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="group/tile flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl bg-brand-50 px-6 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[6px_6px_0_#891F5E] md:h-28 md:w-52">
      {failed ? (
        <span className="font-display text-center text-lg text-brand-800">{brand.name}</span>
      ) : (
        <img
          src={brand.logo}
          alt={brand.name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="max-h-14 max-w-full object-contain transition-transform duration-500 group-hover/tile:scale-110 md:max-h-16"
        />
      )}
    </div>
  );
}

export default function Brands() {
  const half = Math.ceil(BRANDS.length / 2);
  const rows = [BRANDS.slice(0, half), BRANDS.slice(half)];

  return (
    <section id="brands" className="relative overflow-hidden py-24 md:py-32">
      <div className="container mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
        <div>
          <SectionLabel index="02">Brands</SectionLabel>
          <RevealText
            text="Stocking the *best* brands."
            className="font-display text-[clamp(2.6rem,6.2vw,5.75rem)]"
          />
        </div>
        <FadeIn className="text-lg leading-relaxed text-white/60 lg:max-w-md lg:justify-self-end lg:pb-3">
          The big names people actually reach for — from chocolate, sweets and crisps to soft drinks,
          water and protein bars.
        </FadeIn>
      </div>

      <div className="mask-fade-x space-y-5">
        <Marquee duration={55} pauseOnHover gapClassName="gap-5 pr-5 py-2">
          {rows[0].map((brand) => (
            <BrandTile key={brand.name} brand={brand} />
          ))}
        </Marquee>
        <Marquee duration={60} reverse pauseOnHover gapClassName="gap-5 pr-5 py-2">
          {rows[1].map((brand) => (
            <BrandTile key={brand.name} brand={brand} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
