import React from "react";

const Input = ({ label, placeholder, type, ...rest }) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor="" className=" mb-2 font-medium text-gray-500">
        {label}
      </label>
      <input
        type={type}
        className="border border-gray-300 block w-full px-4 py-2 shadow-2xl mb-4 focus:outline-none"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Input;
