import React from "react";
import AnimateInView from "@/components/animate/AnimateInView";
import Image from "next/image";
import { LayoutWithImageProps } from "./LayoutWithImageOnRight";

const LayoutWithImageOnLeft = ({
  title,
  subtitle,
  content,
  img,
  titleHighlight,
  subtitleHighlight,
}: LayoutWithImageProps) => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-6 items-center">
      <AnimateInView
        type="slide-in"
        direction="left"
        className="max-h-[300px] md:min-w-[400px] relative overflow-clip w-full"
      >
        <Image
          src={img}
          width={800}
          height={800}
          alt=""
          className="size-full object-contain"
        />
      </AnimateInView>
      <AnimateInView type="fade-in" direction="left">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">
            {title} <span className="text-highlight">{titleHighlight}</span>
          </h2>
          <p className="font-medium">
            {subtitle}{" "}
            <span className="text-highlight">{subtitleHighlight}</span>
          </p>
          <p className="text-muted-foreground text-sm">{content}</p>
        </div>
      </AnimateInView>
    </div>
  );
};

export default LayoutWithImageOnLeft;
