import React from "react";
import Link from "next/link";

export default function Button({ string, type, link, onclick }) {
  return (
    <div className="w-4/5 flex justify-center items-center">
      <Link
        className="w-full bg-blue-500 text-white flex justify-center items-center p-4 rounded-xl transition-colors duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-900 hover:bg-blue-700 md:w-1/2 shadow-sm shadow-black"
        href={`${link}`}
        onClick={onclick}
      >
        <button type={type}>{string}</button>
      </Link>
    </div>
  );
}
