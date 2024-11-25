import {
  FloatingElementsProps,
  HeroContainer,
  HeroContent,
  HeroTitle,
  FloatingElements,
  ConnectingLines,
} from "@/components/HeroComponents";
import React from "react";
import { FaChalkboardUser } from "react-icons/fa6";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import AdditionalFloatingItems from "./AdditionalFloatingElements";
import { MdWeb } from "react-icons/md";

const DevelopmentHero = () => {
  const props: FloatingElementsProps = {
    icons: [
      <HiOutlineDeviceMobile
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="mobile devhero"
      />,
      <MdWeb className="w-8 h-8 text-primary mb-2 mx-auto" key="web devhero" />,
      <FaChalkboardUser
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="uiux devhero"
      />,
    ],
    labels: ["Mobile Apps", "Websites", "UI / UX"],
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
          main="Join Our Team and"
          secondary="Grow with Us"
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

export default DevelopmentHero;
