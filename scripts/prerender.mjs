// Pre-renders the homepage into dist/public/index.html after `vite build`, so
// search engines, AI assistants and link previews get the full page text
// without running JavaScript. If anything fails, the plain client-rendered
// page is kept and the build carries on.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "dist/public/index.html");
const outDir = path.join(root, "dist/prerender");
const placeholder = '<div id="root"></div>';

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
  const { render } = await import(pathToFileURL(path.join(outDir, "entry-prerender.js")).href);
  const appHtml = render("/");
  const template = await fs.readFile(htmlPath, "utf8");
  if (!template.includes(placeholder)) throw new Error("#root placeholder not found in index.html");
  await fs.writeFile(
    htmlPath,
    template.replace(placeholder, `<div id="root"><div data-prerendered>${appHtml}</div></div>`),
  );
  console.log(`[prerender] Homepage pre-rendered (${Math.round(appHtml.length / 1024)} KB of HTML).`);
} catch (error) {
  console.warn("[prerender] Skipped, serving the client-rendered page instead.\n", error);
} finally {
  await fs.rm(outDir, { recursive: true, force: true });
}
