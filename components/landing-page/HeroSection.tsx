import React from "react";
import { HeroGradient } from "../HeroGradient";
import { Button } from "../ui/button";
import AnimateInView from "../animate/AnimateInView";
import Link from "next/link";
import { SVGLoader } from "../SVGLoader";
import LandingSvg from "@/public/assets/svgs/landing.svg";
const HeroSection = () => {
  return (
    <>
      <HeroGradient>
        <AnimateInView
          type="fade-in"
          direction="bottom"
          className="pr-4 flex-1"
        >
          <h1 className="font-bold text-2xl md:text-5xl mb-4">
            Transform Your Business with Innovative IT Solutions.
          </h1>
          <p className="mb-8 pr-4">
            We deliver cutting-edge software development, cloud solutions, and
            IT consulting to drive your business forward. We deliver
            cutting-edge software development, cloud solutions, and IT
            consulting to drive your business forward
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button className="rounded-full" size="lg" asChild>
              <Link href="/services/consultant">Book A Consultation</Link>
            </Button>
            <Button
              variant="outline"
              className="text-primary rounded-full"
              size="lg"
              asChild
            >
              <Link href="/">Request a Quote</Link>
            </Button>
          </div>
        </AnimateInView>
        <AnimateInView type="slide-in" addBounce={true} className="flex-1">
          {/* <AnimateInView type="bounce" repeat repeatDelay={0.3}> */}
          <SVGLoader src={LandingSvg} className="" alt="" priority />
          {/* </AnimateInView> */}
        </AnimateInView>
      </HeroGradient>
    </>
  );
};

export default HeroSection;
