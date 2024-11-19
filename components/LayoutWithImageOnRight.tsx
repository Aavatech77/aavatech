import React from "react";
import AnimateInView from "@/components/animate/AnimateInView";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  subtitle: string;
  content: string;
  img: string;
};

const ContentWithImageOnRight = ({ title, subtitle, content, img }: Props) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <AnimateInView type="fade-in">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">{title}</h2>
          <p className="font-medium">{subtitle}</p>
          <p className="text-muted-foreground text-sm">{content}</p>
        </div>
      </AnimateInView>
      <AnimateInView
        type="slide-in"
        className="max-h-[300px] md:max-h-[500px] relative overflow-clip grid"
      >
        <Image
          src={img}
          width={800}
          height={800}
          alt=""
          className="size-full object-contain ml-auto"
        />
      </AnimateInView>
    </div>
  );
};

export default ContentWithImageOnRight;
