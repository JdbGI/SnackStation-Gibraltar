import express from "express";
import { setupVite, serveStatic } from "./vite";
import { registerRoutes } from "./routes";
import bodyParser from "body-parser";

const app = express();

(async () => {
  // Parse JSON bodies
  app.use(bodyParser.json());

  // Register API routes
  registerRoutes(app);

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