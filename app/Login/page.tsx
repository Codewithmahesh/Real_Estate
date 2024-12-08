"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "@/app/Login/login.scss";

interface Errors {
  username?: string;
  password?: string;
}

const Page: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for the field being edited
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Errors = {};

    // Validate fields
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Proceed with form submission
    console.log("Form submitted:", formData);
  };

  return (
    <Wrapper>
      <div className="login min-h-screen flex flex-col md:flex-row bg-gray-100">
        {/* Form Container */}
        <div className="formContainer flex-1 flex flex-col justify-center items-center p-6">
          <form
            className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-bold mb-4 text-center text-teal-700">
              Welcome Back
            </h1>
            <div className="relative">
              <input
                name="username"
                type="text"
                placeholder="Username"
                className={`p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:border-teal-500 transition-all ${
                  errors.username ? "border-red-500" : ""
                }`}
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            <div className="relative">
              <input
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className={`p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:border-teal-500 transition-all ${
                  errors.password ? "border-red-500" : ""
                }`}
                value={formData.password}
                onChange={handleChange}
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <AiOutlineEyeInvisible size={24} className="text-gray-500" />
                ) : (
                  <AiOutlineEye size={24} className="text-gray-500" />
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="p-4 rounded-md bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-all cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={false}
            >
              Login
            </button>
            <Link href="/Register" className="text-center text-teal-600 ">
              Don't have an account? Sign up
            </Link>
          </form>
        </div>

        {/* Image Container */}
        <div className="imageContainer flex flex-2 items-center relative hidden md:block">
          <img
            src="./bg.png"
            className="w-[115%] absolute -left-[10%] right-0"
            alt="bgimg"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
