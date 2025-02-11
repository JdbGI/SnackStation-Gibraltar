import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-muted/50 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Growing Network
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join the growing list of satisfied businesses across Gibraltar using
            SnackStation vending solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              type: "Corporate Offices",
              image: "https://images.unsplash.com/photo-1580785693001-bb53b8a17707",
              count: "15+ Locations",
            },
            {
              type: "Business Centers",
              image: "https://images.unsplash.com/photo-1588087889332-444c3354c8d9",
              count: "8+ Locations",
            },
            {
              type: "Tech Hubs",
              image: "https://images.unsplash.com/photo-1561198929-06611095c95d",
              count: "5+ Locations",
            },
            {
              type: "Coworking Spaces",
              image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf",
              count: "10+ Locations",
            },
          ].map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <img
                  src={location.image}
                  alt={location.type}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{location.type}</h3>
                  <p className="text-primary font-medium">{location.count}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
