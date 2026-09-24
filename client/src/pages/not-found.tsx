import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/brand/buttons";
import { EASE_OUT_EXPO } from "@/components/effects/primitives";
import { usePageMeta } from "@/lib/seo";

export default function NotFound() {
  usePageMeta({ title: "Page not found | SnackStation", noindex: true });
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-ink px-5 text-white">
      <div className="bg-grid mask-radial pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full glow-pink [--glow:0.3]" />

      <div className="relative text-center">
        <a href="/" className="mx-auto mb-12 block w-fit">
          <img src="/brand/snackstation-logo-pink.png" alt="SnackStation" className="h-10 w-auto" />
        </a>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand">Error 404 · Slot empty</p>
        <motion.h1
          initial={{ y: 40, opacity: 0, rotate: -4 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: EASE_OUT_EXPO }}
          className="font-display extrude mt-4 text-[clamp(7rem,28vw,16rem)] text-brand"
        >
          404
        </motion.h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-white/60">
          Looks like this one&apos;s sold out. The page you&apos;re after isn&apos;t in the machine,
          but there&apos;s plenty more to grab back home.
        </p>
        <div className="mt-10 flex justify-center">
          <PrimaryButton href="/">Back to SnackStation</PrimaryButton>
        </div>
      </div>
    </main>
  );
}
