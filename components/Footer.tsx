import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/aavatech_logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-slate-900 via-slate-900 to-slate-800 py-6">
      <div className="footer__grid">
        <div className="footer__info">
          <div className="info__img">
            <Image
              src={Logo}
              alt="Aava Technology"
              className="object-contain"
            />
          </div>
          <p className="info__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, doloribus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum, laborum!
          </p>
          <p className="info__mail">info@aavatechnepal.com</p>
        </div>
        <div className="footer__about">
          <p className="footer__title">About</p>
          <div className="about__links">
            <Link href="/about">Our Company</Link>
            <Link href="/industries">Our Industries</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/blogs">Blogs</Link>
          </div>
        </div>
        <div className="footer__contact">
          <p className="footer__title">Contact Us</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            deleniti officia vel in cupiditate consequuntur. lorem10
          </p>
          <p>+977 9876543210</p>
        </div>
        <div className="footer__socials">
          <p className="footer__title">Our Socials</p>
          <div className="social__links">
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
      <hr className="border-none h-[1px] bg-gradient-to-r from-blue-950 to-slate-700" />
      <p className="text-center text-xs pt-2">
        Copyright &copy;Aava Technology, All Rights Reserved
      </p>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
