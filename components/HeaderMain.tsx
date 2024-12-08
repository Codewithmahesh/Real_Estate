"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { nav } from "@/app/lib/navData";
import { FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";

const HeaderMain = () => {
  const [navList, setNavList] = useState(false);
  const logo = "/logo1.png"; 

  return (
    <header className="bg-white h-[10vh] shadow-lg sticky top-0 z-[99999] flex items-center">
      <div className="container mx-auto flex items-center justify-evenly">
        <div className="logo flex-shrink-0">
          <Image src={logo} alt="Logo" width={170} height={50} />
        </div>

        <div className="nav">
          <ul
            className={`transition-all ${
              navList
                ? "absolute top-[10vh]  left-0 w-full bg-green-600 p-5 lg:static lg:bg-transparent"
                : "flex space-x-8 hidden lg:flex"
            } items-center capitalize`}
          >
            {nav.map((list, index) => (
              <li key={index}>
                <Link
                  href={list.path}
                  className="text-lg font-normal transition duration-500 hover:text-green-600"
                >
                  {list.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="button flex items-center hidden lg:flex space-x-6">
          <h4 className="font-medium flex items-center space-x-2 text-gray-700">
            <span className="bg-green-600 text-white rounded-full px-3 py-1">
              2
            </span>
            <span>My List</span>
          </h4>

          <button className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300">
            <FaSignOutAlt className="mr-2" />
            <span>Sign In</span>
          </button>
        </div>

        <div className="toggle lg:hidden">
          <button onClick={() => setNavList(!navList)} className="text-2xl p-2">
            {navList ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
