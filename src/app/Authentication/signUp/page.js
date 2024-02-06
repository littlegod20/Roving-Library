"use client";
import Image from "next/image";
import React from "react";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import IconBtn from "@/Components/IconBtn";
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

export default function SignUp() {
  return (
    <main className="flex h-screen flex-col justify-center items-center ">
      <div className="h-1/3 w-full flex justify-center items-end">
        <Image src={"/User-avatar.png"} alt="" height={150} width={150} />
      </div>
      <div className="h-2/6 w-full">
        <form className="flex h-full flex-col justify-evenly  items-center ">
          <label>
            <Input
              placeholder={"Enter your name"}
              icon={<FaRegUser className="text-gray-300" />}
            />
          </label>
          <label>
            <Input
              placeholder={"Enter your email"}
              icon={<MdEmail size={20} className="text-gray-300" />}
            />
          </label>
          <label>
            <Input
              placeholder={"Enter your password"}
              icon={<CiLock size={25} className="text-gray-300" />}
            />
          </label>
        </form>
      </div>
      <div className="w-full h-64  flex flex-col justify-evenly items-center">
        <Button string="Sign Up" />
        Or Sign Up With
        <div className="flex flex-row justify-evenly lg:justify-center w-full md:w-1/2 ">
          <IconBtn string="Google" icon={<FcGoogle size={30} />} />
          <IconBtn string="Apple" icon={<FaApple size={30} />} />
        </div>
      </div>
    </main>
  );
}
