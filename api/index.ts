import express from "express";
import { registerRoutes } from "../server/routes";
import { setupAuth } from "../server/auth";

const app = express();

// Set basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register auth and API routes
// The setupAuth function is called within registerRoutes, so we don't need to call it again.
// We just need to ensure the database seeding doesn't happen on every serverless function invocation.
registerRoutes(app);

// Export the Express API for Vercel
export default app;
