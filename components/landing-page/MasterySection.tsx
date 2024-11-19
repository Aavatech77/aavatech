import React from "react";
import Image, { StaticImageData } from "next/image";
import HTMLLogo from "@/public/assets/brand-logos/html-logo.png";
import CSSLogo from "@/public/assets/brand-logos/css-logo.png";
import JsLogo from "@/public/assets/brand-logos/js-logo.png";
import NodeLogo from "@/public/assets/brand-logos/node-logo.png";
import NextJSLogo from "@/public/assets/brand-logos/next-logo.png";
import PythonLogo from "@/public/assets/brand-logos/python-logo.png";
import DjangoLogo from "@/public/assets/brand-logos/django-logo.png";
import FigmaLogo from "@/public/assets/brand-logos/figma-logo.png";
import WordPressLogo from "@/public/assets/brand-logos/wordpress-logo.png";
import AnimateInView from "../animate/AnimateInView";

interface IMastery {
  image: string | StaticImageData;
  alt: string;
}

const mastery: IMastery[] = [
  {
    image: HTMLLogo,
    alt: "HTML",
  },
  {
    image: CSSLogo,
    alt: "CSS",
  },
  {
    image: JsLogo,
    alt: "Javascript",
  },
  {
    image: NodeLogo,
    alt: "Node.js",
  },
  {
    image: NextJSLogo,
    alt: "Next.js",
  },
  {
    image: PythonLogo,
    alt: "Python",
  },
  {
    image: DjangoLogo,
    alt: "Django",
  },
  {
    image: FigmaLogo,
    alt: "Figma",
  },
  {
    image: WordPressLogo,
    alt: "WordPress",
  },
];

const MasterySection = () => {
  return (
    <section className="container grid md:grid-cols-2 my-6">
      <AnimateInView type="fade-in">
        <h1 className="text-2xl font-semibold mb-2">
          Our <span className="text-highlight">Mastery</span>
        </h1>
        <h2 className="font-semibold text-xl mb-6">
          The technologies we depend on to{" "}
          <span className="text-[#4874AE]">attain success</span>
        </h2>
        <div className="flex flex-wrap gap-2 font-semibold">
          <p className="border-r text-nowrap px-4">Web Development</p>
          <p className="border-r text-nowrap px-4">App Development</p>
          <p className="px-4">Database</p>
        </div>

        <div className="flex gap-6 flex-wrap mt-8">
          {mastery.map((item, i) => (
            <AnimateInView type="scale" delay={0.2 + 0.1 * i} key={i}>
              <Image
                src={item.image}
                width={52}
                alt={item.alt}
                className="object-contain"
              />
            </AnimateInView>
          ))}
        </div>
      </AnimateInView>
      <AnimateInView type="slide-in" className="mx-auto">
        <Image src="/assets/svgs/mastery.svg" alt="" width={800} height={800} />
      </AnimateInView>
    </section>
  );
};

export default MasterySection;
