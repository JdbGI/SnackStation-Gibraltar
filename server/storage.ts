import { users, type User, type InsertUser, machines, type Machine, type InsertMachine, sales, type Sales, type InsertSales } from "@shared/schema";
import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";
import session from "express-session";
import connectPg from "connect-pg-simple";

const PostgresSessionStore = connectPg(session);

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Machine operations
  getMachinesByUser(userId: number): Promise<Machine[]>;
  getMachine(id: number): Promise<Machine | undefined>;
  createMachine(machine: InsertMachine): Promise<Machine>;

  // Sales operations
  getSalesByMachine(machineId: number, month?: Date): Promise<Sales[]>;
  createSales(sales: InsertSales): Promise<Sales>;

  sessionStore: session.Store;
}

export class DatabaseStorage implements IStorage {
  private pool: Pool;
  sessionStore: session.Store;

  constructor() {
    this.pool = pool;
    this.sessionStore = new PostgresSessionStore({
      pool,
      createTableIfMissing: true,
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(user: InsertUser): Promise<User> {
    const result = await db.insert(users).values(user).returning();
    return result[0];
  }

  async getMachinesByUser(userId: number): Promise<Machine[]> {
    return await db.select().from(machines).where(eq(machines.userId, userId));
  }

  async getMachine(id: number): Promise<Machine | undefined> {
    const result = await db.select().from(machines).where(eq(machines.id, id));
    return result[0];
  }

  async createMachine(machine: InsertMachine): Promise<Machine> {
    const result = await db.insert(machines).values(machine).returning();
    return result[0];
  }

  async getSalesByMachine(machineId: number, month?: Date): Promise<Sales[]> {
    let query = db.select().from(sales).where(eq(sales.machineId, machineId));
    if (month) {
      const startDate = new Date(month.getFullYear(), month.getMonth(), 1);
      const endDate = new Date(month.getFullYear(), month.getMonth() + 1, 0);
      query = query.where(
        and(
          eq(sales.machineId, machineId),
          sales.date >= startDate,
          sales.date <= endDate
        )
      );
    }
    return await query;
  }

  async createSales(salesData: InsertSales): Promise<Sales> {
    const result = await db.insert(sales).values(salesData).returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();