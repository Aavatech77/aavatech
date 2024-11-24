import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { CardHorizontal, CardVertical } from "./Cards";
import AnimateInView from "../animate/AnimateInView";

const BlogsSection = () => {
  return (
    <section className="my-8 md:my-12 py-8 md:py-12">
      <div className="container">
        <h1 className="text-2xl font-semibold text-center">
          Our <span className="text-highlight">Blogs</span>
          <br />
          Empowering Businesses with Innovative{" "}
          <span className="text-highlight">IT Solutions Worldwide</span>
        </h1>
        <p className="text-center text-sm">
          At our IT company, we empower businesses with innovative, scalable
          solutions that drive success and efficiency.
        </p>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 my-8">
          <div className="space-y-8">
            <AnimateInView type="slide-in" direction="bottom-right">
              <CardHorizontal
                title="Lorem Ipsum"
                description="Stay upto date with the latestStartup Insights with.Stay upto date with the latestStartup Insights with"
                href="#"
                img="/assets/landing-page/library-architecture.png"
              />
            </AnimateInView>
            <AnimateInView type="fade-in">
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
            </AnimateInView>
          </div>
          <div className="space-y-8">
            <AnimateInView type="fade-in" direction="left">
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
            </AnimateInView>
            <AnimateInView type="slide-in" direction="top-right">
              <CardHorizontal
                title="Lorem Ipsum"
                description="Stay upto date with the latestStartup Insights with.Stay upto date with the latestStartup Insights with"
                href="#"
                img="/assets/landing-page/library-architecture.png"
              />
            </AnimateInView>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="rounded-full" size="lg" asChild>
            <Link href="/blogs" className="mx-auto">
              Explore More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
