import { MotionConfig } from "framer-motion";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import Home from "@/pages/home";

/** Renders the homepage to static HTML at build time (see scripts/prerender.mjs). */
export function render(path = "/") {
  return renderToString(
    <MotionConfig reducedMotion="user">
      <Router ssrPath={path}>
        <Home />
      </Router>
    </MotionConfig>,
  );
}
