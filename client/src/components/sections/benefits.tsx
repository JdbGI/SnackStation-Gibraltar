import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  EASE_IN_OUT,
  FadeIn,
  RevealText,
  SectionLabel,
} from "@/components/effects/primitives";
import { BENEFITS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function BenefitCard({
  benefit,
  index,
  className,
}: {
  benefit: (typeof BENEFITS)[number];
  index: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.article
      ref={ref}
      initial={{ clipPath: "inset(100% 0% 0% 0% round 28px)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 28px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.2, ease: EASE_IN_OUT, delay: index * 0.12 }}
      className={cn(
        "group relative aspect-[4/5] overflow-hidden rounded-[28px] bg-ink-800",
        className,
      )}
    >
      <motion.div style={{ y: imageY }} className="absolute -inset-y-[10%] inset-x-0">
        <img
          src={benefit.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1400 ease-out group-hover:scale-110"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
      <div className="absolute inset-0 bg-brand/0 mix-blend-color transition-colors duration-700 group-hover:bg-brand/30" />

      <span className="font-display hollow absolute left-6 top-5 text-6xl text-white/70 transition-colors duration-500 group-hover:text-brand">
        0{index + 1}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <h3 className="font-display text-2xl md:text-3xl">{benefit.title}</h3>
        <p className="mt-3 text-white/70 transition-colors duration-500 group-hover:text-white">
          {benefit.description}
        </p>
        <span className="mt-5 block h-1 w-12 origin-left rounded-full bg-brand transition-transform duration-700 ease-out group-hover:scale-x-[3]" />
      </div>
    </motion.article>
  );
}

export default function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-800/30 blur-[140px]" />
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel index="03">Benefits</SectionLabel>
            <RevealText
              text="Benefits for *your* location."
              className="font-display text-[clamp(2.6rem,6.2vw,5.75rem)]"
            />
          </div>
          <FadeIn className="text-lg leading-relaxed text-white/60 lg:max-w-md lg:justify-self-end lg:pb-3">
            Discover how SnackStation enhances convenience and accessibility for everyone in your
            location.
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              index={i}
              className={i === 1 ? "md:mt-20" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
