import React from "react";
import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  return (
    <section
      className="hero bg-cover bg-center h-[90vh] w-full relative"
      style={{ backgroundImage: 'url("/banner.png")' }}
    >
      <div className="container mx-auto text-center pt-[15%] px-4">
        {/* Hero heading */}
        <div>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold">
            Search Your Next Home
          </h1>
          <p className="text-white opacity-80 mt-4 text-base md:text-lg">
            Find new & featured property located in your local city.
          </p>
        </div>

        {/* Form */}
        <form className="bg-white rounded-md mt-8 p-6 flex flex-col md:flex-row items-center justify-start shadow-lg max-w-5xl mx-auto space-y-4 md:space-y-0 md:space-x-4">
          {/* City/Street Input */}
          <div className="box w-full md:w-auto flex-grow md:justify-start md:border-r-2 border-gray-200 pr-0 md:pr-5">
            <label className="text-gray-500 text-sm block mb-2 text-left ml-1">
              City/Street
            </label>
            <input
              type="text"
              placeholder="Location"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Property Type Input */}
          <div className="box w-full md:w-auto flex-grow md:justify-start md:border-r-2 border-gray-200 pr-0 md:pr-5">
            <label className="text-gray-500 text-sm block mb-2 text-left ml-1">
              Property Type
            </label>
            <input
              type="text"
              placeholder="Property Type"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Price Range Input */}
          <div className="box w-full md:w-auto flex-grow md:justify-start md:border-r-2 border-gray-200 pr-0 md:pr-5">
            <label className="text-gray-500 text-sm block mb-2 text-left ml-1">
              Price Range
            </label>
            <input
              type="text"
              placeholder="Price Range"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Advance Filter and Search Button */}
          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center md:gap-4 mt-4 md:mt-0">
            {/* Advance Filter Text */}
            <div className="text-gray-700 font-medium whitespace-nowrap mr-4">
              Advance Filter
            </div>

            {/* Search Button */}
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 flex items-center gap-2">
              <IoIosSearch size={20} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
