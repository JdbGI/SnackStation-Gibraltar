import { users, type User, type InsertUser, machines, type Machine, type InsertMachine, sales, type Sales, type InsertSales, inquiries, type Inquiry, type InsertInquiry } from "@shared/schema";
import { eq, and, gte, lte } from "drizzle-orm";
import session from "express-session";
import connectPg from "connect-pg-simple";
import { db, pool } from "./db";

const PostgresSessionStore = connectPg(session);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;

  // Machine operations
  getMachinesByUser(userId: number): Promise<Machine[]>;
  getMachine(id: number): Promise<Machine | undefined>;
  createMachine(machine: InsertMachine): Promise<Machine>;

  // Sales operations
  getSalesByMachine(machineId: number, month?: Date): Promise<Sales[]>;
  createSales(sales: InsertSales): Promise<Sales>;

  getAllUsers(): Promise<User[]>;
  getUsersWithMachines(): Promise<(User & { machines: Machine[] })[]>;

  sessionStore: session.Store;
}

export class DatabaseStorage implements IStorage {
  sessionStore: session.Store;

  constructor() {
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

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const result = await db.insert(inquiries).values(inquiry).returning();
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
    if (month) {
      const startDate = new Date(month.getFullYear(), month.getMonth(), 1);
      const endDate = new Date(month.getFullYear(), month.getMonth() + 1, 0);

      return await db
        .select()
        .from(sales)
        .where(
          and(
            eq(sales.machineId, machineId),
            gte(sales.date, startDate.toISOString().split('T')[0]),
            lte(sales.date, endDate.toISOString().split('T')[0])
          )
        );
    }

    return await db
      .select()
      .from(sales)
      .where(eq(sales.machineId, machineId));
  }

  async createSales(salesData: InsertSales): Promise<Sales> {
    const result = await db.insert(sales).values(salesData).returning();
    return result[0];
  }

  async getAllUsers(): Promise<User[]> {
    return await db.select().from(users);
  }

  async getUsersWithMachines(): Promise<(User & { machines: Machine[] })[]> {
    const allUsers = await this.getAllUsers();
    const usersWithMachines = await Promise.all(
      allUsers.map(async (user) => ({
        ...user,
        machines: await this.getMachinesByUser(user.id),
      }))
    );
    return usersWithMachines;
  }
}

export const storage = new DatabaseStorage();