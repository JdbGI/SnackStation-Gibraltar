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

            {/* Group 1: Outer border (40 bubbles) */}
            {/* Top edge: final y = 50, initial y = 0; x values from 80 to 320 */}
            {Array.from({ length: 10 }).map((_, i) => {
              const x = 80 + (i * 240) / 9;
              return (
                <circle key={`top-${i}`} cx={x} cy="0" r="3" className="fill-primary">
                  <animate
                    attributeName="cx"
                    values={`${x};${x};${x}`}
                    dur="20s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values="0;50;0"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}

            {/* Right edge: final x = 320, y values from 60 to 500, initial x = 400 */}
            {Array.from({ length: 10 }).map((_, i) => {
              const y = 60 + (i * 440) / 9;
              return (
                <circle key={`right-${i}`} cx="400" cy={y} r="3" className="fill-primary">
                  <animate
                    attributeName="cx"
                    values="400;320;400"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values={`${y};${y};${y}`}
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}

            {/* Bottom edge: final y = 500, initial y = 600 */}
            {Array.from({ length: 10 }).map((_, i) => {
              const x = 320 - (i * 240) / 9;
              return (
                <circle key={`bottom-${i}`} cx={x} cy="600" r="3" className="fill-primary">
                  <animate
                    attributeName="cx"
                    values={`${x};${x};${x}`}
                    dur="20s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values="600;500;600"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}

            {/* Left edge: final x = 80, initial x = 0 */}
            {Array.from({ length: 10 }).map((_, i) => {
              const y = 460 - (i * 370) / 9;
              return (
                <circle key={`left-${i}`} cx="0" cy={y} r="3" className="fill-primary">
                  <animate
                    attributeName="cx"
                    values="0;80;0"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values={`${y};${y};${y}`}
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}

            {/* Group 2: Product grid (20 bubbles) */}
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 4 }).map((_, col) => {
                const x = 100 + col * 66.67;
                const y = 150 + row * 75;
                const initialX = 70 + col * 66.67;
                const initialY = 180 + row * 75;
                return (
                  <circle
                    key={`grid-${row}-${col}`}
                    cx={initialX}
                    cy={initialY}
                    r="3"
                    className="fill-primary"
                  >
                    <animate
                      attributeName="cx"
                      values={`${initialX};${x};${initialX}`}
                      dur="20s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cy"
                      values={`${initialY};${y};${initialY}`}
                      dur="20s"
                      repeatCount="indefinite"
                    />
                  </circle>
                );
              })
            )}

            {/* Group 4: Decorative row (20 bubbles) */}
            {Array.from({ length: 20 }).map((_, i) => {
              const x = 100 + (i * 200) / 19;
              return (
                <circle key={`decorative-${i}`} cx={x} cy="10" r="3" className="fill-primary">
                  <animate
                    attributeName="cx"
                    values={`${x};${x};${x}`}
                    dur="20s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values="10;60;10"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}