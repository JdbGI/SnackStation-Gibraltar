import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function Brands() {
  const controls = useAnimationControls();
  const brands = [
    {
      name: "Pepsi",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/2000px-Pepsi_logo_2014.svg.png"
    },
    {
      name: "Coca Cola",
      logo: "https://www.coca-cola.com/content/dam/onexp/gb/en/brand-header/coca-cola-logo.png"
    },
    {
      name: "Fanta",
      logo: "https://www.coca-cola.co.uk/content/dam/one/gb/en/brand-header/fanta-logo.png"
    },
    {
      name: "Grenade",
      logo: "https://cdn11.bigcommerce.com/s-c6v2qp8g99/images/stencil/original/grenade-logo_1639040451__60705.original.png"
    },
    {
      name: "Cadbury",
      logo: "https://logowik.com/content/uploads/images/cadbury-new-2020.jpg"
    }
  ];

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: [0, -1500],
        transition: {
          duration: 20,
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
            className="flex space-x-24 items-center"
            style={{ width: "fit-content" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-16 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}