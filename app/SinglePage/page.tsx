"use client";
import Slider from "@/components/Slider";
import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import { singlePostData, userData } from "../lib/dummydata";
import Map from "@/components/Map"; // Import the Map component
import "../style/singlePageResponsive.css";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Wrapper>
      <div className="single-page flex flex-col h-full mb-3 space-y-6">
        {/* Details Section */}
        <div className="details flex-[3] w-full">
          <div className="wrapper px-4 pr-6 space-y-8">
            {/* Image Slider */}
            <Slider images={singlePostData.images} />

            {/* Info Section */}
            <div className="info mt-2 space-y-8">
              {/* Top Section */}
              <div className="top flex justify-between items-start space-y-6">
                {/* Post Info */}
                <div className="post space-y-4">
                  <h1 className="titlePost font-bold text-3xl text-gray-900 leading-tight">
                    {singlePostData.title}
                  </h1>
                  <div className="address flex items-center gap-2 text-gray-600 text-sm">
                    <img className="h-5 w-5" src="/pin.png" alt="Location" />
                    <span>{singlePostData.address}</span>
                  </div>
                  <div className="price bg-yellow-100 px-4 py-2 rounded-md inline-block shadow-md">
                    <span className="text-2xl font-semibold text-gray-800">
                      ${singlePostData.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* User Info */}
                <div className="user flex flex-col items-center gap-4 bg-yellow-100 px-6 py-4 rounded-xl text-center shadow-lg">
                  <img
                    src={userData.img}
                    alt="User"
                    className="w-[60px] h-[60px] rounded-full object-cover shadow-md"
                  />
                  <span className="font-semibold text-lg">{userData.name}</span>
                </div>
                <div className=" hidden mobPrice bg-yellow-100 px-4 py-2 rounded-md w-max shadow-md">
                  <span className="text-2xl font-semibold text-gray-800">
                    ${singlePostData.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="bottom text-gray-700 leading-relaxed space-y-4">
                <h2 className="font-semibold text-xl">Description</h2>
                <p>
                  {singlePostData.description.slice(0, 300)} ....{" "}
                  <button
                    onClick={handleOpenModal}
                    className="text-blue-500 underline"
                  >
                    Read More
                  </button>
                </p>
              </div>

              {/* buttons */}
              <div className="buttons flex justify-between ">
                <button className=" send p-5 flex items-center gap-3 bg-white border border-[#fece51] rounded-md cursor-pointer">
                  <img src="/chat.png" alt="" className="h-6 w-6" />
                  Send the message
                </button>
                <button className=" save p-5 flex items-center gap-3 bg-white border border-[#fece51] rounded-md cursor-pointer">
                  <img src="/save.png" alt="" className="h-6 w-6" />
                  Save the place
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-lg mx-4 relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-600"
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p>{singlePostData.description}</p>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="features flex-[2] bg-[#fcf5f3] p-6 rounded-lg space-y-6">
          <div className="wrapper py-[0] px-[20px] flex flex-col gap-4">
            <p className="title font-bold text-lg">General</p>
            <div className="listVertical flex flex-col gap-5 py-5 px-[10px] bg-white rounded-xl">
              <div className="feature flex items-center gap-3">
                <img
                  src="/utility.png"
                  alt="utility"
                  className="h-6 w-6"
                  style={{ backgroundColor: "rgba(254, 205, 81, .209 )" }}
                />
                <div className="featureText">
                  <span className="font-bold">Utilities</span>
                  <p className="text-sm">Renter is responsible</p>
                </div>
              </div>
              <div className="feature flex items-center gap-3">
                <img
                  src="/pet.png"
                  alt="utility"
                  className="h-6 w-6"
                  style={{ backgroundColor: "rgba(254, 205, 81, .209 )" }}
                />
                <div className="featureText">
                  <span className="font-bold">Pet Policy</span>
                  <p className="text-sm">Pets Allowed</p>
                </div>
              </div>
              <div className="feature flex items-center gap-3">
                <img
                  src="/fee.png"
                  alt="utility"
                  className="h-6 w-6"
                  style={{ backgroundColor: "rgba(254, 205, 81, .209 )" }}
                />
                <div className="featureText">
                  <span className="font-bold">Property fees</span>
                  <p className="text-sm">
                    Must have 3x the rent in total household income
                  </p>
                </div>
              </div>
            </div>
            <p className="title font-bold text-lg mb-2">Size</p>
            <div className="sizes flex flex-row justify-between">
              <div className="size flex items-center gap-3 bg-white p-[10px] rounded-md">
                <img
                  src="/size.png"
                  alt=""
                  className="h-6 w-6"
                  style={{ backgroundColor: "rgba(254, 205, 81, .209 )" }}
                />
                <span>80 sqft</span>
              </div>
              <div className="size flex items-center gap-3 bg-white p-[10px] rounded-md">
                <img
                  src="/bed.png"
                  alt=""
                  className="h-6 w-6"
                  style={{ backgroundColor: "rgba(254, 205, 81, .209 )" }}
                />
                <span>2 beds</span>
              </div>
              <div className="size flex items-center gap-3 bg-white p-[10px] rounded-md">
                <img
                  src="/bath.png"
                  alt=""
                  className="h-6 w-6"
                  style={{ backgroundColor: "rgba(254, 205, 81, .209 )" }}
                />
                <span>1 bathroom</span>
              </div>
            </div>
            <p className="title font-bold text-lg ">Nearby Places</p>
            <div className="listHorizontal flex py-5 px-[10px] bg-white rounded-xl justify-between">
              <div className="feature flex items-center gap-3">
                <img
                  src="/school.png"
                  alt="utility"
                  className="h-6 w-6"
                  style={{ backgroundColor: "rgba(254, 205, 81, .209 )" }}
                />
                <div className="featureText">
                  <span className="font-bold">School</span>
                  <p className="text-sm">250m away</p>
                </div>
              </div>
              <div className="feature flex items-center gap-3">
                <img
                  src="/bus.png"
                  alt="utility"
                  className="h-6 w-6"
                  style={{ backgroundColor: "rgba(254, 205, 81, .209 )" }}
                />
                <div className="featureText">
                  <span className="font-bold">Bus Stop</span>
                  <p className="text-sm">100m away</p>
                </div>
              </div>
              <div className="feature flex align-middle gap-3">
                <img
                  src="/restaurant.png"
                  alt="utility"
                  className="h-6 w-6"
                  style={{ backgroundColor: "rgba(254, 205, 81, .209 )" }}
                />
                <div className="featureText">
                  <span className="font-bold">Restaurant</span>
                  <p className="text-sm">200m away</p>
                </div>
              </div>
            </div>
            <p className=" font-bold text-lg mb-2">Location</p>
            <div className="mapContainer w-full h-52">
              <Map items={[singlePostData]} onSelect={function (location: string): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
