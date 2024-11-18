import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import PersonImage from "@/public/assets/landing-page/person.png";

const LandingPageAbout = () => {
  return (
    <section className="container grid md:grid-cols-2 place-items-center gap-4 my-8 md:my-12">
      <div>
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
        <Button className="rounded-full">About Us</Button>
      </div>
      <div className="relative min-h-[300px] size-full">
        <Image
          src={PersonImage}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="A person using Laptop"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default LandingPageAbout;
