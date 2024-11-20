import React from "react";
import People from "@/public/assets/about-page/people.jpg";
import LayoutWithImageOnLeft from "@/components/LayoutWithImageOnLeft";
function About() {
  return (
    <div className=" bg-[#4874AE]/10 py-6 md:py-12">
      <div className="container">
        <LayoutWithImageOnLeft
          title="Lorem"
          titleHighlight="Ipsum"
          subtitle=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type"
          img={People}
        />
      </div>
    </div>
  );
}

export default About;

{
  /* <div className="container flex flex-col-reverse gap-8 md:flex-row">
  <AnimateInView type="fade-in">
    <Image src={People} alt="People about us" />
  </AnimateInView>
  <AnimateInView type="slide-in" className="relative">
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-semibold">
        Lorem <span className="text-highlight">ipsum</span>
      </h2>
      <h1 className="text-2xl font-medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </p>
    </div>
  </AnimateInView>
</div>; */
}
