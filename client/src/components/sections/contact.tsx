import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useId } from "react";
import { SiWhatsapp } from "react-icons/si";
import { GhostButton, PrimaryButton } from "@/components/brand/buttons";
import {
  EASE_IN_OUT,
  FadeIn,
  Magnetic,
  RevealText,
  SectionLabel,
} from "@/components/effects/primitives";
import { CONTACT } from "@/lib/site-data";

function WhatsAppOrb() {
  const id = useId().replace(/:/g, "");
  return (
    <a
      href={CONTACT.whatsappEnquiry}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="Chat"
      aria-label={`Chat with SnackStation on WhatsApp, ${CONTACT.whatsappDisplay}`}
      className="group relative flex h-56 w-56 items-center justify-center rounded-full bg-brand text-ink shadow-[8px_8px_0_#891F5E] transition-[transform,box-shadow] duration-500 ease-out hover:scale-105 hover:shadow-[12px_12px_0_#891F5E] md:h-64 md:w-64"
    >
      <svg viewBox="0 0 100 100" aria-hidden className="absolute inset-0 animate-spin-slow">
        <defs>
          <path id={id} d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
        </defs>
        <text className="fill-ink font-mono text-[7.4px] font-bold uppercase" letterSpacing="2.5">
          <textPath href={`#${id}`}>Chat on WhatsApp • Quick response • </textPath>
        </text>
      </svg>
      <span className="flex flex-col items-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-ink text-[#25D366] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
          <SiWhatsapp className="h-10 w-10" />
        </span>
      </span>
    </a>
  );
}

const ROCK_SKYLINE =
  "M0 236 L120 232 L150 150 L175 92 L205 58 L240 44 L290 62 L350 70 L420 52 L470 48 L540 74 L620 96 L720 124 L820 152 L930 184 L1040 212 L1200 236";

/** Stylised skyline of the Rock, drawn in as you arrive. */
function RockOutline() {
  return (
    <svg
      viewBox="0 0 1200 260"
      preserveAspectRatio="none"
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full md:h-56"
    >
      <defs>
        <linearGradient id="rock-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FF80BF" stopOpacity="0.14" />
          <stop offset="1" stopColor="#FF80BF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${ROCK_SKYLINE} L1200 260 L0 260 Z`} fill="url(#rock-fill)" />
      <motion.path
        d={ROCK_SKYLINE}
        fill="none"
        stroke="#FF80BF"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, ease: EASE_IN_OUT }}
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden pb-48 pt-28 md:pb-64 md:pt-40">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[36rem] w-[70rem] -translate-x-1/2 rounded-full glow-pink [--glow:0.22]" />
      <div className="bg-grid mask-radial pointer-events-none absolute inset-0 opacity-60" />
      <RockOutline />

      <div className="container relative">
        <SectionLabel index="10">Contact</SectionLabel>
        <RevealText
          text="Ready for your *next step?*"
          className="font-display text-[clamp(3rem,9.5vw,8.75rem)]"
        />

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto]">
          <FadeIn className="max-w-2xl">
            <p className="text-2xl font-semibold text-white md:text-3xl">
              Let&apos;s reach your destination together.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              Contact us today to find out how SnackStation can benefit your business and discover
              if you qualify for a free vending machine. Looking to install a vending machine?
              Message us on WhatsApp for a quick response and we&apos;ll find the best vending
              solution for your location.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryButton
                href={CONTACT.whatsappEnquiry}
                target="_blank"
                rel="noopener noreferrer"
                icon={<SiWhatsapp className="h-5 w-5" />}
                swing={false}
              >
                Contact us on WhatsApp
              </PrimaryButton>
              <GhostButton href={CONTACT.partnerLogin} target="_blank" rel="noopener noreferrer">
                Partner Login
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </GhostButton>
            </div>
            <p className="mt-8 font-mono text-sm text-white/55">
              WhatsApp · <span className="text-white/70">{CONTACT.whatsappDisplay}</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="flex justify-center lg:justify-end">
            <Magnetic strength={0.25}>
              <WhatsAppOrb />
            </Magnetic>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
