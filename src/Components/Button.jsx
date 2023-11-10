import React from "react";

const Button = ({ content, textColor, borderColor, bgColor }) => {
  return (
    <>
      <button
        className={` ${textColor} ${borderColor} ${bgColor} m-5 border-2 border-solid text-sm px-10 py-2 rounded-full`}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
