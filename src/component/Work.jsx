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
      src: "./pan india/nora.jpeg",
    },
    {
      src: "./pan india/work.jpeg",
    },
    {
      src: "./pan india/work1.jpeg",
    },
    {
      src: "./pan india/work3.jpeg",
    },
    {
      src: "./pan india/work4.jpeg",
    },
    {
      src: "./pan india/work5.jpeg",
    },
    {
      src: "./pan india/work6.jpeg",
    },
    {
      src: "./pan india/work7.jpeg",
    },
    {
      src: "./pan india/work8.jpeg",
    },
  ];

  return (
    <div className="font-semibold text-4xl mt-20">
      Best Design & Architecture Coaching Awards
      <div className=" p-16 mb-16">
        <div className="container relative mx-auto h-[400px]">
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
                <SwiperSlide className="h-[450px]">
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
      </div>
    </div>
  );
}
