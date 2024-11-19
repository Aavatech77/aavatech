import LayoutWithImageOnLeft from "@/components/LayoutWithImageOnLeft";
import LayoutWithImageOnRight, {
  LayoutWithImageProps,
} from "@/components/LayoutWithImageOnRight";
import React from "react";

const marketingServices: LayoutWithImageProps[] = [
  {
    title: "Digital",
    titleHighlight: "Marketing",
    subtitle: "Lorem, ipsum dolor sit amet consectetur ",
    subtitleHighlight: "adipisicing elit.",
    img: "/assets/services/marketing/digital-marketing.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, aliquam? Doloremque officiis inventore vero, voluptatibus consequuntur nulla eos beatae excepturi tempore maiores dolore, saepe est hic sit quaerat soluta tenetur?",
  },
  {
    title: "Social Media",
    titleHighlight: "Marketing",
    subtitle: "Lorem, ipsum dolor sit amet consectetur ",
    subtitleHighlight: "adipisicing elit.",
    img: "/assets/services/marketing/social-marketing.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, aliquam? Doloremque officiis inventore vero, voluptatibus consequuntur nulla eos beatae excepturi tempore maiores dolore, saepe est hic sit quaerat soluta tenetur?",
  },
  {
    title: "Graphic",
    titleHighlight: "Design",
    subtitle: "Lorem, ipsum dolor sit amet consectetur ",
    subtitleHighlight: "adipisicing elit.",
    img: "/assets/services/marketing/graphic-design.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, aliquam? Doloremque officiis inventore vero, voluptatibus consequuntur nulla eos beatae excepturi tempore maiores dolore, saepe est hic sit quaerat soluta tenetur?",
  },
  {
    title: "Content",
    titleHighlight: "Creation",
    subtitle: "Lorem, ipsum dolor sit amet consectetur ",
    subtitleHighlight: "adipisicing elit.",
    img: "/assets/services/marketing/content-creation.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, aliquam? Doloremque officiis inventore vero, voluptatibus consequuntur nulla eos beatae excepturi tempore maiores dolore, saepe est hic sit quaerat soluta tenetur?",
  },
];
const MarketingServices = () => {
  return (
    <section className="space-y-8">
      {marketingServices.map((item, index) =>
        index % 2 === 0 ? (
          <div className="bg-[#4874AE1A]/10" key={`${item.title}${index}`}>
            <div className="container py-6 md:py-12">
              <LayoutWithImageOnRight {...item} />
            </div>
          </div>
        ) : (
          <div className="container py-6 md:py-12" key={`${item.title}index`}>
            <LayoutWithImageOnLeft {...item} />
          </div>
        )
      )}
    </section>
  );
};

export default MarketingServices;
