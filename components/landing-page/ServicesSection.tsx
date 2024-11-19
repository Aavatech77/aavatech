import Image, { StaticImageData } from "next/image";
import React from "react";
import WebsiteDev from "@/public/assets/landing-page/website-dev.png";
import AppDev from "@/public/assets/landing-page/app-dev.png";
import SoftwareDev from "@/public/assets/landing-page/software-dev.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IServices {
  title: string;
  description: string;
  image: StaticImageData | string;
  href: string;
}

const services: IServices[] = [
  {
    title: "Website Development",
    description:
      "A visually stunning and fully functional website design tailored to your needs.",
    image: WebsiteDev,
    href: "#",
  },
  {
    title: "App Development",
    description:
      "A visually stunning and fully functional app design tailored to your needs.",
    image: AppDev,
    href: "#",
  },
  {
    title: "Software Development",
    description:
      "A visually stunning and fully functional software design tailored to your needs.",
    image: SoftwareDev,
    href: "#",
  },
  {
    title: "Website Development",
    description:
      "A visually stunning and fully functional website design tailored to your needs.",
    image: WebsiteDev,
    href: "#",
  },
  {
    title: "Website Development",
    description:
      "A visually stunning and fully functional website design tailored to your needs.",
    image: WebsiteDev,
    href: "#",
  },
  {
    title: "Website Development",
    description:
      "A visually stunning and fully functional website design tailored to your needs.",
    image: WebsiteDev,
    href: "#",
  },
];

const ServicesSection = () => {
  return (
    <section className="my-8 md:my-12 py-8 md:py-12 bg-[#4874AE1A]/10">
      <div className="container">
        <h1 className="font-semibold text-2xl text-center">
          Our <span className="text-highlight">services</span>
          <br />
          Outstanding Solutions to Fuel Your{" "}
          <span className="text-[#4874AE]">Business Growth</span>
        </h1>
        <p className="text-center text-sm">
          Explore our diverse digital solutions designed to elevate your online
          presence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-tr-xl rounded-bl-xl p-4 relative group overflow-hidden"
            >
              <div className="relative min-h-[250px]">
                <Image
                  src={service.image}
                  alt="Website Development"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-lg my-2">{service.title}</p>
              <p className="mb-2">{service.description}</p>
              <Link href={service.href} className="text-primary flex gap-2">
                More Details <ArrowRight />
              </Link>
              <div className="absolute inset-0 bg-secondary-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
