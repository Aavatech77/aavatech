import React from "react";
import DevelopmentHero from "./components/DevelopmentHero";
import DevelopmentServices from "./components/DevelopmentServices";
import LayoutWithBorderLeft from "@/components/LayoutWithBorderLeft";

const DevelopmentServicesPage = () => {
  return (
    <>
      <DevelopmentHero />
      <LayoutWithBorderLeft
        title="Development Services "
        highlightText="We Offer"
        content="We create custom software solutions that drive business success and innovation. Our team collaborates with you to deliver scalable, high-quality applications tailored to your unique needs. From system enhancements to technology integrations, we provide the tools to turn your vision into reality."
      />
      <DevelopmentServices />
    </>
  );
};

export default DevelopmentServicesPage;
