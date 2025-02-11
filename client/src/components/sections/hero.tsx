import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Smart Vending Solutions for Your{" "}
            <span className="text-primary">Workspace</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Transform your office snacking experience with SnackStation's modern
            vending machines. Premium refreshments available 24/7.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <a href="#contact">Get Started</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#offer">Free Machine Offer</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="698.314"
            viewBox="0 0 400 698.314"
            className="w-full max-w-md"
          >
            <path
              d="
                M285.86,0.84
                C275,10,265,20,260,30
                L220,300
                C210,350,205,400,210,450
                C215,500,230,550,240,600
                L260,680
                C265,690,275,695,285,700
                L350,700
                C355,695,360,685,360,675
                L360,50
                C355,25,345,10,335,0
                C325,-5,310,0,285.86,0.84
                Z
              "
              className="fill-primary"
              fillRule="evenodd"
            >
              <animate
                attributeName="d"
                values="
                  M285.86,0.84 C275,10,265,20,260,30 L220,300 C210,350,205,400,210,450 C215,500,230,550,240,600 L260,680 C265,690,275,695,285,700 L350,700 C355,695,360,685,360,675 L360,50 C355,25,345,10,335,0 C325,-5,310,0,285.86,0.84 Z;
                  M285.86,0.84 C280,15,270,25,265,35 L225,305 C215,355,210,405,215,455 C220,505,235,555,245,605 L265,685 C270,695,280,700,290,705 L355,705 C360,700,365,690,365,680 L365,55 C360,30,350,15,340,5 C330,0,315,5,285.86,0.84 Z;
                  M285.86,0.84 C275,10,265,20,260,30 L220,300 C210,350,205,400,210,450 C215,500,230,550,240,600 L260,680 C265,690,275,695,285,700 L350,700 C355,695,360,685,360,675 L360,50 C355,25,345,10,335,0 C325,-5,310,0,285.86,0.84 Z
                "
                dur="4s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}