import React from "react";
import AnimateInView from "./animate/AnimateInView";

type Props = {
  title: string;
  highlightText: string;
  content: string;
};

const LayoutWithBorderLeft = ({ title, highlightText, content }: Props) => {
  return (
    <div className="container border-l-4 border-l-primary grid md:grid-cols-2 my-8 md:my-12 items-center min-h-[200px]">
      <AnimateInView type="fade-in">
        <h1 className="font-semibold text-2xl">
          {title} <br /> <span className="text-highlight">{highlightText}</span>
        </h1>
      </AnimateInView>
      <p>{content}</p>
    </div>
  );
};

export default LayoutWithBorderLeft;
