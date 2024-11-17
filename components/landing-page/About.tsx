import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import PersonImage from "@/public/assets/landing-page/person.png";

const LandingPageAbout = () => {
  return (
    <section className="container grid md:grid-cols-2 place-items-center my-8 md:my-12">
      <div>
        <p className="font-semibold text-2xl">
          Who <span className="text-[#4874AE]">we are</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto
          repellendus recusandae accusamus soluta libero porro perspiciatis
          laborum fugiat. Quas alias architecto animi placeat mollitia suscipit
          voluptatum dolor. Est, error autem in nemo eaque accusamus sit
          pariatur quia delectus debitis.
        </p>
        <Button className="rounded-full">About Us</Button>
      </div>
      <div className="relative size-full">
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
