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
            Join our expanding network of SnackStation locations across Gibraltar.
            Our machines are strategically placed to serve various communities and businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              name: "Mid Harbours Small Boats Marina",
              image: "https://www.barton.gi/wp-content/uploads/2025/02/MHSBM-Machine-Image.jpg",
              description: "Serving the boating community with convenient refreshments 24/7. Our machines provide easy access to snacks and drinks for marina visitors and boat owners.",
              features: ["24/7 Access", "Waterfront Location", "Card Payments"]
            },
            {
              name: "Gibtelecom Mount Pleasant",
              image: "/office.jpg",
              description: "Supporting Gibtelecom's workforce with quality refreshments throughout the day. Our machines help keep their team energized and productive.",
              features: ["Corporate Location", "Premium Snacks", "Staff Favorite"]
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
                  alt={location.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                  <p className="text-muted-foreground mb-4">{location.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}