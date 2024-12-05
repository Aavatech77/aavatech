import React from "react";
import Image from "next/image";

interface ITestimonial {
  username: string;
  img: string;
  position: string;
  testimonial: string;
}

const testimonials: ITestimonial[] = [
  {
    username: "Yog Raj Upadhaya",
    img: "/assets/landing-page/person.png",
    position: "Campus Chief",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id.",
  },
  {
    username: "Yog Raj Upadhaya",
    img: "/assets/landing-page/person.png",
    position: "Campus Chief",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id.",
  },
  {
    username: "Yog Raj Upadhaya",
    img: "/assets/landing-page/person.png",
    position: "Campus Chief",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id.",
  },
];

const Testimonials = () => {
  return (
    <section className="flex gap-4 my-6 md:my-12 container py-8 lg:py-10 overflow-x-auto scroll-smooth snap-x snap-mandatory">
      {testimonials.map((item, index) => (
        <div
          className="rounded-3xl p-2 relative bg-[#4874AE1A]/10 shadow-xl max-w-sm flex-shrink-0 snap-center"
          key={index}
        >
          <Image
            src={item.img}
            alt={item.username}
            width={100}
            height={100}
            className="rounded-full border-2 border-primary size-20 lg:size-24 mx-auto object-cover -translate-y-1/2 relative"
          />
          <div className="text-center -translate-y-4 space-y-2">
            <p className="">{item.testimonial}</p>
            <p className="font-semibold">{item.username}</p>
            <p className="text-sm">{item.position}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
