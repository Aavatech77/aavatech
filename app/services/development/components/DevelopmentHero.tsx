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
          main="Tailored Software Solutions for "
          secondary="Business Growth."
          subtitle="Our expert team collaborates closely with you to develop scalable, high-quality applications that align with your specific goals. Whether optimizing operations or implementing innovative technologies, we bring your vision to life with impactful, real-world results."
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
