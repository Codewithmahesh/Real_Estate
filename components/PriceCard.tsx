import React from "react";
import { price } from "@/app/lib/navData";

const PriceCard = () => {
  return (
    <div className="price text-center">
      <div className="content flex flex-wrap lg:px-16 mb-11 justify-center gap-6 mt-8">
        {price.map((item) => (
          <div
            className={`box shadow-lg p-8 rounded-lg transition-transform transform hover:scale-105 hover:border-green-500 w-full md:w-[31.5%] ${item.plan === "Standard" ? "border border-green-500" : ""}`}
          
          >
            <div className=" mb-4">
              {item.plan !== "Basic" && item.plan !== "Premium" && (
                <button className="btn3 bg-orange-500 text-white py-1 px-4 rounded-md" aria-label={`Best choice for ${item.plan}`}>
                  {item.best}
                </button>
              )}
            </div>
            <h3 className="text-lg font-semibold">{item.plan}</h3>
            <h1 className="text-6xl font-bold mt-4">
              <span className="text-2xl">$</span>
              {item.price}
            </h1>
            <p className="mt-4 text-gray-600">{item.ptext}</p>

            <ul className="mt-10">
              {item.list.map(({ icon, text, change }, idx) => (
                <li className="flex items-center mb-5" key={idx}>
                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full mr-5 transition-colors ${change === "color" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
                  >
                    {icon}
                  </span>
                  <p className="text-gray-700">{text}</p>
                </li>
              ))}
            </ul>
            <button
              className={`btn5 w-full mt-6 py-3 rounded-md transition-colors ${item.plan === "Standard" ? "bg-green-500 text-white" : "bg-white text-green-500 border border-green-500"}`}
              aria-label={`Start ${item.plan}`}
            >
              Start {item.plan}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
