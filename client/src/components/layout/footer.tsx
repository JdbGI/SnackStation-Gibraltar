import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useLocation } from "wouter";
import { EASE_OUT_EXPO, Magnetic } from "@/components/effects/primitives";
import { CONTACT, NAV_LINKS } from "@/lib/site-data";

const WORDMARK = "SNACKSTATION".split("");

export default function Footer() {
  const [location] = useLocation();
  const onHome = location === "/";
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950 pt-20">
      <div className="bg-halftone mask-fade-b pointer-events-none absolute inset-x-0 top-0 h-64 opacity-20" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />

      <div className="container relative grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_auto]">
        <div className="max-w-sm">
          <img
            src="/brand/snackstation-logo-pink.png"
            alt="SnackStation"
            width={450}
            height={156}
            loading="lazy"
            className="h-14 w-auto"
            style={{ filter: "drop-shadow(3px 3px 0 #891F5E)" }}
          />
          <p className="mt-6 text-white/60">
            Fully managed, Gibraltar-based vending. Card-only machines, top brands and a local team
            looking after everything.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-brand">Explore</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={onHome ? `#${link.id}` : `/#${link.id}`}
                  className="group inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                >
                  <span className="h-px w-0 bg-brand transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Get in touch
          </h3>
          <ul className="space-y-4">
            <li>
              <a
                href={CONTACT.whatsappEnquiry}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white transition-colors hover:text-brand"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                  <SiWhatsapp className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-lg font-semibold">{CONTACT.whatsappDisplay}</span>
                  <span className="block text-sm text-white/50">Quick response on WhatsApp</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={CONTACT.partnerLogin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-brand"
              >
                Partner Login
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <p className="mt-1 text-sm text-white/50">
                Existing partners — view your machine stats and reports.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex items-start lg:justify-end">
          <Magnetic strength={0.4}>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-full border border-white/15 text-white transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-ink"
            >
              <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
              <span className="font-mono text-[10px] uppercase tracking-widest">Top</span>
            </button>
          </Magnetic>
        </div>
      </div>

      <div aria-hidden className="relative mt-20 select-none overflow-hidden px-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
          transition={{ staggerChildren: 0.04 }}
          className="font-display flex justify-center whitespace-nowrap text-[9.4vw] leading-[0.85]"
        >
          {WORDMARK.map((ch, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: "0%", opacity: 1, transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
              }}
              className="inline-block"
            >
              <span className="hollow-brand inline-block pr-[0.02em] transition-[color,transform,text-shadow] duration-300 hover:-translate-y-[0.08em] hover:text-brand hover:[text-shadow:0.03em_0.03em_0_#891F5E,0.06em_0.06em_0_#891F5E]">
                {ch}
              </span>
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/50 sm:flex-row">
          <p>
            © {year} {CONTACT.company}
          </p>
          <p>
            Website built by{" "}
            <a
              href={CONTACT.builtBy.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline-offset-4 hover:underline"
            >
              {CONTACT.builtBy.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
