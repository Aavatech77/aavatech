import React from "react";
import Image from "next/image";
import AnimateInView from "../animate/AnimateInView";
import InfiniteCarousel, { CarouselItem } from "../animate/InfiniteCarousel";
import HTMLLogo from "@/public/assets/brand-logos/html-logo.png";
import CSSLogo from "@/public/assets/brand-logos/css-logo.png";
import JsLogo from "@/public/assets/brand-logos/js-logo.png";
import NodeLogo from "@/public/assets/brand-logos/node-logo.png";
import NextJSLogo from "@/public/assets/brand-logos/next-logo.png";
import PythonLogo from "@/public/assets/brand-logos/python-logo.png";
import DjangoLogo from "@/public/assets/brand-logos/django-logo.png";
import FigmaLogo from "@/public/assets/brand-logos/figma-logo.png";
import WordPressLogo from "@/public/assets/brand-logos/wordpress-logo.png";

const mastery: CarouselItem[] = [
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

const MasterySection: React.FC = () => {
  return (
    <section className="bg-[#4874AE1A]/10 py-6 md:py-12">
      <div className="container grid md:grid-cols-2 my-6 gap-8">
        <div className="flex flex-col gap-6">
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
          </AnimateInView>
          <div className="w-full overflow-hidden">
            <InfiniteCarousel items={mastery} />
          </div>
        </div>
        <AnimateInView type="slide-in" className="mx-auto">
          <Image
            src="/assets/svgs/mastery.svg"
            alt="Mastery Illustration"
            width={800}
            height={800}
          />
        </AnimateInView>
      </div>
    </section>
  );
};

export default MasterySection;
