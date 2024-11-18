import React from "react";

export const HeroGradient = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-main-gradient -mt-16 min-h-screen grid place-items-center py-20 text-white">
      <div className="container grid place-items-center md:grid-cols-2 md:min-h-[600px]">
        {children}
      </div>
    </div>
  );
};
