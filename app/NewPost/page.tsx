"use client";
import { useState } from "react";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NewPageImg from "@/components/NewPageImg";

const page = () => {
  const [selectedBathroom, setSelectedBathroom] = useState("Select Bathroom");
  const [selectedBedroom, setSelectedBedroom] = useState("Select Bedroom");
  const [selectedKitchen, setSelectedKitchen] = useState("Select Kitchen");
  const [selectedYear, setSelectedYear] = useState("Select Year");
  const [selectedLivingroom, setSelectedLivingroom] =
    useState("Select Livingroom");
  const [selectedPayment, setSelectedPayment] = useState("Payment Type");

  return (
    <Wrapper>
      <div className="w-full p-10 flex gap-6">
        {/* Property Details Section Starts */}

        <div className=" flex-[3] w-full p-6 border-2 border-slate-400 rounded-lg bg-white shadow-2xl">
          <div className="heading flex justify-between items-center w-full">
            {/* Left Section: Back Arrow and Title */}
            <div className="flex items-center gap-3">
              <IoMdArrowRoundBack className="text-2xl cursor-pointer text-gray-600" />
              <h1 className="text-2xl font-semibold text-gray-800">
                Property Details
              </h1>
            </div>

            {/* Right Section: Publish Property Button */}
            <div
              className="flex justify-center cursor-pointer shadow-lg items-center 
              px-5 py-2 rounded-lg gap-3 border-2 border-red-600 bg-red-600"
            >
              <AiOutlineCloudUpload className="text-white text-2xl" />
              <h1 className="text-white text-lg font-medium">
                Publish Property
              </h1>
            </div>
          </div>

          {/* Property Information Starts */}

          <div className="propertyinformation">
            <h1 className="text-lg font-semibold mt-2 text-gray-800">
              Property Information
            </h1>

            {/* Property Title */}
            <div className="mt-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
                placeholder="Enter property title"
              />
            </div>

            {/* Property Address */}
            <div className="mt-4 flex justify-between space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  placeholder="Enter address"
                />
              </div>

              {/* Unit Number Input */}
              <div className="w-1/3">
                <label
                  htmlFor="unit"
                  className="block text-sm font-medium text-gray-700"
                >
                  Unit Number
                </label>
                <input
                  type="text"
                  id="unit"
                  name="unit"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  placeholder="Enter unit number"
                />
              </div>
            </div>
          </div>

          {/* Property Information ends */}

          {/* Property Specification Starts */}

          <div className="mt-5">
            <h1 className="text-lg font-semibold mt-2 text-gray-800">
              Property Specifications
            </h1>

            <div className="flex gap-10 justify-start ml-1">
              {/* Benefits */}
              <div className="benefits">
                <h2 className="mt-3 text-lg font-normal">Benefits</h2>

                <div className="checkBox mt-2 ml-3 space-y-3">
                  {/* airport Checkbox */}
                  <span className="flex items-center gap-1">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:opacity-70"
                    />
                    Close to the airport
                  </span>

                  {/* Shopping Checkbox */}
                  <span className="flex items-center gap-1">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:opacity-70"
                    />
                    Close to shopping center
                  </span>

                  {/* hospital Checkbox */}
                  <span className="flex items-center gap-1">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:opacity-70"
                    />
                    Highway access &lt;10 minutes
                  </span>

                  {/* highway Checkbox */}
                  <span className="flex items-center gap-1">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:opacity-70"
                    />
                    Access to hospital &lt;10 minutes
                  </span>

                  {/* city garden */}
                  <span className="flex items-center gap-1">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:opacity-70"
                    />
                    Close to city garden
                  </span>
                </div>
              </div>

              {/* Facilities */}
              <div className="facilities">
                <h2 className="mt-3 text-lg font-normal">Facilities</h2>

                <div className="checkBox mt-2 ml-3 space-y-3">
                  {/* airport Checkbox */}
                  <span className="flex items-center gap-1">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="security"
                      className="text-sm font-medium leading-none peer-disabled:opacity-70"
                    />
                    Security 24 hours
                  </span>

                  {/* Shopping Checkbox */}
                  <span className="flex items-center gap-1">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="wall"
                      className="text-sm font-medium leading-none peer-disabled:opacity-70"
                    />
                    Artesian Wall
                  </span>

                  {/* hospital Checkbox */}
                  <span className="flex items-center gap-1">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="2300"
                      className="text-sm font-medium leading-none peer-disabled:opacity-70"
                    />
                    2300 VA
                  </span>

                  {/* highway Checkbox */}
                  <span className="flex items-center gap-1">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="celling"
                      className="text-sm font-medium leading-none peer-disabled:opacity-70"
                    />
                    High Celling
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="flex flex-col w-1/2">
                <h1 className="text-lg font-normal mt-2 text-gray-800">
                  Bathroom
                </h1>
                <div className="flex items-center mt-2 px-4 py-3 border-2 border-gray-300 rounded-lg justify-between cursor-pointer bg-white shadow-sm hover:border-gray-400">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center w-full justify-between  focus:outline-none focus:ring-0">
                      <span className="text-gray-700 border-none">
                        {selectedBathroom}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                      <DropdownMenuLabel className="px-4 py-2 font-semibold text-gray-800">
                        Select Option
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedBathroom("1 Bathroom")}
                      >
                        1 Bathroom
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedBathroom("2 Bathrooms")}
                      >
                        2 Bathrooms
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedBathroom("3 Bathrooms")}
                      >
                        3 Bathrooms
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedBathroom("4 Bathrooms")}
                      >
                        4 Bathrooms
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="flex flex-col w-1/2">
                <h1 className="text-lg font-normal mt-2 text-gray-800">
                  Bedroom
                </h1>
                <div className="flex items-center mt-2 px-4 py-3 border-2 border-gray-300 rounded-lg justify-between cursor-pointer bg-white shadow-sm hover:border-gray-400">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center w-full justify-between  focus:outline-none focus:ring-0">
                      <span className="text-gray-700 border-none">
                        {selectedBedroom}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                      <DropdownMenuLabel className="px-4 py-2 font-semibold text-gray-800">
                        Select Option
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedBedroom("1 Bedroom")}
                      >
                        1 Bedroom
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedBedroom("2 Bedrooms")}
                      >
                        2 Bedrooms
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedBedroom("3 Bedrooms")}
                      >
                        3 Bedrooms
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedBedroom("4 Bedrooms")}
                      >
                        4 Bedrooms
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="flex flex-col w-1/2">
                <h1 className="text-lg font-normal mt-2 text-gray-800">
                  kitchen
                </h1>
                <div className="flex items-center mt-2 px-4 py-3 border-2 border-gray-300 rounded-lg justify-between cursor-pointer bg-white shadow-sm hover:border-gray-400">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center w-full justify-between  focus:outline-none focus:ring-0">
                      <span className="text-gray-700 border-none">
                        {selectedKitchen}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                      <DropdownMenuLabel className="px-4 py-2 font-semibold text-gray-800">
                        Select Option
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedKitchen("1 Bathroom")}
                      >
                        1 Kitchen
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedKitchen("2 Bathrooms")}
                      >
                        2 Kitchen
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedKitchen("3 Bathrooms")}
                      >
                        3 Kitchen
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedKitchen("4 Bathrooms")}
                      >
                        4 Kitchen
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="flex flex-col w-1/2">
                <h1 className="text-lg font-normal mt-2 text-gray-800">
                  Livingroom
                </h1>
                <div className="flex items-center mt-2 px-4 py-3 border-2 border-gray-300 rounded-lg justify-between cursor-pointer bg-white shadow-sm hover:border-gray-400">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center w-full justify-between  focus:outline-none focus:ring-0">
                      <span className="text-gray-700 border-none">
                        {selectedLivingroom}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                      <DropdownMenuLabel className="px-4 py-2 font-semibold text-gray-800">
                        Select Option
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedLivingroom("1 Bedroom")}
                      >
                        1 Livingroom
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedLivingroom("2 Bedrooms")}
                      >
                        2 Livingroom
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedLivingroom("3 Bedrooms")}
                      >
                        3 Livingroom
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedLivingroom("4 Bedrooms")}
                      >
                        4 Livingroom
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>

          {/* Property Specification Ends */}

          {/* Property Pricing Starts */}

          <div className="propertypricing">
            <h1 className="text-lg font-semibold mt-5 text-gray-800 ">
              Property Pricing
            </h1>
            <span className="flex items-center mt-2 ml-2 gap-1">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:opacity-70"
              />
              Rent a House
            </span>

            <div className="flex gap-5">
              <div className="flex flex-col mt-4 w-1/2">
                <h3 className="text-lg font-semibold">Annual Payment</h3>
                <input
                  type="number"
                  placeholder="Amount"
                  className="flex items-center mt-2 px-4 py-3 border-2 border-gray-300 
                  rounded-lg justify-between cursor-pointer bg-white shadow-sm hover:border-gray-400"
                />
              </div>
              <div className="flex flex-col mt-4 w-1/2">
                <h3 className="text-lg font-semibold">
                  Minimum Rental Duration
                </h3>
                <div className="flex items-center mt-2 px-4 py-3 border-2 border-gray-300 rounded-lg justify-between cursor-pointer bg-white shadow-sm hover:border-gray-400">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center w-full justify-between  focus:outline-none focus:ring-0">
                      <span className="text-gray-700 border-none">
                        {selectedYear}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                      <DropdownMenuLabel className="px-4 py-2 font-semibold text-gray-800">
                        Select Option
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedYear("1 Year")}
                      >
                        1 Year
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedYear("2 Years")}
                      >
                        2 Years
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedYear("3 Years")}
                      >
                        3 Years
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedYear("4 Years")}
                      >
                        4 Years
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>

            <span className="flex items-center mt-5 ml-2 gap-1">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:opacity-70"
              />
              Buy a House
            </span>
            <div className="flex gap-5">
              <div className="flex flex-col mt-4 w-1/2">
                <h3 className="text-lg font-semibold">Offer Type</h3>
                <input
                  type="number"
                  placeholder="Amount"
                  className="flex items-center mt-2 px-4 py-3 border-2 border-gray-300 
                  rounded-lg justify-between cursor-pointer bg-white shadow-sm hover:border-gray-400"
                />
              </div>
              <div className="flex flex-col mt-4 w-1/2">
                <h3 className="text-lg font-semibold">Payment Type</h3>
                <div className="flex items-center mt-2 px-4 py-3 border-2 border-gray-300 rounded-lg justify-between cursor-pointer bg-white shadow-sm hover:border-gray-400">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center w-full justify-between  focus:outline-none focus:ring-0">
                      <span className="text-gray-700 border-none">
                        {selectedPayment}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                      <DropdownMenuLabel className="px-4 py-2 font-semibold text-gray-800">
                        Select Option
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedPayment("Cash Payment")}
                      >
                        Cash Payment
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedPayment("Card Payment")}
                      >
                        Card Payment
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setSelectedPayment("Online Payment")}
                      >
                        Online Payment
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>

          {/* Property Pricing Ends */}
        </div>

        {/* Property Details Section Ends */}

        {/* Image Upload Section */}
        <div className="dropImages  flex-[2] w-full p-6 border-2 border-slate-400 rounded-lg bg-white shadow-2xl">
          <h1 className="text-2xl font-semibold mt-2 text-gray-800">
            Property Image
          </h1>
          <div className="imgcontainer">
            <NewPageImg />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default page;
