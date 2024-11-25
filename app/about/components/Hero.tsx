import {
  ConnectingLines,
  FloatingElements,
  FloatingElementsProps,
  HeroContainer,
  HeroContent,
  HeroTitle,
} from "@/components/HeroComponents";
import React from "react";
import { Code } from "lucide-react";
import { FaHandsHelping } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

function Hero() {
  const props: FloatingElementsProps = {
    icons: [
      <FaPeopleGroup
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key={"marketing hero"}
      />,
      <Code
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="development hero"
      />,
      <FaHandsHelping
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="consultation hero"
      />,
    ],
    labels: ["Marketing", "Development", "Consultation"],
  };
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle
          main="Transform Your Business with"
          secondary="Innovative IT Solutions"
          subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus quae cum ab optio veniam ipsa, illum neque laboriosam iure eius."
        />
        <FloatingElements icons={props.icons} labels={props.labels}>
          <ConnectingLines />
        </FloatingElements>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
