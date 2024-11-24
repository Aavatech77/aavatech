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
              title="Lorem Ipsum"
              description="Stay upto date with the latestStartup Insights with.Stay upto date with the latestStartup Insights with"
              href="#"
              img="/assets/landing-page/library-architecture.png"
            />
          </AnimateInView>
          <AnimateInView type="slide-in">
            <CardHorizontal
              title="Lorem Ipsum"
              description="Stay upto date with the latestStartup Insights with.Stay upto date with the latestStartup Insights with"
              href="#"
              img="/assets/landing-page/library-architecture.png"
            />
          </AnimateInView>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
