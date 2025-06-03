import { db } from "./db";
import { products, users, machines, sales } from "@shared/schema";
import { hashPassword } from "./auth";
import { eq } from "drizzle-orm";

export async function seedDatabase() {
  try {
    console.log("Starting database seeding...");

    // Check if products already exist
    const existingProducts = await db.select().from(products).limit(1);
    if (existingProducts.length > 0) {
      console.log("Database already seeded, skipping...");
      return;
    }

    // Seed products
    const productData = [
      {
        name: "Shower Gel Dermo Moist 50ml",
        brand: "Sanex",
        description: "Moisturizing shower gel for sensitive skin with dermatologically tested formula",
        price: "2.99",
        imageUrl: "/images/products/sanex-shower-gel.webp",
        category: "Personal Care",
        inStock: true,
        sku: "SX50SG"
      },
      {
        name: "Shower Gel Coconut 50ml",
        brand: "Original Source",
        description: "Natural coconut shower gel with tropical fragrance",
        price: "2.49",
        imageUrl: "/images/products/original-source-coconut.webp",
        category: "Personal Care",
        inStock: true,
        sku: "OS50CO"
      },
      {
        name: "Deodorant Roll On Men Active 50ml",
        brand: "Sanex",
        description: "24-hour protection roll-on deodorant for active men",
        price: "3.99",
        imageUrl: "/images/products/sanex-deodorant.png",
        category: "Personal Care",
        inStock: true,
        sku: "SX50DEO"
      },
      {
        name: "Dental Travel Kit",
        brand: "Fluorodine",
        description: "Complete dental care travel kit with toothbrush and toothpaste",
        price: "4.99",
        imageUrl: "/images/products/fluorodine-dental-kit.jpg",
        category: "Personal Care",
        inStock: true,
        sku: "FL-DTK"
      },
      {
        name: "Femfresh Wipes 15's",
        brand: "Femfresh",
        description: "Intimate hygiene wipes for daily freshness and comfort",
        price: "3.99",
        imageUrl: "/images/products/femfresh-wipes.webp",
        category: "Personal Care",
        inStock: true,
        sku: "FF15"
      },
      {
        name: "Hand Cream Protective Care Beeswax 75ml",
        brand: "Nivea",
        description: "Nourishing hand cream with natural beeswax for dry skin protection",
        price: "4.50",
        imageUrl: "/images/products/nivea-hand-cream.webp",
        category: "Personal Care",
        inStock: true,
        sku: "NV75HC"
      },
      {
        name: "Fusion Ultra Sensitive Shaving Gel 75ml",
        brand: "Gillette",
        description: "Ultra sensitive shaving gel for comfortable and smooth shave",
        price: "5.99",
        imageUrl: "/images/products/gillette-shave-gel.webp",
        category: "Personal Care",
        inStock: true,
        sku: "GF75SG"
      },
      {
        name: "Plax Cool Mint Travel Mouthwash 100ml",
        brand: "Colgate",
        description: "Antibacterial mouthwash with cool mint flavor for fresh breath",
        price: "2.99",
        imageUrl: "/images/products/colgate-plax-mouthwash.webp",
        category: "Personal Care",
        inStock: true,
        sku: "CP100MW"
      },
      {
        name: "Micellar Water Sensitive Skin 100ml",
        brand: "Nivea",
        description: "Gentle micellar water for sensitive skin cleansing and makeup removal",
        price: "4.99",
        imageUrl: "/images/products/nivea-micellar-water.webp",
        category: "Personal Care",
        inStock: true,
        sku: "NV100MW"
      },
      {
        name: "Refreshing Face Wash Gel 50ml",
        brand: "Simple",
        description: "Gentle face wash gel with vitamin B5 and vitamin E for daily cleansing",
        price: "3.49",
        imageUrl: "/images/products/simple-face-wash.webp",
        category: "Personal Care",
        inStock: true,
        sku: "SP50FW"
      },
      {
        name: "Shampoo Repair & Protect 90ml",
        brand: "Pantene",
        description: "Strengthening shampoo for weak and damaged hair with Pro-Vitamin B5",
        price: "4.49",
        imageUrl: "/images/products/pantene-shampoo.jpg",
        category: "Personal Care",
        inStock: true,
        sku: "PT90RP"
      },
      {
        name: "Shampoo Classic 95ml",
        brand: "Head & Shoulders",
        description: "Anti-dandruff shampoo with zinc pyrithione for healthy scalp",
        price: "3.99",
        imageUrl: "/images/products/head-shoulders-shampoo.webp",
        category: "Personal Care",
        inStock: true,
        sku: "HS95SH"
      }
    ];

    // Insert products
    await db.insert(products).values(productData);
    console.log(`Seeded ${productData.length} products`);

    // Create admin user if it doesn't exist
    const existingAdmin = await db.select().from(users).where(eq(users.username, "admin")).limit(1);
    if (existingAdmin.length === 0) {
      const hashedPassword = await hashPassword("admin123");
      await db.insert(users).values({
        username: "admin",
        password: hashedPassword,
        name: "Admin User",
        email: "admin@snackstation.com",
        isAdmin: true
      });
      console.log("Created admin user");
    }

    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}