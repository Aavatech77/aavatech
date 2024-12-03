import React from "react";
import { CardHorizontal } from "./Cards";
import AnimateInView from "../animate/AnimateInView";

const PortfolioSection = () => {
  return (
    <section className="bg-[#4874AE1A]/10 py-6 md:py-12">
      <div className="container">
        <h1 className="font-semibold text-2xl">
          Our <span className="text-highlight">Portfolio</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <AnimateInView type="slide-in" delay={0.2}>
            <CardHorizontal
              title="Astitwa Foundation"
              description="Astitwa foundation works to bring joy and happiness to paediatric cancer patient and their families while providing recreational services and financial support."
              href="https://astitwafoundation.org"
              img="/assets/landing-page/smile.jpg"
              newTab
            />
          </AnimateInView>
          <AnimateInView type="slide-in">
            <CardHorizontal
              title="eDAILO"
              description="eDAILO is your one-stop shop for all your needs! From everyday essentials to unique finds, we offer an extensive range of products designed to make your life easier and more enjoyable. "
              href="https://edailo.com/"
              img="/assets/landing-page/edialo.jpeg"
              newTab
            />
          </AnimateInView>
          <AnimateInView type="slide-in">
            <CardHorizontal
              title="INVESTIAA"
              description="INVESTIAA is your one-stop shop for all your needs! From everyday essentials to unique finds, we offer an extensive range of products designed to make your life easier and more enjoyable. "
              href="https://INVESTIAA.com/"
              img="/assets/landing-page/investiaa2.png"
              newTab
            />
          </AnimateInView>
          <AnimateInView type="slide-in">
            <CardHorizontal
              title="Kalpabrikshya"
              description="Kalpabrikshya offers insights and tools on everything from budgeting and saving to investing and retirement planning, empowering you to make informed decisions and achieve your goals with confidence."
              href="https://kalpabrikshya.com/"
              img="/assets/landing-page/kalpa.jpg"
              newTab
            />
          </AnimateInView>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
