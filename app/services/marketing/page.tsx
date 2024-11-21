import React from "react";
import MarketingHero from "./components/MarketingHero";
import LayoutWithBorderLeft from "@/components/LayoutWithBorderLeft";
import MarketingServices from "./components/MarketingServices";

const MarketingPage = () => {
  return (
    <>
      <MarketingHero />
      <LayoutWithBorderLeft
        title="Marketing Services"
        highlightText="We Offer"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga totam numquam quo, ipsum minus possimus odio rem eveniet ex expedita deserunt in aut suscipit sapiente. Ipsum corporis officiis sapiente maiores?"
      />
      <MarketingServices />
    </>
  );
};

export default MarketingPage;
