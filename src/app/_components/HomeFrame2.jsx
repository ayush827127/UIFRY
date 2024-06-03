import React from "react";

const CardDisplay = () => {
  return (
    <div className=" bg-white">
      <div className="relative w-[420px] h-[420px]">
        <img
          src="/iPhone01.png"
          alt="iPhone01"
          className="absolute top-0 left-0 z-30"

        />
        <img
          src="/iPhone02.png"
          alt="iPhone02"
          className="absolute top-12 left-24 z-20"
        />
          <img
          src="/iPhone01.png"
          alt="iPhone02"
          className="absolute top-28 left-52 z-10"
        />
          <img
          src="/Ellipse.png"
          alt="iPhone02"
          className="absolute top-16 left-40 "
          width={440}
          height={440}
        />
         <img
          src="/Ellipse.png"
          alt="iPhone02"
          className="absolute top-24 left-32"
          width={440}
          height={440}
        />
         <img
          src="/Ellipse.png"
          alt="iPhone02"
          className="absolute top-32 left-24 "
          width={440}
          height={440}
        />
          <img
          src="/RedStamp01.svg"
          alt="RedStamp01"
          className="absolute top-72 left-20 Z-5"
        />
          <img
          src="/RedStamp02.svg"
          alt="RedStamp01"
          className="absolute top-72 left-72 Z-5 w-60"
        />
           <img
          src="/Star02.png"
          alt="Star"
          className="absolute top-[435px] left-36"
        />
      </div>
    </div>
  );
};

export default CardDisplay;
