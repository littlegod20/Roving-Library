import React, { useState } from "react";

const FormInput = ({
  type,
  placeholder,
  required,
  onChange,
  value,
  name,
  error,
  resetError,
  leftIcon,
  rightIcon,
  isValid,
}) => {
  return (
    <div className="w-full md:w-3/4">
      <div className="relative w-full">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {leftIcon}
          </div>
        )}
        <input
          onFocus={resetError}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={required}
          className={`bg-gray-50 border ${
            error ? "border-red-600" : "border-gray-300"
          }  text-gray-900 text-md rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 block
           w-full ${leftIcon && "pl-10"} p-2.5 outline-none `}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
            {rightIcon}
          </div>
        )}
      </div>
      {!isValid?.isValid && error === null && (
        <span className="mt-2 text-sm text-red-600">{isValid?.msg}</span>
      )}
      {error && <span className="mt-2 text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default FormInput;
