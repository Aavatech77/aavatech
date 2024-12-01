import React from "react";
import {
  ConnectingLines,
  FloatingElements,
  FloatingElementsProps,
  HeroContainer,
  HeroContent,
  HeroTitle,
} from "../HeroComponents";
import { Code } from "lucide-react";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import BookConsultationModal from "../modals/BookConsultationModal";
import RequestQuoteModal from "../modals/RequestQuoteModal";
const HeroSection = () => {
  const props: FloatingElementsProps = {
    icons: [
      <FaPeopleGroup
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="landing hero"
      />,
      <Code className="w-8 h-8 text-primary mb-2 mx-auto" key="devl hero" />,
      <FaHandsHelping
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="cons hero"
      />,
    ],
    labels: ["Marketing", "Development", "Consultation"],
  };
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle
          main="Welcome to Aava Technology"
          secondary="Empowering Digital Transformation"
          subtitle="At Aava Technology, we are your trusted partner in driving digital innovation and crafting impactful solutions. From creating stunning websites to developing tailored software solutions, we empower businesses to thrive in a digital-first world."
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <BookConsultationModal />
            <RequestQuoteModal />
          </div>
        </HeroTitle>
        <FloatingElements icons={props.icons} labels={props.labels}>
          <ConnectingLines />
        </FloatingElements>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
