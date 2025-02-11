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
          <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
            {/* Black background */}
            <rect width="400" height="600" className="fill-background" />

            {/* Outer outline of vending machine */}
            {/* 1. Top left corner (final: 80,50; initial: 50,20) */}
            <circle cx="50" cy="20" r="4" className="fill-primary">
              <animate attributeName="cx" values="50;80;50" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="20;50;20" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Rest of the animation points */}
            {[
              // Top edge interior points
              { initial: { x: 160, y: 30 }, final: { x: 140, y: 50 } },
              { initial: { x: 210, y: 10 }, final: { x: 200, y: 50 } },
              { initial: { x: 240, y: 70 }, final: { x: 260, y: 50 } },
              { initial: { x: 350, y: 40 }, final: { x: 320, y: 50 } },
              // Left edge interior points
              { initial: { x: 20, y: 150 }, final: { x: 80, y: 150 } },
              { initial: { x: 30, y: 300 }, final: { x: 80, y: 250 } },
              { initial: { x: 60, y: 400 }, final: { x: 80, y: 350 } },
              { initial: { x: 40, y: 500 }, final: { x: 80, y: 450 } },
              // Right edge interior points
              { initial: { x: 380, y: 120 }, final: { x: 320, y: 150 } },
              { initial: { x: 370, y: 280 }, final: { x: 320, y: 250 } },
              { initial: { x: 360, y: 330 }, final: { x: 320, y: 350 } },
              { initial: { x: 390, y: 470 }, final: { x: 320, y: 450 } },
              // Bottom edge points
              { initial: { x: 100, y: 550 }, final: { x: 80, y: 500 } },
              { initial: { x: 130, y: 520 }, final: { x: 140, y: 500 } },
              { initial: { x: 190, y: 530 }, final: { x: 200, y: 500 } },
              { initial: { x: 270, y: 510 }, final: { x: 260, y: 500 } },
              { initial: { x: 310, y: 540 }, final: { x: 320, y: 500 } },
              // Inner display points
              { initial: { x: 100, y: 0 }, final: { x: 120, y: 70 } },
              { initial: { x: 220, y: 20 }, final: { x: 210, y: 70 } },
              { initial: { x: 310, y: 30 }, final: { x: 300, y: 70 } },
              { initial: { x: 90, y: 160 }, final: { x: 120, y: 130 } },
              { initial: { x: 200, y: 140 }, final: { x: 210, y: 130 } },
              { initial: { x: 290, y: 150 }, final: { x: 300, y: 130 } },
              { initial: { x: 60, y: 80 }, final: { x: 120, y: 100 } },
              { initial: { x: 340, y: 90 }, final: { x: 300, y: 100 } },
            ].map((point, index) => (
              <circle
                key={index}
                cx={point.initial.x}
                cy={point.initial.y}
                r="4"
                className="fill-primary"
              >
                <animate
                  attributeName="cx"
                  values={`${point.initial.x};${point.final.x};${point.initial.x}`}
                  dur="20s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values={`${point.initial.y};${point.final.y};${point.initial.y}`}
                  dur="20s"
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}