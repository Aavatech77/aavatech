import React from "react";
import AnimateInView from "@/components/animate/AnimateInView";
import { HeroGradient } from "@/components/HeroGradient";
import Image from "next/image";

const DevelopmentHero = () => {
  return (
    <HeroGradient>
      <AnimateInView type="fade-in" direction="bottom" className="pr-4 flex-1">
        <h1 className="font-bold text-2xl md:text-5xl mb-4">
          Join Our Team and Grow with Us.
        </h1>
        <p className="mb-8 pr-4">
          We deliver cutting-edge software development, cloud solutions, and IT
          consulting to drive your business forward. We deliver cutting-edge
          software development, cloud solutions, and IT consulting to drive your
          business forward
        </p>
      </AnimateInView>
      <AnimateInView type="slide-in" className="relative flex-1 w-full">
        <Image
          src="/assets/svgs/development.svg"
          alt=""
          width={800}
          height={800}
          priority
        />
      </AnimateInView>
    </HeroGradient>
  );
};

export default DevelopmentHero;
