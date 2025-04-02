import React from "react";
import "../styles/DecimalDisplay.css";
import { motion, AnimatePresence } from "framer-motion";

const DecimalDisplay = ({ bits }) => {
  const decimalValue = bits.reduce((acc, bit, index) => {
    return acc + (bit ? Math.pow(2, bits.length - 1 - index) : 0);
  }, 0);

  return (
    <div className="decimal-display">
      <h3>Decimal Value</h3>
      <div className="decimal-value-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={decimalValue}
            className="decimal-value"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {decimalValue}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DecimalDisplay;
