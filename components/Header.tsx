"use client";
import React, { useState } from "react";
import "@/app/globals.css";
import NavBar from "./NavBar";
import Wrapper from "./Wrapper";
import { IoChevronDown } from "react-icons/io5";
import { citiesData } from "@/app/lib/cityData"; // Import the city data
import Link from "next/link";
import "@/app/style/header.css";

const Header: React.FC = () => {
  // State to track the currently hovered city
  const [hoveredCity, setHoveredCity] = useState<string>("");

  return (
    <header className="bg-white border-b border-gray-200">
      <NavBar />
      <div className="cities flex mt-3 border border-gray-400 p-1">
        <Wrapper>
          <ul className="flex justify-evenly gap-x-8 items-center w-full">
            {/* Iterate through each city in citiesData */}
            {Object.keys(citiesData).map((city) => (
              <div
                key={city}
                className="relative flex justify-center items-center gap-2 cursor-pointer group"
                onMouseEnter={() => setHoveredCity(city)} // Set hovered city on mouse enter
                onMouseLeave={() => setHoveredCity("")} // Clear hovered city on mouse leave
              >
                {/* Display the city name */}
                <li className="text-sm font-normal tracking-wider text-black hover:text-red-600">
                  {city}
                </li>
                {/* Chevron down icon for dropdown effect */}
                <IoChevronDown className="text-xl mt-[5px] transition-transform duration-500 group-hover:rotate-180" />
                {/* Dropdown menu for displaying neighborhoods */}
                {hoveredCity === city && (
                  <div className="absolute mt-4 bg-white border border-gray-300 p-2 rounded-md shadow-lg top-full left-0 w-max">
                    <ul className="list-disc pl-4 text-sm text-black">
                      {/* Iterate through each neighborhood of the hovered city */}
                      {citiesData[city].map((subCity, index) => (
                        <li
                          className="py-1 px-2 rounded-md hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                          key={index}
                        >
                          {subCity} {/* Display neighborhood name */}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            {/* Display "All Cities" link */}
            <div className="flex justify-center items-center gap-2 cursor-pointer">
              <Link href="/Cities">
                <li className="text-sm font-normal text-black hover:text-red-500">
                  All Cities
                </li>
              </Link>
            </div>
          </ul>
        </Wrapper>
      </div>
    </header>
  );
};

export default Header;
