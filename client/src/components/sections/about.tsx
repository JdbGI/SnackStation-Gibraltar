import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Settings, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're Gibraltar's leading vending machine provider, offering modern
            solutions that combine convenience with quality refreshments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: CreditCard,
              title: "Cashless Operation",
              description:
                "Card-only system minimizes maintenance issues and keeps your machine running efficiently.",
            },
            {
              icon: Settings,
              title: "Free Installation",
              description:
                "Our local team manages the complete installation process at no extra cost.",
            },
            {
              icon: ShieldCheck,
              title: "Fully Managed Service",
              description:
                "We handle supply, stocking, servicing and maintenance to ensure your machine is always operational.",
            },
            {
              icon: Clock,
              title: "24/7 Availability",
              description:
                "Round-the-clock access to refreshments, perfect for any schedule.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}