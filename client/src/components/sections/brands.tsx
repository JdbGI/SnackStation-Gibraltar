import { motion } from "framer-motion";

export default function Brands() {
  const brands = [
    {
      name: "Pepsi",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/2000px-Pepsi_logo_2014.svg.png"
    },
    {
      name: "Coca Cola",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/1200px-Coca-Cola_bottle_cap.svg.png"
    },
    {
      name: "Fanta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Fanta_logo_%282016%29.svg/1280px-Fanta_logo_%282016%29.svg.png"
    },
    {
      name: "Grenade",
      logo: "https://www.grenade.com/cdn/shop/files/grenade-logo_200x.png"
    },
    {
      name: "Cadbury",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Cadbury-Chocolate-Logo.svg/1200px-Cadbury-Chocolate-Logo.svg.png"
    }
  ];

  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto">
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-16 items-center"
          >
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
