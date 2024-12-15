import React from "react";
import Image from "next/image";

interface ITestimonial {
  user: string;
  img: string;
  position: string;
  testimonial: string;
}

const testimonials: ITestimonial[] = [
  {
    user: "Dr. Shreedhar Khanal",
    img: "/assets/landing-page/astitwa-president.webp",
    position: "Astitwa Foundation, President",
    testimonial:
      "Aava Technology has been more than just a service provider for Astitwa Foundation—they’ve been like a member of our team. They took the time to understand who we are and what we stand for, and their solutions reflect that. The care and effort they put into their work make us feel supported every step of the way. With Aava, it’s not just about technology; it’s about people and purpose",
  },
  {
    user: "Biplab Karki",
    img: "/assets/landing-page/hyperce-ceo.jpg",
    position: "Hyperce, CEO",
    testimonial:
      "I was impressed by Aavatech's commitment to fostering innovation and entrepreneurship. The platform support for startups, transparent bidding, and comprehensive analytics have been invaluable in navigating the complex world of investments.",
  },
  {
    user: "Ashim Shrestha",
    img: "/assets/landing-page/ashim-shrestha.jpeg",
    position: "Incubation Specialist",
    testimonial:
      "Investiaa user-friendly platform made it easy for anyone to register their incubator and manage portfolio of startups effectively. The streamlined process has saved us valuable time and resources, allowing us to focus more on supporting budding entrepreneurs.",
  },
];

const Testimonials = () => {
  return (
    <div className="grid place-content-center bg-[#4874AE1A]/10 px-2 py-6 md:px-6">
      <h2 className="text-2xl font-semibold text-center">Testimonials</h2>
      <p className="text-center text-sm">
        What our customers have to say about us.
      </p>
      <section className="grid grid-cols-[repeat(3,minmax(340px,1fr))] gap-4 my-6 md:my-12 py-8 lg:py-10 overflow-x-auto scroll-smooth snap-x snap-mandatory">
        {testimonials.map((item, index) => (
          <div
            className="grid grid-rows-subgrid row-span-3 gap-0 rounded-3xl px-4 py-2 relative shadow-xl snap-center bg-white"
            key={index}
          >
            <Image
              src={item.img}
              alt={item.user}
              width={100}
              height={100}
              className="rounded-full border-2 border-primary size-20 lg:size-24 mx-auto object-cover -translate-y-1/2"
            />
            <p className="-mt-6">{item.testimonial}</p>
            <div className="text-center space-y-1 mt-2">
              <p className="font-semibold">{item.user}</p>
              <p className="text-sm">{item.position}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Testimonials;
