import { ArrowRight, Check, CreditCard, MapPin, PackageCheck, Wrench } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { GhostButton, PrimaryButton } from "@/components/brand/buttons";
import { FadeIn, RevealText, SectionLabel } from "@/components/effects/primitives";
import SiteShell from "@/components/layout/site-shell";
import Contact from "@/components/sections/contact";
import Faq from "@/components/sections/faq";
import HowItWorks from "@/components/sections/how-it-works";
import { ART_TONES, LocationCard } from "@/components/sections/locations";
import Ticker from "@/components/sections/ticker";
import { Breadcrumbs } from "@/components/sectors/breadcrumbs";
import { RichText } from "@/components/sectors/rich-text";
import { SectorCard } from "@/components/sectors/sector-card";
import type { SectorContent } from "@/content/sectors/types";
import { SectorStructuredData, usePageMeta, type Crumb } from "@/lib/seo";
import { getSector, SECTOR_GROUPS, SECTORS, SECTORS_PATH, sectorPath, type Sector } from "@/lib/sectors";
import {
  CONTACT,
  INCLUDED_ON_EVERY_PLAN,
  LOCATIONS,
  PLANS,
  PLANS_FOOTNOTE,
  whatsappLink,
  type Location,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

const anchor = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function findLocations(names: string[]) {
  return names
    .map((name) => LOCATIONS.find((location) => location.name === name))
    .filter((location): location is Location => Boolean(location));
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

const HERO_CHIPS = [
  { icon: CreditCard, label: "Card-only" },
  { icon: PackageCheck, label: "Restocked by us" },
  { icon: Wrench, label: "Repairs included" },
];

/** Illustrated panel for sectors without a customer photo. */
function HeroArt({ sector, index }: { sector: Sector; index: number }) {
  const tone = ART_TONES[index % ART_TONES.length];
  const Icon = sector.icon;
  return (
    <div
      aria-hidden
      className={cn(
        "group relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[28px] lg:max-w-none",
        tone.panel,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-80 [mask-image:radial-gradient(circle_at_60%_40%,#000_15%,transparent_78%)]",
          tone.dots,
        )}
      />
      <span
        className={cn(
          "absolute left-1/2 top-[40%] flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2.25rem] transition-transform duration-700 ease-out-expo group-hover:-rotate-6 group-hover:scale-105 md:h-44 md:w-44",
          tone.tile,
        )}
      >
        <Icon className="h-16 w-16 md:h-20 md:w-20" strokeWidth={1.6} />
      </span>
      <ul className="absolute inset-x-5 bottom-24 flex flex-wrap justify-center gap-2 md:bottom-28">
        {HERO_CHIPS.map(({ icon: ChipIcon, label }) => (
          <li
            key={label}
            className="flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-bold text-brand"
          >
            <ChipIcon className="h-3.5 w-3.5" />
            {label}
          </li>
        ))}
      </ul>
      <span className={cn("font-display absolute bottom-6 left-6 right-6 text-4xl leading-none md:text-5xl", tone.tag)}>
        {sector.tag}
      </span>
      <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-xs font-bold text-brand">
        <MapPin className="h-3.5 w-3.5" />
        Gibraltar
      </span>
    </div>
  );
}

/** A photo of one of our machines at a customer site. */
function HeroPhoto({ location }: { location: Location }) {
  return (
    <figure className="relative mx-auto w-full max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-ink-800 lg:max-w-none">
      <img
        src={location.image}
        srcSet={location.imageSrcSet}
        sizes={location.imageSrcSet ? "(min-width: 1024px) 34vw, 90vw" : undefined}
        alt={`SnackStation vending machine at ${location.name}`}
        className="aspect-[4/5] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
      <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/75 px-4 py-3 text-sm backdrop-blur">
        <MapPin className="h-4 w-4 shrink-0 text-brand" />
        <span>
          <span className="font-semibold text-white">{location.name}</span>
          <span className="text-white/60"> · one of our machines</span>
        </span>
      </figcaption>
    </figure>
  );
}

function Hero({
  sector,
  content,
  crumbs,
  enquiry,
}: {
  sector: Sector;
  content: SectorContent;
  crumbs: Crumb[];
  enquiry: string;
}) {
  const group = SECTOR_GROUPS.find((g) => g.id === sector.group);
  const photo = content.heroLocation
    ? findLocations([content.heroLocation]).find((location) => location.image)
    : undefined;

  return (
    <section className="relative isolate overflow-hidden pb-4 pt-32 md:pt-40">
      <div className="bg-grid mask-radial absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute -right-48 -top-48 -z-10 h-[42rem] w-[42rem] rounded-full glow-pink [--glow:0.28]"
      />
      <div
        aria-hidden
        className="absolute -bottom-56 -left-40 -z-10 h-[34rem] w-[34rem] rounded-full glow-berry [--glow:0.5]"
      />

      <div className="container">
        <FadeIn y={12}>
          <Breadcrumbs crumbs={crumbs} />
        </FadeIn>

        <div className="mt-10 grid items-center gap-12 lg:mt-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14">
          <div>
            <SectionLabel index="SS">{group?.label ?? "Sectors"}</SectionLabel>
            <RevealText
              as="h1"
              play
              text={content.headline}
              className="font-display text-[clamp(2.4rem,5.6vw,4.75rem)]"
            />
            <FadeIn delay={0.2} className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              <p>{content.intro}</p>
            </FadeIn>
            <FadeIn delay={0.3} className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryButton
                href={enquiry}
                target="_blank"
                rel="noopener noreferrer"
                icon={<SiWhatsapp className="h-5 w-5" />}
                swing={false}
              >
                Ask about a machine
              </PrimaryButton>
              <GhostButton href="#plan">See the usual plan</GhostButton>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            {photo ? <HeroPhoto location={photo} /> : <HeroArt sector={sector} index={SECTORS.indexOf(sector)} />}
          </FadeIn>
        </div>

        <dl className="mt-14 grid gap-4 sm:grid-cols-3 md:mt-20">
          {content.facts.map((fact, i) => (
            <FadeIn
              key={fact.label}
              delay={i * 0.08}
              className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 md:p-6"
            >
              <dt className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                {fact.label}
              </dt>
              <dd className="mt-2 text-lg font-semibold leading-snug text-white">{fact.value}</dd>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* The guide: long-form copy with an "on this page" index              */
/* ------------------------------------------------------------------ */

function Guide({ sector, content }: { sector: Sector; content: SectorContent }) {
  const toc = [
    ...content.sections.map((section) => ({ id: anchor(section.heading), label: section.heading })),
    { id: "stock", label: "What goes in the machine" },
    { id: "spots", label: "Where the machine goes" },
    { id: "plan", label: "The usual plan" },
    { id: "faq", label: "Questions and answers" },
  ];

  return (
    <section aria-label={`Vending machines for ${sector.name.toLowerCase()}`} className="relative py-20 md:py-28">
      <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <SectionLabel index="01">The guide</SectionLabel>
          <nav aria-label="On this page">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/55">On this page</p>
            <ol className="border-l border-white/10">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="-ml-px flex items-baseline gap-3 border-l border-transparent py-2 pl-5 text-white/65 transition-colors duration-300 hover:border-brand hover:text-white"
                  >
                    <span className="font-mono text-xs text-brand/80">{pad(i + 1)}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative mt-10 overflow-hidden rounded-[28px] bg-brand p-6 text-ink shadow-[6px_6px_0_#891F5E]">
            <div className="bg-halftone-berry pointer-events-none absolute inset-0 opacity-50" />
            <p className="font-display relative text-2xl">Free site visit</p>
            <p className="relative mt-2 text-sm font-medium leading-relaxed text-ink/75">
              We look at your space, find the best spot and recommend a plan before you sign anything.
            </p>
            <a
              href={CONTACT.whatsappSiteVisit}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-800"
            >
              <SiWhatsapp className="h-4 w-4 text-[#25D366]" />
              Book on WhatsApp
            </a>
          </div>
        </aside>

        <div className="space-y-16 md:space-y-20">
          {content.sections.map((section) => (
            <FadeIn key={section.heading} id={anchor(section.heading)}>
              <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)]">{section.heading}</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/70">
                {section.body.map((paragraph, i) => (
                  <p key={i}>
                    <RichText text={paragraph} />
                  </p>
                ))}
              </div>
              {section.points && (
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 leading-snug text-white/80"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* What goes in the machine                                            */
/* ------------------------------------------------------------------ */

function Stock({ content }: { content: SectorContent }) {
  const { intro, groups } = content.stock;
  return (
    <section id="stock" className="relative overflow-hidden border-y border-white/10 bg-ink-950 py-24 md:py-32">
      <div className="bg-halftone pointer-events-none absolute inset-x-0 top-0 h-72 opacity-20 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel index="02">In the machine</SectionLabel>
            <RevealText
              text="What goes *in the machine.*"
              className="font-display text-[clamp(2.4rem,6vw,5rem)]"
            />
          </div>
          <FadeIn className="text-lg leading-relaxed text-white/60 lg:max-w-md lg:justify-self-end lg:pb-3">
            <p>
              <RichText text={intro} />
            </p>
          </FadeIn>
        </div>

        <div
          className={cn(
            "mt-14 grid gap-5 sm:grid-cols-2",
            groups.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
          )}
        >
          {groups.map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-[28px] border border-white/10 bg-ink-800/80 p-7">
                <span className="font-mono text-xs text-brand">{pad(i + 1)}</span>
                <h3 className="font-display mt-4 text-2xl">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-sm font-semibold text-brand"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/55">
            We choose each machine&apos;s range using sales data from across Gibraltar, and we change it
            as we learn what sells at your site. Tell us your favourites and we&apos;ll add them.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Where the machine goes                                              */
/* ------------------------------------------------------------------ */

function Spots({ content }: { content: SectorContent }) {
  return (
    <section id="spots" className="relative py-24 md:py-32">
      <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionLabel index="03">On site</SectionLabel>
          <RevealText
            text="Where the *machine goes.*"
            className="font-display text-[clamp(2.4rem,6vw,4.5rem)] lg:text-[clamp(2.4rem,4.2vw,4.5rem)]"
          />
          <FadeIn className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
            <p>
              We check your space on a free site visit before anything is agreed. These are the spots
              that tend to work best. All the machine needs is a standard plug socket.
            </p>
          </FadeIn>
        </div>

        <ol className="grid gap-5 sm:grid-cols-2">
          {content.spots.map((spot, i) => (
            <li key={spot.title}>
              <FadeIn delay={(i % 2) * 0.1} className="h-full">
                <div className="group h-full rounded-[28px] border border-white/10 bg-ink-800/80 p-7 transition-colors duration-500 hover:border-brand/40">
                  <span className="font-display hollow-brand text-6xl leading-none transition-colors duration-500 group-hover:text-brand">
                    {i + 1}
                  </span>
                  <h3 className="font-display mt-6 text-2xl">{spot.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/60">{spot.text}</p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Our machines already working in Gibraltar                           */
/* ------------------------------------------------------------------ */

function Proof({ content }: { content: SectorContent }) {
  const sites = findLocations(content.proof.locations);
  return (
    <section id="proof" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full glow-pink [--glow:0.14]" />
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel index="04">Already in Gibraltar</SectionLabel>
            <RevealText
              text={content.proof.heading}
              className="font-display text-[clamp(2.4rem,6vw,4.75rem)]"
            />
          </div>
          <FadeIn className="text-lg leading-relaxed text-white/60 lg:max-w-md lg:justify-self-end lg:pb-3">
            <p>
              <RichText text={content.proof.text} />
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sites.map((location, i) => (
            <FadeIn key={location.name} delay={i * 0.08} className="h-full">
              <LocationCard
                location={location}
                index={LOCATIONS.indexOf(location)}
                counter={false}
                className="h-full w-full"
              />
            </FadeIn>
          ))}
          <FadeIn delay={sites.length * 0.08} className="h-full">
            <a
              href="#contact"
              className="group relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-[28px] bg-brand p-8 text-ink"
            >
              <div className="bg-halftone-berry absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative font-mono text-xs font-bold uppercase tracking-[0.2em]">Next stop</span>
              <p className="font-display relative py-8 text-5xl">
                Your site
                <br />
                next?
              </p>
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-ink text-brand transition-transform duration-500 ease-out-expo group-hover:-rotate-45 group-hover:scale-110">
                <ArrowRight className="h-6 w-6" />
              </span>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* The usual plan                                                      */
/* ------------------------------------------------------------------ */

function PlanFit({ fit }: { fit: SectorContent["plan"]["fits"][number] }) {
  const plan = PLANS.find((p) => p.name === fit.plan);
  if (!plan) return null;
  const rows: [string, string][] = [
    ["Installation", plan.installation],
    ["Monthly fee", plan.monthlyFee],
    ["Minimum term", plan.minimumTerm],
  ];
  return (
    <div
      className={cn(
        "relative flex flex-col gap-6 rounded-[28px] p-7 md:p-8 xl:flex-row xl:items-center xl:justify-between",
        plan.featured
          ? "bg-gradient-to-br from-brand-900/70 via-ink-800 to-ink-800"
          : "border border-white/10 bg-ink-800/80",
      )}
    >
      {plan.featured && <span aria-hidden className="conic-ring" />}
      <div className="relative">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand">{fit.when}</p>
        <h3 className="font-display mt-3 text-3xl md:text-[2.1rem]">{plan.name}</h3>
        <p className="mt-2 text-white/60">{plan.priceCaption}</p>
      </div>
      <dl className="relative grid shrink-0 grid-cols-3 gap-3 text-sm xl:w-[25rem]">
        {rows.map(([term, value]) => (
          <div key={term} className="rounded-2xl bg-white/[0.04] p-3">
            <dt className="text-xs text-white/55">{term}</dt>
            <dd className="mt-1 font-bold text-white">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Plan({ content }: { content: SectorContent }) {
  return (
    <section id="plan" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full glow-berry [--glow:0.4]" />
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel index="05">Service plan</SectionLabel>
            <RevealText
              text="The usual *plan.*"
              className="font-display text-[clamp(2.6rem,6.2vw,5.75rem)]"
            />
          </div>
          <FadeIn className="text-lg leading-relaxed text-white/60 lg:max-w-md lg:justify-self-end lg:pb-3">
            <p>
              <RichText text={content.plan.text} />
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
          <div className="grid content-start gap-5">
            {content.plan.fits.map((fit, i) => (
              <FadeIn key={fit.plan} delay={i * 0.08}>
                <PlanFit fit={fit} />
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.1} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 md:p-8">
            <h3 className="font-display text-xl md:text-2xl">Included on every plan</h3>
            <ul className="mt-5 space-y-3">
              {INCLUDED_ON_EVERY_PLAN.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-white/50">{PLANS_FOOTNOTE}</p>
            <a
              href="/#offer"
              className="group mt-6 inline-flex items-center gap-2 font-bold text-brand"
            >
              Compare all three plans
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Related sectors                                                     */
/* ------------------------------------------------------------------ */

function Related({ content }: { content: SectorContent }) {
  const related = content.related
    .map((slug) => getSector(slug))
    .filter((sector): sector is Sector => Boolean(sector));
  return (
    <section id="related" className="relative border-t border-white/10 py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="08">Keep exploring</SectionLabel>
            <RevealText text="More places *we go.*" className="font-display text-[clamp(2.4rem,6vw,4.75rem)]" />
          </div>
          <FadeIn>
            <GhostButton href={SECTORS_PATH}>
              Every sector we cover
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </GhostButton>
          </FadeIn>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {related.map((sector, i) => (
            <FadeIn key={sector.slug} delay={i * 0.08} className="h-full">
              <SectorCard sector={sector} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export default function SectorPage({ sector, content }: { sector: Sector; content: SectorContent }) {
  const path = sectorPath(sector.slug);
  usePageMeta({ title: content.title, description: content.description, path });

  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Vending machines", path: SECTORS_PATH },
    { name: sector.name, path },
  ];
  const enquiry = whatsappLink(content.enquiry);

  return (
    <SiteShell>
      <SectorStructuredData
        path={path}
        title={content.title}
        description={content.description}
        serviceName={content.headline.replace(/\*/g, "").replace(/\.$/, "")}
        audience={sector.name}
        crumbs={crumbs}
      />
      <Hero sector={sector} content={content} crumbs={crumbs} enquiry={enquiry} />
      <Ticker items={content.ticker} />
      <Guide sector={sector} content={content} />
      <Stock content={content} />
      <Spots content={content} />
      <Proof content={content} />
      <Plan content={content} />
      <HowItWorks index="06" />
      <Faq
        faqs={content.faqs}
        index="07"
        title={content.faqTitle}
        intro={`Straight answers about vending machines for ${sector.name.toLowerCase()} in Gibraltar. Can't see your question? Send us a message.`}
        enquiry={enquiry}
      />
      <Related content={content} />
      <Contact index="09" enquiry={enquiry} />
    </SiteShell>
  );
}
