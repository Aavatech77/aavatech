import AnimateInView from "@/components/animate/AnimateInView";
import { HeroGradient } from "@/components/HeroGradient";
import React from "react";

const CareersHero = () => {
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
        <CareerHeroImage />
      </AnimateInView>
    </HeroGradient>
  );
};

const CareerHeroImage = () => {
  return (
    <>
      <svg
        width="530"
        height="461"
        viewBox="0 0 530 461"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="size-full"
      >
        <rect width="530" height="460.645" fill="url(#pattern0_622_3315)" />
        <defs>
          <pattern
            id="pattern0_622_3315"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_622_3315"
              transform="scale(0.000244141 0.000280899)"
            />
          </pattern>
          <image
            id="image0_622_3315"
            width="4096"
            height="3560"
          />
        </defs>
      </svg>
    </>
  );
};

export default CareersHero;