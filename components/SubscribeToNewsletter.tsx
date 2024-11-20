import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SubscribeToNewsLetter = () => {
  return (
    <section className="relative mt-8 md:mt-12">
      <div className="container grid md:grid-cols-2 gap-4 md:gap-8 py-8 md:py-12">
        <div className="space-y-4">
          <h1 className="font-semibold text-2xl">
            Let&apos;s collaborate to bring your vision to{" "}
            <span className="text-highlight">life and make it a reality.</span>
          </h1>
          <p className="text-sm">
            Our team is available Monday through Friday, from 9:00 AM to 6:00
            PM.
          </p>
        </div>
        <div className="space-y-4">
          <p className="font-semibold text-xl">Subscribe to our Newsletter</p>
          <p className="text-sm">
            Subscribe to access our exclusive offers before anyone else
          </p>
          <form className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your Email"
              className="bg-white"
            />
            <Button type="submit" className="rounded-full">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <Image
        src="/assets/landing-page/library-architecture.png"
        fill
        sizes="100vw"
        alt=""
        className="inset-0 object-cover opacity-25 -z-10"
      />
    </section>
  );
};

export default SubscribeToNewsLetter;
