import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function Brands() {
  const controls = useAnimationControls();
  const brands = [
    {
      name: "M&M's",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/M%26M%27s_logo.svg"
    },
    {
      name: "Skittles",
      logo: "https://logos-world.net/wp-content/uploads/2021/08/Skittles-Logo.png"
    },
    {
      name: "Swizzels",
      logo: "https://www.swizzels.com/content/images/swizzels-logo.svg"
    },
    {
      name: "Kettle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Kettle_Brand_logo.svg"
    },
    {
      name: "Cadbury",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/e3/Cadbury-Chocolate-Logo.svg"
    },
    {
      name: "Grenade",
      logo: "https://www.grenade.com/cdn/shop/t/21/assets/grenade-logo.png"
    },
    {
      name: "7Up",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/7_Up_Logo.svg"
    },
    {
      name: "Aquarius",
      logo: "https://www.coca-cola.co.uk/content/dam/one/gb/en/brand-header/aquarius-logo.png"
    },
    {
      name: "Coca-Cola",
      logo: "https://www.coca-cola.com/content/dam/onexp/gb/en/brand-header/coca-cola-logo.png"
    },
    {
      name: "Pepsi",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/2000px-Pepsi_logo_2014.svg.png"
    },
    {
      name: "Fanta",
      logo: "https://www.coca-cola.co.uk/content/dam/one/gb/en/brand-header/fanta-logo.png"
    },
    {
      name: "Font Vella",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Font_Vella_logo.svg"
    },
    {
      name: "Lipton",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Lipton_Logo.svg"
    },
    {
      name: "Oasis",
      logo: "https://www.coca-cola.co.uk/content/dam/one/gb/en/brand-header/oasis-logo.png"
    },
    {
      name: "Powerade",
      logo: "https://www.coca-cola.co.uk/content/dam/one/gb/en/brand-header/powerade-logo.png"
    },
    {
      name: "Sprite",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Sprite_logo_2004.svg/2000px-Sprite_logo_2004.svg.png"
    },
    {
      name: "Tango",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Tango_logo.svg/1200px-Tango_logo.svg.png"
    }
  ];

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: [0, -2000],
        transition: {
          duration: 30, // Slower animation
          repeat: Infinity,
          ease: "linear"
        }
      });
    };
    startAnimation();
  }, [controls]);

  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto">
        <div className="overflow-hidden">
          <motion.div
            animate={controls}
            className="flex space-x-32 items-center" // Increased spacing
            style={{ width: "fit-content" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32" // Fixed width container
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-16 w-auto max-w-[120px] object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}