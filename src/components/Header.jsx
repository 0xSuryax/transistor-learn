import React from "react";
import "../styles/Header.css";
import { motion } from "framer-motion";

const Header = () => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header className="header">
      <div className="header-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            <span className="neon-text">Transistor</span>
            <span className="title-accent"> Learn </span>
          </h1>
        </motion.div>

        <motion.div
          className="header-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            <motion.path
              d="M10 30 L25 15 L35 15 L50 30 L35 45 L25 45 Z"
              stroke="#00ffbb"
              strokeWidth="2"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.circle
              cx="30"
              cy="30"
              r="5"
              fill="#ff3366"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Explore the binary world through interactive transistors
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
