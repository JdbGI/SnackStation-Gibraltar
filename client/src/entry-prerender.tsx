import { MotionConfig } from "framer-motion";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { SECTOR_CONTENT } from "@/content/sectors";
import { SECTORS } from "@/lib/sectors";
import { SITE_PAGES } from "@/lib/site-pages";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import VendingMachines from "@/pages/vending-machines";

export { llmsTxt, sitemapXml } from "@/lib/site-pages";

/** Every public page that gets its own static HTML file. */
export const routes = SITE_PAGES;

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

/** The page sent, with a 404 status, for any address that isn't a page (see vercel.json). */
export function renderNotFound() {
  return renderToString(
    <MotionConfig reducedMotion="user">
      <NotFound />
    </MotionConfig>,
  );
}
