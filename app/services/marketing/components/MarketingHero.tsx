import React from "react";
import {
  ConnectingLines,
  FloatingElements,
  FloatingElementsProps,
  HeroContainer,
  HeroContent,
  HeroTitle,
} from "@/components/HeroComponents";
import { CgWebsite } from "react-icons/cg";
import { MdMobileScreenShare } from "react-icons/md";
import { HiOutlineDeviceMobile } from "react-icons/hi";

const MarketingHero = () => {
  const props: FloatingElementsProps = {
    icons: [
      <MdMobileScreenShare
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="digital marketing"
      />,
      <CgWebsite
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="graphic designing"
      />,
      <HiOutlineDeviceMobile
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="content creation"
      />,
    ],
    labels: ["Digital Marketing", "Graphic Design", "Content Creation"],
  };
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle
          main="Join Our Team and"
          secondary="Grow with Us"
          subtitle="We deliver cutting-edge software development, cloud solutions, and IT consulting to drive your business forward. We deliver cutting-edge software development, cloud solutions, and IT consulting to drive your business forward."
        />
        <FloatingElements icons={props.icons} labels={props.labels}>
          <ConnectingLines />
        </FloatingElements>
      </HeroContent>
    </HeroContainer>
  );
};

export default MarketingHero;
