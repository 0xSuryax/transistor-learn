import React from "react";
import "../styles/Transistor.css";
import { motion } from "framer-motion";

const Transistor = ({ isOn, toggleBit, position }) => {
  return (
    <div className="transistor-wrapper">
      <div className="position-label">
        2<sup>{position}</sup> = {Math.pow(2, position)}
      </div>
      <motion.div
        className={`transistor ${isOn ? "on" : "off"}`}
        onClick={toggleBit}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        layout
      >
        <div className="transistor-body">
          <div className="connector top"></div>
          <div className="circuit-lines"></div>
          <motion.div
            className="state-indicator"
            animate={{
              backgroundColor: isOn ? "#00ffbb" : "#ff3366",
              boxShadow: isOn
                ? "0 0 15px 5px rgba(0, 255, 187, 0.7)"
                : "0 0 15px 5px rgba(255, 51, 102, 0.7)",
            }}
            transition={{ duration: 0.3 }}
          >
            {isOn ? "1" : "0"}
          </motion.div>
          <div className="connector bottom"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Transistor;
