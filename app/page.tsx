import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-landing-gradient -mt-16 grid place-items-center text-white">
      <div className="container flex gap-4 mt-16">
        <div>
          <h1 className="font-bold text-3xl">
            Transform Your Business with Innovative IT Solutions.
          </h1>
          <p>
            We deliver cutting-edge software development, cloud solutions, and
            IT consulting to drive your business forward. We deliver
            cutting-edge software development, cloud solutions, and IT
            consulting to drive your business forward
          </p>
        </div>
        <div className="">{/* <Image /> */}</div>
      </div>
    </div>
  );
}
