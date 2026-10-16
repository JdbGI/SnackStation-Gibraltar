import { ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { GhostButton, PrimaryButton } from "@/components/brand/buttons";
import { FadeIn, RevealText, SectionLabel } from "@/components/effects/primitives";
import SiteShell from "@/components/layout/site-shell";
import Contact from "@/components/sections/contact";
import Faq from "@/components/sections/faq";
import HowItWorks from "@/components/sections/how-it-works";
import { LocationCard } from "@/components/sections/locations";
import Ticker from "@/components/sections/ticker";
import { Breadcrumbs } from "@/components/sectors/breadcrumbs";
import { SectorCard } from "@/components/sectors/sector-card";
import { HUB, HUB_FAQS } from "@/content/sectors/hub";
import { HubStructuredData, usePageMeta, type Crumb } from "@/lib/seo";
import {
  SECTOR_GROUPS,
  SECTORS,
  SECTORS_HUB,
  SECTORS_PATH,
  sectorPath,
  sectorsInGroup,
} from "@/lib/sectors";
import { CONTACT, LOCATIONS } from "@/lib/site-data";

const pad = (n: number) => String(n).padStart(2, "0");

const CRUMBS: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Vending machines", path: SECTORS_PATH },
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-4 pt-32 md:pt-40">
      <div className="bg-grid mask-radial absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute -right-48 -top-48 -z-10 h-[42rem] w-[42rem] rounded-full glow-pink [--glow:0.3]"
      />
      <div
        aria-hidden
        className="absolute -bottom-56 -left-40 -z-10 h-[34rem] w-[34rem] rounded-full glow-berry [--glow:0.5]"
      />

      <div className="container">
        <FadeIn y={12}>
          <Breadcrumbs crumbs={CRUMBS} />
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:mt-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-14">
          <div>
            <SectionLabel index="SS">Sectors</SectionLabel>
            <RevealText as="h1" play text={HUB.headline} className="font-display text-[clamp(1.6rem,8vw,3.4rem)] lg:text-[clamp(2.4rem,5.2vw,4.75rem)]" />
            <FadeIn delay={0.2} className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              <p>{HUB.intro}</p>
            </FadeIn>
            <FadeIn delay={0.3} className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryButton
                href={CONTACT.whatsappEnquiry}
                target="_blank"
                rel="noopener noreferrer"
                icon={<SiWhatsapp className="h-5 w-5" />}
                swing={false}
              >
                Ask about a machine
              </PrimaryButton>
              <GhostButton href="#workplaces">Browse the sectors</GhostButton>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <nav
              aria-label="Sector groups"
              className="rounded-[28px] border border-white/10 bg-ink-800/80 p-6 backdrop-blur md:p-7"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
                {SECTORS.length} sectors · {SECTOR_GROUPS.length} groups
              </p>
              <ol className="mt-4 divide-y divide-white/10">
                {SECTOR_GROUPS.map((group, i) => (
                  <li key={group.id}>
                    <a
                      href={`#${group.id}`}
                      className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-brand"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-white/50">{pad(i + 1)}</span>
                        <span className="text-lg font-semibold">{group.label}</span>
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="rounded-full bg-brand/10 px-2.5 py-0.5 font-mono text-xs font-bold text-brand">
                          {sectorsInGroup(group.id).length}
                        </span>
                        <ArrowRight className="h-4 w-4 text-brand transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Groups() {
  return (
    <section aria-label="Sectors" className="relative py-20 md:py-28">
      <div className="container space-y-24 md:space-y-32">
        {SECTOR_GROUPS.map((group, i) => (
          <div key={group.id} id={group.id}>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <SectionLabel index={pad(i + 1)}>{group.label}</SectionLabel>
                <RevealText text={group.heading} className="font-display text-[clamp(1.9rem,8.5vw,3.5rem)] md:text-[clamp(2.4rem,6vw,4.75rem)]" />
              </div>
              <FadeIn className="text-lg leading-relaxed text-white/60 lg:max-w-md lg:justify-self-end lg:pb-3">
                <p>{group.description}</p>
              </FadeIn>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sectorsInGroup(group.id).map((sector, j) => (
                <FadeIn key={sector.slug} delay={(j % 3) * 0.08} className="h-full">
                  <SectorCard sector={sector} />
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Network() {
  return (
    <section id="network" className="relative overflow-hidden border-t border-white/10 py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[30rem] w-[30rem] rounded-full glow-pink [--glow:0.14]" />
      <div className="container relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel index={pad(SECTOR_GROUPS.length + 1)}>Locations</SectionLabel>
            <RevealText text={HUB.networkHeading} className="font-display text-[clamp(1.9rem,8.5vw,3.5rem)] md:text-[clamp(2.4rem,6vw,4.75rem)]" />
          </div>
          <FadeIn className="text-lg leading-relaxed text-white/60 lg:max-w-md lg:justify-self-end lg:pb-3">
            <p>{HUB.networkText}</p>
          </FadeIn>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((location, i) => (
            <FadeIn key={location.name} delay={(i % 3) * 0.08} className="h-full">
              <LocationCard location={location} index={i} className="h-full w-full" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SectorsHub() {
  usePageMeta({ title: SECTORS_HUB.title, description: SECTORS_HUB.description, path: SECTORS_PATH });
  const next = SECTOR_GROUPS.length + 2;

  return (
    <SiteShell>
      <HubStructuredData
        path={SECTORS_PATH}
        title={SECTORS_HUB.title}
        description={SECTORS_HUB.description}
        crumbs={CRUMBS}
        items={SECTORS.map((sector) => ({ name: sector.name, path: sectorPath(sector.slug) }))}
      />
      <Hero />
      <Ticker items={SECTORS.map((sector) => sector.name)} />
      <Groups />
      <Network />
      <HowItWorks index={pad(next)} />
      <Faq faqs={HUB_FAQS} index={pad(next + 1)} title={HUB.faqTitle} intro={HUB.faqIntro} />
      <Contact index={pad(next + 2)} />
    </SiteShell>
  );
}
