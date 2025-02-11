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
            Want a Free Vending Machine?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-4">
            At SnackStation, we make it easy for businesses in Gibraltar to provide convenient, hassle-free access to snacks and refreshments. Installing a vending machine might seem daunting, but with us, it's not only simple – it's completely free for eligible businesses.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-4">
            Our fully managed vending solution ensures you don't need to worry about purchasing a machine, managing stock, or handling maintenance – SnackStation takes care of it all.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We provide vending machines free of charge based on the sales potential at your location. This isn't just about footfall but how many sales we estimate your machine will generate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">How it Works</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Get in touch with us",
                description: "Contact us to express your interest, and we'll arrange a free site survey.",
              },
              {
                title: "Define your product line-up",
                description: "We value your feedback and will tailor our snack selection to suit your staff or customers.",
              },
              {
                title: "We'll set up your station",
                description: "We'll easily get your SnackStation on the grid in no time.",
              },
              {
                title: "Enjoy our ongoing support",
                description: "Once installed, our team will visit regularly to ensure your station runs smoothly and is always stocked.",
              },
            ].map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">{index + 1}</span>
                    </div>
                    <h4 className="font-semibold">{step.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Not Eligible? Let's Take a Different Route
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Small monthly fee</h4>
                <p className="text-muted-foreground mb-4">
                  If the sales potential of your location doesn't meet the eligibility criteria, we can provide a SnackStation for a small monthly fee. This ensures you can still benefit from our fully managed service.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Rent or lease a machine</h4>
                <p className="text-muted-foreground mb-4">
                  You can rent or lease a vending machine directly from us and stock it with your own products. We will still manage the machine for you, including servicing, maintenance, and restocking based on your product selections.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Ready For Your Next Stop?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Let's Reach Your Destination Together.
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