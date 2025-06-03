import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import ws from "ws";
import * as schema from "@shared/schema";

// Configure Neon for serverless environments
neonConfig.webSocketConstructor = ws;

// Production Neon database URL
const NEON_DB_URL = "postgresql://neondb_owner:npg_5WtJlhG9sAIj@ep-aged-star-a4xgfo75.us-east-1.aws.neon.tech/neondb?sslmode=require";

// Use production URL for deployment, local URL for development
const databaseUrl = process.env.NODE_ENV === 'production' 
  ? NEON_DB_URL 
  : (process.env.DATABASE_URL || NEON_DB_URL);

console.log(`Using database: ${databaseUrl.split('@')[0]}@***`);

// Create the database connection using neon function
const sql = neon(databaseUrl);
export const db = drizzle(sql, { 
  schema
});
