"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface SVGLoaderProps {
  className?: string;
  alt: string;
  src: string | StaticImageData;
  priority?: boolean;
}

export function SVGLoader({ className, src, alt, priority }: SVGLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary-gradient opacity-40 blur-lg"></div>
      )}
      <Image
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        className={`transition-opacity duration-300 object-contain ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        unoptimized
        priority={priority}
      />
    </div>
  );
}
