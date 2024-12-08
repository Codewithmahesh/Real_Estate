import React from "react";
import { team } from "@/app/lib/navData";
import { FaCheckCircle, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Importing relevant icons
import { IoLocationOutline } from "react-icons/io5";

const Team = () => {
  return (
    <div>
      <section className="team bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="heading text-center mb-10">
            <h1 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold">
              Our Featured Agents
            </h1>
            <p className="text-slate-600 opacity-90 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Discover beautiful locations and choose from a range of properties
              including Villas, Offices, and Apartments. Find your perfect place
              in the most sought-after areas.
            </p>
          </div>
          <div className="content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((val, index) => (
              <div
                className="bg-white border border-slate-300 hover:border-slate-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                key={index}
              >
                <button className="btn3 bg-orange-400 text-white py-2 px-6 rounded-full mb-4">
                  {val.list} Listings
                </button>
                <div className="details text-center mt-6">
                  <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24">
                    <img
                      src={val.cover}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                    <FaCheckCircle className="text-blue-500 absolute top-1/2 right-0 transform translate-x-2" />
                  </div>
                  <div className="mt-4">
                    <IoLocationOutline className="text-gray-400 inline-block mr-2" />
                    <label className="text-gray-600 text-sm">{val.address}</label>
                  </div>
                  <h4 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">
                    {val.name}
                  </h4>

                  <ul className="flex justify-center mt-4 space-x-3">
                    {val.icon.map((icon, index) => (
                      <li
                        key={index}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 flex items-center justify-center rounded-full"
                      >
                        {icon}
                      </li>
                    ))}
                  </ul>
                  <div className="button flex justify-center mt-6 space-x-4 sm:space-x-8">
                    <button className="bg-green-500 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-md flex items-center">
                      <FaEnvelope className="mr-2" /> Message
                    </button>
                    <button className="btn4 bg-gray-200 text-gray-800 py-2 px-4 sm:py-3 sm:px-6 rounded-md flex items-center">
                      <FaPhoneAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
