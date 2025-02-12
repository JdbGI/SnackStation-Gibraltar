import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function Brands() {
  const controls = useAnimationControls();
  const brands = [
    {
      name: "M&M's",
      logo: "/brands/mms.svg"
    },
    {
      name: "Skittles",
      logo: "/brands/skittles.svg"
    },
    {
      name: "Swizzels Squashies",
      logo: "/brands/swizzels.svg"
    },
    {
      name: "Kettle",
      logo: "/brands/kettle.svg"
    },
    {
      name: "Cadbury",
      logo: "/brands/cadbury.svg"
    },
    {
      name: "Grenade",
      logo: "/brands/grenade.svg"
    },
    {
      name: "7Up",
      logo: "/brands/7up.svg"
    },
    {
      name: "Aquarius",
      logo: "/brands/aquarius.svg"
    },
    {
      name: "Coca-Cola",
      logo: "/brands/coca-cola.svg"
    },
    {
      name: "Pepsi",
      logo: "/brands/pepsi.svg"
    },
    {
      name: "Fanta",
      logo: "/brands/fanta.svg"
    },
    {
      name: "Font Vella",
      logo: "/brands/font-vella.svg"
    },
    {
      name: "Lipton",
      logo: "/brands/lipton.svg"
    },
    {
      name: "Oasis",
      logo: "/brands/oasis.svg"
    },
    {
      name: "Powerade",
      logo: "/brands/powerade.svg"
    },
    {
      name: "Rostoy",
      logo: "/brands/rostoy.svg"
    },
    {
      name: "Simon Life",
      logo: "/brands/simon-life.svg"
    },
    {
      name: "Sprite",
      logo: "/brands/sprite.svg"
    },
    {
      name: "Tango",
      logo: "/brands/tango.svg"
    },
    {
      name: "Wowhydrate",
      logo: "/brands/wowhydrate.svg"
    }
  ];

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: [-2000, 0], // Start from left, move to right
        transition: {
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }
      });
    };
    startAnimation();
  }, [controls]);

  return (
    <section className="relative py-16 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      </div>

      <div className="relative">
        <h2 className="text-center text-3xl font-bold mb-12">
          Trusted by Leading Brands
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            animate={controls}
            className="flex items-center space-x-16"
            style={{ width: "fit-content" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-24 relative group"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-16 w-auto object-contain transition-all duration-300 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}