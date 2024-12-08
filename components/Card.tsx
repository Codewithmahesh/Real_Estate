"use client";
import React from "react";
import Link from "next/link"; // Use Next.js Link component
import "../app/style/card.css"

interface CardProps {
  item: {
    id: number;
    title: string;
    img: string;
    bedroom: number;
    bathroom: number;
    price: number;
    address: string;
  };
}
  
const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="card flex flex-col md:flex-row gap-[20px] p-4 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-200">
      {/* Image Container */}
      <Link
        href={`/${item.id}`}
        className="imageContainer md:flex-2 h-[200px] w-full md:w-[40%] relative"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>

      {/* Text Container */}
      <div className="textContainer flex-3 flex flex-col justify-between gap-[10px] w-full">
        <h2 className="title text-xl font-bold text-gray-900 hover:underline transition">
          <Link href={`/${item.title}`}>{item.title}</Link>
        </h2>
        <p className="address flex items-center text-gray-600 text-sm">
          <img
            src="/pin.png"
            alt="location"
            className="w-[16px] h-[16px] mr-2"
          />
          <span>{item.address}</span>
        </p>
        <p
          className="price text-lg font-semibold rounded-[5px] px-[9px] py-[5px] w-max"
          style={{ backgroundColor: "rgba(254,205,81,0.438)" }}
        >
          ${item.price}
        </p>

        <div className="bottom flex justify-between items-center">
          <div className="features flex gap-[20px]">
            <div className="feature flex items-center text-gray-700">
              <img
                src="/bed.png"
                alt="bedroom"
                className="w-[16px] h-[16px] mr-2"
              />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature flex items-center text-gray-700">
              <img
                src="/bath.png"
                alt="bathroom"
                className="w-[16px] h-[16px] mr-2"
              />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>

          <div className="icons flex gap-[10px]">
            <div className="icons flex gap-4">
              <div className="icon cursor-pointer p-2 border border-[#999] rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 ease-in-out">
                <img src="/save.png" alt="save" className="w-[16px] h-[16px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
