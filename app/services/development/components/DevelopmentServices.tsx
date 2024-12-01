import LayoutWithImageOnLeft from "@/components/LayoutWithImageOnLeft";
import LayoutWithImageOnRight, {
  LayoutWithImageProps,
} from "@/components/LayoutWithImageOnRight";
import React from "react";

const developmentServices: LayoutWithImageProps[] = [
  {
    title: "Web",
    titleHighlight: "Development",
    subtitle: "A Visually Stunning and Fully Functional Website Tailored to ",
    subtitleHighlight: "Your Needs.",
    img: "/assets/services/development/web.png",
    content:
      "In today’s digital world, your website is key to business growth. Our expert web developers create custom, user-friendly, and responsive websites that are visually appealing and align with your goals, offering end-to-end solutions from design to advanced features.",
  },
  {
    title: "Software",
    titleHighlight: "Development",
    subtitle: "Your Vision, Our Code: Building Software for ",
    subtitleHighlight: "Business Growth.",
    img: "/assets/services/development/software.png",
    content:
      "Our business deserves software solutions that adapt and scale. Our skilled developers turn your vision into powerful applications that enhance efficiency. From custom software to seamless integrations, every solution is tailored to your unique needs. Partner with us to empower your business in the digital landscape",
  },
  {
    title: "App",
    titleHighlight: "Development",
    subtitle: "Launch Your Dream App Together with Our ",
    subtitleHighlight: "Development Experts.",
    img: "/assets/services/development/app.png",
    content:
      "Transform your vision into reality with our expert app development services. We create innovative, user-friendly apps that captivate audiences, leveraging cutting-edge technology to deliver seamless, intuitive experiences that elevate your digital presence.",
  },
  {
    title: "UI/UX",
    titleHighlight: "Design",
    subtitle: "Crafting Immersive, User-Centric ",
    subtitleHighlight: "Digital Experiences.",
    img: "/assets/services/development/ui.png",
    content:
      "We redefine digital experiences with user-focused UI/UX design. Our intuitive, data-driven interfaces enhance engagement and streamline journeys, ensuring seamless functionality across devices. Tailored to captivate users and drive business impact, we transform your platform for growth.",
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
