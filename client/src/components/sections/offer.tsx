import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Offer() {
  return (
    <section id="offer" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1467806757054-808649965a76"
              alt="Modern Vending Machine"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Free Vending Machine
            </h2>
            <p className="text-muted-foreground mb-8">
              Qualify for a free vending machine installation with our minimum
              purchase agreement. No upfront costs, just great benefits for your
              workplace.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Free installation and maintenance",
                "Regular restocking service",
                "Modern payment systems included",
                "24/7 technical support",
                "Customizable product selection",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" asChild>
              <a href="#contact">Apply Now</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
