"use client";
import React, { useState } from "react";
import Education from "./_our-industries/Education";
import Health from "./_our-industries/Health";
import Orgs from "./_our-industries/Orgs";
import Travel from "./_our-industries/Travel";
import Finance from "./_our-industries/Finance";
import { AnimatePresence } from "motion/react";
import LayoutWithBorderLeft from "@/components/LayoutWithBorderLeft";
import Tabs from "@/components/Tabs";

type TIndustries = "education" | "health" | "travel" | "orgs" | "finance";

const OurIndustries = () => {
  const [activeTab, setActiveTab] = useState<TIndustries>("education");
  const tabs: { label: string; tab: TIndustries }[] = [
    { label: "Education", tab: "education" },
    { label: "Health", tab: "health" },
    { label: "Travel & Tourism", tab: "travel" },
    { label: "NGO / INGO", tab: "orgs" },
    { label: "Finance", tab: "finance" },
  ];

  const renderActiveIndustry = () => {
    switch (activeTab) {
      case "education":
        return <Education />;
      case "health":
        return <Health />;
      case "travel":
        return <Travel />;
      case "orgs":
        return <Orgs />;
      case "finance":
        return <Finance />;
    }
  };
  return (
    <section>
      <LayoutWithBorderLeft
        title="Industries"
        highlightText="we serve"
        content="At Aava Technology, we specialize in providing innovative IT solutions tailored to a wide range of industries. From education to finance, our expertise enables businesses to unlock new potential and drive lasting success."
      />
      <div className="bg-[#4874AE1A]/10 py-8">
        <Tabs options={tabs} setActiveTab={setActiveTab} />
        <div className="container">
          <AnimatePresence>{renderActiveIndustry()}</AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OurIndustries;
