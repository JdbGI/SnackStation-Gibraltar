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
            Benefits for Your Business
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how SnackStation can enhance your workplace environment and
            employee satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Boost Employee Satisfaction",
              description:
                "Keep your team happy and energized with easy access to their favorite snacks and drinks.",
              image: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f",
            },
            {
              title: "Zero Maintenance Required",
              description:
                "We handle everything from restocking to maintenance, letting you focus on your business.",
              image: "https://images.unsplash.com/photo-1515923256482-1c04580b477c",
            },
            {
              title: "Modern Payment Solutions",
              description:
                "Accept all payment methods including contactless cards and mobile payments.",
              image: "https://images.unsplash.com/photo-1529678407585-55ac0053aa47",
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
