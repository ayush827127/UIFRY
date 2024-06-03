import React from "react";
import { FaRegBell } from "react-icons/fa";
import { PiStarFourBold } from "react-icons/pi";

const Advantages = () => {
  return (
    <div className="bg-white mx-4 sm:mx-10 md:mx-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col justify-between items-center mx-auto">
          <div className="flex flex-wrap -mx-2">
            {/* First card */}
            <div className="w-full md:w-1/2 mb-2 px-4 sm:px-8 mt-10 md:mt-20">
              <p className="text-[#f55555] font-semibold"> ADVANTAGES</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">Why Choose Uifry?</h1>
              <div className="flex font-bold text-xl md:text-2xl items-center mt-8">
                <FaRegBell className="bg-[#f55555] text-white mr-3 md:mr-5 my-3 rounded-full p-2 h-9 w-9" />
                Clever Notifications
              </div>
              <div className="py-6 rounded-lg">
                <p className="text-gray-500 font-semibold">
                  Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                  Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
                  Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
                  Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget
                  Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
                </p>
              </div>
            </div>

            {/* Second card */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <div className="relative">
                <img
                  src="Advantage01.png"
                  alt="Advantage01"
                  className="relative z-20 w-full"
                />
                <img
                  src="/RedStamp01.svg"
                  alt="RedStamp01"
                  className="absolute top-0 left-0 w-[70%] sm:w-[80%] md:w-[90%] z-10"
                  style={{ transform: "translate(-2rem, -3rem)" }} // Adjust as needed for precise positioning
                />
              </div>
            </div>

            {/* Third card */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <div className="relative">
                <img
                  src="Features.png"
                  alt="Features"
                  className="relative z-20 w-full"
                />
                <img
                  src="/RedStamp01.svg"
                  alt="RedStamp01"
                  className="absolute top-0 left-0 w-[70%] sm:w-[80%] md:w-[90%] z-10"
                  style={{ transform: "translate(0.5rem, -2.5rem)" }} // Adjust as needed for precise positioning
                />
              </div>
            </div>

            {/* Fourth card */}
            <div className="w-full md:w-1/2 mb-2 px-4 sm:px-8 mt-10 md:mt-20">
              <div className="flex font-bold text-xl md:text-2xl items-center mt-8">
                <PiStarFourBold className="bg-[#f55555] text-white mr-3 md:mr-5 my-3 rounded-full p-2 h-9 w-9" />
                Fully Customizable
              </div>
              <div className="py-6 rounded-lg">
                <p className="text-gray-500 font-semibold">
                  Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                  Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
                  Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
                  Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget
                  Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
