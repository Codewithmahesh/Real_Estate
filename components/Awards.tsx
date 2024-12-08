import React from "react";
import { awards } from "@/app/lib/navData";

const Awards = () => {
  return (
    <section className="awards bg-[#122947] text-white text-center px-20 py-24">
      <div className="container mx-auto px-4">
        <div className="heading flex flex-col-reverse">
          <h1 className="text-white text-[30px] font-normal">
            Over 1,24,000+ Happy Users Being With Us, Still Loving Our Services
          </h1>
          <p className="text-[#27ae60]">Our Awards</p>
        </div>

        <div className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {awards.map((val, index) => (
            <div className="box text-center" key={index}>
              <div className="icon flex items-center justify-center w-[100px] h-[100px] mx-auto mt-12 bg-[rgba(255,255,255,0.1)] rounded-[4%_50%] text-[32px] text-white">
                <span>{val.icon}</span>
              </div>
              <h1 className="text-[50px] mt-4">{val.num}</h1>
              <p className="text-gray-400">{val.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
