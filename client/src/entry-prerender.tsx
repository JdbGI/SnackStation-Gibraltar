import { MotionConfig } from "framer-motion";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { SECTOR_CONTENT } from "@/content/sectors";
import { SECTORS, SECTORS_HUB, SECTORS_PATH, sectorPath } from "@/lib/sectors";
import Home from "@/pages/home";
import VendingMachines from "@/pages/vending-machines";

export type PrerenderRoute = {
  path: string;
  /** Head tags for the page. The homepage keeps the ones in index.html. */
  meta?: { title: string; description: string };
};

/** Every public page that gets its own static HTML file. */
export const routes: PrerenderRoute[] = [
  { path: "/" },
  { path: SECTORS_PATH, meta: SECTORS_HUB },
  ...SECTORS.filter((sector) => SECTOR_CONTENT[sector.slug]).map((sector) => ({
    path: sectorPath(sector.slug),
    meta: {
      title: SECTOR_CONTENT[sector.slug].title,
      description: SECTOR_CONTENT[sector.slug].description,
    },
  })),
];

/** Sectors that are listed but have no page copy yet (should be none). */
export const missingContent = SECTORS.filter((sector) => !SECTOR_CONTENT[sector.slug]).map(
  (sector) => sector.slug,
);

/** Renders one page to static HTML at build time (see scripts/prerender.mjs). */
export function render(path = "/") {
  const Page = path === "/" ? Home : VendingMachines;
  return renderToString(
    <MotionConfig reducedMotion="user">
      <Router ssrPath={path}>
        <Page />
      </Router>
    </MotionConfig>,
  );
}
