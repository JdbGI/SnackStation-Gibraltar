import express from "express";
import path from "path";
import { setupVite, serveStatic } from "./vite";
import { registerRoutes } from "./routes";
import { seedDatabase } from "./seed-data";

const app = express();
export default app;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.resolve("public")));

// Instead of immediately listening, export it so Vercel can run it serverlessly.
// We'll wrap the startup in a function that we can call safely or that Vercel invokes.
export async function setupServer() {
  try {
    // Initialize database with product data
    await seedDatabase();
  } catch (error) {
    console.error("Failed to seed database:", error);
  }

  // Register API routes first
  const server = registerRoutes(app);

  // Use Vite in development, static files in production
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  return server;
}

// Only listen if this file is run directly (local development)
// In Vercel, it gets imported by api/index.ts, so this won't run.
if (process.argv[1]?.endsWith("index.ts") || process.argv[1]?.endsWith("index.js")) {
  setupServer().then((server) => {
    server.listen(5000, "0.0.0.0", () => {
      console.log("serving on port 5000");
    });
  });
}