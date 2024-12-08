// components/Filter.tsx
"use client";
import React from "react";

const Filter = () => {
  return (
    <div className="filter flex flex-col gap-4 lg:gap-6">
      <h1 className="text-2xl">
        Search result for <b>London</b>
      </h1>
      <div className="top">
        <div className="item flex flex-col gap-2">
          <label htmlFor="city" className="text-xs">
            Location
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="city location"
            className="p-3 w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="bottom flex flex-wrap gap-4 items-center">
        <div className="item flex flex-col gap-1">
          <label htmlFor="type" className="text-xs">
            Type
          </label>
          <select
            name="type"
            id="type"
            className="w-[100px] p-2 border border-gray-300 rounded-md"
          >
            <option value="any">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item flex flex-col gap-1">
          <label htmlFor="property" className="text-xs">
            Property
          </label>
          <select
            name="property"
            id="property"
            className="w-[100px] p-2 border border-gray-300 rounded-md"
          >
            <option value="any">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item flex flex-col gap-1">
          <label htmlFor="minPrice" className="text-xs">
            Min Price
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            className="w-[100px] p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="item flex flex-col gap-1">
          <label htmlFor="maxPrice" className="text-xs">
            Max Price
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            className="w-[100px] p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="item flex flex-col gap-1">
          <label htmlFor="bedroom" className="text-xs">
            Bedroom
          </label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            className="w-[100px] p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button className="w-[100px] h-[40px] flex justify-center items-center border-none cursor-pointer bg-yellow-400 rounded-md shadow-sm">
          <img src="/search.png" className="w-5 h-5" alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
