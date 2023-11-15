import React from "react";
import data from "../../../data/homepage.json";

const CollectionsHP = () => {
  return (
    <>
      <div className="text-center mt-20">
        <p className="text-dark-green font-title text-4xl font-medium mb-8">
          Our Collections
        </p>
        <div className="grid grid-cols-2 md:ml-[5rem] md:mr-[5rem] md:gap-3 xl:gap-2 xl:ml-[15rem] xl:mr-[13rem] xl:grid-cols-3">
          {data.collections.map((link, index) => (
            <div className="">
              <img
                key={index}
                src={link.imgSrc}
                alt=""
                className="rounded-xl m-1 md:w-[18rem] xl:w-[22rem]"
              />
              <p className="m-1 font-title font-medium ">{link.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CollectionsHP;
