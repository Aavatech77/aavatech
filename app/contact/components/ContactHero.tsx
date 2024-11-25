import React from "react";
import {
  FloatingElementsProps,
  HeroContainer,
  HeroContent,
  HeroTitle,
  FloatingElements,
  ConnectingLines,
} from "@/components/HeroComponents";
import { Code2 } from "lucide-react";
import { FaChalkboardUser, FaPeopleGroup } from "react-icons/fa6";
const ContactHero = () => {
  const props: FloatingElementsProps = {
    icons: [
      <FaChalkboardUser
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="uiux contact"
      />,
      <Code2 className="w-8 h-8 text-primary mb-2 mx-auto" key="dev contact" />,
      <FaPeopleGroup
        className="w-8 h-8 text-primary mb-2 mx-auto"
        key="marketing contact"
      />,
    ],
    labels: ["UI/UX", "Development", "Marketing"],
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
        </FloatingElements>{" "}
      </HeroContent>
    </HeroContainer>
  );
};

export default ContactHero;
