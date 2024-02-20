import Image from "next/image";
import Link from "next/link";
import React from "react";

export function GenreCard({ image, name, isSelected, handleClick }) {
  return (
    <div
      className={`flex flex-col justify-center items-center sm:w-[197px] w-[166px] h-[200px] p-3 rounded-3xl bg-gradient-to-br from-blue-400 to-white shadow-inner shadow-blue-500 cursor-pointer focus:outline-none focus:ring-blue-800 ${
        isSelected ? "border-2 border-blue-900" : ""
      }`}
      onClick={handleClick}
    >
      <Image src={image} alt="" width={80} height={100} />
      <p className="text-center">{name}</p>
    </div>
  );
}

export function AuthorCard({ image, name, path }) {
  return (
    <Link
      className="flex flex-row justify-center items-center  w-full p-3 rounded-3xl bg-gradient-to-br from-blue-400 to-white shadow-inner shadow-blue-500 cursor-pointer"
      href={path}
    >
      <Image src={image} alt="" width={100} height={100} />
      <p className="text-center">{name}</p>
    </Link>
  );
}
