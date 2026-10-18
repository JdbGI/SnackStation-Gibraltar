// Pre-renders every public page into dist/public after `vite build`, so search
// engines, AI assistants and link previews get the full page text (and the
// right title, description and canonical URL) without running JavaScript.
// The homepage goes to index.html; other pages go to <path>/index.html, and
// the "page not found" page goes to 404.html.
// If a page fails, the plain client-rendered page is kept and the build
// carries on. It also writes sitemap.xml and llms.txt from the same list of
// pages; if those can't be written the build fails, so the live site keeps
// its last good copies.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "dist/public");
const htmlPath = path.join(publicDir, "index.html");
const outDir = path.join(root, "dist/prerender");
const notFoundPath = path.join(publicDir, "404.html");
const placeholder = '<div id="root"></div>';
const siteUrl = "https://www.snackstation.gi";

const escapeAttr = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Applies [pattern, replacement] swaps to index.html, failing if a tag is missing. */
function swapTags(template, swaps) {
  return swaps.reduce((html, [pattern, tag]) => {
    if (!pattern.test(html)) throw new Error(`${pattern} not found in index.html`);
    return html.replace(pattern, tag);
  }, template);
}

/** Head for the 404 page: its own title, kept out of search and with no canonical URL. */
function notFoundHead(template) {
  return swapTags(template, [
    [/<title>[\s\S]*?<\/title>/, "<title>Page not found | SnackStation</title>"],
    [/<meta\s+name="robots"\s+content="[^"]*"\s*\/>/, '<meta name="robots" content="noindex" />'],
    [/\s*<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/, ""],
  ]);
}

/** Swaps the homepage's head tags in index.html for a page's own. */
function withHead(template, route) {
  if (!route.meta) return template;
  const url = `${siteUrl}${route.path}`;
  const title = escapeAttr(route.meta.title);
  const description = escapeAttr(route.meta.description);
  const swaps = [
    [/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`],
    [/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`],
    [/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`],
    [/<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`],
    [/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, `<meta property="og:title" content="${title}" />`],
    [
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${description}" />`,
    ],
    [/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${title}" />`],
    [
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${description}" />`,
    ],
  ];
  return swapTags(template, swaps);
}

let searchFilesWritten = false;

try {
  await build({
    configFile: path.join(root, "vite.config.ts"),
    logLevel: "warn",
    build: {
      ssr: path.join(root, "client/src/entry-prerender.tsx"),
      outDir,
      emptyOutDir: true,
    },
  });
  const { render, renderNotFound, routes, missingContent, sitemapXml, llmsTxt } = await import(
    pathToFileURL(path.join(outDir, "entry-prerender.js")).href
  );
  if (missingContent.length) {
    console.warn(`[prerender] No page copy yet for: ${missingContent.join(", ")}`);
  }

  await fs.writeFile(path.join(publicDir, "sitemap.xml"), sitemapXml());
  await fs.writeFile(path.join(publicDir, "llms.txt"), llmsTxt());
  searchFilesWritten = true;
  const images = routes.reduce((sum, route) => sum + new Set(route.images).size, 0);
  console.log(`[prerender] Wrote sitemap.xml (${routes.length} pages, ${images} images) and llms.txt.`);

  const template = await fs.readFile(htmlPath, "utf8");
  if (!template.includes(placeholder)) throw new Error("#root placeholder not found in index.html");

  let done = 0;
  let total = 0;
  for (const route of routes) {
    try {
      const appHtml = render(route.path);
      const page = withHead(template, route).replace(
        placeholder,
        `<div id="root"><div data-prerendered>${appHtml}</div></div>`,
      );
      const file = route.path === "/" ? htmlPath : path.join(publicDir, route.path, "index.html");
      await fs.mkdir(path.dirname(file), { recursive: true });
      await fs.writeFile(file, page);
      done += 1;
      total += appHtml.length;
    } catch (error) {
      console.warn(`[prerender] Skipped ${route.path}, it will be client-rendered.\n`, error);
    }
  }
  console.log(
    `[prerender] ${done} of ${routes.length} pages pre-rendered (${Math.round(total / 1024)} KB of HTML).`,
  );

  try {
    const page = notFoundHead(template).replace(
      placeholder,
      `<div id="root"><div data-prerendered>${renderNotFound()}</div></div>`,
    );
    await fs.writeFile(notFoundPath, page);
  } catch (error) {
    console.warn("[prerender] Skipped 404.html, using the app shell instead.\n", error);
  }
} catch (error) {
  console.warn("[prerender] Skipped, serving the client-rendered pages instead.\n", error);
} finally {
  await fs.rm(outDir, { recursive: true, force: true });
}

// vercel.json sends unknown addresses to 404.html. Without a pre-rendered one,
// the app shell still shows the app's own "page not found" screen.
await fs.access(notFoundPath).catch(() => fs.copyFile(htmlPath, notFoundPath));

if (!searchFilesWritten) {
  console.error("[prerender] Could not write sitemap.xml and llms.txt, so the build has failed.");
  process.exit(1);
}
