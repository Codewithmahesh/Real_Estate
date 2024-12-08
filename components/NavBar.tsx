"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRightLong, FaMagnifyingGlass, FaBars } from "react-icons/fa6";
import "@/app/globals.css";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Effect to handle body overflow
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const logo = "/logo.png";
  const member = "/member.png";
  const property = "/property.png";
  const about = "/about.png";
  const userLogin = "/login.png";
  const career = "/career.png";

  return (
    <nav className="relative container mx-auto flex justify-between p-4 items-center bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src={logo} height={40} width={40} alt="Logo" />
        <span className="font-bold text-2xl">NoName</span>
      </div>

      <div className="flex justify-center align-middle items-center gap-4">
        {/* Search Icon */}
        <div className="search cursor-pointer rounded-md">
          <FaMagnifyingGlass className="text-2xl text-gray-600" />
        </div>

        {/* Hamburger Icon */}
        <div className="block cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-2xl text-gray-600" />
          ) : (
            <FaBars className="text-2xl text-gray-600" />
          )}
        </div>
      </div>

      {/* Main Links Dropdown */}
      <div
        className={`absolute top-16 right-0 bg-black text-white w-64 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center p-4 space-y-4 bg-black text-white shadow-lg">
        
          {/* About Us */}
          <div className="flex items-center space-x-2 p-4 cursor-pointer hover:bg-gray-800 rounded-md transition-colors">
            <Image src={about} width={34} height={34} alt="About Us" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold">About Us</span>
                <FaArrowRightLong className="transition-transform duration-300 ease-in-out" />
              </div>
              <span className="text-gray-300 text-sm">Start earning in 30 mins</span>
            </div>
          </div>

          {/* Member Section */}
          <div className="flex items-center space-x-2 p-4 cursor-pointer hover:bg-gray-800 rounded-md transition-colors">
            <Image src={member} width={34} height={34} alt="Become a Member" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Become a Member</span>
                <FaArrowRightLong className="transition-transform duration-300 ease-in-out" />
              </div>
              <span className="text-gray-300 text-sm">Additional 10% off on stays</span>
            </div>
          </div>

          {/* List Your Property */}
          <div className="flex items-center space-x-2 p-4 cursor-pointer hover:bg-gray-800 rounded-md transition-colors">
            <Image src={property} width={34} height={34} alt="List Your Property" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold">List Your Property</span>
                <FaArrowRightLong className="transition-transform duration-300 ease-in-out" />
              </div>
              <span className="text-gray-300 text-sm">Trusted by 5000 Corporates</span>
            </div>
          </div>

          {/* Career */}
          <div className="flex items-center space-x-2 p-4 cursor-pointer hover:bg-gray-800 rounded-md transition-colors">
            <Image src={career} width={34} height={34} alt="Career" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Career</span>
                <FaArrowRightLong className="transition-transform duration-300 ease-in-out" />
              </div>
              <span className="text-gray-300 text-sm">Lorem, nobis aperiam</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center space-x-2 p-4 cursor-pointer hover:bg-gray-800 rounded-md transition-colors">
            <Image src={userLogin} width={24} height={24} alt="Call Us" />
            <div className="flex flex-col">
              <span className="font-semibold">0124-6201611</span>
              <span className="text-gray-300 text-sm">Call us to Book now</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
