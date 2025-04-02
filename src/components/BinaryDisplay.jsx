import React from "react";
import "../styles/BinaryDisplay.css";
import { motion } from "framer-motion";

const BinaryDisplay = ({ bits }) => {
  const binaryString = bits.map((bit) => (bit ? "1" : "0")).join("");

  return (
    <div className="binary-display">
      <h3>Binary Value</h3>
      <div className="binary-value-container">
        {binaryString.split("").map((bit, index) => (
          <motion.span
            key={index}
            className={`bit-digit ${bit === "1" ? "on" : "off"}`}
            animate={{
              color: bit === "1" ? "#00ffbb" : "#ff3366",
              textShadow:
                bit === "1"
                  ? "0 0 10px rgba(0, 255, 187, 0.8), 0 0 20px rgba(0, 255, 187, 0.5)"
                  : "0 0 10px rgba(255, 51, 102, 0.8), 0 0 20px rgba(255, 51, 102, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            {bit}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default BinaryDisplay;
