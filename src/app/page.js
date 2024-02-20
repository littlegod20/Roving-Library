import React from "react";
import Link from "next/link";
import Carousel from "@/app/ui/Carousel";

export default function Landing() {
  return (
    <main className="flex justify-center items-center p-5  h-screen w-full">
      <div className="h-[700px] sm:h-[600px] w-full  flex flex-col justify-around sm:justify-evenly items-center">
        <div className="h-[400px] w-[300px] flex justify-center items-center flex-row ">
          <Carousel />
        </div>
        <div className="flex flex-col  justify-between h-[130px] items-center w-1/2 md:w-64">
          <Link
            className=" bg-blue-700 p-3 w-full text-white rounded-md focus:outline-none focus:ring focus:border-white text-center"
            href="./authentication/signin"
          >
            Sign In
          </Link>
          <Link
            className=" bg-white  p-3 w-full rounded-md border-2 border-blue-700 focus:outline-none focus:ring focus:border-white text-center"
            href="./authentication/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
