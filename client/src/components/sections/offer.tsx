import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Offer() {
  return (
    <section id="offer" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Flexible Business Models
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We offer three adaptable models to ensure a mutually beneficial partnership,
            designed to suit various business locations and customer needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Standard Locations",
              subtitle: "Fully Managed, No Cost",
              description:
                "Perfect for sites with high footfall and significant sales potential. No upfront or ongoing costs, with full supply, installation, stocking and maintenance included.",
              idealFor: "Large offices, busy public spaces, and tourist hubs such as Main Street or Casemates Square.",
              features: ["Free installation", "No ongoing costs", "Full management", "Enhanced service"],
              badge: "Free!",
            },
            {
              title: "Lower Footfall Locations",
              subtitle: "Small Fee Model",
              description:
                "Designed for locations where sales potential may be lower. A small management fee covers operational costs while maintaining our complete supply and management service.",
              idealFor: "Smaller offices and moderate traffic areas.",
              features: ["Minimal fee", "Complete management", "Regular maintenance", "Flexible terms"],
            },
            {
              title: "Premium Locations",
              subtitle: "Profit-Sharing Model",
              description:
                "For premium locations with high commercial viability. The machine is installed and managed at no cost, with profits shared between partners.",
              idealFor: "High-traffic commercial areas and premium business locations.",
              features: ["No upfront cost", "Profit sharing", "Full maintenance", "Partnership benefits"],
            },
          ].map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full relative">
                {model.badge && (
                  <span className="absolute -top-3 right-4 bg-primary/90 text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-lg shadow-lg transform -rotate-12 border-2 border-primary/20 backdrop-blur-sm">
                    {model.badge}
                  </span>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{model.title}</h3>
                  <p className="text-primary font-medium mb-4">{model.subtitle}</p>
                  <p className="text-muted-foreground mb-4">{model.description}</p>
                  <p className="font-medium mb-2">Ideal For:</p>
                  <p className="text-muted-foreground mb-4">{model.idealFor}</p>
                  <ul className="space-y-2">
                    {model.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}