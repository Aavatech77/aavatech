"use client";
import { motion } from "motion/react";
import React, { ReactNode } from "react";

const HeroContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 overflow-hidden grid">
      <div className="container px-4 py-20 my-auto">{children}</div>
      {/* Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#2917fd80]/15 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

const HeroContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">{children}</div>
  );
};

const HeroTitle = ({
  main,
  secondary,
  subtitle,
  children,
}: {
  main: string;
  secondary: string;
  subtitle: string;
  children?: ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
        {main} <span className="text-primary">{secondary}</span>
      </h1>
      <p className="text-lg text-slate-300 mb-8 leading-relaxed">{subtitle}</p>
      {children}
    </motion.div>
  );
};

export type FloatingElementsProps = {
  icons: [JSX.Element, JSX.Element, JSX.Element];
  labels: [string, string, string];
  children?: ReactNode;
};

const FloatingElements = ({
  icons,
  labels,
  children,
}: FloatingElementsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative hidden lg:block"
    >
      <div className="relative w-full h-[600px]">
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 bg-primary/10 backdrop-blur-sm p-6 rounded-2xl"
        >
          {icons[0]}
          <h3 className="text-white font-semibold">{labels[0]}</h3>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 left-10 bg-primary/10 backdrop-blur-sm p-6 rounded-2xl"
        >
          {icons[1]}
          <h3 className="text-white font-semibold">{labels[1]}</h3>
        </motion.div>

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
          className="absolute bottom-20 right-40 bg-primary/10 backdrop-blur-sm p-6 rounded-2xl"
        >
          {icons[2]}
          <h3 className="text-white font-semibold">{labels[2]}</h3>
        </motion.div>
        {children}
      </div>
    </motion.div>
  );
};

const ConnectingLines = ({
  paths,
}: {
  paths?: {
    from: { x: number; y: number };
    to: { x: number; y: number };
  }[];
}) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
    >
      <motion.path
        d="M120 150 L200 200"
        className="text-primary/20"
        strokeWidth="2"
        strokeDasharray="5 5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path
        d="M300 100 L200 200"
        className="text-primary/20"
        strokeWidth="2"
        strokeDasharray="5 5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path
        d="M250 280 L200 200"
        className="text-primary/20"
        strokeWidth="2"
        strokeDasharray="5 5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {paths?.map((path, index) => (
        <motion.path
          key={index}
          d={`M${path.from.x} ${path.from.y} L${path.to.x} ${path.to.y}`}
          className="text-primary/20"
          strokeWidth="2"
          strokeDasharray="5 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      ))}
    </svg>
  );
};

export {
  HeroContainer,
  HeroContent,
  HeroTitle,
  FloatingElements,
  ConnectingLines,
};
