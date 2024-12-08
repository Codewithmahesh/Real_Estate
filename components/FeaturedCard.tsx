import React from "react";
import { featured } from "@/app/lib/navData";

const FeaturedCard = () => {
  return (
    <div className="flex flex-wrap justify-center p-9 gap-6">
      {featured.map((items, index) => (
        <div
          className="shadow-[0_0_20px_0_rgba(112,121,138,0.18)] rounded-lg text-center p-6 w-64 cursor-pointer transition-transform transform hover:scale-105"
          key={index}
        >
          <img
            src={items.cover}
            alt=""
            className="w-16 h-16 mx-auto mb-4" // Add margin bottom for spacing
          />
          <h4 className="text-lg font-semibold">{items.name}</h4>
          <label className="text-gray-500">{items.total}</label>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;
