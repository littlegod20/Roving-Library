"use client";
import Image from "next/image";
import React, { useState } from "react";
import FormInput from "@/Components/Input";
import { emailValidation, passwordValidation } from "@/Validation";
import Button from "@/Components/Button";
import IconBtn from "@/Components/IconBtn";
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function SignIn() {
  // const [email, setEmail] = useState("email");
  // const [show, setShow] = useState(false);

  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [form, setForm] = useState({
    email: "",
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
    <main className="flex h-screen flex-col justify-center items-center">
      <div className="h-1/3 w-full flex justify-center items-end">
        <Image src={"/User-avatar.png"} alt="" height={150} width={150} />
      </div>
      <div className="w-full flex justify-center h-72">
        <form
          onSubmit={handleSubmit}
          className="flex h-full w-4/5 sm:w-1/2 flex-col justify-evenly  items-center"
        >
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
          <div className="fle w-full justify-center items-center">
            <Button string="Sign In" />
          </div>
        </form>
      </div>
      <div className="w-full h-44  flex flex-col justify-evenly items-center">
        Or Sign In With
        <div className="flex flex-row justify-evenly lg:justify-center w-full md:w-1/2 ">
          <IconBtn string="Google" icon={<FcGoogle size={30} />} />
          <IconBtn string="Apple" icon={<FaApple size={30} />} />
        </div>
      </div>
    </main>
  );
}
