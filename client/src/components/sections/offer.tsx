import { ArrowUpRight, Check } from "lucide-react";
import {
  FadeIn,
  RevealText,
  SectionLabel,
  TiltCard,
} from "@/components/effects/primitives";
import {
  INCLUDED_ON_EVERY_PLAN,
  PLANS,
  PLANS_FOOTNOTE,
  PLANS_INTRO,
  whatsappLink,
  type ServicePlan,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

function PlanCard({ plan }: { plan: ServicePlan }) {
  const featured = Boolean(plan.featured);
  const rows: [string, string][] = [
    ["Installation", plan.installation],
    ["Monthly fee", plan.monthlyFee],
    ["Minimum term", plan.minimumTerm],
  ];

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-[28px] p-8 md:p-9",
        featured
          ? "bg-gradient-to-b from-brand-900/70 via-ink-800 to-ink-800"
          : "border border-white/10 bg-ink-800/80",
      )}
    >
      {featured && <span aria-hidden className="conic-ring" />}

      <h3 className="font-display text-3xl md:text-[2.1rem]">{plan.name}</h3>
      <p className="mt-2 text-white/60">{plan.audience}</p>

      <div className="mt-7 border-t border-white/10 pt-6">
        <p className="flex flex-wrap items-baseline gap-x-2">
          <span
            className={cn(
              "font-display",
              plan.price.length > 4 ? "text-5xl" : "text-6xl",
              featured ? "text-brand extrude" : "text-white",
            )}
          >
            {plan.price}
          </span>
          {plan.priceSuffix && (
            <span className="text-lg font-semibold text-white/70">{plan.priceSuffix}</span>
          )}
        </p>
        <p className="mt-2 text-white/60">{plan.priceCaption}</p>
      </div>

      <dl className="mt-6 divide-y divide-dashed divide-white/10 border-y border-white/10 text-sm">
        {rows.map(([term, value]) => (
          <div key={term} className="flex items-center justify-between py-3">
            <dt className="text-white/60">{term}</dt>
            <dd className="font-bold text-white">{value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-7 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Best for</p>
      <ul className="mt-3 space-y-2 text-sm">
        {plan.bestFor.map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <p
        className={cn(
          "mt-7 rounded-2xl p-4 text-sm leading-relaxed",
          featured ? "bg-white/[0.06] text-white/80" : "bg-brand/10 text-white/80",
        )}
      >
        {plan.note.title && <strong className="text-brand">{plan.note.title} </strong>}
        {plan.note.text}
      </p>

      <div className="mt-auto pt-8">
        <a
          href={whatsappLink(
            `Hi SnackStation! I'm interested in the ${plan.name} plan for my workplace. Could we book a free site visit?`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group/cta flex items-center justify-between rounded-full px-6 py-4 font-bold transition-colors duration-300",
            featured
              ? "bg-brand text-ink hover:bg-white"
              : "border border-white/15 text-white hover:border-brand hover:bg-brand hover:text-ink",
          )}
        >
          Enquire about {plan.name}
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

export default function Offer() {
  return (
    <section id="offer" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full glow-berry [--glow:0.4]" />
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel index="06">Service plans</SectionLabel>
            <RevealText
              text="Choose your *plan*."
              className="font-display text-[clamp(2.6rem,6.2vw,5.75rem)]"
            />
          </div>
          <FadeIn className="text-lg leading-relaxed text-white/60 lg:max-w-md lg:justify-self-end lg:pb-3">
            Fully managed vending for Gibraltar workplaces. We stock it, service it and fix it. You
            just provide the plug. {PLANS_INTRO}
          </FadeIn>
        </div>

        <FadeIn className="mt-14 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <h3 className="font-display text-xl md:text-2xl">Included on every plan</h3>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED_ON_EVERY_PLAN.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/80">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {PLANS.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1} className="h-full">
              <TiltCard className="h-full" max={5}>
                <PlanCard plan={plan} />
              </TiltCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mx-auto mt-12 max-w-3xl text-center text-white/60">
          {PLANS_FOOTNOTE}
        </FadeIn>
      </div>
    </section>
  );
}
