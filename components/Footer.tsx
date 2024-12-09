import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/aavatech_logo.png";
import { FaTiktok } from "react-icons/fa6";

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
            At Aava Technology, we deliver tailored IT solutions that optimize
            operations, enhance customer experiences, and drive digital
            transformation, helping your business stay ahead of trends and
            thrive in a rapidly evolving tech landscape.
          </p>
          <p className="info__mail">info@aavatechnepal.com</p>
        </div>
        <div className="footer__about">
          <p className="footer__title">About</p>
          <div className="about__links">
            <Link href="/about">Our Company</Link>
            <Link href="/industries">Our Industries</Link>
            <Link href="/careers">Careers</Link>
            <Link href="https://blog.investiaa.com/">Blogs</Link>
          </div>
        </div>
        <div className="footer__contact">
          <p className="footer__title">Contact Us</p>
          <p>
            Have questions or ready to start your next project? Our team is here
            to help.
          </p>
          <p>+977 9761745192</p>
        </div>
        <div className="footer__socials">
          <p className="footer__title">Our Socials</p>
          <div className="social__links">
            <Link
              href="https://www.facebook.com/aavatech"
              className="social-icon"
              target="__blank"
            >
              <Facebook className="stroke-0 fill-blue-600" />
            </Link>
            <Link
              href="https://www.instagram.com/aavatechnology/"
              className="social-icon"
              target="__blank"
            >
              <Instagram className="stroke-orange-600" />
            </Link>
            <Link
              href="https://www.instagram.com/aavatechnology/"
              className="social-icon"
              target="__blank"
            >
              <Twitter className="stroke-0 fill-blue-600" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/101443854/aavatechnology"
              className="social-icon"
              target="__blank"
            >
              <Linkedin className="stroke-0 fill-blue-600" />
            </Link>
            <Link
              href="https://www.tiktok.com/@investiaa?_t=8s42RtxVy24&_r=1"
              className="social-icon"
              target="__blank"
            >
              <FaTiktok className="fill-black" />
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
