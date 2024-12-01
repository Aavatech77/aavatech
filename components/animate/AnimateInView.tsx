"use client";
import React, { ReactNode, useRef } from "react";
import { motion } from "motion/react";

type TDirection =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "top-right"
  | "bottom-right";

type Props = {
  children: ReactNode;
  className?: string;
  type: "slide-in" | "fade-in" | "scale" | "scale-and-fade" | "bounce";
  direction?: TDirection;
  duration?: number;
  delay?: number;
  addBounce?: boolean;
};

const slideVariants = {
  left: {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  },
  right: {
    initial: { x: "100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  },
  top: {
    initial: { y: "-100%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  },
  bottom: {
    initial: { y: "100%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  },
  "top-right": {
    initial: {
      x: "100%",
      y: "-50%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  },
  "bottom-right": {
    initial: {
      x: "100%",
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  },
};

const fadeInVariants = {
  left: {
    initial: { x: 80, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  },
  right: {
    initial: { x: -80, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  },
  top: {
    initial: { y: -80, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  },
  bottom: {
    initial: { y: 80, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  },
  "top-right": {
    initial: {
      x: 80,
      y: -80,
      opacity: 0,
    },
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  },
  "bottom-right": {
    initial: {
      x: 80,
      y: 80,
      opacity: 0,
    },
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  },
};
const scaleVariant = {
  initial: {
    scale: 1.2,
  },
  whileInView: {
    scale: 1,
  },
};
const scaleAndFadeVariant = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
  },
};
const bounceVariants = {
  initial: {
    y: 0,
  },
  whileInView: {
    y: -40,
  },
};

const getAnimation = (animationType: string, direction: TDirection) => {
  switch (animationType) {
    case "slide-in":
      return slideVariants[direction];
    case "fade-in":
      return fadeInVariants[direction];
    case "scale":
      return scaleVariant;
    case "scale-and-fade":
      return scaleAndFadeVariant;
    case "bounce":
      return bounceVariants;
    default:
      return fadeInVariants[direction];
  }
};

const AnimateInView = ({
  type,
  children,
  className = "",
  direction = "right",
  duration = 0.5,
  delay = 0,
  addBounce,
}: Props) => {
  const { initial, whileInView } = getAnimation(type, direction);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        initial={initial}
        whileInView={whileInView}
        transition={{
          duration,
          delay,
        }}
        viewport={{ once: true }}
        className="absolute inset-0"
        onAnimationComplete={() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          addBounce &&
            ref.current?.classList.add(
              "animate-bounce",
              "hover:[animation-play-state:_paused]"
            );
        }}
        exit={{ opacity: 0 }}
      >
        <div className="w-full h-full">{children}</div>
      </motion.div>
      <div className="invisible">{children}</div>
    </div>
  );
};

export default AnimateInView;
