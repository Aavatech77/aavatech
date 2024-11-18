import React from "react";
import { HeroGradient } from "../HeroGradient";
import { Button } from "../ui/button";
import AnimateInView from "../animate/AnimateInView";
import HeroLanding from "./HeroLanding";

const HeroSection = () => {
  return (
    <HeroGradient>
      <AnimateInView type="fade-in" direction="bottom" className="pr-4 flex-1">
        <h1 className="font-bold text-2xl md:text-5xl mb-4">
          Transform Your Business with Innovative IT Solutions.
        </h1>
        <p className="mb-8 pr-4">
          We deliver cutting-edge software development, cloud solutions, and IT
          consulting to drive your business forward. We deliver cutting-edge
          software development, cloud solutions, and IT consulting to drive your
          business forward
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button className="rounded-full" size="lg">
            Book A Consultation
          </Button>
          <Button
            variant="outline"
            className="text-primary rounded-full"
            size="lg"
          >
            Request a Quote
          </Button>
        </div>
      </AnimateInView>
      <AnimateInView type="slide-in" className="relative size-full flex-1">
        <HeroLanding className="size-full" />
      </AnimateInView>
    </HeroGradient>
  );
};

export default HeroSection;
