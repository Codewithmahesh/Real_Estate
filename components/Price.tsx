import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div>
      <section className="price padding mt-20">
        <div className="container mx-auto px-4">
          <div className="heading text-center mb-10">
            <h1 className="text-slate-900 text-4xl md:text-5xl lg:text-6xl font-bold">
              Select Your Package
            </h1>
            <p className="text-slate-600 opacity-90 mt-4 text-base md:text-lg max-w-3xl mx-auto">
              Discover beautiful locations and choose from a range of properties
              including Villas, Offices, and Apartments. Find your perfect place
              in the most sought-after areas.
            </p>
          </div>
          <PriceCard />
        </div>
      </section>
    </div>
  );
};

export default Price;
