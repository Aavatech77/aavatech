import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section className="my-6 md:my-12 py-6 md:py-12 bg-[#4874AE1A]/10">
      <div className="container">
        <h1 className="font-semibold text-2xl">
          Testi<span className="text-highlight">monial</span>
        </h1>
        <h2 className="font-semibold text-xl mb-4">
          What People Say <span className="text-highlight">About Us</span>
        </h2>
      </div>
      <div className="md:max-w-[calc(100vw_-_4rem)] mx-auto grid gap-4 md:grid-cols-2 grid-flow-row lg:grid-cols-[minmax(200px,1fr)_minmax(400px,_1.5fr)_minmax(200px,1fr)]">
        {testimonials.map((testimonial, index) => (
          <div
            className="min-h-[300px]"
            key={`${testimonial.username}${index}`}
          >
            <div className="relative">
              <Vector1 />
              <Vector2 />
              <div className="absolute top-0 left-0 px-12 translate-y-[20%] w-full flex flex-col items-center space-y-2">
                <div
                  className={cn(
                    "rounded-full relative overflow-hidden",
                    index === 1 ? "size-24" : "size-20"
                  )}
                >
                  <Image
                    src="/assets/landing-page/person.png"
                    width={1080}
                    height={1080}
                    alt="customer"
                    className="object-cover size-full"
                  />
                </div>
                <p className="font-medium">John Doe</p>
                <p className="text-xs">Campus Chief</p>
                <p className="text-primary">
                  <Quote
                    size={14}
                    className="rotate-180 stroke-none fill-primary"
                  />
                </p>
                <p
                  className={cn(
                    "line-clamp-4 md:line-clamp-4 lg:line-clamp-3 xl:line-clamp-4 w-[90%] sm:w-[60%] md:w-full text-sm xl:px-4",
                    index === 1 && "md:w-[90%] xl:w-[70%]"
                  )}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum ullam quasi ducimus sequi, reiciendis nam similique ex
                  voluptatem neque quisquam. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Totam non voluptatum
                  accusantium deleniti dolorum inventore suscipit aut distinctio
                  mollitia officiis, velit nisi neque aperiam animi voluptas
                  amet hic eaque. Quis!
                </p>
                <Link
                  href="/testimonials"
                  className="flex gap-2 text-primary text-sm"
                >
                  Read More <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

const Vector1 = () => {
  return (
    <svg
      width="538"
      height="542"
      viewBox="0 0 538 542"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      <g filter="url(#filter0_d_423_11901)">
        <path
          d="M40.6474 98.1119C29.2848 204.878 23.6857 263.108 20.9623 351.617C24.8701 385.999 32.3043 400.856 61.8613 413.644C180.788 456.646 263.764 489.75 361.107 520.845C402.128 524.453 418.081 517.078 434.162 498.45C467.231 430.181 483.26 353.244 514.482 256.568C522.467 218.844 515.892 202.459 482.65 182.388C358.845 122.006 178.267 38.2542 178.267 38.2542C178.267 38.2542 144.155 19.6051 122.089 21.0514C95.9438 24.9514 83.8864 31.1003 68.0776 44.5005C49.7796 60.3501 43.8207 72.1043 40.6474 98.1119Z"
          fill="#4874AE"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_423_11901"
          x="0.962891"
          y="0.971436"
          width="536.588"
          height="540.762"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_423_11901"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_423_11901"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const Vector2 = () => {
  return (
    <svg
      width="496"
      height="471"
      viewBox="0 0 496 471"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-8 drop-shadow-lg w-[calc(100%_-_2rem)]"
    >
      <path
        d="M0.608145 86.0055C5.58909 193.019 8.89948 251.319 19.6773 339.314C28.7945 372.963 38.4388 386.885 69.7339 396.383C194.366 426.223 281.795 450.114 383.183 470.473C424.463 469.643 439.18 460.623 452.309 440.437C474.744 369.239 478.939 291.283 495.214 192.135C497.396 153.898 488.372 138.368 452.309 122.049C320.186 75.5122 128.133 11.9153 128.133 11.9153C128.133 11.9153 91.4226 -2.90062 69.7339 0.901948C44.3679 7.57403 33.3327 14.9617 19.6773 29.9373C3.92355 47.6074 -0.202577 59.8942 0.608145 86.0055Z"
        fill="white"
      />
    </svg>
  );
};
