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
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quia, ipsa dignissimos, eius nihil rerum debitis nisi iusto voluptas odio neque ipsum reiciendis atque laboriosam eos adipisci cumque corporis impedit lorem ihsd jh!"
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
