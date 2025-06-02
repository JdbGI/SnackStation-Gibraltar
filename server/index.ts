import express from "express";
import path from "path";
import { setupVite, serveStatic } from "./vite";
import { registerRoutes } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.resolve("public")));

(async () => {
  // Register API routes first
  const server = registerRoutes(app);
  
  server.listen(5000, "0.0.0.0", () => {
    console.log("serving on port 5000");
  });

  // Use Vite in development, static files in production
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
})();