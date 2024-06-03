import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white  ml-10 pl-10 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex-col justify-between  items-center mx-auto">
          <div id="mainFooter" className="flex">
            <div id="LinkSection1">
              <div id="companyDetails" className="flex flex-col items-start">
                <div className="shrink-0 flex items-center m-2">
                  <img className="h-8 w-24" src="Logo.png" alt="Logo" />
                </div>
                <div className="flex justify-center items-center m-2">
                  <MdEmail className=" text-[#f55555]" /> Help@Frybix.Com
                </div>
                <div className="flex justify-center items-center m-2">
                  {" "}
                  <FaPhone className=" text-[#f55555]" /> +1 234 456 678 89
                </div>
              </div>
            </div>
            <div id="LinkSection2" className="mx-auto">
              <div className="flex flex-col  items-start text-black ">
                <h3 className="font-semibold m-2 text-2xl">Links</h3>
                <div className="flex flex-col">
                  <a href="#" className="m-2">
                    {" "}
                    Home
                  </a>
                  <a href="#" className="m-2">
                    {" "}
                    About Us
                  </a>
                  <a href="#" className="m-2">
                    {" "}
                    Bookings
                  </a>
                  <a href="#" className="m-2">
                    {" "}
                    Blog
                  </a>
                </div>
              </div>
            </div>
            <div id="LinkSection3" className="mx-auto">
              <div className="flex flex-col  items-start text-black ">
                <h3 className="font-semibold m-2 text-2xl">Legal</h3>
                <div className="flex flex-col">
                  <a href="#" className="m-2">
                  Terms Of Use
                  </a>
                  <a href="#" className="m-2">
                  Privacy Policy
                  </a>
                  <a href="#" className="m-2">
                  Cookie Policy
                  </a>
                </div>
              </div>
            </div>
            <div id="LinkSection4" className="mx-auto">
              <div className="flex flex-col  items-start text-black ">
                <h3 className="font-semibold m-2 text-2xl">Product</h3>
                <div className="flex flex-col">
                  <a href="#" className="m-2">
                  Take Tour
                  </a>
                  <a href="#" className="m-2">
                  Live Chat
                  </a>
                  <a href="#" className="m-2">
                  Reveiws
                  </a>
                </div>
              </div>
            </div>
            <div id="LinkSection5" className="mx-auto">
              <div className="flex flex-col  items-start text-black ">
                <h3 className="font-semibold m-2 text-2xl">Newsletter</h3>
                <div className="flex flex-col">
                  <a href="#" className="m-2">
                  Stay Up To Date
                  </a>
                 <div className="m-2">
                  <input placeholder="Your email" type="email" name="email" id="email" />
                  <button className="btn bg-black px-10 py-4 text-white">Subscribe</button>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-[50%] h-1 mx-auto mt-10 bg-gradient-to-r from-gray-400/10 via-gray-400 to-gray-400/10 border-0" />

          <div id="copyrightSection" className="text-black-500">
            <p className="mx-auto text-center my-10">
            Copyright 2022 Uifry.Com All Rights Reserved
            </p>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
