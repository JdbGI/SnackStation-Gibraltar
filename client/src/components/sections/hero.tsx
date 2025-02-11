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

            {/* =======================
                 1. OUTER MACHINE EDGES
                 ======================= */}

            {/* --- Top Edge (5 circles) --- */}
            {/* Circle 1 */}
            <circle cx="60" cy="0" r="3" className="fill-primary">
              <animate attributeName="cx" values="60;80;60" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="0;30;0" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 2 */}
            <circle cx="140" cy="10" r="3" className="fill-primary">
              <animate attributeName="cx" values="140;140;140" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="10;30;10" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 3 */}
            <circle cx="220" cy="0" r="3" className="fill-primary">
              <animate attributeName="cx" values="220;200;220" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="0;30;0" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 4 */}
            <circle cx="280" cy="15" r="3" className="fill-primary">
              <animate attributeName="cx" values="280;260;280" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="15;30;15" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 5 */}
            <circle cx="340" cy="0" r="3" className="fill-primary">
              <animate attributeName="cx" values="340;320;340" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="0;30;0" dur="20s" repeatCount="indefinite" />
            </circle>

            {/* --- Left Edge (6 circles) --- */}
            {/* Circle 6 */}
            <circle cx="40" cy="50" r="3" className="fill-primary">
              <animate attributeName="cx" values="40;80;40" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="50;30;50" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 7 */}
            <circle cx="20" cy="150" r="3" className="fill-primary">
              <animate attributeName="cx" values="20;80;20" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="150;150;150" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 8 */}
            <circle cx="40" cy="250" r="3" className="fill-primary">
              <animate attributeName="cx" values="40;80;40" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="250;230;250" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 9 */}
            <circle cx="60" cy="350" r="3" className="fill-primary">
              <animate attributeName="cx" values="60;80;60" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="350;330;350" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 10 */}
            <circle cx="30" cy="450" r="3" className="fill-primary">
              <animate attributeName="cx" values="30;80;30" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="450;430;450" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 11 */}
            <circle cx="50" cy="550" r="3" className="fill-primary">
              <animate attributeName="cx" values="50;80;50" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="550;570;550" dur="20s" repeatCount="indefinite" />
            </circle>

            {/* --- Right Edge (6 circles) --- */}
            {/* Circle 12 */}
            <circle cx="370" cy="50" r="3" className="fill-primary">
              <animate attributeName="cx" values="370;320;370" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="50;30;50" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 13 */}
            <circle cx="380" cy="150" r="3" className="fill-primary">
              <animate attributeName="cx" values="380;320;380" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="150;150;150" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 14 */}
            <circle cx="360" cy="250" r="3" className="fill-primary">
              <animate attributeName="cx" values="360;320;360" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="250;230;250" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 15 */}
            <circle cx="390" cy="350" r="3" className="fill-primary">
              <animate attributeName="cx" values="390;320;390" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="350;330;350" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 16 */}
            <circle cx="370" cy="450" r="3" className="fill-primary">
              <animate attributeName="cx" values="370;320;370" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="450;430;450" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 17 */}
            <circle cx="380" cy="550" r="3" className="fill-primary">
              <animate attributeName="cx" values="380;320;380" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="550;570;550" dur="20s" repeatCount="indefinite" />
            </circle>

            {/* --- Bottom Edge (5 circles) --- */}
            {/* Circle 18 */}
            <circle cx="100" cy="600" r="3" className="fill-primary">
              <animate attributeName="cx" values="100;80;100" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="600;570;600" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 19 */}
            <circle cx="150" cy="590" r="3" className="fill-primary">
              <animate attributeName="cx" values="150;140;150" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="590;570;590" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 20 */}
            <circle cx="210" cy="610" r="3" className="fill-primary">
              <animate attributeName="cx" values="210;200;210" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="610;570;610" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 21 */}
            <circle cx="270" cy="590" r="3" className="fill-primary">
              <animate attributeName="cx" values="270;260;270" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="590;570;590" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 22 */}
            <circle cx="330" cy="600" r="3" className="fill-primary">
              <animate attributeName="cx" values="330;320;330" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="600;570;600" dur="20s" repeatCount="indefinite" />
            </circle>

            {/* =======================
                 2. MAIN GLASS DISPLAY
                 ======================= */}

            {/* --- Top Edge of Display (4 circles) --- */}
            {/* Circle 23 */}
            <circle cx="80" cy="40" r="3" className="fill-primary">
              <animate attributeName="cx" values="80;100;80" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="40;70;40" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 24 */}
            <circle cx="160" cy="60" r="3" className="fill-primary">
              <animate attributeName="cx" values="160;180;160" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="60;70;60" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 25 */}
            <circle cx="220" cy="40" r="3" className="fill-primary">
              <animate attributeName="cx" values="220;240;220" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="40;70;40" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 26 */}
            <circle cx="340" cy="50" r="3" className="fill-primary">
              <animate attributeName="cx" values="340;300;340" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="50;70;50" dur="20s" repeatCount="indefinite" />
            </circle>

            {/* --- Bottom Edge of Display (4 circles) --- */}
            {/* Circle 27 */}
            <circle cx="80" cy="460" r="3" className="fill-primary">
              <animate attributeName="cx" values="80;100;80" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="460;430;460" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 28 */}
            <circle cx="160" cy="450" r="3" className="fill-primary">
              <animate attributeName="cx" values="160;180;160" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="450;430;450" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 29 */}
            <circle cx="220" cy="460" r="3" className="fill-primary">
              <animate attributeName="cx" values="220;240;220" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="460;430;460" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 30 */}
            <circle cx="340" cy="420" r="3" className="fill-primary">
              <animate attributeName="cx" values="340;300;340" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="420;430;420" dur="20s" repeatCount="indefinite" />
            </circle>

            {/* --- Left Edge of Display (3 circles) --- */}
            {/* Circle 31 */}
            <circle cx="60" cy="120" r="3" className="fill-primary">
              <animate attributeName="cx" values="60;100;60" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="120;70;120" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 32 */}
            <circle cx="70" cy="240" r="3" className="fill-primary">
              <animate attributeName="cx" values="70;100;70" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="240;250;240" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 33 */}
            <circle cx="80" cy="360" r="3" className="fill-primary">
              <animate attributeName="cx" values="80;100;80" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="360;430;360" dur="20s" repeatCount="indefinite" />
            </circle>

            {/* --- Right Edge of Display (3 circles) --- */}
            {/* Circle 34 */}
            <circle cx="360" cy="120" r="3" className="fill-primary">
              <animate attributeName="cx" values="360;300;360" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="120;70;120" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 35 */}
            <circle cx="350" cy="240" r="3" className="fill-primary">
              <animate attributeName="cx" values="350;300;350" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="240;250;240" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 36 */}
            <circle cx="340" cy="360" r="3" className="fill-primary">
              <animate attributeName="cx" values="340;300;340" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="360;430;360" dur="20s" repeatCount="indefinite" />
            </circle>

            {/* ==================
                 3. PUSH PANEL
                 ================== */}

            {/* Corners */}
            {/* Circle 37 */}
            <circle cx="110" cy="500" r="4" className="fill-primary">
              <animate attributeName="cx" values="110;130;110" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="500;480;500" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 38 */}
            <circle cx="290" cy="500" r="4" className="fill-primary">
              <animate attributeName="cx" values="290;270;290" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="500;480;500" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 39 */}
            <circle cx="120" cy="550" r="4" className="fill-primary">
              <animate attributeName="cx" values="120;130;120" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="550;530;550" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 40 */}
            <circle cx="280" cy="550" r="4" className="fill-primary">
              <animate attributeName="cx" values="280;270;280" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="550;530;550" dur="20s" repeatCount="indefinite" />
            </circle>

            {/* ====================
                 4. PAYMENT AREA
                 ==================== */}

            {/* Corners */}
            {/* Circle 41 */}
            <circle cx="210" cy="20" r="3" className="fill-primary">
              <animate attributeName="cx" values="210;230;210" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="20;40;20" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 42 */}
            <circle cx="330" cy="20" r="3" className="fill-primary">
              <animate attributeName="cx" values="330;310;330" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="20;40;20" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 43 */}
            <circle cx="220" cy="160" r="3" className="fill-primary">
              <animate attributeName="cx" values="220;230;220" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="160;140;160" dur="20s" repeatCount="indefinite" />
            </circle>
            {/* Circle 44 */}
            <circle cx="330" cy="160" r="3" className="fill-primary">
              <animate attributeName="cx" values="330;310;330" dur="20s" repeatCount="indefinite" />
              <animate attributeName="cy" values="160;140;160" dur="20s" repeatCount="indefinite" />
            </circle>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}