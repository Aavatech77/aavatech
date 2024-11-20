import React from "react";
import earthClientLogo from "@/public/assets/about-page/354-3549351_client-earth-logo.png";
import bioTecheLogo from "@/public/assets/about-page/biotechne+logo.png";
import Inmark from "@/public/assets/about-page/Inmarc-client-logos-Recovered-32.png";
import clientlogo from "@/public/assets/about-page/clientlogo-8-3.png";
import KudosClient from "@/public/assets/about-page/Kudos-Client-Logo-3.png";
import Image from "next/image";
import AnimateInView from "@/components/animate/AnimateInView";

const partners = [
  {
    logo: earthClientLogo,
  },
  {
    logo: bioTecheLogo,
  },
  {
    logo: Inmark,
  },
  {
    logo: clientlogo,
  },
  {
    logo: KudosClient,
  },
];
function Partners() {
  return (
    <div className="bg-[#4874AE]/10">
      <AnimateInView type="fade-in">
        <h1 className="text-3xl text-center pt-20">
          Our Partners and Collaborators
        </h1>
      </AnimateInView>
      <AnimateInView type="scale">
        <div className="flex flex-wrap justify-between px-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="rounded-md size-20 md:size-40 relative flex justify-center items-center"
            >
              <Image
                src={partner.logo}
                alt="partner logo"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </AnimateInView>
    </div>
  );
}

export default Partners;
