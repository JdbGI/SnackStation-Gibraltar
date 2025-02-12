import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function Brands() {
  const controls = useAnimationControls();
  const brands = [
    {
      name: "M&M's",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/m-ms-2-logo-png-transparent.png"
    },
    {
      name: "Skittles",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/Skittles-Logo.png"
    },
    {
      name: "Swizzels Squashies",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/squashies-logo.png"
    },
    {
      name: "Kettle",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/Kettle_Foods_logo.svg.png"
    },
    {
      name: "Cadbury",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/cadbury-logo-png_seeklogo-24483.png"
    },
    {
      name: "Grenade",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/Grenade-Logo.png"
    },
    {
      name: "7Up",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/7up-13-logo-png-transparent.png"
    },
    {
      name: "Aquarius",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/aquarius-logo-png-transparent.png"
    },
    {
      name: "Coca-Cola",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/Coca-Cola-logo.png"
    },
    {
      name: "Pepsi",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/Pepsi-Logo.wine.png"
    },
    {
      name: "Fanta",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/Fanta_logo_2009.svg.png"
    },
    {
      name: "Font Vella",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/hdT2flbj6kaa.png"
    },
    {
      name: "Lipton",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/logo-3.png"
    },
    {
      name: "Oasis",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/Oasis_Drinks_logo.png"
    },
    {
      name: "Powerade",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/Powerade_logo.png"
    },
    {
      name: "Rostoy",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/Diseno-sin-titulo-2022-11-25T131833.565-300x120-1.png"
    },
    {
      name: "Simon Life",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/logo_ds-1.png"
    },
    {
      name: "Sprite",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/Sprite-Logo.png"
    },
    {
      name: "Tango",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/TANGO.png"
    },
    {
      name: "Wowhydrate",
      logo: "https://www.barton.gi/wp-content/uploads/2025/02/52f9b909-f8bc-4b0a-8822-7721207024af.__CR00970300_PT0_SX970_V1__.png"
    }
  ];

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: [-2000, 0],
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
    <section className="py-12 bg-black">
      <div className="w-full"> {/* Removed container class */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Stocking the Best Brands
        </h2>

        <div className="overflow-hidden">
          <motion.div
            animate={controls}
            className="flex items-center gap-12"
            style={{ width: "fit-content" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-24 flex items-center justify-center group"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-[100px] max-h-16 object-contain transition-all duration-300 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}