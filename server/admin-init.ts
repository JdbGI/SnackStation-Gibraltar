import { storage } from "./storage";
import { hashPassword } from "./auth";

async function createAdminUser() {
  const hashedPassword = await hashPassword("admin123");
  await storage.createUser({
    username: "admin",
    password: hashedPassword,
    name: "Admin User",
    email: "admin@snackstation.com",
    isAdmin: true
  });
}

createAdminUser().catch(console.error);
