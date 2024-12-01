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
          main="Transform Your Brand with "
          secondary="Expert Marketing Strategies"
          subtitle="Harness the power of tailored marketing solutions from Aava Technology. Our team specializes in creating impactful digital campaigns that drive engagement, increase visibility, and deliver measurable results. From SEO and content marketing to targeted ads, we help you connect with your ideal audience and accelerate growth."
        />
        <FloatingElements icons={props.icons} labels={props.labels}>
          <ConnectingLines />
        </FloatingElements>
      </HeroContent>
    </HeroContainer>
  );
};

export default MarketingHero;
