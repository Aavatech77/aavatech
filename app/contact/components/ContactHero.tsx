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
          main="Get In Touch "
          secondary="With Us"
          subtitle="Have questions or ready to start your next project? Our team is here to help. Reach out to us for expert solutions, consultations, or more information. We’d love to connect and explore how we can support your goals."
        />
        <FloatingElements icons={props.icons} labels={props.labels}>
          <ConnectingLines />
        </FloatingElements>{" "}
      </HeroContent>
    </HeroContainer>
  );
};

export default ContactHero;
