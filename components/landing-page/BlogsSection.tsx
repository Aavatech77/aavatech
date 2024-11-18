import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { CardHorizontal, CardVertical } from "./Cards";

const BlogsSection = () => {
  return (
    <section className="my-8 md:my-12 py-8 md:py-12 bg-[#4874AE1A]/10">
      <div className="container">
        <h1 className="text-2xl font-semibold text-center">
          Our <span className="text-highlight">Blogs</span>
          <br />
          Empowering Businesses with Innovative{" "}
          <span className="text-highlight">IT Solutions Worldwide</span>
        </h1>
        <p className="text-center text-sm">
          At our IT company, we empower businesses with innovative, scalable
          solutions that drive success and efficiency."
        </p>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 my-8">
          <div className="space-y-8">
            <CardHorizontal
              title="Lorem Ipsum"
              description="Stay upto date with the latestStartup Insights with.Stay upto date with the latestStartup Insights with"
              href="#"
              img="/assets/landing-page/library-architecture.png"
            />
            <div className="grid grid-cols-2 gap-4 lg:gap-8">
              <CardVertical
                title="Lorem Ipsum"
                description="Stay upto date with the latestStartup Insights with.Stay upto date with the latestStartup Insights with"
                href="#"
                img="/assets/landing-page/library-architecture.png"
              />{" "}
              <CardVertical
                title="Lorem Ipsum"
                description="Stay upto date with the latestStartup Insights with.Stay upto date with the latestStartup Insights with"
                href="#"
                img="/assets/landing-page/library-architecture.png"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4 lg:gap-8">
              <CardVertical
                title="Lorem Ipsum"
                description="Stay upto date with the latestStartup Insights with.Stay upto date with the latestStartup Insights with"
                href="#"
                img="/assets/landing-page/library-architecture.png"
              />{" "}
              <CardVertical
                title="Lorem Ipsum"
                description="Stay upto date with the latestStartup Insights with.Stay upto date with the latestStartup Insights with"
                href="#"
                img="/assets/landing-page/library-architecture.png"
              />
            </div>
            <CardHorizontal
              title="Lorem Ipsum"
              description="Stay upto date with the latestStartup Insights with.Stay upto date with the latestStartup Insights with"
              href="#"
              img="/assets/landing-page/library-architecture.png"
            />
          </div>
        </div>
        <Link href="/blogs" className="flex justify-center">
          <Button className="rounded-full" size="lg">
            Explore More
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BlogsSection;
