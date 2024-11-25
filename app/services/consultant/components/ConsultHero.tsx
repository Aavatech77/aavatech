import React from "react";
import {
  ConnectingLines,
  FloatingElements,
  FloatingElementsProps,
  HeroContainer,
  HeroContent,
  HeroTitle,
} from "@/components/HeroComponents";
import { GoOrganization } from "react-icons/go";
import { RiPoliceBadgeFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";
import AdditionalFloatingItems from "./AdditionalFloatingItems";

const ConsultHero = () => {
  const props: FloatingElementsProps = {
    icons: [
      <GrTechnology
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="tech consult"
      />,
      <RiPoliceBadgeFill
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="legal consult"
      />,
      <GoOrganization
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="business consult"
      />,
    ],
    labels: ["Tech", "Legal", "Business"],
  };
  const paths = [
    {
      from: { x: 320, y: 180 },
      to: { x: 200, y: 200 },
    },
  ];
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle
          main="Transform Your Business with"
          secondary="Innovative IT Solutions"
          subtitle="We deliver cutting-edge software development, cloud solutions, and IT consulting to drive your business forward. We deliver cutting-edge software development, cloud solutions, and IT consulting to drive your business forward."
        />

        <FloatingElements icons={props.icons} labels={props.labels}>
          <AdditionalFloatingItems />
          <ConnectingLines paths={paths} />
        </FloatingElements>
      </HeroContent>
    </HeroContainer>
  );
};

export default ConsultHero;
