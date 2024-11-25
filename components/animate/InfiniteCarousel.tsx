"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "motion/react";

export interface CarouselItem {
  image: string | StaticImageData;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
}
const InfiniteCarousel: React.FC<CarouselProps> = ({ items }) => {
  const [duplicateCount, setDuplicateCount] = useState(5);
  const baseVelocity = -0.5;
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}px`);

  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDuplicateCount = () => {
      if (containerRef.current && innerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const innerWidth = innerRef.current.offsetWidth / duplicateCount;
        const newCount = Math.ceil(containerWidth / innerWidth) + 1;
        setDuplicateCount(newCount);
      }
    };

    updateDuplicateCount();
    window.addEventListener("resize", updateDuplicateCount);
    return () => window.removeEventListener("resize", updateDuplicateCount);
  }, [duplicateCount]);

  useAnimationFrame((t, delta) => {
    if (containerRef.current && innerRef.current) {
      const moveBy = baseVelocity * (delta / 10);
      let newX = baseX.get() + moveBy;

      if (newX <= -innerWidth) {
        newX += innerWidth;
      }
      baseX.set(newX);
    }
  });

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full h-16">
      <motion.div
        ref={innerRef}
        className="flex absolute top-0 left-0 h-full"
        style={{ x }}
      >
        {Array(duplicateCount)
          .fill(items)
          .flat()
          .map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 size-16 mx-2 grid place-content-center"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
