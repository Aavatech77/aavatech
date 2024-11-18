import React from "react";

const HeroLanding = ({ className }: { className: string }) => {
  return (
    <>
      <svg
        width="621"
        height="499"
        viewBox="0 0 621 499"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
      >
        <rect width="621" height="499" fill="url(#pattern0_622_2203)" />
        <defs>
          <pattern
            id="pattern0_622_2203"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_622_2203"
              transform="matrix(0.000274574 0 0 0.000341705 0 -0.122244)"
            />
          </pattern>
          <image
            id="image0_622_2203"
            width="3642"
            height="3642"
          />
        </defs>
      </svg>
    </>
  );
};

export default HeroLanding;