import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Smart Vending Solutions for Your{" "}
            <span className="text-primary">Workspace</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Transform your office snacking experience with SnackStation's modern
            vending machines. Premium refreshments available 24/7.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <a href="#contact">Get Started</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#offer">Free Machine Offer</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <img 
            src="https://www.barton.gi/wp-content/uploads/2025/02/vhm_1739290463.png" 
            alt="SnackStation Vending Machine" 
            className="w-full max-w-sm object-contain h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}