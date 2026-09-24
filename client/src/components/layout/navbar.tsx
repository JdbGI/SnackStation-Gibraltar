import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { useLocation } from "wouter";
import { EASE_IN_OUT, EASE_OUT_EXPO } from "@/components/effects/primitives";
import { CONTACT, NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

function useActiveSection(ids: readonly string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids, enabled]);
  return active;
}

export default function Navbar() {
  const [location] = useLocation();
  const onHome = location === "/";
  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const active = useActiveSection(SECTION_IDS, onHome);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > prev && y > 480);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const pillTarget = hovered ?? active;
  const solid = scrolled || open;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden && !open ? -110 : 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
        className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 md:px-6 md:pt-4"
      >
        <nav
          aria-label="Main"
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border py-2 pl-5 pr-2 transition-[background-color,border-color,box-shadow] duration-500",
            solid
              ? "border-white/10 bg-ink/75 shadow-[0_16px_50px_-18px_rgba(255,128,191,0.35)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <a
            href={onHome ? "#top" : "/"}
            className="group relative flex shrink-0 items-center"
            aria-label="SnackStation home"
            onClick={() => setOpen(false)}
          >
            <img
              src="/brand/snackstation-logo-pink.png"
              alt="SnackStation"
              width={450}
              height={156}
              className="h-9 w-auto transition-transform duration-500 ease-out group-hover:-skew-x-6 group-hover:scale-105 md:h-10"
            />
          </a>

          <ul className="hidden items-center lg:flex" onMouseLeave={() => setHovered(null)}>
            {NAV_LINKS.map((link) => (
              <li key={link.id} className={link.xlOnly ? "hidden xl:block" : undefined}>
                <a
                  href={href(link.id)}
                  onMouseEnter={() => setHovered(link.id)}
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    pillTarget === link.id ? "text-ink" : "text-white/70 hover:text-white",
                  )}
                >
                  {pillTarget === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-brand"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with SnackStation on WhatsApp"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-ink sm:flex"
            >
              <SiWhatsapp className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.partnerLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hidden h-11 items-center gap-2 overflow-hidden rounded-full bg-brand px-5 text-sm font-bold text-ink transition-transform duration-300 hover:scale-[1.03] md:inline-flex"
            >
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <span className="relative">Partner Login</span>
              <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand hover:text-ink lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && <MobileMenu href={href} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ href, onClose }: { href: (id: string) => string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      id="mobile-menu"
      initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
      animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
      exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
      transition={{ duration: 0.7, ease: EASE_IN_OUT }}
      className="fixed inset-0 z-[99] flex flex-col overflow-y-auto bg-brand px-6 pb-10 pt-28 text-ink lg:hidden"
    >
      <div className="bg-halftone-berry pointer-events-none absolute inset-0 opacity-50" />
      <ul className="relative flex flex-col gap-1">
        {[{ id: "top", label: "Home" }, ...NAV_LINKS].map((link, i) => (
          <li key={link.id} className="overflow-hidden">
            <motion.a
              href={href(link.id)}
              onClick={onClose}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              exit={{ y: "110%" }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.15 + i * 0.05 }}
              className="font-display flex items-baseline gap-3 py-1 text-[clamp(2.4rem,11vw,4rem)] transition-colors active:text-white"
            >
              <span className="font-mono text-xs not-italic tracking-normal opacity-60">
                0{i + 1}
              </span>
              {link.label}
            </motion.a>
          </li>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="relative mt-auto grid gap-3 pt-10 sm:grid-cols-2"
      >
        <a
          href={CONTACT.whatsappEnquiry}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-4 font-bold text-white"
        >
          <SiWhatsapp className="h-5 w-5 text-[#25D366]" />
          WhatsApp {CONTACT.whatsappDisplay}
        </a>
        <a
          href={CONTACT.partnerLogin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full border-2 border-ink px-6 py-4 font-bold"
        >
          Partner Login <ArrowUpRight className="h-4 w-4" />
        </a>
      </motion.div>
    </motion.div>
  );
}
