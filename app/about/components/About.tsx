import React from "react";
import People from "@/public/assets/about-page/people.jpg";
import LayoutWithImageOnLeft from "@/components/LayoutWithImageOnLeft";
function About() {
  return (
    <section className=" bg-[#4874AE]/10 py-6 md:py-12">
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
    </section>
  );
}

export default About;
