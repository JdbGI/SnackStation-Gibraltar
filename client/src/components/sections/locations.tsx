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
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              name: "Mid Harbours Small Boats Marina",
              image: "http://www.barton.gi/wp-content/uploads/2025/02/IMG_7792-Large.jpeg",
              description: "Serving the boating community with convenient refreshments",
            },
            {
              name: "Gibtelecom Mount Pleasant",
              image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
              description: "Providing snacks and drinks to the Gibtelecom team",
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
                  <p className="text-muted-foreground">{location.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}