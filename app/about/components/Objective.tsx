import { Rocket, Eye } from "lucide-react";
import Image from "next/image";
import Target from "@/public/assets/about-page/target.png";
import AnimateInView from "@/components/animate/AnimateInView";
export default function Objective() {
  return (
    <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
      <AnimateInView type="fade-in">
        <div className="space-y-4">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
            <Image src={Target} width={100} height={100} alt="Target" />
          </div>
          <h2 className="text-4xl font-bold">
            Our <span className="text-blue-600">Objective</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our objective is to redefine digital innovation by crafting unique,
            tailored solutions that drive growth. We aim to empower businesses
            with cutting-edge technology, prioritizing creativity and precision.
            At Aava Technology, we focus on solving challenges with a
            client-centric approach. Our mission is to set new standards in
            excellence and innovation.
          </p>
        </div>
      </AnimateInView>
      <AnimateInView type="slide-in" className="relative">
        <div className="space-y-8">
          <div className="bg-gray-50 rounded-lg p-8 space-y-4">
            <div className="flex justify-end">
              <Rocket className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold">
              Our <span className="text-blue-600">Mission</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to transform businesses by providing cutting-edge digital
              solutions that inspire progress and innovation. Our mission is to
              deliver impactful results through tailored strategies and
              unwavering dedication.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 space-y-4">
            <div className="flex justify-end">
              <Eye className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-4xl font-bold">
              Our <span className="text-blue-600">Vision</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to redefine the digital landscape by creating
              innovative, sustainable, and user-focused solutions. We aspire to
              be the trusted partner for businesses, fostering growth and
              shaping a future driven by technology.
            </p>
          </div>
        </div>
      </AnimateInView>
    </div>
  );
}
