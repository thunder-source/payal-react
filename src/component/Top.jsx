import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../carousel.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
export default function Work() {
  const data = [
    {
      src: "./top images/top.jpeg",
    },
    {
      src: "./top images/top1.jpeg",
    },
    {
      src: "./top images/top2.jpeg",
    },
    {
      src: "./top images/top3.jpeg",
    },
    {
      src: "./top images/top4.jpeg",
    },
    {
      src: "./top images/top.jpeg",
    },
    {
      src: "./top images/top4.jpeg",
    },
    {
      src: "./top images/top3.jpeg",
    },
    {
      src: "./top images/top2.jpeg",
    },
  ];

  return (
    <div className="font-semibold text-4xl mt-20">
      Top Design Colleges in India
      <div className=" p-16 mb-16">
        <div className="container relative mx-auto h-[300px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className=" h-[10rem] "
          >
            {data.map(({ src }) => {
              return (
                <SwiperSlide className="h-[300px]">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <button class="bg-orange-500 hover:bg-black text-white font-semibold  text-xl py-1 px-6  rounded mt-11">
          Apply Now
        </button>
      </div>
    </div>
  );
}
