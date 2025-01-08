"use client";
import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode; // ReactNode allows any valid React child elements (JSX, string, etc.)
  className?: string; // Optional prop, hence the "?" to indicate it's not required
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div
      className={`w-[100%] md:px-10  mx-auto  ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
