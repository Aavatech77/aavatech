import React from "react";
import TiggLogo from "@/public/assets/brand-logos/tigg.svg";
import HyperceLogo from "@/public/assets/brand-logos/hyperce.svg";
import ArkboLogo from "@/public/assets/brand-logos/arkbo.png";
import SaralbooksLogo from "@/public/assets/brand-logos/saralbooks.png";
import AnimateInView from "@/components/animate/AnimateInView";
import InfiniteCarousel, {
  CarouselItem,
} from "@/components/animate/InfiniteCarousel";

const partners: CarouselItem[] = [
  { image: TiggLogo, alt: "Tigg" },
  { image: HyperceLogo, alt: "Hyperce" },
  { image: ArkboLogo, alt: "Arkbo technology" },
  { image: SaralbooksLogo, alt: "Saral books" },
];
function Partners() {
  return (
    <div className="bg-[#4874AE]/10 py-6 md:py-12">
      <AnimateInView type="fade-in" className="mb-6">
        <h1 className="text-3xl font-semibold text-center">
          Our Partners and Collaborators
        </h1>
      </AnimateInView>
      <div className="container">
        <InfiniteCarousel items={partners} />
      </div>
    </div>
  );
}

export default Partners;
