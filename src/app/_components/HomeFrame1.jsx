import React from "react";
import { MdPlayCircleOutline } from "react-icons/md";

const HomeFrame1 = () => {
  return (
    <div className="mt-8 p-4 md:p-10 md:pl-8 md:pr-0 max-w-full md:max-w-[52%]">
      <h1 className="relative font-bold text-4xl md:text-6xl pl-4 md:pl-10 z-50">
        Make The Best Financial Decisions
      </h1>
      <img
        src="/RedStamp02.svg"
        alt="RedStamp01"
        className="absolute top-0 left-1/2 md:left-48 w-24 md:w-[35%] transform -translate-x-1/2 md:translate-x-0 z-15"
      />

      <p className="relative text-gray-600 pl-4 md:pl-10 mt-4 md:mt-6 z-50">
        Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
      </p>
      <div className="pl-4 md:pl-10 mt-4 md:mt-6 flex flex-col md:flex-row">
        <button className="btn bg-black p-4 md:p-10 py-2 md:py-4 text-white">
          Get Started -&gt;
        </button>
        <button className="text-black font-semibold flex justify-center items-center mt-4 md:mt-0 md:ml-10">
          <div>
            <MdPlayCircleOutline className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <div className="ml-2 md:ml-3">Watch Video</div>
        </button>
      </div>
      <div className="relative mt-6 md:mt-0">
        <img
          src="/Star03.png"
          alt="Star"
          className="absolute top-[30rem] md:top-[480px] left-1/4 md:left-56 w-8 md:w-auto"
        />
        <img
          src="./FoldedLine.png"
          alt="FoldedLine"
          className="h-[14rem] md:h-[22rem] ml-4 md:ml-10"
        />
      </div>
      <img
        src="/Star03.png"
        alt="Star"
        className="absolute top-20 left-10 w-8 md:w-auto"
      />
      <img
        src="/Star01.png"
        alt="Star"
        className="absolute top-10 right-10 w-6 md:w-12"
      />
    </div>
  );
};

export default HomeFrame1;
