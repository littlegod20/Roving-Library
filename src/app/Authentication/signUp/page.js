"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import FormInput from "@/Components/Input";
import {
  nameValidation,
  passwordValidation,
  emailValidation,
} from "@/Validation";
import Button from "@/Components/Button";
import IconBtn from "@/Components/IconBtn";
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function SignUp() {
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState({
    email: "",
    fname: "",
    password: "",
  });
  const [form, setForm] = useState({
    email: "",
    fname: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const handleTogglePassword = () => {
    setShow((prev) => !prev);
  };

  const handleInputChange = (e) => {
    let errorMessage = "";
    const { value, name } = e.target;

    //Validate email field
    if (name === "email") {
      const validation = emailValidation(value);
      setIsValid(validation.isValid);
      errorMessage = validation.msg;
    }

    //Validate password
    if (name === "password") {
      const validation = passwordValidation(value);
      setIsValid(validation.isValid);
      errorMessage = validation.msg;
    }

    //Validate Fname
    if (name === "fname") {
      const validation = nameValidation(value);
      setIsValid(validation.isValid);
      errorMessage = validation.msg;
    }

    setError({ ...error, [name]: errorMessage });
    setForm({ ...form, [name]: value });
    // console.log(error.email);
  };

  // const handleError = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (isValid === false) {
      console.log("No entry");
    } else {
      console.log("Full entry");
    }
  };

  return (
    <main className="flex h-screen flex-col justify-center items-center ">
      <div className="h-1/6 w-full flex justify-center items-end">
        <Image src={"/User-avatar.png"} alt="" height={150} width={110} />
      </div>
      <div className="w-full flex justify-center h-80">
        <form
          onSubmit={handleSubmit}
          className="flex h-full w-4/5 sm:w-1/2 flex-col justify-evenly  items-center"
        >
          <FormInput
            placeholder="John Doe"
            type="text"
            required={true}
            name="fname"
            error={error.fname}
            isValid={isValid}
            onChange={handleInputChange}
            leftIcon={<FaRegUser color={"#666"} />}
          />
          <FormInput
            placeholder="email@codewave.com"
            type="email"
            name="email"
            onChange={handleInputChange}
            error={error.email}
            isValid={isValid}
            required={true}
            leftIcon={<MdEmail color={"#666"} />}
          />
          <FormInput
            placeholder="Password"
            type={show ? "text" : "password"}
            required={true}
            name="password"
            error={error.password}
            onChange={handleInputChange}
            leftIcon={<CiLock color={"#666"} />}
            rightIcon={
              show ? (
                <FaEye onClick={handleTogglePassword} />
              ) : (
                <FaEyeSlash onClick={handleTogglePassword} />
              )
            }
          />
          <div className="flex w-full justify-center items-center">
            <Button type="submit" string="Sign Up" />
          </div>
        </form>
      </div>
      <div className="w-full flex flex-col justify-evenly items-center">
        Or Sign Up With
        <div className="mt-7 flex flex-row justify-evenly lg:justify-center w-full md:w-1/2 ">
          <IconBtn string="Google" icon={<FcGoogle size={30} />} />
          <IconBtn string="Apple" icon={<FaApple size={30} />} />
        </div>
      </div>
    </main>
  );
}

function checkAllProperties(object, condition) {
  return Object.values(object).every(condition);
}
