import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  const whatsappLink = "https://wa.me/35054004002";

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get a Vending Machine for Your Space
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to get started? Contact us via WhatsApp for a quick response about
            our free vending machine program.
          </p>
          <Button size="lg" className="gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white" asChild>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <SiWhatsapp className="h-5 w-5 mr-2" />
              Contact Us on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}