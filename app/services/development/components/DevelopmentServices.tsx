import LayoutWithImageOnLeft from "@/components/LayoutWithImageOnLeft";
import LayoutWithImageOnRight, {
  LayoutWithImageProps,
} from "@/components/LayoutWithImageOnRight";
import React from "react";

const developmentServices: LayoutWithImageProps[] = [
  {
    title: "Web",
    titleHighlight: "Development",
    subtitle: "Lorem, ipsum dolor sit amet consectetur ",
    subtitleHighlight: "adipisicing elit.",
    img: "/assets/services/development/web.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, aliquam? Doloremque officiis inventore vero, voluptatibus consequuntur nulla eos beatae excepturi tempore maiores dolore, saepe est hic sit quaerat soluta tenetur?",
  },
  {
    title: "App",
    titleHighlight: "Development",
    subtitle: "Lorem, ipsum dolor sit amet consectetur ",
    subtitleHighlight: "adipisicing elit.",
    img: "/assets/services/development/app.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, aliquam? Doloremque officiis inventore vero, voluptatibus consequuntur nulla eos beatae excepturi tempore maiores dolore, saepe est hic sit quaerat soluta tenetur?",
  },
  {
    title: "Software",
    titleHighlight: "Development",
    subtitle: "Lorem, ipsum dolor sit amet consectetur ",
    subtitleHighlight: "adipisicing elit.",
    img: "/assets/services/development/software.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, aliquam? Doloremque officiis inventore vero, voluptatibus consequuntur nulla eos beatae excepturi tempore maiores dolore, saepe est hic sit quaerat soluta tenetur?",
  },
  {
    title: "UI/UX",
    titleHighlight: "Design",
    subtitle: "Lorem, ipsum dolor sit amet consectetur ",
    subtitleHighlight: "adipisicing elit.",
    img: "/assets/services/development/ui.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, aliquam? Doloremque officiis inventore vero, voluptatibus consequuntur nulla eos beatae excepturi tempore maiores dolore, saepe est hic sit quaerat soluta tenetur?",
  },
];
const DevelopmentServices = () => {
  return (
    <section className="space-y-8">
      {developmentServices.map((item, index) =>
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

export default DevelopmentServices;
