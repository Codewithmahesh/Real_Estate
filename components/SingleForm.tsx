"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleForm = () => {
  const logo = "/logo.png";

  return (
    <div className="border-2 w-full sm:w-[600px] border-gray-300 rounded-2xl shadow-2xl p-6">
      <div className="logo flex items-center justify-start gap-4">
        <Image src={logo} height={40} width={40} alt="Logo" />
        <h1 className="text-2xl font-bold mt-2 text-gray-800">Rent UP</h1>
      </div>
      <div className="space-y-6">
        {/* Name Field */}
        <div className="mt-8">
          <label
            htmlFor="name"
            className="block text-[16px] font-medium tracking-wider text-gray-800 mb-1"
          >
            Enter your name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="w-full px-4 py-4 border rounded-lg tracking-widest shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-[16px] font-medium tracking-wider text-gray-800 mb-1"
          >
            Phone Number
          </label>
          <div className="flex flex-col sm:flex-row sm:space-x-2">
            <input
              type="text"
              id="country-code"
              defaultValue="+91"
              className="w-full sm:w-1/4 px-4 py-4 border rounded-lg tracking-widest shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="number"
              id="phone"
              placeholder="1234567890"
              className="w-full sm:w-3/4 px-4 py-4 border rounded-lg tracking-widest shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-[16px] font-medium tracking-wider text-gray-800 mb-1"
          >
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@domain.com"
            className="w-full px-4 py-4 border rounded-lg tracking-widest shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-[16px] font-medium tracking-wider text-gray-800 mb-1"
          >
            Write your message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Your message..."
            className="w-full px-4 py-4 border rounded-lg tracking-widest shadow-sm focus:outline-none 
            focus:ring-2 focus:ring-gray-500 resize-none"
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-center justify-start">
          <input
            type="checkbox"
            id="custom-checkbox"
            className="appearance-none h-5 w-5 border border-gray-300 rounded-md
             checked:bg-gray-300 checked:border-gray-300 focus:outline-none focus:ring-2
              focus:ring-gray-400 items-center relative cursor-pointer "
          />
          <label htmlFor="custom-checkbox" className="ml-2 text-gray-700">
            By Submitting this form I agree to{" "}
            <Link href={""} className="text-blue-700">
              Terms of use
            </Link>
          </label>

          <style jsx>{`
            #custom-checkbox:checked::before {
              content: "✔";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 0.9rem;
              color: black;
            }
          `}</style>
        </div>

        {/* Submit Button */}
        <div className="submit flex justify-start">
          <button
            type="submit"
            className="border-2 border-gray-300 flex justify-center items-center w-full text-xl 
            py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-200 tracking-wider font-normal "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleForm;
