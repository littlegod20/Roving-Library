import React from "react";

export default function IconBtn({ string, icon }) {
  return (
    <div className="w-1/3 flex justify-center">
      <button className="w-32 bg-white ring-2 ring-gray-200 px-2 py-4 rounded-lg hover:bg-gray-100 flex justify-evenly text-gray-600 text-base items-center">
        {icon}
        {string}
      </button>
    </div>
  );
}
