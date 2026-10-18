import { SECTOR_CONTENT } from "@/content/sectors";
import { SECTORS, SECTORS_HUB, SECTORS_PATH, sectorPath } from "@/lib/sectors";
import {
  CONTACT,
  LOCATIONS,
  MACHINE_PAYMENT,
  MACHINE_SHELVES,
  MACHINE_VIEWS,
  MACHINES,
  machineImage,
  PLANS,
  PLANS_FOOTNOTE,
  PLANS_INTRO,
  SITE,
} from "@/lib/site-data";

/**
 * Every public page. The build pre-renders each one and lists it in
 * sitemap.xml and llms.txt (see scripts/prerender.mjs), so a new sector page
 * is picked up everywhere without editing those files by hand.
 */
export type SitePage = {
  path: string;
  /** Head tags for the page. The homepage keeps the ones in index.html. */
  meta?: { title: string; description: string };
  /** The page's last real change (YYYY-MM-DD): its <lastmod> in the sitemap. */
  lastmod: string;
  /** Images on the page that this site hosts, listed in the sitemap for Google Images. */
  images: string[];
};

/** Photos of customer sites hosted here, for the named locations (or all of them). */
function sitePhotos(names?: string[]) {
  return LOCATIONS.filter((location) => !names || names.includes(location.name)).flatMap((location) =>
    location.image?.startsWith("/") ? [location.image] : [],
  );
}

export const SITE_PAGES: SitePage[] = [
  {
    path: "/",
    lastmod: SITE.updated,
    images: [
      ...MACHINES.flatMap((machine) => MACHINE_VIEWS.map((view) => machineImage(machine.id, view).src)),
      ...sitePhotos(),
    ],
  },
  {
    path: SECTORS_PATH,
    meta: { title: SECTORS_HUB.title, description: SECTORS_HUB.description },
    lastmod: SECTORS_HUB.updated,
    images: sitePhotos(),
  },
  ...SECTORS.filter((sector) => SECTOR_CONTENT[sector.slug]).map((sector) => {
    const content = SECTOR_CONTENT[sector.slug];
    return {
      path: sectorPath(sector.slug),
      meta: { title: content.title, description: content.description },
      lastmod: content.updated,
      images: sitePhotos([...(content.heroLocation ? [content.heroLocation] : []), ...content.proof.locations]),
    };
  }),
];

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** sitemap.xml: every public page with its last change and images. */
export function sitemapXml() {
  const urls = SITE_PAGES.map((page) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(page.lastmod)) {
      throw new Error(`${page.path} has an invalid updated date "${page.lastmod}" (use YYYY-MM-DD)`);
    }
    const images = Array.from(new Set(page.images)).map(
      (image) => `    <image:image>\n      <image:loc>${escapeXml(SITE.url + image)}</image:loc>\n    </image:image>`,
    );
    return [
      "  <url>",
      `    <loc>${escapeXml(SITE.url + page.path)}</loc>`,
      `    <lastmod>${page.lastmod}</lastmod>`,
      ...images,
      "  </url>",
    ].join("\n");
  });
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}

function listWords(words: string[]) {
  return words.length > 1 ? `${words.slice(0, -1).join(", ")} and ${words[words.length - 1]}` : words[0];
}

/** llms.txt: a plain-text guide to the business and its pages for AI assistants. */
export function llmsTxt() {
  const stock = listWords(Array.from(new Set(MACHINE_SHELVES.map((shelf) => shelf.label.toLowerCase()))));
  return [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    "SnackStation supplies, installs, stocks and services card-only snack and drink vending machines for workplaces and venues across Gibraltar. We stock it, service it and fix it. You just provide the plug.",
    "",
    "## Machines",
    "",
    ...MACHINES.map(
      ({ name, summary, specs }) =>
        `- ${name}: ${summary} ${specs.height} x ${specs.width} x ${specs.depth} mm (H x W x D), ${specs.weightKg} kg. Holds about ${specs.capacity} items with up to ${specs.selections} choices on ${specs.shelves} shelves, chilled to ${specs.temperature[0]}-${specs.temperature[1]}°C.`,
    ),
    "",
    `Every machine takes ${MACHINE_PAYMENT.toLowerCase()} payments and stocks ${stock}.`,
    "",
    "## Service plans",
    "",
    PLANS_INTRO,
    "",
    ...PLANS.map(
      (plan) =>
        `- ${plan.name} (${plan.audience.toLowerCase()}): ${plan.priceCaption} Minimum term ${plan.minimumTerm}.${plan.note.title ? ` ${plan.note.title}` : ""}`,
    ),
    "",
    PLANS_FOOTNOTE,
    "",
    "## Pages",
    "",
    ...SITE_PAGES.map((page) => {
      const { title, description } = page.meta ?? SITE;
      return `- [${title.replace(/ \| SnackStation$/, "")}](${SITE.url}${page.path}): ${description}`;
    }),
    "",
    "## Contact",
    "",
    `- WhatsApp: ${CONTACT.whatsappDisplay} (${CONTACT.whatsapp})`,
    `- Partner login: ${CONTACT.partnerLogin}`,
    `- Company: ${CONTACT.company}`,
    "",
  ].join("\n");
}
