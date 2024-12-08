"use client";
import Wrapper from "@/components/Wrapper";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const Page: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Errors = {};

    // Validate fields
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Proceed with form submission
    console.log("Form submitted:", formData);
  };

  return (
    <Wrapper>
      <div className="register min-h-screen flex flex-col md:flex-row bg-gray-100">
        {/* Form Container */}
        <div className="formContainer flex-1 flex flex-col justify-center items-center p-6">
          <form
            className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-bold mb-4 text-center text-teal-700">
              Create an Account
            </h1>
            <div className="relative">
              <input
                className={`p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:border-teal-500 transition-all ${
                  errors.username ? "border-red-500" : ""
                }`}
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </div>
            <div className="relative">
              <input
                className={`p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:border-teal-500 transition-all ${
                  errors.email ? "border-red-500" : ""
                }`}
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="relative">
              <input
                className={`p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:border-teal-500 transition-all ${
                  errors.password ? "border-red-500" : ""
                }`}
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
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
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="relative">
              <input
                className={`p-4 border border-gray-300 rounded-md w-full focus:outline-none focus:border-teal-500 transition-all ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                name="confirmPassword"
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
              >
                {confirmPasswordVisible ? (
                  <AiOutlineEyeInvisible size={24} className="text-gray-500" />
                ) : (
                  <AiOutlineEye size={24} className="text-gray-500" />
                )}
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
            <button
              type="submit"
              className="p-4 rounded-md bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-all cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={false}
            >
              Register
            </button>
            <Link
              href="/Login"
              className="text-center text-teal-600 "
            >
              Already have an account? Log in
            </Link>
          </form>
        </div>

        {/* Image Container (hidden on small devices) */}
        <div className="imageContainer hidden md:flex flex-1 items-center justify-center relative">
          <Image
            src="/bg.png"
            alt="Background Image"
            className="w-full h-full object-cover"
            layout="fill"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
