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
export default function Activity1() {
  const data = [
    {
      src: "./pan india/activity1.jpeg",
    },
    {
      src: "./pan india/activity2.jpg",
    },
    {
      src: "./pan india/activity3.jpeg",
    },
    {
      src: "./pan india/activity4.jpeg",
    },
    {
      src: "./pan india/activity5.jpg",
    },
    {
      src: "./pan india/activity6.jpg",
    },
    {
      src: "./pan india/activity7.jpeg",
    },
    {
      src: "./pan india/activity8.jpeg",
    },
    {
      src: "./pan india/activity9.jpeg",
    },
  ];

  return (
    <div className="font-semibold text-4xl mt-15">
      <div>
        <div className="font-semibold text-orange-500 text-5xl mt-9">
          Our Students{" "}
          <div className="mt-5 text-4xl text-black">Work And Activities</div>
        </div>
      </div>
      <div className=" p-16 mb-16">
        <div className="container relative mx-auto">
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
                slidesPerView: 4,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className=" h-[10rem] "
          >
            {data.map(({ src }) => {
              return (
                <SwiperSlide className="h-[250px]">
                  <img src={src} alt="" className="w-[20px] h-[40px]" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <button class="bg-orange-500 hover:bg-black text-white font-semibold  text-xl py-1 px-6  rounded mt-8">
          View All Works
        </button>
      </div>
    </div>
  );
}
