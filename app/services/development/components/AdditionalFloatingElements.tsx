"use client";
import React from "react";
import { motion } from "motion/react";
import { FaLaptopCode } from "react-icons/fa";

const AdditionalFloatingItems = () => {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
      className="absolute top-56 right-0 bg-primary/10 backdrop-blur-sm p-6 rounded-2xl"
    >
      <FaLaptopCode className="w-8 h-8 text-primary mb-2 mx-auto" />
      <h3 className="text-white font-semibold">Software</h3>
    </motion.div>
  );
};

export default AdditionalFloatingItems;