import React from "react";
import "../styles/Controls.css";
import { motion } from "framer-motion";

const Controls = ({
  addTransistor,
  removeTransistor,
  resetBits,
  bitsCount,
}) => {
  return (
    <div className="controls">
      <motion.button
        className="control-button add"
        onClick={addTransistor}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Add Transistor</span>
        <div className="button-glow"></div>
      </motion.button>

      <motion.button
        className="control-button remove"
        onClick={removeTransistor}
        disabled={bitsCount <= 1}
        whileHover={bitsCount > 1 ? { scale: 1.05 } : {}}
        whileTap={bitsCount > 1 ? { scale: 0.95 } : {}}
      >
        <span>Remove Transistor</span>
        <div className="button-glow"></div>
      </motion.button>

      <motion.button
        className="control-button reset"
        onClick={resetBits}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Reset All to 0</span>
        <div className="button-glow"></div>
      </motion.button>
    </div>
  );
};

export default Controls;
