import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
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

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "High-Performing Locations",
              subtitle: "Fully Managed, No Cost",
              description:
                "Ideal for high-footfall locations where management prioritise providing users with convenient access to snacks and drinks. No upfront or ongoing costs—SnackStation handles full supply, installation, stocking, and maintenance, ensuring a hassle-free solution.",
              idealFor: "Ideal For: Large offices, residential complexes, and public access areas.",
              features: ["Free installation", "No ongoing costs", "Full management"],
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
              <Card className="h-full">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Ready For Your Next Step?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Let's reach your destination together.
          </p>
          <Button size="lg" className="gap-2" asChild>
            <a href="#contact">
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}