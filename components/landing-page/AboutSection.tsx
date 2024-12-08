import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import PersonImage from "@/public/assets/landing-page/person.png";
import AnimateInView from "../animate/AnimateInView";
import Link from "next/link";

const LandingPageAbout = () => {
  return (
    <section className="container grid md:grid-cols-2 place-items-center gap-4 my-8 md:my-12">
      <AnimateInView type="fade-in">
        <h1 className="font-semibold text-2xl mb-4">
          Who <span className="text-highlight">we are</span>
        </h1>
        <p className="mb-6">
          We are a team of young, passionate innovators at Aava Technology,
          driven by the desire to transform ideas into digital realities. With a
          fresh perspective and a fearless approach, we craft cutting-edge web
          development, software solutions, and digital marketing strategies that
          push the boundaries of technology. At Aava, creativity meets
          expertise, and together, we shape the future of tech.
        </p>
        <Button className="rounded-full" asChild>
          <Link href="/about">About Us</Link>
        </Button>
      </AnimateInView>
      <AnimateInView type="slide-in" className="min-h-[300px] w-full mx-auto">
        <Image
          src={PersonImage}
          alt="A person using Laptop"
          className="object-contain mx-auto"
        />
      </AnimateInView>
    </section>
  );
};

export default LandingPageAbout;
