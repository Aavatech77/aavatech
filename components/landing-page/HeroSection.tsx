import React from "react";
import { Gradiennt } from "../Gradient";
import { Button } from "../ui/button";
import Image from "next/image";
import Hero from "@/public/assets/landing-page/landing-hero.png";

const HeroSection = () => {
  return (
    <Gradiennt>
      <div className="flex-1">
        <h1 className="font-bold text-3xl mb-4">
          Transform Your Business with Innovative IT Solutions.
        </h1>
        <p className="mb-8">
          We deliver cutting-edge software development, cloud solutions, and IT
          consulting to drive your business forward. We deliver cutting-edge
          software development, cloud solutions, and IT consulting to drive your
          business forward
        </p>
        <div className="flex gap-4">
          <Button className="rounded-full">Book A Consultation</Button>
          <Button variant="outline" className="text-primary rounded-full">
            Request a Quote
          </Button>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src={Hero}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="hero image"
          className="object-contain"
        />
      </div>
    </Gradiennt>
  );
};

export default HeroSection;
