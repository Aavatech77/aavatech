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
          main="Strategic Business Consultation for "
          secondary="Lasting Success"
          subtitle="Our strategic consultation services help businesses navigate challenges and drive sustainable growth. We provide expert insights in business development, technology adoption, and operational efficiency to optimize your processes."
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
