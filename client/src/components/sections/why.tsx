import { PrimaryButton } from "@/components/brand/buttons";
import { FadeIn, RevealText, SectionLabel } from "@/components/effects/primitives";
import { REASONS } from "@/lib/site-data";

export default function Why() {
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="container grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionLabel index="04">Why SnackStation</SectionLabel>
          <RevealText
            text="Why *choose* SnackStation?"
            className="font-display text-[clamp(1.75rem,8.6vw,3.25rem)] lg:text-[clamp(2.4rem,4.2vw,4.5rem)]"
          />
          <FadeIn className="mt-8 max-w-md text-lg leading-relaxed text-white/60">
            Fast, first-class and always on. Here&apos;s what keeps people coming back to a
            SnackStation.
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10">
            <PrimaryButton href="#contact">Talk to our team</PrimaryButton>
          </FadeIn>
        </div>

        <ul className="border-t border-white/10">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <li key={reason.title}>
                <FadeIn delay={i * 0.06} className="group relative overflow-hidden border-b border-white/10">
                  <span
                    aria-hidden
                    className="absolute inset-0 origin-left scale-x-0 bg-brand transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
                  />
                  <div className="relative flex items-start gap-5 px-1 py-8 transition-colors duration-500 group-hover:text-ink md:gap-8 md:px-6 md:py-11">
                    <span className="mt-2 font-mono text-sm text-brand transition-colors duration-500 group-hover:text-ink">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-[clamp(1.9rem,4.2vw,3.4rem)] transition-transform duration-700 ease-out-expo group-hover:translate-x-2">
                        {reason.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-white/60 transition-colors duration-500 group-hover:text-ink/80 md:text-lg">
                        {reason.description}
                      </p>
                    </div>
                    <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 text-brand transition-all duration-500 group-hover:rotate-[-20deg] group-hover:scale-110 group-hover:border-ink group-hover:bg-ink sm:flex">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
