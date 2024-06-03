import React from "react";

const Testimonal = () => {
  const images = [
    "userPic01.png", // replace with your image paths
    "userPic02.png",
    "userPic03.png",
    "userPic04.png",
    "userPic05.png",
  ];

  return (
    <div className="bg-white mx-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex-col justify-between items-center mx-auto">
          <div className="mx-auto text-center">
            <p className="text-black font-semibold"> TESTIMONIAL</p>
            <h1 className="text-5xl font-bold mb-5">
              What Our Users Say About Us?
            </h1>
          </div>

          <div className=" flex flex-wrap -mx-2">
            {/* First card */}
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="relative">
                <img
                  src="Testimonal.png"
                  alt="Testimonal.png"
                  className="relative z-20"
                />
                <img
                  src="/RedStamp02.svg"
                  alt="RedStamp01"
                  className="absolute top-0 left-0 w-[90%] z-10"
                  style={{ transform: "translate(1rem, 4rem)" }} // Adjust as needed for precise positioning
                />
              </div>
            </div>

            {/* second card */}
            <div className="w-full md:w-1/2  mb-2 px-8 mt-20">
              <div className="flex font-bold text-2xl items-center mt-8">
                The Best Financial Accounting App Ever!
              </div>
              <div className=" py-6 rounded-lg mt-5">
                <p className="text-gray-400 font-semibold">
                  “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                  Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
                  Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
                  Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget
                  Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.”
                </p>
              </div>
              <div className="flex space-x-4 mt-8">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`rounded-full w-12 h-12 ${
                      index === 0
                        ? "opacity-100"
                        : index === 1
                        ? "opacity-80"
                        : index === 2
                        ? "opacity-60"
                        : index === 3
                        ? "opacity-40"
                        : "opacity-20"
                    }`}
                  />
                ))}
              </div>
              <div className="text-black font-semibold mt-4">
                <p>Nick Jonas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
