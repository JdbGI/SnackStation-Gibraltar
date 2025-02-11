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
          <svg xmlns="http://www.w3.org/2000/svg" width="224" height="500" className="w-full max-w-md">
            <defs>
              {/* The "wobble" filter creates a subtle displacement effect that animates over 20s */}
              <filter id="wobble" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="3" result="noise">
                  <animate attributeName="baseFrequency" values="0.005;0.01;0.005" dur="20s" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
              </filter>
            </defs>
            {/* The group uses both the wobble filter and a slow translate animation */}
            <g className="fill-primary" filter="url(#wobble)">
              <animateTransform attributeName="transform" attributeType="XML" type="translate"
                values="0 0; 2 2; 0 0" keyTimes="0;0.5;1" dur="20s" repeatCount="indefinite" />
              <circle cx="66.967" cy="328" r="3.855"/>
              <circle cx="78.225" cy="328" r="3.855"/>
              <circle cx="89.483" cy="328" r="3.855"/>
              <circle cx="100.742" cy="328" r="3.855"/>
              <circle cx="112" cy="328" r="3.855"/>
              <circle cx="123.258" cy="328" r="3.855"/>
              <circle cx="134.517" cy="328" r="3.855"/>
              <circle cx="145.775" cy="328" r="3.855"/>
              <circle cx="157.033" cy="328" r="3.855"/>
              <circle cx="162.662" cy="181.75" r=".523"/>
              <circle cx="157.033" cy="172" r=".725"/>
              <circle cx="21.933" cy="250" r=".952"/>
              <circle cx="61.338" cy="337.75" r="5.016"/>
              <circle cx="72.596" cy="337.75" r="5.016"/>
              <circle cx="83.854" cy="337.75" r="5.016"/>
              <circle cx="95.113" cy="337.75" r="4.992"/>
              <circle cx="106.371" cy="337.75" r="4.992"/>
              <circle cx="117.629" cy="337.75" r="4.992"/>
              <circle cx="128.887" cy="337.75" r="4.967"/>
              <circle cx="140.146" cy="337.75" r="4.967"/>
              <circle cx="151.404" cy="337.75" r="4.967"/>
              <circle cx="162.662" cy="337.75" r="4.967"/>
              <circle cx="168.292" cy="328" r="3.855"/>
              <circle cx="207.696" cy="259.75" r="3.463"/>
              <circle cx="213.325" cy="250" r="4.665"/>
              <circle cx="207.696" cy="240.25" r="3.515"/>
              <circle cx="173.921" cy="181.75" r=".859"/>
              <circle cx="168.292" cy="172" r="4.833"/>
              <circle cx="162.662" cy="162.25" r="4.031"/>
              <circle cx="16.304" cy="6.25" r="1.072"/>
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}