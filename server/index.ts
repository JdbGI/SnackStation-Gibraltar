import express from "express";
import path from "path";
import { setupVite, serveStatic } from "./vite";

const app = express();

// Serve static files from the public directory
app.use(express.static(path.resolve("public")));

(async () => {
  // Create a basic Express server that only serves static content
  const server = app.listen(5000, "0.0.0.0", () => {
    console.log("serving on port 5000");
  });

  // Use Vite in development, static files in production
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
})();