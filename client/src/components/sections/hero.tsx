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
            <defs>
              {/* Define the vending machine shape as a clipPath */}
              <clipPath id="machineClip">
                <path d="M80,30 
                         L320,30
                         L320,570
                         L80,570
                         Z" />
              </clipPath>

              {/* Create a symbol for the halftone dots pattern */}
              <symbol id="halftonePattern" viewBox="0 0 400 600">
                <g>
                  {/* Generate a grid of circles for the halftone effect */}
                  {Array.from({ length: 20 }).map((_, row) =>
                    Array.from({ length: 15 }).map((_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={col * 30 + (row % 2 ? 15 : 0)}
                        cy={row * 30}
                        r="3"
                        className="fill-primary"
                      >
                        <animate
                          attributeName="r"
                          values="2;4;2"
                          dur={`${2 + Math.random()}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    ))
                  )}
                </g>
              </symbol>
            </defs>

            {/* Black background */}
            <rect width="400" height="600" className="fill-background" />

            {/* Apply the halftone pattern with the machine clipPath */}
            <g clipPath="url(#machineClip)">
              {/* Use the halftone pattern */}
              <use
                href="#halftonePattern"
                className="fill-primary"
                width="400"
                height="600"
              >
                {/* Add shimmer animation */}
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 5,-5; 0,0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </use>
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}