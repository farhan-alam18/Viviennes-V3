import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import Button from "../../Components/Button";
import data from "../../../data/homepage.json";
import { register } from "swiper/element/bundle";
register();

const Featured = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      breakpoints: {
        310:{
          slidesPerView:1,
          spaceBetween:5,
        },
        370:{
          slidesPerView:1,
          spaceBetween:-20,
        },
        410: {
          slidesPerView: 1,
          spaceBetween:-70,
        },
        450:{
          slidesPerView:2,
          spaceBetween:5,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1340: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
      pagination: true,
      injectStyles: [
        `
        .swiper-pagination-bullet{
          width: 5px;
          height: 5px;
          background-color:gray;
        }
        `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <>
      <div className="flex flex-col p-4 m-4 md:flex-row mt-20">
        <div className="flex gap-5">
          {/* Text Section  */}
          <div className="mb-5">
            <p className="font-title text-3xl text-dark-green mt-10 mb-3">
              Featured Products
            </p>
            <p className="font-title text-[15px] mt-1">
              Discover our curated selection of standout pieces, handpicked for
              their exceptional quality and design.
            </p>
            <div className="font-title hidden md:block md:ml-[-1rem]">
              <Button
                content="Shop Now"
                textcolor="text-dark-green"
                bordercolor="border-dark-green"
                bgcolor="white"
              />
            </div>
          </div>
        </div>

        {/* Swiper Slider  */}
        <div>
          <swiper-container className="" ref={swiperRef} init="false">
            {data.products.map((product) => (
              <swiper-slide key={product.id}>
                <img src={product.imgSrc} alt="" className="rounded-md " />
                <p className="font-title text-[16px] ml-1 mt-1 font-medium ">
                  {product.name}
                </p>
                <p className="font-title text-[13px] ml-1 mb-7">
                  {product.price}
                </p>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>

        <div className="font-title mx-auto md:hidden">
          <Button
            content="Shop Now"
            textcolor="text-dark-green"
            bordercolor="border-dark-green"
            bgcolor="white"
          />
        </div>
      </div>
    </>
  );
};

export default Featured;
