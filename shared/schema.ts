import { pgTable, text, serial, integer, decimal, timestamp, date, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  message: text("message").notNull()
});

export const insertInquirySchema = createInsertSchema(inquiries).extend({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  isAdmin: boolean("is_admin").notNull().default(false),
});

export const machines = pgTable("machines", {
  id: serial("id").primaryKey(),
  machineNumber: text("machine_number").notNull().unique(),
  location: text("location").notNull(),
  userId: integer("user_id").references(() => users.id).notNull(),
});

export const sales = pgTable("sales", {
  id: serial("id").primaryKey(),
  machineId: integer("machine_id").references(() => machines.id).notNull(),
  date: date("date").notNull(),
  totalSales: integer("total_sales").notNull(),
  revenue: decimal("revenue", { precision: 10, scale: 2 }).notNull(),
  cardCommission: decimal("card_commission", { precision: 10, scale: 2 }).notNull(),
  profitSharingEarnings: decimal("profit_sharing_earnings", { precision: 10, scale: 2 }).notNull(),
  cogs: decimal("cogs", { precision: 10, scale: 2 }).notNull(),
});

// User schemas
export const insertUserSchema = createInsertSchema(users).extend({
  password: z.string().min(6, "Password must be at least 6 characters"),
  email: z.string().email("Please enter a valid email address"),
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

// Machine schemas
export const insertMachineSchema = createInsertSchema(machines);
export type Machine = typeof machines.$inferSelect;
export type InsertMachine = z.infer<typeof insertMachineSchema>;

// Sales schemas
export const insertSalesSchema = createInsertSchema(sales);
export type Sales = typeof sales.$inferSelect;
export type InsertSales = z.infer<typeof insertSalesSchema>;