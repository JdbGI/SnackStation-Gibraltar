import Van from "@/components/brand/van";
import { FadeIn, RevealText, SectionLabel } from "@/components/effects/primitives";
import { TEAM_POINTS } from "@/lib/site-data";

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden py-24 md:py-32">
      <div className="container grid items-center gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <SectionLabel index="02">Local team</SectionLabel>
          <RevealText
            text="Local team, *on the road*."
            className="font-display text-[clamp(2.6rem,7vw,5rem)] lg:text-[clamp(2.6rem,4.8vw,5rem)]"
          />
          <FadeIn className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
            SnackStation is run by a Gibraltar-based team. We look after installation, restocking
            and servicing ourselves, so there&apos;s nothing for you to manage.
          </FadeIn>
          <ul className="mt-10 space-y-6">
            {TEAM_POINTS.map((point, i) => {
              const Icon = point.icon;
              return (
                <li key={point.title}>
                  <FadeIn delay={0.08 * i} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand text-ink shadow-[3px_3px_0_#891F5E]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{point.title}</h3>
                      <p className="mt-1 text-white/60">{point.description}</p>
                    </div>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </div>

        <FadeIn className="relative">
          <div
            aria-hidden
            className="bg-halftone absolute left-1/2 top-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 [mask-image:radial-gradient(circle,#000_30%,transparent_70%)]"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full glow-pink [--glow:0.3]"
          />
          <Van className="relative" />
        </FadeIn>
      </div>
    </section>
  );
}
