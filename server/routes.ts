import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, hashPassword } from "./auth";
import { insertInquirySchema } from "@shared/schema";
import { ZodError } from "zod";

function isAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.isAuthenticated() || !req.user.isAdmin) {
    return res.status(403).json({ message: "Access denied" });
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
        console.error("Failed to create inquiry:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Machine routes
  app.get("/api/machines", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    try {
      const machines = await storage.getMachinesByUser(req.user.id);
      res.json(machines);
    } catch (error) {
      console.error("Failed to get machines:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/machines/:id/sales", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    try {
      const machine = await storage.getMachine(parseInt(req.params.id));
      if (!machine || machine.userId !== req.user.id) {
        return res.status(403).json({ message: "Access denied" });
      }

      const month = req.query.month ? new Date(req.query.month as string) : undefined;
      const sales = await storage.getSalesByMachine(machine.id, month);
      res.json(sales);
    } catch (error) {
      console.error("Failed to get sales:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Admin routes for partner management
  app.post("/api/admin/partners", isAdmin, async (req, res) => {
    try {
      const existingUser = await storage.getUserByUsername(req.body.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const hashedPassword = await hashPassword(req.body.password);
      const user = await storage.createUser({
        ...req.body,
        password: hashedPassword,
        isAdmin: false
      });

      res.status(201).json(user);
    } catch (error) {
      console.error("Failed to create partner:", error);
      res.status(500).json({ message: "Failed to create partner" });
    }
  });

  app.get("/api/admin/partners/:id/sales", isAdmin, async (req, res) => {
    try {
      const partner = await storage.getUser(parseInt(req.params.id));
      if (!partner || partner.isAdmin) {
        return res.status(404).json({ message: "Partner not found" });
      }

      const machines = await storage.getMachinesByUser(partner.id);
      const salesPromises = machines.map(async (machine) => {
        const sales = await storage.getSalesByMachine(machine.id);
        return { machine, sales };
      });

      const results = await Promise.all(salesPromises);
      res.json(results);
    } catch (error) {
      console.error("Failed to get partner sales:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Admin routes
  app.get("/api/admin/partners", isAdmin, async (req, res) => {
    try {
      const partners = await storage.getAllUsers();
      res.json(partners.filter(user => !user.isAdmin));
    } catch (error) {
      console.error("Failed to get partners:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/admin/partners/:id", isAdmin, async (req, res) => {
    try {
      const partner = await storage.getUser(parseInt(req.params.id));
      if (!partner || partner.isAdmin) {
        return res.status(404).json({ message: "Partner not found" });
      }
      const machines = await storage.getMachinesByUser(partner.id);
      res.json({ partner, machines });
    } catch (error) {
      console.error("Failed to get partner details:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
// Route to update machine information
app.post("/api/admin/machines/:id", isAdmin, async (req, res) => {
  try {
    const machineId = parseInt(req.params.id);
    const updatedMachine = await storage.updateMachine(machineId, req.body);
    res.json(updatedMachine);
  } catch (error) {
    console.error("Failed to update machine", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to input monthly sales data
app.post("/api/admin/machines/:id/sales", isAdmin, async (req, res) => {
  try {
    const machineId = parseInt(req.params.id);
    const { month, sales } = req.body;
    const updatedSales = await storage.updateSales(machineId, month, sales);
    res.json(updatedSales);
  } catch (error) {
    console.error("Failed to update sales", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
// Function to update machine information
async updateMachine(machineId: number, machineData: Partial<Machine>): Promise<Machine> {
  const updatedMachine = await machines.update(machineId, machineData);
  return updatedMachine;
}

// Function to update monthly sales data
async updateSales(machineId: number, month: string, sales: number): Promise<Sales> {
  const updatedSales = await salesTable.update({ machineId, month }, { sales });
  return updatedSales;
}