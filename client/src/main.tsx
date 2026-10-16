import { createRoot } from "react-dom/client";
import App from "./App";
import { preloadPage } from "./lib/lazy-pages";
import "./index.css";

// Pages outside the main bundle load before the first render, so their
// pre-rendered HTML isn't swapped for a loading spinner on the way in.
void preloadPage(window.location.pathname).then(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
