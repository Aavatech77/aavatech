import React from "react";
import {
  ConnectingLines,
  FloatingElements,
  FloatingElementsProps,
  HeroContainer,
  HeroContent,
  HeroTitle,
} from "@/components/HeroComponents";
import { MdHealthAndSafety } from "react-icons/md";
import { GiCaravan } from "react-icons/gi";
import { GoOrganization } from "react-icons/go";
import AdditionalFloatingItems from "./AdditionalFloatingItems";

const IndustriesHero = () => {
  const props: FloatingElementsProps = {
    icons: [
      <MdHealthAndSafety
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="health industry"
      />,
      <GiCaravan
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="travel industry"
      />,
      <GoOrganization
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="orgs industry"
      />,
    ],
    labels: ["Health", "Travel & Tourism", "INGO/NGO"],
  };
  const paths = [
    {
      from: { x: 80, y: 280 },
      to: { x: 200, y: 200 },
    },
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
          subtitle="Aava Technology delivers innovative IT solutions across industries, including education, finance, healthcare, and travel, helping businesses unlock new potential, drive success, and stay ahead of the curve."
        />

        <FloatingElements icons={props.icons} labels={props.labels}>
          <AdditionalFloatingItems />
          <ConnectingLines paths={paths} />
        </FloatingElements>
      </HeroContent>
    </HeroContainer>
  );
};

export default IndustriesHero;
