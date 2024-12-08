import React from "react";
import SubscribeForm from "./SubscribeForm";

const SubscribeToNewsLetter = () => {
  return (
    <section className="relative mt-8 md:mt-12 bg-[url('/assets/landing-page/library-architecture.png')] bg-center">
      <div className="container grid md:grid-cols-2 gap-4 md:gap-8 py-8 md:py-12 relative z-10">
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
          <SubscribeForm />
        </div>
      </div>
      <div className="absolute inset-0 bg-slate-300/70"></div>
    </section>
  );
};

export default SubscribeToNewsLetter;
