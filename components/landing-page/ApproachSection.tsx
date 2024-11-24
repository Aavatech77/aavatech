import Image from "next/image";
import React from "react";
import AnimateInView from "../animate/AnimateInView";

interface IApproach {
  title: string;
  image: string;
}

const content: IApproach[] = [
  {
    title: "Prioritizing Citizen Science Initiatives",
    image: "/assets/landing-page/users.png",
  },
  {
    title: "Participatory Approach Backed by Scientific Methods",
    image: "/assets/landing-page/badge.png",
  },
  {
    title: "Social Technical Design",
    image: "/assets/landing-page/git.png",
  },
  {
    title: "Open Source Software Solution",
    image: "/assets/landing-page/code.png",
  },
  {
    title: "Open Data",
    image: "/assets/landing-page/download.png",
  },
];

const ApproachSection = () => {
  return (
    <section className="py-8 md:py-12 space-y-2">
      <div className="container">
        <h1 className="font-semibold text-2xl text-center">
          Our <span className="text-highlight">Approach</span>
          <br />
          Outstanding Solutions to Fuel Your{" "}
          <span className="text-[#4874AE]">Business Growth</span>
        </h1>
        <p className="text-sm text-center">
          We encourage the use of open data and open source technologies
          whenever feasible.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {content.map((item, i) => (
            <div className="" key={i}>
              <AnimateInView
                type="scale-and-fade"
                className="size-20 relative mx-auto origin-top-left"
              >
                <Image
                  src={item.image}
                  width={80}
                  height={80}
                  alt=""
                  className=" object-contain"
                />
              </AnimateInView>
              <AnimateInView type="fade-in">
                <p className="font-semibold text-sm mx-auto max-w-[24ch] text-center">
                  {item.title}
                </p>
              </AnimateInView>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
