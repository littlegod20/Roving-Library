import React from "react";

export default function Button({ string, type }) {
  return (
    <div className="w-full flex justify-center items-center">
      <button
        type={type}
        className="w-full bg-blue-500 text-white flex justify-center items-center p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 hover:bg-blue-700 md:w-1/2"
      >
        {string}
      </button>
    </div>
  );
}
