import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white  ml-10 pl-10 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              <img className="h-8 w-24" src="Logo.png" alt="Logo" />
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 z-20">
              <a href="#" className="text-[#FF5555] inline-flex items-center px-1 pt-1 text-sm font-medium">Home</a>
              <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">About</a>
              <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Services</a>
              <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-black p-8 py-3 text-white font-medium mr-36 rounded-sm">Download</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;