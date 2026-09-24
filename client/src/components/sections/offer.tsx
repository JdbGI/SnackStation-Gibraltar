import { ArrowUpRight, Check } from "lucide-react";
import {
  FadeIn,
  RevealText,
  SectionLabel,
  TiltCard,
} from "@/components/effects/primitives";
import { MODELS, whatsappLink, type BusinessModel } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function ModelCard({ model, index }: { model: BusinessModel; index: number }) {
  const featured = Boolean(model.badge);
  const details: [string, string][] = [
    ["Cost to your business", model.cost],
    ["Our role", model.role],
    ["Benefits", model.benefits],
    ["Ideal for", model.idealFor],
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
      {model.badge && (
        <span className="font-display absolute -right-3 -top-6 animate-wobble rounded-xl bg-brand px-4 py-2 text-2xl text-ink shadow-[4px_4px_0_#891F5E]">
          {model.badge}
        </span>
      )}

      <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
        Model 0{index + 1}
      </span>
      <h3 className="font-display mt-5 text-3xl md:text-[2.1rem]">{model.title}</h3>
      <p className="mt-2 text-lg font-semibold text-brand">{model.subtitle}</p>
      <p className="mt-4 leading-relaxed text-white/60">{model.description}</p>

      <dl className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
        {details.map(([term, value]) => (
          <div key={term}>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand/80">{term}</dt>
            <dd className="mt-1 text-white/80">{value}</dd>
          </div>
        ))}
      </dl>

      <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
        {model.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-9">
        <a
          href={whatsappLink(
            `Hi SnackStation! I'm interested in the ${model.title} (${model.subtitle}) option for my location.`,
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
          Enquire about this model
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

export default function Offer() {
  return (
    <section id="offer" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-800/25 blur-[160px]" />
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel index="06">Business models</SectionLabel>
            <RevealText
              text="Flexible business *models*."
              className="font-display text-[clamp(2.6rem,6.2vw,5.75rem)]"
            />
          </div>
          <FadeIn className="text-lg leading-relaxed text-white/60 lg:max-w-md lg:justify-self-end lg:pb-3">
            We offer three adaptable models to ensure a mutually beneficial partnership, designed to
            suit various business locations and customer needs.
          </FadeIn>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {MODELS.map((model, i) => (
            <FadeIn key={model.title} delay={i * 0.1} className="h-full">
              <TiltCard className="h-full" max={5}>
                <ModelCard model={model} index={i} />
              </TiltCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mx-auto mt-14 max-w-2xl text-center text-lg text-white/60">
          Each model is designed to be customer-centred and maximise profitability for both your
          business and <span className="font-semibold text-brand">SnackStation</span>.
        </FadeIn>
      </div>
    </section>
  );
}
