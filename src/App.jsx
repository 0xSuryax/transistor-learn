import React, { useState } from "react";
import "./styles/App.css";
import Transistor from "./components/Transistor";
import BinaryDisplay from "./components/BinaryDisplay";
import DecimalDisplay from "./components/DecimalDisplay";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  const [bits, setBits] = useState(Array(8).fill(false));

  const toggleBit = (index) => {
    const newBits = [...bits];
    newBits[index] = !newBits[index];
    setBits(newBits);
  };

  const addTransistor = () => {
    setBits([...bits, false]);
  };

  const removeTransistor = () => {
    if (bits.length > 1) {
      setBits(bits.slice(0, bits.length - 1));
    }
  };

  const resetBits = () => {
    setBits(Array(bits.length).fill(false));
  };

  // Animation variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="game-container">
          <motion.div
            className="displays"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BinaryDisplay bits={bits} />
            <DecimalDisplay bits={bits} />
          </motion.div>

          <motion.div
            className="transistors-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              flexWrap: "wrap",
              justifyContent: bits.length > 6 ? "flex-start" : "center",
            }}
          >
            {bits.map((isOn, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Transistor
                  isOn={isOn}
                  position={bits.length - 1 - index}
                  toggleBit={() => toggleBit(index)}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Controls
              addTransistor={addTransistor}
              removeTransistor={removeTransistor}
              resetBits={resetBits}
              bitsCount={bits.length}
            />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
