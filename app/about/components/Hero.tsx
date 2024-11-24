import { HeroGradient } from "@/components/HeroGradient";
import Image from "next/image";
import React from "react";
import HeroImg from "@/public/assets/about-page/hero.png";
import AnimateInView from "@/components/animate/AnimateInView";

function Hero() {
  return (
    <HeroGradient>
      <AnimateInView type="fade-in" direction="bottom" className="flex-1">
        <div className="">
          <h1 className="font-bold text-3xl mb-4">
            Transform Your Business with Innovative IT Solutions.
          </h1>
          <p className="mb-8">
            We deliver cutting-edge software development, cloud solutions, and
            IT consulting to drive your business forward. We deliver
            cutting-edge software development, cloud solutions, and IT
            consulting to drive your business forward
          </p>
        </div>
      </AnimateInView>
      <AnimateInView
        type="slide-in"
        className="relative min-h-[300px] w-full mx-auto flex-1"
        addBounce
      >
        <div className="relative size-full min-h-[400px]">
          <Image
            src={HeroImg}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="hero image"
            className="object-contain"
            priority
          />
        </div>
      </AnimateInView>
    </HeroGradient>
  );
}

export default Hero;
