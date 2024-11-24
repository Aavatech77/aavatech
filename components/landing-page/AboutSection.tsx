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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto
          repellendus recusandae accusamus soluta libero porro perspiciatis
          laborum fugiat. Quas alias architecto animi placeat mollitia suscipit
          voluptatum dolor. Est, error autem in nemo eaque accusamus sit
          pariatur quia delectus debitis.
        </p>
        <Button className="rounded-full" asChild>
          <Link href="/about">About Us</Link>
        </Button>
      </AnimateInView>
      <AnimateInView
        type="slide-in"
        className="relative min-h-[300px] w-full mx-auto"
      >
        <Image
          src={PersonImage}
          alt="A person using Laptop"
          className="object-contain"
        />
      </AnimateInView>
    </section>
  );
};

export default LandingPageAbout;
