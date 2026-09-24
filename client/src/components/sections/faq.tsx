import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { PrimaryButton } from "@/components/brand/buttons";
import { FadeIn, RevealText, SectionLabel } from "@/components/effects/primitives";
import { CONTACT, FAQS } from "@/lib/site-data";
import { FaqStructuredData } from "@/lib/seo";
import { cn } from "@/lib/utils";

function FaqItem({
  question,
  answer,
  open,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const id = useId();
  return (
    <div className="border-b border-white/10">
      <h3>
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={onToggle}
          className="group flex w-full items-start gap-5 py-6 text-left md:py-7"
        >
          <span className="mt-1 font-mono text-xs text-brand">{String(index + 1).padStart(2, "0")}</span>
          <span className="flex-1 text-lg font-semibold text-white transition-colors group-hover:text-brand md:text-xl">
            {question}
          </span>
          <span
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
              open ? "rotate-45 border-brand bg-brand text-ink" : "border-white/15 text-brand",
            )}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      {/* Answers stay in the DOM when closed, so they're always crawlable. */}
      <div
        id={`${id}-a`}
        role="region"
        aria-labelledby={`${id}-q`}
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-out-expo",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-7 pl-10 leading-relaxed text-white/65 md:text-lg">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <FaqStructuredData />
      <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionLabel index="09">FAQ</SectionLabel>
          <RevealText
            text="Vending questions, *answered.*"
            className="font-display text-[clamp(2.4rem,7vw,4.5rem)] lg:text-[clamp(2.4rem,4.2vw,4.5rem)]"
          />
          <FadeIn className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
            Everything you need to know about getting a vending machine in Gibraltar. Can&apos;t
            find your answer? Send us a message.
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10">
            <PrimaryButton
              href={CONTACT.whatsappEnquiry}
              target="_blank"
              rel="noopener noreferrer"
              icon={<SiWhatsapp className="h-5 w-5" />}
              swing={false}
            >
              Ask us on WhatsApp
            </PrimaryButton>
          </FadeIn>
        </div>

        <FadeIn className="border-t border-white/10">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.question}
              index={i}
              question={faq.question}
              answer={faq.answer}
              open={open === i}
              onToggle={() => setOpen((current) => (current === i ? -1 : i))}
            />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
