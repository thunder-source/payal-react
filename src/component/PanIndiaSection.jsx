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
export default function PanIndiaSection() {
  const data = [
    {
      src: "./pan india/Jaipur.png",
    },
    {
      src: "./pan india/Jaipur.png",
    },
    {
      src: "./pan india/Jaipur.png",
    },
    {
      src: "./pan india/Jaipur.png",
    },
    {
      src: "./pan india/Jaipur.png",
    },
    {
      src: "./pan india/Jaipur.png",
    },
    {
      src: "./pan india/Jaipur.png",
    },
    {
      src: "./pan india/Jaipur.png",
    },
    {
      src: "./pan india/Jaipur.png",
    },
  ];

  return (
    <div className="font-semibold text-4xl">
      PAN INDIA NETWORK
      <div className="pahal_bg p-16 my-16 mt-8">
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
      </div>
    </div>
  );
}
