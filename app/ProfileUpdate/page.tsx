"use client";
import Wrapper from "@/components/Wrapper";
import React from "react";

const Page: React.FC = () => {
  return (
    <Wrapper>
      <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100 p-6">
        {/* Form Container */}
        <div className="flex-1 lg:w-2/3 flex items-center justify-center">
          <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6">
            <h1 className="text-2xl font-bold mb-6 text-teal-700 text-center">
              Update Profile
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-all"
            >
              Update
            </button>
          </form>
        </div>

        {/* Side Container */}
        <div className=" lg:flex lg:w-1/3 bg-[#fcf5f3] items-center justify-center p-6">
          <img
            src="https://e7.pngegg.com/pngimages/442/477/png-clipart-computer-icons-user-profile-avatar-profile-heroes-profile.png"
            alt="Profile Avatar"
            className="w-1/2 h-auto rounded-full object-cover"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
