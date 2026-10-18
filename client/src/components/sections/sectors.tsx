import { ArrowUpRight } from "lucide-react";
import { PrimaryButton } from "@/components/brand/buttons";
import { FadeIn, RevealText, SectionLabel } from "@/components/effects/primitives";
import { SECTOR_GROUPS, SECTORS, SECTORS_PATH, sectorPath, sectorsInGroup } from "@/lib/sectors";

/** Homepage index of every sector page, grouped. */
export default function Sectors() {
  return (
    <section id="sectors" className="relative overflow-hidden border-t border-white/10 py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full glow-pink [--glow:0.12]" />
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel index="09">Sectors</SectionLabel>
            <RevealText
              text="Made for every *kind of place.*"
              className="font-display text-[clamp(2.6rem,6.2vw,5.75rem)]"
            />
          </div>
          <FadeIn className="text-lg leading-relaxed text-white/60 lg:max-w-md lg:justify-self-end lg:pb-3">
            <p>
              Offices and warehouses, hotels and hospitals, marinas, gyms and the beach. Pick your kind
              of place to see what we&apos;d stock, where the machine would go and which plan usually
              fits.
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SECTOR_GROUPS.map((group, i) => (
            <FadeIn key={group.id} delay={i * 0.06}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand">{group.label}</h3>
              <ul className="mt-4 border-t border-white/10">
                {sectorsInGroup(group.id).map((sector) => {
                  const Icon = sector.icon;
                  return (
                    <li key={sector.slug}>
                      <a
                        href={sectorPath(sector.slug)}
                        className="group flex items-center justify-between gap-3 border-b border-white/10 py-3.5 text-white/80 transition-colors duration-300 hover:text-white"
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="font-semibold leading-snug">{sector.name}</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-brand opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14">
          <PrimaryButton href={SECTORS_PATH}>Browse all {SECTORS.length} sectors</PrimaryButton>
        </FadeIn>
      </div>
    </section>
  );
}
