import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth } from "./auth";
import { insertInquirySchema } from "@shared/schema";
import { ZodError } from "zod";

function isAdmin(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
  if (!req.isAuthenticated() || !req.user.isAdmin) {
    return res.sendStatus(403);
  }
  next();
}

export function registerRoutes(app: Express): Server {
  setupAuth(app);

  app.post("/api/inquiries", async (req, res) => {
    try {
      const inquiry = insertInquirySchema.parse(req.body);
      const result = await storage.createInquiry(inquiry);
      res.json(result);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Machine routes
  app.get("/api/machines", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const machines = await storage.getMachinesByUser(req.user.id);
    res.json(machines);
  });

  app.get("/api/machines/:id/sales", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const machine = await storage.getMachine(parseInt(req.params.id));
    if (!machine || machine.userId !== req.user.id) {
      return res.sendStatus(403);
    }

    const month = req.query.month ? new Date(req.query.month as string) : undefined;
    const sales = await storage.getSalesByMachine(machine.id, month);
    res.json(sales);
  });

  // Admin routes
  app.get("/api/admin/partners", isAdmin, async (req, res) => {
    const partners = await storage.getAllUsers();
    res.json(partners.filter(user => !user.isAdmin));
  });

  app.get("/api/admin/partners/:id", isAdmin, async (req, res) => {
    const partner = await storage.getUser(parseInt(req.params.id));
    if (!partner || partner.isAdmin) {
      return res.sendStatus(404);
    }
    const machines = await storage.getMachinesByUser(partner.id);
    res.json({ partner, machines });
  });

  const httpServer = createServer(app);
  return httpServer;
}