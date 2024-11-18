import React from "react";
import { CardHorizontal } from "./Cards";
import AnimateInView from "../animate/AnimateInView";

const PortfolioSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 container my-8">
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
  );
};

export default PortfolioSection;
