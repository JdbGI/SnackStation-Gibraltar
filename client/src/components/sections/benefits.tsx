import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-muted/50 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefits for Your Location
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how SnackStation enhances convenience and accessibility for everyone in your location.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Snacks & Drinks - 24/7",
              description:
                "Ensure everyone in your space can easily grab their favourite snacks and drinks whenever they need them.",
              image: "https://www.barton.gi/wp-content/uploads/2025/02/20-IMG_5264-Large.jpeg",
            },
            {
              title: "Zero Maintenance Required",
              description:
                "We handle everything from restocking to maintenance, letting you focus on your business.",
              image: "https://www.barton.gi/wp-content/uploads/2025/02/31-IMG_5233-Large.jpeg",
            },
            {
              title: "Modern Payment Solutions",
              description:
                "Accept all payment methods including contactless cards and mobile payments.",
              image: "https://www.barton.gi/wp-content/uploads/2025/02/7-IMG_5297-Large.jpeg",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}