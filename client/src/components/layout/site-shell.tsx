import type { ReactNode } from "react";
import { CursorFollower, Grain, ScrollProgress } from "@/components/effects/chrome";
import Footer from "./footer";
import Navbar from "./navbar";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-ink text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CursorFollower />
      <Grain />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
