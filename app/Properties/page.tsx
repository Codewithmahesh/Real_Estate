"use client";
import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "../lib/dummydata";
import { RiFilterLine, RiCloseLine } from "react-icons/ri";
import PriceSlider from "@/components/PriceSlider";
import DropdownFilter from "@/components/DropdownFilter";

const Page = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const handleFilterToggle = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <Wrapper>
      <div className="text-center mb-8 mt-12">
        <h1 className="text-4xl font-semibold text-gray-800">Our Project</h1>
        <p className="text-xl text-gray-600 mt-2">
          Explore the best properties available in our project.
        </p>
      </div>

      {/* Mini Navbar Section for Large and Medium Screens */}
      <div className="flex justify-between items-center bg-gray-200 p-4 rounded-md mb-8">
        <div className="flex space-x-6">
          <button className="text-lg text-gray-800">Upcoming</button>
          <button className="text-lg text-gray-800">Ongoing</button>
          <button className="text-lg text-gray-800">Completed</button>
        </div>
        <div>
          <button
            onClick={handleFilterToggle}
            className="text-gray-800 bg-gray-300 p-2 rounded-md"
          >
            <RiFilterLine size={24} />
          </button>
        </div>
      </div>

      {/* Filter Drawer for Large and Medium Screens */}
      {openFilter && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-30">
          <div className="relative bg-white w-[28rem] h-full p-6 mt-20">
            {" "}
            {/* Add mt-16 to give space below the navbar */}
            <button
              onClick={handleFilterToggle}
              className="absolute top-4 right-4"
            >
              <RiCloseLine size={24} />
            </button>
            <h2 className="text-xl font-semibold">Filter Properties</h2>
            <div className="space-y-4 mt-4">
              <PriceSlider />
              <DropdownFilter />
            </div>
          </div>
        </div>
      )}

      {/* Container for the grid of properties */}
      <div className="container mx-auto p-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            title={property.title}
            price={property.price}
            image={property.image}
            bhk={property.bhk}
            type={property.type}
            status={property.status}
            location={property.location}
            description={property.description}
            imageUrls={property.imageUrls}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Page;
