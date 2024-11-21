import React from "react";
import AnimateInView from "@/components/animate/AnimateInView";
import Image, { StaticImageData } from "next/image";

export type LayoutWithImageProps = {
  title: string;
  subtitle: string;
  content: string;
  img: string | StaticImageData;
  titleHighlight?: string;
  subtitleHighlight?: string;
};

const LayoutWithImageOnRight = ({
  title,
  subtitle,
  content,
  img,
  titleHighlight,
  subtitleHighlight,
}: LayoutWithImageProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center">
      <AnimateInView type="fade-in">
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
      <AnimateInView
        type="slide-in"
        className="max-h-[300px] w-full relative overflow-clip"
      >
        <Image
          src={img}
          width={800}
          height={800}
          alt=""
          className="size-full object-contain"
        />
      </AnimateInView>
    </div>
  );
};

export default LayoutWithImageOnRight;
