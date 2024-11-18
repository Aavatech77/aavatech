import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-main-gradient text-white space-y-4">
      <div className="container grid grid-cols-2 md:grid-cols-4 items-baseline place-items-center gap-4 py-6">
        <div className="space-y-3">
          <div className="relative size-20">
            <Image
              src="/aavatech_logo.png"
              fill
              sizes="80px"
              alt="Aava Technology"
              className="object-contain"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, doloribus?
          </p>
          <p>info@aavatechnepal.com</p>
        </div>
        <div className="space-y-3">
          <p className="font-medium">About Us</p>
          <div className="flex flex-col gap-2">
            <Link href="/">Company</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/careers">Careers</Link>
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-medium">Contact Us</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            deleniti officia vel in cupiditate consequuntur.
          </p>
          <p>+977 9876543210</p>
        </div>
        <div className="space-y-3">
          <p className="font-medium">Our Socials</p>
          <div className="flex gap-2">
            <Link
              href="https://www.facebook.com/aavatech"
              className="social-icon"
            >
              <Facebook className="stroke-0 fill-blue-600" />
            </Link>
            <Link
              href="https://www.instagram.com/aavatechnology/"
              className="social-icon"
            >
              <Instagram className="stroke-orange-600" />
            </Link>
            <Link
              href="https://www.instagram.com/aavatechnology/"
              className="social-icon"
            >
              <Twitter className="stroke-0 fill-blue-600" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/101443854/aavatechnology"
              className="social-icon"
            >
              <Linkedin className="stroke-0 fill-blue-600" />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center text-xs">
        Copyright &copy;Aava Technology, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
