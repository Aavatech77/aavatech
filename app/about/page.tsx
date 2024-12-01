import React from "react";
import Hero from "./components/Hero";
import Objective from "./components/Objective";
import Team from "./components/Team";
import Partners from "./components/Partners";
import Workwithus from "./components/Workwithus";

function page() {
  return (
    <>
      <Hero />
      <Objective />
      {/* <About /> */}
      <Team />
      <Partners />
      <Workwithus />
    </>
  );
}

export default page;
