import LayoutWithImageOnLeft from "@/components/LayoutWithImageOnLeft";
import LayoutWithImageOnRight, {
  LayoutWithImageProps,
} from "@/components/LayoutWithImageOnRight";
import React from "react";

const marketingServices: LayoutWithImageProps[] = [
  {
    title: "Digital",
    titleHighlight: "Marketing",
    subtitle: "Maximize Reach and Conversions with Data-Driven ",
    subtitleHighlight: "Marketing Strategies",
    img: "/assets/services/marketing/digital-marketing.png",
    content:
      "Our digital marketing services combine SEO, PPC, and targeted campaigns to expand your reach and drive conversions. We leverage analytics to optimize your strategy, ensuring measurable results and long-term success in a digital-first world.",
  },
  {
    title: "Social Media",
    titleHighlight: "Marketing",
    subtitle: "Boost Brand Visibility and Drive Growth with Targeted Campaigns",
    subtitleHighlight: "Targeted Campaigns",
    img: "/assets/services/marketing/social-marketing.png",
    content:
      "Our social media marketing strategies help you connect with your audience, increase engagement, and grow your brand presence. We create tailored campaigns that foster community, boost visibility, and drive results across platforms.",
  },
  {
    title: "Graphic",
    titleHighlight: "Design",
    subtitle: "Designing Visually Engaging Experiences that Speak to ",
    subtitleHighlight: "Your Brand.",
    img: "/assets/services/marketing/graphic-design.png",
    content:
      "Our graphic design services transform ideas into stunning visuals that captivate and communicate. From logos to marketing materials, we craft designs that enhance brand identity, engage your audience, and leave a lasting impression.",
  },
  {
    title: "Content",
    titleHighlight: "Creation",
    subtitle: "Create Impactful Content that Elevates Your Brand and Engages ",
    subtitleHighlight: "Your Audience.",
    img: "/assets/services/marketing/content-creation.png",
    content:
      "We produce high-quality, compelling content that tells your brand's story and captures your audience's attention. From blogs to videos, our content creation services boost engagement, enhance your message, and support your marketing goals.",
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
