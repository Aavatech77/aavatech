import React from "react";
import earthClientLogo from "@/public/assets/about-page/354-3549351_client-earth-logo.png";
import bioTecheLogo from "@/public/assets/about-page/biotechne+logo.png";
import Inmark from "@/public/assets/about-page/Inmarc-client-logos-Recovered-32.png";
import clientlogo from "@/public/assets/about-page/clientlogo-8-3.png";
import KudosClient from "@/public/assets/about-page/Kudos-Client-Logo-3.png";
import AnimateInView from "@/components/animate/AnimateInView";
import InfiniteCarousel, {
  CarouselItem,
} from "@/components/animate/InfiniteCarousel";

const partners: CarouselItem[] = [
  { image: earthClientLogo, alt: "Earth Client" },
  { image: bioTecheLogo, alt: "Bio Techne" },
  { image: Inmark, alt: "Inmark" },
  { image: clientlogo, alt: "" },
  { image: KudosClient, alt: "Kudos Client" },
];
function Partners() {
  return (
    <div className="bg-[#4874AE]/10 py-6 md:py-12">
      <AnimateInView type="fade-in" className="mb-6">
        <h1 className="text-3xl font-semibold text-center">
          Our Partners and Collaborators
        </h1>
      </AnimateInView>
      {/* <AnimateInView type="scale">
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
      </AnimateInView> */}
      <div className="container">
        <InfiniteCarousel items={partners} />
      </div>
    </div>
  );
}

export default Partners;
