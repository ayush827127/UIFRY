import React from "react";
import { PiStarFour } from "react-icons/pi";
import { PiCubeTransparent } from "react-icons/pi";
import { TbWheel } from "react-icons/tb";

const Features = () => {
  return (
    <div className="bg-white mx-auto mt-4 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex-col justify-between items-center mx-auto">
          <div className="flex flex-wrap -mx-2">
            {/* First card */}
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="relative">
                <img
                  src="Features.png"
                  alt="Features.png"
                  className="relative z-20"
                />
                <img
                  src="/RedStamp01.svg"
                  alt="RedStamp01"
                  className="absolute top-0 left-0 w-[90%] z-10 md:w-auto"
                  style={{ transform: "translate(-4rem, -9rem)" }}
                />
              </div>
            </div>
            {/* second card */}
            <div className="w-full md:w-1/2 px-2 mb-2">
              <p className="text-[#f55555] font-semibold"> FEATURES</p>
              <h1 className="text-5xl font-bold mb-5">Uifry Premium</h1>
              <div className="px-6 py-3 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <PiStarFour className="text-[#f55555] mr-2" />
                  Budgeting Intervals
                </h2>
                <p className="text-gray-500 font-semibold">
                  Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                  Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                  Porttitor.
                </p>
              </div>
               <div className="px-6 py-3 rounded-lg">
                <h2 className="text-2xl font-bold mb-2 flex items-center">
                  <TbWheel className="text-[#f55555] mr-2" />
                  Budgeting Intervals
                </h2>
                <p className="text-gray-500 font-semibold">
                  Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                  Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                  Porttitor.
                </p>
              </div>
              <div className="px-6 py-3 rounded-lg">
                <h2 className="text-2xl font-bold mb-2 flex items-center">
                  <PiCubeTransparent  className="text-[#f55555] mr-2" />
                  Budgeting Intervals
                </h2>
                <p className="text-gray-500 font-semibold">
                  Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                  Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                  Porttitor.
                </p>
              </div>
              <img
                  src="/RedStamp02.svg"
                  alt="RedStamp01"
                  className="absolute top-0 left-0 w-[20%] z-10 md:hidden"
                  style={{ transform: "translate(60rem, -2rem)" }}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
