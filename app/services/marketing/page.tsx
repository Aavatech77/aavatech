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
        content="At Aava Technology, we provide a comprehensive range of marketing services designed to accelerate your brand’s growth and ensure long-term success. Our expert team crafts personalized, results-driven strategies that align with your unique business goals, helping you stand out and thrive in today’s competitive digital world."
      />
      <MarketingServices />
    </>
  );
};

export default MarketingPage;
