import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import ws from "ws";
import * as schema from "@shared/schema";

// Configure Neon for serverless environments
neonConfig.webSocketConstructor = ws;

// Use the provided Neon database URL or fallback to environment variable
const databaseUrl = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL || "postgresql://neondb_owner:npg_5WtJlhG9sAIj@ep-aged-star-a4xgfo75.us-east-1.aws.neon.tech/neondb?sslmode=require";

if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Create the database connection using neon function
const sql = neon(databaseUrl);
export const db = drizzle(sql, { 
  schema
});
