import React from "react";

export const HeroGradient = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-main-gradient -mt-16 min-h-screen grid place-items-center py-20 text-white">
      <div className="container flex flex-col-reverse justify-center md:flex-row md:justify-start items-center">
        {children}
      </div>
    </div>
  );
};
