"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect, useRef } from "react";

// Define the shape of a carousel item
export interface CarouselItem {
  image: string | StaticImageData;
  alt: string;
}

// Props interface for the InfiniteCarousel component
interface InfiniteCarouselProps {
  items: CarouselItem[];
  className?: string;
  speed?: number;
  itemWidth?: number;
  gap?: number;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  items,
  speed = 0.5,
  itemWidth = 60,
  gap = 20,
}) => {
  const [position, setPosition] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);

  // Duplicate items to create infinite scroll effect
  const displayItems: CarouselItem[] = [...items, ...items, ...items, ...items];

  useEffect(() => {
    const animate = () => {
      // Move carousel to the left
      setPosition((prevPosition) => {
        const newPosition = prevPosition - speed;

        // Reset position when items fully scroll out
        if (Math.abs(newPosition) >= (itemWidth + gap) * items.length) {
          return 0;
        }

        return newPosition;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [items, speed, itemWidth, gap]);

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden relative w-full"
      style={{ height: `${itemWidth}px` }}
    >
      <div
        className="flex absolute top-0 left-0 transition-transform duration-0"
        style={{
          transform: `translateX(${position}px)`,
          gap: `${gap}px`,
        }}
      >
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center relative"
            style={{
              width: `${itemWidth}px`,
            }}
          >
            <Image src={item.image} alt={item.alt} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
