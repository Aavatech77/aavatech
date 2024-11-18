import React from "react";
import { CardHorizontal } from "./Cards";

const PortfolioSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 container my-8">
      <CardHorizontal
        title="Lorem Ipsum"
        description="Stay upto date with the latestStartup Insights with.Stay upto date with the latestStartup Insights with"
        href="#"
        img="/assets/landing-page/library-architecture.png"
      />
      <CardHorizontal
        title="Lorem Ipsum"
        description="Stay upto date with the latestStartup Insights with.Stay upto date with the latestStartup Insights with"
        href="#"
        img="/assets/landing-page/library-architecture.png"
      />
    </div>
  );
};

export default PortfolioSection;
