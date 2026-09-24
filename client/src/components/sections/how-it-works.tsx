import { motion, useScroll, useSpring } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { useRef } from "react";
import { PrimaryButton } from "@/components/brand/buttons";
import { FadeIn, RevealText, SectionLabel } from "@/components/effects/primitives";
import { CONTACT, STEPS } from "@/lib/site-data";

export default function HowItWorks() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 85%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-brand py-24 text-ink md:py-32">
      <div className="bg-halftone-berry pointer-events-none absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,#000,transparent_75%)]" />
      <div
        aria-hidden
        className="font-display pointer-events-none absolute -right-[4vw] top-10 select-none text-[26vw] leading-none text-ink/[0.06]"
      >
        Plug
      </div>

      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
          <div>
            <SectionLabel index="07" tone="ink">
              How it works
            </SectionLabel>
            <RevealText
              text="You just provide the *plug.*"
              highlightClassName="text-white extrude-ink"
              className="font-display text-[clamp(2.8rem,7vw,6.5rem)]"
            />
          </div>
          <FadeIn className="text-lg font-medium leading-relaxed text-ink/75 lg:pb-3">
            We stock it, service it and fix it. Getting a SnackStation for your workplace takes
            four simple steps, and we recommend the right plan for your site before you sign
            anything.
          </FadeIn>
        </div>

        <div ref={stepsRef} className="mt-16">
          <div className="mb-10 flex items-center gap-4">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">Four steps</span>
            <div className="relative hidden h-1 flex-1 rounded-full bg-ink/15 md:block">
              <motion.div
                style={{ scaleX: progress }}
                className="absolute inset-0 origin-left rounded-full bg-ink"
              />
            </div>
          </div>

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.title}>
                  <FadeIn delay={i * 0.12} className="h-full">
                    <div className="group relative h-full rounded-[28px] bg-ink p-7 text-white shadow-[8px_8px_0_#891F5E] transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-[12px_14px_0_#891F5E] md:p-8">
                      <div className="flex items-start justify-between">
                        <span className="font-display hollow-brand text-7xl leading-none transition-colors duration-500 group-hover:text-brand">
                          {i + 1}
                        </span>
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-ink transition-transform duration-500 group-hover:rotate-12">
                          <Icon className="h-6 w-6" />
                        </span>
                      </div>
                      <h3 className="font-display mt-8 text-2xl">{step.title}</h3>
                      <p className="mt-3 leading-relaxed text-white/60">{step.description}</p>
                    </div>
                  </FadeIn>
                </li>
              );
            })}
          </ol>

          <ul className="mt-10 flex flex-wrap gap-3 text-sm font-semibold">
            <li className="rounded-full bg-ink/10 px-4 py-2">12-month minimum term</li>
            <li className="rounded-full bg-ink/10 px-4 py-2">Free site visit before you sign</li>
            <li className="rounded-full bg-ink/10 px-4 py-2">
              Our guarantee: if it isn&apos;t selling, we remove it at our cost
            </li>
          </ul>
        </div>

        <FadeIn className="mt-14 flex flex-col gap-6 rounded-[28px] border-2 border-dashed border-ink/30 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="max-w-2xl text-lg text-ink/80">
            <strong className="text-ink">Not sure which plan fits?</strong> Tell us about your site and
            roughly how many people are there each day. We&apos;ll visit, find the best spot and
            recommend the right plan for you.
          </p>
          <PrimaryButton
            tone="ink"
            href={CONTACT.whatsappSiteVisit}
            target="_blank"
            rel="noopener noreferrer"
            icon={<SiWhatsapp className="h-5 w-5" />}
            swing={false}
            className="shrink-0 self-start md:self-auto"
          >
            Book a free site visit
          </PrimaryButton>
        </FadeIn>
      </div>
    </section>
  );
}
