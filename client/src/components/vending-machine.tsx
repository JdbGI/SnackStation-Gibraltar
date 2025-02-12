import { motion } from "framer-motion";
import { useState } from "react";

export default function VendingMachine() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[400px] h-[600px] relative"
    >
      {/* Main Machine Body */}
      <svg
        viewBox="0 0 400 600"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))" }}
      >
        {/* Machine Outline */}
        <motion.path
          d="M40 20 L360 20 Q380 20 380 40 L380 540 Q380 560 360 560 L40 560 Q20 560 20 540 L20 40 Q20 20 40 20"
          fill="#f8f9fa"
          stroke="#e2e8f0"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Glass Panel */}
        <motion.rect
          x="50"
          y="60"
          width="300"
          height="400"
          rx="8"
          fill="#e2e8f0"
          fillOpacity="0.3"
          stroke="#cbd5e1"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        {/* Product Slots */}
        {Array.from({ length: 12 }).map((_, index) => {
          const row = Math.floor(index / 3);
          const col = index % 3;
          return (
            <motion.g
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              onClick={() => setSelectedSlot(index)}
              className="cursor-pointer"
            >
              <rect
                x={70 + col * 100}
                y={80 + row * 100}
                width="80"
                height="80"
                rx="4"
                fill={selectedSlot === index ? "#e2e8f0" : "white"}
                stroke="#cbd5e1"
                strokeWidth="2"
              />
              <text
                x={110 + col * 100}
                y={130 + row * 100}
                textAnchor="middle"
                fill="#475569"
                fontSize="14"
              >
                {`A${index + 1}`}
              </text>
            </motion.g>
          );
        })}

        {/* Digital Display */}
        <motion.rect
          x="100"
          y="480"
          width="200"
          height="40"
          rx="4"
          fill="#1e293b"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.text
          x="200"
          y="505"
          textAnchor="middle"
          fill="#f8fafc"
          fontSize="16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          SELECT PRODUCT
        </motion.text>

        {/* Card Payment Area */}
        <motion.rect
          x="280"
          y="480"
          width="60"
          height="40"
          rx="4"
          fill="#22c55e"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        />
        <motion.path
          d="M290 500 L330 500"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        />
      </svg>
    </motion.div>
  );
}
