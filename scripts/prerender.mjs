// Pre-renders every public page into dist/public after `vite build`, so search
// engines, AI assistants and link previews get the full page text (and the
// right title, description and canonical URL) without running JavaScript.
// The homepage goes to index.html; other pages go to <path>/index.html.
// If anything fails, the plain client-rendered page is kept and the build
// carries on.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "dist/public");
const htmlPath = path.join(publicDir, "index.html");
const outDir = path.join(root, "dist/prerender");
const placeholder = '<div id="root"></div>';
const siteUrl = "https://www.snackstation.gi";

const escapeAttr = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

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
  return swaps.reduce((html, [pattern, tag]) => {
    if (!pattern.test(html)) throw new Error(`${pattern} not found in index.html`);
    return html.replace(pattern, tag);
  }, template);
}

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
  const { render, routes, missingContent } = await import(
    pathToFileURL(path.join(outDir, "entry-prerender.js")).href
  );
  if (missingContent.length) {
    console.warn(`[prerender] No page copy yet for: ${missingContent.join(", ")}`);
  }

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
} catch (error) {
  console.warn("[prerender] Skipped, serving the client-rendered pages instead.\n", error);
} finally {
  await fs.rm(outDir, { recursive: true, force: true });
}
