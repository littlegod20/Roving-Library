import React from "react";

export default function Button({ string }) {
  return (
    <div className="w-1/2 flex justify-center items-center">
      <button className="w-full bg-blue-500 text-white flex justify-center items-center p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 hover:bg-blue-700 md:w-1/2">
        {string}
      </button>
    </div>
  );
}
