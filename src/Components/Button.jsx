import React from "react";

const Button = ({ content, textcolor, bordercolor, bgcolor }) => {
  return (
    <>
      <button
        className={` ${textcolor} ${bordercolor} ${bgcolor} m-5 border border-solid text-sm px-10 py-2 rounded-full`}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
