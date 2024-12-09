"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

export interface CarouselItem {
  image: string | StaticImageData;
  alt: string;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
  className?: string;
  speed?: number;
  itemWidth?: number;
  gap?: number;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  items,
  speed,
}) => {
  const displayItems: CarouselItem[] = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ];
  const baseSpeed = 20;
  const duration = baseSpeed / (speed || 1);
  return (
    <div className="overflow-hidden flex container [mask-image:linear-gradient(90deg,_transparent,_white_10%_90%,_transparent)]">
      <div
        className="animate-scroll"
        style={{ animationDuration: `${duration}s` }}
      >
        <ul className="flex gap-2">
          {displayItems.map((item, index) => (
            <li
              key={index}
              className="flex-shrink-0 flex items-center justify-center relative size-16"
              aria-hidden={index >= items.length ? true : false}
            >
              <Image
                src={item.image}
                alt={item.alt}
                className="object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
      <div
        className="animate-scroll"
        style={{ animationDuration: `${duration}s` }}
        aria-hidden
      >
        <ul className="flex gap-2">
          {displayItems.map((item, index) => (
            <li
              key={index}
              className="flex-shrink-0 flex items-center justify-center relative size-16"
            >
              <Image
                src={item.image}
                alt={item.alt}
                className="object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
