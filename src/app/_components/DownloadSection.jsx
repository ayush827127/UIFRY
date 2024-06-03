import React from "react";

const DownloadSection = () => {
  return (
    <div className="bg-white mx-4 sm:mx-10 md:mx-20 mt-4 mb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col justify-between items-center mx-auto">
          <img
            src="Advertisment.png"
            alt="Advertisement"
            className="w-full"
          />
          <img
            src="/RedStamp02.svg"
            alt="RedStamp01"
            className="absolute top-0 left-0 w-[35%] sm:w-[30%] md:w-[25%] lg:w-[20%] z-10"
            style={{ transform: "translate(-10rem, -9rem)" }}
          />
          <img
            src="Star03.png"
            alt="Star01"
            className="absolute top-0 left-0 hidden md:block"
            style={{ transform: "translate(-5rem, 20rem)" }}
          />
          <img
            src="Star01.png"
            alt="Star01"
            className="absolute top-0 left-0 hidden md:block"
            style={{ transform: "translate(72rem, 8rem)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
