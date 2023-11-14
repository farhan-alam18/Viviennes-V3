import React from "react";
import Button from "../../Components/Button";

const Banner = () => {
  return (
    <>
      <header className="bg-noise flex flex-col z-0 p-3 md:flex-row md:py-10">
        {/* left-section */}
        <div className="mx-auto mt-10 md:my-auto">
          <p className="font-logo text-cust-yellow text-center text-4xl md:text-5xl md:text-start xl:text-7xl">
            Glow & Glamour : <br />
            Regal Radiance <br />
            Revealed <br />
          </p>
          <div className="hidden font-title md:block md:my-5">
            <Button
              content="Shop Now"
              textcolor="text-white"
              bordercolor="white"
              bgcolor="transparent"
            />
          </div>
        </div>

        {/* right-section  */}
        <div className="flex my-[3rem] xl:mr-20">
          <img
            src="../../../images/Homepage/Image-169.png"
            alt=""
            className="mx-10 md:w-[20rem] xl:w-[22rem]"
          />
          <img
            src="../../../images/Homepage/Image-170.png"
            alt=""
            className="h-[16rem] w-[16rem] mt-[4rem] ml-[-10rem] mr-5 md:w-[13rem] md:h-[18rem] xl:w-[16rem] xl:h-[22rem]"
          />
        </div>

        <div className="mx-auto font-title md:hidden">
          <Button
            content="Shop Now"
            textcolor="text-white"
            bordercolor="white"
            bgcolor="transparent"
          />
        </div>
      </header>
    </>
  );
};

export default Banner;
