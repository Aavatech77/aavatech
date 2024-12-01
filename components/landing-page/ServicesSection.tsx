import Image, { StaticImageData } from "next/image";
import React from "react";
import SoftwareDev from "@/public/assets/landing-page/software-dev.png";
import ConsultationServiceImage from "@/public/assets/consultation-page/business-consultant.png";
import MarketingService from "@/public/assets/landing-page/marketing-service.png";
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
    title: "Development Services",
    description:
      "A Visually Stunning and Fully Functional Software Solutions Tailored to Your Needs.",
    image: SoftwareDev,
    href: "/services/development",
  },
  {
    title: "Consultation Services",
    description:
      "Strategic Insights, Transformative Solutions: Grow Your Business Journey",
    image: ConsultationServiceImage,
    href: "/services/consultant",
  },
  {
    title: "Marketing Services",
    description: "Strategies that Drive Engagement and Growth",
    image: MarketingService,
    href: "/services/marketing",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-6 md:py-12">
      <div className="container">
        <h1 className="font-semibold text-2xl text-center">
          Our <span className="text-highlight">Services</span>
          <br />
          Fueling Innovation with{" "}
          <span className="text-[#4874AE]">Tailored Digital Solutions</span>
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
