"use client";
import LayoutWithBorderLeft from "@/components/LayoutWithBorderLeft";
import Tabs from "@/components/Tabs";
import { AnimatePresence } from "motion/react";
import React, { useState } from "react";
import Tech from "./_consultation-services/Tech";
import Legal from "./_consultation-services/Legal";
import Business from "./_consultation-services/Business";
import Finance from "./_consultation-services/Finance";

type TConsultationServices = "tech" | "legal" | "business" | "finance";

const ConsultationServices = () => {
  const [activeTab, setActiveTab] = useState<TConsultationServices>("tech");
  const tabs: { label: string; tab: TConsultationServices }[] = [
    { label: "Tech Consultant", tab: "tech" },
    { label: "Legal Consultant", tab: "legal" },
    { label: "Business Consultant", tab: "business" },
    { label: "Finance Consultant", tab: "finance" },
  ];
  const renderActiveService = () => {
    switch (activeTab) {
      case "tech":
        return <Tech />;
      case "legal":
        return <Legal />;
      case "business":
        return <Business />;
      case "finance":
        return <Finance />;
    }
  };
  return (
    <section>
      <LayoutWithBorderLeft
        title="Consultation Services"
        highlightText="We Provide"
        content="Our consultation services provide expert guidance to help you overcome challenges and achieve sustainable growth. We work closely with you to develop tailored strategies that align with your business goals. From operational efficiency to technology adoption, we empower you to drive success."
      />
      <div className="bg-[#4874AE1A]/10 py-8">
        <Tabs options={tabs} setActiveTab={setActiveTab} />
        <div className="container">
          <AnimatePresence>{renderActiveService()}</AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ConsultationServices;
