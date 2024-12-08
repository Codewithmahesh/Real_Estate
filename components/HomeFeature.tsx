import React from "react";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <section className=" bg-gray-100 from-gray-400 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-slate-900 text-3xl md:text-6xl lg:text-5xl font-bold">
            Featured Property Types
          </h1>
          <p className="text-slate-900 opacity-80 mt-4 text-base md:text-lg">
            Find All Types of Property.
          </p>
        </div>
        <div className="mt-6">
          <FeaturedCard />
        </div>
      </div>
    </section>
  );
};

export default Featured;
