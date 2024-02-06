"use client";
import React from "react";
// import { useRef } from "react";

export default function Input({ placeholder, icon }) {
  // const containerRef = useRef(null);

  // const handleClick = () => {
  //   if (containerRef.current) {
  //     containerRef.current.focus();
  //   }
  // };
  return (
    <div
      // ref={containerRef}
      // tabIndex={0}
      // onClick={handleClick}
      className="w-72 sm:w-[400px] flex justify-center items-center h-12 focus:outline-none  focus:border-blue-500 shadow-sm border-2 rounded-xl p-2"
    >
      {icon}
      <input
        className=" w-full h-full ml-1 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}
